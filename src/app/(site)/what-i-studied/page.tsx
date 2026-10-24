import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Composer } from "@/components/journal/Composer";
import { PostCard } from "@/components/journal/PostCard";
import { cn } from "@/lib/utils";
import { getCommunityUser } from "@/lib/journal/profile";
import { getSignInMethods } from "@/lib/sign-in-methods";
import { getStudyStats } from "@/lib/journal/stats";
import { isAiModerationEnabled } from "@/lib/journal/ai-moderation";
import { getFeed, parseTag, postsLeftFor } from "@/lib/journal/queries";
import { JOURNAL_TAGS, POST_MAX_CHARS, POSTS_PER_24H, REPORTS_TO_HIDE, TAG_LABEL } from "@/lib/journal/constants";

export async function generateMetadata({ searchParams }: PageProps<"/what-i-studied">): Promise<Metadata> {
  const { cursor } = await searchParams;
  return {
    title: "What I Studied This Week — CPA Study Wall",
    description:
      "A text-only wall where CPA candidates share what they studied this week, what clicked, what didn't, and lessons from their exams.",
    alternates: { canonical: "/what-i-studied" },
    // Paginated pages are for readers, not search results.
    robots: cursor ? { index: false, follow: true } : undefined,
  };
}

export default async function WhatIStudiedPage({ searchParams }: PageProps<"/what-i-studied">) {
  const params = await searchParams;
  const tag = parseTag(params.tag);
  const cursor = typeof params.cursor === "string" ? params.cursor : null;

  const methods = getSignInMethods();
  const aiEnabled = isAiModerationEnabled();
  const session = await auth();
  const viewer = session?.user ? await getCommunityUser(session.user.id) : null;
  const [{ posts, nextCursor }, postsLeft, myStats] = await Promise.all([
    getFeed({ viewerId: viewer?.id, tag, cursor }),
    viewer?.isProfileComplete ? postsLeftFor(viewer.id) : Promise.resolve(0),
    viewer?.isProfileComplete ? getStudyStats(viewer.id) : Promise.resolve(null),
  ]);

  const qs = (next: Record<string, string | null>) => {
    const p = new URLSearchParams();
    const merged = { tag, ...next };
    for (const [k, v] of Object.entries(merged)) if (v) p.set(k, v);
    const s = p.toString();
    return s ? `/what-i-studied?${s}` : "/what-i-studied";
  };

  return (
    <div className="bg-paper-100/50">
      <Container className="py-10 sm:py-14">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-700">Study wall</p>
          <h1 className="mt-2 font-display text-3xl font-medium text-ink-950 sm:text-4xl">What I Studied This Week</h1>
          <p className="mt-3 leading-relaxed text-ink-400">
            Share what you covered, what finally clicked, what tripped you up — and, after your exam, what you&apos;d tell
            the next candidate. Text only, kind words, no exam questions.
          </p>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="flex min-w-0 flex-col gap-4">
            {/* Composer, or what the viewer needs to do before posting */}
            {!viewer ? (
              <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-5">
                <p className="font-medium text-ink-950">Share your week with other CPA candidates</p>
                <p className="mt-1 text-sm text-ink-400">
                  Reading is open to everyone. To post, sign in or create a free account
                  {methods.google || methods.emailCode ? " — no password needed" : ""}.
                </p>
                <Button href="/login?callbackUrl=/what-i-studied" size="sm" className="mt-4">
                  Sign in to post
                </Button>
              </div>
            ) : viewer.isBanned ? (
              <div className="rounded-xl border border-signal-red/20 bg-signal-red/5 p-5 text-sm text-ink-800">
                Your account can no longer post or react because it was suspended for breaking the{" "}
                <Link href="/community-guidelines" className="underline">community guidelines</Link>. You can still read the wall.
              </div>
            ) : !viewer.isProfileComplete ? (
              <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-5">
                <p className="font-medium text-ink-950">
                  {viewer.needsGuidelinesReaccept ? "Our community guidelines have been updated" : "One quick step before you post"}
                </p>
                <p className="mt-1 text-sm text-ink-400">
                  {viewer.needsGuidelinesReaccept
                    ? "Please review and accept them to keep posting."
                    : "Pick a public username and confirm you're 18 or older. Your email stays private."}
                </p>
                <Button href="/welcome?callbackUrl=/what-i-studied" size="sm" className="mt-4">
                  {viewer.needsGuidelinesReaccept ? "Review guidelines" : "Choose a username"}
                </Button>
              </div>
            ) : (
              <Composer username={viewer.username!} postsLeft={postsLeft} />
            )}

            {/* Topic filter */}
            <nav aria-label="Filter by topic" className="flex flex-wrap gap-1.5">
              <FilterChip href={qs({ tag: null, cursor: null })} active={!tag} label="All" />
              {JOURNAL_TAGS.map((t) => (
                <FilterChip key={t} href={qs({ tag: t, cursor: null })} active={tag === t} label={TAG_LABEL[t]} />
              ))}
            </nav>

            {posts.length === 0 ? (
              <div className="rounded-xl border border-dashed border-ink-950/15 p-10 text-center text-sm text-ink-400">
                {tag ? `No ${TAG_LABEL[tag]} posts yet.` : "No posts yet."} Be the first to share what you studied this week.
              </div>
            ) : (
              posts.map((p) => (
                <PostCard
                  key={p.id}
                  post={p}
                  viewer={{ signedIn: !!viewer, canInteract: !!viewer?.isProfileComplete && !viewer.isBanned }}
                />
              ))
            )}

            <div className="flex justify-between">
              {cursor ? (
                <Link href={qs({ cursor: null })} className="text-sm font-medium text-ink-800 hover:underline">
                  ← Newest posts
                </Link>
              ) : (
                <span />
              )}
              {nextCursor && (
                <Link href={qs({ cursor: nextCursor })} className="text-sm font-medium text-ink-800 hover:underline">
                  Older posts →
                </Link>
              )}
            </div>
          </div>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
            {myStats && viewer?.username && (
              <div className="rounded-xl border border-gold-400/50 bg-gold-500/5 p-5 text-sm">
                <p className="font-semibold text-ink-950">Your study streak</p>
                <p className="mt-2 font-display text-3xl font-medium text-ink-950">
                  {myStats.currentStreak} week{myStats.currentStreak === 1 ? "" : "s"}
                </p>
                <p className="mt-1 text-ink-400">
                  {myStats.hoursThisWeek > 0 ? `${myStats.hoursThisWeek} h logged this week · ` : ""}
                  {myStats.totalHours} h in total
                </p>
                <p className="mt-2 text-xs text-ink-400">Post at least once each week (Monday–Sunday, India time) to keep your streak going.</p>
                <Link href={`/what-i-studied/u/${viewer.username}`} className="mt-3 inline-block text-sm font-medium text-gold-700 hover:underline">
                  Your profile →
                </Link>
              </div>
            )}
            <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-5 text-sm">
              <p className="font-semibold text-ink-950">How this wall works</p>
              <ul className="mt-3 space-y-2 text-ink-800">
                <li><strong>Text only</strong> — no photos, videos or files.</li>
                <li><strong>Up to {POSTS_PER_24H} posts</strong> in any 24 hours, up to {POST_MAX_CHARS.toLocaleString("en-IN")} characters each.</li>
                <li><strong>No links</strong>, email addresses or phone numbers.</li>
                <li><strong>Never share real exam questions</strong> — every candidate agrees to keep them confidential.</li>
                <li>Every post is <strong>checked automatically</strong>{aiEnabled ? " (including an AI review)" : ""} for explicit, abusive and spam content. A few are held for a quick human review.</li>
                <li>Posts reported by {REPORTS_TO_HIDE} established members are hidden until a moderator reviews them.</li>
              </ul>
              <Link href="/community-guidelines" className="mt-4 inline-block font-medium text-gold-700 hover:underline">
                Read the full guidelines →
              </Link>
            </div>
            <div className="rounded-xl border border-ink-950/10 bg-paper-50 p-5 text-sm text-ink-800">
              <p className="font-semibold text-ink-950">Ideas for your post</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4">
                <li>The topic that finally clicked, and why</li>
                <li>How many hours you managed, and how</li>
                <li>A mistake you&apos;ll avoid next time</li>
                <li>After your exam: what you&apos;d tell your past self</li>
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}

function FilterChip({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium transition-colors",
        active ? "bg-ink-950 text-paper-50" : "bg-paper-50 text-ink-800 ring-1 ring-ink-950/10 hover:bg-paper-200",
      )}
    >
      {label}
    </Link>
  );
}
