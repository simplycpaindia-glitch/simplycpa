import type { TopicContent } from "../types";

export const revenueSpecificArrangements: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Financial Accounting and Reporting (FAR) covers the five-step model of Accounting Standards Codification (ASC) 606. Business Analysis and Reporting (BAR) applies it to harder arrangements: long-term contracts with losses, licenses of intellectual property, repurchase agreements, consignment and bill-and-hold, material rights, upfront fees, contract modifications, and principal-versus-agent judgments.</p>

<h2>Long-term contracts recognized over time</h2>
<p>Construction and similar contracts usually meet an over-time criterion (the customer controls the asset as it is built, or there is no alternative use plus an enforceable right to payment).</p>
<ul>
<li><strong>Input method (cost-to-cost):</strong> percent complete = costs incurred to date ÷ total estimated costs. Revenue to date = percent complete × total transaction price; current-year revenue = revenue to date − revenue previously recognized.</li>
<li>Uninstalled materials and wasted costs are excluded from the measure of progress.</li>
<li>Changes in estimates are applied with a <strong>cumulative catch-up</strong> in the current period.</li>
<li><strong>Loss contracts:</strong> when total estimated costs exceed the contract price, the <strong>entire expected loss is recognized immediately</strong>, regardless of the method.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Contract price $1,000,000. Year 1 costs $300,000, estimated remaining $450,000. Year 2 costs $400,000, estimated remaining $150,000.<br>Year 1: 300 ÷ 750 = 40% → revenue $400,000; gross profit = 400,000 − 300,000 = <strong>$100,000</strong>.<br>Year 2: total cost now $850,000; 700 ÷ 850 = 82.35% → cumulative revenue $823,529; Year 2 revenue = $423,529; Year 2 gross profit = 423,529 − 400,000 = <strong>$23,529</strong> (cumulative profit $123,529).<br>If instead total estimated costs rose to $1,050,000, the full <strong>$50,000 loss</strong> would be recognized in Year 2, reversing the $100,000 Year 1 profit (a Year 2 loss of $150,000).</p></div>

<h2>Licenses of intellectual property</h2>
<table>
<thead><tr><th>Type</th><th>Examples</th><th>Recognition</th></tr></thead>
<tbody>
<tr><td><strong>Functional</strong> intellectual property — a right to <strong>use</strong> the property as it exists</td><td>Software, films, music, drug formulas</td><td><strong>Point in time</strong>, when the customer can use and benefit from the license</td></tr>
<tr><td><strong>Symbolic</strong> intellectual property — a right to <strong>access</strong> it as it changes</td><td>Brand names, logos, franchise rights, team names</td><td><strong>Over time</strong> across the license period</td></tr>
</tbody>
</table>
<p><strong>Sales- or usage-based royalty exception:</strong> royalties based on the licensee's sales or usage are recognized only when the later sale or usage occurs (or the obligation is satisfied, if later) — no estimate upfront.</p>

<h2>Repurchase agreements</h2>
<table>
<thead><tr><th>Arrangement</th><th>Accounting by the seller</th></tr></thead>
<tbody>
<tr><td>Seller has an obligation (forward) or right (call option) to repurchase</td><td>The customer does not obtain control — account for it as a <strong>lease</strong> (repurchase price below original price) or a <strong>financing</strong> (repurchase price at or above the original price)</td></tr>
<tr><td>Customer can require repurchase (put option)</td><td>If the customer has a significant economic incentive to exercise: lease or financing. Otherwise: a sale with a right of return.</td></tr>
</tbody>
</table>

