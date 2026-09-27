import type { TopicContent } from "../types";

export const distributionsLiquidations: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>How money comes out of an entity determines how it is taxed. Tax Compliance and Planning (TCP) Area III tests corporate distributions and earnings and profits (E&amp;P), stock redemptions that qualify for sale treatment, complete liquidations, and parent-subsidiary liquidations — plus the contrast with pass-through entities.</p>

<h2>Corporate distributions</h2>
<ol>
<li>Dividend to the extent of <strong>current E&amp;P</strong> (allocated pro rata to all distributions during the year), then <strong>accumulated E&amp;P</strong> (in date order).</li>
<li>Then a tax-free <strong>return of capital</strong>, reducing stock basis.</li>
<li>Then <strong>capital gain</strong>.</li>
</ol>
<ul>
<li><strong>Property distributions:</strong> the corporation recognizes <strong>gain</strong> (not loss) as if it sold the property at fair market value (FMV). The shareholder's distribution = FMV − liabilities assumed; basis in the property = FMV.</li>
<li>E&amp;P is reduced by cash distributed, the adjusted basis of property (or FMV for appreciated property, after adding the gain to E&amp;P), less liabilities assumed. Distributions can't create or increase an E&amp;P deficit.</li>
<li><strong>Stock dividends</strong> are generally tax-free (basis is allocated across old and new shares), unless shareholders can choose cash or the distribution changes proportionate interests (Section 305).</li>
<li><strong>Constructive dividends:</strong> excessive compensation to shareholder-employees, below-market loans, personal use of corporate assets, and bargain sales to shareholders can be recharacterized as dividends.</li>
</ul>

<h2>Stock redemptions</h2>
<p>When a corporation buys back its own stock, the shareholder wants <strong>sale or exchange</strong> treatment (capital gain, with basis recovery) rather than a <strong>dividend</strong> (the whole amount taxed to the extent of E&amp;P). A redemption is an exchange if it meets one of the Section 302 tests:</p>
<table>
<thead><tr><th>Test</th><th>Requirement</th></tr></thead>
<tbody>
<tr><td><strong>Substantially disproportionate</strong></td><td>After the redemption, the shareholder owns <strong>less than 50%</strong> of the voting power, <strong>and</strong> their percentage is <strong>less than 80%</strong> of their percentage before (for both voting and common stock)</td></tr>
<tr><td><strong>Complete termination</strong></td><td>All of the shareholder's stock is redeemed. Family attribution can be waived if the shareholder has no interest (other than as a creditor) for <strong>10 years</strong> and files an agreement</td></tr>
<tr><td>Not essentially equivalent to a dividend</td><td>A meaningful reduction in the shareholder's interest, based on facts and circumstances</td></tr>
<tr><td>Partial liquidation (noncorporate shareholders)</td><td>Distribution due to a genuine contraction of the corporation's business</td></tr>
<tr><td>Redemption to pay death taxes (Section 303)</td><td>Stock in the decedent's estate worth more than 35% of the adjusted gross estate; proceeds up to death taxes and funeral and administration expenses</td></tr>
</tbody>
</table>
<p><strong>Constructive ownership (Section 318)</strong> applies: a shareholder is treated as owning shares held by a spouse, children, grandchildren, and parents (not siblings), and proportionately through partnerships, estates, trusts, and corporations (50%+ owned). Attribution often defeats the tests in family companies.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A corporation has 100 shares: A owns 60, unrelated B owns 40. The corporation redeems 30 of A's shares. Before: A owns 60%. After: A owns 30 of 70 shares = 42.9%. Is 42.9% &lt; 50%? Yes. Is it &lt; 80% × 60% = 48%? Yes. The redemption is <strong>substantially disproportionate</strong> — sale treatment.</p></div>

<p>For the corporation, distributing appreciated property in a redemption triggers gain; E&amp;P is reduced by the redeemed shares' ratable share of E&amp;P (not more than the amount distributed).</p>

