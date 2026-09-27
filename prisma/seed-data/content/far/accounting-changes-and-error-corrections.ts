import type { TopicContent } from "../types";

export const accountingChanges: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Accounting changes and error corrections (Accounting Standards Codification (ASC) 250) are tested in Financial Accounting and Reporting (FAR) Area III. Each question comes down to classifying the change correctly — principle, estimate, reporting entity, or error — because the classification determines whether you restate prior periods or account prospectively.</p>

<h2>The four categories</h2>
<table>
<thead><tr><th>Type</th><th>Examples</th><th>Method</th></tr></thead>
<tbody>
<tr><td><strong>Change in accounting principle</strong></td><td>First-in, first-out (FIFO) to weighted average; completed contract to over-time revenue when allowed; adopting a new standard (per its transition rules)</td><td><strong>Retrospective</strong> application</td></tr>
<tr><td><strong>Change in accounting estimate</strong></td><td>Useful life, salvage value, credit loss rates, warranty costs, inventory obsolescence</td><td><strong>Prospective</strong> (current and future periods)</td></tr>
<tr><td><strong>Change in estimate effected by a change in principle</strong></td><td>Change in depreciation, amortization, or depletion <strong>method</strong></td><td><strong>Prospective</strong>, but justified and disclosed like a principle change</td></tr>
<tr><td><strong>Change in reporting entity</strong></td><td>Consolidated statements replacing individual statements; changing the subsidiaries included</td><td><strong>Retrospective</strong> (recast all periods presented)</td></tr>
<tr><td><strong>Correction of an error</strong></td><td>Math mistakes, misapplying Generally Accepted Accounting Principles (GAAP), oversight or misuse of facts, <strong>changing from a non-GAAP method (for example, cash basis) to GAAP</strong></td><td><strong>Restatement</strong> with a prior period adjustment</td></tr>
</tbody>
</table>

<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> These are <em>not</em> changes in principle: adopting a principle for transactions that are new or clearly different, adopting a principle for events that were previously immaterial, and changing from a non-GAAP method to GAAP (an error correction).</p></div>

<h2>Change in accounting principle — retrospective application</h2>
<ul>
<li>A voluntary change must be to a <strong>preferable</strong> method, and the reason must be justified.</li>
<li>Recast all prior periods presented as if the new principle had always been used.</li>
<li>Record the <strong>cumulative effect</strong> on periods before those presented as an adjustment to the <strong>opening balance of retained earnings</strong> of the earliest period presented.</li>
<li>Include only <strong>direct effects</strong> (and related tax effects); indirect effects such as profit-sharing payments are recognized in the period of change.</li>
<li><strong>Impracticability exception:</strong> if the period-specific or cumulative effects can't be determined, apply the new principle from the earliest date practicable — often prospectively. The classic example is a change <strong>to</strong> last-in, first-out (LIFO), where the beginning inventory of the year of change becomes the base layer.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> In Year 3 a company changes from weighted average to FIFO. FIFO inventory would have been $30,000 higher at the start of Year 2 (the earliest year presented) and $45,000 higher at the end of Year 2. With a 25% tax rate, opening Year 2 retained earnings increases by 30,000 × 75% = <strong>$22,500</strong>, Year 2 comparative figures are recast, and Year 3 uses FIFO.</p></div>

<h2>Change in estimate — prospective</h2>
<p>No restatement and no cumulative effect. The remaining carrying amount is spread over the remaining periods using the new estimate.</p>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Equipment costing $100,000 with no salvage value has been depreciated straight-line over 10 years. At the start of Year 5 the total life is revised to 8 years. Carrying amount = 100,000 − 40,000 = $60,000. New annual depreciation = 60,000 ÷ 4 remaining years = <strong>$15,000</strong>.</p></div>
<p>When it is hard to tell whether a change is in principle or estimate, treat it as a change in estimate.</p>

