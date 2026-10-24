/**
 * Posts the next "Concept in 60 seconds" explainers from the official @simplycpa account.
 *
 *   npm run wall:official -- --dry-run   # check every post, show what would be posted
 *   npm run wall:official                # post the next ones, up to the 24-hour limit
 *
 * Rules it follows (the same as members):
 *   - at most POSTS_PER_24H posts in any 24 hours — run it again on later days for the rest
 *   - every post must pass the automatic checks (checkPost) with nothing blocked or held
 *   - a post already on the wall (same content hash) is never posted twice
 * Creates the @simplycpa account on first run (email from OFFICIAL_ACCOUNT_EMAIL, default
 * simplycpa.india@gmail.com — signing in with that address signs in as the official account).
 */
import "dotenv/config";
import { createHash } from "node:crypto";
import { prisma } from "../src/lib/prisma";
import { checkPost, fingerprintSource } from "../src/lib/journal/moderation";
import { GUIDELINES_VERSION, OFFICIAL_USERNAMES, POSTS_PER_24H } from "../src/lib/journal/constants";
import { officialWallPosts } from "./seed-data/official-wall-posts";

const dryRun = process.argv.includes("--dry-run");
const USERNAME = OFFICIAL_USERNAMES[0];
const EMAIL = (process.env.OFFICIAL_ACCOUNT_EMAIL ?? "simplycpa.india@gmail.com").toLowerCase();
const DAY_MS = 24 * 3_600_000;
// Must match lib/journal/security.ts contentHash (kept here so this script has no server-only imports).
const contentHash = (text: string) => createHash("sha256").update(fingerprintSource(text)).digest("hex");

async function officialAccount() {
  const existing = await prisma.user.findUnique({ where: { username: USERNAME } });
  if (existing) return existing;
  const emailTaken = await prisma.user.findUnique({ where: { email: EMAIL }, select: { username: true } });
  if (emailTaken) throw new Error(`${EMAIL} already belongs to @${emailTaken.username ?? "(no username)"} — set OFFICIAL_ACCOUNT_EMAIL to another address.`);
  if (dryRun) return null;
  const now = new Date();
  const user = await prisma.user.create({
    data: {
      email: EMAIL,
      name: "SimplyCPA",
      username: USERNAME,
      ageConfirmedAt: now,
      guidelinesAcceptedAt: now,
      guidelinesVersion: GUIDELINES_VERSION,
    },
  });
  console.log(`created account @${USERNAME} (${EMAIL})`);
  return user;
}

async function main() {
  // 1. Every post must pass the same automatic checks as a member's post.
  let problems = 0;
  const prepared = officialWallPosts.map((p, i) => {
    const r = checkPost(p.body);
    const issues = [...r.blocked.map((b) => `BLOCKED ${b.code}: ${b.message}`), ...r.held.map((h) => `HELD ${h.code}: ${h.message}`)];
    if (issues.length) {
      problems++;
      console.log(`post ${i + 1} (${p.tag}) fails the checks:\n  ${issues.join("\n  ")}`);
    }
    return { ...p, text: r.text, hash: contentHash(r.text), ok: issues.length === 0, n: i + 1 };
  });
  if (problems) {
    console.log(`\n${problems} post(s) need editing before anything is posted.`);
    process.exitCode = 1;
    return;
  }
  console.log(`all ${prepared.length} posts pass the automatic checks`);

  // 2. Work out what's already posted and how many the 24-hour limit allows now.
  const user = await officialAccount();
  const posted = user ? await prisma.journalPost.findMany({ where: { userId: user.id }, select: { contentHash: true, createdAt: true } }) : [];
  const postedHashes = new Set(posted.map((p) => p.contentHash));
  const inLast24h = posted.filter((p) => p.createdAt.getTime() > Date.now() - DAY_MS).length;
  const allowance = Math.max(0, POSTS_PER_24H - inLast24h);
  const queue = prepared.filter((p) => !postedHashes.has(p.hash));

  console.log(`already posted: ${prepared.length - queue.length}; posted in the last 24 hours: ${inLast24h}; can post now: ${allowance}`);
  const toPost = queue.slice(0, allowance);
  for (const p of toPost) {
    console.log(`${dryRun ? "would post" : "posting"} #${p.n} [${p.tag}] ${p.text.split("\n")[0]}`);
    if (!dryRun && user) {
      await prisma.journalPost.create({ data: { userId: user.id, body: p.text, tag: p.tag, status: "PUBLISHED", contentHash: p.hash } });
      await new Promise((r) => setTimeout(r, 1500)); // distinct timestamps so the feed order is stable
    }
  }
  const left = queue.length - toPost.length;
  console.log(left ? `\n${left} still to post — run again after the 24-hour window allows.` : "\nAll official posts are on the wall.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
