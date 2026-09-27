import type { TopicContent } from "../types";

export const partnershipPlanning: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Partnerships and limited liability companies (LLCs) taxed as partnerships offer the most flexibility of any entity — special allocations, tax-free contributions and distributions, and basis from entity debt. Tax Compliance and Planning (TCP) tests compliance with Form 1065, the elections that shape partners' results, anti-abuse rules, and planning for contributions, distributions, and sales of interests.</p>

<h2>Compliance</h2>
<ul>
<li><strong>Form 1065</strong> is due March 15 (calendar year), with a 6-month extension. Each partner receives a <strong>Schedule K-1</strong>; partnerships with international items also provide Schedules K-2 and K-3.</li>
<li>Partners' capital accounts must be reported on the <strong>tax basis</strong> on Schedule K-1.</li>
<li>Late filing penalties apply per partner, per month.</li>
<li><strong>Centralized partnership audit regime</strong> (Bipartisan Budget Act of 2015): the partnership designates a <strong>partnership representative</strong> with sole authority; audit adjustments are generally assessed at the partnership level in the year the audit concludes (an imputed underpayment), unless the partnership elects to "push out" adjustments to the reviewed-year partners. Partnerships with 100 or fewer eligible partners (individuals, C and S corporations, estates) may elect out annually.</li>
</ul>

<h2>Key elections and methods</h2>
<table>
<thead><tr><th>Election or method</th><th>Effect</th></tr></thead>
<tbody>
<tr><td><strong>Section 754 election</strong></td><td>Adjusts the partnership's inside basis on a transfer of an interest (Section 743(b) — for the buyer only) or a distribution (Section 734(b)), so a buyer's share of inside basis matches what they paid. Mandatory adjustments apply when there is a substantial built-in loss (over $250,000).</td></tr>
<tr><td>Section 704(c) methods for contributed property</td><td><strong>Traditional</strong> (limited by the ceiling rule), <strong>traditional with curative allocations</strong>, or <strong>remedial</strong> — determine how built-in gain and depreciation are shared between the contributor and other partners</td></tr>
<tr><td>Special allocations</td><td>Respected if they have <strong>substantial economic effect</strong> — capital accounts maintained properly, liquidation according to capital accounts, and a deficit restoration obligation or qualified income offset</td></tr>
<tr><td>Tax year</td><td>Generally the majority-interest partners' tax year</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> B buys A's one-third interest for $300,000 when A's share of the partnership's inside basis is $180,000 (assets have appreciated). Without a Section 754 election, B would be taxed on built-in gain when the partnership sells those assets. With the election, B gets a <strong>$120,000 Section 743(b) step-up</strong> that belongs only to B.</p></div>

<h2>Anti-abuse rules to plan around</h2>
<ul>
<li><strong>Disguised sales:</strong> a contribution of property followed by a distribution of money to the contributing partner within <strong>2 years</strong> is presumed to be a sale (with exceptions for guaranteed payments, preferred returns, and reimbursements of certain capital expenditures).</li>
<li><strong>Mixing bowl rules:</strong> if contributed property is distributed to <em>another</em> partner within <strong>7 years</strong>, the contributing partner recognizes the remaining built-in gain (Section 704(c)(1)(B)). If the contributing partner receives <em>other</em> property within 7 years, they may recognize gain (Section 737).</li>
<li><strong>Hot assets:</strong> on a sale of an interest, the share of unrealized receivables and inventory (including depreciation recapture) produces ordinary income (Section 751).</li>
<li><strong>Carried interests:</strong> gain allocated to a service partner's "applicable partnership interest" in an investment fund needs a holding period of more than <strong>3 years</strong> to be long-term (Section 1061).</li>
<li><strong>Family partnerships:</strong> capital must be a material income-producing factor, and a donor partner must be paid reasonable compensation for services before profits are allocated to family members.</li>
</ul>

<h2>Liabilities and loss planning</h2>
<ul>
<li>A partner's outside basis includes their share of partnership <strong>liabilities</strong> — recourse debt by economic risk of loss; nonrecourse debt generally by profit shares (after minimum gain and Section 704(c) allocations).</li>
<li>Loss limits apply in order: <strong>basis</strong>, <strong>at-risk</strong> (qualified nonrecourse real estate financing counts), <strong>passive activity</strong>, and <strong>excess business loss</strong> (made permanent by the One Big Beautiful Bill Act (OBBBA)).</li>
<li>Planning: increase basis with contributions or guarantees (recourse debt allocation), or time losses with basis.</li>
</ul>

<h2>Self-employment tax and compensation</h2>
<ul>
<li>General partners pay self-employment tax on their distributive share of trade or business income; <strong>limited partners</strong> generally do not, except on guaranteed payments for services. Courts have narrowed the limited partner exception to passive investors — active LLC members and state-law limited partners who work in the business may owe it.</li>
<li><strong>Guaranteed payments</strong> are deductible by the partnership, ordinary income to the partner, excluded from qualified business income, and subject to self-employment tax.</li>
<li>Partners cannot be W-2 employees of their own partnership (except through certain tiered structures).</li>
</ul>

<h2>Distributions and exits</h2>
<ul>
<li>Current distributions of cash beyond outside basis create gain; property distributions usually don't — but watch the mixing bowl rules and <strong>marketable securities treated as cash</strong>.</li>
<li><strong>Liquidating a partner:</strong> payments may be split between Section 736(b) payments for the partner's interest in partnership property (capital) and Section 736(a) payments (ordinary — guaranteed payments or distributive share), affecting both the partner and remaining partners.</li>
<li>Selling an interest versus a redemption by the partnership produces different results for the buyer and the partnership (Section 754 adjustments differ).</li>
<li>A partnership terminates only if no part of its business continues in partnership form (the old 50% "technical termination" rule was repealed).</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Apply Section 754 and 743(b) adjustments.</li>
<li>Identify disguised sales and mixing bowl triggers.</li>
<li>Allocate liabilities and test loss limitations.</li>
<li>Plan guaranteed payments, self-employment tax, and exits.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Watch the clocks: 2 years for disguised sales, 7 years for mixing bowl rules, 3 years for carried interest long-term treatment.</p></div>
`,
  revision: `
<h3>Compliance</h3>
<p>Form 1065 due March 15; Schedule K-1 (tax-basis capital); centralized audit regime — partnership representative; small partnerships (≤ 100 eligible partners) may elect out.</p>

<h3>Elections</h3>
<ul>
<li>Section 754: inside basis step-up for buyers (743(b)) and distributions (734(b)); mandatory for substantial built-in losses.</li>
<li>Section 704(c) methods: traditional, curative, remedial.</li>
<li>Special allocations need substantial economic effect.</li>
</ul>

<h3>Clocks</h3>
<ul>
<li>Disguised sale: distribution within <strong>2 years</strong> of contribution.</li>
<li>Mixing bowl: <strong>7 years</strong>.</li>
<li>Carried interest: &gt; <strong>3 years</strong> for long-term.</li>
</ul>

<h3>Losses and liabilities</h3>
<p>Basis → at-risk → passive → excess business loss. Recourse debt by risk of loss; nonrecourse by profits.</p>

<h3>Compensation</h3>
<p>General partners: self-employment tax on share. Guaranteed payments: deductible, ordinary, self-employment tax, not qualified business income. Hot assets on sale → ordinary (Section 751).</p>
`,
};
