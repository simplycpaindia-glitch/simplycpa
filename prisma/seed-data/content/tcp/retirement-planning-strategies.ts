import type { TopicContent } from "../types";

export const retirementPlanningStrategies: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Taxation and Regulation (REG) covers the rules for retirement accounts; Tax Compliance and Planning (TCP) asks how to <strong>use</strong> them — choosing a plan for a small business owner, deciding between traditional and Roth contributions, planning conversions and withdrawals, and handling employer stock and inherited accounts. Figures are for 2026 unless stated.</p>

<h2>Choosing a plan for a small business or self-employed individual</h2>
<table>
<thead><tr><th>Plan</th><th>Who contributes</th><th>Features</th><th>Best for</th></tr></thead>
<tbody>
<tr><td><strong>Simplified employee pension (SEP) individual retirement account (IRA)</strong></td><td>Employer only — up to 25% of compensation (about 20% of net self-employment earnings), subject to the annual dollar limit</td><td>Very simple; contributions can be made up to the return due date including extensions; must cover eligible employees at the same percentage</td><td>Sole proprietors and very small firms wanting flexibility and low cost</td></tr>
<tr><td><strong>Savings Incentive Match Plan for Employees (SIMPLE) IRA</strong></td><td>Employee deferrals (lower limit than a 401(k)) plus a required employer match (up to 3%) or 2% nonelective contribution</td><td>100 or fewer employees; low administration</td><td>Small employers wanting employee deferrals cheaply</td></tr>
<tr><td><strong>Solo 401(k)</strong></td><td>Owner as employee ($24,500 deferral + catch-up) <strong>and</strong> as employer (profit-sharing up to 25%)</td><td>Only the owner (and spouse); Roth option; loans possible</td><td>Self-employed with no employees who want the highest contributions at moderate income</td></tr>
<tr><td>Traditional or safe harbor 401(k)</td><td>Employee deferrals + employer contributions</td><td>Nondiscrimination testing (avoided by safe harbor designs)</td><td>Growing businesses</td></tr>
<tr><td><strong>Defined benefit or cash balance plan</strong></td><td>Employer, actuarially determined</td><td>Very large deductible contributions possible for older, high-income owners; higher cost and required funding</td><td>High earners near retirement wanting to shelter large amounts</td></tr>
</tbody>
</table>
<p>Small employers may claim credits for plan start-up costs and automatic enrollment, which reduce the cost of adopting a plan.</p>

<h2>Traditional or Roth?</h2>
<table>
<thead><tr><th>Choose traditional (pre-tax) when</th><th>Choose Roth when</th></tr></thead>
<tbody>
<tr><td>Current marginal rate is higher than the expected rate in retirement</td><td>Current rate is lower than the expected future rate (early career, low-income years)</td></tr>
<tr><td>Lowering adjusted gross income (AGI) now preserves credits or deductions that phase out</td><td>The taxpayer values tax-free withdrawals and no required minimum distributions</td></tr>
<tr><td>Cash is needed now</td><td>Estate planning — heirs inherit tax-free Roth accounts (subject to the 10-year rule)</td></tr>
</tbody>
</table>
<p>From 2026, <strong>catch-up contributions</strong> for employees whose prior-year wages exceeded an indexed threshold (about $150,000) must be made as Roth contributions, under the Setting Every Community Up for Retirement Enhancement (SECURE) 2.0 Act.</p>

<h2>Roth strategies</h2>
<ul>
<li><strong>Roth conversions:</strong> convert traditional balances in low-income years (between retirement and required distributions, or in a loss year) to fill up lower brackets. Pay the tax from non-retirement funds if possible. Conversions can't be undone (no recharacterization).</li>
<li><strong>Backdoor Roth IRA:</strong> high earners above the Roth contribution income limits make a nondeductible traditional IRA contribution and then convert it. The <strong>pro rata rule</strong> treats all traditional, SEP, and SIMPLE IRA balances as one — existing pre-tax balances make part of the conversion taxable (rolling them into an employer plan first avoids this).</li>
<li><strong>Mega-backdoor Roth:</strong> after-tax contributions to a 401(k) (if the plan allows) up to the overall annual additions limit, then in-plan Roth conversion.</li>
<li>Each Roth conversion has its own <strong>5-year period</strong> for the 10% penalty on converted amounts withdrawn before age 59½.</li>
</ul>

