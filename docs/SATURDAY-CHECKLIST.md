# Saturday checklist — tasks only you can do

Everything else is done and tested. These steps need your own accounts, so they can't
be done for you. Total time: about 60–90 minutes, mostly waiting for DNS.

Do them in this order. Tick each box as you go.

---

## ✓ 0. Deploy what's already built — done

Deployed on 13 October 2026. The study wall is live with password login until the keys
below are added.

---

## ☐ 1. Google sign-in (15 min) — console.cloud.google.com

1. Sign in with the Google account that should own SimplyCPA's login (ideally
   SimplyCPA.India@gmail.com rather than a personal account).
2. Top bar → project picker → **New project** → name `SimplyCPA` → Create → select it.
3. Left menu → **APIs & Services** → **OAuth consent screen** (may be called
   "Google Auth Platform" → **Branding**):
   - App name: `SimplyCPA`
   - User support email: your SimplyCPA email
   - Audience / user type: **External**
   - Developer contact email: your SimplyCPA email
   - Don't upload a logo (a logo triggers Google's brand review; you can add it later).
   - Scopes: leave the defaults (`email`, `profile`, `openid`). Don't add others.
4. **Audience** (or "Publishing status") → **Publish app** → confirm. Until it's
   published, only listed test users can sign in.
5. **Credentials** (or "Clients") → **Create credentials** → **OAuth client ID**:
   - Application type: **Web application**
   - Name: `SimplyCPA web`
   - Authorised JavaScript origins: `https://www.simplycpa.in` and `https://simplycpa.in`
   - Authorised redirect URIs — add **all three** (the live site is served at **www**;
     `simplycpa.in` redirects to it):
     - `https://www.simplycpa.in/api/auth/callback/google`
     - `https://simplycpa.in/api/auth/callback/google`
     - `http://localhost:3000/api/auth/callback/google`
6. Copy the **Client ID** (ends in `.apps.googleusercontent.com`) and **Client secret**
   (starts with `GOCSPX-`). Keep them private.

---

## ☐ 2. Email codes — Resend (10 min + DNS wait) — resend.com

1. Sign up at resend.com with your SimplyCPA email.
2. **Domains** → **Add domain** → enter `mail.simplycpa.in`, region closest to you.
   (Using a subdomain keeps sign-in email reputation separate from anything else you
   send from `simplycpa.in`.)
3. Resend shows 3–4 DNS records (an MX record and TXT records for SPF and DKIM; DMARC is
   optional). Keep this page open for step 3.
4. **API Keys** → **Create API key** → name `simplycpa-production`, permission
   **Sending access**, domain `mail.simplycpa.in` → copy the key (starts with `re_`).
   It's shown only once.

**Free plan limits:** 100 emails a day and 3,000 a month (the daily count resets at
5:30 am IST). Each sign-in code is one email. If that becomes too tight, the Pro plan is
$20/month. Google sign-in has no such limit, and the site tells people to use Google if
the daily email limit is reached.

---

## ☐ 3. DNS records at Hostinger (10 min + up to a few hours to verify)

Your domain's DNS is hosted at Hostinger (nameservers `*.dns-parking.com`).

1. hpanel.hostinger.com → **Domains** → `simplycpa.in` → **DNS / Nameservers** →
   **DNS records**.
2. For each record Resend showed you, click **Add record** and copy the **Type**,
   **Name** and **Value** exactly. Hostinger adds `.simplycpa.in` to the name
   automatically, so if Resend says `send.mail.simplycpa.in`, enter `send.mail`.
   For the MX record, use the priority Resend shows (usually 10).
3. **Don't change or delete** any existing records — they keep the website and any
   existing email working.
4. Back in Resend → your domain → **Verify DNS records**. It can take from a few minutes
   to a few hours. Wait until every record shows **Verified**.

---

## ☐ 4. (Recommended, 5 min) Bot check — Cloudflare Turnstile (free)

