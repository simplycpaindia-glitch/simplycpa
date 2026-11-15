import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { FaqBrowser } from "@/components/faq/FaqBrowser";
import { faqCategoryBlurb, faqCategorySlug, sortFaqCategories } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "US CPA FAQs: Eligibility, Fees, Exam Format, Scores and Licensing",
  description:
    "Over 200 plain-English answers about the US CPA for Indian and international candidates: eligibility, state boards, fees, exam format, scores, the 2027 changes, preparation and careers.",
};

export default async function FaqPage() {
  const faqs = await prisma.fAQ.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ category: "asc" }, { order: "asc" }],
    select: { id: true, category: true, question: true, answer: true },
  });

  const names = sortFaqCategories([...new Set(faqs.map((f) => f.category))]);
  const categories = names.map((name) => {
    const inCategory = faqs.filter((f) => f.category === name);
    return {
      name,
      slug: faqCategorySlug(name),
      blurb: faqCategoryBlurb(name),
      count: inCategory.length,
      sample: inCategory.slice(0, 3).map((f) => f.question),
    };
  });

  // The answers themselves are marked up on each category page; this page lists the categories.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "US CPA frequently asked questions",
    url: `${SITE_URL}/faq`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, url: `${SITE_URL}/faq/${c.slug}` })),
    },
  };

  return (
    <Container className="py-16">
      <JsonLd data={jsonLd} />
      <SectionHeading
        as="h1"
        eyebrow="Knowledge Centre"
        title="Frequently asked questions"
        description={`${faqs.length} short answers, grouped by subject. Search them all, or pick a category. Where an answer depends on your state board, it says so and points you to the official source.`}
      />
      <div className="mt-10">
        <FaqBrowser faqs={faqs} categories={categories} />
      </div>
    </Container>
  );
}
