import "server-only";
import { prisma } from "@/lib/prisma";
import { areaWeight } from "@/lib/blueprint";
import { pickMock, weightMidpoint } from "@/lib/mini-mock";
import { EXAM_STRUCTURE, currentMockMonth, pickSimulations, seededOrder, splitInto } from "@/lib/full-mock";
import { getSimulations } from "@/lib/tbs";
import { toPublic } from "@/lib/tbs/grade";

/**
 * This month's full-length form for a section: question text, options and public
 * simulation data only. Answers never leave the server until grading.
 */
export async function getFullMock(subjectSlug: string, month = currentMockMonth()) {
  const structure = EXAM_STRUCTURE[subjectSlug];
  if (!structure) return null;
  const subject = await prisma.subject.findUnique({ where: { slug: subjectSlug }, select: { id: true, slug: true, shortName: true, name: true } });
  if (!subject) return null;

  const seed = `full-mock:${subject.slug}:${month}`;
  const mcqCount = structure.mcq[0] + structure.mcq[1];
  const candidates = await prisma.mCQ.findMany({
    where: { status: "PUBLISHED", topic: { subjectId: subject.id, isComingSoon: false } },
    select: { id: true, topicId: true, createdAt: true, topic: { select: { order: true, blueprintArea: true } } },
  });
  // Weighted by blueprint area, like the mini-mocks; only questions published before the month began.
  const ids = pickMock(
    candidates.map((c) => ({ id: c.id, topicId: c.topicId, topicOrder: c.topic.order, area: c.topic.blueprintArea, createdAt: c.createdAt })),
    { subject: subject.slug, week: `${month}-01`, weights: (area) => weightMidpoint(areaWeight(subject.slug, area)), size: mcqCount },
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
  // Mixed across areas, as on the exam.
  const mcqs = seededOrder(ids, (id) => id, seed)
    .map((id) => byId.get(id))
    .filter((q): q is NonNullable<typeof q> => !!q)
    .map((q) => ({ id: q.id, question: q.question, options: q.options, topic: { slug: q.topic.slug, title: q.topic.title }, area: q.topic.blueprintArea }));

  const sims = pickSimulations(getSimulations(subject.slug), structure.tbs[0] + structure.tbs[1] + structure.tbs[2], seed).map(toPublic);

  const half = Math.ceil(mcqs.length / 2);
  return {
    subject,
    month,
    mcqWeight: structure.mcqWeight,
    testlets: [
      { kind: "mcq" as const, mcqs: mcqs.slice(0, half) },
      { kind: "mcq" as const, mcqs: mcqs.slice(half) },
      ...splitInto(sims, structure.tbs).map((group) => ({ kind: "tbs" as const, sims: group })),
    ],
    complete: mcqs.length === mcqCount && sims.length === structure.tbs.reduce((a, b) => a + b, 0),
  };
}

export type FullMock = NonNullable<Awaited<ReturnType<typeof getFullMock>>>;