<h2>Distribution planning</h2>
<ul>
<li><strong>Required minimum distributions</strong> begin at age 73 (75 for those born in 1960 or later); the first may be delayed to April 1 of the next year (but that doubles up income). Roth IRAs and Roth 401(k)s have no lifetime distributions.</li>
<li><strong>Qualified charitable distributions</strong> (age 70½+): up to an indexed annual limit sent directly to charity — excluded from income and counted toward required distributions.</li>
<li><strong>Withdrawal sequencing:</strong> a common approach draws taxable accounts first, then tax-deferred, then Roth — but blending withdrawals to fill low brackets each year often lowers lifetime tax.</li>
<li>Manage modified AGI to control taxation of Social Security benefits, Medicare premium surcharges, the net investment income tax, and the new senior deduction phase-out.</li>
</ul>

<h2>Employer stock — net unrealized appreciation</h2>
<p>If a 401(k) holds appreciated employer stock, a lump-sum distribution of the stock <strong>in kind</strong> (after a triggering event such as separation or age 59½) lets the employee pay ordinary income tax only on the plan's <strong>cost basis</strong>. The <strong>net unrealized appreciation</strong> is taxed as <strong>long-term capital gain</strong> when the shares are sold, regardless of holding period — often better than rolling everything into an IRA, where all withdrawals are ordinary income.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A 401(k) holds employer stock with a cost basis of $50,000 and a value of $400,000. Distributed in kind in a lump sum, the employee reports $50,000 of ordinary income now; the $350,000 of appreciation is long-term capital gain when sold (taxed at up to 20% instead of up to 37%).</p></div>

<h2>Inherited accounts</h2>
<ul>
<li>A <strong>surviving spouse</strong> can treat an inherited IRA as their own (delaying distributions) or remain a beneficiary (allowing penalty-free withdrawals before 59½).</li>
<li>Most other beneficiaries must empty the account within <strong>10 years</strong>; if the owner had already started required distributions, annual distributions are also required during those 10 years.</li>
<li>Eligible designated beneficiaries (minor children until majority, disabled or chronically ill persons, those not more than 10 years younger) may stretch distributions over life expectancy.</li>
<li>Planning: spread withdrawals over the 10 years to avoid bunching income into high brackets.</li>
</ul>

<h2>Annuities</h2>
<p>Nonqualified annuities grow tax-deferred; withdrawals are taxed on an earnings-first basis (a 10% penalty may apply before 59½), and annuity payments are part tax-free return of investment (the exclusion ratio). They provide longevity protection but often carry high fees.</p>

<h2>How it is tested</h2>
<ul>
<li>Choose the most suitable retirement plan for a business owner.</li>
<li>Decide between traditional and Roth contributions or a conversion.</li>
<li>Apply the pro rata rule to a backdoor Roth.</li>
<li>Plan distributions, qualified charitable distributions, net unrealized appreciation, and inherited accounts.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A backdoor Roth is fully tax-free only if the taxpayer has no other pre-tax IRA balances at year-end. Otherwise the pro rata rule makes part of the conversion taxable.</p></div>
`,
  revision: `
<h3>Plan choice</h3>
<ul>
<li>Simplified employee pension (SEP) individual retirement account (IRA): employer-only, simple, fund by extended due date.</li>
<li>Savings Incentive Match Plan for Employees (SIMPLE) IRA: ≤ 100 employees; deferrals + required match.</li>
<li>Solo 401(k): employee deferral + employer profit share — highest for solo owners at moderate income.</li>
<li>Defined benefit or cash balance: largest deductions for older high earners.</li>
</ul>

<h3>Traditional vs Roth</h3>
<p>Traditional if today's rate &gt; retirement rate; Roth if lower. From 2026, high earners' catch-ups must be Roth.</p>

<h3>Roth tactics</h3>
<p>Conversions in low-income years · backdoor Roth (watch the <strong>pro rata</strong> rule) · mega-backdoor · 5-year clock per conversion.</p>

<h3>Distributions</h3>
<ul>
<li>Required distributions at 73 / 75; qualified charitable distributions at 70½.</li>
<li>Blend withdrawals to fill low brackets; manage adjusted gross income (AGI) for Social Security, Medicare, and deductions.</li>
<li>Net unrealized appreciation: in-kind employer stock → ordinary tax on basis only, gain later at capital rates.</li>
<li>Inherited: spouse can treat as own; others 10 years.</li>
</ul>
`,
};
