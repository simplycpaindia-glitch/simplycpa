import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "How to Become a CPA",
  description: "The step-by-step roadmap from eligibility to CPA licensure for Indian candidates.",
};

const steps = [
  {
    n: 1,
    title: "Check your eligibility",
    body: "Every US state board sets its own education and credit-hour requirements. Start by identifying which jurisdictions you're likely eligible for based on your degree.",
  },
  {
    n: 2,
    title: "Choose a jurisdiction (state board)",
    body: "Your state board determines your requirements, fees, and — eventually — your license. Indian candidates often pick a state based on education requirements rather than residency, since the CPA Exam itself can be taken internationally.",
  },
  {
    n: 3,
    title: "Get your credentials evaluated",
    body: "Most state boards require a foreign credential evaluation from a NACES-member agency to translate your Indian degree into US semester-hour equivalents.",
  },
  {
    n: 4,
    title: "Apply to your state board",
    body: "Submit your application, transcripts, and evaluation report, along with the application/registration fees for the sections you intend to take.",
  },
  {
    n: 5,
    title: "Receive your Notice to Schedule (NTS)",
    body: "Once approved, NASBA issues an NTS for each section — this is what lets you book an exam appointment. NTS validity windows vary, so schedule promptly.",
  },
  {
    n: 6,
    title: "Schedule your exam (India or the US)",
    body: "Book your Prometric appointment. India has multiple testing cities, but international testing carries an additional administration fee on top of the standard exam fee.",
  },
  {
    n: 7,
    title: "Pass all four sections",
    body: "Three Core sections (FAR, AUD, REG) and one Discipline (BAR, ISC, or TCP) — all within your state board's rolling credit window.",
  },
  {
    n: 8,
    title: "Meet experience and licensure requirements",
    body: "Passing the exam and holding a CPA license are not the same thing. Most states also require a period of verified work experience, and some require an additional ethics exam, before you can be licensed.",
  },
];

export default function RoadmapPage() {
  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-14">
        <Container>
          <SectionHeading
            eyebrow="Roadmap"
            title="How to become a CPA"
            description="Passing the CPA Exam and holding a CPA license are two different milestones. Here's the full path, in order."
          />
        </Container>
      </div>
      <Container className="py-16">
        <div className="flex flex-col gap-4 max-w-2xl">
          {steps.map((s) => (
            <Card key={s.n} className="p-6 flex gap-5">
              <span className="font-display text-2xl text-gold-500 shrink-0">
                {String(s.n).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-ink-950">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-400 leading-relaxed">{s.body}</p>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs text-ink-400">
          This is a general outline. Exact requirements, fees, and NTS validity periods vary by
          state board and change over time — see the{" "}
          <a href="/indian-candidates" className="underline">CPA for Indian Students</a> guide
          for more detail, and always confirm current specifics with your state board before acting.
        </p>
      </Container>
    </>
  );
}
