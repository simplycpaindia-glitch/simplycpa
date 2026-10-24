import "server-only";
import { prisma } from "@/lib/prisma";
import { mistakeStatus } from "@/lib/mistakes";
import { istDate } from "@/lib/qotd";

/** Max questions in one review set. */
export const REVIEW_SET_SIZE = 20;

export async function getMistakeBook(userId: string, today = istDate(new Date())) {
  // Only questions the reader has ever got wrong can be in the book. Questions left
  // blank in a submitted set are skipped, not mistakes, so they neither add nor reset.
  const wrong = await prisma.mCQAttempt.findMany({
    where: { userId, isCorrect: false, selectedOptionId: { not: null }, mcq: { status: "PUBLISHED" } },
    select: { mcqId: true },
    distinct: ["mcqId"],
  });
  const ids = wrong.map((w) => w.mcqId);
  if (ids.length === 0) return { dueTotal: 0, due: [], upcoming: [], cleared: 0 };

  const attempts = await prisma.mCQAttempt.findMany({
    where: { userId, mcqId: { in: ids }, selectedOptionId: { not: null } },
    select: { mcqId: true, isCorrect: true, attemptedAt: true },
  });
  const byMcq = new Map<string, { isCorrect: boolean; attemptedAt: Date }[]>();
  for (const a of attempts) byMcq.set(a.mcqId, [...(byMcq.get(a.mcqId) ?? []), a]);

  let cleared = 0;
  const open: { mcqId: string; dueDate: string; stage: number }[] = [];
  for (const [mcqId, list] of byMcq) {
    const s = mistakeStatus(list);
    if (!s.inBook) continue;
    if (s.cleared) cleared++;
    else open.push({ mcqId, dueDate: s.dueDate, stage: s.stage });
  }
  open.sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  const dueIds = open.filter((o) => o.dueDate <= today).map((o) => o.mcqId);
  const upcoming = open.filter((o) => o.dueDate > today);

  // Question text and options only — correct answers stay on the server until grading.
  const [dueQuestions, upcomingMeta] = await Promise.all([
    prisma.mCQ.findMany({
      where: { id: { in: dueIds.slice(0, REVIEW_SET_SIZE) } },
      select: {
        id: true,
        question: true,
        difficulty: true,
        options: { select: { id: true, label: true, text: true }, orderBy: { label: "asc" } },
        topic: { select: { title: true, subject: { select: { shortName: true } } } },
      },
    }),
    prisma.mCQ.findMany({
      where: { id: { in: upcoming.map((u) => u.mcqId) } },
      select: { id: true, topic: { select: { title: true, subject: { select: { shortName: true } } } } },
    }),
  ]);
  const meta = new Map(upcomingMeta.map((m) => [m.id, m]));

  return {
    dueTotal: dueIds.length,
    due: dueQuestions,
    upcoming: upcoming.map((u) => ({ ...u, topic: meta.get(u.mcqId)?.topic })),
    cleared,
  };
}
