import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/dal";
import { Container, SectionHeading } from "@/components/ui/Container";
import { McqPractice } from "@/components/practice/McqPractice";
import { getMistakeBook, REVIEW_SET_SIZE } from "@/lib/mistakes-data";
import { INTERVALS } from "@/lib/mistakes";
import { formatIsoDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Mistake Book", robots: { index: false } };

export default async function MistakeBookPage() {
  const user = await requireUser();
  const book = await getMistakeBook(user.id);
  const dueTotal = book.dueTotal;

  // Group upcoming reviews by date.
  const byDate = new Map<string, { title: string; subject: string }[]>();
  for (const u of book.upcoming) {
    byDate.set(u.dueDate, [...(byDate.get(u.dueDate) ?? []), { title: u.topic?.title ?? "", subject: u.topic?.subject.shortName ?? "" }]);
  }

  return (
    <Container className="max-w-3xl py-14">
      <SectionHeading
        as="h1"
        eyebrow="Your CPA Journey"
        title="Mistake book"
        description={`Every question you get wrong comes back ${INTERVALS[0]} day later, then ${INTERVALS[1]}, then ${INTERVALS[2]} — answering just before you'd forget is what makes it stick. Three spaced correct answers clear it; a wrong one starts it over.`}
      />

      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <Stat label="Due now" value={dueTotal} />
        <Stat label="Coming up" value={book.upcoming.length} />
        <Stat label="Cleared" value={book.cleared} />
      </div>

      <section className="mt-10">
        <h2 className="font-display text-xl font-medium text-ink-950">Due now</h2>
        {book.due.length === 0 ? (
          <p className="mt-3 text-sm text-ink-400">
            {book.upcoming.length + book.cleared === 0
              ? "Nothing here yet. Questions you get wrong in topic practice or the Question of the Day will appear here."
              : "You're up to date. Come back when the next reviews are due."}{" "}
            <Link href="/cpa" className="underline">Practise a topic</Link>.
          </p>
        ) : (
          <div className="mt-4">
            {dueTotal > REVIEW_SET_SIZE && (
              <p className="mb-3 text-sm text-ink-400">
                Showing {REVIEW_SET_SIZE} of {dueTotal} due. Finish this set and reload for more.
              </p>
            )}
            <McqPractice
              mode="INCORRECT_REVIEW"
              questions={book.due.map((q) => ({ id: q.id, question: q.question, difficulty: q.difficulty, options: q.options }))}
            />
          </div>
        )}
      </section>

      {byDate.size > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-xl font-medium text-ink-950">Coming up</h2>
          <ul className="mt-4 flex flex-col divide-y divide-ink-950/10">
            {[...byDate].map(([date, items]) => (
              <li key={date} className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm">
                <span className="font-medium text-ink-950">{formatIsoDate(date, { weekday: true })}</span>
                <span className="text-ink-400">
                  {items.length} question{items.length === 1 ? "" : "s"} · {[...new Set(items.map((i) => `${i.subject} ${i.title}`))].slice(0, 3).join(", ")}
                  {new Set(items.map((i) => i.title)).size > 3 ? "…" : ""}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-3">
      <p className="font-display text-2xl font-medium text-ink-950">{value}</p>
      <p className="text-xs text-ink-400">{label}</p>
    </div>
  );
}
