import Link from "next/link";
import { Button } from "@/components/ui/Button";

const subjects = [
  { code: "FAR", slug: "far" },
  { code: "AUD", slug: "aud" },
  { code: "REG", slug: "reg" },
  { code: "BAR", slug: "bar" },
  { code: "ISC", slug: "isc" },
  { code: "TCP", slug: "tcp" },
];

export function Hero() {
  return (
    <section className="border-b border-ink-950/10 bg-paper-50">
      <div className="mx-auto max-w-4xl px-4 pt-16 pb-14 text-center sm:px-6 sm:pt-24 sm:pb-20 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          SimplyCPA
        </p>
        <h1 className="font-display text-4xl font-medium leading-[1.15] text-ink-950 text-balance sm:text-5xl">
          The Free US CPA Study Library
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-400">
          Free, exam-focused study material, revision notes, and practice questions for every
          CPA section — organized topic by topic.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/cpa" size="lg" variant="primary">
            Start Studying
          </Button>
          <Button href="/start-here" size="lg" variant="outline">
            New to CPA? Start Here
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-ink-400">
          {subjects.map((s, i) => (
            <span key={s.code} className="flex items-center gap-3">
              <Link href={`/cpa/${s.slug}`} className="hover:text-ink-950">
                {s.code}
              </Link>
              {i < subjects.length - 1 && <span className="text-ink-950/15">·</span>}
            </span>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-400">
          No expensive coaching. No scattered PDFs. Just CPA.
        </p>
      </div>
    </section>
  );
}
