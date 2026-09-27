import type { TopicContent } from "../types";

export const employeeBenefitPlans: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Employer accounting for pensions and other postretirement benefits (Accounting Standards Codification (ASC) 715) is tested in Business Analysis and Reporting (BAR) Area II. The core skills are computing net periodic pension cost, reporting the funded status on the balance sheet, and knowing which items go through other comprehensive income (OCI) before being amortized into earnings.</p>

<h2>Defined contribution versus defined benefit</h2>
<ul>
<li><strong>Defined contribution plan</strong> (401(k), profit sharing): expense equals the required contribution for the period; a liability exists only for unpaid contributions. Simple.</li>
<li><strong>Defined benefit plan:</strong> the employer promises a benefit based on a formula (for example, 2% × years of service × final salary). The employer bears investment and actuarial risk, so accounting relies on actuarial estimates.</li>
</ul>

<h2>Measuring the obligation</h2>
<table>
<thead><tr><th>Measure</th><th>Definition</th></tr></thead>
<tbody>
<tr><td>Vested benefit obligation</td><td>Present value of benefits employees are entitled to even if they leave now</td></tr>
<tr><td>Accumulated benefit obligation (ABO)</td><td>Present value of benefits earned to date using <strong>current</strong> salaries</td></tr>
<tr><td><strong>Projected benefit obligation (PBO)</strong></td><td>Present value of benefits earned to date using <strong>projected future</strong> salaries — the measure used for the funded status of a pension plan</td></tr>
</tbody>
</table>

<h3>PBO roll-forward</h3>
<table>
<thead><tr><th>Projected benefit obligation</th></tr></thead>
<tbody>
<tr><td>Beginning PBO</td></tr>
<tr><td>+ Service cost</td></tr>
<tr><td>+ Interest cost (beginning PBO × discount rate)</td></tr>
<tr><td>+ Prior service cost from plan amendments</td></tr>
<tr><td>± Actuarial losses (gains)</td></tr>
<tr><td>− Benefits paid</td></tr>
<tr><td>= Ending PBO</td></tr>
</tbody>
</table>

<h3>Plan assets roll-forward</h3>
<table>
<thead><tr><th>Plan assets (at fair value)</th></tr></thead>
<tbody>
<tr><td>Beginning fair value</td></tr>
<tr><td>+ Actual return on plan assets</td></tr>
<tr><td>+ Employer contributions</td></tr>
<tr><td>− Benefits paid</td></tr>
<tr><td>= Ending fair value</td></tr>
</tbody>
</table>

<h2>Balance sheet: funded status</h2>
<ul>
<li><strong>Funded status = fair value of plan assets − PBO</strong>.</li>
<li>Overfunded → a <strong>noncurrent asset</strong>. Underfunded → a <strong>liability</strong> (current portion = benefits payable in the next 12 months in excess of plan assets).</li>
<li>Overfunded and underfunded plans are not netted against each other.</li>
<li>Unrecognized prior service cost and net gains or losses sit in <strong>accumulated OCI</strong> until amortized.</li>
</ul>

