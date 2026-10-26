import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { MOCK_MINUTES, MOCK_SIZE, currentWeekStart } from "@/lib/mini-mock";
import { getMockHistory } from "@/lib/mini-mock-data";
import { addDays } from "@/lib/qotd";
import { formatDate, formatIsoDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Free CPA Mini-Mocks: Weekly 30-Question Timed Tests",
  description: `A new free ${MOCK_SIZE}-question, ${MOCK_MINUTES}-minute mini-mock for every CPA Exam section each week, weighted like the exam blueprint, with a score report by area and topic.`,
  alternates: { canonical: "/mini-mock" },
};

export default async function MiniMockHub() {
  const [subjects, session] = await Promise.all([
    prisma.subject.findMany({ orderBy: { order: "asc" }, select: { id: true, slug: true, shortName: true, name: true, type: true } }),
    auth(),
  ]);
  const history = session?.user ? await getMockHistory(session.user.id) : [];
  const week = currentWeekStart();
  const weekStartDate = new Date(`${week}T00:00:00+05:30`);
  const doneThisWeek = new Map(
    history.filter((h) => h.completedAt >= weekStartDate && h.subject).map((h) => [h.subject!.slug, h] as const).reverse(),
  );

  return (
    <>
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container>
          <h1 className="font-display text-4xl font-medium text-ink-950">Weekly mini-mocks</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            A fresh {MOCK_SIZE}-question, {MOCK_MINUTES}-minute test for each section every week, with questions split across the
            blueprint areas by their exam weight. Afterwards you get a score report by area and topic, and every explanation.
          </p>
          <p className="mt-3 text-sm text-ink-400">
            This week&apos;s mocks: {formatIsoDate(week)} to {formatIsoDate(addDays(week, 6))}. New ones every Monday (India time).
          </p>
        </Container>
      </div>

      <Container className="py-10">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => {
            const done = doneThisWeek.get(s.slug);
            return (
              <li key={s.slug}>
                <Link href={`/mini-mock/${s.slug}`} className="flex h-full flex-col rounded-xl border border-ink-950/10 p-5 hover:border-ink-950/30">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-700">{s.type === "CORE" ? "Core" : "Discipline"}</span>
                  <span className="mt-1 font-display text-2xl font-medium text-ink-950">{s.shortName}</span>
                  <span className="text-sm text-ink-400">{s.name}</span>
                  <span className="mt-3 flex items-center gap-1.5 text-xs text-ink-400">
                    <Clock className="size-3.5" aria-hidden /> {MOCK_SIZE} questions · {MOCK_MINUTES} minutes
                  </span>
                  <span className="mt-3 text-sm font-medium text-ink-950">
                    {done ? `Done this week: ${done.score}/${done.total}. Take it again` : "Take this week's mock"} →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {session?.user ? (
          history.length > 0 && (
            <section aria-labelledby="history" className="mt-12">
              <h2 id="history" className="font-display text-xl font-medium text-ink-950">Your recent mini-mocks</h2>
              <ul className="mt-3 flex flex-col divide-y divide-ink-950/10">
                {history.map((h) => (
                  <li key={h.id} className="flex flex-wrap items-baseline justify-between gap-2 py-2.5 text-sm">
                    <span className="font-medium text-ink-950">{h.subject?.shortName ?? "Mock"}</span>
                    <span className="text-ink-400">{formatDate(h.completedAt)}</span>
                    <span className="tabular-nums text-ink-950">
                      {h.score}/{h.total} ({Math.round((h.score / h.total) * 100)}%)
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )
        ) : (
          <p className="mt-10 text-sm text-ink-400">
            <Link href="/login?callbackUrl=/mini-mock" className="underline underline-offset-2">Sign in</Link> to save your scores and see
            them week by week.
          </p>
        )}
      </Container>
    </>
  );
}
