import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

/**
 * REG federal tax explainers. Figures come from IRS publications, news releases and
 * Rev. Proc. 2025-32 (2026 inflation adjustments, reflecting the One, Big, Beautiful
 * Bill Act — which the IRS now calls the "Working Families Tax Cuts"). Every 2026
 * figure is labelled; candidates should confirm which tax year their exam window tests.
 */

const IRS_2026: [string, string] = [
  "IRS — Tax inflation adjustments for tax year 2026, including amendments from the One, Big, Beautiful Bill (IR-2025-103)",
  "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill",
];
const IRS_WFTC: [string, string] = [
  "IRS — Working Families Tax Cuts (One, Big, Beautiful Bill) provisions",
  "https://www.irs.gov/newsroom/working-families-tax-cuts",
];
const AICPA_BLUEPRINTS: [string, string] = [
  "AICPA & CIMA — CPA Exam Blueprints and policy on testing new tax legislation",
  "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam",
];
const PUB = (n: string, title: string): [string, string] => [
  `IRS — Publication ${n}, ${title}`,
  `https://www.irs.gov/publications/p${n.toLowerCase()}`,
];

export const taxPosts: BlogSeed[] = [
  {
    slug: "us-federal-income-tax-basics-cpa-reg",
    title: "US Federal Income Tax Basics for CPA REG Candidates",
    category: "Tax",
    excerpt:
      "The individual tax formula from gross income to refund, the 2026 rate brackets, what changed under the One Big Beautiful Bill Act, and which tax law the REG exam tests.",
    crux: [
      "The formula: Gross income − adjustments = AGI; AGI − standard or itemized deductions − other below-the-line deductions = taxable income; tax − credits + other taxes − payments = refund or balance due.",
      "Rates: Seven brackets — 10%, 12%, 22%, 24%, 32%, 35% and 37% — made permanent by the One, Big, Beautiful Bill Act (OBBBA).",
      "2026 standard deduction: $16,100 single, $32,200 married filing jointly, $24,150 head of household.",
      "New deductions (2025–2028): Qualified tips (up to $25,000), qualified overtime pay (up to $12,500, or $25,000 joint), car loan interest (up to $10,000) and a $6,000 deduction for those 65 and over — all with income phase-outs.",
      "Exam timing: The AICPA tests OBBBA provisions with 2024 and 2025 effective dates in REG and TCP from July 1, 2026.",
    ],
    content: `
<h2>Why REG tax looks the way it does</h2>
<p>Taxation and Regulation (REG) tests US federal income tax for individuals and entities, property transactions, federal tax procedures, professional ethics and business law. Most of the marks come from the individual and entity tax areas, so the individual tax formula is the foundation of everything else.</p>

<h2>The individual tax formula</h2>
<table>
<tbody>
<tr><td><strong>Gross income</strong></td><td>All income from whatever source derived, unless specifically excluded (wages, interest, dividends, business income, capital gains, rents, retirement distributions)</td></tr>
<tr><td>− Adjustments ("above the line")</td><td>Educator expenses, deductible IRA and HSA contributions, half of self-employment tax, self-employed health insurance, student loan interest, alimony under pre-2019 agreements</td></tr>
<tr><td>= <strong>Adjusted gross income (AGI)</strong></td><td>Used for many phase-outs and percentage limits</td></tr>
<tr><td>− Standard deduction <em>or</em> itemized deductions</td><td>Whichever is greater</td></tr>
<tr><td>− Other deductions from AGI</td><td>Qualified business income deduction (up to 20%); and for 2025–2028, deductions for qualified tips, overtime, car loan interest and seniors</td></tr>
<tr><td>= <strong>Taxable income</strong></td><td></td></tr>
<tr><td>× Tax rates</td><td>Ordinary rates, with preferential rates for qualified dividends and long-term capital gains</td></tr>
<tr><td>− Credits</td><td>Child tax credit, education credits, earned income credit and others</td></tr>
<tr><td>+ Other taxes</td><td>Self-employment tax, 3.8% net investment income tax, 0.9% additional Medicare tax, alternative minimum tax</td></tr>
<tr><td>− Payments</td><td>Withholding and estimated tax payments</td></tr>
<tr><td>= <strong>Refund or balance due</strong></td><td></td></tr>
</tbody>
</table>

<h2>2026 rate brackets</h2>
<table>
<thead><tr><th>Rate</th><th>Single — taxable income over</th><th>Married filing jointly — over</th></tr></thead>
<tbody>
<tr><td>10%</td><td>$0</td><td>$0</td></tr>
<tr><td>12%</td><td>$12,400</td><td>$24,800</td></tr>
<tr><td>22%</td><td>$50,400</td><td>$100,800</td></tr>
<tr><td>24%</td><td>$105,700</td><td>$211,400</td></tr>
<tr><td>32%</td><td>$201,775</td><td>$403,550</td></tr>
<tr><td>35%</td><td>$256,225</td><td>$512,450</td></tr>
<tr><td>37%</td><td>$640,600</td><td>$768,700</td></tr>
</tbody>
</table>

<h2>Other key 2026 figures</h2>
<ul>
<li>Alternative minimum tax exemption: $90,100 (unmarried) and $140,200 (married filing jointly), phasing out from $500,000 and $1,000,000.</li>
<li>Estate tax basic exclusion: $15,000,000. Annual gift exclusion: $19,000.</li>
<li>Foreign earned income exclusion: $132,900.</li>
<li>Personal exemptions remain at zero.</li>
</ul>

<h2>The OBBBA in one paragraph</h2>
<p>The One, Big, Beautiful Bill Act (Public Law 119-21, enacted July 4, 2025 — the IRS now calls its provisions the "Working Families Tax Cuts") made the 2017 individual rate structure and higher standard deduction permanent, added temporary deductions for tips, overtime, car loan interest and seniors for 2025–2028, raised the state and local tax (SALT) deduction cap, changed charitable deduction rules from 2026, made 100% bonus depreciation permanent for property acquired after January 19, 2025, and raised the Section 179 limit to $2,500,000 (indexed — $2,560,000 for 2026).</p>

<h2>Which law does the exam test?</h2>
<div class="callout callout-important">
<p>Under the AICPA's policy, a tax law change becomes eligible for testing in the calendar quarter beginning six months after the later of its enactment or effective date. The AICPA has stated that OBBBA provisions with 2024 and 2025 effective dates are eligible in REG and TCP from <strong>July 1, 2026</strong>, with later-dated provisions phasing in six months after they take effect. Check the AICPA's "Testing of H.R. 1 on the CPA Exam" notice before your exam.</p>
</div>

<p>Next, read <a href="/blog/filing-status-standard-deduction-cpa-reg">filing status and standard deduction</a> and <a href="/blog/agi-taxable-income-tax-liability-explained">AGI, taxable income and tax liability</a>, then work through our <a href="/cpa/reg">REG topics</a>.</p>

${sources([IRS_2026, IRS_WFTC, PUB("17", "Your Federal Income Tax"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "filing-status-standard-deduction-cpa-reg",
    title: "Filing Status and Standard Deduction: CPA REG Practice Guide",
    category: "Tax",
    excerpt:
      "The five filing statuses and how to qualify for each, the 2026 standard deduction amounts, the additional amounts for age and blindness, dependants, the new senior deduction and the rules for nonresidents.",
    crux: [
      "Five statuses: Single, married filing jointly, married filing separately, head of household and qualifying surviving spouse.",
      "Marital status: Determined on the last day of the tax year — married on December 31 means married for the whole year.",
      "2026 standard deduction: $16,100 single or MFS, $32,200 joint or qualifying surviving spouse, $24,150 head of household; plus $1,650 for each spouse 65+ or blind ($2,050 if unmarried).",
      "Senior deduction: An extra $6,000 per person aged 65+ for 2025–2028, phasing out above $75,000 MAGI ($150,000 joint) — available whether or not you itemise.",
      "Restrictions: If one spouse filing separately itemises, the other must too; nonresident aliens generally can't take the standard deduction (students and business apprentices from India are a treaty exception).",
    ],
    content: `
<h2>The five filing statuses</h2>
<table>
<thead><tr><th>Status</th><th>Key requirements</th></tr></thead>
<tbody>
<tr><td>Single</td><td>Unmarried or legally separated on December 31, and not qualifying for another status</td></tr>
<tr><td>Married filing jointly (MFJ)</td><td>Married on December 31 (or spouse died during the year), both agree to file jointly; joint and several liability</td></tr>
<tr><td>Married filing separately (MFS)</td><td>Married, filing separate returns. Many credits are reduced or unavailable</td></tr>
<tr><td>Head of household (HOH)</td><td>Unmarried (or "considered unmarried") on December 31; paid more than half the cost of keeping up a home; a qualifying person lived with you for more than half the year (a dependent parent may live elsewhere)</td></tr>
<tr><td>Qualifying surviving spouse (QSS)</td><td>Spouse died in either of the two previous tax years; you haven't remarried; you have a dependent child or stepchild living with you; you paid more than half the cost of the home</td></tr>
</tbody>
</table>
<p><strong>Considered unmarried</strong> for HOH: you file separately, paid more than half the cost of the home, your spouse didn't live in the home during the last six months of the year, and the home was the main home of your child for more than half the year.</p>

<h2>2026 standard deduction</h2>
<table>
<thead><tr><th>Filing status</th><th>Basic amount</th></tr></thead>
<tbody>
<tr><td>Single / Married filing separately</td><td>$16,100</td></tr>
<tr><td>Married filing jointly / Qualifying surviving spouse</td><td>$32,200</td></tr>
<tr><td>Head of household</td><td>$24,150</td></tr>
</tbody>
</table>
<ul>
<li><strong>Additional amount</strong> for being 65 or older, or blind: $1,650 each per spouse, or $2,050 if unmarried and not a surviving spouse. A blind person over 65 gets it twice.</li>
<li><strong>Dependants:</strong> limited to the greater of $1,350 or earned income + $450, not exceeding the basic amount.</li>
</ul>

<h2>The senior deduction (2025–2028)</h2>
<p>The OBBBA added a separate deduction of <strong>$6,000</strong> for each individual aged 65 or older by the end of the year ($12,000 if both spouses qualify). It's in addition to the additional standard deduction above, is available to itemisers and non-itemisers, and phases out for modified AGI above $75,000 ($150,000 for joint filers). A Social Security number is required, and married couples must file jointly.</p>

<div class="callout callout-example">
<p><strong>Example:</strong> A married couple, both 67, file jointly with AGI of $90,000 in 2026. Standard deduction = $32,200 + 2 × $1,650 = $35,500. Senior deduction = 2 × $6,000 = $12,000 (no phase-out, since MAGI is below $150,000). Total deductions = <strong>$47,500</strong>; taxable income = $42,500 before any other deductions.</p>
</div>

<h2>Who can't use the standard deduction</h2>
<ul>
<li>A married person filing separately whose spouse itemises.</li>
<li>A nonresident alien, or a dual-status alien for the year. IRS Publication 519 notes an exception: students and business apprentices eligible under Article 21(2) of the US–India income tax treaty may claim the standard deduction.</li>
<li>An individual filing a return for less than 12 months because of a change in accounting period.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> Head of household requires a <em>qualifying person</em>, not just any dependant. A qualifying relative who is a dependant only because of a multiple support agreement does not make you eligible for HOH.</p>
</div>

<p>Continue with <a href="/blog/agi-taxable-income-tax-liability-explained">AGI, taxable income and tax liability</a> and our <a href="/cpa/reg/filing-status-credits-and-amt">REG filing status, credits and AMT</a> notes.</p>

${sources([PUB("501", "Dependents, Standard Deduction, and Filing Information"), PUB("519", "U.S. Tax Guide for Aliens"), IRS_2026, ["IRS — New and enhanced deductions for individuals", "https://www.irs.gov/newsroom/new-and-enhanced-deductions-for-individuals"]])}
`,
  },
  {
    slug: "agi-taxable-income-tax-liability-explained",
    title: "Adjusted Gross Income, Taxable Income and Tax Liability Explained",
    category: "Tax",
    excerpt:
      "A complete worked 2026 example from gross income to tax liability — above-the-line adjustments, the deduction choice, bracket calculation, marginal vs effective rates and credits.",
    crux: [
      "AGI: Gross income minus above-the-line adjustments. It matters because so many limits and phase-outs are based on it.",
      "Taxable income: AGI minus the greater of the standard or itemized deductions, minus the QBI deduction and other deductions from AGI.",
      "Tax liability: Apply the brackets progressively — each rate applies only to income within its band.",
      "Marginal vs effective: The marginal rate is the rate on the next dollar; the effective rate is total tax ÷ income.",
      "Credits vs deductions: A deduction reduces income; a credit reduces tax dollar for dollar.",
    ],
    content: `
<h2>Step 1: gross income</h2>
<p>Gross income includes all income from whatever source unless an exclusion applies. Common exclusions: gifts and inheritances, life insurance proceeds paid on death, municipal bond interest, qualified scholarships, and up to $250,000 ($500,000 joint) of gain on selling a main home.</p>

<h2>Step 2: adjustments to reach AGI</h2>
<p>Above-the-line adjustments include deductible traditional IRA contributions, health savings account (HSA) contributions, the deductible half of self-employment tax, self-employed health insurance, student loan interest (up to $2,500), and educator expenses.</p>

<h2>Step 3: deductions from AGI</h2>
<ul>
<li>The greater of the standard deduction and itemized deductions.</li>
<li>The qualified business income (QBI) deduction under Section 199A — made permanent by the OBBBA.</li>
<li>For 2025–2028, the deductions for qualified tips, overtime pay, car loan interest and seniors.</li>
</ul>

<h2>Worked example (2026, single filer)</h2>
<div class="callout callout-example">
<table>
<tbody>
<tr><td>Salary</td><td>$95,000</td></tr>
<tr><td>Interest income</td><td>$1,000</td></tr>
<tr><td>Municipal bond interest (excluded)</td><td>$0</td></tr>
<tr><td><strong>Gross income</strong></td><td><strong>$96,000</strong></td></tr>
<tr><td>− Traditional IRA contribution (not covered by a workplace plan, so fully deductible)</td><td>($7,500)</td></tr>
<tr><td><strong>AGI</strong></td><td><strong>$88,500</strong></td></tr>
<tr><td>− Standard deduction (itemized deductions are only $9,000)</td><td>($16,100)</td></tr>
<tr><td><strong>Taxable income</strong></td><td><strong>$72,400</strong></td></tr>
</tbody>
</table>
<p><strong>Tax on $72,400:</strong></p>
<ul>
<li>10% × $12,400 = $1,240</li>
<li>12% × ($50,400 − $12,400) = 12% × $38,000 = $4,560</li>
<li>22% × ($72,400 − $50,400) = 22% × $22,000 = $4,840</li>
<li><strong>Total = $10,640</strong></li>
</ul>
<p>Marginal rate = <strong>22%</strong>. Effective rate on taxable income = $10,640 ÷ $72,400 = <strong>14.7%</strong>; on gross income = 11.1%.</p>
</div>

<h2>Step 4: credits and other taxes</h2>
<ul>
<li><strong>Nonrefundable credits</strong> (most education credits, the non-refundable part of the child tax credit) reduce tax to zero but not below.</li>
<li><strong>Refundable credits</strong> (earned income credit, the refundable part of the child tax credit) can produce a refund.</li>
<li><strong>Other taxes</strong> are added: self-employment tax (15.3% on net earnings up to the Social Security wage base, 2.9% above it), the 3.8% net investment income tax above $200,000 MAGI ($250,000 joint), and the 0.9% additional Medicare tax above the same thresholds.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> Moving into a higher bracket never reduces take-home income — only the income <em>above</em> the threshold is taxed at the higher rate. Questions that suggest "a raise put me in a higher bracket so I earn less" are testing this.</p>
</div>

<p>Learn more in <a href="/blog/tax-credits-vs-tax-deductions">tax credits vs deductions</a> and our REG notes on <a href="/cpa/reg/individual-taxation-gross-income">gross income</a> and <a href="/cpa/reg/individual-taxation-adjustments-and-deductions">adjustments and deductions</a>.</p>

${sources([PUB("17", "Your Federal Income Tax"), IRS_2026, ["IRS — Federal income tax rates and brackets", "https://www.irs.gov/filing/federal-income-tax-rates-and-brackets"]])}
`,
  },
  {
    slug: "tax-basis-vs-book-basis-differences",
    title: "Tax Basis vs Book Basis: Differences With Examples",
    category: "Tax",
    excerpt:
      "Why taxable income differs from book income — depreciation, bad debts, accruals, meals, fines, municipal interest, goodwill — and how Schedules M-1 and M-3 reconcile them.",
    crux: [
      "Different rulebooks: Book income follows US GAAP to inform investors; taxable income follows the Internal Revenue Code to raise revenue.",
      "Temporary differences: Timing only — depreciation, bad debts, warranty accruals, prepaid income, goodwill amortisation.",
      "Permanent differences: Never reverse — municipal bond interest, fines and penalties, the non-deductible half of business meals, federal income tax expense.",
      "Reconciliation: Corporations reconcile book to taxable income on Schedule M-1, or the more detailed Schedule M-3 if total assets are $10 million or more.",
      "Why it matters: The same differences drive deferred tax assets and liabilities in FAR.",
    ],
    content: `
<h2>Common book–tax differences</h2>
<table>
<thead><tr><th>Item</th><th>Book (US GAAP)</th><th>Tax (IRC)</th><th>Type</th></tr></thead>
<tbody>
<tr><td>Depreciation</td><td>Straight-line over useful life</td><td>MACRS; 100% bonus depreciation for qualified property acquired after January 19, 2025; Section 179 expensing (limit $2,560,000 for 2026)</td><td>Temporary</td></tr>
<tr><td>Bad debts</td><td>Allowance (expected credit losses)</td><td>Direct write-off when the debt becomes worthless</td><td>Temporary</td></tr>
<tr><td>Warranty costs</td><td>Accrued when sales are made</td><td>Deducted when paid</td><td>Temporary</td></tr>
<tr><td>Prepaid (advance) income</td><td>Deferred until earned</td><td>Generally taxed when received, with a limited one-year deferral for accrual-method taxpayers</td><td>Temporary</td></tr>
<tr><td>Goodwill (acquired in an asset purchase)</td><td>Not amortised (public companies); tested for impairment</td><td>Amortised over 15 years (Section 197)</td><td>Temporary</td></tr>
<tr><td>Domestic research and experimental costs</td><td>Expensed</td><td>Deductible currently for tax years beginning after December 31, 2024 (Section 174A), or amortised if elected</td><td>Largely aligned again</td></tr>
<tr><td>Municipal bond interest</td><td>Income</td><td>Excluded</td><td>Permanent</td></tr>
<tr><td>Fines and penalties paid to a government</td><td>Expense</td><td>Not deductible</td><td>Permanent</td></tr>
<tr><td>Business meals</td><td>Expense</td><td>Generally 50% deductible</td><td>Permanent</td></tr>
<tr><td>Federal income tax expense</td><td>Expense</td><td>Not deductible</td><td>Permanent</td></tr>
<tr><td>Life insurance premiums where the company is beneficiary</td><td>Expense</td><td>Not deductible (proceeds also excluded)</td><td>Permanent</td></tr>
<tr><td>Dividends received deduction</td><td>None</td><td>50%, 65% or 100% of dividends from domestic corporations</td><td>Permanent</td></tr>
<tr><td>Capital losses (corporation)</td><td>Expense</td><td>Deductible only against capital gains; carry back 3 years and forward 5</td><td>Temporary</td></tr>
<tr><td>Charitable contributions (corporation)</td><td>Expense</td><td>Limited to 10% of taxable income; excess carried forward 5 years</td><td>Temporary</td></tr>
</tbody>
</table>

<h2>Worked example: Schedule M-1</h2>
<div class="callout callout-example">
<table>
<tbody>
<tr><td>Net income per books</td><td>$800,000</td></tr>
<tr><td>+ Federal income tax expense</td><td>210,000</td></tr>
<tr><td>+ Fines and penalties</td><td>15,000</td></tr>
<tr><td>+ 50% of business meals</td><td>10,000</td></tr>
<tr><td>+ Excess of book bad debt expense over write-offs</td><td>25,000</td></tr>
<tr><td>− Municipal bond interest</td><td>(30,000)</td></tr>
<tr><td>− Excess of tax depreciation over book depreciation</td><td>(120,000)</td></tr>
<tr><td><strong>Taxable income before special deductions</strong></td><td><strong>$910,000</strong></td></tr>
</tbody>
</table>
</div>

<h2>Schedule M-1 vs M-3</h2>
<ul>
<li><strong>Schedule M-1</strong> — the simpler reconciliation on Form 1120.</li>
<li><strong>Schedule M-3</strong> — required for corporations with total assets of $10 million or more. It separates temporary and permanent differences line by line and starts from financial statement income of the consolidated group.</li>
<li><strong>Schedule M-2</strong> reconciles unappropriated retained earnings.</li>
</ul>

<h2>Book basis vs tax basis of an asset</h2>
<p>The same idea applies to balance sheet items. A machine costing $100,000 with $20,000 of book depreciation has a book basis of $80,000; after $100,000 of bonus depreciation its tax basis is $0. The $80,000 difference is a taxable temporary difference — a deferred tax liability in FAR, and the amount that becomes ordinary income (Section 1245 recapture) if the machine is sold for its book value.</p>

<p>See <a href="/blog/deferred-tax-assets-explained">deferred tax assets and liabilities</a> and <a href="/blog/c-corporation-taxation-taxable-income-distributions">C corporation taxation</a>.</p>

${sources([["IRS — Instructions for Form 1120 (Schedules M-1 and M-2)", "https://www.irs.gov/instructions/i1120"], ["IRS — Instructions for Schedule M-3 (Form 1120)", "https://www.irs.gov/instructions/i1120sm3"], PUB("946", "How To Depreciate Property"), IRS_WFTC])}
`,
  },
  {
    slug: "capital-gains-and-losses-us-federal-tax",
    title: "Capital Gains and Losses Under US Federal Tax Rules",
    category: "Tax",
    excerpt:
      "What counts as a capital asset, short- vs long-term holding periods, the netting process, preferential rates, the $3,000 loss limit, wash sales, gifted and inherited basis, and the home-sale exclusion.",
    crux: [
      "Capital asset: Almost any property held for personal or investment use — but not inventory, receivables, or depreciable property and land used in a business (those are Section 1231).",
      "Holding period: More than one year is long-term; one year or less is short-term and taxed at ordinary rates.",
      "Rates: Long-term gains and qualified dividends are taxed at 0%, 15% or 20%; collectibles at up to 28%; unrecaptured Section 1250 gain at up to 25%; plus the 3.8% net investment income tax at higher incomes.",
      "Losses: Individuals deduct net capital losses up to $3,000 a year ($1,500 married filing separately) and carry the rest forward indefinitely.",
      "Basis rules: Inherited property gets a fair market value basis at death and is always long-term; gifted property generally keeps the donor's basis.",
    ],
    content: `
<h2>What is a capital asset?</h2>
<p>Section 1221 defines a capital asset as all property held by the taxpayer, <strong>except</strong>:</p>
<ul>
<li>inventory and property held primarily for sale to customers;</li>
<li>depreciable property and real property used in a trade or business (Section 1231 property);</li>
<li>accounts and notes receivable acquired in the business;</li>
<li>copyrights and creative works held by the person who created them;</li>
<li>certain supplies used in the business.</li>
</ul>
<p>Shares, bonds, a personal residence, a personal car and investment land are all capital assets. Losses on personal-use assets are not deductible.</p>

<h2>The netting process</h2>
<ol>
<li>Net short-term gains and losses together.</li>
<li>Net long-term gains and losses together (within rate groups: 28%, 25%, 0/15/20%).</li>
<li>If one result is a gain and the other a loss, net them against each other.</li>
<li>A net capital loss is deductible against ordinary income up to <strong>$3,000</strong> ($1,500 MFS); the excess carries forward indefinitely, keeping its short- or long-term character.</li>
</ol>

<div class="callout callout-example">
<p><strong>Example:</strong> Short-term gain $4,000; short-term loss $9,000; long-term gain $2,000.<br>
Net short-term = $5,000 loss. Net long-term = $2,000 gain. Overall = $3,000 net short-term loss → fully deductible this year against ordinary income. Nothing carries forward.</p>
</div>

<h2>Rates for long-term gains</h2>
<p>Long-term capital gains and qualified dividends are taxed at 0%, 15% or 20%, depending on taxable income. For 2025, the 0% rate applied to taxable income up to $48,350 for single filers ($96,700 joint), and the 20% rate began at $533,400 ($600,050 joint); these thresholds are adjusted for inflation each year in the IRS revenue procedure. Special categories:</p>
<ul>
<li><strong>Collectibles</strong> (art, coins, precious metals) — up to 28%.</li>
<li><strong>Unrecaptured Section 1250 gain</strong> (depreciation on real estate) — up to 25%.</li>
<li><strong>Net investment income tax</strong> — an extra 3.8% if modified AGI exceeds $200,000 single or $250,000 joint (not indexed).</li>
</ul>

<h2>Basis rules worth memorising</h2>
<table>
<thead><tr><th>How acquired</th><th>Basis</th><th>Holding period</th></tr></thead>
<tbody>
<tr><td>Purchase</td><td>Cost plus acquisition costs</td><td>From the day after purchase</td></tr>
<tr><td>Inheritance</td><td>Fair market value at date of death (or alternate valuation date)</td><td>Always long-term</td></tr>
<tr><td>Gift</td><td>Donor's basis (carryover). If the property's value at the time of the gift was below the donor's basis, use that lower value for measuring a loss ("dual basis")</td><td>Tacks onto the donor's period when carryover basis is used</td></tr>
</tbody>
</table>

<h2>Wash sales</h2>
<p>A loss on selling shares is disallowed if substantially identical shares are bought within <strong>30 days before or after</strong> the sale. The disallowed loss is added to the basis of the new shares, and the holding period carries over.</p>

<h2>Selling your home (Section 121)</h2>
<p>Up to $250,000 of gain ($500,000 for joint filers) is excluded if the taxpayer owned and used the home as a main residence for at least two of the five years before the sale. The exclusion can generally be used once every two years.</p>

<h2>Corporations are different</h2>
<p>C corporations have no preferential capital gains rate (everything is taxed at 21%), may deduct capital losses only against capital gains, and carry net capital losses back three years and forward five.</p>

<p>Continue with <a href="/blog/like-kind-exchanges-property-transactions-cpa-reg">like-kind exchanges and property transactions</a> and our REG notes on <a href="/cpa/reg/property-transactions-gains-losses-and-like-kind-exchanges">gains, losses and like-kind exchanges</a>.</p>

${sources([["IRS — Topic No. 409, Capital gains and losses", "https://www.irs.gov/taxtopics/tc409"], PUB("550", "Investment Income and Expenses"), PUB("544", "Sales and Other Dispositions of Assets"), PUB("523", "Selling Your Home"), ["IRS — Rev. Proc. 2024-40 (2025 inflation adjustments)", "https://www.irs.gov/pub/irs-drop/rp-24-40.pdf"]])}
`,
  },
  {
    slug: "partnership-taxation-basis-contributions-distributions",
    title: "Partnership Taxation: Basis, Contributions and Distributions",
    category: "Tax",
    excerpt:
      "How partnerships are taxed, nonrecognition on contributions, inside vs outside basis, the effect of liabilities, the loss limitation ordering, and the rules for current and liquidating distributions.",
    crux: [
      "Flow-through: A partnership files Form 1065 but pays no income tax; each partner reports its share of income, deductions and credits from Schedule K-1.",
      "Contributions: Generally tax-free (Section 721). The partnership takes the partner's basis in the property (inside basis); the partner's interest takes the same basis (outside basis).",
      "Outside basis: Increases with contributions, share of income and share of partnership liabilities; decreases with distributions, losses and reductions in liabilities.",
      "Losses: Deductible only to the extent of outside basis, then the at-risk rules, then the passive activity rules, then the excess business loss limit.",
      "Distributions: Generally tax-free — gain arises only when cash (including deemed cash from liability relief) exceeds outside basis.",
    ],
    content: `
<h2>How a partnership is taxed</h2>
<p>A partnership is a pass-through entity. It files an information return, <strong>Form 1065</strong> (due on the 15th day of the third month after year-end — March 15 for calendar-year partnerships), and gives each partner a <strong>Schedule K-1</strong>. Partners pay tax on their distributive share whether or not cash is distributed. Items with special character — capital gains, Section 1231 gains, charitable contributions, Section 179 expense — are separately stated so they keep that character on the partner's return.</p>

<h2>Contributions (Section 721)</h2>
<ul>
<li>No gain or loss is recognised when property is contributed in exchange for a partnership interest.</li>
<li><strong>Inside basis</strong>: the partnership's basis in the property equals the partner's adjusted basis (Section 723), and its holding period tacks.</li>
<li><strong>Outside basis</strong>: the partner's basis in the interest equals cash plus the adjusted basis of property contributed (Section 722).</li>
<li><strong>Exceptions:</strong> contributing <em>services</em> for a capital interest is taxable compensation; and if a partner is relieved of liabilities exceeding its basis, the excess is gain.</li>
<li>Built-in gain or loss on contributed property is allocated back to the contributing partner when recognised (Section 704(c)).</li>
</ul>

<h2>Liabilities (Section 752)</h2>
<p>An increase in a partner's share of partnership liabilities is treated as a <strong>cash contribution</strong> (increasing outside basis). A decrease is a <strong>deemed cash distribution</strong>.</p>

<div class="callout callout-example">
<p><strong>Example — contribution with a mortgage:</strong> A contributes land (basis $40,000, fair value $100,000) subject to a $30,000 mortgage to a new partnership for a 25% interest. The partnership assumes the mortgage.<br>
A's outside basis = $40,000 − $30,000 (liability relieved) + 25% × $30,000 (A's share of the partnership's new liability) = <strong>$17,500</strong>. Because the net relief ($22,500) doesn't exceed A's basis, no gain is recognised.</p>
</div>

<h2>Adjusting outside basis each year</h2>
<p>Opening basis + contributions + share of income (including tax-exempt income) + increase in share of liabilities − distributions − decrease in share of liabilities − share of losses and non-deductible expenses. Basis can't go below zero.</p>

<h2>The loss limitation ordering</h2>
<ol>
<li><strong>Basis</strong> (Section 704(d)) — losses beyond outside basis are suspended until basis is restored.</li>
<li><strong>At-risk</strong> (Section 465).</li>
<li><strong>Passive activity</strong> (Section 469).</li>
<li><strong>Excess business loss</strong> (Section 461(l)) for non-corporate taxpayers.</li>
</ol>

<h2>Distributions</h2>
<table>
<thead><tr><th></th><th>Current (non-liquidating)</th><th>Liquidating</th></tr></thead>
<tbody>
<tr><td>Gain to partner</td><td>Only if money distributed (including deemed distributions from liability relief) exceeds outside basis</td><td>Same</td></tr>
<tr><td>Loss to partner</td><td>Never</td><td>Only if the partner receives nothing but money, unrealised receivables and inventory, and their basis is less than outside basis</td></tr>
<tr><td>Basis of property received</td><td>The partnership's basis, but limited to the partner's remaining outside basis after cash</td><td>The partner's remaining outside basis is allocated among the properties received</td></tr>
<tr><td>Order of basis allocation</td><td colspan="2">Money first, then unrealised receivables and inventory ("hot assets") at up to their inside basis, then other property</td></tr>
</tbody>
</table>

<div class="callout callout-example">
<p><strong>Example — current distribution:</strong> B's outside basis is $25,000. B receives $10,000 cash and land with an inside basis of $20,000 (fair value $30,000).<br>
Cash reduces basis to $15,000 — no gain. The land's basis to B is limited to the remaining <strong>$15,000</strong>, and B's outside basis falls to zero.</p>
</div>

<h2>Guaranteed payments</h2>
<p>Payments for services or capital determined without regard to partnership income are ordinary income to the partner and generally deductible by the partnership. They are subject to self-employment tax when paid for services.</p>

<p>For planning angles, see <a href="/blog/tax-planning-partnerships-distributions-basis">tax planning for partnerships</a>. Study the full topic in <a href="/cpa/reg/partnership-taxation">REG partnership taxation</a>.</p>

${sources([PUB("541", "Partnerships"), ["IRS — Instructions for Form 1065", "https://www.irs.gov/instructions/i1065"], ["IRS — Partner's Instructions for Schedule K-1 (Form 1065)", "https://www.irs.gov/instructions/i1065sk1"]])}
`,
  },
  {
    slug: "s-corporation-taxation-shareholder-basis-loss-limits",
    title: "S Corporation Taxation: Shareholder Basis and Loss Limitations",
    category: "Tax",
    excerpt:
      "Who can elect S status, how income passes through, calculating stock and debt basis, the ordering rules, loss limitations, distributions from AAA and E&P, and the built-in gains tax.",
    crux: [
      "Eligibility: A domestic corporation with no more than 100 shareholders, only eligible shareholders (no nonresident aliens, partnerships or C corporations) and one class of stock.",
      "Pass-through: The S corporation files Form 1120-S; shareholders report their pro rata share of items from Schedule K-1, allocated per share per day.",
      "Basis: Stock basis plus debt basis — only loans the shareholder makes directly to the corporation count, not guarantees.",
      "Ordering: Increase basis for income first, then reduce for distributions, then non-deductible expenses, then losses.",
      "Distributions: Tax-free to the extent of basis when there's no accumulated E&P; with E&P, they come from the AAA first, then are taxed as dividends.",
    ],
    content: `
<h2>Electing S status</h2>
<ul>
<li>Domestic corporation (or an LLC that elects to be taxed as a corporation).</li>
<li><strong>No more than 100 shareholders</strong> — members of a family can elect to be treated as one.</li>
<li><strong>Eligible shareholders only</strong>: individuals who are US citizens or residents, estates, certain trusts and certain exempt organisations. <strong>Nonresident aliens can't be shareholders</strong> — an important point for founders living in India.</li>
<li><strong>One class of stock</strong> — differences in voting rights alone are allowed.</li>
<li>File <strong>Form 2553</strong>, signed by all shareholders, by the 15th day of the third month of the tax year for which it's to take effect (relief is available for late elections).</li>
</ul>

<h2>Pass-through of income</h2>
<p>The S corporation files <strong>Form 1120-S</strong> (due March 15 for calendar-year corporations). Income, deductions and credits pass through to shareholders on a per-share, per-day basis, with separately stated items keeping their character. Shareholder-employees owning more than 2% are treated like partners for fringe benefits — their health insurance premiums are included in W-2 wages and deducted above the line.</p>

<h2>Calculating shareholder basis</h2>
<p>The ordering rules (Treasury Regulation 1.1367-1) apply each year:</p>
<ol>
<li>Opening stock basis</li>
<li><strong>+</strong> Income items, including tax-exempt income</li>
<li><strong>−</strong> Distributions (non-dividend)</li>
<li><strong>−</strong> Non-deductible, non-capital expenses (such as 50% of meals and penalties)</li>
<li><strong>−</strong> Loss and deduction items</li>
</ol>
<p>Losses beyond stock basis then reduce <strong>debt basis</strong> — loans the shareholder made directly to the S corporation. Guaranteeing a bank loan to the company doesn't create debt basis. When later income arrives, debt basis is restored before stock basis.</p>

<div class="callout callout-example">
<p><strong>Example:</strong> Sam owns 100% of an S corporation. Opening stock basis is $10,000; Sam has also lent the company $15,000. This year: ordinary loss $30,000, tax-exempt income $2,000, distributions $4,000.<br>
Stock basis: $10,000 + $2,000 − $4,000 = $8,000, then the loss reduces it to $0 (using $8,000 of the loss).<br>
Debt basis absorbs the next $15,000 of loss.<br>
Deductible loss (subject to at-risk and passive rules) = <strong>$23,000</strong>; the remaining <strong>$7,000</strong> is suspended and carried forward indefinitely.</p>
</div>

<h2>Distributions</h2>
<table>
<thead><tr><th>Situation</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>No accumulated earnings and profits (E&amp;P)</td><td>Tax-free to the extent of stock basis; any excess is capital gain</td></tr>
<tr><td>Accumulated E&amp;P from C corporation years</td><td>1) Tax-free from the accumulated adjustments account (AAA) up to basis; 2) dividend to the extent of E&amp;P; 3) tax-free return of remaining basis; 4) capital gain</td></tr>
</tbody>
</table>
<p>Distributing appreciated property triggers gain at the corporate level, which flows through to shareholders.</p>

