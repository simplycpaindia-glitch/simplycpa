import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { auth, signOut } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/site/MobileNav";
import { SearchLauncher } from "@/components/site/SearchLauncher";
import { ThemeToggle } from "@/components/site/ThemeToggle";

export async function Navbar() {
  const [subjects, session] = await Promise.all([
    prisma.subject.findMany({ orderBy: { order: "asc" } }),
    auth(),
  ]);

  const core = subjects.filter((s) => s.type === "CORE");
  const discipline = subjects.filter((s) => s.type === "DISCIPLINE");

  return (
    <header className="sticky top-0 z-40 border-b border-ink-950/10 bg-paper-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight shrink-0">
          Simply<span className="text-gold-700">CPA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavGroup label="Study">
            <NavSection title="Core">
              {core.map((s) => (
                <DropdownLink key={s.id} href={`/cpa/${s.slug}`} label={s.shortName} sub={s.name} />
              ))}
            </NavSection>
            <NavSection title="Discipline — choose one">
              {discipline.map((s) => (
                <DropdownLink key={s.id} href={`/cpa/${s.slug}`} label={s.shortName} sub={s.name} />
              ))}
            </NavSection>
          </NavGroup>

          <NavGroup label="Practice" wide={false}>
            <DropdownLink href="/#question-of-the-day" label="Question of the Day" sub="One question, every day" />
            <DropdownLink href="/cpa" label="MCQs" sub="Practice by subject and topic" />
            <DropdownLink href="/quick-sheets" label="Quick Sheets" sub="5-minute revision sheets" />
          </NavGroup>

          <Link
            href="/indian-candidates"
            className="whitespace-nowrap px-2.5 py-2 text-sm font-medium text-ink-800 hover:text-ink-950 xl:px-3"
          >
            CPA for Indians
          </Link>

          <NavGroup label="Resources">
            <NavSection title="Exam facts">
              <DropdownLink href="/cpa-exam-pass-rates" label="Pass Rates" sub="Every section, every quarter" />
              <DropdownLink href="/cpa-score-release-dates" label="Score Release Dates" sub="When you'll get your score" />
              <DropdownLink href="/cpa-licensure-pathways" label="120 vs 150 by State" sub="New licensure pathways" />
              <DropdownLink href="/fees" label="Fee Estimator" sub="What the exam will cost" />
              <DropdownLink href="/radar" label="CPA Radar" sub="What changed recently" />
            </NavSection>
            <NavSection title="Guides">
              <DropdownLink href="/start-here" label="Start Here" sub="New to the CPA?" />
              <DropdownLink href="/roadmap" label="Roadmap" />
              <DropdownLink href="/free-cpa-resources" label="Free CPA Resources" sub="Blueprints, sample tests, standards" />
              <DropdownLink href="/faq" label="FAQs" />
              <DropdownLink href="/blog" label="Blog" />
              <DropdownLink href="/sources" label="Official Sources" />
            </NavSection>
          </NavGroup>

          <Link
            href="/what-i-studied"
            className="whitespace-nowrap px-2.5 py-2 text-sm font-medium text-ink-800 hover:text-ink-950 xl:px-3"
          >
            Study Wall
          </Link>
        </nav>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-3">
          <SearchLauncher shortcut />
          <ThemeToggle />
          {session?.user ? (
            <>
              <Button href="/dashboard" size="sm" variant="outline" className="whitespace-nowrap">
                Dashboard
              </Button>
              {/* Account and Log out share one menu so the header fits at 1024px. */}
              <div className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="whitespace-nowrap px-2 py-2 text-sm font-medium text-ink-400 hover:text-ink-950"
                >
                  Account ▾
                </button>
                <div className="invisible absolute right-0 top-full flex w-48 flex-col gap-1 rounded-xl border border-ink-950/10 bg-paper-50 p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <Link href="/account" className="rounded-md px-3 py-2 text-sm text-ink-950 hover:bg-ink-950/5">
                    Account settings
                  </Link>
                  <Link href="/what-i-studied" className="rounded-md px-3 py-2 text-sm text-ink-950 hover:bg-ink-950/5">
                    Study wall
                  </Link>
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/" });
                    }}
                  >
                    <button type="submit" className="w-full rounded-md px-3 py-2 text-left text-sm text-ink-950 hover:bg-ink-950/5">
                      Log out
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <>
              <Button href="/login" size="sm" variant="ghost" className="whitespace-nowrap">
                Log in
              </Button>
              <Button href="/register" size="sm" variant="primary" className="whitespace-nowrap">
                Start Studying
              </Button>
            </>
          )}
        </div>

        <MobileNav
          core={core.map((s) => ({ slug: s.slug, shortName: s.shortName, name: s.name }))}
          discipline={discipline.map((s) => ({ slug: s.slug, shortName: s.shortName, name: s.name }))}
          isLoggedIn={!!session?.user}
        />
      </div>
    </header>
  );
}

function NavGroup({ label, children, wide = true }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="group relative">
      <button type="button" aria-haspopup="true" className="whitespace-nowrap px-2.5 py-2 text-sm font-medium text-ink-800 hover:text-ink-950 xl:px-3">
        {label}
      </button>
      <div
        className={`invisible absolute left-0 top-full flex gap-6 rounded-xl border border-ink-950/10 bg-paper-50 p-5 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${wide ? "w-[560px]" : "w-64 flex-col"}`}
      >
        {children}
      </div>
    </div>
  );
}

function NavSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex-1">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
        {title}
      </p>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function DropdownLink({ href, label, sub }: { href: string; label: string; sub?: string }) {
  return (
    <Link
      href={href}
      className="rounded-md px-2 py-1.5 hover:bg-ink-950/5"
    >
      <span className="block text-sm font-medium text-ink-950">{label}</span>
      {sub && <span className="block text-xs text-ink-400">{sub}</span>}
    </Link>
  );
}
