import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
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
    body: "Commerce graduates are eligible in many US states, though most state boards require 120–150 semester hours of education (roughly equivalent to a bachelor's plus some additional credit), which a 3-year Indian B.Com often falls short of on its own. An M.Com, additional certifications, or a bridge course can close the gap depending on the state — this is exactly what credential evaluation determines.",
  },
  {
    title: "CPA vs CA vs ACCA vs CMA",
    body: "CA is India's domestic gold-standard credential for audit, tax, and Indian regulatory work. ACCA is UK/global-oriented and widely recognized in the Middle East and UK-linked markets. CMA (US) focuses on management accounting and corporate finance. CPA is the US-specific credential for auditing, US GAAP, and US tax. Many Indian professionals hold two of these deliberately, rather than treating them as competitors.",
  },
  {
    title: "Can I take the CPA Exam in India?",
    body: "Yes — NASBA administers the exam internationally, with Prometric test centers in several Indian cities. You still need to first establish eligibility through a participating US state board, receive your Notice to Schedule (NTS), and pay an additional international administration fee for each section taken outside the US.",
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
    body: "Application/registration fees, per-section exam fees, an international administration fee (if testing in India), and a one-time evaluation fee. These numbers change and vary by state — always confirm current figures directly with NASBA and your state board before paying anything.",
  },
  {
    title: "What happens after you pass all four sections?",
    body: "Passing the Exam and holding a CPA license are different milestones. Most states also require a verified period of relevant work experience (often under a licensed CPA's supervision) and sometimes a separate ethics exam before they'll issue the license itself.",
  },
];

export default function IndianCandidatesPage() {
  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-14">
        <Container>
          <SectionHeading
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

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/roadmap" variant="primary">View the full Roadmap</Button>
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
