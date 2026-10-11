import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

const FASB = (topic: string, title: string): [string, string] => [
  `FASB — ASC ${topic}, ${title}`,
  `https://asc.fasb.org/${topic}`,
];
const AICPA_BLUEPRINTS: [string, string] = [
  "AICPA & CIMA — CPA Exam Blueprints",
  "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam",
];

export const farPosts3: BlogSeed[] = [
  {
    slug: "revenue-recognition-five-step-model",
    title: "Revenue Recognition Under ASC 606: Examples and MCQs",
    category: "Concepts Explained",
    excerpt:
      "The five-step model explained with worked examples — performance obligations, variable consideration, allocation, over-time recognition, principal vs agent — plus practice MCQs.",
    crux: [
      "Core principle: Recognise revenue to depict the transfer of promised goods or services, at the amount the entity expects to be entitled to.",
      "Steps 1–2: Identify the contract, then the distinct performance obligations in it.",
      "Step 3: Determine the transaction price, including variable consideration — but only to the extent a significant reversal is not probable.",
      "Step 4: Allocate the price to each obligation based on relative standalone selling prices.",
      "Step 5: Recognise revenue when (or as) each obligation is satisfied — over time if one of three criteria is met, otherwise at a point in time.",
    ],
    content: `
<h2>The five steps</h2>
<ol>
<li><strong>Identify the contract</strong> — approved by the parties, with identifiable rights and payment terms, commercial substance, and collection of the consideration probable.</li>
<li><strong>Identify the performance obligations</strong> — each promise to transfer a good or service that is <em>distinct</em>: the customer can benefit from it on its own or with readily available resources, <em>and</em> it is separately identifiable from other promises in the contract.</li>
<li><strong>Determine the transaction price</strong> — fixed amounts plus variable consideration (discounts, rebates, refunds, bonuses, penalties), estimated using the <em>expected value</em> or <em>most likely amount</em> method and constrained so that a significant revenue reversal is not probable. Adjust for a significant financing component, non-cash consideration and consideration payable to the customer.</li>
<li><strong>Allocate the price</strong> to each performance obligation in proportion to its standalone selling price (SSP). If SSP isn't observable, estimate it (adjusted market assessment, expected cost plus margin, or — in limited cases — the residual approach).</li>
<li><strong>Recognise revenue</strong> when control of the good or service transfers.</li>
</ol>

<h2>Over time or at a point in time?</h2>
<p>Revenue is recognised <strong>over time</strong> if <em>any</em> of these is met:</p>
<ul>
<li>the customer simultaneously receives and consumes the benefits as the entity performs (routine services);</li>
<li>the entity's performance creates or enhances an asset the customer controls (construction on the customer's land);</li>
<li>the asset has no alternative use to the entity <em>and</em> the entity has an enforceable right to payment for performance completed to date.</li>
</ul>
<p>Progress is measured with an output method (units delivered, milestones) or an input method (costs incurred to date ÷ total expected costs). Otherwise, revenue is recognised at the <strong>point in time</strong> control transfers — indicated by a present right to payment, legal title, physical possession, the significant risks and rewards of ownership, and customer acceptance.</p>

<h2>Worked example 1: bundled sale</h2>
<div class="callout callout-example">
<p>A company sells a machine with two years of maintenance for $110,000. SSPs are $100,000 (machine) and $20,000 (maintenance).<br>
Allocation: machine $110,000 × 100/120 = <strong>$91,667</strong>; maintenance $110,000 × 20/120 = <strong>$18,333</strong>.<br>
Revenue: $91,667 on delivery; $18,333 over 24 months (about $764 a month).</p>
</div>

<h2>Worked example 2: variable consideration</h2>
<div class="callout callout-example">
<p>A contractor will earn $1,000,000 for a building plus a $100,000 bonus if it finishes by June 30. It estimates a 70% chance of earning the bonus, but weather risk is high and the outcome is outside its control.<br>
Using the most likely amount, the estimate would include the bonus. But the constraint asks whether including it could lead to a <em>significant reversal</em>. Given the high uncertainty, the contractor excludes the $100,000 until the uncertainty resolves — the transaction price is <strong>$1,000,000</strong>.</p>
</div>

<h2>Worked example 3: cost-to-cost over time</h2>
<div class="callout callout-example">
<p>A fixed-price contract for $5,000,000 has expected total costs of $4,000,000. Costs incurred in Year 1 are $1,200,000.<br>
Progress = 1,200,000 ÷ 4,000,000 = 30%. Year 1 revenue = 30% × $5,000,000 = <strong>$1,500,000</strong>; gross profit = $300,000.<br>
If expected total costs ever exceed the contract price, the entire expected loss is recognised immediately.</p>
</div>

<h2>Other rules worth knowing</h2>
<ul>
<li><strong>Principal vs agent</strong> — if the entity controls the good or service before transfer, it's a principal and recognises gross revenue; if not, it's an agent and recognises only its fee or commission (net).</li>
<li><strong>Licences</strong> — a right to <em>access</em> intellectual property (a brand, updated software) is recognised over time; a right to <em>use</em> it as it exists (a film, functional software) is recognised at a point in time.</li>
<li><strong>Warranties</strong> — assurance-type warranties are cost accruals (ASC 460); service-type warranties are separate performance obligations.</li>
<li><strong>Contract costs</strong> — incremental costs of obtaining a contract (sales commissions) are capitalised if expected to be recovered; a practical expedient allows expensing if the amortisation period is one year or less.</li>
<li><strong>Contract balances</strong> — a <em>contract asset</em> is a conditional right to consideration; a <em>receivable</em> is unconditional; a <em>contract liability</em> is consideration received before performance.</li>
<li><strong>Bill-and-hold, consignment and repurchase agreements</strong> often mean control hasn't transferred yet.</li>
</ul>

<h2>Practice MCQs</h2>
<div class="callout callout-example">
<p><strong>1.</strong> A software company sells a licence to use its existing software, plus one year of technical support. The licence is functional and distinct. When is licence revenue recognised?<br>
(A) Evenly over one year (B) When the licence is transferred and the customer can use it (C) When cash is received (D) At the end of the support period<br>
<strong>Answer: B.</strong> A right to use functional IP is satisfied at a point in time. Support is a separate obligation recognised over the year.</p>
<p><strong>2.</strong> An online marketplace arranges for third-party sellers to ship goods directly to customers. It never controls the goods and earns a 10% commission on a $200 sale. How much revenue does the marketplace recognise?<br>
(A) $200 (B) $180 (C) $20 (D) $0<br>
<strong>Answer: C.</strong> It's an agent, so revenue is its net commission.</p>
<p><strong>3.</strong> A customer pays $12,000 in advance on January 1 for a 12-month subscription. At March 31, the balance sheet shows:<br>
(A) Contract asset $9,000 (B) Contract liability $9,000 (C) Receivable $3,000 (D) Contract liability $3,000<br>
<strong>Answer: B.</strong> Three months ($3,000) has been earned; $9,000 remains a contract liability (deferred revenue).</p>
</div>

<p>Full coverage is in our <a href="/cpa/far/revenue-recognition">FAR revenue recognition</a> notes.</p>

${sources([FASB("606", "Revenue from Contracts with Customers"), FASB("340-40", "Other Assets and Deferred Costs — Contracts with Customers"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "asc-842-leases-explained",
    title: "Lease Accounting Under ASC 842: Lessee Accounting Explained",
    category: "Concepts Explained",
    excerpt:
      "Identifying a lease, the five classification tests, measuring the ROU asset and lease liability, finance vs operating expense patterns, remeasurement and practical expedients — with a full worked example.",
    crux: [
      "Is there a lease?: A contract conveys the right to control the use of an identified asset for a period, in exchange for consideration.",
      "Balance sheet: Lessees recognise a right-of-use (ROU) asset and a lease liability for almost all leases longer than 12 months.",
      "Classification: Finance lease if any one of five tests is met — ownership transfer, a purchase option reasonably certain to be exercised, a major part of economic life, PV of payments substantially all of fair value, or a specialised asset.",
      "Expense pattern: Finance leases show amortisation plus interest (front-loaded); operating leases show a single straight-line lease cost.",
      "Ind AS and IFRS contrast: Ind AS 116 and IFRS 16 have no operating-lease category for lessees.",
    ],
    content: `
<h2>Step 1: does the contract contain a lease?</h2>
<p>Under ASC 842, a contract contains a lease if it conveys the right to <strong>control the use of an identified asset</strong> for a period of time in exchange for consideration. Control means the customer has both the right to obtain substantially all of the economic benefits from use and the right to direct how and for what purpose the asset is used. If the supplier has a substantive right to substitute the asset, there's no identified asset — and no lease.</p>

<h2>Step 2: initial measurement</h2>
<ul>
<li><strong>Lease liability</strong> = present value of lease payments not yet paid: fixed payments, variable payments based on an index or rate, purchase options reasonably certain to be exercised, termination penalties, and amounts probable of being owed under residual value guarantees.</li>
<li><strong>Discount rate</strong> = the rate implicit in the lease if readily determinable; otherwise the lessee's incremental borrowing rate. Entities that aren't public business entities may elect a risk-free rate.</li>
<li><strong>ROU asset</strong> = lease liability + payments made at or before commencement + initial direct costs − lease incentives received.</li>
</ul>

<h2>Step 3: classification ("OWNES")</h2>
<table>
<thead><tr><th>Test</th><th>Question</th></tr></thead>
<tbody>
<tr><td><strong>O</strong>ption to purchase</td><td>Is the lessee reasonably certain to exercise a purchase option?</td></tr>
<tr><td><strong>W</strong>hole ownership transfers</td><td>Does ownership pass to the lessee by the end of the term?</td></tr>
<tr><td><strong>N</strong>o alternative use</td><td>Is the asset so specialised that the lessor has no alternative use for it?</td></tr>
<tr><td><strong>E</strong>conomic life</td><td>Is the term a major part of the remaining economic life? (75% or more is a common benchmark)</td></tr>
<tr><td><strong>S</strong>ubstantially all of fair value</td><td>Does the PV of payments plus any guaranteed residual equal substantially all of fair value? (90% or more is a common benchmark)</td></tr>
</tbody>
</table>
<p>Meet any one and it's a <strong>finance lease</strong>; meet none and it's an <strong>operating lease</strong>.</p>

<h2>Step 4: subsequent measurement</h2>
<table>
<thead><tr><th></th><th>Finance lease</th><th>Operating lease</th></tr></thead>
<tbody>
<tr><td>Liability</td><td>Effective interest method</td><td>Effective interest method (PV of remaining payments)</td></tr>
<tr><td>ROU asset</td><td>Amortised, usually straight-line</td><td>Plug: straight-line lease cost − interest accretion on the liability</td></tr>
<tr><td>Income statement</td><td>Amortisation and interest shown separately</td><td>Single lease cost, straight-line</td></tr>
<tr><td>Cash flow statement</td><td>Principal: financing; interest: operating</td><td>All operating</td></tr>
</tbody>
</table>

<h2>Worked example</h2>
<div class="callout callout-example">
<p>A lessee signs a 3-year lease with annual payments of $10,000 in arrears at a 6% discount rate. Lease liability = $10,000 × 2.6730 = <strong>$26,730</strong>; ROU asset is the same.</p>
<table>
<thead><tr><th>Year</th><th>Interest (6%)</th><th>Payment</th><th>Closing liability</th><th>Finance lease expense</th><th>Operating lease cost</th></tr></thead>
<tbody>
<tr><td>1</td><td>$1,604</td><td>$10,000</td><td>$18,334</td><td>$1,604 + $8,910 = $10,514</td><td>$10,000</td></tr>
<tr><td>2</td><td>$1,100</td><td>$10,000</td><td>$9,434</td><td>$1,100 + $8,910 = $10,010</td><td>$10,000</td></tr>
<tr><td>3</td><td>$566</td><td>$10,000</td><td>$0</td><td>$566 + $8,910 = $9,476</td><td>$10,000</td></tr>
</tbody>
</table>
<p>Total expense is $30,000 either way — only the timing differs.</p>
</div>

<h2>Remeasurement and modifications</h2>
<ul>
<li>The liability is remeasured when the lease term changes, the assessment of a purchase option changes, amounts under residual value guarantees change, or contingent variable payments become fixed. The ROU asset is adjusted by the same amount.</li>
<li>A modification that adds a right to use an additional asset at its standalone price is a <strong>separate contract</strong>. Other modifications are remeasured at the modification date.</li>
</ul>

<h2>Practical expedients and exemptions</h2>
<ul>
<li><strong>Short-term leases</strong> (12 months or less, no purchase option reasonably certain to be exercised) may be kept off the balance sheet.</li>
<li>Lessees may elect not to separate lease and non-lease components (such as maintenance) by asset class.</li>
<li>Private companies may use the risk-free rate, and may account for leases between entities under common control using the written terms (ASU 2023-01).</li>
</ul>

<h2>Lessors in brief</h2>
<p>Lessors classify leases as <strong>sales-type</strong> (derecognise the asset, record a net investment and possibly selling profit), <strong>direct financing</strong> (profit deferred into interest income) or <strong>operating</strong> (keep the asset, record straight-line lease income).</p>

<p>See our full <a href="/cpa/far/leases">FAR leases</a> notes, and <a href="/blog/us-gaap-vs-ind-as-key-differences">US GAAP vs Ind AS</a> for how Ind AS 116 differs.</p>

${sources([FASB("842", "Leases"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "deferred-tax-assets-explained",
    title: "Deferred Tax Assets and Liabilities Under US GAAP",
    category: "Concepts Explained",
    excerpt:
      "Temporary vs permanent differences, how DTAs and DTLs are measured, the valuation allowance, rate changes, uncertain tax positions and the new income tax disclosures — with worked examples.",
    crux: [
      "Temporary differences: Differences between book and tax bases that reverse — taxable ones create deferred tax liabilities (DTLs); deductible ones create deferred tax assets (DTAs).",
      "Permanent differences: Never reverse (municipal bond interest, fines, the non-deductible half of meals) and never create deferred taxes — they change the effective rate.",
      "Measurement: Temporary difference × the enacted rate expected when it reverses. A rate change is recognised in continuing operations in the period of enactment.",
      "Valuation allowance: Reduce a DTA if it's more likely than not (over 50%) that some or all of it won't be realised.",
      "Uncertain tax positions: A two-step test — recognise only if more likely than not to be sustained, then measure at the largest amount over 50% likely to be realised.",
    ],
    content: `
<h2>The idea</h2>
<p>Book income (US GAAP) and taxable income (the Internal Revenue Code) recognise some items in different periods. ASC 740 requires companies to recognise the future tax consequences of those differences today, so the income statement shows tax expense that matches book income.</p>
<p><strong>Total income tax expense = Current tax expense (taxes payable this year) + Deferred tax expense (change in net DTL) − Deferred tax benefit (change in net DTA).</strong></p>

<h2>Temporary vs permanent differences</h2>
<table>
<thead><tr><th>Item</th><th>Type</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>Accelerated tax depreciation (MACRS or bonus) vs straight-line book</td><td>Temporary, taxable</td><td>DTL</td></tr>
<tr><td>Instalment sales (taxed when cash is collected)</td><td>Temporary, taxable</td><td>DTL</td></tr>
<tr><td>Warranty and bad-debt accruals (deductible when paid or written off)</td><td>Temporary, deductible</td><td>DTA</td></tr>
<tr><td>Rent or subscriptions received in advance (taxed on receipt)</td><td>Temporary, deductible</td><td>DTA</td></tr>
<tr><td>Net operating loss carryforwards</td><td>Carryforward</td><td>DTA</td></tr>
<tr><td>Municipal bond interest; life insurance premiums where the company is beneficiary; fines and penalties</td><td>Permanent</td><td>None — affects the effective rate</td></tr>
</tbody>
</table>

<h2>Worked example: DTL and DTA together</h2>
<div class="callout callout-example">
<p>In Year 1, pre-tax book income is $500,000. Tax depreciation exceeds book depreciation by $60,000 (reverses evenly over three years). Warranty expense accrued but not yet paid is $20,000. Municipal bond interest of $10,000 is included in book income. The enacted rate is 21% for all years.</p>
<ul>
<li>Taxable income = $500,000 − $60,000 + $20,000 − $10,000 = $450,000 → current tax = <strong>$94,500</strong></li>
<li>DTL = $60,000 × 21% = $12,600; DTA = $20,000 × 21% = $4,200 → net deferred tax expense = <strong>$8,400</strong></li>
<li>Total tax expense = $94,500 + $8,400 = <strong>$102,900</strong></li>
<li>Effective rate = $102,900 ÷ $500,000 = 20.6% — below 21% only because of the permanent difference ($10,000 × 21% = $2,100).</li>
</ul>
</div>

<h2>Rate changes</h2>
<p>Deferred taxes are measured using the <strong>enacted</strong> rate for the year the difference reverses — never a proposed rate. When a new rate is enacted, all existing DTAs and DTLs are remeasured, and the whole effect goes to income tax expense from continuing operations in the period that includes the enactment date — even if the original item was recorded in other comprehensive income.</p>

<h2>The valuation allowance</h2>
<p>A DTA is reduced by a valuation allowance if, based on all available evidence, it is <strong>more likely than not</strong> that some or all of it will not be realised. Sources of taxable income that support realisation include future reversals of existing taxable temporary differences, future taxable income, taxable income in carryback years where allowed, and tax-planning strategies. Cumulative losses in recent years are significant negative evidence that is hard to overcome.</p>

<h2>Uncertain tax positions (ASC 740-10)</h2>
<ol>
<li><strong>Recognition</strong> — recognise the benefit only if it's more likely than not that the position will be sustained on examination by the tax authority, assuming it has full knowledge.</li>
<li><strong>Measurement</strong> — measure it at the largest amount of benefit that is more than 50% likely to be realised on settlement.</li>
</ol>
<p>The difference between the benefit claimed on the return and the amount recognised is an unrecognised tax benefit, usually a liability.</p>

<h2>Presentation and disclosure</h2>
<ul>
<li>All DTAs and DTLs are <strong>noncurrent</strong>, netted within each tax-paying component and jurisdiction.</li>
<li>ASU 2023-09 expands disclosures: public business entities must show a rate reconciliation with specific categories and income taxes paid disaggregated by jurisdiction, for annual periods beginning after December 15, 2024 (a year later for other entities).</li>
</ul>

<p>Work through the full topic in our <a href="/cpa/far/income-taxes">FAR income taxes</a> notes, and compare with the tax side in <a href="/blog/tax-basis-vs-book-basis-differences">tax basis vs book basis</a>.</p>

${sources([FASB("740", "Income Taxes"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "derivatives-hedge-accounting-us-gaap",
    title: "Derivatives and Hedge Accounting Under US GAAP",
    category: "Concepts Explained",
    excerpt:
      "What makes an instrument a derivative under ASC 815, how derivatives are measured, and the three hedge types — fair value, cash flow and net investment — with journal entries.",
    crux: [
      "Definition: A derivative has an underlying and a notional amount, needs little or no initial net investment, and can be net settled.",
      "Measurement: Every derivative is recognised on the balance sheet at fair value.",
      "No hedge accounting: Fair value changes go straight to earnings.",
      "Fair value hedge: Changes in the derivative and in the hedged item (for the hedged risk) both go to earnings, so they offset. Cash flow hedge: The derivative's change goes to OCI and is reclassified to earnings when the hedged transaction affects earnings.",
      "Qualifying: Formal documentation at inception and a highly effective relationship are required; the hedge results are presented in the same income statement line as the hedged item.",
    ],
    content: `
<h2>What is a derivative?</h2>
<p>Under ASC 815, a financial instrument or other contract is a derivative if it has all three characteristics:</p>
<ol>
<li><strong>An underlying and a notional amount</strong> (or payment provision) — for example, an interest rate applied to $1 million, or a currency rate applied to €500,000.</li>
<li><strong>No or a small initial net investment</strong> compared with other contracts with similar responses to market changes.</li>
<li><strong>Net settlement</strong> — the contract can be settled net, through a market mechanism, or by delivering an asset readily convertible to cash.</li>
</ol>
<p>Common examples: forwards, futures, swaps and options. Scope exceptions include "normal purchases and normal sales" contracts for physical delivery used in the ordinary course of business.</p>

<h2>Basic measurement</h2>
<p>All derivatives are recognised as assets or liabilities at <strong>fair value</strong>. Without hedge accounting, changes in fair value go to earnings every period — which creates volatility if the derivative was bought to offset a risk elsewhere. Hedge accounting fixes that mismatch.</p>

<h2>The three hedge types</h2>
<table>
<thead><tr><th>Hedge</th><th>What's hedged</th><th>Derivative's fair value change goes to</th></tr></thead>
<tbody>
<tr><td>Fair value hedge</td><td>Exposure to changes in the fair value of a recognised asset or liability, or a firm commitment (e.g. fixed-rate debt)</td><td>Earnings — and the hedged item is adjusted for the hedged risk through earnings, so the two offset</td></tr>
<tr><td>Cash flow hedge</td><td>Variability in cash flows of a forecasted transaction or a variable-rate asset or liability</td><td>OCI, then reclassified to earnings when the hedged transaction affects earnings</td></tr>
<tr><td>Net investment hedge</td><td>Foreign currency exposure of a net investment in a foreign operation</td><td>OCI (cumulative translation adjustment)</td></tr>
</tbody>
</table>

<h2>Qualifying for hedge accounting</h2>
<ul>
<li><strong>Formal documentation at inception</strong>: the hedging relationship, the risk management objective, the hedging instrument, the hedged item, and how effectiveness will be assessed.</li>
<li><strong>Highly effective</strong>: the relationship must be expected to be highly effective in offsetting the hedged risk, assessed at inception and on an ongoing basis. Since ASU 2017-12, the whole change in the fair value of a highly effective cash flow hedge goes to OCI — "ineffectiveness" is no longer measured separately.</li>
<li>Results are presented in the <strong>same income statement line</strong> as the hedged item's earnings effect.</li>
</ul>

<h2>Example: cash flow hedge of a forecasted purchase</h2>
<div class="callout callout-example">
<p>On October 1, a US company expects to buy inventory for €1,000,000 in March and enters a forward contract to buy euros at $1.10. At December 31 the forward's fair value has risen to $30,000.<br>
<strong>December 31:</strong> Dr Forward contract (asset) 30,000; Cr OCI 30,000.<br>
<strong>In March</strong>, the forward settles and the inventory is purchased; the accumulated OCI stays in equity until the inventory is sold.<br>
<strong>When the inventory is sold:</strong> the gain is reclassified from OCI to cost of goods sold, offsetting the higher euro cost.</p>
</div>

<h2>Embedded derivatives</h2>
<p>A derivative feature inside a host contract (for example, an equity-indexed return in a debt instrument) is separated and accounted for as a derivative only if: it isn't clearly and closely related to the host; the hybrid isn't already measured at fair value through earnings; and a separate instrument with the same terms would be a derivative.</p>

<h2>Disclosure</h2>
<p>Entities disclose the objectives and strategies for using derivatives, the volume of activity, fair values by instrument type, and the gains and losses by hedge type and income statement line.</p>

<p>Derivatives and hedging are tested mainly in the <a href="/cpa/bar">BAR</a> Discipline, with basic recognition in FAR. See also <a href="/cpa/far/investments-debt-and-equity-securities">FAR investments</a>.</p>

${sources([FASB("815", "Derivatives and Hedging"), FASB("820", "Fair Value Measurement"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "pension-accounting-us-gaap-defined-benefit",
    title: "Pension Accounting Under US GAAP: Defined Benefit Plans",
    category: "Concepts Explained",
    excerpt:
      "Funded status, the projected benefit obligation, plan assets, the five components of net periodic pension cost, the corridor approach and where each item is presented.",
    crux: [
      "Defined contribution vs defined benefit: A DC plan's expense is simply the required contribution. A DB plan promises a benefit, so the employer bears the investment and actuarial risk.",
      "Funded status: Projected benefit obligation (PBO) − fair value of plan assets. Underfunded means a liability; overfunded means an asset.",
      "Net periodic pension cost: Service cost + interest cost − expected return on plan assets ± amortisation of prior service cost and of net gain or loss.",
      "OCI: Actuarial gains and losses and prior service cost go to OCI first, then are amortised into pension cost (gains and losses beyond a 10% corridor).",
      "Presentation: Service cost sits with other compensation costs in operating income; the other components are presented outside operating income.",
    ],
    content: `
<h2>Key measures</h2>
<ul>
<li><strong>Projected benefit obligation (PBO)</strong> — the actuarial present value of benefits earned to date, using <em>expected future</em> salary levels.</li>
<li><strong>Accumulated benefit obligation (ABO)</strong> — the same but using <em>current</em> salary levels.</li>
<li><strong>Vested benefit obligation (VBO)</strong> — the portion employees keep even if they leave now.</li>
<li><strong>Plan assets</strong> — assets held in a trust to pay benefits, measured at fair value.</li>
</ul>
<p>The balance sheet shows the <strong>funded status</strong>: PBO − fair value of plan assets. Under ASC 715, an underfunded plan is a liability and an overfunded plan an asset.</p>

<h2>Net periodic pension cost: the five components</h2>
<table>
<thead><tr><th>Component</th><th>Effect</th><th>Calculation</th></tr></thead>
<tbody>
<tr><td>Service cost</td><td>Increase</td><td>Actuarial PV of benefits earned by employees this year</td></tr>
<tr><td>Interest cost</td><td>Increase</td><td>Opening PBO × discount (settlement) rate</td></tr>
<tr><td>Expected return on plan assets</td><td>Decrease</td><td>Market-related value of plan assets × expected long-term rate of return</td></tr>
<tr><td>Amortisation of prior service cost</td><td>Usually increase</td><td>Cost of retroactive plan amendments, spread over the remaining service period of affected employees</td></tr>
<tr><td>Amortisation of net gain or loss</td><td>Increase or decrease</td><td>Only the excess over the corridor, spread over average remaining service</td></tr>
</tbody>
</table>

<h2>Worked example</h2>
<div class="callout callout-example">
<p>Opening PBO $1,000,000; plan assets $900,000; discount rate 5%; expected return 7%; service cost $80,000; amortisation of prior service cost $10,000; no gain or loss amortisation.<br>
Net periodic pension cost = $80,000 + $50,000 (5% × $1,000,000) − $63,000 (7% × $900,000) + $10,000 = <strong>$77,000</strong>.</p>
</div>

<h2>The corridor approach</h2>
<p>Actuarial gains and losses (from changes in assumptions, or actual returns differing from expected returns) are first recognised in other comprehensive income. Amortisation into pension cost is required only if the opening accumulated net gain or loss exceeds <strong>10% of the greater of the opening PBO or the market-related value of plan assets</strong>. The excess is amortised over the average remaining service period of active employees.</p>
<div class="callout callout-example">
<p>Opening net loss in AOCI is $180,000; PBO $1,500,000; plan assets $1,200,000; average remaining service 12 years.<br>
Corridor = 10% × $1,500,000 = $150,000. Excess = $30,000. Amortisation = $30,000 ÷ 12 = <strong>$2,500</strong> added to pension cost.</p>
</div>

<h2>Presentation (ASU 2017-07)</h2>
<ul>
<li><strong>Service cost</strong> is presented with other employee compensation costs, within operating income.</li>
<li>The <strong>other components</strong> (interest cost, expected return, amortisations) are presented outside operating income, separately.</li>
<li>Only the service cost component is eligible for capitalisation (for example, in inventory).</li>
</ul>

<h2>Reconciling the PBO and plan assets</h2>
<table>
<thead><tr><th>PBO roll-forward</th><th>Plan assets roll-forward</th></tr></thead>
<tbody>
<tr><td>Opening PBO<br>+ Service cost<br>+ Interest cost<br>+ Plan amendments<br>± Actuarial losses (gains)<br>− Benefits paid<br>= Closing PBO</td><td>Opening fair value<br>+ Actual return<br>+ Employer contributions<br>− Benefits paid<br>= Closing fair value</td></tr>
</tbody>
</table>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> Benefits paid reduce both the PBO and the plan assets by the same amount, so they don't change the funded status. Employer contributions increase plan assets only.</p>
</div>

<p>Pensions are tested mainly in the <a href="/cpa/bar">BAR</a> Discipline.</p>

${sources([FASB("715", "Compensation — Retirement Benefits"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "advanced-consolidation-intercompany-eliminations",
    title: "Advanced Consolidation and Intercompany Eliminations",
    category: "Concepts Explained",
    excerpt:
      "Eliminating intercompany sales, unrealised inventory and asset profits, intercompany debt and dividends — downstream vs upstream, and how the non-controlling interest is affected.",
    crux: [
      "Principle: Consolidated statements show the group as one economic entity, so every intercompany balance and transaction is eliminated in full.",
      "Intercompany sales: Eliminate the full sale and cost of sales, and remove unrealised profit still sitting in the buyer's inventory.",
      "Downstream vs upstream: Downstream (parent to sub) unrealised profit is borne by the parent; upstream (sub to parent) profit is shared with the non-controlling interest.",
      "Fixed asset transfers: Remove the gain and restore the original cost and accumulated depreciation; excess depreciation is reversed each year.",
      "Intercompany dividends and debt: Dividends from the sub are eliminated against investment income; intercompany receivables, payables, interest income and expense cancel out.",
    ],
    content: `
<h2>The single-entity principle</h2>
<p>Under ASC 810, a parent and its subsidiaries present one set of statements as if they were a single company. A company can't make a profit by selling to itself, so intercompany sales, profits, receivables and payables must be removed — <strong>100% of them, even when the parent owns less than 100%</strong>.</p>

<h2>1. Intercompany inventory sales</h2>
<div class="callout callout-example">
<p>Sub sells goods costing $60,000 to Parent for $80,000 (an upstream sale). At year-end, Parent still holds 25% of them. Parent owns 80% of Sub.<br>
<strong>Eliminate the sale:</strong> Dr Sales 80,000; Cr Cost of goods sold 80,000.<br>
<strong>Eliminate unrealised profit in ending inventory:</strong> unrealised profit = 25% × $20,000 = $5,000. Dr Cost of goods sold 5,000; Cr Inventory 5,000.<br>
Because the sale was <em>upstream</em>, the $5,000 reduces Sub's reported income before the NCI share is calculated — NCI bears 20% × $5,000 = $1,000.</p>
</div>
<p>Next year, when Parent sells the goods to outsiders, the profit is realised and the elimination reverses through opening retained earnings (and NCI for upstream sales).</p>

<h2>2. Downstream vs upstream</h2>
<table>
<thead><tr><th></th><th>Downstream (parent → sub)</th><th>Upstream (sub → parent)</th></tr></thead>
<tbody>
<tr><td>Who recorded the profit</td><td>Parent</td><td>Subsidiary</td></tr>
<tr><td>Effect on NCI share of income</td><td>None — the parent bears it all</td><td>NCI absorbs its percentage of the unrealised profit</td></tr>
</tbody>
</table>

<h2>3. Intercompany sale of a fixed asset</h2>
<div class="callout callout-example">
<p>On January 1, Parent sells equipment (cost $100,000, accumulated depreciation $40,000) to Sub for $75,000. Remaining life is 5 years.<br>
Gain = $75,000 − $60,000 = $15,000. In consolidation: Dr Gain 15,000; Dr Equipment 25,000; Cr Accumulated depreciation 40,000 — restoring the original cost basis.<br>
Each year Sub depreciates $15,000 ($75,000 ÷ 5) instead of the group's $12,000 ($60,000 ÷ 5). Eliminate the excess: Dr Accumulated depreciation 3,000; Cr Depreciation expense 3,000. After five years the gain is fully realised.</p>
</div>

<h2>4. Intercompany debt</h2>
<p>Intercompany loans: eliminate the receivable against the payable and interest income against interest expense. If a parent buys its subsidiary's bonds from outside investors, the bonds are treated as <strong>retired</strong> from the group's point of view — any difference between the price paid and the carrying amount is a gain or loss on extinguishment in consolidation.</p>

<h2>5. Intercompany dividends</h2>
<p>Dividends the sub pays to the parent are eliminated against the parent's dividend income (or against the investment account under the equity method). Only dividends paid to the NCI shareholders reduce NCI.</p>

<h2>Calculating NCI in net income</h2>
<p><strong>NCI share = NCI % × (Subsidiary's reported net income − amortisation of fair value step-ups − unrealised upstream profits + realised prior-year upstream profits).</strong></p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> The consolidated sales figure is the parent's sales plus the sub's sales <em>minus the full intercompany sale</em> — not minus the unrealised profit. Students often subtract only the profit.</p>
</div>

<p>Start with <a href="/blog/business-combinations-asc-805-consolidation-basics">business combinations and consolidation basics</a>, then work through <a href="/cpa/far/business-combinations-and-consolidations">FAR business combinations and consolidations</a>.</p>

${sources([FASB("810", "Consolidation"), FASB("805", "Business Combinations"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "accounting-changes-error-corrections-us-gaap",
    title: "Accounting Changes and Error Corrections Under US GAAP",
    category: "Concepts Explained",
    excerpt:
      "Changes in principle, changes in estimate, changes in reporting entity and error corrections under ASC 250 — which are retrospective, which are prospective, and the journal entries.",
    crux: [
      "Change in accounting principle: Retrospective — restate prior periods presented and adjust opening retained earnings of the earliest period, unless impracticable.",
      "Change in accounting estimate: Prospective — current and future periods only; no restatement.",
      "Change in estimate effected by a change in principle: Such as changing depreciation method — treated prospectively, like an estimate.",
      "Change in reporting entity: Retrospective — present statements as if the new entity had always existed.",
      "Error correction: A prior period adjustment — restate prior periods and correct opening retained earnings, net of tax, with full disclosure.",
    ],
    content: `
<h2>The four categories at a glance (ASC 250)</h2>
<table>
<thead><tr><th>Type</th><th>Example</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Change in accounting principle</td><td>FIFO to weighted average; completed-contract to over-time recognition where a choice exists</td><td>Retrospective application</td></tr>
<tr><td>Change in accounting estimate</td><td>Useful life, salvage value, bad debt percentage, warranty rate</td><td>Prospective</td></tr>
<tr><td>Change in estimate effected by a change in principle</td><td>Straight-line to declining-balance depreciation</td><td>Prospective</td></tr>
<tr><td>Change in reporting entity</td><td>Consolidating a subsidiary not previously consolidated (not a business combination)</td><td>Retrospective</td></tr>
<tr><td>Error correction</td><td>Mathematical mistakes, misapplying GAAP, using a non-GAAP principle, overlooking facts</td><td>Restatement — prior period adjustment</td></tr>
</tbody>
</table>

<h2>Retrospective application of a new principle</h2>
<ul>
<li>A change is allowed only if required by a new standard, or if the entity can justify that the new principle is <strong>preferable</strong>.</li>
<li>Prior periods presented are adjusted to show the new principle. The cumulative effect on periods before the earliest period presented is recorded as an adjustment to that period's <strong>opening retained earnings</strong>, net of tax.</li>
<li>If it's impracticable to determine period-specific effects, apply the new principle from the earliest period practicable. A change <em>to</em> LIFO is usually applied prospectively for this reason.</li>
<li>Indirect effects (such as profit-sharing payments) are not restated.</li>
</ul>

<h2>Prospective treatment of a change in estimate</h2>
<div class="callout callout-example">
<p>Equipment cost $100,000 on January 1, Year 1, with a 10-year life and no salvage value. At the start of Year 4, management revises the total life to 8 years.<br>
Carrying amount at the start of Year 4 = $100,000 − 3 × $10,000 = $70,000. Remaining life = 8 − 3 = 5 years.<br>
Year 4 depreciation = $70,000 ÷ 5 = <strong>$14,000</strong>. No adjustment to Years 1–3.</p>
</div>

<h2>Correcting an error</h2>
<div class="callout callout-example">
<p>In Year 3, a company discovers that Year 2 depreciation of $50,000 was never recorded. The tax rate is 21%, and the error also affected the tax return.<br>
Correcting entry: Dr Retained earnings (opening, Year 3) 39,500; Dr Income tax payable / refundable 10,500; Cr Accumulated depreciation 50,000.<br>
If Year 2 statements are presented comparatively, they are restated. The nature of the error and its effect on each line item and per-share amount are disclosed.</p>
</div>

<h2>"Big R" vs "little r" restatements</h2>
<p>Practitioners use these labels for material errors. A <strong>"Big R" restatement</strong> corrects an error that is material to previously issued statements — those statements are reissued and, for SEC registrants, filed again (often with an Item 4.02 Form 8-K). A <strong>"little r" revision</strong> corrects an error that is immaterial to prior periods but would be material if corrected in the current period — the prior-period comparatives are revised in the current filing without reissuing the old statements.</p>

<h2>Counterbalancing errors</h2>
<p>Some errors reverse themselves automatically over two periods, such as overstating ending inventory (overstates this year's income, understates next year's). After the second year-end, retained earnings is correct, so no entry is needed — but comparative statements must still be restated.</p>

<p>Study it further in <a href="/cpa/far/accounting-changes-and-error-corrections">FAR accounting changes and error corrections</a>.</p>

${sources([FASB("250", "Accounting Changes and Error Corrections"), ["US SEC — Form 8-K (Item 4.02, non-reliance on previously issued financial statements)", "https://www.sec.gov/files/form8-k.pdf"], AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "cost-accounting-variance-analysis-cpa-bar",
    title: "Cost Accounting and Variance Analysis for CPA BAR",
    category: "Concepts Explained",
    excerpt:
      "Job order vs process costing, absorption vs variable costing, activity-based costing and standard cost variances — price, quantity, rate, efficiency and overhead — with worked numbers.",
    crux: [
      "Costing systems: Job order costing for unique jobs; process costing for continuous, identical units; activity-based costing allocates overhead using the activities that drive cost.",
      "Absorption vs variable costing: Absorption includes fixed manufacturing overhead in inventory; variable costing expenses it. Income differs when inventory levels change.",
      "Material variances: Price = AQ × (AP − SP); quantity = SP × (AQ − SQ).",
      "Labour variances: Rate = AH × (AR − SR); efficiency = SR × (AH − SH).",
      "Reading variances: Favourable isn't always good — a favourable price variance from cheap, poor-quality materials can cause an unfavourable quantity variance.",
    ],
    content: `
<h2>Where it's tested</h2>
<p>Cost accounting, budgeting and variance analysis sit in Area I (Business Analysis) of the Business Analysis and Reporting (BAR) Discipline. Expect calculations and interpretation in both multiple-choice questions and simulations.</p>

<h2>Costing systems</h2>
<ul>
<li><strong>Job order costing</strong> — costs accumulated by job (custom furniture, audits, construction). Overhead applied using a predetermined rate.</li>
<li><strong>Process costing</strong> — costs accumulated by department and spread over equivalent units (refining, beverages). Weighted-average and FIFO methods differ in how they treat opening work in process.</li>
<li><strong>Activity-based costing (ABC)</strong> — overhead assigned through activity cost pools (set-ups, inspections, orders) using cost drivers. More accurate when products consume overhead differently.</li>
</ul>

<h2>Absorption vs variable costing</h2>
<table>
<thead><tr><th></th><th>Absorption (required for GAAP and tax)</th><th>Variable (internal use)</th></tr></thead>
<tbody>
<tr><td>Fixed manufacturing overhead</td><td>Product cost (in inventory)</td><td>Period cost (expensed)</td></tr>
<tr><td>Production &gt; sales</td><td>Higher income</td><td>Lower income</td></tr>
<tr><td>Production &lt; sales</td><td>Lower income</td><td>Higher income</td></tr>
</tbody>
</table>
<p>The income difference = change in inventory units × fixed overhead per unit.</p>

<h2>Standard cost variances: worked example</h2>
<p>Standard: 2 kg of material at $5/kg and 0.5 hours of labour at $20/hour per unit. Actual output 1,000 units, using 2,100 kg bought at $4.80/kg, and 520 labour hours at $21/hour.</p>
<table>
<thead><tr><th>Variance</th><th>Formula</th><th>Calculation</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Material price</td><td>AQ × (AP − SP)</td><td>2,100 × ($4.80 − $5.00)</td><td>$420 F</td></tr>
<tr><td>Material quantity</td><td>SP × (AQ − SQ)</td><td>$5 × (2,100 − 2,000)</td><td>$500 U</td></tr>
<tr><td>Labour rate</td><td>AH × (AR − SR)</td><td>520 × ($21 − $20)</td><td>$520 U</td></tr>
<tr><td>Labour efficiency</td><td>SR × (AH − SH)</td><td>$20 × (520 − 500)</td><td>$400 U</td></tr>
</tbody>
</table>
<p>(F = favourable, U = unfavourable. Standard quantities are for <em>actual</em> output: 1,000 × 2 kg = 2,000 kg; 1,000 × 0.5 = 500 hours.)</p>
<p>Interpretation: cheaper material saved $420 but caused $500 of extra usage — possibly lower quality. That may also explain the extra labour hours.</p>

<h2>Overhead variances</h2>
<ul>
<li><strong>Variable overhead spending</strong> = actual variable overhead − (actual hours × standard rate).</li>
<li><strong>Variable overhead efficiency</strong> = standard rate × (actual hours − standard hours allowed).</li>
<li><strong>Fixed overhead budget (spending)</strong> = actual fixed overhead − budgeted fixed overhead.</li>
<li><strong>Fixed overhead volume</strong> = budgeted fixed overhead − fixed overhead applied (standard hours allowed × fixed rate). It reflects capacity use, not cost control.</li>
</ul>

<h2>Flexible budgets</h2>
<p>Compare actual results with a budget flexed to the <strong>actual level of activity</strong>, not the original static budget. The static-to-flexible difference is the sales volume variance; the flexible-to-actual difference is the flexible budget variance, which the price and efficiency variances above break down.</p>

<p>See also <a href="/blog/contribution-margin-explained">contribution margin and break-even analysis</a>.</p>

${sources([AICPA_BLUEPRINTS, FASB("330", "Inventory (absorption costing for external reporting)")])}
`,
  },
];
