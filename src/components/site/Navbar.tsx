import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { auth, signOut } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/site/MobileNav";
import { SearchBox } from "@/components/site/SearchBox";

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
          Simply<span className="text-gold-600">CPA</span>
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
            className="px-3 py-2 text-sm font-medium text-ink-800 hover:text-ink-950"
          >
            CPA for Indians
          </Link>

          <NavGroup label="Resources" wide={false}>
            <DropdownLink href="/start-here" label="Start Here" sub="New to the CPA?" />
            <DropdownLink href="/roadmap" label="Roadmap" />
            <DropdownLink href="/radar" label="CPA Radar" sub="What changed recently" />
            <DropdownLink href="/sources" label="Official Sources" />
            <DropdownLink href="/faq" label="FAQs" />
            <DropdownLink href="/blog" label="Blog" />
          </NavGroup>
        </nav>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-3">
          <SearchBox className="w-48" />
          {session?.user ? (
            <>
              <Button href="/dashboard" size="sm" variant="outline">
                Dashboard
              </Button>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="px-3 py-2 text-sm font-medium text-ink-400 hover:text-ink-950"
                >
                  Log out
                </button>
              </form>
            </>
          ) : (
            <>
              <Button href="/login" size="sm" variant="ghost">
                Log in
              </Button>
              <Button href="/register" size="sm" variant="primary">
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
      <button className="px-3 py-2 text-sm font-medium text-ink-800 hover:text-ink-950">
        {label}
      </button>
      <div
        className={`invisible absolute left-0 top-full flex gap-6 rounded-xl border border-ink-950/10 bg-paper-50 p-5 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 ${wide ? "w-[560px]" : "w-64 flex-col"}`}
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
