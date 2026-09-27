import type { TopicContent } from "../types";

export const multiJurisdictional: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Businesses and individuals often owe tax in more than one place. Tax Compliance and Planning (TCP) tests the basics of state and local taxation — nexus, apportionment, and residency — and of US international taxation — worldwide taxation of US persons, foreign tax credits, foreign account reporting, and the main corporate international regimes.</p>

<h2>State and local taxation</h2>
<h3>Nexus — when can a state tax a business?</h3>
<ul>
<li><strong>Sales and use tax:</strong> since the Supreme Court's <em>South Dakota v. Wayfair</em> decision (2018), states may require remote sellers to collect sales tax based on <strong>economic nexus</strong> — commonly $100,000 of sales into the state (some states also use a 200-transaction test, though many have dropped it). Marketplace facilitators collect for their sellers in most states.</li>
<li><strong>Income tax:</strong> physical presence, and increasingly economic presence, create nexus. <strong>Public Law 86-272</strong> protects a business whose only in-state activity is <strong>soliciting orders for tangible personal property</strong> that are approved and shipped from outside the state — it does not protect services or sales of intangibles.</li>
<li>Use tax is owed by the buyer when the seller didn't collect sales tax.</li>
</ul>

<h3>Apportionment</h3>
<ul>
<li>A multistate business divides its income among states using a formula. Most states now use a <strong>single sales factor</strong> (in-state sales ÷ total sales); some still use property and payroll factors as well.</li>
<li><strong>Market-based sourcing</strong> assigns sales of services to where the customer receives the benefit (replacing cost-of-performance rules).</li>
<li>A <strong>throwback rule</strong> in some states assigns sales shipped to a state where the seller isn't taxable back to the origin state.</li>
<li>Nonbusiness income (for example, investment income unrelated to operations) is allocated entirely to one state, usually the commercial domicile.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company has $10 million of apportionable income; $4 million of its $20 million of sales are to customers in State A, which uses a single sales factor. Income apportioned to State A = 10,000,000 × 4/20 = <strong>$2,000,000</strong>.</p></div>

<h3>Individuals and pass-throughs</h3>
<ul>
<li><strong>Residents</strong> are taxed on all income; <strong>nonresidents</strong> only on income sourced to the state (wages earned there, rental property there, pass-through business income apportioned there).</li>
<li>Residency is based on <strong>domicile</strong> (permanent home and intent) or <strong>statutory residency</strong> (often a permanent place of abode plus more than 183 days in the state).</li>
<li>The home state usually gives a <strong>credit for taxes paid to other states</strong> on the same income.</li>
<li><strong>Pass-through entity tax</strong> elections let partnerships and S corporations pay state tax at the entity level, which is deductible federally and avoids the individual state and local tax deduction cap; owners get a credit or exclusion.</li>
<li>Composite returns and withholding apply to nonresident owners in many states.</li>
</ul>

<h2>US international taxation — individuals</h2>
<ul>
<li>US <strong>citizens and residents</strong> (green card holders, or those meeting the substantial presence test — 183 days using a 3-year weighted formula) are taxed on <strong>worldwide income</strong>.</li>
<li><strong>Foreign earned income exclusion:</strong> up to <strong>$132,900</strong> (2026) for qualifying individuals (bona fide residence or 330 days abroad in 12 months), plus a housing exclusion or deduction.</li>
<li><strong>Foreign tax credit:</strong> a credit for foreign income taxes paid, limited to the US tax on foreign-source income (computed by category); excess credits carry back 1 year and forward 10. Taxpayers may instead deduct foreign taxes.</li>
<li><strong>Foreign account reporting:</strong> a Report of Foreign Bank and Financial Accounts (FBAR), filed with the Financial Crimes Enforcement Network, is required if foreign financial accounts total more than <strong>$10,000</strong> at any time during the year; <strong>Form 8938</strong> (under the Foreign Account Tax Compliance Act) is required above higher thresholds. Penalties for failing to file are severe.</li>
<li><strong>Nonresident aliens</strong> are taxed on income effectively connected with a US trade or business at graduated rates, and on US-source investment income (dividends, some interest, royalties) at a flat <strong>30%</strong> withholding rate unless a <strong>tax treaty</strong> reduces it.</li>
</ul>

<h2>US international taxation — corporations</h2>
<ul>
<li>US corporations are taxed on worldwide income, but a <strong>100% dividends received deduction</strong> (Section 245A) applies to the foreign-source portion of dividends from foreign corporations owned 10% or more — a partly territorial system.</li>
<li><strong>Controlled foreign corporations</strong> (more than 50% owned by US shareholders who each own 10% or more): certain passive and mobile income (Subpart F income) is taxed to US shareholders currently.</li>
<li>The former global intangible low-taxed income (GILTI) regime — renamed "net controlled foreign corporation (CFC) tested income" by the One Big Beautiful Bill Act (OBBBA) from 2026 — taxes US shareholders on most other controlled foreign corporation income at a reduced effective rate. A matching deduction rewards foreign-derived income earned from the United States.</li>
<li>The <strong>base erosion and anti-abuse tax</strong> targets large corporations making deductible payments to foreign affiliates.</li>
<li><strong>Transfer pricing</strong> (Section 482) requires transactions between related parties to be priced at <strong>arm's length</strong>, supported by documentation.</li>
<li>Foreign branches are taxed currently (they aren't separate corporations); foreign subsidiaries generally are not, except under the regimes above.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Decide whether a business has sales tax or income tax nexus, including Public Law 86-272 protection.</li>
<li>Apportion income with a single sales factor.</li>
<li>Apply residency rules and credits for taxes paid to other states.</li>
<li>Identify foreign earned income exclusion, foreign tax credit, FBAR, and nonresident withholding rules.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Public Law 86-272 protects only the solicitation of orders for <em>tangible goods</em> — and only against state <em>income</em> taxes. It never protects against sales tax collection duties or service businesses.</p></div>
`,
  revision: `
<h3>State nexus</h3>
<ul>
<li>Sales tax: economic nexus (often $100,000 of in-state sales) since the Wayfair decision.</li>
<li>Income tax: Public Law 86-272 shields solicitation of orders for tangible goods only.</li>
</ul>

<h3>Apportionment</h3>
<p>Mostly single sales factor; market-based sourcing for services; throwback rules in some states.</p>

<h3>Individuals</h3>
<p>Residents taxed on all income; nonresidents on in-state income; domicile or 183-day statutory residency; credit for other states' taxes; pass-through entity tax elections avoid the state and local tax cap.</p>

<h3>International — individuals</h3>
<ul>
<li>US citizens and residents: worldwide income.</li>
<li>Foreign earned income exclusion: $132,900 (2026).</li>
<li>Foreign tax credit: limited to US tax on foreign income; back 1, forward 10.</li>
<li>Report of Foreign Bank and Financial Accounts (FBAR): foreign accounts &gt; $10,000 total.</li>
<li>Nonresident aliens: 30% withholding on US investment income unless a treaty applies.</li>
</ul>

<h3>International — corporations</h3>
<p>100% deduction for foreign dividends from 10%-owned corporations · Subpart F · net controlled foreign corporation (CFC) tested income (formerly global intangible low-taxed income) · transfer pricing at arm's length.</p>
`,
};
