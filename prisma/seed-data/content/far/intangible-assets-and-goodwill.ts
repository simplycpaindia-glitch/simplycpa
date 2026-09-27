import type { TopicContent } from "../types";

export const intangibleAssetsGoodwill: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Intangible assets and goodwill (Accounting Standards Codification (ASC) 350) are tested in Financial Accounting and Reporting (FAR) Area II. Questions focus on what can be capitalized, whether an intangible is amortized, goodwill impairment, research and development (R&amp;D), software costs, and crypto assets.</p>

<h2>Recognizing intangible assets</h2>
<table>
<thead><tr><th>How acquired</th><th>Accounting</th></tr></thead>
<tbody>
<tr><td>Purchased individually or in a group</td><td>Capitalize at cost (fair value of consideration), including legal fees and registration costs</td></tr>
<tr><td>Acquired in a business combination</td><td>Recognize separately from goodwill at fair value if it arises from contractual or legal rights <strong>or</strong> is separable</td></tr>
<tr><td>Internally developed</td><td>Generally <strong>expense</strong> — only direct costs such as legal and registration fees for a patent or trademark are capitalized</td></tr>
</tbody>
</table>

<h3>Costs that are expensed</h3>
<ul>
<li>Research and development costs (ASC 730), including materials, salaries, and a share of overhead, unless the item has alternative future uses (then capitalize and depreciate that asset, charging depreciation to R&amp;D).</li>
<li>Start-up and organization costs (ASC 720-15).</li>
<li>Advertising (expensed as incurred or the first time the advertising runs).</li>
<li>Internally generated goodwill, customer lists, and brand names.</li>
<li>Training, relocation, and most general costs of maintaining intangibles.</li>
</ul>
<p>R&amp;D acquired in a business combination is capitalized as an indefinite-lived intangible (in-process research and development (IPR&amp;D)) until the project is completed or abandoned. IPR&amp;D bought in an <em>asset</em> acquisition with no alternative future use is expensed.</p>

<h2>Finite-lived versus indefinite-lived</h2>
<table>
<thead><tr><th></th><th>Finite life</th><th>Indefinite life</th></tr></thead>
<tbody>
<tr><td>Examples</td><td>Patents (legal life 20 years), copyrights, customer lists, franchises with a fixed term, licenses</td><td>Trademarks renewable indefinitely at minimal cost, perpetual franchises, broadcast licenses expected to be renewed</td></tr>
<tr><td>Amortization</td><td>Over the <strong>shorter of legal life and useful life</strong>, usually straight-line, to residual value (normally zero)</td><td>None</td></tr>
<tr><td>Impairment</td><td>ASC 360 two-step test (undiscounted cash flows, then fair value)</td><td>At least annually: carrying amount vs fair value (optional qualitative assessment first)</td></tr>
</tbody>
</table>
<ul>
<li><strong>Legal fees to successfully defend a patent</strong> are capitalized; an unsuccessful defense means expensing the fees and writing off the patent.</li>
<li>Changes in the useful life of an intangible are changes in estimate (prospective).</li>
<li>Reversal of impairment losses is prohibited.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A patent bought on January 1, Year 1 for $90,000 is amortized over 10 years. On January 1, Year 4 its remaining life is revised to 4 years. Carrying amount = 90,000 − 27,000 = $63,000. Year 4 amortization = 63,000 ÷ 4 = <strong>$15,750</strong>.</p></div>

<h2>Goodwill</h2>
<p>Goodwill arises only in a business combination: the excess of consideration transferred plus the fair value of any noncontrolling interest and previously held interest over the fair value of identifiable net assets acquired. It is assigned to <strong>reporting units</strong> (an operating segment or one level below).</p>

