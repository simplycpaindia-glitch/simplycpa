import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

const subjects = [
  { code: "FAR", slug: "far" },
  { code: "AUD", slug: "aud" },
  { code: "REG", slug: "reg" },
  { code: "BAR", slug: "bar" },
  { code: "ISC", slug: "isc" },
  { code: "TCP", slug: "tcp" },
];

export async function Hero() {
  // Proof points are counted live, so they're always true.
  const [sectionCount, topicCount, mcqCount, latestTopic, latestPost] = await Promise.all([
    prisma.subject.count(),
    prisma.topic.count({ where: { isComingSoon: false } }),
    prisma.mCQ.count({ where: { status: "PUBLISHED" } }),
    prisma.topic.aggregate({ where: { isComingSoon: false }, _max: { updatedAt: true } }),
    prisma.blogPost.aggregate({ where: { status: "PUBLISHED" }, _max: { updatedAt: true } }),
  ]);
  const updatedTimes = [latestTopic._max.updatedAt, latestPost._max.updatedAt].filter((d): d is Date => !!d);
  const lastUpdated = updatedTimes.length ? new Date(Math.max(...updatedTimes.map((d) => d.getTime()))) : null;
  const proof = [
    `${sectionCount} sections`,
    `${topicCount} topics`,
    `${mcqCount.toLocaleString("en-IN")} practice MCQs`,
    lastUpdated ? `Updated ${formatDate(lastUpdated)}` : null,
  ].filter(Boolean) as string[];

  return (
    <section className="border-b border-ink-950/10 bg-paper-50">
      <div className="mx-auto max-w-4xl px-4 pt-16 pb-14 text-center sm:px-6 sm:pt-24 sm:pb-20 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
          Free · No sign-up needed to read
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

        <nav aria-label="Exam sections" className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {subjects.map((s) => (
            <Link
              key={s.code}
              href={`/cpa/${s.slug}`}
              className="inline-flex h-9 min-w-14 items-center justify-center rounded-full border border-ink-950/15 px-4 text-sm font-semibold text-ink-800 hover:border-ink-950/40 hover:text-ink-950"
            >
              {s.code}
            </Link>
          ))}
        </nav>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-ink-800" aria-label="What's here">
          {proof.map((p, i) => (
            <li key={p} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="text-ink-950/25">·</span>}
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-ink-400">
          Independent and written against the AICPA&apos;s exam Blueprints — every official fact links to{" "}
          <Link href="/sources" className="underline underline-offset-2 hover:text-ink-950">
            its source
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
