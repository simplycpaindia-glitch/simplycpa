import Link from "next/link";
import { ArrowRight, CalendarClock, Calculator, Compass, GitFork, ListChecks, Timer } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const tools = [
  { icon: Compass, name: "Eligibility Navigator", body: "Where your degree stands against 120 and 150 hours.", href: "/tools/cpa-eligibility-navigator" },
  { icon: GitFork, name: "Discipline Selector", body: "BAR, ISC or TCP, in six questions.", href: "/tools/cpa-discipline-selector" },
  { icon: Calculator, name: "Fee Estimator", body: "The full cost, from sourced and dated fees.", href: "/fees" },
  { icon: ListChecks, name: "Study Planner", body: "A week-by-week plan to your exam date.", href: "/study-planner" },
  { icon: Timer, name: "Exam Countdown", body: "Days left, and when your score is due.", href: "/tools/cpa-exam-countdown" },
  { icon: CalendarClock, name: "Score Release Finder", body: "The AICPA's target date for any test date.", href: "/cpa-score-release-dates" },
];

export function ToolsBand() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Student tools" title="Decide, plan and track" description="Free, no account needed, and built for a phone." />
          <Button href="/tools" variant="outline" size="sm">
            All tools
          </Button>
        </div>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ink-950/10 bg-ink-950/10 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <li key={t.href} className="bg-paper-50">
              <Link href={t.href} className="group flex h-full items-start gap-4 p-5 hover:bg-paper-100">
                <t.icon className="mt-0.5 size-5 shrink-0 text-gold-700" aria-hidden />
                <span className="flex-1">
                  <span className="flex items-center gap-1 font-semibold text-ink-950 group-hover:underline">
                    {t.name} <ArrowRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-400">{t.body}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
