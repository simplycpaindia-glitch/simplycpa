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

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "The rules for SimplyCPA's study wall, what we check automatically, and how moderation works.",
  alternates: { canonical: "/community-guidelines" },
};

export default function CommunityGuidelinesPage() {
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

      <h2>Posts held for a quick review</h2>
      <p>
        Some posts are saved but only shown to their author until a moderator has looked at them: posts that might
        describe real exam questions, posts with words that have both legitimate and inappropriate uses, and posts that
        suggest someone may be struggling. If you&apos;re struggling, please reach out — in India you can call Tele-MANAS,
        the government&apos;s free 24×7 mental health helpline, on <strong>14416</strong> or <strong>1-800-891-4416</strong>.
      </p>

      <h2>Reporting</h2>
      <p>
        Use <strong>Report</strong> on any post that breaks these rules. When {REPORTS_TO_HIDE} different members report a
        post, it&apos;s hidden until a moderator reviews it. Each member can send up to {REPORTS_PER_24H} reports a day.
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
