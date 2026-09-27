import type { TopicContent } from "../types";

export const stockCompensation: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Share-based payment (Accounting Standards Codification (ASC) 718) governs how companies account for stock options, restricted stock, restricted stock units (RSUs), stock appreciation rights (SARs), and employee stock purchase plans (ESPPs). Business Analysis and Reporting (BAR) tests measurement, the service period, vesting conditions, equity versus liability classification, forfeitures, and tax effects.</p>

<h2>The basic model — equity-classified awards</h2>
<ol>
<li><strong>Measure</strong> the award at its <strong>fair value on the grant date</strong>.</li>
<li><strong>Recognize</strong> that amount as compensation cost over the <strong>requisite service period</strong> (usually the vesting period): debit compensation expense, credit additional paid-in capital (APIC).</li>
<li><strong>Do not remeasure</strong> for later changes in the stock price.</li>
</ol>
<ul>
<li><strong>Fair value of options</strong> uses an option-pricing model — Black-Scholes-Merton or a lattice (binomial) model — with inputs: exercise price, expected term, current share price, expected volatility, expected dividends, and the risk-free interest rate.</li>
<li><strong>Restricted stock and RSUs</strong> are measured at the grant-date share price (adjusted if dividends aren't received during vesting).</li>
<li>Nonpublic entities may use a calculated value (industry volatility) or, for certain awards, a practical expedient for expected term and current price inputs.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> On January 1, Year 1 a company grants 10,000 options with a grant-date fair value of $12 each, cliff-vesting after 4 years. Total cost = $120,000.<br>Year 1: debit compensation expense $30,000, credit APIC–stock options $30,000 (and the same in Years 2–4).<br>On exercise at $40 per share ($1 par): debit cash $400,000 and APIC–stock options $120,000; credit common stock $10,000 and APIC $510,000.</p></div>

<h2>Vesting conditions</h2>
<table>
<thead><tr><th>Condition</th><th>Example</th><th>Accounting</th></tr></thead>
<tbody>
<tr><td>Service condition</td><td>Remain employed for 4 years</td><td>Recognize over the service period; reverse cost for forfeitures</td></tr>
<tr><td><strong>Performance condition</strong></td><td>Achieve a revenue or earnings target</td><td>Recognize cost only if achievement is <strong>probable</strong>; reassess each period with a cumulative catch-up</td></tr>
<tr><td><strong>Market condition</strong></td><td>Share price reaches $50, or total shareholder return beats an index</td><td>Built into the grant-date fair value; cost is recognized <strong>even if the condition is never met</strong>, as long as the service is provided</td></tr>
</tbody>
</table>

<h3>Graded vesting</h3>
<p>For awards that vest in installments with only service conditions, the entity may elect either <strong>straight-line</strong> recognition over the total vesting period or <strong>accelerated</strong> (tranche-by-tranche) recognition — but cumulative cost recognized at any date must at least equal the portion of the award vested.</p>

<h3>Forfeitures</h3>
<p>Entities choose an accounting policy: <strong>estimate</strong> forfeitures and true up to actual, or <strong>account for them as they occur</strong> (reversing previously recognized cost when an employee leaves before vesting). An award that vests but expires unexercised (out of the money) is <strong>not</strong> reversed.</p>

<h2>Liability-classified awards</h2>
<ul>
<li>Awards settled in <strong>cash</strong> (cash-settled SARs, phantom stock), or where the employee can require cash settlement, are <strong>liabilities</strong>.</li>
<li>They are <strong>remeasured at fair value at each reporting date</strong> until settlement, with changes recognized as compensation cost (spread for the portion of service rendered).</li>
</ul>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> 1,000 cash-settled SARs vest over 2 years. Fair value per SAR is $10 at the end of Year 1 and $14 at the end of Year 2. Year 1 expense = 1,000 × $10 × ½ = <strong>$5,000</strong>. Year 2 expense = 1,000 × $14 × 2/2 − 5,000 = <strong>$9,000</strong>. Liability at the end of Year 2 = $14,000.</p></div>

<h2>Modifications</h2>
<p>If terms change (for example, repricing options), the incremental cost = fair value of the modified award − fair value of the original award immediately before modification. It is recognized immediately for vested awards or over the remaining service period for unvested ones, in addition to any unrecognized original cost.</p>

<h2>Employee stock purchase plans</h2>
<p>An ESPP is <strong>noncompensatory</strong> (no expense) if substantially all full-time employees can participate on equal terms, the purchase discount does not exceed <strong>5%</strong> (or is justified as a per-share amount of stock issuance costs avoided), and the plan has no option features such as a look-back. Plans with larger discounts or look-backs are compensatory.</p>

<h2>Income tax effects</h2>
<ul>
<li>For nonqualified options, restricted stock, and RSUs, the company records a <strong>deferred tax asset</strong> as it recognizes compensation cost.</li>
<li>At exercise or vesting, the tax deduction is based on intrinsic value then. The difference from the deferred tax asset — an <strong>excess tax benefit or tax deficiency</strong> — goes to <strong>income tax expense</strong> in the income statement (not APIC).</li>
<li>Incentive stock options generally produce no company tax deduction (unless there is a disqualifying disposition), so no deferred tax asset is recorded.</li>
</ul>

<h2>Other points</h2>
<ul>
<li><strong>Nonemployee awards</strong> follow the same model as employee awards (measured at grant-date fair value).</li>
<li>For diluted earnings per share, the treasury stock method counts assumed proceeds including <strong>unrecognized compensation cost</strong>.</li>
<li>Disclosures include the nature of plans, the method and assumptions for fair value, compensation cost recognized, and unrecognized cost with the period over which it will be recognized.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute annual compensation cost under cliff and graded vesting.</li>
<li>Treat performance versus market conditions correctly.</li>
<li>Remeasure a liability-classified SAR.</li>
<li>Record exercise and tax effects.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A market condition that is never achieved still costs the company — the probability of failure is already in the grant-date fair value. A performance condition that becomes improbable reverses previously recognized cost.</p></div>
`,
  revision: `
<h3>Equity awards</h3>
<ul>
<li>Grant-date fair value (option-pricing model) ÷ requisite service period; debit expense, credit additional paid-in capital (APIC).</li>
<li>No remeasurement for price changes.</li>
<li>Restricted stock units (RSUs): grant-date share price.</li>
</ul>

<h3>Conditions</h3>
<ul>
<li>Service: straight-line or accelerated for graded vesting (cumulative ≥ vested portion).</li>
<li>Performance: recognize if <strong>probable</strong>; catch-up adjustments.</li>
<li>Market: in fair value; cost recognized even if not met.</li>
</ul>

<h3>Forfeitures</h3>
<p>Estimate or record as they occur. Vested but expired unexercised → no reversal.</p>

<h3>Liability awards</h3>
<p>Cash-settled stock appreciation rights (SARs): remeasure at fair value every reporting date × portion of service completed.</p>

<h3>Other</h3>
<ul>
<li>Modification cost = new fair value − old fair value just before change.</li>
<li>Employee stock purchase plan (ESPP): noncompensatory if broad, discount ≤ 5%, no look-back.</li>
<li>Excess tax benefits and deficiencies → income tax expense.</li>
</ul>
`,
};
