import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { prisma } from "@/lib/prisma";
import { getCandidates } from "@/lib/qotd-data";
import { addDays, istDate, qotdIdFor } from "@/lib/qotd";
import { formatIsoDate } from "@/lib/utils";

const DAYS = 60;

export const metadata: Metadata = {
  title: "Question of the Day Archive",
  description: "The last 60 days of SimplyCPA's CPA Question of the Day, by date and topic.",
  alternates: { canonical: "/question-of-the-day/archive" },
};

export default async function QotdArchivePage() {
  const today = istDate(new Date());
  const candidates = await getCandidates();
  const days = Array.from({ length: DAYS }, (_, i) => addDays(today, -i))
    .map((date) => ({ date, id: qotdIdFor(date, candidates) }))
    .filter((d): d is { date: string; id: string } => !!d.id);
  const mcqs = await prisma.mCQ.findMany({
    where: { id: { in: [...new Set(days.map((d) => d.id))] } },
    select: { id: true, topic: { select: { title: true, subject: { select: { shortName: true } } } } },
  });
  const byId = new Map(mcqs.map((m) => [m.id, m]));

  return (
    <Container className="max-w-2xl py-14">
      <SectionHeading as="h1" eyebrow="Question of the Day" title="Past questions" description={`The last ${DAYS} days. Open any day to answer it — only today's question counts towards your streak.`} />
      <ol className="mt-8 flex flex-col divide-y divide-ink-950/10">
        {days.map((d) => {
          const m = byId.get(d.id);
          return (
            <li key={d.date}>
              <Link href={d.date === today ? "/question-of-the-day" : `/question-of-the-day/${d.date}`} className="flex items-center justify-between gap-4 py-3 hover:bg-ink-950/[0.02]">
                <span className="text-sm text-ink-950">
                  {d.date === today ? "Today" : formatIsoDate(d.date, { weekday: true })}
                </span>
                <span className="text-right text-sm text-ink-400">
                  {m ? `${m.topic.subject.shortName} · ${m.topic.title}` : ""}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </Container>
  );
}