<h2>Net periodic pension cost</h2>
<table>
<thead><tr><th>Component</th><th>Effect</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><strong>Service cost</strong></td><td>+</td><td>Present value of benefits earned by employees this year — the only component reported in <strong>operating income</strong> (with other compensation)</td></tr>
<tr><td><strong>Interest cost</strong></td><td>+</td><td>Beginning PBO × discount rate</td></tr>
<tr><td><strong>Expected return on plan assets</strong></td><td>−</td><td>Beginning fair value (or market-related value) × expected long-term rate. The difference from the <em>actual</em> return is an asset gain or loss deferred in OCI.</td></tr>
<tr><td><strong>Amortization of prior service cost</strong></td><td>+</td><td>Retroactive benefits from plan amendments, recognized in OCI when granted, amortized over the remaining service period of active employees</td></tr>
<tr><td><strong>Amortization of net loss (or gain)</strong></td><td>+ (−)</td><td>Only the portion of the accumulated net gain or loss exceeding the <strong>corridor</strong> — 10% of the greater of beginning PBO or plan assets (market-related value) — divided by the average remaining service period</td></tr>
<tr><td>Settlement and curtailment gains or losses</td><td>±</td><td>Recognized when they occur</td></tr>
</tbody>
</table>
<p>Components other than service cost are reported <strong>outside operating income</strong> (for example, in other income or expense), and only service cost can be capitalized into assets such as inventory.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Beginning PBO $1,000,000 and plan assets $900,000; discount rate 5%; expected return 7%; service cost $80,000; prior service cost amortization $10,000; accumulated net loss in OCI $150,000; average remaining service 10 years.<br>Interest cost = 1,000,000 × 5% = $50,000. Expected return = 900,000 × 7% = $63,000.<br>Corridor = 10% × 1,000,000 = $100,000; excess loss = $50,000; amortization = $5,000.<br>Net periodic pension cost = 80,000 + 50,000 − 63,000 + 10,000 + 5,000 = <strong>$82,000</strong>.</p></div>

<h2>Other comprehensive income items</h2>
<ul>
<li>Prior service cost arising in the year (debit OCI, credit liability).</li>
<li>Actuarial gains and losses on the PBO and differences between actual and expected return on assets.</li>
<li>Amortization of these items moves them out of OCI and into pension cost (recycling).</li>
</ul>

<h2>Other postretirement benefits</h2>
<p>Other postretirement benefits (OPEB) — mainly retiree health care — use the same model, measured by the <strong>accumulated postretirement benefit obligation (APBO)</strong>. These plans are often unfunded, so there may be no expected return. Benefits are attributed to service up to the full eligibility date.</p>

<h2>Disclosures and plan reporting</h2>
<ul>
<li>Reconciliations of the obligation and plan assets, funded status, components of cost, amounts in accumulated OCI, key assumptions (discount rate, expected return, compensation increases), plan asset fair value hierarchy, and expected benefit payments for the next 10 years.</li>
<li>The plans themselves prepare financial statements under ASC 960 (defined benefit), ASC 962 (defined contribution), and ASC 965 (health and welfare).</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute net periodic pension cost, including corridor amortization.</li>
<li>Roll forward the PBO and plan assets.</li>
<li>Compute and classify the funded status.</li>
<li>Identify what is reported in OCI versus net income.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Pension cost uses the <em>expected</em> return on plan assets, not the actual return. The gap between actual and expected goes to OCI and only reaches earnings through corridor amortization.</p></div>
`,
  revision: `
<h3>Obligations</h3>
<p>Projected benefit obligation (PBO) = future salaries (used for funded status). Accumulated benefit obligation (ABO) = current salaries.</p>

<h3>Funded status</h3>
<p>Fair value of plan assets − PBO. Overfunded → noncurrent asset; underfunded → liability.</p>

<h3>Net periodic pension cost</h3>
<ol>
<li>+ Service cost (only item in operating income)</li>
<li>+ Interest cost (beginning PBO × discount rate)</li>
<li>− <strong>Expected</strong> return on assets</li>
<li>+ Amortization of prior service cost</li>
<li>± Amortization of net loss or gain above the <strong>10% corridor</strong> ÷ average remaining service</li>
</ol>

<h3>Other comprehensive income (OCI)</h3>
<p>New prior service cost · actuarial gains and losses · actual vs expected return differences → recycled through amortization.</p>

<h3>Roll-forwards</h3>
<ul>
<li>PBO: + service + interest + amendments ± actuarial − benefits paid.</li>
<li>Assets: + actual return + contributions − benefits paid.</li>
</ul>

<h3>Other postretirement benefits</h3>
<p>Same model; accumulated postretirement benefit obligation (APBO); usually unfunded.</p>
`,
};
