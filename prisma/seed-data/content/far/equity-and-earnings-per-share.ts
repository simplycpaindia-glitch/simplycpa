import type { TopicContent } from "../types";

export const equityEps: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Stockholders' equity and earnings per share (EPS) are tested in Financial Accounting and Reporting (FAR) through journal entries for stock issuances, treasury stock, dividends, and splits, and through basic and diluted EPS calculations — a favorite task-based simulation (TBS). The guidance is in Accounting Standards Codification (ASC) 505 (equity), ASC 718 (share-based payment), and ASC 260 (EPS).</p>

<h2>Components of equity</h2>
<ul>
<li><strong>Contributed capital:</strong> common and preferred stock at par or stated value, plus additional paid-in capital (APIC).</li>
<li><strong>Retained earnings:</strong> cumulative net income less dividends (and prior period adjustments). Appropriations restrict retained earnings but do not move cash.</li>
<li><strong>Accumulated other comprehensive income (AOCI)</strong>.</li>
<li><strong>Treasury stock</strong> (a contra-equity account) and <strong>noncontrolling interest</strong>.</li>
</ul>

<h2>Issuing stock</h2>
<ul>
<li>Cash issuance: credit common stock at par; the excess goes to APIC.</li>
<li>Stock issued for noncash assets or services: fair value of the stock or the consideration received, whichever is more reliably measurable.</li>
<li>Lump-sum issuance of two classes: allocate by relative fair values (or the incremental method).</li>
<li>Stock issuance costs reduce APIC; they are not expensed.</li>
<li>Stock subscriptions receivable are generally a contra-equity account.</li>
</ul>

<h2>Treasury stock</h2>
<table>
<thead><tr><th></th><th>Cost method (most common)</th><th>Par value method</th></tr></thead>
<tbody>
<tr><td>Purchase</td><td>Debit treasury stock at cost</td><td>Debit treasury stock at par; remove original APIC; difference to APIC–treasury or retained earnings</td></tr>
<tr><td>Reissue above cost</td><td>Credit APIC–treasury stock for the excess</td><td>Treated like a new issuance</td></tr>
<tr><td>Reissue below cost</td><td>Debit APIC–treasury stock first, then retained earnings</td><td>—</td></tr>
</tbody>
</table>
<p>Gains and losses on treasury stock transactions <strong>never</strong> go to the income statement. Treasury shares are not outstanding: they receive no dividends and have no votes.</p>

<h2>Dividends</h2>
<table>
<thead><tr><th>Type</th><th>Accounting</th></tr></thead>
<tbody>
<tr><td>Cash</td><td>Declaration date: debit retained earnings, credit dividends payable. Record date: no entry. Payment date: pay the liability.</td></tr>
<tr><td>Property</td><td>Remeasure the property to fair value (recognize gain or loss) on declaration, then distribute at fair value</td></tr>
<tr><td>Small stock dividend (less than 20–25%)</td><td>Capitalize retained earnings at the <strong>fair value</strong> of shares issued</td></tr>
<tr><td>Large stock dividend (more than 20–25%)</td><td>Capitalize at <strong>par value</strong></td></tr>
<tr><td>Stock split</td><td>No entry (memo only) — par value per share changes; total equity unchanged</td></tr>
<tr><td>Liquidating dividend</td><td>A return of capital — debit APIC, not retained earnings</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company with 100,000 shares of $1 par stock declares a 10% stock dividend when the market price is $30. Retained earnings decreases by 10,000 × $30 = <strong>$300,000</strong>; common stock increases $10,000 and APIC $290,000. Total equity is unchanged.</p></div>

<h3>Preferred stock features</h3>
<ul>
<li><strong>Cumulative:</strong> undeclared dividends accumulate as dividends in arrears — disclosed, not a liability until declared.</li>
<li><strong>Participating:</strong> shares in dividends beyond the stated rate.</li>
<li><strong>Mandatorily redeemable</strong> preferred stock is a <strong>liability</strong> (ASC 480).</li>
</ul>

<h2>Share-based compensation (ASC 718)</h2>
<ul>
<li><strong>Equity-classified awards</strong> (stock options, restricted stock) are measured at <strong>grant-date fair value</strong> and expensed over the <strong>requisite service period</strong>, debiting compensation expense and crediting APIC. They are not remeasured.</li>
<li>Forfeitures: estimate them or account for them as they occur (policy election).</li>
<li><strong>Liability-classified awards</strong> (cash-settled stock appreciation rights) are remeasured to fair value each reporting date.</li>
<li>Details are covered in the Business Analysis and Reporting (BAR) Stock Compensation topic.</li>
</ul>

