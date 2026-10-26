import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { formatDate, formatIsoDate } from "@/lib/utils";
import { USD_INR, formatInr, formatUsd, toInr } from "@/lib/india";

const PATH = "/us-cpa-fees-in-inr";

export const metadata: Metadata = {
  title: "US CPA Fees in INR (2026): The Full Cost in Rupees",
  description:
    "What the US CPA Exam costs an Indian candidate in rupees: every fee in USD and INR, totals for passing first time and with retakes, and what's not included. Sourced and dated.",
  alternates: { canonical: PATH },
};

// Rebuilt at most hourly so fee updates in the database appear without a deploy.
export const revalidate = 3600;

export default async function FeesInInrPage() {
  const fees = await prisma.fee.findMany({ orderBy: [{ feeType: "asc" }, { label: "asc" }] });
  const amount = (type: string) => Number(fees.find((f) => f.feeType === type && !/discipline/i.test(f.label))?.amount ?? 0);

  const evaluation = amount("EVALUATION");
  const application = amount("APPLICATION");
  const registration = amount("REGISTRATION");
  const exam = amount("EXAM_SECTION");
  const international = amount("INTERNATIONAL_ADMIN");
  const perAttempt = registration + exam + international;
  const oneTime = evaluation + application;
  const scenarios = [0, 1, 2].map((retakes) => ({ retakes, usd: oneTime + perAttempt * (4 + retakes) }));
  const lastVerified = fees.reduce<Date | null>((latest, f) => (!latest || f.lastVerified > latest ? f.lastVerified : latest), null);
  const sourceOf = (type: string) => fees.find((f) => f.feeType === type)?.sourceUrl;

  const rows = [
    { label: "Credential evaluation", when: "Once, before applying", usd: evaluation, note: "Typical midpoint; evaluators charge roughly $100–$400 depending on the agency and report.", source: sourceOf("EVALUATION") },
    { label: "Initial application fee", when: "Once, to your state board", usd: application, note: "About $96–$103 for many boards; some charge more.", source: sourceOf("APPLICATION") },
    { label: "Registration fee", when: "Each section, each attempt", usd: registration, note: "Typical figure; some boards differ or charge none.", source: sourceOf("REGISTRATION") },
    { label: "Exam section fee", when: "Each section, each attempt", usd: exam, note: "Set nationally through NASBA.", source: sourceOf("EXAM_SECTION") },
    { label: "International testing fee (India)", when: "Each section, each attempt", usd: international, note: "Charged only when you test outside the United States; non-refundable.", source: sourceOf("INTERNATIONAL_ADMIN") },
  ];

  const rateLine = `${USD_INR.source}: ₹${USD_INR.rate} per US dollar on ${formatIsoDate(USD_INR.asOf)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "CPA for Indians", item: `${SITE_URL}/indian-candidates` },
      { "@type": "ListItem", position: 3, name: "US CPA fees in INR", item: `${SITE_URL}${PATH}` },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container className="max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href="/indian-candidates" className="hover:text-ink-950">CPA for Indians</Link>
            <span>/</span>
            <span className="text-ink-950">Fees in INR</span>
          </div>
          <h1 className="font-display text-4xl font-medium text-balance text-ink-950">US CPA fees in INR (2026)</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            Every fee an Indian candidate pays to sit the US CPA Exam, in dollars and rupees, with the source and the date we last
            checked it.
          </p>
        </Container>
      </div>

      <Container className="max-w-4xl py-10">
        <div className="rounded-lg border-l-4 border-gold-500 bg-paper-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">In short</p>
          <p className="mt-2 leading-relaxed text-ink-950">
            Passing all four sections at the first attempt while testing in India costs about{" "}
            <strong>{formatInr(toInr(scenarios[0].usd))}</strong> ({formatUsd(scenarios[0].usd)}) in exam and evaluation fees. Each
            extra attempt adds about <strong>{formatInr(toInr(perAttempt))}</strong> ({formatUsd(perAttempt)}).
          </p>
          <p className="mt-2 text-xs text-ink-400">
            At the {rateLine}. Your card or bank will apply its own rate and charges.
          </p>
        </div>

        <section aria-labelledby="fees" className="mt-10">
          <h2 id="fees" className="font-display text-2xl font-medium text-ink-950">Every fee, in dollars and rupees</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-ink-950/10">
            <table className="w-full min-w-[36rem] text-sm">
              <thead className="bg-paper-100 text-left text-xs uppercase tracking-wide text-ink-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Fee</th>
                  <th scope="col" className="px-4 py-3">When you pay it</th>
                  <th scope="col" className="px-4 py-3 text-right">USD</th>
                  <th scope="col" className="px-4 py-3 text-right">INR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-950/10">
                {rows.map((r) => (
                  <tr key={r.label} className="align-top">
                    <th scope="row" className="px-4 py-3 text-left font-medium text-ink-950">
                      {r.label}
                      <span className="mt-0.5 block text-xs font-normal text-ink-400">
                        {r.note}
                        {r.source && (
                          <>
                            {" "}
                            <a href={r.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Source</a>
                          </>
                        )}
                      </span>
                    </th>
                    <td className="px-4 py-3 text-ink-800">{r.when}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{formatUsd(r.usd)}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{formatInr(toInr(r.usd))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="totals" className="mt-10">
          <h2 id="totals" className="font-display text-2xl font-medium text-ink-950">What the whole exam costs</h2>
          <p className="mt-3 leading-relaxed text-ink-800">
            One-time costs (evaluation and application) plus, for every section attempt, the registration, exam and India testing
            fees: {formatUsd(perAttempt)} ({formatInr(toInr(perAttempt))}) per attempt.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-ink-950/10">
            <table className="w-full min-w-[28rem] text-sm">
              <thead className="bg-paper-100 text-left text-xs uppercase tracking-wide text-ink-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Scenario</th>
                  <th scope="col" className="px-4 py-3 text-right">USD</th>
                  <th scope="col" className="px-4 py-3 text-right">INR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-950/10">
                {scenarios.map((s) => (
                  <tr key={s.retakes}>
                    <th scope="row" className="px-4 py-3 text-left font-medium text-ink-950">
                      All four sections, {s.retakes === 0 ? "each passed first time" : `with ${s.retakes} retake${s.retakes === 1 ? "" : "s"}`}
                    </th>
                    <td className="px-4 py-3 text-right tabular-nums">{formatUsd(s.usd)}</td>
                    <td className="px-4 py-3 text-right font-medium tabular-nums">{formatInr(toInr(s.usd))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-ink-400">
            Plan your own mix of attempts with the <Link href="/fees" className="underline underline-offset-2">fee estimator</Link>.
          </p>
        </section>

        <section aria-labelledby="not-included" className="mt-10">
          <h2 id="not-included" className="font-display text-2xl font-medium text-ink-950">What these totals leave out</h2>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-ink-800">
            <li><strong>Your bank&apos;s charges.</strong> Fees are paid in US dollars, usually by international card. Banks add a markup on the exchange rate and charge tax on the conversion, so you will pay somewhat more than the rupee figures here.</li>
            <li><strong>Study material.</strong> Paid review courses vary widely in price. SimplyCPA&apos;s study notes, questions and simulations are free.</li>
            <li><strong>Rescheduling.</strong> Prometric charges a fee for changing an appointment at short notice; the amount depends on how close to the test date you change it.</li>
            <li><strong>After the exam.</strong> Many boards require an ethics exam, and every board charges for the licence itself. These vary by state.</li>
            <li><strong>Travel.</strong> Getting to one of the {" "}<Link href="/cpa-exam-centres-india" className="underline underline-offset-2">Prometric centres in India</Link>, and a hotel if you need one.</li>
          </ul>
        </section>

        <section aria-labelledby="dates" className="mt-10 rounded-lg border border-ink-950/10 bg-paper-100/60 p-5 text-sm leading-relaxed text-ink-800">
          <h2 id="dates" className="font-semibold text-ink-950">Exchange rate and dates</h2>
          <p className="mt-2">
            Rupee figures use the {rateLine} (
            <a href={USD_INR.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">source</a>
            ), last checked {formatIsoDate(USD_INR.checked)}, rounded to the nearest rupee.
            {lastVerified && <> Dollar fees were last checked against NASBA&apos;s pages on {formatDate(lastVerified)}.</>}
          </p>
          <p className="mt-2 text-ink-400">
            Fees vary by state board and change from time to time. Confirm the current amounts on your board&apos;s NASBA page before you pay.
          </p>
        </section>

        <nav aria-label="More for Indian candidates" className="mt-10 border-t border-ink-950/10 pt-6 text-sm">
          <p className="font-medium text-ink-950">More for Indian candidates</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            <li><Link href="/indian-candidates" className="underline underline-offset-2">The CPA process for Indian candidates</Link></li>
            <li><Link href="/cpa-exam-centres-india" className="underline underline-offset-2">CPA exam centres in India</Link></li>
            <li><Link href="/cpa-licensure-pathways" className="underline underline-offset-2">120 vs 150 hours by state</Link></li>
          </ul>
        </nav>
      </Container>
    </>
  );
}