<h2>Corporate-level taxes</h2>
<ul>
<li><strong>Built-in gains tax</strong> — a former C corporation pays tax at 21% on net built-in gains recognised within five years of converting.</li>
<li><strong>Excess passive investment income tax</strong> — applies if the company has accumulated E&amp;P and passive income above 25% of gross receipts. Three consecutive years can terminate the election.</li>
</ul>

<h2>Reasonable compensation</h2>
<p>Shareholder-employees must take reasonable wages for services before distributions; the IRS can recharacterise distributions as wages subject to employment taxes. See <a href="/blog/tax-planning-s-corporations-salary-distributions">tax planning for S corporations</a>.</p>

<p>Study further in <a href="/cpa/reg/s-corporation-taxation">REG S corporation taxation</a>.</p>

${sources([["IRS — Instructions for Form 1120-S", "https://www.irs.gov/instructions/i1120s"], ["IRS — Instructions for Form 2553", "https://www.irs.gov/instructions/i2553"], ["IRS — S corporation stock and debt basis", "https://www.irs.gov/businesses/small-businesses-self-employed/s-corporation-stock-and-debt-basis"], ["eCFR — 26 CFR 1.1367-1, Adjustments to basis of shareholder's stock", "https://www.ecfr.gov/current/title-26/section-1.1367-1"]])}
`,
  },
  {
    slug: "c-corporation-taxation-taxable-income-distributions",
    title: "C Corporation Taxation: Taxable Income and Distributions",
    category: "Tax",
    excerpt:
      "The 21% corporate rate, computing taxable income, the dividends received deduction, charitable and interest limits, NOLs, earnings and profits, and how distributions are taxed to shareholders.",
    crux: [
      "Rate: A flat 21% on taxable income, reported on Form 1120 (due the 15th day of the fourth month after year-end).",
      "Special deductions: The dividends received deduction (50%, 65% or 100% depending on ownership) and limits on charitable contributions (10% of taxable income, with a new 1% floor from 2026).",
      "Business interest: Generally limited to 30% of adjusted taxable income, which is again computed before depreciation and amortisation for tax years beginning after 2024.",
      "Distributions: Taxed as dividends to the extent of current and accumulated earnings and profits, then a return of basis, then capital gain.",
      "Property distributions: The corporation recognises gain (but not loss) as if it sold the property at fair market value.",
    ],
    content: `
