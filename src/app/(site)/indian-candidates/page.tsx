import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatIsoDate } from "@/lib/utils";
import { INDIA_TEST_CITIES, USD_INR, formatInr, formatUsd, indiaTestCitiesText, toInr } from "@/lib/india";
import { BOARDS_SOURCE, INDIA_BOARDS, PATHWAYS_SOURCE, PROFILES } from "@/lib/india-boards";
import { istDate } from "@/lib/qotd";

export const metadata: Metadata = {
  alternates: { canonical: "/indian-candidates" },
  title: "CPA for Indian Students",
  description:
    "Eligibility, state selection, credential evaluation, cost, and career paths — the US CPA process explained for Indian CA students, commerce graduates, and working professionals.",
};

const sections = [
  {
    title: "Is the CPA useful after CA?",
    body: "Indian CA gives you deep expertise in Ind AS, Indian tax, and Indian company law. The CPA adds a specifically US-facing layer — US GAAP, SEC reporting, and US federal tax — on top of that foundation. It's most valuable if your work (or target work) touches US clients, US subsidiaries, or Big 4 US-facing engagement teams. It is not a strict upgrade to CA; it's a different, complementary credential.",
  },
  {
    title: "CPA after B.Com or M.Com?",
    body: "Commerce graduates can qualify, but the number that matters is your evaluated US semester hours. Most boards want at least 120 hours to sit for the exam. For the license, the traditional route is 150 hours plus one year of experience, and a growing number of states also accept 120 hours plus two years of experience. A 3-year B.Com on its own is often evaluated below 120 hours. An M.Com, CA or CMA coursework, or additional credits usually close the gap, and a credential evaluation tells you exactly where you stand.",
  },
  {
    title: "CPA vs CA vs ACCA vs CMA",
    body: "CA is India's domestic gold-standard credential for audit, tax, and Indian regulatory work. ACCA is UK/global-oriented and widely recognized in the Middle East and UK-linked markets. CMA (US) focuses on management accounting and corporate finance. CPA is the US-specific credential for auditing, US GAAP, and US tax. Many Indian professionals hold two of these deliberately, rather than treating them as competitors.",
  },
  {
    title: "Can I take the CPA Exam in India?",
    body: `Yes — NASBA administers the exam internationally, with Prometric test centres in ${INDIA_TEST_CITIES.length} Indian cities: ${indiaTestCitiesText()}. Check Prometric's locator for current seats. You still need to first establish eligibility through a participating US state board, receive your Notice to Schedule (NTS), and pay an additional international administration fee for each section taken outside the US.`,
  },
  {
    title: "How does state selection work?",
    body: "You don't need to live in, or ever visit, the state whose board you apply through. Indian candidates typically choose a jurisdiction based on which one's education and experience requirements they can actually meet — not residency. This is one of the most consequential early decisions, since it determines your entire eligibility path.",
  },
  {
    title: "What does credential evaluation involve?",
    body: "Most state boards require your Indian degree(s) to be evaluated by an agency that belongs to NACES (National Association of Credential Evaluation Services), which converts your qualifications into US semester-hour equivalents. NASBA's own International Evaluation Services (NIES) is one option built specifically to help place international candidates with a suitable state board.",
  },
  {
    title: "How much does it cost, really?",
    body: "Application/registration fees, per-section exam fees, an international administration fee (if testing in India), and a one-time evaluation fee. These numbers change and vary by state. Our Fee Estimator adds up the figures we track, each with its source and verification date, but always confirm current amounts with NASBA and your state board before paying anything.",
  },
  {
    title: "What happens after you pass all four sections?",
    body: "Passing the Exam and holding a CPA license are different milestones. You typically have 30 months from your first passed section to pass the rest. For the license itself, most states also require verified work experience (usually one year under the 150-credit pathway, or two years under the 120-credit pathway, generally supervised by a licensed CPA) and sometimes a separate ethics exam.",
  },
];

const TIMELINE = [
  { title: "Choose a state board", body: "Pick one whose education and experience rules you can meet. Residency isn't required." },
  { title: "Get your credentials evaluated", body: "An approved agency converts your Indian degrees into US semester hours." },
  { title: "Apply and get your Notice to Schedule", body: "Apply to the board (through NASBA for most), pay for a section and receive your Notice to Schedule." },
  { title: "Book a centre in India", body: "Register for international testing, pay the India fee and book a Prometric seat." },
  { title: "Pass all four sections", body: "Generally within 30 months of passing the first one: three Core sections and one Discipline." },
  { title: "Ethics exam, if your state requires it", body: "Many boards require an ethics exam before licensing." },
  { title: "Get the required experience", body: "Usually one year (150-hour route) or two years (120-hour route), generally verified by a licensed CPA." },
  { title: "Apply for the licence", body: "The board issues the licence once education, exam and experience are complete." },
];

export const revalidate = 3600;

function pathwayText(effective: string | "listed" | null, today: string) {
  if (effective === null) return "Not on NASBA's list";
  if (effective === "listed") return "Law passed; date not published";
  return effective <= today ? `In effect since ${formatIsoDate(effective)}` : `From ${formatIsoDate(effective)}`;
}

