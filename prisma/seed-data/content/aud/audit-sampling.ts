import type { TopicContent } from "../types";

export const auditSampling: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Audit sampling — covered by the clarified auditing standards (AU-C) in AU-C 530 — means applying a procedure to less than 100% of a population so that every sampling unit has a chance of selection, and projecting the results. Auditing and Attestation (AUD) tests the sampling risks, the factors that change sample size, attribute sampling for controls, and monetary-unit sampling for balances — including calculations.</p>

<h2>Sampling and non-sampling risk</h2>
<table>
<thead><tr><th>Test</th><th>Risk that affects <strong>effectiveness</strong> (worse — wrong opinion)</th><th>Risk that affects <strong>efficiency</strong> (extra work)</th></tr></thead>
<tbody>
<tr><td>Tests of controls</td><td><strong>Overreliance</strong> — concluding controls are more effective than they are</td><td>Underreliance — concluding controls are less effective than they are</td></tr>
<tr><td>Substantive tests</td><td><strong>Incorrect acceptance</strong> — concluding a balance is not materially misstated when it is</td><td>Incorrect rejection — concluding a balance is misstated when it is not</td></tr>
</tbody>
</table>
<p><strong>Non-sampling risk</strong> arises from anything other than sampling: using an inappropriate procedure, misinterpreting evidence, or failing to recognize a deviation. It is reduced through planning, supervision, and quality management — not by larger samples.</p>

<h2>Statistical versus nonstatistical sampling</h2>
<ul>
<li>Both are acceptable under generally accepted auditing standards (GAAS).</li>
<li><strong>Statistical sampling</strong> uses random selection and probability theory to <strong>measure and control sampling risk</strong> quantitatively.</li>
<li><strong>Nonstatistical sampling</strong> relies on judgment; sample sizes should be comparable to a statistical sample giving the same assurance.</li>
<li>Selection methods: random (every item equal chance), systematic (every nth item after a random start), haphazard (no conscious bias — nonstatistical only), and block selection (generally inappropriate).</li>
</ul>
<p>Items that are individually significant or high-risk are usually <strong>examined 100%</strong> and excluded from the sampled population (stratification).</p>

<h2>Attribute sampling — tests of controls</h2>
<table>
<thead><tr><th>Factor</th><th>Effect on sample size</th></tr></thead>
<tbody>
<tr><td>Acceptable risk of overreliance ↓</td><td>Increase</td></tr>
<tr><td>Tolerable deviation rate ↓</td><td>Increase</td></tr>
<tr><td>Expected population deviation rate ↑</td><td>Increase</td></tr>
<tr><td>Population size (large populations)</td><td>Little or no effect</td></tr>
</tbody>
</table>

<h3>Evaluating results</h3>
<ol>
<li>Sample deviation rate = deviations ÷ sample size.</li>
<li>Upper deviation rate (from tables) = sample rate + allowance for sampling risk.</li>
<li>If the <strong>upper deviation rate ≤ tolerable rate</strong>, the control can be relied on as planned. If it exceeds the tolerable rate, reduce reliance (raise assessed control risk) and expand substantive procedures.</li>
</ol>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Tolerable deviation rate 5%. A sample of 100 invoices finds 2 deviations (sample rate 2%); the table gives an upper deviation rate of 6.2%. Because 6.2% &gt; 5%, the auditor cannot rely on the control as planned.</p></div>
<p>Also consider the <strong>qualitative</strong> nature of deviations: an intentional deviation may indicate fraud, which matters more than the rate.</p>

<h2>Variables sampling — substantive tests</h2>
<table>
<thead><tr><th>Factor</th><th>Effect on sample size</th></tr></thead>
<tbody>
<tr><td>Acceptable risk of incorrect acceptance ↓ (higher assessed risk of material misstatement)</td><td>Increase</td></tr>
<tr><td>Tolerable misstatement ↓</td><td>Increase</td></tr>
<tr><td>Expected misstatement ↑</td><td>Increase</td></tr>
<tr><td>Population variability (standard deviation) ↑ — classical methods</td><td>Increase</td></tr>
<tr><td>Stratification of the population</td><td>Decrease</td></tr>
</tbody>
</table>

