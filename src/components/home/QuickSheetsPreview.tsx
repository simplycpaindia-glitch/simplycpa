import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export async function QuickSheetsPreview() {
  const topics = await prisma.topic.findMany({
    where: { revisionNote: { isNot: null } },
    orderBy: { order: "asc" },
    take: 6,
    include: { subject: true },
  });
  if (topics.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-paper-100">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="⚡ Quick Sheets" title="5-minute revision sheets" description="Key rules, formulas, and traps — no need to reread the full topic." />
          <Button href="/quick-sheets" variant="outline" size="sm">
            All Quick Sheets
          </Button>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.id}
              href={`/quick-sheets/${t.subject.slug}/${t.slug}`}
              className="rounded-lg border border-ink-950/10 bg-paper-50 p-4 hover:border-ink-950/25 transition-colors"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                {t.subject.shortName}
              </span>
              <p className="mt-1 text-sm font-medium text-ink-950">{t.title}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
