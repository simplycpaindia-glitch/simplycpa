import { Container, SectionHeading } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export function CoreDisciplineExplainer() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="How the exam actually works"
          title="3 Core sections. 1 Discipline. Not “4 mandatory subjects.”"
          description="Every candidate sits FAR, AUD, and REG. Then you pick exactly one Discipline — BAR, ISC, or TCP — based on where you want your career to go. All four lead to the same CPA license."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold-600">
              Core — everyone takes all three
            </p>
            <ul className="space-y-3">
              <SectionRow code="FAR" name="Financial Accounting and Reporting" />
              <SectionRow code="AUD" name="Auditing and Attestation" />
              <SectionRow code="REG" name="Taxation and Regulation" />
            </ul>
          </Card>

          <Card className="p-6 border-gold-500/40">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold-600">
              Discipline — choose exactly one
            </p>
            <ul className="space-y-3">
              <SectionRow code="BAR" name="Business Analysis and Reporting" />
              <SectionRow code="ISC" name="Information Systems and Controls" />
              <SectionRow code="TCP" name="Tax Compliance and Planning" />
            </ul>
            <p className="mt-4 text-xs text-ink-400 leading-relaxed">
              Discipline sections are only offered in four testing windows a year, and once
              you register for one you can&apos;t switch without forfeiting the attempt —
              choose deliberately.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function SectionRow({ code, name }: { code: string; name: string }) {
  return (
    <li className="flex items-baseline gap-3">
      <span className="font-display text-lg font-semibold text-ink-950 w-12 shrink-0">
        {code}
      </span>
      <span className="text-sm text-ink-400">{name}</span>
    </li>
  );
}
