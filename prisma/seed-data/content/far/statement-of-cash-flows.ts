import type { TopicContent } from "../types";

export const statementOfCashFlows: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>The statement of cash flows (Accounting Standards Codification (ASC) 230) explains the change in cash, cash equivalents, and restricted cash during the period. It is one of the most frequently tested areas in Financial Accounting and Reporting (FAR): multiple-choice questions ask you to classify individual items, and task-based simulations (TBSs) ask you to build the operating section using the indirect method.</p>

<h2>What counts as cash</h2>
<ul>
<li><strong>Cash equivalents:</strong> short-term, highly liquid investments readily convertible to known amounts of cash, with an <strong>original maturity of three months or less</strong> to the entity that holds them (for example, Treasury bills, commercial paper, money market funds).</li>
<li><strong>Restricted cash</strong> is included in the beginning and ending totals (Accounting Standards Update (ASU) 2016-18), so transfers between cash and restricted cash are not reported as cash flows.</li>
<li>A 3-year Treasury note bought with 2 months to maturity is a cash equivalent; the same note bought 2 years earlier does not become one as it nears maturity.</li>
</ul>

<h2>The three categories</h2>
<table>
<thead><tr><th>Operating</th><th>Investing</th><th>Financing</th></tr></thead>
<tbody>
<tr><td>Cash from customers</td><td>Buying and selling property, plant, and equipment (PP&amp;E)</td><td>Issuing stock; buying treasury stock</td></tr>
<tr><td>Cash paid to suppliers and employees</td><td>Buying and selling debt and equity investments (not trading)</td><td>Borrowing and repaying principal on debt</td></tr>
<tr><td><strong>Interest paid and received</strong></td><td>Making and collecting loans to others</td><td><strong>Dividends paid</strong></td></tr>
<tr><td><strong>Dividends received</strong></td><td>Acquiring a business (net of cash acquired)</td><td>Principal portion of finance lease payments</td></tr>
<tr><td>Income taxes paid</td><td>Proceeds from insurance on PP&amp;E (property damage)</td><td>Debt prepayment and extinguishment costs</td></tr>
<tr><td>Trading securities bought for resale</td><td>Collections on beneficial interests in securitized receivables</td><td>Contingent consideration paid after 3 months (up to the amount recognized at acquisition)</td></tr>
<tr><td>Operating lease payments</td><td></td><td>Proceeds from issuing bonds</td></tr>
</tbody>
</table>

<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Under US Generally Accepted Accounting Principles (GAAP), interest paid, interest received, and dividends received are <strong>operating</strong>; only dividends <em>paid</em> are financing. International Financial Reporting Standards (IFRS) allow a policy choice for these items — US GAAP does not.</p></div>

<h3>Items with specific rules (ASU 2016-15)</h3>
<ul>
<li><strong>Distributions from equity-method investees:</strong> use the cumulative-earnings approach (returns <em>on</em> investment are operating; returns <em>of</em> investment are investing) or the nature-of-distribution approach.</li>
<li><strong>Zero-coupon bond settlement:</strong> the portion attributable to accreted interest is operating; the original principal is financing.</li>
<li><strong>Insurance proceeds:</strong> classified by the nature of the loss — property damage is investing, business interruption is operating.</li>
<li><strong>Contingent consideration in a business combination:</strong> paid soon after (about 3 months) is investing; later payments are financing up to the acquisition-date amount, with any excess operating.</li>
</ul>

<h3>Noncash investing and financing activities</h3>
<p>Transactions that affect no cash are disclosed separately (in a schedule or narrative), not in the statement itself. Examples: acquiring a building by issuing stock or a mortgage, converting bonds to stock, obtaining a right-of-use asset for a new lease, and exchanging one asset for another.</p>

<h2>Operating activities — two methods</h2>
<p>Both methods produce the same net cash from operating activities. Investing and financing sections are identical under both.</p>

