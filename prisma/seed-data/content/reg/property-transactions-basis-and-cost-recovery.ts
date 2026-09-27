import type { TopicContent } from "../types";

export const basisCostRecovery: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Every gain or loss calculation starts with basis, and every depreciation deduction starts with cost recovery rules. Taxation and Regulation (REG) Area III (Federal Taxation of Property Transactions, 5–15%) tests basis in purchased, gifted, and inherited property, and the Modified Accelerated Cost Recovery System (MACRS), Section 179 expensing, and bonus depreciation — all updated by the One Big Beautiful Bill Act (OBBBA) of July 2025, whose 2025 provisions became testable on July 1, 2026.</p>

<h2>Initial basis</h2>
<table>
<thead><tr><th>How acquired</th><th>Basis</th></tr></thead>
<tbody>
<tr><td>Purchase</td><td>Cost: cash + fair market value (FMV) of property given + <strong>liabilities assumed</strong> + acquisition costs (commissions, title fees, sales tax, installation)</td></tr>
<tr><td>Services received as income</td><td>FMV included in income</td></tr>
<tr><td>Lump-sum purchase</td><td>Allocate by relative FMVs (land is not depreciable)</td></tr>
<tr><td>Nontaxable stock dividend or stock rights</td><td>Allocate the original basis between old and new shares</td></tr>
<tr><td>Like-kind exchange</td><td>Substituted basis (see the Gains, Losses &amp; Like-Kind Exchanges topic)</td></tr>
<tr><td>Converting personal-use property to business use</td><td>For depreciation and losses: the <strong>lesser</strong> of adjusted basis or FMV at conversion</td></tr>
</tbody>
</table>
<p><strong>Adjusted basis</strong> = initial basis + capital improvements − depreciation, casualty losses, and other recoveries of capital.</p>

<h3>Property received by gift</h3>
<table>
<thead><tr><th>Situation</th><th>Basis for gain</th><th>Basis for loss</th></tr></thead>
<tbody>
<tr><td>FMV at gift ≥ donor's basis</td><td colspan="2">Donor's adjusted basis (carryover) + gift tax paid on the appreciation</td></tr>
<tr><td>FMV at gift &lt; donor's basis (<strong>dual basis</strong>)</td><td>Donor's basis</td><td>FMV at date of gift</td></tr>
</tbody>
</table>
<p>With dual basis, a sale price <strong>between</strong> FMV at the gift date and the donor's basis produces <strong>no gain and no loss</strong>. The holding period carries over from the donor, except when FMV is used as the loss basis (then it starts on the gift date).</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Donor's basis $10,000; FMV at gift $6,000.<br>Donee sells for $12,000 → gain of $2,000 (using $10,000).<br>Donee sells for $5,000 → loss of $1,000 (using $6,000).<br>Donee sells for $8,000 → no gain or loss.</p></div>

<h3>Property acquired from a decedent</h3>
<ul>
<li>Basis = <strong>FMV at the date of death</strong> (or the alternate valuation date, 6 months later, if the executor elects it) — "stepped up" or "stepped down".</li>
<li>The holding period is <strong>automatically long-term</strong>.</li>
<li>Exception: appreciated property gifted to the decedent within 1 year of death that passes back to the donor (or spouse) keeps the decedent's basis.</li>
<li>Income in respect of a decedent (for example, unpaid salary, traditional individual retirement account (IRA) balances) gets no step-up.</li>
</ul>

<h2>Depreciation — MACRS</h2>
<table>
<thead><tr><th>Class</th><th>Examples</th><th>Method</th></tr></thead>
<tbody>
<tr><td>3-year</td><td>Tractor units, certain racehorses</td><td>200% declining balance</td></tr>
<tr><td>5-year</td><td>Cars, light trucks, computers, office machinery</td><td>200% declining balance</td></tr>
<tr><td>7-year</td><td>Office furniture, fixtures, most machinery and equipment</td><td>200% declining balance</td></tr>
<tr><td>15-year</td><td>Land improvements (fences, parking lots), <strong>qualified improvement property</strong></td><td>150% declining balance</td></tr>
<tr><td><strong>27.5-year</strong></td><td>Residential rental property</td><td>Straight-line, <strong>mid-month</strong></td></tr>
<tr><td><strong>39-year</strong></td><td>Nonresidential real property (commercial buildings)</td><td>Straight-line, <strong>mid-month</strong></td></tr>
</tbody>
</table>
<ul>
<li>Salvage value is ignored.</li>
<li><strong>Half-year convention</strong> for personal property: half a year's depreciation in the year placed in service and the year of disposal.</li>
<li><strong>Mid-quarter convention</strong> applies to all personal property placed in service that year if <strong>more than 40%</strong> of the depreciable basis (excluding Section 179 property and real property) is placed in service in the <strong>last quarter</strong>.</li>
<li><strong>Mid-month convention</strong> for real property.</li>
<li>The Alternative Depreciation System (ADS) — straight-line over longer lives — is required in some cases (for example, listed property used 50% or less for business).</li>
<li><strong>Listed property</strong> (passenger vehicles and similar) must be used more than 50% for business to use MACRS and Section 179; passenger automobiles have annual depreciation caps.</li>
</ul>

