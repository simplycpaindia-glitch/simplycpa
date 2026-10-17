import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const PATH = "/editorial-standards";
/** Bump when this page changes materially. */
const UPDATED = "17 October 2026";

export const metadata: Metadata = {
  title: "Editorial Standards: How We Write and Check Content",
  description:
    "Who writes SimplyCPA's study material and articles, which sources we use, how AI tools are used, how facts that change are kept current, and how to report an error.",
  alternates: { canonical: PATH },
};

export default function EditorialStandardsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Editorial standards",
    url: `${SITE_URL}${PATH}`,
    about: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return (
    <Container className="max-w-2xl py-16 prose-cpa">
      <JsonLd data={jsonLd} />
      <h1 className="font-display text-3xl font-medium mb-2">Editorial standards</h1>
      <p className="text-sm text-ink-400">Last updated {UPDATED}.</p>

      <h2>Who writes our content</h2>
      <p>
        Study material, quick sheets, practice questions and articles on SimplyCPA are published by SimplyCPA as an
        organisation, so they carry the byline &ldquo;SimplyCPA&rdquo;. SimplyCPA is an independent resource and is not
        affiliated with the AICPA, NASBA, Prometric or any state board of accountancy. Posts on the{" "}
        <Link href="/what-i-studied">study wall</Link> are written by members and are their own views.
      </p>

      <h2>What we write against</h2>
      <p>
        We organise and write content against the AICPA&apos;s Uniform CPA Examination Blueprints — the official list of
        what each exam section tests — and NASBA&apos;s published guidance. Study topics are grouped by exam section and,
        where we&apos;ve mapped it, by Blueprint area.
      </p>

      <h2>Sources we rely on</h2>
      <ul>
        <li>
          We use primary sources wherever we can: the AICPA, NASBA, FASB, GASB, the PCAOB, the IRS, the SEC and state
          boards of accountancy. Our <Link href="/sources">official sources</Link> page lists the ones our material is
          based on, and our <Link href="/free-cpa-resources">free resources</Link> page explains how to use them.
        </li>
        <li>We link to sources rather than copying them, and we don&apos;t reproduce real or restricted CPA Exam questions.</li>
      </ul>

      <h2>Facts that change</h2>
      <p>
        Fees, eligibility rules, score release dates, pass rates and state laws change. Where we state one of these, we
        show where it came from and the date we last checked it — for example on the{" "}
        <Link href="/fees">fee estimator</Link>, <Link href="/radar">CPA Radar</Link> and our trackers for{" "}
        <Link href="/cpa-exam-pass-rates">pass rates</Link>, <Link href="/cpa-score-release-dates">score release dates</Link>{" "}
        and <Link href="/cpa-licensure-pathways">licensure pathways by state</Link>. Always confirm with the official
        source before you pay a fee or book an exam.
      </p>

      <h2>How we use AI tools</h2>
      <p>
        We use AI tools to help draft and edit some of our study material and articles. That content is written against
        the same Blueprints and official sources as everything else, and it&apos;s held to the same standard: if something
        is wrong, we correct it.
      </p>

      <h2>Practice questions</h2>
      <p>
        Our MCQs are original questions written to match the style and reasoning level of the CPA Exam. They are not real
        exam questions, unless a question is clearly labelled as an official AICPA released or sample question with its
        source linked.
      </p>

      <h2>Updates and corrections</h2>
      <ul>
        <li>Articles and study topics show the date they were last updated.</li>
        <li>
          If you spot an error or something out of date, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or use the <Link href="/contact">contact page</Link>.
          We prioritise anything that affects exam accuracy.
        </li>
      </ul>

      <h2>Independence</h2>
      <p>
        SimplyCPA is free to use. We don&apos;t currently run advertising, sponsored content or affiliate links, and no
        review-course provider pays us for coverage. If that ever changes, we&apos;ll label it clearly and update this page.
      </p>

      <h2>Not professional advice</h2>
      <p>
        Our content is for exam preparation. It isn&apos;t personal financial, tax, legal or immigration advice — see our{" "}
        <Link href="/disclaimer">disclaimer</Link>.
      </p>
    </Container>
  );
}
