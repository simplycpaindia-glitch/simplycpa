import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { FeeEstimator, type EstimatorFees } from "@/components/fees/FeeEstimator";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CPA Exam Fee Estimator",
  description:
    "Estimate the total cost of the US CPA Exam for Indian candidates — application, exam, international administration, and evaluation fees, each with its source and last-verified date.",
};

const TYPE_LABEL: Record<string, string> = {
  APPLICATION: "Application",
  EXAM_SECTION: "Exam section",
  REGISTRATION: "Registration",
  INTERNATIONAL_ADMIN: "International administration",
  EVALUATION: "Credential evaluation",
  ETHICS_EXAM: "Ethics exam",
  OTHER: "Other",
};

export default async function FeesPage() {
  const fees = await prisma.fee.findMany({
    include: { jurisdiction: { select: { name: true } } },
    orderBy: [{ feeType: "asc" }, { label: "asc" }],
  });

  const amountOf = (predicate: (f: (typeof fees)[number]) => boolean) =>
    Number(fees.find(predicate)?.amount ?? 0);

  const estimatorFees: EstimatorFees = {
    application: amountOf((f) => f.feeType === "APPLICATION"),
    evaluation: amountOf((f) => f.feeType === "EVALUATION"),
    registration: amountOf((f) => f.feeType === "REGISTRATION"),
    examSection: amountOf((f) => f.feeType === "EXAM_SECTION"),
    intlCore: amountOf((f) => f.feeType === "INTERNATIONAL_ADMIN" && !/discipline/i.test(f.label)),
    intlDiscipline: amountOf((f) => f.feeType === "INTERNATIONAL_ADMIN" && /discipline/i.test(f.label)),
  };

  const latestVerified = fees.reduce<Date | null>(
    (latest, f) => (!latest || f.lastVerified > latest ? f.lastVerified : latest),
    null
  );

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-14">
        <Container>
          <SectionHeading
            eyebrow="Fee Estimator"
            title="What will the CPA Exam cost you?"
            description="A rough, sourced estimate for candidates testing in India. Every figure below carries its source and the date we last checked it, because these fees change and differ by state."
          />
          {latestVerified && (
            <p className="mt-4 text-xs text-ink-400">Figures last verified {formatDate(latestVerified)}</p>
          )}
        </Container>
      </div>

      <Container className="py-12">
        {fees.length > 0 ? (
          <FeeEstimator fees={estimatorFees} />
        ) : (
          <p className="text-ink-400">Fee data hasn&apos;t been published yet.</p>
        )}

        <h2 className="mt-16 mb-4 font-display text-2xl font-medium">Every fee we track</h2>
        <div className="overflow-x-auto rounded-lg border border-ink-950/10">
          <table className="w-full text-sm">
            <thead className="bg-paper-100 text-left text-xs uppercase tracking-wide text-ink-400">
              <tr>
                <th className="px-4 py-3">Fee</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3 text-right">Amount</th>
                <th className="px-4 py-3">Verified</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-950/10">
              {fees.map((f) => (
                <tr key={f.id} className="align-top">
                  <td className="px-4 py-3">
                    <p className="font-medium text-ink-950">{f.label}</p>
                    {f.notes && <p className="mt-1 max-w-md text-xs text-ink-400 leading-relaxed">{f.notes}</p>}
                    <a
                      href={f.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs text-gold-600 underline"
                    >
                      Source
                    </a>
                  </td>
                  <td className="px-4 py-3 text-ink-400">{TYPE_LABEL[f.feeType] ?? f.feeType}</td>
                  <td className="px-4 py-3 text-right font-medium tabular-nums">
                    {f.currency} {Number(f.amount).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-xs text-ink-400 whitespace-nowrap">{formatDate(f.lastVerified)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-2xl text-xs text-ink-400 leading-relaxed">
          This is an estimate, not a quote. Application and registration fees vary widely by state
          board, evaluation agencies price their reports differently, and NASBA revises its fees
          periodically. Confirm every amount with NASBA and your chosen state board before paying.
          See the <Link href="/indian-candidates" className="underline">CPA for Indian Students</Link> guide
          for how the process fits together.
        </p>
      </Container>
    </>
  );
}
