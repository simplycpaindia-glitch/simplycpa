import type { TopicContent } from "../types";

export const financialStatementAnalysis: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Business Analysis is Area I of Business Analysis and Reporting (BAR), 40–50% of the section — the largest area. It tests whether you can analyze performance using ratios and key performance indicators (KPIs), explain variances, interpret economic conditions, and judge the quality of earnings. Task-based simulations often supply financial statements and ask you to compute and interpret metrics.</p>

<h2>Approaches to analysis</h2>
<ul>
<li><strong>Horizontal (trend) analysis:</strong> compares amounts across periods — percentage change = (current − prior) ÷ prior.</li>
<li><strong>Vertical (common-size) analysis:</strong> expresses each line as a percentage of a base — total assets on the balance sheet, net sales on the income statement — allowing comparison across companies of different sizes.</li>
<li><strong>Ratio analysis:</strong> relationships between line items, compared with prior periods, budgets, competitors, and industry benchmarks.</li>
</ul>

<h2>Key ratios</h2>
<h3>Liquidity — can the company pay short-term obligations?</h3>
<table>
<thead><tr><th>Ratio</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Current ratio</td><td>Current assets ÷ current liabilities</td></tr>
<tr><td>Quick (acid-test) ratio</td><td>(Cash + marketable securities + net receivables) ÷ current liabilities</td></tr>
<tr><td>Cash ratio</td><td>(Cash + marketable securities) ÷ current liabilities</td></tr>
<tr><td>Operating cash flow ratio</td><td>Cash flow from operations ÷ current liabilities</td></tr>
</tbody>
</table>

<h3>Activity (efficiency)</h3>
<table>
<thead><tr><th>Ratio</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Receivables turnover</td><td>Net credit sales ÷ average net receivables</td></tr>
<tr><td>Days sales outstanding (DSO)</td><td>365 ÷ receivables turnover</td></tr>
<tr><td>Inventory turnover</td><td>Cost of goods sold ÷ average inventory</td></tr>
<tr><td>Days inventory outstanding (DIO)</td><td>365 ÷ inventory turnover</td></tr>
<tr><td>Payables turnover</td><td>Purchases (or cost of goods sold) ÷ average accounts payable</td></tr>
<tr><td>Days payables outstanding (DPO)</td><td>365 ÷ payables turnover</td></tr>
<tr><td><strong>Cash conversion cycle</strong></td><td><strong>DSO + DIO − DPO</strong> — days between paying suppliers and collecting from customers</td></tr>
<tr><td>Total asset turnover</td><td>Net sales ÷ average total assets</td></tr>
</tbody>
</table>

<h3>Solvency (leverage)</h3>
<table>
<thead><tr><th>Ratio</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Debt to equity</td><td>Total liabilities ÷ total equity</td></tr>
<tr><td>Debt to total assets</td><td>Total liabilities ÷ total assets</td></tr>
<tr><td>Times interest earned</td><td>Earnings before interest and taxes (EBIT) ÷ interest expense</td></tr>
<tr><td>Equity multiplier (financial leverage)</td><td>Average total assets ÷ average equity</td></tr>
</tbody>
</table>

<h3>Profitability</h3>
<table>
<thead><tr><th>Ratio</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Gross margin</td><td>Gross profit ÷ net sales</td></tr>
<tr><td>Operating margin</td><td>Operating income ÷ net sales</td></tr>
<tr><td>Net profit margin</td><td>Net income ÷ net sales</td></tr>
<tr><td>Return on assets (ROA)</td><td>Net income ÷ average total assets</td></tr>
<tr><td>Return on equity (ROE)</td><td>Net income ÷ average common equity</td></tr>
</tbody>
</table>

<h3>Market measures</h3>
<ul>
<li>Price-to-earnings ratio = market price per share ÷ earnings per share.</li>
<li>Dividend yield = dividends per share ÷ market price; dividend payout = dividends ÷ net income.</li>
<li>Book value per share = common equity ÷ common shares outstanding.</li>
</ul>

<h2>DuPont analysis</h2>
<p>ROE breaks into three drivers:</p>
<p><strong>ROE = Net profit margin × Total asset turnover × Equity multiplier</strong><br>= (Net income ÷ Sales) × (Sales ÷ Assets) × (Assets ÷ Equity)</p>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Net margin 8%, asset turnover 1.5, equity multiplier 2.0. ROE = 0.08 × 1.5 × 2.0 = <strong>24%</strong>. If ROE rises while margin and turnover are flat, the increase came from more leverage — a riskier source of return.</p></div>
<p>An extended DuPont model further splits net margin into tax burden (net income ÷ pretax income), interest burden (pretax income ÷ EBIT), and operating margin (EBIT ÷ sales).</p>

