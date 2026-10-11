"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import {
  BLOCKED_ATTEMPTS_BEFORE_COOLDOWN,
  HELPLINE_TEXT,
  JOURNAL_TAGS,
  POSTS_PER_24H,
  REPORT_REASONS,
  REPORTS_PER_24H,
  REPORTS_TO_HIDE,
  type JournalTagValue,
  type ReportReasonValue,
} from "@/lib/journal/constants";
import { checkPost, cleanPostText, type Issue } from "@/lib/journal/moderation";
import { getCommunityUser, type CommunityUser } from "@/lib/journal/profile";
import { contentHash } from "@/lib/journal/security";

const FEED_PATH = "/what-i-studied";
const DAY_MS = 24 * 3_600_000;

type Gate = { ok: true; user: CommunityUser } | { ok: false; error: string; needsProfile?: boolean; requiresAuth?: boolean };

/** Every community write goes through this: signed in, profile complete, not banned. */
async function gate(): Promise<Gate> {
  const session = await auth();
  if (!session?.user) return { ok: false, requiresAuth: true, error: "Please sign in first." };
  const user = await getCommunityUser(session.user.id);
  if (!user) return { ok: false, requiresAuth: true, error: "Please sign in again." };
  if (!user.isProfileComplete) return { ok: false, needsProfile: true, error: "Please finish setting up your profile first." };
  if (user.isBanned) return { ok: false, error: "Your account can't post or react because it was suspended for breaking the community guidelines." };
  return { ok: true, user };
}

export type CreatePostResult =
  | { ok: true; status: "PUBLISHED" | "HELD_FOR_REVIEW"; heldReasons: string[]; helpline?: string; postsLeft: number }
  | { ok: false; error: string; issues?: Issue[]; helpline?: string; needsProfile?: boolean; requiresAuth?: boolean };

export async function createJournalPost(input: { body: string; tag: string }): Promise<CreatePostResult> {
  const g = await gate();
  if (!g.ok) return g;
  const user = g.user;

  const tag: JournalTagValue = (JOURNAL_TAGS as readonly string[]).includes(input.tag) ? (input.tag as JournalTagValue) : "GENERAL";
  if (typeof input.body !== "string" || input.body.length > 20_000) {
    return { ok: false, error: "That post is too long." };
  }

  const now = Date.now();
  const since24h = new Date(now - DAY_MS);

  // Repeated rejected attempts pause posting for a day (stops people probing the filters).
  const blockedRecently = await prisma.blockedPostAttempt.count({ where: { userId: user.id, createdAt: { gte: since24h } } });
  if (blockedRecently >= BLOCKED_ATTEMPTS_BEFORE_COOLDOWN) {
    return { ok: false, error: "Posting is paused for 24 hours because several posts were rejected by our checks. Please read the community guidelines." };
  }

  const result = checkPost(input.body);
  const helpline = result.showHelpline ? HELPLINE_TEXT : undefined;
  const hash = contentHash(result.text);

  const blocked: Issue[] = [...result.blocked];
  if (!blocked.length) {
    const [ownDuplicate, crossDuplicate] = await Promise.all([
      prisma.journalPost.findFirst({ where: { userId: user.id, contentHash: hash, createdAt: { gte: new Date(now - 30 * DAY_MS) } }, select: { id: true } }),
      prisma.journalPost.findFirst({ where: { contentHash: hash, userId: { not: user.id }, createdAt: { gte: since24h } }, select: { id: true } }),
    ]);
    if (ownDuplicate) blocked.push({ code: "DUPLICATE", message: "You've already posted this. Share something new from your week." });
    else if (crossDuplicate) blocked.push({ code: "COPIED", message: "This text has already been posted by someone else. Please write in your own words." });
  }

  if (blocked.length) {
    await prisma.blockedPostAttempt.create({
      data: { userId: user.id, reasons: blocked.map((b) => b.code), excerpt: result.text.slice(0, 200) },
    });
    return { ok: false, error: "Your post wasn't published.", issues: blocked, helpline };
  }

  const status = result.held.length ? "HELD_FOR_REVIEW" : "PUBLISHED";

  // Rate limit and insert under a per-user lock, so parallel requests can't exceed it.
  const outcome = await prisma.$transaction(async (tx) => {
    await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${`journal-post:${user.id}`}))`;
    const recent = await tx.journalPost.findMany({
      where: { userId: user.id, createdAt: { gte: since24h } },
      orderBy: { createdAt: "asc" },
      select: { createdAt: true },
    });
    if (recent.length >= POSTS_PER_24H) {
      return { limited: true as const, nextAt: new Date(recent[0]!.createdAt.getTime() + DAY_MS) };
    }
    await tx.journalPost.create({
      data: { userId: user.id, body: result.text, tag, status, flagReasons: result.held.map((h) => h.code), contentHash: hash },
    });
    return { limited: false as const, postsLeft: POSTS_PER_24H - recent.length - 1 };
  });

  if (outcome.limited) {
    const mins = Math.max(1, Math.ceil((outcome.nextAt.getTime() - now) / 60_000));
    const wait = mins >= 60 ? `${Math.ceil(mins / 60)} hour${Math.ceil(mins / 60) === 1 ? "" : "s"}` : `${mins} minute${mins === 1 ? "" : "s"}`;
    return { ok: false, error: `You've reached the limit of ${POSTS_PER_24H} posts in 24 hours. You can post again in about ${wait}.` };
  }

  revalidatePath(FEED_PATH);
  if (user.username) revalidatePath(`${FEED_PATH}/u/${user.username}`);
  return { ok: true, status, heldReasons: result.held.map((h) => h.message), helpline, postsLeft: outcome.postsLeft };
}

