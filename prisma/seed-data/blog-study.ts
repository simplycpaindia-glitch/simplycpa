import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";
import { AICPA_BLUEPRINTS, AICPA_PASS, NASBA_FAQ } from "./blog-india";

const AICPA_SAMPLE: [string, string] = ["AICPA & CIMA — Practise with the CPA Exam sample tests", "https://www.aicpa-cima.com/resources/article/get-familiar-with-the-cpa-exam-by-practicing-with-our-sample-tests"];
const AICPA_SCORING: [string, string] = ["AICPA & CIMA — CPA Exam scoring and pass rates", "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates"];
const NASBA_STRATEGY: [string, string] = ["NASBA — How to strategically approach each section of the CPA Exam", "https://nasba.org/blog/2026/04/01/how-to-strategically-approach-each-section-of-the-cpa-exam/"];
const ICAI_SCHEME: [string, string] = ["ICAI — Scheme of Education and Training", "https://www.icai.org/post/scheme-of-education-and-training"];

/** Area weights published in the AICPA blueprints (2024 onward; check the current PDF). */
const DISCIPLINE_WEIGHTS = `
<table>
<thead><tr><th>Discipline</th><th>Content areas and allocation</th><th>Format</th><th>2025 pass rate</th></tr></thead>
<tbody>
<tr><td>BAR — Business Analysis and Reporting</td><td>Business analysis 40–50%; Technical accounting and reporting 35–45%; State and local governments 10–20%</td><td>50 MCQ, 7 TBS</td><td>About 42%</td></tr>
<tr><td>ISC — Information Systems and Controls</td><td>Information systems and data management 35–45%; Security, confidentiality and privacy 35–45%; Considerations for SOC engagements 15–25%</td><td>82 MCQ, 6 TBS (scored 60/40)</td><td>About 68%</td></tr>
<tr><td>TCP — Tax Compliance and Planning</td><td>Individual tax compliance and planning, and personal financial planning 30–40%; Entity tax compliance 30–40%; Entity tax planning 10–20%; Property transactions 10–20%</td><td>68 MCQ, 7 TBS</td><td>About 78%</td></tr>
</tbody>
</table>`;

