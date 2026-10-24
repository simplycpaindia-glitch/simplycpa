import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { radarAnchor } from "@/lib/radar";

export async function RadarPreview() {
  const updates = await prisma.update.findMany({
    orderBy: [{ publishedAt: "desc" }, { lastVerified: "desc" }],
    take: 4,
  });
  if (updates.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-paper-100">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="📡 CPA Radar" title="What changed recently" description="Blueprint changes, policy updates, and deadlines — each one dated and sourced." />
          <Button href="/radar" variant="outline" size="sm">
            All updates
          </Button>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ink-950/10 bg-ink-950/10 sm:grid-cols-2">
          {updates.map((u) => (
            <Link key={u.id} href={`/radar#${radarAnchor(u.id)}`} className="group bg-paper-50 p-5 hover:bg-paper-100">
              <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
                <Badge tone="neutral">{u.category}</Badge>
                <span>{formatDate(u.publishedAt)}</span>
                <span aria-hidden>·</span>
                <span>Verified {formatDate(u.lastVerified)}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-ink-950 group-hover:underline">{u.title}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
