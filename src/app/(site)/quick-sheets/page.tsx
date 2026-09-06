import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "CPA Quick Sheets",
  description: "Short, high-yield revision sheets for every CPA topic, organized by subject.",
};

export default async function QuickSheetsIndexPage() {
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    include: {
      _count: {
        select: { topics: { where: { revisionNote: { isNot: null } } } },
      },
    },
  });

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-14">
        <Container>
          <SectionHeading
            eyebrow="Quick Sheets"
            title="CPA Quick Sheets"
            description="Short, high-yield revision sheets — key rules, formulas, and traps — organized by subject."
          />
        </Container>
      </div>
      <Container className="py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <Link
              key={s.id}
              href={`/quick-sheets/${s.slug}`}
              className="rounded-lg border border-ink-950/10 p-5 hover:border-ink-950/25 transition-colors"
            >
              <span className="font-display text-xl font-semibold text-ink-950">{s.shortName}</span>
              <p className="text-sm text-ink-400">{s.name}</p>
              <p className="mt-3 text-xs text-ink-400">{s._count.topics} quick sheets available</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