<h2>Computing corporate taxable income</h2>
<table>
<tbody>
<tr><td>Gross income (sales − cost of goods sold, plus investment income and gains)</td></tr>
<tr><td>− Ordinary and necessary business deductions</td></tr>
<tr><td>= Taxable income before special deductions</td></tr>
<tr><td>− Net operating loss deduction (limited to 80% of taxable income for post-2017 losses)</td></tr>
<tr><td>− Dividends received deduction</td></tr>
<tr><td>= <strong>Taxable income × 21%</strong></td></tr>
</tbody>
</table>

<h2>Dividends received deduction (DRD)</h2>
<table>
<thead><tr><th>Ownership of the paying domestic corporation</th><th>DRD</th></tr></thead>
<tbody>
<tr><td>Less than 20%</td><td>50%</td></tr>
<tr><td>20% to less than 80%</td><td>65%</td></tr>
<tr><td>80% or more (affiliated group)</td><td>100%</td></tr>
</tbody>
</table>
<p>The 50% and 65% deductions are limited to that percentage of taxable income (computed without the DRD, NOL and capital loss carryback), unless taking the full DRD creates or increases an NOL.</p>

<h2>Other limits</h2>
<ul>
<li><strong>Charitable contributions</strong>: limited to 10% of taxable income. For tax years beginning after December 31, 2025, the OBBBA allows a deduction only for contributions exceeding 1% of taxable income. Excess contributions carry forward five years.</li>
<li><strong>Business interest (Section 163(j))</strong>: limited to business interest income plus 30% of adjusted taxable income. For tax years beginning after December 31, 2024, ATI is again calculated before depreciation, amortisation and depletion (an EBITDA-style measure). Small businesses meeting the gross receipts test are exempt.</li>
<li><strong>Capital losses</strong>: only against capital gains; carried back 3 years and forward 5.</li>
<li><strong>Meals</strong>: generally 50% deductible; entertainment is not deductible.</li>
<li><strong>Corporate alternative minimum tax</strong>: 15% of adjusted financial statement income for corporations with average annual financial statement income over $1 billion.</li>
</ul>

