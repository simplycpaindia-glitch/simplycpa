import "server-only";
import { prisma } from "@/lib/prisma";
import { latestByTopic, topicProgress, type TopicProgress } from "@/lib/mastery";

/**
 * Progress for a set of topics for one user. Stored in the database per account, so it's
 * the same on every device the reader signs in on.
 */
export async function getTopicProgress(
  userId: string,
  topics: { id: string; mcqCount: number }[],
): Promise<Map<string, TopicProgress>> {
  const ids = topics.map((t) => t.id);
  const [rows, attempts] = await Promise.all([
    prisma.userProgress.findMany({
      where: { userId, topicId: { in: ids } },
      select: { topicId: true, studyCompletedAt: true, revisionCompletedAt: true },
    }),
    prisma.mCQAttempt.findMany({
      where: { userId, mcq: { topicId: { in: ids }, status: "PUBLISHED" } },
      select: { mcqId: true, isCorrect: true, attemptedAt: true, mcq: { select: { topicId: true } } },
    }),
  ]);
  const marks = new Map(rows.map((r) => [r.topicId, r]));
  const latest = latestByTopic(attempts.map((a) => ({ mcqId: a.mcqId, topicId: a.mcq.topicId, isCorrect: a.isCorrect, attemptedAt: a.attemptedAt })));
  return new Map(
    topics.map((t) => [
      t.id,
      topicProgress({
        studied: !!marks.get(t.id)?.studyCompletedAt,
        revised: !!marks.get(t.id)?.revisionCompletedAt,
        mcqTotal: t.mcqCount,
        latest: latest.get(t.id),
      }),
    ]),
  );
}