<h2>Complete liquidations</h2>
<table>
<thead><tr><th>Party</th><th>General rule (Sections 331 and 336)</th></tr></thead>
<tbody>
<tr><td>Liquidating corporation</td><td>Recognizes <strong>gain and loss</strong> as if it sold all its assets at FMV — but losses are limited on distributions to related parties (more than 50% shareholders) of non-pro-rata or recently contributed property, and on built-in loss property contributed with a tax-avoidance purpose</td></tr>
<tr><td>Shareholders</td><td>Treat the distribution as full payment in exchange for their stock: <strong>capital gain or loss</strong> = FMV received − stock basis; basis in property received = FMV</td></tr>
</tbody>
</table>
<p>This is the "double tax" on exiting a C corporation.</p>

<h3>Parent-subsidiary liquidation (Sections 332 and 337)</h3>
<ul>
<li>If a parent owns <strong>at least 80%</strong> of the subsidiary's voting power and value and the subsidiary liquidates, <strong>no gain or loss</strong> is recognized by the subsidiary on distributions to the parent or by the parent.</li>
<li>The parent takes a <strong>carryover basis</strong> in the assets and inherits tax attributes (net operating losses, E&amp;P).</li>
<li>Distributions to minority shareholders are taxable (gain recognized by the subsidiary; minority shareholders get exchange treatment).</li>
</ul>

<h2>Pass-through contrasts</h2>
<ul>
<li><strong>S corporations:</strong> distributions are generally tax-free to the extent of stock basis (and the accumulated adjustments account); property distributions trigger corporate-level gain that passes through; liquidations are taxed once, at the shareholder level, after the gain passes through.</li>
<li><strong>Partnerships:</strong> current and liquidating distributions are generally tax-free except cash in excess of outside basis; losses only in limited cases; ordinary income for disproportionate distributions of hot assets.</li>
</ul>

<h2>Planning points</h2>
<ul>
<li>Structure redemptions to meet a Section 302 test — watch family attribution, and use the 10-year waiver for complete terminations.</li>
<li>Use Section 303 redemptions to provide estate liquidity in family businesses.</li>
<li>Avoid distributing appreciated property from C corporations when possible; distribute loss property only when the loss is allowed (usually better to sell it and distribute cash).</li>
<li>Consider the timing of dividends against E&amp;P — distributions in a year with no current E&amp;P and an accumulated deficit can be tax-free returns of capital.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Classify a distribution as dividend, return of capital, or gain.</li>
<li>Apply Section 302 tests with attribution to a redemption.</li>
<li>Compute corporate and shareholder results in a complete liquidation.</li>
<li>Apply the parent-subsidiary liquidation rules.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Current E&amp;P is checked first and can make a distribution a dividend even when accumulated E&amp;P is negative. Only if both are zero or negative is the distribution a return of capital.</p></div>
`,
  revision: `
<h3>Distributions</h3>
<ul>
<li>Order: current earnings and profits (E&amp;P) → accumulated E&amp;P → return of capital → capital gain.</li>
<li>Appreciated property: corporation recognizes gain (no loss); shareholder basis = fair market value (FMV).</li>
<li>Stock dividends: generally tax-free.</li>
</ul>

<h3>Redemptions — exchange if</h3>
<ul>
<li>Substantially disproportionate: after &lt; 50% and &lt; 80% of before.</li>
<li>Complete termination (family attribution waivable for 10 years).</li>
<li>Not essentially equivalent to a dividend; partial liquidation; Section 303 (estate &gt; 35%).</li>
<li>Attribution (Section 318): spouse, children, grandchildren, parents — not siblings.</li>
</ul>

<h3>Liquidations</h3>
<ul>
<li>Complete: corporation taxed on gains (loss limits for related parties); shareholders capital gain or loss; basis = FMV.</li>
<li>Parent owns ≥ 80%: tax-free; carryover basis and attributes.</li>
</ul>

<h3>Pass-throughs</h3>
<p>S corporations and partnerships: generally tax-free to basis; one level of tax.</p>
`,
};