<h2>Correction of an error — restatement</h2>
<ul>
<li>Errors found <strong>before</strong> the statements are issued are simply corrected in the current period.</li>
<li>Material errors in <strong>previously issued</strong> statements: restate the prior periods presented and adjust the opening retained earnings of the earliest period presented, <strong>net of tax</strong> (a prior period adjustment).</li>
<li>Disclose the nature of the error and its effect on each line item and on earnings per share.</li>
<li>Immaterial errors may be corrected in the current period ("revision" rather than "restatement").</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> In Year 2 a company discovers that $20,000 of Year 1 depreciation was never recorded. Tax rate 25%. Prior period adjustment: decrease opening Year 2 retained earnings by 20,000 × 75% = <strong>$15,000</strong>.</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody><tr><td>Retained earnings</td><td>15,000</td><td></td></tr><tr><td>Income tax payable (or deferred tax liability)</td><td>5,000</td><td></td></tr><tr><td>Accumulated depreciation</td><td></td><td>20,000</td></tr></tbody></table></div>

<h3>Counterbalancing errors</h3>
<p>Some errors reverse automatically after two periods (for example, inventory misstatements, failing to accrue wages, or missing prepaid expenses). After the second year closes, retained earnings is correct, though the individual years remain misstated. Non-counterbalancing errors (such as capitalizing an expense, or missing depreciation) continue until corrected.</p>
<table>
<thead><tr><th>Error</th><th>Year 1 income</th><th>Year 2 income</th></tr></thead>
<tbody>
<tr><td>Ending inventory understated in Year 1</td><td>Understated</td><td>Overstated</td></tr>
<tr><td>Accrued wages omitted at end of Year 1</td><td>Overstated</td><td>Understated</td></tr>
<tr><td>Prepaid insurance expensed in Year 1 (should be deferred)</td><td>Understated</td><td>Overstated</td></tr>
</tbody>
</table>

<h2>Disclosures</h2>
<ul>
<li><strong>Principle:</strong> nature and reason, why the new method is preferable, the effect on income from continuing operations, net income, and earnings per share, and the cumulative effect on retained earnings.</li>
<li><strong>Estimate:</strong> effect on income and earnings per share if material (not required for routine estimates such as credit losses unless material).</li>
<li><strong>Error:</strong> that previously issued statements were restated, the nature of the error, and effects on each line item.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Classify a change and state the reporting method.</li>
<li>Compute new depreciation after a change in estimate or method.</li>
<li>Compute a prior period adjustment net of tax.</li>
<li>Trace a counterbalancing error through two years.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "Retrospective" (principle and entity changes) and "restatement" (errors) both go back and fix prior periods; only estimates — including a change in depreciation method — go forward. If the question mentions depreciation <em>method</em>, think "prospective".</p></div>
`,
  revision: `
<h3>Classify first</h3>
<table>
<thead><tr><th>Change</th><th>Method</th></tr></thead>
<tbody>
<tr><td>Principle (first-in, first-out (FIFO) ↔ average)</td><td>Retrospective; cumulative effect to opening retained earnings of earliest period</td></tr>
<tr><td>Estimate (life, salvage, credit loss rate)</td><td>Prospective</td></tr>
<tr><td>Depreciation <strong>method</strong></td><td>Prospective (estimate effected by principle)</td></tr>
<tr><td>Reporting entity</td><td>Retrospective</td></tr>
<tr><td>Error, including a switch from a non-Generally Accepted Accounting Principles (GAAP) method to GAAP</td><td>Restate; prior period adjustment <strong>net of tax</strong></td></tr>
</tbody>
</table>
<p>Change <strong>to</strong> last-in, first-out (LIFO): usually prospective (impracticable).</p>

<h3>Formulas</h3>
<ul>
<li>New depreciation = (carrying amount − salvage) ÷ remaining life.</li>
<li>Prior period adjustment = error × (1 − tax rate).</li>
</ul>

<h3>Counterbalancing</h3>
<p>Inventory, accruals, and prepaid errors self-correct after 2 years — retained earnings right, individual years wrong.</p>

<h3>Doubt?</h3>
<p>If unsure whether principle or estimate → treat as <strong>estimate</strong>.</p>
`,
};
