import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/Card";
import { Badge, StatusBadge } from "@/components/ui/Badge";
import { createTopic } from "@/lib/actions/admin";

export default async function AdminTopicsPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>;
}) {
  const { subject: subjectFilter } = await searchParams;
  const subjects = await prisma.subject.findMany({ orderBy: { order: "asc" } });
  const activeSubject = subjectFilter ?? subjects[0]?.id;

  const topics = activeSubject
    ? await prisma.topic.findMany({
        where: { subjectId: activeSubject },
        orderBy: { order: "asc" },
        include: { studyMaterial: true, revisionNote: true, mcqs: { select: { id: true } } },
      })
    : [];

  const createTopicForSubject = createTopic.bind(null, activeSubject ?? "");

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">Topics</h1>

      <div className="mb-6 flex flex-wrap gap-1.5">
        {subjects.map((s) => (
          <Link
            key={s.id}
            href={`/admin/topics?subject=${s.id}`}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              activeSubject === s.id ? "bg-ink-950 text-paper-50" : "bg-paper-100 text-ink-400"
            }`}
          >
            {s.shortName}
          </Link>
        ))}
      </div>

      <div className="flex flex-col divide-y divide-ink-950/10 mb-8">
        {topics.map((t, i) => (
          <Link key={t.id} href={`/admin/topics/${t.id}`} className="py-3 flex items-center gap-4 hover:bg-ink-950/[0.02] -mx-2 px-2 rounded-md">
            <span className="text-ink-400 w-6 text-sm">{i + 1}.</span>
            <span className="flex-1 text-sm font-medium text-ink-950">{t.title}</span>
            <StatusBadge status={t.status} />
            {t.isComingSoon && <Badge tone="neutral">Coming Soon</Badge>}
            <span className="text-xs text-ink-400 w-32">
              {t.studyMaterial ? "✓" : "✗"} Study · {t.revisionNote ? "✓" : "✗"} Revision
            </span>
            <span className="text-xs text-ink-400 w-16">{t.mcqs.length} MCQs</span>
          </Link>
        ))}
        {topics.length === 0 && <p className="py-6 text-sm text-ink-400">No topics for this subject yet.</p>}
      </div>

      <Card className="p-6 max-w-xl">
        <h2 className="font-semibold text-ink-950 mb-3">Add a topic</h2>
        <form action={createTopicForSubject} className="flex flex-col gap-3">
          <input name="title" placeholder="Topic title" required className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <input name="shortDescription" placeholder="One-line description" className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <div className="grid grid-cols-2 gap-3">
            <input name="order" type="number" placeholder="Order (e.g. 1)" className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
            <input name="estimatedMinutes" type="number" placeholder="Est. minutes" className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          </div>
          <input name="blueprintArea" placeholder="Blueprint area (e.g. Area II)" className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <button type="submit" className="self-start rounded-md bg-ink-950 px-4 py-2 text-sm font-medium text-paper-50">
            Create topic
          </button>
        </form>
      </Card>
    </div>
  );
}
