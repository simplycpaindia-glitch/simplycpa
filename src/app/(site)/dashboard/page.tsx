import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/dal";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { getTopicProgress } from "@/lib/progress-data";
import { getMistakeBook } from "@/lib/mistakes-data";
import { getQotdStreak } from "@/lib/qotd-data";
import { countProgress, ProgressSegments } from "@/components/progress/ProgressSegments";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Your Dashboard", robots: { index: false } };

const MODE_LABEL: Record<string, string> = {
  SUBJECT: "Section practice",
  CUSTOM: "Custom set",
  MOCK: "Mock exam",
  INCORRECT_REVIEW: "Mistake book review",
  BOOKMARKED: "Saved questions",
  TIMED: "Timed set",
};

export default async function DashboardPage() {
  const user = await requireUser();

  const [subjects, attempts, recentSessions, bookmarks] = await Promise.all([
    prisma.subject.findMany({
      orderBy: { order: "asc" },
      include: { topics: { where: { isComingSoon: false }, select: { id: true, _count: { select: { mcqs: { where: { status: "PUBLISHED" } } } } } } },
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
  const [book, streak] = await Promise.all([getMistakeBook(user.id), getQotdStreak(user.id)]);

  const progress = await getTopicProgress(
    user.id,
    subjects.flatMap((s) => s.topics.map((t) => ({ id: t.id, mcqCount: t._count.mcqs }))),
  );
  const subjectStats = subjects.map((s) => ({
    subject: s,
    counts: countProgress(
      s.topics.map((t) => progress.get(t.id)!).filter(Boolean),
      s.topics.length,
    ),
  }));

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
      <SectionHeading as="h1" eyebrow="Your CPA Journey" title={user.name?.trim() ? `Welcome back, ${user.name.trim().split(" ")[0]}` : "Welcome back"} />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link href="/dashboard/mistakes" className="rounded-xl border border-ink-950/10 bg-paper-50 p-5 hover:border-gold-400">
          <p className="font-semibold text-ink-950">Mistake book</p>
          <p className="mt-1 text-sm text-ink-400">
            {book.dueTotal > 0
              ? `${book.dueTotal} question${book.dueTotal === 1 ? "" : "s"} due for review today`
              : book.upcoming.length > 0
                ? `Up to date — ${book.upcoming.length} coming up`
                : "Questions you get wrong come back for spaced review"}
          </p>
        </Link>
        <Link href="/question-of-the-day" className="rounded-xl border border-ink-950/10 bg-paper-50 p-5 hover:border-gold-400">
          <p className="font-semibold text-ink-950">Question of the Day</p>
          <p className="mt-1 text-sm text-ink-400">
            {streak.answeredToday
              ? `Done for today · ${streak.current}-day streak`
              : streak.current > 0
                ? `Answer today's to keep your ${streak.current}-day streak`
                : "Answer today's question to start a streak"}
          </p>
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjectStats.map(({ subject, counts }) => (
          <Card key={subject.id} className="p-5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-ink-950">{subject.shortName}</span>
              <span className="text-xs text-ink-400">
                {counts.mastered}/{counts.total} mastered
              </span>
            </div>
            <ProgressSegments counts={counts} className="mt-3 h-2" />
            <p className="mt-2 text-xs text-ink-400">
              {counts.revised} revised · {counts.studied} studied
            </p>
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
                    {s.topic ? s.topic.title : (MODE_LABEL[s.mode] ?? "Practice set")} — {s.score ?? 0}/{s.totalQuestions}
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
