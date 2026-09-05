import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/Button";
import { StatusBadge, DifficultyBadge } from "@/components/ui/Badge";

export default async function AdminMcqsPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string; subject?: string }>;
}) {
  const { topic: topicFilter, subject: subjectFilter } = await searchParams;

  const mcqs = await prisma.mCQ.findMany({
    where: {
      topicId: topicFilter,
      topic: subjectFilter ? { subjectId: subjectFilter } : undefined,
    },
    include: { topic: { include: { subject: true } }, options: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-medium">MCQs</h1>
        <div className="flex gap-2">
          <Button href="/admin/mcqs/import" variant="outline" size="sm">Bulk import CSV</Button>
          <Button href={topicFilter ? `/admin/mcqs/new?topic=${topicFilter}` : "/admin/mcqs/new"} size="sm">
            + New MCQ
          </Button>
        </div>
      </div>

      <div className="flex flex-col divide-y divide-ink-950/10">
        {mcqs.map((m) => (
          <Link key={m.id} href={`/admin/mcqs/${m.id}`} className="py-3 flex items-center gap-4 hover:bg-ink-950/[0.02] -mx-2 px-2 rounded-md">
            <span className="flex-1 text-sm text-ink-950 line-clamp-1">{m.question}</span>
            <span className="text-xs text-ink-400 w-24 shrink-0">{m.topic.subject.shortName}</span>
            <DifficultyBadge difficulty={m.difficulty} />
            <StatusBadge status={m.status} />
            {!m.explanation && <span className="text-xs text-signal-red">No explanation</span>}
          </Link>
        ))}
        {mcqs.length === 0 && <p className="py-6 text-sm text-ink-400">No MCQs match this filter.</p>}
      </div>
    </div>
  );
}
