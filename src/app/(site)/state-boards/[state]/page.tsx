import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutSimplyCPA } from "@/components/content/AboutSimplyCPA";
import { BOARDS, BOARDS_READ, boardBaseCost, boardJurisdiction, getBoard } from "@/lib/state-boards";
import { INDIA_INTERNATIONAL_FEE_USD, PATHWAYS_SOURCE, PATHWAYS_SOURCE_AS_OF, pathwayStatus } from "@/lib/trackers/pathways";
import { USD_INR, formatInr, formatUsd, toInr } from "@/lib/india";
import { SITE_URL } from "@/lib/site";
import { formatIsoDate, todayIst } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return BOARDS.map((b) => ({ state: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const b = getBoard(state);
  if (!b) return {};
  return {
    title: `${b.name} CPA Exam Requirements for Indian and International Candidates`,
    description: `${b.name} CPA Exam requirements: education needed to sit, evaluators accepted, fees in dollars and rupees, credit window and licensure pathway. ${b.summary}`,
    alternates: { canonical: `/state-boards/${b.slug}` },
  };
}

const link = "text-gold-700 underline underline-offset-2";
const money = (usd: number) => `${usd.toLocaleString("en-US", { style: "currency", currency: "USD" })} (${formatInr(toInr(usd))})`;

export default async function StateBoardPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const b = getBoard(state);
  if (!b) notFound();

  const j = boardJurisdiction(b);
  const status = pathwayStatus(j, todayIst());
  const url = `${SITE_URL}/state-boards/${b.slug}`;
  const base = boardBaseCost(b);
  const total = base + (j.testsInIndia ? 4 * INDIA_INTERNATIONAL_FEE_USD : 0);
  const others = BOARDS.filter((x) => x.slug !== b.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "State boards", item: `${SITE_URL}/state-boards` },
      { "@type": "ListItem", position: 3, name: b.name, item: url },
    ],
  };

  return (
    <Container className="py-12 sm:py-16">
      <JsonLd data={jsonLd} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <article className="min-w-0 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <Link href="/" className="hover:text-ink-950">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/state-boards" className="hover:text-ink-950">State boards</Link>
            <span aria-hidden>/</span>
            <span>{b.name}</span>
          </nav>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold-700">State board</p>
          <h1 className="font-display text-4xl font-medium text-ink-950 text-balance">{b.name}: CPA Exam requirements</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-800">{b.summary}</p>
          <p className="mt-3 text-sm text-ink-400">
            Read on{" "}
            <a href={b.source} target="_blank" rel="noopener noreferrer" className={link}>
              {b.name}&apos;s page at nasba.org
            </a>{" "}
            on {formatIsoDate(BOARDS_READ)}. The page shows no last-updated date, so confirm there before you apply.
          </p>

          {b.notices.length > 0 && (
            <div className="mt-6 rounded-lg border border-signal-amber/40 bg-signal-amber/10 p-4 text-sm text-ink-800">
              <p className="font-semibold text-ink-950">Dated changes</p>
              <ul className="mt-1 list-disc pl-5">
                {b.notices.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          )}

          <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ink-950/10 bg-ink-950/10 sm:grid-cols-2">
            <Fact label="Evaluators accepted" value={b.evaluators} />
            <Fact label="Social Security number" value={b.personal.ssn} />
            <Fact label="Residency" value={b.personal.residency} />
            <Fact label="Minimum age" value={b.personal.age} />
            <Fact label="Credit window" value={b.creditWindow.detail} />
            <Fact label="Testing in India" value={j.testsInIndia ? "Yes. This board takes part in international testing." : "No. NASBA lists this board as not taking part in international testing."} />
          </dl>

          <Section title="Education needed to sit">
            <ul className="flex list-disc flex-col gap-2 pl-5">
              {b.educationToSit.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            {b.educationNote && <p className="text-sm text-ink-400">{b.educationNote}</p>}
            <p>
              <strong>Sitting before you finish your degree:</strong> {b.sitEarly}
            </p>
            <p>
              <strong>CA, CMA, CS and other professional training:</strong> {b.professionalTraining}
            </p>
          </Section>

          <Section title="Fees">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <tbody className="divide-y divide-ink-950/10">
                  <Row label="Education evaluation application fee" value={money(b.fees.evaluationApplication)} />
                  <Row label="Exam application fee" value={money(b.fees.examApplication)} />
                  <Row label="Exam fee, per section" value={money(b.fees.examSection)} />
                  {j.testsInIndia && <Row label="India testing fee, per section (paid to NASBA)" value={money(INDIA_INTERNATIONAL_FEE_USD)} />}
                  <tr className="font-medium text-ink-950">
                    <th scope="row" className="py-3 pr-4 text-left font-medium">
                      Four sections passed first time{j.testsInIndia ? ", testing in India" : ""}
                    </th>
                    <td className="py-3 text-right tabular-nums">{money(total)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-ink-400">
              Rupee figures use {USD_INR.source.split(" (")[0]} of ₹{USD_INR.rate} per dollar for {formatIsoDate(USD_INR.asOf)}. The total
              leaves out a foreign credential evaluation, retakes, any re-application fees and licensing fees.
              {b.fees.note ? ` ${b.fees.note}` : ""} See the{" "}
              <Link href="/fees" className="underline">
                fee estimator
              </Link>
              .
            </p>
          </Section>

          <Section title="The licence">
            <p>{b.licensureNote}</p>
            <p>
              <strong>120-hour pathway:</strong>{" "}
              {status === "in-effect" && `NASBA's list shows a new licensure pathway law in effect here since ${formatIsoDate(j.pathwayEffective as string)}.`}
              {status === "upcoming" && `NASBA's list shows a new licensure pathway law taking effect here on ${formatIsoDate(j.pathwayEffective as string)}.`}
              {status === "listed" && "NASBA's list shows a new licensure pathway law here, with no effective date published."}
              {status === "none" && "This jurisdiction is not on NASBA's list of new licensure pathway laws."}{" "}
              <span className="text-ink-400">
                (
                <a href={PATHWAYS_SOURCE} target="_blank" rel="noopener noreferrer" className="underline">
                  NASBA list
                </a>
                , current as of {formatIsoDate(PATHWAYS_SOURCE_AS_OF)}.)
              </span>
            </p>
            <p className="text-sm text-ink-400">
              A law taking effect does not mean the board&apos;s forms and rules are final. Experience must normally be verified by a
              licensed CPA; ask the board how that works for experience gained in India.
            </p>
          </Section>

          <Section title="Our reading for candidates educated in India">
            <p className="text-sm text-ink-400">This part is SimplyCPA&apos;s interpretation of the facts above, not the board&apos;s words.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-ink-950/10 p-4">
                <p className="font-semibold text-signal-green">May suit you if</p>
                <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 text-sm">
                  {b.goodFit.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-ink-950/10 p-4">
                <p className="font-semibold text-signal-red">Think twice if</p>
                <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 text-sm">
                  {b.thinkTwice.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Next steps">
            <ol className="flex list-decimal flex-col gap-2 pl-5">
              <li>
                Read{" "}
                <a href={b.source} target="_blank" rel="noopener noreferrer" className={link}>
                  the board&apos;s page
                </a>{" "}
                in full, including the forms it lists.
              </li>
              <li>
                Estimate where your education stands with the{" "}
                <Link href="/tools/cpa-eligibility-navigator" className={link}>
                  eligibility navigator
                </Link>
                .
              </li>
              <li>Order a credential evaluation from an evaluator this board accepts.</li>
              <li>
                Plan your first section with the{" "}
                <Link href="/study-planner" className={link}>
                  study planner
                </Link>
                .
              </li>
            </ol>
          </Section>

          <AboutSimplyCPA />
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Other boards</p>
          <ul className="mt-3 flex flex-col gap-1 text-sm">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/state-boards/${o.slug}`} className="block rounded-md px-3 py-1.5 text-ink-800 hover:bg-ink-950/5 hover:text-ink-950">
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/state-boards" className="mt-4 inline-block px-3 text-sm font-medium text-gold-700 underline underline-offset-2">
            Compare all boards
          </Link>
          <p className="mt-6 px-3 text-xs leading-relaxed text-ink-400">
            Total for four sections here: <span className="font-medium text-ink-800">{formatUsd(total)}</span>
          </p>
        </aside>
      </div>
    </Container>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper-50 p-4">
      <dt className="text-xs uppercase tracking-wider text-ink-400">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-ink-950">{value}</dd>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-medium text-ink-950">{title}</h2>
      <div className="mt-3 flex min-w-0 flex-col gap-3 leading-relaxed text-ink-800">{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <th scope="row" className="py-2.5 pr-4 text-left font-normal text-ink-800">{label}</th>
      <td className="py-2.5 text-right tabular-nums text-ink-950">{value}</td>
    </tr>
  );
}
