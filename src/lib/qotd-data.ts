import "server-only";
import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { addDays, istDate, istDayStart, qotdIdFor, streakFrom, type Candidate } from "@/lib/qotd";

/** Every published MCQ in a stable order (oldest first), once per request. */
export const getCandidates = cache(async (): Promise<Candidate[]> =>
  prisma.mCQ.findMany({
    where: { status: "PUBLISHED" },
    select: { id: true, createdAt: true },
    orderBy: [{ createdAt: "asc" }, { id: "asc" }],
  }),
);

/** The full question for a date, or null if there was none. */
export async function getQotd(date: string) {
  const id = qotdIdFor(date, await getCandidates());
  if (!id) return null;
  return prisma.mCQ.findUnique({
    where: { id },
    include: { options: { orderBy: { label: "asc" } }, topic: { include: { subject: true } } },
  });
}

/** The reader's daily streak: a day counts if they answered that day's question on that day. */
export async function getQotdStreak(userId: string, today = istDate(new Date())) {
  const LOOKBACK = 400;
  const candidates = await getCandidates();
  const byDate = new Map<string, string>();
  for (let i = 0; i < LOOKBACK; i++) {
    const d = addDays(today, -i);
    const id = qotdIdFor(d, candidates);
    if (id) byDate.set(d, id);
  }
  const attempts = await prisma.mCQAttempt.findMany({
    where: { userId, mcqId: { in: [...new Set(byDate.values())] }, attemptedAt: { gte: istDayStart(addDays(today, -LOOKBACK)) } },
    select: { mcqId: true, attemptedAt: true },
  });
  const answered = new Set<string>();
  for (const a of attempts) {
    const d = istDate(a.attemptedAt);
    if (byDate.get(d) === a.mcqId) answered.add(d);
  }
  return streakFrom(answered, today);
}
