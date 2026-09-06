import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { QuestionOfTheDayCard } from "@/components/practice/QuestionOfTheDayCard";

export async function QuestionOfTheDay() {
  const count = await prisma.mCQ.count({ where: { status: "PUBLISHED" } });
  if (count === 0) return null;

  // eslint-disable-next-line react-hooks/purity -- Server Component: runs once per request, not a render loop.
  const dayIndex = Math.floor(Date.now() / 86_400_000) % count;
  const [mcq] = await prisma.mCQ.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { id: "asc" },
    skip: dayIndex,
    take: 1,
    include: { options: true, topic: { include: { subject: true } } },
  });
  if (!mcq) return null;

  return (
    <section id="question-of-the-day" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="🧠 Question of the Day" title="One question. Every day." />
        <div className="mt-8 max-w-2xl">
          <QuestionOfTheDayCard
            mcqId={mcq.id}
            question={mcq.question}
            subjectShortName={mcq.topic.subject.shortName}
            topicTitle={mcq.topic.title}
            topicHref={`/cpa/${mcq.topic.subject.slug}/${mcq.topic.slug}`}
            options={mcq.options.map((o) => ({ id: o.id, label: o.label, text: o.text }))}
            explanation={mcq.explanation}
          />
        </div>
      </Container>
    </section>
  );
}
