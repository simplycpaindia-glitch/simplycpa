import type { TopicContent } from "../types";

export const derivativesHedging: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Derivatives and hedging (Accounting Standards Codification (ASC) 815) is one of the most technical areas in Business Analysis and Reporting (BAR). The exam tests whether an instrument is a derivative, how derivatives are measured, and how the three hedge accounting models change where gains and losses are reported.</p>

<h2>What is a derivative?</h2>
<p>A financial instrument or other contract is a derivative if it has all three characteristics:</p>
<ol>
<li><strong>Underlying and notional amount</strong> (or payment provision): an underlying is a variable such as an interest rate, commodity price, exchange rate, or index; the notional is a number of units (for example, 10,000 bushels or $1 million).</li>
<li><strong>No initial net investment</strong>, or one smaller than would be required for similar exposure.</li>
<li><strong>Net settlement</strong>: the contract can be settled net in cash, through a market mechanism, or by delivering an asset readily convertible to cash.</li>
</ol>
<p>Common derivatives: <strong>forwards</strong> (customized, over the counter, settled at maturity), <strong>futures</strong> (standardized, exchange-traded, settled daily), <strong>options</strong> (the right but not the obligation — calls to buy, puts to sell; the buyer pays a premium), and <strong>swaps</strong> (exchanges of cash flows, such as fixed for variable interest).</p>

<h3>Scope exceptions</h3>
<ul>
<li><strong>Normal purchases and normal sales:</strong> contracts to buy or sell goods in quantities expected to be used or sold in the normal course of business, with probable physical delivery, may be excluded by election.</li>
<li>Regular-way security trades, certain insurance contracts, and contracts indexed to the entity's own equity and classified in equity.</li>
</ul>

<h3>Embedded derivatives</h3>
<p>A derivative feature within a host contract (for example, a commodity-indexed payment in a debt instrument) must be <strong>bifurcated</strong> and accounted for separately if: its economic characteristics and risks are not clearly and closely related to the host; the hybrid instrument is not already measured at fair value through earnings; and a separate instrument with the same terms would be a derivative. Alternatively, the entity may elect fair value for the whole hybrid.</p>

<h2>Measurement</h2>
<ul>
<li>All derivatives are recognized as <strong>assets or liabilities at fair value</strong> on the balance sheet.</li>
<li>Without hedge accounting, changes in fair value go to <strong>net income</strong> immediately.</li>
<li>Hedge accounting changes the <em>timing</em> of recognition so that gains and losses on the hedge and the hedged item are recognized in earnings together.</li>
</ul>

