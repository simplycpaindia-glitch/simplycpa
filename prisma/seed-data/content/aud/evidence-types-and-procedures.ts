import type { TopicContent } from "../types";

export const evidenceProcedures: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Audit evidence is the information the auditor uses to reach conclusions. Statement on Auditing Standards (SAS) No. 142 updated the evidence standard to focus on the <strong>attributes of information</strong> — relevance and reliability — whatever its source, including data used in automated tools. Auditing and Attestation (AUD) Area III tests procedure types, direction of testing, confirmations, inventory observation, and cycle-specific procedures.</p>

<h2>Sufficient appropriate evidence</h2>
<ul>
<li><strong>Sufficiency</strong> is the quantity of evidence, driven by the assessed risk and the quality of the evidence.</li>
<li><strong>Appropriateness</strong> is the quality: <strong>relevance</strong> (relates to the assertion being tested) and <strong>reliability</strong> (accuracy, completeness, authenticity, and susceptibility to bias).</li>
<li>More evidence cannot compensate for poor-quality evidence.</li>
<li>The auditor considers information that <strong>contradicts</strong> management's assertions as well as corroborating information, and applies professional skepticism throughout.</li>
</ul>

<h3>Reliability hierarchy</h3>
<table>
<thead><tr><th>More reliable</th><th>Less reliable</th></tr></thead>
<tbody>
<tr><td>From independent sources outside the entity</td><td>From inside the entity</td></tr>
<tr><td>Obtained directly by the auditor (observation, recalculation)</td><td>Obtained indirectly or by inference (inquiry)</td></tr>
<tr><td>Generated under effective internal controls</td><td>Generated under weak controls</td></tr>
<tr><td>Documentary (paper or electronic)</td><td>Oral</td></tr>
<tr><td>Original documents</td><td>Photocopies, scans, or faxes</td></tr>
</tbody>
</table>
<p>When using information produced by the entity (IPE), the auditor must evaluate whether it is <strong>sufficiently precise and detailed</strong> and obtain evidence about its <strong>accuracy and completeness</strong>.</p>

<h2>Types of audit procedures</h2>
<table>
<thead><tr><th>Procedure</th><th>Description</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Inspection of records or documents</td><td>Examining internal or external records</td><td>Reading contracts, vouching invoices</td></tr>
<tr><td>Inspection of tangible assets</td><td>Physical examination</td><td>Examining equipment additions</td></tr>
<tr><td>Observation</td><td>Watching a process being performed</td><td>Observing the inventory count</td></tr>
<tr><td>Inquiry</td><td>Seeking information from knowledgeable people</td><td>Asking about obsolete inventory — <strong>never sufficient alone</strong></td></tr>
<tr><td>External confirmation</td><td>A direct written response from a third party</td><td>Bank and receivable confirmations</td></tr>
<tr><td>Recalculation</td><td>Checking mathematical accuracy</td><td>Recomputing depreciation</td></tr>
<tr><td>Reperformance</td><td>Independently executing a control</td><td>Redoing a bank reconciliation</td></tr>
<tr><td>Analytical procedures</td><td>Evaluating plausible relationships</td><td>Comparing gross margin to expectations</td></tr>
</tbody>
</table>

<h2>Direction of testing</h2>
<table>
<thead><tr><th>Direction</th><th>From → To</th><th>Assertion tested</th></tr></thead>
<tbody>
<tr><td><strong>Vouching</strong></td><td>Recorded entry → supporting document</td><td><strong>Existence / occurrence</strong> (was the recorded item real?)</td></tr>
<tr><td><strong>Tracing</strong></td><td>Source document → recorded entry</td><td><strong>Completeness</strong> (was everything recorded?)</td></tr>
</tbody>
</table>

<h2>External confirmations</h2>
<ul>
<li>The auditor must <strong>maintain control</strong> over requests and responses — selecting the parties, designing the request, and sending and receiving responses directly.</li>
<li><strong>Positive confirmations</strong> ask for a response in all cases (blank form — asks the recipient to fill in the balance — is more reliable than one that shows the amount). A non-response requires <strong>alternative procedures</strong> (for receivables: examine subsequent cash receipts, shipping documents, and sales invoices).</li>
<li><strong>Negative confirmations</strong> ask for a response only if the recipient disagrees. They may be the <strong>sole</strong> substantive procedure only if: risk of material misstatement is low and controls over the assertion are effective; the population consists of a large number of small, homogeneous balances; a very low exception rate is expected; and there is no reason to believe recipients will disregard requests.</li>
<li>Consider reliability issues: responses by email or through intermediaries, restrictive disclaimers, and indications of fraud.</li>
<li><strong>Management refuses</strong> to allow a confirmation: inquire about the reasons, evaluate their validity and the implications for fraud risk, and perform alternative procedures. If unreasonable, communicate with those charged with governance and consider a scope limitation.</li>
<li><strong>Accounts receivable</strong> should be confirmed unless they are immaterial, confirmation would be ineffective, or the risk of material misstatement is low and other substantive procedures address it. Document the reason if not confirmed.</li>
</ul>

