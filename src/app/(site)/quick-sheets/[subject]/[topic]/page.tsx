import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { RichContent } from "@/components/content/RichContent";
import { Button } from "@/components/ui/Button";
import { PrintButton } from "@/components/content/PrintButton";

async function getData(subjectSlug: string, topicSlug: string) {
  const subject = await prisma.subject.findUnique({ where: { slug: subjectSlug } });
  if (!subject) return null;
  const topic = await prisma.topic.findUnique({
    where: { subjectId_slug: { subjectId: subject.id, slug: topicSlug } },
    include: { revisionNote: true, mcqs: { where: { status: "PUBLISHED" }, select: { id: true } } },
  });
  if (!topic?.revisionNote) return null;
  return { subject, topic };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}): Promise<Metadata> {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const data = await getData(subjectSlug, topicSlug);
  if (!data) return {};
  return {
    title: `${data.topic.title} — Quick Sheet`,
    description: `5-minute revision sheet for ${data.topic.title} (${data.subject.shortName}): key rules, formulas, and common traps.`,
    alternates: { canonical: `/quick-sheets/${data.subject.slug}/${data.topic.slug}` },
  };
}

export default async function QuickSheetPage({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const data = await getData(subjectSlug, topicSlug);
  if (!data) notFound();
  const { subject, topic } = data;

  // Previous / next sheet in the subject's topic order (only topics that have a sheet).
  const siblings = await prisma.topic.findMany({
    where: { subjectId: subject.id, isComingSoon: false, revisionNote: { isNot: null } },
    orderBy: { order: "asc" },
    select: { id: true, slug: true, title: true },
  });
  const i = siblings.findIndex((s) => s.id === topic.id);
  const prev = i > 0 ? siblings[i - 1] : null;
  const next = i >= 0 && i < siblings.length - 1 ? siblings[i + 1] : null;

  return (
    <Container className="max-w-2xl py-14">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
        <Link href="/quick-sheets" className="hover:text-ink-950">Quick Sheets</Link>
        <span>/</span>
        <Link href={`/quick-sheets/${subject.slug}`} className="hover:text-ink-950">{subject.shortName}</Link>
        <span>/</span>
        <span>{topic.title}</span>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">
        {subject.shortName} — Quick Sheet
      </p>
      <h1 className="mt-1 font-display text-3xl font-medium text-balance">{topic.title}</h1>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-1.5 text-sm text-ink-400">
          <Clock className="size-4" /> Read time: ~5 minutes
        </p>
        <PrintButton />
      </div>

      <div className="mt-8">
        <RichContent html={topic.revisionNote!.content} />
      </div>

      <p className="print-only mt-8 text-xs text-ink-400">
        SimplyCPA quick sheet · simplycpa.in/quick-sheets/{subject.slug}/{topic.slug}
      </p>

      <div className="no-print mt-10 flex flex-wrap gap-3 border-t border-ink-950/10 pt-8">
        <Button href={`/cpa/${subject.slug}/${topic.slug}`} variant="outline">
          Study Full Topic
        </Button>
        {topic.mcqs.length > 0 && (
          <Button href={`/cpa/${subject.slug}/${topic.slug}#mcqs`} variant="primary">
            Practice {topic.mcqs.length} MCQs
          </Button>
        )}
      </div>

      {(prev || next) && (
        <nav aria-label={`More ${subject.shortName} quick sheets`} className="no-print mt-8 grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link href={`/quick-sheets/${subject.slug}/${prev.slug}`} className="group rounded-lg border border-ink-950/10 p-4 hover:border-ink-950/25">
              <span className="text-xs text-ink-400">← Previous sheet</span>
              <span className="mt-1 block font-medium text-ink-950 group-hover:underline">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/quick-sheets/${subject.slug}/${next.slug}`} className="group rounded-lg border border-ink-950/10 p-4 text-right hover:border-ink-950/25">
              <span className="text-xs text-ink-400">Next sheet →</span>
              <span className="mt-1 block font-medium text-ink-950 group-hover:underline">{next.title}</span>
            </Link>
          )}
        </nav>
      )}
    </Container>
  );
}
