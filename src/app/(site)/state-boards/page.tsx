import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { BOARDS, BOARDS_READ, boardJurisdiction } from "@/lib/state-boards";
import { pathwayStatus } from "@/lib/trackers/pathways";
import { SITE_URL } from "@/lib/site";
import { formatIsoDate, todayIst } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CPA State Boards for Indian Candidates: Requirements Compared",
  description:
    "Nine US state boards compared for international CPA candidates: education needed to sit, evaluators accepted, Social Security number rules, fees and credit window. Read from each board's NASBA page.",
  alternates: { canonical: "/state-boards" },
};

const link = "text-gold-700 underline underline-offset-2";

export default function StateBoardsPage() {
  const today = todayIst();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CPA state boards for international candidates",
    url: `${SITE_URL}/state-boards`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: BOARDS.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, url: `${SITE_URL}/state-boards/${b.slug}` })),
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold-700">CPA for Indians</p>
          <h1 className="font-display text-4xl font-medium text-ink-950 text-balance">State boards, compared</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            You apply for the CPA Exam through one US state board, and you do not need to live there. These are nine boards
            international candidates often consider. Every fact was read on the board&apos;s own page at nasba.org on{" "}
            {formatIsoDate(BOARDS_READ)}.
          </p>
        </Container>
      </div>

      <Container className="py-12">
        <div className="overflow-x-auto rounded-lg border border-ink-950/10">
          <table className="w-full min-w-[52rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ink-950/15 bg-paper-100 text-xs uppercase tracking-wider text-ink-400">
                <th scope="col" className="px-4 py-3 font-medium">Board</th>
                <th scope="col" className="px-4 py-3 font-medium">Evaluator</th>
                <th scope="col" className="px-4 py-3 font-medium">Social Security number</th>
                <th scope="col" className="px-4 py-3 font-medium">Sit before degree</th>
                <th scope="col" className="px-4 py-3 font-medium">Credit window</th>
                <th scope="col" className="px-4 py-3 font-medium">120-hour pathway</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-950/10">
              {BOARDS.map((b) => {
                const j = boardJurisdiction(b);
                const status = pathwayStatus(j, today);
                return (
                  <tr key={b.slug} className="align-top">
                    <th scope="row" className="px-4 py-3 font-medium">
                      <Link href={`/state-boards/${b.slug}`} className={link}>
                        {b.name}
                      </Link>
                    </th>
                    <td className="px-4 py-3 text-ink-800">{b.evaluators.replace(/\.$/, "").split(". ")[0]}</td>
                    <td className="px-4 py-3 text-ink-800">{b.personal.ssn.split(". ")[0].replace(/\.$/, "")}</td>
                    <td className="px-4 py-3 text-ink-800">
                      {b.sitEarly.startsWith("Yes") ? "Yes" : b.sitEarly.startsWith("No.") ? "No" : b.sitEarly.startsWith("Not stated") ? "Not stated" : "After 120 hours of coursework"}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-ink-800">{b.creditWindow.months} months</td>
                    <td className="px-4 py-3 text-ink-800">
                      {status === "in-effect" && "In effect"}
                      {status === "upcoming" && `From ${formatIsoDate(j.pathwayEffective as string)}`}
                      {status === "listed" && "Law passed, date not published"}
                      {status === "none" && "Not on NASBA's list"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Scroll sideways on a phone to see every column. Pathway status comes from our{" "}
          <Link href="/cpa-licensure-pathways" className="underline">
            120 vs 150 tracker
          </Link>
          .
        </p>

        <h2 className="mt-12 font-display text-2xl font-medium text-ink-950">Each board in detail</h2>
        <ul className="mt-5 grid gap-px overflow-hidden rounded-lg border border-ink-950/10 bg-ink-950/10 sm:grid-cols-2 lg:grid-cols-3">
          {BOARDS.map((b) => (
            <li key={b.slug} className="bg-paper-50">
              <Link href={`/state-boards/${b.slug}`} className="group flex h-full flex-col p-5 hover:bg-paper-100">
                <span className="font-semibold text-ink-950 group-hover:underline">{b.name}</span>
                <span className="mt-1.5 text-sm leading-relaxed text-ink-400">{b.summary}</span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-12 max-w-3xl">
          <h2 className="font-display text-2xl font-medium text-ink-950">How to choose</h2>
          <ol className="mt-4 flex list-decimal flex-col gap-3 pl-5 leading-relaxed text-ink-800">
            <li>
              <strong>Rule out boards you cannot use.</strong> A Social Security number requirement, or an evaluator that will not
              assess your university, ends the question.
            </li>
            <li>
              <strong>Match the education rule to your transcript.</strong> Some rules are written as total hours, others as
              accounting and business hours or named courses. The{" "}
              <Link href="/tools/cpa-eligibility-navigator" className={link}>
                eligibility navigator
              </Link>{" "}
              gives a starting estimate.
            </li>
            <li>
              <strong>Decide whether you want the licence or only the exam.</strong> Check the pathway column and the board&apos;s
              experience rules before you commit.
            </li>
            <li>
              <strong>Then compare the tie-breakers:</strong> credit window, fees and whether the board grants extensions.
            </li>
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-ink-400">
            Boards change their rules, and NASBA&apos;s pages do not show a last-updated date. Read the board&apos;s page again
            before you pay for an evaluation. Other boards may suit you too; these nine are a starting point, not a ranking. See
            also{" "}
            <Link href="/indian-candidates" className="underline">
              CPA for Indian students
            </Link>{" "}
            and the{" "}
            <Link href="/faq/state-selection" className="underline">
              state selection FAQs
            </Link>
            .
          </p>
        </section>
      </Container>
    </>
  );
}