<h2>Section 179 expensing</h2>
<ul>
<li>Elect to expense tangible personal property (and certain real property improvements such as roofs, heating and air conditioning, security systems, and qualified improvement property) in the year placed in service.</li>
<li>OBBBA raised the limit to <strong>$2.5 million</strong>, reduced dollar-for-dollar once qualifying purchases exceed <strong>$4 million</strong> (2025 amounts, indexed for inflation — about $2.56 million and $4.09 million for 2026).</li>
<li>The deduction is limited to <strong>business taxable income</strong>; any excess carries forward indefinitely. It <strong>cannot create a loss</strong>.</li>
</ul>

<h2>Bonus depreciation</h2>
<ul>
<li>OBBBA <strong>permanently restored 100% bonus depreciation</strong> for qualified property <strong>acquired after January 19, 2025</strong> (property acquired earlier follows the phase-down: 40% in 2025).</li>
<li>Applies to new or used property with a MACRS life of 20 years or less (plus qualified improvement property); not buildings.</li>
<li><strong>No dollar cap</strong> and no taxable income limit — it <strong>can create or increase a net operating loss</strong>.</li>
<li>Automatic unless the taxpayer elects out, by class of property.</li>
<li><strong>Order:</strong> Section 179 first → bonus depreciation → regular MACRS on the remaining basis.</li>
<li>OBBBA also created a temporary 100% deduction for <strong>qualified production property</strong> (certain nonresidential real property used in manufacturing).</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> In 2026 a business buys $300,000 of 7-year equipment and elects $100,000 of Section 179. It takes 100% bonus on the remaining $200,000. Total first-year deduction = <strong>$300,000</strong>. If it elected out of bonus, it would deduct $100,000 + MACRS on $200,000 (14.29% × 200,000 = $28,580) = $128,580.</p></div>

<h2>Amortization and other cost recovery</h2>
<table>
<thead><tr><th>Item</th><th>Tax treatment</th></tr></thead>
<tbody>
<tr><td>Section 197 intangibles (purchased goodwill, customer lists, covenants not to compete, trademarks, franchises)</td><td>Amortized straight-line over <strong>15 years</strong> (180 months)</td></tr>
<tr><td>Start-up and organizational costs</td><td>Deduct up to <strong>$5,000</strong> each in the first year, reduced dollar-for-dollar once costs exceed <strong>$50,000</strong>; the rest over 180 months</td></tr>
<tr><td>Domestic research and experimental expenditures (new §174A)</td><td>OBBBA restored immediate <strong>expensing</strong> for tax years beginning after December 31, 2024 (small businesses may apply it retroactively); foreign research is still amortized over 15 years</td></tr>
<tr><td>Depletion (natural resources)</td><td>Cost depletion (units extracted), or percentage depletion (a statutory percentage of gross income) — take the greater; percentage depletion may exceed basis</td></tr>
</tbody>
</table>

<h2>How it is tested</h2>
<ul>
<li>Compute basis for purchased, gifted (dual basis), and inherited property.</li>
<li>Choose the MACRS class, method, and convention.</li>
<li>Apply Section 179 limits and bonus depreciation in the correct order.</li>
<li>Compute start-up cost deductions and Section 197 amortization.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Section 179 can't create a loss; bonus depreciation can. Section 179 has a dollar limit and phase-out; bonus has neither. Apply Section 179 first.</p></div>
`,
  revision: `
<h3>Basis</h3>
<ul>
<li>Purchase: cost + liabilities assumed + acquisition costs.</li>
<li>Gift: donor's basis; if fair market value (FMV) &lt; donor's basis → <strong>dual basis</strong> (gain: donor's basis; loss: FMV; in between: no gain or loss).</li>
<li>Inherited: FMV at death (or 6 months later); always long-term.</li>
<li>Personal to business use: lesser of basis or FMV.</li>
</ul>

<h3>Modified Accelerated Cost Recovery System (MACRS)</h3>
<ul>
<li>5-year: cars, computers. 7-year: furniture, equipment. 15-year: land improvements, qualified improvement property.</li>
<li>Residential rental: 27.5 years. Nonresidential: 39 years. Straight-line, mid-month.</li>
<li>Half-year convention; mid-quarter if &gt; 40% placed in service in the fourth quarter.</li>
<li>No salvage value.</li>
</ul>

<h3>Expensing (One Big Beautiful Bill Act (OBBBA))</h3>
<ul>
<li>Section 179: $2.5 million, phase-out above $4 million (2025, indexed); limited to business income — <strong>no loss</strong>.</li>
<li>Bonus: <strong>100%, permanent</strong>, property acquired after January 19, 2025; no cap; can create a loss.</li>
<li>Order: 179 → bonus → MACRS.</li>
<li>Domestic research costs: expensed again (tax years after 2024).</li>
</ul>

<h3>Amortization</h3>
<p>Section 197 intangibles: 15 years. Start-up costs: $5,000 immediate (phase-out over $50,000), rest over 180 months.</p>
`,
};
