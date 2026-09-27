import type { TopicContent } from "../types";

export const governmentalFunds: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>State and Local Governments is Area III of Business Analysis and Reporting (BAR), 10–20% of the section. It goes deeper than Financial Accounting and Reporting (FAR): journal entries in governmental funds under the modified accrual basis, budgetary accounting, interfund activity, and the special rules set by the Governmental Accounting Standards Board (GASB) for capital assets, debt, leases, and subscription-based technology arrangements.</p>

<h2>Budgetary entries</h2>
<table>
<thead><tr><th>Event</th><th>Entry (General Fund)</th></tr></thead>
<tbody>
<tr><td>Adopting the budget</td><td>Debit estimated revenues and estimated other financing sources; credit appropriations and estimated other financing uses; the difference to budgetary fund balance</td></tr>
<tr><td>Issuing a purchase order</td><td>Debit encumbrances; credit budgetary fund balance — reserved for encumbrances</td></tr>
<tr><td>Receiving the goods (reverse the encumbrance, record the actual)</td><td>Reverse the encumbrance entry for the estimated amount; debit expenditures, credit vouchers payable for the actual amount</td></tr>
<tr><td>Year-end closing</td><td>Reverse the budget entries; close actual revenues and expenditures to fund balance</td></tr>
</tbody>
</table>
<p>Outstanding encumbrances at year-end are not expenditures or liabilities; they are reported as <strong>restricted, committed, or assigned fund balance</strong>, depending on the constraint.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A city issues a $40,000 purchase order for equipment; the invoice later arrives for $41,000.<br>Order: debit encumbrances $40,000, credit budgetary fund balance — reserved for encumbrances $40,000.<br>Delivery: reverse that $40,000 entry; debit expenditures — capital outlay $41,000, credit vouchers payable $41,000. No capital asset is recorded in the General Fund.</p></div>

<h2>Revenue entries</h2>
<h3>Property taxes (imposed nonexchange revenue)</h3>
<ul>
<li>Levy: debit property taxes receivable (current); credit allowance for uncollectible taxes and revenues. The portion not collected within the period or 60 days after year-end is a <strong>deferred inflow of resources</strong>, not revenue.</li>
<li>Taxes collected in advance for the next year: a deferred inflow.</li>
<li>Delinquent taxes: reclassify to "delinquent" receivable with its allowance.</li>
</ul>

<h3>Grants (voluntary or government-mandated nonexchange)</h3>
<p>Recognize when all eligibility requirements are met — including time requirements and, for reimbursement grants, incurring allowable costs. Cash received earlier is a liability (unearned revenue). In governmental funds, revenue also requires availability.</p>

<h3>Derived tax revenues (sales and income taxes)</h3>
<p>Recognize when the underlying exchange transaction occurs (and, in governmental funds, when available).</p>

<h2>Expenditure recognition</h2>
<ul>
<li>Most expenditures: when the liability is incurred.</li>
<li><strong>Debt service</strong> (general long-term debt principal and interest): when <strong>due</strong> — a debt service fund may accrue if resources are already provided and payment is due early in the next year.</li>
<li><strong>Supplies and prepaids:</strong> either the <strong>purchases method</strong> (expenditure on purchase) or the <strong>consumption method</strong> (expenditure when used); material inventories are reported with nonspendable fund balance.</li>
<li>Compensated absences, claims and judgments, pensions, and other postemployment benefits: expenditure when due and payable from current resources; the long-term portion appears only in the government-wide statements.</li>
</ul>

<h2>Capital projects and debt service funds</h2>
<table>
<thead><tr><th>Transaction</th><th>Governmental fund entry</th></tr></thead>
<tbody>
<tr><td>Issue bonds at a premium to build a library</td><td>Capital projects fund: debit cash; credit other financing sources — bond proceeds (face) and other financing sources — premium. No liability recorded.</td></tr>
<tr><td>Transfer the premium to the debt service fund</td><td>Capital projects: debit other financing uses — transfers out. Debt service: credit other financing sources — transfers in.</td></tr>
<tr><td>Pay construction costs</td><td>Capital projects: debit expenditures — capital outlay</td></tr>
<tr><td>Principal and interest come due</td><td>Debt service: debit expenditures — principal and interest; credit matured bonds and interest payable</td></tr>
</tbody>
</table>
<p>The building and the bond liability are recorded only in the <strong>government-wide</strong> statements (governmental activities).</p>

