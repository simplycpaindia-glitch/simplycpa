# Community ("What I Studied This Week") — setup and operations

This covers the one-time setup you need to do yourself, how to deploy safely, and how
moderation works day to day.

## 1. Apply the database migration (before deploying the code)

The migration `prisma/migrations/20261011120000_community_journal` is **additive only**:
new tables (`JournalPost`, `JournalReaction`, `JournalReport`, `BlockedPostAttempt`,
`EmailLoginCode`, `SignInEvent`), three new enums, and new nullable or defaulted columns on
`User`. Nothing existing is changed or dropped, so the currently deployed site keeps
working after it is applied.

```bash
npx prisma migrate deploy
```

Deploy the code only after this succeeds — the new pages query the new tables.

## 2. Google sign-in (free)

1. Go to Google Cloud Console → **APIs & Services** → **OAuth consent screen**. Choose
   *External*, app name "SimplyCPA", support email, and the scopes `email`, `profile`,
   `openid` (no sensitive scopes are needed, so no Google verification review).
2. **Credentials** → **Create credentials** → **OAuth client ID** → *Web application*.
3. Authorised redirect URIs:
   - `https://simplycpa.in/api/auth/callback/google`
   - `http://localhost:3000/api/auth/callback/google` (for local testing)
4. Copy the client ID and secret into Vercel environment variables:
   `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`.

The "Continue with Google" button only appears when both are set. Likewise, the email-code
form only appears in production once Resend is configured, so the site can be deployed
before any of these keys exist (it falls back to password login).

Google-verified addresses are linked to an existing account with the same email (for
example, someone who first signed in with an email code). That is safe because Google
only issues verified addresses.

## 3. Email sign-in codes (Resend — free tier)

1. Create an account at resend.com and **add the domain** `mail.simplycpa.in` (a subdomain
   keeps sign-in email reputation separate). Add the DNS records Resend shows (MX, SPF and
   DKIM) at Hostinger, which hosts the domain's DNS, and wait for verification.
2. Create an API key with "Sending access".
3. Vercel environment variables:
   - `RESEND_API_KEY` = the key
   - `EMAIL_FROM` = `SimplyCPA <signin@mail.simplycpa.in>`

Resend's free plan allows 100 emails a day and 3,000 a month (the daily count resets at
00:00 UTC = 5:30 am IST). Each code is one email. If the quota is hit, the sign-in form
tells people to use Google instead. Upgrade to Pro ($20/month) if that happens regularly.

Step-by-step instructions with exact values are in `docs/SATURDAY-CHECKLIST.md`, and
`npm run check:community` verifies the configuration once keys are in `.env`.

Without these, codes are printed to the server log in development, and in production the
form says email sign-in is unavailable (it never pretends an email was sent).

## 4. Bot check (optional, recommended — Cloudflare Turnstile, free)

1. Cloudflare dashboard → **Turnstile** → **Add site** → domain `simplycpa.in`, widget mode
   *Managed*.
2. Vercel environment variables: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`.

When both are set, the email-code form requires the check. When they're not, it's skipped.

## 5. Making someone a moderator

Moderators (and admins/editors) see **Admin → Study wall**. To make a member a moderator,
set their `role` to `MODERATOR` (e.g. with `npx prisma studio`).

## What is enforced, and where

| Rule | Where it's enforced |
| --- | --- |
| Text only | There is no upload path at all; posts are stored as plain text and rendered escaped (never as HTML) |
| 20–2,000 characters, ≤ 60 lines | `src/lib/journal/moderation.ts` (browser and server) |
| No links / emails / phone numbers (incl. disguised) | `moderation.ts` |
| No sexual, abusive or hateful words (English + Hinglish, l33t, spaced letters, look-alike and invisible characters) | `moderation.ts` + `wordlists.ts` |
| No off-site solicitation, advertising, exam-dump trading | `moderation.ts` |
| Spam shapes: repeated characters/words, all caps, mostly symbols, emoji floods | `moderation.ts` |
| No duplicates (own post within 30 days; anyone's within 24 hours) | `src/lib/actions/journal.ts` |
| 3 posts per rolling 24 hours (race-safe, per-user DB lock) | `journal.ts` |
| 10 rejected attempts in 24 h → posting paused 24 h | `journal.ts` |
| Possible exam-question disclosure / borderline words / self-harm → held for review | `moderation.ts` → admin queue |
| 3 reports from different members → hidden pending review | `journal.ts` |
| 18+ confirmation and guidelines acceptance before posting | `src/lib/actions/profile.ts` |
| Sign-in codes: 6 digits, HMAC-stored, 10-minute expiry, 5 attempts, 3 per 15 min / 10 per day per email, 10 per hour per IP, disposable inboxes refused | `src/lib/actions/email-code.ts`, `src/lib/auth.ts` |
| Every sign-in recorded (method, time, hashed IP, browser) | `src/lib/auth.ts` (`events.signIn`) |

Run the filter regression tests with `npm run test:moderation`. Add a case whenever a real
post is wrongly blocked or wrongly allowed.

## Known limitations (be aware)

- **Word lists can't understand context.** They catch the obvious and disguised cases;
  subtle harassment, sarcasm or off-topic posts rely on reports and moderators. An AI
  classifier is a natural Phase 2 addition (it has a small per-post cost).
- **Hinglish coverage is a starting list.** Add words to `wordlists.ts` as you see them.
- **IP-based limits** use the platform's forwarding headers (set by Vercel). On another
  host, make sure `x-forwarded-for` can't be spoofed by clients.
- **Age is self-declared**, which is the standard approach for this kind of community.
