import type { TopicContent } from "../types";

export const partnerships: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Partnerships (and multi-member limited liability companies (LLCs) taxed as partnerships) are pure pass-through entities with flexible allocations — and the most complex basis rules on Taxation and Regulation (REG). Expect calculations of a partner's outside basis, the effect of liabilities, guaranteed payments, and the tax result of distributions.</p>

<h2>Forming a partnership — Section 721</h2>
<ul>
<li>Generally <strong>no gain or loss</strong> is recognized when property is contributed for a partnership interest — there is no control requirement (unlike Section 351 for corporations).</li>
<li>Contributing <strong>services</strong> for a capital interest is taxable compensation at the interest's fair market value (FMV). A profits-only interest is generally not taxable on receipt.</li>
<li><strong>Partner's outside basis</strong> = cash + adjusted basis of property contributed + share of partnership liabilities − liabilities of the partner assumed by the partnership.</li>
<li><strong>Partnership's inside basis</strong> in contributed property = the partner's adjusted basis (carryover), and the holding period tacks.</li>
<li>If <strong>net liability relief</strong> (a decrease in the partner's liabilities) exceeds the partner's basis, the excess is <strong>gain</strong> — treated as a deemed cash distribution.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A contributes property (basis $40,000, FMV $100,000) subject to a $30,000 mortgage to a partnership with three equal partners. The partnership assumes the mortgage.<br>A's basis = 40,000 − 30,000 (relief) + 10,000 (one-third share of the partnership's new liability) = <strong>$20,000</strong>. No gain, because the net relief ($20,000) doesn't exceed A's basis ($40,000). The partnership's basis in the property is $40,000.</p></div>

<h3>Built-in gain — Section 704(c)</h3>
<p>Pre-contribution gain or loss on contributed property is allocated to the <strong>contributing partner</strong> when the partnership recognizes it. Depreciation is also allocated to account for the difference between tax basis and FMV.</p>

<h2>Operations</h2>
<ul>
<li>The partnership files <strong>Form 1065</strong> (due March 15 for calendar years) and issues Schedule K-1 to each partner; it pays no income tax.</li>
<li><strong>Ordinary business income</strong> and <strong>separately stated items</strong> (capital gains and losses, Section 1231 items, charitable contributions, dividends, interest, Section 179 expense, tax-exempt income, investment interest, foreign taxes) flow through.</li>
<li>Partners are taxed on their <strong>distributive share</strong> whether or not it is distributed.</li>
<li><strong>Special allocations</strong> in the partnership agreement are respected if they have <strong>substantial economic effect</strong>; otherwise items are allocated by the partners' interests in the partnership.</li>
<li><strong>Required tax year:</strong> the tax year of partners owning a majority interest; then that of all principal (5% or more) partners; then the year resulting in the least aggregate deferral.</li>
</ul>

<h3>Guaranteed payments</h3>
<ul>
<li>Payments to a partner for services or capital that are determined <strong>without regard to partnership income</strong>.</li>
<li><strong>Deductible</strong> by the partnership (reducing ordinary income) and <strong>ordinary income</strong> to the partner, included in the partner's tax year in which the partnership's year ends.</li>
<li>Subject to self-employment tax (for services); not eligible for the qualified business income deduction.</li>
</ul>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Partnership income before guaranteed payments is $100,000; Partner A (30% share) receives a $20,000 guaranteed payment. Ordinary income = $80,000. A reports 20,000 + 30% × 80,000 = <strong>$44,000</strong>.</p></div>

<h3>Self-employment tax</h3>
<p>A <strong>general partner's</strong> distributive share of trade or business income and all guaranteed payments for services are subject to self-employment tax. A <strong>limited partner's</strong> share is generally exempt, except for guaranteed payments for services.</p>

<h2>Outside basis — adjustments each year</h2>
<table>
<thead><tr><th>Increase</th><th>Decrease (not below zero)</th></tr></thead>
<tbody>
<tr><td>Additional contributions</td><td>Distributions (cash and basis of property)</td></tr>
<tr><td>Share of taxable and tax-exempt income</td><td>Share of losses and deductions</td></tr>
<tr><td><strong>Increase</strong> in share of partnership liabilities</td><td><strong>Decrease</strong> in share of partnership liabilities (a deemed cash distribution)</td></tr>
<tr><td></td><td>Share of nondeductible expenses</td></tr>
</tbody>
</table>
<p>Losses are deductible only up to outside basis (then at-risk, passive, and excess business loss limits apply); excess losses carry forward. Recourse liabilities are shared by economic risk of loss; nonrecourse liabilities generally by profit shares.</p>

