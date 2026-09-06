import { MapPin, IndianRupee, FileCheck, Clock } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const points = [
  { icon: MapPin, label: "8 Indian testing cities", body: "Ahmedabad, Bengaluru, Kolkata, Chennai, Hyderabad, Mumbai, New Delhi, Trivandrum." },
  { icon: FileCheck, label: "Credential evaluation first", body: "Your degree needs evaluation by a NACES-member agency before a state board will make you eligible." },
  { icon: IndianRupee, label: "Real, changing costs", body: "Application, exam, and international administration fees vary by state and change — always verify with NASBA." },
  { icon: Clock, label: "6–18 months, typically", body: "Most working Indian candidates finish all four sections in 12–18 months of consistent study." },
];

export function IndianCandidatesTeaser() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="CPA for Indian Students"
              title="Eligibility, evaluation, and cost — explained plainly"
              description="State selection, credential evaluation, NASBA, NIES, international testing — the actual process for Indian CA students, commerce graduates, and working professionals."
            />
            <div className="mt-6">
              <Button href="/indian-candidates" variant="primary">
                Read the full guide
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.label} className="rounded-lg border border-ink-950/10 p-5">
                <p.icon className="size-5 text-gold-600 mb-3" />
                <p className="font-medium text-ink-950">{p.label}</p>
                <p className="mt-1 text-sm text-ink-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