<h2>Effects of transactions on ratios</h2>
<p>A common exam question asks how a transaction changes a ratio. Work out the effect on the numerator and denominator.</p>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> The current ratio is 2.0 (current assets $400,000; current liabilities $200,000). Paying $50,000 of accounts payable with cash gives 350,000 ÷ 150,000 = <strong>2.33</strong> — the ratio <em>increases</em>. When a ratio is above 1, paying down current liabilities with current assets raises it; when below 1, it lowers it.</p></div>

<h2>Variance analysis and key performance indicators</h2>
<ul>
<li><strong>Flexible budget variance:</strong> actual results versus a budget adjusted to actual volume; <strong>sales volume variance:</strong> flexible budget versus the static (master) budget.</li>
<li><strong>Price and quantity variances</strong> for materials and labor: price variance = (actual price − standard price) × actual quantity; quantity (efficiency) variance = (actual quantity − standard quantity allowed) × standard price.</li>
<li>Non-financial KPIs: customer retention, on-time delivery, defect rates, employee turnover. The <strong>balanced scorecard</strong> groups measures into financial, customer, internal business process, and learning and growth perspectives.</li>
</ul>

<h2>Economic concepts</h2>
<ul>
<li><strong>Business cycle:</strong> expansion, peak, contraction (recession), trough. Leading indicators (stock prices, building permits, new orders) move before the economy; lagging indicators (unemployment, prime rate) move after.</li>
<li><strong>Gross domestic product (GDP)</strong> = consumption + investment + government spending + net exports. Real GDP adjusts for inflation.</li>
<li><strong>Inflation</strong> is measured by the consumer price index (CPI); rising rates reduce the present value of future cash flows and raise borrowing costs.</li>
<li><strong>Monetary policy</strong> (the Federal Reserve's interest rate and money supply tools) and <strong>fiscal policy</strong> (government spending and taxes) influence demand.</li>
<li><strong>Market structures:</strong> perfect competition, monopolistic competition, oligopoly, monopoly. <strong>Price elasticity of demand</strong> = % change in quantity demanded ÷ % change in price; elastic (&gt; 1) demand means a price rise reduces total revenue.</li>
<li><strong>Exchange rates:</strong> a stronger US dollar makes US exports more expensive abroad and imports cheaper.</li>
</ul>

<h2>Quality of earnings and adjusted measures</h2>
<ul>
<li>High-quality earnings are sustainable and backed by cash flow. Warning signs: net income growing much faster than operating cash flow, rising receivables relative to sales, changes in estimates that boost income, and one-time gains.</li>
<li>Companies often report non-Generally Accepted Accounting Principles (GAAP) measures such as adjusted earnings before interest, taxes, depreciation, and amortization (EBITDA). Securities and Exchange Commission (SEC) rules require presenting the comparable GAAP measure with equal or greater prominence and a reconciliation.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute ratios and the cash conversion cycle from statements.</li>
<li>Use DuPont analysis to explain a change in ROE.</li>
<li>Predict the effect of a transaction on a ratio.</li>
<li>Interpret economic indicators and variances.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Use <em>averages</em> for turnover ratios (average receivables, average inventory, average assets) unless the question says otherwise — using the ending balance is a common distractor.</p></div>
`,
  revision: `
<h3>Liquidity</h3>
<p>Current = current assets ÷ current liabilities. Quick = (cash + securities + receivables) ÷ current liabilities.</p>

<h3>Activity</h3>
<ul>
<li>Receivables turnover = credit sales ÷ average receivables; days sales outstanding (DSO) = 365 ÷ turnover.</li>
<li>Inventory turnover = cost of goods sold ÷ average inventory; days inventory outstanding (DIO) = 365 ÷ turnover.</li>
<li>Cash conversion cycle = DSO + DIO − days payables outstanding (DPO).</li>
</ul>

<h3>Solvency and profitability</h3>
<ul>
<li>Debt to equity; times interest earned = earnings before interest and taxes (EBIT) ÷ interest.</li>
<li>Return on assets (ROA) = net income ÷ average assets. Return on equity (ROE) = net income ÷ average equity.</li>
</ul>

<h3>DuPont</h3>
<p>ROE = net margin × asset turnover × equity multiplier.</p>

<h3>Transactions</h3>
<p>Ratio &gt; 1: equal decreases to numerator and denominator raise it; ratio &lt; 1: lower it.</p>

<h3>Variances</h3>
<p>Price = (actual price − standard price) × actual quantity. Quantity = (actual quantity − standard quantity) × standard price.</p>

<h3>Economics</h3>
<p>Leading indicators move first; gross domestic product (GDP) = consumption + investment + government + net exports; elastic demand (&gt; 1): price up → revenue down.</p>
`,
};
