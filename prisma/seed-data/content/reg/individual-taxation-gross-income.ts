import type { TopicContent } from "../types";

export const grossIncome: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Federal Taxation of Individuals is Area IV of Taxation and Regulation (REG), 22–32% of the section. It starts with gross income: under the Internal Revenue Code (IRC), gross income is <strong>all income from whatever source derived</strong>, unless a specific provision excludes it. Questions list receipts and ask which are taxable, how much, and when.</p>

<h2>The individual tax formula</h2>
<table>
<thead><tr><th>Individual tax computation</th></tr></thead>
<tbody>
<tr><td>Gross income (all income − exclusions)</td></tr>
<tr><td>− Adjustments ("above-the-line" deductions)</td></tr>
<tr><td><strong>= Adjusted gross income (AGI)</strong></td></tr>
<tr><td>− Greater of the standard deduction or itemized deductions</td></tr>
<tr><td>− Qualified business income (QBI) deduction and other below-the-line deductions (tips, overtime, senior, car loan interest)</td></tr>
<tr><td><strong>= Taxable income</strong> × tax rates</td></tr>
<tr><td>− Credits + other taxes (self-employment, net investment income tax) = tax due or refund</td></tr>
</tbody>
</table>

<h2>Timing</h2>
<ul>
<li>Cash-basis individuals report income when <strong>actually or constructively received</strong>. Constructive receipt: income credited to the taxpayer's account or made available without substantial restriction (for example, a check received on December 30 is income that year, even if deposited in January).</li>
<li><strong>Prepaid rent and advance payments</strong> are generally taxable when received; security deposits are not income unless kept.</li>
<li><strong>Assignment of income:</strong> income from services is taxed to the person who earns it; income from property is taxed to the owner of the property.</li>
</ul>

<h2>Common inclusions</h2>
<table>
<thead><tr><th>Item</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>Wages, salaries, bonuses, tips, commissions</td><td>Fully taxable (see the adjustments topic for the new tips and overtime deductions)</td></tr>
<tr><td>Interest</td><td>Taxable, including on corporate and US Treasury bonds (Treasury interest is exempt from <em>state</em> tax), bank deposits, and tax refunds</td></tr>
<tr><td>Dividends</td><td>Taxable to the extent of the corporation's earnings and profits; <strong>qualified dividends</strong> get capital gain rates; distributions above earnings and profits are a return of basis, then capital gain</td></tr>
<tr><td>Business and rental income</td><td>Net income reported on Schedules C and E</td></tr>
<tr><td>Prizes, awards, gambling winnings</td><td>Fully taxable (gambling losses are itemized deductions — under the One Big Beautiful Bill Act (OBBBA), limited to 90% of losses, up to gambling winnings, from 2026)</td></tr>
<tr><td>Unemployment compensation</td><td>Fully taxable</td></tr>
<tr><td>Alimony (divorce agreements before 2019)</td><td>Taxable to the recipient; post-2018 agreements: not income</td></tr>
<tr><td>Cancellation of debt</td><td>Taxable, unless excluded (bankruptcy; insolvency — to the extent insolvent; qualified farm or business real property debt; certain student loan discharges on death or disability)</td></tr>
<tr><td>State income tax refunds</td><td><strong>Tax benefit rule:</strong> taxable only to the extent the prior-year deduction produced a tax benefit — not taxable if the taxpayer took the standard deduction</td></tr>
<tr><td>Social Security benefits</td><td>0%, up to 50%, or up to <strong>85%</strong> taxable depending on provisional income (modified AGI + 50% of benefits)</td></tr>
<tr><td>Embezzled or illegal income</td><td>Taxable</td></tr>
<tr><td>Punitive damages; damages for emotional distress not from physical injury; lost profits</td><td>Taxable</td></tr>
</tbody>
</table>

