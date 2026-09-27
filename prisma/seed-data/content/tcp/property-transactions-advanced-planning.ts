import type { TopicContent } from "../types";

export const propertyPlanning: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Property Transactions is Area IV of Tax Compliance and Planning (TCP). Where Taxation and Regulation (REG) tests how to compute gains, TCP asks how to <strong>structure</strong> acquisitions, holding, and dispositions of property to reduce or defer tax — installment sales, like-kind exchanges, cost recovery choices, depreciation recapture, opportunity zones, and charitable and estate alternatives.</p>

<h2>Acquisition and holding: cost recovery choices</h2>
<ul>
<li><strong>100% bonus depreciation</strong> (permanent for property acquired after January 19, 2025, under the One Big Beautiful Bill Act (OBBBA)) and <strong>Section 179</strong> (up to $2.5 million in 2025, indexed) allow immediate write-offs. Accelerating deductions is usually valuable — but not if the taxpayer expects higher rates later, has expiring losses, or needs income to use other deductions.</li>
<li>Electing out of bonus depreciation (by class) can smooth income or preserve deductions for higher-rate years.</li>
<li><strong>Cost segregation studies</strong> reclassify parts of a building into 5-, 7-, and 15-year property (eligible for bonus depreciation), sharply accelerating deductions on real estate.</li>
<li><strong>Qualified improvement property</strong> (interior improvements to nonresidential buildings) is 15-year property eligible for bonus depreciation.</li>
<li>Remember the trade-off: faster depreciation now increases <strong>depreciation recapture</strong> later.</li>
</ul>

<h2>Disposition planning</h2>
<h3>Character and recapture</h3>
<ul>
<li>Section 1245 property (equipment): all prior depreciation (including bonus and Section 179) is recaptured as <strong>ordinary income</strong>.</li>
<li>Real property: unrecaptured Section 1250 gain is taxed at up to <strong>25%</strong>; any excess is Section 1231 gain (long-term capital rates).</li>
<li>Watch the <strong>Section 1231 five-year lookback</strong> — net 1231 losses in prior years convert current 1231 gains into ordinary income. Timing sales to recognize 1231 losses and gains in separate years can help.</li>
<li>The 3.8% net investment income tax applies to gains from investment and passive activities (not from a trade or business in which the taxpayer materially participates).</li>
</ul>

<h3>Installment sales</h3>
<ul>
<li>Spread gain over the years payments are received (gross profit ratio × principal collected) — deferring tax and possibly keeping income in lower brackets.</li>
<li>Recapture income is recognized in the year of sale, even if no cash is received.</li>
<li>Not available for inventory, dealer sales, or publicly traded securities.</li>
<li><strong>Related-party resales:</strong> if a related buyer resells within <strong>2 years</strong>, the original seller accelerates the deferred gain.</li>
<li>For large installment notes (face amount over $5 million), an interest charge applies to the deferred tax.</li>
<li>Pledging the installment note as collateral for a loan is treated as a payment.</li>
</ul>

<h3>Like-kind exchanges (Section 1031)</h3>
<ul>
<li>Only <strong>real property</strong> held for business or investment qualifies.</li>
<li>Use a <strong>qualified intermediary</strong> so the taxpayer never has constructive receipt of sale proceeds; identify replacement property within <strong>45 days</strong> and close within <strong>180 days</strong>.</li>
<li>To defer all gain, buy replacement property of <strong>equal or greater value</strong> and replace any debt paid off — otherwise the difference is taxable boot.</li>
<li><strong>Reverse exchanges</strong> (acquire the replacement first) are possible through an exchange accommodation titleholder.</li>
<li>Deferred gain carries into the replacement property's lower basis — and disappears entirely if the property is held until death (basis step-up): the "swap until you drop" strategy.</li>
<li>Related-party exchanges: either party disposing within 2 years triggers the deferred gain.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An investor sells a rental building for $2,000,000 (adjusted basis $800,000; mortgage $600,000 paid off at closing). To defer all $1,200,000 of gain, the investor must acquire replacement real property costing at least $2,000,000, reinvest all $1,400,000 of net cash, and take on at least $600,000 of new debt (or add cash). Buying only a $1,700,000 property would create $300,000 of taxable boot.</p></div>

