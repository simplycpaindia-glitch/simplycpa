import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { StudyPlanner, type PlannerSubject } from "@/components/planner/StudyPlanner";
import { getTopicProgress } from "@/lib/progress-data";

export const metadata: Metadata = {
  title: "CPA Study Planner: A Week-by-Week Plan to Your Exam",
  description:
    "Enter your CPA Exam section, exam date and weekly study hours to get a free week-by-week, topic-by-topic study plan with review weeks and mini-mocks. Add it to your calendar.",
  alternates: { canonical: "/study-planner" },
};

export default async function StudyPlannerPage() {
  const [subjects, session] = await Promise.all([
    prisma.subject.findMany({
      orderBy: { order: "asc" },
      select: {
        slug: true,
        shortName: true,
        name: true,
        estimatedHours: true,
        topics: {
          where: { isComingSoon: false },
          orderBy: { order: "asc" },
          select: {
            id: true,
            slug: true,
            title: true,
            blueprintArea: true,
            order: true,
            estimatedMinutes: true,
            difficulty: true,
            _count: { select: { mcqs: { where: { status: "PUBLISHED" } } } },
          },
        },
      },
    }),
    auth(),
  ]);

  // For signed-in readers, mark topics already mastered so they can be left out.
  const progress = session?.user
    ? await getTopicProgress(session.user.id, subjects.flatMap((s) => s.topics.map((t) => ({ id: t.id, mcqCount: t._count.mcqs }))))
    : null;

  const data: PlannerSubject[] = subjects.map((s) => ({
    slug: s.slug,
    shortName: s.shortName,
    name: s.name,
    hours: s.estimatedHours ?? 100,
    topics: s.topics.map((t) => ({
      slug: t.slug,
      title: t.title,
      area: t.blueprintArea,
      order: t.order,
      minutes: t.estimatedMinutes ?? 60,
      difficulty: t.difficulty,
    })),
    mastered: s.topics.filter((t) => progress?.get(t.id)?.state === "mastered").map((t) => t.slug),
  }));

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-12 print:hidden">
        <Container>
          <h1 className="font-display text-4xl font-medium text-ink-950">Study planner</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            Pick a section, your exam date and how many hours a week you can study. You&apos;ll get a week-by-week plan through every
            topic in blueprint order, with review weeks and mini-mocks before the exam.
          </p>
        </Container>
      </div>
      <Container className="py-10">
        <StudyPlanner subjects={data} isLoggedIn={!!session?.user} />
      </Container>
    </>
  );
}
