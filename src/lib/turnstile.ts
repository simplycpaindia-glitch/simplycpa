import "server-only";

/**
 * Cloudflare Turnstile bot check (free). Enforced only when both keys are set:
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY and TURNSTILE_SECRET_KEY.
 */
export function isTurnstileEnabled() {
  return !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !!process.env.TURNSTILE_SECRET_KEY;
}

export async function verifyTurnstile(token: unknown, ip: string | null): Promise<boolean> {
  if (!isTurnstileEnabled()) return true;
  if (typeof token !== "string" || !token) return false;
  try {
    const body = new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY!, response: token });
    if (ip) body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(8_000),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false; // fail closed: if the check can't run, don't send a code
  }
}
