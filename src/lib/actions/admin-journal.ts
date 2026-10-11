"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { cleanPostText } from "@/lib/journal/moderation";

const STAFF_ROLES = new Set(["ADMIN", "EDITOR", "MODERATOR"]);

async function requireModerator() {
  const session = await auth();
  if (!session?.user || !STAFF_ROLES.has(session.user.role)) throw new Error("Forbidden");
  return session.user;
}

function refresh() {
  revalidatePath("/admin/journal");
  revalidatePath("/what-i-studied", "layout");
}

/** Publish a held or report-hidden post and close its open reports. */
export async function approveJournalPost(postId: string) {
  const staff = await requireModerator();
  const now = new Date();
  await prisma.$transaction([
    prisma.journalPost.update({ where: { id: postId }, data: { status: "PUBLISHED", reviewedAt: now, reviewedBy: staff.id } }),
    prisma.journalReport.updateMany({ where: { postId, resolvedAt: null }, data: { resolvedAt: now } }),
    prisma.auditLog.create({ data: { userId: staff.id, action: "journal.approve", entityType: "JournalPost", entityId: postId } }),
  ]);
  refresh();
}

export async function removeJournalPost(postId: string, note?: string) {
  const staff = await requireModerator();
  const now = new Date();
  await prisma.$transaction([
    prisma.journalPost.update({ where: { id: postId }, data: { status: "REMOVED", reviewedAt: now, reviewedBy: staff.id } }),
    prisma.journalReport.updateMany({ where: { postId, resolvedAt: null }, data: { resolvedAt: now } }),
    prisma.auditLog.create({
      data: { userId: staff.id, action: "journal.remove", entityType: "JournalPost", entityId: postId, metadata: note ? { note: cleanPostText(note).slice(0, 500) } : undefined },
    }),
  ]);
  refresh();
}

/** Close reports without changing the post (reports were mistaken). */
export async function dismissJournalReports(postId: string) {
  const staff = await requireModerator();
  const now = new Date();
  await prisma.$transaction([
    prisma.journalReport.updateMany({ where: { postId, resolvedAt: null }, data: { resolvedAt: now } }),
    prisma.journalPost.updateMany({ where: { id: postId, status: "HIDDEN_BY_REPORTS" }, data: { status: "PUBLISHED", reviewedAt: now, reviewedBy: staff.id } }),
    prisma.auditLog.create({ data: { userId: staff.id, action: "journal.dismiss_reports", entityType: "JournalPost", entityId: postId } }),
  ]);
  refresh();
}

/** Suspend a member from posting and reacting, and remove their visible posts. */
export async function banCommunityUser(userId: string, reason: string) {
  const staff = await requireModerator();
  const target = await prisma.user.findUnique({ where: { id: userId }, select: { role: true } });
  if (!target) throw new Error("User not found");
  if (STAFF_ROLES.has(target.role)) throw new Error("Staff accounts can't be suspended here.");
  const cleanReason = cleanPostText(reason || "Broke the community guidelines").slice(0, 300);
  const now = new Date();
  await prisma.$transaction([
    prisma.user.update({ where: { id: userId }, data: { isBanned: true, bannedAt: now, bannedReason: cleanReason } }),
    prisma.journalPost.updateMany({
      where: { userId, status: { in: ["PUBLISHED", "HELD_FOR_REVIEW", "HIDDEN_BY_REPORTS"] } },
      data: { status: "REMOVED", reviewedAt: now, reviewedBy: staff.id },
    }),
    prisma.auditLog.create({ data: { userId: staff.id, action: "community.ban", entityType: "User", entityId: userId, metadata: { reason: cleanReason } } }),
  ]);
  refresh();
}

export async function unbanCommunityUser(userId: string) {
  const staff = await requireModerator();
  await prisma.$transaction([
    prisma.user.update({ where: { id: userId }, data: { isBanned: false, bannedAt: null, bannedReason: null } }),
    prisma.auditLog.create({ data: { userId: staff.id, action: "community.unban", entityType: "User", entityId: userId } }),
  ]);
  refresh();
}
