"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function SearchBox({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        const q = (new FormData(e.currentTarget).get("q") as string)?.trim();
        if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
      }}
    >
      <div className="relative">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-ink-400" />
        <input
          name="q"
          type="search"
          placeholder="Search topics, MCQs, FAQs…"
          className="w-full rounded-md border border-ink-950/15 bg-paper-50 py-1.5 pl-8 pr-3 text-sm outline-none focus:border-ink-950/40"
        />
      </div>
    </form>
  );
}
