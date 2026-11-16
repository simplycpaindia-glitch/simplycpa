import "server-only";
import { prisma } from "@/lib/prisma";
import { currentReadinessMonth, pickReadiness } from "@/lib/readiness";

/** This month's readiness check for a section: question text and options only, never answers. */
export async function getReadinessCheck(subjectSlug: string, month = currentReadinessMonth()) {
  const subject = await prisma.subject.findUnique({ where: { slug: subjectSlug }, select: { id: true, slug: true, shortName: true, name: true } });
  if (!subject) return null;
  const candidates = await prisma.mCQ.findMany({
    where: { status: "PUBLISHED", topic: { subjectId: subject.id, isComingSoon: false } },
    select: { id: true, topicId: true, topic: { select: { order: true } } },
  });
  const ids = pickReadiness(
    candidates.map((c) => ({ id: c.id, topicId: c.topicId, topicOrder: c.topic.order })),
    { subject: subject.slug, month },
  );
  const rows = await prisma.mCQ.findMany({
    where: { id: { in: ids } },
    select: {
      id: true,
      question: true,
      options: { select: { id: true, label: true, text: true }, orderBy: { label: "asc" } },
      topic: { select: { slug: true, title: true, blueprintArea: true } },
    },
  });
  const byId = new Map(rows.map((r) => [r.id, r]));
  const questions = ids
    .map((id) => byId.get(id))
    .filter((q): q is NonNullable<typeof q> => !!q)
    .map((q) => ({ id: q.id, question: q.question, options: q.options, topic: { slug: q.topic.slug, title: q.topic.title }, area: q.topic.blueprintArea }));
  return { subject, month, questions, topics: new Set(questions.map((q) => q.topic.slug)).size };
}
