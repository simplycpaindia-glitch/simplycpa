import type { TopicContent } from "../types";

export const analyticalProcedures: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Analytical procedures evaluate financial information by studying plausible relationships among financial and nonfinancial data. Auditing and Attestation (AUD) tests when they are required, how precise an expectation must be to serve as substantive evidence, the common ratios, and what a fluctuation suggests.</p>

<h2>When analytical procedures are used</h2>
<table>
<thead><tr><th>Stage</th><th>Required?</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Risk assessment (planning)</td><td><strong>Required</strong></td><td>Understand the entity and identify unusual transactions, amounts, ratios, and trends that may indicate risks — including revenue-related fraud risk</td></tr>
<tr><td>Substantive procedures</td><td>Optional</td><td>Obtain evidence about assertions, alone or with tests of details</td></tr>
<tr><td>Near the end of the audit (overall review)</td><td><strong>Required</strong></td><td>Help form an overall conclusion on whether the financial statements are consistent with the auditor's understanding of the entity</td></tr>
</tbody>
</table>
<p>Planning analytics often use aggregated data and may produce only a broad indication of risk. If the final review identifies a previously unrecognized risk, the auditor revises the risk assessment and performs further procedures.</p>

<h2>Substantive analytical procedures</h2>
<p>A substantive analytical procedure has four steps:</p>
<ol>
<li><strong>Develop an expectation</strong> of the recorded amount or ratio.</li>
<li><strong>Define a threshold</strong> — the difference from the expectation that can be accepted without further investigation.</li>
<li><strong>Compare</strong> the recorded amount with the expectation.</li>
<li><strong>Investigate significant differences</strong> — inquire of management and <strong>corroborate</strong> the responses with other evidence; perform other procedures as needed.</li>
</ol>

<h3>Factors affecting effectiveness</h3>
<table>
<thead><tr><th>Factor</th><th>Considerations</th></tr></thead>
<tbody>
<tr><td>Suitability for the assertion</td><td>Best for large volumes of transactions that are predictable over time (payroll, interest, rent, depreciation). Less suitable for accounts driven by management judgment or with high fraud risk.</td></tr>
<tr><td>Plausibility and predictability of the relationship</td><td>Relationships in a stable environment are more predictable; income statement accounts are generally more predictable than balance sheet accounts.</td></tr>
<tr><td>Reliability of the data</td><td>Independent external sources, data subject to audit or effective controls, and data from knowledgeable sources are more reliable.</td></tr>
<tr><td>Precision of the expectation</td><td>Disaggregated data (by month, product, location) and nonfinancial drivers give more precise expectations.</td></tr>
</tbody>
</table>
<p>For significant risks, substantive analytical procedures alone are not sufficient — tests of details are also required.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Average debt outstanding was $2,000,000 at 6%, so expected interest expense is <strong>$120,000</strong>. Recorded interest is $150,000, and the threshold is $10,000. The $30,000 difference must be investigated — possible causes include unrecorded debt, a rate change, or misclassified fees.</p></div>

<h2>Types of analytical procedures</h2>
<table>
<thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Trend analysis</td><td>Compare account balances over time</td><td>Monthly sales for three years</td></tr>
<tr><td>Ratio analysis</td><td>Compare relationships between accounts, over time or with industry data</td><td>Gross margin, receivables turnover</td></tr>
<tr><td>Reasonableness testing</td><td>Build an expectation from operational or external data</td><td>Rooms × occupancy × average rate for hotel revenue; headcount × average salary for payroll</td></tr>
<tr><td>Regression analysis</td><td>Statistical model relating a balance to its drivers</td><td>Utility costs versus production hours</td></tr>
<tr><td>Data analytics</td><td>Analyzing entire populations with software</td><td>Identifying sales returned just after year-end</td></tr>
</tbody>
</table>

<h2>Key ratios and what changes may signal</h2>
<table>
<thead><tr><th>Ratio</th><th>Formula</th><th>A change may suggest</th></tr></thead>
<tbody>
<tr><td>Current ratio</td><td>Current assets ÷ current liabilities</td><td>Liquidity problems; misclassified debt</td></tr>
<tr><td>Quick (acid-test) ratio</td><td>(Cash + marketable securities + receivables) ÷ current liabilities</td><td>Liquidity without relying on inventory</td></tr>
<tr><td>Gross margin</td><td>Gross profit ÷ net sales</td><td>A sharp rise: overstated sales or ending inventory, or unrecorded purchases</td></tr>
<tr><td>Receivables turnover</td><td>Net credit sales ÷ average receivables</td><td>A decline: collection problems, fictitious sales, inadequate allowance</td></tr>
<tr><td>Days sales outstanding</td><td>365 ÷ receivables turnover</td><td>Rising days: same as falling turnover</td></tr>
<tr><td>Inventory turnover</td><td>Cost of goods sold ÷ average inventory</td><td>A decline: obsolete or overstated inventory</td></tr>
<tr><td>Days in inventory</td><td>365 ÷ inventory turnover</td><td>Rising days: slow-moving stock</td></tr>
<tr><td>Debt to equity</td><td>Total liabilities ÷ total equity</td><td>Solvency and covenant risk</td></tr>
<tr><td>Times interest earned</td><td>Earnings before interest and taxes ÷ interest expense</td><td>Ability to service debt</td></tr>
<tr><td>Return on assets</td><td>Net income ÷ average total assets</td><td>Profitability trends</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Gross margin rose from 32% to 41% with no change in prices, product mix, or costs. Possible explanations include fictitious sales, overstated ending inventory (understated cost of goods sold), or unrecorded purchases. The auditor investigates — for example, with sales cutoff tests and inventory pricing tests — rather than accepting management's explanation without corroboration.</p></div>

<h2>Documentation</h2>
<p>For substantive analytical procedures, document the <strong>expectation</strong> and the factors considered in developing it, the <strong>results</strong> of comparing it with recorded amounts, and any <strong>additional procedures</strong> performed in response to significant differences, with their results.</p>

<h2>How it is tested</h2>
<ul>
<li>Identify the stages where analytical procedures are required.</li>
<li>Choose the factor that most improves the precision of an expectation.</li>
<li>Interpret a ratio change and pick the most likely misstatement.</li>
<li>Compute an expectation and decide whether a difference needs investigation.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Required at the beginning (risk assessment) and the end (overall review); optional in the middle (substantive). Management's explanation of a difference must always be <em>corroborated</em> — inquiry alone never closes an unexpected fluctuation.</p></div>
`,
  revision: `
<h3>When</h3>
<ul>
<li>Risk assessment: <strong>required</strong>.</li>
<li>Substantive: optional.</li>
<li>Final overall review: <strong>required</strong>.</li>
</ul>

<h3>Substantive analytics</h3>
<ol>
<li>Expectation → 2. Threshold → 3. Compare → 4. Investigate and <strong>corroborate</strong>.</li>
</ol>
<ul>
<li>Best for large, predictable populations; income statement &gt; balance sheet.</li>
<li>Precision improves with disaggregated data and reliable, independent sources.</li>
<li>Not enough alone for significant risks.</li>
</ul>

<h3>Ratios to know</h3>
<ul>
<li>Gross margin up sharply → overstated sales or inventory.</li>
<li>Receivables turnover down → collection issues, fictitious sales.</li>
<li>Inventory turnover down → obsolete or overstated inventory.</li>
<li>Days = 365 ÷ turnover.</li>
</ul>

<h3>Types</h3>
<p>Trend · ratio · reasonableness (nonfinancial drivers) · regression.</p>
`,
};
