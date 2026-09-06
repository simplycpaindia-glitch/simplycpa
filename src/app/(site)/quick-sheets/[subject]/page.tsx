import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = await prisma.subject.findUnique({ where: { slug } });
  if (!subject) return {};
  return {
    title: `${subject.shortName} Quick Sheets`,
    description: `Short, high-yield revision sheets for every ${subject.shortName} topic.`,
  };
}

export default async function SubjectQuickSheetsPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = await prisma.subject.findUnique({
    where: { slug },
    include: {
      topics: {
        where: { revisionNote: { isNot: null } },
        orderBy: { order: "asc" },
      },
    },
  });
  if (!subject) notFound();

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-14">
        <Container>
          <div className="mb-4 flex items-center gap-2 text-xs text-ink-400">
            <Link href="/quick-sheets" className="hover:text-ink-950">Quick Sheets</Link>
            <span>/</span>
            <span>{subject.shortName}</span>
          </div>
          <SectionHeading eyebrow="Quick Sheets" title={`${subject.shortName} Quick Sheets`} />
        </Container>
      </div>
      <Container className="py-14 max-w-2xl">
        <div className="flex flex-col divide-y divide-ink-950/10">
          {subject.topics.map((t) => (
            <Link
              key={t.id}
              href={`/quick-sheets/${subject.slug}/${t.slug}`}
              className="group flex items-center justify-between gap-4 py-4 hover:bg-ink-950/[0.02] -mx-2 px-2 rounded-md"
            >
              <span className="text-sm font-medium text-ink-950">{t.title}</span>
              <ArrowRight className="size-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
          {subject.topics.length === 0 && (
            <p className="py-6 text-sm text-ink-400">No quick sheets published for {subject.shortName} yet.</p>
          )}
        </div>
      </Container>
    </>
  );
}
