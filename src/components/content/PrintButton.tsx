"use client";

import { Printer } from "lucide-react";

/** Opens the browser's print dialog — "Save as PDF" is one of its options. */
export function PrintButton({ label = "Print / Save as PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex h-9 items-center gap-2 rounded-md border border-ink-950/20 px-3 text-sm font-medium text-ink-950 hover:border-ink-950/50"
    >
      <Printer className="size-4" aria-hidden />
      {label}
    </button>
  );
}