<h3>Indirect method</h3>
<table>
<thead><tr><th>Start with net income, then adjust</th><th>Direction</th></tr></thead>
<tbody>
<tr><td>Depreciation, amortization, depletion, impairment losses</td><td>Add back</td></tr>
<tr><td>Losses on sale of assets or extinguishment of debt</td><td>Add back</td></tr>
<tr><td>Gains on sale of assets</td><td>Subtract</td></tr>
<tr><td>Equity-method income in excess of dividends received</td><td>Subtract</td></tr>
<tr><td>Amortization of bond <strong>discount</strong> (interest expense exceeds cash paid)</td><td>Add back</td></tr>
<tr><td>Amortization of bond <strong>premium</strong></td><td>Subtract</td></tr>
<tr><td>Increase in deferred tax liability / decrease in deferred tax asset</td><td>Add</td></tr>
<tr><td>Share-based compensation expense</td><td>Add back</td></tr>
<tr><td>Increase in current operating assets (receivables, inventory, prepaids)</td><td>Subtract</td></tr>
<tr><td>Increase in current operating liabilities (payables, accrued liabilities, unearned revenue)</td><td>Add</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE (indirect method):</strong> Net income $150,000; depreciation $30,000; gain on sale of equipment $10,000; accounts receivable increased $20,000; accounts payable increased $8,000.<br>Cash from operations = 150,000 + 30,000 − 10,000 − 20,000 + 8,000 = <strong>$158,000</strong>. The full sale proceeds of the equipment appear in investing activities.</p></div>

<h3>Direct method</h3>
<p>The direct method shows major classes of gross receipts and payments. If it is used, a reconciliation of net income to operating cash flow (the indirect method) must also be disclosed.</p>
<table>
<thead><tr><th>Line</th><th>Conversion from accrual to cash</th></tr></thead>
<tbody>
<tr><td>Cash collected from customers</td><td>Sales − increase in accounts receivable (+ decrease)</td></tr>
<tr><td>Cash paid to suppliers</td><td>Cost of goods sold + increase in inventory − increase in accounts payable</td></tr>
<tr><td>Cash paid for operating expenses</td><td>Expense + increase in prepaids − increase in accrued liabilities (exclude depreciation)</td></tr>
<tr><td>Cash paid for interest</td><td>Interest expense − discount amortization + premium amortization − increase in interest payable</td></tr>
<tr><td>Cash paid for income taxes</td><td>Tax expense − increase in taxes payable − increase in deferred tax liability</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE (direct method):</strong> Cost of goods sold $300,000; inventory increased $20,000; accounts payable increased $15,000. Purchases = 300,000 + 20,000 = $320,000. Cash paid to suppliers = 320,000 − 15,000 = <strong>$305,000</strong>.</p></div>

<h2>Required disclosures</h2>
<ul>
<li>Interest paid (net of amounts capitalized) and income taxes paid.</li>
<li>Noncash investing and financing activities.</li>
<li>Policy for determining which items are cash equivalents.</li>
<li>Reconciliation of cash, cash equivalents, and restricted cash to the balance sheet when shown on more than one line.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Classify 8–12 transactions into operating, investing, financing, or noncash disclosure.</li>
<li>Compute net cash from operating, investing, or financing activities.</li>
<li>Convert an accrual-basis figure (sales, cost of goods sold, interest) to cash.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> For the indirect method, remember "assets opposite, liabilities same": an increase in a current operating asset is subtracted, and an increase in a current operating liability is added. For investing, always use the <em>cash proceeds</em> from a sale, not the gain.</p></div>
`,
  revision: `
<h3>Classification (US Generally Accepted Accounting Principles)</h3>
<ul>
<li><strong>Operating:</strong> customers, suppliers, employees, taxes, <strong>interest paid and received, dividends received</strong>, trading securities bought for resale, operating lease payments.</li>
<li><strong>Investing:</strong> buy/sell property, plant, and equipment and non-trading investments, loans made and collected, business acquisitions, insurance proceeds for property damage.</li>
<li><strong>Financing:</strong> issue/buy back stock, borrow/repay principal, <strong>dividends paid</strong>, finance lease principal, debt extinguishment costs.</li>
<li><strong>Noncash (disclose only):</strong> stock issued for assets, debt converted to stock, new right-of-use assets.</li>
</ul>

<h3>Indirect method</h3>
<ul>
<li>Start with net income; add back depreciation, amortization, impairment, and losses; subtract gains.</li>
<li>Bond <strong>discount</strong> amortization → add; bond <strong>premium</strong> amortization → subtract.</li>
<li>Current operating assets: increase → subtract. Current operating liabilities: increase → add.</li>
<li>Equity-method income above dividends received → subtract.</li>
</ul>

<h3>Direct method conversions</h3>
<ul>
<li>Customers: Sales − ↑ accounts receivable</li>
<li>Suppliers: Cost of goods sold + ↑ inventory − ↑ accounts payable</li>
<li>Direct method requires a reconciliation (indirect) disclosure.</li>
</ul>

<h3>Must remember</h3>
<ul>
<li>Cash equivalents: <strong>original</strong> maturity ≤ 3 months.</li>
<li>Restricted cash is included in the totals.</li>
<li>Disclose interest paid and income taxes paid.</li>
</ul>
`,
};
