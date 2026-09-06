import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { RichContent } from "@/components/content/RichContent";
import { Button } from "@/components/ui/Button";

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

  return (
    <Container className="max-w-2xl py-14">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
        <Link href="/quick-sheets" className="hover:text-ink-950">Quick Sheets</Link>
        <span>/</span>
        <Link href={`/quick-sheets/${subject.slug}`} className="hover:text-ink-950">{subject.shortName}</Link>
        <span>/</span>
        <span>{topic.title}</span>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
        {subject.shortName} — Quick Sheet
      </p>
      <h1 className="mt-1 font-display text-3xl font-medium text-balance">{topic.title}</h1>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-400">
        <Clock className="size-4" /> Read time: ~5 minutes
      </p>

      <div className="mt-8">
        <RichContent html={topic.revisionNote!.content} />
      </div>

      <div className="mt-10 flex flex-wrap gap-3 border-t border-ink-950/10 pt-8">
        <Button href={`/cpa/${subject.slug}/${topic.slug}`} variant="outline">
          Study Full Topic
        </Button>
        {topic.mcqs.length > 0 && (
          <Button href={`/cpa/${subject.slug}/${topic.slug}#mcqs`} variant="primary">
            Practice {topic.mcqs.length} MCQs
          </Button>
        )}
      </div>
    </Container>
  );
}
