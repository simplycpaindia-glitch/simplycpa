import type { TopicContent } from "../types";

export const fraudRisk: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>The clarified auditing standards (AU-C) set out the auditor's responsibilities for fraud in AU-C 240 and for noncompliance with laws and regulations in AU-C 250. Both are tested throughout Auditing and Attestation (AUD). You need to know the two types of fraud, the fraud triangle, the procedures required in every audit, and whom to tell when fraud is found.</p>

<h2>Fraud versus error</h2>
<p>The distinguishing factor is <strong>intent</strong>. An error is unintentional; fraud is an intentional act involving deception that results in a misstatement. The auditor does not make legal determinations of whether fraud occurred, but is responsible for obtaining <strong>reasonable assurance</strong> that the financial statements are free of material misstatement, whether caused by fraud or error.</p>
<p>Because fraud involves concealment — forgery, collusion, and management override — the risk of <em>not</em> detecting a material misstatement from fraud is higher than from error, and management fraud is harder to detect than employee fraud.</p>

<h2>Two types of fraud</h2>
<table>
<thead><tr><th>Fraudulent financial reporting</th><th>Misappropriation of assets</th></tr></thead>
<tbody>
<tr><td>Intentional misstatements or omissions to deceive users — usually by management</td><td>Theft of assets — usually by employees, often in small amounts</td></tr>
<tr><td>Fictitious revenue, improper cutoff, channel stuffing, bill-and-hold abuse</td><td><strong>Lapping</strong> receivables, <strong>kiting</strong> checks, fictitious vendors or employees ("ghost" payroll)</td></tr>
<tr><td>Manipulating estimates and reserves ("cookie jar" reserves)</td><td>Stealing inventory or cash, personal use of company assets</td></tr>
<tr><td>Improper capitalization of expenses; omitting liabilities or disclosures</td><td>Paying for goods or services not received</td></tr>
</tbody>
</table>

<h2>The fraud triangle</h2>
<table>
<thead><tr><th>Condition</th><th>Fraudulent financial reporting examples</th><th>Misappropriation examples</th></tr></thead>
<tbody>
<tr><td><strong>Incentive / pressure</strong></td><td>Bonuses tied to earnings, analyst expectations, debt covenants, threats to financial stability</td><td>Personal financial problems, adverse relationships with the employer</td></tr>
<tr><td><strong>Opportunity</strong></td><td>Complex transactions, significant related party transactions, domination of management by one person, ineffective board oversight</td><td>Large amounts of cash, small high-value inventory, poor segregation of duties, weak physical safeguards</td></tr>
<tr><td><strong>Attitude / rationalization</strong></td><td>Aggressive accounting, disregard for controls, history of violations, strained relationship with the auditor</td><td>"I'm underpaid", tolerance of petty theft, disregard for monitoring</td></tr>
</tbody>
</table>

<h2>Procedures required in every audit</h2>
<ol>
<li><strong>Engagement team discussion</strong> ("brainstorming") about how and where the financial statements might be susceptible to material misstatement from fraud. The engagement partner and key members participate, with an attitude of professional skepticism, setting aside beliefs about management's honesty. It can happen at the same time as the discussion of susceptibility to error.</li>
<li><strong>Inquiries</strong> of management, those charged with governance, internal audit, and others (operating personnel, in-house legal counsel, the ethics officer) about knowledge of fraud, suspected fraud, and allegations.</li>
<li><strong>Analytical procedures</strong> during planning, including procedures on <strong>revenue</strong>, to identify unusual relationships.</li>
<li>Consider <strong>fraud risk factors</strong> and other information.</li>
<li>Identify and assess the risks of material misstatement due to fraud — treating them as <strong>significant risks</strong>.</li>
</ol>

<h3>Two presumed fraud risks</h3>
<ul>
<li><strong>Improper revenue recognition</strong> — presumed; the auditor may rebut the presumption (for example, simple revenue from a single rental property) and must document why.</li>
<li><strong>Management override of controls</strong> — present in all entities and <strong>can never be rebutted</strong>.</li>
</ul>

<h3>Responses to management override (required every audit)</h3>
<ul>
<li><strong>Test journal entries and other adjustments</strong> — understand the process, inquire of people involved about inappropriate activity, select entries at period end, and consider the need to test throughout the period. High-risk entries: made to unrelated or seldom-used accounts, by people who don't usually make entries, at period end or post-closing, with little explanation, containing round numbers or consistent ending digits.</li>
<li><strong>Review accounting estimates for bias</strong>, including a <strong>retrospective review</strong> of prior-year significant estimates.</li>
<li>Evaluate the <strong>business rationale for significant unusual transactions</strong>.</li>
</ul>

