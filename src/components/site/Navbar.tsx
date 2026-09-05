import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { auth, signOut } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/site/MobileNav";

export async function Navbar() {
  const [subjects, session] = await Promise.all([
    prisma.subject.findMany({ orderBy: { order: "asc" } }),
    auth(),
  ]);

  const core = subjects.filter((s) => s.type === "CORE");
  const discipline = subjects.filter((s) => s.type === "DISCIPLINE");

  return (
    <header className="sticky top-0 z-40 border-b border-ink-950/10 bg-paper-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">
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

          <NavGroup label="Practice">
            <DropdownLink href="/practice" label="MCQ Practice" sub="Topic and subject practice" />
            <DropdownLink href="/practice/question-of-the-day" label="Question of the Day" sub="One question, every day" />
          </NavGroup>

          <NavGroup label="Learn">
            <DropdownLink href="/indian-candidates" label="CPA for Indian Students" sub="Eligibility, cost, process" />
            <DropdownLink href="/blog" label="Blog" sub="Strategy, career, updates" />
            <DropdownLink href="/radar" label="CPA Radar" sub="What changed recently" />
          </NavGroup>

          <NavGroup label="Resources">
            <DropdownLink href="/faq" label="FAQs" />
            <DropdownLink href="/roadmap" label="Roadmap" />
          </NavGroup>

          <Link
            href="/community"
            className="px-3 py-2 text-sm font-medium text-ink-800 hover:text-ink-950"
          >
            Community
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
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

function NavGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <button className="px-3 py-2 text-sm font-medium text-ink-800 hover:text-ink-950">
        {label}
      </button>
      <div className="invisible absolute left-0 top-full flex w-[560px] gap-6 rounded-xl border border-ink-950/10 bg-paper-50 p-5 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
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
