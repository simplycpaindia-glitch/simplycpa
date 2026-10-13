import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { Avatar } from "@/components/journal/Avatar";
import { PostCard } from "@/components/journal/PostCard";
import { formatDate } from "@/lib/utils";
import { getCommunityUser } from "@/lib/journal/profile";
import { getFeed, getMemberProfile } from "@/lib/journal/queries";
import { normaliseUsername } from "@/lib/journal/moderation";
import { getStudyStats } from "@/lib/journal/stats";
import { getTrustLevel, TRUST_LABEL } from "@/lib/journal/trust";
import { Badge } from "@/components/ui/Badge";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-3">
      <dt className="text-xs text-ink-400">{label}</dt>
      <dd className="mt-1 font-display text-xl font-medium text-ink-950">{value}</dd>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps<"/what-i-studied/u/[username]">): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `@${normaliseUsername(decodeURIComponent(username))} — What I Studied This Week`,
    // Member pages are not indexed: members' study logs shouldn't surface in search by name.
    robots: { index: false, follow: true },
  };
}

export default async function MemberPage({ params, searchParams }: PageProps<"/what-i-studied/u/[username]">) {
  const { username: raw } = await params;
  const { cursor } = await searchParams;
  const username = normaliseUsername(decodeURIComponent(raw));
  const profile = await getMemberProfile(username);
  if (!profile) notFound();

  const session = await auth();
  const viewer = session?.user ? await getCommunityUser(session.user.id) : null;
  const [{ posts, nextCursor }, stats, trust] = await Promise.all([
    getFeed({ viewerId: viewer?.id, username, cursor: typeof cursor === "string" ? cursor : null }),
    getStudyStats(profile.id),
    getTrustLevel(profile.id),
  ]);

  return (
    <div className="bg-paper-100/50">
      <Container className="max-w-3xl py-10 sm:py-14">
        <Link href="/what-i-studied" className="text-sm text-ink-400 hover:text-ink-950">
          ← What I Studied This Week
        </Link>
        <div className="mt-6 flex items-center gap-4 rounded-xl border border-ink-950/10 bg-paper-50 p-5">
          <Avatar username={profile.username} size="lg" />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-display text-2xl font-medium text-ink-950">@{profile.username}</h1>
              {trust === "TRUSTED" && <Badge tone="green">{TRUST_LABEL.TRUSTED}</Badge>}
            </div>
            <p className="mt-1 text-sm text-ink-400">
              Joined {formatDate(profile.joined)} · {profile.postCount} post{profile.postCount === 1 ? "" : "s"} ·{" "}
              {profile.helpfulReceived} found helpful
            </p>
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Current streak" value={`${stats.currentStreak} week${stats.currentStreak === 1 ? "" : "s"}`} />
          <Stat label="Longest streak" value={`${stats.longestStreak} week${stats.longestStreak === 1 ? "" : "s"}`} />
          <Stat label="Weeks active" value={String(stats.weeksActive)} />
          <Stat label="Hours logged" value={`${stats.totalHours} h`} />
        </dl>

        <div className="mt-6 flex flex-col gap-4">
          {posts.length === 0 ? (
            <p className="rounded-xl border border-dashed border-ink-950/15 p-8 text-center text-sm text-ink-400">No posts yet.</p>
          ) : (
            posts.map((p) => (
              <PostCard key={p.id} post={p} viewer={{ signedIn: !!viewer, canInteract: !!viewer?.isProfileComplete && !viewer.isBanned }} />
            ))
          )}
          {nextCursor && (
            <Link href={`/what-i-studied/u/${profile.username}?cursor=${nextCursor}`} className="self-end text-sm font-medium text-ink-800 hover:underline">
              Older posts →
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
