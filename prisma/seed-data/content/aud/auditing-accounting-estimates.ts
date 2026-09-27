import type { TopicContent } from "../types";

export const auditingEstimates: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Accounting estimates — credit loss allowances, warranty reserves, fair values, impairments, pension obligations — are among the highest-risk areas in any audit. Statement on Auditing Standards (SAS) No. 143 requires a risk-based approach that separately considers estimation uncertainty, complexity, and subjectivity, and emphasizes professional skepticism about management bias. Auditing and Attestation (AUD) tests the three testing approaches, indicators of bias, and how to measure misstatements in estimates.</p>

<h2>Key concepts</h2>
<ul>
<li><strong>Accounting estimate:</strong> a monetary amount whose measurement is subject to estimation uncertainty.</li>
<li><strong>Estimation uncertainty:</strong> susceptibility to an inherent lack of precision in measurement.</li>
<li><strong>Management's point estimate:</strong> the amount management selects for recognition or disclosure.</li>
<li><strong>Outcome:</strong> the actual amount when the transaction or event is resolved. A difference between the outcome and the estimate is not necessarily a misstatement.</li>
<li><strong>Management bias:</strong> a lack of neutrality in preparing information — it may be unintentional, but intentional bias is fraud.</li>
</ul>

<h2>Risk assessment for estimates</h2>
<p>The auditor obtains an understanding of:</p>
<ul>
<li>The requirements of the financial reporting framework and regulatory factors.</li>
<li>Transactions and conditions that give rise to estimates.</li>
<li>How management identifies the need for estimates and makes them: the <strong>methods</strong> (including models), <strong>significant assumptions</strong>, and <strong>data</strong> used; whether specialists are involved; and how estimation uncertainty is addressed.</li>
<li>Management's oversight and review of estimates, and the related controls.</li>
<li>A <strong>retrospective review</strong> of the outcome of prior-period estimates (or their re-estimation). Its purpose is to help identify risks and possible bias — not to second-guess judgments that were reasonable when made.</li>
</ul>
<p>Inherent risk for estimates is assessed using the inherent risk factors, especially <strong>estimation uncertainty</strong>, <strong>complexity</strong>, and <strong>subjectivity</strong>. Estimates with high uncertainty are often significant risks.</p>

<h2>Three testing approaches</h2>
<p>SAS No. 143 requires one or more of these responses:</p>
<table>
<thead><tr><th>Approach</th><th>When it works well</th><th>What it involves</th></tr></thead>
<tbody>
<tr><td><strong>Obtain evidence from events occurring up to the date of the auditor's report</strong></td><td>The outcome is expected soon (inventory sold after year-end, a lawsuit settled before the report date)</td><td>Examining subsequent sales, settlements, or collections</td></tr>
<tr><td><strong>Test how management made the estimate</strong></td><td>Management's process is well controlled and data are reliable</td><td>Evaluating the method, significant assumptions, and data; testing controls over the process</td></tr>
<tr><td><strong>Develop an auditor's point estimate or range</strong></td><td>Management's process is weak, or the auditor has independent data</td><td>Using the auditor's own method, assumptions, or data — often with a specialist</td></tr>
</tbody>
</table>

<h3>Testing management's method, assumptions, and data</h3>
<ul>
<li><strong>Method:</strong> is it appropriate under the framework, consistently applied, and are changes justified? Are complex models mathematically accurate?</li>
<li><strong>Significant assumptions:</strong> are they reasonable and consistent with each other, with other assumptions in the entity, and with management's plans and ability to carry them out?</li>
<li><strong>Data:</strong> is it relevant and reliable, and has it been appropriately understood or interpreted?</li>
</ul>

<h3>Auditor's point estimate or range</h3>
<ul>
<li>A range must include only amounts supported by sufficient appropriate evidence and evaluated as reasonable — narrow the range until all outcomes in it are reasonable.</li>
<li>If management's estimate is <strong>outside</strong> the range, the misstatement is at least the difference to the <strong>nearest</strong> end of the range.</li>
<li>If the auditor develops a <strong>point estimate</strong>, the misstatement is the difference between the auditor's point estimate and management's.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Management's allowance for credit losses is $400,000. The auditor's range is $340,000 to $390,000. The allowance is overstated by at least 400,000 − 390,000 = <strong>$10,000</strong>. If instead the auditor had a point estimate of $370,000, the misstatement would be <strong>$30,000</strong>.</p></div>

<h2>Management bias</h2>
<p>Individual estimates may each be reasonable while the <strong>pattern</strong> suggests bias. Indicators include:</p>
<ul>
<li>Changes in estimates or methods where there is no change in circumstances.</li>
<li>Significant assumptions that favor management's objectives (for example, meeting earnings targets or covenants).</li>
<li>Every estimate falling at the same end of its reasonable range (all at the most favorable end).</li>
<li>Inconsistency between assumptions used in different estimates.</li>
<li>Selecting a point estimate that indicates a pattern of optimism or pessimism.</li>
</ul>
<p>Possible bias is evaluated in aggregate; indicators of bias do not themselves create misstatements, but may affect the assessment of fraud risk and the overall evaluation of the financial statements.</p>

<h2>Fair value measurements and external information</h2>
<ul>
<li>Fair values based on Level 3 (unobservable) inputs carry the most estimation uncertainty and risk of bias.</li>
<li>When management uses <strong>external information sources</strong> (pricing services, broker quotes), the auditor evaluates their relevance and reliability — SAS No. 144 added guidance on using external pricing information.</li>
<li>The auditor may use an <strong>auditor's specialist</strong> (valuation, actuarial) and must evaluate the specialist's competence, capabilities, and objectivity and the adequacy of their work.</li>
</ul>

<h2>Disclosures and representations</h2>
<ul>
<li>Evaluate whether disclosures about estimation uncertainty are reasonable — especially for significant risks, where disclosures may need to describe the uncertainty and sensitivity of the estimate.</li>
<li>Obtain written representations that the methods, significant assumptions, and data used are appropriate.</li>
<li>Communicate significant matters about estimates to those charged with governance.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Select the most appropriate testing approach for a scenario.</li>
<li>Compute the misstatement from a range or point estimate.</li>
<li>Identify indicators of management bias.</li>
<li>Explain the purpose of the retrospective review.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When management's estimate falls outside the auditor's range, measure the misstatement to the <em>closest</em> end of the range — not the midpoint.</p></div>
`,
  revision: `
<h3>Statement on Auditing Standards (SAS) No. 143</h3>
<ul>
<li>Understand methods, significant assumptions, data, and controls.</li>
<li>Inherent risk factors: estimation uncertainty, complexity, subjectivity.</li>
<li>Retrospective review of prior estimates → identify bias, not second-guess.</li>
</ul>

<h3>Three approaches (one or more)</h3>
<ol>
<li>Events up to the report date (subsequent sales or settlements).</li>
<li>Test how management made the estimate (method, assumptions, data).</li>
<li>Develop an auditor's point estimate or range.</li>
</ol>

<h3>Measuring misstatement</h3>
<ul>
<li>Outside the range → difference to the <strong>nearest end</strong>.</li>
<li>Auditor point estimate → full difference.</li>
<li>Range: only reasonable, supported amounts.</li>
</ul>

<h3>Bias indicators</h3>
<p>Unjustified changes in method · assumptions favoring targets · all estimates at the favorable end · inconsistent assumptions.</p>

<h3>Other</h3>
<p>Level 3 fair values = highest uncertainty. Evaluate specialists and pricing services. Written representations on assumptions.</p>
`,
};
