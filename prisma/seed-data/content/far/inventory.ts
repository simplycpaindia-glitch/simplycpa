import type { TopicContent } from "../types";

export const inventory: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Inventory (Accounting Standards Codification (ASC) 330) is tested in Financial Accounting and Reporting (FAR) Area II. You need to know what belongs in inventory, how cost flows to cost of goods sold (COGS), how to apply the lower-of-cost rules, and how to estimate inventory. Calculation questions are common, and errors in inventory carry through two years of income.</p>

<h2>What goes into inventory</h2>
<h3>Ownership of goods</h3>
<table>
<thead><tr><th>Situation</th><th>Whose inventory?</th></tr></thead>
<tbody>
<tr><td>Free on board (FOB) shipping point, in transit</td><td>Buyer's — title passes when shipped</td></tr>
<tr><td>FOB destination, in transit</td><td>Seller's — title passes on delivery</td></tr>
<tr><td>Goods on consignment</td><td><strong>Consignor's</strong> (owner), not the consignee's</td></tr>
<tr><td>Sales with a high rate of return and no reasonable estimate</td><td>Seller's until returns can be estimated or the period ends</td></tr>
<tr><td>Bill-and-hold where control has passed</td><td>Buyer's</td></tr>
</tbody>
</table>

<h3>Costs to capitalize</h3>
<ul>
<li><strong>Include:</strong> purchase price, freight-in, import duties, handling, and costs to bring goods to a saleable condition and location; for manufacturers, direct materials, direct labor, and allocated manufacturing overhead.</li>
<li><strong>Exclude (expense):</strong> selling costs, freight-out, general and administrative costs, abnormal waste, and storage costs (unless storage is part of production, such as aging wine). Fixed overhead is allocated using <strong>normal capacity</strong>; unallocated overhead from abnormally low production is expensed.</li>
<li>Purchase discounts reduce cost. Under the net method, discounts lost are a financial expense.</li>
</ul>

<h2>Cost-flow assumptions</h2>
<table>
<thead><tr><th>Method</th><th>Cost of goods sold</th><th>Ending inventory</th><th>Rising prices effect</th></tr></thead>
<tbody>
<tr><td>Specific identification</td><td>Actual cost of items sold</td><td>Actual cost of items on hand</td><td>—</td></tr>
<tr><td>First-in, first-out (FIFO)</td><td>Oldest costs</td><td>Newest costs</td><td>Highest income and inventory</td></tr>
<tr><td>Last-in, first-out (LIFO)</td><td>Newest costs</td><td>Oldest costs</td><td>Lowest income and taxes; highest COGS</td></tr>
<tr><td>Weighted average (periodic)</td><td>Average cost of goods available</td><td>Same average</td><td>In between</td></tr>
<tr><td>Moving average (perpetual)</td><td>New average after every purchase</td><td>Latest average</td><td>In between</td></tr>
</tbody>
</table>
<p>FIFO gives the same result under periodic and perpetual systems. LIFO and average cost usually do not.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Beginning inventory 100 units at $10; purchases 200 at $13 and 100 at $16 (periodic); 250 units sold.<br>Goods available = 1,000 + 2,600 + 1,600 = $5,200 (400 units).<br><strong>FIFO</strong> COGS = 100 × 10 + 150 × 13 = $2,950; ending inventory = $2,250.<br><strong>LIFO</strong> COGS = 100 × 16 + 150 × 13 = $3,550; ending inventory = $1,650.<br><strong>Weighted average</strong> = $5,200 ÷ 400 = $13; COGS = $3,250; ending inventory = $1,950.</p></div>

<h3>LIFO rules to know</h3>
<ul>
<li><strong>LIFO conformity rule:</strong> if LIFO is used for tax, it must be used for financial reporting.</li>
<li><strong>LIFO liquidation:</strong> selling old, low-cost layers inflates income in periods of rising prices; disclose material effects.</li>
<li><strong>LIFO reserve</strong> = FIFO inventory − LIFO inventory; disclosed so users can compare with FIFO companies.</li>
<li>LIFO is <strong>prohibited</strong> under International Financial Reporting Standards (IFRS).</li>
</ul>

<h3>Dollar-value LIFO</h3>
<ol>
<li>Deflate ending inventory at current-year cost to base-year prices: ending ÷ current price index.</li>
<li>Compare to the prior year at base-year prices to find a new layer (or a decrement).</li>
<li>Price each new layer at the index of the year it was added.</li>
</ol>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Base inventory $100,000 (index 1.00). Year 1 ending inventory at current cost $132,000, index 1.10. Base-year value = $120,000, so the new layer is $20,000 × 1.10 = $22,000. Dollar-value LIFO inventory = 100,000 + 22,000 = <strong>$122,000</strong>.</p></div>

