import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

/**
 * Auditing explainers (AUD and ISC) plus a few FAR concepts Indian candidates search
 * for. Same rules as blog-keywords.ts: our own writing, sources limited to official
 * bodies (AICPA, PCAOB, SEC, FASB, NASBA and Indian government sites).
 */

const PCAOB = (code: string, title: string): [string, string] => [
  `PCAOB — ${code}, ${title}`,
  `https://pcaobus.org/oversight/standards/auditing-standards/details/${code.replace(" ", "")}`,
];
const AICPA_SAS: [string, string] = [
  "AICPA & CIMA — Statements on Auditing Standards (AU-C sections) currently effective",
  "https://www.aicpa-cima.com/resources/download/aicpa-statements-on-auditing-standards-currently-effective",
];
const AICPA_BLUEPRINTS: [string, string] = [
  "AICPA & CIMA — CPA Exam Blueprints",
  "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam",
];

export const auditPosts: BlogSeed[] = [
  {
    slug: "types-of-audit-opinions",
    title: "Types of Audit Opinions: Unmodified, Qualified, Adverse and Disclaimer",
    category: "Auditing",
    excerpt:
      "The four audit opinions, the two questions that decide which one is issued, and a decision table you can use on the AUD exam.",
    crux: [
      "Unmodified (clean): The financial statements are presented fairly, in all material respects.",
      "Qualified: \"Except for\" one matter — a material misstatement or a scope limitation that is material but not pervasive.",
      "Adverse: The financial statements are materially misstated and the effect is pervasive — they are not presented fairly.",
      "Disclaimer: The auditor couldn't obtain enough evidence, and the possible effects are both material and pervasive — no opinion is given.",
      "Two questions decide it: Is the problem a misstatement or a lack of evidence? And is it material only, or material and pervasive?",
    ],
    content: `
<h2>What an audit opinion is</h2>
<p>An audit opinion is the auditor's conclusion on whether the financial statements are presented fairly, in all material respects, in accordance with the applicable financial reporting framework (such as US generally accepted accounting principles, or GAAP). For private companies the rules are in AU-C 700 and AU-C 705 of the AICPA's auditing standards; for public companies, the Public Company Accounting Oversight Board (PCAOB) standards AS 3101 and AS 3105 apply.</p>

<h2>The four opinions</h2>
<ul>
<li><strong>Unmodified opinion</strong> — the "clean" opinion. The auditor obtained sufficient appropriate evidence and found no uncorrected material misstatement.</li>
<li><strong>Qualified opinion</strong> — fair "except for the effects of" a specific matter. Used when a misstatement, or an inability to obtain evidence, is material but confined to one area.</li>
<li><strong>Adverse opinion</strong> — the financial statements are <em>not</em> presented fairly because misstatements are material and pervasive.</li>
<li><strong>Disclaimer of opinion</strong> — the auditor does not express an opinion because it couldn't obtain enough evidence, and the possible effects of undetected misstatements could be both material and pervasive.</li>
</ul>

<h2>The decision table</h2>
<table>
<thead><tr><th>Nature of the problem</th><th>Material, not pervasive</th><th>Material and pervasive</th></tr></thead>
<tbody>
<tr><td>Financial statements are materially misstated</td><td>Qualified</td><td>Adverse</td></tr>
<tr><td>Unable to obtain sufficient appropriate evidence (scope limitation)</td><td>Qualified</td><td>Disclaimer</td></tr>
</tbody>
</table>
<p><strong>Pervasive</strong> means the effects aren't confined to specific elements, or, if they are, they represent a substantial part of the financial statements, or they concern disclosures that are fundamental to users' understanding.</p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> An emphasis-of-matter paragraph (for example, about a major lawsuit that is properly disclosed) does <em>not</em> modify the opinion. Neither does substantial doubt about going concern when it's adequately disclosed. Both leave you with an unmodified opinion plus extra paragraphs.</p>
</div>

<h2>What changes in the report</h2>
<ul>
<li>The <strong>Opinion</strong> section heading changes to "Qualified Opinion", "Adverse Opinion" or "Disclaimer of Opinion".</li>
<li>A <strong>Basis for Qualified (or Adverse, or Disclaimer of) Opinion</strong> section describes the matter and, where practicable, quantifies its effect.</li>
<li>In a disclaimer, the auditor does not say it obtained sufficient appropriate evidence, and the description of the auditor's responsibilities is amended.</li>
</ul>

<h2>Scope limitations imposed by management</h2>
<p>If management refuses to let the auditor perform a procedure (for example, confirming receivables) and alternative procedures can't fill the gap, the auditor communicates with those charged with governance. If the possible effects are material and pervasive, the auditor either disclaims or withdraws from the engagement where withdrawal is possible under law.</p>

<p>Study the full reporting rules, including report elements and other-information requirements, in our <a href="/cpa/aud/audit-reports">AUD audit reports</a> notes. For the paragraphs that <em>don't</em> modify an opinion, see <a href="/blog/emphasis-of-matter-vs-other-matter-paragraph">emphasis-of-matter vs other-matter paragraphs</a>.</p>

${sources([
  AICPA_SAS,
  PCAOB("AS 3101", "The Auditor's Report on an Audit of Financial Statements When the Auditor Expresses an Unqualified Opinion"),
  PCAOB("AS 3105", "Departures from Unqualified Opinions and Other Reporting Circumstances"),
])}
`,
  },
  {
    slug: "audit-risk-model-explained",
    title: "The Audit Risk Model Explained: AR = IR × CR × DR",
    category: "Auditing",
    excerpt:
      "Inherent risk, control risk and detection risk — what each means, which one the auditor controls, and how to rearrange the formula on the exam.",
    crux: [
      "Audit risk (AR): The risk that the auditor gives an inappropriate opinion when the financial statements are materially misstated.",
      "Formula: AR = Inherent risk (IR) × Control risk (CR) × Detection risk (DR). IR × CR is the risk of material misstatement (RMM).",
      "Who controls what: IR and CR exist independently of the audit and are assessed; DR is the only component the auditor controls.",
      "Inverse relationship: The higher the assessed RMM, the lower the acceptable detection risk — so more, better-timed or more reliable substantive testing.",
      "Exam rearrangement: DR = AR ÷ (IR × CR).",
    ],
    content: `
<h2>The three components</h2>
<table>
<thead><tr><th>Component</th><th>Meaning</th><th>Auditor's role</th></tr></thead>
<tbody>
<tr><td>Inherent risk (IR)</td><td>How susceptible an assertion is to material misstatement before considering controls — higher for complex estimates, cash, related-party transactions</td><td>Assess</td></tr>
<tr><td>Control risk (CR)</td><td>The risk that the entity's internal control won't prevent, or detect and correct, a material misstatement</td><td>Assess</td></tr>
<tr><td>Detection risk (DR)</td><td>The risk that the auditor's own procedures won't detect a material misstatement that exists</td><td><strong>Control</strong>, through the nature, timing and extent of substantive procedures</td></tr>
</tbody>
</table>

<h2>Working the formula</h2>
<div class="callout callout-example">
<p><strong>Example:</strong> The auditor wants overall audit risk of 5%. Inherent risk for inventory valuation is assessed at 100% and control risk at 50%. Acceptable detection risk = 0.05 ÷ (1.00 × 0.50) = <strong>10%</strong>. If control risk were 100% instead, detection risk would have to fall to 5% — meaning more extensive substantive testing.</p>
</div>

<h2>How the auditor lowers detection risk</h2>
<ul>
<li><strong>Nature:</strong> switch to more reliable evidence — external confirmations rather than internal documents, tests of details rather than analytics.</li>
<li><strong>Timing:</strong> test at or near the year-end rather than at an interim date.</li>
<li><strong>Extent:</strong> increase sample sizes.</li>
<li>Assign more experienced staff and increase supervision.</li>
</ul>

<h2>What changed with SAS No. 145</h2>
<p>For audits of periods ending on or after December 15, 2023, the AICPA's risk assessment standard (AU-C 315, as amended by SAS No. 145) requires a <strong>separate assessment</strong> of inherent risk and control risk. Inherent risk is assessed on a spectrum, and a <strong>significant risk</strong> is one at the upper end of that spectrum. If the auditor doesn't plan to test controls, control risk is assessed at maximum, so RMM equals inherent risk.</p>

<h2>Exam tips</h2>
<ul>
<li>Detection risk is the only component that changes because of what the <em>auditor</em> does. If an answer choice says the auditor "reduces inherent risk", it's wrong.</li>
<li>Detection risk can never be zero — even 100% testing leaves non-sampling risk (such as misjudging evidence).</li>
<li>Substantive procedures are required for every relevant assertion of every material account, however low the assessed RMM.</li>
</ul>

<p>Go deeper in our notes on <a href="/cpa/aud/audit-planning-and-materiality">planning and materiality</a> and <a href="/cpa/aud/assessing-risk-of-material-misstatement">assessing the risk of material misstatement</a>.</p>

${sources([
  AICPA_SAS,
  PCAOB("AS 1101", "Audit Risk"),
  PCAOB("AS 2110", "Identifying and Assessing Risks of Material Misstatement"),
])}
`,
  },
  {
    slug: "management-assertions-in-auditing",
    title: "Management Assertions in Auditing: The Complete List With Examples",
    category: "Auditing",
    excerpt:
      "Existence, completeness, rights and obligations, accuracy and valuation, cutoff, classification and presentation — what each assertion means and which procedure tests it.",
    crux: [
      "Meaning: Assertions are the claims management implicitly makes in the financial statements — that a balance exists, is complete, is correctly valued and so on.",
      "Transactions: Occurrence, completeness, accuracy, cutoff, classification and presentation.",
      "Balances: Existence, rights and obligations, completeness, accuracy valuation and allocation, classification and presentation.",
      "Direction of testing: Vouch from the records to source documents for existence and occurrence (overstatement); trace from source documents to the records for completeness (understatement).",
      "Why it matters: Auditors assess risk and design procedures at the assertion level, so most AUD questions are really asking \"which assertion?\"",
    ],
    content: `
<h2>Why assertions exist</h2>
<p>When management presents a $2 million inventory figure, it is implicitly claiming that the inventory exists, that the company owns it, that nothing is missing, and that it's valued correctly. Each of those claims is an <strong>assertion</strong>. The auditor identifies risks of material misstatement at the assertion level and designs procedures that respond to each one.</p>

<h2>Assertions about transactions and events</h2>
<ul>
<li><strong>Occurrence</strong> — recorded transactions actually happened and relate to the entity.</li>
<li><strong>Completeness</strong> — every transaction that should have been recorded was recorded.</li>
<li><strong>Accuracy</strong> — amounts and data were recorded correctly.</li>
<li><strong>Cutoff</strong> — transactions were recorded in the correct period.</li>
<li><strong>Classification</strong> — transactions were recorded in the proper accounts.</li>
<li><strong>Presentation</strong> — transactions are appropriately aggregated, described and disclosed.</li>
</ul>

<h2>Assertions about account balances</h2>
<ul>
<li><strong>Existence</strong> — assets, liabilities and equity actually exist.</li>
<li><strong>Rights and obligations</strong> — the entity holds or controls the rights to the assets, and liabilities are its obligations.</li>
<li><strong>Completeness</strong> — all balances that should have been recorded were recorded.</li>
<li><strong>Accuracy, valuation and allocation</strong> — balances are included at appropriate amounts and any adjustments are properly recorded.</li>
<li><strong>Classification</strong> and <strong>presentation</strong> — as above, for balances.</li>
</ul>

<h2>Matching procedures to assertions</h2>
<table>
<thead><tr><th>Procedure</th><th>Main assertion tested</th></tr></thead>
<tbody>
<tr><td>Observing the physical inventory count</td><td>Existence (and completeness, if test counts are traced to the records)</td></tr>
<tr><td>Confirming receivables with customers</td><td>Existence</td></tr>
<tr><td>Searching for unrecorded liabilities (reviewing payments after year-end)</td><td>Completeness</td></tr>
<tr><td>Examining title deeds or loan agreements</td><td>Rights and obligations</td></tr>
<tr><td>Reviewing the ageing of receivables and the allowance</td><td>Valuation</td></tr>
<tr><td>Examining shipping documents a few days either side of year-end</td><td>Cutoff</td></tr>
<tr><td>Reading disclosures against the framework's checklist</td><td>Presentation</td></tr>
</tbody>
</table>

<div class="callout callout-tip">
<p><strong>Direction matters:</strong> Starting from the ledger and going back to invoices (<em>vouching</em>) can only prove that what's recorded is real — it tests existence or occurrence. Starting from shipping documents and following them into the ledger (<em>tracing</em>) proves nothing was left out — it tests completeness.</p>
</div>

<h2>Assets vs liabilities</h2>
<p>Management is usually more tempted to <strong>overstate assets</strong> and <strong>understate liabilities</strong>. So the auditor focuses on existence for assets and completeness for liabilities — a pattern that answers a lot of exam questions on its own.</p>

<p>See our notes on <a href="/cpa/aud/evidence-types-and-procedures">evidence types and procedures</a> and <a href="/cpa/aud/responding-to-assessed-risks">responding to assessed risks</a>.</p>

${sources([
  AICPA_SAS,
  PCAOB("AS 1105", "Audit Evidence"),
])}
`,
  },
  {
    slug: "tests-of-controls-vs-substantive-procedures",
    title: "Tests of Controls vs Substantive Procedures: What's the Difference?",
    category: "Auditing",
    excerpt:
      "One asks whether a control works; the other looks for misstatements directly. When each is required, how they interact, and the dual-purpose test.",
    crux: [
      "Tests of controls: Check whether a control operated effectively throughout the period — e.g. inspecting evidence that invoices were approved.",
      "Substantive procedures: Look directly for material misstatements — tests of details and substantive analytical procedures.",
      "When controls must be tested: When the auditor plans to rely on them, or when substantive procedures alone can't give enough evidence (common with highly automated systems).",
      "Always required: Substantive procedures for every relevant assertion of every material account — whatever the control assessment.",
      "Trade-off: Effective controls lower control risk, which allows less substantive testing.",
    ],
    content: `
<h2>Two different questions</h2>
<ul>
<li>A <strong>test of controls</strong> asks: <em>did this control work, every time, all year?</em> The auditor's conclusion is about the control, not the balance.</li>
<li>A <strong>substantive procedure</strong> asks: <em>is this number right?</em> The conclusion is about the account balance, transaction class or disclosure.</li>
</ul>

<h2>Procedures used for each</h2>
<table>
<thead><tr><th></th><th>Tests of controls</th><th>Substantive procedures</th></tr></thead>
<tbody>
<tr><td>Typical procedures</td><td>Inquiry plus observation, inspection of documents for evidence of performance, re-performance</td><td>Tests of details (confirmation, vouching, recalculation) and substantive analytical procedures</td></tr>
<tr><td>Inquiry alone</td><td>Never sufficient</td><td>Never sufficient</td></tr>
<tr><td>Typical sampling</td><td>Attribute sampling (deviation rate)</td><td>Variables or monetary-unit sampling (dollar misstatement)</td></tr>
<tr><td>Required?</td><td>Only when relying on controls, or when substantive procedures alone are insufficient</td><td>Always, for each relevant assertion of each material item</td></tr>
</tbody>
</table>

<h2>Relying on prior-year testing</h2>
<p>Under AICPA standards, if a control hasn't changed, the auditor may rely on evidence from earlier audits but must test it at least once every third audit. That shortcut is not available for controls that address a <strong>significant risk</strong> — those must be tested in the current period.</p>

<h2>Dual-purpose tests</h2>
<p>A single procedure can do both jobs. Examining a sample of sales invoices for evidence of credit approval (a control) while also checking that each invoice's amount agrees to the shipping document and the ledger (a substantive check) is a dual-purpose test. The auditor must design it to meet both objectives and evaluate each result separately.</p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> Walkthroughs — following one transaction through the system — help the auditor understand a process and confirm controls have been implemented. On their own they aren't enough to conclude that a control operated effectively throughout the period.</p>
</div>

<h2>Public company audits</h2>
<p>For larger public companies, the PCAOB's AS 2201 requires an integrated audit: an opinion on internal control over financial reporting alongside the financial statement opinion. Controls testing there is extensive, because the auditor must opine on the controls themselves.</p>

<p>Continue with <a href="/cpa/aud/responding-to-assessed-risks">responding to assessed risks</a> and <a href="/cpa/aud/understanding-the-entity-and-internal-control">understanding the entity and its internal control</a>.</p>

${sources([
  AICPA_SAS,
  PCAOB("AS 2301", "The Auditor's Responses to the Risks of Material Misstatement"),
  PCAOB("AS 2201", "An Audit of Internal Control Over Financial Reporting That Is Integrated with An Audit of Financial Statements"),
])}
`,
  },
  {
    slug: "coso-internal-control-framework",
    title: "The COSO Internal Control Framework: 5 Components and 17 Principles",
    category: "Auditing",
    excerpt:
      "Control environment, risk assessment, control activities, information and communication, monitoring — the framework behind every SOX 404 assessment, explained simply.",
    crux: [
      "What it is: The COSO 2013 Internal Control — Integrated Framework, the framework most US companies use to design and assess internal control.",
      "Five components: Control environment, risk assessment, control activities, information and communication, and monitoring activities.",
      "17 principles: Spread across the five components; all must be present and functioning for internal control to be effective.",
      "Three objectives: Operations, reporting and compliance.",
      "Where it's required: SEC rules require management of public companies to assess internal control over financial reporting using a suitable recognised framework — in practice, almost always COSO.",
    ],
    content: `
<h2>Why COSO matters</h2>
<p>Section 404 of the Sarbanes-Oxley Act requires management of US public companies to report on the effectiveness of their internal control over financial reporting (ICFR). The Securities and Exchange Commission (SEC) requires that assessment to use a suitable, recognised control framework. The framework published by the Committee of Sponsoring Organizations of the Treadway Commission (COSO) is the one almost everyone uses — and it's the framework the CPA Exam expects you to know.</p>

<h2>The five components</h2>
<table>
<thead><tr><th>Component</th><th>What it covers</th><th>Principles</th></tr></thead>
<tbody>
<tr><td>Control environment</td><td>Integrity and ethical values, board oversight, structure and authority, commitment to competence, accountability — the "tone at the top"</td><td>1–5</td></tr>
<tr><td>Risk assessment</td><td>Specifying objectives, identifying and analysing risks, considering fraud risk, assessing significant changes</td><td>6–9</td></tr>
<tr><td>Control activities</td><td>Selecting control activities, general controls over technology, deploying through policies and procedures</td><td>10–12</td></tr>
<tr><td>Information and communication</td><td>Using relevant, quality information; communicating internally and externally</td><td>13–15</td></tr>
<tr><td>Monitoring activities</td><td>Ongoing and separate evaluations; communicating deficiencies</td><td>16–17</td></tr>
</tbody>
</table>
<p>A popular memory aid is <strong>CRIME</strong>: Control activities, Risk assessment, Information and communication, Monitoring, and (control) Environment — just remember the official order starts with the control environment.</p>

<h2>Effective internal control</h2>
<p>Internal control is effective only when all five components and all relevant principles are <strong>present</strong> (designed and implemented) and <strong>functioning</strong> (operating as designed), and the components operate together. A major deficiency in one component can't be offset by strength in another.</p>

<h2>Examples of control activities</h2>
<ul>
<li>Authorisation and approval (purchase orders above a limit need a manager's sign-off).</li>
<li>Segregation of duties — separating authorisation, recording and custody of assets.</li>
<li>Reconciliations (bank reconciliations reviewed by someone independent of cash).</li>
<li>Physical controls over assets and IT access controls.</li>
</ul>

<h2>Deficiency levels</h2>
<ul>
<li><strong>Control deficiency</strong> — a control doesn't allow timely prevention or detection of misstatements.</li>
<li><strong>Significant deficiency</strong> — less severe than a material weakness, but important enough to merit the attention of those charged with governance.</li>
<li><strong>Material weakness</strong> — a reasonable possibility that a material misstatement won't be prevented or detected on a timely basis.</li>
</ul>

<p>Study it alongside <a href="/cpa/aud/understanding-the-entity-and-internal-control">understanding the entity and internal control</a> and <a href="/cpa/aud/it-controls-in-audit">IT controls in an audit</a>.</p>

${sources([
  ["US SEC (eCFR) — Regulation S-K Item 308, Internal control over financial reporting", "https://www.ecfr.gov/current/title-17/chapter-II/part-229/subpart-229.300/section-229.308"],
  PCAOB("AS 2201", "An Audit of Internal Control Over Financial Reporting That Is Integrated with An Audit of Financial Statements"),
  AICPA_BLUEPRINTS,
])}
`,
  },
  {
    slug: "going-concern-in-auditing",
    title: "Going Concern in Auditing: Substantial Doubt, Indicators and the Report",
    category: "Auditing",
    excerpt:
      "What going concern means, the warning signs auditors look for, how management's plans are evaluated and how substantial doubt changes the audit report.",
    crux: [
      "Meaning: Financial statements assume the entity will keep operating and meet its obligations — the going concern basis.",
      "Look-ahead period: Under AICPA standards and US GAAP, generally one year after the financial statements are issued (or available to be issued). PCAOB standards use one year after the balance sheet date.",
      "Warning signs: Recurring losses, negative cash flows, loan defaults, loss of a key customer or supplier, legal or regulatory threats.",
      "Management's plans: The auditor evaluates whether plans are probable of being implemented and would alleviate the doubt.",
      "Report impact: If substantial doubt remains and is adequately disclosed, the opinion stays unmodified with a separate going-concern section. Inadequate disclosure leads to a qualified or adverse opinion.",
    ],
    content: `
<h2>Two responsibilities</h2>
<p>Under US GAAP (Accounting Standards Codification, or ASC, 205-40), <strong>management</strong> must evaluate whether conditions raise substantial doubt about the entity's ability to continue as a going concern and make disclosures. The <strong>auditor</strong> separately evaluates whether substantial doubt exists — under AU-C 570 for private companies and PCAOB AS 2415 for public companies.</p>

<h2>Conditions that may raise substantial doubt</h2>
<ul>
<li><strong>Financial:</strong> recurring operating losses, working capital deficiencies, negative operating cash flows, adverse key ratios.</li>
<li><strong>Debt:</strong> default on loans, breaches of covenants, inability to refinance, arrears in dividends.</li>
<li><strong>Operational:</strong> loss of key management, a major customer, a key licence or a principal supplier; labour difficulties.</li>
<li><strong>Other:</strong> legal proceedings or new legislation that could jeopardise the business; uninsured catastrophes.</li>
</ul>

<h2>The evaluation step by step</h2>
<ol>
<li>Identify conditions or events that, together, could raise substantial doubt.</li>
<li>If they exist, obtain information about <strong>management's plans</strong> — for example, selling assets, borrowing, cutting costs or raising equity.</li>
<li>Evaluate whether those plans are <strong>probable</strong> of being effectively implemented and would mitigate the doubt. Where cash flow forecasts are central, test the underlying data and assumptions.</li>
<li>Obtain written representations about the plans.</li>
<li>Conclude whether substantial doubt remains, and evaluate the adequacy of disclosures.</li>
</ol>

<h2>Effect on the auditor's report</h2>
<table>
<thead><tr><th>Situation</th><th>Report</th></tr></thead>
<tbody>
<tr><td>No substantial doubt</td><td>Unmodified; no going-concern section</td></tr>
<tr><td>Substantial doubt alleviated by management's plans</td><td>Unmodified; disclosure still required in the financial statements</td></tr>
<tr><td>Substantial doubt remains, adequately disclosed</td><td>Unmodified, plus a separate section headed "Substantial Doubt About the Entity's Ability to Continue as a Going Concern"</td></tr>
<tr><td>Substantial doubt remains, inadequately disclosed</td><td>Qualified or adverse (a misstatement)</td></tr>
<tr><td>Going concern basis inappropriate (e.g. liquidation is imminent)</td><td>Adverse, unless the statements are prepared on the liquidation basis</td></tr>
</tbody>
</table>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> The auditor's going-concern section is never a "subject to" opinion and never conditional language like "if the company obtains financing". The required wording is that substantial doubt exists.</p>
</div>

<p>Also see <a href="/cpa/aud/related-parties-and-going-concern">related parties and going concern</a> in AUD and <a href="/cpa/far/notes-subsequent-events-and-going-concern">notes, subsequent events and going concern</a> in FAR.</p>

${sources([
  ["FASB — ASC 205-40, Going Concern", "https://asc.fasb.org/205-40"],
  AICPA_SAS,
  PCAOB("AS 2415", "Consideration of an Entity's Ability to Continue as a Going Concern"),
])}
`,
  },
  {
    slug: "subsequent-events-type-1-vs-type-2",
    title: "Subsequent Events: Type I (Recognised) vs Type II (Non-Recognised)",
    category: "Auditing",
    excerpt:
      "Events after the balance sheet date either adjust the numbers or only need disclosure. Here's the test that tells them apart, with examples and the auditor's procedures.",
    crux: [
      "Subsequent events: Events between the balance sheet date and the date the financial statements are issued (or available to be issued).",
      "Type I — recognised: Give more evidence about conditions that existed at the balance sheet date. Adjust the financial statements.",
      "Type II — non-recognised: Arise from conditions that came into existence after the balance sheet date. Disclose them if material; don't adjust.",
      "The test: Did the underlying condition exist at year-end? Yes = Type I; no = Type II.",
      "Auditor's role: Perform procedures up to the report date and, if a later event is disclosed, consider dual-dating the report.",
    ],
    content: `
<h2>The core test</h2>
<p>US GAAP (ASC 855, Subsequent Events) splits post-year-end events by asking one question: <strong>did the condition exist at the balance sheet date?</strong></p>

<table>
<thead><tr><th></th><th>Type I — recognised</th><th>Type II — non-recognised</th></tr></thead>
<tbody>
<tr><td>Condition existed at year-end?</td><td>Yes</td><td>No</td></tr>
<tr><td>Accounting</td><td>Adjust the financial statements</td><td>Disclose if material; no adjustment</td></tr>
<tr><td>Examples</td><td>A customer whose finances were already deteriorating goes bankrupt in February; a lawsuit about a pre-year-end incident settles for more than accrued; inventory sold below cost after year-end, showing its year-end value was lower</td><td>A fire or flood destroys a warehouse in February; the company issues shares or bonds; a business acquisition; a customer's bankruptcy caused by a post-year-end disaster</td></tr>
</tbody>
</table>

<div class="callout callout-example">
<p><strong>Example:</strong> At December 31 a customer owes $200,000. On February 10 the customer files for bankruptcy because of losses it had been suffering all year. The bankruptcy confirms the receivable was impaired at year-end — a Type I event, so the allowance is increased. If instead the customer's only factory burned down on February 1, causing the bankruptcy, the condition arose after year-end — Type II, disclosure only.</p>
</div>

<h2>How far the evaluation runs</h2>
<ul>
<li><strong>SEC filers</strong> evaluate subsequent events through the date the financial statements are <em>issued</em>.</li>
<li><strong>Other entities</strong> evaluate through the date they are <em>available to be issued</em>, and disclose that date.</li>
</ul>

<h2>The auditor's procedures</h2>
<p>The auditor performs procedures covering the period from the balance sheet date to the date of the auditor's report. Typical procedures:</p>
<ul>
<li>Reading the latest interim financial statements and board minutes.</li>
<li>Inquiring of management and legal counsel about litigation, commitments and unusual adjustments.</li>
<li>Obtaining written representations dated as of the report date.</li>
</ul>

<h2>Dual dating</h2>
<p>If a Type II event that occurs after the report date but before the report is released is disclosed in a note, the auditor can either redate the whole report (extending procedures to the new date) or <strong>dual-date</strong> it — for example, "March 5, 2027, except for Note 14, as to which the date is March 19, 2027". Dual dating limits the auditor's responsibility for later events to that one note.</p>

<h2>Subsequently discovered facts</h2>
<p>Facts discovered <em>after</em> the report is released are a different topic. If they existed at the report date and would have changed the report, the auditor discusses them with management and, if the statements are revised, takes steps to prevent continued reliance on the old report.</p>

<p>Practise this in <a href="/cpa/aud/written-representations-and-completing-the-audit">completing the audit</a> and <a href="/cpa/far/notes-subsequent-events-and-going-concern">FAR subsequent events</a>.</p>

${sources([
  ["FASB — ASC 855, Subsequent Events", "https://asc.fasb.org/855"],
  AICPA_SAS,
  PCAOB("AS 2801", "Subsequent Events"),
])}
`,
  },
  {
    slug: "audit-sampling-explained",
    title: "Audit Sampling Explained: Attribute, Variables and Monetary-Unit Sampling",
    category: "Auditing",
    excerpt:
      "Sampling risk, the two kinds of wrong conclusion, what drives sample size, and a worked monetary-unit sampling example.",
    crux: [
      "Meaning: Applying a procedure to less than 100% of a population so the auditor can conclude about the whole population.",
      "Attribute sampling: Used for tests of controls — estimates a deviation rate.",
      "Variables and monetary-unit sampling (MUS): Used for substantive tests — estimate a dollar misstatement. MUS favours larger items.",
      "Sampling risk: Concluding from a sample differently than you would from the whole population. The dangerous direction is accepting a balance or relying on a control that you shouldn't.",
      "Sample size goes up when: Tolerable misstatement or deviation falls, expected misstatement rises, or the auditor wants more confidence.",
    ],
    content: `
<h2>Sampling risk vs non-sampling risk</h2>
<ul>
<li><strong>Sampling risk</strong> — the sample isn't representative, so the conclusion differs from what testing everything would show. Reduced by larger samples.</li>
<li><strong>Non-sampling risk</strong> — everything else: using the wrong procedure, misreading evidence, failing to spot an error. Reduced by planning, supervision and quality management.</li>
</ul>

<h2>The two wrong conclusions</h2>
<table>
<thead><tr><th></th><th>Effectiveness risk (dangerous)</th><th>Efficiency risk (costly)</th></tr></thead>
<tbody>
<tr><td>Tests of controls</td><td>Risk of assessing control risk <strong>too low</strong> — relying on a control that doesn't work</td><td>Risk of assessing control risk too high</td></tr>
<tr><td>Substantive tests</td><td>Risk of <strong>incorrect acceptance</strong> — accepting a materially misstated balance</td><td>Risk of incorrect rejection</td></tr>
</tbody>
</table>
<p>Effectiveness risks lead to the wrong audit opinion. Efficiency risks just cause extra work, because the auditor usually investigates further before acting on a "fail".</p>

<h2>Attribute sampling (tests of controls)</h2>
<p>The auditor sets a <strong>tolerable deviation rate</strong> and an <strong>expected deviation rate</strong>, picks a confidence level, and reads the sample size from a table. After testing, the <em>upper deviation limit</em> (sample deviation rate plus an allowance for sampling risk) is compared with the tolerable rate. If the upper limit exceeds tolerable, the control can't be relied on as planned.</p>

<h2>Monetary-unit sampling (substantive tests)</h2>
<p>MUS (also called probability-proportional-to-size sampling) treats every dollar as a sampling unit, so a $50,000 invoice is 50 times more likely to be selected than a $1,000 one. It's efficient for finding overstatements, but poor at finding understatements and zero or negative balances.</p>
<div class="callout callout-example">
<p><strong>Worked example:</strong> Receivables have a book value of $3,000,000. Tolerable misstatement is $90,000, expected misstatement is nil, and the reliability factor for the desired confidence is 3.0.<br>
Sample size = (Book value × Reliability factor) ÷ Tolerable misstatement = ($3,000,000 × 3.0) ÷ $90,000 = <strong>100 items</strong>.<br>
Sampling interval = $3,000,000 ÷ 100 = <strong>$30,000</strong>. Every item of $30,000 or more is automatically selected.</p>
</div>

<h2>What drives sample size</h2>
<table>
<thead><tr><th>Factor</th><th>Effect on sample size</th></tr></thead>
<tbody>
<tr><td>Lower tolerable misstatement or deviation rate</td><td>Increase</td></tr>
<tr><td>Higher expected misstatement or deviation rate</td><td>Increase</td></tr>
<tr><td>Higher desired confidence (lower acceptable sampling risk)</td><td>Increase</td></tr>
<tr><td>Higher assessed risk of material misstatement</td><td>Increase (substantive tests)</td></tr>
<tr><td>Population size</td><td>Little effect, except for very small populations</td></tr>
</tbody>
</table>

<p>Full coverage, including classical variables sampling and selection methods, is in our <a href="/cpa/aud/audit-sampling">AUD audit sampling</a> notes.</p>

${sources([
  AICPA_SAS,
  PCAOB("AS 2315", "Audit Sampling"),
])}
`,
  },
  {
    slug: "fraud-triangle-auditor-responsibility",
    title: "The Fraud Triangle and the Auditor's Responsibility for Fraud",
    category: "Auditing",
    excerpt:
      "Pressure, opportunity and rationalisation; the two kinds of fraud auditors care about; and the procedures every audit must include whatever the risk assessment says.",
    crux: [
      "Fraud triangle: Incentive or pressure, opportunity, and attitude or rationalisation — fraud risk is highest when all three are present.",
      "Two types that matter to auditors: Fraudulent financial reporting (cooking the books) and misappropriation of assets (theft).",
      "Auditor's responsibility: Reasonable — not absolute — assurance that the financial statements are free of material misstatement, whether from error or fraud.",
      "Presumed risks: Improper revenue recognition is presumed a fraud risk (rebuttable); management override of controls is present in every audit (not rebuttable).",
      "Always required: Testing journal entries, reviewing estimates for bias, and evaluating significant unusual transactions.",
    ],
    content: `
<h2>The fraud triangle</h2>
<ul>
<li><strong>Incentive or pressure</strong> — bonus targets, debt covenants, analyst expectations, personal financial trouble.</li>
<li><strong>Opportunity</strong> — weak controls, complex transactions, ineffective oversight by the board, management able to override controls.</li>
<li><strong>Attitude or rationalisation</strong> — "I'll pay it back", "everyone does it", a culture that tolerates aggressive accounting.</li>
</ul>
<p>Auditors rarely observe rationalisation directly, so they focus on the incentives and opportunities they can see.</p>

<h2>Two types of fraud</h2>
<table>
<thead><tr><th></th><th>Fraudulent financial reporting</th><th>Misappropriation of assets</th></tr></thead>
<tbody>
<tr><td>Who</td><td>Usually management</td><td>Usually employees, in smaller amounts</td></tr>
<tr><td>How</td><td>Fictitious revenue, improper cutoff, biased estimates, hidden liabilities, misleading disclosures</td><td>Theft of cash or inventory, fake vendors, payroll fraud, personal expenses</td></tr>
<tr><td>Concealment</td><td>Often via top-side journal entries and management override</td><td>Forged documents, collusion</td></tr>
</tbody>
</table>

<h2>What every audit must include</h2>
<ol>
<li>A <strong>team discussion</strong> (often called brainstorming) about how and where the financial statements could be susceptible to fraud.</li>
<li><strong>Inquiries</strong> of management, internal audit and those charged with governance about fraud risks and known or suspected fraud.</li>
<li>Treating <strong>revenue recognition</strong> as a presumed fraud risk unless the auditor documents why it doesn't apply.</li>
<li>Responding to <strong>management override</strong> in every audit by:
<ul>
<li>testing the appropriateness of journal entries and other adjustments;</li>
<li>reviewing accounting estimates for bias, including a retrospective review of prior-year estimates;</li>
<li>evaluating the business rationale for significant unusual transactions.</li>
</ul></li>
<li>Incorporating an element of <strong>unpredictability</strong> into procedures.</li>
</ol>

<h2>When fraud is found</h2>
<p>Any evidence of fraud is communicated to an appropriate level of management. Fraud involving senior management, or causing a material misstatement, goes to those charged with governance. Reporting to outside parties is generally restricted by confidentiality, with exceptions — for example, legal requirements or a successor auditor's inquiries.</p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> Fraud is harder to detect than error because it is intentionally concealed — that's why an audit properly planned and performed may still miss it. "The auditor guarantees fraud will be detected" is always wrong.</p>
</div>

<p>Continue with <a href="/cpa/aud/fraud-risk">AUD fraud risk</a> and <a href="/cpa/aud/auditing-accounting-estimates">auditing accounting estimates</a>.</p>

${sources([
  AICPA_SAS,
  PCAOB("AS 2401", "Consideration of Fraud in a Financial Statement Audit"),
])}
`,
  },
  {
    slug: "auditor-independence-rules",
    title: "Auditor Independence Rules: AICPA, SEC and PCAOB Compared",
    category: "Auditing",
    excerpt:
      "Independence in fact and in appearance, the threats-and-safeguards approach, prohibited financial interests and non-audit services, and partner rotation.",
    crux: [
      "Two dimensions: Independence of mind (in fact) and independence in appearance — both are required.",
      "AICPA approach: A conceptual framework — identify threats (self-interest, self-review, advocacy, familiarity, undue influence, management participation), evaluate them and apply safeguards.",
      "Financial interests: Any direct financial interest in an attest client impairs independence, however small. An indirect interest impairs it only if material.",
      "Non-audit services: Never take on management responsibilities. Public-company auditors face a longer list of outright prohibited services under SEC rules.",
      "Rotation: For SEC registrants, the lead and concurring partners rotate after five years, followed by a five-year time-out.",
    ],
    content: `
<h2>Who sets the rules</h2>
<ul>
<li><strong>AICPA Code of Professional Conduct</strong> — applies to AICPA members and, through state board adoption, to most private-company audits.</li>
<li><strong>SEC Rule 2-01 of Regulation S-X</strong> — applies to audits of public companies and other SEC registrants.</li>
<li><strong>PCAOB</strong> — adds its own rules for registered firms auditing issuers.</li>
</ul>
<p>Where rules differ, the stricter one applies to the engagement.</p>

<h2>The conceptual framework (AICPA)</h2>
<table>
<thead><tr><th>Threat</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Self-interest</td><td>Fees from one client form a large share of the firm's revenue</td></tr>
<tr><td>Self-review</td><td>Auditing records the firm itself prepared</td></tr>
<tr><td>Advocacy</td><td>Promoting the client's shares or representing it in a dispute</td></tr>
<tr><td>Familiarity</td><td>Long association with the client, or a close relative in a key role there</td></tr>
<tr><td>Undue influence</td><td>Management threatening to replace the auditor over a disagreement</td></tr>
<tr><td>Management participation</td><td>Making decisions that are management's responsibility</td></tr>
</tbody>
</table>
<p>If a threat isn't at an acceptable level, the auditor applies safeguards. If no safeguard is enough, the auditor must decline or withdraw.</p>

<h2>Financial interests and relationships</h2>
<ul>
<li><strong>Direct financial interest</strong> (for example, owning even one share of an attest client) held by a covered member impairs independence. Materiality doesn't matter.</li>
<li><strong>Indirect financial interest</strong> (for example, through a diversified mutual fund) impairs independence only if material to the covered member.</li>
<li><strong>Loans</strong> from an attest client are generally prohibited, apart from specified grandfathered or ordinary consumer loans on normal terms.</li>
</ul>

<h2>Non-audit services</h2>
<p>Under the AICPA Code, a firm may provide many non-attest services — such as tax preparation or some bookkeeping — to a private-company audit client, provided the client takes responsibility for all management decisions and has someone with suitable skill to oversee the service. The SEC's rules for public companies are stricter and prohibit services including bookkeeping, financial information systems design, appraisal and valuation, actuarial services, internal audit outsourcing, management functions, human resources, broker-dealer services, legal services and expert services unrelated to the audit.</p>

<h2>Partner rotation and cooling-off</h2>
<ul>
<li>SEC rules require the lead and concurring audit partners to rotate after five years, with a five-year time-out; certain other audit partners rotate after seven years with a two-year time-out.</li>
<li>A one-year cooling-off period applies before a member of the audit team can join the client as CEO, CFO, controller, chief accounting officer or equivalent.</li>
<li>India has its own rotation rules for listed and certain other companies under the Companies Act, 2013.</li>
</ul>

<p>Study the full rules in <a href="/cpa/aud/professional-ethics-and-independence">professional ethics and independence</a>.</p>

${sources([
  ["AICPA — Code of Professional Conduct", "https://pub.aicpa.org/codeofconduct/"],
  ["US SEC (eCFR) — Regulation S-X Rule 2-01, Qualifications of accountants", "https://www.ecfr.gov/current/title-17/chapter-II/part-210/section-210.2-01"],
])}
`,
  },
  {
    slug: "critical-audit-matters-vs-key-audit-matters",
    title: "Critical Audit Matters (CAMs) vs Key Audit Matters (KAMs)",
    category: "Auditing",
    excerpt:
      "CAMs under PCAOB rules and KAMs under international and Indian standards both tell readers where the audit was hardest. Here's how they differ, who must report them and what they say.",
    crux: [
      "CAM (US public companies): A matter communicated to the audit committee that relates to material accounts or disclosures and involved especially challenging, subjective or complex auditor judgement.",
      "KAM (international and India): Matters of most significance in the audit, selected from those communicated to those charged with governance.",
      "Who must report: CAMs are required in PCAOB audits, with exemptions such as emerging growth companies. KAMs are required for listed entities under ISA 701, and SA 701 in India.",
      "Content: Each matter is identified, with why it was significant, how it was addressed and where it's disclosed.",
      "Not a modification: Neither CAMs nor KAMs change the opinion or give a separate opinion on the matter.",
    ],
    content: `
<h2>Why they exist</h2>
<p>A traditional audit report said almost the same thing for every company. Investors wanted to know where the auditor spent its judgement. The PCAOB's answer was the <strong>critical audit matter</strong> (CAM), required in AS 3101 for audits of large accelerated filers from fiscal years ending on or after June 30, 2019, and for other covered companies from December 15, 2020. Internationally, ISA 701 introduced <strong>key audit matters</strong> (KAMs); India's equivalent is SA 701.</p>

<h2>Side by side</h2>
<table>
<thead><tr><th></th><th>CAM (PCAOB AS 3101)</th><th>KAM (ISA 701 / SA 701 / AU-C 701)</th></tr></thead>
<tbody>
<tr><td>Applies to</td><td>Audits of SEC issuers, except emerging growth companies, brokers and dealers, registered investment companies (other than business development companies) and employee benefit plans</td><td>Listed entities under ISA 701 and SA 701; under AICPA AU-C 701, only when the auditor is engaged to report them</td></tr>
<tr><td>Selection</td><td>Communicated (or required to be) to the audit committee; relates to material accounts or disclosures; especially challenging, subjective or complex judgement</td><td>Of most significance in the audit, from matters communicated to those charged with governance</td></tr>
<tr><td>If none</td><td>The report must say there are no CAMs</td><td>Rare for listed entities; the report must say so</td></tr>
<tr><td>Description</td><td>Identify the CAM, explain why it's a CAM, describe how it was addressed, refer to the relevant accounts and disclosures</td><td>Similar: why it was significant and how it was addressed</td></tr>
</tbody>
</table>

<h2>Typical CAMs and KAMs</h2>
<ul>
<li>Goodwill and intangible asset impairment testing.</li>
<li>Revenue recognition for complex contracts.</li>
<li>Valuation of hard-to-value financial instruments and level 3 fair values.</li>
<li>Uncertain tax positions and litigation reserves.</li>
<li>Business combinations — purchase price allocation.</li>
</ul>

<h2>CAMs vs emphasis-of-matter paragraphs</h2>
<p>An emphasis-of-matter paragraph points to something already disclosed that is fundamental to users' understanding. A CAM or KAM explains auditor judgement. A going-concern matter is reported in its own section and, under PCAOB rules, the auditor may cross-reference it from the CAM section rather than repeat it.</p>

<div class="callout callout-tip">
<p><strong>For Indian CAs:</strong> If you've drafted KAMs under SA 701, you already understand most of the CAM concept. The main differences are the PCAOB's definition, its exemptions, and the requirement to state explicitly when there are no CAMs.</p>
</div>

<p>See our <a href="/cpa/aud/audit-reports">AUD audit reports</a> notes and <a href="/blog/types-of-audit-opinions">types of audit opinions</a>.</p>

${sources([
  PCAOB("AS 3101", "The Auditor's Report on an Audit of Financial Statements When the Auditor Expresses an Unqualified Opinion"),
  ["AICPA & CIMA — SAS No. 134 (auditor reporting, including AU-C 701)", "https://www.aicpa-cima.com/resources/download/aicpa-statements-on-auditing-standards-currently-effective"],
])}
`,
  },
  {
    slug: "emphasis-of-matter-vs-other-matter-paragraph",
    title: "Emphasis-of-Matter vs Other-Matter Paragraphs in the Audit Report",
    category: "Auditing",
    excerpt:
      "Both add information without changing the opinion. One points to something in the financial statements; the other to something that isn't. Here's how to tell them apart.",
    crux: [
      "Emphasis-of-matter: Draws attention to something already properly presented or disclosed in the financial statements that is fundamental to users' understanding.",
      "Other-matter: Covers something not presented or disclosed in the financial statements but relevant to users' understanding of the audit, the auditor's responsibilities or the report.",
      "Neither modifies the opinion: The opinion stays as it is — unmodified, unless something else requires a modification.",
      "Typical emphasis-of-matter: A major litigation uncertainty, a major catastrophe, significant related-party transactions or a change in accounting principle.",
      "Typical other-matter: Prior-year statements audited by another auditor, a restricted-use report, or supplementary information.",
    ],
    content: `
<h2>The core distinction</h2>
<p>Under AU-C 706, both paragraphs are added to an auditor's report at the auditor's judgement (or when another standard requires one). The difference is whether the matter is <strong>inside</strong> the financial statements.</p>

<table>
<thead><tr><th></th><th>Emphasis-of-matter</th><th>Other-matter</th></tr></thead>
<tbody>
<tr><td>Refers to</td><td>A matter appropriately presented or disclosed in the financial statements</td><td>A matter not presented or disclosed in the financial statements</td></tr>
<tr><td>Why include it</td><td>It's fundamental to users' understanding of the statements</td><td>It's relevant to users' understanding of the audit, the auditor's responsibilities or the report</td></tr>
<tr><td>Heading</td><td>"Emphasis of Matter" (or a more descriptive heading)</td><td>"Other Matter" (or a more descriptive heading)</td></tr>
<tr><td>Effect on opinion</td><td colspan="2">None — the paragraph must state that the opinion is not modified with respect to the matter</td></tr>
</tbody>
</table>

<h2>Common examples</h2>
<h3>Emphasis-of-matter</h3>
<ul>
<li>An uncertainty about the outcome of major litigation or regulatory action.</li>
<li>A significant subsequent event, such as a major catastrophe after year-end.</li>
<li>Significant transactions with related parties.</li>
<li>A justified change in accounting principle that has a material effect (a consistency paragraph).</li>
<li>Financial statements prepared on a special purpose framework, such as the cash or tax basis.</li>
</ul>
<h3>Other-matter</h3>
<ul>
<li>Prior-year financial statements were audited by a predecessor auditor.</li>
<li>Prior-year statements were not audited, or were reviewed or compiled instead.</li>
<li>Restricting the use or distribution of the report.</li>
<li>Reporting on supplementary information that accompanies the statements.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> An emphasis-of-matter paragraph can't be used as a substitute for a modified opinion, or for disclosures management should have made. If the disclosure isn't adequate, the problem is a misstatement — think qualified or adverse, not emphasis.</p>
</div>

<h2>Going concern is different</h2>
<p>Substantial doubt about going concern has its own required section — "Substantial Doubt About the Entity's Ability to Continue as a Going Concern" — under AU-C 570, rather than a general emphasis-of-matter paragraph. See <a href="/blog/going-concern-in-auditing">going concern in auditing</a>.</p>

<p>Practise report wording in our <a href="/cpa/aud/audit-reports">AUD audit reports</a> notes.</p>

${sources([
  AICPA_SAS,
  PCAOB("AS 3101", "The Auditor's Report on an Audit of Financial Statements When the Auditor Expresses an Unqualified Opinion"),
])}
`,
  },
  {
    slug: "soc-1-vs-soc-2-reports",
    title: "SOC 1 vs SOC 2 Reports (and Type 1 vs Type 2) Explained",
    category: "Auditing",
    excerpt:
      "What service organisation control reports are, who uses SOC 1 and SOC 2, the difference between Type 1 and Type 2, and why they matter for ISC and AUD.",
    crux: [
      "SOC 1: Reports on a service organisation's controls relevant to its user entities' internal control over financial reporting. Used by user entities and their auditors.",
      "SOC 2: Reports on controls relevant to security, availability, processing integrity, confidentiality or privacy (the Trust Services Criteria). Used by customers, regulators and partners.",
      "Type 1: Fairness of the system description and suitability of control design, as of a point in time.",
      "Type 2: Adds operating effectiveness of controls over a period, usually 6–12 months. It's the version user auditors can rely on to reduce control risk.",
      "SOC 3: A short, general-use version of SOC 2 that can be shared publicly.",
    ],
    content: `
<h2>Why SOC reports exist</h2>
<p>Companies outsource payroll, cloud hosting, claims processing and much more to <strong>service organisations</strong>. Their auditors still need assurance about controls they can't see. Rather than every customer's auditor visiting the provider, the provider hires a CPA firm to report once, and shares that System and Organization Controls (SOC) report with its customers.</p>

<h2>SOC 1 vs SOC 2 vs SOC 3</h2>
<table>
<thead><tr><th></th><th>SOC 1</th><th>SOC 2</th><th>SOC 3</th></tr></thead>
<tbody>
<tr><td>Subject</td><td>Controls relevant to user entities' financial reporting</td><td>Controls relevant to security, availability, processing integrity, confidentiality and privacy</td><td>Same as SOC 2, summarised</td></tr>
<tr><td>Criteria</td><td>Control objectives set by the service organisation</td><td>AICPA Trust Services Criteria</td><td>AICPA Trust Services Criteria</td></tr>
<tr><td>Intended users</td><td>User entities and their auditors</td><td>Knowledgeable users — customers, prospects, regulators</td><td>General use</td></tr>
<tr><td>Typical example</td><td>A payroll processor</td><td>A cloud software or data centre provider</td><td>A trust seal on a website</td></tr>
</tbody>
</table>

<h2>Type 1 vs Type 2</h2>
<ul>
<li><strong>Type 1</strong> — management's description of the system is fairly presented and controls are suitably designed, <em>as of a specific date</em>.</li>
<li><strong>Type 2</strong> — all of the above, plus the controls <em>operated effectively throughout a period</em>. It includes the service auditor's tests and results.</li>
</ul>
<p>A user auditor can use a Type 1 report to understand the controls, but only a Type 2 report gives evidence of operating effectiveness that can reduce assessed control risk.</p>

<h2>Things the user auditor must check</h2>
<ul>
<li><strong>Period covered</strong> — does it overlap the client's fiscal year? If there's a gap, a bridge letter from the service organisation and other procedures may be needed.</li>
<li><strong>Complementary user entity controls (CUECs)</strong> — controls the user entity must operate itself for the service organisation's controls to work. The user auditor tests these at the client.</li>
<li><strong>Subservice organisations</strong> — under the <em>carve-out</em> method they're excluded from the report; under the <em>inclusive</em> method they're covered.</li>
<li><strong>Exceptions and the opinion</strong> — deviations noted in testing and any modified opinion from the service auditor.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> In an audit report, the user auditor does <em>not</em> refer to the service auditor's report as a basis for its own opinion. Responsibility isn't divided the way it can be with component auditors.</p>
</div>

<p>SOC engagements appear in both AUD and the ISC Discipline. See <a href="/cpa/aud/attestation-and-soc-engagements">attestation and SOC engagements</a> and <a href="/cpa/isc/soc-engagements">ISC SOC engagements</a>.</p>

${sources([
  ["AICPA & CIMA — 2017 Trust Services Criteria (with revised points of focus, 2022)", "https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022"],
  ["AICPA & CIMA — SOC for Service Organizations toolkit", "https://www.aicpa-cima.com/resources/download/soc-for-service-organizations-toolkit"],
  AICPA_BLUEPRINTS,
])}
`,
  },
  {
    slug: "us-gaap-vs-ind-as-key-differences",
    title: "US GAAP vs Ind AS: Key Differences for Indian CPA Candidates",
    category: "Concepts Explained",
    excerpt:
      "Indian CAs already know Ind AS. These are the US GAAP differences that cost marks in FAR — inventory, revaluation, impairment reversals, leases, provisions and more.",
    crux: [
      "Inventory: US GAAP allows LIFO and prohibits reversing write-downs; Ind AS 2 prohibits LIFO and requires reversals when value recovers.",
      "Fixed assets: Ind AS 16 allows the revaluation model; US GAAP requires historical cost.",
      "Impairment: Ind AS 36 reverses impairment losses (except goodwill) when recoverable amount increases; US GAAP prohibits reversals for assets held and used.",
      "Leases: US GAAP (ASC 842) keeps finance and operating leases for lessees; Ind AS 116 uses a single on-balance-sheet model.",
      "Provisions: \"Probable\" means likely to occur under US GAAP, but more likely than not under Ind AS 37 — so US GAAP recognises fewer contingent liabilities.",
    ],
    content: `
<h2>Why this matters</h2>
<p>Indian Accounting Standards (Ind AS), notified by the Ministry of Corporate Affairs under section 133 of the Companies Act, 2013, are converged with International Financial Reporting Standards (IFRS). US GAAP is a separate body of rules set by the Financial Accounting Standards Board (FASB). Most of the concepts overlap — which is exactly why the differences are dangerous in FAR. Your instincts will be right 80% of the time and confidently wrong the rest.</p>

<h2>The differences that matter most</h2>
<table>
<thead><tr><th>Area</th><th>US GAAP</th><th>Ind AS</th></tr></thead>
<tbody>
<tr><td>Inventory cost formula</td><td>FIFO, weighted average and LIFO allowed</td><td>LIFO prohibited (Ind AS 2)</td></tr>
<tr><td>Inventory write-down reversal</td><td>Prohibited</td><td>Required if value recovers</td></tr>
<tr><td>Property, plant and equipment</td><td>Cost model only</td><td>Cost or revaluation model (Ind AS 16)</td></tr>
<tr><td>Component depreciation</td><td>Permitted, not required</td><td>Required for significant components</td></tr>
<tr><td>Impairment test</td><td>Two-step for assets held and used: recoverability using undiscounted cash flows, then fair value</td><td>One step: carrying amount vs recoverable amount (higher of fair value less costs of disposal and value in use)</td></tr>
<tr><td>Impairment reversal</td><td>Prohibited for assets held and used</td><td>Required (except goodwill) when recoverable amount increases</td></tr>
<tr><td>Development costs</td><td>Generally expensed (software has specific rules)</td><td>Capitalised when Ind AS 38 criteria are met</td></tr>
<tr><td>Lessee accounting</td><td>Dual model: finance and operating leases (ASC 842)</td><td>Single model: almost all leases are financed (Ind AS 116)</td></tr>
<tr><td>Contingent liabilities</td><td>Accrue if <em>probable</em> (likely to occur) and estimable; use the minimum of a range if no best estimate</td><td>Provide if <em>probable</em> (more likely than not); use the midpoint of an equally likely range</td></tr>
<tr><td>Extraordinary items</td><td>Not permitted</td><td>Not permitted</td></tr>
</tbody>
</table>

<div class="callout callout-example">
<p><strong>Example:</strong> A machine was impaired by ₹10 lakh in 2025. In 2026 its recoverable amount rises above the reduced carrying amount. Under Ind AS 36 you reverse the loss (up to the carrying amount net of depreciation had no impairment been recognised). Under US GAAP you do nothing — the written-down amount is the new cost basis.</p>
</div>

<h2>Exam habits to build</h2>
<ul>
<li>When a question mentions revaluation surplus, impairment reversal or a single lessee model, pause — the answer is usually that US GAAP doesn't allow it.</li>
<li>Remember that "probable" sets a higher bar under US GAAP.</li>
<li>Learn the US-only topics from scratch: governmental and not-for-profit accounting, and SEC reporting.</li>
</ul>

<p>Build your US GAAP base in <a href="/cpa/far">FAR</a>, starting with <a href="/cpa/far/inventory">inventory</a>, <a href="/cpa/far/property-plant-and-equipment">property, plant and equipment</a> and <a href="/cpa/far/leases">leases</a>.</p>

${sources([
  ["Ministry of Corporate Affairs, Government of India — Indian Accounting Standards (Ind AS)", "https://www.mca.gov.in/MinistryV2/Stand.html"],
  ["FASB — Accounting Standards Codification", "https://asc.fasb.org/"],
  AICPA_BLUEPRINTS,
])}
`,
  },
  {
    slug: "revenue-recognition-five-step-model",
    title: "Revenue Recognition: The ASC 606 Five-Step Model With Examples",
    category: "Concepts Explained",
    excerpt:
      "Identify the contract, find the performance obligations, set the price, allocate it and recognise revenue — each step of ASC 606 explained with a worked example.",
    crux: [
      "Core principle: Recognise revenue to depict the transfer of promised goods or services, at the amount the entity expects to be entitled to.",
      "Step 1–2: Identify the contract, then the distinct performance obligations in it.",
      "Step 3: Determine the transaction price, including variable consideration — but only to the extent a significant reversal is not probable.",
      "Step 4: Allocate the price to each obligation based on relative standalone selling prices.",
      "Step 5: Recognise revenue when (or as) each obligation is satisfied — at a point in time, or over time if one of three criteria is met.",
    ],
    content: `
<h2>The five steps</h2>
<ol>
<li><strong>Identify the contract</strong> — approved, with identifiable rights and payment terms, commercial substance, and collection of the consideration probable.</li>
<li><strong>Identify the performance obligations</strong> — each promise to transfer a good or service that is <em>distinct</em>: the customer can benefit from it on its own (or with readily available resources), and it's separately identifiable in the contract.</li>
<li><strong>Determine the transaction price</strong> — fixed amounts, plus variable consideration (discounts, rebates, bonuses) estimated using the expected value or most likely amount, constrained so that a significant reversal isn't probable. Adjust for a significant financing component and non-cash consideration.</li>
<li><strong>Allocate the price</strong> — to each performance obligation in proportion to its standalone selling price.</li>
<li><strong>Recognise revenue</strong> — when control transfers.</li>
</ol>

<h2>Over time or at a point in time?</h2>
<p>Revenue is recognised <strong>over time</strong> if any one of these is true:</p>
<ul>
<li>the customer simultaneously receives and consumes the benefit as the entity performs (for example, cleaning services);</li>
<li>the entity's work creates or enhances an asset the customer controls (for example, construction on the customer's land);</li>
<li>the asset has no alternative use to the entity <em>and</em> the entity has an enforceable right to payment for work completed to date.</li>
</ul>
<p>Otherwise revenue is recognised at the <strong>point in time</strong> control transfers — indicated by a right to payment, legal title, physical possession, transfer of risks and rewards, and customer acceptance.</p>

<div class="callout callout-example">
<p><strong>Worked example:</strong> A company sells a machine with two years of maintenance for $110,000. Standalone selling prices are $100,000 for the machine and $20,000 for maintenance (total $120,000).<br>
Allocation: machine $110,000 × 100/120 = <strong>$91,667</strong>; maintenance $110,000 × 20/120 = <strong>$18,333</strong>.<br>
Revenue: $91,667 on delivery (point in time) and $18,333 spread evenly over 24 months (over time) — about $764 a month.</p>
</div>

<h2>Common exam traps</h2>
<ul>
<li><strong>Principal vs agent:</strong> If the entity doesn't control the good before transfer, it's an agent and records only its commission (net).</li>
<li><strong>Contract modifications:</strong> A modification adding distinct goods at their standalone price is a separate contract.</li>
<li><strong>Costs of obtaining a contract</strong> (such as sales commissions) are capitalised if expected to be recovered; a practical expedient allows expensing if the amortisation period is a year or less.</li>
<li><strong>Bill-and-hold</strong>, consignment and repurchase agreements often mean control hasn't transferred yet.</li>
</ul>

<p>Full coverage, including licences, warranties and disclosures, is in our <a href="/cpa/far/revenue-recognition">FAR revenue recognition</a> notes.</p>

${sources([
  ["FASB — ASC 606, Revenue from Contracts with Customers", "https://asc.fasb.org/606"],
  AICPA_BLUEPRINTS,
])}
`,
  },
  {
    slug: "asc-842-leases-explained",
    title: "Lease Accounting Under ASC 842: Finance vs Operating Leases",
    category: "Concepts Explained",
    excerpt:
      "How lessees classify leases under ASC 842, the five classification tests, what goes on the balance sheet and how the expense pattern differs — with a worked example.",
    crux: [
      "On the balance sheet: Lessees recognise a right-of-use (ROU) asset and a lease liability for almost all leases longer than 12 months.",
      "Finance lease if any one test is met: Ownership transfers; a purchase option is reasonably certain to be exercised; the lease covers a major part of the asset's economic life; the present value of payments is substantially all of fair value; or the asset is specialised.",
      "Finance lease expense: Separate amortisation and interest — front-loaded.",
      "Operating lease expense: A single straight-line lease cost.",
      "Ind AS contrast: Ind AS 116 has no operating-lease category for lessees — every lease is accounted for like a finance lease.",
    ],
    content: `
<h2>Initial measurement (both types)</h2>
<ul>
<li><strong>Lease liability</strong> = present value of the remaining lease payments, discounted at the rate implicit in the lease if readily determinable, otherwise the lessee's incremental borrowing rate. (Private companies may elect a risk-free rate.)</li>
<li><strong>ROU asset</strong> = lease liability + prepaid lease payments + initial direct costs − lease incentives received.</li>
<li>For leases of 12 months or less with no purchase option the lessee is reasonably certain to exercise, a lessee may elect not to recognise an asset or liability (short-term lease exemption).</li>
</ul>

<h2>The five classification tests ("OWNES")</h2>
<table>
<thead><tr><th>Test</th><th>Question</th></tr></thead>
<tbody>
<tr><td><strong>O</strong>ption to purchase</td><td>Is the lessee reasonably certain to exercise a purchase option?</td></tr>
<tr><td><strong>W</strong>hole transfer of ownership</td><td>Does ownership pass to the lessee by the end of the term?</td></tr>
<tr><td><strong>N</strong>o alternative use</td><td>Is the asset so specialised that the lessor has no alternative use for it?</td></tr>
<tr><td><strong>E</strong>conomic life</td><td>Is the term a major part of the remaining economic life? (75% or more is a common benchmark)</td></tr>
<tr><td><strong>S</strong>ubstantially all of fair value</td><td>Does the present value of payments (plus any guaranteed residual) equal substantially all of fair value? (90% or more is a common benchmark)</td></tr>
</tbody>
</table>
<p>Meet any one test and it's a finance lease. Meet none and it's an operating lease.</p>

<h2>Subsequent measurement</h2>
<table>
<thead><tr><th></th><th>Finance lease</th><th>Operating lease</th></tr></thead>
<tbody>
<tr><td>Income statement</td><td>Amortisation of the ROU asset + interest on the liability, shown separately</td><td>Single lease cost, straight-line over the term</td></tr>
<tr><td>Expense pattern</td><td>Front-loaded (interest is higher early)</td><td>Even</td></tr>
<tr><td>Cash flow statement</td><td>Principal in financing; interest in operating (US GAAP)</td><td>All payments in operating</td></tr>
</tbody>
</table>

<div class="callout callout-example">
<p><strong>Worked example:</strong> A lessee signs a 3-year lease with annual payments of $10,000 in arrears; the discount rate is 6%. Lease liability = $10,000 × 2.6730 (present value of an ordinary annuity, 3 periods at 6%) = <strong>$26,730</strong>, and the ROU asset is the same.<br>
Year 1 interest = $26,730 × 6% = $1,604. As a <em>finance</em> lease, Year 1 expense is $1,604 interest + $8,910 amortisation ($26,730 ÷ 3) = $10,514. As an <em>operating</em> lease, Year 1 expense is simply $10,000.</p>
</div>

<h2>Lessor accounting in one line</h2>
<p>Lessors classify leases as sales-type, direct financing or operating. Sales-type leases derecognise the asset and may recognise selling profit at commencement.</p>

<p>See our full <a href="/cpa/far/leases">FAR leases</a> notes, and <a href="/blog/us-gaap-vs-ind-as-key-differences">US GAAP vs Ind AS</a> for how Ind AS 116 differs.</p>

${sources([
  ["FASB — ASC 842, Leases", "https://asc.fasb.org/842"],
  AICPA_BLUEPRINTS,
])}
`,
  },
];
