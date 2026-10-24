"use client";

import { useState, useTransition } from "react";
import Script from "next/script";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { requestEmailCode, signInWithGoogle, verifyEmailCode } from "@/lib/actions/email-code";

/**
 * Passwordless sign-in: "Continue with Google" or a 6-digit code sent by email.
 * New members are created on first sign-in and then asked to pick a username.
 */
export function SignInOptions({
  callbackUrl,
  googleEnabled,
  emailEnabled,
  turnstileSiteKey,
}: {
  callbackUrl?: string;
  googleEnabled: boolean;
  emailEnabled: boolean;
  turnstileSiteKey?: string;
}) {
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function sendCode(form: HTMLFormElement) {
    setError(null);
    const data = new FormData(form);
    startTransition(async () => {
      const res = await requestEmailCode({
        email: String(data.get("email") ?? ""),
        turnstileToken: String(data.get("cf-turnstile-response") ?? ""),
      });
      if (!res.ok) {
        setError(res.error);
        resetTurnstile();
        return;
      }
      setEmail(res.email);
      setStep("code");
      setInfo(`We've sent a 6-digit code to ${res.email}. It expires in 10 minutes.`);
    });
  }

  function submitCode() {
    setError(null);
    startTransition(async () => {
      const res = await verifyEmailCode({ email, code, callbackUrl });
      if (res && !res.ok) setError(res.error);
    });
  }

  if (!googleEnabled && !emailEnabled) {
    return (
      <p className="rounded-lg bg-paper-100 px-4 py-3 text-sm text-ink-800">
        Passwordless sign-in (Google and email codes) is being set up and will be available shortly. For now, please
        log in with a password below.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {googleEnabled && (
        <>
          <form action={signInWithGoogle.bind(null, callbackUrl)}>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-ink-950/15 bg-paper-50 px-4 py-2.5 text-sm font-medium text-ink-950 hover:bg-ink-950/[0.03]"
            >
              <GoogleMark />
              Continue with Google
            </button>
          </form>
          {emailEnabled && (
            <div className="flex items-center gap-3 text-xs text-ink-400">
              <span className="h-px flex-1 bg-ink-950/10" />
              or get a code by email
              <span className="h-px flex-1 bg-ink-950/10" />
            </div>
          )}
        </>
      )}

      {!emailEnabled ? null : step === "email" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendCode(e.currentTarget);
          }}
          className="flex flex-col gap-3"
        >
          <label htmlFor="signin-email" className="text-sm font-medium text-ink-950">
            Email address
          </label>
          <input
            id="signin-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            defaultValue={email}
            className="w-full rounded-lg border border-ink-950/15 px-3.5 py-2.5 text-sm outline-none focus:border-ink-950/40"
          />
          {turnstileSiteKey && (
            <>
              <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
              <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light" />
            </>
          )}
          <Button type="submit" disabled={pending}>
            <Mail className="h-4 w-4" aria-hidden />
            {pending ? "Sending…" : "Email me a sign-in code"}
          </Button>
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitCode();
          }}
          className="flex flex-col gap-3"
        >
          {info && <p className="rounded-lg bg-signal-green/10 px-3 py-2 text-sm text-signal-green">{info}</p>}
          <label htmlFor="signin-code" className="text-sm font-medium text-ink-950">
            6-digit code
          </label>
          <input
            id="signin-code"
            name="code"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{6}"
            maxLength={6}
            required
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
            className="w-full rounded-lg border border-ink-950/15 px-3.5 py-2.5 text-center font-mono text-xl tracking-[0.5em] outline-none focus:border-ink-950/40"
          />
          <Button type="submit" disabled={pending || code.length !== 6}>
            {pending ? "Checking…" : "Sign in"}
          </Button>
          <button
            type="button"
            onClick={() => {
              setStep("email");
              setCode("");
              setError(null);
              setInfo(null);
            }}
            className="text-xs text-ink-400 underline"
          >
            Use a different email or send a new code
          </button>
        </form>
      )}

      {error && (
        <p role="alert" className="rounded-lg bg-signal-red/10 px-3 py-2 text-sm text-signal-red">
          {error}
        </p>
      )}

      <p className="text-xs leading-relaxed text-ink-400">
        We record each sign-in (time, method and a one-way hash of your IP address) to protect accounts and
        the community. Your email is never shown to other members. See our{" "}
        <a href="/privacy" className="underline">privacy policy</a>.
      </p>
    </div>
  );
}

function resetTurnstile() {
  const w = window as unknown as { turnstile?: { reset: () => void } };
  w.turnstile?.reset();
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}
