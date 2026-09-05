import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Official Sources",
  description: "Primary AICPA, NASBA, and state board sources referenced across SimplyCPA.",
};

const TYPE_LABEL: Record<string, string> = {
  PRIMARY_AICPA: "AICPA",
  PRIMARY_NASBA: "NASBA",
  PRIMARY_OTHER_OFFICIAL: "Other Official",
  SECONDARY_PROVIDER: "Secondary / Provider",
  OTHER: "Other",
};

export default async function SourcesPage() {
  const sources = await prisma.source.findMany({ orderBy: { sourceType: "asc" } });

  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Resources"
        title="Official sources"
        description="We link directly to AICPA, NASBA, and other official material rather than reproducing it. Every study material and MCQ item on this site can be traced back to a source like these."
      />
      <div className="mt-10 flex flex-col divide-y divide-ink-950/10 max-w-3xl">
        {sources.map((s) => (
          <div key={s.id} className="py-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gold-600">
              {TYPE_LABEL[s.sourceType]}
            </p>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium text-ink-950 underline">
              {s.name}
            </a>
            <p className="text-xs text-ink-400 mt-1">Checked {formatDate(s.dateChecked)}</p>
          </div>
        ))}
        {sources.length === 0 && <p className="py-6 text-ink-400">No sources catalogued yet.</p>}
      </div>
    </Container>
  );
}