<h2>Inventory</h2>
<ul>
<li>When inventory is material, the auditor must <strong>attend the physical count</strong> (unless impracticable) to evaluate management's instructions, observe procedures, inspect inventory, and perform <strong>test counts</strong>.</li>
<li>Test counts in <strong>both directions</strong>: from the count tags to the floor (existence) and from the floor to the tags (completeness).</li>
<li>Obtain <strong>cutoff</strong> information (last receiving and shipping documents).</li>
<li>If the count is not at year-end, test the roll-forward of changes.</li>
<li>If attendance is impracticable, perform alternative procedures (for example, inspecting documentation of subsequent sales); if none are possible, modify the opinion for a scope limitation.</li>
<li>Inventory held by third parties: confirm and/or inspect, and consider the third party's integrity.</li>
</ul>

<h2>Litigation, claims, and assessments</h2>
<ul>
<li>Inquire of management, review minutes and legal expense accounts, and send a <strong>letter of audit inquiry</strong> to the entity's external lawyers (requested by management, returned directly to the auditor).</li>
<li>A lawyer's refusal to respond is a <strong>scope limitation</strong>, possibly leading to a qualified opinion or disclaimer.</li>
</ul>

<h2>Procedures by cycle — quick reference</h2>
<table>
<thead><tr><th>Account</th><th>Key procedures</th></tr></thead>
<tbody>
<tr><td>Cash</td><td>Bank confirmation, bank reconciliation, cutoff bank statement, bank transfer schedule (to detect kiting)</td></tr>
<tr><td>Receivables and revenue</td><td>Confirmation, aging and allowance review, sales cutoff testing, subsequent cash receipts, review of credit memos after year-end</td></tr>
<tr><td>Inventory</td><td>Observation, test counts, cutoff, pricing tests, lower-of-cost-or-net-realizable-value testing</td></tr>
<tr><td>Property, plant, and equipment</td><td>Vouch additions, inspect assets, review repairs and maintenance for items that should be capitalized, recalculate depreciation</td></tr>
<tr><td>Payables</td><td><strong>Search for unrecorded liabilities</strong>: examine cash disbursements and unpaid invoices after year-end; vendor statement reconciliations</td></tr>
<tr><td>Debt and equity</td><td>Confirm with lenders and the transfer agent, read agreements and covenants, review board minutes</td></tr>
</tbody>
</table>

<h2>Audit documentation</h2>
<ul>
<li>Documentation must allow an <strong>experienced auditor</strong> with no prior connection to the engagement to understand the procedures, evidence, and conclusions.</li>
<li>Record who performed and reviewed the work and when, and identifying characteristics of items tested.</li>
<li>Assemble the final file within <strong>60 days</strong> after the report release date; retain for at least <strong>5 years</strong> (issuers under Public Company Accounting Oversight Board (PCAOB) standards: assemble within 45 days, retain 7 years).</li>
<li>Documentation belongs to the auditor.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Rank evidence by reliability.</li>
<li>Match a procedure to the assertion it tests (vouching vs tracing).</li>
<li>Apply confirmation rules, including negative confirmations and non-responses.</li>
<li>Choose the best procedure for a specific account risk.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Completeness of liabilities is tested by looking <em>after</em> year-end — at payments and unpaid invoices — not by confirming the recorded balances, which only tests existence.</p></div>
`,
  revision: `
<h3>Evidence quality</h3>
<ul>
<li>Sufficient (quantity) + appropriate (relevant + reliable).</li>
<li>External &gt; internal; auditor-obtained &gt; inquiry; documentary &gt; oral; originals &gt; copies.</li>
<li>Information produced by the entity: test accuracy and completeness.</li>
</ul>

<h3>Direction</h3>
<p>Vouching (record → document) = existence/occurrence. Tracing (document → record) = completeness.</p>

<h3>Confirmations</h3>
<ul>
<li>Auditor controls sending and receiving.</li>
<li>Positive non-response → alternative procedures (subsequent receipts).</li>
<li>Negative alone only if: low risk and effective controls, many small homogeneous balances, few exceptions expected.</li>
<li>Management refuses → inquire, evaluate, alternative procedures; else scope limitation.</li>
</ul>

<h3>Inventory</h3>
<p>Attend count if material; test counts both ways; cutoff; roll forward if not at year-end.</p>

<h3>Must-know procedures</h3>
<ul>
<li>Unrecorded liabilities: disbursements after year-end.</li>
<li>Kiting: bank transfer schedule.</li>
<li>Lawyer won't respond → scope limitation.</li>
</ul>

<h3>Documentation</h3>
<p>Experienced auditor standard; assemble within 60 days; keep 5 years (issuers: 45 days, 7 years).</p>
`,
};