<h2>The three hedge accounting models</h2>
<table>
<thead><tr><th></th><th>Fair value hedge</th><th>Cash flow hedge</th><th>Net investment hedge</th></tr></thead>
<tbody>
<tr><td>Hedges exposure to</td><td>Changes in the <strong>fair value</strong> of a recognized asset, liability, or <strong>firm commitment</strong></td><td>Variability in <strong>future cash flows</strong> of a <strong>forecasted transaction</strong> or a variable-rate instrument</td><td>Foreign currency exposure of a net investment in a foreign operation</td></tr>
<tr><td>Example</td><td>Swapping fixed-rate debt to variable; hedging a firm commitment to buy equipment in euros</td><td>Swapping variable-rate debt to fixed; hedging a forecasted inventory purchase</td><td>A euro-denominated loan hedging a European subsidiary</td></tr>
<tr><td>Hedging instrument's gain or loss</td><td><strong>Net income</strong></td><td><strong>Other comprehensive income (OCI)</strong>, reclassified to earnings when the hedged transaction affects earnings</td><td>OCI (cumulative translation adjustment) until the foreign operation is sold</td></tr>
<tr><td>Hedged item</td><td>Carrying amount adjusted for the hedged risk; the change goes to net income</td><td>No adjustment (the transaction hasn't happened yet)</td><td>—</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE (fair value hedge):</strong> A company holds inventory it expects to sell in three months and enters a futures contract to lock in the selling price. The inventory's fair value falls $20,000 and the futures gain $19,000. Both are recognized in earnings: a $20,000 loss on the inventory (adjusting its carrying amount) and a $19,000 gain on the futures — net effect $1,000.</p></div>

<div class="callout callout-example"><p><strong>EXAMPLE (cash flow hedge):</strong> A company with variable-rate debt enters a pay-fixed, receive-variable swap. When rates fall, the swap's fair value becomes a $15,000 liability. The $15,000 loss goes to OCI and is reclassified into interest expense as the hedged interest payments occur, so interest expense reflects the fixed rate.</p></div>

<h2>Qualifying for hedge accounting</h2>
<ul>
<li><strong>Formal documentation at inception:</strong> the hedging relationship, risk management objective and strategy, the hedging instrument, the hedged item, the nature of the risk, and how effectiveness will be assessed.</li>
<li>The hedge must be expected to be <strong>highly effective</strong> — offsetting changes in fair value or cash flows within a range of roughly <strong>80% to 125%</strong>.</li>
<li>Forecasted transactions must be <strong>probable</strong>.</li>
<li>After the Accounting Standards Update (ASU) 2017-12 simplifications:
<ul>
<li>Ineffectiveness is <strong>no longer measured separately</strong>. For cash flow hedges, the entire change in the hedging instrument's fair value (if highly effective) goes to OCI.</li>
<li>The hedging instrument's earnings effect is presented in the <strong>same income statement line</strong> as the hedged item.</li>
<li>Qualitative effectiveness assessments are allowed after an initial quantitative test.</li>
<li>Private companies have additional relief (including a simplified hedge accounting approach for certain swaps).</li>
</ul></li>
</ul>

<h3>Discontinuing a hedge</h3>
<ul>
<li>A hedge is discontinued if criteria are no longer met, the derivative expires or is sold, or the designation is removed.</li>
<li>For a cash flow hedge, amounts in accumulated OCI stay there until the forecasted transaction affects earnings — unless it is <strong>probable the transaction will not occur</strong>, in which case they are reclassified to earnings immediately.</li>
</ul>

<h2>Disclosures</h2>
<p>Objectives and strategies for using derivatives, the location and fair value of derivatives on the balance sheet, gains and losses by hedge type and income statement line, and credit-risk-related contingent features.</p>

<h2>How it is tested</h2>
<ul>
<li>Decide whether a contract is a derivative or qualifies for a scope exception.</li>
<li>Classify a hedge as fair value, cash flow, or net investment.</li>
<li>State where the derivative's gain or loss is reported.</li>
<li>Apply documentation and effectiveness requirements.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "Firm commitment" or "existing fixed-rate item" → fair value hedge → earnings. "Forecasted transaction" or "variable-rate item" → cash flow hedge → OCI first. Most hedge questions are solved by that distinction alone.</p></div>
`,
  revision: `
<h3>Derivative = all three</h3>
<p>Underlying + notional · little or no initial investment · net settlement.</p>

<h3>Measurement</h3>
<p>Fair value on the balance sheet; changes to net income unless hedge accounting applies.</p>

<h3>Hedge models</h3>
<table>
<thead><tr><th>Type</th><th>Hedges</th><th>Derivative gain or loss</th></tr></thead>
<tbody>
<tr><td>Fair value</td><td>Recognized items, <strong>firm commitments</strong>, fixed-rate items</td><td>Net income (with hedged item's change)</td></tr>
<tr><td>Cash flow</td><td><strong>Forecasted transactions</strong>, variable-rate items</td><td>Other comprehensive income (OCI), then reclassified</td></tr>
<tr><td>Net investment</td><td>Foreign operation</td><td>OCI (translation adjustment)</td></tr>
</tbody>
</table>

<h3>Qualifying</h3>
<ul>
<li>Documentation at inception; highly effective (≈ 80–125%); forecasted transactions probable.</li>
<li>Ineffectiveness not separately measured; same income statement line as the hedged item.</li>
<li>Forecasted transaction no longer probable → reclassify OCI to earnings now.</li>
</ul>

<h3>Other</h3>
<p>Normal purchases and sales exception. Embedded derivatives: bifurcate if not clearly and closely related.</p>
`,
};
