import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-2xl bg-ink-950 px-8 py-16 text-center text-paper-50 sm:px-16">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-balance max-w-2xl mx-auto">
            Less scrolling. More passing.
          </h2>
          <p className="mt-4 text-paper-50/70 max-w-lg mx-auto">
            Pick a section, open a topic, and start today — your progress is saved as you go.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/register" size="lg" variant="accent">
              Create a free account
            </Button>
            <Button href="/cpa" size="lg" variant="outline-light">
              Browse subjects first
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
