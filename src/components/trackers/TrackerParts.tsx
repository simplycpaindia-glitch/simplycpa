import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { formatIsoDate } from "@/lib/utils";

export const TRACKERS = [
  { href: "/cpa-exam-pass-rates", title: "CPA Exam pass rates", blurb: "Every section, every quarter, from the AICPA." },
  { href: "/cpa-score-release-dates", title: "Score release dates", blurb: "When you'll get your score — with a date finder." },
  { href: "/cpa-licensure-pathways", title: "120 vs 150 hours by state", blurb: "New licensure pathways, and which states let you test in India." },
] as const;

/** Where the numbers come from, and when we last checked them. */
export function SourceNote({ sources, checked, children }: { sources: { label: string; url: string }[]; checked: string; children?: React.ReactNode }) {
  return (
    <div className="mt-6 max-w-3xl rounded-xl border border-ink-950/10 bg-paper-100/60 p-4 text-sm text-ink-800">
      <p>
        <strong>Source:</strong>{" "}
        {sources.map((s, i) => (
          <span key={s.url}>
            {i > 0 && " and "}
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 underline">
              {s.label}
              <ExternalLink className="size-3" aria-hidden />
            </a>
          </span>
        ))}
        . <strong>Checked {formatIsoDate(checked)}.</strong>
      </p>
      {children && <div className="mt-2 text-ink-400">{children}</div>}
    </div>
  );
}

export function RelatedTrackers({ current }: { current: (typeof TRACKERS)[number]["href"] }) {
  return (
    <nav aria-label="Other CPA trackers" className="mt-14 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">More CPA trackers</p>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {TRACKERS.filter((t) => t.href !== current).map((t) => (
          <li key={t.href}>
            <Link href={t.href} className="block rounded-xl border border-ink-950/10 bg-paper-50 p-4 hover:border-gold-400">
              <span className="font-semibold text-ink-950">{t.title}</span>
              <span className="mt-1 block text-sm text-ink-400">{t.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
