import type { TopicContent } from "../types";

export const retirementPlans: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Retirement accounts are the most common tax-planning tool for individuals. Taxation and Regulation (REG) tests contribution rules, deductibility, taxation of distributions, required minimum distributions, and penalties — much of it updated by the Setting Every Community Up for Retirement Enhancement (SECURE) 2.0 Act of 2022. Figures are for 2026 unless stated.</p>

<h2>Types of plans</h2>
<table>
<thead><tr><th>Plan</th><th>Key features</th></tr></thead>
<tbody>
<tr><td><strong>Defined benefit plan</strong></td><td>The employer promises a specified benefit at retirement (for example, based on salary and years of service). The employer bears the investment risk and must fund the plan actuarially.</td></tr>
<tr><td><strong>Defined contribution plan</strong></td><td>Contributions are defined; the benefit depends on the account balance. The employee bears the investment risk. Includes 401(k), 403(b) (nonprofits and schools), 457(b) (governments), profit-sharing, and money purchase plans.</td></tr>
<tr><td>Simplified employee pension (SEP)</td><td>Employer-only contributions to employees' individual retirement accounts (IRAs), as a uniform percentage of compensation (up to 25%, subject to the annual dollar cap); popular with the self-employed</td></tr>
<tr><td>Savings Incentive Match Plan for Employees (SIMPLE)</td><td>For employers with 100 or fewer employees; employee deferrals plus a required employer match or nonelective contribution</td></tr>
</tbody>
</table>

<h3>Qualified plan requirements</h3>
<ul>
<li>Nondiscrimination — cannot favor highly compensated employees.</li>
<li>Minimum participation (age 21 and one year of service at most, with part-time worker rules) and minimum coverage.</li>
<li><strong>Vesting:</strong> employee contributions are always 100% vested; employer contributions vest under a 3-year cliff or a 2-to-6-year graded schedule for defined contribution plans.</li>
<li>Benefits of qualification: employer deducts contributions now; employees are taxed only on distribution; earnings grow tax-deferred.</li>
</ul>

<h2>Contribution limits (2026)</h2>
<table>
<thead><tr><th>Account</th><th>Limit</th><th>Catch-up</th></tr></thead>
<tbody>
<tr><td>401(k), 403(b), 457(b) employee deferrals</td><td><strong>$24,500</strong></td><td>Age 50+: $8,000; ages 60–63: $11,250. From 2026, catch-up contributions by higher earners must be made as Roth contributions.</td></tr>
<tr><td>Traditional and Roth IRA (combined)</td><td><strong>$7,500</strong>, or earned compensation if less</td><td>Age 50+: $1,100 (indexed)</td></tr>
<tr><td>Health savings account (HSA) (not retirement, but similar)</td><td>$4,400 self-only / $8,750 family</td><td>Age 55+: $1,000</td></tr>
</tbody>
</table>
<p>IRA contributions for a year can be made until the <strong>return due date</strong> (April 15), not including extensions. A non-working spouse can contribute to a <strong>spousal IRA</strong> based on the working spouse's compensation if they file jointly.</p>

<h2>Traditional versus Roth</h2>
<table>
<thead><tr><th></th><th>Traditional IRA</th><th>Roth IRA</th></tr></thead>
<tbody>
<tr><td>Contributions</td><td>Deductible — but the deduction phases out if the taxpayer (or spouse) is an <strong>active participant</strong> in an employer plan and modified adjusted gross income (AGI) exceeds indexed thresholds</td><td><strong>Never deductible</strong>; the ability to contribute phases out at higher modified AGI</td></tr>
<tr><td>Growth</td><td>Tax-deferred</td><td>Tax-free if distributions are qualified</td></tr>
<tr><td>Distributions</td><td>Taxable as ordinary income (except any nondeductible basis, recovered pro rata)</td><td><strong>Qualified distributions are tax-free</strong>: account open at least <strong>5 years</strong> and the owner is 59½, disabled, deceased, or a first-time homebuyer ($10,000 lifetime)</td></tr>
<tr><td>Ordering of Roth distributions</td><td>—</td><td>Contributions first (always tax- and penalty-free), then conversions, then earnings</td></tr>
<tr><td>Required minimum distributions</td><td>Yes</td><td><strong>None</strong> during the owner's life</td></tr>
</tbody>
</table>
<p><strong>Roth conversions:</strong> any traditional IRA can be converted regardless of income; the converted pre-tax amount is taxable (not subject to the 10% penalty). Recharacterizing a conversion is no longer allowed. The pro rata rule treats all traditional IRAs as one when a taxpayer has both deductible and nondeductible contributions.</p>

