# Content Management Guide (No Coding Required)

This guide explains how to update SimplyCPA day-to-day without touching any code. Everything below happens by logging into `/admin` on the site with a staff account.

If you haven't set up an admin account yet, see the "Admin access" section of the main [README.md](README.md) first.

## Logging in

Go to `yoursite.com/login` and sign in with your admin email/password. Then go to `yoursite.com/admin` — you'll see the admin dashboard with content counts and alerts.

Only accounts with the Admin, Editor, or Moderator role can access `/admin` at all; Editors and Moderators see the same screens but a few actions (deleting a subject, deleting an MCQ) are restricted to Admins.

## How do I update a topic?

1. Go to **Admin → Topics**.
2. Pick the subject from the row of tabs at the top (FAR, AUD, REG, etc.).
3. Click the topic you want to change.
4. Edit the title, short description, difficulty, estimated time, or Blueprint area, and click **Save**.

This page also has buttons to jump straight to that topic's Study Material, Revision Notes, or MCQs.

## How do I update the Study Material for a topic?

1. Go to **Admin → Topics**, click the topic, then click **Edit Study Material**.
2. Use the toolbar to format text — headings, bold/italic, lists, tables, links.
3. Use the **+ Tip / + Warning / + Example / + Important** buttons to insert a colored callout box at your cursor, then type inside it.
4. Set **Status** — leave it as `Draft` while you're still working, or set it to `Published` when it's ready to go live. (Only `Published` content shows up on the public site.)
5. Optionally write a short **Change summary** (e.g. "Clarified the lease example") — this is saved in the version history so you can see what changed and when.
6. Click **Save Study Material**.

Editing Study Material never touches that topic's Revision Notes — they're completely separate, on purpose.

## How do I update Revision Notes?

Same process as Study Material, but from the **Edit Revision Notes** button instead. Keep these short — think "the 20% I need the night before the exam," not a second copy of the full material.

## How do I add MCQs one at a time?

1. Go to **Admin → MCQs → + New MCQ**.
2. Pick the topic, write the question, fill in all four options, and mark which one is correct using the radio button next to it.
3. Write the **Explanation** — this is required and is shown to students after they answer.
4. Optionally fill in the small "why this option is right/wrong" box under any option — also shown after submission.
5. Set difficulty, question type, and tags if you want (all optional except difficulty).
6. Set **Status** to `Published` when ready, then **Save MCQ**.

The system won't let you save an MCQ with a missing option or no correct answer marked.

## How do I add 50 MCQs at once?

Use **Admin → MCQs → Bulk import CSV**. Prepare a spreadsheet (save as CSV) with these column headers in the first row:

```
Subject, Topic, Question, Option A, Option B, Option C, Option D, Correct Answer, Explanation, Difficulty, Tags
```

- **Subject** must be the short code used in the site's URLs: `far`, `aud`, `reg`, `bar`, `isc`, or `tcp`.
- **Topic** must exactly match an existing topic's title (check the spelling against **Admin → Topics**).
- **Correct Answer** must be `A`, `B`, `C`, or `D`.
- **Tags** are optional, separated by semicolons (e.g. `conceptual;exam trap`).

Upload the file — the page will tell you how many rows imported successfully and list any rows it skipped (usually because the Topic name didn't match exactly, or a required column was blank). Imported questions land as **Draft**, so review them in **Admin → MCQs** before publishing.

## How do I publish a blog article?

1. Go to **Admin → Blog**, fill in a title and category at the bottom, click **Create draft**.
2. Click into the new draft, write the content using the same editor as Study Material, fill in an excerpt (the short summary shown on the blog list page).
3. Change **Status** to `Published` and **Save** — it will immediately appear on `/blog`.

## How do I add or edit an FAQ?

Go to **Admin → FAQ**. Existing FAQs are listed with editable fields directly inline — change the category, question, answer, or order number, then click **Save** on that FAQ's card. To add a new one, use the form at the bottom of the page. Set an FAQ's status to `Archived` instead of deleting it if you just want to hide it temporarily.

## How do I change the homepage quote?

The rotating quotes in the homepage hero are currently defined in the code (`src/components/home/Hero.tsx`) rather than the database, since they're closer to brand copy than editable content. If you want to change them regularly without a developer, ask your developer to move this list into the FAQ/Update pattern — it's a small, contained change.

## How do I mark a topic as "Needs Review"?

Open the topic in **Admin → Topics**, and change its **Status** dropdown to `Needs Update`. It will show up in the **Admin dashboard → Alerts** panel and in the topic list with a status badge, so it's easy to find later. This is the right move whenever you learn the official Blueprint changed something about that topic, or you find an error.

## How do I publish AI-generated content?

If you (or a future workflow) draft study material, revision notes, or MCQs with AI assistance, save them with **Status = AI Draft** rather than `Draft` or `Published`. This keeps a clear signal in the system that the content hasn't been human-reviewed yet. Always read through and edit AI-drafted content, then change the status to `Published` yourself — nothing on this site publishes AI content automatically.

## How do I moderate comments?

Go to **Admin → Comments** to see recent discussion activity across every topic. Each comment has **Pin**, **Lock**, and **Delete** actions. Pinning surfaces a particularly useful answer at the top of a topic's discussion; locking prevents further replies on that comment thread's topic; deleting removes the comment's content (shown as "[deleted]") without deleting the user's account.

## How do I update fees, eligibility rules, or testing locations?

These live in the `Fee`, `EligibilityRequirement`, and `TestingLocation` database tables but don't yet have their own admin screens (this was intentionally deferred — see `docs/RESEARCH.md`). For now, updating these requires either:

- Asking a developer to update `prisma/seed-data/facts.ts` and re-run the seed script, or
- Using Prisma Studio (`npm run db:studio`) to edit rows directly — a visual spreadsheet-like tool that needs no coding, just careful editing. A developer can set this up for you or walk you through it once.

Building a proper admin screen for these is a reasonable next step once the fee/eligibility content grows.

## Publishing checklist

Before setting anything to `Published`:

- [ ] No spelling/grammar errors
- [ ] For MCQs: exactly one correct answer, all four options filled in, explanation written
- [ ] For Study Material/Revision Notes: at least a few paragraphs, not empty
- [ ] Any fact that can change (a fee, a deadline, a rule) links to or matches what's on `/sources` or `/fees` rather than being restated as a fixed number in prose
