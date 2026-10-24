import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { indiaTestCitiesText } from "@/lib/india";

export const metadata: Metadata = {
  alternates: { canonical: "/start-here" },
  title: "Start Here",
  description: "New to the US CPA? Seven steps from zero to your first day of studying.",
};

/** When the facts on this page were last checked against AICPA and NASBA. */
const LAST_CHECKED = "24 October 2026";

type StepLink = { href: string; label: string };
const steps: { title: string; body: string; links: StepLink[] }[] = [
  {
    title: "Understand the CPA",
    body: "The US CPA Exam has four sections: three Core (FAR, AUD, REG) that everyone takes, and one Discipline (BAR, ISC, or TCP) that you choose. Passing all four is a major milestone, but it's not the same as being licensed.",
    links: [{ href: "/roadmap", label: "See the full roadmap" }],
  },
  {
    title: "Check eligibility",
    body: "Eligibility is set by individual US state boards, not by nationality or residency. Most want at least 120 US semester hours to sit for the exam. For the license, you'll need either 150 hours plus one year of experience, or, in a growing number of states, 120 hours plus two years. A 3-year Indian B.Com alone is often evaluated below 120 hours, while CA or a postgraduate degree usually closes the gap.",
    links: [
      { href: "/indian-candidates", label: "Eligibility for Indian candidates" },
      { href: "/blog/us-cpa-eligibility-for-indian-ca-students", label: "Eligibility for CA students" },
    ],
  },
  {
    title: "Choose your state",
    body: "You don't need to live in, work in, or ever visit the state whose board you apply through. Pick one whose requirements you can actually meet — this is one of the most consequential early decisions.",
    links: [
      { href: "/blog/which-us-state-is-best-for-indian-cpa-candidates", label: "How to choose a state" },
      { href: "/cpa-licensure-pathways", label: "120 vs 150 hours by state" },
    ],
  },
  {
    title: "Credential evaluation",
    body: "Your state board needs your degree(s) evaluated by an agency it accepts, which converts them into US semester-hour equivalents. Many boards use members of NACES (the National Association of Credential Evaluation Services); NASBA's own NIES service is built for international candidates.",
    links: [{ href: "/blog/us-cpa-credential-evaluation-documents-process-timeline", label: "Evaluation: documents, process and timeline" }],
  },
  {
    title: "Apply",
    body: "Submit your application, transcripts, and evaluation report to your chosen state board, along with the relevant fees.",
    links: [
      { href: "/blog/how-to-apply-for-us-cpa-exam-through-nasba", label: "How to apply through NASBA" },
      { href: "/fees", label: "Estimate what it will cost" },
    ],
  },
  {
    title: "Schedule your exam",
    body: `Once approved, you'll receive a Notice to Schedule (NTS), which lets you book a Prometric appointment — including in India, at centres in ${indiaTestCitiesText()}. Core sections can be taken year-round; Discipline sections only in the first month of each quarter (January, April, July and October).`,
    links: [
      { href: "/blog/how-to-schedule-us-cpa-exam-prometric", label: "How to book with Prometric" },
      { href: "/cpa-score-release-dates", label: "When you'll get your score" },
    ],
  },
  {
    title: "Start studying",
    body: "Pick a Core section and open its first topic. Study the material, revise it in five minutes, then practice with MCQs. Repeat until you're ready.",
    links: [{ href: "/cpa", label: "Browse all sections" }],
  },
];

export default function StartHerePage() {
  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-14">
        <Container>
          <SectionHeading as="h1"
            eyebrow="New to the US CPA?"
            title="Start Here"
            description="Seven steps from never having looked into it, to your first day of studying."
          />
        </Container>
      </div>

      <Container className="py-14 max-w-3xl">
        <ol className="flex flex-col divide-y divide-ink-950/10">
          {steps.map((step, i) => (
            <li key={step.title} id={`step-${i + 1}`} className="flex scroll-mt-24 gap-5 py-7 first:pt-0">
              <span className="font-display text-2xl text-gold-700 shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-semibold text-ink-950">{step.title}</h2>
                <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">{step.body}</p>
                {step.links.length > 0 && (
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {step.links.map((l) => (
                      <Link key={l.href} href={l.href} className="inline-block py-1 font-medium text-ink-800 underline underline-offset-2">
                        {l.label}
                      </Link>
                    ))}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-lg border border-ink-950/10 bg-paper-100 p-6 text-center">
          <h2 className="font-display text-xl font-medium mb-3">Ready to start?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/cpa/far" variant="primary">
              Start FAR
            </Button>
            <Button href="/roadmap" variant="outline">
              See the roadmap
            </Button>
            <Button href="/fees" variant="outline">
              Estimate fees
            </Button>
          </div>
        </div>
        <p className="mt-6 text-xs text-ink-400">
          Last checked {LAST_CHECKED}. Rules are set by each state board and change — confirm with NASBA and your board
          before applying or paying.
        </p>
      </Container>
    </>
  );
}