<h2>Common exclusions</h2>
<table>
<thead><tr><th>Item</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>Gifts and inheritances</td><td>Excluded by the recipient (income from them later is taxable)</td></tr>
<tr><td>Life insurance proceeds paid on death</td><td>Excluded (interest on installment payouts is taxable; policies bought for value lose the exclusion)</td></tr>
<tr><td>Municipal (state and local) bond interest</td><td>Excluded federally (may be an alternative minimum tax preference for private activity bonds)</td></tr>
<tr><td>Compensation for <strong>physical</strong> injury or sickness</td><td>Excluded, including emotional distress arising from the physical injury (not punitive damages)</td></tr>
<tr><td>Scholarships (degree candidates)</td><td>Excluded for tuition, fees, books, supplies, and required equipment; <strong>room and board</strong> and payments for services are taxable</td></tr>
<tr><td>Employer-provided fringe benefits</td><td>Health insurance, group-term life insurance on up to $50,000 of coverage, de minimis and working condition fringes, and others (see the payroll topic)</td></tr>
<tr><td>Foreign earned income</td><td>Up to <strong>$132,900</strong> (2026) excluded for qualifying individuals working abroad, plus a housing exclusion</td></tr>
<tr><td>Qualified distributions from Roth accounts and Section 529 plans</td><td>Excluded</td></tr>
<tr><td>Series EE and I bond interest used for higher education</td><td>Excluded, subject to income phase-outs</td></tr>
<tr><td>Child support</td><td>Never income</td></tr>
</tbody>
</table>

<h2>Kiddie tax</h2>
<p>A child's net unearned income above an indexed threshold is taxed at the <strong>parents' marginal rate</strong>. It applies to children under 19, or full-time students under 24 whose earned income doesn't exceed half their support. Parents may elect to report the child's income on their own return in limited cases.</p>

<h2>Passive activity and related loss limits</h2>
<p>Losses pass through several limits in order:</p>
<ol>
<li><strong>Basis</strong> — can't deduct more than your investment.</li>
<li><strong>At-risk</strong> (Section 465) — amounts you could actually lose (excludes most nonrecourse debt, except qualified nonrecourse real estate financing).</li>
<li><strong>Passive activity loss rules</strong> (Section 469) — passive losses (from rental activities and businesses in which the taxpayer does not materially participate) offset only passive income; the excess is suspended and carried forward, and is released in full when the taxpayer disposes of the entire activity in a taxable transaction.</li>
<li><strong>Excess business loss</strong> limitation (Section 461(l)) — made permanent by OBBBA; net business losses above an indexed threshold become net operating loss carryforwards.</li>
</ol>
<ul>
<li><strong>Portfolio income</strong> (interest, dividends, annuities, royalties, investment gains) is <strong>not</strong> passive income and can't be sheltered by passive losses.</li>
<li><strong>Rental real estate exception:</strong> individuals who <strong>actively participate</strong> may deduct up to <strong>$25,000</strong> of rental losses against nonpassive income, phased out by 50% of modified AGI between <strong>$100,000 and $150,000</strong>.</li>
<li><strong>Real estate professionals</strong> (more than half their personal services and more than 750 hours in real property businesses, with material participation) treat rental activities as nonpassive.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A taxpayer with modified AGI of $120,000 actively participates in a rental property that loses $30,000. The $25,000 allowance is reduced by 50% × (120,000 − 100,000) = $10,000, so <strong>$15,000</strong> is deductible now; $15,000 is suspended.</p></div>

<h2>How it is tested</h2>
<ul>
<li>Pick the taxable items from a list of receipts.</li>
<li>Apply the tax benefit rule to a state refund.</li>
<li>Compute the taxable portion of a scholarship or damage award.</li>
<li>Apply the $25,000 rental loss allowance and passive loss rules.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Damages follow their origin: physical injury → excluded; emotional distress alone, punitive damages, and lost wages from a non-physical claim → taxable.</p></div>
`,
  revision: `
<h3>Formula</h3>
<p>Gross income − adjustments = adjusted gross income (AGI) − standard or itemized − qualified business income (QBI) and other deductions = taxable income.</p>

<h3>Taxable</h3>
<p>Wages · interest (Treasury too) · dividends · prizes and gambling · unemployment · cancellation of debt (unless bankruptcy or insolvency) · pre-2019 alimony · up to 85% of Social Security · punitive damages · scholarship room and board.</p>

<h3>Excluded</h3>
<p>Gifts and inheritances · life insurance death benefits · municipal bond interest · physical injury damages · scholarship tuition and books · child support · post-2018 alimony · foreign earned income up to $132,900 (2026).</p>

<h3>Rules</h3>
<ul>
<li>Constructive receipt; assignment of income to the earner.</li>
<li>State refund taxable only if deducted with benefit.</li>
<li>Kiddie tax: child's unearned income at parents' rate.</li>
</ul>

<h3>Loss limits (in order)</h3>
<p>Basis → at-risk → passive → excess business loss.</p>
<ul>
<li>Portfolio income is not passive.</li>
<li>Active rental: up to $25,000; phase-out 50% over $100,000–$150,000 modified AGI.</li>
<li>Suspended passive losses released on full disposal.</li>
</ul>
`,
};
