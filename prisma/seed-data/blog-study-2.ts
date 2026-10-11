import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";
import { AICPA_BLUEPRINTS, AICPA_PASS, NASBA_FAQ, NASBA_SCORES, BLS, ICAI_SCHEME } from "./blog-india";

const AICPA_SAMPLE: [string, string] = ["AICPA & CIMA — Practise with the CPA Exam sample tests", "https://www.aicpa-cima.com/resources/article/get-familiar-with-the-cpa-exam-by-practicing-with-our-sample-tests"];
const AICPA_SCORING: [string, string] = ["AICPA & CIMA — CPA Exam scoring and pass rates", "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates"];
const AICPA_RETIRED_FAR: [string, string] = ["AICPA & CIMA — Retired task-based simulation from the FAR section", "https://www.aicpa-cima.com/resources/download/retired-task-based-simulation-from-the-far-section-of-the-uniform-cpa"];
const AICPA_FAQ: [string, string] = ["AICPA & CIMA — CPA Exam frequently asked questions", "https://www.aicpa-cima.com/resources/article/find-answers-to-frequently-asked-questions-about-cpa-exam"];

export const studyPosts2: BlogSeed[] = [
  {
    slug: "how-to-solve-cpa-task-based-simulations",
    title: "How to Solve CPA Task-Based Simulations (TBS) Step by Step",
    category: "Study Strategy",
    excerpt:
      "A repeatable method for task-based simulations — reading the requirement first, triaging exhibits, managing time, earning partial credit and handling research tasks.",
    crux: [
      "Why they matter: TBSs carry 50% of the score in AUD, FAR, REG, BAR and TCP (40% in ISC).",
      "Requirement first: Read what's being asked before the exhibits, so you read the exhibits with purpose.",
      "Triage exhibits: Skim each for relevance; many contain distractors.",
      "Partial credit: Each simulation has multiple scored parts — answer every field, even under time pressure.",
      "Time budget: Roughly 15–20 minutes per TBS; within a testlet you can move between simulations before submitting it.",
    ],
    content: `
<h2>The step-by-step method</h2>
<ol>
<li><strong>Read the requirement and the response area first.</strong> Know exactly what you must produce — a journal entry, a numeric answer, a selection from an option list.</li>
<li><strong>Skim every exhibit's title.</strong> Identify which exhibits matter for which part of the task. Some are included only to distract.</li>
<li><strong>Answer the easy fields first.</strong> Simulations are scored by part, so secure the marks you're sure of.</li>
<li><strong>Work methodically through calculations.</strong> Use the on-screen spreadsheet for multi-step computations and keep a clear trail.</li>
<li><strong>Fill every field.</strong> There's no penalty for wrong answers — a reasoned guess beats a blank.</li>
<li><strong>Flag and move on</strong> if you're stuck — return before submitting the testlet. Once submitted, you can't go back.</li>
</ol>

<h2>Common TBS types and tips</h2>
<table>
<thead><tr><th>Type</th><th>Tip</th></tr></thead>
<tbody>
<tr><td>Journal entries</td><td>Decide the accounts first, then amounts; check debits equal credits</td></tr>
<tr><td>Numeric entry / schedules</td><td>Write formulas in the spreadsheet tool; check signs and rounding instructions</td></tr>
<tr><td>Option lists (e.g. classify each item)</td><td>Treat each row as an independent mini-MCQ</td></tr>
<tr><td>Document review</td><td>Read the whole document once, then evaluate each highlighted phrase against the facts</td></tr>
<tr><td>Research</td><td>Identify the topic, search the authoritative literature with specific keywords, and enter the citation in the required format</td></tr>
<tr><td>Data analysis</td><td>Filter and sort the data before calculating; watch for outliers</td></tr>
</tbody>
</table>

<h2>Time management</h2>
<ul>
<li>A four-hour section with 7 TBSs and two MCQ testlets typically leaves about 15–20 minutes per simulation.</li>
<li>Set checkpoints: note the clock at the start of each TBS testlet and the target finishing time.</li>
<li>Take the standard 15-minute break after testlet 3 — it doesn't count against your time.</li>
</ul>

<h2>How to practise</h2>
<ul>
<li>Do simulations from week one — at least one per topic.</li>
<li>Use the AICPA's free sample tests and retired TBSs to learn the real interface and tools.</li>
<li>After each TBS, review every part you missed and note the reason — see <a href="/blog/how-to-review-cpa-mcqs-wrong-answers">how to learn from wrong answers</a>.</li>
</ul>

${sources([AICPA_BLUEPRINTS, AICPA_SAMPLE, AICPA_RETIRED_FAR, AICPA_SCORING])}
`,
  },
  {
    slug: "how-to-review-cpa-mcqs-wrong-answers",
    title: "How to Review CPA MCQs: Learn From Every Wrong Answer",
    category: "Study Strategy",
    excerpt:
      "A simple system for reviewing multiple-choice questions — classifying mistakes, keeping an error log, explaining every option and using spaced repetition — so your accuracy actually improves.",
    crux: [
      "Review is where learning happens: Doing more questions without analysing mistakes plateaus quickly.",
      "Classify every mistake: Knowledge gap, misread question, calculation slip, fell for a trap, or lucky guess.",
      "Explain every option: Be able to say why the right answer is right and why each wrong answer is wrong.",
      "Keep an error log: One line per mistake — topic, type, the rule you missed — and review it weekly.",
      "Measure first-attempt accuracy: Aim for about 70–75%+ on new questions in each topic before moving on.",
    ],
    content: `
<h2>Why review beats volume</h2>
<p>Doing thousands of questions feels productive, but improvement comes from understanding <em>why</em> you got them wrong. Twenty questions properly reviewed beat a hundred rushed ones.</p>

<h2>The five types of mistake</h2>
<table>
<thead><tr><th>Type</th><th>Sign</th><th>Fix</th></tr></thead>
<tbody>
<tr><td>Knowledge gap</td><td>You didn't know the rule</td><td>Re-learn the rule; add it to your revision sheet</td></tr>
<tr><td>Misread</td><td>You knew it but missed "not", "except" or "most likely"</td><td>Underline key words mentally; reread the final sentence</td></tr>
<tr><td>Calculation slip</td><td>Right method, wrong number</td><td>Slow down; check signs and units</td></tr>
<tr><td>Trap</td><td>You chose a tempting distractor (e.g. an IFRS or Ind AS answer)</td><td>Note the trap pattern</td></tr>
<tr><td>Lucky guess</td><td>Right answer for the wrong reason</td><td>Treat as wrong and review</td></tr>
</tbody>
</table>

<h2>The review routine</h2>
<ol>
<li>Answer a set of 15–30 questions under timed conditions.</li>
<li>For every question — right or wrong — explain why the correct answer is right.</li>
<li>For each wrong option, say why it's wrong. Distractors are built from common misconceptions; understanding them protects you on exam day.</li>
<li>Log every mistake.</li>
<li>Retest weak topics after 2, 7 and 21 days (spaced repetition).</li>
</ol>

<h2>An error log template</h2>
<div class="callout callout-example">
<table>
<thead><tr><th>Date</th><th>Section / topic</th><th>Type</th><th>What I missed</th><th>Rule to remember</th></tr></thead>
<tbody>
<tr><td>12 Oct</td><td>FAR / Leases</td><td>Knowledge</td><td>Used Ind AS single model</td><td>US GAAP lessees still classify finance vs operating</td></tr>
<tr><td>13 Oct</td><td>AUD / Sampling</td><td>Misread</td><td>Missed "effectiveness"</td><td>Risk of incorrect acceptance = effectiveness risk</td></tr>
</tbody>
</table>
</div>

<h2>Metrics to watch</h2>
<ul>
<li><strong>First-attempt accuracy</strong> per topic — repeated questions inflate scores.</li>
<li><strong>Mistake type mix</strong> — lots of misreads mean you need technique, not more content.</li>
<li><strong>Trend</strong> — accuracy should rise week on week.</li>
</ul>
<p>SimplyCPA's practice sessions show an explanation for each option, so you can review every question this way.</p>

${sources([AICPA_BLUEPRINTS, AICPA_SCORING])}
`,
  },
  {
    slug: "how-to-build-cpa-revision-sheet",
    title: "How to Build a CPA Revision Sheet That Actually Helps",
    category: "Study Strategy",
    excerpt:
      "What to put on a one-page revision sheet — rules, formulas, exceptions, traps and decision tables — how to build it as you study, and how to use it in the final two weeks.",
    crux: [
      "One page per topic: If it doesn't fit, you haven't prioritised.",
      "Include: Key rules, formulas, thresholds, exceptions, exam traps and one worked example.",
      "Build it as you go: Write the sheet when you finish a topic, then add to it from your error log.",
      "Use decision tables: Many CPA topics are 'if X, then Y' — tables and flowcharts beat paragraphs.",
      "Final two weeks: Review sheets daily; test yourself by recreating them from memory.",
    ],
    content: `
<h2>What goes on a revision sheet</h2>
<ol>
<li><strong>Core rules</strong> — stated in one line each.</li>
<li><strong>Formulas and thresholds</strong> — e.g. DR = AR ÷ (IR × CR); 10% corridor for pensions; $3,000 capital loss limit.</li>
<li><strong>Exceptions</strong> — where the general rule doesn't apply.</li>
<li><strong>Traps</strong> — from your error log (e.g. "interest paid is operating under US GAAP").</li>
<li><strong>A decision table or flowchart</strong> — e.g. which audit opinion applies.</li>
<li><strong>One worked example</strong> — the shortest example that shows the method.</li>
</ol>

<h2>Example: audit opinions</h2>
<div class="callout callout-example">
<table>
<thead><tr><th>Problem</th><th>Material, not pervasive</th><th>Material and pervasive</th></tr></thead>
<tbody>
<tr><td>Misstatement</td><td>Qualified</td><td>Adverse</td></tr>
<tr><td>Can't obtain evidence</td><td>Qualified</td><td>Disclaimer</td></tr>
</tbody>
</table>
<p><strong>Traps:</strong> emphasis-of-matter doesn't modify the opinion; adequately disclosed going-concern doubt = unmodified + separate section.</p>
</div>

<h2>How to build it</h2>
<ul>
<li>Write the first version the day you finish a topic, from memory, then check against your notes.</li>
<li>Add a line every time your error log shows a repeated mistake in that topic.</li>
<li>Use your own words — rewriting is part of learning.</li>
</ul>

<h2>How to use it</h2>
<ul>
<li><strong>Weekly:</strong> review all sheets for topics studied so far (10–15 minutes).</li>
<li><strong>Final two weeks:</strong> review every sheet daily, then cover one and recreate it from memory.</li>
<li><strong>Exam morning:</strong> scan the traps sections only.</li>
</ul>

<p>Our <a href="/quick-sheets">quick sheets</a> give a ready-made starting point for every topic — adapt them with your own traps.</p>

${sources([AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "cpa-exam-retake-strategy-failed-attempt",
    title: "CPA Exam Retake Strategy: How to Analyse a Failed Attempt",
    category: "Study Strategy",
    excerpt:
      "How to read your Candidate Performance Report, decide what to restudy, plan the retake date, protect your credit window and change the approach that didn't work.",
    crux: [
      "Read the CPR: It rates your performance by content area and item type as weaker, comparable or stronger than candidates who scored just above passing.",
      "Fix the biggest gaps: Prioritise heavily weighted areas where you were 'weaker' — they're where points come back fastest.",
      "Retake soon: You can reapply once you get your score; for Core sections, a retake 4–8 weeks later keeps knowledge fresh.",
      "Check your credit window: Make sure a retake doesn't put an earlier passed section at risk.",
      "Change the method, not just the hours: If simulations were 'weaker', more MCQs won't fix it.",
    ],
    content: `
<h2>Step 1: read the Candidate Performance Report</h2>
<p>Failing candidates receive a Candidate Performance Report (CPR). It shows performance in each content area and by item type (MCQ and TBS), compared with candidates who scored just above passing (75–80), rated <strong>Weaker</strong>, <strong>Comparable</strong> or <strong>Stronger</strong>.</p>

<h2>Step 2: work out where the points are</h2>
<table>
<thead><tr><th>CPR rating</th><th>Area weight</th><th>Priority</th></tr></thead>
<tbody>
<tr><td>Weaker</td><td>High</td><td>Top priority — restudy fully</td></tr>
<tr><td>Weaker</td><td>Low</td><td>Targeted review of key rules</td></tr>
<tr><td>Comparable</td><td>High</td><td>Practice to push into "stronger"</td></tr>
<tr><td>Stronger</td><td>Any</td><td>Maintain with mixed questions</td></tr>
</tbody>
</table>
<p>Also look at item type. "Weaker" on TBSs means you need more simulation practice and technique, not more reading.</p>

<h2>Step 3: be honest about why</h2>
<ul>
<li>Not enough total hours?</li>
<li>Too much passive study?</li>
<li>Simulations started too late?</li>
<li>Timing problems on the day?</li>
<li>Gaps in specific topics (governmental accounting, US tax rules)?</li>
</ul>

<h2>Step 4: plan the retake date</h2>
<ul>
<li>Under continuous testing, you can reapply as soon as you receive your score; the only limit is time to reregister, get an NTS and find a seat.</li>
<li>For Core sections, a retake 4–8 weeks later usually works — long enough to fix gaps, short enough to retain knowledge.</li>
<li>For Discipline sections, the earliest retake is the next quarterly window.</li>
<li>Check your credit window: most boards give 30 months from your first passing score — a retake far in the future can put earlier credits at risk.</li>
</ul>

<h2>Step 5: a 6-week retake plan</h2>
<ol>
<li><strong>Weeks 1–3:</strong> restudy weaker, high-weight areas; daily MCQs; simulations every other day.</li>
<li><strong>Weeks 4–5:</strong> mixed questions across the whole blueprint; two simulations a day.</li>
<li><strong>Week 6:</strong> a full timed mock exam and revision sheets.</li>
</ol>

<h2>Score reviews</h2>
<p>A score review costs $240 and verifies your score; a score appeal costs $550 plus $100 per item and isn't available in every board. NASBA notes that historically, no score has changed as a result of an appeal — your time is better spent preparing.</p>

${sources([NASBA_SCORES, NASBA_FAQ, AICPA_SCORING, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "manage-exam-anxiety-time-pressure-cpa",
    title: "How to Manage Exam Anxiety and Time Pressure During CPA Tests",
    category: "Study Strategy",
    excerpt:
      "Building a time plan for each section, rehearsing under real conditions, using the standard break well, handling difficult questions, and testing accommodations if you need them.",
    crux: [
      "Have a time plan: Know how many minutes you have per MCQ and per simulation before you walk in.",
      "Rehearse: Take at least one full timed practice exam using the AICPA's sample tests and real interface.",
      "Use the break: The standard 15-minute break after testlet 3 doesn't count against your time — take it.",
      "Hard questions are normal: Some are unscored pretest items; answer, flag and move on.",
      "Accommodations: Candidates with documented needs can request testing accommodations through their board under the ADA.",
    ],
    content: `
<h2>Build a time plan</h2>
<table>
<thead><tr><th>Section</th><th>MCQs</th><th>TBSs</th><th>Suggested split (of 240 minutes)</th></tr></thead>
<tbody>
<tr><td>FAR</td><td>50</td><td>7</td><td>About 75 min MCQ (1.5 min each), about 150 min TBS, 15 min buffer</td></tr>
<tr><td>AUD</td><td>78</td><td>7</td><td>About 100 min MCQ (1.25 min each), about 125 min TBS, 15 min buffer</td></tr>
<tr><td>REG</td><td>72</td><td>8</td><td>About 95 min MCQ, about 130 min TBS, 15 min buffer</td></tr>
<tr><td>ISC</td><td>82</td><td>6</td><td>About 110 min MCQ, about 115 min TBS, 15 min buffer</td></tr>
</tbody>
</table>
<p>These splits are our suggestions — adjust for your strengths. Write checkpoint times on your noteboard at the start.</p>

<h2>Rehearse under real conditions</h2>
<ul>
<li>Take the AICPA's free sample tests to learn the interface, tools and navigation.</li>
<li>Do at least one full four-hour mock exam in one sitting, at the same time of day as your real exam.</li>
<li>Practise the break: stand up, drink water, don't review notes.</li>
</ul>

<h2>On the day</h2>
<ul>
<li>Arrive early; check-in and security take time.</li>
<li>Start each testlet by noting the clock.</li>
<li>If a question stalls you for more than twice its time budget, answer your best guess, flag it, and move on.</li>
<li>Remember that some questions are unscored pretest items — one unfamiliar question doesn't mean you're failing.</li>
<li>Never leave a question blank; there's no penalty for wrong answers.</li>
<li>Take the standard break after testlet 3 — it doesn't use your testing time.</li>
</ul>

<h2>Managing anxiety</h2>
<ul>
<li><strong>Preparation is the best antidote</strong> — confidence comes from practice under exam conditions.</li>
<li>Use slow breathing for a minute at the start and at the break.</li>
<li>Sleep properly in the week before, not just the night before.</li>
<li>Focus on the current question, not your running score — you can't calculate it anyway.</li>
</ul>

<h2>Testing accommodations</h2>
<p>Candidates with a documented disability can request accommodations (such as extra time or a separate room) under the Americans with Disabilities Act. For boards using NASBA's CPA Examination Services, there's a Testing Accommodations Request Form; some boards, such as Illinois and Florida, handle requests themselves. Apply well before you schedule.</p>

${sources([AICPA_SAMPLE, AICPA_FAQ, NASBA_FAQ, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "free-cpa-practice-tests-how-to-use",
    title: "Free CPA Practice Tests: How to Use Them Effectively",
    category: "Study Strategy",
    excerpt:
      "Where to find free CPA practice tests and questions — the AICPA sample tests, retired simulations and topic-level question banks — and when and how to use each for maximum benefit.",
    crux: [
      "AICPA sample tests: Free, built on the real exam software — the best way to learn the interface and tools.",
      "Retired simulations: The AICPA publishes retired TBSs for FAR and AUD with the blueprints — real examples of how simulations are built.",
      "Topic question banks: Free MCQs (including SimplyCPA's) for practice after each topic.",
      "When to use them: Sample tests twice — early to learn the interface, and one to two weeks before the exam as a dress rehearsal.",
      "How to use them: Timed, in one sitting, followed by a full review of every item.",
    ],
    content: `
<h2>Free resources</h2>
<table>
<thead><tr><th>Resource</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>AICPA sample tests</td><td>Learning the real interface, navigation, calculator, spreadsheet and research tools; full dress rehearsal</td></tr>
<tr><td>AICPA retired task-based simulations (FAR and AUD)</td><td>Seeing how real simulations are structured and scored by part</td></tr>
<tr><td>SimplyCPA topic MCQs</td><td>Practice after each topic, with explanations for every option</td></tr>
<tr><td>Other free question banks</td><td>Extra reinforcement — check that content reflects the current blueprint</td></tr>
</tbody>
</table>

<h2>When to use each</h2>
<ol>
<li><strong>Week 1:</strong> take the AICPA sample test for your section to learn the interface — don't worry about the score.</li>
<li><strong>Every topic:</strong> 20–40 topic MCQs and at least one simulation.</li>
<li><strong>Weekly:</strong> a cumulative quiz on everything studied so far.</li>
<li><strong>1–2 weeks before the exam:</strong> a full, timed practice exam in one sitting.</li>
</ol>

<h2>Getting the most from a practice test</h2>
<ul>
<li>Recreate exam conditions: four hours, no notes, phone away, a single 15-minute break after testlet 3.</li>
<li>Track time per testlet against your plan.</li>
<li>Review every item afterwards — right answers too — and log mistakes by type.</li>
<li>Use the results to plan your last week: the weakest heavily weighted areas first.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Don't over-interpret practice scores.</strong> The real exam is scaled from 0 to 99 and is not a percentage. Use practice results to find weak areas, not to predict your score.</p>
</div>

${sources([AICPA_SAMPLE, AICPA_RETIRED_FAR, ["AICPA & CIMA — CPA Exam practice and preparation", "https://www.aicpa-cima.com/resources/landing/cpa-exam-practice-and-preparation"], AICPA_SCORING])}
`,
  },
  {
    slug: "track-cpa-exam-progress-study-dashboard",
    title: "How to Track CPA Exam Progress With a Study Dashboard",
    category: "Study Strategy",
    excerpt:
      "The six numbers worth tracking — hours, coverage, first-attempt accuracy, simulation scores, mock exam results and days to exam — with thresholds and how to act on them.",
    crux: [
      "Track six numbers: Study hours, blueprint coverage, first-attempt MCQ accuracy by topic, simulation accuracy, mock exam result and days to exam.",
      "Coverage beats hours: 100% of topics studied at least once before the final review phase.",
      "Accuracy thresholds: Aim for roughly 70–75%+ first-attempt accuracy per topic, with no heavily weighted topic far below.",
      "Act weekly: Each week, pick the two weakest heavily weighted topics and fix them.",
      "Keep it simple: A spreadsheet or SimplyCPA's dashboard is enough — the habit matters more than the tool.",
    ],
    content: `
<h2>What to track</h2>
<table>
<thead><tr><th>Metric</th><th>Why it matters</th><th>Target</th></tr></thead>
<tbody>
<tr><td>Hours studied (by topic)</td><td>Shows whether you're on pace</td><td>Your weekly plan, e.g. 12–15 hours</td></tr>
<tr><td>Blueprint coverage</td><td>Gaps cost marks</td><td>100% of topics before final review</td></tr>
<tr><td>First-attempt MCQ accuracy</td><td>True measure of understanding</td><td>About 70–75%+ per topic</td></tr>
<tr><td>Simulation accuracy</td><td>Half the score in most sections</td><td>Improving trend; no topic without a TBS attempted</td></tr>
<tr><td>Mock exam result</td><td>Stamina and timing</td><td>Completed on time with no testlet rushed</td></tr>
<tr><td>Days to exam</td><td>Keeps the plan honest</td><td>Review phase starts 14 days out</td></tr>
</tbody>
</table>

<h2>A simple dashboard layout</h2>
<div class="callout callout-example">
<table>
<thead><tr><th>Topic</th><th>Blueprint area</th><th>Hours</th><th>Studied?</th><th>MCQ accuracy</th><th>TBS done</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Leases</td><td>Select transactions</td><td>9</td><td>Yes</td><td>64%</td><td>2</td><td>Redo schedules</td></tr>
<tr><td>Revenue recognition</td><td>Select transactions</td><td>10</td><td>Yes</td><td>78%</td><td>3</td><td>Maintain</td></tr>
<tr><td>Governmental funds</td><td>Financial reporting</td><td>4</td><td>Partly</td><td>55%</td><td>0</td><td>Priority this week</td></tr>
</tbody>
</table>
</div>

<h2>The weekly review (20 minutes)</h2>
<ol>
<li>Update the numbers.</li>
<li>Identify the two weakest topics in the most heavily weighted areas.</li>
<li>Schedule specific sessions to fix them next week.</li>
<li>Check that you're on pace for the exam date — adjust early, and remember that rescheduling is only free 61+ days ahead.</li>
</ol>

<h2>Using SimplyCPA</h2>
<p>Your <a href="/dashboard">SimplyCPA dashboard</a> records topics you've marked complete, your practice sessions and bookmarked questions — a ready-made starting point for this tracking.</p>

${sources([AICPA_BLUEPRINTS, NASBA_FAQ])}
`,
  },
  {
    slug: "cpa-vs-cma-vs-acca",
    title: "CPA vs CMA vs ACCA: Which Qualification Fits Your Career Goals?",
    category: "CPA vs Other Qualifications",
    excerpt:
      "How the US CPA, the IMA's CMA and the ACCA compare — who awards them, structure, exams, experience, recognition and the careers each one suits best.",
    crux: [
      "US CPA: A US state licence for public accounting — US GAAP, audit and tax. Four exam sections plus education and experience requirements.",
      "CMA (IMA): A management accounting certification — planning, analysis, control and decision support. Two four-hour parts plus a bachelor's degree and two years' experience.",
      "ACCA: A UK-based global qualification built on IFRS — currently 13 exams, an ethics module and 36 months of practical experience.",
      "Best fit: CPA for US-facing audit, tax and reporting; CMA for FP&A and management roles; ACCA for IFRS-based roles in the UK, Middle East and many other markets.",
      "Recognition in India: None replaces the CA for Indian statutory work — each adds an international dimension.",
    ],
    content: `
<h2>Side by side</h2>
<table>
<thead><tr><th></th><th>US CPA</th><th>CMA</th><th>ACCA</th></tr></thead>
<tbody>
<tr><td>Awarded by</td><td>US state boards of accountancy (exam by AICPA, administered by NASBA)</td><td>Institute of Management Accountants (IMA)</td><td>Association of Chartered Certified Accountants</td></tr>
<tr><td>Focus</td><td>US GAAP, auditing, US tax, business law</td><td>Financial planning, analysis, control, decision support, strategic financial management</td><td>IFRS financial reporting, audit, tax, management and strategy</td></tr>
<tr><td>Exams</td><td>4 sections (3 Core + 1 Discipline), 4 hours each</td><td>2 parts, 4 hours each: 100 MCQs plus written questions (case-based questions replacing essays for English exams from September/October 2026 in most regions)</td><td>Currently 13 exams across Applied Knowledge, Applied Skills and Strategic Professional levels, plus an Ethics and Professional Skills module; ACCA is redesigning the qualification</td></tr>
<tr><td>Passing standard</td><td>75 on a 0–99 scale</td><td>360 on a 0–500 scale</td><td>Set by ACCA per exam</td></tr>
<tr><td>Education</td><td>Usually 120 hours to sit; 150 (or 120 + 2 years' experience) to license</td><td>Bachelor's degree (any field)</td><td>Entry routes from school level; exemptions for degrees and qualifications such as CA</td></tr>
<tr><td>Experience</td><td>1–2 years, verified by a CPA</td><td>2 continuous years in management accounting or financial management (can be completed after the exams)</td><td>36 months plus 9 performance objectives</td></tr>
<tr><td>Time limit</td><td>Pass all sections within the credit window (usually 30 months)</td><td>Pass both parts within 3 years of entering the programme</td><td>Set by ACCA rules</td></tr>
</tbody>
</table>

<h2>Which fits which career?</h2>
<table>
<thead><tr><th>Career goal</th><th>Best fit</th></tr></thead>
<tbody>
<tr><td>US audit, US tax, US GAAP reporting, SOX and SOC work</td><td>CPA</td></tr>
<tr><td>Financial planning and analysis, cost management, business partnering, CFO track in industry</td><td>CMA (often alongside CA or CPA)</td></tr>
<tr><td>IFRS reporting, UK or Middle East roles, international audit</td><td>ACCA</td></tr>
<tr><td>Indian statutory audit and tax</td><td>CA (none of the three replaces it)</td></tr>
</tbody>
</table>

<h2>Combinations that work</h2>
<ul>
<li><strong>CA + CPA</strong> — Indian depth plus US credential; strong for US-facing audit and reporting.</li>
<li><strong>CPA + CMA</strong> — technical accounting plus management accounting; strong for industry finance in US multinationals.</li>
<li><strong>CA + ACCA</strong> — common for IFRS-reporting roles; ACCA grants exemptions to CAs.</li>
</ul>

<p>See also <a href="/blog/cpa-vs-ca-what-actually-matters">CPA vs CA</a> and <a href="/blog/enrolled-agent-vs-cpa">Enrolled Agent vs CPA</a>.</p>

${sources([AICPA_BLUEPRINTS, ["IMA — The CMA exam format is evolving (case-based questions)", "https://www.imanet.org/en/cma-case-based-questions"], ["IMA — What do you need to qualify for the CMA certification?", "https://help.imanet.org/s/article/What-do-you-need-to-qualify-for-the-CMA-certification"], ["ACCA — Qualification structure and requirements", "https://www.accaglobal.com/gb/en/student/getting-started/acca-qualification-structure.html"], ["ACCA — Practical experience requirement FAQs", "https://www.accaglobal.com/gb/en/student/practical-experience-per/faqs-practical-experience-requirement.html"]])}
`,
  },
  {
    slug: "us-cpa-jobs-in-india-roles",
    title: "US CPA Jobs in India: Audit, Tax, Accounting and Advisory Roles",
    category: "Career",
    excerpt:
      "The main job families open to US CPA candidates and licensees in India — what each role does, which CPA sections it uses, the employers that hire for it, and the skills that get you hired.",
    crux: [
      "Audit and assurance: US GAAP audit support, PCAOB-compliant documentation, reviews — FAR, AUD, BAR.",
      "Tax: US federal and state compliance and planning for individuals, partnerships and corporations — REG, TCP.",
      "Accounting and reporting: Controllership, consolidation, US GAAP reporting packages and SEC reporting support in global capability centres — FAR, BAR.",
      "Risk and technology: SOX testing, internal audit, IT general controls, SOC 1 and SOC 2 — AUD, ISC.",
      "Advisory: Technical accounting, due diligence and transaction support — FAR, BAR.",
    ],
    content: `
<h2>Job families and how they map to the exam</h2>
<table>
<thead><tr><th>Job family</th><th>Typical tasks</th><th>Most relevant sections</th><th>Typical employers</th></tr></thead>
<tbody>
<tr><td>Audit and assurance</td><td>Performing audit procedures for US clients, documentation, financial statement reviews, SEC filings support</td><td>FAR, AUD, BAR</td><td>Big Four and mid-tier firms' US practices and delivery centres</td></tr>
<tr><td>US tax</td><td>Forms 1040, 1065, 1120, 1120-S; state returns; tax provisions; partnership allocations; tax research</td><td>REG, TCP</td><td>Firms' US tax practices, US tax outsourcing companies</td></tr>
<tr><td>Accounting and reporting</td><td>Month-end close, consolidations, US GAAP reporting packages, technical memos, SEC reporting support</td><td>FAR, BAR</td><td>Global capability centres (GCCs) of US multinationals</td></tr>
<tr><td>Risk advisory and internal audit</td><td>SOX 404 testing, process walkthroughs, control design, internal audit plans</td><td>AUD, ISC</td><td>Firms' risk practices, GCC internal audit teams</td></tr>
<tr><td>Technology risk</td><td>IT general controls, application controls, SOC 1 and SOC 2 reports, cybersecurity assessments</td><td>ISC, AUD</td><td>Firms' technology risk practices</td></tr>
<tr><td>Transaction and accounting advisory</td><td>Due diligence, purchase price allocations, ASC 606 and 842 implementations</td><td>FAR, BAR</td><td>Advisory practices of large and mid-tier firms</td></tr>
<tr><td>FP&amp;A</td><td>Budgeting, forecasting, variance analysis, business partnering</td><td>BAR (plus CMA-type skills)</td><td>GCCs and Indian companies with US operations</td></tr>
</tbody>
</table>

<h2>Skills that get you hired</h2>
<ul>
<li><strong>Technical:</strong> US GAAP, US auditing standards, US tax forms — evidenced by passed CPA sections.</li>
<li><strong>Tools:</strong> Excel and data analytics, ERP systems, audit and tax software.</li>
<li><strong>Communication:</strong> written English for memos and client emails; comfort working with US teams across time zones.</li>
<li><strong>Documentation discipline:</strong> particularly for PCAOB-inspected audit work.</li>
</ul>

<h2>How to approach the market</h2>
<ol>
<li>Pass one or two sections before applying, matching your target job family.</li>
<li>Choose your Discipline to fit: ISC for technology risk, TCP for tax, BAR for reporting and assurance.</li>
<li>Highlight US-facing experience — even internships on US clients.</li>
<li>Ask about CPA support and experience verification for licensure.</li>
</ol>

<h2>Outlook</h2>
<p>The US Bureau of Labor Statistics projects 5% growth in US accountant and auditor employment over 2025–35 — faster than average — and notes that a CPA licence may improve job prospects. Much of the related work is performed by teams in India.</p>

<p>Related: <a href="/blog/us-cpa-career-opportunities-big-four-india">Big Four opportunities</a> and <a href="/blog/us-cpa-salary-in-india-roles-experience">salary and career paths</a>.</p>

${sources([BLS, AICPA_BLUEPRINTS, AICPA_PASS])}
`,
  },
  {
    slug: "how-indian-cas-use-us-gaap-and-cpa-knowledge",
    title: "How Indian CAs Can Use US GAAP and US CPA Knowledge in Their Careers",
    category: "Career",
    excerpt:
      "Practical ways Indian CAs put US GAAP, US auditing and US tax knowledge to work — Ind AS-to-US GAAP reporting, component audits for US groups, SOX, US tax and cross-border advice.",
    crux: [
      "Reporting packages: Indian subsidiaries of US groups report to their parents under US GAAP — CAs who know both Ind AS and US GAAP handle the conversion.",
      "Component audits: Indian firms audit Indian components of US groups under US auditing standards and group auditor instructions.",
      "SOX and controls: Indian operations of US-listed companies fall within SOX 404 scope — CPA audit and ISC knowledge applies directly.",
      "US tax: Outsourced US tax compliance, and advising Indian residents with US tax obligations (and US persons with Indian assets).",
      "Credential: The CPA turns this knowledge into a recognised credential — useful for promotion and mobility.",
    ],
    content: `
<h2>1. Ind AS to US GAAP reporting</h2>
<p>An Indian subsidiary of a US company keeps its statutory books under Ind AS (or Indian Accounting Standards) but reports monthly or quarterly to its parent under US GAAP. Somebody has to identify and adjust the differences — inventory methods, leases, impairment, development costs, provisions. A CA with US GAAP knowledge is ideally placed. See <a href="/blog/us-gaap-vs-ind-as-key-differences">US GAAP vs Ind AS</a>.</p>

<h2>2. Component audits for US groups</h2>
<p>When a US group audit includes an Indian subsidiary, an Indian firm often audits that component to the group auditor's instructions and materiality, under US auditing standards (AICPA for private groups, PCAOB for public companies). The AICPA's new group audit standard, SAS No. 149, applies to audits of group financial statements for periods ending on or after December 15, 2026, increasing the group auditor's involvement with component auditors.</p>

<h2>3. SOX and internal controls</h2>
<p>US-listed companies must report on internal control over financial reporting under Section 404 of the Sarbanes-Oxley Act, and their Indian operations are often in scope. CAs who understand the COSO framework, IT general controls and PCAOB AS 2201 lead SOX testing, remediation and internal audit work. See <a href="/blog/coso-internal-control-framework">the COSO framework</a>.</p>

<h2>4. US tax</h2>
<ul>
<li><strong>Outsourced compliance</strong> — preparing US federal and state returns for US CPA firms.</li>
<li><strong>Cross-border individuals</strong> — US citizens and residents must report worldwide income and may need to file a Report of Foreign Bank and Financial Accounts (FBAR) with FinCEN if the aggregate value of their foreign accounts exceeds $10,000 at any time in the year. Advising such clients requires both Indian and US tax knowledge, including the foreign tax credit and the US–India tax treaty.</li>
</ul>

<h2>5. Technical accounting and transactions</h2>
<p>Acquisitions by US companies of Indian businesses need purchase price allocations under ASC 805, US GAAP opening balance sheets and due diligence on US GAAP-relevant risks — work that benefits from both perspectives.</p>

<h2>Turning knowledge into a credential</h2>
<p>Experience helps, but the CPA provides a recognisable signal to US engagement leaders and employers. Read <a href="/blog/can-indian-chartered-accountant-become-us-cpa">can an Indian CA become a US CPA?</a> and <a href="/blog/us-cpa-study-plan-for-indian-ca-students">the CPA study plan for CAs</a>.</p>

${sources([ICAI_SCHEME, ["AICPA & CIMA — Statements on Auditing Standards currently effective (including SAS No. 149)", "https://www.aicpa-cima.com/resources/download/aicpa-statements-on-auditing-standards-currently-effective"], ["PCAOB — AS 2201, An Audit of Internal Control Over Financial Reporting", "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"], ["FinCEN (US Treasury) — Report of Foreign Bank and Financial Accounts (FBAR)", "https://www.fincen.gov/report-foreign-bank-and-financial-accounts"], ["IRS — Publication 514, Foreign Tax Credit for Individuals", "https://www.irs.gov/publications/p514"]])}
`,
  },
];
