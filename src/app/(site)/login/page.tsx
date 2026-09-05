import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Log in" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl } = await searchParams;
  return (
    <Container className="max-w-md py-20">
      <h1 className="font-display text-3xl font-medium mb-2">Log in</h1>
      <p className="mb-8 text-sm text-ink-400">
        New here?{" "}
        <Link href="/register" className="underline">
          Create a free account
        </Link>
        .
      </p>
      <LoginForm callbackUrl={callbackUrl} />
    </Container>
  );
}