<h2>Earnings per share</h2>
<h3>Basic EPS</h3>
<p>Basic EPS = (Net income − preferred dividends) ÷ weighted-average common shares outstanding.</p>
<ul>
<li>Subtract <strong>cumulative</strong> preferred dividends for the current year whether declared or not; subtract non-cumulative preferred dividends only if declared. Never subtract dividends in arrears from prior years.</li>
<li>Weight new issuances and treasury purchases by the fraction of the year outstanding.</li>
<li><strong>Stock dividends and splits are applied retroactively</strong> to all periods presented, as if they occurred at the start of the earliest period — including splits after year-end but before issuance.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> 100,000 shares outstanding on January 1; 24,000 issued April 1; a 2-for-1 split on November 1. Weighted average = (100,000 × 2) + (24,000 × 2 × 9/12) = 200,000 + 36,000 = <strong>236,000</strong>. Net income is $600,000 and cumulative preferred dividends are $50,000, undeclared. Basic EPS = (600,000 − 50,000) ÷ 236,000 = <strong>$2.33</strong>.</p></div>

<h3>Diluted EPS</h3>
<table>
<thead><tr><th>Potential common shares</th><th>Method</th></tr></thead>
<tbody>
<tr><td>Options and warrants</td><td><strong>Treasury stock method:</strong> assume exercise; proceeds buy back shares at the average market price. Incremental shares = shares issued − shares repurchased. Include only if <strong>in the money</strong> (average price &gt; exercise price).</td></tr>
<tr><td>Convertible preferred stock</td><td><strong>If-converted method:</strong> add back preferred dividends to the numerator; add converted shares to the denominator</td></tr>
<tr><td>Convertible bonds</td><td>If-converted: add back <strong>after-tax</strong> interest to the numerator; add converted shares</td></tr>
<tr><td>Contingently issuable shares</td><td>Include if conditions are currently met</td></tr>
</tbody>
</table>
<div class="callout callout-example"><p><strong>EXAMPLE (treasury stock method):</strong> 10,000 options with a $20 exercise price; average market price $25. Proceeds = $200,000, buying back 8,000 shares. Incremental shares = 10,000 − 8,000 = <strong>2,000</strong>.</p></div>
<ul>
<li><strong>Antidilutive</strong> securities (those that would increase EPS or decrease a loss per share) are excluded. Rank convertibles from most to least dilutive and add them one at a time.</li>
<li>With a loss from continuing operations, all potential shares are antidilutive — diluted EPS equals basic.</li>
<li>The <strong>control number</strong> for dilution is income from continuing operations.</li>
</ul>

<h3>Presentation</h3>
<p>Public entities present basic and diluted EPS on the face of the income statement for income from continuing operations and net income, plus EPS for discontinued operations (face or notes). Companies with only common stock and no potential shares show one EPS figure. Nonpublic entities need not report EPS.</p>

<h2>How it is tested</h2>
<ul>
<li>Record stock issuances, treasury stock transactions, and dividends.</li>
<li>Compute weighted-average shares with issuances, buybacks, and splits.</li>
<li>Compute basic and diluted EPS, including antidilution tests.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Stock splits and stock dividends are restated back to the beginning of the year (and all prior periods presented) — do <em>not</em> weight them by the date they occurred. That's the most common weighted-average error.</p></div>
`,
  revision: `
<h3>Equity entries</h3>
<ul>
<li>Issuance costs → reduce additional paid-in capital (APIC).</li>
<li>Treasury stock (cost method): reissue above cost → APIC; below → APIC then retained earnings. <strong>Never income.</strong></li>
<li>Small stock dividend (&lt; 20–25%) → fair value; large → par; split → no entry.</li>
<li>Property dividend → remeasure to fair value first.</li>
<li>Mandatorily redeemable preferred → liability.</li>
</ul>

<h3>Share-based compensation</h3>
<p>Equity awards: grant-date fair value ÷ service period. Liability awards: remeasure each period.</p>

<h3>Basic earnings per share (EPS)</h3>
<ul>
<li>(Net income − current-year preferred dividends) ÷ weighted-average shares.</li>
<li>Cumulative preferred: subtract whether declared or not. Non-cumulative: only if declared.</li>
<li>Splits and stock dividends: <strong>retroactive</strong> to the start of the earliest period.</li>
</ul>

<h3>Diluted EPS</h3>
<ul>
<li>Options: treasury stock method; include only if average price &gt; exercise price.</li>
<li>Convertible bonds: + after-tax interest; + shares (if-converted).</li>
<li>Convertible preferred: + preferred dividends; + shares.</li>
<li>Exclude antidilutive items; loss from continuing operations → diluted = basic.</li>
</ul>
`,
};
