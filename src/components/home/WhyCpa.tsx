import { Globe2, Building2, Briefcase, TrendingUp } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";

const reasons = [
  {
    icon: Globe2,
    title: "A globally recognized credential",
    body: "The CPA is a US-issued license, but it's built around US GAAP, SEC reporting, and US tax — knowledge that Big 4 firms, MNCs, and shared-services centers value well beyond the US.",
  },
  {
    icon: Building2,
    title: "Big 4 and global firms",
    body: "Audit, assurance, and US tax practices at Big 4 and mid-tier firms actively recruit CPA-qualified accountants for both US-facing and India-based engagement teams.",
  },
  {
    icon: Briefcase,
    title: "GCC and shared services",
    body: "India's GCC (Global Capability Centre) boom has created large finance, controllership, and tax teams that specifically look for US GAAP and US tax expertise.",
  },
  {
    icon: TrendingUp,
    title: "A credential that complements CA",
    body: "For Indian CAs, the CPA adds a US-specific layer — US GAAP, US tax, SEC reporting — on top of an already-strong Ind AS and Indian tax foundation.",
  },
];

export function WhyCpa() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Why CPA"
          title="Why Indian candidates pursue the US CPA"
          description="Not a promise of a job — a credential that opens specific doors. Here's what the CPA actually gives you."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-ink-950 text-gold-400">
                <r.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-ink-950">{r.title}</h3>
                <p className="mt-1 text-sm text-ink-400 leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
