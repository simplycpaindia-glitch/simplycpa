import type { TopicContent } from "../types";

export const filingStatusCreditsAmt: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Filing status and dependents determine the standard deduction, tax brackets, and eligibility for credits. Credits reduce tax dollar-for-dollar, and the alternative minimum tax (AMT) is a parallel tax system for higher-income taxpayers. Taxation and Regulation (REG) Area IV tests all three, and the One Big Beautiful Bill Act (OBBBA) changed several credits. Figures are for tax year 2026 unless stated.</p>

<h2>Filing status</h2>
<table>
<thead><tr><th>Status</th><th>Requirements</th></tr></thead>
<tbody>
<tr><td>Married filing jointly</td><td>Married on the last day of the year (or spouse died during the year); both consent; joint and several liability</td></tr>
<tr><td>Married filing separately</td><td>Married, filing separate returns; loses many benefits (see below)</td></tr>
<tr><td><strong>Head of household</strong></td><td>Unmarried (or "considered unmarried" — lived apart from spouse the last 6 months) at year-end; paid <strong>more than half the cost</strong> of maintaining a home that was the principal residence of a <strong>qualifying person</strong> for more than half the year. A dependent <strong>parent</strong> need not live with the taxpayer.</td></tr>
<tr><td><strong>Qualifying surviving spouse</strong></td><td>For the <strong>2 years after</strong> the year of the spouse's death, if the taxpayer maintains a home for a dependent child and has not remarried — uses joint rates and the joint standard deduction</td></tr>
<tr><td>Single</td><td>Everyone else</td></tr>
</tbody>
</table>
<p>Married filing separately generally cannot claim the earned income credit (with limited exceptions for separated spouses), education credits, the student loan interest deduction, or the dependent care credit, and must itemize if the other spouse does.</p>

<h2>Dependents</h2>
<table>
<thead><tr><th>Qualifying child</th><th>Qualifying relative</th></tr></thead>
<tbody>
<tr><td><strong>Relationship:</strong> child, stepchild, foster child, sibling, or a descendant of any of them</td><td><strong>Relationship</strong> (parents, grandparents, in-laws, aunts, uncles, and others) <strong>or</strong> a member of the household all year</td></tr>
<tr><td><strong>Age:</strong> under 19, or under 24 and a full-time student, or permanently disabled (and younger than the taxpayer)</td><td>Not a qualifying child of anyone</td></tr>
<tr><td><strong>Residency:</strong> lived with the taxpayer more than half the year</td><td><strong>Gross income</strong> below an indexed limit</td></tr>
<tr><td><strong>Support:</strong> the child did <strong>not</strong> provide more than half of their own support</td><td><strong>Support:</strong> the taxpayer provides <strong>more than half</strong> of the person's support (or a multiple support agreement — each signer contributed more than 10%)</td></tr>
<tr><td><strong>Joint return:</strong> generally didn't file a joint return</td><td></td></tr>
</tbody>
</table>
<p>All dependents must be US citizens, nationals, or residents of the United States, Canada, or Mexico. Tie-breaker rules apply when a child qualifies for more than one taxpayer (the parent first; then the parent with whom the child lived longer; then the higher adjusted gross income (AGI)).</p>

<h2>Credits</h2>
<p><strong>Nonrefundable</strong> credits can reduce tax only to zero. <strong>Refundable</strong> credits can produce a refund beyond the tax owed.</p>
<table>
<thead><tr><th>Credit</th><th>Key rules</th><th>Refundable?</th></tr></thead>
<tbody>
<tr><td><strong>Child tax credit</strong></td><td><strong>$2,200</strong> per qualifying child under 17 (OBBBA, indexed after 2025). The child needs a Social Security number (SSN), and so must the taxpayer (at least one spouse if joint). Phases out above $200,000 AGI ($400,000 joint).</td><td>Partly — the additional child tax credit (up to $1,700 per child for 2025, indexed)</td></tr>
<tr><td>Credit for other dependents</td><td>$500 for dependents who don't qualify for the child tax credit</td><td>No</td></tr>
<tr><td><strong>Earned income tax credit</strong></td><td>For low-income workers; depends on earned income and number of qualifying children (maximum $8,231 with three or more children in 2026); investment income limit; available without children for ages 25–64</td><td><strong>Yes</strong></td></tr>
<tr><td><strong>Child and dependent care credit</strong></td><td>Care expenses up to $3,000 (one person) or $6,000 (two or more) so the taxpayer can work. From 2026 OBBBA raises the top credit rate to 50%, phasing down to 35% and then 20% as income rises. Limited to the lower-earning spouse's earned income.</td><td>No</td></tr>
<tr><td><strong>American Opportunity tax credit</strong></td><td>100% of the first $2,000 + 25% of the next $2,000 of qualified expenses = up to <strong>$2,500 per student</strong>, first <strong>4 years</strong> of postsecondary education, at least half-time</td><td><strong>40% refundable</strong></td></tr>
<tr><td>Lifetime Learning credit</td><td>20% of up to $10,000 of expenses = up to <strong>$2,000 per return</strong>; any year, any course load</td><td>No</td></tr>
<tr><td>Adoption credit</td><td>Up to $17,670 of qualified expenses (2026)</td><td>Partly — up to $5,120 refundable (2026)</td></tr>
<tr><td>Saver's credit</td><td>A percentage of retirement contributions for low- and moderate-income taxpayers</td><td>No</td></tr>
<tr><td>Premium tax credit</td><td>Helps pay for Marketplace health insurance; reconciled on the return</td><td>Yes</td></tr>
<tr><td>Foreign tax credit</td><td>Credit for foreign income taxes (or deduct them), limited to US tax on foreign income</td><td>No</td></tr>
<tr><td>Credit for the elderly or disabled</td><td>Low-income taxpayers 65+ or permanently disabled</td><td>No</td></tr>
</tbody>
</table>
<ul>
<li><strong>Energy credits ended under OBBBA:</strong> the residential clean energy credit and the energy-efficient home improvement credit for expenditures after <strong>December 31, 2025</strong>, and the clean vehicle credits for vehicles acquired after <strong>September 30, 2025</strong>.</li>
<li>The same expenses cannot be used for both education credits, or for an education credit and a tax-free Section 529 or Coverdell distribution.</li>
</ul>