<h3>Overall and assertion-level responses</h3>
<ul>
<li>Assign more experienced personnel and increase supervision.</li>
<li>Evaluate management's selection and application of accounting policies.</li>
<li>Incorporate <strong>unpredictability</strong> — surprise inventory counts, testing locations or accounts not normally tested, changing sampling methods.</li>
<li>Change the nature, timing, and extent of procedures — for example, confirming contract terms with customers, performing procedures at year-end instead of interim.</li>
</ul>

<h2>Evaluating evidence and misstatements</h2>
<ul>
<li>If a misstatement may be fraud, the auditor evaluates its implications even if immaterial — especially if senior management is involved, since it is unlikely to be isolated.</li>
<li>Reevaluate the assessment of fraud risk and the reliability of management's representations.</li>
<li>If the auditor concludes the statements are materially misstated due to fraud, or can't conclude, consider the effect on the opinion and whether to <strong>withdraw</strong>.</li>
</ul>

<h2>Communication</h2>
<ul>
<li>Any evidence of fraud (even inconsequential) → an appropriate level of <strong>management</strong> (at least one level above those involved).</li>
<li>Fraud involving <strong>senior management</strong>, or fraud (by anyone) causing a material misstatement → directly to <strong>those charged with governance</strong>.</li>
<li>Disclosure to parties outside the entity is generally prohibited by confidentiality, except: to comply with legal or regulatory requirements, to a successor auditor (with client permission), in response to a subpoena, or to a funding agency under government audit requirements.</li>
</ul>

<h2>Noncompliance with laws and regulations (AU-C 250)</h2>
<table>
<thead><tr><th>Type of law</th><th>Auditor's responsibility</th></tr></thead>
<tbody>
<tr><td>Direct effect on material amounts and disclosures (tax laws, pension laws)</td><td>Obtain sufficient appropriate evidence of compliance</td></tr>
<tr><td>Other laws fundamental to operations (licensing, environmental, occupational safety)</td><td>Limited procedures: inquiry of management and inspection of correspondence with regulators</td></tr>
</tbody>
</table>
<p>If noncompliance is suspected, obtain an understanding of it, discuss with management and those charged with governance, and consider legal advice and the effect on the opinion.</p>

<h2>Documentation</h2>
<p>The brainstorming discussion, identified fraud risks and responses, the reasons for rebutting the revenue presumption, results of procedures, and fraud communications.</p>

<h2>How it is tested</h2>
<ul>
<li>Classify a scheme as fraudulent reporting or misappropriation.</li>
<li>Match a scenario to the fraud triangle.</li>
<li>Identify procedures required in every audit.</li>
<li>Decide whom to communicate fraud to.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Revenue recognition fraud risk <em>can</em> be rebutted (with documentation). Management override <em>cannot</em>. Questions often reverse these to test you.</p></div>
`,
  revision: `
<h3>Basics</h3>
<ul>
<li>Fraud = <strong>intent</strong>; error = unintentional. Reasonable assurance, not detection of all fraud.</li>
<li>Types: fraudulent financial reporting (management) vs misappropriation (lapping, kiting, ghost employees).</li>
<li>Fraud triangle: incentive/pressure, opportunity, attitude/rationalization.</li>
</ul>

<h3>Required every audit</h3>
<ol>
<li>Team discussion (brainstorming) with skepticism.</li>
<li>Inquiries of management, those charged with governance, internal audit, others.</li>
<li>Analytical procedures, including on revenue.</li>
<li>Presumed risks: revenue (rebuttable) and management override (never rebuttable).</li>
<li>Override responses: <strong>journal entry testing</strong>, retrospective review of estimates, rationale for unusual transactions.</li>
</ol>

<h3>Responses</h3>
<p>Experienced staff · more supervision · <strong>unpredictability</strong> · year-end timing · more persuasive evidence.</p>

<h3>Communication</h3>
<ul>
<li>Any fraud → management one level above.</li>
<li>Senior management fraud or material fraud → those charged with governance.</li>
<li>Outside parties only for laws, successor auditor, subpoena, government funding agency.</li>
</ul>

<h3>Laws and regulations</h3>
<p>Direct-effect laws → obtain evidence of compliance. Other laws → inquiry and inspection of regulator correspondence.</p>
`,
};