<h3>Classical variables methods</h3>
<ul>
<li><strong>Mean-per-unit:</strong> average audited value × number of items.</li>
<li><strong>Ratio estimation:</strong> (audited value ÷ book value of sample) × population book value — best when misstatements are proportional to book values.</li>
<li><strong>Difference estimation:</strong> average difference × number of items — best when misstatements are similar in size.</li>
</ul>
<p>Ratio and difference methods need a reasonable number of misstatements in the sample to work.</p>

<h2>Monetary-unit sampling (probability-proportional-to-size)</h2>
<p>Monetary-unit sampling, also called probability-proportional-to-size (PPS) sampling, treats each dollar as a sampling unit, so larger items are more likely to be selected. It is designed to detect <strong>overstatement</strong>, works well when few misstatements are expected, and does not require a standard deviation.</p>
<ul>
<li>Sampling interval = population book value ÷ sample size (or tolerable misstatement ÷ reliability factor).</li>
<li>Any item with a book value <strong>≥ the interval</strong> is always selected.</li>
<li>Zero or negative balances need separate testing; understatements are hard to detect.</li>
</ul>

<h3>Projecting misstatement with PPS</h3>
<table>
<thead><tr><th>Item</th><th>Projected misstatement</th></tr></thead>
<tbody>
<tr><td>Book value ≥ interval</td><td>Actual misstatement (no projection)</td></tr>
<tr><td>Book value &lt; interval</td><td><strong>Tainting %</strong> × interval, where tainting % = (book − audited) ÷ book</td></tr>
</tbody>
</table>
<p>Upper misstatement limit = projected misstatement + basic precision (reliability factor × interval) + incremental allowance. If the upper limit ≤ tolerable misstatement, accept the balance.</p>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Population $600,000, sample size 60 → interval <strong>$10,000</strong>. An item recorded at $8,000 has an audited value of $6,000: tainting = 2,000 ÷ 8,000 = 25%; projected misstatement = 25% × 10,000 = <strong>$2,500</strong>. An item recorded at $15,000 with an audited value of $14,000 contributes its actual $1,000.</p></div>

<h2>Evaluating misstatements</h2>
<ul>
<li>Project sample misstatements to the population and compare to tolerable misstatement, considering an allowance for sampling risk.</li>
<li>Investigate the <strong>nature and cause</strong> of each misstatement — fraud, a systematic error, or an anomaly (an anomaly may be excluded only if the auditor is highly certain it is not representative).</li>
<li>If projected misstatement is close to or exceeds tolerable misstatement, ask management to investigate and correct, extend testing, or modify the opinion.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Match sampling risks to effectiveness or efficiency.</li>
<li>Predict the direction of sample size changes.</li>
<li>Evaluate attribute sampling results against the tolerable rate.</li>
<li>Compute the PPS interval and projected misstatement.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The two dangerous risks are <strong>overreliance</strong> (controls) and <strong>incorrect acceptance</strong> (substantive) — both lead to an audit failure. The other two only waste time.</p></div>
`,
  revision: `
<h3>Sampling risks</h3>
<ul>
<li>Controls: <strong>overreliance</strong> (effectiveness) vs underreliance (efficiency).</li>
<li>Substantive: <strong>incorrect acceptance</strong> (effectiveness) vs incorrect rejection (efficiency).</li>
<li>Non-sampling risk: wrong procedure or misread evidence — fix with supervision, not larger samples.</li>
</ul>

<h3>Sample size increases when</h3>
<ul>
<li>Acceptable risk ↓, tolerable rate or misstatement ↓, expected deviation or misstatement ↑, variability ↑.</li>
<li>Population size: little effect (large populations). Stratification: decreases size.</li>
</ul>

<h3>Attribute sampling</h3>
<p>Upper deviation rate = sample rate + allowance. Upper rate &gt; tolerable → reduce reliance, expand substantive tests.</p>

<h3>Probability-proportional-to-size (PPS) sampling</h3>
<ul>
<li>Interval = book value ÷ sample size; items ≥ interval always selected.</li>
<li>Small item: tainting % × interval. Large item: actual misstatement.</li>
<li>Good for overstatement; poor for understatement and zero balances.</li>
</ul>

<h3>Classical variables</h3>
<p>Mean-per-unit · ratio (proportional errors) · difference (constant errors).</p>
`,
};
