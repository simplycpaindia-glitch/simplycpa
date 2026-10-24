"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SearchBox } from "@/components/site/SearchBox";
import { SearchLauncher } from "@/components/site/SearchLauncher";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { signOutAction } from "@/lib/actions/auth";

type SubjectLink = { slug: string; shortName: string; name: string };

export function MobileNav({
  core,
  discipline,
  isLoggedIn,
}: {
  core: SubjectLink[];
  discipline: SubjectLink[];
  isLoggedIn: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-1 lg:hidden">
      <SearchLauncher compact />
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex size-10 items-center justify-center rounded-md text-ink-950 hover:bg-ink-950/5"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-paper-50 px-4 py-6">
          <div className="mb-6 flex items-center gap-2">
            <SearchBox className="flex-1" />
          </div>
          <ThemeToggle withLabel className="-ml-3 mb-4" />
          <MobileSection title="Core sections">
            {core.map((s) => (
              <MobileLink key={s.slug} href={`/cpa/${s.slug}`} onClick={() => setOpen(false)}>
                {s.shortName} — {s.name}
              </MobileLink>
            ))}
          </MobileSection>
          <MobileSection title="Discipline (choose one)">
            {discipline.map((s) => (
              <MobileLink key={s.slug} href={`/cpa/${s.slug}`} onClick={() => setOpen(false)}>
                {s.shortName} — {s.name}
              </MobileLink>
            ))}
          </MobileSection>
          <MobileSection title="Practice">
            <MobileLink href="/#question-of-the-day" onClick={() => setOpen(false)}>Question of the Day</MobileLink>
            <MobileLink href="/cpa" onClick={() => setOpen(false)}>MCQs</MobileLink>
            <MobileLink href="/quick-sheets" onClick={() => setOpen(false)}>Quick Sheets</MobileLink>
          </MobileSection>
          <MobileSection title="CPA for Indians">
            <MobileLink href="/indian-candidates" onClick={() => setOpen(false)}>Eligibility, Cost & Process</MobileLink>
          </MobileSection>
          <MobileSection title="Resources">
            <MobileLink href="/start-here" onClick={() => setOpen(false)}>Start Here</MobileLink>
            <MobileLink href="/roadmap" onClick={() => setOpen(false)}>Roadmap</MobileLink>
            <MobileLink href="/fees" onClick={() => setOpen(false)}>Fee Estimator</MobileLink>
            <MobileLink href="/radar" onClick={() => setOpen(false)}>CPA Radar</MobileLink>
            <MobileLink href="/cpa-exam-pass-rates" onClick={() => setOpen(false)}>Pass Rates</MobileLink>
            <MobileLink href="/cpa-score-release-dates" onClick={() => setOpen(false)}>Score Release Dates</MobileLink>
            <MobileLink href="/cpa-licensure-pathways" onClick={() => setOpen(false)}>120 vs 150 by State</MobileLink>
            <MobileLink href="/free-cpa-resources" onClick={() => setOpen(false)}>Free CPA Resources</MobileLink>
            <MobileLink href="/sources" onClick={() => setOpen(false)}>Official Sources</MobileLink>
            <MobileLink href="/faq" onClick={() => setOpen(false)}>FAQs</MobileLink>
            <MobileLink href="/blog" onClick={() => setOpen(false)}>Blog</MobileLink>
          </MobileSection>
          <MobileSection title="Community">
            <MobileLink href="/what-i-studied" onClick={() => setOpen(false)}>What I Studied This Week</MobileLink>
          </MobileSection>

          <div className="mt-6 flex flex-col gap-2">
            {isLoggedIn ? (
              <>
                <Button href="/dashboard" variant="primary" onClick={() => setOpen(false)}>
                  Dashboard
                </Button>
                <Button href="/account" variant="outline" onClick={() => setOpen(false)}>
                  Account
                </Button>
                <form action={signOutAction}>
                  <button
                    type="submit"
                    className="w-full rounded-md border border-ink-950/15 px-4 py-2.5 text-sm font-medium text-ink-800"
                  >
                    Log out
                  </button>
                </form>
              </>
            ) : (
              <>
                <Button href="/register" variant="primary" onClick={() => setOpen(false)}>
                  Start Studying
                </Button>
                <Button href="/login" variant="outline" onClick={() => setOpen(false)}>
                  Log in
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-400">{title}</p>
      <div className="flex flex-col divide-y divide-ink-950/5">{children}</div>
    </div>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} className="py-3 text-base font-medium text-ink-950">
      {children}
    </Link>
  );
}
