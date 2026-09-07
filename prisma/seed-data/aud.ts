import type { SubjectSeed } from "./types";

export const aud: SubjectSeed = {
  slug: "aud",
  name: "Auditing and Attestation",
  shortName: "AUD",
  type: "CORE",
  description:
    "AUD tests your understanding of the audit process end to end — ethics and independence, risk assessment, gathering evidence, and forming and reporting a conclusion. About half the exam is task-based simulations, so understanding how procedures fit together matters as much as memorizing definitions.",
  difficulty: "HARD",
  estimatedHours: 110,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/aud-cpa-exam-blueprint",
  order: 2,
  topics: [
    {
      slug: "professional-ethics-and-independence",
      title: "Professional Ethics & Independence",
      shortDescription: "The AICPA Code of Professional Conduct, independence rules, and threats to objectivity.",
      blueprintArea: "Area I: Ethics, Professional Responsibilities & General Principles",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 1,
      studyMaterialHtml: `
<h2>The conceptual framework approach</h2>
<p>The AICPA Code of Professional Conduct doesn't list every prohibited act. Instead it uses a <strong>threats and safeguards</strong> framework: identify threats to compliance, evaluate their significance, and apply safeguards that reduce them to an acceptable level. If no safeguard works, decline or withdraw.</p>

<h3>The seven threats</h3>
<table>
<thead><tr><th>Threat</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Self-review</td><td>Auditing your own firm's bookkeeping work</td></tr>
<tr><td>Advocacy</td><td>Promoting a client's securities</td></tr>
<tr><td>Adverse interest</td><td>Client sues the firm</td></tr>
<tr><td>Familiarity</td><td>Long-tenured partner, close friendship with management</td></tr>
<tr><td>Undue influence</td><td>Client threatens to replace the firm over an accounting disagreement</td></tr>
<tr><td>Self-interest</td><td>Financial interest in the client, contingent fee</td></tr>
<tr><td>Management participation</td><td>Firm makes management decisions for the client</td></tr>
</tbody>
</table>

<h3>Independence: the non-negotiable</h3>
<p>Independence is required for <strong>attest engagements</strong> (audits, reviews, examinations) — not for compilations or consulting/tax services (though a compilation report must disclose a lack of independence).</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Independence has two parts — <strong>independence in fact</strong> (actual objectivity) and <strong>independence in appearance</strong> (how a reasonable, informed third party would view the relationship). Both are required.</p></div>

<h3>Covered members</h3>
<p>Independence rules apply to <strong>covered members</strong>: the engagement team, anyone who can influence the engagement, partners in the office where the lead partner practices, and the firm itself. A direct financial interest in an attest client — of <em>any</em> amount — impairs independence. An indirect financial interest impairs independence only if it's <strong>material</strong>.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An audit staff member owns $500 of the client's stock directly → independence impaired (direct interest, materiality irrelevant). The same person owns shares in a diversified mutual fund that happens to hold client stock → indirect interest, impaired only if material to the staff member.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Sarbanes-Oxley and PCAOB rules are stricter for issuers: mandatory audit partner rotation (5 years for lead partner), a one-year cooling-off before a team member joins client management in a financial reporting oversight role, and a flat ban on most non-audit services (bookkeeping, internal audit outsourcing, valuation) for audit clients.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Framework: identify threats → evaluate → apply safeguards → decline if unfixable</li>
<li>7 threats: self-review, advocacy, adverse interest, familiarity, undue influence, self-interest, management participation</li>
<li>Independence needed for <strong>attest only</strong> (audit/review/examination), not compilation (disclose lack) or tax/consulting</li>
<li><strong>Direct</strong> financial interest → always impairs. <strong>Indirect</strong> → impairs only if material</li>
<li>Issuers (SOX/PCAOB): 5-year lead partner rotation, 1-year cooling off, most non-audit services banned</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Independence in fact isn't enough — appearance matters equally.</p></div>
`,
      mcqs: [
        {
          question: "An audit senior on the engagement team owns 10 shares of the audit client's common stock, worth approximately $300. What is the effect on independence?",
          options: [
            { label: "A", text: "Independence is not impaired because the amount is immaterial", isCorrect: false, rationale: "Materiality is only relevant for indirect financial interests. A direct interest impairs independence regardless of amount." },
            { label: "B", text: "Independence is impaired because a covered member holds a direct financial interest", isCorrect: true, rationale: "Correct — any direct financial interest in an attest client held by a covered member impairs independence, regardless of how small." },
            { label: "C", text: "Independence is impaired only if the senior is the engagement partner", isCorrect: false, rationale: "The engagement team as a whole are covered members, not just the partner." },
            { label: "D", text: "Independence is preserved if the shares are disclosed in the audit report", isCorrect: false, rationale: "Disclosure does not cure an independence impairment for an audit engagement." },
          ],
          explanation: "A direct financial interest in an attest client held by a covered member impairs independence regardless of materiality. Only indirect financial interests (such as an interest through a diversified mutual fund) are evaluated against a materiality threshold.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["ethics", "independence"],
        },
        {
          question: "For which of the following engagements is the CPA firm NOT required to be independent?",
          options: [
            { label: "A", text: "An audit of financial statements", isCorrect: false, rationale: "Audits are attest engagements requiring independence." },
            { label: "B", text: "A review of interim financial statements", isCorrect: false, rationale: "Reviews are attest engagements requiring independence." },
            { label: "C", text: "A compilation of financial statements", isCorrect: true, rationale: "Correct — independence is not required for a compilation, but if the accountant is not independent, that fact must be disclosed in the compilation report." },
            { label: "D", text: "An examination of prospective financial information", isCorrect: false, rationale: "Examinations are attest engagements requiring independence." },
          ],
          explanation: "Independence is required for attest engagements — audits, reviews, and examinations. A compilation is a non-attest SSARS service where independence is not required, though a lack of independence must be disclosed in the accountant's compilation report.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["ethics", "independence", "SSARS"],
        },
      ],
    },
    {
      slug: "engagement-acceptance-and-quality-management",
      title: "Engagement Acceptance & Quality Management",
      shortDescription: "Client acceptance and continuance decisions, engagement letters, and firm-level quality management under SQMS No. 1.",
      blueprintArea: "Area I: Ethics, Professional Responsibilities & General Principles",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 2,
      studyMaterialHtml: `
<h2>Before you accept the engagement</h2>
<p>Preconditions for an audit require the auditor to (a) determine the financial reporting framework is acceptable, and (b) obtain management's agreement that it acknowledges its responsibilities — for the financial statements, for internal control, and for providing the auditor with access to information and people.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Communication with the <strong>predecessor auditor</strong> is required <em>before</em> accepting the engagement, and the <strong>successor</strong> auditor must initiate it — but only with the prospective client's permission. Ask about management integrity, disagreements over accounting or auditing matters, communications about fraud or noncompliance, and the predecessor's reasons for the change.</p></div>

<h3>The engagement letter</h3>
<p>The engagement letter documents the terms and reduces misunderstanding. It should cover the objective and scope, auditor responsibilities, management responsibilities, the applicable framework, and the expected form of the report. It's required for every audit and should be updated (or at least reconsidered) annually.</p>

<h3>Quality management: SQMS No. 1</h3>
<p>The AICPA's Statements on Quality Management Standards replaced the older quality control standards, effective for firms from December 15, 2025. SQMS No. 1 requires a <strong>risk-based</strong> system: the firm establishes quality objectives, identifies and assesses quality risks, and designs responses — then evaluates the system at least annually.</p>

<table>
<thead><tr><th>Component</th><th>What it covers</th></tr></thead>
<tbody>
<tr><td>Governance and leadership</td><td>Tone at the top, accountability, resources</td></tr>
<tr><td>Relevant ethical requirements</td><td>Independence, ethics compliance</td></tr>
<tr><td>Acceptance and continuance</td><td>Taking on the right clients and engagements</td></tr>
<tr><td>Engagement performance</td><td>Direction, supervision, review, consultation</td></tr>
<tr><td>Resources</td><td>People, technology, intellectual resources</td></tr>
<tr><td>Information and communication</td><td>Internal and external information flow</td></tr>
<tr><td>Monitoring and remediation</td><td>Finding and fixing deficiencies</td></tr>
<tr><td>Risk assessment process</td><td>The engine that drives the whole system</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Quality management operates at the <strong>firm</strong> level; the engagement partner is responsible for quality at the <strong>engagement</strong> level. Both layers get tested — read the question carefully to see which level it's asking about.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Preconditions: acceptable framework + management acknowledges its responsibilities</li>
<li><strong>Successor</strong> must initiate contact with predecessor <em>before</em> accepting — needs client permission</li>
<li>Engagement letter: objective/scope, auditor & management responsibilities, framework, expected report form</li>
<li>SQMS No. 1 (effective Dec 15, 2025): risk-based, 8 components, annual evaluation of the system</li>
<li>Firm-level = quality management; engagement-level = engagement partner's responsibility</li>
</ul>
`,
      mcqs: [
        {
          question: "Before accepting a new audit engagement, who is responsible for initiating communication with the predecessor auditor, and what permission is required?",
          options: [
            { label: "A", text: "The predecessor initiates it; no permission is needed", isCorrect: false, rationale: "The successor, not the predecessor, must initiate the communication." },
            { label: "B", text: "The successor initiates it, after obtaining the prospective client's permission", isCorrect: true, rationale: "Correct — the successor auditor must attempt communication with the predecessor before accepting, and must first obtain the client's permission because of confidentiality obligations." },
            { label: "C", text: "The successor initiates it; no permission is needed because of the public interest", isCorrect: false, rationale: "Client confidentiality still applies — permission is required before the predecessor may respond." },
            { label: "D", text: "Either party may initiate it after the engagement is accepted", isCorrect: false, rationale: "The communication must occur before acceptance, and the successor must initiate it." },
          ],
          explanation: "The successor auditor is required to initiate communication with the predecessor auditor before accepting an audit engagement. Because the predecessor owes the former client a duty of confidentiality, the successor must first obtain the prospective client's permission for the predecessor to respond.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["acceptance", "predecessor auditor"],
        },
      ],
    },
    {
      slug: "audit-planning-and-materiality",
      title: "Audit Planning & Materiality",
      shortDescription: "Setting overall materiality, performance materiality, and the clearly trivial threshold, plus developing the audit strategy.",
      blueprintArea: "Area II: Assessing Risk and Developing a Planned Response",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 3,
      studyMaterialHtml: `
<h2>Three materiality numbers</h2>
<table>
<thead><tr><th>Type</th><th>What it is</th></tr></thead>
<tbody>
<tr><td><strong>Overall (planning) materiality</strong></td><td>The amount above which misstatements could reasonably influence users' decisions — set for the financial statements as a whole</td></tr>
<tr><td><strong>Performance materiality</strong></td><td>A smaller amount, set below overall materiality, to reduce the risk that undetected + uncorrected misstatements <em>aggregate</em> above overall materiality</td></tr>
<tr><td><strong>Clearly trivial threshold</strong></td><td>Below this, misstatements need not even be accumulated on the summary of uncorrected misstatements</td></tr>
</tbody>
</table>

<p>Overall materiality is typically anchored to a benchmark — pre-tax income, total revenue, or total assets — chosen for the entity's circumstances. A specific class of transactions or disclosure may warrant a <strong>lower</strong> materiality if misstatements of smaller amounts would still influence users (e.g., related-party transactions, executive compensation).</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Materiality has both a <strong>quantitative</strong> and a <strong>qualitative</strong> dimension. A numerically small misstatement can still be material if, for example, it turns a loss into a profit, meets an analyst forecast exactly, affects debt covenant compliance, or conceals an illegal act.</p></div>

<h3>Revising materiality</h3>
<p>If the auditor learns during the audit that actual results differ materially from the estimates used in planning (e.g., budgeted income was $10M, actual is $2M), materiality must be revised — and the revision may require more extensive procedures.</p>

<h3>Audit strategy vs. audit plan</h3>
<ul>
<li><strong>Audit strategy</strong> — the overall scope, timing, and direction: reporting objectives, materiality, areas of higher risk, resource allocation.</li>
<li><strong>Audit plan</strong> — the detailed nature, timing, and extent of specific procedures: risk assessment procedures, tests of controls, and substantive procedures.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Planning is continuous, not a one-time event at the start. The strategy and plan are updated as the audit progresses and new information emerges.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Overall materiality → performance materiality (lower, buffers aggregation risk) → clearly trivial (don't accumulate)</li>
<li>Benchmarks: pre-tax income, revenue, total assets — chosen for the entity</li>
<li>Materiality is quantitative <strong>and</strong> qualitative (turns loss into profit, covenant breach, illegal act)</li>
<li>Revise materiality if actual results differ significantly from planning estimates</li>
<li>Strategy = scope/timing/direction; Plan = nature/timing/extent of specific procedures</li>
</ul>
`,
      mcqs: [
        {
          question: "Why does an auditor set performance materiality at an amount lower than overall materiality?",
          options: [
            { label: "A", text: "To comply with the SEC's requirement for public company audits", isCorrect: false, rationale: "Performance materiality is a GAAS/ISA concept applied in all audits, not an SEC-specific requirement." },
            { label: "B", text: "To reduce the probability that undetected and uncorrected misstatements aggregate to exceed overall materiality", isCorrect: true, rationale: "Correct — performance materiality creates a buffer so that individually immaterial misstatements do not add up to a material amount in total." },
            { label: "C", text: "Because performance materiality applies only to income statement accounts", isCorrect: false, rationale: "Performance materiality applies across the financial statements, not just to the income statement." },
            { label: "D", text: "To establish the threshold below which misstatements are clearly trivial", isCorrect: false, rationale: "That describes the clearly trivial threshold, which is a separate and much lower amount." },
          ],
          explanation: "Performance materiality is set below overall materiality to provide a margin for undetected misstatements and for individually immaterial misstatements that could, in aggregate, exceed overall materiality.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["materiality", "planning"],
        },
      ],
    },
    {
      slug: "understanding-the-entity-and-internal-control",
      title: "Understanding the Entity & Internal Control",
      shortDescription: "The five COSO components, documenting internal control, and evaluating control deficiencies.",
      blueprintArea: "Area II: Assessing Risk and Developing a Planned Response",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 4,
      studyMaterialHtml: `
<h2>The five COSO components — "CRIME"</h2>
<table>
<thead><tr><th>Component</th><th>What it means</th></tr></thead>
<tbody>
<tr><td><strong>C</strong>ontrol environment</td><td>Tone at the top: integrity, ethical values, board oversight, competence, accountability</td></tr>
<tr><td><strong>R</strong>isk assessment</td><td>How the entity identifies and responds to business risks affecting financial reporting</td></tr>
<tr><td><strong>I</strong>nformation and communication</td><td>The accounting system and how information flows internally and externally</td></tr>
<tr><td><strong>M</strong>onitoring</td><td>Ongoing and separate evaluations of whether controls keep working</td></tr>
<tr><td><strong>E</strong>xisting control activities</td><td>Authorizations, reconciliations, segregation of duties, physical controls, performance reviews</td></tr>
</tbody>
</table>

<h3>What the auditor must do</h3>
<p>In <em>every</em> audit the auditor must obtain an understanding of internal control relevant to the audit, sufficient to identify and assess risks of material misstatement and design further procedures. Obtaining that understanding is mandatory — <strong>testing</strong> controls for operating effectiveness is not, unless the auditor intends to rely on them or substantive procedures alone are insufficient.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Understanding a control means evaluating its <strong>design</strong> and determining whether it has been <strong>implemented</strong> (placed in operation). That is different from testing <strong>operating effectiveness</strong>, which is only required if you plan to rely on the control.</p></div>

<h3>Severity of deficiencies</h3>
<table>
<thead><tr><th>Level</th><th>Definition</th><th>Communicate to</th></tr></thead>
<tbody>
<tr><td>Control deficiency</td><td>Design or operation doesn't allow timely prevention/detection</td><td>Management (optional at auditor's discretion)</td></tr>
<tr><td>Significant deficiency</td><td>Less severe than a material weakness but important enough to merit attention by those charged with governance</td><td>Those charged with governance, in writing</td></tr>
<tr><td>Material weakness</td><td>Reasonable possibility that a material misstatement would not be prevented or detected on a timely basis</td><td>Those charged with governance and management, in writing</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Segregation of duties means separating <strong>A</strong>uthorization, <strong>R</strong>ecord keeping, and <strong>C</strong>ustody of assets ("ARC"). If one person does two or more of these, that's a classic deficiency scenario.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>COSO components = <strong>CRIME</strong>: Control environment, Risk assessment, Information & communication, Monitoring, Existing control activities</li>
<li>Understanding internal control is <strong>required in every audit</strong>; testing operating effectiveness is not (only if relying on controls)</li>
<li>Understanding = evaluate design + determine implementation</li>
<li>Deficiency &lt; significant deficiency &lt; material weakness (reasonable possibility of material misstatement)</li>
<li>Significant deficiencies and material weaknesses → communicate <strong>in writing</strong> to those charged with governance</li>
<li>Segregation of duties = <strong>ARC</strong>: Authorization, Record keeping, Custody</li>
</ul>
`,
      mcqs: [
        {
          question: "In a financial statement audit of a nonissuer, which of the following is required in every audit?",
          options: [
            { label: "A", text: "Testing the operating effectiveness of internal controls", isCorrect: false, rationale: "Testing operating effectiveness is only required when the auditor intends to rely on controls or when substantive procedures alone cannot provide sufficient evidence." },
            { label: "B", text: "Obtaining an understanding of internal control relevant to the audit", isCorrect: true, rationale: "Correct — the auditor must obtain an understanding of internal control relevant to the audit in every engagement, in order to assess risk and design further procedures." },
            { label: "C", text: "Issuing an opinion on the effectiveness of internal control", isCorrect: false, rationale: "That is a separate integrated audit engagement, generally required for larger issuers, not for every nonissuer audit." },
            { label: "D", text: "Communicating all control deficiencies to those charged with governance", isCorrect: false, rationale: "Only significant deficiencies and material weaknesses must be communicated in writing; lesser deficiencies need not be." },
          ],
          explanation: "Obtaining an understanding of internal control relevant to the audit — evaluating design and determining implementation — is mandatory in every audit. Testing operating effectiveness is optional and depends on whether the auditor plans to rely on controls.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["internal control", "COSO"],
        },
        {
          question: "An auditor identifies a control deficiency that creates a reasonable possibility that a material misstatement of the financial statements would not be prevented or detected on a timely basis. How should this be classified and communicated?",
          options: [
            { label: "A", text: "A significant deficiency, communicated orally to management", isCorrect: false, rationale: "The definition given matches a material weakness, and communication must be in writing." },
            { label: "B", text: "A material weakness, communicated in writing to those charged with governance and management", isCorrect: true, rationale: "Correct — a reasonable possibility of a material misstatement not being prevented or detected defines a material weakness, which must be communicated in writing." },
            { label: "C", text: "A control deficiency requiring no communication", isCorrect: false, rationale: "This severity level requires written communication; it cannot be ignored." },
            { label: "D", text: "A material weakness that must be reported in the auditor's opinion on the financial statements", isCorrect: false, rationale: "In a nonissuer financial statement audit, material weaknesses are communicated to governance, not reported in the opinion on the financial statements themselves." },
          ],
          explanation: "A material weakness is a deficiency, or combination of deficiencies, such that there is a reasonable possibility that a material misstatement will not be prevented or detected on a timely basis. Both material weaknesses and significant deficiencies must be communicated in writing to those charged with governance.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["internal control", "deficiencies"],
        },
      ],
    },
    {
      slug: "assessing-risk-of-material-misstatement",
      title: "Assessing Risk of Material Misstatement",
      shortDescription: "Combining inherent and control risk to plan the nature, timing, and extent of audit procedures.",
      blueprintArea: "Area II: Assessing Risk and Developing a Planned Response",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 70,
      order: 5,
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

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A client has weak segregation of duties over cash receipts (high control risk) and operates in an industry prone to revenue-recognition fraud (high inherent risk). To keep overall audit risk at an acceptably low level, the auditor must plan a very low acceptable detection risk — e.g., confirming receivables at year-end rather than testing a sample at an interim date.</p></div>

<h3>Assertions</h3>
<p>Risk is assessed at the <strong>assertion level</strong> for classes of transactions, account balances, and disclosures — not just at the financial-statement level. Key assertions: existence/occurrence, completeness, accuracy/valuation, rights and obligations, presentation and disclosure, and cutoff.</p>

<h3>Significant risks</h3>
<p>Some risks require <strong>special audit consideration</strong> — significant risks. These typically involve fraud, significant non-routine or judgmental transactions, or related parties. For significant risks the auditor must evaluate the design and implementation of relevant controls and cannot rely on evidence from prior periods alone. Revenue recognition is presumed a fraud risk unless rebutted.</p>

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
<li>Significant risks (fraud, non-routine, judgmental, related parties) need special consideration; revenue recognition presumed a fraud risk</li>
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
          explanation: "Under the audit risk model (AR = IR × CR × DR), when control risk increases, the auditor must reduce acceptable detection risk to keep overall audit risk at an acceptably low level. This is achieved through more extensive, more reliable, and more period-end-focused substantive procedures.",
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
    {
      slug: "fraud-risk",
      title: "Fraud Risk",
      shortDescription: "The fraud triangle, required fraud procedures, and the auditor's responsibility for detecting fraud.",
      blueprintArea: "Area II: Assessing Risk and Developing a Planned Response",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 6,
      studyMaterialHtml: `
<h2>Two types of fraud</h2>
<table>
<thead><tr><th>Type</th><th>Who typically commits it</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Fraudulent financial reporting</td><td>Management (override of controls)</td><td>Recording fictitious revenue, improper estimates</td></tr>
<tr><td>Misappropriation of assets</td><td>Employees</td><td>Stealing cash, lapping receivables, ghost employees</td></tr>
</tbody>
</table>
<p>Fraudulent financial reporting is usually <strong>more material</strong>; misappropriation is usually <strong>more frequent</strong>.</p>

<h3>The fraud triangle</h3>
<ul>
<li><strong>Incentive/pressure</strong> — meet analyst forecasts, earn a bonus, personal financial trouble</li>
<li><strong>Opportunity</strong> — weak controls, management override ability, complex transactions</li>
<li><strong>Rationalization/attitude</strong> — "everyone does it," "I'll pay it back," aggressive tone at the top</li>
</ul>

<h3>Required fraud procedures in every audit</h3>
<ol>
<li>A <strong>brainstorming session</strong> among the engagement team about how and where fraud could occur</li>
<li><strong>Inquiries</strong> of management, those charged with governance, internal audit, and others</li>
<li>Consideration of <strong>fraud risk factors</strong> and unusual/unexpected analytical relationships</li>
<li>Procedures to address <strong>management override</strong>: test journal entries, review accounting estimates for bias (including a retrospective review of prior-year estimates), and evaluate the business rationale for significant unusual transactions</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> The presumption of a fraud risk in <strong>revenue recognition</strong> can be rebutted, but the auditor must document the reasons. The presumption that <strong>management override</strong> is a risk in every audit can <em>never</em> be rebutted.</p></div>

<h3>Reporting fraud</h3>
<p>Any fraud (even immaterial) involving <strong>management</strong> or employees with significant control roles goes to <strong>those charged with governance</strong>. Immaterial employee fraud goes to at least one level above where it occurred. Disclosure to outside parties is generally barred by confidentiality — with exceptions such as a subpoena, a successor auditor inquiry (with client permission), a funding agency in a compliance audit, or an SEC Form 8-K requirement.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The auditor is responsible for <strong>reasonable assurance</strong> that the financial statements are free of material misstatement, whether caused by error or fraud — not absolute assurance, and not for detecting immaterial fraud.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Fraud triangle: <strong>incentive/pressure, opportunity, rationalization</strong></li>
<li>Fraudulent financial reporting (management) = larger; misappropriation (employees) = more frequent</li>
<li>Required every audit: brainstorming, inquiries, fraud risk factors, <strong>management override</strong> procedures (journal entries, estimate bias/retrospective review, unusual transactions)</li>
<li>Revenue recognition fraud presumption is rebuttable (document it); <strong>management override presumption is not</strong></li>
<li>Fraud involving management → always report to those charged with governance, regardless of amount</li>
</ul>
`,
      mcqs: [
        {
          question: "Which fraud-related presumption can NEVER be rebutted by the auditor?",
          options: [
            { label: "A", text: "That revenue recognition is a fraud risk", isCorrect: false, rationale: "This presumption can be rebutted, but the auditor must document the reasons for the conclusion." },
            { label: "B", text: "That management override of controls is a risk in every audit", isCorrect: true, rationale: "Correct — because management is uniquely able to override controls, the auditor must always address this risk and cannot rebut the presumption." },
            { label: "C", text: "That the entity's control environment is ineffective", isCorrect: false, rationale: "There is no such presumption; the control environment is assessed based on evidence." },
            { label: "D", text: "That employee misappropriation of assets has occurred", isCorrect: false, rationale: "No such presumption exists — the auditor assesses risk, not an assumption that fraud has occurred." },
          ],
          explanation: "Because of management's unique ability to override controls that otherwise appear to be operating effectively, the risk of management override is presumed to exist in every audit and this presumption cannot be rebutted. Specific required procedures include testing journal entries, reviewing estimates for bias, and evaluating significant unusual transactions.",
          difficulty: "MEDIUM",
          questionType: "EXCEPTION",
          tags: ["fraud", "management override"],
        },
      ],
    },
    {
      slug: "responding-to-assessed-risks",
      title: "Responding to Assessed Risks",
      shortDescription: "Designing further audit procedures: nature, timing, and extent, and choosing between controls reliance and substantive testing.",
      blueprintArea: "Area III: Performing Further Procedures and Obtaining Evidence",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 7,
      studyMaterialHtml: `
<h2>Nature, timing, and extent</h2>
<table>
<thead><tr><th>Dimension</th><th>Higher risk means…</th></tr></thead>
<tbody>
<tr><td><strong>Nature</strong></td><td>More reliable procedures — external confirmation and inspection over inquiry; more evidence from independent sources</td></tr>
<tr><td><strong>Timing</strong></td><td>Testing at or near <strong>year-end</strong> rather than at an interim date</td></tr>
<tr><td><strong>Extent</strong></td><td>Larger sample sizes, more items tested</td></tr>
</tbody>
</table>

<h3>Two responses</h3>
<ul>
<li><strong>Overall responses</strong> — professional skepticism emphasis, assigning more experienced staff, more supervision, adding unpredictability to procedures, changing the overall strategy</li>
<li><strong>Responses at the assertion level</strong> — the specific further audit procedures: tests of controls and/or substantive procedures</li>
</ul>

<h3>Substantive procedures are never optional</h3>
<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Regardless of assessed risk, the auditor must perform substantive procedures for <strong>each material class of transactions, account balance, and disclosure</strong>. Controls reliance can reduce substantive testing, but never eliminate it.</p></div>

<h3>Substantive procedures come in two forms</h3>
<ul>
<li><strong>Tests of details</strong> — examining individual transactions, balances, and disclosures</li>
<li><strong>Substantive analytical procedures</strong> — evaluating plausible relationships among data; efficient for large volumes of predictable transactions</li>
</ul>

<h3>Interim testing</h3>
<p>If substantive procedures are performed at an interim date, the auditor must cover the <strong>remaining period</strong> — typically through substantive procedures for the roll-forward period, sometimes combined with tests of controls. The higher the risk, the less appropriate interim testing becomes.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> If the auditor plans to rely on controls tested in a <em>prior</em> audit, evidence must be refreshed at least every third year, and controls addressing <strong>significant risks</strong> must be tested in the <strong>current</strong> period every time.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Higher risk → more reliable procedures (nature), year-end (timing), larger samples (extent)</li>
<li>Overall responses: skepticism, experienced staff, supervision, unpredictability</li>
<li><strong>Substantive procedures required for every material account/class/disclosure</strong> — controls reliance reduces but never eliminates them</li>
<li>Substantive = tests of details + substantive analytical procedures</li>
<li>Prior-period control evidence: refresh at least every 3rd year; significant-risk controls tested <strong>every</strong> year</li>
</ul>
`,
      mcqs: [
        {
          question: "An auditor assesses control risk as very low for the revenue cycle after successfully testing controls. Which statement is correct regarding substantive procedures for revenue?",
          options: [
            { label: "A", text: "Substantive procedures for revenue may be omitted entirely", isCorrect: false, rationale: "Substantive procedures can never be eliminated for a material class of transactions, no matter how effective controls are." },
            { label: "B", text: "Substantive procedures may be reduced but must still be performed for the material class of transactions", isCorrect: true, rationale: "Correct — effective controls allow reduced substantive testing, but the auditor must still perform some substantive procedures for each material class of transactions, balance, and disclosure." },
            { label: "C", text: "Only analytical procedures are permitted once controls are tested", isCorrect: false, rationale: "The auditor may choose tests of details, substantive analytics, or both — there is no such restriction." },
            { label: "D", text: "Control testing must be repeated at year-end before any reduction is allowed", isCorrect: false, rationale: "Interim control testing with appropriate roll-forward procedures is acceptable; retesting entirely at year-end is not required." },
          ],
          explanation: "Substantive procedures must be performed for each material class of transactions, account balance, and disclosure regardless of the assessed level of control risk. Effective controls justify reducing the extent of substantive testing but never eliminating it.",
          difficulty: "MEDIUM",
          questionType: "EXAM_TRAP",
          tags: ["substantive procedures", "controls reliance"],
        },
      ],
    },
    {
      slug: "audit-sampling",
      title: "Audit Sampling",
      shortDescription: "Statistical and nonstatistical sampling, sampling risk, and how sample size responds to risk and tolerable misstatement.",
      blueprintArea: "Area III: Performing Further Procedures and Obtaining Evidence",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 8,
      studyMaterialHtml: `
<h2>Two sampling risks, two consequences</h2>
<table>
<thead><tr><th>Test type</th><th>Risk affecting EFFICIENCY</th><th>Risk affecting EFFECTIVENESS</th></tr></thead>
<tbody>
<tr><td>Tests of controls</td><td>Risk of assessing control risk too <strong>high</strong> (under-reliance)</td><td>Risk of assessing control risk too <strong>low</strong> (over-reliance)</td></tr>
<tr><td>Substantive tests</td><td>Risk of <strong>incorrect rejection</strong></td><td>Risk of <strong>incorrect acceptance</strong></td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Efficiency risks make the auditor do <em>more work than necessary</em> — costly but not dangerous. Effectiveness risks (over-reliance, incorrect acceptance) mean the auditor reaches a <strong>wrong conclusion</strong> — this is the risk that matters most and drives sample size.</p></div>

<h3>What drives sample size</h3>
<table>
<thead><tr><th>Factor</th><th>Effect on sample size</th></tr></thead>
<tbody>
<tr><td>Higher risk of material misstatement</td><td>Increase</td></tr>
<tr><td>Higher tolerable misstatement / tolerable rate</td><td>Decrease</td></tr>
<tr><td>Higher expected misstatement / deviation rate</td><td>Increase</td></tr>
<tr><td>Larger population</td><td>Almost no effect (for large populations)</td></tr>
<tr><td>Higher desired confidence (lower acceptable sampling risk)</td><td>Increase</td></tr>
</tbody>
</table>

<h3>Attribute vs. variables sampling</h3>
<ul>
<li><strong>Attribute sampling</strong> — used in tests of <strong>controls</strong>; measures a rate of deviation (yes/no: did the control operate?). Compare the computed upper deviation rate to the tolerable rate.</li>
<li><strong>Variables sampling</strong> — used in <strong>substantive</strong> tests; estimates a dollar amount of misstatement.</li>
<li><strong>PPS (probability-proportional-to-size) sampling</strong> — a hybrid using attribute theory to reach a dollar conclusion. It automatically emphasizes larger items and is efficient when few misstatements are expected — but it is <strong>not effective for detecting understatement</strong> and struggles with zero or negative balances.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> The tolerable deviation rate is 6%. The sample of 60 items contains 2 deviations, giving a 3.3% sample deviation rate; the computed upper deviation rate is 7.4%. Because the upper deviation rate <em>exceeds</em> the tolerable rate, the auditor cannot rely on the control as planned — despite the sample rate being below tolerable.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The auditor must always <strong>project</strong> misstatements found in the sample to the whole population, and consider both projected misstatement and any known/specific misstatements when evaluating results.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Effectiveness risks (dangerous): over-reliance on controls, incorrect acceptance</li>
<li>Efficiency risks (just costly): under-reliance, incorrect rejection</li>
<li>Sample size ↑ with higher RMM, higher expected misstatement, higher confidence; ↓ with higher tolerable misstatement; population size barely matters</li>
<li>Attribute sampling → tests of controls (deviation rate); Variables → substantive (dollar amounts)</li>
<li>PPS: emphasizes large items, efficient with few errors, <strong>poor at detecting understatement</strong></li>
<li>Always <strong>project</strong> sample misstatement to the population</li>
</ul>
`,
      mcqs: [
        {
          question: "In a test of controls, the tolerable deviation rate is 5% and the computed upper deviation rate based on the sample is 6.2%. What should the auditor conclude?",
          options: [
            { label: "A", text: "The control can be relied on as planned, since the sample deviation rate is likely below 5%", isCorrect: false, rationale: "The comparison is between the computed upper deviation rate and the tolerable rate, not the sample rate alone." },
            { label: "B", text: "The control cannot be relied on at the planned level, and control risk should be increased", isCorrect: true, rationale: "Correct — when the computed upper deviation rate exceeds the tolerable rate, the sample does not support the planned reliance, so the auditor increases assessed control risk and expands substantive procedures." },
            { label: "C", text: "The auditor must issue a qualified opinion", isCorrect: false, rationale: "A control deviation finding affects the audit approach, not directly the opinion on the financial statements." },
            { label: "D", text: "The sample size was too large and should be reduced", isCorrect: false, rationale: "The result indicates the control is not operating effectively enough to rely on; it says nothing about the sample being too large." },
          ],
          explanation: "The auditor compares the computed upper deviation rate (which incorporates sampling risk) to the tolerable deviation rate. When the upper deviation rate exceeds tolerable, the planned reliance on the control is not supported — the auditor raises assessed control risk and increases substantive testing.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["sampling", "tests of controls"],
        },
        {
          question: "Which sampling risk is most concerning because it leads the auditor to an incorrect conclusion about the financial statements?",
          options: [
            { label: "A", text: "The risk of assessing control risk too high", isCorrect: false, rationale: "This is an efficiency risk — the auditor does more work than necessary but does not reach a wrong conclusion." },
            { label: "B", text: "The risk of incorrect rejection", isCorrect: false, rationale: "This is also an efficiency risk — it leads to unnecessary additional procedures, not an audit failure." },
            { label: "C", text: "The risk of incorrect acceptance", isCorrect: true, rationale: "Correct — incorrect acceptance means concluding a materially misstated balance is fairly stated, which is an audit effectiveness failure." },
            { label: "D", text: "Nonsampling risk", isCorrect: false, rationale: "Nonsampling risk (e.g., applying the wrong procedure) is a real concern but is not one of the two sampling risks being contrasted here." },
          ],
          explanation: "The risk of incorrect acceptance (and its controls-testing counterpart, the risk of assessing control risk too low) relates to audit effectiveness: the auditor wrongly concludes that a materially misstated balance is acceptable. Efficiency risks only cause unnecessary work.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["sampling", "sampling risk"],
        },
      ],
    },
    {
      slug: "evidence-types-and-procedures",
      title: "Evidence: Types & Procedures",
      shortDescription: "The hierarchy of audit evidence reliability and the eight types of audit procedures.",
      blueprintArea: "Area III: Performing Further Procedures and Obtaining Evidence",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 9,
      studyMaterialHtml: `
<h2>Sufficient appropriate evidence</h2>
<ul>
<li><strong>Sufficiency</strong> = quantity (how much)</li>
<li><strong>Appropriateness</strong> = quality: <em>relevance</em> (does it address the right assertion?) and <em>reliability</em> (can it be trusted?)</li>
</ul>
<p>Higher risk requires more evidence; higher-quality evidence requires less of it.</p>

<h3>Reliability hierarchy</h3>
<table>
<thead><tr><th>More reliable</th><th>Less reliable</th></tr></thead>
<tbody>
<tr><td>Auditor's direct personal knowledge</td><td>Indirect or inferred evidence</td></tr>
<tr><td>External, independent sources</td><td>Internally generated by the client</td></tr>
<tr><td>Obtained when internal control is effective</td><td>Obtained when controls are weak</td></tr>
<tr><td>Original documents</td><td>Photocopies, faxes, oral statements</td></tr>
<tr><td>Written</td><td>Oral</td></tr>
</tbody>
</table>

<h3>The eight procedures</h3>
<ol>
<li><strong>Inspection of records/documents</strong> — vouching (from records back to source, tests <em>existence/occurrence</em>) and tracing (from source forward to records, tests <em>completeness</em>)</li>
<li><strong>Inspection of tangible assets</strong> — physical examination; strong for existence, weak for rights and valuation</li>
<li><strong>Observation</strong> — watching a process being performed (e.g., inventory count); evidence is limited to the moment observed</li>
<li><strong>External confirmation</strong> — direct written response from a third party</li>
<li><strong>Recalculation</strong> — checking mathematical accuracy</li>
<li><strong>Reperformance</strong> — independently executing a control or procedure the client performed</li>
<li><strong>Analytical procedures</strong> — evaluating plausible relationships in data</li>
<li><strong>Inquiry</strong> — asking; <strong>never sufficient on its own</strong> and must be corroborated</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT — confirmations:</strong> A <strong>positive</strong> confirmation asks the recipient to respond either way and is used when risk is higher or balances are large. A <strong>negative</strong> confirmation asks for a response only if the recipient disagrees — acceptable only when risk is low, controls are effective, many small homogeneous balances exist, and the auditor expects a low exception rate. Non-response to a negative confirmation is <em>not</em> evidence of agreement.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Vouching = existence (start with the recorded number and go find support). Tracing = completeness (start with source documents and make sure they got recorded). Getting this direction right answers a lot of MCQs.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Sufficient = quantity; Appropriate = relevance + reliability</li>
<li>Reliability: auditor's own knowledge &gt; external &gt; internal-with-good-controls &gt; internal-with-weak-controls; original &gt; copies; written &gt; oral</li>
<li><strong>Vouching → existence</strong> (records back to source); <strong>Tracing → completeness</strong> (source forward to records)</li>
<li><strong>Inquiry alone is never sufficient</strong></li>
<li>Positive confirmation = higher risk/large balances; Negative = low risk, effective controls, many small homogeneous balances</li>
<li>No response to negative confirmations ≠ agreement</li>
</ul>
`,
      mcqs: [
        {
          question: "An auditor selects recorded sales transactions from the sales journal and examines the related shipping documents and customer orders. This procedure primarily tests which assertion?",
          options: [
            { label: "A", text: "Completeness", isCorrect: false, rationale: "Completeness is tested by tracing from source documents forward into the accounting records, the opposite direction." },
            { label: "B", text: "Occurrence (existence)", isCorrect: true, rationale: "Correct — starting with recorded amounts and vouching back to supporting documents tests whether recorded sales actually occurred." },
            { label: "C", text: "Rights and obligations", isCorrect: false, rationale: "This procedure addresses whether the transaction happened, not who holds legal rights." },
            { label: "D", text: "Presentation and disclosure", isCorrect: false, rationale: "The procedure addresses transaction validity, not classification or note disclosure." },
          ],
          explanation: "Vouching — selecting items already recorded in the accounting records and examining the supporting documentation — tests occurrence/existence. Tracing in the opposite direction (from shipping documents to the sales journal) would test completeness.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["evidence", "vouching", "assertions"],
        },
        {
          question: "Which condition would make the use of negative accounts receivable confirmations INAPPROPRIATE?",
          options: [
            { label: "A", text: "A large number of small, homogeneous account balances", isCorrect: false, rationale: "This condition supports the use of negative confirmations." },
            { label: "B", text: "A low assessed risk of material misstatement", isCorrect: false, rationale: "Low risk is one of the conditions supporting negative confirmations." },
            { label: "C", text: "A high expected rate of exceptions and reason to believe recipients will ignore the requests", isCorrect: true, rationale: "Correct — negative confirmations are inappropriate when the auditor expects significant exceptions or believes recipients will not review the requests, because silence would be wrongly interpreted as agreement." },
            { label: "D", text: "Effective internal control over receivables", isCorrect: false, rationale: "Effective controls support the use of negative confirmations." },
          ],
          explanation: "Negative confirmations are only appropriate when risk of material misstatement is low, controls are effective, the population consists of many small homogeneous balances, and the auditor has no reason to believe recipients will disregard the request. A high expected exception rate makes them inappropriate.",
          difficulty: "MEDIUM",
          questionType: "EXCEPTION",
          tags: ["evidence", "confirmations"],
        },
      ],
    },
    {
      slug: "analytical-procedures",
      title: "Analytical Procedures",
      shortDescription: "Using analytical procedures in planning, as substantive tests, and in the final review stage.",
      blueprintArea: "Area III: Performing Further Procedures and Obtaining Evidence",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 45,
      order: 10,
      studyMaterialHtml: `
<h2>Three stages, two of them required</h2>
<table>
<thead><tr><th>Stage</th><th>Required?</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Planning (risk assessment)</td><td><strong>Required</strong></td><td>Identify unusual relationships and areas of higher risk</td></tr>
<tr><td>Substantive testing</td><td>Optional</td><td>Obtain evidence about an assertion directly</td></tr>
<tr><td>Final review</td><td><strong>Required</strong></td><td>Overall conclusion — do the statements make sense as a whole?</td></tr>
</tbody>
</table>

<h3>The four steps of a substantive analytical procedure</h3>
<ol>
<li><strong>Develop an expectation</strong> — the more precise and independent, the better</li>
<li><strong>Define a tolerable difference</strong> — how much variance is acceptable without investigation</li>
<li><strong>Compare</strong> the expectation to the recorded amount</li>
<li><strong>Investigate</strong> significant differences and corroborate management's explanations with evidence</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Management's explanation for a fluctuation is <strong>never sufficient by itself</strong> — the auditor must corroborate it with other evidence.</p></div>

<h3>What makes analytics effective</h3>
<ul>
<li>The relationship is <strong>plausible and predictable</strong> (e.g., commissions to sales, payroll to headcount, interest expense to average debt)</li>
<li>Data is <strong>reliable</strong> — external or subject to effective controls</li>
<li>Income statement relationships are generally more predictable than balance sheet relationships (they cover a period rather than a point in time)</li>
<li>Stable, mature businesses are more predictable than volatile or rapidly changing ones</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Sales rose 30% but the gross margin percentage was unchanged and receivable days jumped from 45 to 78. That combination is a classic signal of possible fictitious revenue or channel stuffing — the auditor should extend testing rather than accept a general management explanation.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>Required</strong> in planning (risk assessment) and final review; <strong>optional</strong> as a substantive procedure</li>
<li>4 steps: develop expectation → set tolerable difference → compare → investigate & corroborate</li>
<li>Management's explanation alone is never sufficient — corroborate it</li>
<li>Effective when relationships are plausible/predictable and data is reliable</li>
<li>Income statement relationships more predictable than balance sheet ones</li>
</ul>
`,
      mcqs: [
        {
          question: "At which stages of the audit are analytical procedures REQUIRED?",
          options: [
            { label: "A", text: "Planning and substantive testing", isCorrect: false, rationale: "Substantive analytical procedures are optional — the auditor may choose tests of details instead." },
            { label: "B", text: "Planning and final review", isCorrect: true, rationale: "Correct — analytical procedures are required during risk assessment (planning) and again near the end of the audit as an overall review." },
            { label: "C", text: "Substantive testing and final review", isCorrect: false, rationale: "Planning analytics are required; substantive analytics are not." },
            { label: "D", text: "All three stages", isCorrect: false, rationale: "Substantive analytical procedures remain optional." },
          ],
          explanation: "Analytical procedures are required in the risk assessment (planning) stage to identify unusual relationships, and again in the final review stage to form an overall conclusion about whether the financial statements are consistent with the auditor's understanding. Their use as substantive procedures is optional.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["analytical procedures"],
        },
      ],
    },
    {
      slug: "auditing-accounting-estimates",
      title: "Auditing Accounting Estimates",
      shortDescription: "Evaluating management's estimates, identifying management bias, and auditing fair value measurements.",
      blueprintArea: "Area III: Performing Further Procedures and Obtaining Evidence",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 55,
      order: 11,
      studyMaterialHtml: `
<h2>Three approaches to auditing an estimate</h2>
<ol>
<li><strong>Test how management made the estimate</strong> — evaluate the method, assumptions, and data used, and test the underlying calculations</li>
<li><strong>Develop an independent point estimate or range</strong> — and compare it to management's</li>
<li><strong>Review subsequent events or transactions</strong> — did events after year-end but before the report date resolve the estimate? (e.g., a receivable collected, a lawsuit settled)</li>
</ol>

<h3>Estimation uncertainty</h3>
<p>Higher estimation uncertainty = higher inherent risk. Estimates with high uncertainty (litigation reserves, level 3 fair values, goodwill impairment) may be <strong>significant risks</strong> requiring special audit consideration and evaluation of relevant controls.</p>

<div class="callout callout-important"><p><strong>IMPORTANT — management bias:</strong> Individual estimates may each be within an acceptable range, yet all sit at the same favorable end. That pattern indicates possible <strong>management bias</strong>, which the auditor must evaluate for its effect on the financial statements as a whole and consider as a fraud risk indicator.</p></div>

<h3>Retrospective review</h3>
<p>The auditor is required to perform a retrospective review of significant prior-period accounting estimates — comparing what management estimated to what actually happened. This is not about second-guessing prior judgments with hindsight; it's about detecting a pattern of bias and improving current-year risk assessment.</p>

<h3>Fair value measurements</h3>
<table>
<thead><tr><th>Level</th><th>Input</th><th>Audit difficulty</th></tr></thead>
<tbody>
<tr><td>Level 1</td><td>Quoted prices in active markets for identical assets</td><td>Lowest — verify the price</td></tr>
<tr><td>Level 2</td><td>Observable inputs other than quoted prices</td><td>Moderate — test inputs and model</td></tr>
<tr><td>Level 3</td><td>Unobservable inputs (management's own assumptions)</td><td>Highest — heavy judgment, often a significant risk</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When management uses a specialist (e.g., an appraiser or actuary), the auditor must evaluate the specialist's competence, capabilities, and objectivity, obtain an understanding of the work, and evaluate its appropriateness as audit evidence — the auditor cannot simply accept the specialist's conclusion, and never refers to the specialist in an unmodified opinion.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>3 approaches: test management's process, develop an independent estimate, review subsequent events</li>
<li>Higher estimation uncertainty → higher inherent risk, possibly a significant risk</li>
<li>Estimates all at the favorable end of acceptable ranges = <strong>management bias</strong> indicator (fraud signal)</li>
<li><strong>Retrospective review</strong> of prior-year estimates is required</li>
<li>Fair value: Level 1 quoted prices → Level 3 unobservable (highest risk)</li>
<li>Management's specialist: evaluate competence, capability, objectivity; don't just accept the conclusion</li>
</ul>
`,
      mcqs: [
        {
          question: "During the audit, the auditor notes that each of management's significant estimates falls within a reasonable range, but every one lands at the end of the range that maximizes reported income. How should the auditor evaluate this?",
          options: [
            { label: "A", text: "Accept the estimates, since each is individually within a reasonable range", isCorrect: false, rationale: "Individual reasonableness does not resolve the pattern — the aggregate direction is itself audit evidence." },
            { label: "B", text: "Treat the pattern as a possible indicator of management bias and evaluate its effect on the financial statements as a whole", isCorrect: true, rationale: "Correct — a consistent one-directional pattern suggests management bias, which must be evaluated for its aggregate effect and considered as a fraud risk indicator." },
            { label: "C", text: "Issue an adverse opinion immediately", isCorrect: false, rationale: "The auditor must first evaluate the aggregate effect; an adverse opinion requires a material and pervasive misstatement." },
            { label: "D", text: "Require management to select the midpoint of each range", isCorrect: false, rationale: "The auditor does not dictate management's estimates; the auditor evaluates whether they are reasonable and free of bias." },
          ],
          explanation: "Even when individual estimates fall within acceptable ranges, a systematic pattern of estimates favoring one direction indicates possible management bias. The auditor must evaluate the aggregate effect on the financial statements and consider whether the pattern signals a fraud risk.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["estimates", "management bias"],
        },
      ],
    },
    {
      slug: "related-parties-and-going-concern",
      title: "Related Parties & Going Concern",
      shortDescription: "Identifying related-party transactions and evaluating substantial doubt about going concern.",
      blueprintArea: "Area III: Performing Further Procedures and Obtaining Evidence",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 12,
      studyMaterialHtml: `
<h2>Related parties</h2>
<p>Related-party transactions aren't inherently improper, but they carry higher risk because they may not be at arm's length and may be used to manipulate results. The auditor must inquire of management about the identity of related parties, remain alert for undisclosed relationships throughout the audit, and evaluate whether disclosure is adequate.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> The auditor is <strong>not</strong> required to determine whether a related-party transaction occurred at arm's-length prices, and should not state in the report that a transaction was on terms equivalent to an arm's-length transaction unless that assertion can be substantiated.</p></div>

<h3>Going concern: the evaluation</h3>
<p>The auditor evaluates whether substantial doubt exists about the entity's ability to continue as a going concern for a <strong>reasonable period of time</strong> — generally one year after the date the financial statements are issued (or available to be issued).</p>

<p>Common conditions and events: recurring operating losses, negative cash flows, working capital deficiencies, loan defaults, denial of trade credit, loss of a major customer or franchise, uninsured catastrophe, legal proceedings.</p>

<h3>Management's plans and the auditor's conclusion</h3>
<table>
<thead><tr><th>Situation</th><th>Reporting outcome</th></tr></thead>
<tbody>
<tr><td>Substantial doubt alleviated by management's plans, adequate disclosure</td><td>Unmodified opinion; emphasis-of-matter is not required but may be added</td></tr>
<tr><td>Substantial doubt remains, adequate disclosure</td><td>Unmodified opinion + <strong>separate section</strong> headed "Substantial Doubt About the Entity's Ability to Continue as a Going Concern"</td></tr>
<tr><td>Substantial doubt remains, inadequate disclosure</td><td>Qualified or adverse opinion (GAAP departure)</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A going-concern paragraph does <strong>not</strong> make the opinion qualified. The opinion stays unmodified — the doubt is communicated in an additional section. Auditors also may not use conditional language like "if the company is unable to continue…"</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Related-party transactions: inquire, stay alert, evaluate disclosure — auditor need <strong>not</strong> verify arm's-length pricing</li>
<li>Going concern horizon: ~1 year from date statements are issued/available to be issued</li>
<li>Doubt alleviated by plans + disclosed → unmodified, no required extra section</li>
<li>Doubt remains + adequately disclosed → <strong>unmodified opinion</strong> + separate going-concern section</li>
<li>Doubt remains + inadequate disclosure → qualified or adverse (GAAP departure)</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Going-concern doubt alone never qualifies the opinion.</p></div>
`,
      mcqs: [
        {
          question: "An auditor concludes that substantial doubt about a nonissuer's ability to continue as a going concern exists, and management has adequately disclosed the situation in the notes. What is the appropriate reporting?",
          options: [
            { label: "A", text: "A qualified opinion with a basis-for-qualification paragraph", isCorrect: false, rationale: "Adequate disclosure means there is no GAAP departure, so the opinion is not qualified." },
            { label: "B", text: "An unmodified opinion with a separate going-concern section", isCorrect: true, rationale: "Correct — when disclosure is adequate, the opinion remains unmodified and the auditor adds a separate section describing the substantial doubt." },
            { label: "C", text: "An adverse opinion", isCorrect: false, rationale: "An adverse opinion applies to material and pervasive GAAP departures, which does not apply where disclosure is adequate." },
            { label: "D", text: "A disclaimer of opinion", isCorrect: false, rationale: "A disclaimer applies to pervasive scope limitations, not to a properly disclosed going-concern uncertainty." },
          ],
          explanation: "When substantial doubt exists and management's disclosure is adequate, the auditor issues an unmodified opinion and includes a separate section headed 'Substantial Doubt About the Entity's Ability to Continue as a Going Concern.' Inadequate disclosure, by contrast, is a GAAP departure leading to a qualified or adverse opinion.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["going concern", "audit reports"],
        },
      ],
    },
    {
      slug: "it-controls-in-audit",
      title: "IT Controls in Audit",
      shortDescription: "General and application controls, auditing around vs. through the computer, and using data analytics.",
      blueprintArea: "Area III: Performing Further Procedures and Obtaining Evidence",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 13,
      studyMaterialHtml: `
<h2>General controls vs. application controls</h2>
<table>
<thead><tr><th>Type</th><th>Scope</th><th>Examples</th></tr></thead>
<tbody>
<tr><td><strong>IT general controls (ITGCs)</strong></td><td>The whole IT environment</td><td>Access security, change management, program development, IT operations/backup</td></tr>
<tr><td><strong>Application controls</strong></td><td>A single process or system</td><td>Input edit checks, validity tests, three-way match, automated approval limits</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Application controls can only be relied on if the <strong>ITGCs supporting them are effective</strong>. If access or change management controls are weak, an automated control that looks perfectly designed cannot be relied on — anyone could have altered the program or the data.</p></div>

<h3>Auditing around vs. through the computer</h3>
<ul>
<li><strong>Around the computer</strong> — trace inputs to outputs, ignoring processing. Only appropriate for simple systems with clear audit trails and low risk.</li>
<li><strong>Through the computer</strong> — test the processing itself, using techniques such as test data (auditor's fictitious transactions run through the client's system), integrated test facility (a dummy entity within live processing), and parallel simulation (auditor's own program reprocesses client data).</li>
</ul>

<h3>Segregation of duties in IT</h3>
<p>Classic separations: systems <strong>development</strong> from <strong>operations</strong>, and both from <strong>data control/security administration</strong>. A programmer with production access is the standard exam red flag — it enables unauthorized, untested code to reach live financial data.</p>

<h3>Data analytics (ADAs)</h3>
<p>Audit data analytics can test <strong>100% of a population</strong> rather than a sample — for example, recomputing every sales invoice, matching every payment to an approved vendor, or identifying all journal entries posted on weekends or by unusual users. Analytics identify items warranting further investigation; they don't replace the auditor's judgment about whether an exception is a misstatement.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Testing 100% of transactions eliminates <em>sampling</em> risk but not <em>nonsampling</em> risk — the data could be incomplete or the auditor could apply the wrong criteria.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>ITGCs (access, change management, development, operations) support <strong>all</strong> application controls</li>
<li>Weak ITGCs → cannot rely on any automated application control in that system</li>
<li>Around the computer = inputs to outputs (simple systems only); Through the computer = test data, ITF, parallel simulation</li>
<li>IT segregation: development ≠ operations ≠ security administration; programmer with production access = red flag</li>
<li>ADAs can test 100% of a population — removes sampling risk, not nonsampling risk</li>
</ul>
`,
      mcqs: [
        {
          question: "An auditor finds that a company's automated three-way match control is well designed, but application programmers have unrestricted access to modify programs in the production environment. What is the effect on the auditor's ability to rely on the automated control?",
          options: [
            { label: "A", text: "The control can still be relied on because its design is effective", isCorrect: false, rationale: "Design alone is not enough — weak general controls undermine reliance on the automated control's continued operation." },
            { label: "B", text: "The control cannot be relied on, because weak IT general controls undermine automated application controls", isCorrect: true, rationale: "Correct — without effective change management and access controls, the auditor cannot conclude the automated control operated consistently throughout the period." },
            { label: "C", text: "The auditor should test the control at year-end only", isCorrect: false, rationale: "Timing does not solve the problem — the integrity of the program throughout the period is in question." },
            { label: "D", text: "Reliance is permitted if management represents that no unauthorized changes were made", isCorrect: false, rationale: "A management representation is not sufficient evidence to overcome a general control deficiency." },
          ],
          explanation: "Automated application controls depend on the IT general controls that protect the programs and data. When change management and access controls are deficient, the auditor cannot conclude that the automated control operated consistently, and must shift to substantive testing.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["IT controls", "ITGC"],
        },
      ],
    },
    {
      slug: "group-audits-and-using-others-work",
      title: "Group Audits & Using Others' Work",
      shortDescription: "Component auditors, using internal audit's work, and using the work of a specialist.",
      blueprintArea: "Area III: Performing Further Procedures and Obtaining Evidence",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 14,
      studyMaterialHtml: `
<h2>Group audits: two choices</h2>
<table>
<thead><tr><th>Decision</th><th>Consequence</th></tr></thead>
<tbody>
<tr><td><strong>Assume responsibility</strong> for the component auditor's work</td><td>No reference to the component auditor in the report — the group auditor's opinion covers everything</td></tr>
<tr><td><strong>Make reference</strong> to the component auditor</td><td>The report indicates the division of responsibility and the magnitude of the portion audited by others; the opinion is still unmodified</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Making reference to a component auditor is <strong>not</strong> a qualification and is not a scope limitation. It is a division of responsibility, permitted only when the component auditor's work meets specific conditions (e.g., the component's statements are prepared under the same framework and the component auditor followed relevant standards and is independent).</p></div>

<h3>Using the work of internal audit</h3>
<p>Two distinct uses:</p>
<ul>
<li><strong>Using internal audit's work</strong> as audit evidence — the external auditor evaluates internal audit's objectivity, competence, and systematic/disciplined approach, then evaluates and tests some of the work.</li>
<li><strong>Direct assistance</strong> — internal auditors work under the external auditor's direction. Not permitted for areas involving significant judgment or high risk of material misstatement, and prohibited entirely for issuers under PCAOB rules.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Regardless of how much internal audit work is used, the external auditor's <strong>sole responsibility</strong> for the opinion is not reduced, and the report makes no reference to internal audit.</p></div>

<h3>Auditor's specialist vs. management's specialist</h3>
<ul>
<li><strong>Auditor's specialist</strong> — engaged by the auditor (e.g., a valuation expert). Evaluate competence, capabilities, objectivity; agree on scope; evaluate the findings. No reference in an unmodified opinion; reference is permitted only if the specialist's work causes a modification, and then only with the specialist's permission.</li>
<li><strong>Management's specialist</strong> — engaged by the client. Evaluate the specialist's competence and objectivity, understand the work, and evaluate whether it provides appropriate audit evidence.</li>
</ul>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Group auditor either <strong>assumes responsibility</strong> (no reference) or <strong>makes reference</strong> (division of responsibility — still unmodified)</li>
<li>Reference to a component auditor is NOT a qualification or scope limitation</li>
<li>Internal audit: evaluate objectivity + competence + systematic approach; direct assistance barred for high-judgment areas and for issuers</li>
<li>External auditor's responsibility for the opinion is never reduced; no report reference to internal audit</li>
<li>Auditor's specialist referenced only if the work causes a modification (with permission)</li>
</ul>
`,
      mcqs: [
        {
          question: "A group auditor decides to make reference to a component auditor who audited a significant subsidiary. What is the effect on the auditor's report?",
          options: [
            { label: "A", text: "The opinion must be qualified because of a scope limitation", isCorrect: false, rationale: "Making reference is a division of responsibility, not a scope limitation, and does not cause a qualification." },
            { label: "B", text: "The report indicates the division of responsibility, and the opinion remains unmodified", isCorrect: true, rationale: "Correct — the group auditor discloses that part of the audit was performed by another auditor and the magnitude involved, while still expressing an unmodified opinion." },
            { label: "C", text: "The component auditor must also sign the group auditor's report", isCorrect: false, rationale: "The component auditor does not sign the group report." },
            { label: "D", text: "A disclaimer of opinion is required for the component's portion", isCorrect: false, rationale: "No disclaimer is involved when reference is properly made." },
          ],
          explanation: "When the group auditor decides not to assume responsibility for a component auditor's work, the report makes reference to the component auditor and indicates the division of responsibility, including the magnitude of the portion audited by the other auditor. This does not modify the opinion.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["group audits"],
        },
      ],
    },
    {
      slug: "written-representations-and-completing-the-audit",
      title: "Written Representations & Completing the Audit",
      shortDescription: "Management representation letters, subsequent events procedures, and wrapping up the engagement.",
      blueprintArea: "Area IV: Forming Conclusions and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 15,
      studyMaterialHtml: `
<h2>The management representation letter</h2>
<p>Required in every audit. It is dated <strong>as of the date of the auditor's report</strong> (not year-end) and covers all periods in the auditor's report. It is signed by those with overall responsibility for financial and operating matters — typically the CEO and CFO.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Representations <strong>complement</strong> other evidence; they are never a substitute for it. If management refuses to provide the representation letter, that is a <strong>scope limitation</strong> requiring a <strong>disclaimer of opinion</strong> or withdrawal — a qualified opinion is not sufficient.</p></div>

<h3>Completing-the-audit checklist</h3>
<ol>
<li>Perform final analytical procedures (required)</li>
<li>Search for unrecorded liabilities</li>
<li>Perform subsequent events procedures</li>
<li>Obtain the legal letter (attorney's letter) about litigation, claims, and assessments</li>
<li>Evaluate going concern</li>
<li>Accumulate and evaluate uncorrected misstatements (individually and in aggregate)</li>
<li>Obtain written representations</li>
<li>Complete engagement quality review where required</li>
<li>Communicate with those charged with governance</li>
</ol>

<h3>Subsequent events and subsequent discovery</h3>
<table>
<thead><tr><th>Period</th><th>Auditor's responsibility</th></tr></thead>
<tbody>
<tr><td>Balance sheet date → report date</td><td><strong>Active responsibility</strong> — perform procedures to identify subsequent events</td></tr>
<tr><td>After the report date</td><td><strong>No responsibility to search</strong>, but must act on facts that come to attention</td></tr>
</tbody>
</table>

<p>If facts existing at the report date come to light afterward and would have changed the report, the auditor discusses with management, determines whether the statements need revision, and if management refuses to act, notifies those charged with governance and takes steps to prevent reliance on the report.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Legal letter refusal by the client's attorney to respond is also a <strong>scope limitation</strong> → qualified opinion or disclaimer.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Rep letter: required, dated <strong>as of the auditor's report date</strong>, covers all periods reported on, signed by CEO/CFO</li>
<li>Refusal to sign rep letter → <strong>disclaimer</strong> or withdrawal (not merely qualified)</li>
<li>Attorney refusing to respond → scope limitation → qualified or disclaimer</li>
<li>Auditor actively searches for subsequent events only up to the <strong>report date</strong></li>
<li>After report date: no duty to search, but must act on facts learned</li>
<li>Required at completion: final analytics, unrecorded liability search, going concern evaluation, uncorrected misstatement evaluation</li>
</ul>
`,
      mcqs: [
        {
          question: "Management refuses to sign the written representation letter at the conclusion of the audit. What is the appropriate response?",
          options: [
            { label: "A", text: "Issue a qualified opinion", isCorrect: false, rationale: "A refusal to provide required representations is a pervasive scope limitation — a qualified opinion is not sufficient." },
            { label: "B", text: "Disclaim an opinion or withdraw from the engagement", isCorrect: true, rationale: "Correct — refusal to provide written representations is a scope limitation sufficiently pervasive that the auditor must disclaim an opinion or withdraw." },
            { label: "C", text: "Issue an unmodified opinion and document the refusal in the workpapers", isCorrect: false, rationale: "An unmodified opinion is not permitted when required representations are withheld." },
            { label: "D", text: "Issue an adverse opinion", isCorrect: false, rationale: "An adverse opinion applies to material and pervasive misstatements, not to scope limitations." },
          ],
          explanation: "Written representations are a required part of audit evidence. Management's refusal to provide them constitutes a scope limitation so significant that the auditor must disclaim an opinion or withdraw from the engagement.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["representations", "scope limitation"],
        },
      ],
    },
    {
      slug: "audit-reports",
      title: "Audit Reports",
      shortDescription: "Choosing between unmodified, qualified, adverse, and disclaimer opinions, and adding emphasis-of-matter paragraphs.",
      blueprintArea: "Area IV: Forming Conclusions and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 16,
      studyMaterialHtml: `
<h2>The decision grid</h2>
<p>Two questions decide the opinion: <strong>What is the problem?</strong> (a misstatement, or an inability to obtain evidence) and <strong>How bad is it?</strong> (material, or material <em>and</em> pervasive).</p>

<table>
<thead><tr><th>Nature of the issue</th><th>Material but NOT pervasive</th><th>Material AND pervasive</th></tr></thead>
<tbody>
<tr><td>Financial statements are misstated (GAAP departure)</td><td><strong>Qualified</strong></td><td><strong>Adverse</strong></td></tr>
<tr><td>Unable to obtain sufficient appropriate evidence (scope limitation)</td><td><strong>Qualified</strong></td><td><strong>Disclaimer</strong></td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> "Pervasive" is the hinge word. It means the effects are not confined to specific elements, or if confined, represent a substantial proportion of the statements, or relate to disclosures fundamental to users' understanding.</p></div>

<h3>Structure of the nonissuer report</h3>
<p>Opinion section first, then Basis for Opinion, then (if applicable) Going Concern and Key Audit Matters, then Responsibilities of Management, then Auditor's Responsibilities, then signature, city/state, and date.</p>

<h3>Emphasis-of-matter vs. other-matter</h3>
<table>
<thead><tr><th>Paragraph</th><th>Refers to…</th><th>Examples</th></tr></thead>
<tbody>
<tr><td><strong>Emphasis-of-matter</strong></td><td>Something <em>presented or disclosed</em> in the financial statements</td><td>Justified change in accounting principle, significant related-party transaction, major catastrophe, going concern doubt</td></tr>
<tr><td><strong>Other-matter</strong></td><td>Something <em>not</em> in the financial statements</td><td>Prior period audited by a predecessor, restricting use of the report, other reporting responsibilities</td></tr>
</tbody>
</table>

<p>Neither paragraph modifies the opinion. Both are placed after the Basis for Opinion section, with an appropriate heading.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A client refuses to consolidate a material subsidiary that GAAP requires be consolidated, and the subsidiary represents most of the group's assets and revenue. This is a GAAP departure that is both material and pervasive → <strong>adverse opinion</strong>.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Issuer (PCAOB) reports differ: they include <strong>Critical Audit Matters (CAMs)</strong>, state the auditor's tenure ("We have served as the Company's auditor since…"), and use different section headings. Nonissuer reports may include <strong>Key Audit Matters</strong> only when engaged to do so.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>Misstatement</strong>: material → Qualified; material + pervasive → <strong>Adverse</strong></li>
<li><strong>Scope limitation</strong>: material → Qualified; material + pervasive → <strong>Disclaimer</strong></li>
<li>Emphasis-of-matter = something IN the statements; Other-matter = something NOT in the statements</li>
<li>Neither EOM nor OM modifies the opinion</li>
<li>Issuers: CAMs + auditor tenure. Nonissuers: KAMs only if engaged to report them</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Adverse comes from misstatements; disclaimer comes from scope limitations. Don't cross the wires.</p></div>
`,
      mcqs: [
        {
          question: "An auditor is unable to observe the physical inventory count or satisfy themselves through alternative procedures, and inventory represents 60% of total assets. What opinion is appropriate?",
          options: [
            { label: "A", text: "Qualified opinion", isCorrect: false, rationale: "At 60% of total assets, the inability to obtain evidence is pervasive, which goes beyond a qualification." },
            { label: "B", text: "Disclaimer of opinion", isCorrect: true, rationale: "Correct — this is a scope limitation (inability to obtain sufficient appropriate evidence) that is both material and pervasive, requiring a disclaimer." },
            { label: "C", text: "Adverse opinion", isCorrect: false, rationale: "An adverse opinion applies when the statements are materially and pervasively misstated, not when evidence is unavailable." },
            { label: "D", text: "Unmodified opinion with an emphasis-of-matter paragraph", isCorrect: false, rationale: "An emphasis-of-matter paragraph cannot cure a significant scope limitation." },
          ],
          explanation: "Inability to obtain sufficient appropriate audit evidence is a scope limitation. When the possible effects are both material and pervasive — as with inventory representing 60% of total assets — the auditor must disclaim an opinion rather than qualify it.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["audit reports", "scope limitation"],
        },
        {
          question: "A company changed from FIFO to weighted-average inventory costing. The change is justified, properly accounted for, and adequately disclosed. How should the auditor report?",
          options: [
            { label: "A", text: "Qualified opinion due to a lack of consistency", isCorrect: false, rationale: "A justified, properly applied and disclosed accounting change is not a GAAP departure and does not qualify the opinion." },
            { label: "B", text: "Unmodified opinion with an emphasis-of-matter paragraph describing the change", isCorrect: true, rationale: "Correct — a justified change in accounting principle is a matter appropriately presented in the financial statements, warranting an emphasis-of-matter paragraph without modifying the opinion." },
            { label: "C", text: "Unmodified opinion with an other-matter paragraph", isCorrect: false, rationale: "Other-matter paragraphs address matters NOT presented in the financial statements; this change is disclosed in them." },
            { label: "D", text: "Adverse opinion", isCorrect: false, rationale: "There is no GAAP departure here at all." },
          ],
          explanation: "A justified and properly disclosed change in accounting principle is highlighted with an emphasis-of-matter paragraph, because it refers to a matter that IS presented or disclosed in the financial statements. The opinion itself remains unmodified.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["audit reports", "emphasis of matter"],
        },
      ],
    },
    {
      slug: "reviews-compilations-and-aup",
      title: "Reviews, Compilations & AUP",
      shortDescription: "SSARS engagements — preparation, compilation, and review — plus agreed-upon procedures.",
      blueprintArea: "Area IV: Forming Conclusions and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 17,
      studyMaterialHtml: `
<h2>The assurance ladder</h2>
<table>
<thead><tr><th>Engagement</th><th>Assurance provided</th><th>Independence required?</th><th>Report issued?</th></tr></thead>
<tbody>
<tr><td>Preparation (SSARS)</td><td>None</td><td>No</td><td>No report — but each page marked "no assurance is provided"</td></tr>
<tr><td>Compilation (SSARS)</td><td>None</td><td>No (disclose if not independent)</td><td>Yes — compilation report</td></tr>
<tr><td>Review (SSARS)</td><td><strong>Limited</strong> (negative assurance)</td><td><strong>Yes</strong></td><td>Yes — review report</td></tr>
<tr><td>Audit (GAAS)</td><td><strong>Reasonable</strong> (positive assurance)</td><td><strong>Yes</strong></td><td>Yes — audit report</td></tr>
</tbody>
</table>

<h3>What a review actually involves</h3>
<p>A review consists primarily of <strong>inquiry and analytical procedures</strong> ("I and A"). It does <em>not</em> include obtaining an understanding of internal control, assessing fraud risk, testing controls, confirming balances, or physically inspecting assets — those are audit procedures.</p>

<div class="callout callout-important"><p><strong>IMPORTANT — the negative assurance wording:</strong> "Based on our review, we are not aware of any material modifications that should be made to the accompanying financial statements in order for them to be in accordance with accounting principles generally accepted in the United States of America." Memorize the shape of this sentence — it is the defining feature of a review report.</p></div>

<h3>Agreed-upon procedures (AUP)</h3>
<p>Under the attestation standards, the practitioner performs specific procedures agreed with the engaging party and reports <strong>findings</strong> — no opinion, no conclusion, no assurance. The report is restricted to specified parties in most cases, and the engaging party must acknowledge the appropriateness of the procedures for its purposes.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> All SSARS engagements require an <strong>engagement letter signed by both</strong> the accountant and management. And a review engagement always requires a written management representation letter — a compilation does not.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Preparation → no assurance, no report ("no assurance" legend on each page)</li>
<li>Compilation → no assurance, report issued, independence not required (disclose if lacking)</li>
<li>Review → <strong>limited/negative assurance</strong>, independence required, inquiry + analytics only</li>
<li>Audit → reasonable/positive assurance</li>
<li>Review report key phrase: "not aware of any material modifications…"</li>
<li>AUP → report of <strong>findings only</strong>, no assurance, generally restricted use</li>
<li>Rep letter required for reviews, not compilations; engagement letter required for all SSARS work</li>
</ul>
`,
      mcqs: [
        {
          question: "Which procedures form the primary basis of a review of financial statements under SSARS?",
          options: [
            { label: "A", text: "Tests of controls and substantive tests of details", isCorrect: false, rationale: "These are audit procedures; a review does not include testing controls or detailed substantive testing." },
            { label: "B", text: "Inquiry and analytical procedures", isCorrect: true, rationale: "Correct — a review consists primarily of inquiries of management and analytical procedures, which provide limited assurance." },
            { label: "C", text: "Confirmation of receivables and observation of inventory", isCorrect: false, rationale: "These are audit procedures not performed in a review engagement." },
            { label: "D", text: "Obtaining an understanding of internal control and assessing control risk", isCorrect: false, rationale: "Understanding internal control is an audit requirement, not a review procedure." },
          ],
          explanation: "A SSARS review is built on inquiry and analytical procedures. It provides limited (negative) assurance and specifically excludes audit procedures such as testing controls, confirming balances, or observing inventory.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["SSARS", "review"],
        },
        {
          question: "In an agreed-upon procedures engagement, what does the practitioner's report contain?",
          options: [
            { label: "A", text: "An opinion on whether the subject matter is fairly stated", isCorrect: false, rationale: "An opinion is expressed in an examination engagement, not in agreed-upon procedures." },
            { label: "B", text: "Limited assurance in the form of negative assurance", isCorrect: false, rationale: "Negative assurance is provided in a review, not in agreed-upon procedures." },
            { label: "C", text: "A description of the procedures performed and the findings, with no assurance expressed", isCorrect: true, rationale: "Correct — an AUP report presents procedures and findings; users draw their own conclusions, and the practitioner expresses no opinion or conclusion." },
            { label: "D", text: "A recommendation on the course of action the specified parties should take", isCorrect: false, rationale: "The practitioner reports findings, not recommendations on what users should decide." },
          ],
          explanation: "In an agreed-upon procedures engagement the practitioner performs specific procedures agreed with the engaging party and reports the findings without expressing an opinion or conclusion. Users evaluate the findings and draw their own conclusions.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["attestation", "AUP"],
        },
      ],
    },
    {
      slug: "attestation-and-soc-engagements",
      title: "Attestation & SOC Engagements",
      shortDescription: "The attestation standards, examination vs. review vs. AUP, and SOC 1/SOC 2 reporting.",
      blueprintArea: "Area IV: Forming Conclusions and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 18,
      studyMaterialHtml: `
<h2>Three attestation engagement types</h2>
<table>
<thead><tr><th>Type</th><th>Assurance</th><th>Conclusion wording</th></tr></thead>
<tbody>
<tr><td>Examination</td><td>Reasonable</td><td>Opinion — positive assurance</td></tr>
<tr><td>Review</td><td>Limited</td><td>Conclusion — negative assurance</td></tr>
<tr><td>Agreed-upon procedures</td><td>None</td><td>Findings only</td></tr>
</tbody>
</table>

<h3>SOC reports at a glance</h3>
<table>
<thead><tr><th>Report</th><th>Subject</th><th>Primary users</th></tr></thead>
<tbody>
<tr><td><strong>SOC 1</strong></td><td>Controls at a service organization relevant to <strong>user entities' internal control over financial reporting (ICFR)</strong></td><td>User entities and their auditors</td></tr>
<tr><td><strong>SOC 2</strong></td><td>Controls relevant to the <strong>Trust Services Criteria</strong>: security, availability, processing integrity, confidentiality, privacy</td><td>Restricted — management, customers, regulators</td></tr>
<tr><td><strong>SOC 3</strong></td><td>Same criteria as SOC 2, summarized</td><td>General use — public distribution</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT — Type 1 vs. Type 2:</strong> A <strong>Type 1</strong> report covers the fairness of the description and the <strong>suitability of design</strong> of controls <em>at a point in time</em>. A <strong>Type 2</strong> report adds <strong>operating effectiveness over a period</strong>. Only a Type 2 gives the user auditor evidence to rely on the controls for a period.</p></div>

<h3>Security is the only mandatory criterion</h3>
<p>In a SOC 2, the security ("common") criteria must always be included; availability, processing integrity, confidentiality, and privacy are included only if relevant to the engagement scope.</p>

<h3>Complementary user entity controls</h3>
<p>A service organization's description often assumes that user entities implement certain controls of their own (e.g., promptly notifying the service organization of terminated employees). The user auditor must determine whether those complementary controls actually exist at the user entity — otherwise the service organization's controls may not achieve their objectives.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The <strong>service auditor</strong> reports on the service organization. The <strong>user auditor</strong> audits the user entity and may use a Type 2 SOC 1 report as evidence — and must not reference the service auditor in an unmodified user-entity opinion.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Examination = opinion (reasonable); Review = conclusion (limited); AUP = findings (none)</li>
<li><strong>SOC 1</strong> = ICFR-relevant controls (for user auditors); <strong>SOC 2</strong> = Trust Services Criteria (restricted); <strong>SOC 3</strong> = general use summary</li>
<li>Trust Services Criteria: <strong>security</strong> (always required), availability, processing integrity, confidentiality, privacy</li>
<li><strong>Type 1</strong> = design at a point in time; <strong>Type 2</strong> = design + operating effectiveness over a period</li>
<li>Only Type 2 supports reliance on controls for a period</li>
<li>Check complementary user entity controls actually exist at the user entity</li>
</ul>
`,
      mcqs: [
        {
          question: "A user auditor wants to rely on controls at a service organization for the entire audit period. Which report provides appropriate evidence?",
          options: [
            { label: "A", text: "A SOC 1 Type 1 report", isCorrect: false, rationale: "A Type 1 report addresses design at a point in time only, providing no evidence of operating effectiveness over a period." },
            { label: "B", text: "A SOC 1 Type 2 report", isCorrect: true, rationale: "Correct — a Type 2 report covers both the suitability of design and the operating effectiveness of controls throughout a specified period, which is what reliance requires." },
            { label: "C", text: "A SOC 3 report", isCorrect: false, rationale: "SOC 3 is a general-use summary report on Trust Services Criteria, not designed to give a user auditor detailed ICFR evidence." },
            { label: "D", text: "A SOC 2 Type 1 report", isCorrect: false, rationale: "SOC 2 addresses Trust Services Criteria rather than ICFR, and a Type 1 covers only a point in time." },
          ],
          explanation: "To rely on a service organization's controls for the audit period, the user auditor needs a SOC 1 Type 2 report: SOC 1 because it addresses controls relevant to internal control over financial reporting, and Type 2 because it covers operating effectiveness throughout a period rather than design at a single date.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["SOC", "service organizations"],
        },
        {
          question: "Which Trust Services Criterion must be included in every SOC 2 engagement?",
          options: [
            { label: "A", text: "Privacy", isCorrect: false, rationale: "Privacy is included only when relevant to the engagement scope." },
            { label: "B", text: "Security", isCorrect: true, rationale: "Correct — the security criteria (also called the common criteria) are mandatory in every SOC 2 engagement; the other four are optional depending on scope." },
            { label: "C", text: "Availability", isCorrect: false, rationale: "Availability is optional and included only if relevant." },
            { label: "D", text: "Processing integrity", isCorrect: false, rationale: "Processing integrity is optional and included only if relevant." },
          ],
          explanation: "The five Trust Services Criteria are security, availability, processing integrity, confidentiality, and privacy. Security — known as the common criteria — must be included in every SOC 2 engagement; the remaining four are included based on the scope agreed with the service organization.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["SOC", "trust services criteria"],
        },
      ],
    },
  ],
};
