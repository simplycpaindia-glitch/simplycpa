/**
 * Checks that the community sign-in services are configured correctly.
 *
 *   npm run check:community                     # read-only checks
 *   npm run check:community -- --send-test you@example.com   # also sends one test email
 *
 * Reads the same environment variables the site uses (from .env locally). Nothing is
 * written anywhere; the only side effect is the optional test email.
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

type Result = { name: string; ok: boolean | "skip"; detail: string };
const results: Result[] = [];
const add = (name: string, ok: Result["ok"], detail: string) => results.push({ name, ok, detail });
const env = (k: string) => (process.env[k] ?? "").trim();

async function checkCore() {
  const secret = env("AUTH_SECRET");
  add("AUTH_SECRET", secret.length >= 32, secret ? `${secret.length} characters` : "missing");

  const site = env("NEXT_PUBLIC_SITE_URL") || "(not set)";
  add("NEXT_PUBLIC_SITE_URL", site !== "(not set)", site);
  const base = site.startsWith("http") ? site.replace(/\/$/, "") : "https://simplycpa.in";
  add("Google redirect URI to register", "skip", `${base}/api/auth/callback/google`);
}

async function checkDatabase() {
  if (!env("DATABASE_URL")) return add("Database", false, "DATABASE_URL missing");
  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: env("DATABASE_URL") }) });
  try {
    await prisma.journalPost.count();
    await prisma.signInEvent.count();
    add("Database community tables", true, "migration applied");
  } catch (e) {
    add("Database community tables", false, `not found — run "npx prisma migrate deploy" (${(e as Error).message.split("\n")[0]})`);
  }
  try {
    await prisma.journalPost.findFirst({ select: { studyHours: true, aiVerdict: true } });
    add("Database phase 2 columns", true, "migration applied");
  } catch {
    add("Database phase 2 columns", false, 'study hours / AI columns missing — run "npx prisma migrate deploy"');
  } finally {
    await prisma.$disconnect();
  }
}

function checkGoogle() {
  const id = env("AUTH_GOOGLE_ID");
  const secret = env("AUTH_GOOGLE_SECRET");
  if (!id && !secret) return add("Google sign-in", "skip", "not configured — the Google button stays hidden");
  add("AUTH_GOOGLE_ID format", /\.apps\.googleusercontent\.com$/.test(id), id ? "should end in .apps.googleusercontent.com" : "missing");
  add("AUTH_GOOGLE_SECRET present", secret.length > 10, secret ? (secret.startsWith("GOCSPX-") ? "looks like a Google client secret" : "unusual format — double-check it") : "missing");
  add("Google end-to-end", "skip", "can only be proven by signing in once on the live site");
}

async function checkResend(sendTo?: string) {
  const key = env("RESEND_API_KEY");
  const from = env("EMAIL_FROM");
  if (!key && !from) return add("Email codes (Resend)", "skip", "not configured — email-code sign-in stays hidden in production");
  add("RESEND_API_KEY present", key.startsWith("re_"), key ? "starts with re_" : "missing");
  const fromDomain = from.match(/@([^>\s]+)/)?.[1]?.toLowerCase() ?? "";
  add("EMAIL_FROM", !!fromDomain, from || "missing (e.g. SimplyCPA <signin@mail.simplycpa.in>)");
  if (!key) return;

  const res = await fetch("https://api.resend.com/domains", { headers: { Authorization: `Bearer ${key}` } });
  if (res.status === 401 || res.status === 403) {
    const body = await res.text();
    // Sending-only keys can't list domains; that's fine — fall back to the test email.
    if (/restricted|permission/i.test(body)) add("Resend API key", true, "valid (sending-only key; domain list not readable)");
    else add("Resend API key", false, `rejected by Resend (${res.status})`);
  } else if (!res.ok) {
    add("Resend API key", false, `Resend returned ${res.status}`);
  } else {
    add("Resend API key", true, "valid");
    const data = (await res.json()) as { data?: { name: string; status: string }[] };
    const domain = data.data?.find((d) => fromDomain === d.name || fromDomain.endsWith(`.${d.name}`));
    if (!domain) add("Sending domain", false, `${fromDomain || "EMAIL_FROM domain"} is not added in Resend`);
    else add("Sending domain", domain.status === "verified", `${domain.name}: ${domain.status}${domain.status === "verified" ? "" : " — DNS records not verified yet"}`);
  }

  if (sendTo) {
    const send = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [sendTo],
        subject: "SimplyCPA test email",
        text: "If you can read this, SimplyCPA can send sign-in codes.",
      }),
    });
    add(`Test email to ${sendTo}`, send.ok, send.ok ? "sent — check the inbox (and spam folder)" : `failed: ${send.status} ${await send.text()}`);
  }
}

async function checkTurnstile() {
  const site = env("NEXT_PUBLIC_TURNSTILE_SITE_KEY");
  const secret = env("TURNSTILE_SECRET_KEY");
  if (!site && !secret) return add("Turnstile bot check", "skip", "not configured (optional)");
  if (!site || !secret) return add("Turnstile bot check", false, "both NEXT_PUBLIC_TURNSTILE_SITE_KEY and TURNSTILE_SECRET_KEY are needed");
  // A dummy token is always invalid; the error code tells us whether the secret itself is valid.
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: "config-check" }),
  });
  const data = (await res.json()) as { "error-codes"?: string[] };
  const codes = data["error-codes"] ?? [];
  if (codes.includes("invalid-input-secret")) add("Turnstile secret", false, "rejected by Cloudflare");
  else add("Turnstile secret", true, "accepted by Cloudflare");
}

async function checkAnthropic() {
  const key = env("ANTHROPIC_API_KEY");
  const model = env("MODERATION_MODEL") || "claude-haiku-5-5";
  if (!key) return add("AI post check (Anthropic)", "skip", "not configured — posts get the automatic word checks only");
  // Looking up the model is free and proves both the key and the model name.
  const res = await fetch(`https://api.anthropic.com/v1/models/${encodeURIComponent(model)}`, {
    headers: { "x-api-key": key, "anthropic-version": "2023-06-01" },
  });
  if (res.status === 401 || res.status === 403) add("ANTHROPIC_API_KEY", false, `rejected by Anthropic (${res.status})`);
  else if (res.status === 404) add("MODERATION_MODEL", false, `"${model}" not found — check the model name`);
  else add("AI post check (Anthropic)", res.ok, res.ok ? `key valid, model ${model}` : `Anthropic returned ${res.status}`);

}

async function checkAlertRecipients() {
  const configured = env("MODERATOR_ALERT_EMAILS").split(",").map((e) => e.trim()).filter(Boolean);
  if (configured.length) return add("Moderator alert emails", configured.every((e) => /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(e)), `sent to ${configured.join(", ")}`);
  if (!env("DATABASE_URL")) return add("Moderator alert emails", false, "MODERATOR_ALERT_EMAILS not set");
  // Fallback is every ADMIN/MODERATOR account; seed accounts often use addresses that can't receive mail.
  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: env("DATABASE_URL") }) });
  try {
    const staff = (await prisma.user.findMany({ where: { role: { in: ["ADMIN", "MODERATOR"] } }, select: { email: true } })).map((u) => u.email);
    const deliverable = staff.filter((e) => !/\.(local|test|example|invalid|localhost)$/i.test(e) && !/@example\.(com|org|net)$/i.test(e));
    add(
      "Moderator alert emails",
      deliverable.length > 0,
      deliverable.length
        ? `MODERATOR_ALERT_EMAILS not set — sent to staff accounts: ${deliverable.join(", ")}`
        : `MODERATOR_ALERT_EMAILS not set and no staff account has a real address (${staff.join(", ") || "none"}) — set MODERATOR_ALERT_EMAILS`,
    );
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  const sendIdx = process.argv.indexOf("--send-test");
  const sendTo = sendIdx > -1 ? process.argv[sendIdx + 1] : undefined;

  await checkCore();
  await checkDatabase();
  checkGoogle();
  await checkResend(sendTo);
  await checkTurnstile();
  await checkAnthropic();
  await checkAlertRecipients();

  for (const r of results) {
    const mark = r.ok === "skip" ? "•" : r.ok ? "✓" : "✗";
    console.log(`${mark} ${r.name}: ${r.detail}`);
  }
  const failed = results.filter((r) => r.ok === false).length;
  console.log(failed ? `\n${failed} problem(s) to fix.` : "\nNo problems found.");
  if (failed) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
