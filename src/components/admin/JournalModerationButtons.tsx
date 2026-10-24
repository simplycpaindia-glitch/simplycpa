"use client";

import { useTransition } from "react";
import {
  approveJournalPost,
  banCommunityUser,
  dismissJournalReports,
  removeJournalPost,
  unbanCommunityUser,
} from "@/lib/actions/admin-journal";

const btn = "rounded-md px-2.5 py-1 text-xs font-medium disabled:opacity-50";

export function PostModerationButtons({ postId, authorId, status, hasReports }: { postId: string; authorId: string; status: string; hasReports: boolean }) {
  const [pending, start] = useTransition();
  return (
    <div className="flex flex-wrap gap-2">
      {status !== "PUBLISHED" && (
        <button type="button" disabled={pending} onClick={() => start(() => approveJournalPost(postId))} className={`${btn} bg-signal-green text-paper-50`}>
          Approve &amp; publish
        </button>
      )}
      {status === "PUBLISHED" && hasReports && (
        <button type="button" disabled={pending} onClick={() => start(() => dismissJournalReports(postId))} className={`${btn} bg-paper-200 text-ink-800`}>
          Dismiss reports
        </button>
      )}
      {status !== "REMOVED" && (
        <button
          type="button"
          disabled={pending}
          onClick={() => {
            const note = window.prompt("Reason for removal (optional, kept in the audit log):") ?? undefined;
            start(() => removeJournalPost(postId, note));
          }}
          className={`${btn} bg-signal-red text-paper-50`}
        >
          Remove
        </button>
      )}
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          const reason = window.prompt("Suspend this member from posting? Their visible posts will be removed. Reason:");
          if (reason !== null) start(() => banCommunityUser(authorId, reason));
        }}
        className={`${btn} border border-signal-red/40 text-signal-red`}
      >
        Suspend author
      </button>
    </div>
  );
}

export function UnbanButton({ userId }: { userId: string }) {
  const [pending, start] = useTransition();
  return (
    <button type="button" disabled={pending} onClick={() => start(() => unbanCommunityUser(userId))} className={`${btn} bg-paper-200 text-ink-800`}>
      Lift suspension
    </button>
  );
}
