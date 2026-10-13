import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  BLOCKED_ATTEMPTS_BEFORE_COOLDOWN,
  GUIDELINES_VERSION,
  POST_MAX_CHARS,
  POST_MIN_CHARS,
  POSTS_PER_24H,
  REPORTS_PER_24H,
  REPORTS_TO_HIDE,
} from "@/lib/journal/constants";
import { isAiModerationEnabled } from "@/lib/journal/ai-moderation";
import { TRUST } from "@/lib/journal/trust";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "The rules for SimplyCPA's study wall, what we check automatically, and how moderation works.",
  alternates: { canonical: "/community-guidelines" },
};

export default function CommunityGuidelinesPage() {
  const aiEnabled = isAiModerationEnabled();
  return (
    <Container className="max-w-2xl py-16 prose-cpa">
      <h1 className="font-display text-3xl font-medium mb-2">Community Guidelines</h1>
      <p className="text-sm text-ink-400">Version {GUIDELINES_VERSION}. These apply to &ldquo;What I Studied This Week&rdquo; and other community areas.</p>

      <h2>What the study wall is for</h2>
      <p>
        A place for CPA candidates to share what they studied, what clicked, what didn&apos;t, and — after an exam —
        what they&apos;d tell the next candidate. Be specific, be honest, and be kind.
      </p>

      <h2>The rules</h2>
      <ol>
        <li><strong>You must be 18 or older</strong> to post.</li>
        <li><strong>Text only.</strong> No photos, videos or files can be posted.</li>
        <li><strong>No links</strong> of any kind, including disguised ones (&ldquo;example dot com&rdquo;).</li>
        <li><strong>No contact details</strong> — no email addresses, phone numbers or requests to message you on WhatsApp, Telegram, Instagram or elsewhere. This protects you from scams.</li>
        <li><strong>Never share real exam questions.</strong> Every candidate agrees to keep CPA Exam content confidential. You can talk about topics you found hard and how you prepared, but not the questions or simulations you saw. Selling or trading exam content (&ldquo;dumps&rdquo;) is banned outright.</li>
        <li><strong>Nothing sexual or explicit</strong>, and no abusive language, slurs or harassment — in any language.</li>
        <li><strong>No advertising</strong>, promotions, referral codes or paid services.</li>
        <li><strong>Write in your own words.</strong> Copy-pasted text and repeated posts are rejected.</li>
        <li><strong>Up to {POSTS_PER_24H} posts in any 24 hours</strong>, each between {POST_MIN_CHARS} and {POST_MAX_CHARS.toLocaleString("en-IN")} characters.</li>
      </ol>

      <h2>What we check automatically</h2>
      <p>Every post is checked the moment you submit it, and the same checks run as you type so you can fix problems first:</p>
      <ul>
        <li>Links, web addresses, email addresses and phone numbers.</li>
        <li>Sexual, explicit and abusive words in English and Hindi/Hinglish — including disguised spellings such as numbers for letters, spaced-out letters, look-alike characters and hidden invisible characters.</li>
        <li>Requests to contact someone off-site, advertising and exam-content trading.</li>
        <li>Spam patterns: long runs of the same character, mostly capital letters, mostly symbols, too many emoji, repeated words, and posts identical to one you or someone else made recently.</li>
      </ul>
      <p>
        If a check fails, the post isn&apos;t published and you&apos;re told why. If {BLOCKED_ATTEMPTS_BEFORE_COOLDOWN} posts
        are rejected within 24 hours, posting is paused for 24 hours.
      </p>

      <h2>AI review</h2>
      <p>
        {aiEnabled
          ? "After those checks, each post is also reviewed by an AI model (Anthropic's Claude) for things word lists can't judge: harassment, off-topic or promotional posts, and descriptions of real exam questions."
          : "We may also use an AI model (Anthropic's Claude) to review posts for things word lists can't judge: harassment, off-topic or promotional posts, and descriptions of real exam questions."}{" "}
        The AI never removes a post or rejects it outright. If it thinks a post breaks the rules, the post is held for a
        person to review. If it is unsure, posts from new members are held and posts from established members are
        published. If the AI is unavailable, posts are handled by the automatic checks above.
      </p>

      <h2>Trust levels</h2>
      <p>Trust is earned automatically from how you take part:</p>
      <ul>
        <li><strong>New member</strong> — everyone starts here.</li>
        <li>
          <strong>Member</strong> — your account is at least {TRUST.MEMBER.minAgeDays} days old, you have at least{" "}
          {TRUST.MEMBER.minPublished} published posts, and none of your posts were removed in the last {TRUST.MEMBER.cleanDays} days.
        </li>
        <li>
          <strong>Trusted member</strong> — at least {TRUST.TRUSTED.minAgeDays} days old, {TRUST.TRUSTED.minPublished}+ published
          posts, {TRUST.TRUSTED.minHelpful}+ &ldquo;helpful&rdquo; reactions received, and no posts removed in the last{" "}
          {TRUST.TRUSTED.cleanDays} days. Shown as a badge on your profile.
        </li>
      </ul>
      <p>
        Only reports from Members and Trusted members count towards hiding a post automatically, so a group of brand-new
        accounts can&apos;t take someone&apos;s post down. Every report still reaches the moderators. The posting limit is
        the same for everyone.
      </p>

      <h2>Streaks and study hours</h2>
      <p>
        You can add the hours an update covers to any post. They&apos;re added up on your profile. Your streak is the number of
        weeks in a row (Monday–Sunday, India time) with at least one published post; it stays alive until the current week
        ends.
      </p>

      <h2>Posts held for a quick review</h2>
      <p>
        Some posts are saved but only shown to their author until a moderator has looked at them: posts that might
        describe real exam questions, posts with words that have both legitimate and inappropriate uses, and posts that
        suggest someone may be struggling. If you&apos;re struggling, please reach out — in India you can call Tele-MANAS,
        the government&apos;s free 24×7 mental health helpline, on <strong>14416</strong> or <strong>1-800-891-4416</strong>.
      </p>

      <h2>Reporting</h2>
      <p>
        Use <strong>Report</strong> on any post that breaks these rules. When {REPORTS_TO_HIDE} different established
        members (see trust levels) report a post, it&apos;s hidden until a moderator reviews it. Each member can send up to {REPORTS_PER_24H} reports a day.
        Reports are private; the author isn&apos;t told who reported them.
      </p>

      <h2>Enforcement</h2>
      <ul>
        <li>Moderators can remove posts that break these guidelines.</li>
        <li>Serious or repeated breaches lead to suspension from posting and reacting, and the member&apos;s posts are removed.</li>
        <li>Moderation decisions are logged.</li>
      </ul>

      <h2>Your content and your account</h2>
      <ul>
        <li>Your username is public; your email address is never shown to other members.</li>
        <li>You can delete any of your posts at any time, and delete your whole account from <Link href="/account">your account page</Link>.</li>
        <li>Posts are your own views, not verified advice. Always check rules and figures against official sources.</li>
      </ul>
      <p>See our <Link href="/privacy">privacy policy</Link> for what we store and why.</p>
    </Container>
  );
}
