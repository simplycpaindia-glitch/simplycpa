"use client";

import { useState, useTransition } from "react";
import { ThumbsUp, Trash2 } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { postComment, deleteOwnComment, toggleUpvote } from "@/lib/actions/comments";

type CommentData = {
  id: string;
  body: string;
  kind: "QUESTION" | "EXPLANATION" | "TIP" | "DOUBT";
  isDeleted: boolean;
  isPinned: boolean;
  createdAt: string;
  userName: string;
  userId: string;
  upvoteCount: number;
  hasUpvoted: boolean;
  canDelete: boolean;
};

const KIND_LABEL: Record<CommentData["kind"], string> = {
  QUESTION: "Question",
  EXPLANATION: "Explanation",
  TIP: "Tip",
  DOUBT: "Doubt",
};

export function Comments({
  topicId,
  path,
  comments,
  isLoggedIn,
}: {
  topicId: string;
  path: string;
  comments: CommentData[];
  isLoggedIn: boolean;
}) {
  const [body, setBody] = useState("");
  const [kind, setKind] = useState<CommentData["kind"]>("QUESTION");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;
    startTransition(async () => {
      const res = await postComment({ topicId, body, kind, path });
      if (res.ok) setBody("");
    });
  }

  const sorted = [...comments].sort((a, b) => {
    if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
    return b.upvoteCount - a.upvoteCount;
  });

  return (
    <div>
      {isLoggedIn ? (
        <form onSubmit={handleSubmit} className="mb-8 rounded-xl border border-ink-950/10 p-4">
          <div className="mb-3 flex gap-1.5">
            {(Object.keys(KIND_LABEL) as CommentData["kind"][]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium",
                  kind === k ? "bg-ink-950 text-paper-50" : "bg-paper-100 text-ink-400"
                )}
              >
                {KIND_LABEL[k]}
              </button>
            ))}
          </div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Ask a question, share a tip, or point out something worth discussing…"
            rows={3}
            maxLength={4000}
            className="w-full resize-none rounded-lg border border-ink-950/10 p-3 text-sm outline-none focus:border-ink-950/30"
          />
          <div className="mt-2 flex justify-end">
            <Button size="sm" type="submit" disabled={isPending || !body.trim()}>
              {isPending ? "Posting…" : "Post"}
            </Button>
          </div>
        </form>
      ) : (
        <div className="mb-8 rounded-xl border border-ink-950/10 p-4 text-sm text-ink-400">
          <Button href="/login" size="sm" variant="outline">
            Log in
          </Button>{" "}
          to ask a question or reply.
        </div>
      )}

      <div className="flex flex-col divide-y divide-ink-950/10">
        {sorted.length === 0 && (
          <p className="py-6 text-sm text-ink-400">No discussion yet — be the first to ask something.</p>
        )}
        {sorted.map((c) => (
          <CommentRow key={c.id} comment={c} path={path} />
        ))}
      </div>
    </div>
  );
}

function CommentRow({ comment, path }: { comment: CommentData; path: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="py-4">
      <div className="flex items-center gap-2 text-xs text-ink-400">
        <span className="font-medium text-ink-950">{comment.userName}</span>
        <Badge tone="neutral">{KIND_LABEL[comment.kind]}</Badge>
        {comment.isPinned && <Badge tone="gold">Pinned</Badge>}
        <span>{formatDate(comment.createdAt)}</span>
      </div>
      <p className="mt-2 text-sm text-ink-800 leading-relaxed">
        {comment.isDeleted ? <em className="text-ink-400">[deleted]</em> : comment.body}
      </p>
      {!comment.isDeleted && (
        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            disabled={isPending}
            onClick={() => startTransition(() => { void toggleUpvote(comment.id, path); })}
            className={cn(
              "flex items-center gap-1 text-xs",
              comment.hasUpvoted ? "text-gold-600" : "text-ink-400 hover:text-ink-800"
            )}
          >
            <ThumbsUp className="size-3.5" /> {comment.upvoteCount}
          </button>
          {comment.canDelete && (
            <button
              type="button"
              disabled={isPending}
              onClick={() => startTransition(() => { void deleteOwnComment(comment.id, path); })}
              className="flex items-center gap-1 text-xs text-ink-400 hover:text-signal-red"
            >
              <Trash2 className="size-3.5" /> Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
}