export const studyPosts: BlogSeed[] = [
  {
    slug: "far-vs-aud-vs-reg-which-to-start-with",
    title: "FAR vs AUD vs REG: Which CPA Section Should You Study First?",
    category: "Study Strategy",
    excerpt:
      "How the three Core sections compare on content, format and pass rates, the case for starting with each, how your Discipline choice affects the order, and sequences that work for Indian candidates.",
    crux: [
      "FAR first: The broadest section with the lowest pass rate (about 42% in 2025); its content supports AUD and BAR.",
      "AUD first: Largely standalone and judgement-heavy (about 48%); a good start if you're an auditor or a CA with audit experience.",
      "REG first: Highest Core pass rate (about 63%); best if TCP is your Discipline or you work in US tax.",
      "Pair with your Discipline: FAR → BAR, REG → TCP; ISC pairs naturally with AUD.",
      "What matters more than order: Start with the section where you have the most momentum, and keep moving — the 30-month credit window rewards steady progress.",
    ],
    content: `
<h2>The three Core sections compared</h2>
<table>
<thead><tr><th></th><th>FAR</th><th>AUD</th><th>REG</th></tr></thead>
<tbody>
<tr><td>Focus</td><td>US GAAP financial reporting, including governmental and not-for-profit</td><td>Audit process, ethics, attestation, reporting</td><td>US federal tax, business law, ethics</td></tr>
<tr><td>Format</td><td>50 MCQ, 7 TBS</td><td>78 MCQ, 7 TBS</td><td>72 MCQ, 8 TBS</td></tr>
<tr><td>Skill emphasis</td><td>Application and analysis (calculations, entries)</td><td>Remembering, understanding and judgement — the only section testing evaluation</td><td>Application (computations) and rules recall</td></tr>
<tr><td>2025 pass rate</td><td>About 42%</td><td>About 48%</td><td>About 63%</td></tr>
</tbody>
</table>

<h2>The case for FAR first</h2>
<ul>
<li>It's the largest body of material — getting it done early removes the biggest risk to your credit window.</li>
<li>Financial reporting concepts underpin AUD (what you're auditing) and BAR (advanced reporting).</li>
<li>Your motivation and study energy are usually highest at the start.</li>
</ul>

<h2>The case for AUD first</h2>
<ul>
<li>Auditors and CAs with audit experience often find AUD's logic familiar.</li>
<li>It's less dependent on other sections, so it works as a confidence-building first pass.</li>
<li>Pair it with ISC if you're choosing that Discipline — SOC reports and IT controls overlap.</li>
</ul>

<h2>The case for REG first</h2>
<ul>
<li>It has the highest Core pass rate.</li>
<li>If your Discipline is TCP, taking REG first and TCP next lets you reuse tax knowledge immediately.</li>
<li>Tax professionals in US outsourcing roles see REG topics daily at work.</li>
</ul>

<h2>Sequences that work</h2>
<table>
<thead><tr><th>Your background</th><th>Suggested order</th></tr></thead>
<tbody>
<tr><td>Indian CA or audit professional</td><td>AUD → FAR → BAR or ISC → REG</td></tr>
<tr><td>Financial reporting / controllership</td><td>FAR → BAR → AUD → REG</td></tr>
<tr><td>US tax professional</td><td>REG → TCP → FAR → AUD</td></tr>
<tr><td>IT audit / risk</td><td>AUD → ISC → FAR → REG</td></tr>
</tbody>
</table>

<h2>Schedule around the Discipline windows</h2>
<p>Discipline sections can only be taken in January, April, July and October. Plan Core sections around your chosen Discipline window rather than the other way round, and remember there's no testing from July 1 to 11, 2027, during the platform change.</p>

<div class="callout callout-tip">
<p><strong>The real rule:</strong> most boards give you 30 months from your first passing score. The order matters less than finishing within it — pick a sensible start and keep momentum.</p>
</div>

${sources([AICPA_BLUEPRINTS, AICPA_PASS, NASBA_FAQ, NASBA_STRATEGY])}
`,
  },
  {
    slug: "how-to-choose-your-cpa-discipline",
    title: "BAR vs ISC vs TCP: How to Choose Your CPA Discipline",
    category: "Exam Updates",
    excerpt:
      "What each Discipline covers, its content weights, format and pass rate, how each maps to careers in India, and a simple framework for choosing — plus the testing-window rules.",
    crux: [
      "Same licence: All three Disciplines lead to the same CPA licence — the choice is about fit and career.",
      "BAR: Advanced financial reporting, data and business analysis, and state and local governments — the deepest technical section; about 42% passed in 2025.",
      "ISC: Information systems, data management, security and privacy, and SOC engagements; about 68% passed in 2025, scored 60% MCQ / 40% TBS.",
      "TCP: Advanced individual and entity tax compliance and planning; about 78% passed in 2025.",
      "Windows: Disciplines can only be taken in January, April, July and October — plan around them.",
    ],
    content: `
<h2>The three Disciplines at a glance</h2>
${DISCIPLINE_WEIGHTS}
<p>Area weights are from the AICPA blueprints; check the current blueprint PDF for any refinements.</p>

<h2>Who each Discipline suits</h2>
<h3>BAR — Business Analysis and Reporting</h3>
<p>An extension of FAR: financial statement analysis, budgeting and variance analysis, data analytics, and technical topics such as business combinations, derivatives, pensions and stock compensation, plus governmental accounting. Suits financial reporting, technical accounting, valuation, FP&amp;A and assurance careers. It's widely regarded as the most demanding Discipline, and its pass rate is the lowest of the three.</p>

<h3>ISC — Information Systems and Controls</h3>
<p>IT governance, data management, cybersecurity, privacy and SOC 1/SOC 2 engagements. Suits IT audit, technology risk, SOX and controls work — a growing area in Indian delivery centres. Candidates with IT or process backgrounds often find it intuitive.</p>

<h3>TCP — Tax Compliance and Planning</h3>
<p>Deeper US tax for individuals (including gift tax and personal financial planning) and entities (C and S corporations, partnerships, trusts, exempt organisations), with a planning focus. The clear choice for US tax careers. See <a href="/blog/tcp-vs-reg-topics-difficulty-candidate-fit">how TCP differs from REG</a>.</p>

<h2>A simple decision framework</h2>
<ol>
<li><strong>Career first</strong> — which role do you want in five years? Reporting → BAR; IT audit or risk → ISC; tax → TCP.</li>
<li><strong>Strength second</strong> — which Core section felt most natural? FAR → BAR; REG → TCP; AUD with a technology bent → ISC.</li>
<li><strong>Timing third</strong> — pair your Discipline with the related Core section and book the next available window.</li>
</ol>

<h2>Pass rates aren't the whole story</h2>
<p>The AICPA says pass rates reflect candidate preparedness rather than exam difficulty. TCP's high rate partly reflects that most TCP candidates already work in tax. Choose the Discipline that fits your career, not the one with the best statistics.</p>

<h2>Testing-window rules</h2>
<ul>
<li>BAR, ISC and TCP are scheduled only in the first month of each quarter.</li>
<li>Scores are released about six weeks after the window closes.</li>
<li>A failed Discipline can only be retaken in a later window — so a fail costs at least three months.</li>
</ul>

${sources([AICPA_BLUEPRINTS, AICPA_PASS, AICPA_SCORING, NASBA_FAQ])}
`,
  },
  {
    slug: "how-many-hours-each-cpa-section-requires",
    title: "How Many Hours Does Each US CPA Exam Section Require?",
    category: "Study Strategy",
    excerpt:
      "Realistic study-hour ranges for FAR, AUD, REG, BAR, ISC and TCP, what moves you up or down the range, and how to turn hours into a weekly schedule.",
    crux: [
      "No official figure: The AICPA doesn't publish study hours — the ranges here are SimplyCPA estimates based on syllabus size, format and pass rates.",
      "Our ranges: FAR 120–160; AUD 100–140; REG 100–140; BAR 110–150; ISC 80–120; TCP 90–130.",
      "Total: About 400–580 hours for all four sections, depending on your Discipline and background.",
      "What changes it: Your academic background, CA or work experience, how recently you studied, and whether you practise simulations from the start.",
      "Weekly maths: 15 hours a week → about 8–10 weeks per section; 20 hours a week → about 6–8 weeks.",
    ],
    content: `
<h2>Estimated hours by section</h2>
<table>
<thead><tr><th>Section</th><th>Estimated hours</th><th>Why</th></tr></thead>
<tbody>
<tr><td>FAR</td><td>120–160</td><td>Broadest syllabus; heavy on calculations; includes governmental and not-for-profit accounting</td></tr>
<tr><td>AUD</td><td>100–140</td><td>Many standards to learn precisely; judgement-heavy questions</td></tr>
<tr><td>REG</td><td>100–140</td><td>US tax and business law are new to most Indian candidates</td></tr>
<tr><td>BAR</td><td>110–150</td><td>Advanced technical accounting plus analysis and governmental topics</td></tr>
<tr><td>ISC</td><td>80–120</td><td>Conceptual; faster for candidates with IT or controls experience</td></tr>
<tr><td>TCP</td><td>90–130</td><td>Builds on REG; faster if taken soon after it</td></tr>
</tbody>
</table>
<p>These are our estimates — the AICPA doesn't publish recommended study hours. Pass rates (FAR about 42%, BAR about 42%, AUD about 48%, REG about 63%, ISC about 68%, TCP about 78% in 2025) are one input; syllabus size is another.</p>

<h2>What moves you up or down the range</h2>
<ul>
<li><strong>Lower end:</strong> recent relevant study (CA, US GAAP work), daily exposure to the content at work, consistent schedule, early practice of simulations.</li>
<li><strong>Upper end:</strong> long gap since studying, content new to you (US tax for most Indian candidates), inconsistent schedule, starting simulations late.</li>
</ul>

<h2>Turning hours into weeks</h2>
<table>
<thead><tr><th>Hours per week</th><th>FAR (140 hrs)</th><th>AUD (120 hrs)</th><th>ISC (100 hrs)</th></tr></thead>
<tbody>
<tr><td>10</td><td>14 weeks</td><td>12 weeks</td><td>10 weeks</td></tr>
<tr><td>15</td><td>9–10 weeks</td><td>8 weeks</td><td>7 weeks</td></tr>
<tr><td>20</td><td>7 weeks</td><td>6 weeks</td><td>5 weeks</td></tr>
</tbody>
</table>

<h2>How to spend the hours</h2>
<ol>
<li><strong>Learn (about 50%)</strong> — read notes, watch lectures, work examples topic by topic.</li>
<li><strong>Practise (about 30%)</strong> — MCQs after every topic and at least one simulation per topic.</li>
<li><strong>Review (about 20%)</strong> — final two weeks of mixed questions, revision sheets and a full timed mock exam.</li>
</ol>

<div class="callout callout-tip">
<p><strong>Track it:</strong> log hours by topic and your question accuracy. If a topic is below about 70% accuracy after practice, it needs more hours — regardless of the plan. See <a href="/blog/track-cpa-exam-progress-study-dashboard">tracking your progress</a>.</p>
</div>

${sources([AICPA_BLUEPRINTS, AICPA_PASS])}
`,
  },
  {
    slug: "us-cpa-study-plan-working-professionals-6-month",
    title: "US CPA Study Plan for Working Professionals: A 6-Month Framework",
    category: "Study Strategy",
    excerpt:
      "A practical six-month framework for passing two sections while working full-time — weekly hours, a month-by-month plan, a sample week, and how to adjust when work gets busy.",
    crux: [
      "The goal: Two sections in six months — about 12–13 weeks per section at 12–15 hours a week.",
      "Weekly rhythm: Short weekday sessions (60–90 minutes) for learning, longer weekend blocks for practice and simulations.",
      "Each section: Weeks 1–9 learn and practise topic by topic; weeks 10–11 mixed review; week 12 full mock exam and weak areas; then sit.",
      "Busy season: Plan around it — schedule sections outside peak months and keep a minimum of 5 hours a week to stay warm.",
      "Over 12 months: Repeat the framework for sections three and four — finishing well inside the 30-month credit window.",
    ],
    content: `
<h2>Why six months for two sections</h2>
<p>For most working professionals, 12–15 hours a week is sustainable. At roughly 120–140 hours per section, that's about 10–12 weeks each — two sections in six months, all four in about a year, comfortably inside the 30-month credit window most boards allow.</p>

<h2>The six-month framework</h2>
<table>
<thead><tr><th>Month</th><th>Focus</th></tr></thead>
<tbody>
<tr><td>Month 1</td><td>Section 1: learn and practise the first third of topics; book your exam date for the end of month 3</td></tr>
<tr><td>Month 2</td><td>Section 1: remaining topics; start simulations every weekend</td></tr>
<tr><td>Month 3</td><td>Section 1: two weeks of mixed review, a full timed mock exam, then sit the exam</td></tr>
<tr><td>Month 4</td><td>Section 2: start immediately (don't wait for the score); learn first half of topics</td></tr>
<tr><td>Month 5</td><td>Section 2: remaining topics and simulations</td></tr>
<tr><td>Month 6</td><td>Section 2: review, mock exam, sit; check the section 1 score and plan the next six months</td></tr>
</tbody>
</table>

<h2>A sample week (14 hours)</h2>
<table>
<thead><tr><th>Day</th><th>Session</th></tr></thead>
<tbody>
<tr><td>Monday–Thursday</td><td>75 minutes each: one sub-topic — read notes, work examples, 15–20 MCQs</td></tr>
<tr><td>Friday</td><td>Rest, or 45 minutes reviewing flagged questions</td></tr>
<tr><td>Saturday</td><td>4 hours: finish the week's topic, two simulations, review every wrong answer</td></tr>
<tr><td>Sunday</td><td>3.5 hours: cumulative MCQ quiz on all topics so far; update your revision sheet</td></tr>
</tbody>
</table>

<h2>Rules that keep the plan alive</h2>
<ul>
<li><strong>Book the exam early.</strong> A date creates urgency; NASBA recommends booking 45 days ahead.</li>
<li><strong>Don't wait for scores.</strong> Start the next section the week after your exam.</li>
<li><strong>Protect a minimum.</strong> In heavy work weeks, do at least 5 hours of MCQs so you don't forget.</li>
<li><strong>Plan around busy season.</strong> For US tax and audit teams, January–April is often the busiest period — schedule lighter sections or review phases then.</li>
<li><strong>Use the Discipline windows.</strong> If one of your two sections is BAR, ISC or TCP, align its exam with January, April, July or October.</li>
</ul>

<h2>Adjusting when you fall behind</h2>
<ol>
<li>Move the exam date only if you're more than two weeks behind — and only 61+ days out to avoid Prometric fees.</li>
<li>Cut low-weight topics to a summary level; never skip high-weight areas.</li>
<li>Keep simulations — they're 50% of your score in most sections.</li>
</ol>

<p>For tactics on fitting study around a job, read <a href="/blog/how-to-prepare-for-cpa-exam-while-working-full-time">how to prepare while working full-time</a>.</p>

${sources([AICPA_BLUEPRINTS, NASBA_FAQ, AICPA_SCORING])}
`,
  },
  {
    slug: "us-cpa-study-plan-for-indian-ca-students",
    title: "US CPA Study Plan for Indian CA Students",
    category: "Study Strategy",
    excerpt:
      "How CA students and newly qualified CAs can plan CPA study around ICAI's exam calendar and articleship, which sections to start with, and how to unlearn Ind AS and Indian tax habits.",
    crux: [
      "Eligibility first: Your US CPA eligibility depends on your university degrees, so plan the degree route before the study plan.",
      "Timing: ICAI exams run in January, May and September; CPA Disciplines in January, April, July and October — avoid clashes.",
      "Start where CA helps: AUD or FAR first uses what you know from CA Intermediate and Final.",
      "Watch the differences: US GAAP vs Ind AS (LIFO, revaluation, impairment reversals, leases), US GAAS vs SAs, and US tax — REG is effectively new material.",
      "Sample plan: Finish CA first, then four CPA sections in 9–12 months while working, with REG last and given the most time.",
    ],
    content: `
<h2>Step 0: make sure you're eligible</h2>
<p>US boards assess your university education, not your CA progress — several boards don't accept CA coursework at all. Read <a href="/blog/us-cpa-eligibility-for-indian-ca-students">US CPA eligibility for CA students</a> before planning study time.</p>

<h2>Fitting CPA around CA</h2>
<ul>
<li>ICAI holds Foundation, Intermediate and Final exams in January, May and September; articleship under the new scheme is two years.</li>
<li>CPA Core sections can be scheduled any month; Disciplines only in January, April, July and October.</li>
<li>Most candidates are best served by <strong>finishing CA Final first</strong> — the CPA's 30-month credit window doesn't start until you pass your first section, so there's no benefit to starting early and splitting focus.</li>
<li>If you start during articleship, take one Core section at a time in months clear of ICAI attempts.</li>
</ul>

<h2>Which section first?</h2>
<table>
<thead><tr><th>Section</th><th>How much CA helps</th><th>What's new</th></tr></thead>
<tbody>
<tr><td>AUD</td><td>High — risk, evidence, reporting logic mirror Standards on Auditing</td><td>AU-C and PCAOB standards, US independence rules, SOC reports, US report wording</td></tr>
<tr><td>FAR</td><td>High for concepts</td><td>US GAAP specifics, governmental and not-for-profit accounting</td></tr>
<tr><td>BAR</td><td>Medium-high (financial management, costing)</td><td>US technical topics, data analytics, state and local governments</td></tr>
<tr><td>REG</td><td>Low</td><td>US federal tax, US business law, Circular 230</td></tr>
</tbody>
</table>
<p>A common sequence for CAs: <strong>AUD → FAR → BAR → REG</strong>, giving REG the most time at the end.</p>

<h2>Habits to unlearn</h2>
<ul>
<li><strong>Inventory</strong> — US GAAP allows LIFO and prohibits reversing write-downs.</li>
<li><strong>PP&amp;E</strong> — no revaluation model under US GAAP.</li>
<li><strong>Impairment</strong> — two-step recoverability test; no reversals for assets held and used.</li>
<li><strong>Leases</strong> — US lessees still classify finance vs operating leases.</li>
<li><strong>Provisions</strong> — "probable" means likely, a higher bar than Ind AS 37's more-likely-than-not.</li>
<li><strong>Audit reports</strong> — US wording, section order and terms (e.g. "emphasis-of-matter", "substantial doubt about going concern") differ from SA 700-series practice in detail.</li>
</ul>
<p>See <a href="/blog/us-gaap-vs-ind-as-key-differences">US GAAP vs Ind AS</a>.</p>

<h2>Sample 10-month plan after CA Final</h2>
<table>
<thead><tr><th>Months</th><th>Section</th><th>Hours/week</th></tr></thead>
<tbody>
<tr><td>1–2</td><td>AUD (CA advantage — aim for 100–110 hours)</td><td>12–15</td></tr>
<tr><td>3–5</td><td>FAR (aim for 130 hours)</td><td>12–15</td></tr>
<tr><td>6–7</td><td>BAR — sit in the July or October window</td><td>15</td></tr>
<tr><td>8–10</td><td>REG (aim for 130–140 hours — new content)</td><td>12–15</td></tr>
</tbody>
</table>

${sources([ICAI_SCHEME, AICPA_BLUEPRINTS, NASBA_FAQ, AICPA_PASS])}
`,
  },
  {
    slug: "how-to-prepare-for-cpa-exam-while-working-full-time",
    title: "How to Prepare for the CPA Exam While Working Full-Time",
    category: "Study Strategy",
    excerpt:
      "Practical tactics for studying around a full-time job — finding hours, studying in short blocks, using your commute, managing busy season, getting employer support and avoiding burnout.",
    crux: [
      "Find hours you already have: Early mornings, lunch breaks and commutes add up to 6–8 hours a week before weekends.",
      "Study in short blocks: 45–75 minute sessions on one sub-topic beat occasional long sessions.",
      "Practice over passive review: Questions and simulations build exam skill — re-reading notes doesn't.",
      "Use your employer: Ask about fee reimbursement, study leave before exams and lighter allocation in exam weeks.",
      "Protect your health: Sleep, one rest day a week and planned breaks between sections prevent burnout.",
    ],
    content: `
<h2>1. Audit your week</h2>
<p>Track one normal week. Most professionals find time they didn't know they had:</p>
<ul>
<li>Early morning (45–60 minutes before work) — often the most reliable slot.</li>
<li>Commute (30–60 minutes) — flashcards, audio summaries or MCQs on your phone.</li>
<li>Lunch (20–30 minutes) — 10–15 MCQs.</li>
<li>Weekends — two longer blocks for simulations and review.</li>
</ul>

<h2>2. Make every session count</h2>
<ul>
<li><strong>One sub-topic per session</strong> — e.g. "bond premium amortisation", not "long-term debt".</li>
<li><strong>Active recall</strong> — close the notes and write out the rule or journal entry from memory.</li>
<li><strong>Questions in every session</strong> — even 10 MCQs at the end.</li>
<li><strong>Review mistakes the same day</strong> — see <a href="/blog/how-to-review-cpa-mcqs-wrong-answers">how to review MCQs</a>.</li>
</ul>

<h2>3. Plan around work peaks</h2>
<ul>
<li>Know your busy season (for US tax and audit teams, typically January to April) and plan lighter study or review phases then.</li>
<li>Schedule exams just before peaks rather than during them.</li>
<li>In crunch weeks, switch to a minimum: 20 MCQs a day keeps the material fresh.</li>
</ul>

<h2>4. Get support at work</h2>
<ul>
<li>Ask whether your employer reimburses exam fees or review courses, offers study leave before an exam, or can reduce allocation in exam week.</li>
<li>Let your manager know your exam dates early.</li>
<li>Find a study partner at work — accountability helps.</li>
<li>Ask whether a licensed CPA at your firm can later verify your experience for licensure.</li>
</ul>

<h2>5. Avoid burnout</h2>
<ul>
<li>Take one full day off each week.</li>
<li>Protect sleep — memory consolidation depends on it.</li>
<li>Take a short planned break (one week) after each exam before starting the next section.</li>
<li>Expect a bad week; the plan should survive it.</li>
</ul>

<h2>6. Use work as study</h2>
<p>Notice where your work touches exam content — a lease agreement, a tax return, a control test. Explaining your work in exam terms is excellent revision.</p>

<p>For a full schedule, see <a href="/blog/us-cpa-study-plan-working-professionals-6-month">the 6-month framework for working professionals</a>.</p>

${sources([AICPA_BLUEPRINTS, NASBA_FAQ, ["US Bureau of Labor Statistics — Accountants and Auditors: work environment", "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm"]])}
`,
  },
  {
    slug: "how-to-use-aicpa-cpa-exam-blueprints",
    title: "How to Use the AICPA CPA Exam Blueprints for Studying",
    category: "Study Strategy",
    excerpt:
      "What the blueprints contain — areas, groups, topics, representative tasks and skill levels — and how to turn them into a study plan, a checklist and a way to judge your readiness.",
    crux: [
      "What they are: The official AICPA documents that define everything tested in each section — organised by area, group and topic, with score weightings.",
      "Representative tasks: Each topic lists tasks with a skill level — Remembering and Understanding, Application, Analysis or Evaluation.",
      "Use the weights: Allocate study time in proportion to area weights, not to how interesting a topic is.",
      "Use the skill levels: A topic tested at Application needs practice problems; one tested at Remembering needs precise definitions.",
      "Stay current: Blueprints are published one to two times a year — the AICPA has issued 2026 and 2027 versions, plus notices on testing new standards and tax law.",
    ],
    content: `
<h2>What's in a blueprint</h2>
<p>The AICPA publishes a blueprint for each of the six sections. According to the AICPA, each contains:</p>
<ul>
<li>content organised by <strong>Area, Group and Topic</strong>, with score weighting;</li>
<li><strong>representative task statements</strong> describing what a newly licensed CPA should be able to do;</li>
<li>the <strong>skill level</strong> for each task;</li>
<li>reference materials;</li>
<li>the number of MCQs and TBSs and the score weighting of each item type.</li>
</ul>

<h2>The four skill levels</h2>
<table>
<thead><tr><th>Skill level</th><th>What it means</th><th>How to study it</th></tr></thead>
<tbody>
<tr><td>Remembering and Understanding</td><td>Recall and explain concepts</td><td>Definitions, lists, flashcards</td></tr>
<tr><td>Application</td><td>Use concepts to solve routine problems</td><td>Worked examples and calculation practice</td></tr>
<tr><td>Analysis</td><td>Examine relationships, find patterns and inconsistencies</td><td>Multi-step problems, simulations, document review</td></tr>
<tr><td>Evaluation</td><td>Judge and conclude using professional scepticism (tested in AUD)</td><td>Case-based questions, report decisions</td></tr>
</tbody>
</table>

<h2>Turning a blueprint into a plan</h2>
<ol>
<li><strong>List the areas and weights.</strong> For FAR: Financial Reporting 30–40%, Select Balance Sheet Accounts 30–40%, Select Transactions 25–35%.</li>
<li><strong>Allocate hours by weight.</strong> If you plan 140 hours for FAR, about 50 go to each of the first two areas and 40 to the third.</li>
<li><strong>Build a checklist</strong> of every topic and representative task. Tick each one only when you can do the task, not when you've read about it.</li>
<li><strong>Match practice to skill level.</strong> If a task says "Calculate…", practise calculations; if it says "Identify…", practise recognition.</li>
<li><strong>Find gaps before the exam.</strong> In the final two weeks, go through the checklist and drill any task you can't perform confidently.</li>
</ol>

<div class="callout callout-example">
<p><strong>Example:</strong> A FAR representative task asks you to calculate and record lease transactions for a lessee. That tells you to practise building lease amortisation schedules and journal entries — not just to read about lease classification.</p>
</div>

<h2>Keeping current</h2>
<ul>
<li>The AICPA publishes blueprints one to two times a year. Check which version applies to your exam date.</li>
<li>Its policy on new pronouncements explains when new standards and tax law become testable — for example, One Big Beautiful Bill Act provisions with 2024–25 effective dates became testable in REG and TCP from July 1, 2026.</li>
<li>Separate notices explain how specific changes (such as the QC 1000 quality management standard and H.R. 1) are tested.</li>
</ul>

<p>Our <a href="/cpa">study notes</a> are organised to follow the blueprints, topic by topic.</p>

${sources([AICPA_BLUEPRINTS, ["AICPA & CIMA — Learn what to study for the CPA Exam (blueprint downloads)", "https://www.aicpa-cima.com/resources/download/learn-what-is-tested-on-the-cpa-exam"], NASBA_STRATEGY])}
`,
  },
  {
    slug: "us-cpa-exam-mistakes-that-waste-study-time",
    title: "US CPA Exam Mistakes That Waste Study Time",
    category: "Study Strategy",
    excerpt:
      "Twelve common mistakes — from studying without the blueprint to leaving simulations to the end — and what to do instead, so your study hours turn into marks.",
    crux: [
      "Ignoring the blueprint: Studying what's interesting instead of what's weighted.",
      "Passive study: Re-reading and highlighting instead of answering questions and recalling from memory.",
      "Simulations last: TBSs are half your score in most sections — practise them from week one.",
      "Not reviewing mistakes: Doing thousands of questions without understanding why you got them wrong.",
      "Admin errors: Letting an NTS expire, booking too late, or applying for a section you can't sit within six months.",
    ],
    content: `
<h2>Study mistakes</h2>
<ol>
<li><strong>Studying without the blueprint.</strong> Spending a week on a topic weighted 5% while skimming one weighted 30%. Fix: allocate time by blueprint weight. See <a href="/blog/how-to-use-aicpa-cpa-exam-blueprints">using the blueprints</a>.</li>
<li><strong>Passive learning.</strong> Watching lectures and highlighting feels productive but builds little exam skill. Fix: after every session, close your notes and answer questions.</li>
<li><strong>Leaving simulations to the end.</strong> TBSs are 50% of the score in five sections (40% in ISC). Fix: one or two simulations per topic from the start.</li>
<li><strong>Counting questions instead of learning from them.</strong> Fix: review every wrong answer and every lucky guess — see <a href="/blog/how-to-review-cpa-mcqs-wrong-answers">how to review MCQs</a>.</li>
<li><strong>Memorising answers.</strong> Repeating the same question bank until you remember answers inflates your scores. Fix: track first-attempt accuracy.</li>
<li><strong>Studying Ind AS or Indian tax by mistake.</strong> Indian candidates often apply familiar rules. Fix: note every US–India difference as you meet it.</li>
<li><strong>Skipping governmental and not-for-profit accounting.</strong> It's consistently tested in FAR (and BAR). Fix: give it its own block of time.</li>
<li><strong>No full mock exam.</strong> Fix: take at least one timed, four-hour practice exam — the AICPA's free sample tests use the real interface.</li>
<li><strong>Cramming everything into the last week.</strong> Fix: cumulative quizzes each weekend so early topics stay fresh.</li>
</ol>

<h2>Exam-day mistakes</h2>
<ol start="10">
<li><strong>Poor time management.</strong> Fix: plan time per testlet (e.g. in AUD, about 1.25 minutes per MCQ) and keep the 15-minute standard break.</li>
<li><strong>Leaving questions blank.</strong> There's no penalty for wrong answers — always answer.</li>
</ol>

<h2>Admin mistakes</h2>
<ol start="12">
<li><strong>Wasting fees and time on logistics.</strong> Applying for a section you can't sit before the NTS expires (no refunds or extensions), booking too late for a Discipline window, or rescheduling inside 60 days (Prometric fees). Fix: apply when ready, book 45 days ahead, and plan Discipline sections around January, April, July and October.</li>
</ol>

${sources([AICPA_BLUEPRINTS, AICPA_SCORING, NASBA_FAQ, AICPA_SAMPLE])}
`,
  },
];