<h2>Interfund activity</h2>
<table>
<thead><tr><th>Type</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Interfund loans (to be repaid)</td><td>Due from / due to other funds — balance sheet only</td></tr>
<tr><td>Interfund services provided and used (for example, the General Fund buys water from the enterprise fund at normal rates)</td><td>Revenue in the seller, expenditure or expense in the buyer</td></tr>
<tr><td>Interfund transfers (no repayment, no exchange)</td><td>Other financing sources (transfers in) and uses (transfers out) in governmental funds; transfers in proprietary funds after nonoperating items</td></tr>
<tr><td>Reimbursements</td><td>Reduce the expenditure in the fund initially charged; record the expenditure in the correct fund</td></tr>
</tbody>
</table>

<h2>Leases and subscription-based technology</h2>
<ul>
<li><strong>GASB Statement No. 87 (leases):</strong> a single model — lessees recognize a lease liability and an intangible right-to-use asset in the government-wide statements. In a <strong>governmental fund</strong>, the lessee records an <strong>expenditure</strong> (capital outlay) and an <strong>other financing source</strong> at commencement for the present value of payments. Short-term leases (12 months or less) are expensed.</li>
<li><strong>GASB Statement No. 96:</strong> subscription-based information technology arrangements (SBITAs) — for example, cloud software — follow the same approach: a subscription liability and an intangible right-to-use asset.</li>
<li>Lessors recognize a lease receivable and a <strong>deferred inflow of resources</strong>, recognizing revenue over the lease term.</li>
</ul>

<h2>Proprietary fund reminders</h2>
<ul>
<li>Enterprise and internal service funds use full accrual — capital assets, depreciation, and long-term debt are recorded in the fund.</li>
<li>The statement of cash flows uses the <strong>direct method</strong> with four categories: operating; noncapital financing; capital and related financing; and investing. Interest paid on capital debt is capital and related financing; interest received is investing.</li>
<li>An activity <strong>must</strong> be an enterprise fund if it is financed with debt secured solely by fees, laws require cost recovery through fees, or pricing policies recover costs.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Record budget, encumbrance, revenue, and expenditure entries.</li>
<li>Account for bond issuance and debt service across funds.</li>
<li>Classify interfund transactions.</li>
<li>Apply GASB 87 and GASB 96 in governmental funds.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> In governmental funds, anything that brings in long-term financing — bond proceeds, lease inception, subscription inception — is an <em>other financing source</em>, never a liability or revenue.</p></div>
`,
  revision: `
<h3>Budgetary entries</h3>
<ul>
<li>Budget: estimated revenues / appropriations.</li>
<li>Purchase order: debit encumbrances; reverse on receipt; record actual expenditure.</li>
<li>Year-end open encumbrances → restricted, committed, or assigned fund balance.</li>
</ul>

<h3>Revenue (modified accrual)</h3>
<ul>
<li>Property taxes: levy year; available = collected within 60 days; rest → deferred inflow.</li>
<li>Grants: when eligibility requirements met (reimbursement: when costs incurred).</li>
<li>Sales and income taxes: when the underlying transaction occurs.</li>
</ul>

<h3>Expenditures</h3>
<p>When incurred; debt principal and interest when <strong>due</strong>; supplies: purchases or consumption method.</p>

<h3>Capital projects and debt service</h3>
<p>Bond proceeds = other financing source; capital outlay = expenditure; transfers = other financing sources and uses.</p>

<h3>Interfund</h3>
<p>Loans → due to/from · services → revenue/expenditure · transfers → financing sources/uses · reimbursements → move the expenditure.</p>

<h3>Governmental Accounting Standards Board (GASB) 87 and 96</h3>
<p>Leases and subscription-based information technology arrangements (SBITAs): governmental funds record expenditure + other financing source at inception.</p>

<h3>Proprietary cash flows</h3>
<p>Direct method; four categories.</p>
`,
};
