import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { LinkedText } from "@/components/content/LinkedText";
import { AboutSimplyCPA } from "@/components/content/AboutSimplyCPA";
import { faqCategoryBlurb, faqCategorySlug, sortFaqCategories } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";
import { formatDate } from "@/lib/utils";

/** All published FAQs, with the category this page is for picked out by its slug. */
async function load(slug: string) {
  const faqs = await prisma.fAQ.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ order: "asc" }, { question: "asc" }],
    select: { id: true, category: true, question: true, answer: true, updatedAt: true },
  });
  const names = sortFaqCategories([...new Set(faqs.map((f) => f.category))]);
  const name = names.find((n) => faqCategorySlug(n) === slug);
  return { name, names, faqs: faqs.filter((f) => f.category === name) };
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const { name, faqs } = await load(category);
  if (!name) return {};
  const blurb = faqCategoryBlurb(name);
  return {
    title: `US CPA FAQs: ${name}`,
    description: `${faqs.length} questions answered. ${blurb} Plain-English answers for Indian and international US CPA candidates.`.trim(),
    alternates: { canonical: `/faq/${category}` },
  };
}

export default async function FaqCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const { name, names, faqs } = await load(category);
  if (!name || faqs.length === 0) notFound();

  const url = `${SITE_URL}/faq/${category}`;
  const updated = faqs.reduce((m, f) => (f.updatedAt > m ? f.updatedAt : m), faqs[0].updatedAt);
  const index = names.indexOf(name);
  const prev = names[index - 1];
  const next = names[index + 1];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      url,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "FAQs", item: `${SITE_URL}/faq` },
        { "@type": "ListItem", position: 3, name, item: url },
      ],
    },
  ];

  return (
    <Container className="py-12 sm:py-16">
      <JsonLd data={jsonLd} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href="/" className="hover:text-ink-950">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/faq" className="hover:text-ink-950">FAQs</Link>
            <span aria-hidden>/</span>
            <span>{name}</span>
          </nav>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold-700">FAQs</p>
          <h1 className="font-display text-4xl font-medium text-ink-950 text-balance">{name}</h1>
          <p className="mt-3 leading-relaxed text-ink-400">
            {faqCategoryBlurb(name)} {faqs.length} {faqs.length === 1 ? "question" : "questions"} · Updated {formatDate(updated)}
          </p>

          <ol className="mt-6 flex flex-col gap-1.5 rounded-lg border border-ink-950/10 bg-paper-100 p-4 text-sm">
            {faqs.map((f, i) => (
              <li key={f.id}>
                <a href={`#q${i + 1}`} className="text-ink-800 hover:text-ink-950 hover:underline">
                  {f.question}
                </a>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col divide-y divide-ink-950/10">
            {faqs.map((f, i) => (
              <section key={f.id} id={`q${i + 1}`} className="scroll-mt-24 py-6 target:bg-gold-500/10">
                <h2 className="font-display text-xl font-medium leading-snug text-ink-950">{f.question}</h2>
                <p className="mt-2 leading-relaxed text-ink-800">
                  <LinkedText text={f.answer} />
                </p>
              </section>
            ))}
          </div>

          <nav aria-label="More categories" className="mt-8 flex flex-wrap justify-between gap-4 border-t border-ink-950/10 pt-6 text-sm">
            {prev ? (
              <Link href={`/faq/${faqCategorySlug(prev)}`} className="font-medium text-gold-700 underline underline-offset-2">
                ← {prev}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/faq/${faqCategorySlug(next)}`} className="font-medium text-gold-700 underline underline-offset-2">
                {next} →
              </Link>
            )}
          </nav>
          <AboutSimplyCPA />
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">All categories</p>
          <ul className="mt-3 flex flex-col gap-1 text-sm">
            {names.map((n) => (
              <li key={n}>
                {n === name ? (
                  <span aria-current="page" className="block rounded-md bg-paper-200 px-3 py-1.5 font-medium text-ink-950">
                    {n}
                  </span>
                ) : (
                  <Link href={`/faq/${faqCategorySlug(n)}`} className="block rounded-md px-3 py-1.5 text-ink-800 hover:bg-ink-950/5 hover:text-ink-950">
                    {n}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link href="/faq" className="mt-4 inline-block px-3 text-sm font-medium text-gold-700 underline underline-offset-2">
            Search all questions
          </Link>
        </aside>
      </div>
    </Container>
  );
}
