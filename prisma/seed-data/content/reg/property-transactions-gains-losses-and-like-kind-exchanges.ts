import type { TopicContent } from "../types";

export const gainsLossesLikeKind: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Once basis is known, Taxation and Regulation (REG) asks how gains and losses are characterized (capital, Section 1231, or ordinary), when they can be deferred (like-kind exchanges, involuntary conversions), and when they are excluded (home sales, qualified small business stock). Character drives the tax rate, so this topic ties directly to individual and entity taxation.</p>

<h2>Realized versus recognized gain</h2>
<ul>
<li><strong>Amount realized</strong> = cash + fair market value (FMV) of property received + liabilities assumed by the buyer − selling expenses.</li>
<li><strong>Realized gain or loss</strong> = amount realized − adjusted basis.</li>
<li><strong>Recognized gain or loss</strong> = the portion reported on the return (after deferral or exclusion rules).</li>
<li>Losses on <strong>personal-use property</strong> are not deductible (except casualty losses in declared disasters); gains are taxable.</li>
</ul>

<h2>Capital assets and holding period</h2>
<p>A capital asset is any property <strong>except</strong>: inventory; accounts and notes receivable from the business; depreciable property and real property used in a trade or business (these are Section 1231 assets); copyrights and creative works held by the creator; and certain government publications. Investments (stocks, bonds) and personal-use assets (a home, a car) are capital assets.</p>
<ul>
<li><strong>Long-term:</strong> held <strong>more than one year</strong>. Short-term: one year or less.</li>
<li>Inherited property is always long-term; gifts and like-kind property usually "tack" the prior holding period.</li>
</ul>

<h2>Netting and rates for individuals</h2>
<ol>
<li>Net short-term gains and losses; net long-term gains and losses.</li>
<li>Net the two results against each other.</li>
<li>A net capital loss is deductible against ordinary income up to <strong>$3,000</strong> per year ($1,500 married filing separately); the rest carries forward indefinitely, keeping its character.</li>
</ol>
<table>
<thead><tr><th>Type of gain</th><th>Maximum rate</th></tr></thead>
<tbody>
<tr><td>Short-term capital gain</td><td>Ordinary income rates (up to 37%)</td></tr>
<tr><td>Long-term capital gain and qualified dividends</td><td><strong>0%, 15%, or 20%</strong> by taxable income. For 2026, 0% applies up to $49,450 (single) / $98,900 (married filing jointly); 20% applies above $545,500 / $613,700.</td></tr>
<tr><td>Unrecaptured Section 1250 gain (straight-line depreciation on real property)</td><td><strong>25%</strong></td></tr>
<tr><td>Collectibles (art, coins) and the taxable part of Section 1202 gain</td><td><strong>28%</strong></td></tr>
</tbody>
</table>
<p>The <strong>net investment income tax (NIIT)</strong> of <strong>3.8%</strong> applies to investment income (including capital gains) for modified adjusted gross income above $200,000 (single) or $250,000 (married filing jointly) — thresholds not indexed.</p>
<p><strong>Corporations</strong> have no preferential capital gain rate (21% flat), may deduct capital losses only against capital gains, and carry net capital losses <strong>back 3 years and forward 5 years</strong> as short-term losses.</p>

<h2>Business property — Sections 1231, 1245, and 1250</h2>
<ul>
<li><strong>Section 1231 property:</strong> depreciable property and real property used in a trade or business, held more than one year. Net Section 1231 <strong>gains</strong> are treated as <strong>long-term capital gains</strong>; net <strong>losses</strong> are <strong>ordinary</strong> — the best of both worlds.</li>
<li><strong>Five-year lookback:</strong> a net Section 1231 gain is recaptured as ordinary income to the extent of net Section 1231 losses deducted in the prior 5 years.</li>
<li><strong>Section 1245 recapture</strong> (personal property — equipment, vehicles, Section 197 intangibles): gain is <strong>ordinary to the extent of all depreciation taken</strong> (including Section 179 and bonus); any excess is Section 1231 gain.</li>
<li><strong>Section 1250</strong> (real property): for individuals, real property depreciated under the Modified Accelerated Cost Recovery System (MACRS) uses straight-line depreciation, so there is no ordinary recapture — but the gain equal to depreciation is <strong>unrecaptured Section 1250 gain</strong> taxed at up to 25%.</li>
<li><strong>Section 291</strong> (corporations only): 20% of the straight-line depreciation on real property is recaptured as ordinary income.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Equipment cost $50,000, accumulated depreciation $30,000 (adjusted basis $20,000), sold for $55,000. Realized gain = $35,000. Section 1245 ordinary income = <strong>$30,000</strong> (depreciation taken); Section 1231 gain = <strong>$5,000</strong> (sale price above original cost).</p></div>

