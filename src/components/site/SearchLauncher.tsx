"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Header search: a compact button that opens a full-width search panel. Also opens with
 * Ctrl+K / ⌘K or "/" (when not typing in a field). Used on desktop and phone.
 */
export function SearchLauncher({
  className,
  compact = false,
  shortcut = false,
}: {
  className?: string;
  compact?: boolean;
  /** Only one launcher on the page should listen for Ctrl+K and "/". */
  shortcut?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!shortcut) return;
    function onKey(e: KeyboardEvent) {
      const typing =
        e.target instanceof HTMLElement &&
        (e.target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName));
      if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shortcut]);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search topics, MCQs and FAQs"
        className={cn(
          "flex items-center gap-2 rounded-md border border-ink-950/15 bg-paper-50 text-sm text-ink-400 hover:border-ink-950/30 hover:text-ink-950",
          compact ? "size-10 justify-center" : "h-9 whitespace-nowrap px-3",
          className,
        )}
      >
        <Search className="size-4" aria-hidden />
        {!compact && (
          <>
            <span>Search</span>
            {/* The hint is dropped below xl so the signed-out header fits at 1024px. */}
            <kbd className="ml-2 hidden whitespace-nowrap rounded xl:inline border border-ink-950/15 px-1.5 font-sans text-xs text-ink-400">
              Ctrl K
            </kbd>
          </>
        )}
      </button>

      {/* Rendered into <body>: the header's backdrop blur would otherwise trap a fixed overlay inside it. */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search SimplyCPA"
            className="fixed inset-0 z-50 bg-ink-950/40 p-4 pt-[12vh]"
            onClick={() => setOpen(false)}
          >
            <form
              className="mx-auto flex max-w-2xl items-center gap-2 rounded-xl border border-ink-950/10 bg-paper-50 p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onSubmit={(e) => {
                e.preventDefault();
                const q = (new FormData(e.currentTarget).get("q") as string)?.trim();
                if (q) {
                  setOpen(false);
                  router.push(`/search?q=${encodeURIComponent(q)}`);
                }
              }}
            >
              <Search className="ml-2 size-5 shrink-0 text-ink-400" aria-hidden />
              <input
                ref={inputRef}
                name="q"
                type="search"
                placeholder="Search topics, MCQs…"
                aria-label="Search topics, MCQs and FAQs"
                className="min-w-0 flex-1 bg-transparent px-1 py-2.5 text-base text-ink-950 outline-none"
              />
              <button type="submit" className="rounded-md bg-ink-950 px-4 py-2 text-sm font-medium text-paper-50">
                Search
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="flex size-10 items-center justify-center rounded-md text-ink-400 hover:text-ink-950"
              >
                <X className="size-5" aria-hidden />
              </button>
            </form>
          </div>,
          document.body,
        )}
    </>
  );
}
