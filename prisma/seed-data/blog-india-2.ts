import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";
import {
  NASBA_INTL,
  NASBA_FAQ,
  NASBA_STATES,
  NIES,
  NIES_REQ,
  NIES_FAQ,
  NASBA_PATHWAYS,
  STATE,
  STATE_TABLE,
} from "./blog-india";

const NIES_FEES: [string, string] = ["NASBA — International credential evaluation (fee and validity)", "https://nasba.org/blog/2019/02/11/international-credential-evaluation-for-cpa-examination-and-or-licensure/"];
const NIES_POLICIES: [string, string] = ["NASBA — NIES policies", "https://nasba.org/products/nasbainternationalevaluationservices/policies/"];
const NIES_UNDECIDED: [string, string] = ["NASBA — Undecided evaluation service that NIES offers", "https://nasba.org/blog/2023/03/15/undecided-evaluation-service-that-nies-offers/"];
const AICPA_STATES_2026: [string, string] = ["AICPA & CIMA — State policy trends shaping accounting in 2026", "https://www.aicpa-cima.com/advocacy/article/state-policy-trends-shaping-accounting-in-2026"];
const TX_PATHWAY: [string, string] = ["Texas State Board of Public Accountancy — New pathway for CPA exam and certification", "https://www.tsbpa.texas.gov/news/new-pathway-for-cpa-exam-and-certification/"];
const UGC_DEB: [string, string] = ["University Grants Commission (Government of India) — Distance Education Bureau", "https://deb.ugc.ac.in/"];

const FEE_TABLE = `
<table>
<thead><tr><th>Board</th><th>Education evaluation fee</th><th>Exam application fee</th><th>Exam section fee</th></tr></thead>
<tbody>
<tr><td>Alaska</td><td>$121</td><td>$109</td><td>$268.59</td></tr>
<tr><td>Colorado</td><td>$96</td><td>$96</td><td>$268.59</td></tr>
<tr><td>Guam</td><td>$136</td><td>$116</td><td>$268.59</td></tr>
<tr><td>Massachusetts</td><td>$136</td><td>$148</td><td>$268.59</td></tr>
<tr><td>Montana</td><td>$146</td><td>$96</td><td>$268.59</td></tr>
<tr><td>New Hampshire</td><td>$96</td><td>$171</td><td>$268.59</td></tr>
<tr><td>New York</td><td>$96</td><td>$96</td><td>$268.59</td></tr>
<tr><td>Washington</td><td>$96</td><td>$103</td><td>$268.59</td></tr>
</tbody>
</table>
<p><em>Fees shown on each board's NASBA page, October 2026. The exam application fee is paid per section application. Separate NIES and India international fees apply.</em></p>`;

