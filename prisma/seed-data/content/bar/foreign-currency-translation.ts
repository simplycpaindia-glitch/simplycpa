import type { TopicContent } from "../types";

export const foreignCurrency: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Foreign currency matters (Accounting Standards Codification (ASC) 830) arise in two ways: transactions denominated in a foreign currency, and financial statements of foreign operations that must be converted into US dollars for consolidation. Business Analysis and Reporting (BAR) tests the functional currency decision, the translation and remeasurement methods, and where exchange gains and losses are reported.</p>

<h2>Key terms</h2>
<ul>
<li><strong>Reporting currency:</strong> the currency of the parent's financial statements (US dollars for US companies).</li>
<li><strong>Functional currency:</strong> the currency of the <strong>primary economic environment</strong> in which the entity operates — normally where it generates and spends cash.</li>
<li><strong>Local currency:</strong> the currency of the country where the foreign entity is located (it keeps its books in it).</li>
<li><strong>Spot rate:</strong> the exchange rate for immediate delivery. <strong>Direct quote:</strong> dollars per unit of foreign currency.</li>
</ul>

<h3>Indicators of functional currency</h3>
<table>
<thead><tr><th>Indicator</th><th>Points to the foreign currency</th><th>Points to the parent's currency (US dollar)</th></tr></thead>
<tbody>
<tr><td>Cash flows</td><td>Primarily in foreign currency; don't affect parent's cash flows</td><td>Directly affect the parent's cash flows; readily remitted</td></tr>
<tr><td>Sales prices</td><td>Set by local competition and regulation</td><td>Set by worldwide competition and prices</td></tr>
<tr><td>Sales market</td><td>Active local market</td><td>Mostly in the parent's country or in dollars</td></tr>
<tr><td>Expenses</td><td>Local costs (labor, materials)</td><td>Components sourced from the parent's country</td></tr>
<tr><td>Financing</td><td>Local borrowings, serviced by local operations</td><td>From the parent or dollar-denominated</td></tr>
<tr><td>Intercompany transactions</td><td>Low volume</td><td>High volume with the parent</td></tr>
</tbody>
</table>

<h2>Foreign currency transactions</h2>
<ul>
<li>Record the transaction at the <strong>spot rate on the transaction date</strong>.</li>
<li>At each balance sheet date, remeasure <strong>monetary</strong> items (receivables, payables, cash, loans) denominated in the foreign currency to the <strong>current (spot) rate</strong>.</li>
<li>The resulting <strong>transaction gain or loss</strong> goes to <strong>net income</strong> — including unrealized gains and losses at year-end.</li>
<li>Exceptions: gains and losses on transactions that hedge a net investment, and on long-term intercompany advances not expected to be settled, go to other comprehensive income (OCI).</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> On December 1 a US company buys inventory for 100,000 euros, payable February 1, when the rate is $1.10. At December 31 the rate is $1.14; on February 1 it is $1.12.<br>December 1: inventory and payable recorded at <strong>$110,000</strong>.<br>December 31: payable remeasured to $114,000 → <strong>$4,000 loss</strong> in net income.<br>February 1: paid $112,000 → <strong>$2,000 gain</strong>. Inventory stays at $110,000.</p></div>

<h2>Converting foreign financial statements</h2>
<table>
<thead><tr><th>Situation</th><th>Method</th><th>Exchange differences go to</th></tr></thead>
<tbody>
<tr><td>Books kept in the functional currency, which is <strong>foreign</strong> → translate to dollars</td><td><strong>Translation (current rate method)</strong></td><td><strong>OCI</strong> — cumulative translation adjustment (CTA)</td></tr>
<tr><td>Books kept in local currency, but the functional currency is the <strong>US dollar</strong> → remeasure into dollars</td><td><strong>Remeasurement (temporal method)</strong></td><td><strong>Net income</strong></td></tr>
<tr><td>Books in local currency, functional currency is a <strong>third</strong> currency</td><td>First remeasure into the functional currency (temporal), then translate into dollars (current rate)</td><td>Remeasurement: net income; translation: OCI</td></tr>
</tbody>
</table>

