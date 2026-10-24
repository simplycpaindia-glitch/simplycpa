import Link from "next/link";
import { ArrowRight, BookOpen, Zap, PenSquare } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";

const steps = [
  {
    icon: BookOpen,
    title: "Study",
    body: "Complete, exam-oriented explanations for every topic — headings, tables, worked examples, and callouts.",
    href: "/cpa",
    cta: "Browse topics",
  },
  {
    icon: Zap,
    title: "Revise",
    body: "A separate 5-minute quick sheet per topic — the key rules, formulas and memory aids, not a second copy of the full material.",
    href: "/quick-sheets",
    cta: "Open quick sheets",
  },
  {
    icon: PenSquare,
    title: "Practise",
    body: "Topic-specific MCQs with full explanations, graded on the server so answers are never exposed early.",
    href: "/#question-of-the-day",
    cta: "Try today's question",
  },
];

export function StudySystem() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How to use SimplyCPA"
          title="Study. Revise. Practise."
          description="One loop, repeated topic by topic until you're ready for the exam."
          align="center"
          className="mx-auto"
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink-950/10 bg-ink-950/10 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col bg-paper-50 p-6">
              <span aria-hidden className="absolute top-6 right-6 font-display text-2xl text-ink-950/10">
                {i + 1}
              </span>
              <s.icon className="mb-3 size-5 text-gold-700" aria-hidden />
              <h3 className="font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-400">{s.body}</p>
              <Link href={s.href} className="mt-4 inline-flex items-center gap-1 py-1 text-sm font-medium text-ink-950 hover:underline">
                {s.cta} <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-center text-sm text-ink-400">Then back to Study for the next topic.</p>
      </Container>
    </section>
  );
}
