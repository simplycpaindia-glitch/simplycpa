"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { Avatar } from "@/components/journal/Avatar";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { createJournalPost } from "@/lib/actions/journal";
import { checkPost, type Issue } from "@/lib/journal/moderation";
import {
  JOURNAL_TAGS,
  POST_MAX_CHARS,
  POSTS_PER_24H,
  STUDY_HOURS_MAX,
  STUDY_HOURS_MIN,
  TAG_LABEL,
  type JournalTagValue,
} from "@/lib/journal/constants";

export function Composer({ username, postsLeft }: { username: string; postsLeft: number }) {
  const [body, setBody] = useState("");
  const [tag, setTag] = useState<JournalTagValue>("GENERAL");
  const [hours, setHours] = useState("");
  const [left, setLeft] = useState(postsLeft);
  const [serverIssues, setServerIssues] = useState<Issue[]>([]);
  const [message, setMessage] = useState<{ tone: "ok" | "warn" | "error"; text: string } | null>(null);
  const [helpline, setHelpline] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const [pending, startTransition] = useTransition();

  // The same checks the server runs, for instant feedback. The server re-checks everything.
  const live = useMemo(() => checkPost(body), [body]);
  const length = [...body].length;
  const liveIssues = touched ? live.blocked.filter((i) => i.code !== "TOO_SHORT" || length > 0) : [];
  const issues = serverIssues.length ? serverIssues : liveIssues;
  const canPost = left > 0 && !pending && live.blocked.length === 0;

  function submit() {
    setTouched(true);
    setMessage(null);
    setServerIssues([]);
    if (live.blocked.length) return;
    startTransition(async () => {
      const res = await createJournalPost({ body, tag, studyHours: hours.trim() ? Number(hours) : null });
      setHelpline(res.helpline ?? null);
      if (!res.ok) {
        setServerIssues(res.issues ?? []);
        setMessage({ tone: "error", text: res.error });
        return;
      }
      setBody("");
      setTag("GENERAL");
      setHours("");
      setTouched(false);
      setLeft(res.postsLeft);
      setMessage(
        res.status === "PUBLISHED"
          ? { tone: "ok", text: "Posted. Thanks for sharing your week!" }
          : { tone: "warn", text: `Saved, and waiting for a quick review before it appears to others. ${res.heldReasons.join(" ")}` },
      );
    });
  }

  return (
    <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-4 shadow-[0_1px_2px_rgba(11,16,28,0.04)]">
      <div className="flex gap-3">
        <Avatar username={username} />
        <div className="min-w-0 flex-1">
          <label htmlFor="journal-body" className="sr-only">
            What did you study this week?
          </label>
          <textarea
            id="journal-body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              setServerIssues([]);
            }}
            onBlur={() => body && setTouched(true)}
            rows={4}
            maxLength={POST_MAX_CHARS + 500}
            placeholder={`What did you study this week, @${username}? Wins, struggles, what finally clicked…`}
            className="w-full resize-y rounded-lg border border-transparent bg-paper-100/60 px-3 py-2.5 text-[15px] leading-relaxed outline-none placeholder:text-ink-400 focus:border-ink-950/20 focus:bg-white"
            disabled={left === 0}
          />

          <div className="mt-2 flex flex-wrap gap-1.5" role="radiogroup" aria-label="Topic">
            {JOURNAL_TAGS.map((t) => (
              <button
                key={t}
                type="button"
                role="radio"
                aria-checked={tag === t}
                onClick={() => setTag(t)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
                  tag === t ? "bg-ink-950 text-paper-50" : "bg-paper-200 text-ink-800 hover:bg-paper-300",
                )}
              >
                {TAG_LABEL[t]}
              </button>
            ))}
          </div>

          <label className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink-400">
            <span>Hours this update covers</span>
            <input
              type="number"
              inputMode="decimal"
              min={STUDY_HOURS_MIN}
              max={STUDY_HOURS_MAX}
              step={0.5}
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="e.g. 6"
              className="w-20 rounded-md border border-ink-950/15 bg-white px-2 py-1 text-sm text-ink-950 outline-none focus:border-ink-950/40"
              disabled={left === 0}
            />
            <span>(optional — added to your study hours and weekly streak)</span>
          </label>

          {issues.length > 0 && (
            <ul role="alert" className="mt-3 space-y-1 rounded-lg bg-signal-red/10 px-3 py-2 text-sm text-signal-red">
              {issues.map((i) => (
                <li key={i.code}>{i.message}</li>
              ))}
            </ul>
          )}
          {message && !issues.length && (
            <p
              role="status"
              className={cn(
                "mt-3 rounded-lg px-3 py-2 text-sm",
                message.tone === "ok" && "bg-signal-green/10 text-signal-green",
                message.tone === "warn" && "bg-gold-500/15 text-ink-800",
                message.tone === "error" && "bg-signal-red/10 text-signal-red",
              )}
            >
              {message.text}
            </p>
          )}
          {helpline && <p className="mt-3 rounded-lg bg-[#dde0f0] px-3 py-2 text-sm text-ink-800">{helpline}</p>}

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-ink-950/5 pt-3">
            <p className="text-xs text-ink-400">
              <span className={cn("font-medium", left === 0 ? "text-signal-red" : "text-ink-800")}>
                {left} of {POSTS_PER_24H} posts left
              </span>{" "}
              in the last 24 hours · Text only · No links, contact details or exam questions ·{" "}
              <Link href="/community-guidelines" className="underline">
                Guidelines
              </Link>
            </p>
            <div className="flex items-center gap-3">
              <span className={cn("text-xs tabular-nums", length > POST_MAX_CHARS ? "text-signal-red" : "text-ink-400")}>
                {length.toLocaleString("en-IN")}/{POST_MAX_CHARS.toLocaleString("en-IN")}
              </span>
              <Button type="button" size="sm" onClick={submit} disabled={!canPost || !body.trim()}>
                {pending ? "Posting…" : "Post"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
