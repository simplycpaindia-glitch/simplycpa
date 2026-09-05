import { cn } from "@/lib/utils";
import type { ContentStatus, Difficulty } from "@/generated/prisma/client";

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "gold" | "green" | "red" | "amber" | "dark";
}) {
  const tones: Record<string, string> = {
    neutral: "bg-paper-200 text-ink-800",
    gold: "bg-gold-500/15 text-gold-600",
    green: "bg-signal-green/10 text-signal-green",
    red: "bg-signal-red/10 text-signal-red",
    amber: "bg-signal-amber/10 text-signal-amber",
    dark: "bg-ink-950 text-paper-50",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const map: Record<Difficulty, { label: string; tone: "green" | "amber" | "red" }> = {
    EASY: { label: "Easy", tone: "green" },
    MEDIUM: { label: "Medium", tone: "amber" },
    HARD: { label: "Hard", tone: "red" },
  };
  const m = map[difficulty];
  return <Badge tone={m.tone}>{m.label}</Badge>;
}

export function StatusBadge({ status }: { status: ContentStatus }) {
  const map: Record<ContentStatus, { label: string; tone: "neutral" | "gold" | "green" | "red" | "amber" }> = {
    DRAFT: { label: "Draft", tone: "neutral" },
    AI_DRAFT: { label: "AI Draft", tone: "gold" },
    UNDER_REVIEW: { label: "Under Review", tone: "amber" },
    APPROVED: { label: "Approved", tone: "green" },
    PUBLISHED: { label: "Published", tone: "green" },
    NEEDS_UPDATE: { label: "Needs Update", tone: "red" },
    ARCHIVED: { label: "Archived", tone: "neutral" },
  };
  const m = map[status];
  return <Badge tone={m.tone}>{m.label}</Badge>;
}
