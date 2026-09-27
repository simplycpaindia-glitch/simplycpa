import type { TopicContent } from "../types";

export const assessingRisk: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Identifying and assessing the risk of material misstatement (RMM) drives every later decision in an audit. Statement on Auditing Standards (SAS) No. 145 made the process more granular: separate inherent and control risk assessments, a spectrum of inherent risk, and a "stand-back" requirement. Auditing and Attestation (AUD) Area II tests assertions, significant risks, and how risks link to responses.</p>

<h2>Two levels of risk</h2>
<table>
<thead><tr><th>Level</th><th>Nature</th><th>Examples</th><th>Response</th></tr></thead>
<tbody>
<tr><td>Financial statement level</td><td>Pervasive — affects many assertions</td><td>Weak control environment, management lacking integrity, going concern doubts, inadequate accounting records</td><td>Overall responses: more experienced staff, more supervision, more professional skepticism, unpredictability, changes to timing</td></tr>
<tr><td>Assertion level</td><td>Specific to a class of transactions, account balance, or disclosure</td><td>Complex revenue contract terms, subjective inventory obsolescence reserve</td><td>Further audit procedures: tests of controls and substantive procedures</td></tr>
</tbody>
</table>

<h2>Management's assertions</h2>
<table>
<thead><tr><th>Classes of transactions and events</th><th>Account balances</th><th>Presentation and disclosure</th></tr></thead>
<tbody>
<tr><td><strong>Occurrence</strong> — recorded transactions happened and pertain to the entity</td><td><strong>Existence</strong> — assets, liabilities, and equity exist</td><td>Occurrence and rights and obligations of disclosed events</td></tr>
<tr><td><strong>Completeness</strong> — all transactions that should be recorded are recorded</td><td><strong>Completeness</strong></td><td>Completeness of disclosures</td></tr>
<tr><td><strong>Accuracy</strong> — amounts recorded appropriately</td><td><strong>Rights and obligations</strong> — the entity holds or controls the rights to assets; liabilities are its obligations</td><td>Classification and understandability</td></tr>
<tr><td><strong>Cutoff</strong> — recorded in the correct period</td><td><strong>Accuracy, valuation, and allocation</strong></td><td>Accuracy and valuation of disclosures</td></tr>
<tr><td><strong>Classification</strong> — recorded in the proper accounts</td><td><strong>Classification</strong></td><td></td></tr>
<tr><td><strong>Presentation</strong> — appropriately aggregated and described</td><td><strong>Presentation</strong></td><td></td></tr>
</tbody>
</table>
<p>A <strong>relevant assertion</strong> is one with an identified risk of material misstatement — that is, the likelihood of misstatement is more than remote <em>and</em> the misstatement could be material. Only accounts with relevant assertions are <strong>significant classes of transactions, account balances, or disclosures</strong>.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Overstatement risks point to <em>existence/occurrence</em>; understatement risks point to <em>completeness</em>. Assets and revenues are usually at risk of overstatement; liabilities and expenses at risk of understatement.</p></div>

<h2>Assessing inherent risk</h2>
<p>Inherent risk is assessed on a <strong>spectrum</strong> (from lower to higher), based on the likelihood and magnitude of a possible misstatement, using the <strong>inherent risk factors</strong>:</p>
<ul>
<li><strong>Complexity</strong> — complicated calculations, contracts, or accounting requirements.</li>
<li><strong>Subjectivity</strong> — reliance on judgment (estimates, fair values).</li>
<li><strong>Change</strong> — new systems, regulations, products, or personnel.</li>
<li><strong>Uncertainty</strong> — outcomes that can't be measured precisely.</li>
<li><strong>Susceptibility to misstatement due to management bias or other fraud risk factors.</strong></li>
</ul>

<h2>Assessing control risk</h2>
<ul>
<li>Control risk is assessed <strong>separately</strong> from inherent risk.</li>
<li>If the auditor does <strong>not</strong> plan to test the operating effectiveness of controls, control risk is assessed at the <strong>maximum</strong>, and RMM equals the inherent risk assessment.</li>
<li>Assessing control risk below maximum requires tests of operating effectiveness — evaluating design and implementation alone is not enough.</li>
</ul>

