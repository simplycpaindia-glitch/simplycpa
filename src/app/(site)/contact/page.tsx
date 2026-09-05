import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container className="max-w-2xl py-16 prose-cpa">
      <h1 className="font-display text-3xl font-medium mb-6">Contact</h1>
      <p>
        Found an error in the study material, spotted an outdated fee, or have feedback on a
        topic? Reach out at{" "}
        <a href="mailto:hello@simplycpa.example">hello@simplycpa.example</a> — corrections to
        exam-accuracy issues are prioritized.
      </p>
    </Container>
  );
}