<h2>Alternative minimum tax</h2>
<table>
<thead><tr><th>AMT computation</th></tr></thead>
<tbody>
<tr><td>Regular taxable income</td></tr>
<tr><td>± Adjustments and + preferences</td></tr>
<tr><td>= Alternative minimum taxable income (AMTI)</td></tr>
<tr><td>− Exemption (phased out above a threshold)</td></tr>
<tr><td>× 26% / 28% = tentative minimum tax</td></tr>
<tr><td>− Regular tax = AMT (if positive)</td></tr>
</tbody>
</table>
<ul>
<li><strong>2026 exemption:</strong> $90,100 (single) and $140,200 (married filing jointly). OBBBA reset the phase-out thresholds to <strong>$500,000</strong> and <strong>$1,000,000</strong> and increased the phase-out rate to <strong>50 cents per dollar</strong> of excess AMTI.</li>
<li><strong>Common adjustments (add back):</strong> state and local taxes deducted; the standard deduction; the difference between accelerated and AMT depreciation; the bargain element when <strong>incentive stock options</strong> are exercised; the difference in long-term contract income.</li>
<li><strong>Preferences (always add):</strong> tax-exempt interest on <strong>private activity bonds</strong>; percentage depletion above basis; the excluded portion of certain qualified small business stock gain.</li>
<li><strong>Minimum tax credit:</strong> AMT caused by <em>timing</em> items (depreciation, incentive stock options) creates a credit usable in later years when regular tax exceeds tentative minimum tax. <em>Exclusion</em> items (taxes, standard deduction) do not.</li>
<li>Corporations: the old corporate AMT was repealed; a separate 15% <strong>corporate alternative minimum tax</strong> applies only to corporations with average financial statement income over $1 billion.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Determine filing status (head of household and qualifying surviving spouse rules).</li>
<li>Apply the qualifying child and qualifying relative tests.</li>
<li>Identify refundable credits and compute education and child credits.</li>
<li>Identify AMT adjustments and preferences.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The support test is the classic trap. For a qualifying <em>child</em>, the child must not have supported themselves (over half); for a qualifying <em>relative</em>, the taxpayer must provide over half the support.</p></div>
`,
  revision: `
<h3>Filing status</h3>
<ul>
<li>Head of household: unmarried, pays &gt; ½ of home costs for a qualifying person living there &gt; ½ year (dependent parent may live elsewhere).</li>
<li>Qualifying surviving spouse: 2 years after the year of death, with a dependent child.</li>
<li>Married filing separately: loses earned income credit, education credits, student loan interest.</li>
</ul>

<h3>Dependents</h3>
<ul>
<li>Qualifying child: relationship, age (&lt; 19, or &lt; 24 student), residency &gt; ½ year, <strong>child didn't self-support</strong>.</li>
<li>Qualifying relative: relationship or household member, income limit, <strong>taxpayer provides &gt; ½ support</strong>; multiple support agreement (&gt; 10% each).</li>
</ul>

<h3>Credits</h3>
<ul>
<li>Child tax credit: $2,200 per child under 17; Social Security numbers required; partly refundable.</li>
<li>Earned income credit: fully refundable.</li>
<li>American Opportunity: $2,500, 4 years, 40% refundable. Lifetime Learning: $2,000 per return, nonrefundable.</li>
<li>Dependent care: $3,000 / $6,000 of expenses; 50% top rate from 2026.</li>
<li>Home energy and clean vehicle credits: ended 2025.</li>
</ul>

<h3>Alternative minimum tax (AMT)</h3>
<ul>
<li>2026 exemption $90,100 / $140,200; phase-out from $500,000 / $1,000,000 at 50%.</li>
<li>Add back: state and local taxes, standard deduction, incentive stock option bargain element, depreciation differences, private activity bond interest.</li>
<li>Timing items → minimum tax credit.</li>
</ul>
`,
};
