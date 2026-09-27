import type { TopicContent } from "../types";

export const currentLiabilitiesContingencies: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>This topic combines everyday current liabilities with the judgment-heavy rules for contingencies (Accounting Standards Codification (ASC) 450), guarantees (ASC 460), and asset retirement obligations (ASC 410). Financial Accounting and Reporting (FAR) questions typically give a scenario and ask whether to accrue, disclose, or do nothing — and how much to accrue.</p>

<h2>Current liabilities</h2>
<table>
<thead><tr><th>Liability</th><th>Key rule</th></tr></thead>
<tbody>
<tr><td>Accounts payable</td><td>Recorded when title passes; gross or net of purchase discounts</td></tr>
<tr><td>Notes payable</td><td>Short-term notes at face; discounted notes record interest as a discount</td></tr>
<tr><td>Accrued liabilities</td><td>Wages, interest, utilities, and taxes incurred but unpaid at period-end</td></tr>
<tr><td>Unearned revenue (contract liability)</td><td>Cash received before performance; recognized as revenue when performance occurs</td></tr>
<tr><td>Sales tax and payroll withholdings</td><td>Collected for a government — a liability, not revenue or expense</td></tr>
<tr><td>Current maturities of long-term debt</td><td>Principal due within 12 months</td></tr>
<tr><td>Dividends payable</td><td>Cash dividends once declared (stock dividends distributable are equity)</td></tr>
</tbody>
</table>

<h3>Compensated absences</h3>
<p>Accrue a liability for vacation (and similar absences) when all four conditions are met: the obligation relates to services <strong>already rendered</strong>; rights <strong>vest or accumulate</strong>; payment is <strong>probable</strong>; and the amount is <strong>reasonably estimable</strong>. Non-vesting sick pay generally need not be accrued even if it accumulates.</p>

<h3>Gift cards and customer loyalty programs</h3>
<p>Gift card sales are contract liabilities. Expected breakage is recognized as revenue in proportion to redemptions when the entity expects to be entitled to it; otherwise when redemption becomes remote. Loyalty points are a separate performance obligation — part of the sale price is deferred.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A retailer sells $100,000 of gift cards and expects 10% breakage. During the year $45,000 is redeemed — 50% of the $90,000 expected. Revenue = 45,000 + (10,000 × 50%) = <strong>$50,000</strong>; remaining contract liability = $50,000.</p></div>

<h2>Loss contingencies (ASC 450)</h2>
<table>
<thead><tr><th>Likelihood</th><th>Reasonably estimable</th><th>Not estimable</th></tr></thead>
<tbody>
<tr><td><strong>Probable</strong> (likely to occur)</td><td>Accrue <strong>and</strong> disclose</td><td>Disclose</td></tr>
<tr><td><strong>Reasonably possible</strong> (more than remote, less than likely)</td><td>Disclose</td><td>Disclose</td></tr>
<tr><td><strong>Remote</strong> (slight chance)</td><td>No accrual or disclosure (except guarantees)</td><td>No accrual or disclosure</td></tr>
</tbody>
</table>

<h3>Measuring an accrual</h3>
<ul>
<li>If one amount in a range is the best estimate, accrue it.</li>
<li>If <strong>no amount in the range is better than any other</strong>, accrue the <strong>minimum</strong> of the range and disclose the possible additional loss.</li>
<li>International Financial Reporting Standards (IFRS) use the midpoint and a lower "more likely than not" threshold for "probable".</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Counsel says a loss is probable and will fall between $200,000 and $500,000, with no amount more likely. Accrue <strong>$200,000</strong> and disclose that up to $300,000 more is reasonably possible.</p></div>

<h3>Specific situations</h3>
<ul>
<li><strong>Unasserted claims:</strong> disclose only if it is probable a claim will be asserted <em>and</em> an unfavorable outcome is at least reasonably possible.</li>
<li><strong>General business risks</strong> and possible future uninsured losses (for example, no fire insurance) are not accrued — no event has occurred.</li>
<li><strong>Self-insurance:</strong> accrue only for incidents that occurred before the balance sheet date.</li>
<li><strong>Litigation after year-end</strong> from an event before year-end is a recognized subsequent event.</li>
<li><strong>Environmental remediation</strong> is accrued when probable and estimable, measured without offsetting expected insurance recoveries (record recoveries separately when probable).</li>
</ul>

