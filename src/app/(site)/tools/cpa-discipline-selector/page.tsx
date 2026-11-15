import type { Metadata } from "next";
import Link from "next/link";
import { DisciplineSelector } from "@/components/tools/DisciplineSelector";
import { ToolPageShell } from "@/components/tools/ToolPageShell";

const PATH = "/tools/cpa-discipline-selector";

export const metadata: Metadata = {
  title: "BAR vs ISC vs TCP: Which CPA Discipline Should You Choose?",
  description:
    "A free six-question selector to help you choose your CPA Discipline section: BAR, ISC or TCP. See what each covers, who it suits and what to know before you register.",
  alternates: { canonical: PATH },
};

const link = "text-gold-700 underline underline-offset-2";

export default function DisciplineSelectorPage() {
  return (
    <ToolPageShell
      path={PATH}
      crumb="Discipline Selector"
      title="BAR, ISC or TCP: which Discipline fits you?"
      intro="Every candidate takes FAR, AUD and REG, then chooses one Discipline. All three lead to the same licence. Answer six questions and see which one fits your background and plans, with the reasoning shown."
    >
      <DisciplineSelector />

      <section className="mt-16 max-w-3xl border-t border-ink-950/10 pt-10">
        <h2 className="font-display text-2xl font-medium text-ink-950">How to use the result</h2>
        <div className="mt-4 flex flex-col gap-4 leading-relaxed text-ink-800">
          <p>
            The selector weighs two things: what you already know, and the work you want to do. It does not rank the Disciplines by
            difficulty. Pass rates differ between them, but the candidates who choose each one differ too, so a higher pass rate does
            not mean an easier exam for you. See the figures in our{" "}
            <Link href="/cpa-exam-pass-rates" className={link}>
              pass rate tracker
            </Link>
            .
          </p>
          <p>
            Disciplines are tested only in set windows, with one score release per window. Check the{" "}
            <Link href="/cpa-score-release-dates" className={link}>
              testing windows and score dates
            </Link>{" "}
            before you register, because a failed attempt usually means waiting for the next window.
          </p>
          <p>
            All three Disciplines lead to the same CPA licence. If two options score the same, pick the one that builds on the Core
            section you studied most recently.
          </p>
        </div>
      </section>
    </ToolPageShell>
  );
}
