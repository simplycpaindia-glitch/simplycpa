import type { TopicContent } from "../types";

export const notForProfit: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Private not-for-profit (NFP) organizations — charities, private universities, hospitals, museums — follow Financial Accounting Standards Board (FASB) standards in Accounting Standards Codification (ASC) 958. Financial Accounting and Reporting (FAR) tests net asset classification, contribution recognition, and the required statements. Governmental not-for-profits (such as public universities) follow Governmental Accounting Standards Board (GASB) standards instead.</p>

<h2>Financial statements</h2>
<table>
<thead><tr><th>Statement</th><th>Key features</th></tr></thead>
<tbody>
<tr><td>Statement of financial position</td><td>Total assets, liabilities, and net assets, with net assets split into <strong>two classes</strong></td></tr>
<tr><td>Statement of activities</td><td>Revenues, gains, expenses, and reclassifications; change in each net asset class; operating measure optional</td></tr>
<tr><td>Statement of cash flows</td><td>Direct or indirect method; the indirect reconciliation starts from the <strong>change in net assets</strong></td></tr>
<tr><td>Analysis of expenses by nature and function</td><td>Required for <strong>all</strong> NFPs — on the face of the statement of activities, as a separate statement, or in the notes</td></tr>
</tbody>
</table>
<p>Accounting Standards Update (ASU) 2016-14 also requires qualitative and quantitative disclosures about <strong>liquidity and availability</strong> of financial assets to meet general expenditures within one year.</p>

<h2>Net asset classes</h2>
<table>
<thead><tr><th>Class</th><th>Includes</th></tr></thead>
<tbody>
<tr><td><strong>Without donor restrictions</strong></td><td>Unrestricted contributions, exchange revenue, <strong>board-designated</strong> funds (board designations are self-imposed, not donor restrictions)</td></tr>
<tr><td><strong>With donor restrictions</strong></td><td>Purpose restrictions, time restrictions, and perpetual restrictions (endowments where principal must be maintained)</td></tr>
</tbody>
</table>
<p><strong>All expenses</strong> are reported in net assets without donor restrictions. When a restriction is satisfied, the amount is <strong>reclassified</strong> — "net assets released from restrictions" — from with to without donor restrictions.</p>

<h2>Contributions</h2>
<h3>Contribution or exchange?</h3>
<p>A contribution is an unconditional, voluntary, nonreciprocal transfer. If the resource provider receives commensurate value in return (tuition, membership benefits of equal value, most government contracts for specific services), it is an <strong>exchange transaction</strong> accounted for under ASC 606.</p>

<h3>Conditional versus unconditional (ASU 2018-08)</h3>
<ul>
<li>A contribution is <strong>conditional</strong> if the agreement contains both a <strong>barrier</strong> that must be overcome and a <strong>right of return</strong> (or right of release). Conditional promises are not recognized until the barrier is met; cash received in advance is a refundable advance (liability).</li>
<li>Unconditional contributions — including promises to give (pledges) — are recognized as revenue when received.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A donor pledges $100,000 only if the charity raises $100,000 from others within one year; otherwise the pledge lapses. This is conditional (a matching barrier and release from obligation). Nothing is recognized until the charity raises the matching funds.</p></div>

<h3>Measurement</h3>
<ul>
<li>Contributions are recorded at <strong>fair value</strong>.</li>
<li>Pledges collectible in more than one year are recorded at <strong>present value</strong>; the discount accretes as <strong>contribution revenue</strong> (not interest). An allowance is recorded for uncollectible pledges.</li>
<li>Multi-year pledges carry an <strong>implied time restriction</strong> — reported with donor restrictions unless the donor states they are for current use.</li>
<li>A policy may be elected to report restricted contributions whose restrictions are met in the same period as without donor restrictions.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A charity receives an unconditional pledge of $100,000 payable in two years; its present value is $90,000. Record a pledge receivable and contribution revenue with donor restrictions of <strong>$90,000</strong>. The $10,000 discount is recognized as additional contribution revenue over two years.</p></div>

