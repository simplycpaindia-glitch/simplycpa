import type { SubjectSeed } from "./types";

const shellTopics: { slug: string; title: string; shortDescription: string; area: string }[] = [
  { slug: "professional-ethics-and-independence", title: "Professional Ethics & Independence", shortDescription: "The AICPA Code of Professional Conduct and independence rules for attest engagements.", area: "Area I: Ethics, Professional Responsibilities & General Principles" },
  { slug: "engagement-acceptance-and-quality-management", title: "Engagement Acceptance & Quality Management", shortDescription: "Client acceptance/continuance decisions and firm-level quality management under SQMS No. 1.", area: "Area I: Ethics, Professional Responsibilities & General Principles" },
  { slug: "audit-planning-and-materiality", title: "Audit Planning & Materiality", shortDescription: "Setting overall and performance materiality, and developing the audit strategy.", area: "Area II: Assessing Risk and Developing a Planned Response" },
  { slug: "understanding-the-entity-and-internal-control", title: "Understanding the Entity & Internal Control", shortDescription: "The five COSO components and documenting internal control.", area: "Area II: Assessing Risk and Developing a Planned Response" },
  { slug: "fraud-risk", title: "Fraud Risk", shortDescription: "The fraud triangle and auditor responsibilities for detecting fraud.", area: "Area II: Assessing Risk and Developing a Planned Response" },
  { slug: "responding-to-assessed-risks", title: "Responding to Assessed Risks", shortDescription: "Designing further audit procedures based on the risk assessment.", area: "Area III: Performing Further Procedures and Obtaining Evidence" },
  { slug: "audit-sampling", title: "Audit Sampling", shortDescription: "Statistical and nonstatistical sampling for tests of controls and substantive testing.", area: "Area III: Performing Further Procedures and Obtaining Evidence" },
  { slug: "evidence-types-and-procedures", title: "Evidence: Types & Procedures", shortDescription: "Inspection, observation, confirmation, recalculation, and analytical procedures.", area: "Area III: Performing Further Procedures and Obtaining Evidence" },
  { slug: "analytical-procedures", title: "Analytical Procedures", shortDescription: "Using analytical procedures in planning, substantive testing, and final review.", area: "Area III: Performing Further Procedures and Obtaining Evidence" },
  { slug: "auditing-accounting-estimates", title: "Auditing Accounting Estimates", shortDescription: "Evaluating management's estimates and identifying management bias.", area: "Area III: Performing Further Procedures and Obtaining Evidence" },
  { slug: "related-parties-and-going-concern", title: "Related Parties & Going Concern", shortDescription: "Identifying related-party transactions and evaluating substantial doubt about going concern.", area: "Area III: Performing Further Procedures and Obtaining Evidence" },
  { slug: "it-controls-in-audit", title: "IT Controls in Audit", shortDescription: "General and application IT controls, and auditing in a computerized environment.", area: "Area III: Performing Further Procedures and Obtaining Evidence" },
  { slug: "group-audits-and-using-others-work", title: "Group Audits & Using Others' Work", shortDescription: "Component auditors, using the work of internal audit, and specialists.", area: "Area III: Performing Further Procedures and Obtaining Evidence" },
  { slug: "written-representations-and-completing-the-audit", title: "Written Representations & Completing the Audit", shortDescription: "Management representation letters and final audit procedures.", area: "Area IV: Forming Conclusions and Reporting" },
  { slug: "audit-reports", title: "Audit Reports", shortDescription: "Unmodified, qualified, adverse, and disclaimer opinions, plus emphasis-of-matter paragraphs.", area: "Area IV: Forming Conclusions and Reporting" },
  { slug: "reviews-compilations-and-aup", title: "Reviews, Compilations & AUP", shortDescription: "SSARS engagements and agreed-upon procedures under the attestation standards.", area: "Area IV: Forming Conclusions and Reporting" },
  { slug: "attestation-and-soc-engagements", title: "Attestation & SOC Engagements", shortDescription: "SOC 1 and SOC 2 reports and other attestation engagements.", area: "Area IV: Forming Conclusions and Reporting" },
];