export const indiaPosts2: BlogSeed[] = [
  {
    slug: "how-to-become-us-cpa-from-india-step-by-step",
    title: "How to Become a US CPA From India: Step-by-Step Process",
    category: "Indian Students",
    excerpt:
      "A ten-step checklist from collecting your mark sheets to receiving your licence — with what to do at each step, how long it takes and the mistakes that cause delays.",
    crux: [
      "Steps 1–3: Collect official documents, get an NIES evaluation (about six weeks once complete, $250), and choose a board whose rules you meet.",
      "Steps 4–6: Apply through NASBA's CPA Portal, receive a Notice to Schedule for each section, and pay NASBA's $460 India fee per section.",
      "Steps 7–8: Book Prometric at least 5 days ahead (45 recommended) and pass all four sections within your board's credit window — 30 months in most.",
      "Steps 9–10: Pass the ethics exam if your board requires one, complete verified experience and apply for the licence.",
      "Biggest delays: Universities slow to send sealed transcripts, applying to a board you don't qualify for, and letting an NTS expire.",
    ],
    content: `
<h2>Step 1: Collect your documents</h2>
<p>You'll need official mark sheets (transcripts) and degree certificates for every year of post-secondary study, your passport, and — if you're a CA — certificates and syllabi from ICAI. NIES requires documents to come <strong>directly from the issuing institution</strong> in a sealed envelope (or electronically from the institution), and everything must arrive within 90 days of applying. Start requesting them from your university early; this is the most common bottleneck.</p>

<h2>Step 2: Get your education evaluated</h2>
<p>For most boards, the evaluation is done by NASBA International Evaluation Services (NIES): $250, about six weeks once all documents are received. If you haven't chosen a board, NIES's undecided evaluation suggests up to three jurisdictions you qualify for. See <a href="/blog/us-cpa-credential-evaluation-documents-process-timeline">credential evaluation: documents, process and timeline</a>.</p>

<h2>Step 3: Choose a board</h2>
<p>Pick a board whose education, residency and Social Security number rules you meet, and which participates in international testing (Alabama, Idaho, North Carolina and the US Virgin Islands don't). See <a href="/blog/which-us-state-is-best-for-indian-cpa-candidates">which state is best for Indian candidates</a>.</p>

<h2>Step 4: Apply through NASBA</h2>
<p>For boards that use NASBA's CPA Examination Services, create an account on the NASBA CPA Portal, submit an education evaluation application, and once you're found eligible, apply for an exam section and pay. You apply for one section at a time. Some boards run their own application process instead. See <a href="/blog/how-to-apply-for-us-cpa-exam-through-nasba">how to apply through NASBA</a>.</p>

<h2>Step 5: Receive your Notice to Schedule (NTS)</h2>
<p>The NTS lets you book that section with Prometric. Its validity varies by board, and fees are non-refundable if it expires — so apply only for a section you're ready to take within about six months.</p>

<h2>Step 6: Register for international testing</h2>
<p>Every NTS starts as domestic. To test in India, register for international testing and pay NASBA's international administration fee — <strong>$460 per section for India</strong> — before scheduling. Wait at least 24 hours before booking.</p>

<h2>Step 7: Book with Prometric</h2>
<p>Schedule at least 5 days ahead; NASBA recommends 45 days. Rescheduling is free 61 or more days out; within 5–60 days there's a Prometric fee; within 2–5 days you pay the full seat fee; inside 24 hours no changes are possible. See <a href="/blog/how-to-schedule-us-cpa-exam-prometric">scheduling with Prometric</a>.</p>

<h2>Step 8: Pass all four sections</h2>
<p>Most boards give you 30 months from the release of your first passing score (Washington allows 36). Discipline sections can only be taken in January, April, July and October. Check score release dates in our <a href="/blog/cpa-exam-score-release-dates-2026-2027">score release calendar</a>.</p>

<h2>Step 9: Ethics exam</h2>
<p>Most boards require an ethics exam after passing — usually the AICPA's self-study ethics course — within a set period.</p>

<h2>Step 10: Experience and licensure</h2>
<p>Complete the board's experience requirement (usually one year verified by a licensed CPA; two years under the 120-hour pathway) and the licensure education requirement (150 hours, or 120 where the new pathway applies), then apply for your licence. See <a href="/blog/passing-cpa-exam-vs-getting-cpa-licence">passing vs licensure</a>.</p>

<div class="callout callout-tip">
<p><strong>Typical timeline:</strong> documents and evaluation 2–3 months → application and NTS a few weeks → exam 12–18 months → licence once experience is complete (often overlapping with the exam).</p>
</div>

${sources([NIES_REQ, NIES_FAQ, NASBA_FAQ, NASBA_INTL, NASBA_PATHWAYS])}
`,
  },
  {
    slug: "us-cpa-120-credits-vs-150-credits",
    title: "US CPA 120 Credits vs 150 Credits: Exam Eligibility and Licensure",
    category: "CPA Basics",
    excerpt:
      "Why 120 semester hours often gets you into the exam but 150 has traditionally been needed for the licence, the new 120-hour licensure pathway, which states have adopted it, and what it means for Indian candidates.",
    crux: [
      "Exam vs licence: Many boards let you sit for the exam with 120 semester hours (a bachelor's) but have required 150 for the licence.",
      "Three licensure pathways (UAA, 2025): Graduate degree in accounting + 1 year of experience; bachelor's + 30 extra hours (150) + 1 year; or — new — bachelor's in accounting (120) + 2 years of experience.",
      "Adoption: The AICPA reports that about half of states have adopted the third pathway; for example, Virginia from January 1, 2026 and Texas from August 1, 2026.",
      "Mobility: The model law is moving to an individual-based practice privilege, so mobility depends on the CPA's own credentials rather than the home state's.",
      "For Indian candidates: The new pathway helps if your evaluation shows a US-equivalent bachelor's — it doesn't help if your degree evaluates below 120 hours.",
    ],
    content: `
<h2>Where 120 and 150 come from</h2>
<p>A US bachelor's degree is about 120 semester hours. For decades, most states required <strong>150 hours</strong> — roughly a bachelor's plus a fifth year — for CPA licensure, while allowing candidates to <strong>sit for the exam</strong> at 120 hours. That two-tier system is why many candidates pass the exam before they're eligible for a licence.</p>

<h2>The three pathways in the Uniform Accountancy Act</h2>
<p>In 2025 NASBA and the AICPA updated the Uniform Accountancy Act (UAA) — the model law states use — to recognise three routes to licensure:</p>
<table>
<thead><tr><th>Pathway</th><th>Education</th><th>Experience</th><th>Exam</th></tr></thead>
<tbody>
<tr><td>1</td><td>Graduate degree in accounting</td><td>1 year</td><td>CPA Exam</td></tr>
<tr><td>2</td><td>Bachelor's in accounting + 30 additional hours (150 total)</td><td>1 year</td><td>CPA Exam</td></tr>
<tr><td>3 (new)</td><td>Bachelor's in accounting (120 hours)</td><td>2 years</td><td>CPA Exam</td></tr>
</tbody>
</table>
<p>The UAA is a model, not law. Each state must change its statute or rules, and the definition of qualifying experience is set by each board.</p>

<h2>Which states have adopted the new pathway?</h2>
<p>The AICPA reports that about half of the states have adopted the third pathway, with more planning legislation in 2026. Two examples from state boards:</p>
<ul>
<li><strong>Virginia</strong> — effective January 1, 2026.</li>
<li><strong>Texas</strong> — effective August 1, 2026 ("Pathway B"), requiring two years of full-time accounting experience directly supervised by a CPA.</li>
</ul>
<p>New York's board page also describes a 120-semester-hour licensure pathway from November 21, 2026. NASBA maintains a current list and map of jurisdictions on its New Licensure Pathways page — check it before you plan.</p>

<h2>Mobility changes too</h2>
<p>Previously, a CPA's ability to practise in another state depended on whether their home state was "substantially equivalent". The updated UAA moves to an <strong>individual-based practice privilege</strong>: mobility depends on the individual's own education, exam and experience. That reassures candidates who license through the 120-hour route.</p>

<h2>What it means for Indian candidates</h2>
<ul>
<li>If your evaluation shows a <strong>US-equivalent bachelor's degree with an accounting concentration</strong>, the new pathway may let you license without a fifth year of study — at the cost of an extra year of experience.</li>
<li>If your three-year degree evaluates <strong>below 120 hours</strong>, the new pathway doesn't remove the gap; you still need additional credits.</li>
<li>Some boards' new pathways specify a bachelor's degree in accounting, or a concentration — check the exact wording.</li>
<li>Washington's option of a bachelor's plus 30 additional hours for licensure is set to expire on December 31, 2035, showing how rules continue to shift.</li>
</ul>

<p>See also <a href="/blog/us-cpa-education-requirements-by-state">education requirements by state</a> and <a href="/blog/cpa-exam-eligibility-requirements">CPA eligibility requirements</a>.</p>

${sources([NASBA_PATHWAYS, ["NASBA — Ninth edition of the Uniform Accountancy Act", "https://nasba.org/blog/2025/07/22/nasba-and-aicpa-publish-ninth-edition-of-the-uniform-accountancy-act-uaa/"], AICPA_STATES_2026, TX_PATHWAY, STATE("New York", "new-york"), STATE("Washington", "washington")])}
`,
  },
  {
    slug: "which-us-state-is-best-for-indian-cpa-candidates",
    title: "Which US State Is Best for Indian CPA Candidates?",
    category: "Indian Students",
    excerpt:
      "There's no single best state — the right board depends on your degree, whether you're a CA, your licensing plans and your timeline. Here's a side-by-side comparison and how to choose for your profile.",
    crux: [
      "No single best state: The right board is the one whose education rules your evaluated degree meets — then everything else is a tie-breaker.",
      "Must-haves: The board accepts your evaluator, has no residency or SSN requirement for the exam, and participates in international testing.",
      "Common profiles: B.Com-only candidates often consider Alaska, Guam or Montana; B.Com + M.Com candidates have wider choice; CAs may find Montana's position on CA training helpful.",
      "Tie-breakers: Whether you can sit before finishing, credit window (Washington gives 36 months), fees and the licensure path (including experience verification).",
      "Let NIES help: The undecided evaluation suggests up to three jurisdictions you qualify for, based on education, residency and SSN rules.",
    ],
    content: `
<h2>Start with the non-negotiables</h2>
<ol>
<li><strong>Education</strong> — your evaluated degree must meet the board's rule to sit.</li>
<li><strong>Evaluator</strong> — the board must accept the evaluator you use. NIES is the only accepted evaluator for many boards.</li>
<li><strong>Residency, citizenship and SSN</strong> — none of the boards in the table below require residency or an SSN to sit, but Massachusetts requires an SSN, and some boards require one for licensure.</li>
<li><strong>International testing</strong> — Alabama, Idaho, North Carolina and the US Virgin Islands don't participate, so their candidates can't test in India.</li>
</ol>

<h2>Comparison of commonly considered boards</h2>
${STATE_TABLE}
${FEE_TABLE}

<h2>Choosing by profile</h2>
<table>
<thead><tr><th>Your profile</th><th>Boards to look at first</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Three-year B.Com only</td><td>Alaska, Guam, Montana</td><td>Options built around accounting and business credits, or allowing sitting before the degree is complete — subject to your evaluation</td></tr>
<tr><td>B.Com + M.Com (or MBA)</td><td>Most boards, including Colorado, Washington, New Hampshire</td><td>Total hours usually suffice; choose on credit mix, credit window and licensure plans</td></tr>
<tr><td>CA (with B.Com)</td><td>Montana first; then boards your academic credits qualify for</td><td>Montana's page says CA training may be acceptable alongside a completed academic pathway</td></tr>
<tr><td>Want maximum time to pass</td><td>Washington</td><td>36-month credit window vs 30 months elsewhere</td></tr>
<tr><td>Want to sit before finishing a degree</td><td>Alaska, Guam, Massachusetts</td><td>Early-sitting provisions (each with conditions)</td></tr>
</tbody>
</table>

<h2>Think about the licence now</h2>
<p>Exam rules and licensure rules differ. Before you commit, check:</p>
<ul>
<li>Does the board require 150 hours for licensure, or has it adopted the 120-hour + two-years pathway?</li>
<li>Does it accept experience gained outside the US, and must the verifying CPA hold that state's licence?</li>
<li>Is there an ethics exam, and is a US Social Security number required to license?</li>
</ul>
<p>You can transfer exam credit to another board later in many cases (Montana, for example, grants credit for sections passed elsewhere if earned under rules matching its own), but it's simpler to choose a board you can license with.</p>

<div class="callout callout-tip">
<p><strong>Don't pick a state from a forum post.</strong> Requirements change — New York's content requirements change on November 21, 2026, for instance. Use NIES's undecided evaluation or check each board's NASBA page before you pay.</p>
</div>

${sources([NASBA_STATES, NIES_UNDECIDED, NASBA_INTL, STATE("Montana", "montana"), STATE("Washington", "washington"), STATE("Alaska", "alaska"), STATE("Guam", "guam")])}
`,
  },
  {
    slug: "us-cpa-education-requirements-by-state",
    title: "US CPA Education Requirements by State: How to Compare Them",
    category: "CPA Basics",
    excerpt:
      "How to read and compare state education rules — total hours, accounting and business credits, upper-level and specific-course requirements, early sitting and evaluator rules — with a worked comparison of eight boards.",
    crux: [
      "Four numbers to compare: Total semester hours, accounting hours, business hours, and any upper-level or specific-course requirements.",
      "Specific courses: Some boards require named content — Colorado wants an audit course focused on US GAAS; Guam specifies economics, finance and business law within business hours.",
      "Timing: Some boards let you sit before finishing (Alaska, Guam, Massachusetts); others require everything complete at application (Washington, Colorado).",
      "Evaluator: Many boards accept only NIES; others also accept NACES members or named agencies.",
      "Exam vs licence: Always compare both — licensure often needs 150 hours or the new 120-hours-plus-experience pathway.",
    ],
    content: `
<h2>Key terms</h2>
<ul>
<li><strong>Semester hour (credit hour)</strong> — the US unit of academic credit. A full-time US academic year is about 30 semester hours; a bachelor's about 120.</li>
<li><strong>Accounting hours</strong> — credits in financial accounting, auditing, taxation, cost or managerial accounting, accounting information systems and similar.</li>
<li><strong>Business hours</strong> — credits in economics, finance, business law, management, marketing, statistics and information systems.</li>
<li><strong>Upper-division / non-introductory</strong> — advanced courses beyond the first-level principles courses.</li>
<li><strong>Concentration</strong> — a defined minimum of accounting and business hours, sometimes as part of a degree.</li>
</ul>

<h2>A worked comparison</h2>
${STATE_TABLE}
${FEE_TABLE}

<h2>How to compare, step by step</h2>
<ol>
<li><strong>Total hours</strong> — does your evaluation meet the board's total (often 120, or a bachelor's degree)?</li>
<li><strong>Accounting hours</strong> — compare your evaluated accounting credits with the board's minimum, and check any non-introductory requirement.</li>
<li><strong>Business hours</strong> — check the total and any named subjects.</li>
<li><strong>Specific courses</strong> — Colorado, for example, requires a 3-hour audit course focused on US generally accepted auditing standards; a foreign audit course must be shown to cover US GAAS with a school letter, syllabus and textbook details.</li>
<li><strong>Degree requirement</strong> — some boards require the bachelor's to be conferred (or equivalent) before you sit.</li>
<li><strong>Timing</strong> — can you sit before finishing?</li>
<li><strong>Evaluator</strong> — is your evaluator accepted?</li>
<li><strong>Licensure</strong> — what does the licence need, and can you meet it?</li>
</ol>

<h2>Upcoming changes to watch</h2>
<ul>
<li><strong>New York</strong> — from November 21, 2026, required accounting content expands to include upper-division accounting information systems, and business content expands to information systems, business law, data analytics, economics and finance.</li>
<li><strong>New licensure pathways</strong> — about half of states have adopted the bachelor's-plus-two-years route, with more expected.</li>
</ul>

<div class="callout callout-example">
<p><strong>Example:</strong> A candidate's evaluation shows 132 semester hours, 27 accounting hours (18 non-introductory, no US-focused audit course) and 30 business hours. Washington's concentration (24 + 24) is met. Colorado's isn't — it needs 21 non-introductory accounting hours and a US GAAS audit course. New Hampshire needs 30 accounting hours, so it's 3 hours short.</p>
</div>

${sources([NASBA_STATES, STATE("Colorado", "colorado"), STATE("New York", "new-york"), STATE("Washington", "washington"), STATE("New Hampshire", "new-hampshire"), NASBA_PATHWAYS])}
`,
  },
  {
    slug: "how-indian-ca-qualifications-are-evaluated-for-cpa",
    title: "How Indian CA Qualifications Are Evaluated for US CPA Eligibility",
    category: "Indian Students",
    excerpt:
      "What NIES does with ICAI coursework, which boards accept or reject it, the documents ICAI must send, and how CAs should plan their evaluation to avoid surprises.",
    crux: [
      "Case by case: NIES says it evaluates coursework from accounting professional organisations case by case — it isn't automatically converted to semester hours.",
      "What NIES needs: Official ICAI certificates and examination information, plus study plans, syllabi or course descriptions, sent in a sealed envelope by ICAI.",
      "Board acceptance varies: New York, Alaska, Massachusetts and New Hampshire don't accept CA coursework; Montana says it may be acceptable alongside a completed academic pathway.",
      "Academic degrees still matter most: Your B.Com, M.Com and other university degrees are the basis of most evaluations.",
      "No reciprocity shortcut: ICAI has no mutual recognition agreement with the US boards, so the IQEX route isn't available to Indian CAs.",
    ],
    content: `
<h2>The NIES position</h2>
<p>NASBA International Evaluation Services (NIES) states: "We will evaluate coursework from accounting professional organizations on a case-by-case basis. If you have coursework from the Institute of Chartered Accountants or a similar organization, please have your official certificates and examination information along with study plans, syllabi, or course descriptions sent in a sealed envelope from the issuing organization." NIES also notes that certain jurisdictions will accept credits from professional organisations if they're determined to be equivalent to academic study at an accredited US institution.</p>

<h2>What boards say</h2>
<table>
<thead><tr><th>Board</th><th>Position on CA coursework (NASBA state page)</th></tr></thead>
<tbody>
<tr><td>New York</td><td>Professional training — not accepted toward education requirements</td></tr>
<tr><td>Alaska</td><td>Not accepted</td></tr>
<tr><td>Massachusetts</td><td>Not accepted</td></tr>
<tr><td>New Hampshire</td><td>Not accepted</td></tr>
<tr><td>Guam</td><td>Professional training not accepted</td></tr>
<tr><td>District of Columbia</td><td>Requirements must be met through academic coursework at an accredited institution; professional training not accepted</td></tr>
<tr><td>Montana</td><td>May be acceptable if the academic pathway was completed and an international evaluation is submitted</td></tr>
</tbody>
</table>
<p>Other boards may not address CA coursework explicitly — ask NIES or the board before you rely on it.</p>

<h2>Documents to arrange</h2>
<ul>
<li>From each university: official mark sheets and degree certificates, sent directly in sealed envelopes (or electronically from the institution).</li>
<li>From ICAI: official certificates (membership or examination), examination information and syllabi or course descriptions, sent directly by ICAI in a sealed envelope.</li>
<li>Your passport or government ID, uploaded to your NIES account.</li>
<li>Translations, if any document isn't in English, from an approved source.</li>
</ul>

<h2>How CAs should plan</h2>
<ol>
<li><strong>Assume your degrees carry the evaluation.</strong> Treat any CA credit as a bonus, not the plan.</li>
<li><strong>Check the credit mix of your degrees</strong> — often B.Com alone falls short of 120 hours; B.Com plus M.Com is common.</li>
<li><strong>Consider Montana</strong> if your degree evaluation leaves a gap that CA training might fill — and confirm with NIES before relying on it.</li>
<li><strong>Use the undecided evaluation</strong> if you're unsure; it reports total, accounting and business credits and up to three jurisdictions.</li>
<li><strong>Appeal within 60 days</strong> if you believe the evaluation is wrong — NIES allows questions about content and outcome within 60 days of the report.</li>
</ol>

<p>Read next: <a href="/blog/can-indian-chartered-accountant-become-us-cpa">can an Indian CA become a US CPA?</a></p>

${sources([NIES_REQ, NIES, NIES_POLICIES, STATE("New York", "new-york"), STATE("Montana", "montana"), STATE("DC", "dc"), ["NASBA — Mutual recognition agreements (IQAB)", "https://nasba.org/international/mra/"]])}
`,
  },
  {
    slug: "us-cpa-credential-evaluation-documents-process-timeline",
    title: "US CPA Credential Evaluation: Documents, Process and Timeline",
    category: "Indian Students",
    excerpt:
      "How a foreign credential evaluation works for the CPA — what NIES charges, which documents it needs and how they must be sent, how long it takes, what the report shows, and the rules that catch people out.",
    crux: [
      "Purpose: Converts your Indian education into US semester hours and identifies accounting and business credits, for a specific board.",
      "Fee and time: NIES charges $250 for the evaluation and currently completes it in about six weeks after receiving all documents.",
      "Document rules: Official documents must come directly from the institution in a sealed envelope (or electronically from it); every year of post-secondary study must be documented; everything must arrive within 90 days.",
      "Validity: The report is available to your board for one year (a $25 duplicate fee applies after that) and is not valid after five years.",
      "No refunds: NIES doesn't refund fees; incomplete applications are denied and the fee forfeited.",
    ],
    content: `
<h2>What the evaluation does</h2>
<p>US boards can't assess Indian mark sheets directly, so they rely on approved evaluators. The report lists the institutions you attended, your dates of attendance, the credentials earned and their US equivalent, and every course with its US semester-hour value — classified as accounting, business or other. Each report is tied to a specific jurisdiction and, as NASBA notes, the evaluation itself doesn't determine your eligibility — the board does.</p>

<h2>Fees (NIES)</h2>
<table>
<thead><tr><th>Service</th><th>Fee</th></tr></thead>
<tbody>
<tr><td>International credential evaluation</td><td>$250</td></tr>
<tr><td>Additional education evaluation (adding new study to a report under 5 years old)</td><td>$135</td></tr>
<tr><td>Duplicate report (report over 1 year old)</td><td>$25</td></tr>
<tr><td>Education verification (if your university can't send official documents)</td><td>Additional fee; no standard turnaround</td></tr>
<tr><td>Translation</td><td>Charged per page</td></tr>
</tbody>
</table>
<p>Your board may also charge its own education evaluation fee when you apply.</p>

<h2>Documents</h2>
<ul>
<li>A copy of your passport or government ID, uploaded to your NIES account.</li>
<li>Official transcripts (mark sheets) and degree certificates for every year of post-secondary education. Completing a higher degree isn't accepted as proof of earlier study.</li>
<li>Documents sent <strong>directly by the institution</strong> by post in an unopened sealed envelope, or electronically from the institution to NIES. NIES no longer accepts irreplaceable original documents.</li>
<li>Syllabi or course descriptions for accounting and business courses, if requested — on university letterhead or published on the university's website.</li>
<li>For ICAI coursework: certificates, examination information and syllabi sent by ICAI.</li>
<li>English translations from an approved source if documents aren't in English — translations from private providers outside the US aren't accepted.</li>
</ul>

<h2>Timeline</h2>
<ol>
<li><strong>Apply online and pay</strong> — by credit card.</li>
<li><strong>Request documents from universities</strong> — use NIES's transcript request form if your university needs one. All documents must arrive within <strong>90 days</strong>.</li>
<li><strong>Evaluation</strong> — about <strong>six weeks</strong> after the file is complete.</li>
<li><strong>Report released</strong> to your chosen board.</li>
</ol>
<p>In practice, collecting sealed documents from Indian universities is usually the slowest part, so allow two to three months end to end.</p>

<h2>After the report</h2>
<ul>
<li>You have <strong>60 days</strong> to question the content or outcome; reviews take at least 10 business days and changes aren't guaranteed.</li>
<li>The report remains available to the board for one year, and is not valid after five years.</li>
<li>Changing boards later requires a change-in-jurisdiction service.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Common mistakes:</strong> sending documents yourself instead of from the university; forgetting a year of study; missing the 90-day window; and choosing a board before knowing your credit count.</p>
</div>

${sources([NIES, NIES_REQ, NIES_FAQ, NIES_POLICIES, NIES_FEES, ["NASBA — Additional education evaluation", "https://nasba.org/blog/2019/02/11/additional-education-evaluation-for-cpa-examination-and-or-licensure/"]])}
`,
  },
  {
    slug: "nies-vs-other-credential-evaluation-agencies-cpa",
    title: "NIES vs Other Credential Evaluation Agencies for CPA Candidates",
    category: "Indian Students",
    excerpt:
      "Which boards accept only NASBA's NIES, which accept other agencies, how to compare evaluators, and why choosing the wrong one can cost you time and fees.",
    crux: [
      "The board decides: Each board approves its own evaluators. Using an agency your board doesn't accept wastes the fee.",
      "NIES-only boards: NASBA lists 26 jurisdictions where NIES is the only approved provider, including Alaska, Illinois, Montana, New Hampshire, New York (exam), Washington and DC.",
      "Boards accepting others: Colorado accepts NIES, NACES members or AICE; Guam accepts NIES, FACS or ERES; Massachusetts accepts NIES or CED.",
      "NIES specifics: $250, about six weeks, evaluates only for the CPA profession, offers an undecided evaluation, and doesn't evaluate for New York licensure.",
      "Texas: Not among the jurisdictions NIES serves — Texas candidates must follow the Texas board's own requirements.",
    ],
    content: `
<h2>Why the evaluator matters</h2>
<p>A credential evaluation is only useful if your board accepts it. Boards approve evaluators individually, and many accept only NASBA International Evaluation Services (NIES). If you pay a different agency and then apply to an NIES-only board, you'll have to start again.</p>

<h2>Boards where NIES is the only approved provider</h2>
<p>According to NIES: Alabama, Alaska, Arizona, the Commonwealth of the Northern Mariana Islands, Georgia, Hawaii, Idaho, Illinois, Kansas, Maryland, Mississippi, Missouri, Montana, Nevada, New Hampshire, New Jersey, New York, North Carolina (with prior approval from the North Carolina board), Oklahoma, Oregon, Puerto Rico, South Carolina, Washington, Washington DC, West Virginia and Wyoming.</p>

<h2>Boards that accept other evaluators (examples)</h2>
<table>
<thead><tr><th>Board</th><th>Accepted evaluators (NASBA state page)</th></tr></thead>
<tbody>
<tr><td>Colorado</td><td>NIES, any NACES member agency, or AICE</td></tr>
<tr><td>Guam</td><td>NIES, FACS or ERES</td></tr>
<tr><td>Massachusetts</td><td>NIES or CED</td></tr>
</tbody>
</table>
<p>NACES (National Association of Credential Evaluation Services) and AICE (Association of International Credential Evaluators) are membership associations of private evaluation firms.</p>

<h2>Comparing NIES with others</h2>
<table>
<thead><tr><th></th><th>NIES</th><th>Other approved agencies</th></tr></thead>
<tbody>
<tr><td>Focus</td><td>CPA examination and licensure only</td><td>General academic, immigration and employment evaluations, with CPA-specific reports</td></tr>
<tr><td>Fee</td><td>$250</td><td>Set by each agency — compare course-by-course report prices</td></tr>
<tr><td>Turnaround</td><td>About six weeks after documents are complete</td><td>Varies; some offer rush service</td></tr>
<tr><td>Board acceptance</td><td>Over 50 jurisdictions</td><td>Only boards that list the agency</td></tr>
<tr><td>Extras</td><td>Undecided evaluation (up to three jurisdictions); additional education evaluation ($135)</td><td>Varies</td></tr>
</tbody>
</table>

<h2>Special cases</h2>
<ul>
<li><strong>New York</strong> — NIES evaluates for exam eligibility, but not for New York licensure; the New York board reviews international education for licensure itself.</li>
<li><strong>Texas</strong> — NIES's list of jurisdictions served doesn't include Texas; follow the Texas State Board of Public Accountancy's own process.</li>
<li><strong>Illinois</strong> — NIES only, with a course-by-course evaluation required.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Rule of thumb:</strong> If you're not certain which board you'll use, start with NIES — it's accepted by the most boards, and its undecided evaluation helps you choose.</p>
</div>

${sources([NIES, NIES_FAQ, ["NASBA — NIES services and fees", "https://nasba.org/products/nasbainternationalevaluationservices/services-and-fees/"], STATE("Colorado", "colorado"), STATE("Guam", "guam"), STATE("Massachusetts", "massachusetts"), STATE("Illinois", "illinois")])}
`,
  },
  {
    slug: "can-indian-bcom-degree-meet-us-cpa-requirements",
    title: "Can an Indian B.Com Degree Meet US CPA Education Requirements?",
    category: "Indian Students",
    excerpt:
      "How B.Com papers typically map to accounting and business credits, why three- and four-year degrees evaluate differently, what NEP 2020's four-year programmes mean, and how to check your own degree.",
    crux: [
      "Two tests: Total semester hours (often 120 or a US-equivalent bachelor's) and the mix of accounting and business credits.",
      "Credit mix: B.Com papers in accounting, auditing, taxation and cost accounting generally go toward accounting hours; economics, law, statistics and management toward business hours — the evaluator decides.",
      "Duration matters: Three-year degrees often evaluate below 120 hours; four-year undergraduate programmes introduced under NEP 2020 may fare better.",
      "What a B.Com alone can do: Meet some boards' requirements (subject to evaluation) — for example, Alaska's 15-accounting-hour option or Montana's 24 + 24 credit rule.",
      "Check before you plan: An NIES evaluation — or its undecided service — is the only reliable answer for your specific degree.",
    ],
    content: `
<h2>How B.Com papers usually map</h2>
<table>
<thead><tr><th>Typical B.Com subject</th><th>Likely US classification</th></tr></thead>
<tbody>
<tr><td>Financial accounting, corporate accounting, advanced accounting</td><td>Accounting</td></tr>
<tr><td>Auditing</td><td>Accounting (some boards want US GAAS content specifically)</td></tr>
<tr><td>Income tax, GST</td><td>Accounting (taxation)</td></tr>
<tr><td>Cost accounting, management accounting</td><td>Accounting</td></tr>
<tr><td>Business economics, banking, finance</td><td>Business</td></tr>
<tr><td>Business law, company law</td><td>Business</td></tr>
<tr><td>Business statistics, business mathematics</td><td>Business</td></tr>
<tr><td>Management, marketing, entrepreneurship</td><td>Business</td></tr>
<tr><td>Languages, environmental studies, general electives</td><td>General (counts toward total only)</td></tr>
</tbody>
</table>
<p>This is a guide only — evaluators classify each course using its syllabus, and some boards count only upper-level accounting courses.</p>

<h2>Three-year vs four-year degrees</h2>
<p>A US bachelor's degree is typically four years and about 120 semester hours. Because a traditional Indian B.Com is three years, it often evaluates to fewer hours or may not be treated as equivalent to a US bachelor's degree. India's National Education Policy 2020 introduced four-year undergraduate programmes (with honours and research options) under the University Grants Commission's curriculum and credit framework; a four-year degree is more likely to reach the 120-hour threshold, though only the evaluation decides.</p>

<h2>Where a B.Com alone may work</h2>
<ul>
<li><strong>Alaska</strong> — one option is a bachelor's degree with 15 semester hours of accounting; candidates can also sit within 18 semester hours of finishing a degree.</li>
<li><strong>Guam</strong> — a bachelor's degree with 24 accounting and 24 business hours (including economics, finance and business law).</li>
<li><strong>Montana</strong> — the exam requirement is stated as 24 accounting hours above introductory level and 24 business hours.</li>
</ul>
<p>In each case, your degree must be evaluated as meeting the rule — including, where required, equivalence to a US bachelor's degree.</p>

<h2>If your B.Com falls short</h2>
<ul>
<li>Add an M.Com, MBA or targeted recognised coursework, then add it to your NIES report ($135 within five years).</li>
<li>For licensure, plan for 150 hours or a state with the 120-hours-plus-two-years pathway.</li>
</ul>

<h2>How to check your degree</h2>
<ol>
<li>List every paper from your mark sheets and tag each as accounting, business or general.</li>
<li>Get syllabi for accounting and business papers — evaluators may ask for them.</li>
<li>Apply for an NIES evaluation, or the undecided evaluation if you haven't chosen a board.</li>
</ol>

<p>Related: <a href="/blog/cpa-after-bcom-complete-roadmap">US CPA eligibility after B.Com</a> and <a href="/blog/does-distance-or-online-bcom-count-for-us-cpa">does distance or online B.Com count?</a></p>

${sources([NIES_REQ, NIES_UNDECIDED, STATE("Alaska", "alaska"), STATE("Guam", "guam"), STATE("Montana", "montana"), ["University Grants Commission (Government of India)", "https://www.ugc.gov.in/"]])}
`,
  },
  {
    slug: "does-distance-or-online-bcom-count-for-us-cpa",
    title: "Does Distance or Online B.Com Count for US CPA Eligibility?",
    category: "Indian Students",
    excerpt:
      "What NASBA and the boards say (and don't say) about distance and online degrees, why recognition and verifiable documents matter most, and how to protect yourself before relying on one.",
    crux: [
      "No published distance-specific rule: NASBA's NIES pages don't distinguish distance, online or regular study — they focus on recognised institutions and verifiable official documents.",
      "Recognition matters: NIES may verify documents with institutions and government bodies and won't evaluate documents it can't verify. In India, distance and online programmes are regulated by the University Grants Commission.",
      "Credits are still assessed course by course: A distance B.Com has the same three-year structure, so the same 120-hour question applies.",
      "Board views can differ: Some boards may scrutinise the institution's accreditation or the mode of study — check before applying.",
      "Protect yourself: Confirm the programme was UGC-recognised for that mode and year, and request official sealed transcripts like any other degree.",
    ],
    content: `
<h2>What NASBA says</h2>
<p>NASBA International Evaluation Services doesn't publish a rule specific to distance, correspondence or online degrees. What it does require:</p>
<ul>
<li>Official documents for each year of post-secondary study, sent directly from the issuing institution.</li>
<li>Documents that can be verified — NIES may contact institutions and government entities to verify them, and "if your educational documents cannot be verified, we will not perform an evaluation."</li>
<li>Where an institution no longer exists, documents from the relevant ministry of education or governmental accrediting body.</li>
</ul>
<p>In short, the mode of study isn't the deciding factor in NIES's published rules — the recognition of the institution and the verifiability of the records are.</p>

<h2>Recognition in India</h2>
<p>In India, open and distance learning (ODL) and online programmes are regulated by the University Grants Commission (UGC), through its Distance Education Bureau. Institutions need recognition for each programme and mode. A distance B.Com from a university recognised by the UGC for that programme and period is a recognised Indian degree; one from an unrecognised provider may not be evaluable at all.</p>

<h2>How credits are assessed</h2>
<p>Like a regular B.Com, a distance B.Com is normally three years, so the same questions apply: does it reach 120 semester hours or US bachelor's equivalence, and does it contain enough accounting and business credits? Many CA students take a distance B.Com alongside CA; if so, plan for the same credit top-up (M.Com, MBA or targeted courses) that regular B.Com graduates often need.</p>

<h2>Board-level scrutiny</h2>
<p>Boards rely on evaluators, but some also set rules about accreditation of the institution. A board may question a programme if the evaluator flags concerns. Ask NIES — or the board — before you invest in further steps, especially if your degree came from a less widely known provider.</p>

<h2>Checklist before relying on a distance or online degree</h2>
<ol>
<li>Confirm the university and programme were recognised by the UGC for that mode during your years of study.</li>
<li>Request official mark sheets and the degree certificate, sent directly by the university.</li>
<li>Keep syllabi for accounting and business papers.</li>
<li>If the university can't issue official documents, ask about NIES's education verification service (an additional fee, with no standard turnaround).</li>
<li>Get evaluated before choosing a board.</li>
</ol>

${sources([NIES_REQ, NIES_FAQ, NIES_POLICIES, UGC_DEB, ["University Grants Commission (Government of India)", "https://www.ugc.gov.in/"]])}
`,
  },
  {
    slug: "how-to-apply-for-us-cpa-exam-through-nasba",
    title: "How to Apply for the US CPA Exam Through NASBA",
    category: "Indian Students",
    excerpt:
      "The application flow on NASBA's CPA Portal — education evaluation, eligibility, section applications, payment, the Notice to Schedule and international registration — plus boards that run their own process.",
    crux: [
      "Portal: Boards using NASBA's CPA Examination Services take applications through the NASBA CPA Portal; you can be a candidate in only one jurisdiction at a time.",
      "Two stages: First an education evaluation application to establish eligibility (which can take up to six weeks), then an exam section application for each section.",
      "One section at a time: Each section application leads to its own Notice to Schedule (NTS), valid for a board-set period and one testing event.",
      "International: After receiving the NTS, register to test internationally and pay $460 per section for India; wait 24 hours before booking with Prometric.",
      "Other boards: Some boards (such as Illinois and Florida) handle parts of the application themselves — follow their instructions.",
    ],
    content: `
<h2>Before you start</h2>
<ul>
<li>A completed credential evaluation sent to your chosen board (NIES or another approved evaluator).</li>
<li>Your passport — your name must match exactly across the application, NTS and ID.</li>
<li>A card for payments.</li>
</ul>

<h2>Step 1: Create a CPA Portal account</h2>
<p>For boards that use NASBA's CPA Examination Services (CPAES), applications are made through the NASBA CPA Portal. You can apply to any jurisdiction whose requirements you meet, but you can't be a candidate in more than one jurisdiction at the same time. There's no application deadline.</p>

<h2>Step 2: Education evaluation application</h2>
<p>Submit the board's education evaluation application and pay its fee (for example, $96 for Washington, $146 for Montana). NASBA reviews your evaluation against the board's rules — this can take up to six weeks.</p>

<h2>Step 3: Exam section application</h2>
<p>Once you're found eligible, apply for an exam section and pay the board's exam application fee plus the $268.59 examination fee. Apply only for a section you can take within about six months: fees aren't refundable and there are no extensions if your NTS expires.</p>

<h2>Step 4: Receive your Notice to Schedule</h2>
<p>The NTS confirms you can book that section. It's valid for one testing event or until its expiry date, whichever comes first; the validity period varies by jurisdiction. No changes can be made to an NTS less than five days before your appointment.</p>

<h2>Step 5: Register to test in India</h2>
<p>All NTSs start as domestic. In the portal, register for international testing and pay the international administration fee — <strong>$460 per section for India</strong> — then wait at least 24 hours before scheduling. The fee applies every time you test internationally and is non-refundable.</p>

<h2>Step 6: Book with Prometric</h2>
<p>Schedule on Prometric's website at least five days in advance (45 recommended), choosing the international version of your section. Bring your NTS and passport on exam day. See <a href="/blog/how-to-schedule-us-cpa-exam-prometric">scheduling through Prometric</a>.</p>

<h2>Boards with their own process</h2>
<p>Some boards run parts of the process themselves. For example, NASBA's Illinois page directs candidates to the Illinois Board of Examiners for eligibility, and the Florida page directs candidates to the Florida Board of Accountancy. Testing accommodations are also handled by the board in some cases. Always start from your board's page on nasba.org.</p>

<h2>After testing</h2>
<p>Scores appear in the NASBA candidate portal and the NASBA CPA Mobile app on the target release date or within about 48 hours. If you fail, reapply for the section through the portal — you can retake as soon as you receive your score, reregister and obtain a new NTS.</p>

${sources([NASBA_FAQ, NASBA_INTL, NASBA_STATES, STATE("Illinois", "illinois"), STATE("Florida", "florida"), ["NASBA — CPA Exam score information", "https://nasba.org/exams/cpaexam/scores/"]])}
`,
  },
];
