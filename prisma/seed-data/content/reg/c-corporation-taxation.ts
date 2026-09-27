import type { TopicContent } from "../types";

export const cCorporations: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Federal Taxation of Entities is Area V of Taxation and Regulation (REG), 23–33% of the section. C corporations are taxed at a flat <strong>21%</strong>, and shareholders are taxed again on dividends — so questions focus on forming a corporation tax-free, computing corporate taxable income (and how it differs from book income), and taxing distributions.</p>

<h2>Forming a corporation — Section 351</h2>
<p>No gain or loss is recognized when property is transferred to a corporation solely for its stock if the transferors are in <strong>control (at least 80%</strong> of voting power and 80% of each class of nonvoting stock) <strong>immediately after</strong> the exchange.</p>
<ul>
<li>Services are not "property" — stock received for services is taxable compensation, and the service provider's stock doesn't count toward control unless they also transfer property of more than a nominal value.</li>
<li><strong>Boot</strong> (cash or other property) triggers gain equal to the lesser of realized gain or boot received.</li>
<li><strong>Liabilities</strong> assumed by the corporation are generally not boot — but they are treated as boot if there is a tax-avoidance purpose, and they trigger gain to the extent they exceed the transferor's total basis in the property transferred.</li>
<li><strong>Shareholder's stock basis</strong> = basis of property transferred + gain recognized − boot received − liabilities assumed by the corporation.</li>
<li><strong>Corporation's basis in the property</strong> = transferor's basis + gain recognized by the transferor (limited if built-in losses are imported).</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A contributes land (basis $40,000, fair market value (FMV) $100,000) for 90% of a new corporation's stock plus $10,000 cash. Section 351 applies. Realized gain $60,000; recognized gain = boot = <strong>$10,000</strong>. A's stock basis = 40,000 + 10,000 − 10,000 = <strong>$40,000</strong>. The corporation's basis in the land = 40,000 + 10,000 = <strong>$50,000</strong>.</p></div>

