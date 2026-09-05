"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireStaff, requireAdmin } from "@/lib/dal";
import { sanitizeContentHtml } from "@/lib/sanitize";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function logAudit(userId: string, action: string, entityType: string, entityId: string) {
  await prisma.auditLog.create({ data: { userId, action, entityType, entityId } });
}

// ── Subjects ────────────────────────────────────────────────────────────

export async function updateSubject(id: string, formData: FormData) {
  const user = await requireAdmin();
  await prisma.subject.update({
    where: { id },
    data: {
      name: String(formData.get("name")),
      shortName: String(formData.get("shortName")),
      description: String(formData.get("description")),
      difficulty: formData.get("difficulty") as "EASY" | "MEDIUM" | "HARD",
      estimatedHours: formData.get("estimatedHours") ? Number(formData.get("estimatedHours")) : null,
      blueprintUrl: (formData.get("blueprintUrl") as string) || null,
      lastUpdated: new Date(),
    },
  });
  await logAudit(user.id, "update", "Subject", id);
  revalidatePath("/admin/subjects");
  revalidatePath("/cpa");
}

// ── Topics ──────────────────────────────────────────────────────────────

export async function createTopic(subjectId: string, formData: FormData) {
  const user = await requireStaff();
  const title = String(formData.get("title"));
  const topic = await prisma.topic.create({
    data: {
      subjectId,
      title,
      slug: slugify(title),
      shortDescription: String(formData.get("shortDescription") ?? ""),
      difficulty: (formData.get("difficulty") as "EASY" | "MEDIUM" | "HARD") ?? "MEDIUM",
      blueprintArea: (formData.get("blueprintArea") as string) || null,
      estimatedMinutes: formData.get("estimatedMinutes") ? Number(formData.get("estimatedMinutes")) : null,
      order: Number(formData.get("order") ?? 0),
    },
  });
  await logAudit(user.id, "create", "Topic", topic.id);
  revalidatePath("/admin/topics");
  redirect(`/admin/topics/${topic.id}`);
}

export async function updateTopic(id: string, formData: FormData) {
  const user = await requireStaff();
  await prisma.topic.update({
    where: { id },
    data: {
      title: String(formData.get("title")),
      shortDescription: String(formData.get("shortDescription") ?? ""),
      difficulty: formData.get("difficulty") as "EASY" | "MEDIUM" | "HARD",
      blueprintArea: (formData.get("blueprintArea") as string) || null,
      blueprintStatus: formData.get("blueprintStatus") as "CONFIRMED" | "PROVISIONAL",
      estimatedMinutes: formData.get("estimatedMinutes") ? Number(formData.get("estimatedMinutes")) : null,
      order: Number(formData.get("order") ?? 0),
      isComingSoon: formData.get("isComingSoon") === "on",
      status: formData.get("status") as
        | "DRAFT" | "AI_DRAFT" | "UNDER_REVIEW" | "APPROVED" | "PUBLISHED" | "NEEDS_UPDATE" | "ARCHIVED",
    },
  });
  await logAudit(user.id, "update", "Topic", id);
  revalidatePath("/admin/topics");
  revalidatePath(`/admin/topics/${id}`);
}

export async function deleteTopic(id: string) {
  const user = await requireAdmin();
  await prisma.topic.delete({ where: { id } });
  await logAudit(user.id, "delete", "Topic", id);
  revalidatePath("/admin/topics");
  redirect("/admin/topics");
}

// ── Study material / revision notes (independently versioned) ────────────

async function saveVersionedContent(opts: {
  topicId: string;
  kind: "STUDY_MATERIAL" | "REVISION_NOTE";
  rawHtml: string;
  status: string;
  changeSummary: string;
  userId: string;
}) {
  const clean = sanitizeContentHtml(opts.rawHtml);

  const record =
    opts.kind === "STUDY_MATERIAL"
      ? await prisma.studyMaterial.upsert({
          where: { topicId: opts.topicId },
          update: {
            content: clean,
            status: opts.status as never,
            version: { increment: 1 },
            reviewerId: opts.userId,
            lastReviewedAt: new Date(),
          },
          create: {
            topicId: opts.topicId,
            content: clean,
            status: opts.status as never,
            authorId: opts.userId,
          },
        })
      : await prisma.revisionNote.upsert({
          where: { topicId: opts.topicId },
          update: {
            content: clean,
            status: opts.status as never,
            version: { increment: 1 },
            reviewerId: opts.userId,
            lastReviewedAt: new Date(),
          },
          create: {
            topicId: opts.topicId,
            content: clean,
            status: opts.status as never,
            authorId: opts.userId,
          },
        });

  await prisma.contentVersion.create({
    data: {
      contentType: opts.kind,
      contentId: record.id,
      content: clean,
      changeSummary: opts.changeSummary || null,
      changedById: opts.userId,
    },
  });

  return record;
}

