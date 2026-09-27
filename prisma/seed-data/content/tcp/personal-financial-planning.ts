import type { TopicContent } from "../types";

export const personalFinancialPlanning: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Tax Compliance and Planning (TCP) Area I includes personal financial planning: helping individuals manage cash flow, protect against risk with insurance, invest, fund education and health costs, and coordinate those choices with taxes. Questions focus on the tax treatment of financial products and on choosing the most tax-efficient approach.</p>

<h2>The planning process</h2>
<ol>
<li>Understand the client's circumstances, goals, and risk tolerance.</li>
<li>Gather data — income, expenses, assets, liabilities, insurance, tax returns, estate documents.</li>
<li>Analyze the current position and identify gaps.</li>
<li>Develop and present recommendations.</li>
<li>Implement, with the client making decisions.</li>
<li>Monitor and update as circumstances and laws change.</li>
</ol>
<p>The American Institute of Certified Public Accountants (AICPA) Statement on Standards in Personal Financial Planning Services applies to members who provide these services; tax advice within a plan must also meet tax practice standards.</p>

<h2>Cash flow and debt</h2>
<ul>
<li>Build an <strong>emergency fund</strong> (commonly 3–6 months of expenses) in liquid accounts.</li>
<li>Prioritize high-interest debt; compare after-tax borrowing costs — mortgage interest is deductible only for itemizers (on up to $750,000 of acquisition debt), and student loan interest up to $2,500 as an adjustment.</li>
<li>Interest on loans for new US-assembled personal vehicles is deductible up to $10,000 a year for 2025–2028 under the One Big Beautiful Bill Act (OBBBA), subject to income phase-outs.</li>
<li>Personal (credit card, consumer) interest is not deductible.</li>
</ul>

<h2>Insurance planning and its tax treatment</h2>
<table>
<thead><tr><th>Coverage</th><th>Purpose</th><th>Tax treatment</th></tr></thead>
<tbody>
<tr><td><strong>Term life</strong></td><td>Pure protection for a set period; low cost</td><td>Premiums not deductible; <strong>death benefit excluded</strong> from income (unless transferred for value)</td></tr>
<tr><td><strong>Permanent life</strong> (whole, universal)</td><td>Lifelong coverage plus a cash value that grows</td><td>Cash value grows tax-deferred; withdrawals up to basis tax-free; policy loans generally not taxable unless the policy lapses; a modified endowment contract loses favorable treatment of loans and withdrawals</td></tr>
<tr><td><strong>Disability</strong></td><td>Replaces income</td><td>Benefits are <strong>tax-free if the individual paid premiums with after-tax dollars</strong>; taxable if the employer paid (or pre-tax)</td></tr>
<tr><td>Long-term care</td><td>Nursing and home care costs</td><td>Qualified premiums are medical expenses (limited by age); benefits generally excluded</td></tr>
<tr><td>Health insurance</td><td>Medical costs</td><td>Employer coverage excluded; self-employed deduct premiums; individuals itemize above 7.5% of adjusted gross income (AGI); Marketplace coverage may qualify for the premium tax credit</td></tr>
<tr><td>Property, liability, umbrella</td><td>Protects assets from loss and lawsuits</td><td>Personal premiums not deductible; personal casualty losses deductible only in declared disasters</td></tr>
</tbody>
</table>

<h2>Health savings accounts (HSAs)</h2>
<ul>
<li>Available with a high-deductible health plan. <strong>Triple tax advantage:</strong> deductible (or pre-tax) contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.</li>
<li>2026 limits: <strong>$4,400</strong> self-only, <strong>$8,750</strong> family, plus $1,000 catch-up at 55+.</li>
<li>Non-medical withdrawals are taxable plus a 20% penalty before 65; after 65, taxable only (like a traditional retirement account).</li>
<li>Funds roll over year to year — unlike most flexible spending accounts (use-it-or-lose-it, with limited carryover or grace period).</li>
</ul>