<h2>Gain contingencies</h2>
<p>Gain contingencies are <strong>not recognized</strong> until realized or realizable — even if highly probable, and even if a favorable judgment is on appeal. Disclose them carefully, avoiding misleading implications about likelihood of realization.</p>

<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> A company "virtually certain" to win $1,000,000 in a lawsuit still records nothing. Gains are recognized when the case is settled and the amount is realizable.</p></div>

<h2>Warranties</h2>
<ul>
<li><strong>Assurance-type warranty</strong> (the product works as promised): accrue the estimated cost in the period of sale — debit warranty expense, credit warranty liability. Actual repairs reduce the liability.</li>
<li><strong>Service-type warranty</strong> (extra coverage or separately priced): a separate performance obligation under ASC 606 — defer revenue and recognize it over the coverage period.</li>
</ul>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Sales are $2,000,000 and warranty costs are estimated at 3% of sales. The beginning liability was $20,000 and claims paid were $45,000. Warranty expense = <strong>$60,000</strong>; ending liability = 20,000 + 60,000 − 45,000 = <strong>$35,000</strong>.</p></div>

<h2>Guarantees (ASC 460)</h2>
<p>A guarantor recognizes, at inception, a liability for the <strong>fair value of the obligation to stand ready</strong> — even if a payout is remote — and then applies ASC 450 (and the current expected credit loss model where relevant) to the contingent payment. Guarantees are disclosed even when the chance of loss is remote.</p>

<h2>Asset retirement obligations (ASC 410)</h2>
<ul>
<li>Recognize a legal obligation to retire an asset at <strong>fair value</strong> (usually the present value of expected costs using a credit-adjusted risk-free rate) when incurred.</li>
<li>Capitalize the same amount into the asset and depreciate it.</li>
<li>Increase the liability each period through <strong>accretion expense</strong> (an operating expense, not interest).</li>
<li>On settlement, any difference between the liability and actual cost is a gain or loss.</li>
</ul>

<h2>Commitments</h2>
<ul>
<li><strong>Unconditional purchase obligations</strong> and other significant commitments are disclosed.</li>
<li>Losses on firm, non-cancelable purchase commitments are recognized when the market price falls below the contract price.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Decide accrue / disclose / nothing for a contingency.</li>
<li>Compute the accrual when a range is given.</li>
<li>Roll forward a warranty liability.</li>
<li>Compute gift card revenue including breakage.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Build a quick grid in your head: probable + estimable = accrue; anything reasonably possible = disclose; remote = nothing (except guarantees); gains = never accrue.</p></div>
`,
  revision: `
<h3>Loss contingencies</h3>
<table>
<thead><tr><th>Likelihood</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Probable + estimable</td><td>Accrue + disclose</td></tr>
<tr><td>Probable, not estimable</td><td>Disclose</td></tr>
<tr><td>Reasonably possible</td><td>Disclose</td></tr>
<tr><td>Remote</td><td>Nothing (disclose guarantees)</td></tr>
</tbody>
</table>
<ul>
<li>Range with no best estimate → accrue the <strong>minimum</strong> (International Financial Reporting Standards (IFRS): midpoint).</li>
<li>Unasserted claim → disclose if assertion probable <strong>and</strong> loss reasonably possible.</li>
<li>Gain contingencies → <strong>never accrue</strong>.</li>
</ul>

<h3>Other liabilities</h3>
<ul>
<li>Compensated absences: services rendered + vest or accumulate + probable + estimable.</li>
<li>Assurance warranty → accrue cost; service warranty → deferred revenue.</li>
<li>Gift cards: breakage in proportion to redemptions.</li>
<li>Guarantees: liability for the stand-ready obligation at fair value.</li>
<li>Asset retirement obligation: present value, capitalized into the asset; accretion expense is operating.</li>
</ul>

<h3>Formulas</h3>
<p>Ending warranty liability = beginning + expense − claims paid.</p>
`,
};