<h2>Worked example</h2>
<div class="callout callout-example">
<p>A corporation has income from operations of $500,000 and receives $100,000 of dividends from a 30%-owned domestic corporation. Charitable contributions are $70,000.</p>
<ul>
<li>Taxable income before charitable and special deductions = $600,000.</li>
<li>Charitable limit = 10% × $600,000 = $60,000; floor = 1% × $600,000 = $6,000. Deductible = contributions above the floor ($64,000), capped at $60,000 → <strong>$60,000</strong>. The rest carries forward.</li>
<li>Taxable income before DRD = $540,000. DRD = 65% × $100,000 = $65,000 (65% of taxable income would be $351,000, so no limit applies).</li>
<li>Taxable income = $475,000 → tax = <strong>$99,750</strong>.</li>
</ul>
<p>(Carryforward treatment of contributions disallowed by the floor depends on the final rules — check IRS guidance.)</p>
</div>

<h2>Earnings and profits and distributions</h2>
<ol>
<li><strong>Dividend</strong> — to the extent of current E&amp;P, then accumulated E&amp;P.</li>
<li><strong>Return of capital</strong> — reduces the shareholder's stock basis.</li>
<li><strong>Capital gain</strong> — any excess.</li>
</ol>
<p>E&amp;P approximates economic income: taxable income plus tax-exempt income and the DRD, minus federal income tax and non-deductible expenses, with depreciation recomputed on a slower basis.</p>