1. dash.cloudflare.com → sign up (no need to move your domain to Cloudflare).
2. **Turnstile** → **Add widget** → name `SimplyCPA sign-in` → hostname `simplycpa.in`
   (also add `localhost` if you want it locally) → mode **Managed** → Create.
3. Copy the **Site key** and the **Secret key**.

---

## ☐ 5. Add the keys to Vercel (5 min) — vercel.com

Project `simplycpa` → **Settings** → **Environment Variables**. Add each one for the
**Production** environment (and Preview if you use preview deployments):

| Name | Value |
| --- | --- |
| `AUTH_GOOGLE_ID` | Google Client ID from step 1 |
| `AUTH_GOOGLE_SECRET` | Google Client secret from step 1 |
| `RESEND_API_KEY` | Resend key from step 2 (`re_…`) |
| `EMAIL_FROM` | `SimplyCPA <signin@mail.simplycpa.in>` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile site key (step 4, optional) |
| `TURNSTILE_SECRET_KEY` | Turnstile secret key (step 4, optional) |

**Also change `NEXT_PUBLIC_SITE_URL` to `https://www.simplycpa.in`** in Production (it is
currently `https://simplycpa.in`). The live site is served at `www`, and `simplycpa.in`
redirects there, so today every canonical link and sitemap URL points at an address that
redirects — Google treats that as a weaker signal. (Alternative: in Vercel → Settings →
Domains, make `simplycpa.in` the primary domain instead, and leave the variable as is.
Either works; just make the two match.)

Then **Deployments** → latest deployment → **⋯** → **Redeploy** (new variables only
take effect after a redeploy).

---

## ☐ 6. Let Claude check everything (2 min of your time)

So Claude can verify the keys without you pasting secrets into chat, put the same
values into the local `.env` file in the project folder (it's git-ignored, so it never
gets committed):

```
AUTH_GOOGLE_ID="…"
AUTH_GOOGLE_SECRET="…"
RESEND_API_KEY="re_…"
EMAIL_FROM="SimplyCPA <signin@mail.simplycpa.in>"
NEXT_PUBLIC_TURNSTILE_SITE_KEY="…"
TURNSTILE_SECRET_KEY="…"
```

Then tell Claude "check the community config". It runs `npm run check:community`, which
confirms the Resend key, that `mail.simplycpa.in` is verified, the Turnstile secret
and the Google ID format, and can send one test email to an address you choose. It then
tests Google and email-code sign-in end to end locally.

If you'd rather not put keys on this computer, run the check yourself:

```bash
npm run check:community -- --send-test your-email@example.com
```

---

## ☐ 7. One live test on simplycpa.in (5 min)

1. Open https://www.simplycpa.in/what-i-studied in a private/incognito window.
2. **Sign in to post** → **Continue with Google** → choose a username → post a short
   test entry → delete it.
3. Sign out → **Email me a sign-in code** with a different email → enter the code.
4. Check **Admin → Study wall** shows both sign-ins.

---

## ☐ 8. Google Search Console (5 min) — search.google.com/search-console

Do this **after** fixing `NEXT_PUBLIC_SITE_URL` in step 5, so the sitemap lists the
`www` addresses. Property `simplycpa.in` → **Sitemaps** → submit
`https://www.simplycpa.in/sitemap.xml`.
This picks up the 92 new blog posts, the study wall and the guidelines page.

---

## ☐ 9. (Optional) Add moderators

If someone else will help moderate: once they've signed in at least once, tell Claude
their email and it will set their role to moderator (or do it yourself in
`npx prisma studio` → User → role → `MODERATOR`).

---

### If something goes wrong

- **Google says "redirect_uri_mismatch"** — the URI in step 1.5 doesn't exactly match.
  Check https vs http and `www`.
- **Google says "Access blocked: app is in testing"** — step 1.4 (Publish app) was skipped.
- **Codes don't arrive** — check spam; check Resend → **Logs**; make sure the domain shows
  Verified and `EMAIL_FROM` uses `@mail.simplycpa.in`.
- **Nothing changed after adding variables** — redeploy (step 5).
