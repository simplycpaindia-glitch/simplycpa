import Link from "next/link";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { QuestionOfTheDayCard } from "@/components/practice/QuestionOfTheDayCard";
import { getQotd, getQotdStreak } from "@/lib/qotd-data";
import { addDays, istDate } from "@/lib/qotd";
import { formatIsoDate } from "@/lib/utils";
import { SITE_URL } from "@/lib/site";

/** One day's Question of the Day page (today's, or a past day from the archive). */
export async function QotdView({ date }: { date: string }) {
  const today = istDate(new Date());
  const isToday = date === today;
  const [mcq, session] = await Promise.all([getQotd(date), auth()]);
  if (!mcq) return null;
  const streak = session?.user && isToday ? await getQotdStreak(session.user.id, today) : null;
  const prev = addDays(date, -1);
  const next = isToday ? null : addDays(date, 1);

  return (
    <Container className="max-w-2xl py-14">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold-700">Question of the Day</p>
      <h1 className="mt-2 font-display text-3xl font-medium text-ink-950">
        {isToday ? "Today's question" : formatIsoDate(date, { weekday: true })}
      </h1>
      <p className="mt-2 text-sm text-ink-400">
        {isToday
          ? "One CPA question a day. Answer today's to keep your streak — one answer is enough."
          : "From the archive. Past questions don't count towards your streak, but they're good practice."}
      </p>

      <div className="mt-8">
        <QuestionOfTheDayCard
          mcqId={mcq.id}
          question={mcq.question}
          subjectShortName={mcq.topic.subject.shortName}
          topicTitle={mcq.topic.title}
          topicHref={`/cpa/${mcq.topic.subject.slug}/${mcq.topic.slug}#mcqs`}
          options={mcq.options.map((o) => ({ id: o.id, label: o.label, text: o.text }))}
          isToday={isToday}
          isLoggedIn={!!session?.user}
          streak={streak && { current: streak.current, answeredToday: streak.answeredToday }}
          shareUrl={`${SITE_URL}/question-of-the-day/${date}`}
        />
      </div>

      {streak && streak.longest > 1 && (
        <p className="mt-4 text-sm text-ink-400">Your longest streak: {streak.longest} days.</p>
      )}

      <nav aria-label="Other days" className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-ink-950/10 pt-6 text-sm">
        <Link href={`/question-of-the-day/${prev}`} className="font-medium text-ink-800 hover:underline">
          ← {formatIsoDate(prev)}
        </Link>
        <Link href="/question-of-the-day/archive" className="font-medium text-ink-800 hover:underline">
          All past questions
        </Link>
        {next ? (
          <Link href={next === today ? "/question-of-the-day" : `/question-of-the-day/${next}`} className="font-medium text-ink-800 hover:underline">
            {next === today ? "Today" : formatIsoDate(next)} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </Container>
  );
}
