import type { BlogSeed } from "./blog";

/**
 * Posts targeting search terms where becker.com ranks in the top positions (Ahrefs US
 * organic keyword export, October 2026). The writing is our own; figures taken from
 * Becker's public pages and the official AICPA, NASBA and IRS pages are cited at the
 * end of each post so they can be re-verified.
 */

function sources(links: [string, string][]) {
  return `<h2>Sources</h2>
<ul>
${links.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a></li>`).join("\n")}
</ul>`;
}

export const keywordPosts: BlogSeed[] = [
  {
    slug: "cpa-exam-score-release-dates-2026-2027",
    title: "CPA Exam Score Release Dates 2026–2027 (Core and Discipline)",
    category: "Exam Updates",
    excerpt:
      "Every target score release date for FAR, AUD and REG, the four Discipline windows for BAR, ISC and TCP, and how to work out when your own result will arrive.",
    content: `
<p>The single most-asked question after walking out of a Prometric centre is "when will my score come out?" The American Institute of Certified Public Accountants (AICPA) publishes a schedule of <em>target</em> score release dates, and the answer depends on two things: which section you took, and when your exam data reached the AICPA.</p>

<h2>How score release actually works</h2>
<ul>
<li><strong>Core sections (FAR, AUD, REG)</strong> are available on demand, so the AICPA releases scores in batches — roughly twice a month. Each batch has a <em>cutoff date</em>: if your exam data file is received by that date, your score is released on the matching release date.</li>
<li><strong>Discipline sections (BAR, ISC, TCP)</strong> are offered only in the first month of each quarter (January, April, July, October), so there is a single release date per testing window. Discipline results take longer because the AICPA needs enough candidate data to score them.</li>
<li>The cutoff is about when the AICPA <em>receives</em> your data from Prometric, not the day you sat. Testing a few days before a cutoff usually puts you in that batch; testing on the cutoff day itself is risky.</li>
<li>Scores normally appear in the National Association of State Boards of Accountancy (NASBA) score portal — on or within about 48 hours of the target date. Candidates of the California, Illinois and Maryland boards get their scores from their board's own website instead.</li>
</ul>

<h2>Core sections: remaining 2026 dates</h2>
<table>
<thead><tr><th>Exam data received by</th><th>Target score release</th></tr></thead>
<tbody>
<tr><td>July 23, 2026</td><td>August 7, 2026</td></tr>
<tr><td>August 15, 2026</td><td>August 25, 2026</td></tr>
<tr><td>September 7, 2026</td><td>September 15, 2026</td></tr>
<tr><td>September 30, 2026</td><td>October 9, 2026</td></tr>
<tr><td>October 23, 2026</td><td>November 10, 2026</td></tr>
<tr><td>November 15, 2026</td><td>November 24, 2026</td></tr>
<tr><td>December 8, 2026</td><td>December 16, 2026</td></tr>
<tr><td>December 31, 2026</td><td>January 12, 2027</td></tr>
</tbody>
</table>
<p>Earlier 2026 releases (February 10 through July 10) have already gone out.</p>

<h2>Core sections: first half of 2027</h2>
<table>
<thead><tr><th>Exam data received by</th><th>Target score release</th></tr></thead>
<tbody>
<tr><td>January 23, 2027</td><td>February 9, 2027</td></tr>
<tr><td>February 14, 2027</td><td>February 23, 2027</td></tr>
<tr><td>March 9, 2027</td><td>March 17, 2027</td></tr>
<tr><td>March 31, 2027</td><td>April 9, 2027</td></tr>
<tr><td>April 23, 2027</td><td>May 11, 2027</td></tr>
<tr><td>May 16, 2027</td><td>May 25, 2027</td></tr>
<tr><td>June 8, 2027</td><td>June 16, 2027</td></tr>
<tr><td>June 30, 2027</td><td>July 13, 2027</td></tr>
</tbody>
</table>

<h2>Discipline sections (BAR, ISC, TCP)</h2>
<table>
<thead><tr><th>Testing window</th><th>Target score release</th></tr></thead>
<tbody>
<tr><td>January 1–31, 2026</td><td>March 13, 2026</td></tr>
<tr><td>April 1–30, 2026</td><td>June 16, 2026</td></tr>
<tr><td>July 1–31, 2026</td><td>September 11, 2026</td></tr>
<tr><td>October 1–31, 2026</td><td>December 15, 2026</td></tr>
<tr><td>January 1–31, 2027</td><td>March 16, 2027</td></tr>
<tr><td>April 1–30, 2027</td><td>June 9, 2027</td></tr>
</tbody>
</table>

<div class="callout callout-tip">
<p><strong>Planning tip:</strong> If you are deciding between two exam dates, check which side of a cutoff each one falls on. A sitting on October 20 is likely to land in the November 10 release; one on October 25 will probably wait until November 24.</p>
</div>

<h2>Testing from India?</h2>
<p>Candidates who sit at a Prometric centre in India are on exactly the same schedule — there is no separate international release. Your score still reaches you through the board or NASBA portal you applied with.</p>

<h2>What your score means</h2>
<p>Scores run from 0 to 99, and 75 is a pass. It is a scaled score, not a percentage of questions answered correctly. Once you pass a section, it starts your credit window — see our guide to <a href="/blog/cpa-exam-eligibility-requirements">CPA eligibility requirements</a> for how long you have to pass the rest.</p>

<p>These are target dates and the AICPA can move them. Always confirm against the official schedule before booking travel or leave around a release.</p>

${sources([
  ["AICPA & CIMA — Find out when you'll get your CPA Exam score", "https://www.aicpa-cima.com/resources/article/find-out-when-youll-get-your-cpa-exam-score"],
  ["UWorld — CPA Exam Score Release Dates", "https://accounting.uworld.com/cpa-review/cpa-exam/score-release/"],
  ["Another71 — CPA Exam Score Release Dates 2026–2027", "https://www.another71.com/nasba-score-release/"],
])}
`,
  },
  {
    slug: "what-is-a-cpa-full-form-meaning",
    title: "What Is a CPA? Full Form, Meaning and What CPAs Actually Do",
    category: "CPA Basics",
    excerpt:
      "CPA stands for Certified Public Accountant — a state-issued licence in the US. Here's what the letters mean, what only a CPA can do, and how you become one.",
    content: `
<h2>CPA full form</h2>
<p><strong>CPA</strong> stands for <strong>Certified Public Accountant</strong>. It is a licence issued by a US state board of accountancy — not a degree and not a membership. Every state (plus Washington DC and the US territories) runs its own board, which is why you will hear people talk about being "licensed in Illinois" or "licensed in Colorado".</p>

