import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

/** TCP planning explainers. Same sourcing rules as blog-tax.ts (IRS first). */

const IRS_2026: [string, string] = [
  "IRS — Tax inflation adjustments for tax year 2026 (IR-2025-103)",
  "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill",
];
const IRS_WFTC: [string, string] = [
  "IRS — Working Families Tax Cuts (One, Big, Beautiful Bill) provisions",
  "https://www.irs.gov/newsroom/working-families-tax-cuts",
];
const IRS_RETIRE_2026: [string, string] = [
  "IRS — 401(k) limit increases to $24,500 for 2026, IRA limit increases to $7,500",
  "https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500",
];
const AICPA_BLUEPRINTS: [string, string] = [
  "AICPA & CIMA — CPA Exam Blueprints",
  "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam",
];
const PUB = (n: string, title: string): [string, string] => [
  `IRS — Publication ${n}, ${title}`,
  n === "536"
    ? "https://www.irs.gov/forms-pubs/about-publication-536"
    : `https://www.irs.gov/publications/p${n.toLowerCase().replace("-", "")}`,
];

export const taxPosts2: BlogSeed[] = [
  {
    slug: "us-individual-tax-planning-strategies-cpa-tcp",
    title: "US Individual Tax Planning Strategies for CPA TCP",
    category: "Tax",
    excerpt:
      "Timing income and deductions, bunching, retirement and HSA contributions, harvesting gains and losses, gifting, Roth conversions and education savings — the planning ideas TCP tests, updated for 2026.",
    crux: [
      "Timing: Defer income and accelerate deductions when rates will be the same or lower next year; do the reverse when rates are rising or deductions will be worth more later.",
      "Bunching: Itemising in alternate years — for example, doubling charitable gifts — can beat the standard deduction. From 2026, non-itemisers can also deduct up to $1,000 ($2,000 joint) of cash gifts.",
      "Tax-advantaged savings: 401(k) up to $24,500 and IRA up to $7,500 in 2026, plus HSAs — deductions now, tax-free or tax-deferred growth.",
      "Investments: Harvest losses to offset gains (watch the 30-day wash sale rule); harvest gains in years when the 0% capital gains rate applies.",
      "Wealth transfer: Annual gift exclusion of $19,000 per recipient in 2026, a $15,000,000 estate exclusion, and stepped-up basis for inherited assets.",
    ],
    content: `
<h2>What TCP expects</h2>
<p>The Tax Compliance and Planning (TCP) Discipline goes beyond computing tax: it asks what the taxpayer <em>should do</em> to reduce tax legitimately. Its first area covers compliance and planning for individuals, including personal financial planning. The strategies below come up repeatedly.</p>

<h2>1. Timing income and deductions</h2>
<ul>
<li>Cash-method taxpayers can often defer a December bonus or invoice to January, or prepay deductible expenses before December 31.</li>
<li>If next year's marginal rate will be <em>higher</em> (a promotion, a spouse returning to work), do the opposite: accelerate income.</li>
<li>Remember the constructive receipt rule — income made available without restriction is taxable even if not collected.</li>
</ul>

<h2>2. Bunching and the 2026 charitable rules</h2>
<p>With a $32,200 joint standard deduction in 2026, many households gain nothing from itemising each year. Bunching two years of charitable gifts (or property tax payments, within the SALT cap) into one year can push itemised deductions above the standard deduction, with the standard deduction taken in the alternate year.</p>
<p>From 2026, the OBBBA changes the arithmetic:</p>
<ul>
<li>Itemisers can deduct charitable contributions only to the extent they exceed <strong>0.5% of the contribution base</strong> (broadly, AGI).</li>
<li>Non-itemisers can deduct up to <strong>$1,000</strong> ($2,000 joint) of cash gifts to qualifying charities. Gifts to donor-advised funds don't qualify.</li>
<li>For taxpayers in the 37% bracket, the tax benefit of itemised deductions is capped.</li>
</ul>

<h2>3. Retirement and health savings</h2>
<ul>
<li>2026 limits: 401(k)/403(b)/457 deferrals <strong>$24,500</strong> (catch-up $8,000 at 50+, or $11,250 at ages 60–63); IRA <strong>$7,500</strong> (catch-up $1,100).</li>
<li>Traditional contributions reduce taxable income now; Roth contributions give tax-free withdrawals later. The right choice depends on today's rate versus the expected rate in retirement.</li>
<li>Health savings accounts (HSAs) are triple-advantaged: deductible contributions, tax-free growth and tax-free withdrawals for medical costs. From 2026, bronze and catastrophic marketplace plans are HSA-compatible.</li>
</ul>

<h2>4. Investment planning</h2>
<ul>
<li><strong>Tax-loss harvesting</strong> — sell losers to offset gains and up to $3,000 of ordinary income; avoid buying substantially identical securities within 30 days before or after.</li>
<li><strong>Gain harvesting</strong> — in a low-income year, realise long-term gains taxed at 0% and reset basis higher.</li>
<li><strong>Asset location</strong> — hold tax-inefficient investments (taxable bonds) in tax-deferred accounts, and equities with qualified dividends in taxable accounts.</li>
<li><strong>Qualified small business stock (Section 1202)</strong> — for stock issued after July 4, 2025, the OBBBA allows a 50%, 75% or 100% exclusion after three, four or five years.</li>
</ul>

<h2>5. Roth conversions</h2>
<p>Converting a traditional IRA to a Roth IRA is taxable now, but future growth is tax-free and Roth IRAs have no required minimum distributions for the original owner. Conversions are attractive in low-income years — for example, between retirement and the start of required distributions.</p>

<h2>6. Family and wealth transfer</h2>
<ul>
<li>Annual gift exclusion: <strong>$19,000</strong> per recipient in 2026 ($38,000 for a married couple electing gift splitting).</li>
<li>Estate and gift tax basic exclusion: <strong>$15,000,000</strong> per person in 2026.</li>
<li>Gift appreciated assets to family members in lower brackets — subject to the kiddie tax for children's unearned income.</li>
<li>Hold appreciated assets until death to get a stepped-up basis for heirs.</li>
<li>Fund 529 plans for education — earnings are tax-free when used for qualified expenses.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam approach:</strong> TCP simulations often give a client's facts and ask for the strategy that minimises total tax over several years — always consider both this year and the reversal year.</p>
</div>

<p>See also <a href="/blog/retirement-accounts-tax-planning-cpa-tcp">retirement accounts and tax planning</a> and <a href="/blog/charitable-contributions-itemized-deductions">charitable contributions and itemized deductions</a>.</p>

${sources([IRS_2026, IRS_WFTC, IRS_RETIRE_2026, PUB("550", "Investment Income and Expenses"), AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "tax-planning-partnerships-distributions-basis",
    title: "Tax Planning for Partnerships: Distributions and Basis",
    category: "Tax",
    excerpt:
      "Planning around partnership distributions and basis — liability shifts, hot assets, disguised sales, the Section 754 election, mixing-bowl rules and choosing between guaranteed payments and allocations.",
    crux: [
      "Basis is the gatekeeper: It limits both deductible losses and tax-free cash distributions — plan contributions, loans and liability allocations around it.",
      "Liability shifts: A reduction in a partner's share of liabilities is a deemed cash distribution that can trigger gain.",
      "Disguised sales: A contribution followed by a distribution to the same partner within two years is presumed to be a sale.",
      "Section 754 election: Lets the partnership adjust inside basis on transfers and distributions, so a buying partner isn't taxed on gain it already paid for.",
      "Hot assets and mixing bowls: Distributions that shift unrealised receivables or inventory trigger ordinary income, and distributing contributed built-in-gain property within seven years triggers gain to the contributor.",
    ],
    content: `
<h2>1. Manage outside basis before taking losses or cash</h2>
<p>A partner can deduct losses only up to outside basis, and receives cash tax-free only up to outside basis. Ways to increase basis before year-end:</p>
<ul>
<li>Contribute additional cash or property.</li>
<li>Increase the partner's share of partnership liabilities — for example, by personally guaranteeing recourse debt, which shifts the economic risk of loss (and the liability allocation) to that partner.</li>
<li>Time distributions after the year's income allocation, since basis is increased for income before distributions are tested at year-end.</li>
</ul>

<h2>2. Watch for deemed distributions</h2>
<p>Paying off partnership debt, refinancing, or admitting a new partner can reduce an existing partner's share of liabilities. That reduction is treated as a cash distribution and is taxable if it exceeds the partner's basis — a common trap when partnerships with depreciated real estate restructure their debt.</p>

<h2>3. Avoid disguised sales (Section 707)</h2>
<p>If a partner contributes property and the partnership distributes money or other property to that partner within <strong>two years</strong>, the transactions are presumed to be a sale unless the facts clearly show otherwise. Exceptions include reasonable guaranteed payments, preferred returns and operating cash flow distributions. Distributions after two years are presumed <em>not</em> to be a sale.</p>

<h2>4. Use the Section 754 election</h2>
<table>
<thead><tr><th>Situation</th><th>Adjustment</th><th>Benefit</th></tr></thead>
<tbody>
<tr><td>A partner buys an interest from another partner (Section 743(b))</td><td>The buyer gets a special basis adjustment to its share of inside basis</td><td>Extra depreciation, and less gain when the partnership sells appreciated assets</td></tr>
<tr><td>The partnership distributes property and recognises gain, or a partner's basis in distributed property changes (Section 734(b))</td><td>Adjusts the basis of remaining partnership property</td><td>Keeps inside and outside basis aligned</td></tr>
</tbody>
</table>
<p>A mandatory adjustment applies anyway if the partnership has a substantial built-in loss (over $250,000).</p>

<h2>5. Hot assets (Section 751)</h2>
<p>When a partner sells its interest, or receives a disproportionate distribution, the portion attributable to unrealised receivables and inventory items is taxed as <strong>ordinary income</strong>, not capital gain. Depreciation recapture counts as an unrealised receivable.</p>

<h2>6. Mixing-bowl rules</h2>
<ul>
<li><strong>Section 704(c)(1)(B)</strong> — if contributed property with built-in gain is distributed to <em>another</em> partner within seven years, the contributor recognises the built-in gain.</li>
<li><strong>Section 737</strong> — if the contributor receives <em>other</em> property within seven years, it recognises gain up to the lesser of the excess distribution or the remaining built-in gain.</li>
</ul>

<h2>7. Guaranteed payments vs allocations</h2>
<p>A guaranteed payment gives the partner ordinary income regardless of partnership profit and is generally deductible by the partnership. A larger allocation of profits instead keeps the income's character (for example, capital gain) but depends on the partnership being profitable. Allocations must have <strong>substantial economic effect</strong> to be respected.</p>

<div class="callout callout-example">
<p><strong>Example:</strong> A partner with $40,000 of outside basis expects a $60,000 share of losses this year. A $25,000 cash contribution before year-end — or guaranteeing $25,000 of partnership debt — increases basis to $65,000, allowing the full loss (subject to at-risk and passive limits) instead of suspending $20,000.</p>
</div>

<p>Start with <a href="/blog/partnership-taxation-basis-contributions-distributions">partnership taxation basics</a>.</p>

${sources([PUB("541", "Partnerships"), ["IRS — Instructions for Form 1065", "https://www.irs.gov/instructions/i1065"], ["IRS — Partner's Instructions for Schedule K-1 (Form 1065)", "https://www.irs.gov/instructions/i1065sk1"], AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "tax-planning-s-corporations-salary-distributions",
    title: "Tax Planning for S Corporations: Salary, Distributions and Basis",
    category: "Tax",
    excerpt:
      "Setting reasonable compensation, the payroll tax trade-off, the QBI deduction, building basis to use losses, timing distributions, health insurance for 2% shareholders and the pass-through entity tax.",
    crux: [
      "Reasonable salary: Shareholder-employees must be paid reasonable wages before taking distributions; the IRS can reclassify distributions as wages.",
      "Payroll tax trade-off: Wages bear FICA; distributions don't. But under-paying salary invites IRS challenge and can reduce the QBI deduction where W-2 wage limits apply.",
      "Basis planning: Losses need basis — lend money directly to the company (guarantees don't count) or contribute capital before year-end.",
      "Distributions: Keep them pro rata to share ownership; disproportionate distributions can threaten the one-class-of-stock rule.",
      "State taxes: Many states offer an elective pass-through entity tax (PTET) paid by the company, which the IRS has said is deductible at entity level.",
    ],
    content: `
<h2>1. Reasonable compensation</h2>
<p>An S corporation shareholder who works in the business must receive <strong>reasonable compensation</strong> before non-wage distributions. The IRS looks at factors such as training and experience, duties, time devoted, what comparable businesses pay for similar services, and the company's dividend history. Courts have repeatedly reclassified distributions as wages where shareholder-officers took little or no salary.</p>

<h2>2. The payroll tax trade-off</h2>
<div class="callout callout-example">
<p><strong>Example:</strong> An S corporation earns $200,000 before paying its sole shareholder. Option A: $120,000 salary + $80,000 distribution. Option B: $60,000 salary + $140,000 distribution.<br>
Option B saves FICA (employer and employee combined 15.3% up to the Social Security wage base) on $60,000 — about $9,180 — <em>if</em> $60,000 is defensible as reasonable compensation for the work performed. If it isn't, the IRS can reclassify, with penalties and interest.</p>
</div>

<h2>3. Interaction with the QBI deduction</h2>
<p>The Section 199A qualified business income deduction (made permanent by the OBBBA) is up to 20% of QBI. Shareholder wages are <em>not</em> QBI, so a lower salary raises QBI — but above the income thresholds, the deduction is limited by 50% of W-2 wages paid by the business (or 25% of wages plus 2.5% of qualified property). Cutting salary too far can reduce the deduction.</p>

<h2>4. Building basis to use losses</h2>
<ul>
<li>Lend money <strong>directly</strong> to the S corporation to create debt basis. A guarantee of a bank loan doesn't create basis until the shareholder actually pays on it.</li>
<li>Back-to-back loans (the shareholder borrows and re-lends to the company) can create basis if they're bona fide.</li>
<li>Remember the ordering: income increases basis first, distributions reduce it before losses — so a year-end distribution can reduce the losses a shareholder can deduct.</li>
</ul>

<h2>5. Distributions</h2>
<ul>
<li>Make distributions <strong>pro rata</strong> by shares. Unequal distributions may be treated as evidence of a second class of stock (although governing-provision rules give some protection).</li>
<li>If the company has earnings and profits from C corporation years, distributions beyond the accumulated adjustments account are taxable dividends. An election to distribute E&amp;P first can be useful in a low-rate year.</li>
<li>Distributing appreciated property triggers corporate-level gain that flows through to all shareholders.</li>
</ul>

<h2>6. Health insurance for more-than-2% shareholders</h2>
<p>Premiums paid by the S corporation for a more-than-2% shareholder are included in that shareholder's W-2 wages (not subject to FICA if paid under a plan for employees), and the shareholder can usually deduct them above the line as self-employed health insurance.</p>

<h2>7. Pass-through entity taxes (PTET)</h2>
<p>Individual state and local tax deductions are capped. Many states let S corporations and partnerships elect to pay state income tax at the entity level. In Notice 2020-75, the IRS said such payments are deductible by the entity in computing its non-separately stated income — effectively bypassing the individual cap.</p>

<p>Start with <a href="/blog/s-corporation-taxation-shareholder-basis-loss-limits">S corporation basis and loss limits</a>.</p>

${sources([["IRS — S corporation compensation and medical insurance issues", "https://www.irs.gov/businesses/small-businesses-self-employed/s-corporation-compensation-and-medical-insurance-issues"], ["IRS — Instructions for Form 1120-S", "https://www.irs.gov/instructions/i1120s"], ["IRS — Notice 2020-75 (state and local taxes paid by partnerships and S corporations)", "https://www.irs.gov/pub/irs-drop/n-20-75.pdf"], ["IRS — Qualified business income deduction", "https://www.irs.gov/newsroom/qualified-business-income-deduction"]])}
`,
  },
  {
    slug: "tax-consequences-property-sales-exchanges",
    title: "Tax Consequences of Property Sales and Exchanges",
    category: "Tax",
    excerpt:
      "Amount realised, adjusted basis, realised vs recognised gain, and character — capital, Section 1231 and ordinary — including depreciation recapture, the five-year lookback, installment sales and related-party losses.",
    crux: [
      "Gain or loss: Amount realised (cash + fair value of property received + liabilities relieved − selling costs) minus adjusted basis.",
      "Character: Capital assets give capital gain or loss; business property held over a year is Section 1231; inventory and recapture give ordinary income.",
      "Section 1231: Net gains are long-term capital gains; net losses are ordinary — the best of both worlds, subject to a five-year lookback for prior net losses.",
      "Recapture: Section 1245 makes all depreciation on equipment ordinary income; real property depreciation is taxed at up to 25% for individuals (unrecaptured Section 1250 gain).",
      "Deferral and disallowance: Installment sales spread gain over collections (but recapture is taxed in year one); losses on sales to related parties are disallowed.",
    ],
    content: `
<h2>Step 1: compute realised gain or loss</h2>
<p><strong>Amount realised</strong> = cash received + fair market value of property received + liabilities assumed by the buyer − selling expenses.</p>
<p><strong>Adjusted basis</strong> = original cost + capital improvements − depreciation (and other basis reductions).</p>

<h2>Step 2: is the gain recognised?</h2>
<p>Realised gains are recognised unless a nonrecognition provision applies — like-kind exchanges (Section 1031), involuntary conversions (Section 1033), contributions to partnerships (Section 721) or corporations (Section 351), or the home-sale exclusion (Section 121).</p>

<h2>Step 3: determine the character</h2>
<table>
<thead><tr><th>Asset</th><th>Character</th></tr></thead>
<tbody>
<tr><td>Investments, personal-use property</td><td>Capital (personal-use losses not deductible)</td></tr>
<tr><td>Depreciable property and land used in a business, held more than one year</td><td>Section 1231</td></tr>
<tr><td>Inventory, receivables</td><td>Ordinary</td></tr>
<tr><td>Business property held one year or less</td><td>Ordinary</td></tr>
</tbody>
</table>

<h2>Depreciation recapture</h2>
<ul>
<li><strong>Section 1245</strong> (equipment, vehicles, most personal property): gain is ordinary to the extent of all depreciation taken; any excess is Section 1231.</li>
<li><strong>Section 1250</strong> (buildings): for property depreciated straight-line, there's generally no ordinary recapture for individuals, but the gain attributable to depreciation is <strong>unrecaptured Section 1250 gain</strong>, taxed at up to 25%.</li>
<li><strong>Section 291</strong>: corporations treat 20% of the depreciation on real property as ordinary income.</li>
</ul>

<div class="callout callout-example">
<p><strong>Example:</strong> Equipment cost $100,000; depreciation taken $70,000; adjusted basis $30,000. Sold for $110,000.<br>
Total gain = $80,000. Section 1245 recapture (ordinary) = <strong>$70,000</strong>. The remaining <strong>$10,000</strong> is Section 1231 gain.<br>
If it had sold for $50,000: gain $20,000, all ordinary recapture.</p>
</div>

<h2>Netting Section 1231</h2>
<ol>
<li>Net all Section 1231 gains and losses for the year (after recapture).</li>
<li>A <strong>net loss</strong> is ordinary — fully deductible.</li>
<li>A <strong>net gain</strong> is long-term capital gain, <em>except</em> to the extent of unrecaptured net Section 1231 losses from the previous five years, which make that portion ordinary (the five-year lookback).</li>
</ol>

<h2>Installment sales (Section 453)</h2>
<p>When at least one payment is received after the year of sale, gain is generally recognised as payments are collected: gross profit percentage × payments received. Depreciation recapture, however, is recognised in full in the year of sale. Dealers and sales of inventory can't use the method.</p>

<h2>Related parties (Section 267)</h2>
<p>Losses on sales to related parties (family members, controlled entities) are disallowed. If the buyer later sells at a gain, it can reduce that gain by the disallowed loss.</p>

<p>See also <a href="/blog/like-kind-exchanges-property-transactions-cpa-reg">like-kind exchanges</a> and <a href="/blog/capital-gains-and-losses-us-federal-tax">capital gains and losses</a>.</p>

${sources([PUB("544", "Sales and Other Dispositions of Assets"), PUB("537", "Installment Sales"), PUB("946", "How To Depreciate Property"), ["IRS — Instructions for Form 4797", "https://www.irs.gov/instructions/i4797"]])}
`,
  },
  {
    slug: "retirement-accounts-tax-planning-cpa-tcp",
    title: "Retirement Accounts and Tax Planning for CPA TCP",
    category: "Tax",
    excerpt:
      "2026 contribution limits, traditional vs Roth, IRA deduction and Roth phase-outs, employer plans for the self-employed, required minimum distributions and the 10% early-withdrawal penalty.",
    crux: [
      "2026 limits: 401(k)/403(b)/457 $24,500 (catch-up $8,000 at 50+, $11,250 at 60–63); IRA $7,500 (catch-up $1,100); SIMPLE $17,000; total annual additions $72,000.",
      "Traditional vs Roth: Traditional saves tax now and taxes withdrawals; Roth taxes contributions now and makes qualified withdrawals tax-free.",
      "Phase-outs: The traditional IRA deduction phases out if you're covered by a workplace plan (joint: $129,000–$149,000 MAGI in 2026); Roth contributions phase out at $153,000–$168,000 for single filers.",
      "Required minimum distributions: Generally begin at age 73 for traditional accounts; Roth IRAs have none for the original owner.",
      "Early withdrawals: Generally a 10% additional tax before age 59½, with exceptions such as death, disability, first-time home purchase (IRAs) and substantially equal periodic payments.",
    ],
    content: `
<h2>2026 contribution limits</h2>
<table>
<thead><tr><th>Plan</th><th>2026 limit</th><th>Catch-up</th></tr></thead>
<tbody>
<tr><td>401(k), 403(b), governmental 457, Thrift Savings Plan</td><td>$24,500</td><td>$8,000 (age 50+); $11,250 (ages 60–63)</td></tr>
<tr><td>Traditional and Roth IRA (combined)</td><td>$7,500</td><td>$1,100 (age 50+)</td></tr>
<tr><td>SIMPLE IRA / SIMPLE 401(k)</td><td>$17,000</td><td>$4,000 (most plans)</td></tr>
<tr><td>Defined contribution annual additions (employee + employer), incl. SEP</td><td>$72,000</td><td>—</td></tr>
<tr><td>Compensation limit used in plan calculations</td><td>$360,000</td><td>—</td></tr>
</tbody>
</table>

<h2>Traditional vs Roth</h2>
<table>
<thead><tr><th></th><th>Traditional</th><th>Roth</th></tr></thead>
<tbody>
<tr><td>Contribution</td><td>Pre-tax or deductible</td><td>After-tax</td></tr>
<tr><td>Growth</td><td>Tax-deferred</td><td>Tax-free</td></tr>
<tr><td>Qualified withdrawals</td><td>Taxed as ordinary income</td><td>Tax-free (account open 5 years and age 59½, death or disability)</td></tr>
<tr><td>Required minimum distributions</td><td>Yes</td><td>None for Roth IRA owners</td></tr>
<tr><td>Best when</td><td>Today's rate is higher than the expected retirement rate</td><td>Today's rate is lower, or for tax diversification</td></tr>
</tbody>
</table>

<h2>IRA income limits (2026)</h2>
<ul>
<li><strong>Traditional IRA deduction</strong> — if the contributing spouse is covered by a workplace plan and files jointly, the deduction phases out between $129,000 and $149,000 of MAGI. If neither spouse is covered, there's no limit.</li>
<li><strong>Roth IRA contributions</strong> — phase out between $153,000 and $168,000 of MAGI for single and head of household filers. High earners can still contribute to a non-deductible traditional IRA and convert it (a "backdoor Roth"), subject to the pro rata rule if other pre-tax IRA balances exist.</li>
</ul>

<h2>Plans for the self-employed</h2>
<ul>
<li><strong>SEP IRA</strong> — employer contributions up to 25% of compensation (about 20% of net self-employment earnings for owners), within the $72,000 annual additions limit.</li>
<li><strong>Solo 401(k)</strong> — the owner can contribute both as employee ($24,500 deferral) and as employer, often allowing more on lower incomes than a SEP.</li>
<li><strong>SIMPLE IRA</strong> — for employers with 100 or fewer employees; lower limits but simple administration.</li>
</ul>

<h2>Distributions</h2>
<ul>
<li><strong>Required minimum distributions (RMDs)</strong> generally start at age 73 under SECURE 2.0 (rising to 75 for people born in 1960 or later). Missing an RMD triggers a 25% excise tax, reduced to 10% if corrected promptly.</li>
<li><strong>Early withdrawals</strong> before age 59½ face a 10% additional tax unless an exception applies — death, disability, substantially equal periodic payments, medical expenses above 7.5% of AGI, and, for IRAs, up to $10,000 for a first-time home purchase and qualified higher education expenses.</li>
<li><strong>Rollovers</strong> — complete within 60 days; only one indirect IRA-to-IRA rollover is allowed per 12 months. Direct trustee-to-trustee transfers are unlimited.</li>
</ul>

<div class="callout callout-example">
<p><strong>Planning example:</strong> A 62-year-old consultant with $180,000 of net self-employment income can defer $24,500 into a solo 401(k), add the $11,250 age-60-to-63 catch-up, and make an employer contribution — sheltering well over $70,000 in 2026, compared with a SEP limited to about 20% of net earnings.</p>
</div>

<p>See also <a href="/blog/us-individual-tax-planning-strategies-cpa-tcp">individual tax planning strategies</a> and <a href="/cpa/reg/retirement-plans-and-tax-planning-basics">REG retirement plans</a>.</p>

${sources([IRS_RETIRE_2026, ["IRS — COLA increases for dollar limitations on benefits and contributions", "https://www.irs.gov/retirement-plans/cola-increases-for-dollar-limitations-on-benefits-and-contributions"], PUB("590-A", "Contributions to Individual Retirement Arrangements"), PUB("590-B", "Distributions from Individual Retirement Arrangements"), PUB("560", "Retirement Plans for Small Business")])}
`,
  },
  {
    slug: "passive-activity-loss-at-risk-rules",
    title: "Passive Activity Loss Rules and At-Risk Limitations",
    category: "Tax",
    excerpt:
      "What makes an activity passive, the seven material participation tests, the $25,000 rental allowance, real estate professionals, the at-risk rules and the order in which loss limits apply.",
    crux: [
      "Passive activity: A trade or business in which the taxpayer doesn't materially participate, plus most rental activities.",
      "The rule: Passive losses can offset only passive income; excess losses are suspended and carried forward until there's passive income or the activity is fully disposed of.",
      "Rental exception: Up to $25,000 of rental losses can offset other income for taxpayers who actively participate, phasing out between $100,000 and $150,000 of modified AGI.",
      "Real estate professionals: More than 750 hours and more than half of personal services in real property businesses — their rentals can be non-passive if they materially participate.",
      "Order of limits: Basis first, then at-risk (Section 465), then passive activity (Section 469), then the excess business loss limit (Section 461(l)).",
    ],
    content: `
<h2>Why the rules exist</h2>
<p>Before 1986, high earners bought into loss-generating "tax shelters" to offset salary income. Section 469 stops that by ring-fencing passive losses: they can only offset passive income.</p>

<h2>Material participation: the seven tests</h2>
<p>An individual materially participates in an activity for the year if any one applies:</p>
<ol>
<li>More than 500 hours of participation.</li>
<li>Participation is substantially all of the participation by all individuals.</li>
<li>More than 100 hours, and not less than anyone else.</li>
<li>A significant participation activity (over 100 hours) and total significant participation activities exceed 500 hours.</li>
<li>Material participation in any five of the preceding ten years.</li>
<li>A personal service activity with material participation in any three prior years.</li>
<li>Regular, continuous and substantial participation based on all facts and circumstances (more than 100 hours).</li>
</ol>
<p>Limited partners generally can't materially participate except under tests 1, 5 or 6.</p>

<h2>Rental real estate</h2>
<ul>
<li>Rental activities are passive by definition — regardless of hours — unless the taxpayer qualifies as a <strong>real estate professional</strong>: more than 750 hours in real property trades or businesses in which they materially participate, and more than half of all personal services in such businesses.</li>
<li><strong>$25,000 allowance</strong>: an individual who <em>actively</em> participates (a lower standard — such as approving tenants and setting rents) and owns at least 10% can deduct up to $25,000 of rental losses against non-passive income. The allowance is reduced by 50% of modified AGI over $100,000, so it disappears at $150,000.</li>
</ul>

<div class="callout callout-example">
<p><strong>Example:</strong> A salaried taxpayer with modified AGI of $120,000 actively manages a rental that loses $30,000.<br>
Allowance = $25,000 − 50% × ($120,000 − $100,000) = <strong>$15,000</strong> deductible against salary. The remaining <strong>$15,000</strong> is suspended and carried forward.</p>
</div>

<h2>Suspended losses</h2>
<p>Suspended passive losses carry forward indefinitely. They are released in full when the taxpayer disposes of its <strong>entire interest</strong> in the activity in a fully taxable transaction to an unrelated party.</p>

<h2>The at-risk rules (Section 465)</h2>
<p>Losses are limited to the amount the taxpayer is economically at risk: cash and the adjusted basis of property contributed, plus borrowed amounts for which the taxpayer is personally liable. Nonrecourse debt generally isn't at risk — except <strong>qualified nonrecourse financing</strong> for real estate from a commercial lender.</p>

<h2>The ordering of loss limits</h2>
<ol>
<li><strong>Basis</strong> — partnership outside basis or S corporation stock and debt basis.</li>
<li><strong>At-risk</strong> amount.</li>
<li><strong>Passive activity</strong> rules.</li>
<li><strong>Excess business loss</strong> (Section 461(l)) — for non-corporate taxpayers, net business losses above an inflation-adjusted threshold are disallowed and carried forward as an NOL. The OBBBA made this limit permanent.</li>
</ol>

<p>See <a href="/blog/net-operating-losses-tax-attribute-carryforwards">NOLs and carryforwards</a>.</p>

${sources([PUB("925", "Passive Activity and At-Risk Rules"), ["IRS — Instructions for Form 8582, Passive Activity Loss Limitations", "https://www.irs.gov/instructions/i8582"], ["IRS — Instructions for Form 6198, At-Risk Limitations", "https://www.irs.gov/instructions/i6198"], IRS_WFTC])}
`,
  },
  {
    slug: "net-operating-losses-tax-attribute-carryforwards",
    title: "Net Operating Losses and Tax Attribute Carryforwards",
    category: "Tax",
    excerpt:
      "How post-2017 NOLs work — indefinite carryforward, the 80% limit and no general carryback — plus capital loss, charitable, credit and interest carryforwards and the Section 382 limit after an ownership change.",
    crux: [
      "Post-2017 NOLs: Carried forward indefinitely and limited to 80% of taxable income in the year used. No carryback, except for farming losses (two years) and certain insurance companies.",
      "Pre-2018 NOLs: Kept the old rules — up to 20 years forward and offset 100% of taxable income.",
      "Individuals: An NOL arises mainly from business losses; non-business deductions count only up to non-business income. Excess business losses also become NOL carryforwards.",
      "Other attributes: Corporate capital losses (3 back, 5 forward), charitable contributions (5 forward), general business credits (1 back, 20 forward), disallowed business interest (indefinite).",
      "Section 382: After an ownership change of more than 50 percentage points within three years, the annual use of NOLs is capped at the loss corporation's value × the long-term tax-exempt rate.",
    ],
    content: `
<h2>What an NOL is</h2>
<p>A net operating loss arises when allowable deductions exceed gross income, after the modifications the Internal Revenue Code requires. For individuals, it's mainly business losses (including casualty losses and losses from rental property). Personal deductions such as the standard deduction don't create an NOL, and non-business deductions are limited to non-business income.</p>

<h2>Current rules for NOLs arising after 2017</h2>
<ul>
<li><strong>Carryforward:</strong> indefinitely.</li>
<li><strong>Carryback:</strong> none, except farming losses (two years) and certain insurance company losses.</li>
<li><strong>80% limit:</strong> the NOL deduction can't exceed 80% of taxable income computed without the NOL deduction (and, for individuals, without the QBI deduction).</li>
</ul>

<div class="callout callout-example">
<p><strong>Example:</strong> A corporation has a $500,000 NOL carryforward from 2023. In 2026 its taxable income before the NOL deduction is $400,000.<br>
NOL deduction = 80% × $400,000 = <strong>$320,000</strong>. Taxable income = $80,000; tax = $16,800. The remaining $180,000 of NOL carries forward.</p>
</div>

<h2>Other carryforwards</h2>
<table>
<thead><tr><th>Attribute</th><th>Carryback</th><th>Carryforward</th></tr></thead>
<tbody>
<tr><td>Net capital loss — individual</td><td>None</td><td>Indefinite ($3,000/year against ordinary income)</td></tr>
<tr><td>Net capital loss — corporation</td><td>3 years</td><td>5 years (short-term character)</td></tr>
<tr><td>Excess charitable contributions</td><td>None</td><td>5 years</td></tr>
<tr><td>General business credits</td><td>1 year</td><td>20 years</td></tr>
<tr><td>Disallowed business interest (Section 163(j))</td><td>None</td><td>Indefinite</td></tr>
<tr><td>Suspended passive losses</td><td>None</td><td>Indefinite, released on full disposition</td></tr>
<tr><td>Excess business loss (Section 461(l))</td><td>None</td><td>Becomes an NOL carryforward</td></tr>
</tbody>
</table>

<h2>Section 382: limits after an ownership change</h2>
<p>If the ownership of a loss corporation by 5% shareholders increases by more than 50 percentage points within a three-year testing period, the annual NOL deduction is limited to:</p>
<p><strong>Value of the old loss corporation's equity immediately before the change × the IRS long-term tax-exempt rate.</strong></p>
<p>Unused limitation carries forward and increases the next year's limit. If the business isn't continued for two years after the change, the limit is zero.</p>

<h2>Planning points</h2>
<ul>
<li>Because of the 80% limit, a business with large NOLs will still pay some tax in a profitable year.</li>
<li>Accelerating income or deferring deductions can help use NOLs before an acquisition triggers Section 382.</li>
<li>Deferred tax assets for NOLs need a valuation allowance assessment under ASC 740 — see <a href="/blog/deferred-tax-assets-explained">deferred tax assets and liabilities</a>.</li>
</ul>

${sources([PUB("536", "Net Operating Losses (NOLs) for Individuals, Estates, and Trusts"), PUB("542", "Corporations"), ["IRS — Instructions for Form 1139 and Form 1045 (NOL carrybacks where allowed)", "https://www.irs.gov/instructions/i1045"], AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "charitable-contributions-itemized-deductions",
    title: "Charitable Contributions and Itemized Deductions Under US Tax Rules",
    category: "Tax",
    excerpt:
      "The itemized deductions that remain — medical, state and local taxes, mortgage interest, charitable gifts, casualty losses — with 2026 OBBBA changes, AGI limits and substantiation rules.",
    crux: [
      "Medical: Deductible only above 7.5% of AGI.",
      "State and local taxes (SALT): Capped at $40,400 for 2026 ($20,200 married filing separately), phasing down for high incomes but not below $10,000.",
      "Mortgage interest: On up to $750,000 of acquisition debt; home equity interest only if the loan was used to buy, build or improve the home.",
      "Charitable: Cash to public charities up to 60% of AGI; appreciated property generally 30%. From 2026, only gifts above 0.5% of the contribution base are deductible, and non-itemisers get up to $1,000 ($2,000 joint).",
      "Substantiation: A written acknowledgment for gifts of $250 or more; Form 8283 for non-cash gifts over $500; a qualified appraisal for most non-cash gifts over $5,000.",
    ],
    content: `
<h2>Itemized deductions on Schedule A</h2>
<table>
<thead><tr><th>Deduction</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>Medical and dental expenses</td><td>Amount above 7.5% of AGI</td></tr>
<tr><td>State and local taxes</td><td>Income or sales tax plus property taxes, capped at $40,400 for 2026 ($20,200 MFS); the cap phases down at higher incomes but not below $10,000</td></tr>
<tr><td>Home mortgage interest</td><td>On acquisition debt up to $750,000 ($375,000 MFS), made permanent by the OBBBA</td></tr>
<tr><td>Investment interest</td><td>Up to net investment income</td></tr>
<tr><td>Charitable contributions</td><td>AGI-based limits (below), and a 0.5% floor from 2026</td></tr>
<tr><td>Casualty and theft losses</td><td>Personal losses only in federally declared disaster areas, above $100 per event and 10% of AGI</td></tr>
<tr><td>Gambling losses</td><td>Up to gambling winnings</td></tr>
</tbody>
</table>
<p>Miscellaneous itemized deductions subject to the 2% floor (such as unreimbursed employee expenses and investment advisory fees) remain non-deductible — the OBBBA made their suspension permanent.</p>

<h2>Charitable contribution limits</h2>
<table>
<thead><tr><th>Type of gift</th><th>To public charities</th><th>To most private non-operating foundations</th></tr></thead>
<tbody>
<tr><td>Cash</td><td>60% of AGI</td><td>30% of AGI</td></tr>
<tr><td>Long-term capital gain property (deducted at fair value)</td><td>30% of AGI</td><td>20% of AGI (fair value only for qualified appreciated stock)</td></tr>
<tr><td>Ordinary income property and short-term capital gain property</td><td>Deduction limited to basis</td><td>Limited to basis</td></tr>
</tbody>
</table>
<p>Excess contributions carry forward for five years. Donating appreciated shares held for over a year is efficient: the donor deducts full fair value and never pays tax on the gain.</p>

<h2>What changed in 2026</h2>
<ul>
<li><strong>0.5% floor</strong> — itemisers can deduct charitable contributions only to the extent they exceed 0.5% of their contribution base.</li>
<li><strong>Non-itemiser deduction</strong> — up to $1,000 ($2,000 joint) of cash gifts to qualifying public charities, even when taking the standard deduction. Gifts to donor-advised funds and supporting organisations don't qualify.</li>
<li><strong>Cap on the benefit for top earners</strong> — the OBBBA limits the tax benefit of itemised deductions for taxpayers in the 37% bracket.</li>
</ul>

<div class="callout callout-example">
<p><strong>Example:</strong> A couple with AGI of $200,000 gives $9,000 in cash to public charities in 2026. The 0.5% floor is $1,000, so <strong>$8,000</strong> is deductible if they itemise. With SALT of $18,000 and mortgage interest of $9,000, their itemised deductions are $35,000 — above the $32,200 standard deduction, so itemising saves tax on an extra $2,800.</p>
</div>

<h2>Substantiation</h2>
<ul>
<li>Any cash gift: a bank record or written communication from the charity.</li>
<li>$250 or more: a <strong>contemporaneous written acknowledgment</strong> from the charity stating whether goods or services were received in return.</li>
<li>Non-cash gifts over $500: <strong>Form 8283</strong>.</li>
<li>Non-cash gifts over $5,000 (other than publicly traded securities): a <strong>qualified appraisal</strong>.</li>
<li>Quid pro quo payments over $75 (such as a charity dinner): the charity must disclose the value received; only the excess is deductible.</li>
</ul>

<p>See also <a href="/blog/us-individual-tax-planning-strategies-cpa-tcp">individual tax planning</a> and <a href="/cpa/reg/individual-taxation-adjustments-and-deductions">REG adjustments and deductions</a>.</p>

${sources([PUB("526", "Charitable Contributions"), ["IRS — Instructions for Schedule A (Form 1040)", "https://www.irs.gov/instructions/i1040sca"], PUB("936", "Home Mortgage Interest Deduction"), IRS_WFTC, ["IRS — Publication 6196 (charitable deduction for non-itemizers)", "https://www.irs.gov/pub/irs-pdf/p6196.pdf"]])}
`,
  },
  {
    slug: "tax-credits-vs-tax-deductions",
    title: "Tax Credits vs Tax Deductions: Examples and Planning",
    category: "Tax",
    excerpt:
      "Why a $1,000 credit is worth more than a $1,000 deduction, refundable vs nonrefundable credits, the main individual credits, the foreign tax credit for Indian income, and how to plan around both.",
    crux: [
      "Deduction: Reduces taxable income, so it saves tax at your marginal rate — a $1,000 deduction saves $220 at 22%.",
      "Credit: Reduces tax dollar for dollar — a $1,000 credit saves $1,000.",
      "Refundable vs nonrefundable: Refundable credits (earned income credit, the refundable part of the child tax credit) can create a refund; nonrefundable credits stop at zero tax.",
      "Main credits: Child tax credit ($2,200 per child for 2025, indexed after), earned income credit (up to $8,231 in 2026), American Opportunity and Lifetime Learning credits, child and dependent care credit (rate up to 50% from 2026), adoption credit.",
      "Foreign tax credit: US citizens and residents with income taxed in India can usually claim a credit for the Indian tax, avoiding double taxation.",
    ],
    content: `
<h2>The difference in one example</h2>
<div class="callout callout-example">
<p>A taxpayer in the 22% bracket can choose between a $1,000 deduction and a $1,000 credit.<br>
<strong>Deduction:</strong> taxable income falls by $1,000 → tax falls by $220.<br>
<strong>Credit:</strong> tax falls by $1,000.<br>
A deduction is worth more to higher-bracket taxpayers; a credit is worth the same to everyone who owes enough tax to use it.</p>
</div>

<h2>Types of deductions</h2>
<ul>
<li><strong>Above-the-line</strong> (adjustments to income) reduce AGI — and lower AGI can unlock other benefits that phase out with income.</li>
<li><strong>Below-the-line</strong> deductions (standard or itemised, QBI, and the 2025–2028 deductions for tips, overtime, car loan interest and seniors) reduce taxable income but not AGI.</li>
</ul>

<h2>Main individual credits</h2>
<table>
<thead><tr><th>Credit</th><th>Key amount</th><th>Refundable?</th></tr></thead>
<tbody>
<tr><td>Child tax credit</td><td>$2,200 per qualifying child for 2025 (indexed for inflation from 2026); phases out above $200,000 MAGI ($400,000 joint)</td><td>Partly (additional child tax credit)</td></tr>
<tr><td>Credit for other dependants</td><td>$500</td><td>No</td></tr>
<tr><td>Earned income credit</td><td>Up to $8,231 for three or more children in 2026</td><td>Yes</td></tr>
<tr><td>American Opportunity credit</td><td>Up to $2,500 per student for the first four years of college</td><td>40% refundable</td></tr>
<tr><td>Lifetime Learning credit</td><td>20% of up to $10,000 of expenses ($2,000); phases out at $80,000–$90,000 MAGI ($160,000–$180,000 joint)</td><td>No</td></tr>
<tr><td>Child and dependent care credit</td><td>Up to 50% of expenses from 2026 (limit $3,000 for one person, $6,000 for two or more)</td><td>No</td></tr>
<tr><td>Adoption credit</td><td>Up to $17,670 in 2026, of which up to $5,120 is refundable</td><td>Partly</td></tr>
<tr><td>Saver's credit</td><td>Up to 50% of retirement contributions for lower-income taxpayers</td><td>No</td></tr>
<tr><td>Foreign tax credit</td><td>Up to the US tax on the foreign income</td><td>No (carry back 1 year, forward 10)</td></tr>
</tbody>
</table>
<p>The OBBBA ended several clean energy credits: the residential clean energy and energy-efficient home improvement credits for property and expenditures after 2025, and clean vehicle credits for vehicles acquired after September 30, 2025.</p>

<h2>Foreign tax credit vs deduction</h2>
<p>A US citizen or resident who pays income tax in India on Indian-source income (rent, interest, salary) can usually choose a <strong>credit</strong> (Form 1116) or an itemised <strong>deduction</strong> for that tax. The credit is almost always better. It's limited to the US tax attributable to foreign-source income in each category; excess credits carry back one year and forward ten. The US–India tax treaty also sets rules for which country taxes which income first.</p>

<h2>Planning with credits and deductions</h2>
<ul>
<li>Keep AGI below phase-out thresholds — for example, by contributing to a traditional 401(k) — to preserve credits.</li>
<li>Coordinate education benefits: the same expenses can't be used for both the American Opportunity credit and a tax-free 529 distribution.</li>
<li>Nonrefundable credits are wasted if tax is already zero — in low-income years, prefer refundable credits or defer deductions.</li>
</ul>

${sources([PUB("17", "Your Federal Income Tax"), PUB("970", "Tax Benefits for Education"), PUB("514", "Foreign Tax Credit for Individuals"), IRS_2026, IRS_WFTC])}
`,
  },
  {
    slug: "tcp-vs-reg-topics-difficulty-candidate-fit",
    title: "How TCP Differs From REG: Topics, Difficulty and Candidate Fit",
    category: "Study Strategy",
    excerpt:
      "What REG covers vs what TCP adds, the exam format and pass rates for each, how much the two overlap, and who should choose TCP as their Discipline.",
    crux: [
      "REG (Core): Ethics and federal tax procedures, business law, property transactions, and federal taxation of individuals and entities — compliance-focused.",
      "TCP (Discipline): Goes deeper into individual and entity tax compliance and adds planning, personal financial planning and more complex property transactions.",
      "Format: REG has 72 MCQs and 8 TBSs; TCP has 68 MCQs and 7 TBSs. Both are four hours, scored 50/50.",
      "Pass rates: In 2025, about 63% passed REG and 78% passed TCP — the highest of all six sections.",
      "Who should choose TCP: Anyone in or heading to US tax — Big 4 and mid-tier tax practices, outsourcing firms and in-house tax teams.",
    ],
    content: `
<h2>What each section covers</h2>
<table>
<thead><tr><th>REG content areas</th><th>TCP content areas</th></tr></thead>
<tbody>
<tr><td>Ethics, professional responsibilities and federal tax procedures</td><td>Tax compliance and planning for individuals and personal financial planning</td></tr>
<tr><td>Business law</td><td>Entity tax compliance (C corporations, S corporations, partnerships, trusts, exempt organisations)</td></tr>
<tr><td>Federal taxation of property transactions</td><td>Entity tax planning (formation, operation, distributions, liquidation)</td></tr>
<tr><td>Federal taxation of individuals</td><td>Property transactions (disposition of assets)</td></tr>
<tr><td>Federal taxation of entities (including tax preparation)</td><td></td></tr>
</tbody>
</table>
<p>The AICPA designed TCP as the deeper continuation of REG: REG asks you to <em>comply</em>, TCP asks you to <em>plan</em>. Topics like gift tax, trusts, partnership distributions and the tax consequences of entity choice are covered in more depth in TCP.</p>

<h2>Format comparison</h2>
<table>
<thead><tr><th></th><th>REG</th><th>TCP</th></tr></thead>
<tbody>
<tr><td>Type</td><td>Core (required)</td><td>Discipline (choose one of BAR, ISC, TCP)</td></tr>
<tr><td>Questions</td><td>72 MCQs (2 × 36) and 8 TBSs</td><td>68 MCQs (2 × 34) and 7 TBSs</td></tr>
<tr><td>Length</td><td>4 hours</td><td>4 hours</td></tr>
<tr><td>Scoring</td><td>50% MCQ / 50% TBS</td><td>50% MCQ / 50% TBS</td></tr>
<tr><td>Availability</td><td>Year-round</td><td>First month of each quarter only</td></tr>
<tr><td>2025 pass rate</td><td>About 63%</td><td>About 78%</td></tr>
</tbody>
</table>

<h2>Is TCP easier?</h2>
<p>TCP's higher pass rate partly reflects who takes it: candidates who choose TCP tend to work in tax and often sit it soon after passing REG. The AICPA itself says pass rates reflect candidate preparedness rather than exam difficulty. Content-wise, TCP is narrower than REG (no business law, less ethics) but deeper on tax.</p>

<h2>Who should pick TCP</h2>
<ul>
<li>You work, or want to work, in US tax — individual or business returns, partnership tax, private client services.</li>
<li>You enjoyed REG's tax content and want to reuse it while it's fresh.</li>
<li>You plan to become an enrolled agent as well — TCP overlaps heavily with the EA exam.</li>
</ul>
<p>If your career is in financial reporting or audit, <a href="/blog/how-to-choose-your-cpa-discipline">BAR or ISC may fit better</a>.</p>

<h2>Sequencing tip</h2>
<p>Take REG first, then TCP in the next Discipline window (January, April, July or October), so the overlapping tax knowledge carries straight over. Note that new tax laws reach both sections on the same schedule — for example, the AICPA made OBBBA provisions with 2024 and 2025 effective dates testable in REG and TCP from July 1, 2026.</p>

${sources([AICPA_BLUEPRINTS, ["AICPA & CIMA — The new CPA Exam, two years in (2025 pass rates)", "https://www.aicpa-cima.com/professional-insights/article/the-new-cpa-exam-two-years-in"], ["AICPA & CIMA — CPA Exam scoring and pass rates", "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates"]])}
`,
  },
];
