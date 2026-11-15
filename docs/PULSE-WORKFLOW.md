# The CPA Pulse: how a story gets published

Pulse stories live in `src/lib/pulse/articles.ts` as structured data. A story cannot be
published without sources, three dates and a "why this matters" list, because the type
requires them. There is no admin screen yet (see "Later" below).

## The rule

**If you have not read it at the original source, it does not run.** A search result, a
course provider's blog or a Reddit thread is a lead, not a source.

## Where to look

| How often | Source | What to look for |
|---|---|---|
| Daily | https://nasba.org/exams/news/ | Score releases, portal maintenance, policy notices |
| Daily | https://www.aicpa-cima.com/resources/article/find-out-when-youll-get-your-cpa-exam-score | Changes to target score dates |
| Weekly | https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam | New Blueprints, summaries of changes, new-pronouncement notices |
| Weekly | https://nasba.org/pathways/ | Licensure pathway laws and effective dates |
| Weekly | https://nasba.org/internationalexam/ | International fees and testing locations |
| Weekly | https://pcaobus.org/news-events/news-releases | Standards, enforcement, inspections |
| Weekly | https://www.fasb.org/ (In the News, Projects) | Proposed and final ASUs |
| Weekly | https://www.sec.gov/newsroom and https://www.irs.gov/newsroom | Rules and guidance that reach the exam |
| Weekly | Accounting Today, Journal of Accountancy, Going Concern, CFO Dive | Industry stories (always name the publication) |
| Weekly | r/CPA, Another71 forum | What candidates are asking. Leads for Candidate Corner and for new FAQs. Never a source of fact. |

PCAOB and FASB block automated readers. Open those pages in a normal browser.

## Eight steps

1. **Find** a development in the list above.
2. **Is it new?** Search `articles.ts` and the standing notes. Update an existing story instead of writing a second one.
3. **Read the original.** Open the official page or document. Note its date.
4. **Date it.** `eventDate` is when it happened or was announced, not today.
5. **Decide the status.**
   - `confirmed`: the official body says so and you read it there.
   - `reported`: a named publication reports it and the body concerned has not confirmed it. Say "X reports that…" in the text.
   - `commentary`: our own analysis.
6. **Write it.** Plain English, original wording, short paragraphs. Say what is not yet known. Fill `whyItMatters` from a candidate's point of view. Add `related` links to our tools and study pages.
7. **Cite it.** Every source goes in `sources` with a label that names the body and the page.
8. **Verify and publish.** Re-read each figure and date against the source, set `verified` to today, run `npm run build`, deploy.

## What Pulse never runs

- Rumours, anonymous claims or screenshots presented as fact.
- Allegations about a named person or firm without a named, reputable source, and never as `confirmed` unless a regulator or court has published it.
- A story whose only purpose is to add to the count.
- Copied text. Quote at most a sentence, in quotation marks, with the source named.
- "Live" or "breaking" labels. Pulse is written on a schedule.

## Keeping stories true

- When a story changes, edit it, set `updated` to today and re-set `verified`.
- Once a month, re-read the sources of every story from the last 90 days and re-set `verified`. If a story is no longer true, say so at the top; do not delete it silently.
- If a tracker (`src/lib/trackers/*`) is affected, update it in the same change so Pulse and the trackers never disagree.

## Status board

Use any list you like (a GitHub issue per story works) with these columns:
Lead → Source read → Drafted → Fact-checked → Published → Needs re-verification.

## Later

Stories are code today because that guarantees the structure and costs no database
capacity. When there are more than about 40 stories, or a non-developer needs to publish,
move them to a `PulseArticle` table with an admin screen that enforces the same required
fields.
