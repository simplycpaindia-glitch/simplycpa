import type { TopicContent } from "../types";

export const investments: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Investments in debt and equity securities (Accounting Standards Codification (ASC) 320, 321, 323, and 326) are tested heavily in Financial Accounting and Reporting (FAR) Area II. Every question starts with one decision: what kind of security is it, and how much influence does the investor have? That determines the measurement basis and where gains and losses go.</p>

<h2>Decision map</h2>
<table>
<thead><tr><th>Investment</th><th>Measurement</th><th>Unrealized gains and losses</th></tr></thead>
<tbody>
<tr><td>Debt — held-to-maturity (HTM)</td><td>Amortized cost, less allowance for credit losses</td><td>Not recognized</td></tr>
<tr><td>Debt — trading</td><td>Fair value</td><td>Net income</td></tr>
<tr><td>Debt — available-for-sale (AFS)</td><td>Fair value</td><td>Other comprehensive income (OCI), except credit losses (net income)</td></tr>
<tr><td>Equity — no significant influence (generally &lt; 20%)</td><td>Fair value</td><td>Net income</td></tr>
<tr><td>Equity — no readily determinable fair value</td><td>Measurement alternative: cost − impairment ± observable price changes</td><td>Net income</td></tr>
<tr><td>Equity — significant influence (generally 20–50%)</td><td>Equity method</td><td>Not recognized (share of investee income instead)</td></tr>
<tr><td>Equity — control (generally &gt; 50%)</td><td>Consolidation</td><td>—</td></tr>
</tbody>
</table>

<h2>Debt securities (ASC 320)</h2>
<ul>
<li><strong>Held-to-maturity</strong> requires both the positive <strong>intent and ability</strong> to hold to maturity. Selling or transferring HTM securities (other than in limited circumstances such as significant credit deterioration or a change in tax law) can "taint" the whole portfolio.</li>
<li><strong>Trading</strong> securities are bought and held principally to sell in the near term.</li>
<li><strong>Available-for-sale</strong> is the residual category.</li>
<li>Interest income for all three uses the <strong>effective interest method</strong>, amortizing any premium or discount.</li>
</ul>

<h3>Available-for-sale mechanics</h3>
<ol>
<li>Record interest income using the effective interest method (amortized cost changes).</li>
<li>Compare fair value to amortized cost; the difference sits in accumulated other comprehensive income (AOCI) through a valuation account.</li>
<li>On sale, reclassify ("recycle") the related accumulated OCI into net income as a realized gain or loss.</li>
</ol>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An AFS bond has an amortized cost of $98,000 and a fair value of $101,000 at year-end, and the previous year-end fair value adjustment was a $1,000 debit. The year's unrealized gain in OCI = (101,000 − 98,000) − 1,000 = <strong>$2,000</strong>.</p></div>

<h3>Credit losses on debt securities (ASC 326)</h3>
<ul>
<li><strong>HTM:</strong> current expected credit loss (CECL) model — lifetime expected losses recorded in an allowance from day one.</li>
<li><strong>AFS:</strong> when fair value is below amortized cost, the <strong>credit-related</strong> portion is recorded through an allowance (net income), limited to the amount by which fair value is below amortized cost; the non-credit portion stays in OCI. If the entity intends to sell or will more likely than not be required to sell, write the security down to fair value through net income.</li>
<li>Allowances can be reversed if credit improves.</li>
</ul>

<h3>Transfers between categories</h3>
<table>
<thead><tr><th>Transfer</th><th>Unrealized gain or loss at transfer date</th></tr></thead>
<tbody>
<tr><td>Into trading</td><td>Recognize in net income immediately</td></tr>
<tr><td>Out of trading</td><td>Already recognized — no reversal</td></tr>
<tr><td>AFS to HTM</td><td>Keep in OCI and amortize over the remaining life</td></tr>
<tr><td>HTM to AFS</td><td>Recognize in OCI</td></tr>
</tbody>
</table>

<h2>Equity securities without significant influence (ASC 321)</h2>
<ul>
<li>Measured at <strong>fair value through net income</strong> — the available-for-sale category for equity securities was eliminated by Accounting Standards Update (ASU) 2016-01.</li>
<li>Dividends received are dividend income.</li>
<li>If there is no readily determinable fair value, the investor may elect the measurement alternative and must assess impairment qualitatively each period.</li>
</ul>

