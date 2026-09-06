import { Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const steps = [
  "Understand the CPA",
  "Check eligibility",
  "Choose your state",
  "Credential evaluation",
  "Apply",
  "Schedule your exam",
  "Start studying",
];

export function StartHereTeaser() {
  return (
    <section className="py-16 sm:py-20 bg-paper-100">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="New here?" title="Start Here" />
            <p className="mt-3 text-ink-400 max-w-sm">
              New to the US CPA? Seven steps from &ldquo;never heard of it&rdquo; to your first
              day of studying.
            </p>
            <div className="mt-6">
              <Button href="/start-here" variant="primary">
                Start Here
              </Button>
            </div>
          </div>
          <ol className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-2 text-sm">
                <span className="font-display text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink-800">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
