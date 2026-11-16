# SimplyCPA: audit, strategy and 90-day roadmap

Prepared 15 November 2026 from the codebase, the live site (www.simplycpa.in) and web
research done the same day. Where something was not checked, it says so.

---

## 1. Website audit

### What is already good

| Area | Finding |
|---|---|
| Study content | 93 topics across all six sections, each with a study page and a five-minute quick sheet, written against the 2026 Blueprints. |
| Practice | About 1,025 published MCQs graded on the server, task-based simulations for FAR and AUD, a Question of the Day with archive, weekly 30-question mini-mocks, a mistakes list and bookmarks. |
| Reference | A 973-term glossary, 144 articles, pass-rate, score-release and licensure-pathway trackers, a fee estimator, fees in INR, India exam centres. |
| Trust | Editorial standards page, sources page, "last verified" dates on fees and trackers, no paid placements. This is rare among CPA sites and is the main thing to protect. |
| Design | A consistent, restrained design system (ink, paper, gold), dark mode, text-size control, good colour contrast, skip link, print styles. |
| Technical SEO | Sitemap (1,435 URLs), robots.txt, RSS, canonical tags, Article and FAQ structured data, generated Open Graph images, IndexNow. |
| Community | "What I studied" wall with moderation, streaks and sign-in by Google or email code. |

### What needed fixing (found in this audit)

| # | Problem | Why it matters | Status |
|---|---|---|---|
| 1 | Every canonical tag, sitemap URL and structured-data URL used `https://simplycpa.in`, but the site is served at `https://www.simplycpa.in` and the bare domain redirects. | Search engines were told the preferred URL of every page is one that redirects. This weakens indexing across the whole site. | **Fixed in code** (`src/lib/site.ts`). Also set `NEXT_PUBLIC_SITE_URL=https://www.simplycpa.in` in Vercel. |
| 2 | CPA Radar was one flat list of six notes, with no article pages, no categories and no "why it matters". | It could not rank for news searches or give a reason to return. | **Replaced** by The CPA Pulse. `/radar` redirects. |
| 3 | The blog index showed 144 cards in one grid with no filter or search. | Readers could not find anything; the "Knowledge Centre" was a label, not a structure. | **Fixed**: category filter with counts, and search. |
| 4 | Tools were scattered across "Practice" and "Resources" menus; there was no tools page. | Tools are the most linkable, most returned-to pages on competitor sites. | **Fixed**: `/tools` hub, a Tools menu and a homepage band. |
| 5 | No eligibility tool, no Discipline selector, no exam countdown. | These are the first three questions an Indian candidate asks. | **Built** (see section 4). |
| 6 | `src/lib/blueprint.ts` says the Blueprint is "2026 (unchanged for 2027)". The AICPA has now published 2027 Blueprints with a Summary of Changes. | The claim may be wrong for exams from 1 January 2027. | **Open.** Read the Summary of Changes and update topics, weights and this label. Highest content priority. |
| 7 | Every page is rendered on demand because the header reads the session and the subject list from the database on each request. The homepage took 1.8 s to first byte when tested. | Slower pages, weaker Core Web Vitals, and database load on every visit (the database went over quota in November). | **Open.** Move the session check to a small client component and cache the subject list, so public pages can be static. |
| 8 | 44 FAQs, in 11 categories. | The target is 200+. FAQs are the cheapest way to win long-tail searches. | **Open.** Roadmap weeks 3–8. |
| 9 | Simulations exist only for FAR and AUD. | REG, BAR, ISC and TCP candidates have no simulation practice. | **Open.** |
| 10 | The FAQ page marks all 44 questions as FAQ structured data. | Google now shows FAQ rich results only for government and health sites, so this earns nothing; it is harmless but should not grow to 200 entries on one page. | **Open, low.** Keep it on a short curated set when the FAQ centre is split by category. |
| 11 | Fees, eligibility rows and testing locations have no admin screen. | Updating a fee needs a developer. | **Open.** |
| 12 | No analytics beyond Vercel Analytics; Search Console status unknown. | Decisions about content are being made without search data. | **Open.** Needs the owner's Google account. |

### What to remove or consolidate

- "Blog" and "Knowledge Centre" were two names for one thing. The menu now says Articles, under Knowledge Centre.
- `/fees` and `/us-cpa-fees-in-inr` overlap. Keep both URLs (both are indexed), but make the INR page a view of the same estimator rather than separate copy.
- `/start-here` and `/roadmap` cover similar ground. Keep `/start-here` as the short version and make `/roadmap` the detailed one, each linking to the other at the top.

Not checked in this audit: a full broken-link crawl of all 1,435 URLs, Core Web Vitals field data, and a line-by-line accuracy review of the MCQ bank (the review notes already in `docs/` cover parts of it).

---

