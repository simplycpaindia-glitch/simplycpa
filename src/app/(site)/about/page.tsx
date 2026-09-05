import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="max-w-2xl py-16 prose-cpa">
      <h1 className="font-display text-3xl font-medium mb-6">About SimplyCPA</h1>
      <p>
        SimplyCPA exists because the US CPA Exam is well documented by AICPA and NASBA, but
        poorly organized for the specific questions Indian candidates actually have — which
        state to pick, whether it&apos;s worth it after CA, what it really costs, and how to
        study for it without buying a five-figure prep package on day one.
      </p>
      <p>
        This site organizes the exam the way you&apos;ll actually study it: section by section,
        topic by topic, with study material, short revision notes, and practice MCQs in one
        place — built and maintained by someone studying for the exam themselves.
      </p>
      <p>
        Content is written and reviewed against AICPA&apos;s official Blueprints and NASBA&apos;s
        published guidance wherever possible; anything that can change over time (fees,
        eligibility, deadlines) is tracked with a source and a last-verified date rather than
        stated as a fixed fact.
      </p>
    </Container>
  );
}
