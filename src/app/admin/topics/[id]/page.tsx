import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { updateTopic, deleteTopic } from "@/lib/actions/admin";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";

export default async function EditTopicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topic = await prisma.topic.findUnique({
    where: { id },
    include: { subject: true, studyMaterial: true, revisionNote: true, mcqs: true },
  });
  if (!topic) notFound();

  const updateWithId = updateTopic.bind(null, id);
  const deleteWithId = deleteTopic.bind(null, id);

  return (
    <div>
      <div className="mb-6 flex items-center gap-2 text-xs text-ink-400">
        <Link href="/admin/topics" className="hover:underline">Topics</Link>
        <span>/</span>
        <span>{topic.subject.shortName}</span>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <h1 className="font-display text-2xl font-medium">{topic.title}</h1>
        <StatusBadge status={topic.status} />
      </div>

      <div className="mb-8 flex gap-3">
        <Button href={`/admin/topics/${id}/study`} variant="outline" size="sm">
          Edit Study Material {topic.studyMaterial ? "" : "(none yet)"}
        </Button>
        <Button href={`/admin/topics/${id}/revision`} variant="outline" size="sm">
          Edit Revision Notes {topic.revisionNote ? "" : "(none yet)"}
        </Button>
        <Button href={`/admin/mcqs?topic=${id}`} variant="outline" size="sm">
          Manage MCQs ({topic.mcqs.length})
        </Button>
      </div>

      <Card className="p-6 max-w-2xl">
        <form action={updateWithId} className="flex flex-col gap-4">
          <Field label="Title" name="title" defaultValue={topic.title} />
          <TextAreaField label="Short description" name="shortDescription" defaultValue={topic.shortDescription} />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Difficulty</label>
              <select name="difficulty" defaultValue={topic.difficulty} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
                <option value="EASY">Easy</option>
                <option value="MEDIUM">Medium</option>
                <option value="HARD">Hard</option>
              </select>
            </div>
            <Field label="Estimated minutes" name="estimatedMinutes" defaultValue={topic.estimatedMinutes ?? ""} type="number" />
          </div>
          <Field label="Blueprint area" name="blueprintArea" defaultValue={topic.blueprintArea ?? ""} />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Blueprint status</label>
              <select name="blueprintStatus" defaultValue={topic.blueprintStatus} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
                <option value="PROVISIONAL">Provisional (needs verification)</option>
                <option value="CONFIRMED">Confirmed against official Blueprint</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Status</label>
              <select name="status" defaultValue={topic.status} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
                {["DRAFT", "AI_DRAFT", "UNDER_REVIEW", "APPROVED", "PUBLISHED", "NEEDS_UPDATE", "ARCHIVED"].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <Field label="Order" name="order" defaultValue={topic.order} type="number" />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="isComingSoon" defaultChecked={topic.isComingSoon} />
            Show as &ldquo;Coming Soon&rdquo; on the public site
          </label>
          <Button type="submit" className="self-start">Save</Button>
        </form>
      </Card>

      <form action={deleteWithId} className="mt-6">
        <button type="submit" className="text-xs text-signal-red hover:underline">
          Delete this topic permanently
        </button>
      </form>
    </div>
  );
}

function Field({
  label, name, defaultValue, type = "text",
}: { label: string; name: string; defaultValue: string | number; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input name={name} type={type} defaultValue={defaultValue} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
    </div>
  );
}

function TextAreaField({
  label, name, defaultValue,
}: { label: string; name: string; defaultValue: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <textarea name={name} defaultValue={defaultValue} rows={2} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
    </div>
  );
}
