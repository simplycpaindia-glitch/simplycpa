import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Card, ProgressBar } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Your Dashboard" };

export default async function DashboardPage() {
  const user = await requireUser();

  const [subjects, attempts, recentSessions, bookmarks] = await Promise.all([
    prisma.subject.findMany({
      orderBy: { order: "asc" },
      include: { topics: { include: { progress: { where: { userId: user.id } } } } },
    }),
    prisma.mCQAttempt.findMany({
      where: { userId: user.id },
      include: { mcq: { include: { topic: { include: { subject: true } } } } },
      orderBy: { attemptedAt: "desc" },
      take: 500,
    }),
    prisma.practiceSession.findMany({
      where: { userId: user.id },
      orderBy: { startedAt: "desc" },
      take: 5,
      include: { topic: { include: { subject: true } } },
    }),
    prisma.bookmark.count({ where: { userId: user.id } }),
  ]);

  const subjectStats = subjects.map((s) => {
    const total = s.topics.length;
    const completed = s.topics.filter((t) => t.progress[0]?.status === "COMPLETED").length;
    return { subject: s, pct: total ? Math.round((completed / total) * 100) : 0 };
  });

  const topicAccuracy = new Map<string, { title: string; subjectSlug: string; topicSlug: string; correct: number; total: number }>();
  for (const a of attempts) {
    const key = a.mcq.topic.id;
    const entry = topicAccuracy.get(key) ?? {
      title: a.mcq.topic.title,
      subjectSlug: a.mcq.topic.subject.slug,
      topicSlug: a.mcq.topic.slug,
      correct: 0,
      total: 0,
    };
    entry.total += 1;
    if (a.isCorrect) entry.correct += 1;
    topicAccuracy.set(key, entry);
  }
  const weakest = Array.from(topicAccuracy.values())
    .filter((t) => t.total >= 3)
    .map((t) => ({ ...t, pct: Math.round((t.correct / t.total) * 100) }))
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 5);

  return (
    <Container className="py-16">
      <SectionHeading eyebrow="Your CPA Journey" title={`Welcome back, ${user.name?.split(" ")[0] ?? "there"}`} />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjectStats.map(({ subject, pct }) => (
          <Card key={subject.id} className="p-5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-ink-950">{subject.shortName}</span>
              <span className="text-xs text-ink-400">{pct}%</span>
            </div>
            <ProgressBar value={pct} className="mt-3" />
            <Link href={`/cpa/${subject.slug}`} className="mt-3 inline-block text-xs underline text-ink-400">
              Continue studying
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-medium mb-4">Weakest areas</h2>
          {weakest.length === 0 ? (
            <p className="text-sm text-ink-400">
              Attempt at least 3 MCQs on a topic to see your accuracy here.
            </p>
          ) : (
            <div className="flex flex-col divide-y divide-ink-950/10">
              {weakest.map((t, i) => (
                <Link
                  key={t.topicSlug}
                  href={`/cpa/${t.subjectSlug}/${t.topicSlug}`}
                  className="py-3 flex items-center justify-between hover:bg-ink-950/[0.02] -mx-2 px-2 rounded-md"
                >
                  <span className="text-sm text-ink-950">{i + 1}. {t.title}</span>
                  <Badge tone={t.pct < 50 ? "red" : "amber"}>{t.pct}%</Badge>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="font-display text-xl font-medium mb-4">Recent activity</h2>
          {recentSessions.length === 0 ? (
            <p className="text-sm text-ink-400">No practice sessions yet.</p>
          ) : (
            <div className="flex flex-col divide-y divide-ink-950/10">
              {recentSessions.map((s) => (
                <div key={s.id} className="py-3">
                  <p className="text-sm text-ink-950">
                    {s.topic ? s.topic.title : s.mode} — {s.score ?? 0}/{s.totalQuestions}
                  </p>
                  <p className="text-xs text-ink-400">{formatDate(s.startedAt)}</p>
                </div>
              ))}
            </div>
          )}
          <Link href="/dashboard/bookmarks" className="mt-4 inline-block text-xs underline text-ink-400">
            {bookmarks} saved for later
          </Link>
        </div>
      </div>
    </Container>
  );
}
