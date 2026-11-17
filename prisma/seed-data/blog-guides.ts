import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

/**
 * Section guides for the remaining four sections, plus licensure and practical-skills posts
 * (November 2026). Written from AICPA and NASBA material; structure figures match
 * src/lib/blueprint.ts and src/lib/full-mock.ts.
 */

const BLUEPRINTS: [string, string] = ["AICPA & CIMA — CPA Exam Blueprints", "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam"];
const SCORING: [string, string] = [
  "AICPA & CIMA — CPA Exam scoring and pass rates",
  "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates",
];

export const guidePosts: BlogSeed[] = [
  {
    slug: "reg-exam-complete-guide",
    title: "The REG Exam: Format, Blueprint Weights and How to Pass",
    category: "Study Strategy",
    excerpt:
      "Regulation is two-thirds tax and one-third ethics and business law. Here is how the section is built, which areas carry the marks and how to prepare from India.",
    crux: [
      "Format: Four hours — 72 multiple-choice questions and 8 task-based simulations, each half of the score.",
      "Content: Individuals (22–32%) and entities (23–33%) carry over half the marks; business law is 15–25%.",
      "Pass rate: About 63% in 2025, the highest of the Core sections, according to the AICPA.",
      "For Indian candidates: US tax is new to almost everyone, so budget more time than your accounting background suggests.",
      "Strategy: Learn the individual return line by line first, then entities, then law and ethics.",
    ],
    content: `
<p>Regulation (REG) tests US federal taxation, business law and the ethics of tax practice. It is the Core section with the highest pass rate (about 63% in 2025, per the AICPA), but for candidates from India almost every topic is new: the US tax system, US contract law and US bankruptcy rules have little in common with what Indian commerce degrees teach.</p>

<h2>Format</h2>
<ul>
<li><strong>Length:</strong> 4 hours, plus an optional 15-minute break that does not count against your time.</li>
<li><strong>Questions:</strong> 72 multiple-choice questions (MCQs) and 8 task-based simulations (TBSs) — one more simulation than any other section.</li>
<li><strong>Testlets:</strong> two MCQ testlets of 36 questions, then TBS testlets of 2, 3 and 3.</li>
<li><strong>Scoring:</strong> MCQs and TBSs are each worth 50%. 75 on a 0–99 scale is a pass.</li>
</ul>

<h2>Content areas</h2>
<table>
<thead><tr><th>Area</th><th>Weight</th></tr></thead>
<tbody>
<tr><td>I. Ethics, Professional Responsibilities and Federal Tax Procedures</td><td>10–20%</td></tr>
<tr><td>II. Business Law</td><td>15–25%</td></tr>
<tr><td>III. Federal Taxation of Property Transactions</td><td>5–15%</td></tr>
<tr><td>IV. Federal Taxation of Individuals</td><td>22–32%</td></tr>
<tr><td>V. Federal Taxation of Entities</td><td>23–33%</td></tr>
</tbody>
</table>

<h2>Where the marks are</h2>
<ul>
<li><a href="/cpa/reg/individual-taxation-gross-income">Gross income</a>, <a href="/cpa/reg/individual-taxation-adjustments-and-deductions">adjustments and deductions</a> and <a href="/cpa/reg/filing-status-credits-and-amt">filing status, credits and AMT</a> — the individual return is the backbone of the section.</li>
<li><a href="/cpa/reg/c-corporation-taxation">C corporations</a>, <a href="/cpa/reg/s-corporation-taxation">S corporations</a> and <a href="/cpa/reg/partnership-taxation">partnerships</a> — basis calculations appear in both MCQs and simulations.</li>
<li><a href="/cpa/reg/business-law-contracts">Contracts</a>, <a href="/cpa/reg/business-law-agency-and-business-structures">agency</a> and <a href="/cpa/reg/debtor-creditor-and-bankruptcy">bankruptcy</a> — rule-based and quick to score once memorised.</li>
<li><a href="/cpa/reg/circular-230-and-practitioner-ethics">Circular 230</a> and <a href="/cpa/reg/federal-tax-procedures-and-penalties">penalties</a> — small, predictable and often left too late.</li>
</ul>

<h2>Which tax year is tested?</h2>
<p>The exam tests federal tax law in effect six months before the testing date. Check that your study materials match the tax year for your exam window, especially in years with major legislation.</p>

<h2>How much study time?</h2>
<p>Plan for 100–130 hours. Candidates who work in US tax often need less; candidates from audit backgrounds often need more.</p>

<h2>Strategy that works</h2>
<ol>
<li>Start with the individual return in the order of the Form 1040: income, adjustments, deductions, credits.</li>
<li>Move to property transactions (basis, gains, like-kind exchanges) before entities, because entity questions depend on them.</li>
<li>Learn business law in short daily sessions; it rewards memorisation.</li>
<li>Do simulations weekly — <a href="/cpa/reg/simulations">REG simulations</a> — and finish with a <a href="/mock-exam">full timed mock</a>.</li>
<li>If you plan to take <a href="/blog/tcp-vs-reg-topics-difficulty-candidate-fit">TCP</a> as your Discipline, take it soon after REG while the rules are fresh.</li>
</ol>

${sources([BLUEPRINTS, SCORING])}
`,
  },
  {
    slug: "bar-exam-complete-guide",
    title: "The BAR Exam: Format, Blueprint Weights and How to Pass",
    category: "Study Strategy",
    excerpt:
      "Business Analysis and Reporting is the calculation-heavy Discipline: ratios, budgeting, advanced FAR topics and government accounting. Here is the structure and a plan.",
    crux: [
      "Format: Four hours — 50 multiple-choice questions and 7 task-based simulations, each half of the score.",
      "Content: Business analysis (40–50%), technical accounting (35–45%) and state and local governments (10–20%).",
      "Pass rate: About 42% in 2025, the lowest of the three Disciplines.",
      "Best fit: Candidates heading for audit, financial reporting or FP&A roles, with strong FAR knowledge.",
      "Strategy: Take it soon after FAR, and drill calculations until they are fast.",
    ],
    content: `
<p>Business Analysis and Reporting (BAR) is one of the three Discipline sections; every candidate takes one. It extends <a href="/cpa/far">FAR</a> into advanced reporting topics and adds managerial accounting and financial analysis. Its 2025 pass rate, per the AICPA, was about 42% — the lowest of the Disciplines, largely because it attracts candidates willing to take on its heavy calculation load.</p>

<h2>Format</h2>
<ul>
<li><strong>Length:</strong> 4 hours, plus an optional 15-minute break.</li>
<li><strong>Questions:</strong> 50 MCQs (two testlets of 25) and 7 TBSs (testlets of 2, 3 and 2).</li>
<li><strong>Scoring:</strong> 50% MCQs, 50% simulations; 75 to pass.</li>
<li><strong>Testing windows:</strong> Disciplines are offered in the first month of each quarter, with one score release per window. Check the <a href="/cpa-score-release-dates">score release dates</a>.</li>
</ul>

<h2>Content areas</h2>
<table>
<thead><tr><th>Area</th><th>Weight</th></tr></thead>
<tbody>
<tr><td>I. Business Analysis</td><td>40–50%</td></tr>
<tr><td>II. Technical Accounting and Reporting</td><td>35–45%</td></tr>
<tr><td>III. State and Local Governments</td><td>10–20%</td></tr>
</tbody>
</table>

<h2>Where the marks are</h2>
<ul>
<li><a href="/cpa/bar/financial-statement-analysis">Financial statement analysis</a> and <a href="/cpa/bar/financial-forecasting-and-projections">forecasting, budgeting and cost-volume-profit</a>.</li>
<li><a href="/cpa/bar/derivatives-and-hedge-accounting">Derivatives and hedging</a>, <a href="/cpa/bar/stock-compensation">stock compensation</a>, <a href="/cpa/bar/employee-benefit-plan-accounting">pensions</a> and <a href="/cpa/bar/lease-accounting-lessor">lessor accounting</a>.</li>
<li><a href="/cpa/bar/business-combinations-advanced">Advanced consolidations</a> and <a href="/cpa/bar/foreign-currency-translation">foreign currency</a>.</li>
<li><a href="/cpa/bar/governmental-fund-accounting">Governmental funds</a> and <a href="/cpa/bar/government-wide-financial-statements">government-wide statements</a>, including the conversion between them.</li>
</ul>

<h2>Is BAR right for you?</h2>
<p>Choose BAR if you enjoyed FAR, want an audit or reporting career, or work in FP&amp;A. Avoid it if calculations under time pressure are your weak spot. Our <a href="/tools/cpa-discipline-selector">Discipline selector</a> weighs your background, and <a href="/blog/how-to-choose-your-cpa-discipline">BAR vs ISC vs TCP</a> compares all three.</p>

<h2>How much study time?</h2>
<p>Plan for 110–140 hours. Taking BAR within a few months of FAR saves a lot of relearning.</p>

${sources([BLUEPRINTS, SCORING, ["AICPA & CIMA — BAR blueprint", "https://www.aicpa-cima.com/resources/download/bar-cpa-exam-blueprint"]])}
`,
  },
  {
    slug: "isc-exam-complete-guide",
    title: "The ISC Exam: Format, Blueprint Weights and How to Pass",
    category: "Study Strategy",
    excerpt:
      "Information Systems and Controls tests IT systems, security, privacy and SOC engagements. It has the most MCQs, the fewest simulations and a different score weighting.",
    crux: [
      "Format: Four hours — 82 multiple-choice questions and 6 task-based simulations.",
      "Scoring: MCQs are 60% and simulations 40% — the only section not split 50/50.",
      "Content: Systems and data (35–45%), security and privacy (35–45%), SOC engagements (15–25%).",
      "Pass rate: About 68% in 2025, according to the AICPA.",
      "Best fit: IT audit, risk advisory and SOC reporting careers; also candidates who prefer concepts to calculations.",
    ],
    content: `
<p>Information Systems and Controls (ISC) is the Discipline for candidates heading towards IT audit, risk advisory and SOC reporting. It has almost no calculations, which suits many candidates, but it is wide: databases, networks, cloud, cybersecurity, privacy law and the AICPA's SOC framework all appear. Its 2025 pass rate was about 68%, according to the AICPA.</p>

<h2>Format</h2>
<ul>
<li><strong>Length:</strong> 4 hours, plus an optional 15-minute break.</li>
<li><strong>Questions:</strong> 82 MCQs (two testlets of 41) and 6 TBSs (testlets of 1, 3 and 2).</li>
<li><strong>Scoring:</strong> MCQs 60%, simulations 40%. With 82 questions, pace matters: about 1.3 minutes per MCQ.</li>
</ul>

<h2>Content areas</h2>
<table>
<thead><tr><th>Area</th><th>Weight</th></tr></thead>
<tbody>
<tr><td>I. Information Systems and Data Management</td><td>35–45%</td></tr>
<tr><td>II. Security, Confidentiality and Privacy</td><td>35–45%</td></tr>
<tr><td>III. Considerations for System and Organization Controls (SOC) Engagements</td><td>15–25%</td></tr>
</tbody>
</table>

<h2>Where the marks are</h2>
<ul>
<li><a href="/cpa/isc/it-general-controls">IT general controls</a> and <a href="/cpa/isc/business-process-automation">automated business processes</a>.</li>
<li><a href="/cpa/isc/security-fundamentals">Security fundamentals</a>, <a href="/cpa/isc/incident-response">incident response</a> and <a href="/cpa/isc/privacy-frameworks">privacy frameworks</a>.</li>
<li><a href="/cpa/isc/data-management-and-governance">Data management</a> and <a href="/cpa/isc/information-systems-fundamentals">systems fundamentals</a>, including cloud models.</li>
<li><a href="/cpa/isc/soc-engagements">SOC engagements</a> and <a href="/cpa/isc/third-party-and-vendor-risk">vendor risk</a> — learn the difference between SOC 1, SOC 2 and SOC 3, and Type 1 and Type 2, until it is automatic.</li>
</ul>

<h2>How much study time?</h2>
<p>Plan for 90–120 hours. Candidates with IT audit experience can often do it in less; candidates with no IT background should allow more for the vocabulary.</p>

<h2>Strategy that works</h2>
<ol>
<li>Build a glossary as you go — ISC questions often turn on one term. Our <a href="/glossary">glossary</a> is a start.</li>
<li>Learn frameworks as lists: the CIA triad, the NIST incident response phases, the trust services categories.</li>
<li>Practise in volume. With 82 MCQs worth 60%, question practice pays off more here than in any other section.</li>
</ol>

${sources([BLUEPRINTS, SCORING, ["AICPA & CIMA — ISC blueprint", "https://www.aicpa-cima.com/resources/download/isc-cpa-exam-blueprint"]])}
`,
  },
  {
    slug: "tcp-exam-complete-guide",
    title: "The TCP Exam: Format, Blueprint Weights and How to Pass",
    category: "Study Strategy",
    excerpt:
      "Tax Compliance and Planning builds on REG with planning for individuals and entities. It has the highest pass rate of any section. Here is how it works and who it suits.",
    crux: [
      "Format: Four hours — 68 multiple-choice questions and 7 task-based simulations, each half of the score.",
      "Content: Individuals and personal planning (30–40%), entity compliance (30–40%), entity planning (10–20%), property transactions (10–20%).",
      "Pass rate: About 78% in 2025, the highest of all six sections.",
      "Best fit: Candidates in US tax roles, or anyone who found REG's tax content comfortable.",
      "Strategy: Take it right after REG — the overlap is the biggest advantage TCP offers.",
    ],
    content: `
<p>Tax Compliance and Planning (TCP) is the Discipline for tax careers. It goes deeper than <a href="/cpa/reg">REG</a> on the same federal tax system, adding planning: choosing entities, timing income, structuring distributions and gifts. Its 2025 pass rate, per the AICPA, was about 78% — the highest of any section, partly because many TCP candidates work in tax and have just passed REG.</p>

<h2>Format</h2>
<ul>
<li><strong>Length:</strong> 4 hours, plus an optional 15-minute break.</li>
<li><strong>Questions:</strong> 68 MCQs (two testlets of 34) and 7 TBSs (testlets of 2, 3 and 2).</li>
<li><strong>Scoring:</strong> 50% MCQs, 50% simulations; 75 to pass.</li>
</ul>

<h2>Content areas</h2>
<table>
<thead><tr><th>Area</th><th>Weight</th></tr></thead>
<tbody>
<tr><td>I. Individual Tax Compliance and Planning, and Personal Financial Planning</td><td>30–40%</td></tr>
<tr><td>II. Entity Tax Compliance</td><td>30–40%</td></tr>
<tr><td>III. Entity Tax Planning</td><td>10–20%</td></tr>
<tr><td>IV. Property Transactions (Disposition of Assets)</td><td>10–20%</td></tr>
</tbody>
</table>

<h2>Where the marks are</h2>
<ul>
<li><a href="/cpa/tcp/individual-tax-planning-strategies">Individual planning</a>, <a href="/cpa/tcp/retirement-planning-strategies">retirement</a> and <a href="/cpa/tcp/estate-and-gift-tax-planning">estate and gift planning</a>.</li>
<li><a href="/cpa/tcp/c-corporation-tax-compliance">C corporation compliance</a>, including Schedule M-1 and M-3 reconciliations.</li>
<li><a href="/cpa/tcp/s-corporation-planning">S corporation</a> and <a href="/cpa/tcp/partnership-planning">partnership</a> planning, and <a href="/cpa/tcp/entity-choice-and-structuring">choice of entity</a>.</li>
<li><a href="/cpa/tcp/entity-distributions-and-liquidations">Distributions and liquidations</a> and <a href="/cpa/tcp/property-transactions-advanced-planning">advanced property transactions</a>.</li>
</ul>

<h2>Is TCP right for you?</h2>
<p>If you work in US tax — including at outsourcing centres in India preparing US returns — TCP is usually the obvious choice. If you are aiming for audit, BAR or ISC may serve your career better even though TCP's pass rate is higher. Our <a href="/tools/cpa-discipline-selector">Discipline selector</a> helps you weigh this.</p>

<h2>How much study time?</h2>
<p>Plan for 80–110 hours if you have just passed REG, more if REG was a while ago.</p>

${sources([BLUEPRINTS, SCORING, ["AICPA & CIMA — TCP blueprint", "https://www.aicpa-cima.com/resources/download/tcp-cpa-exam-blueprint"]])}
`,
  },
  {
    slug: "cpa-ethics-exam-for-licensure",
    title: "The CPA Ethics Exam: What It Is and Why Your State May Require It",
    category: "Indian Students",
    excerpt:
      "Passing the four sections is not the last test. Many state boards also require an ethics course and exam before they issue a licence. Here is what to expect and how to check.",
    crux: [
      "What it is: A separate ethics requirement for licensure, set by each state board — not part of the Uniform CPA Exam.",
      "Common form: A self-study course on the AICPA Code of Professional Conduct, followed by an open-book exam with a high pass mark.",
      "Variation: Some boards use the AICPA course, some add or substitute a state-specific course on their own rules, and some require none.",
      "Timing: Usually after passing the exam and before applying for the licence; some boards set a time limit.",
      "Action: Check your board's licensure page before you finish the exam, so it does not delay your licence.",
    ],
    content: `
<p>Passing all four sections of the CPA Exam makes you eligible for a licence, but most state boards have further requirements: work experience, sometimes residency or citizenship rules, and in many states a separate ethics examination. Candidates from India often discover this late, which can add weeks to the licensing process.</p>

<h2>What the ethics requirement usually looks like</h2>
<ul>
<li><strong>A self-study course</strong> on professional ethics, most often based on the AICPA Code of Professional Conduct: independence, integrity and objectivity, confidentiality, acts discreditable and the rules on fees and commissions.</li>
<li><strong>An exam at the end</strong>, typically open-book and taken online, with a high pass mark.</li>
<li><strong>State rules on top</strong> in some states, where the board requires a course on its own accountancy act and rules, instead of or in addition to the AICPA course.</li>
</ul>

<h2>Why it exists</h2>
<p>The Uniform CPA Exam tests ethics within AUD and REG, but boards license people to practise under their own state's law. The ethics requirement lets the board confirm that new licensees know the rules they will be disciplined under.</p>

<h2>How to prepare</h2>
<p>If you have recently passed <a href="/cpa/aud/professional-ethics-and-independence">AUD's ethics and independence area</a>, most of the content is familiar. The difficulty is the high pass mark, so read the course material properly rather than relying on memory. Our post on <a href="/blog/auditor-independence-rules">auditor independence rules</a> is a quick refresher.</p>

<h2>How to check your state's rule</h2>
<ol>
<li>Open your board's page from our <a href="/state-boards">state boards</a> comparison.</li>
<li>Look under licensure (not exam) requirements for "ethics".</li>
<li>Note who provides the course, the pass mark and any time limit after passing the exam.</li>
</ol>

<p>Remember that exam eligibility and licensure are different stages — see <a href="/blog/passing-cpa-exam-vs-getting-cpa-licence">passing the exam vs getting a licence</a>.</p>

${sources([
  ["NASBA — How to get a CPA licence", "https://nasba.org/licensure/gettingacpalicense/howtogetlicensed/"],
  ["NASBA and AICPA — Ninth edition of the Uniform Accountancy Act", "https://nasba.org/blog/2025/07/22/nasba-and-aicpa-publish-ninth-edition-of-the-uniform-accountancy-act-uaa/"],
])}
`,
  },
  {
    slug: "cpa-licence-renewal-and-cpe",
    title: "Keeping Your CPA Licence: Renewal, CPE Hours and Ethics Credits",
    category: "Career",
    excerpt:
      "A CPA licence has to be renewed, usually with continuing professional education. Here is how renewal typically works, what counts as CPE and how to keep it manageable from India.",
    crux: [
      "Renewal: Licences are renewed on a cycle set by each state board, often every one to three years.",
      "CPE: Most boards require continuing professional education — commonly around 120 hours over three years, with annual minimums.",
      "Ethics CPE: Many boards require a set number of ethics hours in each cycle.",
      "Format: Live webinars and self-study usually count if the sponsor meets the board's standards.",
      "Records: Keep certificates for several years — boards audit a sample of licensees.",
    ],
    content: `
<p>Earning a CPA licence is not a one-time event. State boards renew licences on a fixed cycle and, in almost every state, require licensees to keep learning through continuing professional education (CPE). The details belong to each board, so treat the figures below as the common pattern, not your rule.</p>

<h2>How renewal typically works</h2>
<ul>
<li><strong>Cycle:</strong> Each board sets a renewal period, often one, two or three years, and a renewal fee.</li>
<li><strong>CPE hours:</strong> A widely used standard is about 120 hours over three years, often with a minimum each year so you cannot leave it all to the end.</li>
<li><strong>Ethics:</strong> Many boards require some of those hours to be in ethics, sometimes in a state-specific course.</li>
<li><strong>Technical vs non-technical:</strong> Some boards cap how many hours can come from soft-skills or practice-management topics.</li>
</ul>

<h2>What counts as CPE</h2>
<p>Boards generally accept courses from sponsors that follow the CPE standards issued jointly by the AICPA and NASBA, including live webinars and self-study with a final assessment. Many sponsors list themselves on NASBA's National Registry of CPE Sponsors, which most boards recognise.</p>

<h2>Active, inactive and mobility</h2>
<ul>
<li>Some boards let you hold an <strong>inactive</strong> licence with lighter CPE, but you usually cannot use the CPA title to offer services while inactive.</li>
<li>If you practise across state lines under mobility rules, you generally follow your home board's CPE rules.</li>
</ul>

<h2>Managing CPE from India</h2>
<ol>
<li>Choose sponsors whose webinars run at workable hours in IST, or use self-study.</li>
<li>Track hours by year and category in a simple spreadsheet from day one.</li>
<li>Download every certificate. Boards can audit a sample of renewals and ask for proof.</li>
</ol>

<p>Just starting out? See <a href="/blog/how-to-become-us-cpa-from-india-step-by-step">how to become a US CPA from India</a> and our <a href="/cpa-licensure-pathways">licensure pathways</a> page.</p>

${sources([
  ["NASBA — How to get a CPA licence", "https://nasba.org/licensure/gettingacpalicense/howtogetlicensed/"],
  ["NASBA — Home (CPE registry and state board links)", "https://nasba.org/"],
])}
`,
  },
  {
    slug: "ai-prompts-for-accountants-and-cpa-candidates",
    title: "AI Prompts for Accountants and CPA Candidates: 20 That Actually Help",
    category: "Career",
    excerpt:
      "Practical prompts for studying, audit, tax and reporting work — and the checks to run before you trust the answer. Includes what never to paste into a public AI tool.",
    crux: [
      "Use AI to explain, quiz and draft — not as an authority. Check every rule against the standard or the Code.",
      "For study: Ask it to explain a concept two ways, then quiz you with exam-style questions.",
      "For work: Use it for first drafts of memos, checklists and formulas, then review line by line.",
      "Never paste: Client names, personal data or confidential figures into a public AI tool.",
      "Known risk: AI tools can invent citations and rules (hallucinations). Ask for the source, then verify it yourself.",
    ],
    content: `
<p>Generative AI is now part of accounting work, and the CPA Exam is catching up: the 2027 AUD blueprint adds AI-generated evidence, and ISC already tests emerging technology risks. Used well, AI can speed up studying and routine work. Used carelessly, it produces confident, wrong answers. These prompts are written to get the first and avoid the second.</p>

<h2>Ground rules</h2>
<ul>
<li><strong>Verify:</strong> AI tools can invent rules, citations and figures. Check against the standard, the Internal Revenue Code or your review notes.</li>
<li><strong>Protect data:</strong> Do not paste client names, personal data or confidential numbers into a public tool. Use anonymised figures or your firm's approved tool.</li>
<li><strong>State the context:</strong> Say which framework (US GAAP, GAAS, PCAOB) and which tax year you mean.</li>
</ul>

<h2>For studying</h2>
<ol>
<li>"Explain [topic] under US GAAP as if I know Ind AS. Then list the three biggest differences."</li>
<li>"Give me five CPA-style multiple-choice questions on [topic], one at a time. Wait for my answer before explaining."</li>
<li>"I answered B to this question and the correct answer is C. Explain the rule I missed and a similar trap to watch for." (Then paste a question you wrote, not a copyrighted one.)</li>
<li>"Turn these notes on [topic] into a one-page revision sheet with a table of rules and exceptions."</li>
<li>"Make a 10-question flashcard set on the AICPA independence rules, with the answer on a separate line."</li>
</ol>

<h2>For audit work</h2>
<ol start="6">
<li>"List the relevant assertions and two substantive procedures for each, for accounts receivable in a manufacturing company."</li>
<li>"Draft a walkthrough checklist for the purchase-to-pay process, including the key controls to observe."</li>
<li>"Suggest analytical procedures for revenue for a retailer with 40 stores, and what would count as an unusual result."</li>
<li>"Rewrite this deficiency description so it states the condition, criteria, cause and effect clearly." (Use anonymised text.)</li>
<li>"What questions should I ask management about going concern indicators for a company with recurring losses?"</li>
</ol>

<h2>For tax work</h2>
<ol start="11">
<li>"Explain how a partner's outside basis changes for contributions, income, distributions and liabilities, with a numeric example."</li>
<li>"Compare taxation of a sole proprietorship, S corporation and C corporation for a business earning $200,000 of profit. State assumptions."</li>
<li>"List the information I need from a client to prepare a Schedule C."</li>
<li>"Draft a plain-English email explaining estimated tax payments to a new client."</li>
<li>"Which IRS forms and publications should I read to answer this question about [topic]?" (Then read them.)</li>
</ol>

<h2>For reporting and Excel</h2>
<ol start="16">
<li>"Write an Excel formula that looks up each invoice's customer region from a second sheet and returns 'Missing' if not found."</li>
<li>"Draft a revenue recognition memo outline under ASC 606 for a software subscription with implementation services."</li>
<li>"Build a lease amortisation table in Excel for a five-year lease with annual payments in advance, at 6%."</li>
<li>"Explain this variance between budget and actual in three sentences a non-accountant would understand."</li>
<li>"Check this journal entry for errors and explain each debit and credit."</li>
</ol>

<h2>The check that matters</h2>
<p>For anything you will rely on, ask: "What is your source for this rule?" Then open that source yourself. If the AI cannot name a real one, or the source says something different, the answer is wrong. For practice that is already checked, use our <a href="/question-of-the-day">Question of the Day</a> and <a href="/cpa/isc/emerging-technology-considerations">ISC emerging technology</a> topic.</p>
`,
  },
  {
    slug: "excel-skills-for-accountants",
    title: "Excel for Accountants: 15 Functions and Skills Worth Learning First",
    category: "Career",
    excerpt:
      "The lookups, conditional sums, pivot tables and checks that cover most accounting work — with examples, and how they help in CPA simulations too.",
    crux: [
      "Lookups: XLOOKUP (or INDEX and MATCH) replaces most VLOOKUP problems.",
      "Conditional maths: SUMIFS, COUNTIFS and AVERAGEIFS power reconciliations and summaries.",
      "Analysis: Pivot tables summarise thousands of rows in seconds.",
      "Controls: Use checks that should equal zero, and lock formulas you do not want edited.",
      "On the exam: Simulations include a spreadsheet tool — basic formulas save time on calculations.",
    ],
    content: `
<p>Most accounting work still runs through spreadsheets: reconciliations, schedules, accruals, budgets and audit workpapers. The CPA Exam's task-based simulations also give you a built-in spreadsheet, so basic formula skills save time there too. These are the functions and habits that give the biggest return.</p>

<h2>Lookups and matching</h2>
<ol>
<li><strong>XLOOKUP</strong> — finds a value in one column and returns the matching value from another, in either direction, with a built-in "not found" result. Example: <code>=XLOOKUP(A2, Customers!A:A, Customers!C:C, "Missing")</code>.</li>
<li><strong>INDEX and MATCH</strong> — the older, flexible alternative that works in every version of Excel.</li>
<li><strong>COUNTIF to find duplicates</strong> — <code>=COUNTIF(B:B, B2)&gt;1</code> flags duplicate invoice numbers, a classic test for duplicate payments.</li>
</ol>

<h2>Conditional sums and counts</h2>
<ol start="4">
<li><strong>SUMIFS</strong> — totals by one or more conditions, for example sales by region and month. The backbone of most reconciliations.</li>
<li><strong>COUNTIFS and AVERAGEIFS</strong> — the same idea for counts and averages.</li>
<li><strong>IF and IFS</strong> — classify items, for example ageing receivables into 0–30, 31–60 and over 60 days.</li>
</ol>

<h2>Dates and text</h2>
<ol start="7">
<li><strong>EOMONTH and EDATE</strong> — month-ends and due dates for accruals, prepayments and loan schedules.</li>
<li><strong>TEXT, LEFT, RIGHT and TRIM</strong> — clean exported data, such as account codes with stray spaces.</li>
<li><strong>Flash Fill and Text to Columns</strong> — split or combine fields without formulas.</li>
</ol>

<h2>Finance functions</h2>
<ol start="10">
<li><strong>PV, PMT and NPV</strong> — present values and loan payments for leases and bonds. Remember Excel's sign convention: cash out is negative.</li>
<li><strong>ROUND</strong> — round in the formula, not just the display, so schedules tie to the cent.</li>
</ol>

<h2>Analysis and presentation</h2>
<ol start="12">
<li><strong>Pivot tables</strong> — summarise a general ledger export by account and period in seconds.</li>
<li><strong>Tables (Ctrl+T)</strong> — formulas and pivots expand automatically when data is added.</li>
</ol>

<h2>Controls in your own workbook</h2>
<ol start="14">
<li><strong>Check cells</strong> — a cell that should be zero, such as total debits minus total credits, highlighted red when it is not.</li>
<li><strong>Protection and documentation</strong> — lock formula cells, colour inputs differently and note the source of every number. Reviewers and auditors will thank you.</li>
</ol>

<h2>Using it on the CPA Exam</h2>
<p>Simulation spreadsheets support basic formulas such as SUM and arithmetic, which is enough for most calculations. Practise building small schedules quickly in our <a href="/cpa/far/simulations">FAR simulations</a> and see <a href="/blog/how-to-solve-cpa-task-based-simulations">how to solve simulations step by step</a>. For data topics on the exam, read <a href="/blog/data-analytics-for-accountants-descriptive-predictive-prescriptive">data analytics for accountants</a>.</p>

${sources([["AICPA & CIMA — CPA Exam sample tests (including the exam's spreadsheet tool)", "https://www.aicpa-cima.com/resources/article/get-familiar-with-the-cpa-exam-by-practicing-with-our-sample-tests"]])}
`,
  },
];