<h2>Other arrangements</h2>
<ul>
<li><strong>Consignment:</strong> the consignor keeps control (the consignee can't be required to pay until sale and can return goods) — no revenue until the consignee sells to an end customer.</li>
<li><strong>Bill-and-hold:</strong> revenue before delivery only if the arrangement has a substantive reason (customer request), the goods are identified separately as the customer's, are ready for physical transfer, and can't be used or directed to another customer.</li>
<li><strong>Customer options — material rights:</strong> an option to buy additional goods at a discount the customer wouldn't otherwise receive (a loyalty program, a renewal discount) is a <strong>separate performance obligation</strong>; allocate part of the price to it based on its standalone selling price (adjusted for likelihood of exercise).</li>
<li><strong>Nonrefundable upfront fees</strong> (activation, membership initiation) usually relate to future goods or services and are deferred over the contract period — or longer if they give a material right to renew.</li>
<li><strong>Principal versus agent:</strong> the entity is a principal if it <strong>controls</strong> the good or service before transfer. Indicators: primary responsibility for fulfillment, inventory risk, and discretion in setting prices. Principals report revenue gross; agents report the net commission.</li>
<li><strong>Franchise fees:</strong> initial franchise rights are symbolic intellectual property (over time); private companies may elect to treat certain pre-opening services as distinct.</li>
<li><strong>Software as a service:</strong> a hosting arrangement where the customer can't take possession of the software is a service recognized over time, not a license.</li>
</ul>

<h2>Contract modifications</h2>
<table>
<thead><tr><th>Modification</th><th>Accounting</th></tr></thead>
<tbody>
<tr><td>Adds distinct goods or services at their standalone selling prices</td><td><strong>Separate contract</strong></td></tr>
<tr><td>Remaining goods or services are distinct from those already transferred (but not priced at standalone selling price)</td><td><strong>Prospective</strong> — treat as terminating the old contract and creating a new one</td></tr>
<tr><td>Remaining goods or services are not distinct (part of a single partially completed obligation)</td><td><strong>Cumulative catch-up</strong> adjustment</td></tr>
</tbody>
</table>

<h2>Contract costs</h2>
<ul>
<li><strong>Costs to obtain</strong> a contract (incremental commissions) are capitalized if recoverable — the practical expedient allows expensing if the amortization period is one year or less.</li>
<li><strong>Costs to fulfill</strong> a contract are capitalized if they relate directly to a contract, generate resources used to satisfy it, and are recoverable (unless covered by other guidance such as inventory).</li>
<li>Capitalized costs are amortized consistent with the transfer of the related goods or services and tested for impairment.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute revenue and gross profit on long-term contracts, including loss contracts.</li>
<li>Classify licenses as functional or symbolic, and apply the royalty exception.</li>
<li>Account for repurchase agreements, consignment, and bill-and-hold.</li>
<li>Account for contract modifications and material rights.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> On a loss contract, recognize the <em>whole</em> expected loss now. Candidates often recognize only the loss "for the percentage complete", which understates it.</p></div>
`,
  revision: `
<h3>Long-term contracts</h3>
<ul>
<li>Cost-to-cost: costs to date ÷ total estimated costs × price; current revenue = cumulative − prior.</li>
<li>Estimate changes: cumulative catch-up.</li>
<li><strong>Loss contract: recognize full loss immediately.</strong></li>
</ul>

<h3>Licenses</h3>
<p>Functional (software, films) → point in time. Symbolic (brands, franchises) → over time. Sales- or usage-based royalties → when sales or usage occur.</p>

<h3>Repurchase agreements</h3>
<p>Seller forward or call → lease (price lower) or financing (price same or higher). Customer put with significant incentive → lease or financing; otherwise sale with right of return.</p>

<h3>Other</h3>
<ul>
<li>Consignment: no revenue until the consignee sells.</li>
<li>Bill-and-hold: substantive reason, identified, ready, can't be redirected.</li>
<li>Material right → separate performance obligation.</li>
<li>Upfront fees → defer.</li>
<li>Principal (controls before transfer) → gross; agent → net.</li>
</ul>

<h3>Modifications</h3>
<p>Distinct at standalone price → separate contract · distinct otherwise → prospective · not distinct → catch-up.</p>
`,
};
