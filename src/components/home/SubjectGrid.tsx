import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getTopicProgress } from "@/lib/progress-data";
import { countProgress, ProgressSegments, type ProgressCounts } from "@/components/progress/ProgressSegments";

const DIFFICULTY = { EASY: "Easy", MEDIUM: "Medium", HARD: "Hard" } as const;
/** Banks smaller than this are labelled as still growing. */
const GROWING_BELOW = 150;

export async function SubjectGrid() {
  const session = await auth();
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    include: {
      _count: { select: { topics: true } },
      topics: { select: { id: true, isComingSoon: true, mcqs: { where: { status: "PUBLISHED" }, select: { id: true } } } },
    },
  });

  // Signed-in readers see their progress on each card (same model as the section pages).
  const progress = session?.user
    ? await getTopicProgress(
        session.user.id,
        subjects.flatMap((s) => s.topics.filter((t) => !t.isComingSoon).map((t) => ({ id: t.id, mcqCount: t.mcqs.length }))),
      )
    : null;
  const countsFor = (s: (typeof subjects)[number]) => {
    if (!progress) return null;
    const live = s.topics.filter((t) => !t.isComingSoon);
    return countProgress(live.map((t) => progress.get(t.id)!).filter(Boolean), live.length);
  };

  const core = subjects.filter((s) => s.type === "CORE");
  const discipline = subjects.filter((s) => s.type === "DISCIPLINE");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="What do you want to study?"
          description="Every candidate takes the three Core sections. Then you choose one Discipline."
        />

        <div className="mt-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
            Core sections
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {core.map((s) => (
              <SubjectCard key={s.id} subject={s} counts={countsFor(s)} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
            Discipline — choose one
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {discipline.map((s) => (
              <SubjectCard key={s.id} subject={s} counts={countsFor(s)} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SubjectCard({
  subject,
  counts,
}: {
  counts: ProgressCounts | null;
  subject: {
    id: string;
    slug: string;
    shortName: string;
    name: string;
    type: string;
    estimatedHours: number | null;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    _count: { topics: number };
    topics: { id: string; isComingSoon: boolean; mcqs: { id: string }[] }[];
  };
}) {
  const mcqCount = subject.topics.reduce((sum, t) => sum + t.mcqs.length, 0);

  return (
    <Link
      href={`/cpa/${subject.slug}`}
      className="group flex flex-col justify-between rounded-lg border border-ink-950/10 bg-paper-50 p-5 transition-colors hover:border-ink-950/25"
    >
      <div>
        <div className="flex items-start justify-between gap-2">
          <span className="font-display text-2xl font-semibold text-ink-950">
            {subject.shortName}
          </span>
          {subject.type === "DISCIPLINE" && <Badge tone="neutral">Discipline</Badge>}
        </div>
        <p className="mt-1 text-sm text-ink-400">{subject.name}</p>
        <p className="mt-3 text-sm text-ink-800">
          {subject._count.topics} topics
          {subject.estimatedHours ? ` · ~${subject.estimatedHours} hrs` : ""} · {DIFFICULTY[subject.difficulty]}
        </p>
        <p className="mt-1 text-xs text-ink-400">
          Study material · Revision · {mcqCount > 0 ? `${mcqCount} MCQs` : "MCQs"}
          {mcqCount > 0 && mcqCount < GROWING_BELOW && " (bank still growing)"}
        </p>
      </div>
      {counts && (
        <div className="mt-4">
          <ProgressSegments counts={counts} />
          <p className="mt-1.5 text-xs text-ink-400">
            {counts.mastered} of {counts.total} mastered
          </p>
        </div>
      )}
      <span className="mt-5 flex items-center gap-1 text-sm font-medium text-ink-950">
        {counts && counts.mastered + counts.revised + counts.studied > 0 ? "Continue" : "Start Studying"}
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
