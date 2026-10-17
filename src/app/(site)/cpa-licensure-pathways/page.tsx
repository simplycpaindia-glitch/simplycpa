import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedTrackers, SourceNote } from "@/components/trackers/TrackerParts";
import { SITE_URL } from "@/lib/site";
import { formatIsoDate, todayIst } from "@/lib/utils";
import {
  INDIA_INTERNATIONAL_FEE_USD,
  INTERNATIONAL_SOURCE,
  JURISDICTIONS,
  PATHWAYS_CHECKED,
  PATHWAYS_SOURCE,
  PATHWAYS_SOURCE_AS_OF,
  pathwayStatus,
  type PathwayStatus,
} from "@/lib/trackers/pathways";

// "In effect" vs "upcoming" depends on today's date, so rebuild daily.
export const revalidate = 86400;

const PATH = "/cpa-licensure-pathways";
const TITLE = "120 vs 150 Credit Hours: New CPA Licensure Pathways by State";
const DESCRIPTION =
  "Which US states have adopted the new 120-hour CPA licensure pathway and when it takes effect, from NASBA's tracker — plus which states let you sit the CPA Exam in India.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

const STATUS_LABEL: Record<PathwayStatus, string> = {
  "in-effect": "Law in effect",
  upcoming: "Law signed, takes effect later",
  listed: "Listed by NASBA — date not yet published",
  none: "Not on NASBA's list",
};
const STATUS_TONE: Record<PathwayStatus, "green" | "gold" | "neutral"> = {
  "in-effect": "green",
  upcoming: "gold",
  listed: "gold",
  none: "neutral",
};

