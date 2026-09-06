import { BookOpen, Zap, PenSquare } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";

const steps = [
  {
    icon: BookOpen,
    title: "Study",
    body: "Complete, exam-oriented explanations for every topic — headings, tables, examples, and callouts.",
  },
  {
    icon: Zap,
    title: "Revise",
    body: "A separate 5-minute revision page per topic — the key rules, formulas, and traps, not a second copy of the full material.",
  },
  {
    icon: PenSquare,
    title: "Practice",
    body: "Topic-specific MCQs with full explanations, graded on the server so answers are never exposed early.",
  },
];

export function StudySystem() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How to use SimplyCPA"
          title="Study. Revise. Practice."
          description="One loop, repeated topic by topic until you're ready for the exam."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink-950/10 bg-ink-950/10 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative bg-paper-50 p-6">
              <span className="absolute top-6 right-6 font-display text-2xl text-ink-950/10">
                {i + 1}
              </span>
              <s.icon className="size-5 text-gold-600 mb-3" />
              <h3 className="font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-1.5 text-sm text-ink-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
