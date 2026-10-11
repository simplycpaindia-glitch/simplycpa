import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

const FASB = (topic: string, title: string): [string, string] => [
  `FASB — ASC ${topic}, ${title}`,
  `https://asc.fasb.org/${topic}`,
];
const AICPA_BLUEPRINTS: [string, string] = [
  "AICPA & CIMA — CPA Exam Blueprints",
  "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam",
];
const GASB_PRONOUNCEMENTS: [string, string] = [
  "GASB — Governmental Accounting Standards Board (Statements No. 34, 54, 103 and others)",
  "https://gasb.org/",
];
const GASB_103: [string, string] = [
  "GASB — Statement No. 103, Financial Reporting Model Improvements",
  "https://storage.gasb.org/GASBS%20103.pdf",
];

export const farPosts2: BlogSeed[] = [
  {
    slug: "statement-of-cash-flows-direct-vs-indirect-method",
    title: "Statement of Cash Flows Under US GAAP: Direct vs Indirect Method",
    category: "Concepts Explained",
    excerpt:
      "Operating, investing and financing classification, the direct and indirect methods side by side, the US GAAP rules for interest and dividends, and a full worked example.",
    crux: [
      "Three sections: Operating (day-to-day business), investing (long-term assets and investments) and financing (debt and equity with owners and lenders).",
      "Interest and dividends (US GAAP): Interest paid, interest received and dividends received are operating. Dividends paid are financing.",
      "Direct method: Lists the main classes of cash receipts and payments. If used, a reconciliation of net income to operating cash flow must also be disclosed.",
      "Indirect method: Starts from net income and adjusts for non-cash items, gains and losses, and changes in working capital.",
      "Investing and financing: Identical under both methods; only the operating section differs. Significant non-cash transactions are disclosed separately.",
    ],
    content: `
<h2>The three categories (ASC 230)</h2>
<table>
<thead><tr><th>Section</th><th>Typical inflows</th><th>Typical outflows</th></tr></thead>
<tbody>
<tr><td>Operating</td><td>Cash from customers, interest received, dividends received</td><td>Payments to suppliers and employees, interest paid, income taxes paid</td></tr>
<tr><td>Investing</td><td>Sale of property, plant and equipment; sale of investments; collection of loans made</td><td>Purchase of PP&amp;E and investments; loans made to others</td></tr>
<tr><td>Financing</td><td>Issuing shares or bonds; borrowing</td><td>Repaying principal; buying back shares; dividends paid; debt prepayment or extinguishment costs</td></tr>
</tbody>
</table>
<p>Cash includes cash equivalents and, since ASU 2016-18, restricted cash. Transfers between restricted and unrestricted cash are not cash flows.</p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> Under US GAAP, interest paid is <em>operating</em>, not financing — even though the loan principal is financing. Under IFRS it's currently a policy choice.</p>
</div>

<h2>Worked example</h2>
<p>For Year 2, a company reports net income of $120,000, which includes depreciation of $30,000 and a $5,000 gain on the sale of equipment (sold for $25,000). Working capital changes: accounts receivable up $15,000; inventory down $8,000; accounts payable up $6,000; accrued wages down $2,000. Sales were $900,000 and cost of goods sold $540,000.</p>

<h3>Indirect method</h3>
<table>
<tbody>
<tr><td>Net income</td><td>$120,000</td></tr>
<tr><td>+ Depreciation</td><td>30,000</td></tr>
<tr><td>− Gain on sale of equipment</td><td>(5,000)</td></tr>
<tr><td>− Increase in accounts receivable</td><td>(15,000)</td></tr>
<tr><td>+ Decrease in inventory</td><td>8,000</td></tr>
<tr><td>+ Increase in accounts payable</td><td>6,000</td></tr>
<tr><td>− Decrease in accrued wages</td><td>(2,000)</td></tr>
<tr><td><strong>Net cash from operating activities</strong></td><td><strong>$142,000</strong></td></tr>
</tbody>
</table>
<p>The $25,000 proceeds from the equipment sale go in <strong>investing</strong> — which is why the gain is removed from operating.</p>

<h3>Direct method (extract)</h3>
<ul>
<li>Cash from customers = Sales − increase in receivables = $900,000 − $15,000 = <strong>$885,000</strong></li>
<li>Cash paid to suppliers = COGS − decrease in inventory − increase in payables = $540,000 − $8,000 − $6,000 = <strong>$526,000</strong></li>
</ul>
<p>The remaining operating lines (wages, other expenses, interest, taxes) are calculated the same way, and the total always equals the indirect-method figure.</p>

<h2>Memory rule for working capital</h2>
<ul>
<li><strong>Current asset increases</strong> are subtracted; decreases are added.</li>
<li><strong>Current liability increases</strong> are added; decreases are subtracted.</li>
</ul>

<h2>Specific classification rules (ASU 2016-15)</h2>
<ul>
<li>Debt prepayment or extinguishment costs — financing.</li>
<li>Contingent consideration paid soon after a business combination — investing; later payments split between financing and operating.</li>
<li>Insurance settlement proceeds — classified by the nature of the loss.</li>
<li>Distributions from equity-method investees — a policy choice between the cumulative-earnings approach and the nature-of-distribution approach.</li>
</ul>

<h2>Non-cash investing and financing</h2>
<p>Transactions such as acquiring a building by issuing a mortgage, converting bonds to shares, or recognising a right-of-use asset for a new lease are disclosed separately, not shown in the statement's three sections.</p>

<p>Practise further in our <a href="/cpa/far/statement-of-cash-flows">FAR statement of cash flows</a> notes.</p>

${sources([FASB("230", "Statement of Cash Flows"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "governmental-fund-accounting-gasb-core-concepts",
    title: "Governmental Fund Accounting Under GASB: Core Concepts and MCQs",
    category: "Concepts Explained",
    excerpt:
      "The three fund categories, modified accrual vs full accrual, fund balance classifications and what changes under GASB Statement 103 — with practice questions.",
    crux: [
      "Standard-setter: State and local governments follow the Governmental Accounting Standards Board (GASB), not the FASB.",
      "Three fund categories: Governmental (general, special revenue, capital projects, debt service, permanent), proprietary (enterprise, internal service) and fiduciary (trusts and custodial funds).",
      "Governmental funds: Current financial resources focus, modified accrual basis — revenue when measurable and available; expenditures when the liability is incurred.",
      "Fund balance (GASB 54): Nonspendable, restricted, committed, assigned and unassigned.",
      "New reporting model: GASB 103 applies from fiscal years beginning after June 15, 2025 — restructured MD&A, separate unusual or infrequent items, and defined operating income for proprietary funds.",
    ],
    content: `
<h2>Why governments are different</h2>
<p>Governments raise money through taxes rather than sales, and they're accountable for spending it as the legislature authorised. So GASB standards focus on <strong>accountability</strong>: showing whether resources were raised and spent in line with legal and budgetary limits. On the CPA Exam, state and local government accounting is tested in FAR and in more depth in the <a href="/cpa/bar">BAR</a> Discipline.</p>

<h2>The fund structure</h2>
<table>
<thead><tr><th>Category</th><th>Funds</th><th>Measurement focus / basis</th></tr></thead>
<tbody>
<tr><td>Governmental</td><td>General, special revenue, capital projects, debt service, permanent</td><td>Current financial resources / modified accrual</td></tr>
<tr><td>Proprietary</td><td>Enterprise (services to the public for a fee, such as water utilities), internal service (services to other departments)</td><td>Economic resources / full accrual</td></tr>
<tr><td>Fiduciary</td><td>Pension and other employee benefit trust, investment trust, private-purpose trust, custodial</td><td>Economic resources / full accrual</td></tr>
</tbody>
</table>
<p>Memory aid for governmental funds: <strong>GRSPP</strong> — General, special Revenue, capital Projects, debt Service, Permanent.</p>

<h2>Modified accrual in practice</h2>
<ul>
<li><strong>Revenues</strong> are recognised when <em>measurable and available</em> — collectible within the current period or soon enough after to pay current liabilities. For property taxes, "available" means collected within 60 days after year-end.</li>
<li><strong>Expenditures</strong> (not "expenses") are recognised when the liability is incurred. Exception: principal and interest on general long-term debt are recognised when <em>due</em>.</li>
<li>Capital assets are <strong>expenditures</strong> when bought — they're not capitalised or depreciated in governmental funds.</li>
<li>Long-term debt is not a fund liability. Bond proceeds are an <strong>other financing source</strong>.</li>
</ul>

<h2>Fund balance classifications (GASB 54)</h2>
<ol>
<li><strong>Nonspendable</strong> — not in spendable form (inventory, prepaids) or legally required to be kept intact (permanent fund principal).</li>
<li><strong>Restricted</strong> — constrained by external parties (creditors, grantors, other governments) or by law.</li>
<li><strong>Committed</strong> — constrained by formal action of the government's highest decision-making authority.</li>
<li><strong>Assigned</strong> — intended for a specific purpose, by the governing body or an official it delegates to.</li>
<li><strong>Unassigned</strong> — the residual. Only the general fund reports positive unassigned fund balance.</li>
</ol>

<h2>What GASB 103 changes</h2>
<p>GASB Statement No. 103, <em>Financial Reporting Model Improvements</em>, is effective for fiscal years beginning after June 15, 2025. Key changes:</p>
<ul>
<li>Management's discussion and analysis (MD&amp;A) follows five defined sections and must explain <em>why</em> amounts changed, not just by how much.</li>
<li>Unusual or infrequent items are reported separately.</li>
<li>Proprietary funds present a defined operating income (loss) subtotal and a separate line for noncapital subsidies.</li>
<li>Information about each major component unit must be presented.</li>
<li>Budgetary comparison information is presented as required supplementary information.</li>
</ul>

<h2>Practice questions</h2>
<div class="callout callout-example">
<p><strong>1.</strong> A city's general fund buys a fire truck for $400,000 cash. In the general fund, the purchase is recorded as:<br>
(A) a capital asset (B) an expenditure (C) an expense (D) a deferred outflow<br>
<strong>Answer: B.</strong> Governmental funds record capital outlays as expenditures. The truck is capitalised and depreciated only in the government-wide statements.</p>
<p><strong>2.</strong> Which fund accounts for resources that must be held intact, with only the earnings used to support the government's programmes?<br>
(A) Special revenue (B) Private-purpose trust (C) Permanent (D) Debt service<br>
<strong>Answer: C.</strong> If the earnings benefit individuals or other organisations rather than the government's own programmes, it would be a private-purpose trust.</p>
<p><strong>3.</strong> Property taxes levied for the current year are expected to be collected as follows: $900,000 during the year, $40,000 within 60 days after year-end and $60,000 later. How much property tax revenue does the general fund recognise this year?<br>
(A) $900,000 (B) $940,000 (C) $1,000,000 (D) $960,000<br>
<strong>Answer: B.</strong> Only amounts collected during the year or within 60 days after are "available". The remaining $60,000 is a deferred inflow of resources.</p>
</div>

<p>Continue with <a href="/blog/government-wide-vs-fund-financial-statements-gasb">government-wide vs fund statements</a> and <a href="/blog/budgetary-accounting-encumbrances-governmental-funds">budgetary accounting and encumbrances</a>, or study the full <a href="/cpa/far/governmental-accounting">FAR governmental accounting</a> topic.</p>

${sources([GASB_PRONOUNCEMENTS, GASB_103, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "government-wide-vs-fund-financial-statements-gasb",
    title: "Government-Wide vs Fund Financial Statements Under GASB",
    category: "Concepts Explained",
    excerpt:
      "Why governments present two sets of statements, how they differ in measurement focus and basis, what goes in each, and the reconciliation that links them.",
    crux: [
      "Two levels: Government-wide statements show the government as a whole; fund statements show individual major funds.",
      "Government-wide: Economic resources focus, full accrual — includes capital assets and long-term debt. Fiduciary activities are excluded.",
      "Fund statements: Governmental funds use modified accrual; proprietary and fiduciary funds use full accrual.",
      "Columns: Government-wide statements split governmental activities, business-type activities and discretely presented component units.",
      "Reconciliation: Required between governmental fund balances and governmental activities net position — capital assets, long-term debt and deferred revenue are the usual items.",
    ],
    content: `
<h2>The structure of a government's annual report</h2>
<p>Under the GASB reporting model (introduced by Statement No. 34 and updated by Statement No. 103), the basic financial statements are:</p>
<ol>
<li><strong>Government-wide statements</strong>: statement of net position and statement of activities.</li>
<li><strong>Fund statements</strong>: separate statements for governmental funds, proprietary funds and fiduciary funds.</li>
<li><strong>Notes</strong> to the financial statements.</li>
</ol>
<p>They're accompanied by management's discussion and analysis (MD&amp;A) and other required supplementary information.</p>

<h2>Side by side</h2>
<table>
<thead><tr><th></th><th>Government-wide</th><th>Governmental funds</th><th>Proprietary funds</th></tr></thead>
<tbody>
<tr><td>Measurement focus</td><td>Economic resources</td><td>Current financial resources</td><td>Economic resources</td></tr>
<tr><td>Basis of accounting</td><td>Accrual</td><td>Modified accrual</td><td>Accrual</td></tr>
<tr><td>Capital assets</td><td>Reported and depreciated</td><td>Not reported (expenditures)</td><td>Reported and depreciated</td></tr>
<tr><td>Long-term debt</td><td>Reported</td><td>Not reported (proceeds are other financing sources)</td><td>Reported</td></tr>
<tr><td>Equity called</td><td>Net position</td><td>Fund balance</td><td>Net position</td></tr>
<tr><td>Fiduciary activities</td><td>Excluded</td><td>—</td><td>—</td></tr>
</tbody>
</table>

<h2>The government-wide statements</h2>
<ul>
<li><strong>Statement of net position</strong> — assets + deferred outflows − liabilities − deferred inflows = net position, split into <em>net investment in capital assets</em>, <em>restricted</em> and <em>unrestricted</em>.</li>
<li><strong>Statement of activities</strong> — a net (expense) revenue format. Each function's expenses are shown less its program revenues (charges for services, operating grants, capital grants). General revenues such as taxes are shown at the bottom.</li>
<li>Columns separate <strong>governmental activities</strong> (mostly governmental funds plus internal service funds) and <strong>business-type activities</strong> (enterprise funds), with discretely presented <strong>component units</strong> alongside.</li>
</ul>

<h2>Major funds</h2>
<p>Fund statements present each major fund in its own column and aggregate the rest. The general fund is always major. Another governmental or enterprise fund is major if it meets both a 10% test (of the total for its fund category) and a 5% test (of the combined governmental and enterprise total) on assets plus deferred outflows, liabilities plus deferred inflows, revenues, or expenditures/expenses. A government can also choose to treat any fund as major.</p>

<h2>The reconciliation</h2>
<p>Because governmental funds and governmental activities use different measurement, the statements must be reconciled. Typical reconciling items from total governmental fund balance to governmental activities net position:</p>
<ul>
<li><strong>+</strong> Capital assets, net of accumulated depreciation.</li>
<li><strong>−</strong> Long-term liabilities such as bonds, compensated absences and net pension liability.</li>
<li><strong>+</strong> Revenue that was unavailable (deferred) in the funds but earned under accrual.</li>
<li><strong>+/−</strong> Internal service fund net position, which is included in governmental activities.</li>
<li><strong>−</strong> Accrued interest on long-term debt not yet due.</li>
</ul>

<div class="callout callout-example">
<p><strong>Example:</strong> Total governmental fund balance is $5 million. Capital assets (net) are $40 million, general obligation bonds $25 million, and property taxes deferred in the funds $1 million. Governmental activities net position = $5m + $40m − $25m + $1m = <strong>$21 million</strong> (before any other reconciling items).</p>
</div>

<p>See also <a href="/blog/governmental-fund-accounting-gasb-core-concepts">governmental fund accounting basics</a> and our <a href="/cpa/far/governmental-accounting">FAR governmental accounting</a> topic.</p>

${sources([GASB_PRONOUNCEMENTS, GASB_103, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "budgetary-accounting-encumbrances-governmental-funds",
    title: "Budgetary Accounting and Encumbrances in Governmental Funds",
    category: "Concepts Explained",
    excerpt:
      "How governments record the budget, why encumbrances exist, the journal entries from purchase order to invoice, year-end treatment and budgetary comparison reporting.",
    crux: [
      "Why budgets are recorded: The legally adopted budget limits spending, so many governments enter it into the accounts to control expenditures.",
      "Budget entry: Debit estimated revenues and credit appropriations; the difference goes to budgetary fund balance.",
      "Encumbrance: When a purchase order is issued, the commitment is recorded so the same appropriation can't be spent twice.",
      "On delivery: Reverse the encumbrance at the estimated amount and record the expenditure at the actual amount.",
      "Year-end: Outstanding encumbrances are not expenditures or liabilities — they're reported within restricted, committed or assigned fund balance and disclosed.",
    ],
    content: `
<h2>Budgetary accounts</h2>
<table>
<thead><tr><th>Account</th><th>Meaning</th><th>Normal balance</th></tr></thead>
<tbody>
<tr><td>Estimated revenues</td><td>Revenues the budget expects</td><td>Debit</td></tr>
<tr><td>Appropriations</td><td>Spending authority granted by the legislature</td><td>Credit</td></tr>
<tr><td>Estimated other financing sources / uses</td><td>Expected transfers in, bond proceeds / transfers out</td><td>Debit / Credit</td></tr>
<tr><td>Encumbrances</td><td>Commitments for goods or services not yet received</td><td>Debit</td></tr>
<tr><td>Budgetary fund balance</td><td>Balancing figure for budget entries</td><td>Either</td></tr>
</tbody>
</table>

<h2>The full cycle with journal entries</h2>
<div class="callout callout-example">
<p><strong>1. Adopt the budget</strong> (revenues $1,000,000; appropriations $970,000):<br>
Dr Estimated revenues 1,000,000; Cr Appropriations 970,000; Cr Budgetary fund balance 30,000.</p>
<p><strong>2. Issue a purchase order</strong> for supplies estimated at $12,000:<br>
Dr Encumbrances 12,000; Cr Budgetary fund balance — reserved for encumbrances 12,000.</p>
<p><strong>3. Supplies arrive with an invoice of $12,300:</strong><br>
Dr Budgetary fund balance — reserved for encumbrances 12,000; Cr Encumbrances 12,000 (reverse at the <em>estimated</em> amount).<br>
Dr Expenditures 12,300; Cr Vouchers payable 12,300 (record at the <em>actual</em> amount).</p>
<p><strong>4. Close the budget at year-end:</strong> reverse the budgetary entries (Dr Appropriations; Cr Estimated revenues; Dr/Cr Budgetary fund balance).</p>
</div>

<h2>Available appropriation</h2>
<p>At any time: <strong>Available to spend = Appropriations − Expenditures − Outstanding encumbrances.</strong> That's the point of encumbrance accounting — it stops departments committing money that's already promised.</p>

<h2>Outstanding encumbrances at year-end</h2>
<ul>
<li>They are <strong>not</strong> expenditures and <strong>not</strong> liabilities — the goods haven't been received.</li>
<li>Under GASB 54, encumbrances aren't a separate fund balance category. The amounts are included in restricted, committed or assigned fund balance, depending on the source of the constraint, and significant encumbrances are disclosed in the notes.</li>
<li>If appropriations lapse at year-end but the government intends to honour the orders, they're typically re-appropriated in the next year's budget.</li>
</ul>

<h2>Budgetary comparison reporting</h2>
<p>Governments present a budgetary comparison for the general fund and each major special revenue fund with a legally adopted annual budget. It shows the <strong>original budget</strong>, the <strong>final budget</strong> and <strong>actual amounts on the budgetary basis</strong>. Under GASB Statement No. 103, this information is presented as required supplementary information, with explanations of significant variances. If the budgetary basis differs from GAAP (for example, encumbrances treated as expenditures for budget purposes), a reconciliation is required.</p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> Budgetary entries don't appear in the GAAP-basis financial statements at all. They're control accounts — the statements show actual revenues and expenditures.</p>
</div>

<p>Study more in our <a href="/cpa/far/governmental-accounting">FAR governmental accounting</a> notes.</p>

${sources([GASB_PRONOUNCEMENTS, GASB_103, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "financial-statement-analysis-ratios-cpa-bar",
    title: "Financial Statement Analysis for CPA BAR: Ratios and Interpretation",
    category: "Concepts Explained",
    excerpt:
      "Liquidity, activity, solvency and profitability ratios with formulas, a worked example, DuPont analysis and the interpretation traps BAR questions are built around.",
    crux: [
      "Liquidity: Current ratio, quick ratio and cash ratio — can the business pay short-term obligations?",
      "Activity: Receivable, inventory and payable turnover (and their days) — how efficiently working capital is used.",
      "Solvency: Debt-to-equity and times interest earned — can it survive long term and service its debt?",
      "Profitability: Margins, return on assets and return on equity; DuPont splits ROE into margin × turnover × leverage.",
      "Interpretation beats calculation: BAR asks why a ratio moved and what a transaction does to it — always reason from the numerator and denominator.",
    ],
    content: `
<h2>Where this is tested</h2>
<p>Financial statement analysis is a core part of Area I (Business Analysis) of the Business Analysis and Reporting (BAR) Discipline, and basic ratios also appear in FAR. Expect both calculation questions and "what happens to the ratio if…" questions.</p>

<h2>The main ratios</h2>
<table>
<thead><tr><th>Category</th><th>Ratio</th><th>Formula</th></tr></thead>
<tbody>
<tr><td rowspan="3">Liquidity</td><td>Current ratio</td><td>Current assets ÷ current liabilities</td></tr>
<tr><td>Quick (acid-test) ratio</td><td>(Cash + marketable securities + receivables) ÷ current liabilities</td></tr>
<tr><td>Cash ratio</td><td>(Cash + marketable securities) ÷ current liabilities</td></tr>
<tr><td rowspan="3">Activity</td><td>Receivables turnover</td><td>Net credit sales ÷ average receivables (days = 365 ÷ turnover)</td></tr>
<tr><td>Inventory turnover</td><td>Cost of goods sold ÷ average inventory (days = 365 ÷ turnover)</td></tr>
<tr><td>Payables turnover</td><td>Purchases (or COGS) ÷ average payables</td></tr>
<tr><td rowspan="2">Solvency</td><td>Debt-to-equity</td><td>Total liabilities ÷ total equity</td></tr>
<tr><td>Times interest earned</td><td>Earnings before interest and taxes ÷ interest expense</td></tr>
<tr><td rowspan="4">Profitability</td><td>Gross margin</td><td>Gross profit ÷ net sales</td></tr>
<tr><td>Net profit margin</td><td>Net income ÷ net sales</td></tr>
<tr><td>Return on assets (ROA)</td><td>Net income ÷ average total assets</td></tr>
<tr><td>Return on equity (ROE)</td><td>Net income ÷ average equity</td></tr>
</tbody>
</table>
<p><strong>Cash conversion cycle</strong> = days sales outstanding + days inventory outstanding − days payables outstanding.</p>

<h2>Worked example</h2>
<p>Current assets $500,000 (cash $80,000, receivables $170,000, inventory $250,000); current liabilities $250,000; total liabilities $600,000; equity $900,000; net sales $2,000,000; COGS $1,300,000; net income $150,000; average inventory $260,000; average receivables $160,000.</p>
<ul>
<li>Current ratio = 500 ÷ 250 = <strong>2.0</strong></li>
<li>Quick ratio = (80 + 170) ÷ 250 = <strong>1.0</strong></li>
<li>Inventory turnover = 1,300 ÷ 260 = <strong>5.0</strong> (73 days)</li>
<li>Receivables turnover = 2,000 ÷ 160 = <strong>12.5</strong> (about 29 days)</li>
<li>Debt-to-equity = 600 ÷ 900 = <strong>0.67</strong></li>
<li>Net margin = 150 ÷ 2,000 = <strong>7.5%</strong>; ROE (year-end equity) = 150 ÷ 900 = <strong>16.7%</strong></li>
</ul>

<h2>DuPont analysis</h2>
<p><strong>ROE = Net profit margin × Asset turnover × Equity multiplier</strong><br>
= (Net income ÷ Sales) × (Sales ÷ Total assets) × (Total assets ÷ Equity).</p>
<p>Two companies with the same ROE can get there very differently — one through high margins, another through heavy leverage. DuPont shows which.</p>

<h2>"What happens if…" questions</h2>
<div class="callout callout-tip">
<p><strong>The trick:</strong> when a ratio is above 1, an equal increase (or decrease) in the numerator and denominator moves it towards 1. Paying $50,000 of payables with cash takes a 2.0 current ratio (500/250) to 2.25 (450/200). If the ratio were below 1, the same payment would <em>lower</em> it.</p>
</div>
<ul>
<li>Buying inventory on credit: current ratio falls (if above 1), quick ratio falls.</li>
<li>Writing off a receivable against the allowance: no effect on net receivables or on any ratio.</li>
<li>Issuing long-term debt for cash: current ratio rises; debt-to-equity rises.</li>
</ul>

<p>Pair this with <a href="/blog/common-size-financial-statements-trend-analysis">common-size and trend analysis</a> and our <a href="/cpa/bar/financial-statement-analysis">BAR financial statement analysis</a> notes.</p>

${sources([AICPA_BLUEPRINTS, ["US SEC — Beginners' guide to financial statements", "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"]])}
`,
  },
  {
    slug: "common-size-financial-statements-trend-analysis",
    title: "Common-Size Financial Statements and Trend Analysis",
    category: "Concepts Explained",
    excerpt:
      "Vertical and horizontal analysis explained with worked numbers — how to build common-size statements, calculate trend percentages and spot what the numbers are telling you.",
    crux: [
      "Vertical (common-size) analysis: Every line as a percentage of a base in the same period — sales for the income statement, total assets for the balance sheet.",
      "Horizontal (trend) analysis: Each line compared over time, either as a change from the prior year or as an index against a base year.",
      "Why it helps: It removes size, so you can compare a small company with a large one, or this year with five years ago.",
      "Watch for: Costs growing faster than revenue, receivables growing faster than sales, and shifts in the mix of assets or funding.",
      "Limits: Percentages hide absolute size, base-year choice affects trends, and different accounting policies distort comparisons.",
    ],
    content: `
<h2>Vertical analysis: common-size statements</h2>
<p>A common-size income statement expresses every line as a percentage of <strong>net sales</strong>. A common-size balance sheet uses <strong>total assets</strong> (or total liabilities and equity).</p>
<table>
<thead><tr><th>Income statement</th><th>Company A</th><th>% of sales</th><th>Company B</th><th>% of sales</th></tr></thead>
<tbody>
<tr><td>Net sales</td><td>$500,000</td><td>100%</td><td>$8,000,000</td><td>100%</td></tr>
<tr><td>Cost of goods sold</td><td>300,000</td><td>60%</td><td>5,200,000</td><td>65%</td></tr>
<tr><td>Gross profit</td><td>200,000</td><td>40%</td><td>2,800,000</td><td>35%</td></tr>
<tr><td>Operating expenses</td><td>150,000</td><td>30%</td><td>1,840,000</td><td>23%</td></tr>
<tr><td>Operating income</td><td>50,000</td><td>10%</td><td>960,000</td><td>12%</td></tr>
</tbody>
</table>
<p>Company B is 16 times larger, but the percentages show the real story: A earns a better gross margin, while B runs its overheads far more efficiently and ends up with the higher operating margin.</p>

<h2>Horizontal analysis: change and trend</h2>
<p><strong>Year-on-year change</strong> = (Current year − Prior year) ÷ Prior year.</p>
<p><strong>Trend index</strong> = Current year amount ÷ Base year amount × 100.</p>
<table>
<thead><tr><th></th><th>Year 1 (base)</th><th>Year 2</th><th>Year 3</th></tr></thead>
<tbody>
<tr><td>Sales</td><td>$1,000,000 (100)</td><td>$1,100,000 (110)</td><td>$1,210,000 (121)</td></tr>
<tr><td>Accounts receivable</td><td>$100,000 (100)</td><td>$125,000 (125)</td><td>$160,000 (160)</td></tr>
<tr><td>Operating expenses</td><td>$300,000 (100)</td><td>$345,000 (115)</td><td>$400,000 (133)</td></tr>
</tbody>
</table>
<p>Sales grew 21% over two years, but receivables grew 60% and operating expenses 33%. That's a warning sign: slower collections (or aggressive revenue recognition) and costs outpacing growth.</p>

<h2>What to look for</h2>
<ul>
<li><strong>Margin squeeze</strong> — cost of sales rising as a percentage of revenue.</li>
<li><strong>Working capital drift</strong> — receivables or inventory growing faster than sales.</li>
<li><strong>Funding shifts</strong> — debt rising as a share of total liabilities and equity.</li>
<li><strong>Asset mix</strong> — a growing share of intangibles or goodwill after acquisitions.</li>
</ul>

<h2>Limitations</h2>
<ul>
<li>A percentage says nothing about absolute size — 5% of a tiny base can be immaterial.</li>
<li>Trend percentages are sensitive to the base year; a bad base year flatters everything after it.</li>
<li>Comparisons across companies are distorted by different accounting policies (inventory methods, capitalisation choices) and by inflation.</li>
<li>Negative or zero base amounts make percentage changes meaningless.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam tip:</strong> BAR task-based simulations often give two or three years of statements and ask you to compute common-size figures and pick the explanation that fits. Do the arithmetic quickly and spend your time on interpretation.</p>
</div>

<p>See also <a href="/blog/financial-statement-analysis-ratios-cpa-bar">financial statement analysis ratios</a>.</p>

${sources([AICPA_BLUEPRINTS, ["US SEC — Beginners' guide to financial statements", "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"]])}
`,
  },
];