<h2>Corporate taxable income</h2>
<table>
<thead><tr><th>Item</th><th>Corporate rule</th></tr></thead>
<tbody>
<tr><td>Tax rate</td><td>Flat <strong>21%</strong></td></tr>
<tr><td><strong>Dividends received deduction</strong></td><td><strong>50%</strong> if ownership &lt; 20%; <strong>65%</strong> if 20% to &lt; 80%; <strong>100%</strong> if 80% or more (affiliated). The 50% and 65% deductions are limited to that percentage of taxable income (computed without the deduction) unless the full deduction creates or increases a net operating loss. Holding period over 45 days required.</td></tr>
<tr><td>Charitable contributions</td><td>Limited to <strong>10% of taxable income</strong> (before the charitable deduction, dividends received deduction, net operating loss carryback, and capital loss carryback). From 2026, the One Big Beautiful Bill Act (OBBBA) allows a deduction only for amounts above <strong>1%</strong> of taxable income. Excess carries forward 5 years. Accrual-basis corporations may deduct gifts paid by the 15th day of the 4th month after year-end if authorized by the board.</td></tr>
<tr><td>Capital gains and losses</td><td>No preferential rate; capital losses <strong>only offset capital gains</strong>; net capital loss carries <strong>back 3 years and forward 5</strong> as short-term</td></tr>
<tr><td>Net operating losses</td><td>Carry forward <strong>indefinitely</strong>, limited to <strong>80%</strong> of taxable income; no carryback (except farming losses)</td></tr>
<tr><td>Business interest (Section 163(j))</td><td>Limited to business interest income + <strong>30% of adjusted taxable income</strong> — which OBBBA again computes before depreciation and amortization (like earnings before interest, taxes, depreciation, and amortization (EBITDA)) for tax years beginning after 2024. Excess carries forward. Small businesses (average gross receipts under the indexed threshold, about $31 million) are exempt.</td></tr>
<tr><td>Organizational and start-up costs</td><td>Deduct up to $5,000 each (reduced once costs exceed $50,000); amortize the rest over 180 months</td></tr>
<tr><td>Meals and entertainment</td><td>Business meals 50% deductible; entertainment nondeductible</td></tr>
<tr><td>Nondeductible items</td><td>Federal income tax, fines and penalties, political contributions, lobbying, life insurance premiums where the corporation is beneficiary</td></tr>
<tr><td>Executive compensation</td><td>Public companies cannot deduct compensation above $1 million per covered employee</td></tr>
<tr><td>Domestic research costs</td><td>Deductible immediately again (OBBBA, new Section 174A)</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A corporation owns 30% of another domestic corporation and receives a $100,000 dividend. Its taxable income before the dividends received deduction is $200,000. Deduction = 65% × 100,000 = <strong>$65,000</strong> (the taxable income limit of 65% × 200,000 = $130,000 doesn't bind).</p></div>

<h2>Reconciling book and taxable income</h2>
<p>Schedule M-1 (Schedule M-3 for corporations with $10 million or more in assets) reconciles net income per books to taxable income.</p>
<table>
<thead><tr><th>Add to book income</th><th>Subtract from book income</th></tr></thead>
<tbody>
<tr><td>Federal income tax expense</td><td>Tax-exempt interest</td></tr>
<tr><td>Excess of capital losses over capital gains</td><td>Tax depreciation above book depreciation</td></tr>
<tr><td>Nondeductible fines, penalties, 50% of meals</td><td>Dividends received deduction (not in book income)</td></tr>
<tr><td>Book depreciation above tax depreciation</td><td>Prepaid income included in a prior tax year</td></tr>
<tr><td>Life insurance premiums (corporation beneficiary)</td><td>Life insurance proceeds</td></tr>
<tr><td>Charitable contributions above the limit</td><td>Charitable carryovers used</td></tr>
</tbody>
</table>
<p>Schedule M-2 reconciles beginning and ending unappropriated retained earnings.</p>

<h2>Other corporate taxes</h2>
<ul>
<li><strong>Corporate alternative minimum tax:</strong> 15% of adjusted financial statement income, only for corporations averaging more than $1 billion.</li>
<li><strong>Accumulated earnings tax:</strong> 20% on earnings retained beyond the reasonable needs of the business to avoid shareholder dividends (credit of $250,000; $150,000 for personal service corporations).</li>
<li><strong>Personal holding company tax:</strong> 20% on undistributed income of closely held corporations earning mainly passive income.</li>
<li><strong>Stock buyback excise tax:</strong> 1% on public company repurchases.</li>
</ul>

<h2>Distributions and earnings and profits</h2>
<ul>
<li>A distribution is a <strong>dividend</strong> to the extent of <strong>current</strong> earnings and profits (E&amp;P) first, then <strong>accumulated</strong> E&amp;P.</li>
<li>Any excess is a tax-free <strong>return of capital</strong> (reducing stock basis), and then <strong>capital gain</strong> once basis reaches zero.</li>
<li>E&amp;P starts with taxable income and adjusts toward economic income: add back tax-exempt income and the dividends received deduction; subtract federal income taxes, nondeductible expenses, and excess capital losses; use straight-line depreciation (bonus and Section 179 are spread over 5 years for E&amp;P).</li>
<li><strong>Property distributions:</strong> the corporation recognizes <strong>gain</strong> (never loss) as if it sold appreciated property at FMV. The shareholder's dividend = FMV − liabilities assumed; the shareholder's basis in the property = FMV.</li>
<li>Stock dividends are generally nontaxable.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A corporation with no current or accumulated E&amp;P distributes $50,000 cash to a shareholder whose stock basis is $30,000. The shareholder has a $30,000 return of capital (basis reduced to zero) and a <strong>$20,000 capital gain</strong>.</p></div>

<h2>Compliance</h2>
<ul>
<li>Form 1120 is due the 15th day of the 4th month (April 15 for calendar years), with a 6-month extension.</li>
<li>Estimated payments are due in the 4th, 6th, 9th, and 12th months.</li>
<li>Consolidated returns are allowed for affiliated groups (80% ownership); intercompany dividends are eliminated.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Apply Section 351: recognized gain and basis for the shareholder and corporation.</li>
<li>Compute taxable income with the dividends received deduction, charitable limit, and capital losses.</li>
<li>Reconcile book to taxable income (Schedule M-1).</li>
<li>Classify distributions as dividend, return of capital, or gain.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Compute the charitable limit <em>before</em> the dividends received deduction, and the dividends received deduction limit <em>after</em> the charitable deduction. Doing them in the wrong order is the most common error in corporate taxable income questions.</p></div>
`,
  revision: `
<h3>Section 351</h3>
<p>Transferors in 80% control immediately after. Gain = lesser of realized gain or boot. Liabilities in excess of basis → gain. Services ≠ property. Shareholder basis = property basis + gain − boot − liabilities.</p>

<h3>Taxable income</h3>
<ul>
<li>Rate: 21%.</li>
<li>Dividends received deduction: 50% (&lt; 20%), 65% (20–80%), 100% (≥ 80%); taxable income limit unless it creates a net operating loss.</li>
<li>Charity: 10% of taxable income cap; from 2026 only above a 1% floor; 5-year carryforward.</li>
<li>Capital losses: only against gains; back 3, forward 5.</li>
<li>Net operating losses: forward indefinitely, 80% limit.</li>
<li>Business interest: 30% of adjusted taxable income (based on earnings before interest, taxes, depreciation, and amortization (EBITDA) again).</li>
</ul>

<h3>Schedule M-1</h3>
<p>Add: federal tax, excess capital loss, fines, 50% meals. Subtract: tax-exempt interest, excess tax depreciation.</p>

<h3>Distributions</h3>
<ul>
<li>Dividend to the extent of current, then accumulated earnings and profits (E&amp;P) → return of capital → capital gain.</li>
<li>Appreciated property distributed: corporation recognizes gain (no loss).</li>
</ul>

<h3>Other taxes</h3>
<p>Accumulated earnings tax 20% · personal holding company tax 20% · 15% minimum tax for $1 billion+ corporations.</p>
`,
};
