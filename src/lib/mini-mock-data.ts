import "server-only";
import { prisma } from "@/lib/prisma";
import { areaWeight } from "@/lib/blueprint";
import { MOCK_SIZE, currentWeekStart, pickMock, weightMidpoint } from "@/lib/mini-mock";

/** The week's mini-mock for a section: question text and options only, never answers. */
export async function getWeeklyMock(subjectSlug: string, week = currentWeekStart()) {
  const subject = await prisma.subject.findUnique({ where: { slug: subjectSlug }, select: { id: true, slug: true, shortName: true, name: true } });
  if (!subject) return null;
  const candidates = await prisma.mCQ.findMany({
    where: { status: "PUBLISHED", topic: { subjectId: subject.id, isComingSoon: false } },
    select: { id: true, topicId: true, createdAt: true, topic: { select: { order: true, blueprintArea: true } } },
  });
  const ids = pickMock(
    candidates.map((c) => ({ id: c.id, topicId: c.topicId, topicOrder: c.topic.order, area: c.topic.blueprintArea, createdAt: c.createdAt })),
    { subject: subject.slug, week, weights: (area) => weightMidpoint(areaWeight(subject.slug, area)) },
  );
  const rows = await prisma.mCQ.findMany({
    where: { id: { in: ids } },
    select: {
      id: true,
      question: true,
      difficulty: true,
      options: { select: { id: true, label: true, text: true }, orderBy: { label: "asc" } },
      topic: { select: { slug: true, title: true, blueprintArea: true } },
    },
  });
  const byId = new Map(rows.map((r) => [r.id, r]));
  const questions = ids.map((id) => byId.get(id)!).filter(Boolean).map((q) => ({
    id: q.id,
    question: q.question,
    difficulty: q.difficulty,
    options: q.options,
    topic: { slug: q.topic.slug, title: q.topic.title },
    area: q.topic.blueprintArea,
  }));
  return { subject, week, questions, full: questions.length === MOCK_SIZE };
}

/** Whether the reader has already taken this week's mock for the section, and their score. */
export async function getThisWeeksResult(userId: string, subjectId: string, week = currentWeekStart()) {
  return prisma.practiceSession.findFirst({
    where: { userId, mode: "MOCK", subjectId, completedAt: { gte: new Date(`${week}T00:00:00+05:30`) } },
    orderBy: { completedAt: "desc" },
    select: { score: true, totalQuestions: true, completedAt: true },
  });
}

/** A signed-in reader's mini-mock results, newest first, with the section each belonged to. */
export async function getMockHistory(userId: string, limit = 20) {
  const [sessions, subjects] = await Promise.all([
    prisma.practiceSession.findMany({
      where: { userId, mode: "MOCK", completedAt: { not: null }, subjectId: { not: null } },
      orderBy: { completedAt: "desc" },
      take: limit,
      select: { id: true, score: true, totalQuestions: true, completedAt: true, subjectId: true },
    }),
    prisma.subject.findMany({ select: { id: true, slug: true, shortName: true } }),
  ]);
  const byId = new Map(subjects.map((s) => [s.id, s]));
  return sessions.map((s) => ({
    id: s.id,
    score: s.score ?? 0,
    total: s.totalQuestions,
    completedAt: s.completedAt!,
    subject: byId.get(s.subjectId!) ?? null,
  }));
}
