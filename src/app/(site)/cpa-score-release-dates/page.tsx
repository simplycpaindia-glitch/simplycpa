import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedTrackers, SourceNote } from "@/components/trackers/TrackerParts";
import { ScoreReleaseFinder } from "@/components/trackers/ScoreReleaseFinder";
import { SITE_URL } from "@/lib/site";
import { formatIsoDate } from "@/lib/utils";
import {
  CORE_ROLLING,
  CORE_WINDOWS,
  DISCIPLINE_WINDOWS,
  SCORE_RELEASE_CHECKED,
  SCORE_RELEASE_SOURCE,
  type Window,
} from "@/lib/trackers/score-release";

const PATH = "/cpa-score-release-dates";
const TITLE = "CPA Exam Score Release Dates 2026–2027 (with Date Finder)";
const DESCRIPTION =
  "Official AICPA target score release dates for every CPA Exam section through June 2028, a finder that works out your date, and the July 2027 change to a new testing platform.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

function WindowTable({ caption, rows }: { caption: string; rows: Window[] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-ink-950/15 text-xs uppercase tracking-wide text-ink-400">
          <tr>
            <th scope="col" className="py-2 pr-3 font-medium">You test between</th>
            <th scope="col" className="py-2 font-medium">Target score release</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-950/10">
          {rows.map((w) => (
            <tr key={w.from}>
              <td className="py-2 pr-3">
                {formatIsoDate(w.from)} – {formatIsoDate(w.to)}
              </td>
              <td className="py-2 font-semibold text-ink-950">{formatIsoDate(w.release)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ScoreReleasePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}${PATH}`,
      dateModified: SCORE_RELEASE_CHECKED,
      isBasedOn: SCORE_RELEASE_SOURCE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "CPA score release dates", item: `${SITE_URL}${PATH}` },
      ],
    },
  ];

  return (
    <Container className="py-16">
      <JsonLd data={jsonLd} />
      <SectionHeading
        as="h1"
        eyebrow="CPA tracker"
        title="CPA Exam score release dates"
        description="When you'll get your score for each section, using the AICPA's published target dates."
      />
      <SourceNote sources={[{ label: "AICPA — Find out when you'll get your CPA Exam score", url: SCORE_RELEASE_SOURCE }]} checked={SCORE_RELEASE_CHECKED}>
        All dates are the AICPA&apos;s targets and can change, and some state boards take a day or more longer to post
        scores.
      </SourceNote>

      <div className="mt-8 max-w-3xl">
        <ScoreReleaseFinder />
      </div>

      <section className="mt-12 max-w-3xl text-ink-800">
        <h2 className="font-display text-2xl font-medium text-ink-950">How score release works</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong>Core sections (AUD, FAR, REG)</strong> can be taken any time. Until June 2027 their scores are released
            on a rolling schedule tied to when the AICPA <em>receives your exam file</em> from Prometric, not the test date itself — and your exam can&apos;t be scored until that file arrives.
          </li>
          <li>
            <strong>Discipline sections (BAR, ISC, TCP)</strong> are only tested in the first month of each quarter, and
            everyone in a window gets their score on the same target date, about six weeks after the window closes.
          </li>
          <li>
            <strong>From July 2027</strong> the exam moves to a new delivery platform. Every section then uses fixed testing
            windows with one release date each. After the first window, Core testing ends on the 15th of each window&apos;s
            last month. The new schedule starts on 12 July 2027; the AICPA hasn&apos;t published dates for 1–11 July.
          </li>
          <li>
            The AICPA says you must complete all four sections within 30 months of sitting your first one — longer in
            some states. Check your state board for exactly when your clock starts.
          </li>
        </ul>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-display text-2xl font-medium text-ink-950">Core sections (AUD, FAR, REG) to June 2027</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Core section rolling score release schedule</caption>
            <thead className="border-b border-ink-950/15 text-xs uppercase tracking-wide text-ink-400">
              <tr>
                <th scope="col" className="py-2 pr-3 font-medium">If the AICPA receives your file by</th>
                <th scope="col" className="py-2 font-medium">Target score release</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-950/10">
              {CORE_ROLLING.map((r) => (
                <tr key={r.receivedBy}>
                  <td className="py-2 pr-3">{formatIsoDate(r.receivedBy)}</td>
                  <td className="py-2 font-semibold text-ink-950">{formatIsoDate(r.release)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-display text-2xl font-medium text-ink-950">Core sections from July 2027 (new platform)</h2>
        <WindowTable caption="Core section score release schedule from July 2027" rows={CORE_WINDOWS} />
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-display text-2xl font-medium text-ink-950">Discipline sections (BAR, ISC, TCP)</h2>
        <WindowTable caption="Discipline section testing windows and score release dates" rows={DISCIPLINE_WINDOWS} />
      </section>

      <RelatedTrackers current={PATH} />
    </Container>
  );
}