## 2. Competitor comparison

Based on each provider's public pages and search results on 15 November 2026. Paid course
interiors were not accessed. Becker, UWorld, Gleim and Surgent are paid courses with free
trials; NINJA is a low-cost subscription; AICPA, NASBA and ThisWayToCPA are official.

| Feature | Becker | UWorld | Gleim | Surgent | NINJA / Another71 | AICPA / NASBA | SimplyCPA |
|---|---|---|---|---|---|---|---|
| Full study text, free | No (14-day trial) | No (7-day trial) | No (one study unit as demo) | No (trial) | No | Blueprints only | **Yes, all six sections** |
| Free MCQs | Trial only | Trial sample | Some, with account | Trial | Trial | Sample tests | **Yes, about 1,025** |
| Simulations | Paid | Paid | Paid | Paid | Paid | Sample tests | FAR and AUD, free |
| Adaptive or predictive score | Yes | SmartPath | Yes | ReadySCORE | No | No | No |
| Study planner | Paid | In trial | Paid | Paid | Paid (NINJA Planner) | No | **Yes, free** |
| Timed mock exams | Paid, full length | Paid | Paid | Paid | Paid | Sample tests | Mini-mocks (30 questions) |
| Video lectures | Yes | Yes | Yes | Yes | Yes | No | No |
| Eligibility guidance by state | Articles | Articles | Free exam guide | Articles | Articles and forum | Official, by board | Tracker, board table and navigator |
| India-specific cost and process | Little | Little | Little | Little | Little | NASBA India page | **Yes, in INR** |
| Exam news | Blog | Blog | Blog | Blog | Blog and forum | Official notices | The CPA Pulse |
| Community | No | No | No | No | Forum | No | Study wall |
| Sells a course | Yes | Yes | Yes | Yes | Yes | No | **No** |

What this shows:

1. **No competitor gives away full study text and a question bank.** That is the position. Do not dilute it with upsells.
2. **The paid courses win on three things:** video, very large question banks (one independent review credits Gleim with over 12,000 questions), and a predicted score. Video is out of scope. Question volume and a readiness score are reachable.
3. **Nobody serves the Indian candidate properly.** US providers write for US graduates; Indian coaching sites exist to sell a course. Sourced, dated, India-specific process and cost content is uncontested ground.
4. **Official sites are accurate but hard to use.** NASBA's pathways list is a map image and a spreadsheet; the AICPA's score dates are a table with no calculator. Turning official data into tools (as the score finder and pathway tracker already do) is the most defensible kind of content.

Features worth building because of this: a readiness assessment (the free answer to SmartPath and ReadySCORE), full-length timed mocks, simulations for the other four sections, and many more MCQs.

---

## 3. Proposed architecture

```
Home
Study            /cpa, /cpa/{far|aud|reg|bar|isc|tcp}, topics, quick sheets, simulations
Practice         Question of the Day, mini-mocks, MCQs by topic, quick sheets
Tools            /tools  (hub)
                 Decide:  eligibility navigator · discipline selector · 120 vs 150 · fee estimator
                 Plan:    study planner · fees in INR
                 Track:   exam countdown · score release finder · dashboard
CPA for Indians  /indian-candidates (hub) → fees in INR, exam centres, board comparison
CPA Pulse        /pulse, /pulse/{story}      (was /radar)
Learn            Knowledge Centre: articles (filtered) · FAQs · glossary · pass rates
                 Getting started: start here · roadmap · free resources · sources
Study Wall       /what-i-studied
About            about · editorial standards · contact · legal
```

No existing URL changes except `/radar`, which now redirects permanently to `/pulse`
(anchors to individual notes still work). Articles stay at `/blog/{slug}`.

Next step for the Knowledge Centre (not built yet): category pages at
`/blog/category/{slug}` so each cluster has an indexable hub, and a `/faq/{category}`
split when the FAQ count passes about 80.

---

## 4. Features: built now and recommended

### Built in this round

| Feature | URL | Notes |
|---|---|---|
| The CPA Pulse | `/pulse` | Structured newsroom. Each story has status (confirmed, reported, commentary), event date, publication date, verification date, sources, "why this matters" and related tools. NewsArticle structured data. Five verified stories. |
| Tools hub | `/tools` | All eleven tools grouped by stage. |
| Eligibility Navigator | `/tools/cpa-eligibility-navigator` | Education to estimated US semester hours, comparison with 120 and 150, boards to look at first (from the existing board data), next steps. States clearly that it guarantees nothing. |
| Discipline Selector | `/tools/cpa-discipline-selector` | Six questions, transparent scoring, Blueprint areas and weights for the result. Does not rank difficulty. |
| Exam Countdown | `/tools/cpa-exam-countdown` | Multiple exams, days left, AICPA target score date, warns when a Discipline is not tested on the chosen date. Saved in the browser. |
| Knowledge Centre filter | `/blog` | Category chips with counts, and search. |
| Navigation | all pages | Study · Practice · Tools · CPA for Indians · CPA Pulse · Learn · Study Wall. |
| Homepage | `/` | New value statement, a tools band, Pulse stories in place of the Radar list. |

