import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignInOptions } from "@/components/auth/SignInOptions";
import { getSignInMethods } from "@/lib/sign-in-methods";
import { safeCallbackPath } from "@/lib/journal/security";

export const metadata: Metadata = { title: "Log in" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl: raw } = await searchParams;
  const callbackUrl = safeCallbackPath(raw, "/dashboard");
  const methods = getSignInMethods();
  return (
    <Container className="max-w-md py-20">
      <h1 className="font-display text-3xl font-medium mb-2">Log in or sign up</h1>
      <p className="mb-8 text-sm text-ink-400">
        {methods.google || methods.emailCode
          ? "No password needed — new accounts are created automatically the first time you sign in."
          : "Log in with your email and password, or create a free account."}
      </p>
      <SignInOptions
        callbackUrl={callbackUrl}
        googleEnabled={methods.google}
        emailEnabled={methods.emailCode}
        turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
      />
      <details open={!methods.google && !methods.emailCode} className="mt-8 rounded-lg border border-ink-950/10 p-4">
        <summary className="cursor-pointer text-sm font-medium text-ink-800">Have a password? Log in with it</summary>
        <div className="mt-4">
          <LoginForm callbackUrl={callbackUrl} />
          <p className="mt-4 text-xs text-ink-400">
            Prefer a password account?{" "}
            <Link href="/register" className="underline">
              Create one
            </Link>
            .
          </p>
        </div>
      </details>
    </Container>
  );
}