<h2>Significant risks</h2>
<p>A significant risk is an identified risk for which the inherent risk assessment is <strong>close to the upper end of the spectrum</strong>, or one that generally accepted auditing standards (GAAS) require to be treated as significant. Examples:</p>
<ul>
<li>Fraud risks, including the presumed risk of fraud in <strong>revenue recognition</strong> (rebuttable) and <strong>management override of controls</strong> (never rebuttable).</li>
<li>Significant unusual transactions outside the normal course of business, and significant related party transactions.</li>
<li>Estimates with high estimation uncertainty.</li>
</ul>
<p>For each significant risk the auditor must:</p>
<ul>
<li>Evaluate the design and implementation of the related controls.</li>
<li>Perform substantive procedures specifically responsive to that risk — if only substantive procedures are used, they must include <strong>tests of details</strong>.</li>
<li>Test the related controls in the <strong>current period</strong> if relying on them (no rotation).</li>
</ul>

<h2>Risks where substantive procedures alone are not enough</h2>
<p>In highly automated environments with little or no documentary trail (for example, electronic ordering and invoicing), the auditor may be unable to obtain sufficient evidence through substantive procedures alone and <strong>must test controls</strong>.</p>

<h2>The stand-back requirement</h2>
<p>For material classes of transactions, account balances, and disclosures that the auditor did <strong>not</strong> identify as significant, the auditor must still evaluate whether that conclusion remains appropriate — and must perform <strong>substantive procedures for each material item</strong> regardless of assessed risk.</p>

<h2>Revising the assessment</h2>
<p>Risk assessment is iterative. If evidence obtained later contradicts the original assessment — for example, tests of controls find deviations, or substantive tests find unexpected misstatements — the auditor revises the assessment and modifies planned procedures.</p>

<h2>Documentation</h2>
<ul>
<li>The discussion among the engagement team about susceptibility to material misstatement, including fraud.</li>
<li>Key elements of the understanding of the entity and internal control.</li>
<li>The assessed RMM at the financial statement and assertion levels, significant risks, and the rationale for significant judgments.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Match an audit concern to the assertion most at risk.</li>
<li>Identify whether a risk is pervasive (statement level) or specific (assertion level).</li>
<li>Recognize significant risks and the required responses.</li>
<li>Apply the SAS No. 145 concepts: inherent risk factors, separate control risk assessment, stand-back.</li>
</ul>

<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Evaluating design and implementation of a control does not permit a control risk assessment below maximum. Only testing operating effectiveness does.</p></div>
`,
  revision: `
<h3>Two levels</h3>
<ul>
<li>Financial statement level (pervasive) → overall responses (staffing, skepticism, unpredictability).</li>
<li>Assertion level → further procedures.</li>
</ul>

<h3>Assertions</h3>
<ul>
<li>Transactions: occurrence, completeness, accuracy, cutoff, classification, presentation.</li>
<li>Balances: existence, rights and obligations, completeness, accuracy/valuation/allocation, classification, presentation.</li>
<li>Overstatement → existence/occurrence. Understatement → completeness.</li>
</ul>

<h3>Statement on Auditing Standards (SAS) No. 145</h3>
<ul>
<li>Inherent risk on a spectrum; factors: complexity, subjectivity, change, uncertainty, bias/fraud susceptibility.</li>
<li>Control risk assessed separately; no testing → maximum.</li>
<li>Stand-back: substantive procedures for every material item.</li>
</ul>

<h3>Significant risks</h3>
<ul>
<li>Upper end of inherent risk spectrum; fraud (revenue presumed, override always).</li>
<li>Evaluate controls; specific substantive response incl. <strong>tests of details</strong>; test relied-on controls <strong>this year</strong>.</li>
</ul>

<h3>Highly automated, no paper trail</h3>
<p>Must test controls — substantive alone insufficient.</p>
`,
};
