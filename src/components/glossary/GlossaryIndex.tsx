"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Entry = { slug: string; term: string; section: string; letter: string; summary: string };

const SECTIONS = ["far", "aud", "reg", "bar", "isc", "tcp"] as const;

export function GlossaryIndex({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<string | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => (!section || e.section === section) && (!q || e.term.toLowerCase().includes(q) || e.summary.toLowerCase().includes(q)));
  }, [entries, query, section]);

  const letters = [...new Set(visible.map((e) => e.letter))];

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="glossary-search">Search the glossary</label>
        <input
          id="glossary-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms, e.g. goodwill or CECL"
          className="w-full rounded-md border border-ink-950/20 bg-paper-50 px-3 py-2 text-sm sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by exam section">
          <button
            type="button"
            onClick={() => setSection(null)}
            aria-pressed={section === null}
            className={cn("rounded-full border px-3 py-1 text-xs font-medium", section === null ? "border-ink-950 bg-ink-950 text-paper-50" : "border-ink-950/20 text-ink-800")}
          >
            All
          </button>
          {SECTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSection(section === s ? null : s)}
              aria-pressed={section === s}
              className={cn("rounded-full border px-3 py-1 text-xs font-medium uppercase", section === s ? "border-ink-950 bg-ink-950 text-paper-50" : "border-ink-950/20 text-ink-800")}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <nav aria-label="Jump to letter" className="mt-5 flex flex-wrap gap-1 text-sm">
        {letters.map((l) => (
          <a key={l} href={`#letter-${l}`} className="rounded px-2 py-1 font-medium text-ink-800 hover:bg-ink-950/5">
            {l}
          </a>
        ))}
      </nav>

      <p className="mt-3 text-xs text-ink-400" aria-live="polite">
        {visible.length} {visible.length === 1 ? "term" : "terms"}
      </p>

      {letters.map((l) => (
        <section key={l} id={`letter-${l}`} className="mt-8 scroll-mt-24">
          <h2 className="border-b border-ink-950/10 pb-1 font-display text-2xl font-medium text-ink-950">{l}</h2>
          <ul className="mt-3 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {visible
              .filter((e) => e.letter === l)
              .map((e) => (
                <li key={e.slug}>
                  <Link href={`/glossary/${e.slug}`} className="font-medium text-ink-950 underline-offset-2 hover:underline">
                    {e.term}
                  </Link>
                  <span className="ml-2 text-xs font-medium uppercase text-ink-400">{e.section}</span>
                  <p className="mt-0.5 line-clamp-2 text-sm text-ink-400">{e.summary}</p>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
