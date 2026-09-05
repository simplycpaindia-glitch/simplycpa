import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateBlogPost } from "@/lib/actions/admin";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { Button } from "@/components/ui/Button";

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  const updateWithId = updateBlogPost.bind(null, id);

  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-1">{post.title}</h1>
      <p className="text-sm text-ink-400 mb-6">/blog/{post.slug}</p>

      <form action={updateWithId} className="max-w-3xl flex flex-col gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Title</label>
          <input name="title" defaultValue={post.title} required className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Category</label>
          <input name="category" defaultValue={post.category} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Excerpt</label>
          <textarea name="excerpt" defaultValue={post.excerpt} rows={2} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Content</label>
          <RichTextEditor name="content" defaultValue={post.content} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Status</label>
          <select name="status" defaultValue={post.status} className="w-full max-w-xs rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
            {["DRAFT", "AI_DRAFT", "UNDER_REVIEW", "APPROVED", "PUBLISHED", "NEEDS_UPDATE", "ARCHIVED"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <Button type="submit" className="self-start">Save</Button>
      </form>
    </div>
  );
}
