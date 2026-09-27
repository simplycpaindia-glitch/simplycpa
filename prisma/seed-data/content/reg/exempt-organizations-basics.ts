import type { TopicContent } from "../types";

export const exemptOrganizations: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Tax-exempt organizations don't pay income tax on activities related to their exempt purpose, but they can owe tax on unrelated business income and face strict rules on political activity and private benefit. Taxation and Regulation (REG) tests the requirements for exemption under Section 501(c)(3) of the Internal Revenue Code (IRC), the difference between public charities and private foundations, unrelated business income, and filing requirements.</p>

<h2>Types of exempt organizations</h2>
<table>
<thead><tr><th>Section</th><th>Examples</th><th>Donations deductible?</th></tr></thead>
<tbody>
<tr><td><strong>501(c)(3)</strong></td><td>Religious, charitable, scientific, literary, and educational organizations; hospitals; museums</td><td><strong>Yes</strong></td></tr>
<tr><td>501(c)(4)</td><td>Social welfare organizations (may lobby extensively)</td><td>No</td></tr>
<tr><td>501(c)(6)</td><td>Business leagues, chambers of commerce, trade associations</td><td>No (dues may be a business expense, except the lobbying portion)</td></tr>
<tr><td>501(c)(7)</td><td>Social clubs</td><td>No</td></tr>
<tr><td>Section 527</td><td>Political organizations</td><td>No</td></tr>
</tbody>
</table>

<h2>Requirements for Section 501(c)(3) status</h2>
<ul>
<li><strong>Organizational test:</strong> the governing documents limit activities to exempt purposes and dedicate assets to exempt purposes on dissolution.</li>
<li><strong>Operational test:</strong> the organization operates primarily for exempt purposes.</li>
<li><strong>No private inurement:</strong> net earnings may not benefit insiders (excess compensation, below-market sales). Excess benefit transactions trigger excise taxes on the insider and managers (intermediate sanctions).</li>
<li><strong>Political campaign activity is absolutely prohibited</strong> — no endorsing or opposing candidates for public office.</li>
<li><strong>Lobbying</strong> must not be a substantial part of activities; public charities may elect the Section 501(h) expenditure test for a clear dollar limit.</li>
<li>Apply with <strong>Form 1023</strong> (or the streamlined Form 1023-EZ for small organizations); approval is generally retroactive to formation if filed within 27 months. Churches are exempt automatically.</li>
</ul>

<h2>Public charities versus private foundations</h2>
<table>
<thead><tr><th></th><th>Public charity</th><th>Private foundation</th></tr></thead>
<tbody>
<tr><td>Support</td><td>Broad public support (generally at least one-third from the public or government), or churches, schools, hospitals, and supporting organizations</td><td>Funded by a single family, individual, or corporation; investment income</td></tr>
<tr><td>Donor deduction limits</td><td>Cash up to 60% of adjusted gross income (AGI)</td><td>Cash up to 30% of AGI; appreciated property generally limited to basis (except publicly traded stock)</td></tr>
<tr><td>Excise taxes</td><td>Generally none</td><td>Tax on <strong>net investment income</strong> (1.39%); taxes on self-dealing, failure to distribute income (a 5% minimum annual payout), excess business holdings, jeopardizing investments, and taxable expenditures</td></tr>
<tr><td>Annual return</td><td>Form 990, 990-EZ, or 990-N</td><td><strong>Form 990-PF</strong> regardless of size</td></tr>
</tbody>
</table>
<p><strong>Self-dealing</strong> prohibits nearly all transactions between a private foundation and <strong>disqualified persons</strong> (substantial contributors, foundation managers, their families, and entities they control) — sales, leases, loans, and furnishing goods or services — except reasonable compensation for necessary personal services.</p>
<p>The One Big Beautiful Bill Act (OBBBA) raised the excise tax on the net investment income of large private <strong>college and university endowments</strong> to tiered rates of 1.4%, 4%, or 8%, based on endowment per student.</p>

<h2>Unrelated business income</h2>
<p><strong>Unrelated business taxable income (UBTI)</strong> is income from a <strong>trade or business</strong>, <strong>regularly carried on</strong>, that is <strong>not substantially related</strong> to the exempt purpose (apart from the need for funds). It is taxed at corporate rates (21%) — or trust rates for trusts.</p>

