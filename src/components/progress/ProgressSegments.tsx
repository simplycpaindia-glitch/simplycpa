import type { TopicProgress } from "@/lib/mastery";

export type ProgressCounts = { total: number; mastered: number; revised: number; studied: number };

export function countProgress(progress: Iterable<TopicProgress>, total: number): ProgressCounts {
  const all = [...progress];
  return {
    total,
    mastered: all.filter((p) => p.state === "mastered").length,
    revised: all.filter((p) => p.state === "revised").length,
    studied: all.filter((p) => p.state === "studied").length,
  };
}

/** Thin stacked bar: mastered (green), revised (gold), studied (light gold). */
export function ProgressSegments({ counts, className }: { counts: ProgressCounts; className?: string }) {
  const pct = (n: number) => (counts.total ? (n / counts.total) * 100 : 0);
  return (
    <div
      className={`flex h-1.5 overflow-hidden rounded-full bg-ink-950/10 ${className ?? ""}`}
      role="img"
      aria-label={`${counts.mastered} mastered, ${counts.revised} revised, ${counts.studied} studied, out of ${counts.total} topics`}
    >
      <span className="bg-signal-green" style={{ width: `${pct(counts.mastered)}%` }} />
      <span className="bg-gold-500" style={{ width: `${pct(counts.revised)}%` }} />
      <span className="bg-gold-400/50" style={{ width: `${pct(counts.studied)}%` }} />
    </div>
  );
}