<h3>Rates used</h3>
<table>
<thead><tr><th>Item</th><th>Translation (current rate method)</th><th>Remeasurement (temporal method)</th></tr></thead>
<tbody>
<tr><td>Monetary assets and liabilities</td><td>Current rate</td><td>Current rate</td></tr>
<tr><td>Nonmonetary assets (inventory at cost, property, plant, and equipment, prepaids)</td><td>Current rate</td><td><strong>Historical rate</strong></td></tr>
<tr><td>Common stock, additional paid-in capital</td><td>Historical rate</td><td>Historical rate</td></tr>
<tr><td>Retained earnings</td><td>Rolled forward (beginning + translated income − dividends at declaration rate)</td><td>Rolled forward</td></tr>
<tr><td>Revenues and most expenses</td><td>Rate on transaction dates (weighted average allowed)</td><td>Weighted average</td></tr>
<tr><td>Cost of goods sold, depreciation, amortization</td><td>Weighted average</td><td><strong>Historical rates</strong> of the related assets</td></tr>
<tr><td>Balancing figure</td><td>CTA in accumulated OCI</td><td>Remeasurement gain or loss in net income</td></tr>
</tbody>
</table>

<h3>Highly inflationary economies</h3>
<p>If cumulative inflation over <strong>three years exceeds about 100%</strong>, the foreign entity's statements are <strong>remeasured</strong> as if the reporting currency (US dollar) were the functional currency — the temporal method — so exchange differences go to net income.</p>

<h3>Sale or liquidation of a foreign entity</h3>
<p>The accumulated CTA is reclassified from accumulated OCI into net income as part of the gain or loss on sale when the parent sells or substantially liquidates its investment in the foreign entity.</p>

<h2>Cash flow statement and taxes</h2>
<ul>
<li>Foreign currency cash flows are translated at the rates on the dates of the flows (a weighted average is allowed). The effect of exchange rate changes on cash is shown as a separate reconciling line.</li>
<li>Deferred taxes may be required on translation adjustments, unless earnings are indefinitely reinvested abroad.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Determine the functional currency from indicators.</li>
<li>Compute transaction gains and losses on payables and receivables.</li>
<li>Choose the rate for each item under translation versus remeasurement.</li>
<li>State where the exchange difference is reported.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Translation → OCI; Remeasurement → Income. And transaction gains and losses on ordinary receivables and payables always go to income.</p></div>
`,
  revision: `
<h3>Functional currency</h3>
<p>Currency of the primary economic environment — look at cash flows, sales prices and markets, expenses, financing, intercompany volume.</p>

<h3>Transactions</h3>
<ul>
<li>Record at spot on transaction date.</li>
<li>Remeasure monetary items at each balance sheet date → gain or loss in <strong>net income</strong>.</li>
</ul>

<h3>Foreign statements</h3>
<table>
<thead><tr><th></th><th>Translation (current rate)</th><th>Remeasurement (temporal)</th></tr></thead>
<tbody>
<tr><td>When</td><td>Functional currency = foreign</td><td>Functional currency = US dollar (or highly inflationary)</td></tr>
<tr><td>Assets and liabilities</td><td>All at current rate</td><td>Monetary current; nonmonetary historical</td></tr>
<tr><td>Income statement</td><td>Weighted average</td><td>Average; cost of goods sold and depreciation historical</td></tr>
<tr><td>Difference</td><td>Other comprehensive income (OCI) — cumulative translation adjustment (CTA)</td><td>Net income</td></tr>
</tbody>
</table>

<h3>Other</h3>
<ul>
<li>Highly inflationary: &gt; ≈ 100% cumulative over 3 years → remeasure.</li>
<li>Sale of foreign entity → recycle CTA to income.</li>
</ul>
`,
};