<h2>The equity method (ASC 323)</h2>
<p>Significant influence is presumed at 20–50% of voting stock, but facts can override the presumption: board representation, participation in policy-making, material intercompany transactions, interchange of managerial personnel, or technological dependency can create influence below 20%; opposition by the investee or a single majority owner can defeat it above 20%.</p>

<table>
<thead><tr><th>Event</th><th>Effect on investment account</th></tr></thead>
<tbody>
<tr><td>Purchase</td><td>Debit at cost</td></tr>
<tr><td>Share of investee net income</td><td>Increase (equity income)</td></tr>
<tr><td>Share of investee net loss</td><td>Decrease (stop at zero unless the investor guaranteed obligations)</td></tr>
<tr><td>Dividends received</td><td><strong>Decrease</strong> — a return of investment, not income</td></tr>
<tr><td>Amortization of excess cost assigned to depreciable assets</td><td>Decrease (reduces equity income)</td></tr>
<tr><td>Share of investee OCI</td><td>Increase or decrease, recorded in the investor's OCI</td></tr>
</tbody>
</table>

<p>Excess of cost over the investor's share of book value is assigned first to specific assets whose fair value exceeds book value (depreciated over their lives — land is not), and any remainder is <strong>equity-method goodwill</strong>, which is not amortized or separately tested for impairment. The investment as a whole is tested for other-than-temporary impairment.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An investor pays $500,000 for 25% of an investee with net assets of $1,600,000 (share $400,000). The $100,000 excess relates to equipment with a 10-year remaining life. The investee earns $200,000 and pays $40,000 in dividends.<br>Equity income = 200,000 × 25% − 10,000 = <strong>$40,000</strong>.<br>Investment balance = 500,000 + 40,000 − 10,000 (25% of dividends) = <strong>$530,000</strong>.</p></div>

<h3>Other equity method rules</h3>
<ul>
<li><strong>Intra-entity profits</strong> on inventory still held are eliminated to the extent of the investor's ownership share.</li>
<li><strong>Changing to the equity method</strong> (for example, from 15% to 25%): apply prospectively — add the cost of the new shares to the carrying amount of the existing interest; no retroactive restatement (ASU 2016-07).</li>
<li><strong>Losing significant influence:</strong> stop the equity method; the carrying amount becomes the starting point for fair value accounting.</li>
<li><strong>Fair value option:</strong> an investor may elect fair value instead of the equity method at initial recognition; the election is irrevocable.</li>
</ul>

<h2>Differences from International Financial Reporting Standards (IFRS)</h2>
<p>IFRS 9 uses business-model categories (amortized cost; fair value through OCI; fair value through profit or loss) and allows an irrevocable election to present fair value changes on certain equity investments in OCI, never recycled.</p>

<h2>How it is tested</h2>
<ul>
<li>Classify securities and state where gains and losses appear.</li>
<li>Compute equity-method income and the ending investment balance.</li>
<li>Record AFS fair value adjustments and reclassification on sale.</li>
<li>Split an AFS impairment between credit and non-credit portions.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Under the equity method, dividends <em>reduce the investment</em> and are not income. Under fair value accounting, dividends <em>are</em> income. Mixing these two up is the single most common error in this topic.</p></div>
`,
  revision: `
<h3>Debt securities</h3>
<ul>
<li>Held-to-maturity (HTM): amortized cost; needs intent <strong>and</strong> ability.</li>
<li>Trading: fair value → net income.</li>
<li>Available-for-sale (AFS): fair value → other comprehensive income (OCI); recycle on sale; credit loss → allowance through net income, capped at fair value shortfall.</li>
</ul>

<h3>Equity securities</h3>
<ul>
<li>&lt; 20%, no influence: fair value → <strong>net income</strong> (never OCI). Dividends = income.</li>
<li>No readily determinable fair value: cost − impairment ± observable price changes.</li>
<li>20–50%: equity method. &gt; 50%: consolidate.</li>
</ul>

<h3>Equity method</h3>
<ul>
<li>Investment + share of income − dividends received − excess depreciation.</li>
<li>Dividends <strong>reduce</strong> the investment.</li>
<li>Excess cost: specific assets first (depreciate), remainder = goodwill (not amortized).</li>
<li>Stepping up to significant influence: prospective, no restatement.</li>
<li>Losses stop at zero unless guarantees exist.</li>
</ul>

<h3>Transfers</h3>
<p>Into trading → gain or loss to net income now. AFS → HTM → keep in OCI and amortize.</p>
`,
};
