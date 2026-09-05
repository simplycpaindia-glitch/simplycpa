import { prisma } from "@/lib/prisma";
import { createFaq, updateFaq, deleteFaq } from "@/lib/actions/admin";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default async function AdminFaqPage() {
  const faqs = await prisma.fAQ.findMany({ orderBy: [{ category: "asc" }, { order: "asc" }] });

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">FAQs</h1>

      <div className="flex flex-col gap-3 mb-10">
        {faqs.map((f) => {
          const updateWithId = updateFaq.bind(null, f.id);
          const deleteWithId = deleteFaq.bind(null, f.id);
          return (
            <Card key={f.id} className="p-4">
              <form action={updateWithId} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input name="category" defaultValue={f.category} className="w-40 rounded-lg border border-ink-950/15 px-2 py-1.5 text-xs" />
                  <input name="order" type="number" defaultValue={f.order} className="w-20 rounded-lg border border-ink-950/15 px-2 py-1.5 text-xs" />
                  <select name="status" defaultValue={f.status} className="rounded-lg border border-ink-950/15 px-2 py-1.5 text-xs">
                    <option value="PUBLISHED">Published</option>
                    <option value="DRAFT">Draft</option>
                    <option value="ARCHIVED">Archived</option>
                  </select>
                </div>
                <input name="question" defaultValue={f.question} className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm font-medium" />
                <textarea name="answer" defaultValue={f.answer} rows={2} className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
                <div className="flex gap-2">
                  <button type="submit" className="rounded-md bg-ink-950 px-3 py-1.5 text-xs font-medium text-paper-50">Save</button>
                </div>
              </form>
              <form action={deleteWithId} className="mt-1">
                <button type="submit" className="text-xs text-signal-red hover:underline">Delete</button>
              </form>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 max-w-xl">
        <h2 className="font-semibold text-ink-950 mb-3">Add FAQ</h2>
        <form action={createFaq} className="flex flex-col gap-3">
          <input name="category" placeholder="Category (e.g. Eligibility)" required className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <input name="question" placeholder="Question" required className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <textarea name="answer" placeholder="Answer" required rows={3} className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <input name="order" type="number" placeholder="Order" className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <Button type="submit" className="self-start">Add FAQ</Button>
        </form>
      </Card>
    </div>
  );
}
