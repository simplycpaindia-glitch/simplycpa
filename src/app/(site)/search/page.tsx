import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SearchBox } from "@/components/site/SearchBox";

export const metadata: Metadata = { title: "Search" };

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
  const totalCount = topics.length + mcqs.length + faqs.length + posts.length;

  return (
    <Container className="py-14 max-w-2xl">
      <SectionHeading eyebrow="Search" title="Search SimplyCPA" />
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
            <ResultRow key={f.id} href="/faq" tag={f.category} title={f.question} body={f.answer} />
          ))}
        </ResultSection>
      )}

      {posts.length > 0 && (
        <ResultSection title="Blog">
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
