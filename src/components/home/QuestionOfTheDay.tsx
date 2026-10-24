import Link from "next/link";
import { auth } from "@/lib/auth";
import { Container, SectionHeading } from "@/components/ui/Container";
import { QuestionOfTheDayCard } from "@/components/practice/QuestionOfTheDayCard";
import { getQotd, getQotdStreak } from "@/lib/qotd-data";
import { istDate } from "@/lib/qotd";
import { SITE_URL } from "@/lib/site";

export async function QuestionOfTheDay() {
  const today = istDate(new Date());
  const [mcq, session] = await Promise.all([getQotd(today), auth()]);
  if (!mcq) return null;
  const streak = session?.user ? await getQotdStreak(session.user.id, today) : null;

  return (
    <section id="question-of-the-day" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionHeading eyebrow="Question of the Day" title="One question. Every day." />
          <Link href="/question-of-the-day/archive" className="text-sm font-medium text-ink-800 underline underline-offset-2">
            Past questions
          </Link>
        </div>
        <div className="mt-8 max-w-2xl">
          <QuestionOfTheDayCard
            mcqId={mcq.id}
            question={mcq.question}
            subjectShortName={mcq.topic.subject.shortName}
            topicTitle={mcq.topic.title}
            topicHref={`/cpa/${mcq.topic.subject.slug}/${mcq.topic.slug}#mcqs`}
            options={mcq.options.map((o) => ({ id: o.id, label: o.label, text: o.text }))}
            isToday
            isLoggedIn={!!session?.user}
            streak={streak && { current: streak.current, answeredToday: streak.answeredToday }}
            shareUrl={`${SITE_URL}/question-of-the-day/${today}`}
          />
        </div>
      </Container>
    </section>
  );
}