export default function PathwaysPage() {
  const today = todayIst();
  const rows = JURISDICTIONS.map((j) => ({ ...j, status: pathwayStatus(j, today) }));
  const count = (s: PathwayStatus) => rows.filter((r) => r.status === s).length;
  const noIndia = rows.filter((r) => !r.testsInIndia).map((r) => r.name);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "New CPA licensure pathways by US jurisdiction",
      description:
        "For each of the 55 US jurisdictions: whether a new CPA licensure pathway (such as 120 credit hours plus two years of experience) has been signed into law and its effective date, per NASBA, and whether the jurisdiction takes part in international CPA Exam testing.",
      url: `${SITE_URL}${PATH}`,
      isBasedOn: [PATHWAYS_SOURCE, INTERNATIONAL_SOURCE],
      creator: { "@type": "Organization", name: "NASBA", url: "https://nasba.org" },
      publisher: { "@id": `${SITE_URL}/#organization` },
      dateModified: PATHWAYS_CHECKED,
      spatialCoverage: "United States",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "CPA licensure pathways by state", item: `${SITE_URL}${PATH}` },
      ],
    },
  ];

  return (
    <Container className="py-16">
      <JsonLd data={jsonLd} />
      <SectionHeading
        as="h1"
        eyebrow="CPA tracker"
        title="120 vs 150 hours: new CPA licensure pathways by state"
        description="Most states are adding a route to a CPA licence that needs 120 credit hours plus more work experience, instead of 150 hours. Here's where each one stands."
      />
      <SourceNote
        sources={[
          { label: "NASBA — New Licensure Pathways", url: PATHWAYS_SOURCE },
          { label: "NASBA — International administration", url: INTERNATIONAL_SOURCE },
        ]}
        checked={PATHWAYS_CHECKED}
      >
        NASBA&apos;s list is current as of {formatIsoDate(PATHWAYS_SOURCE_AS_OF)}. The dates are when each law takes effect;
        NASBA notes that board rules will further define the new requirements, so confirm with the board before relying on a
        pathway.
      </SourceNote>

      <section className="mt-10 max-w-3xl text-ink-800">
        <h2 className="font-display text-2xl font-medium text-ink-950">The three pathways</h2>
        <p className="mt-3">
          In 2025 NASBA and the AICPA updated the model law for CPA licensing. It now recognises three routes, and every
          one still requires passing the CPA Exam:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong>Graduate degree:</strong> a graduate degree in accounting + 1 year of professional experience.</li>
          <li><strong>Traditional 150-hour:</strong> a bachelor&apos;s in accounting + 30 more credits (150 in total) + 1 year of experience.</li>
          <li><strong>New 120-hour:</strong> a bachelor&apos;s in accounting (120 credits) + 2 years of experience.</li>
        </ul>
        <p className="mt-3">
          States must pass their own laws to adopt the new route, and the details differ — some, like Alabama, moved the
          education and experience rules out of the law and into board rules. <strong>These are routes to a licence.</strong>{" "}
          They don&apos;t change the exam itself, and each board sets separately when you can sit for it.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="font-display text-2xl font-medium text-ink-950">At a glance</h2>
        <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {(["in-effect", "upcoming", "listed", "none"] as const).map((s) => (
            <div key={s} className="rounded-xl border border-ink-950/10 bg-paper-50 p-3">
              <dt className="text-xs text-ink-400">{STATUS_LABEL[s]}</dt>
              <dd className="mt-1 font-display text-2xl font-medium text-ink-950">{count(s)}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-2 text-xs text-ink-400">Out of 55 jurisdictions: 50 states, DC, Guam, Puerto Rico, the US Virgin Islands and the Northern Mariana Islands.</p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="font-display text-2xl font-medium text-ink-950">Every jurisdiction</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">New CPA licensure pathway status and international testing, by jurisdiction</caption>
            <thead className="border-b border-ink-950/15 text-xs uppercase tracking-wide text-ink-400">
              <tr>
                <th scope="col" className="py-2 pr-3 font-medium">Jurisdiction</th>
                <th scope="col" className="py-2 pr-3 font-medium">New pathway law (NASBA)</th>
                <th scope="col" className="py-2 font-medium">Test in India?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-950/10">
              {rows.map((r) => (
                <tr key={r.name}>
                  <th scope="row" className="py-2 pr-3 font-semibold text-ink-950">{r.name}</th>
                  <td className="py-2 pr-3">
                    <Badge tone={STATUS_TONE[r.status]} className="rounded-lg">
                      {r.status === "in-effect" || r.status === "upcoming"
                        ? `Law ${r.status === "in-effect" ? "effective" : "takes effect"} ${formatIsoDate(r.pathwayEffective!)}`
                        : STATUS_LABEL[r.status]}
                    </Badge>
                  </td>
                  <td className="py-2">{r.testsInIndia ? "Yes" : <strong className="text-ink-950">No</strong>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 max-w-3xl text-ink-800">
        <h2 className="font-display text-2xl font-medium text-ink-950">If you&apos;re in India</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            You apply through a US state board, and you can then sit the exam at a Prometric centre in India —{" "}
            <strong>unless</strong> that board doesn&apos;t take part in international testing. According to NASBA, those are{" "}
            {noIndia.join(", ")}.
          </li>
          <li>
            Testing in India costs an extra <strong>${INDIA_INTERNATIONAL_FEE_USD} for each section</strong> you take there, on
            top of the normal exam fees (per NASBA). See the <Link href="/fees" className="underline">fee estimator</Link>.
          </li>
          <li>
            Your Indian degrees need a credential evaluation by an evaluator your board accepts — NASBA&apos;s NIES is one. The
            board then decides whether you meet its education requirements.
          </li>
          <li>
            The licence pathway matters after you pass. If you plan to work in the US, check the experience rules of the
            state you&apos;d license in — and how your licence would be recognised in other states (see{" "}
            <a href="https://cpamobility.org/" target="_blank" rel="noopener noreferrer" className="underline">CPA Mobility</a>).
          </li>
        </ul>
        <p className="mt-4">
          More on choosing a state, evaluation and costs: <Link href="/indian-candidates" className="underline">CPA for Indian candidates</Link> and{" "}
          <Link href="/free-cpa-resources#eligibility" className="underline">free official resources</Link>.
        </p>
      </section>

      <RelatedTrackers current={PATH} />
    </Container>
  );
}
