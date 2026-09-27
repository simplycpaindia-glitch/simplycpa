import type { TopicContent } from "../types";

export const propertyPlantEquipment: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Property, plant, and equipment (PP&amp;E) is covered by Accounting Standards Codification (ASC) 360 and tested in Financial Accounting and Reporting (FAR) Area II. Questions cover what to capitalize, depreciation methods, capitalized interest, nonmonetary exchanges, impairment, and disposals. Most of it is calculation-based, so practice the numbers.</p>

<h2>Initial measurement — what to capitalize</h2>
<p>Capitalize all costs necessary to acquire the asset and get it ready for its intended use.</p>
<table>
<thead><tr><th>Asset</th><th>Capitalize</th></tr></thead>
<tbody>
<tr><td>Land</td><td>Purchase price, closing costs, title fees, surveys, back taxes assumed, clearing and grading, <strong>demolition of an old building</strong> (less salvage). Land is not depreciated.</td></tr>
<tr><td>Land improvements</td><td>Parking lots, fences, driveways, lighting — depreciated separately</td></tr>
<tr><td>Buildings</td><td>Purchase price or construction costs, architect fees, permits, excavation, capitalized interest during construction</td></tr>
<tr><td>Equipment</td><td>Price (net of discounts), sales tax, freight-in, insurance in transit, installation, testing</td></tr>
</tbody>
</table>
<ul>
<li><strong>Lump-sum purchase:</strong> allocate the total price by relative fair values.</li>
<li><strong>Assets acquired by issuing stock:</strong> fair value of the stock or the asset, whichever is more clearly evident.</li>
<li><strong>Donated assets:</strong> fair value, with contribution revenue (gain) for a business.</li>
<li><strong>Self-constructed assets:</strong> materials, labor, and a share of overhead (incremental or full-cost approach), plus capitalized interest.</li>
<li><strong>Asset retirement obligation (ARO):</strong> the present value of a legal obligation to dismantle or restore is added to the asset's cost.</li>
</ul>

<h2>Capitalized interest (ASC 835-20)</h2>
<p>Interest is capitalized on assets constructed for an entity's own use (or built as discrete projects for sale or lease) during the period the asset is being built.</p>
<ol>
<li>Compute <strong>weighted-average accumulated expenditures</strong> (WAAE) for the period.</li>
<li>Apply the rate on specific construction borrowings to that portion of WAAE, and the weighted-average rate on other debt to any excess.</li>
<li>The result is <strong>avoidable interest</strong>. Capitalize the <strong>lesser of avoidable interest and actual interest incurred</strong>.</li>
</ol>
<p>Do not capitalize interest on inventory routinely produced in large quantities, assets already in use, or land held without development. Interest earned on unspent borrowed funds does not reduce capitalized interest under US Generally Accepted Accounting Principles (GAAP) (except for certain tax-exempt borrowings).</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> WAAE = $1,200,000. Specific construction loan $800,000 at 8%; other debt averages 10%. Avoidable interest = 800,000 × 8% + 400,000 × 10% = 64,000 + 40,000 = <strong>$104,000</strong>. If total actual interest incurred is $150,000, capitalize $104,000.</p></div>

<h2>Costs after acquisition</h2>
<table>
<thead><tr><th>Expenditure</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Ordinary repairs and maintenance</td><td>Expense</td></tr>
<tr><td>Additions (a new wing)</td><td>Capitalize</td></tr>
<tr><td>Improvements and betterments that increase capacity, efficiency, or useful life</td><td>Capitalize (to the asset, or debit accumulated depreciation if extending life)</td></tr>
<tr><td>Rearrangement and relocation</td><td>Capitalize if material and beneficial beyond the current period; otherwise expense</td></tr>
</tbody>
</table>

<h2>Depreciation methods</h2>
<table>
<thead><tr><th>Method</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Straight-line</td><td>(Cost − salvage) ÷ useful life</td></tr>
<tr><td>Units of production</td><td>(Cost − salvage) ÷ total estimated units × units this period</td></tr>
<tr><td>Double-declining balance (DDB)</td><td>Beginning carrying amount × (2 ÷ life). <strong>Ignore salvage</strong> in the rate, but never depreciate below salvage.</td></tr>
<tr><td>Sum-of-the-years'-digits (SYD)</td><td>(Cost − salvage) × remaining life ÷ sum of digits; sum = n(n + 1) ÷ 2</td></tr>
<tr><td>Group and composite</td><td>One rate for similar or dissimilar assets; no gain or loss on individual retirements</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Equipment costs $110,000, salvage $10,000, 5-year life.<br>Straight-line: $20,000 per year.<br>DDB: Year 1 = 110,000 × 40% = $44,000; Year 2 = 66,000 × 40% = $26,400.<br>SYD: sum = 15; Year 1 = 100,000 × 5/15 = $33,333; Year 2 = 100,000 × 4/15 = $26,667.</p></div>

