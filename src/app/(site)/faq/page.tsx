import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { FaqBrowser } from "@/components/faq/FaqBrowser";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers on CPA eligibility, fees, exam structure, and the process for Indian candidates.",
};

export default async function FaqPage() {
  const faqs = await prisma.fAQ.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ category: "asc" }, { order: "asc" }],
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <Container className="py-16">
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SectionHeading
        eyebrow="Resources"
        title="Frequently asked questions"
        description="Search or filter by category. If your question about eligibility, fees, or licensing isn't answered here, it's likely because the answer depends on your specific state board — check the Official Sources page."
      />
      <div className="mt-10">
        <FaqBrowser
          faqs={faqs.map((f) => ({ id: f.id, category: f.category, question: f.question, answer: f.answer }))}
        />
      </div>
    </Container>
  );
}