/** Authors can permanently delete their own posts; staff remove posts via the moderation queue. */
export async function deleteOwnJournalPost(postId: string) {
  const session = await auth();
  if (!session?.user) return { ok: false as const, error: "Please sign in." };
  const deleted = await prisma.journalPost.deleteMany({ where: { id: String(postId), userId: session.user.id } });
  if (deleted.count !== 1) return { ok: false as const, error: "Post not found." };
  revalidatePath(FEED_PATH, "layout");
  return { ok: true as const };
}

export async function toggleHelpful(postId: string) {
  const g = await gate();
  if (!g.ok) return { ok: false as const, error: g.error, requiresAuth: g.requiresAuth, needsProfile: g.needsProfile };

  const post = await prisma.journalPost.findUnique({ where: { id: String(postId) }, select: { id: true, userId: true, status: true } });
  if (!post || post.status !== "PUBLISHED") return { ok: false as const, error: "Post not found." };
  if (post.userId === g.user.id) return { ok: false as const, error: "You can't mark your own post as helpful." };

  const existing = await prisma.journalReaction.findUnique({ where: { postId_userId: { postId: post.id, userId: g.user.id } } });
  if (existing) await prisma.journalReaction.delete({ where: { id: existing.id } });
  else await prisma.journalReaction.create({ data: { postId: post.id, userId: g.user.id } }).catch(() => null);

  revalidatePath(FEED_PATH, "layout");
  return { ok: true as const, helpful: !existing };
}

export async function reportJournalPost(input: { postId: string; reason: string; details?: string }) {
  const g = await gate();
  if (!g.ok) return { ok: false as const, error: g.error, requiresAuth: g.requiresAuth, needsProfile: g.needsProfile };

  if (!(REPORT_REASONS as readonly string[]).includes(input.reason)) return { ok: false as const, error: "Choose a reason." };
  const reason = input.reason as ReportReasonValue;
  const details = input.details ? cleanPostText(input.details).slice(0, 500) : null;

  const post = await prisma.journalPost.findUnique({ where: { id: String(input.postId) }, select: { id: true, userId: true, status: true } });
  if (!post || post.status === "REMOVED") return { ok: false as const, error: "Post not found." };
  if (post.userId === g.user.id) return { ok: false as const, error: "You can't report your own post — delete it instead." };

  const reportsToday = await prisma.journalReport.count({ where: { reporterId: g.user.id, createdAt: { gte: new Date(Date.now() - DAY_MS) } } });
  if (reportsToday >= REPORTS_PER_24H) return { ok: false as const, error: "You've sent a lot of reports today. Thank you — our moderators will catch up." };

  try {
    await prisma.journalReport.create({ data: { postId: post.id, reporterId: g.user.id, reason, details } });
  } catch {
    return { ok: true as const, alreadyReported: true }; // unique (postId, reporterId)
  }

  const openReports = await prisma.journalReport.count({ where: { postId: post.id, resolvedAt: null } });
  if (openReports >= REPORTS_TO_HIDE && post.status === "PUBLISHED") {
    await prisma.journalPost.update({ where: { id: post.id }, data: { status: "HIDDEN_BY_REPORTS" } });
  }
  revalidatePath(FEED_PATH, "layout");
  return { ok: true as const, alreadyReported: false };
}
