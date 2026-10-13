import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { SignInOptions } from "@/components/auth/SignInOptions";
import { getSignInMethods } from "@/lib/sign-in-methods";

export const metadata: Metadata = { title: "Create your free account" };

export default function RegisterPage() {
  const methods = getSignInMethods();
  return (
    <Container className="max-w-md py-20">
      <h1 className="font-display text-3xl font-medium mb-2">Create your free account</h1>
      <p className="mb-8 text-sm text-ink-400">
        Already studying with us?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
        .
      </p>
      <SignInOptions
        callbackUrl="/dashboard"
        googleEnabled={methods.google}
        emailEnabled={methods.emailCode}
        turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
      />
      <details open={!methods.google && !methods.emailCode} className="mt-8 rounded-lg border border-ink-950/10 p-4">
        <summary className="cursor-pointer text-sm font-medium text-ink-800">Or create an account with a password</summary>
        <div className="mt-4">
          <RegisterForm />
        </div>
      </details>
    </Container>
  );
}
