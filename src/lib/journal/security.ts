import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { headers } from "next/headers";
import { fingerprintSource } from "./moderation";

function secret() {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET must be set");
  return s;
}

/** Keyed hash so raw IP addresses are never stored, but repeat abuse can still be linked. */
export function hashIp(ip: string | null | undefined): string | null {
  if (!ip) return null;
  return createHmac("sha256", secret()).update(`ip:${ip}`).digest("hex").slice(0, 32);
}

/** The requesting client's IP from the platform's forwarding headers (Vercel sets these). */
export async function clientIp(): Promise<string | null> {
  try {
    const h = await headers();
    const forwarded = h.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0]!.trim() || null;
    return h.get("x-real-ip");
  } catch {
    return null; // not in a request scope
  }
}

export async function clientUserAgent(): Promise<string | null> {
  try {
    return (await headers()).get("user-agent")?.slice(0, 300) ?? null;
  } catch {
    return null;
  }
}

/** Hash of the post's letters and digits, used to reject copy-pasted duplicates. */
export function contentHash(text: string): string {
  return createHash("sha256").update(fingerprintSource(text)).digest("hex");
}

/** Sign-in codes are stored only as an HMAC bound to the email address. */
export function hashLoginCode(email: string, code: string): string {
  return createHmac("sha256", secret()).update(`login-code:${email}:${code}`).digest("hex");
}

export function safeEqualHex(a: string, b: string): boolean {
  const ba = Buffer.from(a, "hex");
  const bb = Buffer.from(b, "hex");
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

/** Only allow same-site relative paths as post-login destinations. */
export function safeCallbackPath(value: unknown, fallback = "/what-i-studied"): string {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) {
    return fallback;
  }
  return value;
}
