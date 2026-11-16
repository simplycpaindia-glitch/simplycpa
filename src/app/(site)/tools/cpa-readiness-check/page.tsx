import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import { READINESS_MIN_SIZE, READINESS_SECONDS_EACH } from "@/lib/readiness";

const PATH = "/tools/cpa-readiness-check";

export const metadata: Metadata = {
  title: "CPA Readiness Check: Free Diagnostic Quiz by Section",
  description:
    "A free diagnostic for each CPA Exam section with a question from every topic. See which Blueprint areas are strong, developing or a priority, and which topics to study next.",
  alternates: { canonical: PATH },
};

const link = "text-gold-700 underline underline-offset-2";

export default async function ReadinessHubPage() {
  const subjects = await prisma.subject.findMany({
    orderBy: { order: "asc" },
    select: { slug: true, shortName: true, name: true, type: true, _count: { select: { topics: { where: { isComingSoon: false } } } } },
  });

  return (
    <ToolPageShell
      path={PATH}
      crumb="Readiness Check"
      title="CPA readiness check"
      intro="Pick a section. You'll answer at least one question from every topic, then see which Blueprint areas are strong, developing or a priority, with the topics to study next."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s) => {
          const size = Math.max(READINESS_MIN_SIZE, s._count.topics);
          return (
            <li key={s.slug}>
              <Link href={`${PATH}/${s.slug}`} className="flex h-full flex-col rounded-xl border border-ink-950/10 p-5 hover:border-ink-950/30">
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-700">{s.type === "CORE" ? "Core" : "Discipline"}</span>
                <span className="mt-1 font-display text-2xl font-medium text-ink-950">{s.shortName}</span>
                <span className="text-sm text-ink-400">{s.name}</span>
                <span className="mt-3 text-xs text-ink-400">
                  {size} questions · {Math.round((size * READINESS_SECONDS_EACH) / 60)} minutes · {s._count.topics} topics covered
                </span>
                <span className="mt-3 text-sm font-medium text-ink-950">Start the {s.shortName} check →</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <section className="mt-14 max-w-3xl border-t border-ink-950/10 pt-10">
        <h2 className="font-display text-2xl font-medium text-ink-950">How to use it</h2>
        <div className="mt-4 flex flex-col gap-4 leading-relaxed text-ink-800">
          <p>
            <strong>When to take it.</strong> Before you start a section, to see what you already know, and again when you finish the
            syllabus, to decide what to revise. The questions change at the start of each month.
          </p>
          <p>
            <strong>What the result means.</strong> Each Blueprint area is marked strong (75% or more), developing (50% to 74%) or
            priority (below 50%). With a handful of questions per area this is a rough signal. It is not a predicted score, and a
            raw percentage does not map to the exam&apos;s scaled 75.
          </p>
          <p>
            <strong>What to do next.</strong> Study the priority topics, then test yourself under time pressure with the{" "}
            <Link href="/mini-mock" className={link}>
              weekly mini-mocks
            </Link>
            , which weight questions by the exam Blueprint. Put your exam date into the{" "}
            <Link href="/study-planner" className={link}>
              study planner
            </Link>{" "}
            to turn the result into a schedule.
          </p>
        </div>
      </section>
    </ToolPageShell>
  );
}
