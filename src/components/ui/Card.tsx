import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-ink-950/10 bg-paper-50 shadow-[0_1px_2px_rgba(11,16,28,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ProgressBar({
  value,
  className,
  tone = "gold",
}: {
  value: number;
  className?: string;
  tone?: "gold" | "green";
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-1.5 w-full rounded-full bg-ink-950/10", className)}>
      <div
        className={cn(
          "h-full rounded-full",
          tone === "gold" ? "bg-gold-500" : "bg-signal-green"
        )}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
