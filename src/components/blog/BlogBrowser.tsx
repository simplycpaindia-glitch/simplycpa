"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export type BlogCard = { slug: string; title: string; excerpt: string; category: string; date: string | null };

/** Category filter and search for the article library. All cards stay in the HTML so crawlers see every link. */
export function BlogBrowser({ posts }: { posts: BlogCard[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of posts) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [posts]);

  const q = query.trim().toLowerCase();
  const matches = (p: BlogCard) =>
    (category === "All" || p.category === category) && (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
  const shown = posts.filter(matches).length;

  const chip = (active: boolean) =>
    cn("rounded-full px-3 py-1.5 text-sm font-medium", active ? "bg-ink-950 text-paper-50" : "bg-paper-100 text-ink-800 hover:bg-paper-200");

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-400" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            aria-label="Search articles"
            className="w-full rounded-lg border border-ink-950/15 bg-paper-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-ink-950/40"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button type="button" aria-pressed={category === "All"} onClick={() => setCategory("All")} className={chip(category === "All")}>
            All <span className="opacity-60">{posts.length}</span>
          </button>
          {categories.map(([c, n]) => (
            <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)} className={chip(category === c)}>
              {c} <span className="opacity-60">{n}</span>
            </button>
          ))}
        </div>
        <p className="text-sm text-ink-400" aria-live="polite">
          {shown} {shown === 1 ? "article" : "articles"}
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} hidden={!matches(post)}>
            <Card className="h-full p-6 transition-shadow hover:shadow-md">
              <Badge tone="gold">{post.category}</Badge>
              <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-ink-950">{post.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-ink-400">{post.excerpt}</p>
              {post.date && <p className="mt-4 text-xs text-ink-400">{post.date}</p>}
            </Card>
          </Link>
        ))}
      </div>
      {shown === 0 && <p className="py-8 text-ink-400">No articles match. Try a different word or category.</p>}
    </div>
  );
}
