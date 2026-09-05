import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CPA Radar",
  description: "Blueprint changes, policy updates, and deadlines relevant to CPA candidates — each with a last-verified date.",
};

export default async function RadarPage() {
  const updates = await prisma.update.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="CPA Radar"
        title="What changed recently"
        description="Blueprint refreshes, policy changes, and deadlines that affect CPA candidates. Every item carries a last-verified date because CPA Exam information changes."
      />
      <div className="mt-10 flex flex-col divide-y divide-ink-950/10 max-w-3xl">
        {updates.map((u) => (
          <div key={u.id} className="py-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
              <Badge tone="neutral">{u.category}</Badge>
              <span>Last verified {formatDate(u.lastVerified)}</span>
            </div>
            <h2 className="mt-2 font-semibold text-ink-950">{u.title}</h2>
            <p className="mt-1 text-sm text-ink-400 leading-relaxed">{u.body}</p>
            {u.sourceUrl && (
              <a href={u.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs underline text-gold-600">
                Source
              </a>
            )}
          </div>
        ))}
        {updates.length === 0 && <p className="py-6 text-ink-400">No updates published yet.</p>}
      </div>
    </Container>
  );
}
