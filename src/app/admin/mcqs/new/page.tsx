import { prisma } from "@/lib/prisma";
import { createMcq } from "@/lib/actions/admin-mcq";
import { McqForm } from "@/components/admin/McqForm";

export default async function NewMcqPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const topics = await prisma.topic.findMany({
    include: { subject: true },
    orderBy: [{ subject: { order: "asc" } }, { order: "asc" }],
  });

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">New MCQ</h1>
      <McqForm serverAction={createMcq} topics={topics} defaultTopicId={topic} />
    </div>
  );
}