export default async function IndianCandidatesPage() {
  const fees = await prisma.fee.findMany({ select: { feeType: true, label: true, amount: true } });
  const amount = (type: string) => Number(fees.find((f) => f.feeType === type && !/discipline/i.test(f.label))?.amount ?? 0);
  const perAttemptUsd = amount("REGISTRATION") + amount("EXAM_SECTION") + amount("INTERNATIONAL_ADMIN");
  const firstTimeUsd = amount("EVALUATION") + amount("APPLICATION") + perAttemptUsd * 4;
  const today = istDate(new Date());

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-14">
        <Container>
          <SectionHeading as="h1"
            eyebrow="CPA for Indian Students"
            title="The process, explained without the sales pitch"
            description="Eligibility, state selection, credential evaluation, cost, and what comes after — the parts that are usually scattered across ten different forums."
          />
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid gap-4 lg:grid-cols-2">
          {sections.map((s) => (
            <Card key={s.title} className="p-6">
              <h2 className="font-semibold text-ink-950">{s.title}</h2>
              <p className="mt-2 text-sm text-ink-400 leading-relaxed">{s.body}</p>
            </Card>
          ))}
        </div>

        <section aria-labelledby="cost-inr" className="mt-12 rounded-lg border border-ink-950/10 bg-paper-100/60 p-6">
          <h2 id="cost-inr" className="font-display text-2xl font-medium text-ink-950">What it costs in rupees</h2>
          <p className="mt-2 leading-relaxed text-ink-800">
            Passing all four sections first time while testing in India costs about{" "}
            <strong>{formatInr(toInr(firstTimeUsd))}</strong> ({formatUsd(firstTimeUsd)}) in exam and evaluation fees, and each retake adds
            about <strong>{formatInr(toInr(perAttemptUsd))}</strong>.
          </p>
          <p className="mt-2 text-xs text-ink-400">
            At ₹{USD_INR.rate} per US dollar ({USD_INR.source}, {formatIsoDate(USD_INR.asOf)}). Review courses, bank charges, the ethics exam and
            licence fees are extra.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            <Link href="/us-cpa-fees-in-inr" className="font-medium underline underline-offset-2">Every fee in INR</Link>
            <Link href="/cpa-exam-centres-india" className="font-medium underline underline-offset-2">Exam centres in India</Link>
            <Link href="/fees" className="font-medium underline underline-offset-2">Fee estimator</Link>
          </div>
        </section>

        <section aria-labelledby="timeline" className="mt-12">
          <h2 id="timeline" className="font-display text-2xl font-medium text-ink-950">The path, step by step</h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((step, i) => (
              <li key={step.title} className="relative rounded-lg border border-ink-950/10 p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-gold-700">Step {i + 1}</span>
                <p className="mt-1 font-medium text-ink-950">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-400">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="boards" className="mt-12">
          <h2 id="boards" className="font-display text-2xl font-medium text-ink-950">Which board fits your profile</h2>
          <p className="mt-2 max-w-3xl leading-relaxed text-ink-800">
            Start with the boards whose education rules your evaluated degree meets; everything else is a tie-breaker. These are the
            boards Indian candidates most often consider.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-ink-950/10">
            <table className="w-full min-w-[36rem] text-sm">
              <thead className="bg-paper-100 text-left text-xs uppercase tracking-wide text-ink-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Your profile</th>
                  <th scope="col" className="px-4 py-3">Boards to look at first</th>
                  <th scope="col" className="px-4 py-3">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-950/10">
                {PROFILES.map((p) => (
                  <tr key={p.profile} className="align-top">
                    <th scope="row" className="px-4 py-3 text-left font-medium text-ink-950">{p.profile}</th>
                    <td className="px-4 py-3 text-ink-800">{p.boards}</td>
                    <td className="px-4 py-3 text-ink-400">{p.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 font-semibold text-ink-950">The boards side by side</h3>
          <div className="mt-3 overflow-x-auto rounded-lg border border-ink-950/10">
            <table className="w-full min-w-[60rem] text-sm">
              <thead className="bg-paper-100 text-left text-xs uppercase tracking-wide text-ink-400">
                <tr>
                  <th scope="col" className="px-3 py-3">Board</th>
                  <th scope="col" className="px-3 py-3">Education to sit (summary)</th>
                  <th scope="col" className="px-3 py-3">Sit before finishing?</th>
                  <th scope="col" className="px-3 py-3">Evaluator</th>
                  <th scope="col" className="px-3 py-3">CA coursework</th>
                  <th scope="col" className="px-3 py-3">Credit window</th>
                  <th scope="col" className="px-3 py-3">120 hours + 2 years route</th>
                  <th scope="col" className="px-3 py-3">Test in India</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-950/10">
                {INDIA_BOARDS.map((b) => (
                  <tr key={b.name} className="align-top">
                    <th scope="row" className="px-3 py-3 text-left font-medium text-ink-950">{b.name}</th>
                    <td className="px-3 py-3 text-ink-800">{b.educationToSit}</td>
                    <td className="px-3 py-3 text-ink-800">{b.sitEarly}</td>
                    <td className="px-3 py-3 text-ink-800">{b.evaluator}</td>
                    <td className="px-3 py-3 text-ink-800">{b.caCoursework}</td>
                    <td className="px-3 py-3 text-ink-800">{b.creditWindow}</td>
                    <td className="px-3 py-3 text-ink-800">{pathwayText(b.pathwayEffective, today)}</td>
                    <td className="px-3 py-3 text-ink-800">{b.testsInIndia ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-ink-400">
            Summarised from each board&apos;s page on{" "}
            <a href={BOARDS_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">nasba.org</a>{" "}
            (October 2026); pathway dates from{" "}
            <a href={PATHWAYS_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">NASBA&apos;s pathways list</a>.
            &quot;—&quot; means the board&apos;s page doesn&apos;t say. Rules change: confirm with the board before you apply. All states:{" "}
            <Link href="/cpa-licensure-pathways" className="underline underline-offset-2">120 vs 150 hours by state</Link>.
          </p>
        </section>

        <section aria-labelledby="worked-example" className="mt-12">
          <h2 id="worked-example" className="font-display text-2xl font-medium text-ink-950">Worked example: checking an evaluation against board rules</h2>
          <p className="mt-2 max-w-3xl leading-relaxed text-ink-800">
            The figures below are <strong>made up for illustration</strong>. Real results depend on your university, your papers and the
            evaluator. The point is the method: total hours, then the accounting and business mix, then any specific course a board wants.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-ink-950/10">
            <table className="w-full min-w-[32rem] text-sm">
              <thead className="bg-paper-100 text-left text-xs uppercase tracking-wide text-ink-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Evaluated (illustrative)</th>
                  <th scope="col" className="px-4 py-3 text-right">Total hours</th>
                  <th scope="col" className="px-4 py-3 text-right">Accounting</th>
                  <th scope="col" className="px-4 py-3 text-right">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-950/10 tabular-nums">
                <tr><th scope="row" className="px-4 py-3 text-left font-medium text-ink-950">Three-year B.Com</th><td className="px-4 py-3 text-right">90</td><td className="px-4 py-3 text-right">30 (24 above introductory)</td><td className="px-4 py-3 text-right">33</td></tr>
                <tr><th scope="row" className="px-4 py-3 text-left font-medium text-ink-950">M.Com</th><td className="px-4 py-3 text-right">40</td><td className="px-4 py-3 text-right">12</td><td className="px-4 py-3 text-right">28</td></tr>
                <tr className="font-medium"><th scope="row" className="px-4 py-3 text-left text-ink-950">Together</th><td className="px-4 py-3 text-right">130</td><td className="px-4 py-3 text-right">42</td><td className="px-4 py-3 text-right">61</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-ink-400">None of the auditing papers covered US auditing standards.</p>
          <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-ink-800">
            <li><strong>B.Com alone (90 hours):</strong> short of the 120 hours that Colorado, New Hampshire and New York ask for. Montana&apos;s rule is stated as 24 accounting hours above introductory level and 24 business hours, which this profile meets.</li>
            <li><strong>B.Com + M.Com (130 hours):</strong> meets the hour and credit-mix rules of New Hampshire (30 accounting, 24 business), Washington (24 + 24) and Montana, provided the evaluator treats the degrees as equivalent to a US bachelor&apos;s where the board requires one.</li>
            <li><strong>Colorado:</strong> the hours are enough (27 accounting, 21 above introductory), but it also wants a US auditing standards course, so this candidate would need to add one.</li>
            <li><strong>The licence:</strong> 130 hours is short of 150, so this candidate would either add 20 more hours or use a board with the 120 hours + two years of experience route, such as Washington, where it is already in effect.</li>
          </ul>
          <p className="mt-3 text-sm text-ink-400">
            For your own degrees, an NIES evaluation (or its undecided evaluation, which suggests up to three boards you qualify for) is the
            only reliable answer. Read more: <Link href="/blog/can-indian-bcom-degree-meet-us-cpa-requirements" className="underline underline-offset-2">can a B.Com meet the requirements?</Link>{" "}
            and <Link href="/blog/how-indian-ca-qualifications-are-evaluated-for-cpa" className="underline underline-offset-2">how CA qualifications are evaluated</Link>.
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/roadmap" variant="primary">View the full Roadmap</Button>
          <Button href="/fees" variant="outline">Estimate your fees</Button>
          <Button href="/faq" variant="outline">Browse all FAQs</Button>
        </div>

        <p className="mt-10 max-w-2xl text-xs text-ink-400">
          Eligibility and licensing requirements are set individually by each US state board and
          change over time. Nothing on this page is personalized advice — confirm your specific
          eligibility with a NASBA-recognized evaluation agency and your chosen state board
          before applying or paying any fees.
        </p>
      </Container>
    </>
  );
}
