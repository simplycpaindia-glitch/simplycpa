import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export async function OfficialSourcesStrip() {
  const sources = await prisma.source.findMany({
    where: { sourceType: { in: ["PRIMARY_AICPA", "PRIMARY_NASBA", "PRIMARY_OTHER_OFFICIAL"] } },
    take: 4,
    orderBy: { dateChecked: "desc" },
  });
  if (sources.length === 0) return null;

  return (
    <section className="py-14 border-t border-ink-950/10">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <SectionHeading eyebrow="Official CPA Sources" title="We link to the source. Always." />
            <p className="mt-2 max-w-lg text-sm text-ink-400">
              SimplyCPA is independent and not affiliated with AICPA, NASBA, or Prometric — every
              official fact here links back to where it actually comes from.
            </p>
          </div>
          <Button href="/sources" variant="outline" size="sm">
            All sources
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          {sources.map((s) => (
            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-800 underline">
              {s.name}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
