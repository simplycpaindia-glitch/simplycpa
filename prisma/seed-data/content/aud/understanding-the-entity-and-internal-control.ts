import type { TopicContent } from "../types";

export const understandingInternalControl: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Every audit requires an understanding of the entity, its environment, the applicable financial reporting framework, and its system of internal control. Statement on Auditing Standards (SAS) No. 145 rewrote these requirements, and the 2026 Auditing and Attestation (AUD) blueprint added emphasis on entity-level controls. Expect questions on the components of internal control, types of controls, walkthroughs, and how deficiencies are evaluated and communicated.</p>

<h2>Understanding the entity and its environment</h2>
<ul>
<li>Organizational structure, ownership, governance, and business model — including how it uses information technology (IT).</li>
<li>Industry, regulatory, and other external factors.</li>
<li>Measures used, internally and externally, to assess financial performance (these can create pressure to manipulate results).</li>
<li>The applicable financial reporting framework, the entity's accounting policies, and reasons for any changes.</li>
<li>How <strong>inherent risk factors</strong> — complexity, subjectivity, change, uncertainty, and susceptibility to management bias or fraud — affect the financial statements.</li>
</ul>
<p>Risk assessment procedures are: <strong>inquiries</strong> of management and others (including internal audit and in-house legal counsel), <strong>analytical procedures</strong>, and <strong>observation and inspection</strong>.</p>

<h2>The components of internal control</h2>
<p>Generally accepted auditing standards (GAAS) use the same five components as the Committee of Sponsoring Organizations of the Treadway Commission (COSO) Internal Control — Integrated Framework (2013):</p>
<table>
<thead><tr><th>Component</th><th>What the auditor looks at</th></tr></thead>
<tbody>
<tr><td><strong>Control environment</strong></td><td>Integrity and ethical values; board independence and oversight; organizational structure; commitment to competence; accountability. The "tone at the top" — the foundation for all other components.</td></tr>
<tr><td><strong>Entity's risk assessment process</strong></td><td>How management identifies business risks relevant to financial reporting, assesses their significance, and decides on actions — including fraud risk.</td></tr>
<tr><td><strong>Entity's process to monitor the system of internal control</strong></td><td>Ongoing and separate evaluations (for example, internal audit), and how deficiencies are remediated.</td></tr>
<tr><td><strong>Information system and communication</strong></td><td>How transactions are initiated, recorded, processed, corrected, and reported; the IT environment; journal entries; the financial close; how roles and significant matters are communicated.</td></tr>
<tr><td><strong>Control activities</strong></td><td>Controls that address risks at the assertion level — authorizations, reconciliations, verifications, physical controls, and segregation of duties — including general IT controls.</td></tr>
</tbody>
</table>
<p>SAS No. 145 treats the first four as mostly <strong>indirect</strong> (entity-level) controls and control activities as mostly <strong>direct</strong> controls. The auditor must evaluate whether the control environment provides an appropriate foundation, and whether any deficiencies undermine the other components.</p>

<h3>The 17 COSO principles (headline view)</h3>
<ul>
<li>Control environment: principles 1–5 (integrity, board oversight, structure, competence, accountability).</li>
<li>Risk assessment: 6–9 (objectives, identify risks, fraud risk, significant change).</li>
<li>Control activities: 10–12 (select controls, general IT controls, deploy through policies).</li>
<li>Information and communication: 13–15 (quality information, internal and external communication).</li>
<li>Monitoring: 16–17 (evaluations, communicate deficiencies).</li>
</ul>

<h2>Controls the auditor must evaluate</h2>
<p>For controls in the control activities component, the auditor must evaluate <strong>design</strong> and determine whether they have been <strong>implemented</strong> for:</p>
<ul>
<li>Controls that address a <strong>significant risk</strong>.</li>
<li>Controls over <strong>journal entries</strong>, including nonstandard entries.</li>
<li>Controls whose <strong>operating effectiveness the auditor plans to test</strong>.</li>
<li>Other controls the auditor considers appropriate, plus general IT controls that address risks arising from the use of IT.</li>
</ul>
<p>Design and implementation are evaluated with <strong>inquiry combined with</strong> observation, inspection, or a <strong>walkthrough</strong> (tracing a transaction from origination to the financial statements). Inquiry alone is not sufficient. Evaluating design and implementation is <em>not</em> a test of operating effectiveness.</p>

