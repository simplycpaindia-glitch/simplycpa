import { Container, SectionHeading } from "@/components/ui/Container";

const steps = [
  { n: "01", title: "Study", body: "Clear, exam-oriented explanations — headings, tables, examples, and callouts, not walls of text." },
  { n: "02", title: "Revise", body: "A separate, much shorter revision page per topic — the 20% you actually need the night before." },
  { n: "03", title: "Practice", body: "Topic-wise and mixed MCQs with full explanations, server-graded so answers are never exposed early." },
  { n: "04", title: "Discuss", body: "Ask doubts, read explanations from other candidates, and get moderated, spam-free answers." },
  { n: "05", title: "Track", body: "See what's done, what's weak, and what to revisit — without a wall of gamified badges." },
];

export function StudySystem() {
  return (
    <section className="py-20 bg-paper-100">
      <Container>
        <SectionHeading
          eyebrow="The study system"
          title="One loop, repeated until you're ready"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n}>
              <p className="font-display text-3xl text-gold-500 mb-2">{s.n}</p>
              <h3 className="font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-1 text-sm text-ink-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
