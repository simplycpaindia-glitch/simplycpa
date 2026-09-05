import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

const REVIEW_STALE_DAYS = 120;

export default async function AdminOverviewPage() {
  const [
    subjectCount,
    topicCount,
    studyCount,
    revisionCount,
    mcqCount,
    blogCount,
    faqCount,
    studentCount,
    contentByStatus,
    mcqsMissingExplanation,
    staleStudyMaterials,
    provisionalTopics,
  ] = await Promise.all([
    prisma.subject.count(),
    prisma.topic.count(),
    prisma.studyMaterial.count(),
    prisma.revisionNote.count(),
    prisma.mCQ.count(),
    prisma.blogPost.count(),
    prisma.fAQ.count(),
    prisma.user.count({ where: { role: "STUDENT" } }),
    prisma.topic.groupBy({ by: ["status"], _count: true }),
    prisma.mCQ.count({ where: { explanation: "" } }),
    prisma.studyMaterial.findMany({
      where: { lastReviewedAt: { lt: new Date(Date.now() - REVIEW_STALE_DAYS * 86_400_000) } },
      include: { topic: { include: { subject: true } } },
      take: 5,
    }),
    prisma.topic.count({ where: { blueprintStatus: "PROVISIONAL" } }),
  ]);

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">Overview</h1>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 mb-10">
        <Stat label="Subjects" value={subjectCount} />
        <Stat label="Topics" value={topicCount} />
        <Stat label="Study Materials" value={studyCount} />
        <Stat label="Revision Notes" value={revisionCount} />
        <Stat label="MCQs" value={mcqCount} />
        <Stat label="Blog Posts" value={blogCount} />
        <Stat label="FAQs" value={faqCount} />
        <Stat label="Students" value={studentCount} />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-semibold text-ink-950 mb-3">Topics by status</h2>
          <Card className="p-4 flex flex-col gap-2">
            {contentByStatus.map((s) => (
              <div key={s.status} className="flex items-center justify-between text-sm">
                <span className="text-ink-400">{s.status}</span>
                <span className="font-medium text-ink-950">{s._count}</span>
              </div>
            ))}
          </Card>
        </div>

        <div>
          <h2 className="font-semibold text-ink-950 mb-3">Alerts</h2>
          <Card className="p-4 flex flex-col gap-3">
            {mcqsMissingExplanation > 0 && (
              <AlertRow href="/admin/mcqs" text={`${mcqsMissingExplanation} MCQs have no explanation`} />
            )}
            {provisionalTopics > 0 && (
              <AlertRow href="/admin/topics" text={`${provisionalTopics} topics have a provisional (unverified) Blueprint mapping`} />
            )}
            {staleStudyMaterials.map((sm) => (
              <AlertRow
                key={sm.id}
                href={`/admin/topics/${sm.topicId}/study`}
                text={`${sm.topic.subject.shortName} — ${sm.topic.title}: study material last reviewed ${formatDate(sm.lastReviewedAt ?? sm.createdAt)}`}
              />
            ))}
            {mcqsMissingExplanation === 0 && provisionalTopics === 0 && staleStudyMaterials.length === 0 && (
              <p className="text-sm text-ink-400">No alerts — content is in good shape.</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <Card className="p-4">
      <p className="text-2xl font-display font-semibold text-ink-950">{value}</p>
      <p className="text-xs text-ink-400">{label}</p>
    </Card>
  );
}

function AlertRow({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-sm hover:underline">
      <Badge tone="amber">Review</Badge>
      <span className="text-ink-800">{text}</span>
    </Link>
  );
}