<h2>What can a CPA do that other accountants can't?</h2>
<p>Most accounting work — bookkeeping, management reporting, budgeting, tax preparation — does not legally require a licence. A small set of work does:</p>
<ul>
<li><strong>Signing audit and review reports</strong> on financial statements. Only a licensed CPA (through a registered firm) can issue an opinion that a company's financial statements are fairly presented.</li>
<li><strong>Certifying financial statements</strong> filed with regulators such as the Securities and Exchange Commission (SEC).</li>
<li><strong>Representing taxpayers before the Internal Revenue Service (IRS)</strong> without limitation — a right CPAs share with attorneys and enrolled agents.</li>
</ul>
<p>Beyond the legal monopoly, the licence is a hiring signal. Big 4 audit and tax practices, US-facing global capability centres in India, and controller or chief financial officer tracks in multinationals often list it as required or strongly preferred.</p>

<h2>The "three Es": how you become a CPA</h2>
<ol>
<li><strong>Education</strong> — a bachelor's degree, and for licensure traditionally 150 semester hours of college credit with a minimum of accounting and business courses. Most states let you <em>sit</em> for the exam at 120 hours.</li>
<li><strong>Exam</strong> — pass all four sections of the Uniform CPA Examination. This is the one requirement that is identical in every state.</li>
<li><strong>Experience</strong> — usually at least one year of relevant work, verified by a licensed CPA. Some states ask for two.</li>
</ol>
<p>Many states also require an ethics exam after you pass. For the details, see our <a href="/blog/cpa-exam-eligibility-requirements">eligibility guide</a>.</p>

<h2>What's on the CPA Exam?</h2>
<p>Since 2024 the exam follows a "Core + Discipline" model. Everyone takes three Core sections:</p>
<ul>
<li><a href="/cpa/far">Financial Accounting and Reporting (FAR)</a></li>
<li><a href="/cpa/aud">Auditing and Attestation (AUD)</a></li>
<li><a href="/cpa/reg">Taxation and Regulation (REG)</a></li>
</ul>
<p>…plus one Discipline of your choice: <a href="/cpa/bar">Business Analysis and Reporting (BAR)</a>, <a href="/cpa/isc">Information Systems and Controls (ISC)</a>, or <a href="/cpa/tcp">Tax Compliance and Planning (TCP)</a>. Each section is a four-hour computer-based test.</p>

<h2>Is it worth it?</h2>
<p>Becker cites an average CPA salary of about $96,750 (2023 data), with a typical range of roughly $61,000 to $151,000, against about $47,000 to $82,000 for accountants without the licence. Salaries depend heavily on location and role, but the gap is consistent. Becker also notes that around 75% of AICPA members are at or near retirement age — one reason firms are struggling to hire licensed staff.</p>

<h2>CPA vs CA, CMA and EA</h2>
<p>CPA is often compared with India's Chartered Accountant (CA), the Certified Management Accountant (CMA) and the Enrolled Agent (EA). They certify different things — read <a href="/blog/cpa-vs-ca-what-actually-matters">CPA vs CA</a> and <a href="/blog/enrolled-agent-vs-cpa">Enrolled Agent vs CPA</a> for side-by-side comparisons.</p>

${sources([
  ["Becker — What Is a CPA?", "https://www.becker.com/cpa-review/what-is-a-cpa"],
  ["AICPA & CIMA — CPA Exam", "https://www.aicpa-cima.com/resources/landing/cpa-exam"],
])}
`,
  },
  {
    slug: "free-cpa-study-material",
    title: "Free CPA Study Material: What's Genuinely Useful in 2026",
    category: "Study Strategy",
    excerpt:
      "You don't need to spend thousands before you know how you study. These are the free CPA resources worth your time — and what each one is actually good for.",
    content: `
<p>A full CPA review course costs $2,000 to $5,000. That's a big commitment before you even know whether the exam suits you. The good news: a lot of high-quality material is free. The trick is using each resource for what it does well.</p>

<h2>1. The official AICPA blueprints (start here)</h2>
<p>The AICPA publishes a blueprint for every section, listing each content area, its weight, and the specific tasks you're expected to perform and at what skill level. Every review course is built from these documents. Reading the blueprint for your first section tells you exactly what's in scope — and, just as importantly, what isn't.</p>

<h2>2. The AICPA sample tests</h2>
<p>The AICPA offers free sample tests that use the real exam software, with the same layout, tools and question types. They need Google Chrome or Microsoft Edge and are timed like the real thing. Use them twice: once early, just to learn the interface (especially task-based simulations and the research tool), and once a week or two before your exam as a full dress rehearsal.</p>

<h2>3. Free trials of commercial review courses</h2>
<p>Most major providers offer trials. Becker's, for example, runs for 14 days and includes one full unit per section, more than 1,400 practice multiple-choice questions, more than 100 task-based simulations, flashcards and a 30-question readiness diagnostic. A trial is the cheapest way to test-drive a teaching style before paying for it. Try two or three, one after another, rather than all at once.</p>

<h2>4. Free question banks</h2>
<p>Several sites offer free multiple-choice questions in exchange for an email address. They're useful for reinforcement — not as your only preparation, because the exam is half task-based simulations by score weight in most sections.</p>

<h2>5. Scholarships that cover review costs</h2>
<ul>
<li>The <strong>AICPA Foundation</strong> awards up to $1,000 each to around 75 candidates a year toward exam costs.</li>
<li><strong>Becker's Newt D. Becker scholarship</strong> covers a full review package for about 130 US-resident candidates a year; applications typically open in February.</li>
</ul>

