import type { TopicContent } from "../types";

export const trustsEstatesGift: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Taxation and Regulation (REG) Area V covers the unified transfer tax system — gift tax and estate tax — and the income taxation of trusts and estates (fiduciary income tax). The One Big Beautiful Bill Act (OBBBA) made the higher exemption <strong>permanent</strong> at $15 million per person from 2026, removing the scheduled cut that had dominated planning.</p>

<h2>The unified transfer tax system</h2>
<ul>
<li>Lifetime taxable gifts and transfers at death share one <strong>basic exclusion amount</strong>: <strong>$15,000,000</strong> per individual for 2026 ($30 million for a married couple), indexed for inflation from 2027 — with no sunset.</li>
<li>The top gift and estate tax rate is <strong>40%</strong>.</li>
<li>Taxable gifts reduce the exclusion available at death; estate tax is computed on the taxable estate plus adjusted taxable gifts, less gift tax payable and the unified credit.</li>
</ul>

<h2>Gift tax</h2>
<h3>What is a gift?</h3>
<p>A transfer for less than adequate consideration, with donative intent not required. A gift is complete when the donor gives up dominion and control. Transfers to a revocable trust, and loans at market interest, are not completed gifts.</p>

<h3>Exclusions and deductions</h3>
<table>
<thead><tr><th>Item</th><th>Rule</th></tr></thead>
<tbody>
<tr><td><strong>Annual exclusion</strong></td><td><strong>$19,000</strong> per donee per year (2026) — only for gifts of a <strong>present interest</strong> (a future interest, such as a remainder, doesn't qualify; gifts to a trust qualify only with withdrawal (Crummey) powers). Contributions to a Section 529 plan can be spread over 5 years.</td></tr>
<tr><td><strong>Gift splitting</strong></td><td>Married couples may elect to treat a gift by one spouse as made half by each — doubling the annual exclusion to $38,000 per donee. Requires consent of both on Form 709.</td></tr>
<tr><td><strong>Tuition and medical payments</strong></td><td>Unlimited exclusion if paid <strong>directly</strong> to the school (tuition only, not books or room and board) or medical provider.</td></tr>
<tr><td><strong>Marital deduction</strong></td><td>Unlimited for gifts to a US-citizen spouse. For a non-citizen spouse, a special annual exclusion applies ($194,000 in 2026).</td></tr>
<tr><td>Charitable deduction</td><td>Unlimited</td></tr>
<tr><td>Political organizations</td><td>Excluded</td></tr>
</tbody>
</table>
<ul>
<li><strong>Form 709</strong> is due <strong>April 15</strong> of the following year (extended with the income tax return). It must be filed for gifts above the annual exclusion, gifts of future interests, and to elect gift splitting — even when no tax is owed.</li>
<li>The donee takes the donor's basis (see the Basis topic) — so gifting appreciated property passes the built-in gain to the donee.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> In 2026 a grandparent pays a grandchild's $30,000 tuition directly to the university and gives the grandchild $25,000 cash. The tuition is fully excluded. The cash uses the $19,000 annual exclusion, leaving a <strong>$6,000 taxable gift</strong> that reduces the lifetime exclusion — no tax is paid, but Form 709 must be filed.</p></div>

<h2>Estate tax</h2>
<table>
<thead><tr><th>Estate tax computation</th></tr></thead>
<tbody>
<tr><td><strong>Gross estate</strong>: all property owned at death (at fair market value (FMV)), including half of jointly held property with a spouse, life insurance the decedent owned or that is payable to the estate, retirement accounts, revocable trusts, and certain transfers within 3 years of death (such as life insurance policies)</td></tr>
<tr><td>− Deductions: funeral and administration expenses, debts, casualty losses during administration, <strong>unlimited marital deduction</strong>, <strong>unlimited charitable deduction</strong>, state death taxes</td></tr>
<tr><td>= Taxable estate + adjusted taxable gifts (post-1976)</td></tr>
<tr><td>× Tax rates − gift taxes payable − unified credit = estate tax</td></tr>
</tbody>
</table>
<ul>
<li><strong>Valuation date:</strong> date of death, or the <strong>alternate valuation date</strong> — 6 months later (or the date of earlier disposition) — elected only if it reduces <strong>both</strong> the gross estate and the estate tax.</li>
<li><strong>Form 706</strong> is due <strong>9 months after death</strong>, with a 6-month extension available.</li>
<li><strong>Portability:</strong> a surviving spouse can use the deceased spouse's unused exclusion (DSUE) amount — but only if the executor makes the election on a <strong>timely filed Form 706</strong>, even when no tax is due.</li>
<li>The <strong>generation-skipping transfer tax</strong> applies at the top rate to transfers to grandchildren or others two or more generations below, with its own exemption equal to the basic exclusion.</li>
<li>Heirs receive a <strong>stepped-up basis</strong> equal to FMV at death.</li>
</ul>

<h2>Income taxation of trusts and estates</h2>
<h3>Types of trusts</h3>
<table>
<thead><tr><th>Type</th><th>Key feature</th><th>Exemption</th></tr></thead>
<tbody>
<tr><td><strong>Grantor trust</strong> (including revocable trusts)</td><td>The grantor retains powers or interests — the grantor reports all income; the trust is disregarded for income tax</td><td>—</td></tr>
<tr><td><strong>Simple trust</strong></td><td>Must distribute all income currently; no charitable contributions; no principal distributions that year</td><td>$300</td></tr>
<tr><td><strong>Complex trust</strong></td><td>May accumulate income, distribute principal, or make charitable contributions</td><td>$100</td></tr>
<tr><td>Estate</td><td>From death until administration is complete</td><td>$600</td></tr>
</tbody>
</table>

<h3>Distributable net income</h3>
<p><strong>Distributable net income (DNI)</strong> is the key concept. It:</p>
<ul>
<li>Caps the <strong>distribution deduction</strong> the trust or estate may take.</li>
<li>Caps the amount <strong>taxable to beneficiaries</strong>.</li>
<li>Determines the <strong>character</strong> of what beneficiaries receive (for example, tax-exempt interest keeps its character).</li>
</ul>
<p>DNI generally equals taxable income before the distribution deduction and exemption, plus net tax-exempt interest, minus capital gains allocated to principal. The result is a <strong>conduit</strong>: income is taxed once — to the entity if retained, to beneficiaries if distributed.</p>

<h3>Compliance</h3>
<ul>
<li><strong>Form 1041</strong> is due <strong>April 15</strong> for calendar-year trusts (trusts must use a calendar year; estates may choose a fiscal year), with a 5½-month extension. Beneficiaries receive Schedule K-1.</li>
<li>Trust and estate tax brackets are highly <strong>compressed</strong> — the 37% rate applies at very low income (about $16,000) — which encourages distributions.</li>
<li>The <strong>65-day rule</strong> lets a complex trust or estate treat distributions made in the first 65 days of the next year as made in the prior year.</li>
<li><strong>Income in respect of a decedent</strong> (unpaid wages, traditional retirement accounts) is taxable to the recipient, with a deduction for any estate tax attributable to it.</li>
<li>The net investment income tax (NIIT) applies to undistributed investment income above the (low) top bracket threshold.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute taxable gifts using exclusions, gift splitting, and deductions.</li>
<li>Identify items included in the gross estate and allowable deductions.</li>
<li>Apply alternate valuation and portability rules.</li>
<li>Classify a trust as simple or complex, and apply the role of DNI.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Pay tuition or medical bills <em>directly</em> to the provider and it's unlimited and excluded. Give the money to the student or patient first and it's an ordinary gift subject to the $19,000 annual exclusion.</p></div>
`,
  revision: `
<h3>Unified system (2026)</h3>
<p>Exclusion $15 million per person (permanent, indexed from 2027); top rate 40%.</p>

<h3>Gift tax</h3>
<ul>
<li>Annual exclusion $19,000 per donee — <strong>present interests</strong> only; gift splitting doubles it.</li>
<li>Direct tuition and medical payments: unlimited.</li>
<li>Marital (US-citizen spouse) and charitable: unlimited. Non-citizen spouse: $194,000.</li>
<li>Form 709 due April 15; file even if no tax (splitting, future interests).</li>
<li>Donee takes donor's basis.</li>
</ul>

<h3>Estate tax</h3>
<ul>
<li>Gross estate at fair market value; deductions: debts, expenses, marital, charitable.</li>
<li>Alternate valuation: 6 months; must lower both estate and tax.</li>
<li>Form 706: 9 months after death. Portability needs a timely 706.</li>
<li>Heirs: stepped-up basis.</li>
</ul>

<h3>Fiduciary income tax</h3>
<ul>
<li>Grantor trust: grantor taxed. Simple: distribute all income ($300 exemption). Complex: may accumulate ($100). Estate: $600.</li>
<li>Distributable net income (DNI): caps distribution deduction and beneficiary income; preserves character.</li>
<li>Form 1041 due April 15; compressed brackets; 65-day rule.</li>
</ul>
`,
};
