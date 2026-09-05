import { prisma } from "@/lib/prisma";
import { moderateComment } from "@/lib/actions/admin";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default async function AdminCommentsPage() {
  const comments = await prisma.comment.findMany({
    where: { isDeleted: false },
    orderBy: { createdAt: "desc" },
    take: 100,
    include: { user: true, topic: { include: { subject: true } } },
  });

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">Comment moderation</h1>
      <div className="flex flex-col divide-y divide-ink-950/10">
        {comments.map((c) => (
          <div key={c.id} className="py-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
              <span className="font-medium text-ink-950">{c.user.name ?? c.user.email}</span>
              <Badge tone="neutral">{c.topic.subject.shortName} — {c.topic.title}</Badge>
              {c.isPinned && <Badge tone="gold">Pinned</Badge>}
              {c.isLocked && <Badge tone="red">Locked</Badge>}
              <span>{formatDate(c.createdAt)}</span>
            </div>
            <p className="mt-1 text-sm text-ink-800">{c.body}</p>
            <div className="mt-2 flex gap-3 text-xs">
              <ModAction commentId={c.id} action={c.isPinned ? "unpin" : "pin"} label={c.isPinned ? "Unpin" : "Pin"} />
              <ModAction commentId={c.id} action={c.isLocked ? "unlock" : "lock"} label={c.isLocked ? "Unlock" : "Lock"} />
              <ModAction commentId={c.id} action="delete" label="Delete" tone="text-signal-red" />
            </div>
          </div>
        ))}
        {comments.length === 0 && <p className="py-6 text-sm text-ink-400">No comments yet.</p>}
      </div>
    </div>
  );
}

function ModAction({
  commentId, action, label, tone,
}: { commentId: string; action: "pin" | "unpin" | "delete" | "lock" | "unlock"; label: string; tone?: string }) {
  const boundAction = moderateComment.bind(null, commentId, action);
  return (
    <form action={boundAction}>
      <button type="submit" className={`hover:underline ${tone ?? "text-ink-400"}`}>
        {label}
      </button>
    </form>
  );
}