export async function saveStudyMaterial(topicId: string, path: string, formData: FormData) {
  const user = await requireStaff();
  await saveVersionedContent({
    topicId,
    kind: "STUDY_MATERIAL",
    rawHtml: String(formData.get("content") ?? ""),
    status: String(formData.get("status") ?? "DRAFT"),
    changeSummary: String(formData.get("changeSummary") ?? ""),
    userId: user.id,
  });
  revalidatePath(path);
  revalidatePath("/admin/topics");
}

export async function saveRevisionNote(topicId: string, path: string, formData: FormData) {
  const user = await requireStaff();
  await saveVersionedContent({
    topicId,
    kind: "REVISION_NOTE",
    rawHtml: String(formData.get("content") ?? ""),
    status: String(formData.get("status") ?? "DRAFT"),
    changeSummary: String(formData.get("changeSummary") ?? ""),
    userId: user.id,
  });
  revalidatePath(path);
  revalidatePath("/admin/topics");
}

// ── Blog ────────────────────────────────────────────────────────────────

export async function createBlogPost(formData: FormData) {
  const user = await requireStaff();
  const title = String(formData.get("title"));
  const post = await prisma.blogPost.create({
    data: {
      title,
      slug: slugify(title),
      excerpt: String(formData.get("excerpt") ?? ""),
      content: sanitizeContentHtml(String(formData.get("content") ?? "")),
      category: String(formData.get("category") ?? "CPA Basics"),
      status: "DRAFT",
      authorId: user.id,
    },
  });
  await logAudit(user.id, "create", "BlogPost", post.id);
  revalidatePath("/admin/blog");
  redirect(`/admin/blog/${post.id}`);
}

export async function updateBlogPost(id: string, formData: FormData) {
  const user = await requireStaff();
  const status = formData.get("status") as
    | "DRAFT" | "AI_DRAFT" | "UNDER_REVIEW" | "APPROVED" | "PUBLISHED" | "NEEDS_UPDATE" | "ARCHIVED";
  await prisma.blogPost.update({
    where: { id },
    data: {
      title: String(formData.get("title")),
      excerpt: String(formData.get("excerpt") ?? ""),
      content: sanitizeContentHtml(String(formData.get("content") ?? "")),
      category: String(formData.get("category") ?? "CPA Basics"),
      status,
      publishedAt: status === "PUBLISHED" ? new Date() : null,
    },
  });
  await logAudit(user.id, "update", "BlogPost", id);
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}

// ── FAQ ─────────────────────────────────────────────────────────────────

export async function createFaq(formData: FormData) {
  const user = await requireStaff();
  const faq = await prisma.fAQ.create({
    data: {
      category: String(formData.get("category")),
      question: String(formData.get("question")),
      answer: String(formData.get("answer")),
      order: Number(formData.get("order") ?? 0),
      status: "PUBLISHED",
    },
  });
  await logAudit(user.id, "create", "FAQ", faq.id);
  revalidatePath("/admin/faq");
  revalidatePath("/faq");
}

export async function updateFaq(id: string, formData: FormData) {
  const user = await requireStaff();
  await prisma.fAQ.update({
    where: { id },
    data: {
      category: String(formData.get("category")),
      question: String(formData.get("question")),
      answer: String(formData.get("answer")),
      order: Number(formData.get("order") ?? 0),
      status: formData.get("status") as "DRAFT" | "PUBLISHED" | "ARCHIVED" as never,
    },
  });
  await logAudit(user.id, "update", "FAQ", id);
  revalidatePath("/admin/faq");
  revalidatePath("/faq");
}

export async function deleteFaq(id: string) {
  const user = await requireStaff();
  await prisma.fAQ.delete({ where: { id } });
  await logAudit(user.id, "delete", "FAQ", id);
  revalidatePath("/admin/faq");
  revalidatePath("/faq");
}

// ── Sources ─────────────────────────────────────────────────────────────

export async function createSource(formData: FormData) {
  const user = await requireStaff();
  await prisma.source.create({
    data: {
      name: String(formData.get("name")),
      url: String(formData.get("url")),
      sourceType: formData.get("sourceType") as never,
      notes: (formData.get("notes") as string) || null,
    },
  });
  await logAudit(user.id, "create", "Source", "new");
  revalidatePath("/admin/sources");
  revalidatePath("/sources");
}

// ── Comment moderation ─────────────────────────────────────────────────

export async function moderateComment(
  id: string,
  action: "pin" | "unpin" | "delete" | "lock" | "unlock"
) {
  const user = await requireStaff();
  const data =
    action === "pin" ? { isPinned: true } :
    action === "unpin" ? { isPinned: false } :
    action === "lock" ? { isLocked: true } :
    action === "unlock" ? { isLocked: false } :
    { isDeleted: true, body: "" };

  await prisma.comment.update({ where: { id }, data });
  await logAudit(user.id, action, "Comment", id);
  revalidatePath("/admin/comments");
}
