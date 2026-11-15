import type { Metadata } from "next";
import Link from "next/link";
import { ExamCountdown } from "@/components/tools/ExamCountdown";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import { SCORE_RELEASE_CHECKED, SCORE_RELEASE_SOURCE } from "@/lib/trackers/score-release";
import { formatIsoDate } from "@/lib/utils";

const PATH = "/tools/cpa-exam-countdown";

export const metadata: Metadata = {
  title: "CPA Exam Countdown: Days to Your Exam and Your Score Release Date",
  description:
    "Add your CPA Exam sections and dates to see the days left for each and the AICPA's target score release date. Free, saved in your browser, no account needed.",
  alternates: { canonical: PATH },
};

const link = "text-gold-700 underline underline-offset-2";

export default function ExamCountdownPage() {
  return (
    <ToolPageShell
      path={PATH}
      crumb="Exam Countdown"
      title="CPA Exam countdown"
      intro="Add each section and the date you plan to sit. You'll see the days left and the date the AICPA targets for releasing your score, including the slower schedule that starts in July 2027."
    >
      <ExamCountdown />
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-400">
        Score release dates are the AICPA&apos;s target dates and can change. Source:{" "}
        <a href={SCORE_RELEASE_SOURCE} target="_blank" rel="noopener noreferrer" className={link}>
          AICPA score release schedule
        </a>
        , checked {formatIsoDate(SCORE_RELEASE_CHECKED)}. Testing is unavailable from 1 to 11 July 2027 while the exam moves to a new
        platform; read{" "}
        <Link href="/pulse/cpa-exam-july-2027-new-platform-blackout" className={link}>
          what changes in July 2027
        </Link>
        .
      </p>
    </ToolPageShell>
  );
}
