import { cn } from "@/lib/utils";

/**
 * Renders sanitized HTML produced by the admin Tiptap editor (see
 * src/lib/sanitize.ts for the allow-list used before it's ever saved).
 * Never pass raw user input here directly.
 */
export function RichContent({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  return (
    <div
      className={cn("prose-cpa", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