<h2>Property distributions</h2>
<ul>
<li>The corporation recognises <strong>gain</strong> on distributing appreciated property, as if sold at fair market value; losses are not recognised.</li>
<li>The shareholder's dividend equals the property's fair market value minus any liability assumed; its basis in the property is fair market value.</li>
</ul>

<h2>Penalty taxes</h2>
<p>The 20% accumulated earnings tax and 20% personal holding company tax discourage keeping profits in the company to avoid shareholder-level dividend tax.</p>

<p>Continue with <a href="/blog/tax-basis-vs-book-basis-differences">tax basis vs book basis</a> and <a href="/cpa/reg/c-corporation-taxation">REG C corporation taxation</a>.</p>

${sources([PUB("542", "Corporations"), ["IRS — Instructions for Form 1120", "https://www.irs.gov/instructions/i1120"], ["IRS — Working Families Tax Cuts: businesses", "https://www.irs.gov/newsroom/working-families-tax-cuts-businesses"]])}
`,
  },
  {
    slug: "like-kind-exchanges-property-transactions-cpa-reg",
    title: "Like-Kind Exchanges and Property Transactions for CPA REG",
    category: "Tax",
    excerpt:
      "Section 1031 after 2017 (real property only), boot, gain recognised, basis of replacement property, the 45- and 180-day deadlines, related parties and involuntary conversions — with worked examples.",
    crux: [
      "Scope: Since 2018, Section 1031 applies only to real property held for business or investment use — not to equipment, vehicles, shares or property held for sale.",
      "Deferral, not exclusion: Realised gain is deferred into the basis of the replacement property.",
      "Boot: Cash, other property or net debt relief received triggers recognition of gain up to the lesser of realised gain or boot received. Losses are never recognised.",
      "Deadlines: Identify replacement property within 45 days and complete the exchange within 180 days (or the return due date, if earlier).",
      "Basis of new property: Fair market value of the new property minus the deferred gain.",
    ],
    content: `