<h2>Like-kind exchanges (Section 1031)</h2>
<ul>
<li>Since 2018, available <strong>only for real property</strong> held for business or investment, exchanged for like-kind real property (any real property for any US real property; foreign and US real property are not like-kind). Personal property no longer qualifies.</li>
<li>Not available for inventory, dealer property, or a personal residence.</li>
<li><strong>Deadlines:</strong> identify replacement property within <strong>45 days</strong>, and receive it within <strong>180 days</strong> (or the return due date, if earlier), usually through a qualified intermediary.</li>
<li><strong>Recognized gain</strong> = the <strong>lesser</strong> of realized gain or <strong>boot received</strong>. Boot is cash and non-like-kind property received, plus <strong>net liability relief</strong> (liabilities the other party assumes minus liabilities you assume). Losses are never recognized.</li>
<li><strong>Basis of new property</strong> = FMV of new property − deferred gain (or: adjusted basis given + boot paid + gain recognized − boot received).</li>
<li>Related-party exchanges: gain is triggered if either party disposes of the property within 2 years.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A taxpayer exchanges land (basis $120,000, FMV $200,000) for land worth $170,000 plus $30,000 cash. Realized gain = $80,000. Recognized gain = lesser of $80,000 or $30,000 boot = <strong>$30,000</strong>. Basis of new land = 170,000 − 50,000 deferred gain = <strong>$120,000</strong>.</p></div>

<h2>Involuntary conversions (Section 1033)</h2>
<ul>
<li>Gain from casualty, theft, or condemnation may be deferred by reinvesting in similar property; recognized gain = amount realized not reinvested (limited to realized gain). The election is optional.</li>
<li>Replacement period: <strong>2 years</strong> after the end of the tax year of the gain; <strong>3 years</strong> for condemned business or investment real property (and 4 years for a principal residence in a federally declared disaster).</li>
<li>Basis of the replacement = cost − deferred gain. Losses are recognized (not deferred).</li>
</ul>

<h2>Sale of a principal residence (Section 121)</h2>
<ul>
<li>Exclude up to <strong>$250,000</strong> of gain ($500,000 for married filing jointly, if either spouse meets ownership and both meet use).</li>
<li>Must have <strong>owned and used</strong> the home as a principal residence for <strong>2 of the 5 years</strong> before the sale; usable once every 2 years.</li>
<li>A reduced exclusion applies for sales caused by a change of employment, health, or unforeseen circumstances.</li>
<li>Gain attributable to depreciation after May 6, 1997 (for example, a home office) is not excluded; periods of nonqualified use after 2008 reduce the exclusion.</li>
</ul>

<h2>Other rules</h2>
<ul>
<li><strong>Wash sales:</strong> a loss on stock or securities is disallowed if substantially identical securities are bought within <strong>30 days before or after</strong> the sale. The disallowed loss is added to the basis of the new shares, and the holding period tacks.</li>
<li><strong>Related-party losses (Section 267):</strong> losses on sales to related parties (family members — siblings, spouses, ancestors, lineal descendants — and entities more than 50% owned) are disallowed. The buyer may use the disallowed loss to reduce later gain on resale, but not to create a loss.</li>
<li><strong>Installment sales:</strong> gain is recognized as payments are received (gross profit percentage × principal received); depreciation recapture is recognized in the year of sale; not available for inventory, dealers, or publicly traded securities.</li>
<li><strong>Qualified small business stock (Section 1202):</strong> for stock issued after July 4, 2025, the One Big Beautiful Bill Act (OBBBA) allows a tiered exclusion — 50% after 3 years, 75% after 4 years, and 100% after 5 years — with a per-issuer cap of $15 million and a corporate gross asset limit of $75 million (earlier stock: 100% after 5 years, $10 million cap).</li>
<li><strong>Small business stock losses (Section 1244):</strong> ordinary loss up to $50,000 ($100,000 married filing jointly) for original holders.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Characterize gains on business property (Sections 1245, 1250, 1231).</li>
<li>Compute recognized gain and new basis in a like-kind exchange.</li>
<li>Apply the Section 121 exclusion and involuntary conversion deferral.</li>
<li>Apply wash sale and related-party loss rules.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> In a like-kind exchange, recognized gain is the lesser of <em>realized gain</em> and <em>boot received</em> — and remember that being relieved of a mortgage counts as boot received.</p></div>
`,
  revision: `
<h3>Basics</h3>
<p>Realized = amount realized − adjusted basis. Personal-use losses: not deductible. Long-term = held &gt; 1 year.</p>

<h3>Individuals' capital gains</h3>
<ul>
<li>Net losses: $3,000 per year against ordinary income; carry forward forever.</li>
<li>Long-term rates 0% / 15% / 20%; unrecaptured Section 1250: 25%; collectibles: 28%.</li>
<li>Net investment income tax (NIIT) 3.8% above $200,000 / $250,000.</li>
<li>Corporations: capital losses only against gains; back 3, forward 5.</li>
</ul>

<h3>Business property</h3>
<ul>
<li>Section 1231: net gain = capital; net loss = ordinary; 5-year lookback.</li>
<li>Section 1245 (equipment): ordinary up to all depreciation.</li>
<li>Real property: straight-line → unrecaptured Section 1250 gain (25%); corporations: 20% ordinary under Section 291.</li>
</ul>

<h3>Deferrals and exclusions</h3>
<ul>
<li>Section 1031: real property only; 45-day identify / 180-day close; gain = lesser of realized or boot (incl. net debt relief).</li>
<li>Section 1033: recognize proceeds not reinvested; 2 years (3 for condemned real property).</li>
<li>Section 121: $250,000 / $500,000; own and use 2 of 5 years.</li>
</ul>

<h3>Loss limits</h3>
<p>Wash sale: ±30 days, loss added to new basis. Related party: disallowed; buyer offsets later gain only.</p>
`,
};