### Recommended next, in priority order

| Priority | Feature | Student value | Search value | Effort |
|---|---|---|---|---|
| 1 | Readiness assessment: a 20-question diagnostic per section that reports strength by Blueprint area and links to the weak topics | High | Medium | Medium (reuses the mini-mock engine) |
| 2 | 150+ more FAQs with a per-category structure | High | High | Medium, mostly writing |
| 3 | State board pages: one page per board Indian candidates use (about ten), from the existing board data | High | High ("Montana CPA requirements for Indian students") | Medium |
| 4 | Simulations for REG, BAR, ISC, TCP | High | Low | High |
| 5 | Full-length timed mock (same engine as mini-mocks) | High | Medium | Medium |
| 6 | Email digest of Pulse (monthly) | Medium | None | Low with Resend, which is already configured |
| 7 | Static public pages (audit item 7) | Speed for everyone | High | Medium |
| 8 | "What changed since you last visited" strip for returning readers | Medium | None | Low |

Ideas considered and not recommended now: video lessons (cost, and it is the paid
courses' ground), an AI tutor (accuracy risk for an exam site, and a paid API), a forum
(moderation burden; the study wall covers the need).

---

## 5. SEO opportunity analysis

No keyword-volume tool or Search Console data was available, so the table below ranks
opportunities by intent and by how well competitors answer them, not by measured volume.
Connect Search Console before acting on anything below the first five rows.

### Keyword-to-URL map (one page per intent, to avoid cannibalisation)

| Cluster | Primary query | Target URL | State |
|---|---|---|---|
| Eligibility | us cpa eligibility for indian students | `/tools/cpa-eligibility-navigator` | New |
| Eligibility | cpa after b.com / m.com / ca / mba | Existing articles, each linking to the navigator | Add links |
| State choice | best state for cpa for indian students | `/indian-candidates#boards`, later state pages | Exists, extend |
| Cost | us cpa cost in india / cpa fees in rupees | `/us-cpa-fees-in-inr` | Exists |
| Cost | cpa exam fees 2026/2027 | `/fees` | Exists |
| Discipline | bar vs isc vs tcp / which cpa discipline | `/tools/cpa-discipline-selector` | New |
| Dates | cpa score release dates 2026/2027 | `/cpa-score-release-dates` | Exists |
| Dates | cpa exam changes 2027 / cpa exam blackout july 2027 | `/pulse/cpa-exam-july-2027-new-platform-blackout` | New |
| Blueprint | 2027 cpa exam blueprint changes | `/pulse/2027-cpa-exam-blueprints-published` | New, needs the detail added |
| Licensing | 120 hour cpa states | `/cpa-licensure-pathways` | Exists |
| Pass rates | cpa exam pass rates 2026 | `/cpa-exam-pass-rates` | Exists |
| Strategy | how to study for FAR / AUD / REG | One strategy article per section | Check each exists; fill gaps |
| Careers | cpa salary in india | One article | Check; must cite named salary sources |
| Comparison | cpa vs ca / cpa vs acca / cpa vs cma | One article each | 3 exist; check coverage |
| Concepts | asc 842 lease accounting explained, asc 606 five steps, etc. | Topic pages (primary) with articles linking in | Exists |
| Tools | cpa study planner, cpa exam countdown | `/study-planner`, `/tools/cpa-exam-countdown` | Exists / new |

Rule: a new page is created only if no row above already owns its query. Otherwise the
existing page is improved.

### Technical

Done: canonical host fix; Pulse and tools added to the sitemap and RSS; breadcrumb
structured data on all new pages; NewsArticle data on stories.

To do: set the Vercel environment variable to the www address; submit the sitemap in
Search Console and confirm the canonical fix took effect; make public pages static;
run a full broken-link crawl; add breadcrumb structured data to topic and tracker pages
that lack it.

---

## 6. Content gap analysis

| Requested area | State today | Gap |
|---|---|---|
| CPA fundamentals | 11 "CPA Basics" and 3 comparison articles | US GAAP vs IFRS vs Ind AS as one pillar page; CPA Evolution explained |
| Indian students | 21 articles, plus hub, fees and centres pages | Per-board pages; credit-hour worked examples; getting experience verified from India |
| Exam strategy | 19 articles | Check one strong strategy page exists per section; retake strategy; working-professional plan |
| Practical accounting | 32 concept articles, 20 auditing, 19 tax, 8 information systems | Government and not-for-profit accounting, business combinations and consolidation worked examples (check coverage against the topic list) |
| Careers | 7 articles | Thin. GCC roles, Big Four hiring in India, interview preparation, salary with named sources |
| FAQs | 44 | 150+ more |
| News | 6 notes, now 5 full stories plus the notes | Accounting and regulation, industry and candidate desks have no stories yet |

The category counts come from the seed files; the article-by-article check against this
list is the first task of week 3.

---

## 7. The CPA Pulse structure

Four desks: **Exam & Policy**, **Accounting & Regulation**, **Industry Buzz**,
**Candidate Corner**. A desk appears on the page only when it has a verified story, so
there are no empty sections.

Every story carries: headline, desk, status label, summary, event date, SimplyCPA
publication date, update date, verification date, body, "why this matters to you",
original source links and related tools.

Launch stories (all read at the official source on 15 November 2026):

1. Core scores released 10 November, and the remaining 2026 target dates (NASBA, AICPA)
2. 2027 Blueprints published with a Summary of Changes (AICPA)
3. July 2027: new platform, 1–11 July blackout, one score release per window (AICPA)
4. Six more boards switch on the 120-hour pathway by 1 January 2027 (NASBA)
5. Fee check: India testing is still $460 per section (NASBA)

Stories considered and **not** published: three PCAOB items (quality control standard
amendments, a comfort-letter proposal, new enforcement units) and two FASB proposals.
They appeared in search results, but pcaobus.org and fasb.org refused automated access,
so they could not be read at the source. They should be read in a normal browser and
written up this week; they would open the Accounting & Regulation desk.

The publishing procedure is in `docs/PULSE-WORKFLOW.md`.

---

## 8. Visual redesign recommendations

The existing design language is good and should be kept: serif display type, warm paper
background, one accent colour, hairline grids instead of heavy cards. The work is
structure, not a new look.

Done: clearer hero statement; a tools band; an editorial lead-story layout for Pulse;
a six-column footer; a "Learn" menu that opens from the right so it stays on screen.

Recommended:

1. **Article template:** add a "key points" box at the top and a "related topics and questions" block at the end of every article, generated from the category.
2. **Section pages:** show progress and "continue where you stopped" for signed-in readers above the topic list.
3. **Homepage:** the six section cards should show topic and question counts and, for returning readers, progress.
4. **Tables on phones:** wide tables scroll sideways; add a visible hint, because readers miss columns.
5. **One icon set, used sparingly.** Remove the emoji from section labels (the Radar label used one).
6. **Search:** include Pulse stories, tools and glossary terms in site search results.

---

## 9. 90-day roadmap

### Days 1–14: fix and verify

- [x] Canonical host fix
- [x] The CPA Pulse, with five verified stories
- [x] Tools hub, Eligibility Navigator, Discipline Selector, Exam Countdown
- [x] Navigation, homepage and Knowledge Centre filter
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the www address in Vercel; deploy
- [ ] Search Console: verify the www property, submit the sitemap
- [x] Read the 2027 Summary of Changes; update topics, quick sheets, questions and the Blueprint label
- [x] PCAOB and FASB stories written from their own releases (opens the Accounting & Regulation desk)

### Days 15–45: content depth

- [x] FAQs: 43 → 203, with a hub and one page per category
- [x] State board pages for international candidates (nine boards; Illinois's NASBA page lists no requirements)
- [x] Knowledge Centre category pages, and tools, news, boards and glossary terms in site search
- [x] "Use this next" links from every article to the relevant tools and FAQs
- [x] Pass-rate tracker updated to Q3 2026
- [ ] Article-by-article gap check, then two articles a week from the gap list (careers first)
- [x] Readiness check (diagnostic) for all six sections, at /tools/cpa-readiness-check
- [ ] Pulse: two to four stories a week, monthly re-verification

### Days 46–75: practice depth and speed

- [ ] Simulations for REG, then TCP, BAR, ISC
- [ ] Full-length timed mock
- [ ] 500 more MCQs, weighted to the Blueprint areas with the fewest questions
- [ ] Static public pages (move the session check client-side)
- [ ] Article template improvements (key points, related block)

### Days 76–90: measure and plan

- [ ] First Search Console review: queries, pages losing clicks, new opportunities
- [ ] Monthly Pulse email digest
- [ ] Admin screens for fees and Pulse, if a non-developer needs to publish
- [ ] Competitor re-check and the next 90-day plan

### Operating rhythm

| When | What |
|---|---|
| Daily (10 minutes) | NASBA exam news and AICPA score page; note leads |
| Weekly | Two to four Pulse stories; two articles; ten FAQs; one batch of questions; link check on new pages |
| Monthly | Re-verify fees, trackers and recent Pulse stories; Search Console review; update outdated guides; plan the month |