<p><strong>Partial years:</strong> prorate by months held unless a convention (half-year) is specified. <strong>Changes in useful life, salvage value, or depreciation method</strong> are changes in estimate — applied prospectively to the remaining carrying amount.</p>

<h2>Nonmonetary exchanges (ASC 845)</h2>
<table>
<thead><tr><th>Situation</th><th>New asset recorded at</th><th>Gain</th><th>Loss</th></tr></thead>
<tbody>
<tr><td>Has commercial substance (future cash flows change significantly)</td><td>Fair value of asset given + cash paid (− cash received)</td><td>Recognize in full</td><td>Recognize in full</td></tr>
<tr><td>Lacks commercial substance, no cash received</td><td>Carrying amount of asset given + cash paid</td><td>Not recognized</td><td>Recognize (losses always recognized)</td></tr>
<tr><td>Lacks commercial substance, cash (boot) received</td><td>Carrying amount − cash received + gain recognized</td><td>Proportional: gain × cash ÷ (cash + fair value of asset received). If cash is 25% or more of total consideration, the exchange is monetary — full gain.</td><td>Recognize in full</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Old equipment (cost $50,000, accumulated depreciation $30,000, fair value $25,000) plus $5,000 cash is exchanged for new equipment; the exchange has commercial substance. Gain = 25,000 − 20,000 = <strong>$5,000</strong>; new equipment = 25,000 + 5,000 = <strong>$30,000</strong>.</p></div>

<h2>Impairment of long-lived assets held for use</h2>
<ol>
<li><strong>Indicator:</strong> events suggest the carrying amount may not be recoverable (significant decline in market price, adverse change in use or legal factors, cost overruns, operating losses).</li>
<li><strong>Recoverability test:</strong> is the carrying amount greater than the <strong>undiscounted</strong> future net cash flows? If not, stop — no impairment.</li>
<li><strong>Measurement:</strong> impairment loss = carrying amount − <strong>fair value</strong>.</li>
</ol>
<p>The written-down amount becomes the new cost basis; <strong>reversals are prohibited</strong> for assets held for use. Assets held for sale are measured at the lower of carrying amount or fair value less costs to sell, are not depreciated, and <em>can</em> recover previous losses.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Carrying amount $900,000; undiscounted cash flows $840,000; fair value $760,000. The asset fails the recoverability test (900 &gt; 840), so the impairment loss = 900,000 − 760,000 = <strong>$140,000</strong>.</p></div>

<h2>Disposals and involuntary conversions</h2>
<ul>
<li>Update depreciation to the disposal date, then gain or loss = proceeds − carrying amount.</li>
<li>Involuntary conversions (fire, condemnation) are recognized as gains or losses under GAAP even if the proceeds are reinvested (tax rules differ).</li>
</ul>

<h2>Differences from International Financial Reporting Standards (IFRS)</h2>
<ul>
<li>IFRS allows the <strong>revaluation model</strong> and requires component depreciation.</li>
<li>IFRS impairment uses a one-step test comparing carrying amount with the recoverable amount (higher of fair value less costs of disposal and value in use), and allows reversals.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Determine the capitalized cost of land, building, or equipment from a list of costs.</li>
<li>Compute depreciation under several methods, including partial years and changes in estimate.</li>
<li>Calculate avoidable interest and the amount capitalized.</li>
<li>Apply the two-step impairment test and record exchanges.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Impairment uses <em>undiscounted</em> cash flows to decide whether an asset is impaired, and <em>fair value</em> to measure the loss. Candidates often use the undiscounted figure for both steps.</p></div>
`,
  revision: `
<h3>Capitalize</h3>
<ul>
<li>Land: price, closing costs, clearing, <strong>demolition of old building</strong>. Not depreciated.</li>
<li>Equipment: price, tax, freight-in, installation, testing.</li>
<li>Lump-sum: allocate by relative fair values.</li>
<li>Interest: lesser of <strong>avoidable</strong> (on weighted-average accumulated expenditures) and <strong>actual</strong> interest.</li>
</ul>

<h3>Depreciation</h3>
<ul>
<li>Double-declining balance: book value × 2/life — ignore salvage in the rate, stop at salvage.</li>
<li>Sum-of-the-years'-digits: (cost − salvage) × remaining life ÷ n(n + 1)/2.</li>
<li>Change in life, salvage, or method → prospective (change in estimate).</li>
</ul>

<h3>Exchanges</h3>
<ul>
<li>Commercial substance → fair value; gains and losses in full.</li>
<li>No commercial substance → carrying amount; no gain (unless cash received: proportional gain); losses always recognized.</li>
</ul>

<h3>Impairment (held for use)</h3>
<ol>
<li>Carrying amount &gt; <strong>undiscounted</strong> cash flows? If yes →</li>
<li>Loss = carrying amount − <strong>fair value</strong>.</li>
</ol>
<p>No reversals under US Generally Accepted Accounting Principles (GAAP). Held for sale: lower of carrying amount or fair value less costs to sell, no depreciation, recoveries allowed up to prior losses.</p>
`,
};
