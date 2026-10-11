import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

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

export const audPosts2: BlogSeed[] = [
  {
    slug: "audit-evidence-sufficiency-appropriateness-reliability",
    title: "Audit Evidence: Sufficiency, Appropriateness and Reliability",
    category: "Auditing",
    excerpt:
      "What makes audit evidence sufficient and appropriate, the reliability hierarchy, the seven types of audit procedure and how auditors evaluate information produced by the entity.",
    crux: [
      "Sufficiency: The quantity of evidence — driven by the assessed risk of material misstatement and the quality of the evidence.",
      "Appropriateness: The quality of evidence — its relevance to the assertion and its reliability.",
      "Reliability rules of thumb: External beats internal; the auditor's own direct knowledge beats indirect; documents beat oral; originals beat copies; effective controls make internal evidence more reliable.",
      "Procedures: Inspection, observation, external confirmation, recalculation, reperformance, analytical procedures and inquiry — inquiry alone is never enough.",
      "Information produced by the entity: Before relying on reports and data from the client's systems, the auditor must evaluate whether they are accurate and complete.",
    ],
    content: `
<h2>The standard</h2>
<p>The auditor's objective is to obtain <strong>sufficient appropriate audit evidence</strong> to reduce audit risk to an acceptably low level and support the opinion. For private-company audits the requirements are in AU-C 500 (as amended by SAS No. 142, effective for periods ending on or after December 15, 2022); for public companies, PCAOB AS 1105.</p>

<h2>Sufficiency and appropriateness</h2>
<ul>
<li><strong>Sufficiency</strong> is quantity. More evidence is needed when the risk of material misstatement is higher, and less when the evidence is of higher quality. But more evidence can't compensate for poor quality.</li>
<li><strong>Appropriateness</strong> is quality, made up of <strong>relevance</strong> (does it address the assertion being tested?) and <strong>reliability</strong> (can it be trusted?).</li>
</ul>
<div class="callout callout-tip">
<p><strong>Relevance trap:</strong> Confirming receivables tests <em>existence</em>, not <em>valuation</em> — a customer can confirm a balance it will never pay. Testing for unrecorded liabilities needs evidence that starts outside the ledger (later payments, supplier statements), because testing recorded items can't reveal what's missing.</p>
</div>

<h2>The reliability hierarchy</h2>
<table>
<thead><tr><th>More reliable</th><th>Less reliable</th></tr></thead>
<tbody>
<tr><td>Obtained from independent sources outside the entity</td><td>Generated internally</td></tr>
<tr><td>Internal evidence produced under effective controls</td><td>Internal evidence produced under weak controls</td></tr>
<tr><td>Obtained directly by the auditor (observation, recalculation)</td><td>Obtained indirectly or by inference (inquiry)</td></tr>
<tr><td>Documentary, paper or electronic</td><td>Oral</td></tr>
<tr><td>Original documents</td><td>Photocopies, scans, faxes</td></tr>
</tbody>
</table>
<p>SAS No. 142 adds that the auditor considers attributes such as the source, accuracy, completeness, authenticity and susceptibility to management bias — and that evidence can be obtained using automated tools and techniques.</p>

<h2>The seven types of audit procedure</h2>
<ol>
<li><strong>Inspection</strong> of records, documents or tangible assets.</li>
<li><strong>Observation</strong> of a process being performed (such as an inventory count).</li>
<li><strong>External confirmation</strong> — a direct written response from a third party (AU-C 505).</li>
<li><strong>Recalculation</strong> — checking mathematical accuracy.</li>
<li><strong>Reperformance</strong> — independently executing a control or procedure.</li>
<li><strong>Analytical procedures</strong> — evaluating plausible relationships among data.</li>
<li><strong>Inquiry</strong> — seeking information from knowledgeable people. It must be corroborated by other procedures.</li>
</ol>

<h2>Information produced by the entity (IPE)</h2>
<p>When the auditor uses client-generated reports — an aged receivables listing, a sales report, a system-generated journal — it must obtain evidence about the information's <strong>accuracy and completeness</strong> and evaluate whether it is precise and detailed enough for the purpose. That might mean testing the controls over the report, or agreeing samples to and from source data. See <a href="/blog/testing-automated-controls-system-generated-reports">testing automated controls and system-generated reports</a>.</p>

<h2>Specialists</h2>
<ul>
<li><strong>Management's specialist</strong> (such as an actuary or valuer the client hired): the auditor evaluates their competence, capabilities and objectivity, understands their work, and evaluates it as evidence.</li>
<li><strong>Auditor's specialist</strong> (AU-C 620): the auditor remains fully responsible for the opinion and does not refer to the specialist in an unmodified report.</li>
</ul>

<h2>Inconsistent evidence</h2>
<p>If evidence from one source conflicts with another, or the auditor doubts the reliability of information, it must determine what changes or additions to procedures are needed and consider the effect on other aspects of the audit.</p>

<p>Continue with <a href="/cpa/aud/evidence-types-and-procedures">AUD evidence types and procedures</a> and <a href="/blog/management-assertions-in-auditing">audit assertions</a>.</p>

${sources([AICPA_SAS, PCAOB("AS 1105", "Audit Evidence"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "tests-of-controls-vs-tests-of-details",
    title: "Tests of Controls vs Tests of Details: When and Why Auditors Use Them",
    category: "Auditing",
    excerpt:
      "How tests of controls and substantive tests of details differ in objective, technique, sampling and timing — and the rules for significant risks, interim testing and roll-forward.",
    crux: [
      "Test of controls: Evaluates whether a control operated effectively. Its output is a deviation rate, not a dollar amount.",
      "Test of details: A substantive procedure that tests individual transactions or balances for monetary misstatement.",
      "Significant risks: Controls relied on must be tested in the current period. If the response is substantive only, it must include tests of details.",
      "Interim testing: Both can be done before year-end, but the auditor must cover the remaining period with further procedures (a roll-forward).",
      "Choosing: Reliable controls let the auditor reduce the nature, timing and extent of tests of details — but never eliminate substantive procedures for material items.",
    ],
    content: `
<h2>The core difference</h2>
<table>
<thead><tr><th></th><th>Test of controls</th><th>Test of details</th></tr></thead>
<tbody>
<tr><td>Question</td><td>Did the control operate effectively throughout the period?</td><td>Is this transaction or balance materially misstated?</td></tr>
<tr><td>Measured as</td><td>Deviation rate</td><td>Dollar misstatement</td></tr>
<tr><td>Typical techniques</td><td>Inspection of evidence of review, observation, inquiry combined with other procedures, reperformance</td><td>Vouching, tracing, confirmation, recalculation, physical inspection, cutoff tests</td></tr>
<tr><td>Sampling approach</td><td>Attribute sampling</td><td>Variables or monetary-unit sampling</td></tr>
<tr><td>Required?</td><td>When relying on controls, or when substantive procedures alone can't provide enough evidence</td><td>Substantive procedures are always required for material items; tests of details specifically for significant risks addressed only substantively</td></tr>
</tbody>
</table>

<h2>Example: the revenue cycle</h2>
<ul>
<li><strong>Test of control:</strong> select 40 sales orders and inspect each for evidence that credit was approved before shipment. Two exceptions = a 5% deviation rate, compared with the tolerable rate.</li>
<li><strong>Test of details:</strong> select a sample of recorded sales and vouch each to the shipping document and customer order (occurrence), recalculate the invoice (accuracy), and check the shipment date against the recording date (cutoff).</li>
</ul>

<h2>Significant risks</h2>
<p>For a significant risk, AU-C 330 requires that:</p>
<ul>
<li>if the auditor plans to rely on controls over the risk, those controls are tested in the <strong>current period</strong> — no reliance on prior-year evidence; and</li>
<li>if the approach consists only of substantive procedures, they must include <strong>tests of details</strong> — substantive analytical procedures alone aren't enough.</li>
</ul>

<h2>Interim testing and roll-forward</h2>
<ul>
<li><strong>Controls tested at an interim date:</strong> obtain evidence about significant changes after the interim date and decide what additional evidence is needed for the remaining period, considering the significance of the risk and the length of the period.</li>
<li><strong>Substantive tests at an interim date:</strong> cover the remaining period with substantive procedures, or substantive procedures combined with tests of controls, so there's a reasonable basis for extending the conclusions to year-end.</li>
<li>Where the risk of material misstatement is high, the auditor usually performs tests of details at or near year-end.</li>
</ul>

<h2>Dual-purpose tests</h2>
<p>The same sample can serve both purposes — for instance, checking each invoice for approval (control) and for correct pricing (substantive). The auditor designs it with both objectives in mind and evaluates the control deviations and the dollar misstatements separately.</p>

<div class="callout callout-tip">
<p><strong>Exam pattern:</strong> If a question asks how the auditor responds to a control that <em>failed</em>, the answer usually involves increasing the extent of tests of details, moving them closer to year-end, or switching to more reliable evidence — not "performing more tests of controls".</p>
</div>

<p>Read alongside <a href="/blog/tests-of-controls-vs-substantive-procedures">internal controls vs substantive procedures</a> and <a href="/blog/audit-sampling-explained">audit sampling</a>.</p>

${sources([AICPA_SAS, PCAOB("AS 2301", "The Auditor's Responses to the Risks of Material Misstatement"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "analytical-procedures-in-auditing",
    title: "Analytical Procedures in Auditing: Examples and Common Exam Traps",
    category: "Auditing",
    excerpt:
      "When analytical procedures are required, how substantive analytics are designed, the four factors that make them reliable, worked examples and the traps AUD questions set.",
    crux: [
      "Meaning: Evaluating financial information by analysing plausible relationships among financial and non-financial data.",
      "Required twice: In risk assessment (planning) and near the end of the audit to form an overall conclusion.",
      "Optional as substantive evidence: Substantive analytical procedures can replace or reduce tests of details when relationships are predictable.",
      "Four design factors: Suitability for the assertion, reliability of the data, precision of the expectation, and the threshold for an acceptable difference.",
      "Investigating differences: Management's explanation must be corroborated with evidence — an unexplained difference may indicate misstatement.",
    ],
    content: `
<h2>Three uses</h2>
<table>
<thead><tr><th>Stage</th><th>Required?</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Risk assessment (planning)</td><td>Yes</td><td>Identify unusual transactions, amounts, ratios and trends that may indicate risks of material misstatement</td></tr>
<tr><td>Substantive procedure</td><td>No — auditor's choice</td><td>Obtain evidence about an assertion, often in place of some tests of details</td></tr>
<tr><td>Overall review (final)</td><td>Yes</td><td>Assess whether the financial statements are consistent with the auditor's understanding of the entity</td></tr>
</tbody>
</table>

<h2>Designing a substantive analytical procedure (AU-C 520)</h2>
<ol>
<li><strong>Suitability</strong> — relationships among income statement items over time are usually more predictable than balance sheet items. They work best for high-volume, stable accounts (payroll, interest, rent, utilities).</li>
<li><strong>Reliability of the data</strong> — source (external or internal), comparability, nature and relevance, and the controls over its preparation.</li>
<li><strong>Precision of the expectation</strong> — the more disaggregated (by month, location or product line), the more precise.</li>
<li><strong>Acceptable difference</strong> — the amount of difference from the expectation that can be accepted without further investigation, set considering materiality and the desired assurance.</li>
</ol>

<h2>Worked example: payroll reasonableness test</h2>
<div class="callout callout-example">
<p>A company had 200 employees at the start of the year and 220 at the end. A 4% pay rise took effect on January 1. Last year's payroll was $10,000,000.<br>
Average headcount = 210, a 5% increase. Expectation = $10,000,000 × 1.05 × 1.04 = <strong>$10,920,000</strong>.<br>
Recorded payroll is $11,600,000 — a difference of $680,000. With an acceptable difference of $250,000, the auditor must investigate — for example, unrecorded new hires, overtime, bonuses, or fictitious employees.</p>
</div>

<h2>Common techniques</h2>
<ul>
<li><strong>Trend analysis</strong> — comparing balances over time.</li>
<li><strong>Ratio analysis</strong> — gross margin, receivables turnover, days in inventory.</li>
<li><strong>Reasonableness tests</strong> — building an expectation from operating data, such as occupancy × room rates × days for a hotel's revenue, or average loan balance × average rate for interest income.</li>
<li><strong>Regression analysis</strong> — statistical models for more precise expectations.</li>
</ul>

<h2>Exam traps</h2>
<ul>
<li>Analytical procedures are <strong>required</strong> at planning and final review, but <strong>not</strong> required as substantive procedures.</li>
<li>Substantive analytics alone aren't sufficient for a <strong>significant risk</strong> — tests of details are needed (see <a href="/blog/tests-of-controls-vs-tests-of-details">tests of controls vs tests of details</a>).</li>
<li>A <em>lack</em> of change can be a red flag too — for example, flat bad debt expense when the economy has weakened.</li>
<li>Management's explanation of a fluctuation is not evidence until it's <strong>corroborated</strong>.</li>
<li>Analytics are less effective for detecting fraud where management can manipulate both sides of a relationship.</li>
</ul>

<p>Study the full topic in <a href="/cpa/aud/analytical-procedures">AUD analytical procedures</a>.</p>

${sources([AICPA_SAS, PCAOB("AS 2305", "Substantive Analytical Procedures"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "testing-automated-controls-system-generated-reports",
    title: "How Auditors Test Automated Controls and System-Generated Reports",
    category: "Auditing",
    excerpt:
      "Why automated controls can be tested with a sample of one, how IT general controls support that reliance, benchmarking, and how auditors test the completeness and accuracy of key reports.",
    crux: [
      "Automated controls: Because a computer performs them consistently, testing one instance can be enough — if IT general controls are effective.",
      "Dependence on ITGCs: Effective change management and access controls are what let the auditor assume the control kept working all year.",
      "Benchmarking: An automated control that hasn't changed since it was last tested may be relied on in later periods without full retesting, if ITGCs remain effective.",
      "Key reports (IPE): The auditor tests that the report's source data, parameters and logic produce complete and accurate output.",
      "Spreadsheets and end-user computing: Not covered by ITGCs, so they need their own controls or direct testing.",
    ],
    content: `
<h2>Manual vs automated controls</h2>
<table>
<thead><tr><th></th><th>Manual control</th><th>Automated control</th></tr></thead>
<tbody>
<tr><td>Example</td><td>A manager reviews and signs off the monthly bank reconciliation</td><td>The ERP system blocks a purchase order above an approval limit; three-way match before payment</td></tr>
<tr><td>Consistency</td><td>Depends on the person every time</td><td>Performs the same way every time, unless the program changes</td></tr>
<tr><td>Typical test</td><td>Sample sized for frequency (e.g. 25–40 for a daily control)</td><td>Test of one instance per scenario, plus reliance on ITGCs</td></tr>
</tbody>
</table>

<h2>Why ITGCs matter</h2>
<p>IT general controls (ITGCs) support the continued functioning of application controls. The key ITGC domains are:</p>
<ul>
<li><strong>Program change management</strong> — changes are authorised, tested and approved before going live.</li>
<li><strong>Logical access</strong> — users and privileged access are appropriate and reviewed.</li>
<li><strong>Computer operations</strong> — job scheduling, backups and incident handling.</li>
<li><strong>Program development</strong> — new systems are implemented with appropriate testing and data conversion.</li>
</ul>
<p>If change management is ineffective, the auditor can't assume the automated control worked the same way all year, so it must test more instances or find compensating evidence. See <a href="/blog/it-general-controls-itgcs">IT general controls explained</a>.</p>

<h2>How an automated control is tested</h2>
<ol>
<li>Understand the control's configuration (for example, the tolerance for a three-way match).</li>
<li>Test each relevant scenario once — for example, an invoice within tolerance (passes), one outside tolerance (blocked), and an override attempt by an unauthorised user.</li>
<li>Confirm ITGCs over the application were effective throughout the period.</li>
<li>Where permitted, use <strong>benchmarking</strong> in later years: confirm the program hasn't changed (comparing versions or reviewing change logs) rather than retesting from scratch.</li>
</ol>

<h2>Testing key reports</h2>
<p>When the auditor uses a system report — an aged receivables listing, a list of journal entries, an inventory valuation report — as evidence, it must evaluate whether the information is <strong>complete and accurate</strong> and precise enough. Common approaches:</p>
<ul>
<li>Test the controls over the report's generation (report logic changes, access to parameters).</li>
<li>Agree totals to the general ledger (completeness).</li>
<li>Test samples from report to source records and from source records to the report.</li>
<li>Inspect report parameters (date range, entity, filters) each time it's run.</li>
<li>Reperform the report or recreate it using data analytics.</li>
</ul>

<h2>Spreadsheets and end-user computing</h2>
<p>Spreadsheets used for calculations (reserves, fair value models, consolidation) fall outside ITGCs. The auditor tests controls over their use — version control, locked formulas, independent review — or tests the calculations directly.</p>

<h2>Service organisations</h2>
<p>If an automated control sits at a service organisation (a cloud payroll provider, for example), the auditor typically relies on a <a href="/blog/soc-type-1-vs-type-2-reports">SOC 1 Type 2 report</a> covering the control and checks complementary user entity controls at the client.</p>

<p>This topic spans AUD and the ISC Discipline — see <a href="/cpa/aud/it-controls-in-audit">IT controls in an audit</a> and <a href="/cpa/isc/it-general-controls">ISC IT general controls</a>.</p>

${sources([AICPA_SAS, PCAOB("AS 2201", "An Audit of Internal Control Over Financial Reporting That Is Integrated with An Audit of Financial Statements"), PCAOB("AS 1105", "Audit Evidence"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "soc-type-1-vs-type-2-reports",
    title: "Type I vs Type II SOC Reports: What CPA Candidates Must Know",
    category: "Auditing",
    excerpt:
      "The difference between Type 1 and Type 2 SOC reports, what's in each section of the report, the possible opinions, bridge letters and how a user auditor decides how much to rely on one.",
    crux: [
      "Type 1: Opinion on the fairness of the system description and the suitability of control design, as of a specific date.",
      "Type 2: Adds an opinion on operating effectiveness over a period, plus the service auditor's tests and results.",
      "Report sections: Service auditor's opinion, management's assertion, the system description, tests and results (Type 2 only) and optional other information.",
      "User auditors: Only a Type 2 report provides evidence that controls operated effectively, which can reduce assessed control risk.",
      "Gaps: If the report period doesn't cover the client's year-end, the auditor obtains a bridge letter and performs additional procedures.",
    ],
    content: `
<h2>Type 1 vs Type 2 at a glance</h2>
<table>
<thead><tr><th></th><th>Type 1</th><th>Type 2</th></tr></thead>
<tbody>
<tr><td>Covers</td><td>A specified date</td><td>A specified period (commonly 6–12 months)</td></tr>
<tr><td>Fair presentation of the system description</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Suitability of control design</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Operating effectiveness of controls</td><td>No</td><td>Yes</td></tr>
<tr><td>Description of tests and results</td><td>No</td><td>Yes</td></tr>
<tr><td>Typical use</td><td>First-year reports, new systems</td><td>Ongoing assurance for customers and user auditors</td></tr>
</tbody>
</table>
<p>The same Type 1/Type 2 distinction applies to both SOC 1 (controls relevant to user entities' financial reporting) and SOC 2 (controls relevant to security, availability, processing integrity, confidentiality or privacy). See <a href="/blog/soc-1-vs-soc-2-reports">SOC 1 vs SOC 2</a>.</p>

<h2>What's inside a SOC report</h2>
<ol>
<li><strong>Independent service auditor's report</strong> — the opinion.</li>
<li><strong>Management's assertion</strong> — the service organisation's own claims about the description and controls.</li>
<li><strong>Description of the system</strong> — services, infrastructure, software, people, procedures, data, the control objectives (SOC 1) or criteria (SOC 2), and complementary user entity controls.</li>
<li><strong>Tests of controls and results</strong> (Type 2 only) — each control, the test performed and any deviations.</li>
<li><strong>Other information</strong> provided by the service organisation, which is not covered by the opinion.</li>
</ol>

<h2>Possible opinions</h2>
<p>The service auditor's opinion can be unmodified, qualified, adverse, or a disclaimer — for example, qualified if a control objective wasn't achieved because a control didn't operate effectively. The performing standards are the AICPA's attestation standards (AT-C 320 for SOC 1 examinations; AT-C 105 and 205 for SOC 2).</p>

<h2>How a user auditor uses the report (AU-C 402)</h2>
<ul>
<li>Check the <strong>type</strong> — only Type 2 supports reliance on operating effectiveness.</li>
<li>Check the <strong>period</strong> against the client's fiscal year. For gaps, obtain a <strong>bridge letter</strong> (a management representation from the service organisation that nothing has changed) and consider additional procedures.</li>
<li>Read the <strong>exceptions</strong> and assess their effect on the client's risk assessment.</li>
<li>Test the <strong>complementary user entity controls (CUECs)</strong> at the client.</li>
<li>Consider <strong>subservice organisations</strong> — whether they are carved out or included.</li>
<li>Evaluate the <strong>service auditor's</strong> professional reputation and competence where relevant.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> A user auditor's report doesn't refer to the service auditor's work as a basis for its opinion, even if it relied heavily on a Type 2 report.</p>
</div>

<p>Study further in <a href="/cpa/isc/soc-engagements">ISC SOC engagements</a> and <a href="/cpa/aud/attestation-and-soc-engagements">AUD attestation and SOC engagements</a>.</p>

${sources([
  ["AICPA & CIMA — SOC for Service Organizations toolkit", "https://www.aicpa-cima.com/resources/download/soc-for-service-organizations-toolkit"],
  ["AICPA & CIMA — 2017 Trust Services Criteria (with revised points of focus, 2022)", "https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022"],
  AICPA_SAS,
  AICPA_BLUEPRINTS,
])}
`,
  },
];
