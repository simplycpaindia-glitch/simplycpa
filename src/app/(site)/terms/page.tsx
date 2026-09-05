import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <Container className="max-w-2xl py-16 prose-cpa">
      <h1 className="font-display text-3xl font-medium mb-6">Terms of Use</h1>

      <h2>Using SimplyCPA</h2>
      <p>
        By creating an account or using this site, you agree to use it for personal, non-commercial
        study purposes. You&apos;re responsible for keeping your login credentials secure.
      </p>

      <h2>Community guidelines</h2>
      <p>
        Discussion comments must stay on-topic, respectful, and free of spam or promotional
        content. We reserve the right to remove content or restrict accounts that violate this.
        Do not post copyrighted exam questions or paid prep-provider material in comments.
      </p>

      <h2>Content ownership</h2>
      <p>
        Study material, revision notes, and original MCQs on this site are the property of
        SimplyCPA unless otherwise credited. You may use them for your own study but not
        republish or resell them.
      </p>

      <h2>No warranty</h2>
      <p>
        The site is provided &ldquo;as is.&rdquo; See the Disclaimer page for details on the
        limits of what this site can promise about exam outcomes and the accuracy of
        time-sensitive information.
      </p>
    </Container>
  );
}
