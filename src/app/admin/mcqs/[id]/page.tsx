import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateMcq, deleteMcq } from "@/lib/actions/admin-mcq";
import { McqForm } from "@/components/admin/McqForm";

export default async function EditMcqPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [mcq, topics] = await Promise.all([
    prisma.mCQ.findUnique({ where: { id }, include: { options: true, topic: true } }),
    prisma.topic.findMany({ include: { subject: true }, orderBy: [{ subject: { order: "asc" } }, { order: "asc" }] }),
  ]);
  if (!mcq) notFound();

  const updateWithId = updateMcq.bind(null, id);
  const deleteWithId = deleteMcq.bind(null, id);

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">Edit MCQ</h1>
      <McqForm
        serverAction={updateWithId}
        topics={topics}
        defaultTopicId={mcq.topicId}
        defaultValues={{
          question: mcq.question,
          explanation: mcq.explanation,
          learningObjective: mcq.learningObjective,
          difficulty: mcq.difficulty,
          questionType: mcq.questionType,
          tags: mcq.tags,
          status: mcq.status,
          options: mcq.options.map((o) => ({ label: o.label, text: o.text, isCorrect: o.isCorrect, rationale: o.rationale })),
        }}
      />
      <form action={deleteWithId} className="mt-6">
        <button type="submit" className="text-xs text-signal-red hover:underline">
          Delete this MCQ permanently
        </button>
      </form>
    </div>
  );
}
