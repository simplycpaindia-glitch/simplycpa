import type { TopicContent } from "../types";

export const notesSubsequentEventsGoingConcern: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>The notes are an integral part of the financial statements, and several disclosure topics are tested repeatedly in Financial Accounting and Reporting (FAR): subsequent events (Accounting Standards Codification (ASC) 855), going concern (ASC 205-40), related parties (ASC 850), accounting policies (ASC 235), and risks and uncertainties (ASC 275). The same concepts reappear from the auditor's side in Auditing and Attestation (AUD), so learning them well pays twice.</p>

<h2>Summary of significant accounting policies</h2>
<p>ASC 235 requires a description of all significant accounting policies, usually as the first note. It should cover choices among acceptable alternatives, industry-specific methods, and unusual applications. Examples:</p>
<ul>
<li>Basis of consolidation and revenue recognition methods</li>
<li>Inventory cost-flow assumption (first-in, first-out (FIFO), last-in, first-out (LIFO), weighted average)</li>
<li>Depreciation methods and the policy for determining cash equivalents</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> The policy note describes <em>methods</em>, not numbers. The composition of inventory, depreciation expense, or the maturity schedule of debt are detailed disclosures elsewhere — they are not part of the accounting policies note.</p></div>

<h2>Subsequent events</h2>
<p>Subsequent events occur after the balance sheet date but before the financial statements are issued or available to be issued.</p>
<table>
<thead><tr><th></th><th>Recognized (Type I)</th><th>Nonrecognized (Type II)</th></tr></thead>
<tbody>
<tr><td>Condition</td><td>Existed <strong>at</strong> the balance sheet date</td><td>Arose <strong>after</strong> the balance sheet date</td></tr>
<tr><td>Treatment</td><td>Adjust the financial statements</td><td>Disclose if material (nature and estimate of effect); do not adjust</td></tr>
<tr><td>Examples</td><td>Settlement of a lawsuit for an event before year-end; customer bankruptcy caused by deterioration that existed at year-end; sale of inventory below cost confirming a year-end decline</td><td>Fire or flood after year-end; issuing stock or bonds; business acquisition; lawsuit arising from an event after year-end; customer bankruptcy caused by a post-year-end catastrophe</td></tr>
</tbody>
</table>

<h3>Evaluation date</h3>
<ul>
<li><strong>Securities and Exchange Commission (SEC) filers</strong> evaluate subsequent events through the date the statements are <strong>issued</strong> and do not disclose that date.</li>
<li><strong>All other entities</strong> evaluate through the date the statements are <strong>available to be issued</strong> and must disclose that date.</li>
<li>Reissued statements: nonrecognized events after the original issuance are not recognized unless required by Generally Accepted Accounting Principles (GAAP) or regulation.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> On January 20, a major customer declares bankruptcy. If the customer had been in severe financial difficulty for months before December 31, the condition existed at year-end — increase the allowance for credit losses (recognized). If the bankruptcy was caused by a flood on January 10 that destroyed the customer's only plant, the condition arose after year-end — disclose only (nonrecognized).</p></div>

<h2>Going concern (ASC 205-40)</h2>
<p>Management — not the auditor — must evaluate going concern at every annual and interim reporting period.</p>
<ul>
<li><strong>Look-forward period:</strong> one year after the date the financial statements are issued (or available to be issued).</li>
<li><strong>Threshold:</strong> substantial doubt exists when conditions and events, considered in the aggregate, indicate it is <strong>probable</strong> the entity will be unable to meet its obligations as they come due within that period.</li>
<li><strong>Management's plans:</strong> considered only if it is probable they will be effectively implemented <strong>and</strong> probable they will mitigate the conditions.</li>
</ul>

<table>
<thead><tr><th>Outcome</th><th>Required disclosure</th></tr></thead>
<tbody>
<tr><td>No substantial doubt</td><td>None required</td></tr>
<tr><td>Substantial doubt <strong>alleviated</strong> by plans</td><td>Principal conditions, management's evaluation, and the plans that alleviated the doubt</td></tr>
<tr><td>Substantial doubt <strong>not alleviated</strong></td><td>Explicit statement that there is substantial doubt about the entity's ability to continue as a going concern within one year, plus the conditions and management's plans</td></tr>
</tbody>
</table>

<p>Indicators include recurring operating losses, working capital deficiencies, negative operating cash flow, loan defaults, denial of trade credit, loss of a key customer or supplier, and legal proceedings. If liquidation becomes <strong>imminent</strong>, the entity switches to the <strong>liquidation basis of accounting</strong> (ASC 205-30), measuring assets at expected cash proceeds.</p>

<h2>Related party disclosures (ASC 850)</h2>
<p>Related parties include affiliates, equity-method investees, principal owners (more than 10% of voting interests), management, their immediate families, and trusts for employee benefits managed by management. For material transactions disclose:</p>
<ul>
<li>The nature of the relationship</li>
<li>A description of the transactions and the dollar amounts for each period presented</li>
<li>Amounts due to or from related parties and the terms of settlement</li>
</ul>
<p>A statement that transactions were on terms equivalent to arm's-length transactions may be made <strong>only if it can be substantiated</strong>. Compensation arrangements, expense allowances, and ordinary-course items do not need disclosure, and transactions eliminated in consolidated statements need not be disclosed in those statements.</p>

<h2>Risks and uncertainties (ASC 275)</h2>
<p>Disclose the nature of operations, the use of estimates, significant estimates that are reasonably possible to change materially in the near term (within one year), and <strong>current vulnerabilities due to concentrations</strong> (a single customer, supplier, lender, or geographic area) when a severe impact is at least reasonably possible.</p>

<h2>How it is tested</h2>
<ul>
<li>Classify a subsequent event as recognized or nonrecognized.</li>
<li>Determine the evaluation date and whether it must be disclosed.</li>
<li>Decide whether substantial doubt exists and what must be disclosed.</li>
<li>Identify which related party information is required.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> For subsequent events, ignore when the event was <em>discovered</em> and ask when the underlying <em>condition</em> arose. If it existed at the balance sheet date, adjust; if it arose afterward, disclose.</p></div>
`,
  revision: `
<h3>Subsequent events</h3>
<ul>
<li><strong>Recognized:</strong> condition existed at the balance sheet date → adjust (lawsuit settled for a pre-year-end event; customer bankrupt from existing deterioration).</li>
<li><strong>Nonrecognized:</strong> condition arose after → disclose only (fire, stock or bond issue, acquisition).</li>
<li>Securities and Exchange Commission (SEC) filers: through the <strong>issued</strong> date, not disclosed. Others: through the <strong>available-to-be-issued</strong> date, disclosed.</li>
</ul>

<h3>Going concern</h3>
<ul>
<li>Management evaluates, every period.</li>
<li>Period: <strong>1 year after issuance</strong> (or available-to-be-issued) date.</li>
<li>Threshold: <strong>probable</strong> the entity can't meet obligations.</li>
<li>Plans count only if probable of implementation <strong>and</strong> probable of mitigating.</li>
<li>Doubt remains → state "substantial doubt" explicitly. Alleviated → disclose conditions and plans.</li>
<li>Liquidation imminent → liquidation basis.</li>
</ul>

<h3>Related parties</h3>
<p>Disclose relationship, transactions, amounts, and balances due. "Arm's-length" claims only if substantiated.</p>

<h3>Accounting policies note</h3>
<p>Methods, not amounts (inventory method, depreciation method, cash equivalents policy).</p>

<h3>Concentrations</h3>
<p>Disclose when a severe near-term impact is at least reasonably possible.</p>
`,
};
