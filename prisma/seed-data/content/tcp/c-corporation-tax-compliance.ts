import type { TopicContent } from "../types";

export const cCorporationCompliance: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Entity Tax Compliance is Area II of Tax Compliance and Planning (TCP). For C corporations, it covers preparing Form 1120 — computing taxable income, reconciling book and tax income on Schedules M-1, M-2, and M-3, handling affiliated and controlled groups, estimated taxes, and key credits and limitations updated by the One Big Beautiful Bill Act (OBBBA).</p>

<h2>Form 1120 essentials</h2>
<ul>
<li>Due the 15th day of the 4th month after year-end (April 15 for calendar years); 6-month extension to file (Form 7004), not to pay.</li>
<li>Flat <strong>21%</strong> rate.</li>
<li>Schedule L (balance sheet per books), Schedule M-1 or M-3 (book-to-tax reconciliation), Schedule M-2 (retained earnings), and Schedule K (other information).</li>
<li>Corporations with total assets under $250,000 and gross receipts under $250,000 need not complete Schedules L, M-1, and M-2.</li>
<li><strong>Schedule M-3</strong> is required for corporations with <strong>$10 million or more</strong> of total assets — a detailed reconciliation separating temporary and permanent differences.</li>
<li>The uncertain tax position (UTP) statement, Schedule UTP, applies to corporations with $10 million or more of assets that report uncertain positions in audited financial statements.</li>
</ul>

<h2>Computing taxable income — key items</h2>
<table>
<thead><tr><th>Item</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>Dividends received deduction</td><td>50% (&lt; 20% owned), 65% (20% to &lt; 80%), 100% (80%+); taxable income limit unless a net operating loss (NOL) results</td></tr>
<tr><td>Charitable contributions</td><td>Deductible only above <strong>1%</strong> of taxable income (from 2026) and up to <strong>10%</strong>; 5-year carryforward</td></tr>
<tr><td>Net operating losses</td><td>Indefinite carryforward, 80% of taxable income limit, no carryback</td></tr>
<tr><td>Business interest (Section 163(j))</td><td>Limited to 30% of adjusted taxable income computed before depreciation and amortization again (OBBBA, for years beginning after 2024); small businesses (average gross receipts under about $31 million) exempt</td></tr>
<tr><td>Research and experimental expenditures</td><td>Domestic costs <strong>expensed</strong> again under new Section 174A (OBBBA); foreign costs amortized over 15 years</td></tr>
<tr><td>Depreciation</td><td>100% bonus depreciation permanent for property acquired after January 19, 2025; Section 179 up to $2.5 million (2025, indexed)</td></tr>
<tr><td>Capital losses</td><td>Only against capital gains; carry back 3, forward 5</td></tr>
<tr><td>Meals and entertainment</td><td>Meals 50%; entertainment 0%</td></tr>
<tr><td>Compensation</td><td>Public companies: $1 million deduction cap per covered employee</td></tr>
<tr><td>Organizational and start-up costs</td><td>$5,000 each immediately (phase-out above $50,000); rest over 180 months</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A corporation's taxable income before the charitable deduction is $1,000,000, and it gave $150,000 to charity in 2026. Floor = 1% × 1,000,000 = $10,000; cap = 10% × 1,000,000 = $100,000. Deduction = <strong>$100,000</strong> (contributions above the floor, limited to the cap). The $40,000 above the cap carries forward — and because the 10% cap was exceeded, the $10,000 disallowed by the floor carries forward too, for <strong>$50,000</strong> in total. (Floor amounts carry forward only when the cap is exceeded.)</p></div>

<h2>Book-to-tax reconciliation</h2>
<table>
<thead><tr><th>Schedule M-1 — additions to book income</th><th>Subtractions</th></tr></thead>
<tbody>
<tr><td>Federal income tax expense</td><td>Tax-exempt interest</td></tr>
<tr><td>Excess of capital losses over gains</td><td>Tax depreciation above book</td></tr>
<tr><td>Income taxed but not booked (prepaid income)</td><td>Book income not taxed (life insurance proceeds)</td></tr>
<tr><td>Nondeductible expenses (fines, 50% of meals, political contributions)</td><td>Deductions not booked (dividends received deduction is taken on page 1)</td></tr>
<tr><td>Book depreciation above tax</td><td>Charitable carryovers used</td></tr>
</tbody>
</table>
<p>Schedule M-2 = beginning retained earnings + net income per books + other increases − dividends − other decreases = ending retained earnings.</p>

