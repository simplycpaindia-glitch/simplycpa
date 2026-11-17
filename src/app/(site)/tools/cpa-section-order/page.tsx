import type { Metadata } from "next";
import Link from "next/link";
import { SectionOrderPlanner } from "@/components/tools/SectionOrderPlanner";
import { ToolPageShell } from "@/components/tools/ToolPageShell";

const PATH = "/tools/cpa-section-order";

export const metadata: Metadata = {
  title: "Best Order to Take the CPA Exam Sections: Free Planner",
  description:
    "Which CPA section should you take first? Answer four questions about your background, goals and Discipline, and get a suggested order for FAR, AUD, REG and BAR, ISC or TCP, with the reasons.",
  alternates: { canonical: PATH },
};

const link = "text-gold-700 underline underline-offset-2";

export default function SectionOrderPage() {
  return (
    <ToolPageShell
      path={PATH}
      crumb="Section Order Planner"
      title="Which CPA section should you take first?"
      intro="There is no single right order, but there is usually a sensible one for you. Answer four questions and get a suggested order for your three Core sections and your Discipline, with the reasoning for each step."
    >
      <SectionOrderPlanner />

      <section className="mt-16 max-w-3xl border-t border-ink-950/10 pt-10">
        <h2 className="font-display text-2xl font-medium text-ink-950">How the planner decides</h2>
        <div className="mt-4 flex flex-col gap-4 leading-relaxed text-ink-800">
          <p>
            It uses three ideas. Content builds on content: FAR supports AUD and BAR, and REG supports TCP. Your background is a head
            start worth using. And the Discipline is best taken straight after the Core section it builds on.
          </p>
          <p>
            Pass rates differ by section, which matters if you want an early win. See the latest figures in our{" "}
            <Link href="/cpa-exam-pass-rates" className={link}>
              pass rate tracker
            </Link>
            , and read{" "}
            <Link href="/blog/far-vs-aud-vs-reg-which-to-start-with" className={link}>
              FAR vs AUD vs REG: which to start with
            </Link>{" "}
            for the longer argument.
          </p>
          <p>
            Not sure about your Discipline yet? Try the{" "}
            <Link href="/tools/cpa-discipline-selector" className={link}>
              Discipline selector
            </Link>
            . Ready to schedule? The{" "}
            <Link href="/study-planner" className={link}>
              study planner
            </Link>{" "}
            turns your order into weekly targets and exam dates.
          </p>
        </div>
      </section>
    </ToolPageShell>
  );
}
