import type { TopicContent } from "../types";

export const incomeTaxes: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Accounting for income taxes (Accounting Standards Codification (ASC) 740) is one of the most calculation-heavy topics in Financial Accounting and Reporting (FAR) Area III. You must separate temporary from permanent differences, compute deferred tax assets (DTAs) and deferred tax liabilities (DTLs), assess the need for a valuation allowance, and handle uncertain tax positions.</p>

<h2>The asset-and-liability approach</h2>
<p>Total income tax expense = <strong>current</strong> tax expense (taxes payable on this year's return) + <strong>deferred</strong> tax expense or benefit (the change in net deferred tax balances).</p>
<table>
<thead><tr><th>Step</th><th>Calculation</th></tr></thead>
<tbody>
<tr><td>1. Taxable income</td><td>Pretax book income ± permanent differences ± changes in temporary differences</td></tr>
<tr><td>2. Current tax expense</td><td>Taxable income × current enacted rate</td></tr>
<tr><td>3. Ending deferred balances</td><td>Cumulative temporary differences × <strong>enacted rate for the years they reverse</strong></td></tr>
<tr><td>4. Deferred tax expense</td><td>Change in DTL − change in DTA (adjusted for valuation allowance)</td></tr>
<tr><td>5. Total expense</td><td>Current + deferred</td></tr>
</tbody>
</table>

<h2>Permanent versus temporary differences</h2>
<table>
<thead><tr><th>Permanent (never reverse — no deferred tax)</th><th>Temporary (reverse — create deferred tax)</th></tr></thead>
<tbody>
<tr><td>Municipal bond interest (tax-exempt)</td><td>Depreciation: accelerated for tax, straight-line for books</td></tr>
<tr><td>Life insurance premiums and proceeds where the company is beneficiary</td><td>Warranty expense accrued for books, deducted when paid for tax</td></tr>
<tr><td>Fines and penalties; political contributions</td><td>Unearned revenue taxed when received</td></tr>
<tr><td>50% of business meals (nondeductible portion)</td><td>Installment sales (tax later)</td></tr>
<tr><td>Dividends received deduction</td><td>Allowance for credit losses (tax uses direct write-off)</td></tr>
<tr><td>Federal income tax expense</td><td>Equity-method income recognized before dividends</td></tr>
<tr><td>Excess of percentage over cost depletion</td><td>Prepaid expenses deducted for tax when paid; accrued contingent liabilities</td></tr>
</tbody>
</table>

<h3>Which temporary differences create an asset or a liability?</h3>
<table>
<thead><tr><th>Future effect</th><th>Result</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>Future <strong>taxable</strong> amounts (tax later)</td><td><strong>Deferred tax liability</strong></td><td>Accelerated tax depreciation; installment sales; prepaid expenses</td></tr>
<tr><td>Future <strong>deductible</strong> amounts (tax now, deduction later)</td><td><strong>Deferred tax asset</strong></td><td>Warranty and bad debt accruals; unearned revenue; net operating loss carryforwards</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Pretax book income is $800,000, including $50,000 of municipal interest. Tax depreciation exceeds book depreciation by $100,000, and $40,000 of warranty expense accrued for books is not yet deductible. The rate is 21%.<br>Taxable income = 800,000 − 50,000 − 100,000 + 40,000 = <strong>$690,000</strong>.<br>Current tax expense = 690,000 × 21% = <strong>$144,900</strong>.<br>Deferred: DTL increases 100,000 × 21% = $21,000; DTA increases 40,000 × 21% = $8,400. Deferred tax expense = 21,000 − 8,400 = <strong>$12,600</strong>.<br>Total income tax expense = <strong>$157,500</strong> (= (800,000 − 50,000) × 21%).</p></div>

<h2>Tax rates</h2>
<ul>
<li>Use the <strong>enacted</strong> rate expected to apply when the difference reverses — never a proposed rate.</li>
<li>When a new rate is enacted, remeasure all deferred balances; the full effect goes to <strong>income tax expense from continuing operations in the period of enactment</strong>, even if the original item was recorded in other comprehensive income (OCI).</li>
</ul>

<h2>Valuation allowance</h2>
<p>Reduce a DTA with a valuation allowance if it is <strong>more likely than not</strong> (greater than 50%) that some or all of it will not be realized. Evidence to weigh:</p>
<ul>
<li><strong>Negative:</strong> cumulative losses in recent years (strong evidence), carryforwards expiring unused, unsettled circumstances.</li>
<li><strong>Positive:</strong> future reversals of existing taxable differences, taxable income in carryback years, tax-planning strategies, a strong earnings history, existing contracts.</li>
</ul>
<p>Changes in the valuation allowance flow through deferred tax expense.</p>

<h2>Net operating losses</h2>
<ul>
<li>Under current federal law, net operating losses (NOLs) arising after 2020 generally <strong>cannot be carried back</strong>; they carry forward <strong>indefinitely</strong>, limited to 80% of taxable income in the year used.</li>
<li>An NOL carryforward creates a DTA (subject to a valuation allowance). The benefit is recognized in the year of the loss if realization is more likely than not.</li>
</ul>

<h2>Uncertain tax positions</h2>
<ol>
<li><strong>Recognition:</strong> recognize a benefit only if the position is <strong>more likely than not</strong> to be sustained on examination, based on technical merits, assuming the authority has full knowledge.</li>
<li><strong>Measurement:</strong> recognize the <strong>largest amount that is more than 50% likely</strong> to be realized on settlement.</li>
</ol>
<p>The difference between the benefit claimed on the return and the benefit recognized is an unrecognized tax benefit — a liability. Interest and penalties may be classified as income tax expense or as interest/other expense (policy election, disclosed).</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A $100,000 deduction is more likely than not to be sustained. Cumulative probabilities of settlement amounts: $100,000 (30%), $80,000 (55%), $60,000 (100%). Recognize the benefit of <strong>$80,000</strong> — the largest amount with a cumulative probability above 50%.</p></div>

<h2>Presentation and disclosure</h2>
<ul>
<li>All DTAs and DTLs are <strong>noncurrent</strong>; offset them within each tax jurisdiction and present a single net amount per jurisdiction.</li>
<li><strong>Intraperiod tax allocation:</strong> allocate total tax expense among continuing operations, discontinued operations, OCI, and items charged directly to equity.</li>
<li><strong>Accounting Standards Update (ASU) 2023-09</strong> expanded disclosures: public business entities must present the rate reconciliation in specific categories (with a 5% threshold) in both percentages and amounts, and all entities must disaggregate income taxes paid by federal, state, and foreign jurisdictions. Effective for public business entities for annual periods beginning after December 15, 2024.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Identify permanent versus temporary differences and DTA versus DTL.</li>
<li>Compute current, deferred, and total tax expense.</li>
<li>Remeasure deferred balances for a rate change.</li>
<li>Apply the two-step uncertain tax position model.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A quick check: total tax expense = (pretax income ± permanent differences) × rate, when a single rate applies. If your current + deferred doesn't match this, you've made an error in the temporary differences.</p></div>
`,
  revision: `
<h3>Formula</h3>
<p>Total tax expense = current (taxable income × rate) + deferred (change in deferred tax liability (DTL) − change in deferred tax asset (DTA)).</p>

<h3>Permanent differences (no deferred tax)</h3>
<p>Municipal interest · life insurance premiums/proceeds (company beneficiary) · fines · political contributions · 50% of meals · dividends received deduction.</p>

<h3>Temporary differences</h3>
<ul>
<li><strong>DTL</strong> (tax later): accelerated tax depreciation, installment sales, prepaid expenses.</li>
<li><strong>DTA</strong> (deduct later): warranty and bad debt accruals, unearned revenue, net operating loss carryforwards.</li>
</ul>

<h3>Rules</h3>
<ul>
<li>Use the <strong>enacted</strong> future rate; a rate change hits continuing operations in the enactment period.</li>
<li>Valuation allowance if realization is <strong>not more likely than not</strong>.</li>
<li>All deferred taxes are <strong>noncurrent</strong>; net by jurisdiction.</li>
<li>Net operating losses (post-2020): carry forward indefinitely, 80% limit, no carryback.</li>
</ul>

<h3>Uncertain tax positions</h3>
<ol>
<li>Recognize if more likely than not to be sustained.</li>
<li>Measure the largest amount &gt; 50% likely on settlement.</li>
</ol>

<h3>Check</h3>
<p>Total expense = (pretax income ± permanent differences) × rate.</p>
`,
};