<h2>Types of controls</h2>
<table>
<thead><tr><th>Classification</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>Preventive</td><td>Required approvals, segregation of duties, input edit checks, passwords</td></tr>
<tr><td>Detective</td><td>Bank reconciliations, reviews of exception reports, physical inventory counts compared with records</td></tr>
<tr><td>Manual versus automated</td><td>A supervisor's review versus a system-enforced three-way match</td></tr>
<tr><td>Entity-level versus transaction-level</td><td>Code of conduct, board oversight versus a control over individual sales invoices</td></tr>
</tbody>
</table>

<h3>Segregation of duties</h3>
<p>Separate <strong>authorization</strong> of transactions, <strong>recording</strong> of transactions, and <strong>custody</strong> of the related assets (memory aid: ARC). Reconciliation should be done by someone independent of all three. In small entities where segregation is limited, owner-manager oversight can compensate.</p>

<h2>Inherent limitations of internal control</h2>
<ul>
<li>Human judgment can be faulty; breakdowns occur from error or mistakes.</li>
<li>Controls can be circumvented by <strong>collusion</strong> or by <strong>management override</strong>.</li>
<li>Cost-benefit constraints limit what controls are implemented.</li>
</ul>
<p>Internal control provides <strong>reasonable</strong>, not absolute, assurance.</p>

<h2>Evaluating and communicating deficiencies</h2>
<table>
<thead><tr><th>Severity</th><th>Definition</th><th>Communication</th></tr></thead>
<tbody>
<tr><td>Deficiency</td><td>Design or operation does not allow timely prevention, or detection and correction, of misstatements</td><td>May be communicated to management (orally or in writing)</td></tr>
<tr><td><strong>Significant deficiency</strong></td><td>Less severe than a material weakness, yet important enough to merit attention by those charged with governance</td><td><strong>In writing</strong> to management and those charged with governance</td></tr>
<tr><td><strong>Material weakness</strong></td><td>A reasonable possibility that a material misstatement will not be prevented, or detected and corrected, on a timely basis</td><td><strong>In writing</strong> to management and those charged with governance</td></tr>
</tbody>
</table>
<ul>
<li>Written communication is best made by the report release date and <strong>no later than 60 days</strong> after it.</li>
<li>Severity depends on the <em>potential</em> for misstatement, not whether one actually occurred.</li>
<li>The auditor must <strong>not</strong> issue a written communication stating that no significant deficiencies were identified.</li>
<li>Indicators of a material weakness include fraud by senior management, restatement of previously issued statements, a material misstatement the auditor found that controls missed, and ineffective oversight by those charged with governance.</li>
</ul>

<h2>Documentation</h2>
<p>Understanding may be documented with narratives, flowcharts, questionnaires, and decision tables. The auditor documents key elements of the understanding, sources of information, risk assessment procedures, and assessed risks.</p>

<h2>How it is tested</h2>
<ul>
<li>Match a control or scenario to its internal control component.</li>
<li>Classify a control as preventive or detective, or identify incompatible duties.</li>
<li>Know which controls require design and implementation evaluation.</li>
<li>Classify and communicate control deficiencies.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "Tone at the top", board oversight, and management's philosophy always point to the <strong>control environment</strong>. Reconciliations, approvals, and physical safeguards point to <strong>control activities</strong>.</p></div>
`,
  revision: `
<h3>Five components (Committee of Sponsoring Organizations of the Treadway Commission (COSO))</h3>
<ol>
<li>Control environment — tone at the top, the foundation.</li>
<li>Entity's risk assessment process.</li>
<li>Process to monitor internal control.</li>
<li>Information system and communication.</li>
<li>Control activities — approvals, reconciliations, physical controls, segregation.</li>
</ol>

<h3>Evaluate design and implementation for</h3>
<p>Significant-risk controls · journal entry controls · controls the auditor will test · related general information technology (IT) controls. Inquiry <strong>plus</strong> observation, inspection, or walkthrough.</p>

<h3>Segregation of duties</h3>
<p>Separate Authorization, Recording, Custody (memory aid: ARC).</p>

<h3>Limitations</h3>
<p>Human error, collusion, management override, cost-benefit → reasonable assurance only.</p>

<h3>Deficiencies</h3>
<ul>
<li>Material weakness: <strong>reasonable possibility</strong> of material misstatement not prevented or detected.</li>
<li>Significant deficiency: less severe, merits governance attention.</li>
<li>Both → <strong>in writing</strong> to management and those charged with governance, within 60 days of report release.</li>
<li>Never state "no significant deficiencies were identified".</li>
</ul>
`,
};
