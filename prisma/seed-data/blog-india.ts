import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

/**
 * India-focused CPA pathway posts. Sources: NASBA (exam administration, NIES, state
 * pages), AICPA, ICAI (a statutory body under the Chartered Accountants Act, 1949),
 * US BLS and state boards. State-specific facts are as published on NASBA's state
 * pages in October 2026 and must be rechecked before relying on them.
 */

export const NASBA_INTL: [string, string] = ["NASBA — CPA Exam International Administration", "https://nasba.org/internationalexam/"];
export const NASBA_INDIA: [string, string] = ["NASBA — CPA Exam available in India", "https://nasba.org/cpaexam-india/"];
export const NASBA_FAQ: [string, string] = ["NASBA — CPA Exam FAQ", "https://nasba.org/exams/cpaexam/examfaq/"];
export const NASBA_STATES: [string, string] = ["NASBA — CPA Exam: state-by-state requirements", "https://nasba.org/exams/cpaexam/"];
export const NIES: [string, string] = ["NASBA — International Evaluation Services (NIES)", "https://nasba.org/products/nasbainternationalevaluationservices/"];
export const NIES_REQ: [string, string] = ["NASBA — NIES requirements", "https://nasba.org/products/nasbainternationalevaluationservices/requirements/"];
export const NIES_FAQ: [string, string] = ["NASBA — NIES frequently asked questions", "https://nasba.org/products/nasbainternationalevaluationservices/faq/"];
export const NASBA_PATHWAYS: [string, string] = ["NASBA — New CPA licensure pathways and CPA mobility", "https://nasba.org/blog/2025/12/23/new-cpa-licensure-pathways-and-cpa-mobility/"];
export const NASBA_SCORES: [string, string] = ["NASBA — CPA Exam score information", "https://nasba.org/exams/cpaexam/scores/"];
export const NASBA_MRA: [string, string] = ["NASBA — Mutual recognition agreements (IQAB)", "https://nasba.org/international/mra/"];
export const AICPA_PASS: [string, string] = ["AICPA & CIMA — The new CPA Exam, two years in (2025 pass rates)", "https://www.aicpa-cima.com/professional-insights/article/the-new-cpa-exam-two-years-in"];
export const AICPA_BLUEPRINTS: [string, string] = ["AICPA & CIMA — CPA Exam Blueprints", "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam"];
export const ICAI_SCHEME: [string, string] = ["ICAI — Scheme of Education and Training", "https://www.icai.org/post/scheme-of-education-and-training"];
export const BLS: [string, string] = ["US Bureau of Labor Statistics — Accountants and Auditors (Occupational Outlook Handbook)", "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm"];
export const STATE = (name: string, slug: string): [string, string] => [`NASBA — ${name} CPA Exam requirements`, `https://nasba.org/exams/cpaexam/${slug}/`];

/** Shared table of the education rules on NASBA's state pages (October 2026). */
export const STATE_TABLE = `
<table>
<thead><tr><th>Jurisdiction</th><th>Education to sit (summary)</th><th>Sit before finishing?</th><th>Evaluator</th><th>CA coursework</th><th>Credit window</th></tr></thead>
<tbody>
<tr><td>Alaska</td><td>Bachelor's + 24 accounting hrs + business law, economics and maths/stats/CS; <em>or</em> bachelor's + 15 accounting hrs; other options</td><td>Yes — within 18 semester hours of the degree</td><td>NIES only</td><td>Not accepted</td><td>30 months</td></tr>
<tr><td>Colorado</td><td>Bachelor's or higher with at least 120 credit hrs; 27 accounting hrs (21 above intro, including a US GAAS audit course); 21 business hrs</td><td>No</td><td>NIES, NACES members or AICE</td><td>—</td><td>30 months</td></tr>
<tr><td>Guam</td><td>Bachelor's in accounting (AACSB school); or business degree + 24 upper accounting hrs; or bachelor's + 24 accounting + 24 business hrs</td><td>Yes — if finishing within 18 months</td><td>NIES, FACS or ERES</td><td>Professional training not accepted</td><td>30 months</td></tr>
<tr><td>Massachusetts</td><td>Bachelor's; 120 of the 150 hrs; 21 accounting hrs; 9 business hrs</td><td>Yes — within 90 days</td><td>NIES or CED</td><td>Not accepted</td><td>30 months</td></tr>
<tr><td>Montana</td><td>24 accounting hrs above intro + 24 business hrs</td><td>No</td><td>NIES</td><td>"May be acceptable" if the academic pathway was completed</td><td>30 months</td></tr>
<tr><td>New Hampshire</td><td>Bachelor's with 120 hrs; 30 accounting hrs; 24 business hrs</td><td>Not stated</td><td>NIES</td><td>Not accepted</td><td>30 months</td></tr>
<tr><td>New York</td><td>120 hrs with specified accounting and business content (content areas expand from November 21, 2026)</td><td>—</td><td>NIES for exam eligibility only</td><td>Not accepted</td><td>30 months</td></tr>
<tr><td>Washington</td><td>Bachelor's with an accounting concentration (24 accounting + 24 business hrs)</td><td>No</td><td>NIES only</td><td>—</td><td>36 months</td></tr>
</tbody>
</table>
<p><em>Summarised from each board's page on nasba.org (October 2026). Rules change — always confirm with the board before applying. "—" means the page doesn't say.</em></p>`;