<h2>6. SimplyCPA (that's us)</h2>
<p>Everything on this site is free: <a href="/cpa">study material and revision notes for every topic</a> in all six sections, organised to match the blueprints, a <a href="/quick-sheets">set of quick sheets</a> and topic-wise practice questions. We built it because good material shouldn't be locked behind a paywall.</p>

<div class="callout callout-tip">
<p><strong>A simple free-material plan:</strong> read the blueprint → study topic by topic using free notes → drill practice questions after each topic → sit the AICPA sample test before the real exam.</p>
</div>

<h2>What free material can't easily replace</h2>
<p>Large banks of exam-style simulations and adaptive practice are where paid courses earn their price. Many candidates study the concepts with free material and then buy a question bank only for the final weeks. That's a reasonable middle path if money is tight.</p>

${sources([
  ["Becker — Free CPA Study Material", "https://www.becker.com/blog/cpa/free-cpa-study-material"],
  ["AICPA & CIMA — CPA Exam Blueprints", "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam"],
  ["AICPA & CIMA — CPA Exam practice and preparation", "https://www.aicpa-cima.com/resources/landing/cpa-exam-practice-and-preparation"],
])}
`,
  },
  {
    slug: "cpa-exam-cost-2026",
    title: "How Much Does the CPA Cost? Full 2026 Fee Breakdown",
    category: "CPA Basics",
    excerpt:
      "Application, registration and exam fees, international testing, the ethics exam and review courses — what the CPA really costs, line by line.",
    content: `
<p>Asking "how much is the CPA?" gets you numbers anywhere from $1,000 to $10,000. Both ends are right — they're just counting different things. Here's the breakdown.</p>

<h2>1. Exam fees (paid to your board and NASBA)</h2>
<table>
<thead><tr><th>Fee</th><th>Typical range</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Initial application</td><td>$20–$150 (one time)</td><td>Paid when you first apply to a state board.</td></tr>
<tr><td>Registration / eligibility</td><td>$40–$200 per section</td><td>NASBA's standard figure is about $96 per section.</td></tr>
<tr><td>Examination fee</td><td>$200–$300 per section</td><td>Reported 2026 figures range from about $262 to $269 per section.</td></tr>
</tbody>
</table>
<p>For a candidate who passes all four sections first time, Becker puts the exam-only total at roughly $1,050 using NASBA's recommended figures, and the realistic range across states at $980 to $1,950, with an average of about $1,400.</p>

<h2>2. Testing outside the US</h2>
<p>If you sit in India, an international administration fee is added for each section. Becker cites $390 per section; other providers report $390 for Core and $510 for Discipline sections. Budget for four of these on top of the exam fees above.</p>

<h2>3. Retakes and rescheduling</h2>
<p>Fail a section and you pay registration and exam fees again. Rescheduling inside 30 days of your appointment also carries a fee. Retakes are where budgets break, which is why preparing properly for the first attempt is also the cheapest strategy.</p>

<h2>4. After you pass</h2>
<ul>
<li><strong>Ethics exam:</strong> most states require the AICPA's self-study ethics exam, about $250–$320.</li>
<li><strong>Licence fee:</strong> set by your state board; varies widely.</li>
<li><strong>Credential evaluation</strong> (international candidates): roughly $100–$400 depending on the agency.</li>
</ul>

<h2>5. Review course (optional)</h2>
<p>No state requires one, but most candidates buy one. Expect $2,000–$5,000 for a major provider. You can reduce this significantly with free material — see <a href="/blog/free-cpa-study-material">free CPA study material</a>.</p>

<h2>Realistic totals</h2>
<ul>
<li><strong>Minimum (US candidate, all first-time passes, free material):</strong> about $1,300–$2,000 including ethics and licence.</li>
<li><strong>Typical (with a review course):</strong> about $3,500–$7,000.</li>
<li><strong>Indian candidate:</strong> add four international fees plus credential evaluation.</li>
</ul>

<div class="callout callout-important">
<p>Fees change, sometimes mid-year. Use our <a href="/fees">Fee Estimator</a>, which records each figure with its source and the date we last checked it.</p>
</div>

${sources([
  ["Becker — The Real Cost of the CPA Exam", "https://www.becker.com/blog/cpa/the-real-cost-of-the-cpa-exam"],
  ["NASBA — International Administration", "https://nasba.org/internationalexam/"],
])}
`,
  },
  {
    slug: "cpa-exam-eligibility-requirements",
    title: "CPA Eligibility Requirements: Education, Experience and Credit Windows",
    category: "CPA Basics",
    excerpt:
      "120 vs 150 hours, accounting and business credits, the experience requirement, the ethics exam and how long you have to pass all four sections.",
    content: `
<p>"Am I eligible?" is really two questions: eligible to <em>sit</em> for the exam, and eligible to be <em>licensed</em>. The rules differ — and they differ by state.</p>

<h2>Eligibility to sit for the exam</h2>
<ul>
<li>Most states require a bachelor's degree, or being close to finishing one, or at least <strong>120 semester hours</strong> of college credit.</li>
<li>Most also want a minimum number of accounting and business credits — typically <strong>24–30 accounting hours</strong> and <strong>24 business hours</strong>. Examples Becker lists: Arizona asks for 36 accounting and 30 business; Texas for 21 upper-level accounting and 24 upper-level business; Virginia and Florida for 24 upper-level of each.</li>
</ul>

<h2>Eligibility to be licensed</h2>
<p>Licensure has traditionally required <strong>150 semester hours</strong> — about one year beyond a typical bachelor's degree. In recent years a growing number of states have also opened an alternative route: a bachelor's degree in accounting plus <strong>two years</strong> of experience, in place of the extra 30 hours. Whether your state offers this, and from when, varies — check your board directly.</p>

<h2>Experience</h2>
<p>Expect at least one year of accounting work verified by a licensed CPA. Some states ask for more — Indiana requires two years; Minnesota counts 2,000 verified hours over one to three years.</p>

<h2>Ethics exam</h2>
<p>Most states require the AICPA ethics exam (often with a score of 90% or more) within one to two years of passing. Virginia and Ohio run their own state-specific ethics courses; Pennsylvania, Kentucky and Michigan do not require an ethics exam.</p>

<h2>The credit window</h2>
<p>Once you pass your first section, a clock starts. You must pass the remaining three before credit for the first one expires. Historically this was 18 months; most jurisdictions have now moved to a longer window (commonly 30 months). Confirm the figure for your state before you plan your exam sequence.</p>

<h2>For Indian candidates</h2>
<p>Your degree has to be converted into US semester hours by a credential evaluation agency first. A three-year B.Com usually falls short of 120 hours on its own — see <a href="/blog/cpa-after-bcom-complete-roadmap">CPA after B.Com</a> and our <a href="/indian-candidates">guide for Indian candidates</a> for how people close the gap.</p>

${sources([
  ["Becker — CPA Exam Requirements by State", "https://www.becker.com/cpa-review/requirements"],
])}
`,
  },
  {
    slug: "enrolled-agent-vs-cpa",
    title: "Enrolled Agent vs CPA: Which Credential Fits You?",
    category: "CPA vs Other Qualifications",
    excerpt:
      "What is an EA in accounting, how it differs from a CPA, and when the faster, tax-only credential makes more sense.",
    content: `
<h2>What is an enrolled agent?</h2>
<p>An <strong>Enrolled Agent (EA)</strong> is a tax practitioner authorised by the US Department of the Treasury, through the Internal Revenue Service (IRS), to represent taxpayers. "Enrolled" refers to being enrolled to practise before the IRS. It's a federal credential, so it isn't tied to a state.</p>

<h2>The key differences</h2>
<table>
<thead><tr><th></th><th>Enrolled Agent</th><th>CPA</th></tr></thead>
<tbody>
<tr><td>Granted by</td><td>IRS (US Treasury)</td><td>State boards of accountancy</td></tr>
<tr><td>Exam</td><td>Special Enrollment Examination (SEE): 3 parts, 3.5 hours each, multiple choice, tax only</td><td>Uniform CPA Exam: 4 sections, 4 hours each, multiple choice and simulations</td></tr>
<tr><td>Typical study time</td><td>150–200 hours</td><td>320–420 hours</td></tr>
<tr><td>Education requirement</td><td>None</td><td>Bachelor's degree; 150 hours for licensure</td></tr>
<tr><td>Experience requirement</td><td>None</td><td>Usually 1–2 years</td></tr>
<tr><td>Scope</td><td>Tax only — unlimited IRS representation</td><td>Tax, audit, attest and advisory</td></tr>
<tr><td>Continuing education</td><td>72 hours every 3 years</td><td>Usually about 40 hours a year (state-set)</td></tr>
<tr><td>Typical salary (Becker)</td><td>$68,000–$125,000</td><td>$60,874–$150,612</td></tr>
</tbody>
</table>

<h2>When the EA makes more sense</h2>
<ul>
<li>Your work is, and will stay, purely tax — US individual or business returns, IRS notices, audits and collections.</li>
<li>You don't meet CPA education requirements yet. The EA has none, which makes it a practical first credential for many Indian B.Com graduates working in US tax outsourcing.</li>
<li>You want a recognised credential in months rather than years.</li>
</ul>

<h2>When the CPA makes more sense</h2>
<ul>
<li>You want to work in audit, financial reporting, controllership or advisory. An EA cannot sign audit reports or certify financial statements.</li>
<li>You want the widest range of senior roles. The CPA is the broader, better-known credential.</li>
</ul>

<h2>Can you do both?</h2>
<p>Yes — and the order matters less than people think. Content overlaps heavily with <a href="/cpa/reg">REG</a> and <a href="/cpa/tcp">TCP</a>, so passing one makes the tax portion of the other noticeably easier. Note that CPAs already have unlimited representation rights, so an EA adds little once you're licensed.</p>

${sources([
  ["Becker — Enrolled Agent vs CPA", "https://www.becker.com/blog/career/enrolled-agent-vs-cpa"],
  ["IRS — Enrolled Agent information", "https://www.irs.gov/tax-professionals/enrolled-agents"],
])}
`,
  },
  {
    slug: "far-exam-complete-guide",
    title: "The FAR Exam: Format, Blueprint Weights and How to Pass",
    category: "Study Strategy",
    excerpt:
      "FAR has the lowest pass rate of the Core sections. Here's its structure, what the 2026 blueprint emphasises and how much study time to plan.",
    content: `
<p>Financial Accounting and Reporting (FAR) is the section candidates fear most — and with reason. It covers the widest range of material, and its cumulative 2024–2026 pass rate of about 41% is the lowest of the three Core sections.</p>

<h2>Format</h2>
<ul>
<li><strong>Length:</strong> 4 hours, with an optional 15-minute break that doesn't count against your time.</li>
<li><strong>Questions:</strong> 50 multiple-choice questions (MCQs) and 7 task-based simulations (TBSs).</li>
<li><strong>Testlets:</strong> two MCQ testlets of 25 questions each, then TBS testlets of 2, 3 and 2 simulations (the break comes after the third testlet).</li>
<li><strong>Scoring:</strong> MCQs and TBSs are each worth 50% of your score. Simulations can earn partial credit. 75 out of 99 is a pass.</li>
</ul>

<h2>Content areas (2026 blueprint)</h2>
<table>
<thead><tr><th>Area</th><th>Weight</th></tr></thead>
<tbody>
<tr><td>I. Financial Reporting</td><td>30–40%</td></tr>
<tr><td>II. Select Balance Sheet Accounts</td><td>30–40%</td></tr>
<tr><td>III. Select Transactions</td><td>25–35%</td></tr>
</tbody>
</table>
<p>The skill mix is heavily applied: about 45–55% application and 35–45% analysis, with only 5–15% pure recall. In other words, you'll be calculating and preparing entries, not reciting definitions.</p>

<h2>How much study time?</h2>
<p>Plan for at least 120 hours — most candidates spend more on FAR than any other section. At 15 hours a week, that's about eight weeks.</p>

<h2>Topics that carry the most weight</h2>
<ul>
<li><a href="/cpa/far/revenue-recognition">Revenue recognition</a> and <a href="/cpa/far/leases">leases</a> — appear in both MCQs and simulations.</li>
<li><a href="/cpa/far/statement-of-cash-flows">Statement of cash flows</a> — a classic simulation.</li>
<li><a href="/cpa/far/governmental-accounting">Governmental</a> and <a href="/cpa/far/not-for-profit-accounting">not-for-profit accounting</a> — unfamiliar to most candidates, consistently tested.</li>
<li><a href="/cpa/far/income-taxes">Income taxes</a>, <a href="/cpa/far/long-term-debt">bonds</a> and <a href="/cpa/far/investments-debt-and-equity-securities">investments</a>.</li>
</ul>

<h2>Strategy that works</h2>
<ol>
<li>Study topic by topic and do practice questions straight after each one — not all at the end.</li>
<li>Do simulations from week one. Half your score comes from them.</li>
<li>Leave the last two weeks for mixed review and at least one full timed practice exam.</li>
<li>Many candidates take FAR first because its content supports AUD and BAR — see <a href="/blog/far-vs-aud-vs-reg-which-to-start-with">which section to start with</a>.</li>
</ol>

${sources([
  ["Becker — The Complete Guide to the FAR CPA Exam", "https://www.becker.com/blog/cpa/the-complete-guide-to-the-far-cpa-exam"],
  ["AICPA & CIMA — CPA Exam Blueprints", "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam"],
])}
`,
  },
  {
    slug: "aud-exam-complete-guide",
    title: "The AUD Exam: Format, Blueprint Weights and How to Pass",
    category: "Study Strategy",
    excerpt:
      "Auditing and Attestation is the most judgement-heavy CPA section and the only one that tests evaluation. Here's how it's built and how to prepare.",
    content: `
<p>Auditing and Attestation (AUD) tests whether you can think like an auditor: assess risk, choose procedures, weigh evidence and decide what kind of report to issue. Its 2025 pass rate was about 47%.</p>

<h2>Format</h2>
<ul>
<li><strong>Length:</strong> 4 hours, plus an optional 15-minute break off the clock.</li>
<li><strong>Questions:</strong> 78 multiple-choice questions (MCQs) and 7 task-based simulations (TBSs).</li>
<li><strong>Testlets:</strong> two MCQ testlets of 39 questions, then TBS testlets of 2, 3 and 2.</li>
<li><strong>Pacing:</strong> aim for about 1.25 minutes per MCQ and 18 minutes per simulation.</li>
<li><strong>Scoring:</strong> 75 out of 99 to pass. Wrong answers don't cost points, so never leave a question blank.</li>
</ul>

<h2>Content areas</h2>
<table>
<thead><tr><th>Area</th><th>Weight</th></tr></thead>
<tbody>
<tr><td>I. Ethics, Professional Responsibilities and General Principles</td><td>15–25%</td></tr>
<tr><td>II. Assessing Risk and Developing a Planned Response</td><td>25–35%</td></tr>
<tr><td>III. Performing Further Procedures and Obtaining Evidence</td><td>30–40%</td></tr>
<tr><td>IV. Forming Conclusions and Reporting</td><td>10–20%</td></tr>
</tbody>
</table>
<p>AUD is the only section that tests the <strong>evaluation</strong> skill level (5–15%), and it has the highest share of remembering and understanding (30–40%). You need to know the standards precisely <em>and</em> apply judgement.</p>

<h2>What changed for 2026</h2>
<p>The 2026 blueprint updates Area I to reflect the AICPA's new quality management standards — Statement on Quality Management Standards (SQMS) No. 1 — which took effect for firms on December 15, 2025. The overall structure is unchanged.</p>

<h2>How much study time?</h2>
<p>Plan for 110–140 hours.</p>

<h2>High-value topics</h2>
<ul>
<li><a href="/cpa/aud/audit-planning-and-materiality">Planning and materiality</a> — see also our explainer on <a href="/blog/what-is-materiality-in-auditing">what materiality means</a>.</li>
<li><a href="/cpa/aud/assessing-risk-of-material-misstatement">Assessing the risk of material misstatement</a> and <a href="/cpa/aud/understanding-the-entity-and-internal-control">internal control</a>.</li>
<li><a href="/cpa/aud/audit-reports">Audit reports</a> — modified opinions and emphasis-of-matter paragraphs are favourite simulation material.</li>
<li><a href="/cpa/aud/professional-ethics-and-independence">Ethics and independence</a> and <a href="/cpa/aud/audit-sampling">audit sampling</a>.</li>
</ul>

<h2>Strategy tips</h2>
<ul>
<li>Learn the logic of the audit process — planning → risk → response → evidence → report. Most questions make sense once you know where in that flow you are.</li>
<li>Memorise report wording and the triggers for each type of opinion; these are near-certain to appear.</li>
<li>Read every question asking "which is <em>not</em>…" or "most likely" twice. AUD wording is deliberately precise.</li>
</ul>

${sources([
  ["Becker — The Complete Guide to the AUD CPA Exam", "https://www.becker.com/blog/cpa/the-complete-guide-to-the-aud-cpa-exam"],
  ["AICPA & CIMA — CPA Exam Blueprints", "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam"],
])}
`,
  },
  {
    slug: "do-you-need-a-cpa-to-be-an-accountant",
    title: "Do You Need a CPA to Be an Accountant?",
    category: "Career",
    excerpt:
      "No — most accounting jobs don't legally require a licence. But a few important ones do, and the licence shapes how far and how fast you can go.",
    content: `
<h2>The short answer</h2>
<p>No. Anyone can work as an accountant. Bookkeeping, accounts payable and receivable, management accounting, budgeting, financial planning and analysis, and most tax preparation can be done without a licence.</p>

<h2>What does require a CPA?</h2>
<ul>
<li>Issuing an opinion on audited financial statements, or a review report.</li>
<li>Owning (or being a majority owner of) a CPA firm that offers attest services.</li>
<li>Calling yourself a "CPA" or "certified public accountant" — the title is legally protected in every state.</li>
</ul>
<p>Unlimited representation before the IRS is available to CPAs, attorneys and enrolled agents — so for pure tax representation, an <a href="/blog/enrolled-agent-vs-cpa">enrolled agent</a> is an alternative.</p>

<h2>Where the licence matters in practice</h2>
<ul>
<li><strong>Public accounting:</strong> you can join a firm without it, but promotion to manager and beyond usually assumes you're licensed or close to it.</li>
<li><strong>Industry:</strong> controller, finance director and chief financial officer roles commonly list it as preferred.</li>
<li><strong>Pay:</strong> Becker's figures put typical CPA salaries at about $61,000–$151,000, compared with about $47,000–$82,000 for accountants without the licence.</li>
</ul>

<h2>How long does it take to become an accountant vs a CPA?</h2>
<p>An accounting degree takes about four years in the US (three for a B.Com in India). Becoming a CPA adds the exam — commonly 12–18 months of study for all four sections — plus one to two years of verified experience, which many people complete alongside the exam.</p>

<h2>Should you get it?</h2>
<p>If you plan to stay in audit, external reporting or senior finance, yes. If your career is firmly in an area where nobody asks for it, the hours might be better spent elsewhere. Start with <a href="/blog/what-is-a-cpa-full-form-meaning">what a CPA is</a> and <a href="/blog/cpa-exam-eligibility-requirements">whether you're eligible</a>.</p>

${sources([
  ["Becker — What Can a CPA Do That an Accountant Can't?", "https://www.becker.com/blog/career/what-can-a-cpa-do-that-an-accountant-cant"],
  ["Becker — What Is a CPA?", "https://www.becker.com/cpa-review/what-is-a-cpa"],
])}
`,
  },
  {
    slug: "public-vs-private-accounting",
    title: "Public vs Private Accounting: Pros, Cons and How to Choose",
    category: "Career",
    excerpt:
      "Public accounting means serving clients at a firm; private accounting means working inside one company. Here's how the work, hours, pay and progression compare.",
    content: `
<h2>The definitions</h2>
<ul>
<li><strong>Public accounting</strong> — you work for an accounting firm (the Big 4, a mid-tier firm or a small practice) that sells audit, tax and advisory services to many clients.</li>
<li><strong>Private accounting</strong> (also called "industry" or "corporate") — you work in the finance team of a single organisation: a company, a bank, a non-profit or a government body.</li>
</ul>

<h2>Side by side</h2>
<table>
<thead><tr><th></th><th>Public</th><th>Private</th></tr></thead>
<tbody>
<tr><td>Variety</td><td>High — many clients and industries</td><td>Lower — one business, in depth</td></tr>
<tr><td>Hours</td><td>Seasonal peaks ("busy season", January–April)</td><td>More even; peaks at month-end and year-end close</td></tr>
<tr><td>Learning curve</td><td>Steep and structured; strong training</td><td>Depends heavily on the employer</td></tr>
<tr><td>Progression</td><td>Clear ladder: associate → senior → manager → partner</td><td>Less formal; driven by openings</td></tr>
<tr><td>CPA licence</td><td>Effectively required for promotion</td><td>Preferred for senior roles</td></tr>
<tr><td>Typical exit</td><td>To industry after 2–5 years</td><td>Rarely back to public</td></tr>
</tbody>
</table>

<h2>Why so many people start in public</h2>
<p>Two or three years in a firm gives you exposure to dozens of businesses, a recognised brand on your CV and — in most states — the verified experience you need for a CPA licence. Moving from public to private later is common and easy. The reverse is much harder.</p>

<h2>Why some people go straight to private</h2>
<p>Steadier hours, deeper ownership of one set of numbers and, often, a clearer view of how finance drives business decisions. If you know the industry you want, it can be the faster route to a senior role in it.</p>

<h2>In India</h2>
<p>For Indian candidates, "public" often means the US tax or audit practice of a Big 4 or mid-tier firm, while "private" often means a global capability centre supporting a US multinational. A CPA licence is valued in both — see <a href="/blog/is-us-cpa-worth-it-for-an-indian-ca">is US CPA worth it</a>.</p>

${sources([
  ["Becker — Pros and Cons of Public vs Private Accounting", "https://www.becker.com/blog/career/pros-and-cons-of-working-in-public-accounting-vs-private-accounting"],
])}
`,
  },
  {
    slug: "cpa-tutors-are-they-worth-it",
    title: "CPA Tutors: Are They Worth the Money?",
    category: "Study Strategy",
    excerpt:
      "A one-to-one CPA tutor can rescue a stalled attempt — or be an expensive habit. Here's when tutoring pays off and what to try first.",
    content: `
<h2>What a tutor actually gives you</h2>
<ul>
<li><strong>Diagnosis</strong> — someone who can see which concepts you're missing, rather than which chapters you've read.</li>
<li><strong>A plan</strong> — a schedule built around your weak areas instead of a generic course order.</li>
<li><strong>Different explanations</strong> — if the textbook version doesn't click, a tutor can try three more.</li>
<li><strong>Accountability</strong> — a standing appointment is hard to skip.</li>
</ul>

<h2>When it's worth paying for</h2>
<ul>
<li>You've failed the same section more than once and can't see why.</li>
<li>Your degree was years ago, or the section covers areas you've never worked in (governmental accounting or IT controls, for example).</li>
<li>Your score report shows you're close — a few points short in one content area is exactly where targeted help works.</li>
</ul>

<h2>When it usually isn't</h2>
<ul>
<li>You haven't yet worked through a structured course or set of notes. A tutor is expensive as a substitute for doing the reading.</li>
<li>The problem is time, not understanding. No tutor can create study hours you don't have.</li>
</ul>

<h2>Weigh it against the cost of failing</h2>
<p>Private tutoring adds up quickly. But a failed section means paying registration and exam fees again — plus several weeks of your time — and, if you're near the end of your credit window, possibly losing credit for a section you already passed. For a candidate on a second or third attempt, a few targeted sessions can be the cheaper option.</p>

<h2>Try these first</h2>
<ol>
<li>Read your score report — it shows how you performed in each content area relative to passing candidates.</li>
<li>Rework every practice question you got wrong in your weakest area until you can explain why each wrong option is wrong.</li>
<li>Use free, topic-level material such as our <a href="/cpa">study notes</a> and <a href="/community">community discussions</a> to fill specific gaps.</li>
<li>Some review courses include a set number of one-to-one sessions in higher-priced packages. Check before buying a tutor separately.</li>
</ol>

${sources([
  ["Becker — CPA Tutors: Are They Worth It?", "https://www.becker.com/blog/cpa-tutors-are-they-worth-it"],
])}
`,
  },
  {
    slug: "what-is-a-promissory-note",
    title: "What Is a Promissory Note? Meaning, Negotiability and CPA Exam Rules",
    category: "Concepts Explained",
    excerpt:
      "A promissory note is a signed, written promise to pay. Here's what makes one negotiable under the Uniform Commercial Code — and how it's tested in REG.",
    content: `
<h2>Definition</h2>
<p>A <strong>promissory note</strong> is a signed, written promise by one party (the <strong>maker</strong>) to pay a fixed amount of money to another party (the <strong>payee</strong>) or to whoever holds the note, either on demand or at a set future date. Loans, mortgages, seller financing and intercompany borrowing are all commonly documented with notes.</p>

<h2>Note vs draft vs IOU</h2>
<ul>
<li>A <strong>note</strong> is a <em>promise</em> to pay — two parties: maker and payee.</li>
<li>A <strong>draft</strong> (such as a cheque) is an <em>order</em> to pay — three parties: drawer, drawee and payee.</li>
<li>An <strong>IOU</strong> merely acknowledges a debt. It contains no promise to pay, so it isn't a negotiable instrument.</li>
</ul>

<h2>When is a note negotiable?</h2>
<p>Under Article 3 of the Uniform Commercial Code (UCC), a note is a negotiable instrument only if it:</p>
<ol>
<li>is in <strong>writing</strong>;</li>
<li>is <strong>signed</strong> by the maker;</li>
<li>contains an <strong>unconditional promise</strong> to pay;</li>
<li>is for a <strong>fixed amount of money</strong> (interest is allowed, even at a variable rate);</li>
<li>is payable <strong>on demand or at a definite time</strong>;</li>
<li>is payable <strong>to order or to bearer</strong>; and</li>
<li>contains no other undertaking or instruction beyond the promise to pay.</li>
</ol>
<div class="callout callout-tip">
<p><strong>Exam trap:</strong> "Payable when the buyer resells the property" is <em>not</em> a definite time, and "payable from the proceeds of the Smith contract only" makes the promise conditional. Both destroy negotiability.</p>
</div>

<h2>Why negotiability matters</h2>
<p>A negotiable note can be transferred to a <strong>holder in due course</strong> — someone who took it for value, in good faith, and without notice of problems. That holder takes it free of most "personal" defences the maker could have raised against the original payee (such as breach of contract or ordinary fraud in the inducement), though not "real" defences such as forgery, infancy or discharge in bankruptcy.</p>

<h2>Accounting for notes</h2>
<p>In <a href="/cpa/far/cash-receivables-and-bad-debts">FAR</a>, notes receivable are recorded at present value. If a note carries no interest or an unreasonably low rate, the difference between face value and present value is recognised as a discount and amortised to interest income using the effective-interest method.</p>

<h2>Where it's tested</h2>
<p>Negotiable instruments and secured transactions sit in the business law portion of <a href="/cpa/reg">REG</a>; see our topics on <a href="/cpa/reg/debtor-creditor-and-bankruptcy">debtor-creditor relationships</a> and <a href="/cpa/reg/business-law-contracts">contracts</a>.</p>

${sources([
  ["Becker — Promissory Note (accounting terms)", "https://www.becker.com/accounting-terms/promissory-note"],
  ["Cornell Law School — UCC § 3-104 (negotiable instrument)", "https://www.law.cornell.edu/ucc/3/3-104"],
])}
`,
  },
  {
    slug: "parol-evidence-rule",
    title: "The Parol Evidence Rule Explained (With Exceptions)",
    category: "Concepts Explained",
    excerpt:
      "Once parties put their full agreement in writing, earlier side deals can't be used to contradict it. Here's how the rule works and the exceptions REG loves to test.",
    content: `
<h2>The rule in one sentence</h2>
<p>When parties intend a written contract to be the final and complete statement of their agreement, evidence of <strong>prior</strong> or <strong>contemporaneous</strong> oral or written agreements cannot be used to <strong>contradict, vary or add to</strong> its terms.</p>
<p>"Parol" simply means spoken — though the rule also covers earlier written drafts and side letters.</p>

<h2>Why it exists</h2>
<p>It protects the reliability of written contracts. If either side could later claim "but we also agreed…", a signed contract would be worth very little.</p>

<h2>Integration: the key question</h2>
<ul>
<li>A <strong>fully integrated</strong> contract is intended to be complete. No outside terms can be added. A "merger clause" ("this document is the entire agreement") is strong evidence of full integration.</li>
<li>A <strong>partially integrated</strong> contract is final on the terms it covers, but consistent additional terms may still be proved.</li>
</ul>

<h2>What the rule does <em>not</em> block</h2>
<p>These are the exceptions — and they're where exam questions come from:</p>
<ul>
<li><strong>Later modifications.</strong> The rule only covers agreements made before or at signing. Changes agreed <em>after</em> signing are admissible.</li>
<li><strong>Fraud, duress, undue influence or mistake.</strong> Evidence showing the contract is invalid is always allowed.</li>
<li><strong>Ambiguity.</strong> Outside evidence can clarify what an unclear term means.</li>
<li><strong>Conditions precedent.</strong> Evidence that the contract was never meant to take effect until something happened.</li>
<li><strong>Clerical errors and typos.</strong></li>
</ul>

<div class="callout callout-example">
<p><strong>Example:</strong> A written, fully integrated sale contract states a price of $50,000. The buyer argues that, during negotiations, the seller verbally agreed to include free delivery. Evidence of the oral promise is excluded. But if the parties agreed to free delivery in a phone call a week <em>after</em> signing, that's a later modification and can be proved (subject to any statute of frauds or no-oral-modification issues).</p>
</div>

<h2>Parol evidence vs statute of frauds</h2>
<p>Candidates often mix these up. The <strong>statute of frauds</strong> asks whether certain contracts must be in writing at all. The <strong>parol evidence rule</strong> asks, once there is a final writing, what else can be used to change it.</p>

<p>Study the full contracts topic, including offer, acceptance, consideration and remedies, in our <a href="/cpa/reg/business-law-contracts">REG business law: contracts</a> notes.</p>

${sources([
  ["Becker — Parol Evidence Rule (accounting terms)", "https://www.becker.com/accounting-terms/parol-evidence-rule"],
  ["Cornell Law School — Parol evidence rule", "https://www.law.cornell.edu/wex/parol_evidence_rule"],
])}
`,
  },
  {
    slug: "what-is-materiality-in-auditing",
    title: "What Is Materiality in Auditing? The Definition and How It's Set",
    category: "Concepts Explained",
    excerpt:
      "Materiality decides what an auditor cares about. Here's the current AICPA definition, how planning and performance materiality are set, and how AUD tests it.",
    content: `
<h2>The definition</h2>
<p>Under US auditing standards (AU-C 320), misstatements — including omissions — are <strong>material</strong> if there is a <em>substantial likelihood</em> that, individually or in total, they would influence the judgement made by a reasonable user based on the financial statements.</p>
<p>This wording came from Statement on Auditing Standards (SAS) No. 138, effective for audits of periods ending on or after December 15, 2020. It replaced the older "could reasonably be expected to influence" language and brought the AICPA's definition into line with the Financial Accounting Standards Board (FASB), the Public Company Accounting Oversight Board (PCAOB), the Securities and Exchange Commission (SEC) and US courts.</p>

<h2>Materiality is a judgement, not a formula</h2>
<p>Auditors commonly start from a benchmark and apply a percentage. Typical starting points are:</p>
<table>
<thead><tr><th>Benchmark</th><th>Typical range</th><th>Used when</th></tr></thead>
<tbody>
<tr><td>Pre-tax income</td><td>about 5%</td><td>Stable, profit-making entities</td></tr>
<tr><td>Total revenue</td><td>about 0.5%–1%</td><td>Volatile or loss-making entities</td></tr>
<tr><td>Total assets</td><td>about 0.5%–1%</td><td>Asset-heavy entities, investment funds</td></tr>
<tr><td>Total expenses</td><td>about 0.5%–2%</td><td>Not-for-profits</td></tr>
</tbody>
</table>
<p>These are conventions used in practice, not rules from the standards. The auditor then adjusts for qualitative factors.</p>

<h2>The levels of materiality</h2>
<ul>
<li><strong>Materiality for the financial statements as a whole</strong> — the overall threshold.</li>
<li><strong>Performance materiality</strong> — set lower (often 50%–75% of overall materiality) to reduce the risk that uncorrected and undetected misstatements together exceed overall materiality.</li>
<li><strong>Specific materiality</strong> — a lower threshold for particular accounts or disclosures users care about more, such as executive compensation or related-party transactions.</li>
<li><strong>Clearly trivial threshold</strong> — below this, misstatements needn't even be accumulated.</li>
</ul>

<h2>Qualitative materiality</h2>
<p>A small misstatement can still be material if it turns a loss into a profit, hides a covenant breach, affects a trend, involves fraud or illegal acts, or relates to management compensation. Expect at least one AUD question built around this idea.</p>

<h2>How AUD tests it</h2>
<ul>
<li>Choosing an appropriate benchmark for a described entity.</li>
<li>Calculating and comparing overall and performance materiality.</li>
<li>Evaluating whether accumulated misstatements require a modified opinion.</li>
</ul>
<p>For a full walkthrough, see <a href="/cpa/aud/audit-planning-and-materiality">audit planning and materiality</a> and <a href="/cpa/aud/assessing-risk-of-material-misstatement">assessing the risk of material misstatement</a>.</p>

${sources([
  ["Becker — AICPA Adopts New Definition of Materiality", "https://www.becker.com/blog/accounting/aicpa-adopts-new-definition-of-materiality"],
  ["AICPA & CIMA — SAS No. 138, Amendments to the Description of the Concept of Materiality", "https://www.aicpa-cima.com/resources/download/aicpa-statement-on-auditing-standards-no-138"],
])}
`,
  },
  {
    slug: "deferred-tax-assets-explained",
    title: "Deferred Tax Assets Explained: Causes, Valuation Allowance and Examples",
    category: "Concepts Explained",
    excerpt:
      "A deferred tax asset is tax you've effectively prepaid. Here's what creates one, how to measure it, when you need a valuation allowance and how FAR tests it.",
    content: `
<h2>What is a deferred tax asset?</h2>
<p>A <strong>deferred tax asset (DTA)</strong> is the future tax benefit a company expects because it has paid — or will pay — more tax now than its book income implies, or because it has losses or credits it can use later. Put simply: a DTA represents taxes you'll save in the future.</p>
<p>The rules sit in the Accounting Standards Codification (ASC) Topic 740, Income Taxes.</p>

<h2>What creates one?</h2>
<p>A DTA arises from <strong>deductible temporary differences</strong> — items that reduce taxable income in a later year than they reduce book income — and from carryforwards.</p>
<ul>
<li><strong>Warranty and bad-debt expenses</strong> accrued for books but deductible for tax only when paid or written off.</li>
<li><strong>Unearned revenue</strong> taxed when the cash is received but recognised for books later.</li>
<li><strong>Net operating loss (NOL) carryforwards</strong> and tax credit carryforwards.</li>
<li><strong>Accrued compensation</strong> deducted for tax only when paid.</li>
</ul>
<p>The opposite — taxable temporary differences such as accelerated tax depreciation — creates a deferred tax <em>liability</em>.</p>

<h2>Measuring it</h2>
<p><strong>DTA = deductible temporary difference × the enacted tax rate expected to apply when it reverses.</strong> Use the enacted rate for the reversal year, not the current rate, and never an expected-but-not-yet-enacted rate.</p>

<div class="callout callout-example">
<p><strong>Example:</strong> A company accrues $100,000 of warranty expense in 2026; it will be deductible when paid in 2027. The enacted rate is 21%. The company records a DTA of $21,000 (and a matching deferred tax benefit in the income statement).</p>
</div>

<h2>The valuation allowance</h2>
<p>A DTA is only useful if there will be enough taxable income to absorb it. If it is <strong>more likely than not</strong> (a likelihood of more than 50%) that some or all of it won't be realised, the company records a <strong>valuation allowance</strong> to reduce it.</p>
<ul>
<li><strong>Positive evidence:</strong> existing taxable temporary differences that will reverse, a strong earnings history, tax-planning strategies.</li>
<li><strong>Negative evidence:</strong> cumulative losses in recent years, expiring carryforwards, a history of unused losses.</li>
</ul>

<h2>Presentation</h2>
<p>All deferred tax assets and liabilities are classified as <strong>noncurrent</strong> on the balance sheet, and within each tax jurisdiction they're netted to a single amount.</p>

<h2>Exam tips</h2>
<ul>
<li>Distinguish <strong>temporary</strong> differences (create deferred taxes) from <strong>permanent</strong> differences such as municipal bond interest or fines (never do).</li>
<li>Total income tax expense = current tax expense + deferred tax expense (or − benefit).</li>
</ul>
<p>Work through the full topic in our <a href="/cpa/far/income-taxes">FAR income taxes</a> notes.</p>

${sources([
  ["Becker — Deferred Tax Asset (accounting terms)", "https://www.becker.com/accounting-terms/deferred-tax-asset"],
  ["Financial Accounting Standards Board — ASC 740, Income Taxes", "https://asc.fasb.org/740"],
])}
`,
  },
  {
    slug: "contribution-margin-explained",
    title: "What Is Contribution Margin? Formula, Ratio and Break-Even",
    category: "Concepts Explained",
    excerpt:
      "Contribution margin shows how much each sale contributes to fixed costs and profit. Here's the formula, the ratio, break-even analysis and a worked example.",
    content: `
<h2>Definition</h2>
<p><strong>Contribution margin</strong> is sales revenue minus variable costs. It's the amount left over from each sale to "contribute" toward covering fixed costs — and, once those are covered, toward profit.</p>

<h2>The formulas</h2>
<ul>
<li><strong>Contribution margin</strong> = Sales − Variable costs</li>
<li><strong>Contribution margin per unit</strong> = Selling price per unit − Variable cost per unit</li>
<li><strong>Contribution margin ratio</strong> = Contribution margin ÷ Sales</li>
</ul>

<h2>Worked example</h2>
<p>A company sells a product for $50. Variable costs (materials, direct labour, sales commission) are $30 per unit. Fixed costs are $200,000 a year.</p>
<ul>
<li>Contribution margin per unit = $50 − $30 = <strong>$20</strong></li>
<li>Contribution margin ratio = $20 ÷ $50 = <strong>40%</strong></li>
</ul>

<h2>Break-even analysis</h2>
<ul>
<li><strong>Break-even in units</strong> = Fixed costs ÷ Contribution margin per unit = $200,000 ÷ $20 = <strong>10,000 units</strong></li>
<li><strong>Break-even in sales dollars</strong> = Fixed costs ÷ Contribution margin ratio = $200,000 ÷ 40% = <strong>$500,000</strong></li>
<li><strong>Units for a target profit of $60,000</strong> = ($200,000 + $60,000) ÷ $20 = <strong>13,000 units</strong></li>
</ul>

<div class="callout callout-tip">
<p><strong>Target after-tax profit:</strong> convert it to pre-tax first. A $42,000 after-tax target at a 30% rate is $42,000 ÷ (1 − 0.30) = $60,000 pre-tax.</p>
</div>

<h2>Contribution margin vs gross margin</h2>
<p>Gross margin (sales minus cost of goods sold) uses <em>absorption costing</em>, so it includes fixed manufacturing overhead and excludes variable selling costs. Contribution margin uses <em>variable costing</em>: it separates costs by behaviour, not by function. That's why contribution margin is the right tool for short-term decisions.</p>

<h2>Where it's used</h2>
<ul>
<li><strong>Special orders:</strong> accept if the price exceeds variable cost and there's spare capacity.</li>
<li><strong>Product mix with a constraint:</strong> rank products by contribution margin <em>per unit of the scarce resource</em> (such as machine hours), not per unit sold.</li>
<li><strong>Margin of safety:</strong> actual sales minus break-even sales — how far sales can fall before a loss.</li>
<li><strong>Operating leverage:</strong> contribution margin ÷ operating income. Higher leverage means profit swings more with sales.</li>
</ul>

<h2>On the CPA Exam</h2>
<p>Cost-volume-profit analysis and variable costing appear in the <a href="/cpa/bar">Business Analysis and Reporting (BAR)</a> Discipline section; see also our <a href="/cpa/bar/financial-statement-analysis">financial statement analysis</a> notes.</p>

${sources([
  ["Becker — Contribution Margin Ratio (accounting terms)", "https://www.becker.com/accounting-terms/contribution-margin-ratio"],
  ["AICPA & CIMA — CPA Exam Blueprints (BAR)", "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam"],
])}
`,
  },
];
