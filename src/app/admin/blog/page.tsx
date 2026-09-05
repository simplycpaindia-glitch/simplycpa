import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { createBlogPost } from "@/lib/actions/admin";

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-6">Blog</h1>

      <div className="flex flex-col divide-y divide-ink-950/10 mb-10">
        {posts.map((p) => (
          <Link key={p.id} href={`/admin/blog/${p.id}`} className="py-3 flex items-center gap-4 hover:bg-ink-950/[0.02] -mx-2 px-2 rounded-md">
            <span className="flex-1 text-sm font-medium text-ink-950">{p.title}</span>
            <span className="text-xs text-ink-400">{p.category}</span>
            <StatusBadge status={p.status} />
          </Link>
        ))}
        {posts.length === 0 && <p className="py-6 text-sm text-ink-400">No articles yet.</p>}
      </div>

      <form action={createBlogPost} className="max-w-md flex flex-col gap-3">
        <h2 className="font-semibold text-ink-950">New article</h2>
        <input name="title" placeholder="Title" required className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
        <input name="category" placeholder="Category (e.g. CPA Basics)" defaultValue="CPA Basics" className="rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
        <Button type="submit" className="self-start">Create draft</Button>
      </form>
    </div>
  );
}
