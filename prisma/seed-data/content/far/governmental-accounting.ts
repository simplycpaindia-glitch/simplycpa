import type { TopicContent } from "../types";

export const governmentalAccounting: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>State and local governments follow standards issued by the Governmental Accounting Standards Board (GASB), not the Financial Accounting Standards Board (FASB). Financial Accounting and Reporting (FAR) tests the reporting model, fund types, measurement focus and basis of accounting, and common transactions such as property taxes and budgets. Deeper coverage — reconciliations, the Annual Comprehensive Financial Report (ACFR), and fund-level journal entries — also appears in Business Analysis and Reporting (BAR).</p>

<h2>The reporting model</h2>
<table>
<thead><tr><th>Level</th><th>Statements</th><th>Measurement focus / basis</th></tr></thead>
<tbody>
<tr><td>Government-wide</td><td>Statement of net position; statement of activities</td><td>Economic resources / <strong>full accrual</strong></td></tr>
<tr><td>Governmental funds</td><td>Balance sheet; statement of revenues, expenditures, and changes in fund balances</td><td>Current financial resources / <strong>modified accrual</strong></td></tr>
<tr><td>Proprietary funds</td><td>Statement of net position; statement of revenues, expenses, and changes in net position; statement of cash flows (direct method)</td><td>Economic resources / full accrual</td></tr>
<tr><td>Fiduciary funds</td><td>Statement of fiduciary net position; statement of changes in fiduciary net position</td><td>Economic resources / full accrual</td></tr>
</tbody>
</table>
<p>Government-wide statements report <strong>governmental activities</strong> and <strong>business-type activities</strong> in separate columns, with discretely presented component units. <strong>Fiduciary activities are excluded</strong> from government-wide statements.</p>

<h2>The 11 fund types</h2>
<table>
<thead><tr><th>Category</th><th>Funds</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td rowspan="5">Governmental (5)</td><td>General</td><td>Everything not required to be reported elsewhere — always a major fund, only one</td></tr>
<tr><td>Special revenue</td><td>Restricted or committed revenue sources for specific purposes (for example, a gas tax for roads)</td></tr>
<tr><td>Capital projects</td><td>Acquiring or building major capital facilities</td></tr>
<tr><td>Debt service</td><td>Accumulating resources for principal and interest on general long-term debt</td></tr>
<tr><td>Permanent</td><td>Resources where only earnings may be used for the government's own programs (for example, a cemetery perpetual-care fund)</td></tr>
<tr><td rowspan="2">Proprietary (2)</td><td>Enterprise</td><td>Services to the public for a fee (water utility, airport, transit)</td></tr>
<tr><td>Internal service</td><td>Services to other departments on a cost-reimbursement basis (motor pool, central information technology) — reported with governmental activities in government-wide statements</td></tr>
<tr><td rowspan="4">Fiduciary (4)</td><td>Pension (and other employee benefit) trust</td><td>Resources held for employees' pensions and other postemployment benefits</td></tr>
<tr><td>Investment trust</td><td>External portion of investment pools</td></tr>
<tr><td>Private-purpose trust</td><td>Trust arrangements benefiting individuals, private organizations, or other governments</td></tr>
<tr><td>Custodial</td><td>Other fiduciary activities not held in a trust (taxes collected for other governments)</td></tr>
</tbody>
</table>

<h2>Modified accrual — governmental funds</h2>
<ul>
<li><strong>Revenues</strong> are recognized when <strong>measurable and available</strong> — collected within the period or soon enough afterward to pay current-period liabilities. For property taxes, "soon enough" means within <strong>60 days</strong> after year-end.</li>
<li><strong>Expenditures</strong> (not expenses) are recognized when the liability is incurred. Exceptions: general long-term debt principal and interest are recognized when <strong>due</strong>; compensated absences, claims, and judgments when due and payable from current resources.</li>
<li>Capital outlays are expenditures — no capital assets or depreciation in the fund statements.</li>
<li>Bond proceeds are <strong>other financing sources</strong>; transfers between funds are other financing sources or uses.</li>
</ul>

<h3>Property taxes</h3>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A city levies $1,000,000 of property taxes for the current year and expects 2% to be uncollectible. It collects $950,000 during the year and $20,000 within 60 days after year-end.<br>Government-wide (accrual) revenue = 1,000,000 × 98% = <strong>$980,000</strong>.<br>General Fund (modified accrual) revenue = 950,000 + 20,000 = <strong>$970,000</strong>; the remaining $10,000 is a deferred inflow of resources.</p></div>

