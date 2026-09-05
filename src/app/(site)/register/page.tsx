import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = { title: "Create your free account" };

export default function RegisterPage() {
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
      <RegisterForm />
    </Container>
  );
}
