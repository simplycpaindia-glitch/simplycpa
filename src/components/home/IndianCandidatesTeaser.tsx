import { MapPin, IndianRupee, FileCheck, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const points = [
  { icon: MapPin, label: "8 Indian testing cities", body: "Ahmedabad, Bengaluru, Kolkata, Chennai, Hyderabad, Mumbai, New Delhi, Trivandrum." },
  { icon: FileCheck, label: "Credential evaluation first", body: "Your degree needs evaluation by a NACES-member agency before a state board will make you eligible." },
  { icon: IndianRupee, label: "Real, changing costs", body: "Application, exam, and international administration fees vary by state and change — we track them as data, not copy." },
  { icon: Clock, label: "6–18 months, typically", body: "Most working Indian candidates finish all four sections in 12–18 months of consistent study." },
];

export function IndianCandidatesTeaser() {
  return (
    <section className="py-20 bg-ink-950 text-paper-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-2">
              CPA for Indian Students
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-balance">
              The parts nobody explains clearly: eligibility, evaluation, and cost.
            </h2>
            <p className="mt-4 text-paper-50/70 leading-relaxed max-w-md">
              State selection, credential evaluation, NASBA, NIES, international testing —
              we lay out the actual process for Indian CA students, commerce graduates, and
              working professionals.
            </p>
            <div className="mt-6">
              <Button href="/indian-candidates" variant="accent">
                Read the full guide
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.label} className="rounded-lg border border-paper-50/10 p-5">
                <p.icon className="size-5 text-gold-400 mb-3" />
                <p className="font-medium text-paper-50">{p.label}</p>
                <p className="mt-1 text-sm text-paper-50/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