<h2>Affiliated and controlled groups</h2>
<ul>
<li><strong>Consolidated return:</strong> an affiliated group (parent owns 80% of vote and value of each subsidiary) may elect to file one return — losses of one member offset income of others; intercompany gains are deferred; intercompany dividends eliminated.</li>
<li><strong>Controlled groups</strong> — parent-subsidiary (80%) and brother-sister (five or fewer individuals own more than 50%, counting only identical ownership) — must share certain limits and thresholds (for example, the accumulated earnings credit, Section 179 limit, and gross receipts tests) even if they file separately.</li>
</ul>

<h2>Estimated taxes</h2>
<ul>
<li>Due the 15th day of the 4th, 6th, 9th, and 12th months.</li>
<li>Required annual payment: the lesser of 100% of current-year tax or 100% of prior-year tax (if a 12-month prior year showed a positive tax). <strong>Large corporations</strong> ($1 million+ taxable income in any of the prior 3 years) may use the prior-year method only for the first installment.</li>
<li>The annualized income and adjusted seasonal installment methods help corporations with uneven income. The penalty is computed on Form 2220.</li>
</ul>

<h2>Credits and other taxes</h2>
<ul>
<li><strong>Research credit (Section 41):</strong> for qualified research expenses; qualified small businesses may apply up to $500,000 against payroll taxes.</li>
<li><strong>Foreign tax credit</strong> for foreign income taxes, limited to the US tax on foreign-source income.</li>
<li>General business credits are limited and carry back 1 year and forward 20 years.</li>
<li><strong>Corporate alternative minimum tax:</strong> 15% of adjusted financial statement income for corporations averaging over $1 billion.</li>
<li><strong>Accumulated earnings tax</strong> and <strong>personal holding company tax</strong> (20% each) discourage retaining earnings to avoid shareholder dividends.</li>
<li>Many clean energy credits were ended or phased out early by OBBBA.</li>
</ul>

<h2>Accounting methods and periods</h2>
<ul>
<li>C corporations generally must use the <strong>accrual method</strong> unless average annual gross receipts are under the small business threshold (about $31 million) — then cash method is allowed, and inventory and uniform capitalization rules are simplified.</li>
<li>Changing an accounting method generally requires Form 3115 and a Section 481(a) adjustment (unfavorable adjustments spread over 4 years).</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute corporate taxable income with the dividends received deduction, charitable floor and cap, and NOLs.</li>
<li>Complete Schedule M-1 or M-2 from book information.</li>
<li>Apply consolidated and controlled group rules.</li>
<li>Compute estimated tax requirements and identify large corporation rules.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Schedule M-3 is triggered by <em>assets of $10 million or more</em>, not by revenue. Smaller corporations use Schedule M-1.</p></div>
`,
  revision: `
<h3>Form 1120</h3>
<p>Due April 15 (calendar); 21% rate; Schedule M-3 if assets ≥ $10 million, else M-1; M-2 = retained earnings.</p>

<h3>Taxable income items</h3>
<ul>
<li>Dividends received deduction 50 / 65 / 100%.</li>
<li>Charity: above 1% floor (2026+), up to 10% cap.</li>
<li>Net operating losses (NOLs): 80% limit, forward only.</li>
<li>Business interest: 30% of adjusted taxable income (before depreciation again).</li>
<li>Domestic research costs expensed (Section 174A); 100% bonus depreciation.</li>
<li>Capital losses only vs gains (back 3, forward 5).</li>
</ul>

<h3>Groups</h3>
<p>Consolidated return: 80% vote and value. Controlled groups share limits.</p>

<h3>Estimates</h3>
<p>4th, 6th, 9th, 12th months; 100% of current or prior; large corporations: prior-year only for the first installment.</p>

<h3>Other</h3>
<p>Research credit (payroll offset for small businesses) · foreign tax credit · 15% minimum tax for $1 billion+ · accrual method unless small business.</p>
`,
};