<h3>Involuntary conversions (Section 1033)</h3>
<p>Reinvest insurance or condemnation proceeds in similar property within 2 years (3 years for condemned business or investment real property) to defer gain; the deferral is elective, and losses are recognized.</p>

<h3>Qualified opportunity zones</h3>
<p>Capital gains invested in a qualified opportunity fund within 180 days can be deferred, and appreciation on the fund investment held at least 10 years can be excluded. OBBBA made the program permanent with new rolling zone designations and deferral rules for investments made after 2026.</p>

<h2>Alternatives to a taxable sale</h2>
<table>
<thead><tr><th>Strategy</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Hold until death</td><td>Heirs get a stepped-up basis — built-in gain is never taxed</td></tr>
<tr><td>Donate appreciated property to charity</td><td>Deduct fair market value (long-term capital gain property); no gain</td></tr>
<tr><td>Charitable remainder trust</td><td>The trust sells tax-free; the donor receives income over time plus a deduction</td></tr>
<tr><td>Contribute to a partnership or corporation</td><td>Generally tax-free (Sections 721 and 351) — but watch disguised sale and liability rules</td></tr>
<tr><td>Borrow against the property</td><td>Cash without a taxable sale (interest deductibility depends on use)</td></tr>
<tr><td>Principal residence exclusion</td><td>$250,000 / $500,000 of gain excluded after 2 of 5 years' ownership and use; partial exclusions for moves due to work, health, or unforeseen events</td></tr>
</tbody>
</table>

<h2>Passive losses on disposition</h2>
<p>Suspended passive losses from an activity are fully released when the taxpayer disposes of the <strong>entire interest</strong> in a fully taxable transaction to an unrelated party — so selling a loss-generating rental can unlock years of losses against other income.</p>

<h2>How it is tested</h2>
<ul>
<li>Recommend a disposition strategy for appreciated property.</li>
<li>Compute taxable boot and deferred gain in a like-kind exchange.</li>
<li>Apply installment sale rules, including recapture and related parties.</li>
<li>Weigh accelerated depreciation against future recapture.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> In an installment sale, depreciation recapture is taxed in the year of sale regardless of payments — a seller of heavily depreciated equipment can owe tax before collecting any cash.</p></div>
`,
  revision: `
<h3>Cost recovery</h3>
<p>100% bonus depreciation (permanent) · Section 179 · cost segregation · qualified improvement property (15-year). Faster deductions → more recapture later.</p>

<h3>Character</h3>
<p>Section 1245: all depreciation → ordinary. Real property: unrecaptured Section 1250 gain 25%. Section 1231: 5-year lookback.</p>

<h3>Installment sales</h3>
<p>Gain as paid (gross profit ratio); recapture in year of sale; related-party resale within 2 years accelerates; not for inventory or public securities.</p>

<h3>Like-kind exchange (Section 1031)</h3>
<ul>
<li>Real property only; qualified intermediary; 45 / 180 days.</li>
<li>Full deferral: equal or greater value, all cash reinvested, replace debt.</li>
<li>Hold until death → step-up erases deferred gain.</li>
</ul>

<h3>Other</h3>
<ul>
<li>Involuntary conversions: 2 years (3 for condemned real property).</li>
<li>Opportunity zones: defer gains; exclude 10-year appreciation; permanent under the One Big Beautiful Bill Act (OBBBA).</li>
<li>Alternatives: hold until death, donate, charitable remainder trust, contribute to an entity, borrow.</li>
<li>Full disposition releases suspended passive losses.</li>
</ul>
`,
};
