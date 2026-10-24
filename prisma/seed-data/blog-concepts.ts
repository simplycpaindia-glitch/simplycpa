import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

/**
 * "Famous concepts" series — ten well-known accounting, audit and finance ideas
 * explained simply, with worked numbers and practice MCQs. Every figure in the
 * examples has been recomputed by hand; keep them consistent if you edit.
 */

const FASB = (topic: string, title: string): [string, string] => [
  `FASB — ASC ${topic}, ${title}`,
  `https://asc.fasb.org/${topic}`,
];
const AICPA_BLUEPRINTS: [string, string] = [
  "AICPA & CIMA — CPA Exam Blueprints",
  "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam",
];
const CON8: [string, string] = [
  "FASB — Concepts Statement No. 8, Conceptual Framework for Financial Reporting (as amended)",
  "https://storage.fasb.org/Concepts_Statement_No._8_(As_Amended).pdf",
];
const PCAOB_STANDARDS: [string, string] = [
  "PCAOB — Auditing Standards (including AS 1000, General Responsibilities of the Auditor)",
  "https://pcaobus.org/oversight/standards/auditing-standards",
];
const COSO_IC: [string, string] = ["COSO — Internal Control — Integrated Framework", "https://www.coso.org/guidance-on-ic"];

export const conceptPosts: BlogSeed[] = [
  {
    slug: "time-value-of-money-present-value-explained",
    title: "Time Value of Money: Present Value, Future Value and Annuities Explained",
    category: "Concepts Explained",
    excerpt:
      "Why a dollar today is worth more than a dollar next year — present value, future value, ordinary annuities vs annuities due, and how the CPA Exam uses them for bonds and leases.",
    crux: [
      "Big idea: Money available now can earn a return, so it's worth more than the same amount received later.",
      "Present value: Discount a future amount back to today — PV = FV ÷ (1 + r)ⁿ.",
      "Future value: Grow today's amount forward — FV = PV × (1 + r)ⁿ.",
      "Annuities: An ordinary annuity pays at the end of each period; an annuity due pays at the start, so it's worth more (× (1 + r)).",
      "On the exam: Bond prices, lease liabilities and long-term notes are all present values of future cash flows.",
    ],
    content: `
<h2>The idea in one sentence</h2>
<p>₹1 or $1 you hold today can be invested and earn interest, so it is worth more than the same amount promised a year from now. <strong>Time value of money</strong> is simply the arithmetic for comparing amounts that arrive at different times.</p>

<h2>Future value and present value</h2>
<ul>
<li><strong>Future value (FV)</strong> — what an amount grows to: <em>FV = PV × (1 + r)ⁿ</em>.</li>
<li><strong>Present value (PV)</strong> — what a future amount is worth today: <em>PV = FV ÷ (1 + r)ⁿ</em>.</li>
</ul>
<p>Here <em>r</em> is the interest (discount) rate per period and <em>n</em> is the number of periods. The higher the rate or the longer the wait, the smaller the present value.</p>

<div class="callout callout-example">
<p><strong>Future value:</strong> $5,000 invested at 6% for 4 years grows to $5,000 × 1.06⁴ = $5,000 × 1.262477 = <strong>$6,312.38</strong>.<br>
<strong>Present value:</strong> $10,000 received in 3 years, discounted at 8%, is worth $10,000 ÷ 1.08³ = $10,000 ÷ 1.259712 = <strong>$7,938.32</strong> today.</p>
</div>

<h2>Annuities: a series of equal payments</h2>
<ul>
<li><strong>Ordinary annuity (in arrears)</strong> — payments at the <em>end</em> of each period. Bond interest is the classic example.</li>
<li><strong>Annuity due (in advance)</strong> — payments at the <em>start</em> of each period. Rent and many lease payments work this way.</li>
</ul>
<p>Because each payment of an annuity due arrives one period earlier, its present value is the ordinary-annuity value × (1 + r).</p>
<div class="callout callout-example">
<p>$1,000 a year for 5 years at 10%.<br>
Ordinary annuity factor = 3.79079, so PV = <strong>$3,790.79</strong>.<br>
Annuity due factor = 3.79079 × 1.10 = 4.16987, so PV = <strong>$4,169.87</strong>.</p>
</div>

<h2>Where the CPA Exam uses it</h2>
<ul>
<li><strong>Bond pricing</strong> — issue price = PV of the face amount + PV of the interest payments, both at the <em>market</em> rate.</li>
<li><strong>Leases</strong> — the lease liability is the PV of the remaining lease payments (see our <a href="/cpa/far/leases">leases</a> notes).</li>
<li><strong>Notes with no or unreasonably low stated interest</strong> — recorded at present value, with interest imputed at a market rate (ASC 835-30).</li>
<li><strong>Capital budgeting in BAR</strong> — net present value and internal rate of return are built on the same discounting.</li>
</ul>
<p>The exam usually gives you factor tables, so the skill being tested is choosing the <em>right</em> factor: single sum or annuity, ordinary or due, and the market rate rather than the coupon rate.</p>

<h2>Practice MCQs</h2>
<div class="callout callout-example">
<p><strong>1.</strong> A company issues a 3-year, $100,000 bond paying 5% interest annually when the market rate is 6%. PV of $1 for 3 periods at 6% = 0.839619; PV of an ordinary annuity of $1 for 3 periods at 6% = 2.673012. What is the issue price?<br>
(A) $100,000 (B) $97,327 (C) $102,723 (D) $83,962<br>
<strong>Answer: B.</strong> Principal $100,000 × 0.839619 = $83,961.90; interest $5,000 × 2.673012 = $13,365.06; total ≈ $97,327 — a discount, because the coupon rate is below the market rate.</p>
<p><strong>2.</strong> Which is worth more today at a positive interest rate: five $1,000 payments at the start of each year, or five $1,000 payments at the end of each year?<br>
(A) Start of each year (B) End of each year (C) They're equal (D) It depends on the inflation rate<br>
<strong>Answer: A.</strong> An annuity due receives every payment one period sooner.</p>
</div>

<p>Bond accounting is covered in full in our <a href="/cpa/far/long-term-debt">FAR long-term debt</a> notes.</p>

${sources([FASB("835-30", "Interest — Imputation of Interest"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "fifo-vs-lifo-vs-weighted-average",
    title: "FIFO vs LIFO vs Weighted Average: Inventory Costing With One Example",
    category: "Concepts Explained",
    excerpt:
      "The three inventory cost-flow methods worked through on the same numbers, what happens when prices rise, the LIFO reserve, and why Indian candidates must unlearn LIFO's absence under Ind AS.",
    crux: [
      "FIFO: The oldest costs go to cost of goods sold first; ending inventory holds the newest costs.",
      "LIFO: The newest costs go to cost of goods sold first; allowed under US GAAP but not under IFRS or Ind AS.",
      "Weighted average: Every unit carries the average cost of all units available.",
      "Rising prices: LIFO gives the highest cost of goods sold, the lowest profit and the lowest ending inventory.",
      "Valuation: FIFO and average use lower of cost and net realisable value; LIFO and the retail method use lower of cost or market.",
    ],
    content: `
<h2>Why cost-flow assumptions exist</h2>
<p>When identical units are bought at different prices, a company needs a rule for which cost goes to <strong>cost of goods sold (COGS)</strong> and which stays in <strong>ending inventory</strong>. The physical flow of goods doesn't have to match — this is purely a costing assumption.</p>

<h2>One example, three methods (periodic system)</h2>
<div class="callout callout-example">
<p>Beginning inventory: 100 units @ $10 = $1,000<br>
Purchase 1: 200 units @ $12 = $2,400<br>
Purchase 2: 100 units @ $15 = $1,500<br>
Available for sale: 400 units, $4,900. <strong>Sold: 250 units.</strong> Ending inventory: 150 units.</p>
</div>
<table>
<thead><tr><th>Method</th><th>COGS</th><th>Ending inventory</th></tr></thead>
<tbody>
<tr><td><strong>FIFO</strong></td><td>100 × $10 + 150 × $12 = <strong>$2,800</strong></td><td>50 × $12 + 100 × $15 = <strong>$2,100</strong></td></tr>
<tr><td><strong>LIFO</strong></td><td>100 × $15 + 150 × $12 = <strong>$3,300</strong></td><td>50 × $12 + 100 × $10 = <strong>$1,600</strong></td></tr>
<tr><td><strong>Weighted average</strong> ($4,900 ÷ 400 = $12.25)</td><td>250 × $12.25 = <strong>$3,062.50</strong></td><td>150 × $12.25 = <strong>$1,837.50</strong></td></tr>
</tbody>
</table>
<p>Check: in every row, COGS + ending inventory = $4,900. The methods only change <em>where</em> the cost lands.</p>

<h2>What rising prices do</h2>
<ul>
<li><strong>LIFO</strong> matches the newest (highest) costs against revenue: highest COGS, lowest net income, lowest income tax — and the lowest, most out-of-date balance-sheet inventory.</li>
<li><strong>FIFO</strong> does the opposite: lowest COGS, highest income, and an inventory balance close to current cost.</li>
<li>The <strong>LIFO reserve</strong> is the difference between inventory at FIFO and at LIFO — $2,100 − $1,600 = $500 here. Analysts add it back to compare LIFO and FIFO companies.</li>
<li>The <strong>LIFO conformity rule</strong>: a company that uses LIFO for US income tax must also use it in its financial statements.</li>
</ul>

<h2>Valuing inventory at the year end</h2>
<ul>
<li><strong>FIFO and weighted average</strong> → <em>lower of cost and net realisable value</em> (NRV = estimated selling price less costs to complete and sell).</li>
<li><strong>LIFO and the retail inventory method</strong> → <em>lower of cost or market</em>, where market is replacement cost, capped at NRV (ceiling) and floored at NRV less a normal profit margin.</li>
</ul>

<h2>For candidates from India</h2>
<p>LIFO is <strong>not permitted under Ind AS 2 or IFRS (IAS 2)</strong>, so many Indian candidates have never applied it. On the CPA Exam it's fair game, along with LIFO layers and dollar-value LIFO. See our <a href="/blog/us-gaap-vs-ind-as-key-differences">US GAAP vs Ind AS</a> comparison for other differences.</p>

<h2>Practice MCQs</h2>
<div class="callout callout-example">
<p><strong>1.</strong> In a period of rising prices, which method reports the highest gross profit?<br>
(A) LIFO (B) FIFO (C) Weighted average (D) All are the same<br>
<strong>Answer: B.</strong> FIFO charges the oldest, cheapest costs to COGS.</p>
<p><strong>2.</strong> A company's inventory is $80,000 under FIFO and $62,000 under LIFO. What is its LIFO reserve?<br>
(A) $62,000 (B) $80,000 (C) $18,000 (D) $142,000<br>
<strong>Answer: C.</strong> FIFO inventory less LIFO inventory.</p>
</div>

<p>Full coverage, including dollar-value LIFO and inventory errors, is in our <a href="/cpa/far/inventory">FAR inventory</a> notes.</p>

${sources([FASB("330", "Inventory"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "accrual-vs-cash-basis-accounting",
    title: "Accrual vs Cash Basis Accounting: Differences and How to Convert",
    category: "Concepts Explained",
    excerpt:
      "When revenue and expenses are recorded under each basis, why US GAAP requires accrual accounting, and a step-by-step conversion from cash basis to accrual basis — a favourite CPA Exam calculation.",
    crux: [
      "Cash basis: Revenue when cash is received; expenses when cash is paid.",
      "Accrual basis: Revenue when earned; expenses when incurred — regardless of when cash moves. US GAAP requires it.",
      "Converting revenue: Cash collected + ending receivables − beginning receivables (and adjust for unearned revenue).",
      "Converting expenses: Cash paid + ending payables − beginning payables, then adjust for prepaid expenses.",
      "Tax and special frameworks: Many small businesses may use the cash method for tax, and cash-basis statements are a special purpose framework for auditors.",
    ],
    content: `
<h2>The difference in one line each</h2>
<ul>
<li><strong>Cash basis</strong> — record revenue when cash comes in and expenses when cash goes out.</li>
<li><strong>Accrual basis</strong> — record revenue when it's <em>earned</em> and expenses when they're <em>incurred</em>, whenever the cash moves.</li>
</ul>
<p>A consultant who finishes a job in December but is paid in January has December revenue on the accrual basis and January revenue on the cash basis.</p>

<h2>Why US GAAP uses accrual accounting</h2>
<p>Accrual accounting shows the resources a business controls and the obligations it owes, and it reports performance in the period it actually happened. Receivables, payables, prepaid expenses, unearned revenue and depreciation all exist because of it. Financial statements prepared under US GAAP must use the accrual basis.</p>

<h2>Converting cash basis to accrual basis</h2>
<p>The exam's favourite version: you're given cash figures and opening and closing balances, and asked for accrual revenue or expenses.</p>
<div class="callout callout-example">
<p><strong>Revenue.</strong> Cash collected from customers $50,000; accounts receivable $8,000 at the start of the year and $12,000 at the end.<br>
Accrual revenue = $50,000 + $12,000 − $8,000 = <strong>$54,000</strong>. (Receivables went up, so more was earned than collected.)</p>
<p><strong>Expenses.</strong> Cash paid for operating expenses $30,000; accounts payable $5,000 at the start and $3,000 at the end; prepaid expenses $2,000 at the start and $1,000 at the end.<br>
Step 1 — payables: $30,000 + $3,000 − $5,000 = $28,000.<br>
Step 2 — prepaids: a fall in prepaid expenses means $1,000 of last year's payments was used up this year, so add it: $28,000 + $1,000 = <strong>$29,000</strong>.</p>
</div>
<p>Unearned revenue works the other way round from receivables: an <em>increase</em> in unearned revenue means cash came in that hasn't been earned yet, so subtract it.</p>

<h2>Where cash basis still appears</h2>
<ul>
<li><strong>Tax</strong> — many smaller businesses may use the cash method for federal income tax if they meet the gross receipts test (the threshold is indexed for inflation each year). IRS Publication 538 explains the accounting methods.</li>
<li><strong>Special purpose frameworks</strong> — cash, modified cash and tax-basis financial statements are not GAAP. Auditors report on them under the special purpose framework rules, a regular AUD topic.</li>
</ul>

<h2>Practice MCQ</h2>
<div class="callout callout-example">
<p>A company collected $90,000 from customers. Accounts receivable fell from $15,000 to $11,000 during the year. What is accrual-basis revenue?<br>
(A) $86,000 (B) $94,000 (C) $90,000 (D) $101,000<br>
<strong>Answer: A.</strong> $90,000 + $11,000 − $15,000. Some of the cash collected was for last year's sales.</p>
</div>

<p>The building blocks are covered in our <a href="/cpa/far/conceptual-framework-and-financial-statement-presentation">FAR conceptual framework</a> notes.</p>

${sources([CON8, ["IRS — Publication 538, Accounting Periods and Methods", "https://www.irs.gov/publications/p538"], AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "depreciation-methods-explained",
    title: "Depreciation Methods Explained: Straight-Line, Declining Balance and More",
    category: "Concepts Explained",
    excerpt:
      "Straight-line, double-declining balance, sum-of-the-years'-digits and units of production on one asset, why book and tax depreciation differ, and how a change in method is handled.",
    crux: [
      "Purpose: Depreciation spreads an asset's cost, less salvage value, over the periods that benefit from it — it isn't a valuation.",
      "Straight-line: Equal expense each year — (cost − salvage) ÷ useful life.",
      "Accelerated methods: Double-declining balance and sum-of-the-years'-digits charge more in early years; never depreciate below salvage value.",
      "Activity method: Units of production ties expense to actual use.",
      "Changes: A change in depreciation method is a change in estimate effected by a change in principle — applied prospectively.",
    ],
    content: `
<h2>What depreciation is (and isn't)</h2>
<p>Depreciation allocates the cost of a long-lived asset, less its estimated salvage (residual) value, over its useful life. It isn't an attempt to show what the asset is worth today — falls in value below carrying amount are handled by impairment testing instead.</p>

<h2>One asset, four methods</h2>
<div class="callout callout-example">
<p>A machine costs <strong>$50,000</strong>, has a salvage value of <strong>$5,000</strong> and a useful life of <strong>5 years</strong> (or 100,000 units of output). Depreciable base = $45,000.</p>
</div>
<table>
<thead><tr><th>Year</th><th>Straight-line</th><th>Double-declining balance</th><th>Sum-of-the-years'-digits</th></tr></thead>
<tbody>
<tr><td>1</td><td>$9,000</td><td>$20,000</td><td>$15,000</td></tr>
<tr><td>2</td><td>$9,000</td><td>$12,000</td><td>$12,000</td></tr>
<tr><td>3</td><td>$9,000</td><td>$7,200</td><td>$9,000</td></tr>
<tr><td>4</td><td>$9,000</td><td>$4,320</td><td>$6,000</td></tr>
<tr><td>5</td><td>$9,000</td><td>$1,480</td><td>$3,000</td></tr>
<tr><td><strong>Total</strong></td><td><strong>$45,000</strong></td><td><strong>$45,000</strong></td><td><strong>$45,000</strong></td></tr>
</tbody>
</table>
<ul>
<li><strong>Straight-line</strong> — $45,000 ÷ 5 = $9,000 a year.</li>
<li><strong>Double-declining balance (DDB)</strong> — twice the straight-line rate (2 × 20% = 40%) applied to the <em>carrying amount</em>, ignoring salvage in the rate: $50,000 × 40% = $20,000; $30,000 × 40% = $12,000; $18,000 × 40% = $7,200; $10,800 × 40% = $4,320. Year 5 is limited to $1,480 so the carrying amount stops at the $5,000 salvage value.</li>
<li><strong>Sum-of-the-years'-digits (SYD)</strong> — the digits 1 to 5 sum to 15; year 1 is 5/15 of $45,000 = $15,000, year 2 is 4/15 = $12,000, and so on.</li>
<li><strong>Units of production</strong> — $45,000 ÷ 100,000 units = $0.45 per unit. If the machine produces 22,000 units this year, depreciation is <strong>$9,900</strong>.</li>
</ul>

<h2>Book vs tax depreciation</h2>
<p>US tax depreciation uses the Modified Accelerated Cost Recovery System (MACRS), which sets recovery periods and conventions by law and ignores salvage value. Because book and tax depreciation differ, the asset's tax basis and book carrying amount differ — creating deferred taxes (see our <a href="/cpa/far/income-taxes">FAR income taxes</a> notes). IRS Publication 946 covers the tax rules.</p>

<h2>Changing method or estimate</h2>
<ul>
<li>A change in useful life or salvage value is a <strong>change in estimate</strong> — spread the remaining carrying amount over the remaining life. No restatement.</li>
<li>A change in depreciation <em>method</em> is a <strong>change in estimate effected by a change in accounting principle</strong> — also applied prospectively, and it must be justified as preferable.</li>
</ul>

<h2>Practice MCQs</h2>
<div class="callout callout-example">
<p><strong>1.</strong> An asset costing $40,000 with a $4,000 salvage value and a 4-year life is depreciated by double-declining balance. What is year 2 depreciation?<br>
(A) $9,000 (B) $10,000 (C) $18,000 (D) $20,000<br>
<strong>Answer: B.</strong> Rate 50%. Year 1: $20,000, leaving $20,000. Year 2: $20,000 × 50% = $10,000.</p>
<p><strong>2.</strong> After 3 years of straight-line depreciation on the $50,000 machine above, the company revises the remaining life to 4 more years with the same salvage value. What is the new annual depreciation?<br>
(A) $9,000 (B) $5,750 (C) $4,500 (D) $6,750<br>
<strong>Answer: C.</strong> Carrying amount after 3 years = $50,000 − (3 × $9,000) = $23,000. New annual depreciation = ($23,000 − $5,000) ÷ 4 = $4,500. A change in estimate is applied prospectively — no restatement.</p>
</div>

<p>Full coverage is in our <a href="/cpa/far/property-plant-and-equipment">FAR property, plant and equipment</a> notes and, for tax, <a href="/cpa/reg/property-transactions-basis-and-cost-recovery">REG basis and cost recovery</a>.</p>

${sources([FASB("360", "Property, Plant, and Equipment"), FASB("250", "Accounting Changes and Error Corrections"), ["IRS — Publication 946, How To Depreciate Property", "https://www.irs.gov/publications/p946"], AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "basic-vs-diluted-eps",
    title: "Basic vs Diluted EPS: Treasury Stock and If-Converted Methods",
    category: "Concepts Explained",
    excerpt:
      "How earnings per share is calculated, how preferred dividends and share issues affect it, and how options and convertible bonds dilute it — worked through on one company.",
    crux: [
      "Basic EPS: (Net income − preferred dividends) ÷ weighted-average common shares outstanding.",
      "Preferred dividends: Deduct cumulative preferred dividends for the year whether declared or not; non-cumulative only if declared.",
      "Options and warrants: Treasury stock method — assume exercise, and that the proceeds buy back shares at the average market price.",
      "Convertibles: If-converted method — add back after-tax interest (or preferred dividends) and add the conversion shares.",
      "Antidilution: Ignore any security that would increase EPS.",
    ],
    content: `
<h2>What EPS measures</h2>
<p>Earnings per share tells a common shareholder how much of the period's profit belongs to each share. Public companies present <strong>basic</strong> EPS and, when they have securities that could become shares, <strong>diluted</strong> EPS.</p>

<h2>Basic EPS</h2>
<p><em>Basic EPS = (net income − preferred dividends) ÷ weighted-average common shares outstanding.</em></p>
<ul>
<li>Shares are weighted by the fraction of the year they were outstanding.</li>
<li>Stock dividends and stock splits are applied <em>retroactively</em> — treated as if they happened at the start of the earliest period shown.</li>
</ul>

<div class="callout callout-example">
<p>Net income <strong>$500,000</strong>. Cumulative preferred dividends for the year <strong>$50,000</strong>. 100,000 common shares outstanding on 1 January; 20,000 more issued on 1 July.<br>
Weighted-average shares = 100,000 + 20,000 × 6/12 = <strong>110,000</strong>.<br>
Basic EPS = ($500,000 − $50,000) ÷ 110,000 = <strong>$4.09</strong>.</p>
</div>

<h2>Diluted EPS</h2>
<p>Diluted EPS asks: what if every security that could turn into common shares had done so? Two methods do the work:</p>
<ul>
<li><strong>Treasury stock method</strong> (options and warrants) — assume exercise, and assume the cash received buys back shares at the <em>average</em> market price. Only the net new shares are added.</li>
<li><strong>If-converted method</strong> (convertible bonds and convertible preferred) — assume conversion at the start of the year (or at issue, if later). Add back the after-tax interest saved (bonds) or the preferred dividends no longer paid, and add the conversion shares.</li>
</ul>
<div class="callout callout-example">
<p>Continuing the example:<br>
<strong>Options:</strong> 10,000 options with an exercise price of $20; average market price $25. Proceeds $200,000 buy back 8,000 shares, so <strong>2,000</strong> net new shares.<br>
<strong>Convertible bonds:</strong> $200,000 of 6% bonds, convertible into 10,000 shares, outstanding all year; tax rate 21%. After-tax interest = $12,000 × (1 − 0.21) = <strong>$9,480</strong>. Their incremental EPS is $9,480 ÷ 10,000 = $0.95, below basic EPS, so they're dilutive.<br>
Diluted EPS = ($450,000 + $9,480) ÷ (110,000 + 2,000 + 10,000) = $459,480 ÷ 122,000 = <strong>$3.77</strong>.</p>
</div>

<h2>Antidilution</h2>
<p>A security is left out of diluted EPS if including it would <em>raise</em> EPS (or reduce a loss per share). Options are antidilutive when the exercise price is above the average market price; convertibles are antidilutive when their incremental EPS is above basic EPS. When a company reports a loss from continuing operations, potential shares are generally antidilutive.</p>

<h2>Practice MCQs</h2>
<div class="callout callout-example">
<p><strong>1.</strong> A company has non-cumulative preferred stock. No preferred dividends were declared this year. What is deducted from net income for basic EPS?<br>
(A) The full annual preferred dividend (B) Nothing (C) Half the dividend (D) The dividend in arrears<br>
<strong>Answer: B.</strong> Non-cumulative dividends are deducted only if declared.</p>
<p><strong>2.</strong> 5,000 options have an exercise price of $30; the average market price is $40. How many incremental shares does the treasury stock method add?<br>
(A) 5,000 (B) 3,750 (C) 1,250 (D) 0<br>
<strong>Answer: C.</strong> Proceeds $150,000 ÷ $40 = 3,750 shares bought back; 5,000 − 3,750 = 1,250.</p>
</div>

<p>Full coverage is in our <a href="/cpa/far/equity-and-earnings-per-share">FAR equity and EPS</a> notes.</p>

${sources([FASB("260", "Earnings per Share"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "fair-value-hierarchy-level-1-2-3",
    title: "Fair Value Measurement: Level 1, 2 and 3 Inputs Explained (ASC 820)",
    category: "Concepts Explained",
    excerpt:
      "What 'fair value' means under US GAAP, the three-level hierarchy of inputs, principal vs most advantageous market, and the transaction-cost trap that catches candidates.",
    crux: [
      "Definition: Fair value is an exit price — what you'd receive to sell an asset (or pay to transfer a liability) in an orderly transaction between market participants.",
      "Level 1: Unadjusted quoted prices for identical items in active markets.",
      "Level 2: Other observable inputs — quoted prices for similar items, inactive markets, interest rates, yield curves.",
      "Level 3: Unobservable inputs — the entity's own assumptions.",
      "Classification: A measurement takes the level of the lowest-level input that is significant to it.",
    ],
    content: `
<h2>What fair value means</h2>
<p>Under ASC 820, fair value is <strong>the price that would be received to sell an asset, or paid to transfer a liability, in an orderly transaction between market participants at the measurement date</strong>. Three words matter:</p>
<ul>
<li><strong>Exit price</strong> — what you'd get selling, not what you paid buying.</li>
<li><strong>Market participants</strong> — the assumptions a typical buyer would make, not the company's own intentions.</li>
<li><strong>Orderly</strong> — not a forced or distressed sale.</li>
</ul>

<h2>The fair value hierarchy</h2>
<table>
<thead><tr><th>Level</th><th>Inputs</th><th>Examples</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td>Unadjusted quoted prices for <em>identical</em> assets or liabilities in active markets</td><td>Shares listed on a major exchange</td></tr>
<tr><td><strong>2</strong></td><td>Observable inputs other than Level 1 prices</td><td>Quoted prices for similar assets; prices in inactive markets; interest rates, yield curves, credit spreads</td></tr>
<tr><td><strong>3</strong></td><td>Unobservable inputs reflecting the entity's own assumptions</td><td>A discounted cash flow valuation of a private company or a unique asset</td></tr>
</tbody>
</table>
<p>The level of a whole measurement is set by the <strong>lowest-level input that is significant</strong> to it. A valuation that mostly uses observable data but relies significantly on one unobservable input is Level 3. Level 3 measurements need the most disclosure.</p>

<h2>Valuation approaches</h2>
<ul>
<li><strong>Market approach</strong> — prices of identical or comparable items.</li>
<li><strong>Income approach</strong> — converts future amounts to a present value (discounted cash flows, option pricing).</li>
<li><strong>Cost approach</strong> — the current replacement cost of the asset's service capacity.</li>
</ul>
<p>For non-financial assets, fair value assumes the asset's <strong>highest and best use</strong> by market participants, even if the company uses it differently.</p>

<h2>Principal market, most advantageous market, and the cost trap</h2>
<p>Fair value is measured in the <strong>principal market</strong> — the one with the greatest volume of activity for the item. Only if there's no principal market do you use the <strong>most advantageous market</strong>: the one that maximises the net amount received.</p>
<ul>
<li><strong>Transaction costs</strong> (such as broker commissions) are used to <em>choose</em> the most advantageous market, but are <strong>not deducted</strong> from fair value.</li>
<li><strong>Transport costs</strong> to get the asset to market <em>are</em> deducted from fair value.</li>
</ul>
<div class="callout callout-example">
<p>An asset trades in two markets, and neither is the principal market.<br>
Market A: price $30, transaction costs $3, transport $2 → net $25.<br>
Market B: price $32, transaction costs $6, transport $2 → net $24.<br>
Market A is most advantageous. Fair value = $30 − $2 transport = <strong>$28</strong> (transaction costs aren't deducted).</p>
</div>

<h2>Practice MCQ</h2>
<div class="callout callout-example">
<p>A company values an interest rate swap using a model whose inputs are observable yield curves and credit spreads. Which level is the measurement?<br>
(A) Level 1 (B) Level 2 (C) Level 3 (D) It isn't fair value<br>
<strong>Answer: B.</strong> The inputs are observable but aren't quoted prices for the identical item.</p>
</div>

<p>Fair value appears throughout our <a href="/cpa/far/investments-debt-and-equity-securities">FAR investments</a> notes.</p>

${sources([FASB("820", "Fair Value Measurement"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "npv-vs-irr-vs-payback",
    title: "NPV vs IRR vs Payback: Capital Budgeting Made Simple",
    category: "Concepts Explained",
    excerpt:
      "How companies decide whether an investment is worth it — net present value, internal rate of return, payback and profitability index on one project, and which to trust when they disagree.",
    crux: [
      "NPV: Present value of cash inflows minus the investment, at the required rate of return. Accept if NPV is positive.",
      "IRR: The discount rate that makes NPV zero. Accept if IRR exceeds the required rate.",
      "Payback: How long it takes to recover the investment in undiscounted cash — simple, but ignores the time value of money and later cash flows.",
      "Profitability index: PV of inflows ÷ investment; useful for ranking projects when capital is limited.",
      "When they conflict: For mutually exclusive projects, NPV is the better guide.",
    ],
    content: `
<h2>The question capital budgeting answers</h2>
<p>Should a company spend money now to receive cash later? Because money has a time value, cash flows years apart can't simply be added up — they have to be discounted at the company's <strong>required rate of return</strong> (often its cost of capital).</p>

<h2>One project, four measures</h2>
<div class="callout callout-example">
<p>A project costs <strong>$10,000</strong> today and returns <strong>$4,500</strong> at the end of each of the next 3 years. Required rate of return: <strong>10%</strong> (3-year ordinary annuity factor at 10% = 2.48685).</p>
</div>
<ul>
<li><strong>Net present value (NPV)</strong> — PV of inflows = $4,500 × 2.48685 = $11,190.83. NPV = $11,190.83 − $10,000 = <strong>$1,190.83</strong>. Positive, so the project earns more than 10%.</li>
<li><strong>Internal rate of return (IRR)</strong> — the rate at which NPV is zero, i.e. where the annuity factor equals $10,000 ÷ $4,500 = 2.2222. That's between 16% (2.2459) and 17% (2.2096): about <strong>16.7%</strong>. It exceeds 10%, so accept.</li>
<li><strong>Payback period</strong> — $4,500 + $4,500 = $9,000 after 2 years; the remaining $1,000 takes $1,000 ÷ $4,500 = 0.22 of year 3. Payback ≈ <strong>2.22 years</strong>.</li>
<li><strong>Profitability index (PI)</strong> — $11,190.83 ÷ $10,000 = <strong>1.12</strong>. Above 1 means a positive NPV.</li>
</ul>

<h2>Strengths and weaknesses</h2>
<table>
<thead><tr><th>Method</th><th>Strength</th><th>Weakness</th></tr></thead>
<tbody>
<tr><td>NPV</td><td>Measures the value added in dollars; uses all cash flows and the time value of money</td><td>Needs a required rate; harder to explain than a percentage</td></tr>
<tr><td>IRR</td><td>An intuitive percentage return</td><td>Assumes cash is reinvested at the IRR; can give multiple answers when cash flows change sign more than once; can rank projects wrongly</td></tr>
<tr><td>Payback</td><td>Simple; a rough measure of liquidity risk</td><td>Ignores the time value of money (unless discounted payback is used) and anything after the payback date</td></tr>
<tr><td>PI</td><td>Ranks projects when capital is rationed</td><td>Like IRR, a ratio can favour small projects</td></tr>
</tbody>
</table>
<p>NPV assumes cash flows are reinvested at the required rate, which is usually more realistic than the IRR's assumption. That's why, when two <strong>mutually exclusive</strong> projects rank differently under NPV and IRR, NPV is preferred.</p>

<h2>Practice MCQs</h2>
<div class="callout callout-example">
<p><strong>1.</strong> A project's IRR is 12% and the company's required rate of return is 14%. Its NPV at 14% is:<br>
(A) Positive (B) Zero (C) Negative (D) Impossible to tell<br>
<strong>Answer: C.</strong> Discounting at a rate above the IRR gives a negative NPV.</p>
<p><strong>2.</strong> Which method ignores cash flows that arrive after the investment has been recovered?<br>
(A) NPV (B) IRR (C) Payback (D) Profitability index<br>
<strong>Answer: C.</strong></p>
</div>

<p>Related BAR coverage: <a href="/cpa/bar/financial-forecasting-and-projections">financial forecasting and projections</a> and our <a href="/blog/time-value-of-money-present-value-explained">time value of money</a> explainer.</p>

${sources([AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "professional-skepticism-in-auditing",
    title: "Professional Skepticism in Auditing: What It Means and How It's Tested",
    category: "Auditing",
    excerpt:
      "Professional skepticism explained simply — the questioning mind auditors must keep, how it differs from professional judgment, where it matters most, and the exam traps.",
    crux: [
      "Meaning: An attitude that includes a questioning mind and a critical assessment of audit evidence.",
      "Neutral starting point: Auditors don't assume management is dishonest — or unquestionably honest.",
      "Whole audit: Skepticism applies at every stage, from planning to the report, and especially to fraud risk and estimates.",
      "Not judgment: Professional judgment is applying training and experience to decisions; skepticism is how evidence is questioned.",
      "Red flags: Contradictory evidence, unusual delays, documents that look altered and explanations that don't fit all call for more work.",
    ],
    content: `
<h2>The idea</h2>
<p><strong>Professional skepticism</strong> is an attitude: a questioning mind, alert to conditions that may indicate misstatement due to error or fraud, and a critical assessment of audit evidence. US auditing standards for both private companies (AICPA's AU-C 200) and public companies (the PCAOB's AS 1000) require auditors to plan and perform the audit with it.</p>

<h2>Not cynicism — and not trust either</h2>
<p>A skeptical auditor doesn't assume management is dishonest. But they also don't accept management's honesty as a reason to settle for less persuasive evidence. A good relationship with the client, or a clean history in past audits, doesn't lower the bar.</p>

<h2>What it looks like in practice</h2>
<ul>
<li>Asking whether evidence is <strong>reliable</strong> — for example, preferring a confirmation received directly from a third party over a document provided by the client.</li>
<li>Noticing evidence that <strong>contradicts</strong> other evidence and following it up, rather than explaining it away.</li>
<li>Considering whether documents might not be <strong>authentic</strong>, and investigating if something suggests they've been altered.</li>
<li>Challenging management's <strong>accounting estimates</strong> and the assumptions behind them, looking for bias.</li>
<li>Keeping skepticism on throughout — including the team discussion of how the financial statements could be susceptible to fraud.</li>
</ul>

<h2>Skepticism vs professional judgment</h2>
<table>
<thead><tr><th></th><th>Professional skepticism</th><th>Professional judgment</th></tr></thead>
<tbody>
<tr><td>What it is</td><td>An attitude towards evidence</td><td>Applying knowledge and experience to make decisions</td></tr>
<tr><td>Example</td><td>Questioning why sales spiked in the last week of the year</td><td>Deciding materiality or which procedures to perform</td></tr>
</tbody>
</table>
<p>They work together: skepticism tells you something needs a closer look; judgment decides what to do about it.</p>

<h2>Exam traps</h2>
<ul>
<li>"The auditor may rely on management's representations because management has always been honest" — <strong>wrong</strong>. Written representations don't replace other evidence.</li>
<li>"Skepticism means assuming fraud has occurred" — <strong>wrong</strong>. It's a neutral, questioning stance.</li>
<li>"Skepticism only matters in the fraud risk assessment" — <strong>wrong</strong>. It applies throughout the audit.</li>
</ul>

<h2>Practice MCQ</h2>
<div class="callout callout-example">
<p>During an audit, a sales contract provided by the client has a signature that looks different from the one on other contracts. What best reflects professional skepticism?<br>
(A) Accept it, because the client has a good history (B) Ask management to confirm in writing that it's genuine and move on (C) Investigate further, such as confirming the terms directly with the customer (D) Assume fraud and withdraw<br>
<strong>Answer: C.</strong> Conditions suggesting a document may not be authentic call for further investigation.</p>
</div>

<p>Related: our <a href="/blog/fraud-triangle-auditor-responsibility">fraud triangle</a> explainer and the <a href="/cpa/aud/fraud-risk">AUD fraud risk</a> and <a href="/cpa/aud/evidence-types-and-procedures">audit evidence</a> notes.</p>

${sources([PCAOB_STANDARDS, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "segregation-of-duties-explained",
    title: "Segregation of Duties Explained: Authorisation, Custody and Recording",
    category: "Auditing",
    excerpt:
      "Why no one person should control a transaction from start to finish, the three duties to keep apart, what it means in IT systems, and what small companies do when they can't separate them.",
    crux: [
      "Core rule: Keep authorisation, custody of assets and record-keeping with different people.",
      "Why: So one person can't both commit and conceal an error or fraud.",
      "Reconciliation: Ideally a fourth person compares records with actual assets.",
      "IT: Separate developers from production, and system administrators from users who process transactions.",
      "Small entities: Where separation isn't possible, use compensating controls such as owner review — and remember collusion and management override can defeat any segregation.",
    ],
    content: `
<h2>The idea</h2>
<p>If one person can approve a payment, make it and record it, they can also hide a mistake — or a theft. <strong>Segregation of duties</strong> splits the steps of a transaction between people so that each one's work acts as a check on the others. It's one of the most tested internal control concepts in AUD and ISC, and it falls within COSO's control activities component.</p>

<h2>The three duties to keep apart</h2>
<ol>
<li><strong>Authorisation</strong> — approving transactions (approving a purchase order, a credit limit or a pay rise).</li>
<li><strong>Custody</strong> — handling the assets (cash, inventory, cheque signing, access to the warehouse).</li>
<li><strong>Recording</strong> — keeping the books (posting journal entries, maintaining the ledger).</li>
</ol>
<p>A fourth function, <strong>reconciliation</strong> — comparing the records with the actual assets, such as a bank reconciliation or an inventory count — is strongest when done by someone independent of all three.</p>

<h2>Classic incompatible pairs</h2>
<table>
<thead><tr><th>Combined duties</th><th>What could go wrong</th></tr></thead>
<tbody>
<tr><td>Receiving customer cash + posting to customer accounts</td><td>Lapping: stealing one customer's payment and covering it with the next</td></tr>
<tr><td>Approving vendors + approving payments</td><td>Paying a fictitious vendor set up by the same person</td></tr>
<tr><td>Payroll preparation + distributing pay</td><td>Paying "ghost" employees</td></tr>
<tr><td>Custody of inventory + recording inventory</td><td>Theft concealed by adjusting the records</td></tr>
</tbody>
</table>

<h2>In IT systems</h2>
<ul>
<li>Programmers shouldn't be able to move their own changes into the live (production) system.</li>
<li>System and security administrators shouldn't process business transactions.</li>
<li>User access should follow the <strong>least privilege</strong> principle, with role-based access reviewed regularly.</li>
</ul>
<p>These are part of IT general controls — see our <a href="/cpa/isc/it-general-controls">ISC IT general controls</a> notes.</p>

<h2>When a company is too small</h2>
<p>A business with two people in the office can't fully separate duties. It relies on <strong>compensating controls</strong> instead — for example, the owner reviewing bank statements and approving all payments, mandatory holidays, job rotation, or independent reviews.</p>

<h2>The limits</h2>
<ul>
<li><strong>Collusion</strong> — two or more people working together can defeat segregation.</li>
<li><strong>Management override</strong> — senior managers may be able to bypass controls altogether, which is why auditors always treat it as a fraud risk.</li>
</ul>

<h2>Practice MCQ</h2>
<div class="callout callout-example">
<p>Which combination of duties is most likely to allow an employee to steal cash and conceal it?<br>
(A) Opening the mail and preparing the remittance list (B) Receiving customer payments and recording them in the accounts receivable ledger (C) Approving purchase orders and receiving goods (D) Preparing the bank reconciliation and reviewing payroll<br>
<strong>Answer: B.</strong> Custody plus recording lets the employee take the cash and hide it in the customer accounts.</p>
</div>

<p>Read more in our <a href="/blog/coso-internal-control-framework">COSO framework</a> explainer and the <a href="/cpa/aud/understanding-the-entity-and-internal-control">AUD internal control</a> notes.</p>

${sources([COSO_IC, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "accounting-principles-matching-substance-over-form-conservatism",
    title: "Matching, Substance Over Form and Conservatism: Famous Accounting Principles Explained",
    category: "Concepts Explained",
    excerpt:
      "The accounting principles everyone has heard of — matching, accrual, going concern, substance over form, consistency and conservatism — and how they fit (or don't) in FASB's current conceptual framework.",
    crux: [
      "Fundamental qualities: FASB's framework names relevance and faithful representation as the two fundamental qualitative characteristics.",
      "Enhancing qualities: Comparability, verifiability, timeliness and understandability; cost is the pervasive constraint.",
      "Matching: Expenses are recognised in the period of the revenue they help produce — the logic behind accruals and depreciation.",
      "Substance over form: Account for the economic reality, not just the legal form — expressed today through faithful representation.",
      "Conservatism: Not a qualitative characteristic in FASB's current framework — it conflicts with neutrality — though some rules still lean prudent.",
    ],
    content: `
<h2>Where the "principles" come from</h2>
<p>Most of us learned a list of accounting principles: matching, going concern, consistency, conservatism and so on. US GAAP's foundation today is FASB's <strong>Conceptual Framework</strong> (Concepts Statement No. 8), which describes what makes financial information useful. Some classic principles are written into it directly; others survive in the logic of the standards.</p>

<h2>What the framework says</h2>
<ul>
<li><strong>Fundamental qualitative characteristics:</strong> <em>relevance</em> (predictive value, confirmatory value, materiality) and <em>faithful representation</em> (complete, neutral, free from error).</li>
<li><strong>Enhancing characteristics:</strong> comparability (including consistency), verifiability, timeliness and understandability.</li>
<li><strong>Pervasive constraint:</strong> cost — the benefits of reporting information should justify the costs.</li>
</ul>

<h2>The famous principles, one by one</h2>
<ul>
<li><strong>Accrual basis</strong> — record effects in the period they occur, not when cash moves. See our <a href="/blog/accrual-vs-cash-basis-accounting">accrual vs cash basis</a> explainer.</li>
<li><strong>Matching</strong> — recognise expenses in the same period as the revenue they help earn: cost of goods sold with the sale, depreciation over the asset's useful life, commissions with the related revenue. Modern standards get there through asset and liability definitions, but the matching logic is everywhere on the exam.</li>
<li><strong>Going concern</strong> — statements assume the entity will keep operating; management must evaluate whether there's substantial doubt about that within one year after the statements are issued (or available to be issued).</li>
<li><strong>Historical cost</strong> — many assets are carried at what they cost, while others are measured at fair value; the framework recognises several measurement bases.</li>
<li><strong>Consistency</strong> — use the same methods from period to period; part of comparability. Changes need justification and disclosure.</li>
<li><strong>Substance over form</strong> — report the economic reality of a transaction, not just its legal form. A lease that gives control of an asset is reported as a right-of-use asset and liability, even though the lessee doesn't own the asset. In FASB's framework this idea is part of faithful representation.</li>
<li><strong>Conservatism (prudence)</strong> — "anticipate no profit, provide for all losses". FASB's 2010 framework deliberately <strong>left conservatism out</strong> of the qualitative characteristics, because building in a downward bias conflicts with <strong>neutrality</strong>. Some individual rules still treat gains and losses differently — for example, inventory write-downs and loss contingencies are recognised while gain contingencies aren't — but conservatism is no longer a framework-level principle.</li>
</ul>

<h2>Practice MCQs</h2>
<div class="callout callout-example">
<p><strong>1.</strong> Under FASB's Conceptual Framework, which are the fundamental qualitative characteristics?<br>
(A) Comparability and consistency (B) Relevance and faithful representation (C) Verifiability and timeliness (D) Conservatism and neutrality<br>
<strong>Answer: B.</strong></p>
<p><strong>2.</strong> Why isn't conservatism a qualitative characteristic in FASB's current framework?<br>
(A) It's too costly (B) It conflicts with neutrality (C) It's covered by materiality (D) It applies only to IFRS<br>
<strong>Answer: B.</strong></p>
</div>

<p>Full coverage is in our <a href="/cpa/far/conceptual-framework-and-financial-statement-presentation">FAR conceptual framework</a> notes.</p>

${sources([CON8, AICPA_BLUEPRINTS])}
`,
  },
];
