import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { GlossaryIndex } from "@/components/glossary/GlossaryIndex";
import { glossary, initial } from "@/lib/glossary";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "CPA Exam Glossary — Key Terms Explained Simply",
  description: `${glossary.length} US CPA Exam terms explained in plain English, each with key takeaways, an example and practice questions — from CECL and goodwill to materiality and the alternative minimum tax.`,
  alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
  const entries = glossary.map((t) => ({ slug: t.slug, term: t.term, section: t.section, letter: initial(t), summary: t.definition }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${SITE_URL}/glossary`,
    name: "SimplyCPA CPA Exam Glossary",
    url: `${SITE_URL}/glossary`,
    hasDefinedTerm: glossary.map((t) => ({ "@type": "DefinedTerm", name: t.term, url: `${SITE_URL}/glossary/${t.slug}` })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container>
          <h1 className="font-display text-4xl font-medium text-ink-950">CPA Exam glossary</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            Plain-English definitions of the terms the US CPA Exam tests. Each page gives the definition first, then the key
            takeaways, an example where it helps, the topic where it&apos;s tested and three practice questions.
          </p>
        </Container>
      </div>
      <Container className="py-10">
        <GlossaryIndex entries={entries} />
      </Container>
    </>
  );
}