<h3>Special contributions</h3>
<ul>
<li><strong>Contributed services</strong> are recognized only if they (1) create or enhance a nonfinancial asset, or (2) require <strong>specialized skills</strong>, are provided by individuals possessing those skills, and would typically need to be purchased if not donated (for example, a volunteer accountant or surgeon). General volunteers are not recognized.</li>
<li><strong>Contributed nonfinancial assets</strong> (gifts-in-kind) are presented as a separate line item, with disaggregated disclosures (ASU 2020-07).</li>
<li><strong>Collections</strong> (art, historical treasures) need not be capitalized if held for public exhibition, education, or research; protected and preserved; and sale proceeds are used to acquire new collection items or for direct care of collections.</li>
<li><strong>Agency transactions:</strong> an NFP that receives assets on behalf of a specified beneficiary without variance power records a liability, not contribution revenue.</li>
</ul>

<h2>Expenses and investments</h2>
<ul>
<li><strong>Functional categories:</strong> program services, and supporting services (management and general, fundraising, membership development).</li>
<li><strong>Joint costs</strong> of activities combining fundraising with program or management functions are allocated only if purpose, audience, and content criteria are met; otherwise all are fundraising.</li>
<li>Investments in debt securities and in equity securities with readily determinable fair values are reported at <strong>fair value</strong>, with gains and losses in the statement of activities.</li>
<li><strong>Endowments:</strong> perpetual endowment principal stays with donor restrictions; accumulated earnings are with donor restrictions until appropriated for spending. Underwater endowment deficiencies reduce net assets with donor restrictions.</li>
<li>Depreciation is recognized on long-lived assets, including contributed ones.</li>
</ul>

<h2>Health care entities (brief)</h2>
<p>Patient service revenue is recognized under ASC 606 at the amount expected to be collected (implicit price concessions reduce revenue; they are not bad debt expense). Charity care is not reported as revenue.</p>

<h2>How it is tested</h2>
<ul>
<li>Classify contributions by net asset class and recognize (or not) conditional promises.</li>
<li>Decide whether contributed services are recognized.</li>
<li>Prepare entries for releases from restriction.</li>
<li>Distinguish exchange transactions from contributions.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Look for <em>both</em> a barrier and a right of return before calling a promise conditional. A restriction on how money is spent ("use it for scholarships") is a donor restriction, not a condition — the contribution is recognized immediately.</p></div>
`,
  revision: `
<h3>Statements (not-for-profit (NFP), Accounting Standards Codification (ASC) 958)</h3>
<p>Financial position · Activities · Cash flows · Expenses by <strong>nature and function</strong> (all NFPs) · Liquidity disclosure.</p>

<h3>Net assets</h3>
<ul>
<li>Two classes: <strong>without</strong> and <strong>with</strong> donor restrictions.</li>
<li>Board-designated = without donor restrictions.</li>
<li>All expenses → without donor restrictions; releases are reclassifications.</li>
</ul>

<h3>Contributions</h3>
<ul>
<li>Conditional = barrier <strong>+</strong> right of return → not recognized until the barrier is met.</li>
<li>Unconditional pledges → revenue now; &gt; 1 year at present value; discount accretes as contribution revenue.</li>
<li>Multi-year pledge → implied time restriction.</li>
<li>Exchange transactions (tuition) → revenue under ASC 606.</li>
</ul>

<h3>Contributed services</h3>
<p>Recognize only if they create or enhance a nonfinancial asset, <strong>or</strong> need specialized skills and would otherwise be purchased.</p>

<h3>Other</h3>
<ul>
<li>Collections: need not be capitalized if exhibited, preserved, and proceeds reinvested in collections.</li>
<li>Investments at fair value; gains in the statement of activities.</li>
<li>Agency transfer without variance power → liability.</li>
</ul>
`,
};
