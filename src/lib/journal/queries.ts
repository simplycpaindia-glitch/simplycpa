import "server-only";
import { formatDistanceToNowStrict } from "date-fns";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma/client";
import { FEED_PAGE_SIZE, JOURNAL_TAGS, POSTS_PER_24H, type JournalTagValue } from "./constants";

export type FeedPost = {
  id: string;
  body: string;
  tag: JournalTagValue;
  status: "PUBLISHED" | "HELD_FOR_REVIEW" | "HIDDEN_BY_REPORTS" | "REMOVED";
  username: string;
  createdAtIso: string;
  createdAgo: string;
  helpfulCount: number;
  studyHours: number | null;
  viewerFoundHelpful: boolean;
  isOwn: boolean;
};

export function parseTag(value: unknown): JournalTagValue | null {
  return typeof value === "string" && (JOURNAL_TAGS as readonly string[]).includes(value) ? (value as JournalTagValue) : null;
}

/**
 * Newest-first feed. Everyone sees published posts; signed-in authors also see their
 * own posts that are waiting for review (marked as such), so nothing silently vanishes.
 */
export async function getFeed(opts: { viewerId?: string | null; tag?: JournalTagValue | null; cursor?: string | null; username?: string | null }) {
  const visibility: Prisma.JournalPostWhereInput = opts.viewerId
    ? { OR: [{ status: "PUBLISHED" }, { userId: opts.viewerId, status: { in: ["HELD_FOR_REVIEW", "HIDDEN_BY_REPORTS"] } }] }
    : { status: "PUBLISHED" };

  const where: Prisma.JournalPostWhereInput = {
    AND: [
      visibility,
      opts.tag ? { tag: opts.tag } : {},
      opts.username ? { user: { username: opts.username } } : {},
      { user: { isBanned: false } },
    ],
  };

  const rows = await prisma.journalPost.findMany({
    where,
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    take: FEED_PAGE_SIZE + 1,
    ...(opts.cursor ? { cursor: { id: opts.cursor }, skip: 1 } : {}),
    select: {
      id: true,
      body: true,
      tag: true,
      status: true,
      createdAt: true,
      studyHours: true,
      userId: true,
      user: { select: { username: true } },
      _count: { select: { reactions: true } },
      reactions: opts.viewerId ? { where: { userId: opts.viewerId }, select: { id: true } } : false,
    },
  });

  const hasMore = rows.length > FEED_PAGE_SIZE;
  const page = rows.slice(0, FEED_PAGE_SIZE);
  const posts: FeedPost[] = page.map((p) => ({
    id: p.id,
    body: p.body,
    tag: p.tag as JournalTagValue,
    status: p.status,
    username: p.user.username ?? "member",
    createdAtIso: p.createdAt.toISOString(),
    createdAgo: formatDistanceToNowStrict(p.createdAt, { addSuffix: true }),
    helpfulCount: p._count.reactions,
    studyHours: p.studyHours,
    viewerFoundHelpful: Array.isArray(p.reactions) && p.reactions.length > 0,
    isOwn: !!opts.viewerId && p.userId === opts.viewerId,
  }));
  return { posts, nextCursor: hasMore ? page[page.length - 1]!.id : null };
}

/** How many posts the user can still make in the current rolling 24 hours. */
export async function postsLeftFor(userId: string) {
  const used = await prisma.journalPost.count({ where: { userId, createdAt: { gte: new Date(Date.now() - 24 * 3_600_000) } } });
  return Math.max(0, POSTS_PER_24H - used);
}

export async function getMemberProfile(username: string) {
  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      createdAt: true,
      isBanned: true,
      _count: { select: { journalPosts: { where: { status: "PUBLISHED" } } } },
    },
  });
  if (!user || user.isBanned) return null;
  const helpfulReceived = await prisma.journalReaction.count({ where: { post: { userId: user.id, status: "PUBLISHED" } } });
  return { id: user.id, username: user.username!, joined: user.createdAt, postCount: user._count.journalPosts, helpfulReceived };
}