export const indiaPosts: BlogSeed[] = [
  {
    slug: "us-cpa-in-india-complete-guide-for-beginners",
    title: "US CPA in India: Complete Guide for Beginners",
    category: "Indian Students",
    excerpt:
      "Everything an Indian student or professional needs to know to start the US CPA: what it is, eligibility, the evaluation, applying through a state board, testing in India, costs, timelines and licensure.",
    crux: [
      "What it is: The US CPA is a licence issued by a US state board of accountancy. You qualify through Education, the Exam and Experience.",
      "Eligibility: Each of the 55 US boards sets its own rules. Indian degrees are converted to US semester hours by an approved evaluator — NASBA's NIES for most boards.",
      "The exam: Four 4-hour sections — FAR, AUD and REG plus one of BAR, ISC or TCP — and you can sit all of them at Prometric centres in eight Indian cities.",
      "Cost: Roughly $3,650–$4,000 in fees for an Indian candidate who passes everything first time, before any review course; NASBA's India fee alone is $460 per section.",
      "Timeline: Expect 2–4 months of paperwork and 12–18 months to pass; licensure then needs verified experience.",
    ],
    content: `
<h2>What the US CPA is</h2>
<p>Certified Public Accountant (CPA) is the US licence to practise public accounting. It's issued by individual state and territory boards of accountancy — 55 in total — not by a central body. The exam itself is uniform: the American Institute of CPAs (AICPA) writes and scores it, the National Association of State Boards of Accountancy (NASBA) administers it for most boards, and Prometric delivers it at test centres. To become licensed you need the "three Es": <strong>Education</strong>, the <strong>Exam</strong> and <strong>Experience</strong>.</p>

<h2>The exam in brief</h2>
<ul>
<li>Three compulsory <strong>Core</strong> sections: Financial Accounting and Reporting (FAR), Auditing and Attestation (AUD), and Taxation and Regulation (REG).</li>
<li>One <strong>Discipline</strong> of your choice: Business Analysis and Reporting (BAR), Information Systems and Controls (ISC), or Tax Compliance and Planning (TCP).</li>
<li>Each section is four hours, in English only, with multiple-choice questions and task-based simulations. A score of 75 (on a 0–99 scale) passes.</li>
<li>Core sections can be taken year-round; Discipline sections only in the first month of each quarter.</li>
</ul>
<p>Read the full breakdown in <a href="/blog/us-cpa-exam-format-explained">US CPA exam format explained</a>.</p>

<h2>Step-by-step overview</h2>
<ol>
<li><strong>Check your education</strong> — most boards want a bachelor's degree or 120 US semester hours with set accounting and business credits to sit. See <a href="/blog/cpa-after-bcom-complete-roadmap">eligibility after B.Com</a> and <a href="/blog/us-cpa-eligibility-after-mcom-in-india">after M.Com</a>.</li>
<li><strong>Get a credential evaluation</strong> — NASBA International Evaluation Services (NIES) charges $250 and takes about six weeks once all documents arrive. See <a href="/blog/us-cpa-credential-evaluation-documents-process-timeline">the evaluation process</a>.</li>
<li><strong>Choose a state board</strong> whose rules you meet — see <a href="/blog/which-us-state-is-best-for-indian-cpa-candidates">which state is best for Indian candidates</a>.</li>
<li><strong>Apply and pay</strong> through NASBA's CPA Portal, one section at a time, to receive a Notice to Schedule (NTS).</li>
<li><strong>Register for international testing</strong> and pay NASBA's India fee of $460 per section, then book with Prometric.</li>
<li><strong>Pass all four sections</strong> within your board's credit window — 30 months in most jurisdictions.</li>
<li><strong>Meet licensure requirements</strong> — education (often 150 hours, or 120 hours plus two years' experience in states that have adopted the new pathway), experience, and usually an ethics exam.</li>
</ol>

<h2>Testing in India</h2>
<p>NASBA lists eight Prometric test centres in India: Ahmedabad, Bangalore, Kolkata, Chennai, Hyderabad, Mumbai, New Delhi and Thiruvananthapuram. Candidates from boards that don't take part in international testing — Alabama, Idaho, North Carolina and the US Virgin Islands — must test in the US. Read <a href="/blog/us-cpa-exam-centres-in-india-booking">exam centres in India and booking</a>.</p>

<h2>What it costs</h2>
<table>
<thead><tr><th>Item</th><th>Approximate cost</th></tr></thead>
<tbody>
<tr><td>NIES evaluation</td><td>$250</td></tr>
<tr><td>Board education evaluation fee (one time)</td><td>$96–$146 on the boards we checked</td></tr>
<tr><td>Board application fees (4 × $96–$171)</td><td>About $384–$684</td></tr>
<tr><td>Exam section fees (4 × $268.59)</td><td>About $1,075</td></tr>
<tr><td>India international fee (4 × $460)</td><td>$1,840</td></tr>
<tr><td><strong>Total, first-time passes, before review course</strong></td><td><strong>About $3,650–$4,000</strong></td></tr>
</tbody>
</table>
<p>Full breakdown: <a href="/blog/how-much-does-us-cpa-cost-for-indian-student">US CPA total cost in India</a>. Use our <a href="/fees">Fee Estimator</a> for current figures.</p>

<h2>How long it takes</h2>
<ul>
<li>Evaluation and application: typically 2–4 months, including document collection.</li>
<li>Exam: most working candidates take 12–18 months to pass all four sections.</li>
<li>Licensure: one to two years of verified experience, which can often overlap with the exam period.</li>
</ul>

<h2>Passing isn't the same as being licensed</h2>
<p>Many Indian professionals pass the exam and use "CPA exam passed" on their CV; to use the title "CPA" you must be licensed by a board. See <a href="/blog/passing-cpa-exam-vs-getting-cpa-licence">passing the exam vs getting a licence</a>.</p>

${sources([NASBA_INTL, NASBA_INDIA, NIES, NASBA_FAQ, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "us-cpa-eligibility-for-indian-ca-students",
    title: "US CPA Eligibility for Indian CA Students",
    category: "Indian Students",
    excerpt:
      "If you're pursuing CA, your US CPA eligibility depends on your university degree, not your CA progress. Here's what boards accept, how to plan your degree alongside CA, and how to time both.",
    crux: [
      "Degree first: US boards assess academic education from recognised universities. Several boards say outright that CA coursework counts as professional training, not academic credit.",
      "Board rules: New York, Alaska, Massachusetts and New Hampshire don't accept CA coursework; Montana says it may be acceptable once the academic pathway is complete.",
      "Plan the degree: Most CA students need a B.Com (often completed alongside CA) and frequently an M.Com or extra credits to reach 120 semester hours with enough accounting and business credits.",
      "Get evaluated early: An NIES evaluation — or its 'undecided' service, which suggests up to three suitable jurisdictions — tells you exactly where you stand.",
      "Content overlap: CA Intermediate and Final cover much of FAR and AUD conceptually, but the CPA tests US GAAP, US auditing standards and US tax — not Ind AS or Indian tax.",
    ],
    content: `
<h2>Why your CA progress doesn't decide eligibility</h2>
<p>US boards of accountancy set education requirements in terms of <strong>US semester hours</strong> earned at accredited (or, abroad, recognised) post-secondary institutions. The Institute of Chartered Accountants of India (ICAI) is a statutory professional body, not a university, so its coursework is treated differently. NASBA International Evaluation Services (NIES) says it evaluates coursework from accounting professional organisations "on a case-by-case basis", and asks for official certificates, examination information and syllabi sent directly by the institute.</p>
<p>Several boards are explicit. New York's page says coursework completed as part of a Chartered Accountant or similar programme is professional training and isn't accepted toward the education requirements. Alaska, Massachusetts and New Hampshire say the same; Guam doesn't accept professional training generally. Montana is the notable exception — its page says CA training "may be acceptable" if the candidate completed the academic pathway and submits an international evaluation.</p>

<h2>What a CA student should do</h2>
<ol>
<li><strong>Complete a recognised bachelor's degree.</strong> Many CA students take a B.Com through regular or distance mode alongside CA. Keep every mark sheet and the degree certificate.</li>
<li><strong>Check credits early.</strong> Most boards want around 24–30 semester hours of accounting and 21–24 of business. Accounting, auditing, taxation and cost accounting papers in a B.Com typically count toward accounting; economics, law, statistics and management toward business — but only the evaluation decides.</li>
<li><strong>Plan for 120 semester hours.</strong> A three-year degree often falls short, so many candidates add an M.Com, an MBA or additional accredited coursework.</li>
<li><strong>Use the NIES "undecided" evaluation</strong> if you haven't picked a board. NIES reviews your education and suggests up to three jurisdictions you qualify for, showing total, accounting and business credits.</li>
</ol>

<h2>Board-by-board summary</h2>
${STATE_TABLE}

<h2>Timing CA and CPA together</h2>
<ul>
<li>ICAI now holds Foundation, Intermediate and Final exams three times a year (January, May and September), and articleship under the new scheme is two years.</li>
<li>CPA Core sections can be taken any time; Discipline sections only in January, April, July and October.</li>
<li>Many students finish CA first and start CPA during the period after CA Final, when their technical knowledge is strongest — but your degree must be complete (or nearly complete, in boards that allow early sitting) before you can apply.</li>
</ul>

<h2>Where CA helps with the content</h2>
<table>
<thead><tr><th>CPA section</th><th>Helpful CA background</th><th>New for you</th></tr></thead>
<tbody>
<tr><td>FAR</td><td>Financial reporting concepts, consolidations, leases (Ind AS 116)</td><td>US GAAP specifics, LIFO, governmental and not-for-profit accounting</td></tr>
<tr><td>AUD</td><td>Standards on Auditing (SAs), risk, ethics</td><td>US GAAS (AU-C), PCAOB standards, US independence rules, SOC reports</td></tr>
<tr><td>REG</td><td>Tax concepts generally</td><td>US federal tax and US business law — effectively new</td></tr>
<tr><td>BAR</td><td>Financial management, cost and management accounting</td><td>US GAAP technical topics, state and local governments</td></tr>
</tbody>
</table>

<p>Next, read <a href="/blog/can-indian-chartered-accountant-become-us-cpa">can an Indian CA become a US CPA?</a> and <a href="/blog/how-indian-ca-qualifications-are-evaluated-for-cpa">how CA qualifications are evaluated</a>.</p>

${sources([NIES_REQ, STATE("New York", "new-york"), STATE("Montana", "montana"), STATE("Alaska", "alaska"), STATE("Massachusetts", "massachusetts"), ICAI_SCHEME, ["NASBA — Undecided evaluation service that NIES offers", "https://nasba.org/blog/2023/03/15/undecided-evaluation-service-that-nies-offers/"]])}
`,
  },
  {
    slug: "can-indian-chartered-accountant-become-us-cpa",
    title: "Can an Indian Chartered Accountant Become a US CPA?",
    category: "Indian Students",
    excerpt:
      "Yes — but there's no shortcut. ICAI isn't party to a US mutual recognition agreement, so Indian CAs qualify the same way as other candidates. Here's the route, the board options and the licensing step.",
    crux: [
      "Yes, through the standard route: Indian CAs meet education requirements, pass all four CPA sections and meet experience requirements like any other candidate.",
      "No reciprocity: NASBA/AICPA's International Qualifications Appraisal Board has agreements with bodies in Australia, Canada, Ireland, Mexico, New Zealand and South Africa — not with ICAI — so the shorter IQEX route isn't available.",
      "Education is the hurdle: Most boards count only university credit; Montana says CA training may be acceptable alongside a completed academic pathway.",
      "Licensing: Boards require experience verified by a licensed CPA; whether experience gained in India counts depends on the board.",
      "Worth it when: Your work is US-facing — US GAAP reporting, US audit or US tax engagements, or global capability centres.",
    ],
    content: `
<h2>Is there a fast track for Indian CAs?</h2>
<p>Not currently. The International Qualifications Appraisal Board (IQAB), a joint body of NASBA and the AICPA, negotiates mutual recognition agreements (MRAs) with foreign accountancy bodies. Members of bodies with an MRA can take the shorter International Qualification Examination (IQEX) instead of the full CPA Exam. NASBA lists agreements with bodies including CPA Australia, Chartered Accountants Australia and New Zealand, CPA Canada, Chartered Accountants Ireland, CPA Ireland, the Mexican Institute of Public Accountants (IMCP) and the South African Institute of Chartered Accountants. <strong>ICAI is not on the list</strong>, so Indian CAs take the full Uniform CPA Examination.</p>

<h2>The route for a CA</h2>
<ol>
<li><strong>Evaluate your education</strong> — your B.Com, M.Com or other degrees are converted to US semester hours. ICAI coursework is reviewed case by case by NIES, but many boards won't count it.</li>
<li><strong>Pick a board</strong> whose rules you meet — see the table below.</li>
<li><strong>Pass all four sections</strong> within the credit window (30 months in most boards; 36 in Washington).</li>
<li><strong>Complete licensure</strong> — education (150 hours, or 120 hours plus two years' experience where the new pathway is in force), experience and usually an ethics exam.</li>
</ol>

<h2>Education: what boards say about CA</h2>
${STATE_TABLE}

<h2>The experience requirement</h2>
<p>Most boards require one year of experience (two under the new 120-hour pathway) verified by an actively licensed CPA. Boards differ on whether experience gained outside the US, or verified by a CPA licensed in another state, is acceptable, and on the type of work that counts (public accounting, industry, government or academia). If you work in India at a firm with US-licensed CPAs — common in Big Four delivery centres and global capability centres — check your board's rules before you start counting.</p>

<h2>What changes after you're licensed</h2>
<ul>
<li>You may use the CPA title and, in the US, sign audit and attest reports through a licensed firm.</li>
<li>Under the updated Uniform Accountancy Act, mobility is moving toward an "individual-based practice privilege", where a CPA's own education, exam and experience determine the right to practise across states.</li>
<li>Your CA membership is unaffected — you can hold both.</li>
</ul>

<h2>Is it worth it?</h2>
<p>For a CA working on US GAAP, US audit or US tax engagements, the CPA is the credential US clients and engagement leaders recognise. If your work is purely Indian statutory audit or Indian tax, the benefit is smaller. See <a href="/blog/is-us-cpa-worth-it-for-an-indian-ca">is US CPA worth it in India?</a> and <a href="/blog/how-indian-cas-use-us-gaap-and-cpa-knowledge">how Indian CAs use US GAAP and CPA knowledge</a>.</p>

${sources([NASBA_MRA, ["NASBA — International Qualification Examination (IQEX)", "https://nasba.org/exams/iqex/"], NIES_REQ, NASBA_PATHWAYS, STATE("Montana", "montana"), STATE("New York", "new-york")])}
`,
  },
  {
    slug: "cpa-after-bcom-complete-roadmap",
    title: "US CPA Eligibility After B.Com in India",
    category: "Indian Students",
    excerpt:
      "Can you sit for the CPA with only a B.Com? It depends on the board and on how your degree is evaluated. Here's what the major boards require, which allow early sitting, and how to close a credit gap.",
    crux: [
      "The question is credits: Boards set requirements in US semester hours — usually a bachelor's degree or 120 hours, with set accounting and business credits.",
      "Three-year degrees: A three-year B.Com often evaluates to fewer than 120 semester hours, so check before choosing a board.",
      "Boards with flexible routes: Alaska (bachelor's + 15 accounting hours option), Guam (bachelor's + 24 accounting + 24 business hours) and Montana (24 accounting + 24 business hours) are frequently considered by B.Com graduates.",
      "Closing a gap: Add an M.Com, MBA or other recognised coursework — NIES lets you add new education for $135 within five years of your report.",
      "Licensure: You'll eventually need 150 hours, or 120 hours plus two years' experience in states with the new pathway.",
    ],
    content: `
<h2>Start with what boards actually require</h2>
<p>Every board writes its education rule in US semester hours. A typical requirement to <em>sit</em> is a bachelor's degree or 120 semester hours, including roughly 24–30 hours of accounting and 21–24 hours of business. Your B.Com is converted by an approved evaluator — for most boards, NASBA International Evaluation Services (NIES).</p>

<h2>Where a three-year B.Com stands</h2>
<p>A US bachelor's degree is normally four years (about 120 semester hours). A three-year Indian B.Com may evaluate to fewer hours, or may not be treated as equivalent to a US bachelor's degree, depending on the evaluator and the board. NASBA doesn't publish a fixed conversion rule — the evaluation report decides. That's why the first step for a B.Com graduate is an evaluation, not a state choice.</p>

<h2>Boards B.Com graduates commonly look at</h2>
${STATE_TABLE}
<ul>
<li><strong>Alaska</strong> offers an option of a bachelor's degree with 15 semester hours of accounting, and lets candidates sit within 18 semester hours of completing a degree.</li>
<li><strong>Guam</strong> accepts a bachelor's degree with 24 accounting and 24 business hours, and lets enrolled students sit if they'll finish within 18 months.</li>
<li><strong>Montana's</strong> exam requirement is stated as 24 hours of accounting above introductory level and 24 hours of business; its page doesn't state a degree requirement to sit, but licensure requires a bachelor's degree and 150 hours.</li>
</ul>
<p>Whether your B.Com satisfies any of these depends on the evaluation.</p>

<h2>Closing a credit gap</h2>
<ul>
<li><strong>M.Com or MBA</strong> — the most common route; a two-year master's typically adds enough hours. See <a href="/blog/us-cpa-eligibility-after-mcom-in-india">eligibility after M.Com</a>.</li>
<li><strong>Additional coursework</strong> — NIES says deficient education can be completed at a recognised institution in your home country or an accredited US school.</li>
<li><strong>Add it to your report</strong> — NIES's additional education evaluation costs $135 if your original report is less than five years old.</li>
</ul>

<h2>Licensure: plan ahead</h2>
<p>Passing the exam is only part of it. For a licence you'll need 150 hours, or — where adopted — a bachelor's degree in accounting with 120 hours plus two years of experience. Texas's new pathway took effect August 1, 2026, and Virginia's on January 1, 2026; the AICPA reports that about half of states have adopted it. See <a href="/blog/us-cpa-120-credits-vs-150-credits">120 vs 150 credits</a>.</p>

<div class="callout callout-tip">
<p><strong>Practical sequence:</strong> collect official documents → NIES evaluation (or the undecided evaluation if you're unsure) → choose a board you qualify for → apply → plan the extra credits you'll need for licensure while you study.</p>
</div>

${sources([NIES, NIES_FAQ, STATE("Alaska", "alaska"), STATE("Guam", "guam"), STATE("Montana", "montana"), NASBA_PATHWAYS, ["Texas State Board of Public Accountancy — New pathway for CPA exam and certification", "https://www.tsbpa.texas.gov/news/new-pathway-for-cpa-exam-and-certification/"]])}
`,
  },
  {
    slug: "us-cpa-eligibility-after-mcom-in-india",
    title: "US CPA Eligibility After M.Com in India",
    category: "Indian Students",
    excerpt:
      "B.Com plus M.Com is the most common education route for Indian CPA candidates. Here's why it usually works, what to check in your evaluation, and how it positions you for licensure.",
    crux: [
      "Why it works: B.Com plus a two-year M.Com usually gives enough total semester hours to sit for the exam in most boards.",
      "Check the mix: Total hours aren't enough — boards also require specific accounting and business credits, sometimes at upper level, and some require a US GAAS-focused audit course (Colorado).",
      "Documents: NIES needs official records for every year of post-secondary study, sent directly by each university in sealed envelopes.",
      "Licensure: Whether B.Com + M.Com reaches 150 hours depends on the evaluation; if not, the new 120-hour-plus-experience pathway may help.",
      "New York: From November 21, 2026, New York's required content areas expand — and New York reviews international education for licensure itself, not through NIES.",
    ],
    content: `
<h2>Why M.Com is the standard route</h2>
<p>A three-year B.Com may fall short of a US bachelor's degree or 120 semester hours. Adding a two-year M.Com — five years of post-secondary study in total — usually closes that gap for exam eligibility. Because both degrees are commerce degrees, they also tend to supply the accounting and business credits boards require.</p>

<h2>What to check in your evaluation</h2>
<ul>
<li><strong>Total semester hours</strong> — at least 120 for most boards to sit.</li>
<li><strong>Accounting hours</strong> — 24 to 30 is typical; Colorado requires 27 (21 above introductory level) and a 3-hour audit course focused on US generally accepted auditing standards.</li>
<li><strong>Business hours</strong> — typically 21 to 24; Guam specifies economics, finance and business law within its 24.</li>
<li><strong>Upper-level requirements</strong> — some boards count only advanced courses.</li>
<li><strong>Degree equivalence</strong> — some boards require the evaluator to state that your education is equivalent to a US bachelor's degree.</li>
</ul>
${STATE_TABLE}

<h2>Documents for NIES</h2>
<ul>
<li>Official transcripts (mark sheets) and degree certificates for both degrees, sent by each university directly to NIES in sealed envelopes, or electronically direct from the institution.</li>
<li>Documentation for every year of post-secondary study — completing a higher degree isn't accepted as proof of earlier study.</li>
<li>Syllabi or course descriptions for accounting and business courses, if requested.</li>
<li>All documents within 90 days of applying, or the application is denied and the fee forfeited.</li>
</ul>

<h2>Licensure with B.Com + M.Com</h2>
<p>Licensure traditionally requires 150 semester hours. Depending on the evaluation, B.Com plus M.Com may or may not get you there. If not, two options:</p>
<ul>
<li>Complete additional recognised coursework.</li>
<li>License in a state that has adopted the new pathway — a bachelor's degree in accounting (120 hours) plus two years of experience — if your evaluation shows the qualifying bachelor's equivalent.</li>
</ul>

<h2>New York candidates</h2>
<p>New York's exam requirements change on November 21, 2026, when its required accounting content areas expand to include upper-division accounting information systems and its business areas expand to include information systems, business law, data analytics, economics and finance. NIES evaluates for New York exam eligibility, but New York's board reviews international education for <strong>licensure</strong> itself.</p>

${sources([NIES_REQ, NIES_FAQ, STATE("Colorado", "colorado"), STATE("Guam", "guam"), STATE("New York", "new-york"), NASBA_PATHWAYS])}
`,
  },
  {
    slug: "can-indian-students-take-us-cpa-exam-without-masters",
    title: "Can Indian Students Take the US CPA Exam Without a Master's Degree?",
    category: "Indian Students",
    excerpt:
      "No US board requires a master's degree as such — it's about semester hours and specific credits. Here's when a bachelor's alone can work, when it can't, and the alternatives to a full master's.",
    crux: [
      "No master's requirement: Boards require semester hours and specific accounting and business credits — a master's is just one way to earn them.",
      "When a bachelor's works: If your evaluation shows a US-equivalent bachelor's or 120 hours with the required credit mix, you can sit in boards that accept that.",
      "When it doesn't: A three-year degree that evaluates below 120 hours, or lacks accounting or business credits, needs topping up.",
      "Alternatives: Extra courses from a recognised Indian institution or an accredited US school, added to your NIES report for $135.",
      "Licensure: The new pathway — bachelor's in accounting plus two years' experience — removes the 150-hour requirement in states that have adopted it.",
    ],
    content: `
<h2>The short answer</h2>
<p>Yes, it's possible. No board makes a master's degree a requirement in itself. What boards require is a number of <strong>US semester hours</strong>, usually including a bachelor's degree or its equivalent, and minimum <strong>accounting and business credits</strong>. Indian students often take an M.Com or MBA because it's the simplest way to reach those numbers — not because the degree title matters.</p>

<h2>When a bachelor's degree alone can work</h2>
<ul>
<li>Your evaluation shows the degree is equivalent to a US bachelor's, or totals at least 120 semester hours, <em>and</em></li>
<li>it includes enough accounting and business credits for your chosen board.</li>
</ul>
<p>Four-year degrees (such as some B.B.A. or B.Com Honours programmes structured over four years) are more likely to meet the 120-hour threshold than three-year degrees, but only the evaluation decides.</p>

<h2>Boards with more flexible sitting rules</h2>
<p>Some boards let you sit before finishing your education: Alaska within 18 semester hours of a degree, Guam if you'll finish within 18 months, and Massachusetts if you'll complete requirements within 90 days of your first section. Others, such as Washington and Colorado, require everything to be complete before you apply.</p>
${STATE_TABLE}

<h2>Alternatives to a full master's</h2>
<ul>
<li><strong>Targeted courses</strong> — NIES says deficient education can be made up at a recognised institution in your home country or an accredited US school. Choose accounting or business courses that fill the exact gap in your evaluation.</li>
<li><strong>Add them to your report</strong> — NIES's additional education evaluation costs $135 for candidates with a report less than five years old.</li>
<li><strong>Professional qualifications</strong> — generally not counted (CA coursework is rejected by several boards), with Montana a possible exception.</li>
</ul>

<h2>Licensure without 150 hours</h2>
<p>In 2025 NASBA and the AICPA added a third licensure pathway to the Uniform Accountancy Act: a <strong>bachelor's degree in accounting (120 semester hours) + two years of experience + the CPA Exam</strong>. The AICPA reports that about half of states have adopted it (Texas from August 1, 2026; Virginia from January 1, 2026), with implementation dates varying. For candidates who can sit with 120 hours, this pathway can remove the need for any additional degree.</p>

<div class="callout callout-tip">
<p><strong>Before you enrol in a master's just for the CPA:</strong> get evaluated. If you're only a few accounting credits short, a handful of targeted courses costs far less in time and money than a two-year degree.</p>
</div>

${sources([NIES_FAQ, ["NASBA — Additional education evaluation", "https://nasba.org/blog/2019/02/11/additional-education-evaluation-for-cpa-examination-and-or-licensure/"], NASBA_PATHWAYS, ["AICPA & CIMA — State policy trends shaping accounting in 2026", "https://www.aicpa-cima.com/advocacy/article/state-policy-trends-shaping-accounting-in-2026"], STATE("Alaska", "alaska"), STATE("Massachusetts", "massachusetts")])}
`,
  },
  {
    slug: "cpa-vs-ca-what-actually-matters",
    title: "US CPA vs Indian CA: Differences, Career Scope and Recognition",
    category: "CPA vs Other Qualifications",
    excerpt:
      "Who awards each qualification, how the exams and training differ, how long each takes, pass rates, cost, recognition in India and the US, and which careers each one opens.",
    crux: [
      "Different jurisdictions: CA (ICAI) certifies Indian standards, Indian tax and company law; CPA (US state boards) certifies US GAAP, US auditing standards and US federal tax.",
      "Structure: CA has three levels — Foundation, Intermediate and Final — plus two years of articleship; CPA is four computer-based sections plus one to two years of verified experience for the licence.",
      "Exams: CA exams are held three times a year; CPA Core sections are available year-round and Discipline sections quarterly.",
      "No mutual recognition: ICAI has no recognition agreement with the US boards, so each qualification must be earned separately.",
      "Career scope: CA is essential for Indian statutory audit and tax practice; CPA is valued for US-facing audit, tax, reporting and global capability centre roles. Holding both signals dual-market capability.",
    ],
    content: `
<h2>Side by side</h2>
<table>
<thead><tr><th></th><th>Indian CA</th><th>US CPA</th></tr></thead>
<tbody>
<tr><td>Awarded by</td><td>Institute of Chartered Accountants of India (ICAI), a statutory body under the Chartered Accountants Act, 1949</td><td>55 US state and territory boards of accountancy; exam written by the AICPA and administered by NASBA</td></tr>
<tr><td>Standards covered</td><td>Ind AS and Accounting Standards, Standards on Auditing, Indian direct and indirect tax, company law</td><td>US GAAP, US GAAS and PCAOB standards, US federal tax, US business law</td></tr>
<tr><td>Structure</td><td>Foundation (4 papers), Intermediate (6 papers), Final (6 papers), plus self-paced modules and training</td><td>Four sections: FAR, AUD, REG + one of BAR, ISC or TCP</td></tr>
<tr><td>Practical training</td><td>Two years' articleship under the new scheme (effective July 1, 2023)</td><td>Usually one year of experience verified by a CPA (two years under the new 120-hour pathway)</td></tr>
<tr><td>Exam frequency</td><td>Three times a year (January, May, September) at all levels</td><td>Core sections year-round; Discipline sections in January, April, July and October</td></tr>
<tr><td>Exam format</td><td>Written, with some objective papers</td><td>Computer-based, 4 hours per section; multiple-choice questions and simulations</td></tr>
<tr><td>Typical duration</td><td>Several years end to end, including articleship</td><td>12–18 months for the exam once eligible, plus experience</td></tr>
<tr><td>Pass rates</td><td>Published by ICAI for each attempt</td><td>2025: FAR 42%, AUD 48%, REG 63%, BAR 42%, ISC 68%, TCP 78% (AICPA)</td></tr>
<tr><td>Signing authority</td><td>Statutory audit reports in India</td><td>Audit and attest reports in the US, through a licensed firm</td></tr>
</tbody>
</table>

<h2>Recognition</h2>
<p>There's no mutual recognition between ICAI and the US boards. NASBA and the AICPA's International Qualifications Appraisal Board has agreements with bodies in Australia, Canada, Ireland, Mexico, New Zealand and South Africa, whose members can take a shorter exam (IQEX) — ICAI members can't. Equally, a US CPA can't sign Indian statutory audit reports. Each qualification has to be earned on its own terms.</p>

<h2>Difficulty</h2>
<p>Both are demanding. CA covers a broader syllabus over a longer period with a written exam format; the CPA is narrower in scope but tests US-specific rules, including areas that are entirely new to Indian students — US federal tax, US business law and governmental accounting. Many CAs find FAR and AUD conceptually familiar and REG the hardest adjustment.</p>

<h2>Career scope</h2>
<table>
<thead><tr><th>Role type</th><th>CA</th><th>CPA</th></tr></thead>
<tbody>
<tr><td>Indian statutory audit, Indian tax practice</td><td>Essential</td><td>Not applicable</td></tr>
<tr><td>US GAAP audits and reviews from India (delivery centres)</td><td>Helpful</td><td>Directly relevant</td></tr>
<tr><td>US federal and state tax compliance</td><td>Limited</td><td>Directly relevant</td></tr>
<tr><td>Global capability centres reporting under US GAAP</td><td>Valued</td><td>Valued</td></tr>
<tr><td>SOX, internal audit and IT audit for US clients</td><td>Valued</td><td>Valued, especially with ISC</td></tr>
</tbody>
</table>

<h2>Should you do both?</h2>
<p>If your work is — or will be — US-facing, the combination is strong: CA gives depth and Indian credibility, CPA gives a US credential. If your career is entirely domestic, the CPA adds less. See <a href="/blog/can-indian-chartered-accountant-become-us-cpa">can an Indian CA become a US CPA?</a> and <a href="/blog/is-us-cpa-worth-it-for-an-indian-ca">is US CPA worth it in India in 2026?</a></p>

${sources([ICAI_SCHEME, ["ICAI — CA Final to be held thrice a year", "https://www.icai.org/post/prc-ca-final-to-be-held-thrice-a-year"], NASBA_MRA, AICPA_PASS, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "is-us-cpa-worth-it-for-an-indian-ca",
    title: "Is US CPA Worth It in India in 2026?",
    category: "Career",
    excerpt:
      "An honest look at the costs, time and payoff of the US CPA for Indian students and professionals in 2026 — who benefits most, who doesn't, and what's changed this year.",
    crux: [
      "The cost: Roughly $3,650–$4,000 in fees for an Indian candidate passing first time, plus a review course if you use one, plus 12–18 months of study.",
      "Who benefits most: People working on US clients — Big Four and mid-tier delivery centres, US tax outsourcing, and global capability centres reporting under US GAAP.",
      "Who benefits least: Those whose careers are entirely in Indian statutory audit or Indian tax, where the CA is what matters.",
      "What's changed in 2026: About half of states have adopted a 120-hour-plus-two-years licensure pathway, easing the 150-hour hurdle; and the AICPA is moving the exam to a new delivery platform in July 2027.",
      "The test: If you can name the roles where US GAAP, US audit or US tax expertise matters to you, the CPA is usually worth it.",
    ],
    content: `
<h2>The investment</h2>
<table>
<thead><tr><th>Cost</th><th>Amount</th></tr></thead>
<tbody>
<tr><td>Exam, evaluation and application fees (first-time passes, testing in India)</td><td>About $3,650–$4,000</td></tr>
<tr><td>Review course (optional)</td><td>Varies widely; free material can replace some of it</td></tr>
<tr><td>Study time</td><td>Typically 300–450 hours over 12–18 months</td></tr>
<tr><td>Retakes</td><td>About $825–$900 per failed section ($268.59 exam fee + $460 India fee + the board's application fee)</td></tr>
</tbody>
</table>

<h2>Where the payoff comes from</h2>
<ul>
<li><strong>Access to US-facing roles</strong> — firms serving US clients from India look for people who know US GAAP, US auditing standards and US tax. The CPA is the recognised proof.</li>
<li><strong>Promotion</strong> — in US audit and tax practices, progressing to manager and beyond increasingly assumes the licence or the exam.</li>
<li><strong>Mobility</strong> — if you later move to the US or work with US entities directly, you already hold the credential.</li>
<li><strong>Market demand</strong> — the US Bureau of Labor Statistics projects 5% employment growth for accountants and auditors over 2025–35 (faster than average), with a median US salary of $83,680 in May 2025, and says a CPA licence may improve job prospects. Demand from US firms is one reason so much US work is delivered from India.</li>
</ul>

<h2>When it's less clear-cut</h2>
<ul>
<li>Your career is firmly in Indian statutory audit, Indian direct or indirect tax, or Indian regulatory work.</li>
<li>You don't yet meet education requirements and would need a costly extra degree with no specific role in mind.</li>
<li>You're considering it because "more credentials is better" — that's not a plan.</li>
</ul>
<p>Alternatives worth comparing: the <a href="/blog/enrolled-agent-vs-cpa">Enrolled Agent</a> for pure US tax, or <a href="/blog/cpa-vs-cma-vs-acca">CMA or ACCA</a> for management accounting and international reporting.</p>

<h2>What changed in 2026</h2>
<ul>
<li><strong>Licensure pathway</strong> — the bachelor's-plus-two-years route (120 semester hours) is now available in about half of states, according to the AICPA, which helps candidates who can't easily reach 150 hours.</li>
<li><strong>Tax content</strong> — One Big Beautiful Bill Act changes with 2024–25 effective dates became testable in REG and TCP from July 1, 2026.</li>
<li><strong>Delivery platform</strong> — the exam moves to a new platform from July 2027, with no testing on July 1–11, 2027. Plan your sections around that gap.</li>
</ul>

<h2>A simple decision test</h2>
<div class="callout callout-tip">
<p>Write down three specific roles you want in the next five years. If at least two involve US GAAP reporting, US audit, US tax or US-facing controls, the CPA is very likely worth it. If none do, pause and revisit.</p>
</div>

<p>Next: <a href="/blog/us-cpa-salary-in-india-roles-experience">US CPA salary in India: roles and career paths</a> and <a href="/blog/us-cpa-career-opportunities-big-four-india">Big Four opportunities</a>.</p>

${sources([BLS, AICPA_PASS, ["AICPA & CIMA — State policy trends shaping accounting in 2026", "https://www.aicpa-cima.com/advocacy/article/state-policy-trends-shaping-accounting-in-2026"], NASBA_FAQ, NASBA_INTL])}
`,
  },
  {
    slug: "us-cpa-salary-in-india-roles-experience",
    title: "US CPA Salary in India: Roles, Experience and Career Paths",
    category: "Career",
    excerpt:
      "What drives pay for US CPAs in India, the career ladder in firms and global capability centres, how experience and specialisation affect progression — and why we don't publish a single salary figure.",
    crux: [
      "No official dataset: There's no government or regulator survey of US CPA salaries in India, so any single number you see is an estimate from job sites or training providers.",
      "What drives pay: The employer type, your role (audit, tax, reporting, advisory), years of experience, specialisation (IT audit, SOX, technical accounting) and whether you hold other qualifications such as CA.",
      "Career ladder: Analyst or associate → senior → assistant manager → manager → senior manager → director or partner in firms; similar bands in global capability centres.",
      "The CPA's effect: It mainly improves access to US-facing roles and promotion prospects, rather than adding a fixed premium.",
      "US context: The BLS median for accountants and auditors in the US was $83,680 in May 2025 — useful as a reference if you plan to move, not a guide to Indian pay.",
    ],
    content: `
<h2>Why we don't publish a salary number</h2>
<p>We only quote official sources, and no government body, regulator or professional institute publishes salary data for US CPAs working in India. Figures you'll see online come from self-reported job-site data or from coaching providers, and vary widely. Instead, this guide explains what drives pay so you can evaluate an offer yourself.</p>

<h2>Where US CPAs work in India</h2>
<ul>
<li><strong>Big Four and mid-tier firms' US practices and delivery centres</strong> — US GAAP audits, US federal and state tax compliance, SOX testing, IT audit and SOC reports.</li>
<li><strong>Global capability centres (GCCs)</strong> — finance, controllership, financial planning and analysis, and internal audit teams of US multinationals.</li>
<li><strong>US tax and accounting outsourcing firms</strong> — individual, partnership and corporate returns for US CPA firms.</li>
<li><strong>Consulting and transaction advisory</strong> — due diligence, technical accounting and valuation support.</li>
</ul>

<h2>The career ladder</h2>
<table>
<thead><tr><th>Typical level</th><th>Experience</th><th>What the role involves</th></tr></thead>
<tbody>
<tr><td>Analyst / associate</td><td>0–2 years</td><td>Executing procedures, preparing workpapers or returns</td></tr>
<tr><td>Senior</td><td>2–4 years</td><td>Running engagement areas, reviewing associates' work, client contact</td></tr>
<tr><td>Assistant manager</td><td>4–6 years</td><td>Managing several engagements, budgets and reviews</td></tr>
<tr><td>Manager / senior manager</td><td>6–10+ years</td><td>Portfolio responsibility, technical sign-off, team leadership</td></tr>
<tr><td>Director / partner</td><td>10+ years</td><td>Client relationships, business development, quality responsibility</td></tr>
</tbody>
</table>
<p>Titles and timelines vary by employer; the bands are indicative.</p>

<h2>What moves pay up</h2>
<ul>
<li><strong>Specialisation</strong> — IT audit, SOC reporting, technical accounting (revenue, leases, business combinations) and complex tax (partnerships, international) tend to be in shorter supply.</li>
<li><strong>Combination credentials</strong> — CA plus CPA is a strong combination for US-facing audit and reporting.</li>
<li><strong>Licence vs exam only</strong> — some employers distinguish between candidates who have passed the exam and those fully licensed, especially for roles signing off US work.</li>
<li><strong>Client-facing experience</strong> — direct work with US engagement teams and clients.</li>
</ul>

<h2>How to evaluate an offer</h2>
<ol>
<li>Compare total compensation (fixed pay, variable pay, exam support and study leave), not just the base.</li>
<li>Ask whether the employer reimburses CPA fees or review courses, and whether it can verify experience for licensure — a valuable benefit in itself.</li>
<li>Look at the work: US-facing engagements build the experience that drives future pay.</li>
</ol>

<h2>US context</h2>
<p>If you plan to move to the US, the BLS reports a median of $83,680 for accountants and auditors in May 2025, with the top 10% above $144,090, and notes that a CPA licence may improve job prospects. Pay varies heavily by state, industry and seniority.</p>

<p>See <a href="/blog/us-cpa-jobs-in-india-roles">US CPA jobs in India</a> and <a href="/blog/us-cpa-career-opportunities-big-four-india">Big Four opportunities</a>.</p>

${sources([BLS, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "us-cpa-career-opportunities-big-four-india",
    title: "US CPA Career Opportunities in Big Four Firms in India",
    category: "Career",
    excerpt:
      "How Big Four firms in India use US CPAs — assurance, tax, risk and IT audit, deals — the roles at each level, what the licence changes, and how to position yourself.",
    crux: [
      "Why the work is in India: Big Four networks serve US clients partly through delivery and shared-service centres in India, which handle US GAAP audit, US tax and risk work.",
      "Assurance: US GAAP and PCAOB audit support, financial statement reviews and SOC reporting.",
      "Tax: US federal and state compliance for individuals, partnerships and corporations — REG and TCP map directly to this work.",
      "Risk and IT audit: SOX testing, IT general controls, SOC 1 and SOC 2 engagements — where ISC knowledge is valuable.",
      "Getting in: Pass sections early, highlight US-facing skills, and ask about experience verification and licensing support.",
    ],
    content: `
<h2>Why Big Four firms hire US CPAs in India</h2>
<p>The Big Four networks — and many mid-tier firms — perform a large share of US-client work from India. Indian teams prepare workpapers, test controls, prepare US tax returns and support reporting for engagement teams in the US. US-licensed partners retain responsibility for signing, but they need people who understand US GAAP, US auditing standards and US tax. The CPA exam is the clearest signal of that knowledge.</p>

<h2>Service lines and how the CPA sections map</h2>
<table>
<thead><tr><th>Service line</th><th>Typical work from India</th><th>Most relevant sections</th></tr></thead>
<tbody>
<tr><td>Assurance (audit)</td><td>US GAAP audit procedures for US clients, PCAOB-compliant documentation, financial statement reviews, SEC reporting support</td><td>FAR, AUD, BAR</td></tr>
<tr><td>Tax</td><td>US federal and state returns — Forms 1040, 1065, 1120, 1120-S — tax provision support, partnership allocations</td><td>REG, TCP</td></tr>
<tr><td>Risk advisory</td><td>SOX 404 testing, internal audit, process controls</td><td>AUD, ISC</td></tr>
<tr><td>Technology risk</td><td>IT general controls, application controls, SOC 1 and SOC 2 reports, cybersecurity assessments</td><td>ISC, AUD</td></tr>
<tr><td>Deals and technical accounting</td><td>Due diligence, purchase price allocations, ASC 606 and ASC 842 implementation</td><td>FAR, BAR</td></tr>
</tbody>
</table>

<h2>Roles and progression</h2>
<p>Most firms use a ladder of associate or analyst, senior, assistant manager, manager, senior manager, director and partner. Movement up the ladder depends on performance, but in US-facing practices, passing the CPA exam — and often obtaining the licence — is increasingly expected before manager-level promotions.</p>

<h2>What the licence changes</h2>
<ul>
<li><strong>Signing authority</strong> — only licensed CPAs at US-registered firms sign US audit reports; in India you'll support that work rather than sign.</li>
<li><strong>Credibility with US teams</strong> — licensed staff are often given more complex review responsibilities.</li>
<li><strong>Mobility</strong> — secondments or transfers to US offices are easier with a licence.</li>
</ul>

<h2>Quality and inspection</h2>
<p>Firms that audit US public companies must register with the Public Company Accounting Oversight Board (PCAOB), which inspects their work — including work performed by teams outside the US. That's why documentation discipline and knowledge of PCAOB standards matter so much in Indian delivery centres.</p>

<h2>How to position yourself</h2>
<ol>
<li>Pass at least one or two sections before applying — it shows commitment and knowledge.</li>
<li>Choose your Discipline to match the service line: ISC for technology risk, TCP for tax, BAR for assurance and reporting.</li>
<li>Learn the tools of the work — audit methodology, US tax software, data analytics.</li>
<li>Ask employers about CPA support: fee reimbursement, study leave and, importantly, whether a licensed CPA can verify your experience for licensure.</li>
</ol>

<p>See also <a href="/blog/us-cpa-jobs-in-india-roles">US CPA jobs in India</a> and <a href="/blog/public-vs-private-accounting">public vs private accounting</a>.</p>

${sources([["PCAOB — Registration and registered firms", "https://pcaobus.org/oversight/registration"], ["PCAOB — Inspections", "https://pcaobus.org/oversight/inspections"], BLS, AICPA_BLUEPRINTS])}
`,
  },
];
