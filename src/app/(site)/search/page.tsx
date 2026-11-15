import type { Metadata } from "next";
import { faqCategorySlug } from "@/lib/faq";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SearchBox } from "@/components/site/SearchBox";
import { pulseArticles, pulseCategory } from "@/lib/pulse";
import { TOOLS } from "@/lib/tools";
import { BOARDS } from "@/lib/state-boards";
import { glossary } from "@/lib/glossary";

/** Case-insensitive match of every word in the query against the given text. */
const matcher = (query: string) => {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  return (...text: string[]) => {
    const hay = text.join(" ").toLowerCase();
    return words.length > 0 && words.every((w) => hay.includes(w));
  };
};

export const metadata: Metadata = {
  title: "Search",
  // Search result pages are for visitors, not search engines.
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const results = query
    ? await Promise.all([
        prisma.topic.findMany({
          where: {
            isComingSoon: false,
            OR: [
              { title: { contains: query, mode: "insensitive" } },
              { shortDescription: { contains: query, mode: "insensitive" } },
            ],
          },
          include: { subject: true },
          take: 10,
        }),
        prisma.mCQ.findMany({
          where: { status: "PUBLISHED", question: { contains: query, mode: "insensitive" } },
          include: { topic: { include: { subject: true } } },
          take: 8,
        }),
        prisma.fAQ.findMany({
          where: {
            status: "PUBLISHED",
            OR: [
              { question: { contains: query, mode: "insensitive" } },
              { answer: { contains: query, mode: "insensitive" } },
            ],
          },
          take: 8,
        }),
        prisma.blogPost.findMany({
          where: { status: "PUBLISHED", title: { contains: query, mode: "insensitive" } },
          take: 5,
        }),
      ])
    : [[], [], [], []];

  const [topics, mcqs, faqs, posts] = results;

  // Pages that live in code rather than the database: tools, state boards, news and glossary terms.
  const matches = matcher(query);
  const tools = query ? TOOLS.filter((t) => matches(t.name, t.blurb)) : [];
  const boards = query ? BOARDS.filter((b) => matches(b.name, "state board cpa exam requirements")) : [];
  const stories = query ? pulseArticles.filter((a) => matches(a.title, a.summary)).slice(0, 5) : [];
  const terms = query ? glossary.filter((t) => matches(t.term)).slice(0, 6) : [];
  const totalCount = topics.length + mcqs.length + faqs.length + posts.length + tools.length + boards.length + stories.length + terms.length;

  return (
    <Container className="py-14 max-w-2xl">
      <SectionHeading as="h1" eyebrow="Search" title="Search SimplyCPA" />
      <div className="mt-6">
        <SearchBox />
      </div>

      {query && (
        <p className="mt-6 text-sm text-ink-400">
          {totalCount} result{totalCount === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
        </p>
      )}

      {query && totalCount === 0 && (
        <p className="mt-8 text-sm text-ink-400">
          No results. Try a shorter or more general term (e.g. &ldquo;leases&rdquo; instead of
          &ldquo;lease classification criteria&rdquo;).
        </p>
      )}

      {tools.length > 0 && (
        <ResultSection title="Tools">
          {tools.map((t) => (
            <ResultRow key={t.href} href={t.href} tag="Tool" title={t.name} body={t.blurb} />
          ))}
        </ResultSection>
      )}

      {boards.length > 0 && (
        <ResultSection title="State boards">
          {boards.map((b) => (
            <ResultRow key={b.slug} href={`/state-boards/${b.slug}`} tag="State board" title={`${b.name}: CPA Exam requirements`} body={b.summary} />
          ))}
        </ResultSection>
      )}

      {stories.length > 0 && (
        <ResultSection title="The CPA Pulse">
          {stories.map((a) => (
            <ResultRow key={a.slug} href={`/pulse/${a.slug}`} tag={pulseCategory(a.category).name} title={a.title} body={a.summary} />
          ))}
        </ResultSection>
      )}

      {topics.length > 0 && (
        <ResultSection title="Topics">
          {topics.map((t) => (
            <ResultRow
              key={t.id}
              href={`/cpa/${t.subject.slug}/${t.slug}`}
              tag={t.subject.shortName}
              title={t.title}
              body={t.shortDescription}
            />
          ))}
        </ResultSection>
      )}

      {mcqs.length > 0 && (
        <ResultSection title="MCQs">
          {mcqs.map((m) => (
            <ResultRow
              key={m.id}
              href={`/cpa/${m.topic.subject.slug}/${m.topic.slug}#mcqs`}
              tag={m.topic.subject.shortName}
              title={m.question}
              body={m.topic.title}
            />
          ))}
        </ResultSection>
      )}

      {faqs.length > 0 && (
        <ResultSection title="FAQs">
          {faqs.map((f) => (
            <ResultRow key={f.id} href={`/faq/${faqCategorySlug(f.category)}`} tag={f.category} title={f.question} body={f.answer} />
          ))}
        </ResultSection>
      )}

      {terms.length > 0 && (
        <ResultSection title="Glossary">
          {terms.map((t) => (
            <ResultRow key={t.slug} href={`/glossary/${t.slug}`} tag="Term" title={t.term} body={t.definition} />
          ))}
        </ResultSection>
      )}

      {posts.length > 0 && (
        <ResultSection title="Articles">
          {posts.map((p) => (
            <ResultRow key={p.id} href={`/blog/${p.slug}`} tag={p.category} title={p.title} body={p.excerpt} />
          ))}
        </ResultSection>
      )}
    </Container>
  );
}

function ResultSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">{title}</p>
      <div className="flex flex-col divide-y divide-ink-950/10">{children}</div>
    </div>
  );
}

function ResultRow({ href, tag, title, body }: { href: string; tag: string; title: string; body: string }) {
  return (
    <Link href={href} className="py-3 hover:bg-ink-950/[0.02] -mx-2 px-2 rounded-md">
      <div className="flex items-center gap-2">
        <Badge tone="neutral">{tag}</Badge>
      </div>
      <p className="mt-1.5 text-sm font-medium text-ink-950 line-clamp-1">{title}</p>
      <p className="text-xs text-ink-400 line-clamp-1">{body}</p>
    </Link>
  );
}
