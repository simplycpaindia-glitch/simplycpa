import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { McqPractice } from "@/components/practice/McqPractice";
import { getTerm, glossary, pickQuestions } from "@/lib/glossary";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: t.slug }));
}

async function getData(slug: string) {
  const term = getTerm(slug);
  if (!term) return null;
  const topic = await prisma.topic.findFirst({
    where: { slug: term.topic, subject: { slug: term.section } },
    select: {
      id: true,
      slug: true,
      title: true,
      subject: { select: { slug: true, shortName: true } },
      mcqs: {
        where: { status: "PUBLISHED" },
        orderBy: { createdAt: "asc" },
        select: { id: true, question: true, difficulty: true, tags: true, options: { select: { id: true, label: true, text: true }, orderBy: { label: "asc" } } },
      },
    },
  });
  return { term, topic };
}

export async function generateMetadata({ params }: PageProps<"/glossary/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return {};
  const description = term.definition.length > 155 ? `${term.definition.slice(0, 152).replace(/\s+\S*$/, "")}…` : term.definition;
  // Keep titles near 60 characters: drop the suffix for long terms.
  const full = `What Is ${term.term}? CPA Exam Definition`;
  return {
    title: full.length <= 60 ? full : `What Is ${term.term}?`,
    description,
    alternates: { canonical: `/glossary/${term.slug}` },
  };
}

export default async function GlossaryTermPage({ params }: PageProps<"/glossary/[slug]">) {
  const { slug } = await params;
  const data = await getData(slug);
  if (!data) notFound();
  const { term, topic } = data;
  const questions = topic ? pickQuestions(term, topic.mcqs) : [];
  const related = (term.related ?? []).map(getTerm).filter((t) => t !== undefined);
  const sectionName = topic?.subject.shortName ?? term.section.toUpperCase();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: term.term,
      description: term.definition,
      url: `${SITE_URL}/glossary/${term.slug}`,
      inDefinedTermSet: `${SITE_URL}/glossary`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE_URL}/glossary` },
        { "@type": "ListItem", position: 3, name: term.term, item: `${SITE_URL}/glossary/${term.slug}` },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b border-ink-950/10 bg-paper-100 py-8">
        <Container className="max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href="/glossary" className="hover:text-ink-950">Glossary</Link>
            <span>/</span>
            <span className="text-ink-950">{term.term}</span>
          </div>
          <h1 className="font-display text-3xl font-medium text-balance text-ink-950">What is {term.term}?</h1>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Badge tone="neutral">{sectionName}</Badge>
            {topic && (
              <Link href={`/cpa/${topic.subject.slug}/${topic.slug}`} className="underline underline-offset-2 hover:text-ink-950">
                {topic.title}
              </Link>
            )}
          </div>
        </Container>
      </div>

      <Container className="max-w-3xl py-10">
        <div className="rounded-lg border-l-4 border-gold-500 bg-paper-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">In short</p>
          <p className="mt-2 leading-relaxed text-ink-950">{term.definition}</p>
        </div>

        <section aria-labelledby="takeaways" className="mt-8">
          <h2 id="takeaways" className="font-display text-xl font-medium text-ink-950">Key takeaways</h2>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-ink-800">
            {term.takeaways.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {term.example && (
          <section aria-labelledby="example" className="mt-8">
            <h2 id="example" className="font-display text-xl font-medium text-ink-950">Example</h2>
            <p className="mt-3 leading-relaxed text-ink-800">{term.example}</p>
          </section>
        )}

        {topic && (
          <section aria-labelledby="tested" className="mt-8">
            <h2 id="tested" className="font-display text-xl font-medium text-ink-950">Where it&apos;s tested</h2>
            <p className="mt-3 leading-relaxed text-ink-800">
              {sectionName}:{" "}
              <Link href={`/cpa/${topic.subject.slug}/${topic.slug}`} className="font-medium underline underline-offset-2">
                {topic.title}
              </Link>{" "}
              — study notes, a five-minute revision sheet and practice questions.
            </p>
          </section>
        )}

        {questions.length > 0 && topic && (
          <section aria-labelledby="practice" className="mt-10">
            <h2 id="practice" className="font-display text-xl font-medium text-ink-950">Practise: {questions.length} questions</h2>
            <div className="mt-4">
              <McqPractice
                topicId={topic.id}
                questions={questions.map((q) => ({ id: q.id, question: q.question, difficulty: q.difficulty, options: q.options }))}
              />
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section aria-labelledby="related" className="mt-10 border-t border-ink-950/10 pt-6">
            <h2 id="related" className="font-display text-lg font-medium text-ink-950">Related terms</h2>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/glossary/${r.slug}`} className="underline underline-offset-2 hover:text-ink-950">{r.term}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-10 text-sm text-ink-400">
          <Link href="/glossary" className="underline underline-offset-2 hover:text-ink-950">Browse all {glossary.length} terms</Link>
        </p>
      </Container>
    </>
  );
}
