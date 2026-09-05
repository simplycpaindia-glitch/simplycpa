import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <Container className="max-w-2xl py-16 prose-cpa">
      <h1 className="font-display text-3xl font-medium mb-6">Disclaimer</h1>

      <h2>Independent educational resource</h2>
      <p>
        SimplyCPA is an independent educational resource created to help candidates — primarily
        Indian CA students, commerce graduates, and working professionals — prepare for the US
        CPA Exam. SimplyCPA is not affiliated with, endorsed by, or officially connected to the
        AICPA, CIMA, NASBA, Prometric, or any State Board of Accountancy, unless a specific page
        explicitly states otherwise.
      </p>

      <h2>No guarantee of exam success</h2>
      <p>
        Studying with SimplyCPA does not guarantee that you will pass any section of the CPA
        Exam, meet eligibility requirements, or obtain a CPA license. Outcomes depend on many
        factors specific to you, including your background, effort, and your state board&apos;s
        individual requirements.
      </p>

      <h2>Content can become outdated</h2>
      <p>
        CPA Exam blueprints, fees, eligibility requirements, and licensing rules change over
        time and vary by jurisdiction. Where content on this site reflects a fact that can
        change, we show a &ldquo;last verified&rdquo; date. Always confirm current requirements,
        deadlines, and fees directly with AICPA, NASBA, and your chosen State Board of
        Accountancy before making decisions or payments based on anything you read here.
      </p>

      <h2>Not financial, tax, or legal advice</h2>
      <p>
        Nothing on this site constitutes personalized investment, financial, tax, immigration,
        or legal advice. Tax-related study material is written for exam preparation purposes and
        may not reflect the current tax year&apos;s rules for real-world filing.
      </p>

      <h2>Practice questions</h2>
      <p>
        MCQs on this site are original practice questions written to resemble the style and
        reasoning level of CPA Exam questions, unless a question is explicitly and clearly
        labeled as an official AICPA retired or sample question with its source linked. We do
        not reproduce copyrighted, restricted, or non-public CPA Exam questions.
      </p>
    </Container>
  );
}
