import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Start Here",
  description: "New to the US CPA? Seven steps from zero to your first day of studying.",
};

const steps: { title: string; body: string; link?: { href: string; label: string } }[] = [
  {
    title: "Understand the CPA",
    body: "The US CPA Exam has four sections: three Core (FAR, AUD, REG) that everyone takes, and one Discipline (BAR, ISC, or TCP) that you choose. Passing all four is a major milestone, but it's not the same as being licensed.",
    link: { href: "/roadmap", label: "See the full roadmap" },
  },
  {
    title: "Check eligibility",
    body: "Eligibility is set by individual US state boards, not by nationality or residency. Most want at least 120 US semester hours to sit for the exam. For the license, you'll need either 150 hours plus one year of experience, or, in a growing number of states, 120 hours plus two years. A 3-year Indian B.Com alone is often evaluated below 120 hours, while CA or a postgraduate degree usually closes the gap.",
    link: { href: "/indian-candidates", label: "Eligibility for Indian candidates" },
  },
  {
    title: "Choose your state",
    body: "You don't need to live in, work in, or ever visit the state whose board you apply through. Pick one whose requirements you can actually meet — this is one of the most consequential early decisions.",
    link: { href: "/indian-candidates", label: "How state selection works" },
  },
  {
    title: "Credential evaluation",
    body: "Most state boards require your degree(s) to be evaluated by a NACES-member agency, converting your qualifications into US semester-hour equivalents. NASBA's own NIES service exists specifically to help place international candidates.",
  },
  {
    title: "Apply",
    body: "Submit your application, transcripts, and evaluation report to your chosen state board, along with the relevant fees.",
    link: { href: "/fees", label: "Estimate what it will cost" },
  },
  {
    title: "Schedule your exam",
    body: "Once approved, you'll receive a Notice to Schedule (NTS) for each section, which lets you book a Prometric appointment, including at one of several testing centers in India. Core sections can be booked year-round; Discipline sections only in January, April, July, and October.",
  },
  {
    title: "Start studying",
    body: "Pick a Core section and open its first topic. Study the material, revise it in five minutes, then practice with MCQs. Repeat until you're ready.",
    link: { href: "/cpa", label: "Browse all sections" },
  },
];

export default function StartHerePage() {
  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-14">
        <Container>
          <SectionHeading
            eyebrow="New to the US CPA?"
            title="Start Here"
            description="Seven steps from never having looked into it, to your first day of studying."
          />
        </Container>
      </div>

      <Container className="py-14 max-w-3xl">
        <ol className="flex flex-col divide-y divide-ink-950/10">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5 py-7 first:pt-0">
              <span className="font-display text-2xl text-gold-600 shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-semibold text-ink-950">{step.title}</h2>
                <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">{step.body}</p>
                {step.link && (
                  <a href={step.link.href} className="mt-2 inline-block text-sm underline text-ink-800">
                    {step.link.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-lg border border-ink-950/10 bg-paper-100 p-6 text-center">
          <h2 className="font-display text-xl font-medium mb-3">Ready to study?</h2>
          <Button href="/cpa/far" variant="primary">
            Start FAR
          </Button>
        </div>
      </Container>
    </>
  );
}