<h2>Distributions</h2>
<h3>Current (nonliquidating) distributions</h3>
<ul>
<li><strong>Cash</strong> (including a decrease in liabilities and marketable securities) reduces basis; gain is recognized only if cash <strong>exceeds outside basis</strong>. No loss is recognized.</li>
<li><strong>Property:</strong> the partner takes the partnership's basis, limited to the partner's remaining outside basis (after cash). No gain or loss.</li>
<li>Order: cash first, then unrealized receivables and inventory, then other property.</li>
</ul>

<h3>Liquidating distributions</h3>
<ul>
<li>The partner's entire remaining outside basis is assigned to the property received (after cash, receivables, and inventory).</li>
<li><strong>Gain</strong> only if cash exceeds outside basis.</li>
<li><strong>Loss</strong> only if the distribution consists <strong>solely of cash, unrealized receivables, and inventory</strong>, and outside basis exceeds their total.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A partner with an outside basis of $50,000 receives, in liquidation, $10,000 cash and land with a partnership basis of $15,000. The land takes the remaining basis: 50,000 − 10,000 = <strong>$40,000</strong>. No gain or loss.</p></div>

<h2>Selling a partnership interest</h2>
<ul>
<li>Gain or loss = amount realized (cash + FMV of property + relief of the partner's share of liabilities) − outside basis.</li>
<li>Generally capital, <strong>except</strong> the portion attributable to "hot assets" (<strong>Section 751</strong> — unrealized receivables, including depreciation recapture, and inventory), which is <strong>ordinary</strong>.</li>
<li>A Section 754 election lets the partnership adjust the inside basis of its assets for the buyer (and in certain distributions).</li>
</ul>

<h2>Administration</h2>
<ul>
<li>Under the centralized partnership audit regime (from the Bipartisan Budget Act of 2015), audits happen at the partnership level, and any imputed underpayment is generally assessed against the partnership. A <strong>partnership representative</strong> has sole authority to act. Small partnerships (100 or fewer eligible partners) may elect out.</li>
<li>Late filing penalties apply per partner, per month.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute initial outside basis with contributed property and liabilities.</li>
<li>Compute a partner's share of income including guaranteed payments.</li>
<li>Adjust basis for income, losses, distributions, and liability changes.</li>
<li>Determine gain, loss, and property basis on distributions.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Any decrease in a partner's share of partnership debt is treated as a <em>cash distribution</em>. If total cash (actual plus deemed) exceeds outside basis, the partner recognizes gain — even if no money changed hands.</p></div>
`,
  revision: `
<h3>Formation (Section 721)</h3>
<ul>
<li>No gain or loss; no control test.</li>
<li>Outside basis = cash + property basis + share of partnership debt − own debt assumed by partnership.</li>
<li>Net debt relief &gt; basis → gain. Services for a capital interest → income.</li>
<li>Inside basis = carryover. Section 704(c): built-in gain to the contributor.</li>
</ul>

<h3>Operations</h3>
<ul>
<li>Form 1065 due March 15; Schedule K-1 to partners.</li>
<li>Guaranteed payments: deductible by the partnership; ordinary income to the partner; self-employment tax.</li>
<li>General partner's share → self-employment tax; limited partner's generally not.</li>
<li>Special allocations need substantial economic effect.</li>
</ul>

<h3>Basis</h3>
<p>+ contributions, income (incl. tax-exempt), ↑ debt share. − distributions, losses, ↓ debt share, nondeductible expenses. Never below zero.</p>

<h3>Distributions</h3>
<ul>
<li>Current: gain only if cash &gt; basis; property takes partnership basis (limited to outside basis).</li>
<li>Liquidating: remaining basis goes to property. Loss only if solely cash, receivables, inventory.</li>
</ul>

<h3>Sale of interest</h3>
<p>Capital gain, except Section 751 hot assets (receivables, inventory, recapture) → ordinary.</p>
`,
};