export const aud: SubjectSeed = {
  slug: "aud",
  name: "Auditing and Attestation",
  shortName: "AUD",
  type: "CORE",
  description:
    "AUD tests your understanding of the audit process end to end — ethics and independence, risk assessment, gathering evidence, and forming and reporting a conclusion. About 40% of the exam is task-based simulations, so understanding how procedures fit together matters as much as memorizing definitions.",
  difficulty: "HARD",
  estimatedHours: 110,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/aud-cpa-exam-blueprint",
  order: 2,
  topics: [
    {
      slug: "assessing-risk-of-material-misstatement",
      title: "Assessing Risk of Material Misstatement",
      shortDescription: "Combining inherent and control risk to plan the nature, timing, and extent of audit procedures.",
      blueprintArea: "Area II: Assessing Risk and Developing a Planned Response",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 70,
      order: 1,
      studyMaterialHtml: `
<h2>The audit risk model</h2>
<div class="callout callout-important"><p><strong>Audit Risk (AR) = Inherent Risk (IR) × Control Risk (CR) × Detection Risk (DR)</strong></p></div>
<p>The auditor doesn't control inherent or control risk — those are properties of the client and its environment. What the auditor <em>does</em> control is <strong>detection risk</strong>, adjusted by varying the nature, timing, and extent of procedures.</p>

<table>
<thead><tr><th>Risk</th><th>What it measures</th><th>Auditor's response</th></tr></thead>
<tbody>
<tr><td>Inherent risk</td><td>Susceptibility to misstatement absent any controls (e.g., complex estimates, cash-heavy business)</td><td>Assess, don't control</td></tr>
<tr><td>Control risk</td><td>Risk that a client's internal controls fail to prevent/detect a misstatement</td><td>Assess (test controls if relying on them)</td></tr>
<tr><td>Detection risk</td><td>Risk that the auditor's own procedures fail to detect a material misstatement</td><td>Control, by adjusting audit procedures</td></tr>
</tbody>
</table>

<h3>The inverse relationship</h3>
<p>If inherent and control risk (together, the "risk of material misstatement") are assessed as <strong>high</strong>, the auditor must accept a <strong>lower</strong> acceptable detection risk — meaning more extensive, more reliable, and more year-end (rather than interim) procedures.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A client has weak segregation of duties over cash receipts (high control risk) and operates in a industry prone to revenue-recognition fraud (high inherent risk). To keep overall audit risk at an acceptably low level, the auditor must plan a very low acceptable detection risk — e.g., 100% confirmation of receivables at year-end rather than a sample tested at an interim date.</p></div>

<h3>Assertions</h3>
<p>Risk is assessed at the <strong>assertion level</strong> for classes of transactions, account balances, and disclosures — not just at the financial-statement level. Key assertions: existence/occurrence, completeness, accuracy/valuation, rights and obligations, presentation and disclosure, and cutoff.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A question describing a risk factor is usually testing whether you can map it to the <em>correct assertion</em>. "Goods shipped near year-end recorded in the wrong period" → cutoff. "Fictitious sales recorded" → existence/occurrence. "Sales left off the books" → completeness.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>AR = IR × CR × DR</li>
<li>Auditor assesses IR and CR; controls DR via nature/timing/extent of procedures</li>
<li>Higher IR/CR → auditor must accept lower DR → more extensive, more reliable, more year-end testing</li>
<li>Risk assessed at the <strong>assertion</strong> level, not just financial-statement level</li>
<li>Key assertions: existence/occurrence, completeness, accuracy/valuation, rights & obligations, presentation & disclosure, cutoff</li>
</ul>
`,
      mcqs: [
        {
          question: "A client operates with weak segregation of duties over its cash disbursement process. All else equal, how should the auditor respond?",
          options: [
            { label: "A", text: "Increase acceptable detection risk and perform fewer substantive procedures", isCorrect: false, rationale: "This is backwards — weaker controls mean higher control risk, which requires a lower, not higher, acceptable detection risk." },
            { label: "B", text: "Decrease acceptable detection risk and perform more extensive substantive procedures", isCorrect: true, rationale: "Correct — weak segregation of duties increases control risk. To keep overall audit risk at an acceptable level, the auditor must lower acceptable detection risk, which means more extensive, more reliable, and more year-end-focused procedures." },
            { label: "C", text: "Rely entirely on the client's internal controls without further testing", isCorrect: false, rationale: "Weak controls mean the auditor should rely less on controls, not more, and should increase substantive testing instead." },
            { label: "D", text: "Take no action, since detection risk is unrelated to control risk", isCorrect: false, rationale: "Detection risk is directly related to control and inherent risk through the audit risk model." },
          ],
          explanation: "Under the audit risk model (AR = IR × CR × DR), when control risk increases (due to weak segregation of duties), the auditor must reduce acceptable detection risk to keep overall audit risk at an acceptably low level. This is achieved through more extensive, more reliable, and more period-end-focused substantive procedures.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["risk assessment", "audit risk model"],
        },
        {
          question: "An auditor notes that goods shipped on December 29 were recorded as sales in the following fiscal year. Which assertion is most directly at risk?",
          options: [
            { label: "A", text: "Existence", isCorrect: false, rationale: "Existence relates to whether recorded transactions actually occurred, not to which period they were recorded in." },
            { label: "B", text: "Cutoff", isCorrect: true, rationale: "Correct — cutoff addresses whether transactions are recorded in the correct accounting period. Recording a December shipment in the wrong year is a cutoff issue." },
            { label: "C", text: "Rights and obligations", isCorrect: false, rationale: "Rights and obligations relates to whether the entity holds the rights to assets or is obligated for liabilities, not timing of recording." },
            { label: "D", text: "Presentation and disclosure", isCorrect: false, rationale: "This assertion relates to whether items are properly classified, described, and disclosed, not to which period a transaction is recorded in." },
          ],
          explanation: "Cutoff is the assertion that addresses whether transactions and events have been recorded in the correct accounting period. Shipping goods in December but recording the related sale in the next fiscal year is a textbook cutoff error.",
          difficulty: "EASY",
          questionType: "APPLICATION",
          tags: ["assertions"],
        },
      ],
    },
    ...shellTopics.map((t, i) => ({
      slug: t.slug,
      title: t.title,
      shortDescription: t.shortDescription,
      blueprintArea: t.area,
      blueprintStatus: "PROVISIONAL" as const,
      difficulty: "MEDIUM" as const,
      estimatedMinutes: 50,
      order: i + 2,
      isComingSoon: true,
    })),
  ],
};