<h2>What qualifies</h2>
<ul>
<li>Both properties must be <strong>real property</strong> held for productive use in a business or for investment. Land, buildings, rental houses and commercial property are generally like-kind with one another.</li>
<li>US real property and foreign real property are <strong>not</strong> like-kind.</li>
<li>Property held primarily for sale (dealer property) and personal residences don't qualify.</li>
<li>Equipment, vehicles and other personal property stopped qualifying from 2018.</li>
</ul>

<h2>Gain realised vs gain recognised</h2>
<p><strong>Realised gain</strong> = amount realised (fair market value of property received + cash + liabilities assumed by the other party) − adjusted basis of property given up.</p>
<p><strong>Recognised gain</strong> = the lesser of realised gain or <strong>boot received</strong>. Boot includes cash, non-like-kind property and <em>net</em> liability relief.</p>

<div class="callout callout-example">
<p><strong>Example:</strong> An investor exchanges land (adjusted basis $300,000, fair value $500,000) for a building worth $450,000 plus $50,000 cash.<br>
Realised gain = $500,000 − $300,000 = $200,000.<br>
Boot received = $50,000 → recognised gain = <strong>$50,000</strong> (capital gain on investment land).<br>
Deferred gain = $150,000. Basis of the building = $450,000 − $150,000 = <strong>$300,000</strong>.<br>
Check: old basis $300,000 − boot received $50,000 + gain recognised $50,000 = $300,000.</p>
</div>

