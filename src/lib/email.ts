import "server-only";

/**
 * Transactional email (sign-in codes only, for now) through Resend's HTTP API.
 * Configure RESEND_API_KEY and EMAIL_FROM (an address on a domain verified in Resend).
 *
 * Without RESEND_API_KEY: in development the message is printed to the server log so
 * the flow can be tested; in production sending fails and the UI says so — it never
 * pretends an email was sent.
 */
export function isEmailConfigured() {
  return !!process.env.RESEND_API_KEY && !!process.env.EMAIL_FROM;
}

export async function sendEmail(input: { to: string; subject: string; text: string; html: string }) {
  if (!isEmailConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`\n[email:dev] To: ${input.to}\n[email:dev] Subject: ${input.subject}\n${input.text}\n`);
      return { ok: true as const, dev: true };
    }
    return { ok: false as const, error: "Email sign-in isn't available right now." };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM,
      to: [input.to],
      subject: input.subject,
      text: input.text,
      html: input.html,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) {
    console.error("Resend send failed", res.status, await res.text().catch(() => ""));
    if (res.status === 429) {
      // Rate limit or the plan's daily quota (Resend's free plan: 100 emails/day, reset at 00:00 UTC).
      return {
        ok: false as const,
        error: "Email sign-in is very busy right now. Please use “Continue with Google”, or try again in a few hours (the daily limit resets at 5:30 am IST).",
      };
    }
    return { ok: false as const, error: "We couldn't send the email. Please try again shortly." };
  }
  return { ok: true as const, dev: false };
}
