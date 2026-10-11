import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

/**
 * FAR and BAR technical explainers. Sources are limited to official standard-setters
 * and regulators (FASB, GASB, IFRS Foundation, SEC, AICPA). Worked numbers are our own.
 */

const FASB = (topic: string, title: string): [string, string] => [
  `FASB — ASC ${topic}, ${title}`,
  `https://asc.fasb.org/${topic}`,
];
const AICPA_BLUEPRINTS: [string, string] = [
  "AICPA & CIMA — CPA Exam Blueprints",
  "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam",
];

export const farPosts: BlogSeed[] = [
  {
    slug: "far-conceptual-framework-financial-statement-presentation",
    title: "FAR Conceptual Framework and Financial Statement Presentation Explained",
    category: "Concepts Explained",
    excerpt:
      "The FASB conceptual framework — objective, qualitative characteristics, elements — and how it shapes the balance sheet, income statement, comprehensive income and notes.",
    crux: [
      "Objective: General-purpose financial reporting gives investors, lenders and other creditors information useful for decisions about providing resources to the entity.",
      "Fundamental qualities: Relevance (predictive value, confirmatory value, materiality) and faithful representation (complete, neutral, free from error).",
      "Enhancing qualities: Comparability, verifiability, timeliness and understandability — constrained by cost.",
      "Ten elements: Assets, liabilities, equity, revenues, expenses, gains, losses, investments by owners, distributions to owners and comprehensive income.",
      "Presentation: A full set is the balance sheet, income statement and comprehensive income, cash flows, changes in equity, and notes.",
    ],
    content: `
<h2>What the conceptual framework is — and isn't</h2>
<p>The Financial Accounting Standards Board (FASB) sets out its conceptual framework in Statements of Financial Accounting Concepts, now consolidated in Concepts Statement No. 8. The framework is <strong>not</strong> authoritative US generally accepted accounting principles (GAAP). It guides the FASB when it writes standards, and it helps preparers reason through situations the Accounting Standards Codification (ASC) doesn't address. On the CPA Exam it underpins the first area of the Financial Accounting and Reporting (FAR) blueprint, Financial Reporting.</p>

<h2>The objective of financial reporting</h2>
<p>The objective is to provide financial information that is useful to existing and potential <strong>investors, lenders and other creditors</strong> in making decisions about providing resources to the entity. Management, regulators and the public may find the information useful, but they are not the primary users the framework is written for.</p>

<h2>Qualitative characteristics</h2>
<table>
<thead><tr><th>Type</th><th>Characteristic</th><th>What it means</th></tr></thead>
<tbody>
<tr><td rowspan="2">Fundamental</td><td>Relevance</td><td>Capable of making a difference to decisions — through predictive value, confirmatory value or both. Materiality is an entity-specific aspect of relevance.</td></tr>
<tr><td>Faithful representation</td><td>Depicts the economic phenomenon completely, neutrally and free from error.</td></tr>
<tr><td rowspan="4">Enhancing</td><td>Comparability</td><td>Lets users identify similarities and differences between entities and periods. Consistency helps achieve it.</td></tr>
<tr><td>Verifiability</td><td>Independent, knowledgeable observers could reach consensus that the depiction is faithful.</td></tr>
<tr><td>Timeliness</td><td>Available in time to influence decisions.</td></tr>
<tr><td>Understandability</td><td>Classified, characterised and presented clearly for users with reasonable knowledge of business.</td></tr>
</tbody>
</table>
<p>The pervasive <strong>cost constraint</strong> asks whether the benefits of reporting information justify the costs of providing and using it.</p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> Conservatism and prudence are <em>not</em> qualitative characteristics in the current framework — neutrality is part of faithful representation. Consistency is not a separate characteristic either; it supports comparability.</p>
</div>

<h2>The elements</h2>
<ul>
<li><strong>Asset</strong> — a present right of an entity to an economic benefit.</li>
<li><strong>Liability</strong> — a present obligation of an entity to transfer an economic benefit.</li>
<li><strong>Equity</strong> — the residual interest in the assets after deducting liabilities.</li>
<li><strong>Revenues and expenses</strong> — inflows and outflows from delivering goods or services that are the entity's ongoing major or central operations.</li>
<li><strong>Gains and losses</strong> — increases or decreases in equity from peripheral or incidental transactions.</li>
<li><strong>Investments by owners and distributions to owners.</strong></li>
<li><strong>Comprehensive income</strong> — the change in equity during a period from transactions and events other than those with owners.</li>
</ul>
<p>The asset and liability definitions above come from Chapter 4 of Concepts Statement No. 8 (Elements of Financial Statements), issued in December 2021, which replaced the older "probable future economic benefit" wording.</p>

<h2>A complete set of financial statements</h2>
<ol>
<li><strong>Balance sheet</strong> (statement of financial position) — usually classified into current and noncurrent items.</li>
<li><strong>Income statement and statement of comprehensive income</strong> — presented either as one continuous statement or as two consecutive statements.</li>
<li><strong>Statement of cash flows</strong> — operating, investing and financing activities.</li>
<li><strong>Statement of changes in equity</strong> (or disclosure of the changes in the notes).</li>
<li><strong>Notes</strong>, including the summary of significant accounting policies.</li>
</ol>

<h2>Other comprehensive income (OCI)</h2>
<p>OCI collects specified gains and losses that bypass net income until they are reclassified ("recycled"). The main items are:</p>
<ul>
<li>Unrealised holding gains and losses on available-for-sale debt securities.</li>
<li>Foreign currency translation adjustments.</li>
<li>Certain pension and other postretirement benefit items (actuarial gains and losses, prior service cost).</li>
<li>The effective portion of cash flow hedges.</li>
<li>Changes in instrument-specific credit risk on liabilities measured under the fair value option.</li>
</ul>

<h2>Income statement items that trip people up</h2>
<ul>
<li><strong>Discontinued operations</strong> (ASC 205-20) — a disposal of a component that represents a <em>strategic shift</em> with a major effect on operations and results. Reported net of tax, below income from continuing operations.</li>
<li><strong>Extraordinary items</strong> no longer exist under US GAAP. Unusual or infrequent items are shown within continuing operations, with disclosure.</li>
<li><strong>Expense disaggregation</strong> — ASU 2024-03 will require public business entities to disaggregate certain expense captions in the notes, for annual periods beginning after December 15, 2026.</li>
</ul>

<p>Study the full topic in our <a href="/cpa/far/conceptual-framework-and-financial-statement-presentation">FAR conceptual framework</a> notes, then move on to <a href="/cpa/far/balance-sheet-and-income-statement-preparation">balance sheet and income statement preparation</a>.</p>

${sources([
  ["FASB — Concepts Statement No. 8, Conceptual Framework for Financial Reporting (compiled edition, September 2024)", "https://storage.fasb.org/Conceptual%20Framework%20for%20Financial%20Reporting%20(September%202024).pdf"],
  FASB("205", "Presentation of Financial Statements"),
  FASB("220", "Income Statement — Reporting Comprehensive Income"),
  AICPA_BLUEPRINTS,
])}
`,
  },
  {
    slug: "us-gaap-vs-ifrs-key-differences",
    title: "US GAAP vs IFRS: Key Differences for CPA Exam Candidates",
    category: "Concepts Explained",
    excerpt:
      "Inventory, revaluation, impairment, development costs, leases, contingencies, consolidation and cash flow classification — the US GAAP vs IFRS differences the CPA Exam expects you to know.",
    crux: [
      "Who sets them: US GAAP is set by the FASB; IFRS by the International Accounting Standards Board (IASB). India's Ind AS is converged with IFRS.",
      "Rules vs principles: US GAAP has more detailed, industry-specific guidance; IFRS relies more on broad principles and judgement.",
      "Biggest differences: LIFO (US only), revaluation of PP&E (IFRS only), impairment reversals (IFRS only), development costs (capitalised under IFRS) and the lessee model.",
      "Contingencies: \"Probable\" means likely to occur under US GAAP, but more likely than not under IFRS.",
      "On the exam: FAR is a US GAAP exam, but IFRS differences can be tested in specific areas — learn the headline differences, not IFRS in depth.",
    ],
    content: `
<h2>Why IFRS appears on a US exam</h2>
<p>US companies report under US GAAP, issued by the Financial Accounting Standards Board (FASB). More than 140 jurisdictions require or permit International Financial Reporting Standards (IFRS), issued by the International Accounting Standards Board (IASB). Indian Accounting Standards (Ind AS) are converged with IFRS. The CPA Exam focuses on US GAAP, but the blueprints allow selected IFRS differences to be tested — so knowing where the two diverge is worth a few marks, and saves Indian candidates from applying Ind AS instincts to US GAAP questions.</p>

<h2>The key differences</h2>
<table>
<thead><tr><th>Area</th><th>US GAAP</th><th>IFRS</th></tr></thead>
<tbody>
<tr><td>Inventory cost formula</td><td>FIFO, weighted average and LIFO allowed</td><td>LIFO prohibited (IAS 2)</td></tr>
<tr><td>Inventory write-down reversal</td><td>Prohibited</td><td>Required if net realisable value recovers</td></tr>
<tr><td>Property, plant and equipment</td><td>Cost model only</td><td>Cost or revaluation model (IAS 16)</td></tr>
<tr><td>Investment property</td><td>No separate category; cost model</td><td>Cost or fair value model (IAS 40)</td></tr>
<tr><td>Component depreciation</td><td>Permitted</td><td>Required for significant parts</td></tr>
<tr><td>Impairment of long-lived assets</td><td>Two steps: recoverability test with undiscounted cash flows, then loss = carrying amount − fair value</td><td>One step: loss = carrying amount − recoverable amount (higher of fair value less costs of disposal and value in use)</td></tr>
<tr><td>Impairment reversal</td><td>Prohibited for assets held and used</td><td>Required (except goodwill)</td></tr>
<tr><td>Goodwill impairment</td><td>Tested at the reporting unit level; one-step test</td><td>Tested at the cash-generating unit level</td></tr>
<tr><td>Development costs</td><td>Generally expensed (software has specific rules)</td><td>Capitalised when the IAS 38 criteria are met</td></tr>
<tr><td>Lessee accounting</td><td>Dual model: finance and operating leases (ASC 842)</td><td>Single model (IFRS 16)</td></tr>
<tr><td>Contingent liabilities</td><td>Accrue if <em>probable</em> (likely) and estimable; minimum of a range if no best estimate</td><td>Provide if <em>probable</em> (more likely than not); midpoint of an equally likely range</td></tr>
<tr><td>Consolidation model</td><td>Variable interest entity model plus voting interest model</td><td>Single control model (IFRS 10)</td></tr>
<tr><td>Interest paid (cash flow statement)</td><td>Operating</td><td>Currently a policy choice; IFRS 18 requires non-financial companies to classify it as financing from 2027</td></tr>
<tr><td>Extraordinary items</td><td>Not permitted</td><td>Not permitted</td></tr>
</tbody>
</table>

<div class="callout callout-example">
<p><strong>Example — impairment:</strong> An asset has a carrying amount of $500,000, undiscounted future cash flows of $520,000, fair value of $430,000 and value in use of $450,000. Under US GAAP, the undiscounted cash flows exceed the carrying amount, so the asset passes the recoverability test — <strong>no impairment</strong>. Under IFRS, recoverable amount is $450,000 (the higher of fair value less costs of disposal and value in use), so an impairment of <strong>$50,000</strong> is recognised.</p>
</div>

<h2>IFRS 18 is coming</h2>
<p>IFRS 18, Presentation and Disclosure in Financial Statements, replaces IAS 1 for annual periods beginning on or after January 1, 2027. It introduces defined subtotals in the income statement (operating profit and profit before financing and income taxes), disclosure of management-defined performance measures, and more consistent classification of interest and dividends. US GAAP has no equivalent.</p>

<h2>How to study it</h2>
<ul>
<li>Learn US GAAP first. IFRS questions usually ask "how would this differ under IFRS?", so you need the US answer before the difference makes sense.</li>
<li>Memorise the table above. Most IFRS questions come from these headline areas.</li>
<li>If you're an Indian CA, read our <a href="/blog/us-gaap-vs-ind-as-key-differences">US GAAP vs Ind AS</a> comparison — the differences are almost identical.</li>
</ul>

${sources([
  ["FASB — Accounting Standards Codification", "https://asc.fasb.org/"],
  ["IFRS Foundation — List of IFRS Accounting Standards", "https://www.ifrs.org/issued-standards/list-of-standards/"],
  ["IFRS Foundation — IFRS 18 Presentation and Disclosure in Financial Statements", "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/"],
  AICPA_BLUEPRINTS,
])}
`,
  },
  {
    slug: "bonds-payable-effective-interest-method",
    title: "Accounting for Bonds Payable and the Effective Interest Method",
    category: "Concepts Explained",
    excerpt:
      "How bonds are priced, why they're issued at a discount or premium, and how the effective interest method amortises it — with a full worked schedule and journal entries.",
    crux: [
      "Issue price: The present value of the principal plus the present value of the interest payments, discounted at the market rate.",
      "Discount or premium: Coupon rate below the market rate means a discount; above means a premium.",
      "Effective interest method: Interest expense = carrying amount × market rate. The difference from the cash coupon is the amortisation.",
      "Carrying amount: Moves towards face value each period — up for a discount, down for a premium.",
      "Issue costs: Shown as a direct deduction from the bond's carrying amount and amortised as interest expense.",
    ],
    content: `
<h2>Pricing a bond</h2>
<p>A bond promises two cash flows: periodic interest at the <strong>coupon (stated) rate</strong>, and the principal at maturity. Investors discount those cash flows at the <strong>market (effective) rate</strong> for similar risk. So:</p>
<p><strong>Issue price = PV of principal + PV of interest payments</strong>, both at the market rate.</p>
<ul>
<li>Coupon rate &lt; market rate → issued at a <strong>discount</strong> (price below face).</li>
<li>Coupon rate &gt; market rate → issued at a <strong>premium</strong> (price above face).</li>
<li>Coupon rate = market rate → issued at <strong>face</strong> (par).</li>
</ul>

<h2>Worked example: a bond issued at a discount</h2>
<p>On January 1, Year 1, a company issues a $100,000, 5-year bond with an 8% coupon paid annually on December 31. The market rate is 10%.</p>
<ul>
<li>PV of principal: $100,000 × 0.62092 (PV of $1, 5 periods, 10%) = $62,092</li>
<li>PV of interest: $8,000 × 3.79079 (PV of an ordinary annuity, 5 periods, 10%) = $30,326</li>
<li><strong>Issue price = $92,418</strong>, a discount of $7,582</li>
</ul>

<table>
<thead><tr><th>Year</th><th>Cash paid (8%)</th><th>Interest expense (10% × opening carrying amount)</th><th>Discount amortised</th><th>Closing carrying amount</th></tr></thead>
<tbody>
<tr><td>1</td><td>$8,000</td><td>$9,242</td><td>$1,242</td><td>$93,660</td></tr>
<tr><td>2</td><td>$8,000</td><td>$9,366</td><td>$1,366</td><td>$95,026</td></tr>
<tr><td>3</td><td>$8,000</td><td>$9,503</td><td>$1,503</td><td>$96,529</td></tr>
<tr><td>4</td><td>$8,000</td><td>$9,653</td><td>$1,653</td><td>$98,182</td></tr>
<tr><td>5</td><td>$8,000</td><td>$9,818</td><td>$1,818</td><td>$100,000</td></tr>
</tbody>
</table>
<p>(Year 5 is rounded so the carrying amount reaches exactly $100,000.)</p>

<h2>Journal entries</h2>
<div class="callout callout-example">
<p><strong>At issue:</strong> Dr Cash $92,418; Dr Discount on bonds payable $7,582; Cr Bonds payable $100,000.<br>
<strong>December 31, Year 1:</strong> Dr Interest expense $9,242; Cr Discount on bonds payable $1,242; Cr Cash $8,000.<br>
<strong>At maturity:</strong> Dr Bonds payable $100,000; Cr Cash $100,000.</p>
</div>

<h2>Why the effective interest method</h2>
<p>ASC 835-30 requires the interest method, because it produces a constant rate of interest on the carrying amount. The straight-line method — equal amortisation each year — may be used only if the results are not materially different.</p>

<h2>Other rules worth knowing</h2>
<ul>
<li><strong>Bonds issued between interest dates:</strong> the buyer pays accrued interest since the last payment date, which the issuer refunds on the next coupon.</li>
<li><strong>Debt issue costs:</strong> presented as a direct deduction from the carrying amount of the debt (like a discount) and amortised as interest expense.</li>
<li><strong>Early extinguishment:</strong> the difference between the reacquisition price and the net carrying amount is a gain or loss in income from continuing operations.</li>
<li><strong>Fair value option:</strong> an entity may elect to measure the bond at fair value; changes from instrument-specific credit risk go to other comprehensive income.</li>
<li><strong>Convertible debt:</strong> under ASU 2020-06, most convertible debt is accounted for as a single liability, without separating a conversion feature.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam shortcut:</strong> For a discount, interest expense is always <em>more</em> than cash paid, and rises each year. For a premium, interest expense is <em>less</em> than cash paid, and falls each year. If your schedule doesn't do this, you've used the wrong rate.</p>
</div>

<p>Practise more in our <a href="/cpa/far/long-term-debt">FAR long-term debt</a> notes.</p>

${sources([
  FASB("835-30", "Interest — Imputation of Interest"),
  FASB("470", "Debt"),
  AICPA_BLUEPRINTS,
])}
`,
  },
  {
    slug: "goodwill-impairment-us-gaap",
    title: "Goodwill and Impairment Under US GAAP: Worked Examples",
    category: "Concepts Explained",
    excerpt:
      "How goodwill is measured in an acquisition, the one-step impairment test at the reporting unit, the optional qualitative assessment and the private company alternative — with worked numbers.",
    crux: [
      "Goodwill: Consideration transferred + fair value of any non-controlling interest + fair value of any previously held interest − fair value of identifiable net assets.",
      "Not amortised (public companies): Goodwill is tested for impairment at least annually and when a triggering event occurs.",
      "One-step test: Impairment = carrying amount of the reporting unit − its fair value, capped at the goodwill allocated to it.",
      "Optional qualitative screen: If it's not more likely than not that fair value is below carrying amount, no quantitative test is needed.",
      "Private companies: May elect to amortise goodwill over up to 10 years and test only when a triggering event occurs. Impairment losses are never reversed.",
    ],
    content: `
<h2>Measuring goodwill</h2>
<p>Under the acquisition method in ASC 805, goodwill is the excess of:</p>
<ul>
<li>the consideration transferred, <strong>plus</strong></li>
<li>the fair value of any non-controlling interest (NCI) in the acquiree, <strong>plus</strong></li>
<li>the acquisition-date fair value of any equity interest the acquirer already held,</li>
</ul>
<p>over the fair value of the <strong>identifiable</strong> assets acquired and liabilities assumed. If the net assets exceed the total, the result is a <strong>bargain purchase gain</strong>, recognised in earnings after the acquirer re-checks its measurements.</p>

<div class="callout callout-example">
<p><strong>Example:</strong> Parent pays $800,000 for 80% of Sub. The fair value of the 20% NCI is $200,000. Sub's identifiable net assets have a fair value of $900,000.<br>
Goodwill = $800,000 + $200,000 − $900,000 = <strong>$100,000</strong>.</p>
</div>

<h2>Testing goodwill for impairment (ASC 350)</h2>
<ol>
<li><strong>Allocate goodwill</strong> to reporting units — an operating segment or one level below.</li>
<li><strong>Optional qualitative assessment</strong> ("step zero"): consider macroeconomic conditions, industry and market factors, cost pressures, overall financial performance and entity-specific events. If it's <em>not more likely than not</em> that the unit's fair value is less than its carrying amount, stop.</li>
<li><strong>Quantitative test:</strong> compare the reporting unit's fair value with its carrying amount, including goodwill. If carrying amount exceeds fair value, recognise an impairment loss equal to the excess — <strong>but not more than the goodwill allocated to that unit</strong>.</li>
</ol>
<p>This one-step test was introduced by ASU 2017-04, which removed the old "Step 2" (calculating the implied fair value of goodwill).</p>

<table>
<thead><tr><th>Scenario</th><th>Carrying amount (incl. $300,000 goodwill)</th><th>Fair value of unit</th><th>Impairment loss</th></tr></thead>
<tbody>
<tr><td>A</td><td>$1,200,000</td><td>$1,300,000</td><td>None</td></tr>
<tr><td>B</td><td>$1,200,000</td><td>$1,000,000</td><td>$200,000</td></tr>
<tr><td>C</td><td>$1,200,000</td><td>$800,000</td><td>$300,000 (capped at goodwill)</td></tr>
</tbody>
</table>

<h2>Order of testing</h2>
<p>If other assets in the unit are also being tested, test them first: indefinite-lived intangibles, then long-lived assets held and used under ASC 360, and goodwill last. Otherwise goodwill would absorb losses that belong to other assets.</p>

<h2>Other intangible assets</h2>
<ul>
<li><strong>Finite-lived intangibles</strong> (customer lists, patents) are amortised over their useful lives and tested under ASC 360's recoverability model when there's a triggering event.</li>
<li><strong>Indefinite-lived intangibles</strong> (some trademarks, licences) are not amortised; they're tested at least annually by comparing fair value with carrying amount.</li>
</ul>

<h2>Private company alternatives</h2>
<p>Private companies may elect to <strong>amortise goodwill</strong> on a straight-line basis over 10 years (or less if more appropriate) and to test for impairment only when a triggering event occurs, at the entity or reporting unit level. They may also elect to evaluate triggering events only at the reporting date.</p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> A goodwill impairment loss can never be reversed under US GAAP — not even if the reporting unit's fair value recovers in the next quarter.</p>
</div>

<p>Continue with <a href="/cpa/far/intangible-assets-and-goodwill">FAR intangible assets and goodwill</a> and <a href="/blog/business-combinations-asc-805-consolidation-basics">business combinations under ASC 805</a>.</p>

${sources([
  FASB("350", "Intangibles — Goodwill and Other"),
  FASB("805", "Business Combinations"),
  FASB("360", "Property, Plant, and Equipment"),
  AICPA_BLUEPRINTS,
])}
`,
  },
  {
    slug: "business-combinations-asc-805-consolidation-basics",
    title: "Business Combinations Under ASC 805: Consolidation Basics",
    category: "Concepts Explained",
    excerpt:
      "The acquisition method step by step, non-controlling interest, acquisition costs, contingent consideration and the basic consolidation elimination — with a worked example.",
    crux: [
      "Acquisition method: Identify the acquirer, set the acquisition date, recognise and measure identifiable assets, liabilities and any non-controlling interest, then recognise goodwill or a bargain purchase gain.",
      "Fair value: Identifiable assets and liabilities are generally measured at acquisition-date fair value.",
      "Acquisition costs: Legal, advisory and valuation fees are expensed as incurred — they are not part of goodwill.",
      "Contingent consideration: Recognised at fair value on day one. Liability-classified amounts are remeasured through earnings; equity-classified amounts are not.",
      "Consolidation: Eliminate the parent's investment against the subsidiary's equity, step up net assets to fair value, recognise goodwill and NCI, and remove intercompany balances.",
    ],
    content: `
<h2>Is it a business?</h2>
<p>ASC 805 applies only if the acquired set is a <strong>business</strong>. A screen applies first: if substantially all of the fair value of the gross assets acquired is concentrated in a single identifiable asset or group of similar assets, the set is not a business and is accounted for as an <strong>asset acquisition</strong> (no goodwill; transaction costs capitalised).</p>

<h2>The acquisition method in four steps</h2>
<ol>
<li><strong>Identify the acquirer</strong> — the entity that obtains control.</li>
<li><strong>Determine the acquisition date</strong> — the date control is obtained, usually the closing date.</li>
<li><strong>Recognise and measure</strong> the identifiable assets acquired, liabilities assumed and any non-controlling interest (NCI), generally at fair value. This includes intangibles the acquiree never recorded, such as customer relationships and trade names.</li>
<li><strong>Recognise goodwill or a bargain purchase gain.</strong></li>
</ol>

<h2>Special rules</h2>
<table>
<thead><tr><th>Item</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Acquisition-related costs (legal, due diligence, valuation fees)</td><td>Expensed as incurred</td></tr>
<tr><td>Costs to issue debt or equity for the deal</td><td>Debt: reduce the carrying amount of the debt. Equity: reduce additional paid-in capital.</td></tr>
<tr><td>Contingent consideration (earn-outs)</td><td>Fair value at acquisition date, included in consideration. Liability-classified: remeasured each period through earnings. Equity-classified: not remeasured.</td></tr>
<tr><td>Measurement period</td><td>Up to one year to finalise provisional amounts, with adjustments recognised in the period they're determined</td></tr>
<tr><td>Previously held equity interest (step acquisition)</td><td>Remeasured to fair value at the acquisition date; gain or loss in earnings</td></tr>
<tr><td>Contracts with customers acquired</td><td>Measured under ASC 606 as if the acquirer had originated them (ASU 2021-08)</td></tr>
</tbody>
</table>

<h2>Worked example: consolidation on the acquisition date</h2>
<p>Parent acquires 80% of Sub for $800,000 cash. NCI fair value is $200,000. Sub's balance sheet shows net assets (book value) of $850,000: common stock $300,000 and retained earnings $550,000. Sub's land is undervalued by $50,000, so identifiable net assets at fair value are $900,000.</p>
<ul>
<li>Goodwill = $800,000 + $200,000 − $900,000 = <strong>$100,000</strong></li>
</ul>
<div class="callout callout-example">
<p><strong>Elimination entry:</strong> Dr Common stock (Sub) $300,000; Dr Retained earnings (Sub) $550,000; Dr Land $50,000; Dr Goodwill $100,000; Cr Investment in Sub $800,000; Cr Non-controlling interest $200,000.</p>
</div>
<p>After this entry, the consolidated balance sheet shows 100% of Sub's assets and liabilities (with land at fair value), goodwill of $100,000, and NCI of $200,000 presented within equity, separately from the parent's equity.</p>

<h2>After the acquisition date</h2>
<ul>
<li>Fair value step-ups are depreciated or amortised in consolidation (the land step-up here isn't, because land isn't depreciated).</li>
<li>Consolidated net income is attributed between the parent and the NCI.</li>
<li>All intercompany sales, receivables, payables, dividends and unrealised profits are eliminated — see our <a href="/blog/advanced-consolidation-intercompany-eliminations">advanced consolidation</a> guide.</li>
<li>Changes in the parent's ownership that don't lose control are equity transactions — no gain or loss.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> The subsidiary's pre-acquisition retained earnings never appear in consolidated retained earnings. Consolidated retained earnings on the acquisition date equal the parent's retained earnings.</p>
</div>

<p>Business combinations are tested in both FAR and the <a href="/cpa/bar">BAR</a> Discipline. Study the full topic in <a href="/cpa/far/business-combinations-and-consolidations">FAR business combinations and consolidations</a>.</p>

${sources([
  FASB("805", "Business Combinations"),
  FASB("810", "Consolidation"),
  AICPA_BLUEPRINTS,
])}
`,
  },
];