<h2>Liabilities</h2>
<ul>
<li>Liability relief is treated as boot received; liabilities assumed are netted against it.</li>
<li>Cash <em>paid</em> by the taxpayer offsets liability relief, but cash <em>received</em> is never offset by liabilities assumed.</li>
</ul>

<h2>Timing rules</h2>
<ul>
<li>The replacement property must be <strong>identified in writing within 45 days</strong> after transferring the relinquished property.</li>
<li>It must be <strong>received within 180 days</strong> or by the due date (with extensions) of the tax return for the year of transfer, whichever is earlier.</li>
<li>Deferred exchanges use a <strong>qualified intermediary</strong> so the taxpayer never has actual or constructive receipt of the cash.</li>
<li>Exchanges are reported on <strong>Form 8824</strong>.</li>
</ul>

<h2>Related parties</h2>
<p>If either related party disposes of the exchanged property within <strong>two years</strong>, the deferred gain is generally triggered.</p>

<h2>Holding period and depreciation</h2>
<p>The holding period of the old property tacks onto the new. Depreciation recapture potential carries over to the replacement property.</p>

<h2>Involuntary conversions (Section 1033)</h2>
<p>If property is destroyed, stolen or condemned and the insurance or award proceeds are reinvested in similar property, the taxpayer may elect to defer gain to the extent proceeds are reinvested. The replacement period is generally <strong>two years</strong> after the end of the year in which gain is realised — three years for condemned business or investment real property.</p>