<h2>Early distributions — the 10% penalty</h2>
<p>Distributions before age <strong>59½</strong> are subject to a 10% additional tax (25% for SIMPLE IRA distributions in the first 2 years), unless an exception applies:</p>
<table>
<thead><tr><th>Exception</th><th>IRA</th><th>Qualified plan (401(k))</th></tr></thead>
<tbody>
<tr><td>Death or disability</td><td>✓</td><td>✓</td></tr>
<tr><td>Substantially equal periodic payments</td><td>✓</td><td>✓</td></tr>
<tr><td>Unreimbursed medical expenses above 7.5% of AGI</td><td>✓</td><td>✓</td></tr>
<tr><td>Birth or adoption (up to $5,000 per child)</td><td>✓</td><td>✓</td></tr>
<tr><td>Emergency personal expense (up to $1,000 per year)</td><td>✓</td><td>✓</td></tr>
<tr><td><strong>Qualified higher education expenses</strong></td><td>✓</td><td>✗</td></tr>
<tr><td><strong>First-time home purchase</strong> ($10,000 lifetime)</td><td>✓</td><td>✗</td></tr>
<tr><td>Health insurance premiums while unemployed</td><td>✓</td><td>✗</td></tr>
<tr><td>Separation from service in or after the year the employee turns <strong>55</strong></td><td>✗</td><td>✓</td></tr>
<tr><td>Qualified domestic relations order payments</td><td>✗</td><td>✓</td></tr>
</tbody>
</table>

<h2>Required minimum distributions</h2>
<ul>
<li>Start at age <strong>73</strong> for people born 1951–1959, and <strong>75</strong> for those born 1960 or later. The first distribution may be delayed until April 1 of the following year (then two are taken that year).</li>
<li>Employees still working (and not 5% owners) may delay distributions from their current employer's plan until retirement.</li>
<li>Penalty for missed distributions: <strong>25%</strong> of the shortfall, reduced to <strong>10%</strong> if corrected promptly.</li>
<li><strong>Roth IRAs</strong> and, from 2024, <strong>Roth 401(k)</strong> accounts have no lifetime required distributions.</li>
<li><strong>Inherited accounts:</strong> most non-spouse beneficiaries must empty the account within <strong>10 years</strong>; eligible designated beneficiaries (surviving spouse, minor child, disabled or chronically ill persons, those not more than 10 years younger) may stretch distributions.</li>
<li><strong>Qualified charitable distributions:</strong> IRA owners aged 70½ or older may transfer up to an indexed annual amount directly to charity, excluded from income and counting toward required distributions.</li>
</ul>

<h2>Rollovers</h2>
<ul>
<li><strong>Direct (trustee-to-trustee) rollovers</strong> are unlimited and have no withholding.</li>
<li><strong>Indirect (60-day) rollovers:</strong> funds must be redeposited within <strong>60 days</strong>; only <strong>one IRA-to-IRA indirect rollover per 12 months</strong>. Distributions from employer plans paid to the employee have <strong>20% mandatory withholding</strong>, which must be made up from other funds to roll over the full amount.</li>
<li>Unused Section 529 education savings may be rolled into the beneficiary's Roth IRA (lifetime limit $35,000; account open 15+ years; subject to annual IRA limits).</li>
</ul>

<h2>Planning basics</h2>
<ul>
<li>Traditional accounts favor those expecting a <strong>lower</strong> tax rate in retirement; Roth accounts favor those expecting a <strong>higher</strong> rate.</li>
<li>Employer matching contributions are an immediate return — contribute at least enough to get the full match.</li>
<li>New under the One Big Beautiful Bill Act (OBBBA): "Trump accounts" — tax-advantaged accounts for children, with a federal $1,000 seed deposit for babies born 2025–2028 (contributions begin in July 2026).</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Distinguish defined benefit and defined contribution plans.</li>
<li>Determine whether an IRA contribution is deductible or a Roth contribution allowed.</li>
<li>Decide whether a distribution is taxable and subject to the 10% penalty.</li>
<li>Apply required distribution ages and rollover rules.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Education and first-time homebuyer exceptions apply to <em>IRAs only</em>; the age-55 separation exception applies to <em>employer plans only</em>. Questions often switch the account type to test this.</p></div>
`,
  revision: `
<h3>Plans</h3>
<ul>
<li>Defined benefit: employer bears risk. Defined contribution (401(k), 403(b), 457(b)): employee bears risk.</li>
<li>Simplified employee pension (SEP): employer-only contributions.</li>
</ul>

<h3>2026 limits</h3>
<p>401(k) $24,500 (+ $8,000 at 50; + $11,250 at 60–63). Individual retirement account (IRA) $7,500 (+ $1,100). Contribute by April 15.</p>

<h3>Traditional vs Roth</h3>
<ul>
<li>Traditional: deductible (phase-out if active participant), taxed on withdrawal.</li>
<li>Roth: not deductible; qualified = 5 years + 59½ / disability / death / first home → tax-free. Contributions come out first.</li>
<li>Roth IRA and Roth 401(k): no lifetime required distributions.</li>
</ul>

<h3>10% early withdrawal penalty (before 59½)</h3>
<ul>
<li>Both: death, disability, periodic payments, medical over 7.5%, birth/adoption $5,000, emergency $1,000.</li>
<li>IRA only: education, first home ($10,000).</li>
<li>Plan only: separation at 55+.</li>
</ul>

<h3>Required minimum distributions</h3>
<p>Age 73 (born 1951–59) or 75 (born 1960+). Miss → 25% (10% if corrected). Inherited: 10-year rule for most.</p>

<h3>Rollovers</h3>
<p>60 days; one IRA-to-IRA indirect rollover per 12 months; 20% withholding on plan payouts to the employee.</p>
`,
};
