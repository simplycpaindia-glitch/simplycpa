"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Flag, Heart, Trash2 } from "lucide-react";
import { Avatar } from "@/components/journal/Avatar";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { deleteOwnJournalPost, reportJournalPost, toggleHelpful } from "@/lib/actions/journal";
import { REPORT_REASONS, REPORT_REASON_LABEL, TAG_LABEL, type ReportReasonValue } from "@/lib/journal/constants";
import type { FeedPost } from "@/lib/journal/queries";

const COLLAPSE_CHARS = 600;
const COLLAPSE_LINES = 10;

export function PostCard({ post, viewer }: { post: FeedPost; viewer: { signedIn: boolean; canInteract: boolean } }) {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [helpful, setHelpful] = useState({ count: post.helpfulCount, mine: post.viewerFoundHelpful });
  const [reporting, setReporting] = useState(false);
  const [reason, setReason] = useState<ReportReasonValue | "">("");
  const [details, setDetails] = useState("");
  const [notice, setNotice] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const long = post.body.length > COLLAPSE_CHARS || post.body.split("\n").length > COLLAPSE_LINES;
  const shown = !long || expanded ? post.body : `${post.body.slice(0, COLLAPSE_CHARS).trimEnd()}…`;

  function requireAccount() {
    if (!viewer.signedIn) {
      router.push(`/login?callbackUrl=${encodeURIComponent("/what-i-studied")}`);
      return false;
    }
    if (!viewer.canInteract) {
      router.push(`/welcome?callbackUrl=${encodeURIComponent("/what-i-studied")}`);
      return false;
    }
    return true;
  }

  function onHelpful() {
    if (!requireAccount()) return;
    const next = { count: helpful.count + (helpful.mine ? -1 : 1), mine: !helpful.mine };
    setHelpful(next); // optimistic
    startTransition(async () => {
      const res = await toggleHelpful(post.id);
      if (!res.ok) {
        setHelpful(helpful);
        setNotice(res.error);
      }
    });
  }

  function onReport() {
    if (!reason) return;
    startTransition(async () => {
      const res = await reportJournalPost({ postId: post.id, reason, details });
      setReporting(false);
      setReason("");
      setDetails("");
      setNotice(res.ok ? (res.alreadyReported ? "You've already reported this post." : "Thanks — a moderator will review it.") : res.error);
    });
  }

  function onDelete() {
    if (!window.confirm("Delete this post permanently? This can't be undone.")) return;
    startTransition(async () => {
      const res = await deleteOwnJournalPost(post.id);
      if (!res.ok) setNotice(res.error);
    });
  }

  return (
    <article className="rounded-xl border border-ink-950/10 bg-paper-50 p-4 shadow-[0_1px_2px_rgba(11,16,28,0.04)]">
      <header className="flex items-start gap-3">
        <Link href={`/what-i-studied/u/${post.username}`} aria-label={`@${post.username}'s posts`}>
          <Avatar username={post.username} />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <Link href={`/what-i-studied/u/${post.username}`} className="font-semibold text-ink-950 hover:underline">
              @{post.username}
            </Link>
            <span className="text-ink-400">·</span>
            <time dateTime={post.createdAtIso} title={new Date(post.createdAtIso).toLocaleString("en-IN")} className="text-ink-400">
              {post.createdAgo}
            </time>
            {post.tag !== "GENERAL" && <Badge tone="gold">{TAG_LABEL[post.tag]}</Badge>}
            {post.isOwn && post.status !== "PUBLISHED" && (
              <Badge tone="amber">{post.status === "HELD_FOR_REVIEW" ? "Waiting for review — only you can see this" : "Hidden after reports — under review"}</Badge>
            )}
          </div>
          <p className="mt-2 whitespace-pre-wrap break-words text-[15px] leading-relaxed text-ink-950">{shown}</p>
          {long && (
            <button type="button" onClick={() => setExpanded((v) => !v)} className="mt-1 text-sm font-medium text-gold-600 hover:underline">
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </header>

      <footer className="mt-3 flex items-center gap-1 border-t border-ink-950/5 pt-2 text-sm">
        <button
          type="button"
          onClick={onHelpful}
          disabled={pending || post.isOwn || post.status !== "PUBLISHED"}
          aria-pressed={helpful.mine}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors disabled:cursor-default",
            helpful.mine ? "text-signal-red" : "text-ink-400 hover:bg-ink-950/5 hover:text-ink-950",
          )}
        >
          <Heart className={cn("h-4 w-4", helpful.mine && "fill-current")} aria-hidden />
          Helpful{helpful.count > 0 && <span className="tabular-nums">· {helpful.count}</span>}
        </button>

        <div className="ml-auto flex items-center gap-1">
          {post.isOwn ? (
            <button type="button" onClick={onDelete} disabled={pending} className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-ink-400 hover:bg-ink-950/5 hover:text-signal-red">
              <Trash2 className="h-4 w-4" aria-hidden /> Delete
            </button>
          ) : (
            <button
              type="button"
              onClick={() => requireAccount() && setReporting((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-ink-400 hover:bg-ink-950/5 hover:text-ink-950"
            >
              <Flag className="h-4 w-4" aria-hidden /> Report
            </button>
          )}
        </div>
      </footer>

      {reporting && (
        <div className="mt-3 rounded-lg border border-ink-950/10 bg-paper-100/60 p-3">
          <p className="text-sm font-medium text-ink-950">Why are you reporting this post?</p>
          <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {REPORT_REASONS.map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm text-ink-800">
                <input type="radio" name={`reason-${post.id}`} value={r} checked={reason === r} onChange={() => setReason(r)} />
                {REPORT_REASON_LABEL[r]}
              </label>
            ))}
          </div>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            maxLength={500}
            rows={2}
            placeholder="Anything else a moderator should know? (optional, only staff see this)"
            className="mt-2 w-full rounded-md border border-ink-950/15 bg-white px-2.5 py-1.5 text-sm outline-none focus:border-ink-950/40"
          />
          <div className="mt-2 flex justify-end gap-2">
            <button type="button" onClick={() => setReporting(false)} className="px-3 py-1.5 text-sm text-ink-400 hover:text-ink-950">
              Cancel
            </button>
            <button
              type="button"
              onClick={onReport}
              disabled={!reason || pending}
              className="rounded-md bg-ink-950 px-3 py-1.5 text-sm font-medium text-paper-50 disabled:opacity-50"
            >
              Send report
            </button>
          </div>
        </div>
      )}

      {notice && <p className="mt-2 text-xs text-ink-400">{notice}</p>}
    </article>
  );
}
