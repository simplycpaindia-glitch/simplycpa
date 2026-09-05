import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { saveRevisionNote } from "@/lib/actions/admin";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { Button } from "@/components/ui/Button";

export default async function EditRevisionNotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topic = await prisma.topic.findUnique({
    where: { id },
    include: { revisionNote: true, subject: true },
  });
  if (!topic) notFound();

  const path = `/cpa/${topic.subject.slug}/${topic.slug}`;
  const saveAction = saveRevisionNote.bind(null, id, path);

  return (
    <div>
      <div className="mb-6 flex items-center gap-2 text-xs text-ink-400">
        <Link href={`/admin/topics/${id}`} className="hover:underline">{topic.title}</Link>
        <span>/</span>
        <span>Revision Notes</span>
      </div>
      <h1 className="font-display text-2xl font-medium mb-1">Revision Notes</h1>
      <p className="text-sm text-ink-400 mb-6">
        {topic.revisionNote ? `Version ${topic.revisionNote.version}` : "No content yet"} — keep this
        short: key concepts, formulas, exceptions, and common traps only.
      </p>

      <form action={saveAction} className="max-w-3xl">
        <RichTextEditor
          name="content"
          defaultValue={topic.revisionNote?.content}
          placeholder="Key concepts, formulas, exceptions, common traps…"
        />

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Status</label>
            <select name="status" defaultValue={topic.revisionNote?.status ?? "DRAFT"} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
              {["DRAFT", "AI_DRAFT", "UNDER_REVIEW", "APPROVED", "PUBLISHED", "NEEDS_UPDATE", "ARCHIVED"].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Change summary</label>
            <input name="changeSummary" placeholder="e.g. Trimmed to one page" className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          </div>
        </div>

        <Button type="submit" className="mt-5">Save Revision Notes</Button>
      </form>
    </div>
  );
}
