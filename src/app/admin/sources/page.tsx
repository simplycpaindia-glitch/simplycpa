import { prisma } from "@/lib/prisma";
import { createSource } from "@/lib/actions/admin";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

export default async function AdminSourcesPage() {
  const sources = await prisma.source.findMany({ orderBy: { dateChecked: "desc" } });

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">Sources</h1>

      <div className="flex flex-col divide-y divide-ink-950/10 mb-10">
        {sources.map((s) => (
          <div key={s.id} className="py-3">
            <p className="text-xs uppercase text-gold-600 font-medium">{s.sourceType}</p>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink-950 underline">{s.name}</a>
            <p className="text-xs text-ink-400">Checked {formatDate(s.dateChecked)}</p>
          </div>
        ))}
        {sources.length === 0 && <p className="py-6 text-sm text-ink-400">No sources yet.</p>}
      </div>

      <Card className="p-6 max-w-xl">
        <h2 className="font-semibold text-ink-950 mb-3">Add source</h2>
        <form action={createSource} className="flex flex-col gap-3">
          <input name="name" placeholder="Source name" required className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <input name="url" placeholder="https://…" type="url" required className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <select name="sourceType" className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
            <option value="PRIMARY_AICPA">AICPA (Primary)</option>
            <option value="PRIMARY_NASBA">NASBA (Primary)</option>
            <option value="PRIMARY_OTHER_OFFICIAL">Other Official</option>
            <option value="SECONDARY_PROVIDER">Secondary / Provider</option>
            <option value="OTHER">Other</option>
          </select>
          <textarea name="notes" placeholder="Notes (optional)" rows={2} className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
          <Button type="submit" className="self-start">Add source</Button>
        </form>
      </Card>
    </div>
  );
}
