"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { LinkedText } from "@/components/content/LinkedText";

type Faq = { id: string; category: string; question: string; answer: string };
export type FaqCategoryCard = { name: string; slug: string; blurb: string; count: number; sample: string[] };

/**
 * FAQ hub: search across every question, or browse by category. With no search text the
 * category cards are shown; each links to its own page, where the answers live.
 */
export function FaqBrowser({ faqs, categories }: { faqs: Faq[]; categories: FaqCategoryCard[] }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    const words = q.split(/\s+/);
    const score = (f: Faq) => {
      const question = f.question.toLowerCase();
      const answer = f.answer.toLowerCase();
      if (!words.every((w) => question.includes(w) || answer.includes(w))) return 0;
      return words.reduce((s, w) => s + (question.includes(w) ? 3 : 1), 0);
    };
    return faqs
      .map((f) => ({ f, s: score(f) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 40)
      .map((x) => x.f);
  }, [faqs, q]);

  return (
    <div>
      <div className="relative w-full max-w-xl">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-400" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search all ${faqs.length} questions`}
          aria-label="Search all questions"
          className="w-full rounded-lg border border-ink-950/15 bg-paper-50 py-3 pl-9 pr-3 text-base outline-none focus:border-ink-950/40"
        />
      </div>

      {q ? (
        <div className="mt-6" aria-live="polite">
          <p className="text-sm text-ink-400">
            {results.length === 0 ? "No questions match. Try fewer or different words." : `${results.length}${results.length === 40 ? "+" : ""} matching ${results.length === 1 ? "question" : "questions"}`}
          </p>
          {results.length > 0 && (
            <Accordion
              key={q}
              className="mt-2"
              items={results.map((f) => ({
                id: f.id,
                question: f.question,
                answer: (
                  <>
                    <LinkedText text={f.answer} />
                    <span className="mt-2 block text-xs text-ink-400">In: {f.category}</span>
                  </>
                ),
              }))}
            />
          )}
        </div>
      ) : (
        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ink-950/10 bg-ink-950/10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <li key={c.slug} className="bg-paper-50">
              <Link href={`/faq/${c.slug}`} className="group flex h-full flex-col p-5 hover:bg-paper-100">
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold text-ink-950 group-hover:underline">{c.name}</span>
                  <span className="shrink-0 text-xs tabular-nums text-ink-400">
                    {c.count} {c.count === 1 ? "question" : "questions"}
                  </span>
                </span>
                {c.blurb && <span className="mt-1 text-sm leading-relaxed text-ink-400">{c.blurb}</span>}
                <span className="mt-3 flex flex-1 flex-col gap-1 text-sm text-ink-800">
                  {c.sample.map((s) => (
                    <span key={s} className="line-clamp-1">
                      {s}
                    </span>
                  ))}
                </span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink-950">
                  All answers <ArrowRight className="size-3.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
