import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { updateSubject } from "@/lib/actions/admin";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default async function EditSubjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const subject = await prisma.subject.findUnique({
    where: { id },
    include: { topics: { orderBy: { order: "asc" } } },
  });
  if (!subject) notFound();

  const updateWithId = updateSubject.bind(null, id);

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">{subject.shortName}</h1>

      <Card className="p-6 max-w-2xl">
        <form action={updateWithId} className="flex flex-col gap-4">
          <TextField label="Full name" name="name" defaultValue={subject.name} />
          <TextField label="Short name" name="shortName" defaultValue={subject.shortName} />
          <TextAreaField label="Description" name="description" defaultValue={subject.description} />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Difficulty</label>
              <select name="difficulty" defaultValue={subject.difficulty} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
                <option value="EASY">Easy</option>
                <option value="MEDIUM">Medium</option>
                <option value="HARD">Hard</option>
              </select>
            </div>
            <TextField label="Estimated hours" name="estimatedHours" defaultValue={subject.estimatedHours ?? ""} type="number" />
          </div>
          <TextField label="Blueprint URL" name="blueprintUrl" defaultValue={subject.blueprintUrl ?? ""} />
          <Button type="submit" className="self-start">Save</Button>
        </form>
      </Card>

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-ink-950">Topics ({subject.topics.length})</h2>
          <Link href={`/admin/topics?subject=${subject.id}`} className="text-sm underline">
            Manage topics →
          </Link>
        </div>
        <div className="flex flex-col divide-y divide-ink-950/10">
          {subject.topics.map((t, i) => (
            <Link key={t.id} href={`/admin/topics/${t.id}`} className="py-2 flex items-center gap-3 text-sm hover:underline">
              <span className="text-ink-400 w-6">{i + 1}.</span>
              <span className="text-ink-950">{t.title}</span>
              <span className="text-xs text-ink-400">{t.status}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function TextField({
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
      <textarea name={name} defaultValue={defaultValue} rows={3} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
    </div>
  );
}
