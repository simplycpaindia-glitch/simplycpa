import type { Metadata } from "next";
import Link from "next/link";
import { EligibilityNavigator } from "@/components/tools/EligibilityNavigator";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import { BOARDS_CHECKED, BOARDS_SOURCE } from "@/lib/india-boards";

const PATH = "/tools/cpa-eligibility-navigator";

export const metadata: Metadata = {
  title: "CPA Eligibility Navigator: US CPA After B.Com, M.Com, MBA or CA",
  description:
    "A free eligibility guide for the US CPA. See roughly how your degree converts to US semester hours, how it compares with 120 and 150 hours, and which state boards to look at first.",
  alternates: { canonical: PATH },
};

const link = "text-gold-700 underline underline-offset-2";

export default function EligibilityNavigatorPage() {
  return (
    <ToolPageShell
      path={PATH}
      crumb="Eligibility Navigator"
      title="CPA eligibility navigator"
      intro="Tell us about your education and what you want. You'll see roughly where you stand against the 120 and 150 hour requirements, which state boards to look at first, and your next steps."
    >
      <EligibilityNavigator boardsChecked={BOARDS_CHECKED} />

      <section className="mt-16 max-w-3xl border-t border-ink-950/10 pt-10">
        <h2 className="font-display text-2xl font-medium text-ink-950">What this tool can and cannot tell you</h2>
        <div className="mt-4 flex flex-col gap-4 leading-relaxed text-ink-800">
          <p>
            There is no single US CPA eligibility rule. Each state board sets its own education requirements and decides from a
            credential evaluation of your actual transcripts. This tool applies a common rule of thumb to give you a starting point.
            It cannot see your transcripts and it does not guarantee anything.
          </p>
          <p>
            Board facts shown here are summarised from each board&apos;s page on{" "}
            <a href={BOARDS_SOURCE} target="_blank" rel="noopener noreferrer" className={link}>
              nasba.org
            </a>
            . Before you pay for an evaluation or an application, read your chosen board&apos;s own page and confirm the rule still
            applies.
          </p>
          <p>
            For the full process, see{" "}
            <Link href="/indian-candidates" className={link}>
              CPA for Indian students
            </Link>{" "}
            and the{" "}
            <Link href="/roadmap" className={link}>
              step-by-step roadmap
            </Link>
            .
          </p>
        </div>
      </section>
    </ToolPageShell>
  );
}