<h2>Investment planning basics</h2>
<ul>
<li><strong>Risk and return:</strong> higher expected returns require accepting more risk. <strong>Diversification</strong> reduces unsystematic (company-specific) risk; systematic (market) risk remains.</li>
<li><strong>Asset allocation</strong> across stocks, bonds, and cash based on goals, time horizon, and risk tolerance drives most portfolio results.</li>
<li><strong>Bonds:</strong> prices fall when interest rates rise; longer maturities are more sensitive. Municipal bond interest is federally tax-exempt — compare using the <strong>tax-equivalent yield</strong> = municipal yield ÷ (1 − marginal tax rate).</li>
<li><strong>Tax efficiency:</strong> index funds and exchange-traded funds usually distribute fewer capital gains than actively managed funds; qualified dividends and long-term gains get preferential rates.</li>
<li><strong>Accounts:</strong> taxable brokerage, tax-deferred (traditional 401(k) and individual retirement account (IRA)), and tax-free (Roth, HSA, Section 529).</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A client in the 32% bracket compares a municipal bond yielding 3.4% with a taxable corporate bond yielding 4.8%. Tax-equivalent yield = 3.4% ÷ (1 − 0.32) = <strong>5.0%</strong>, so the municipal bond is better after tax.</p></div>

<h2>Education funding</h2>
<ul>
<li><strong>Section 529 plans:</strong> tax-free growth and withdrawals for qualified higher education and K–12 expenses (K–12 annual limit raised to $20,000 from 2026); state tax deductions may apply; unused funds may roll to the beneficiary's Roth IRA (up to $35,000 lifetime).</li>
<li><strong>Coverdell education savings accounts:</strong> $2,000 annual contribution limit, with income limits.</li>
<li>Education savings bonds, American Opportunity and Lifetime Learning credits, and employer educational assistance ($5,250) complete the picture.</li>
<li><strong>"Trump accounts"</strong> (created by OBBBA): tax-advantaged accounts for children, with a $1,000 federal seed deposit for children born 2025–2028 and contributions beginning July 2026.</li>
</ul>

<h2>Social Security and Medicare</h2>
<ul>
<li>Full retirement age is <strong>67</strong> for people born in 1960 or later. Claiming at 62 permanently reduces benefits; delaying past full retirement age increases them by about <strong>8% per year until 70</strong>.</li>
<li>Up to 85% of benefits may be taxable depending on provisional income.</li>
<li>Medicare eligibility starts at 65; higher-income beneficiaries pay income-related surcharges on premiums, based on modified AGI from two years earlier — a factor in timing Roth conversions and gains.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Determine the tax treatment of insurance premiums and benefits.</li>
<li>Compare taxable and tax-exempt investments using the tax-equivalent yield.</li>
<li>Choose the best account for a goal (HSA, 529, Roth, taxable).</li>
<li>Apply Social Security claiming and taxation basics.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Disability benefits are taxed the opposite way from the premiums: if the individual paid premiums with after-tax money, benefits are tax-free; if the employer paid, benefits are taxable.</p></div>
`,
  revision: `
<h3>Process</h3>
<p>Understand → gather → analyze → recommend → implement → monitor.</p>

<h3>Insurance</h3>
<ul>
<li>Life: premiums not deductible; death benefit excluded; permanent policy cash value grows tax-deferred.</li>
<li>Disability: after-tax premiums → tax-free benefits; employer-paid → taxable.</li>
<li>Long-term care premiums: medical expense (age-limited).</li>
</ul>

<h3>Health savings account (HSA)</h3>
<p>Triple tax advantage; $4,400 / $8,750 (2026) + $1,000 at 55; 20% penalty on non-medical use before 65; rolls over.</p>

<h3>Investing</h3>
<ul>
<li>Diversify (reduces company-specific risk); asset allocation drives results.</li>
<li>Tax-equivalent yield = municipal yield ÷ (1 − tax rate).</li>
<li>Asset location across taxable, tax-deferred, tax-free accounts.</li>
</ul>

<h3>Education</h3>
<p>Section 529 (K–12 up to $20,000 from 2026; Roth rollover $35,000) · Coverdell $2,000 · credits.</p>

<h3>Social Security</h3>
<p>Full retirement age 67; delay to 70 → about +8% per year; up to 85% taxable.</p>
`,
};
