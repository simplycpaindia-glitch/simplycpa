import type { SubjectSeed } from "./types";

export const bar: SubjectSeed = {
  slug: "bar",
  name: "Business Analysis and Reporting",
  shortName: "BAR",
  type: "DISCIPLINE",
  description:
    "BAR extends FAR into financial statement analysis, advanced technical accounting (business combinations, derivatives, pensions, leases from the lessor side), and state and local government reporting under GASB. It suits candidates heading toward financial reporting, valuation, or advisory work.",
  difficulty: "HARD",
  estimatedHours: 90,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/bar-cpa-exam-blueprint",
  order: 4,
  topics: [
    {
      slug: "financial-statement-analysis",
      title: "Financial Statement Analysis",
      shortDescription: "Ratio analysis, common-size statements, and evaluating liquidity, solvency, and profitability.",
      blueprintArea: "Area I: Business Analysis",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 65,
      order: 1,
      studyMaterialHtml: `
<h2>Three lenses on financial health</h2>
<table>
<thead><tr><th>Category</th><th>Key ratios</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Liquidity</td><td>Current ratio, quick ratio, working capital</td><td>Can the company meet short-term obligations?</td></tr>
<tr><td>Solvency</td><td>Debt-to-equity, times interest earned, debt-to-assets</td><td>Can the company meet long-term obligations?</td></tr>
<tr><td>Profitability</td><td>Gross margin, net margin, ROA, ROE</td><td>How efficiently does it generate profit?</td></tr>
<tr><td>Activity/efficiency</td><td>Inventory turnover, receivable turnover, asset turnover</td><td>How well are assets being used?</td></tr>
</tbody>
</table>

<h3>Key formulas</h3>
<ul>
<li><strong>Current ratio</strong> = Current assets ÷ Current liabilities</li>
<li><strong>Quick ratio</strong> = (Current assets − Inventory − Prepaids) ÷ Current liabilities</li>
<li><strong>Inventory turnover</strong> = COGS ÷ Average inventory (days = 365 ÷ turnover)</li>
<li><strong>Receivables turnover</strong> = Net credit sales ÷ Average receivables</li>
<li><strong>Return on equity</strong> = Net income ÷ Average stockholders' equity</li>
<li><strong>Times interest earned</strong> = EBIT ÷ Interest expense</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Current assets $500,000 (including $150,000 inventory and $20,000 prepaid), current liabilities $250,000. Current ratio = 2.0. Quick ratio = ($500,000 − $150,000 − $20,000) ÷ $250,000 = <strong>1.32</strong>.</p></div>

<h3>The DuPont framework</h3>
<div class="callout callout-important"><p><strong>ROE = Net profit margin × Asset turnover × Financial leverage</strong><br/>= (NI ÷ Sales) × (Sales ÷ Assets) × (Assets ÷ Equity)</p>
<p>This decomposition explains <em>why</em> ROE changed — better pricing/cost control (margin), better asset utilization (turnover), or simply more debt (leverage). Rising ROE driven purely by leverage signals increased risk, not improved performance.</p></div>

<h3>The operating cycle</h3>
<p><strong>Cash conversion cycle</strong> = Days inventory outstanding + Days sales outstanding − Days payables outstanding. A shorter cycle means cash returns to the business faster; a negative cycle (common in some retail models) means suppliers effectively finance operations.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Watch how a transaction affects a ratio. Paying a current liability with cash when the current ratio is already <em>above</em> 1.0 <strong>increases</strong> the ratio; doing so when it is <em>below</em> 1.0 <strong>decreases</strong> it. Exam questions love this asymmetry.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Current ratio = CA ÷ CL; Quick ratio excludes inventory & prepaids</li>
<li>ROE = NI ÷ Avg equity; <strong>DuPont: margin × turnover × leverage</strong></li>
<li>Times interest earned = EBIT ÷ Interest expense</li>
<li>Cash conversion cycle = DIO + DSO − DPO (shorter is better)</li>
<li>Paying a current liability raises the current ratio if it was &gt;1.0, lowers it if &lt;1.0</li>
<li>ROE rising only from leverage = more risk, not better performance</li>
</ul>
`,
      mcqs: [
        {
          question: "A company with a current ratio of 0.8 uses cash to pay off an accounts payable balance. What is the effect on the current ratio?",
          options: [
            { label: "A", text: "The current ratio increases", isCorrect: false, rationale: "That is the effect when the ratio is already above 1.0." },
            { label: "B", text: "The current ratio decreases", isCorrect: true, rationale: "Correct — when the current ratio is below 1.0, subtracting an equal amount from both current assets and current liabilities lowers the ratio further." },
            { label: "C", text: "The current ratio is unchanged", isCorrect: false, rationale: "Equal reductions to numerator and denominator change a ratio unless it equals exactly 1.0." },
            { label: "D", text: "The effect cannot be determined", isCorrect: false, rationale: "The direction is determinable from whether the starting ratio is above or below 1.0." },
          ],
          explanation: "Subtracting the same amount from both the numerator and denominator moves a ratio toward 1.0. Since the current ratio started at 0.8 (below 1.0), paying off a current liability moves it further down, away from where the company wants it.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["ratios", "liquidity"],
        },
        {
          question: "Under the DuPont framework, a company's ROE increased from 12% to 18%, driven entirely by an increase in the equity multiplier while margin and asset turnover were flat. What does this indicate?",
          options: [
            { label: "A", text: "Improved operating efficiency", isCorrect: false, rationale: "Operating efficiency would show up in asset turnover, which was unchanged." },
            { label: "B", text: "Increased financial leverage, and therefore increased financial risk", isCorrect: true, rationale: "Correct — a higher equity multiplier means more debt relative to equity; the ROE improvement reflects added leverage rather than better operations." },
            { label: "C", text: "Improved pricing power", isCorrect: false, rationale: "Pricing power would appear in net profit margin, which was flat." },
            { label: "D", text: "A reduction in the company's cost of capital", isCorrect: false, rationale: "More leverage typically increases financial risk and does not by itself imply a lower cost of capital." },
          ],
          explanation: "DuPont decomposes ROE into net profit margin, asset turnover, and financial leverage (equity multiplier). When ROE rises solely because of the equity multiplier, the company has simply taken on more debt — its underlying operating performance is unchanged and its financial risk has increased.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["DuPont", "ROE"],
        },
      ],
    },
    {
      slug: "business-combinations-advanced",
      title: "Business Combinations (Advanced)",
      shortDescription: "Step acquisitions, changes in ownership interest, intercompany eliminations, and consolidation mechanics.",
      blueprintArea: "Area II: Technical Accounting and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 75,
      order: 2,
      studyMaterialHtml: `
<h2>Consolidation fundamentals</h2>
<p>Consolidation is required when one entity has a <strong>controlling financial interest</strong> — typically majority voting interest, or being the primary beneficiary of a variable interest entity (VIE).</p>

<h3>What gets eliminated</h3>
<ul>
<li>The parent's investment account against the subsidiary's equity</li>
<li><strong>Intercompany receivables and payables</strong></li>
<li><strong>Intercompany sales and cost of sales</strong> (100%, even for partially owned subsidiaries)</li>
<li><strong>Unrealized profit</strong> in ending inventory and on intercompany fixed asset transfers, until realized through sale to an outside party</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Intercompany transactions are eliminated in <strong>full (100%)</strong>, not by ownership percentage. However, for <strong>upstream</strong> sales (subsidiary → parent), the eliminated unrealized profit is <em>allocated</em> between the controlling and noncontrolling interests. Downstream sales (parent → subsidiary) are allocated entirely to the controlling interest.</p></div>

<h3>Step acquisitions</h3>
<p>When control is achieved in stages, the acquirer <strong>remeasures its previously held equity interest to fair value</strong> at the acquisition date and recognizes the resulting gain or loss in earnings. Goodwill is then measured using the full acquisition-date fair values.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> An investor holds 30% of a company (carrying amount $3,000,000) and buys another 40% for $5,500,000, achieving control. The previously held 30% has a fair value of $4,000,000 at that date. The investor recognizes a <strong>$1,000,000 gain</strong> ($4,000,000 − $3,000,000) and measures the acquisition using $9,500,000 of total consideration plus the fair value of any noncontrolling interest.</p></div>

<h3>Changes in ownership after control</h3>
<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Once control exists, buying more shares or selling shares <em>without losing control</em> is an <strong>equity transaction</strong> — no gain or loss is recognized in income. The difference is recorded in additional paid-in capital. Only a transaction that <strong>results in loss of control</strong> triggers gain or loss recognition and remeasurement of any retained interest to fair value.</p></div>

<h3>Measurement period</h3>
<p>The acquirer has up to <strong>one year</strong> from the acquisition date to finalize provisional amounts as new information about facts existing at the acquisition date emerges. Adjustments are made retrospectively to goodwill, not through earnings.</p>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Consolidate on <strong>control</strong> (majority voting or VIE primary beneficiary)</li>
<li>Eliminate intercompany balances and transactions <strong>100%</strong>, regardless of ownership %</li>
<li>Upstream unrealized profit allocated between controlling and NCI; downstream entirely to controlling</li>
<li><strong>Step acquisition</strong>: remeasure previously held interest to FV → gain/loss to earnings</li>
<li>Ownership changes <strong>while retaining control</strong> = equity transaction (APIC), <strong>no gain/loss</strong></li>
<li><strong>Losing control</strong> = recognize gain/loss and remeasure retained interest to FV</li>
<li>Measurement period: up to 1 year, adjust goodwill retrospectively</li>
</ul>
`,
      mcqs: [
        {
          question: "A parent owning 80% of a subsidiary purchases an additional 10% from noncontrolling shareholders for an amount exceeding the carrying value of the interest acquired. How is the excess recorded?",
          options: [
            { label: "A", text: "As additional goodwill", isCorrect: false, rationale: "Goodwill is recognized only in a business combination that establishes control, not in subsequent purchases from NCI." },
            { label: "B", text: "As a reduction of additional paid-in capital (an equity transaction)", isCorrect: true, rationale: "Correct — transactions with noncontrolling shareholders that do not change control are accounted for in equity, with no gain, loss, or goodwill recognized." },
            { label: "C", text: "As a loss in the consolidated income statement", isCorrect: false, rationale: "No gain or loss is recognized when control is retained." },
            { label: "D", text: "As an increase in the investment account with no equity effect", isCorrect: false, rationale: "The investment account is eliminated in consolidation; the excess is an equity adjustment." },
          ],
          explanation: "Once a parent controls a subsidiary, changes in ownership percentage that do not result in a loss of control are equity transactions. Any difference between the consideration paid and the carrying amount of the noncontrolling interest acquired adjusts additional paid-in capital — no goodwill, gain, or loss arises.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["consolidation", "NCI"],
        },
      ],
    },
    {
      slug: "derivatives-and-hedge-accounting",
      title: "Derivatives & Hedge Accounting",
      shortDescription: "Derivative characteristics, fair value hedges, cash flow hedges, and where gains and losses are reported.",
      blueprintArea: "Area II: Technical Accounting and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 3,
      studyMaterialHtml: `
<h2>What makes something a derivative</h2>
<ol>
<li>One or more <strong>underlyings</strong> and a <strong>notional amount</strong></li>
<li><strong>Little or no initial net investment</strong> relative to contracts with similar response to market changes</li>
<li>Terms that require or permit <strong>net settlement</strong></li>
</ol>
<p>All derivatives are recorded on the balance sheet at <strong>fair value</strong>. The question is always <em>where the change in fair value goes</em>.</p>

<h3>The three hedge types</h3>
<table>
<thead><tr><th>Hedge type</th><th>Hedges against</th><th>Gain/loss on the derivative</th></tr></thead>
<tbody>
<tr><td><strong>Fair value hedge</strong></td><td>Changes in the fair value of a recognized asset/liability or firm commitment</td><td><strong>Earnings</strong> — offset by the loss/gain on the hedged item, also in earnings</td></tr>
<tr><td><strong>Cash flow hedge</strong></td><td>Variability in cash flows of a forecasted transaction or variable-rate item</td><td><strong>OCI</strong>, reclassified to earnings when the hedged transaction affects earnings</td></tr>
<tr><td><strong>Net investment hedge</strong></td><td>Currency exposure of a net investment in a foreign operation</td><td><strong>OCI</strong> (cumulative translation adjustment)</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Without hedge designation and documentation <em>at inception</em>, all changes in a derivative's fair value go straight to <strong>earnings</strong>. Hedge accounting is an election with strict documentation and effectiveness requirements — it is never automatic.</p></div>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company with variable-rate debt enters an interest rate swap to pay fixed and receive variable. This hedges <em>cash flow variability</em> → cash flow hedge → changes in the swap's fair value go to <strong>OCI</strong> and are reclassified to interest expense as the interest payments occur.</p></div>

<h3>Common derivative instruments</h3>
<ul>
<li><strong>Forward</strong> — customized private contract to buy/sell at a set price on a future date</li>
<li><strong>Future</strong> — standardized, exchange-traded, marked to market daily through a clearinghouse</li>
<li><strong>Option</strong> — the right, not the obligation, to buy (call) or sell (put)</li>
<li><strong>Swap</strong> — exchange of cash flow streams (e.g., fixed for variable interest)</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Ask what is being hedged. Hedging a <em>value</em> that's already on the balance sheet → fair value hedge → earnings. Hedging <em>future cash flows</em> that aren't recorded yet → cash flow hedge → OCI.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Derivative = underlying + notional, little/no initial net investment, net settlement</li>
<li>All derivatives on balance sheet at <strong>fair value</strong></li>
<li><strong>Fair value hedge → earnings</strong>; <strong>Cash flow hedge → OCI</strong> (reclassify later); <strong>Net investment hedge → OCI/CTA</strong></li>
<li>No designation/documentation at inception → everything to <strong>earnings</strong></li>
<li>Hedging a recorded value = FV hedge; hedging future cash flows = CF hedge</li>
</ul>
`,
      mcqs: [
        {
          question: "A company with variable-rate debt enters into an interest rate swap to pay fixed and receive variable, properly designated and documented as a hedge. Where are changes in the swap's fair value reported?",
          options: [
            { label: "A", text: "Earnings, as a fair value hedge", isCorrect: false, rationale: "This hedges variability in future interest cash flows, not the fair value of a recognized item." },
            { label: "B", text: "Other comprehensive income, as a cash flow hedge, reclassified to earnings as interest is recognized", isCorrect: true, rationale: "Correct — hedging the variability of cash flows on variable-rate debt is a cash flow hedge, so fair value changes go to OCI and are reclassified when the hedged interest affects earnings." },
            { label: "C", text: "Directly to retained earnings", isCorrect: false, rationale: "Derivative gains and losses never bypass income or OCI to go straight to retained earnings." },
            { label: "D", text: "Not recognized until the swap settles", isCorrect: false, rationale: "Derivatives are recognized at fair value each reporting period, not deferred until settlement." },
          ],
          explanation: "A pay-fixed/receive-variable swap on variable-rate debt converts variable cash flows to fixed — that is a cash flow hedge. Changes in the derivative's fair value are recorded in other comprehensive income and reclassified into earnings in the periods the hedged interest payments affect earnings.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["derivatives", "cash flow hedge"],
        },
      ],
    },
    {
      slug: "foreign-currency-translation",
      title: "Foreign Currency Translation",
      shortDescription: "Functional currency determination, translation vs. remeasurement, and where the resulting adjustment goes.",
      blueprintArea: "Area II: Technical Accounting and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 60,
      order: 4,
      studyMaterialHtml: `
<h2>The critical first question: what is the functional currency?</h2>
<p>The functional currency is the currency of the primary economic environment in which the entity operates — where it primarily generates and expends cash.</p>

<table>
<thead><tr><th></th><th>TRANSLATION</th><th>REMEASUREMENT</th></tr></thead>
<tbody>
<tr><td>When used</td><td>Functional currency = local currency (books already in functional currency)</td><td>Functional currency = reporting currency (books kept in a different currency), or highly inflationary economy</td></tr>
<tr><td>Method</td><td>Current rate method</td><td>Temporal method</td></tr>
<tr><td>Assets/liabilities</td><td>All at the <strong>current</strong> (year-end) rate</td><td>Monetary at <strong>current</strong>; nonmonetary at <strong>historical</strong></td></tr>
<tr><td>Income statement</td><td>Weighted average rate</td><td>Weighted average, except items tied to nonmonetary assets (COGS, depreciation) at historical</td></tr>
<tr><td>Equity</td><td>Historical rate</td><td>Historical rate</td></tr>
<tr><td>Adjustment goes to</td><td><strong>OCI</strong> (cumulative translation adjustment)</td><td><strong>Earnings</strong> (remeasurement gain/loss)</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT — the single most tested point:</strong> Translation adjustments go to <strong>OCI</strong>; remeasurement gains and losses go to <strong>net income</strong>. If you remember only one thing about this topic, remember that.</p></div>

<h3>Monetary vs. nonmonetary</h3>
<ul>
<li><strong>Monetary</strong> (current rate under temporal method): cash, receivables, payables, debt — fixed in units of currency</li>
<li><strong>Nonmonetary</strong> (historical rate): inventory at cost, PP&E, intangibles, prepaid expenses, equity, deferred revenue</li>
</ul>

<h3>Foreign currency transactions</h3>
<p>A transaction denominated in a foreign currency (e.g., a receivable payable in euros) is recorded at the spot rate on the transaction date, then <strong>remeasured at each balance sheet date</strong>, with the exchange gain or loss recognized in <strong>earnings</strong>.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A U.S. company sells goods for €100,000 when €1 = $1.10 (records $110,000 receivable). At year-end €1 = $1.15, so the receivable is remeasured to $115,000 and a <strong>$5,000 foreign exchange gain</strong> is recognized in earnings.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> In a <strong>highly inflationary</strong> economy (cumulative inflation of roughly 100% over three years), the subsidiary must use the reporting currency as its functional currency — which means <strong>remeasurement</strong> into earnings rather than translation into OCI.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>Translation</strong> (current rate method) → adjustment to <strong>OCI/CTA</strong></li>
<li><strong>Remeasurement</strong> (temporal method) → gain/loss to <strong>earnings</strong></li>
<li>Current rate method: all assets/liabilities at year-end rate, income at average, equity at historical</li>
<li>Temporal: monetary at current, <strong>nonmonetary at historical</strong> (inventory, PP&E, prepaid, equity)</li>
<li>Foreign currency <em>transactions</em> → exchange gain/loss to earnings</li>
<li>Highly inflationary economy → remeasure (earnings), don't translate</li>
</ul>
`,
      mcqs: [
        {
          question: "A foreign subsidiary maintains its books in its local currency, which is also determined to be its functional currency. How is the resulting adjustment from converting to the parent's reporting currency treated?",
          options: [
            { label: "A", text: "As a remeasurement gain or loss in net income", isCorrect: false, rationale: "Remeasurement applies when the functional currency differs from the recording currency; here they are the same." },
            { label: "B", text: "As a cumulative translation adjustment in other comprehensive income", isCorrect: true, rationale: "Correct — when the local currency is the functional currency, the current rate method is used and the resulting translation adjustment goes to OCI." },
            { label: "C", text: "As an adjustment to retained earnings", isCorrect: false, rationale: "Translation adjustments accumulate in OCI, not directly in retained earnings." },
            { label: "D", text: "It is not recognized until the subsidiary is sold", isCorrect: false, rationale: "The adjustment is recognized in OCI each period; it is reclassified to earnings only upon disposal of the foreign operation." },
          ],
          explanation: "When the functional currency is the local currency, financial statements are translated using the current rate method and the resulting adjustment is reported in other comprehensive income as a cumulative translation adjustment. Remeasurement gains and losses, by contrast, flow through net income.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["foreign currency", "translation"],
        },
      ],
    },
    {
      slug: "employee-benefit-plan-accounting",
      title: "Employee Benefit Plan Accounting",
      shortDescription: "Defined benefit pension accounting, funded status, and the components of net periodic pension cost.",
      blueprintArea: "Area II: Technical Accounting and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 5,
      studyMaterialHtml: `
<h2>Defined contribution vs. defined benefit</h2>
<ul>
<li><strong>Defined contribution</strong> — the employer promises a contribution; expense equals the contribution owed. Employee bears investment risk. Simple.</li>
<li><strong>Defined benefit</strong> — the employer promises a future benefit; the employer bears investment and actuarial risk. Complex accounting follows.</li>
</ul>

<h3>Funded status: the balance sheet number</h3>
<div class="callout callout-important"><p><strong>Funded status = Fair value of plan assets − Projected benefit obligation (PBO)</strong><br/>An <strong>overfunded</strong> plan (assets &gt; PBO) is a noncurrent asset; an <strong>underfunded</strong> plan is a liability. This full funded status must be recognized on the balance sheet.</p></div>

<h3>Net periodic pension cost — "SIRAGE"</h3>
<table>
<thead><tr><th>Component</th><th>Effect on cost</th></tr></thead>
<tbody>
<tr><td><strong>S</strong>ervice cost</td><td>Increase — the PV of benefits earned this period</td></tr>
<tr><td><strong>I</strong>nterest cost</td><td>Increase — beginning PBO × discount rate</td></tr>
<tr><td><strong>R</strong>eturn on plan assets (expected)</td><td>Decrease</td></tr>
<tr><td><strong>A</strong>mortization of prior service cost</td><td>Increase</td></tr>
<tr><td><strong>G</strong>ains and losses (amortization)</td><td>Either — via the corridor approach</td></tr>
<tr><td><strong>E</strong>xisting net obligation/asset at transition</td><td>Either</td></tr>
</tbody>
</table>

<h3>The obligation measures</h3>
<ul>
<li><strong>PBO</strong> — present value of benefits based on <em>projected future salary levels</em>; this is the balance sheet measure</li>
<li><strong>ABO</strong> — accumulated benefit obligation, based on <em>current salary levels</em></li>
<li><strong>VBO</strong> — the vested portion of the ABO</li>
</ul>
<p>PBO ≥ ABO ≥ VBO in a plan with expected salary growth.</p>

<h3>The corridor approach</h3>
<p>Actuarial gains and losses accumulate in OCI. Only the amount exceeding <strong>10% of the greater of beginning PBO or beginning plan assets</strong> must be amortized into pension expense, over the average remaining service period. This smooths volatility.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Prior service cost arises from a plan <strong>amendment</strong> granting credit for past service. It is recognized in <strong>OCI</strong> when it arises and amortized into expense over employees' remaining service periods — never expensed all at once.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>Funded status = Plan assets FV − PBO</strong>, recognized on the balance sheet</li>
<li>Net periodic pension cost = <strong>SIRAGE</strong>: Service, Interest, Return (expected, reduces), Amortization of prior service cost, Gains/losses, Existing transition amount</li>
<li>PBO uses <strong>projected</strong> salaries; ABO uses <strong>current</strong> salaries; PBO ≥ ABO ≥ VBO</li>
<li>Corridor: amortize gains/losses exceeding <strong>10% of greater of PBO or plan assets</strong></li>
<li>Prior service cost from amendments → OCI first, amortized to expense over service periods</li>
</ul>
`,
      mcqs: [
        {
          question: "A defined benefit plan has plan assets with a fair value of $8,000,000 and a projected benefit obligation of $9,500,000. How is this reported on the balance sheet?",
          options: [
            { label: "A", text: "A $1,500,000 noncurrent liability", isCorrect: true, rationale: "Correct — funded status is plan assets minus PBO: $8,000,000 − $9,500,000 = $(1,500,000), an underfunded position reported as a liability." },
            { label: "B", text: "A $1,500,000 noncurrent asset", isCorrect: false, rationale: "An asset arises only when plan assets exceed the PBO (overfunded)." },
            { label: "C", text: "$8,000,000 asset and $9,500,000 liability reported separately (gross)", isCorrect: false, rationale: "The funded status is reported net, not gross." },
            { label: "D", text: "No balance sheet recognition; disclosure only", isCorrect: false, rationale: "Full funded status must be recognized on the balance sheet." },
          ],
          explanation: "Employers must recognize the full funded status of a defined benefit plan on the balance sheet, measured as the fair value of plan assets minus the projected benefit obligation. Here the plan is underfunded by $1,500,000, producing a liability.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["pensions", "funded status"],
        },
      ],
    },
    {
      slug: "stock-compensation",
      title: "Stock Compensation",
      shortDescription: "Share-based payment accounting, grant-date fair value, and the effect of forfeitures and modifications.",
      blueprintArea: "Area II: Technical Accounting and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 6,
      studyMaterialHtml: `
<h2>The core model</h2>
<p>Equity-classified share-based payments are measured at <strong>grant-date fair value</strong> and recognized as compensation expense over the <strong>requisite service period</strong> (usually the vesting period). The grant-date measurement is <strong>not</strong> revisited for later changes in the share price.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> On January 1, a company grants options with a total grant-date fair value of $600,000, vesting over three years. Compensation expense is $200,000 per year (Dr. Compensation expense / Cr. APIC — Stock options), regardless of whether the stock price doubles or collapses in the meantime.</p></div>

<h3>Equity-classified vs. liability-classified</h3>
<table>
<thead><tr><th></th><th>Equity-classified</th><th>Liability-classified</th></tr></thead>
<tbody>
<tr><td>Examples</td><td>Stock options, restricted stock settled in shares</td><td>Cash-settled SARs, awards with certain repurchase features</td></tr>
<tr><td>Measurement</td><td><strong>Grant-date</strong> fair value, fixed</td><td><strong>Remeasured to fair value each reporting period</strong> until settlement</td></tr>
</tbody>
</table>

<h3>Vesting conditions</h3>
<ul>
<li><strong>Service condition</strong> — recognize over the service period</li>
<li><strong>Performance condition</strong> (e.g., achieving an earnings target) — recognize expense only if achievement is <em>probable</em>; reverse if it becomes improbable</li>
<li><strong>Market condition</strong> (e.g., share price target) — factored into the grant-date fair value. <strong>Expense is not reversed</strong> even if the market condition is never met, provided service is rendered</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> The market condition asymmetry is a favorite exam point. Fail a <em>performance</em> condition → reverse the expense. Fail a <em>market</em> condition → keep the expense, because the probability was already priced into the grant-date fair value.</p></div>

<h3>Forfeitures and modifications</h3>
<ul>
<li>An entity may elect to estimate forfeitures or account for them <strong>as they occur</strong>.</li>
<li>A <strong>modification</strong> is treated as an exchange: recognize incremental fair value (modified fair value minus original fair value immediately before modification) in addition to remaining unrecognized original cost.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> For an employee, exercising an <strong>incentive stock option (ISO)</strong> creates no regular taxable income but does create an AMT adjustment — connecting this BAR topic to REG/TCP.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Equity awards: <strong>grant-date fair value</strong>, expensed over requisite service period, never remeasured for price changes</li>
<li>Liability awards (cash-settled SARs): <strong>remeasured each period</strong></li>
<li>Performance condition not met → <strong>reverse</strong> expense; market condition not met → <strong>do not reverse</strong></li>
<li>Forfeitures: estimate or account for as they occur (policy election)</li>
<li>Modification → recognize <strong>incremental</strong> fair value plus remaining original cost</li>
</ul>
`,
      mcqs: [
        {
          question: "A company grants options that vest only if the share price reaches $50 within three years. The employees complete the service period, but the share price never reaches $50. How is compensation expense treated?",
          options: [
            { label: "A", text: "All previously recognized expense is reversed", isCorrect: false, rationale: "Reversal applies to performance conditions, not market conditions." },
            { label: "B", text: "The expense is retained, because a market condition is reflected in the grant-date fair value", isCorrect: true, rationale: "Correct — a market condition's probability is built into the grant-date fair value, so as long as the requisite service is rendered, the expense is not reversed even if the target is never achieved." },
            { label: "C", text: "Expense is recognized only when the share price target is achieved", isCorrect: false, rationale: "Expense is recognized over the service period regardless, since the condition is priced into fair value." },
            { label: "D", text: "The award is reclassified as a liability", isCorrect: false, rationale: "Failure to meet a market condition does not change the classification of the award." },
          ],
          explanation: "Market conditions (such as a share price target) are incorporated into the grant-date fair value measurement. Consequently, if employees render the required service, compensation cost is not reversed even when the market condition is never satisfied. Performance conditions behave differently — expense is reversed if achievement becomes improbable.",
          difficulty: "HARD",
          questionType: "EXCEPTION",
          tags: ["stock compensation", "market condition"],
        },
      ],
    },
    {
      slug: "revenue-for-specific-industries",
      title: "Revenue for Specific Arrangements",
      shortDescription: "Applying ASC 606 to long-term contracts, licensing, principal vs. agent, and variable consideration.",
      blueprintArea: "Area II: Technical Accounting and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 60,
      order: 7,
      studyMaterialHtml: `
<h2>Long-term contracts</h2>
<p>When a performance obligation is satisfied <strong>over time</strong>, revenue is recognized using a measure of progress:</p>
<ul>
<li><strong>Input methods</strong> — cost-to-cost (costs incurred ÷ total estimated costs), labor hours</li>
<li><strong>Output methods</strong> — units delivered, milestones achieved, surveys of performance</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE (cost-to-cost):</strong> Contract price $10,000,000; total estimated costs $8,000,000; costs incurred to date $2,000,000. Percentage complete = 25%. Revenue recognized to date = $2,500,000; gross profit to date = $500,000.</p></div>

<div class="callout callout-important"><p><strong>IMPORTANT — losses:</strong> An expected loss on the <strong>entire</strong> contract must be recognized <strong>immediately and in full</strong>, in the period it becomes evident — not spread over the remaining term. This is true whether revenue is recognized over time or at a point in time.</p></div>

<h3>Licensing</h3>
<table>
<thead><tr><th>License type</th><th>Recognition</th></tr></thead>
<tbody>
<tr><td><strong>Right to use</strong> — functional IP, static as of the transfer date (e.g., software, completed film)</td><td>Point in time</td></tr>
<tr><td><strong>Right to access</strong> — symbolic IP the entity continues to support (e.g., brand, franchise)</td><td>Over time</td></tr>
</tbody>
</table>
<p>Sales- or usage-based royalties on licenses of IP are recognized at the <strong>later</strong> of when the sale/usage occurs or when the related performance obligation is satisfied.</p>

<h3>Principal vs. agent</h3>
<p>The entity is a <strong>principal</strong> if it <strong>controls</strong> the good or service before transfer — indicators include primary responsibility for fulfillment, inventory risk, and discretion in setting prices. A principal reports revenue <strong>gross</strong>; an agent reports only its <strong>net</strong> commission.</p>

<h3>Contract modifications</h3>
<ul>
<li>Treated as a <strong>separate contract</strong> if it adds distinct goods/services at their standalone selling price</li>
<li>Otherwise, either a <strong>prospective</strong> adjustment (remaining goods are distinct) or a <strong>cumulative catch-up</strong> (single performance obligation partially satisfied)</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A <strong>contract asset</strong> arises when the entity performs before payment is unconditionally due (conditional right); a <strong>receivable</strong> arises when the right is unconditional. A <strong>contract liability</strong> is payment received in advance of performance.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Over-time measures: input (cost-to-cost) or output (units, milestones)</li>
<li><strong>Expected contract losses recognized immediately in full</strong></li>
<li>Right to <strong>use</strong> (functional IP) → point in time; right to <strong>access</strong> (symbolic IP) → over time</li>
<li>Sales/usage-based royalties → later of sale/usage or satisfying the obligation</li>
<li><strong>Principal (controls before transfer) → gross</strong>; agent → net commission</li>
<li>Contract asset = conditional right; receivable = unconditional; contract liability = paid in advance</li>
</ul>
`,
      mcqs: [
        {
          question: "A contractor's fixed-price contract of $5,000,000 now has total estimated costs of $5,600,000. Costs incurred to date are $2,800,000. How should the expected loss be recognized?",
          options: [
            { label: "A", text: "Recognize half the loss now and half in future periods, proportional to progress", isCorrect: false, rationale: "Anticipated contract losses are not allocated over time." },
            { label: "B", text: "Recognize the entire $600,000 expected loss immediately", isCorrect: true, rationale: "Correct — when a loss on the total contract becomes probable and estimable, the full expected loss is recognized in the period it becomes evident." },
            { label: "C", text: "Recognize the loss only when the contract is completed", isCorrect: false, rationale: "Deferring an expected loss to completion is not permitted." },
            { label: "D", text: "Do not recognize a loss because costs may still decrease", isCorrect: false, rationale: "Once a loss is expected on the overall contract, it must be recognized." },
          ],
          explanation: "When total estimated costs exceed the contract price, the entire anticipated loss ($5,600,000 − $5,000,000 = $600,000) is recognized immediately in the period the loss becomes evident, regardless of the stage of completion.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["revenue", "long-term contracts"],
        },
      ],
    },
    {
      slug: "lease-accounting-lessor",
      title: "Lease Accounting — Lessor Perspective",
      shortDescription: "Sales-type, direct financing, and operating lease classification and accounting for lessors.",
      blueprintArea: "Area II: Technical Accounting and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 60,
      order: 8,
      studyMaterialHtml: `
<h2>Lessor classification</h2>
<p>Apply the same five criteria used by lessees (ownership transfer, purchase option reasonably certain, major part of remaining economic life, PV of payments ≈ substantially all fair value, specialized asset with no alternative use):</p>

<table>
<thead><tr><th>If…</th><th>Classification</th></tr></thead>
<tbody>
<tr><td>Any of the five criteria is met</td><td><strong>Sales-type lease</strong></td></tr>
<tr><td>None met, but PV of payments + residual value guaranteed by a third party ≈ substantially all fair value <em>and</em> collection is probable</td><td><strong>Direct financing lease</strong></td></tr>
<tr><td>Neither of the above</td><td><strong>Operating lease</strong></td></tr>
</tbody>
</table>

<h3>Accounting by type</h3>
<table>
<thead><tr><th>Type</th><th>At commencement</th><th>Over the term</th></tr></thead>
<tbody>
<tr><td><strong>Sales-type</strong></td><td>Derecognize the asset; recognize a net investment in the lease and <strong>selling profit immediately</strong></td><td>Interest income using the effective interest method</td></tr>
<tr><td><strong>Direct financing</strong></td><td>Derecognize the asset; recognize net investment. Selling profit is <strong>deferred</strong> and recognized over the term</td><td>Interest income</td></tr>
<tr><td><strong>Operating</strong></td><td>Keep the asset on the books</td><td>Straight-line lease income; continue depreciating the asset</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT — the key difference:</strong> A sales-type lease recognizes <strong>selling profit up front</strong>; a direct financing lease <strong>defers it</strong> over the lease term. Both put a net investment in the lease on the lessor's balance sheet in place of the asset.</p></div>

<h3>Net investment in the lease</h3>
<p>Net investment = present value of lease payments + present value of the unguaranteed residual value, discounted at the rate implicit in the lease.</p>

<h3>Sale-leaseback</h3>
<p>A sale-leaseback qualifies as a sale only if the transfer meets the <strong>ASC 606 criteria for a sale</strong> (control transfers). If it does, the seller-lessee recognizes the gain or loss and accounts for the leaseback as a normal lease. If control does <em>not</em> transfer, the entire transaction is a <strong>financing arrangement</strong> — no sale, no gain, and the "proceeds" are recorded as debt.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A repurchase option held by the seller-lessee almost always prevents sale treatment, because control never really transferred.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Any of the 5 criteria met → <strong>sales-type</strong>; else PV test + probable collection → <strong>direct financing</strong>; else <strong>operating</strong></li>
<li><strong>Sales-type = selling profit recognized immediately</strong>; direct financing = profit <strong>deferred</strong> over the term</li>
<li>Operating lease: lessor keeps the asset, straight-line income, continues depreciation</li>
<li>Net investment = PV of lease payments + PV of unguaranteed residual</li>
<li>Sale-leaseback is a sale only if ASC 606 control transfers; otherwise it's a <strong>financing</strong> (no gain)</li>
</ul>
`,
      mcqs: [
        {
          question: "What is the primary accounting difference between a sales-type lease and a direct financing lease for a lessor?",
          options: [
            { label: "A", text: "Only a sales-type lease results in derecognition of the leased asset", isCorrect: false, rationale: "Both classifications derecognize the asset and replace it with a net investment in the lease." },
            { label: "B", text: "Selling profit is recognized immediately in a sales-type lease but deferred over the term in a direct financing lease", isCorrect: true, rationale: "Correct — this is the defining distinction between the two lessor finance-lease classifications." },
            { label: "C", text: "Only a direct financing lease produces interest income", isCorrect: false, rationale: "Both produce interest income on the net investment over the lease term." },
            { label: "D", text: "A direct financing lease keeps the asset on the lessor's balance sheet", isCorrect: false, rationale: "That describes an operating lease; direct financing leases derecognize the asset." },
          ],
          explanation: "Both sales-type and direct financing leases remove the underlying asset and record a net investment in the lease, earning interest income over the term. The difference is the treatment of selling profit: recognized immediately in a sales-type lease, and deferred and recognized over the lease term in a direct financing lease.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["leases", "lessor"],
        },
      ],
    },
    {
      slug: "financial-forecasting-and-projections",
      title: "Financial Forecasting, Budgeting & Valuation",
      shortDescription: "Building forecasts, budget variance analysis, cost-volume-profit, and business valuation approaches.",
      blueprintArea: "Area I: Business Analysis",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 9,
      studyMaterialHtml: `
<h2>Cost-volume-profit</h2>
<ul>
<li><strong>Contribution margin</strong> = Sales − Variable costs</li>
<li><strong>Contribution margin ratio</strong> = CM ÷ Sales</li>
<li><strong>Breakeven in units</strong> = Fixed costs ÷ CM per unit</li>
<li><strong>Breakeven in dollars</strong> = Fixed costs ÷ CM ratio</li>
<li><strong>Target profit units</strong> = (Fixed costs + Target profit) ÷ CM per unit</li>
<li><strong>Margin of safety</strong> = Actual (or budgeted) sales − Breakeven sales</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Price $50, variable cost $30, fixed costs $200,000. CM per unit = $20, CM ratio = 40%. Breakeven = 10,000 units, or $500,000 of sales. To earn $60,000 of profit: ($200,000 + $60,000) ÷ $20 = <strong>13,000 units</strong>.</p></div>

<h3>Variance analysis</h3>
<table>
<thead><tr><th>Variance</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Direct material price</td><td>(Actual price − Standard price) × Actual quantity purchased</td></tr>
<tr><td>Direct material quantity</td><td>(Actual quantity used − Standard quantity allowed) × Standard price</td></tr>
<tr><td>Direct labor rate</td><td>(Actual rate − Standard rate) × Actual hours</td></tr>
<tr><td>Direct labor efficiency</td><td>(Actual hours − Standard hours allowed) × Standard rate</td></tr>
</tbody>
</table>
<p>Memory aid: the <strong>price/rate</strong> variance uses <em>actual</em> quantity; the <strong>quantity/efficiency</strong> variance uses <em>standard</em> price.</p>

<h3>Valuation approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Method</th></tr></thead>
<tbody>
<tr><td><strong>Income</strong></td><td>Discounted cash flow — project free cash flows, discount at WACC, add terminal value</td></tr>
<tr><td><strong>Market</strong></td><td>Multiples of comparable companies or transactions (EV/EBITDA, P/E)</td></tr>
<tr><td><strong>Asset</strong></td><td>Adjusted net asset value — useful for holding companies and liquidation scenarios</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>WACC</strong> = (E/V × Cost of equity) + (D/V × Cost of debt × (1 − tax rate)). The after-tax adjustment applies <strong>only to debt</strong>, because interest is tax-deductible while dividends are not.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> In a DCF, the <strong>terminal value</strong> often represents the majority of total value, so small changes in the growth rate or discount rate move the answer dramatically. Perpetuity growth formula: TV = CF<sub>n+1</sub> ÷ (WACC − g).</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>CM = Sales − VC; <strong>Breakeven units = FC ÷ CM per unit</strong>; breakeven $ = FC ÷ CM ratio</li>
<li>Target profit units = (FC + target profit) ÷ CM per unit</li>
<li>Price/rate variance uses <strong>actual</strong> quantity; quantity/efficiency variance uses <strong>standard</strong> price</li>
<li>Valuation: income (DCF), market (multiples), asset (adjusted net assets)</li>
<li><strong>WACC</strong> = E/V × Re + D/V × Rd × (1 − t) — tax shield applies only to debt</li>
<li>Terminal value = CF<sub>n+1</sub> ÷ (WACC − g); dominates DCF value</li>
</ul>
`,
      mcqs: [
        {
          question: "A product sells for $80 with variable costs of $50 per unit. Fixed costs are $360,000. How many units must be sold to earn a target operating profit of $90,000?",
          options: [
            { label: "A", text: "12,000 units", isCorrect: false, rationale: "This is the breakeven volume ($360,000 ÷ $30), which ignores the target profit." },
            { label: "B", text: "15,000 units", isCorrect: true, rationale: "Correct — contribution margin per unit is $80 − $50 = $30. ($360,000 + $90,000) ÷ $30 = 15,000 units." },
            { label: "C", text: "5,625 units", isCorrect: false, rationale: "This incorrectly divides by the selling price rather than the contribution margin." },
            { label: "D", text: "18,000 units", isCorrect: false, rationale: "This overstates the requirement; the correct calculation yields 15,000 units." },
          ],
          explanation: "Contribution margin per unit is $80 − $50 = $30. Units needed for a target profit equal (fixed costs + target profit) ÷ contribution margin per unit = ($360,000 + $90,000) ÷ $30 = 15,000 units.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["CVP", "breakeven"],
        },
      ],
    },
    {
      slug: "data-analytics-for-accounting",
      title: "Data Analytics for Accounting",
      shortDescription: "Types of analytics, data visualization, and using analytics to support financial reporting decisions.",
      blueprintArea: "Area I: Business Analysis",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 45,
      order: 10,
      studyMaterialHtml: `
<h2>Four types of analytics</h2>
<table>
<thead><tr><th>Type</th><th>Question answered</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Descriptive</strong></td><td>What happened?</td><td>Revenue by region last quarter</td></tr>
<tr><td><strong>Diagnostic</strong></td><td>Why did it happen?</td><td>Margin decline traced to a specific product line's input costs</td></tr>
<tr><td><strong>Predictive</strong></td><td>What is likely to happen?</td><td>Forecasting bad debt using aging and macro data</td></tr>
<tr><td><strong>Prescriptive</strong></td><td>What should we do?</td><td>Optimal pricing or inventory reorder recommendation</td></tr>
</tbody>
</table>

<h3>The analytics process</h3>
<ol>
<li>Define the question</li>
<li>Obtain and <strong>validate</strong> the data (completeness and accuracy are essential — garbage in, garbage out)</li>
<li>Clean and transform (handle duplicates, missing values, inconsistent formats)</li>
<li>Analyze</li>
<li>Communicate results and act</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Analytics identify <strong>anomalies and patterns</strong>, not conclusions. An outlier is a starting point for investigation — it is not, by itself, evidence of error or fraud. Professional judgment still determines what the finding means.</p></div>

<h3>Choosing a visualization</h3>
<table>
<thead><tr><th>Purpose</th><th>Chart</th></tr></thead>
<tbody>
<tr><td>Trend over time</td><td>Line chart</td></tr>
<tr><td>Comparison across categories</td><td>Bar/column chart</td></tr>
<tr><td>Relationship between two variables</td><td>Scatter plot</td></tr>
<tr><td>Composition of a whole</td><td>Stacked bar (pie charts are generally discouraged beyond a few categories)</td></tr>
<tr><td>Distribution</td><td>Histogram or box plot</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> <strong>Structured</strong> data fits neatly in rows and columns (the general ledger); <strong>unstructured</strong> data does not (emails, contracts, images). Much of the value in modern analytics comes from combining the two.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>Descriptive</strong> (what happened) → <strong>Diagnostic</strong> (why) → <strong>Predictive</strong> (what will) → <strong>Prescriptive</strong> (what to do)</li>
<li>Process: define question → obtain & validate data → clean/transform → analyze → communicate</li>
<li>Analytics flag anomalies; <strong>judgment</strong> determines meaning</li>
<li>Line = trend; bar = comparison; scatter = relationship; histogram = distribution</li>
<li>Structured = rows/columns (GL); unstructured = emails, contracts, images</li>
</ul>
`,
      mcqs: [
        {
          question: "An analyst builds a model that recommends the optimal inventory reorder quantity for each SKU based on demand forecasts and carrying costs. What type of analytics is this?",
          options: [
            { label: "A", text: "Descriptive analytics", isCorrect: false, rationale: "Descriptive analytics summarizes what already happened." },
            { label: "B", text: "Diagnostic analytics", isCorrect: false, rationale: "Diagnostic analytics explains why something happened." },
            { label: "C", text: "Prescriptive analytics", isCorrect: true, rationale: "Correct — recommending a specific course of action (the optimal reorder quantity) is prescriptive analytics." },
            { label: "D", text: "Predictive analytics", isCorrect: false, rationale: "Predictive analytics forecasts what is likely to happen; here the model goes further and recommends what to do about it." },
          ],
          explanation: "Prescriptive analytics goes beyond forecasting to recommend a specific action. Predicting demand would be predictive; using that prediction plus cost data to recommend the optimal order quantity is prescriptive.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["data analytics"],
        },
      ],
    },
    {
      slug: "governmental-fund-accounting",
      title: "Governmental Fund Accounting",
      shortDescription: "Fund types, modified accrual basis, and the measurement focus of governmental funds.",
      blueprintArea: "Area III: State and Local Governments",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 70,
      order: 11,
      studyMaterialHtml: `
<h2>Eleven fund types in three categories</h2>
<table>
<thead><tr><th>Category</th><th>Funds</th><th>Basis / measurement focus</th></tr></thead>
<tbody>
<tr><td><strong>Governmental</strong></td><td>General, Special Revenue, Capital Projects, Debt Service, Permanent</td><td><strong>Modified accrual</strong>; current financial resources</td></tr>
<tr><td><strong>Proprietary</strong></td><td>Enterprise, Internal Service</td><td><strong>Full accrual</strong>; economic resources</td></tr>
<tr><td><strong>Fiduciary</strong></td><td>Pension trust, Investment trust, Private-purpose trust, Custodial</td><td><strong>Full accrual</strong>; economic resources</td></tr>
</tbody>
</table>

<h3>Modified accrual</h3>
<ul>
<li><strong>Revenues</strong> recognized when <strong>measurable and available</strong> — collectible within the period or soon enough after to pay current-period liabilities (commonly interpreted as within 60 days)</li>
<li><strong>Expenditures</strong> (not "expenses") recognized when the related fund liability is incurred</li>
<li><strong>No long-term assets or long-term liabilities</strong> on the governmental fund balance sheet</li>
<li>Capital asset purchases are recorded as <strong>expenditures</strong>; debt proceeds are <strong>other financing sources</strong></li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> The vocabulary is the tell. "Expenditures," "other financing sources/uses," and "fund balance" signal <strong>governmental funds / modified accrual</strong>. "Expenses," "net position," and depreciation signal <strong>proprietary funds or government-wide statements / full accrual</strong>.</p></div>

<h3>Budgetary accounting and encumbrances</h3>
<p>Governments record the budget: <em>Dr. Estimated Revenues, Cr. Appropriations</em>, with the difference to Budgetary Fund Balance. When a purchase order is issued, an <strong>encumbrance</strong> is recorded to reserve the appropriation; when the goods arrive, the encumbrance is reversed and the actual expenditure recorded.</p>

<h3>Fund balance classifications</h3>
<ol>
<li><strong>Nonspendable</strong> — inventory, prepaid items, permanent fund principal</li>
<li><strong>Restricted</strong> — constrained externally (creditors, grantors, law)</li>
<li><strong>Committed</strong> — constrained by the government's highest decision-making authority</li>
<li><strong>Assigned</strong> — intended for a purpose but less formal</li>
<li><strong>Unassigned</strong> — the residual (only the General Fund normally reports a positive unassigned balance)</li>
</ol>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The <strong>General Fund</strong> accounts for everything not required to be in another fund — there is exactly one, and it always exists.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Governmental funds (General, Special Revenue, Capital Projects, Debt Service, Permanent) → <strong>modified accrual</strong>, current financial resources</li>
<li>Proprietary (Enterprise, Internal Service) and Fiduciary → <strong>full accrual</strong></li>
<li>Modified accrual revenue = <strong>measurable and available</strong> (~60 days); <strong>expenditures</strong>, not expenses</li>
<li>No long-term assets/liabilities in governmental funds; capital purchases = expenditures</li>
<li>Fund balance: <strong>Nonspendable, Restricted, Committed, Assigned, Unassigned</strong></li>
<li>Encumbrance reserves an appropriation when a PO is issued; reversed on receipt</li>
</ul>
`,
      mcqs: [
        {
          question: "A city's General Fund purchases a fire truck for $400,000 cash. How is this recorded in the General Fund?",
          options: [
            { label: "A", text: "As a capital asset, depreciated over its useful life", isCorrect: false, rationale: "Governmental funds use the current financial resources measurement focus and do not report capital assets or depreciation." },
            { label: "B", text: "As an expenditure of $400,000", isCorrect: true, rationale: "Correct — under modified accrual with a current financial resources focus, the entire cost is recorded as a capital outlay expenditure in the year of purchase." },
            { label: "C", text: "As an other financing use", isCorrect: false, rationale: "Other financing uses cover items like transfers out and debt issuance-related items, not the direct purchase of an asset." },
            { label: "D", text: "As a prepaid asset amortized over the truck's life", isCorrect: false, rationale: "No such treatment exists for capital purchases in governmental funds." },
          ],
          explanation: "Governmental funds use the current financial resources measurement focus and modified accrual basis. Capital assets are not reported in the fund; the purchase is recorded entirely as an expenditure. The truck would, however, appear as a capital asset in the government-wide statements, which use full accrual.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["governmental", "modified accrual"],
        },
      ],
    },
    {
      slug: "government-wide-financial-statements",
      title: "Government-Wide Statements & the ACFR",
      shortDescription: "The dual-perspective model, converting fund statements to government-wide, and ACFR components.",
      blueprintArea: "Area III: State and Local Governments",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 12,
      studyMaterialHtml: `
<h2>The dual-perspective model (GASB 34)</h2>
<p>Governments present two very different views of the same activity:</p>
<ul>
<li><strong>Fund financial statements</strong> — governmental funds on modified accrual, showing short-term fiscal accountability</li>
<li><strong>Government-wide statements</strong> — everything on <strong>full accrual</strong>, showing long-term operational accountability</li>
</ul>
<p>Government-wide statements consist of the <strong>Statement of Net Position</strong> and the <strong>Statement of Activities</strong>, separated into <em>governmental activities</em>, <em>business-type activities</em>, and <em>component units</em>. Fiduciary funds are <strong>excluded</strong> from government-wide statements because those resources don't belong to the government.</p>

<h3>The required reconciliation</h3>
<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Because the two perspectives use different bases, GASB requires a <strong>reconciliation</strong> from total governmental fund balance to government-wide net position. Typical adjustments:</p>
<ul>
<li><strong>Add</strong> capital assets (net of accumulated depreciation) — expensed in the funds, capitalized government-wide</li>
<li><strong>Subtract</strong> long-term liabilities (bonds payable, compensated absences, net pension liability) — not reported in the funds</li>
<li><strong>Add</strong> deferred inflows/outflows and internal service fund net position as applicable</li>
<li><strong>Adjust</strong> revenues deferred under the "available" criterion but earned under full accrual</li>
</ul></div>

<h3>Statement of Activities</h3>
<p>Presented in a distinctive <strong>net (expense) revenue</strong> format: program expenses are reduced by program revenues (charges for services, operating grants, capital grants) to show the net cost of each function. General revenues — notably <strong>taxes</strong> — are then reported at the bottom, because they support the government as a whole rather than a single function.</p>

<h3>Components of the ACFR</h3>
<ol>
<li><strong>Introductory section</strong> — letter of transmittal (unaudited)</li>
<li><strong>Financial section</strong> — auditor's report, <strong>MD&A</strong> (required supplementary information), basic financial statements (government-wide + fund + notes), other RSI including budgetary comparison</li>
<li><strong>Statistical section</strong> — 10-year trend data (unaudited)</li>
</ol>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> MD&A comes <em>before</em> the basic financial statements and is <strong>required supplementary information</strong> — not part of the basic statements themselves. Budgetary comparison schedules are also RSI.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Government-wide = <strong>full accrual</strong>: Statement of Net Position + Statement of Activities</li>
<li>Split into governmental activities, business-type activities, component units; <strong>fiduciary funds excluded</strong></li>
<li>Reconciliation fund balance → net position: <strong>add capital assets</strong>, <strong>subtract long-term liabilities</strong>, adjust deferred items</li>
<li>Statement of Activities uses <strong>net (expense) revenue</strong> format; taxes are general revenues at the bottom</li>
<li>ACFR = Introductory + Financial (auditor's report, MD&A, basic statements, RSI) + Statistical</li>
<li><strong>MD&A is RSI</strong>, presented before the basic statements</li>
</ul>
`,
      mcqs: [
        {
          question: "In reconciling total governmental fund balances to net position of governmental activities, which adjustment is required?",
          options: [
            { label: "A", text: "Subtract capital assets, because they are not financial resources", isCorrect: false, rationale: "Capital assets must be added, since the funds expensed them but government-wide statements capitalize them." },
            { label: "B", text: "Add capital assets net of accumulated depreciation and subtract long-term liabilities", isCorrect: true, rationale: "Correct — governmental funds report neither capital assets nor long-term debt, so both must be brought in to reach full accrual net position." },
            { label: "C", text: "Add long-term liabilities such as bonds payable", isCorrect: false, rationale: "Long-term liabilities reduce net position and must be subtracted, not added." },
            { label: "D", text: "No reconciliation is required because both use the same basis of accounting", isCorrect: false, rationale: "The two use different bases — modified accrual versus full accrual — which is exactly why a reconciliation is required." },
          ],
          explanation: "Governmental funds use modified accrual and the current financial resources focus, so they exclude capital assets and long-term liabilities. Converting to government-wide net position requires adding capital assets (net of depreciation) and subtracting long-term liabilities, among other adjustments.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["governmental", "reconciliation", "GASB 34"],
        },
        {
          question: "Which fund type is EXCLUDED from the government-wide financial statements?",
          options: [
            { label: "A", text: "Enterprise funds", isCorrect: false, rationale: "Enterprise funds are reported within business-type activities." },
            { label: "B", text: "Fiduciary funds", isCorrect: true, rationale: "Correct — fiduciary resources are held for others and are not available to support the government's own programs, so they are excluded from the government-wide statements." },
            { label: "C", text: "Internal service funds", isCorrect: false, rationale: "Internal service funds are generally consolidated into governmental activities." },
            { label: "D", text: "Special revenue funds", isCorrect: false, rationale: "Special revenue funds are governmental funds reported within governmental activities." },
          ],
          explanation: "Fiduciary funds — pension trust, investment trust, private-purpose trust, and custodial funds — hold resources for the benefit of parties outside the government. Because those resources cannot be used to support the government's own programs, they are excluded from the government-wide statements while still being presented in the fund financial statements.",
          difficulty: "MEDIUM",
          questionType: "EXCEPTION",
          tags: ["governmental", "fund types"],
        },
      ],
    },
    {
      slug: "public-company-reporting-topics",
      title: "Public Company Reporting Topics",
      shortDescription: "Segment reporting, interim reporting, and SEC filing requirements for registrants.",
      blueprintArea: "Area II: Technical Accounting and Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 13,
      studyMaterialHtml: `
<h2>Segment reporting</h2>
<p>An <strong>operating segment</strong> is a component that earns revenues and incurs expenses, whose results are <strong>regularly reviewed by the chief operating decision maker (CODM)</strong>, and for which discrete financial information is available.</p>

<h3>The 10% quantitative thresholds</h3>
<p>A segment is reportable if it meets <strong>any one</strong> of:</p>
<ul>
<li>Revenue (including intersegment) ≥ 10% of combined revenue</li>
<li>Absolute profit or loss ≥ 10% of the greater of combined profit of profitable segments or combined loss of losing segments</li>
<li>Assets ≥ 10% of combined assets</li>
</ul>
<p>Then apply the <strong>75% test</strong>: reportable segments must account for at least 75% of consolidated <em>external</em> revenue; if not, add segments until they do.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company has combined segment assets of $50,000,000. A segment with $6,000,000 of assets (12%) is reportable on the asset test alone, even if its revenue and profit are small.</p></div>

<h3>Interim reporting — the integral view</h3>
<div class="callout callout-important"><p><strong>IMPORTANT:</strong> US GAAP treats each interim period as an <strong>integral part</strong> of the annual period. Costs benefiting the whole year (annual property taxes, planned major maintenance, bonuses) are allocated across interim periods rather than expensed entirely when incurred. Income tax expense uses the <strong>estimated annual effective tax rate</strong> applied to year-to-date income.</p></div>

<h3>Key SEC filings</h3>
<table>
<thead><tr><th>Form</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><strong>10-K</strong></td><td>Annual report — audited financial statements</td></tr>
<tr><td><strong>10-Q</strong></td><td>Quarterly report — reviewed (not audited) statements</td></tr>
<tr><td><strong>8-K</strong></td><td>Current report for material events (auditor change, bankruptcy, major acquisition)</td></tr>
<tr><td><strong>S-1</strong></td><td>Registration statement for new securities</td></tr>
<tr><td><strong>Schedule 14A</strong></td><td>Proxy statement</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Filing deadlines depend on filer status — large accelerated filers have the shortest deadlines, non-accelerated filers the longest. A LIFO liquidation expected to be replaced by year-end is not treated as a permanent interim gain; the expected replacement cost is used instead.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Operating segment = CODM regularly reviews + discrete financial information available</li>
<li>Reportable if <strong>any one</strong> of revenue / profit-loss / assets ≥ <strong>10%</strong> of combined</li>
<li><strong>75% test</strong>: reportable segments must cover ≥75% of consolidated external revenue</li>
<li>Interim = <strong>integral view</strong>; allocate annual costs; tax uses estimated annual effective rate</li>
<li>10-K annual (audited), 10-Q quarterly (reviewed), 8-K material events, S-1 registration</li>
</ul>
`,
      mcqs: [
        {
          question: "A company has combined segment assets of $80,000,000. One segment has revenue of 6% of combined revenue, a loss equal to 4% of the relevant profit/loss benchmark, and assets of $9,000,000. Is the segment reportable?",
          options: [
            { label: "A", text: "No, because it fails both the revenue and profit tests", isCorrect: false, rationale: "The tests are applied independently — meeting any single one makes the segment reportable." },
            { label: "B", text: "Yes, because its assets are 11.25% of combined assets, exceeding the 10% threshold", isCorrect: true, rationale: "Correct — $9,000,000 ÷ $80,000,000 = 11.25%. Meeting the asset test alone makes the segment reportable regardless of the revenue and profit results." },
            { label: "C", text: "No, because a segment must meet at least two of the three tests", isCorrect: false, rationale: "Only one of the three quantitative thresholds needs to be satisfied." },
            { label: "D", text: "Only if the 75% test would otherwise not be met", isCorrect: false, rationale: "The 75% test adds segments when needed; it does not override a segment that already qualifies." },
          ],
          explanation: "A segment is reportable if it meets any one of the three 10% thresholds (revenue, absolute profit or loss, or assets). With assets of $9,000,000 against combined assets of $80,000,000 — 11.25% — the asset test alone makes this segment reportable.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["segment reporting"],
        },
      ],
    },
  ],
};
