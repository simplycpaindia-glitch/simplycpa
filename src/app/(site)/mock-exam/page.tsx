import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { BREAK_MINUTES, EXAM_MINUTES, EXAM_STRUCTURE } from "@/lib/full-mock";

export const metadata: Metadata = {
  title: "Free Full-Length CPA Mock Exams: 4 Hours, Real Exam Structure",
  description:
    "Free full-length mock exams for every CPA section: five testlets, the real number of multiple-choice questions and simulations, a four-hour clock and a score weighted like the exam.",
  alternates: { canonical: "/mock-exam" },
};

const link = "text-gold-700 underline underline-offset-2";

export default async function MockExamHub() {
  const subjects = await prisma.subject.findMany({ orderBy: { order: "asc" }, select: { slug: true, shortName: true, name: true, type: true } });

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold-700">Practice</p>
          <h1 className="font-display text-4xl font-medium text-ink-950 text-balance">Full-length mock exams</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            One section, sat the way the real exam runs it: five testlets, the same number of multiple-choice questions and simulations,
            four hours on the clock and a {BREAK_MINUTES}-minute break. Free, with every explanation at the end.
          </p>
          <p className="mt-3 text-sm text-ink-400">A new form for each section on the first of every month (India time).</p>
        </Container>
      </div>

      <Container className="py-10">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => {
            const st = EXAM_STRUCTURE[s.slug];
            if (!st) return null;
            return (
              <li key={s.slug}>
                <Link href={`/mock-exam/${s.slug}`} className="flex h-full flex-col rounded-xl border border-ink-950/10 p-5 hover:border-ink-950/30">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-700">{s.type === "CORE" ? "Core" : "Discipline"}</span>
                  <span className="mt-1 font-display text-2xl font-medium text-ink-950">{s.shortName}</span>
                  <span className="text-sm text-ink-400">{s.name}</span>
                  <span className="mt-3 flex items-center gap-1.5 text-xs text-ink-400">
                    <Clock className="size-3.5" aria-hidden /> {st.mcq[0] + st.mcq[1]} multiple-choice · {st.tbs.reduce((a, b) => a + b, 0)} simulations ·{" "}
                    {EXAM_MINUTES / 60} hours
                  </span>
                  <span className="mt-3 text-sm font-medium text-ink-950">Start this month&apos;s form →</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <section className="mt-14 max-w-3xl border-t border-ink-950/10 pt-10">
          <h2 className="font-display text-2xl font-medium text-ink-950">How it compares with the real exam</h2>
          <div className="mt-4 flex flex-col gap-4 leading-relaxed text-ink-800">
            <p>
              <strong>The same structure.</strong> Testlets 1 and 2 are multiple-choice; testlets 3 to 5 are task-based simulations, in the
              numbers the AICPA publishes for each section. Once a testlet is submitted you cannot go back, and the {BREAK_MINUTES}-minute
              break after testlet 3 does not use exam time.
            </p>
            <p>
              <strong>A different score.</strong> You get a raw percentage weighted like the exam: half multiple-choice and half simulations,
              or 60/40 for ISC. The real exam reports a scaled score that also reflects how hard your questions were, so this percentage
              does not convert to the 75 needed to pass.
            </p>
            <p>
              <strong>Different software.</strong> The questions are SimplyCPA&apos;s own, in the exam&apos;s formats. To practise with the
              real exam&apos;s screens, calculator and spreadsheet, use the AICPA&apos;s free sample tests, listed in our{" "}
              <Link href="/free-cpa-resources" className={link}>
                free CPA resources
              </Link>
              .
            </p>
            <p>
              <strong>When to sit one.</strong> Two to three weeks before your exam, once you have covered the syllabus, so there is time to
              fix what it shows. For shorter checks, use the{" "}
              <Link href="/mini-mock" className={link}>
                weekly mini-mocks
              </Link>{" "}
              or the{" "}
              <Link href="/tools/cpa-readiness-check" className={link}>
                readiness check
              </Link>
              .
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