<h2>Subsequent measurement — the lower-of rules</h2>
<table>
<thead><tr><th>Cost method</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>FIFO, average cost, and all others</td><td><strong>Lower of cost and net realizable value (NRV)</strong>; NRV = estimated selling price − costs of completion, disposal, and transportation</td></tr>
<tr><td>LIFO and the retail inventory method</td><td><strong>Lower of cost or market (LCM)</strong>; market = replacement cost, but not above the ceiling (NRV) or below the floor (NRV − normal profit margin)</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE (LCM for LIFO):</strong> Cost $80; selling price $100; disposal cost $15 → NRV (ceiling) $85; normal profit $10 → floor $75; replacement cost $70. Market is the middle of 70, 75, 85 = <strong>$75</strong>. Lower of cost ($80) or market ($75) = $75, so write down $5 per unit.</p></div>

<p>Write-downs are recognized in income (usually in COGS). Under US Generally Accepted Accounting Principles (GAAP), <strong>reversals are prohibited</strong> for annual periods; IFRS allows reversal up to original cost. An interim-period decline expected to reverse by year-end need not be recognized.</p>

<h2>Estimating inventory</h2>
<h3>Gross profit method</h3>
<p>Used for interim reporting and casualty losses — not acceptable for annual GAAP statements.</p>
<p>Estimated COGS = Sales × (1 − gross profit %). Ending inventory = Goods available − estimated COGS. If the markup is stated <em>on cost</em>, convert: gross profit % on sales = markup ÷ (1 + markup).</p>

<h3>Retail inventory method</h3>
<ul>
<li>Cost-to-retail ratio = goods available at cost ÷ goods available at retail.</li>
<li><strong>Conventional (lower of cost or market) method:</strong> include net markups but <strong>exclude net markdowns</strong> from the ratio's denominator — produces a lower ratio and a conservative inventory.</li>
<li><strong>Average cost method:</strong> include both markups and markdowns.</li>
<li>Beginning inventory is excluded from the ratio under the retail LIFO method.</li>
<li>Ending retail = goods available at retail − net sales − normal shrinkage and employee discounts.</li>
</ul>

<h2>Inventory errors</h2>
<table>
<thead><tr><th>Error</th><th>Year 1 net income</th><th>Year 2 net income</th><th>Retained earnings end of Year 2</th></tr></thead>
<tbody>
<tr><td>Ending inventory overstated in Year 1</td><td>Overstated</td><td>Understated</td><td>Correct (self-correcting)</td></tr>
<tr><td>Ending inventory understated in Year 1</td><td>Understated</td><td>Overstated</td><td>Correct</td></tr>
</tbody>
</table>

<h2>Purchase commitments</h2>
<p>A loss on a non-cancelable purchase commitment is recognized when the market price falls below the contract price, and it is disclosed if material.</p>

<h2>How it is tested</h2>
<ul>
<li>Compute COGS and ending inventory under FIFO, LIFO, and average cost.</li>
<li>Apply the lower of cost and NRV, or LCM with ceiling and floor.</li>
<li>Estimate inventory using the gross profit or retail method.</li>
<li>Determine which goods belong in inventory (FOB terms, consignment).</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Match the lower-of rule to the cost method first. The ceiling-and-floor calculation applies <em>only</em> to LIFO and the retail method; for FIFO and average cost it is simply cost versus NRV.</p></div>
`,
  revision: `
<h3>Ownership</h3>
<p>Free on board (FOB) shipping point → buyer's in transit · FOB destination → seller's · Consignment → consignor's.</p>

<h3>Capitalize</h3>
<p>Purchase price + freight-in + duties + normal production overhead. Expense freight-out, selling, abnormal waste, unallocated fixed overhead.</p>

<h3>Rising prices</h3>
<p>First-in, first-out (FIFO): highest income and inventory. Last-in, first-out (LIFO): highest cost of goods sold (COGS), lowest taxes. LIFO conformity rule; LIFO banned under International Financial Reporting Standards (IFRS).</p>

<h3>Dollar-value LIFO</h3>
<p>Deflate by current index → find new layer at base prices → multiply layer by its year's index.</p>

<h3>Lower-of rules</h3>
<ul>
<li>FIFO or average → lower of cost and net realizable value (NRV).</li>
<li>LIFO or retail → lower of cost or market (LCM): market = replacement cost between floor (NRV − normal profit) and ceiling (NRV).</li>
<li>No reversals of write-downs under US Generally Accepted Accounting Principles (GAAP).</li>
</ul>

<h3>Estimation</h3>
<ul>
<li>Gross profit method: COGS = Sales × (1 − gross profit %). Markup on cost → gross profit % = markup ÷ (1 + markup).</li>
<li>Retail, conventional: markups in, <strong>markdowns out</strong> of the ratio.</li>
</ul>

<h3>Errors</h3>
<p>Ending inventory overstated → this year's income up, next year's down; retained earnings correct after 2 years.</p>
`,
};