<h3>Nonexchange revenues</h3>
<table>
<thead><tr><th>Type</th><th>Examples</th><th>Recognition</th></tr></thead>
<tbody>
<tr><td>Derived tax revenues</td><td>Sales and income taxes</td><td>When the underlying exchange occurs</td></tr>
<tr><td>Imposed nonexchange revenues</td><td>Property taxes, fines</td><td>Property taxes: in the period for which levied</td></tr>
<tr><td>Government-mandated and voluntary nonexchange</td><td>Grants, donations</td><td>When all eligibility requirements, including time requirements, are met</td></tr>
</tbody>
</table>

<h2>Budgets and encumbrances</h2>
<ul>
<li>Budgets are recorded in governmental funds: estimated revenues (debit) and appropriations (credit), with the difference to budgetary fund balance.</li>
<li>An <strong>encumbrance</strong> is recorded when a purchase order is issued (debit encumbrances, credit budgetary fund balance reserved for encumbrances); it is reversed when the goods arrive and the actual expenditure is recorded.</li>
<li>A <strong>budgetary comparison schedule</strong> (original budget, final budget, actual) for the General Fund and major special revenue funds is required supplementary information (RSI).</li>
</ul>

<h2>Fund balance classifications (governmental funds)</h2>
<table>
<thead><tr><th>Classification</th><th>Constraint</th></tr></thead>
<tbody>
<tr><td>Nonspendable</td><td>Not in spendable form (inventory, prepaids) or legally required to be kept intact (permanent fund principal)</td></tr>
<tr><td>Restricted</td><td>Externally imposed (creditors, grantors, laws) or by enabling legislation</td></tr>
<tr><td>Committed</td><td>Formal action of the highest level of decision-making authority</td></tr>
<tr><td>Assigned</td><td>Intended use set by the governing body or a delegated official</td></tr>
<tr><td>Unassigned</td><td>Residual — only the General Fund can report a positive amount</td></tr>
</tbody>
</table>

<h2>Government-wide net position</h2>
<p>Net position = assets + deferred outflows of resources − liabilities − deferred inflows of resources, reported as <strong>net investment in capital assets</strong>, <strong>restricted</strong>, and <strong>unrestricted</strong>. Capital assets, including infrastructure, are reported and depreciated (or the modified approach for eligible infrastructure).</p>

<h2>Required supplementary information</h2>
<ul>
<li><strong>Management's discussion and analysis (MD&amp;A)</strong> — before the basic statements.</li>
<li>Budgetary comparison schedules, pension and other postemployment benefit schedules, and infrastructure information under the modified approach.</li>
</ul>
<p>RSI is <strong>not</strong> part of the basic financial statements.</p>

<h2>Recent GASB statements</h2>
<ul>
<li><strong>GASB Statement No. 101</strong> (compensated absences) — a liability for leave that accumulates, is attributable to services already rendered, and is more likely than not to be used or paid.</li>
<li><strong>GASB Statement No. 103</strong> (financial reporting model improvements), effective for fiscal years beginning after June 15, 2025 — sharpens MD&amp;A, defines operating versus nonoperating items for proprietary funds, requires separate presentation of unusual or infrequent items, and requires budgetary comparison information as RSI.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Identify the right fund for a transaction.</li>
<li>Compute revenue under modified accrual versus accrual.</li>
<li>Record budgets, encumbrances, and expenditures.</li>
<li>Classify fund balance and net position.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> In governmental funds, think "cash-ish": no capital assets, no long-term debt, expenditures instead of expenses, and bond proceeds as other financing sources. The government-wide statements add all of those back.</p></div>
`,
  revision: `
<h3>Model (Governmental Accounting Standards Board (GASB))</h3>
<ul>
<li>Government-wide: economic resources, full accrual; excludes fiduciary funds.</li>
<li>Governmental funds: current financial resources, <strong>modified accrual</strong>.</li>
<li>Proprietary and fiduciary funds: full accrual. Proprietary cash flows: direct method.</li>
</ul>

<h3>11 funds</h3>
<p>Governmental: General, Special revenue, Capital projects, Debt service, Permanent. Proprietary: Enterprise, Internal service. Fiduciary: Pension trust, Investment trust, Private-purpose trust, Custodial.</p>

<h3>Modified accrual</h3>
<ul>
<li>Revenue: measurable + available (property taxes: collected within <strong>60 days</strong>).</li>
<li>Debt principal and interest: expenditure when <strong>due</strong>.</li>
<li>Capital outlay = expenditure; bond proceeds = other financing source.</li>
</ul>

<h3>Budgets</h3>
<p>Encumbrance on purchase order; reversed when goods arrive. Budgetary comparison = required supplementary information (RSI).</p>

<h3>Fund balance</h3>
<p>Nonspendable · Restricted · Committed · Assigned · Unassigned (positive only in the General Fund).</p>

<h3>Net position</h3>
<p>Net investment in capital assets · Restricted · Unrestricted.</p>
`,
};
