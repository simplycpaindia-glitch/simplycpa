"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";

type Faq = { id: string; category: string; question: string; answer: string };

export function FaqBrowser({ faqs }: { faqs: Faq[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(faqs.map((f) => f.category)))],
    [faqs]
  );

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCategory = category === "All" || f.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [faqs, query, category]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs…"
            className="w-full rounded-lg border border-ink-950/15 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-ink-950/40"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium",
                category === c ? "bg-ink-950 text-paper-50" : "bg-paper-100 text-ink-400"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-sm text-ink-400">No FAQs match your search.</p>
      ) : (
        <Accordion
          items={filtered.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))}
        />
      )}
    </div>
  );
}