<h3>Exclusions from UBTI</h3>
<ul>
<li><strong>Passive income:</strong> dividends, interest, annuities, royalties, most rents from real property, and gains on non-inventory property — unless the property is <strong>debt-financed</strong> (then taxable in proportion to the debt).</li>
<li>Rents from personal property are excluded only if incidental (10% or less of total rent) to real property rent.</li>
<li>Activities in which substantially all work is done by <strong>unpaid volunteers</strong>.</li>
<li>Selling merchandise substantially all of which was <strong>donated</strong> (thrift shops).</li>
<li>Activities carried on for the <strong>convenience of members, students, patients, or employees</strong> (a hospital cafeteria for staff).</li>
<li>Qualified sponsorship payments with no substantial return benefit (acknowledgment without advertising).</li>
<li>Income from bingo games where legal, qualified conventions and trade shows, and certain research income.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A museum's gift shop sells reproductions of artwork in its collection (related — furthers education) and also sells souvenir T-shirts showing the city skyline (unrelated). Income from the skyline T-shirts is UBTI; the reproductions are not. If the shop were run entirely by volunteers, none of it would be UBTI.</p></div>

<h3>Computing and reporting</h3>
<ul>
<li>A specific deduction of <strong>$1,000</strong> is allowed.</li>
<li>File <strong>Form 990-T</strong> if gross unrelated business income is <strong>$1,000 or more</strong>.</li>
<li>Losses from one unrelated business can't offset income from another — each is computed separately (the "silo" rule).</li>
<li>Estimated tax payments apply.</li>
</ul>

<h2>Annual information returns</h2>
<table>
<thead><tr><th>Organization size</th><th>Return</th></tr></thead>
<tbody>
<tr><td>Gross receipts normally <strong>$50,000 or less</strong></td><td>Form 990-N (e-Postcard)</td></tr>
<tr><td>Gross receipts under $200,000 and total assets under $500,000</td><td>Form 990-EZ (or Form 990)</td></tr>
<tr><td>Larger organizations</td><td>Form 990</td></tr>
<tr><td>Private foundations</td><td>Form 990-PF</td></tr>
<tr><td>Churches and certain religious organizations</td><td>No return required</td></tr>
</tbody>
</table>
<ul>
<li>Due the 15th day of the <strong>5th month</strong> after year-end (May 15 for calendar years), with a 6-month extension.</li>
<li>Failing to file for <strong>3 consecutive years</strong> automatically revokes exempt status.</li>
<li>Forms 990 are publicly available (donor names are generally redacted).</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Identify activities that produce unrelated business income.</li>
<li>Distinguish public charities from private foundations and their rules.</li>
<li>Apply the political and lobbying restrictions for Section 501(c)(3) organizations.</li>
<li>Choose the correct annual return and due date.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> For unrelated business income, check three things: a trade or business, regularly carried on, not substantially related. Then check the exclusions — volunteers, donated goods, convenience of members, and passive income that isn't debt-financed.</p></div>
`,
  revision: `
<h3>Section 501(c)(3) of the Internal Revenue Code (IRC)</h3>
<ul>
<li>Organizational and operational tests; no private inurement.</li>
<li><strong>No political campaign activity</strong>; lobbying not substantial.</li>
<li>Apply on Form 1023 (churches automatic).</li>
</ul>

<h3>Public charity vs private foundation</h3>
<ul>
<li>Public charity: broad support; donors deduct cash up to 60% of adjusted gross income (AGI).</li>
<li>Private foundation: 30% cash limit; 1.39% tax on net investment income; 5% minimum payout; no self-dealing with disqualified persons; Form 990-PF.</li>
</ul>

<h3>Unrelated business taxable income (UBTI)</h3>
<ul>
<li>Trade or business + regularly carried on + not substantially related.</li>
<li>Excluded: passive income (unless debt-financed), volunteer-run activities, donated goods, convenience of members, qualified sponsorships.</li>
<li>$1,000 specific deduction; Form 990-T if gross ≥ $1,000; silo each business.</li>
<li>Taxed at 21% corporate rates.</li>
</ul>

<h3>Returns</h3>
<p>Receipts ≤ $50,000 → 990-N · &lt; $200,000 receipts and &lt; $500,000 assets → 990-EZ · larger → 990. Due May 15 (calendar). 3 years unfiled → exemption revoked.</p>
`,
};