<p>Pair this with <a href="/blog/tax-consequences-property-sales-exchanges">tax consequences of property sales</a> and <a href="/cpa/reg/property-transactions-gains-losses-and-like-kind-exchanges">REG property transactions</a>.</p>

${sources([["IRS — Instructions for Form 8824, Like-Kind Exchanges", "https://www.irs.gov/instructions/i8824"], PUB("544", "Sales and Other Dispositions of Assets"), ["IRS — Like-kind exchanges: real estate tax tips", "https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips"]])}
`,
  },
  {
    slug: "circular-230-tax-practitioner-ethics",
    title: "Circular 230 and Tax Practitioner Ethics: CPA REG Revision",
    category: "Tax",
    excerpt:
      "Who Circular 230 covers, the duties that matter most for the exam — diligence, client omissions, fees, conflicts, return positions and written advice — plus preparer penalties and AICPA tax standards.",
    crux: [
      "Who's covered: Attorneys, CPAs, enrolled agents, enrolled actuaries and enrolled retirement plan agents practising before the IRS.",
      "Client omissions (§10.21): A practitioner who learns of an error or omission must promptly advise the client of the consequences — but isn't required to tell the IRS.",
      "Fees (§10.27): No unconscionable fees; contingent fees only for IRS examinations of original returns, certain amended returns or refund claims, interest and penalty claims, and litigation.",
      "Return positions (§10.34): Don't sign a return with an unreasonable position or a willful or reckless understatement; advise clients about penalties and disclosure.",
      "Preparer penalties (IRC §6694): The greater of $1,000 or 50% of the fee for an unreasonable position; the greater of $5,000 or 75% for willful or reckless conduct.",
    ],
    content: `
<h2>What Circular 230 is</h2>
<p>Treasury Department Circular No. 230 (31 CFR Part 10) contains the regulations governing practice before the Internal Revenue Service. The IRS Office of Professional Responsibility enforces it. Practice includes preparing and filing documents, corresponding with the IRS, and representing clients at conferences and hearings.</p>

<h2>Key duties for the exam</h2>
<table>
<thead><tr><th>Section</th><th>Duty</th></tr></thead>
<tbody>
<tr><td>§10.20</td><td>Provide records and information to the IRS on proper request, unless privileged</td></tr>
<tr><td>§10.21</td><td>Advise the client promptly of any noncompliance, error or omission and its consequences</td></tr>
<tr><td>§10.22</td><td>Exercise due diligence in preparing returns and documents and in determining the accuracy of representations</td></tr>
<tr><td>§10.23</td><td>Don't unreasonably delay the prompt disposition of any matter before the IRS</td></tr>
<tr><td>§10.27</td><td>No unconscionable fees; contingent fees only in permitted situations</td></tr>
<tr><td>§10.28</td><td>Return client records on request, even if fees are unpaid (practitioner's own work product may be withheld under conditions)</td></tr>
<tr><td>§10.29</td><td>Conflicts of interest — representation only with informed written consent and if the practitioner reasonably believes it can provide competent representation to each client</td></tr>
<tr><td>§10.30</td><td>Solicitation and advertising must not be false, fraudulent or misleading</td></tr>
<tr><td>§10.34</td><td>Standards for tax returns and documents</td></tr>
<tr><td>§10.35</td><td>Competence</td></tr>
<tr><td>§10.37</td><td>Requirements for written advice — reasonable factual and legal assumptions, consider all relevant facts, no reliance on the likelihood of audit</td></tr>
<tr><td>§10.50–10.52</td><td>Sanctions: censure, suspension, disbarment and monetary penalties</td></tr>
</tbody>
</table>

<h2>Permitted contingent fees (§10.27)</h2>
<ol>
<li>An IRS examination of, or challenge to, an original return.</li>
<li>An amended return or claim for refund filed within 120 days of receiving a written notice of examination or challenge.</li>
<li>A claim for credit or refund solely of statutory interest or penalties.</li>
<li>Services in connection with judicial proceedings arising under the Internal Revenue Code.</li>
</ol>

<h2>Return positions and preparer penalties</h2>
<ul>
<li>A practitioner may rely in good faith on client information without verification, but can't ignore implications of information furnished and must make reasonable inquiries if information appears incorrect or incomplete.</li>
<li><strong>IRC §6694(a)</strong> — understatement due to an unreasonable position: the greater of <strong>$1,000</strong> or <strong>50%</strong> of the income derived from the return. A position is not unreasonable if there is substantial authority, or if it has a reasonable basis and is adequately disclosed (Form 8275).</li>
<li><strong>IRC §6694(b)</strong> — willful or reckless conduct: the greater of <strong>$5,000</strong> or <strong>75%</strong> of the income derived.</li>
<li><strong>IRC §6695</strong> — penalties for failing to sign a return, furnish a copy to the taxpayer, include a PTIN, or meet due diligence requirements for certain credits and head of household status.</li>
</ul>

<h2>AICPA Statements on Standards for Tax Services</h2>
<p>CPAs who are AICPA members must also follow the Statements on Standards for Tax Services (SSTS), revised effective January 1, 2024. They cover tax return positions, answers to questions on returns, procedural aspects, use of estimates, departures from prior positions, knowledge of errors, and the form and content of advice.</p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> When a practitioner discovers a client's prior-year error, the duty is to advise the client — not to file an amended return without consent and not to inform the IRS. If the client refuses to correct a material error, the practitioner should consider whether to continue the engagement.</p>
</div>

<p>Study further in <a href="/cpa/reg/circular-230-and-practitioner-ethics">REG Circular 230 and practitioner ethics</a>.</p>

${sources([["IRS — Treasury Department Circular No. 230 (Publication 230)", "https://www.irs.gov/pub/irs-pdf/pcir230.pdf"], ["IRS — Circular 230 tax professionals", "https://www.irs.gov/tax-professionals/circular-230-tax-professionals"], ["eCFR — 26 CFR 1.6694-1, Section 6694 penalties applicable to tax return preparers", "https://www.ecfr.gov/current/title-26/section-1.6694-1"], ["AICPA & CIMA — Statements on Standards for Tax Services", "https://www.aicpa-cima.com/resources/landing/statements-on-standards-for-tax-services"]])}
`,
  },
];
