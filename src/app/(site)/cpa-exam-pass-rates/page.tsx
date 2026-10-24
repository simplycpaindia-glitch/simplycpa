import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedTrackers, SourceNote } from "@/components/trackers/TrackerParts";
import { SITE_URL } from "@/lib/site";
import { PASS_RATES, PASS_RATES_CHECKED, PASS_RATES_SOURCE, SECTION_INFO, SECTIONS, type ExamSection } from "@/lib/trackers/pass-rates";

const PATH = "/cpa-exam-pass-rates";
const latest = PASS_RATES[0];
const previous = PASS_RATES[1];
const latestLabel = `${latest.year} (${latest.quarters[0]}–${latest.quarters[latest.quarters.length - 1]})`;
const pct = (n: number) => `${n.toFixed(2)}%`;

const TITLE = `CPA Exam Pass Rates ${latest.year}: Every Section, Every Quarter`;
const DESCRIPTION = `Official CPA Exam pass rates for AUD, FAR, REG, BAR, ISC and TCP — ${latestLabel} and every quarter of ${previous.year} — from the AICPA, with what they mean for planning your sections.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function PassRatesPage() {
  const ranked = [...SECTIONS].sort((a, b) => latest.rates[b].cumulative - latest.rates[a].cumulative);
  const highest = ranked[0];
  const lowest = ranked[ranked.length - 1];
  const change = (s: ExamSection) => latest.rates[s].cumulative - previous.rates[s].cumulative;
  const coreBelowHalf = SECTIONS.filter((s) => SECTION_INFO[s].kind === "Core" && latest.rates[s].cumulative < 50);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: `CPA Exam pass rates by section, ${previous.year}–${latest.year}`,
      description: `Quarterly and cumulative pass rates for the six CPA Exam sections (AUD, FAR, REG, BAR, ISC, TCP), as published by the AICPA, for ${previous.year} and ${latestLabel}.`,
      url: `${SITE_URL}${PATH}`,
      isBasedOn: PASS_RATES_SOURCE,
      creator: { "@type": "Organization", name: "AICPA", url: "https://www.aicpa-cima.com" },
      publisher: { "@id": `${SITE_URL}/#organization` },
      dateModified: PASS_RATES_CHECKED,
      temporalCoverage: `${previous.year}-01-01/${latest.year}-12-31`,
      variableMeasured: "Percentage of candidates who passed each CPA Exam section",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "CPA Exam pass rates", item: `${SITE_URL}${PATH}` },
      ],
    },
  ];

  return (
    <Container className="py-16">
      <JsonLd data={jsonLd} />
      <SectionHeading
        as="h1"
        eyebrow="CPA tracker"
        title={`CPA Exam pass rates, ${latest.year}`}
        description="The share of candidates who passed each section, as published by the AICPA every quarter."
      />
      <SourceNote sources={[{ label: "AICPA — CPA Exam scoring and pass rates", url: PASS_RATES_SOURCE }]} checked={PASS_RATES_CHECKED}>
        The AICPA publishes each quarter&apos;s figures a few weeks after the quarter ends. Its reminder: the exam is
        scored against a fixed standard and isn&apos;t curved, so a higher pass rate means candidates were better
        prepared, not that the exam got easier.
      </SourceNote>

      {/* Headline chart: one series, so the title names it and there's no legend. */}
      <figure className="mt-10 max-w-3xl">
        <figcaption className="font-semibold text-ink-950">Pass rate by section, {latestLabel} cumulative</figcaption>
        <p className="mt-1 text-xs text-ink-400">Hover or tap a bar for the quarterly figures.</p>
        <div className="relative mt-5">
          {/* Recessive gridlines at 0/25/50/75/100% */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-24 right-14 sm:left-28">
            {[0, 25, 50, 75, 100].map((g) => (
              <span key={g} className="absolute inset-y-0 border-l border-ink-950/[0.07]" style={{ left: `${g}%` }}>
                <span className="absolute -bottom-5 -translate-x-1/2 text-xs text-ink-400">{g}%</span>
              </span>
            ))}
          </div>
          <ul className="relative flex flex-col gap-2.5 pb-6">
            {SECTIONS.map((s) => {
              const r = latest.rates[s];
              const tip = `${s}: ${latest.quarters.map((q, i) => `${q} ${pct(r.quarterly[i])}`).join(", ")} · ${previous.year}: ${pct(previous.rates[s].cumulative)}`;
              return (
                <li key={s} className="group relative flex items-center" tabIndex={0} aria-label={tip}>
                  <span className="w-24 shrink-0 pr-3 text-sm sm:w-28">
                    <span className="font-semibold text-ink-950">{s}</span>{" "}
                    <span className="text-xs text-ink-400">{SECTION_INFO[s].kind}</span>
                  </span>
                  <span className="relative mr-14 h-7 flex-1">
                    <span
                      className="absolute inset-y-0 left-0 rounded-r-[4px] bg-gold-600 transition-opacity group-hover:opacity-85"
                      style={{ width: `${r.cumulative}%` }}
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 pl-2 text-sm font-medium text-ink-950" style={{ left: `${r.cumulative}%` }}>
                      {pct(r.cumulative)}
                    </span>
                  </span>
                  <span
                    role="tooltip"
                    className="pointer-events-none invisible absolute left-24 top-full z-10 mt-1 rounded-md bg-ink-950 px-2.5 py-1.5 text-xs text-paper-50 shadow-lg group-hover:visible group-focus:visible sm:left-28"
                  >
                    {tip}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </figure>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-display text-2xl font-medium text-ink-950">What the numbers say</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-800">
          <li>
            <strong>{highest}</strong> has the highest pass rate so far in {latest.year} ({pct(latest.rates[highest].cumulative)}), and{" "}
            <strong>{lowest}</strong> the lowest ({pct(latest.rates[lowest].cumulative)}).
          </li>
          {coreBelowHalf.length > 0 && (
            <li>
              Among the Core sections everyone must pass,{" "}
              {coreBelowHalf.map((s, i) => (
                <span key={s}>
                  {i > 0 && (i === coreBelowHalf.length - 1 ? " and " : ", ")}
                  {s} ({pct(latest.rates[s].cumulative)})
                </span>
              ))}{" "}
              {coreBelowHalf.length === 1 ? "is" : "are"} passed by fewer than half of candidates.
            </li>
          )}
          <li>
            Compared with {previous.year} overall, {SECTIONS.filter((s) => change(s) > 0).join(", ")}{" "}
            {SECTIONS.filter((s) => change(s) > 0).length === 1 ? "is" : "are"} up so far
            {SECTIONS.some((s) => change(s) < 0) && <>, and {SECTIONS.filter((s) => change(s) < 0).join(", ")} down</>}. Half-year
            figures can still move.
          </li>
          <li>
            Pass rates describe everyone who sat a section, not you. Use them to plan how much time each section needs —
            the <Link href="/cpa" className="underline">topic-by-topic study material</Link> and{" "}
            <Link href="/quick-sheets" className="underline">quick sheets</Link> are organised by section.
          </li>
        </ul>
      </section>

      {PASS_RATES.map((y) => (
        <section key={y.year} className="mt-12 max-w-3xl">
          <h2 className="font-display text-2xl font-medium text-ink-950">
            {y.year} pass rates{y.quarters.length < 4 ? ` (${y.quarters.join(", ")} published so far)` : ""}
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <caption className="sr-only">CPA Exam pass rates by section and quarter, {y.year}</caption>
              <thead className="border-b border-ink-950/15 text-xs uppercase tracking-wide text-ink-400">
                <tr>
                  <th scope="col" className="py-2 pr-3 font-medium">Section</th>
                  {y.quarters.map((q) => (
                    <th key={q} scope="col" className="py-2 pr-3 text-right font-medium">{q}</th>
                  ))}
                  <th scope="col" className="py-2 text-right font-medium">{y.quarters.length < 4 ? "Year to date" : "Full year"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-950/10">
                {SECTIONS.map((s) => (
                  <tr key={s}>
                    <th scope="row" className="py-2 pr-3 font-normal">
                      <span className="font-semibold text-ink-950">{s}</span>{" "}
                      <span className="text-ink-400">{SECTION_INFO[s].name}</span>
                    </th>
                    {y.rates[s].quarterly.map((v, i) => (
                      <td key={i} className="py-2 pr-3 text-right tabular-nums">{pct(v)}</td>
                    ))}
                    <td className="py-2 text-right font-semibold tabular-nums">{pct(y.rates[s].cumulative)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="mt-12 max-w-3xl text-ink-800">
        <h2 className="font-display text-2xl font-medium text-ink-950">How scoring works</h2>
        <p className="mt-3">
          You need 75 to pass a section, on a scale of 0 to 99 — it is not a percentage of questions answered correctly.
          AUD, FAR, REG, BAR and TCP weight multiple-choice questions and task-based simulations equally; ISC is 60%
          multiple choice and 40% simulations. You take the three Core sections (AUD, FAR, REG) and one Discipline
          section of your choice (BAR, ISC or TCP).
        </p>
      </section>

      <RelatedTrackers current={PATH} />
    </Container>
  );
}
