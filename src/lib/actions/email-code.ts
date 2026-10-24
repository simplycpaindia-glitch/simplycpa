"use server";

import { randomInt } from "node:crypto";
import { z } from "zod";
import { AuthError, CredentialsSignin } from "next-auth";
import { prisma } from "@/lib/prisma";
import { signIn, MAX_CODE_ATTEMPTS } from "@/lib/auth";
import { sendEmail } from "@/lib/email";
import { verifyTurnstile } from "@/lib/turnstile";
import { clientIp, hashIp, hashLoginCode, safeCallbackPath } from "@/lib/journal/security";
import { DISPOSABLE_EMAIL_DOMAINS } from "@/lib/journal/wordlists";

const CODE_TTL_MINUTES = 10;
const PER_EMAIL_15_MIN = 3;
const PER_EMAIL_24_H = 10;
const PER_IP_1_H = 10;

const EmailSchema = z.string().trim().toLowerCase().email("Enter a valid email address.").max(254);

export type RequestCodeResult = { ok: true; email: string } | { ok: false; error: string };

export async function requestEmailCode(input: { email: string; turnstileToken?: string }): Promise<RequestCodeResult> {
  const parsed = EmailSchema.safeParse(input.email);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Enter a valid email address." };
  const email = parsed.data;

  const domain = email.split("@")[1] ?? "";
  if (DISPOSABLE_EMAIL_DOMAINS.some((d) => domain === d || domain.endsWith(`.${d}`))) {
    return { ok: false, error: "Please use a permanent email address, not a temporary inbox." };
  }

  const ip = await clientIp();
  if (!(await verifyTurnstile(input.turnstileToken, ip))) {
    return { ok: false, error: "We couldn't confirm you're not a bot. Please complete the check and try again." };
  }

  const ipHash = hashIp(ip);
  const now = Date.now();
  const [last15Min, last24H, ipLastHour] = await Promise.all([
    prisma.emailLoginCode.count({ where: { email, createdAt: { gte: new Date(now - 15 * 60_000) } } }),
    prisma.emailLoginCode.count({ where: { email, createdAt: { gte: new Date(now - 24 * 3_600_000) } } }),
    ipHash
      ? prisma.emailLoginCode.count({ where: { ipHash, createdAt: { gte: new Date(now - 3_600_000) } } })
      : Promise.resolve(0),
  ]);
  if (last15Min >= PER_EMAIL_15_MIN || last24H >= PER_EMAIL_24_H) {
    return { ok: false, error: "Too many codes have been requested for this email. Please wait 15 minutes and try again." };
  }
  if (ipLastHour >= PER_IP_1_H) {
    return { ok: false, error: "Too many sign-in attempts from your network. Please try again in an hour." };
  }

  // Housekeeping: codes older than 7 days are no longer needed for rate limiting.
  await prisma.emailLoginCode.deleteMany({ where: { createdAt: { lt: new Date(now - 7 * 24 * 3_600_000) } } });

  const code = randomInt(0, 1_000_000).toString().padStart(6, "0");

  // Only the newest code works: retire any earlier unused codes for this address.
  await prisma.$transaction([
    prisma.emailLoginCode.updateMany({ where: { email, usedAt: null }, data: { usedAt: new Date() } }),
    prisma.emailLoginCode.create({
      data: {
        email,
        codeHash: hashLoginCode(email, code),
        expiresAt: new Date(now + CODE_TTL_MINUTES * 60_000),
        ipHash,
      },
    }),
  ]);

  const sent = await sendEmail({
    to: email,
    subject: `${code} is your SimplyCPA sign-in code`,
    text: [
      `Your SimplyCPA sign-in code is ${code}.`,
      "",
      `It expires in ${CODE_TTL_MINUTES} minutes and can only be used once.`,
      "If you didn't request it, you can ignore this email — nobody can sign in without the code.",
      "",
      "SimplyCPA never asks for this code by phone, WhatsApp or email.",
    ].join("\n"),
    html: `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:480px;margin:auto;color:#05070d">
<p>Your SimplyCPA sign-in code is:</p>
<p style="font-size:32px;font-weight:700;letter-spacing:6px;margin:16px 0">${code}</p>
<p>It expires in ${CODE_TTL_MINUTES} minutes and can only be used once.</p>
<p style="color:#545c7c;font-size:13px">If you didn't request it, you can ignore this email — nobody can sign in without the code. SimplyCPA never asks for this code by phone, WhatsApp or email.</p>
</div>`,
  });
  if (!sent.ok) return { ok: false, error: sent.error };
  return { ok: true, email };
}

export type VerifyCodeResult = { ok: false; error: string } | undefined;

export async function verifyEmailCode(input: { email: string; code: string; callbackUrl?: string }): Promise<VerifyCodeResult> {
  try {
    await signIn("email-code", {
      email: input.email,
      code: input.code,
      redirectTo: afterSignIn(input.callbackUrl),
    });
  } catch (err) {
    if (err instanceof CredentialsSignin) {
      switch (err.code) {
        case "expired_code":
          return { ok: false, error: "That code has expired or was already used. Request a new one." };
        case "too_many_attempts":
          return { ok: false, error: `Too many wrong attempts (${MAX_CODE_ATTEMPTS}). Request a new code.` };
        default:
          return { ok: false, error: "That code isn't right. Check the latest email and try again." };
      }
    }
    if (err instanceof AuthError) return { ok: false, error: "Sign-in failed. Please try again." };
    throw err; // redirect after a successful sign-in
  }
  return undefined;
}

export async function signInWithGoogle(callbackUrl?: string) {
  await signIn("google", { redirectTo: afterSignIn(callbackUrl) });
}

/** New members pass through /welcome (which forwards straight on once set up). */
function afterSignIn(callbackUrl?: string) {
  return `/welcome?callbackUrl=${encodeURIComponent(safeCallbackPath(callbackUrl, "/what-i-studied"))}`;
}