<h3>Impairment test — the one-step model</h3>
<ol>
<li><strong>Optional qualitative assessment:</strong> is it more likely than not (greater than 50%) that the reporting unit's fair value is less than its carrying amount? If not, stop.</li>
<li><strong>Quantitative test:</strong> compare the reporting unit's fair value with its carrying amount, including goodwill.</li>
<li>Impairment loss = carrying amount − fair value, <strong>limited to the goodwill allocated</strong> to that unit.</li>
</ol>
<p>Test at least annually (at the same time each year) and between annual tests if a triggering event occurs. The old "Step 2" (implied fair value of goodwill) was eliminated by Accounting Standards Update (ASU) 2017-04.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A reporting unit's carrying amount is $12,000,000 (including goodwill of $3,000,000); its fair value is $10,500,000. Impairment = 12,000,000 − 10,500,000 = <strong>$1,500,000</strong>, which is less than goodwill, so the full $1,500,000 is recognized. If fair value had been $8,000,000, the loss would be capped at $3,000,000.</p></div>

<h3>Private company alternative</h3>
<p>Private companies may elect to <strong>amortize goodwill straight-line over 10 years</strong> (or less), test for impairment only when a triggering event occurs, and choose to test at the entity level. They may also elect to subsume certain customer-related intangibles and non-compete agreements into goodwill.</p>

<h2>Software costs</h2>
<table>
<thead><tr><th>Software</th><th>Expense</th><th>Capitalize</th></tr></thead>
<tbody>
<tr><td>To be sold, leased, or marketed (ASC 985-20)</td><td>All costs until <strong>technological feasibility</strong> (a detailed program design or working model) — treated as R&amp;D</td><td>Costs after technological feasibility until general release</td></tr>
<tr><td>Internal-use (ASC 350-40)</td><td>Preliminary project stage; post-implementation training and maintenance</td><td>Application development stage (coding, installation, testing)</td></tr>
</tbody>
</table>
<p>Capitalized software for sale is amortized using the <strong>greater of</strong> (a) the ratio of current revenue to total expected revenue, or (b) straight-line over the remaining life. It is then reported at the lower of unamortized cost and net realizable value. Implementation costs of a cloud computing arrangement that is a service contract follow the internal-use model and are expensed over the service term.</p>
<p><em>Coming change:</em> ASU 2025-06 removes the internal-use "project stages" and replaces them with a probable-to-complete threshold; it takes effect for annual periods beginning after December 15, 2027.</p>

<h2>Crypto assets (ASU 2023-08)</h2>
<p>Crypto assets that meet the scope criteria (fungible, on a distributed ledger, not issued by the reporting entity, no enforceable rights to underlying goods) are measured at <strong>fair value</strong> with changes in <strong>net income</strong>, and presented separately from other intangibles. Before this update they were indefinite-lived intangibles measured at cost less impairment.</p>

<h2>How it is tested</h2>
<ul>
<li>Decide which costs may be capitalized versus expensed.</li>
<li>Compute amortization, including changes in useful life.</li>
<li>Calculate goodwill impairment and the cap.</li>
<li>Apply the software technological feasibility rules and amortization formula.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "Internally developed" is the signal to expense almost everything. The main exceptions: legal and registration costs, successful patent defense costs, and software costs after technological feasibility (for sale) or during application development (internal use).</p></div>
`,
  revision: `
<h3>Capitalize or expense</h3>
<ul>
<li>Purchased intangibles → capitalize. Internally developed → expense (except legal and registration fees).</li>
<li>Research and development (R&amp;D), start-up, advertising, internally generated goodwill → expense.</li>
<li>Successful patent defense → capitalize.</li>
</ul>

<h3>Amortize?</h3>
<ul>
<li>Finite life → shorter of legal and useful life.</li>
<li>Indefinite life (renewable trademark) and goodwill → no amortization; test at least annually.</li>
</ul>

<h3>Goodwill impairment</h3>
<ul>
<li>Optional qualitative test (more likely than not).</li>
<li>Loss = reporting unit carrying amount − fair value, <strong>capped at goodwill</strong>.</li>
<li>No reversals. Private companies may amortize over ≤ 10 years.</li>
</ul>

<h3>Software</h3>
<ul>
<li>For sale: expense until <strong>technological feasibility</strong>; capitalize until release; amortize by greater of revenue ratio or straight-line.</li>
<li>Internal use: capitalize the <strong>application development</strong> stage only.</li>
</ul>

<h3>Crypto assets</h3>
<p>Fair value through net income (Accounting Standards Update (ASU) 2023-08).</p>
`,
};
