import type { SubjectSeed } from "./types";

export const tcp: SubjectSeed = {
  slug: "tcp",
  name: "Tax Compliance and Planning",
  shortName: "TCP",
  type: "DISCIPLINE",
  description:
    "TCP extends REG's tax content into planning: multi-year individual strategy, personal financial planning, entity compliance and structuring, and advanced property transactions. It's the natural choice for candidates heading into tax practice.",
  difficulty: "HARD",
  estimatedHours: 85,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/tcp-cpa-exam-blueprint",
  order: 6,
  topics: [
    {
      slug: "individual-tax-planning-strategies",
      title: "Individual Tax Planning Strategies",
      shortDescription: "Timing strategies, income shifting, bunching deductions, and managing the character of income.",
      blueprintArea: "Area I: Individual Tax Compliance & Personal Financial Planning",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 1,
      studyMaterialHtml: `
<h2>Where TCP goes beyond REG</h2>
<p>REG tests whether you can compute a liability correctly under current rules. TCP tests whether you can identify the <em>better</em> outcome across legitimate alternatives — timing, character, and structure all matter here, not just calculation.</p>

<h3>Timing strategies</h3>
<ul>
<li><strong>Income deferral</strong> — delay a bonus or year-end invoice into the next year when a lower rate is expected</li>
<li><strong>Deduction acceleration</strong> — prepay deductible expenses before year-end while in a higher bracket</li>
<li><strong>Bunching</strong> — concentrate itemized deductions into alternating years so you exceed the standard deduction periodically instead of falling just short every year</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE (bunching):</strong> A taxpayer's itemized deductions run about $11,000 a year against a standard deduction of roughly $14,000 — so they never itemize. By making two years of charitable gifts in one year ($9,000 instead of $4,500 twice), year one's itemized deductions reach roughly $15,500 (itemize) and year two drops to $6,500 (take the standard deduction). Total deductions across the two years exceed taking the standard deduction twice.</p></div>

<h3>Character matters</h3>
<p>Long-term capital gains and qualified dividends are taxed at preferential rates (0%/15%/20%) versus ordinary rates up to 37%. Core techniques:</p>
<ul>
<li>Hold appreciated assets past the <strong>one-year</strong> mark before selling</li>
<li><strong>Tax-loss harvesting</strong> — realize losses to offset gains, respecting the <strong>wash sale rule</strong> (no deduction if substantially identical securities are purchased within 30 days before or after the sale; the disallowed loss is added to the basis of the replacement)</li>
<li>Manage the <strong>3.8% net investment income tax</strong> exposure through timing and the type of income realized</li>
</ul>

<h3>Income shifting within a family</h3>
<p>Shifting income to lower-bracket family members is limited by the <strong>kiddie tax</strong>, which taxes a child's unearned income above a threshold at the parents' marginal rate. The <strong>assignment of income doctrine</strong> also prevents simply redirecting income earned by one taxpayer to another — the earner is taxed regardless of who receives the cash.</p>

<div class="callout callout-important"><p><strong>IMPORTANT — the line that matters:</strong> Tax <strong>avoidance</strong> (arranging affairs within the law to minimize tax) is legitimate and expected. Tax <strong>evasion</strong> (concealing income, falsifying records) is criminal. Every planning idea must survive on the avoidance side of that line — and have a genuine business purpose and economic substance.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When a question gives you expected income in two different years, the answer usually involves shifting income or deductions toward the lower-taxed year. Read for the bracket differential first.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Defer income / accelerate deductions toward the <strong>lower-taxed</strong> year</li>
<li><strong>Bunching</strong>: alternate years to beat the standard deduction periodically</li>
<li>Hold &gt;1 year for LTCG rates; harvest losses but respect the <strong>wash sale rule (30 days before/after)</strong> — disallowed loss adds to replacement basis</li>
<li><strong>Kiddie tax</strong> limits income shifting to children; <strong>assignment of income doctrine</strong> taxes the earner</li>
<li>Avoidance = legal; evasion = criminal. Need business purpose and economic substance.</li>
</ul>
`,
      mcqs: [
        {
          question: "A taxpayer sells stock at a $10,000 loss on December 10 and repurchases the same stock on December 28 of the same year. What is the tax result?",
          options: [
            { label: "A", text: "The $10,000 loss is deductible in the current year", isCorrect: false, rationale: "The repurchase within 30 days triggers the wash sale rule, disallowing the loss." },
            { label: "B", text: "The loss is disallowed and added to the basis of the repurchased stock", isCorrect: true, rationale: "Correct — under the wash sale rule, buying substantially identical securities within 30 days before or after the sale disallows the loss, which is instead added to the basis of the replacement shares." },
            { label: "C", text: "The loss is permanently forfeited", isCorrect: false, rationale: "The loss is not lost forever — it is deferred through a basis increase in the replacement stock." },
            { label: "D", text: "Half the loss is deductible and half is deferred", isCorrect: false, rationale: "There is no such proportional split under the wash sale rule when the full position is repurchased." },
          ],
          explanation: "The wash sale rule disallows a loss when substantially identical securities are acquired within 30 days before or after the sale. The disallowed loss is not permanently lost — it increases the basis of the replacement shares, deferring the benefit until that position is finally sold outside a wash sale window.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["tax planning", "wash sale"],
        },
      ],
    },
    {
      slug: "personal-financial-planning",
      title: "Personal Financial Planning",
      shortDescription: "Education funding, insurance, and integrating tax planning with a client's broader financial goals.",
      blueprintArea: "Area I: Individual Tax Compliance & Personal Financial Planning",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 2,
      studyMaterialHtml: `
<h2>Education funding vehicles</h2>
<table>
<thead><tr><th>Vehicle</th><th>Key features</th></tr></thead>
<tbody>
<tr><td><strong>529 plan</strong></td><td>Contributions not federally deductible; growth and qualified withdrawals <strong>tax-free</strong>; high contribution capacity; front-loading election allows several years of annual exclusion gifts at once; unused amounts may be rolled to a Roth IRA for the beneficiary subject to strict conditions</td></tr>
<tr><td><strong>Coverdell ESA</strong></td><td>Low annual contribution limit, income-restricted; can cover K-12 as well</td></tr>
<tr><td><strong>UTMA/UGMA custodial</strong></td><td>Irrevocable gift to the child; exposed to the <strong>kiddie tax</strong>; becomes the child's outright at majority</td></tr>
<tr><td><strong>Series EE/I bonds</strong></td><td>Interest may be excludable when used for qualified education, subject to income phase-outs</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Education tax <strong>credits</strong> (American Opportunity, Lifetime Learning) cannot be claimed for the <em>same expenses</em> paid with tax-free 529 distributions. Coordinating which dollars pay which expenses is a genuine planning decision, not a formality.</p></div>

<h3>Insurance in the plan</h3>
<ul>
<li><strong>Life insurance</strong> — death benefits are generally income-tax-free to the beneficiary, but are includible in the insured's <strong>gross estate</strong> if the insured held incidents of ownership. An irrevocable life insurance trust (ILIT) is the classic fix.</li>
<li><strong>Disability insurance</strong> — if the employer pays the premiums and excludes them from the employee's income, benefits are <strong>taxable</strong>; if the individual pays with after-tax dollars, benefits are <strong>tax-free</strong></li>
<li><strong>Long-term care</strong> — qualified policy premiums may be deductible as medical expenses within age-based limits</li>
</ul>

<h3>Health savings accounts</h3>
<p>An HSA paired with a high-deductible health plan is uniquely <strong>triple tax-advantaged</strong>: deductible going in, tax-free growth, and tax-free withdrawals for qualified medical expenses. Unused balances roll over indefinitely, making it a legitimate long-term savings vehicle.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The disability insurance rule is a favorite: <strong>who paid the premium with what kind of dollars determines whether the benefit is taxable.</strong> Pre-tax premium → taxable benefit. After-tax premium → tax-free benefit.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>529</strong>: no federal deduction, tax-free qualified growth/withdrawals, front-loading gift election</li>
<li>Can't use education credits for the <strong>same expenses</strong> paid with tax-free 529 money</li>
<li>Life insurance proceeds income-tax-free but in the <strong>gross estate</strong> if incidents of ownership (use an ILIT)</li>
<li><strong>Disability</strong>: employer-paid premium → benefits taxable; after-tax premium → benefits tax-free</li>
<li><strong>HSA = triple tax advantage</strong> (deduct, grow, withdraw for medical) and rolls over indefinitely</li>
</ul>
`,
      mcqs: [
        {
          question: "An employee receives disability benefits under a policy for which the employer paid all premiums and excluded them from the employee's taxable wages. How are the benefits taxed?",
          options: [
            { label: "A", text: "Entirely tax-free to the employee", isCorrect: false, rationale: "Benefits are tax-free only when the individual paid the premiums with after-tax dollars." },
            { label: "B", text: "Fully taxable to the employee as ordinary income", isCorrect: true, rationale: "Correct — because the premiums were paid with pre-tax employer dollars never included in the employee's income, the resulting benefits are fully taxable." },
            { label: "C", text: "Taxable only to the extent they exceed the premiums paid", isCorrect: false, rationale: "No such offset applies to disability benefits." },
            { label: "D", text: "Taxed at preferential capital gains rates", isCorrect: false, rationale: "Disability benefits are ordinary income when taxable." },
          ],
          explanation: "The taxability of disability benefits follows the premium dollars. When an employer pays premiums with pre-tax dollars that were never included in the employee's income, the benefits are fully taxable. When the individual pays premiums with after-tax dollars, the benefits are received tax-free.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["personal financial planning", "disability insurance"],
        },
      ],
    },
    {
      slug: "retirement-planning-strategies",
      title: "Retirement Planning Strategies",
      shortDescription: "Roth conversions, required minimum distributions, and sequencing retirement withdrawals.",
      blueprintArea: "Area I: Individual Tax Compliance & Personal Financial Planning",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 60,
      order: 3,
      studyMaterialHtml: `
<h2>The core trade-off</h2>
<p>Traditional accounts deduct now and tax later; Roth accounts tax now and are free later. The decision hinges on the <strong>expected marginal rate at contribution versus at withdrawal</strong> — not on which account "grows more," since identical returns and identical rates produce identical results.</p>

<h3>Roth conversions</h3>
<p>Converting traditional dollars to Roth triggers <strong>current ordinary income</strong> on the taxable portion, in exchange for tax-free growth and no lifetime RMDs. Conversions are most attractive when:</p>
<ul>
<li>The taxpayer is in a temporarily <strong>low bracket</strong> (a gap year, early retirement before Social Security and RMDs begin)</li>
<li>There are expiring deductions, credits, or NOLs to absorb the income</li>
<li>Account values are depressed, so more shares convert per dollar of tax</li>
<li>Taxes can be paid from <strong>outside</strong> funds, preserving the full converted balance</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT — the pro-rata rule:</strong> If a taxpayer holds both deductible and nondeductible amounts across <em>all</em> traditional IRAs, a conversion (or any distribution) is taxed proportionally based on the ratio of after-tax basis to total IRA value. You cannot cherry-pick and convert "just the nondeductible" contributions.</p></div>

<h3>Required minimum distributions</h3>
<ul>
<li>RMDs apply to traditional IRAs and most employer plans once the applicable beginning age is reached; <strong>Roth IRAs have no lifetime RMDs</strong> for the owner</li>
<li>Failing to take an RMD triggers a substantial excise tax on the shortfall (reduced if timely corrected)</li>
<li>Under current rules, most non-spouse <strong>inherited</strong> retirement accounts must generally be emptied within <strong>10 years</strong> — the old lifetime "stretch" is gone for most beneficiaries</li>
</ul>

<h3>Withdrawal sequencing</h3>
<p>A common default is taxable accounts first, then tax-deferred, then Roth last — but the better answer is often to fill up low brackets deliberately with tax-deferred withdrawals or conversions before RMDs and Social Security push the taxpayer into higher brackets later.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Watch for cliff effects. Additional income can increase the taxable portion of Social Security benefits and trigger higher Medicare premium surcharges — meaning the <em>effective</em> marginal rate on a conversion can exceed the stated bracket.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Traditional vs. Roth turns on <strong>marginal rate now vs. at withdrawal</strong></li>
<li>Convert in low-bracket years; pay the tax from <strong>outside</strong> funds</li>
<li><strong>Pro-rata rule</strong>: conversions taxed proportionally across all traditional IRAs — no cherry-picking basis</li>
<li>Roth IRA: <strong>no lifetime RMDs</strong> for the owner</li>
<li>Most non-spouse inherited accounts: <strong>10-year</strong> payout</li>
<li>Watch cliffs: Social Security taxability and Medicare surcharges raise the effective rate</li>
</ul>
`,
      mcqs: [
        {
          question: "A taxpayer has $90,000 in traditional IRAs, of which $9,000 represents nondeductible (after-tax) contributions. The taxpayer converts $10,000 to a Roth IRA. How much of the conversion is taxable?",
          options: [
            { label: "A", text: "$0, because the taxpayer designates the conversion as coming from nondeductible contributions", isCorrect: false, rationale: "The pro-rata rule prevents designating a conversion as coming solely from after-tax basis." },
            { label: "B", text: "$9,000", isCorrect: true, rationale: "Correct — the after-tax portion is 10% ($9,000 ÷ $90,000), so 10% of the $10,000 conversion ($1,000) is tax-free and the remaining $9,000 is taxable." },
            { label: "C", text: "$10,000", isCorrect: false, rationale: "A proportionate share of after-tax basis does come out tax-free, so the full amount is not taxable." },
            { label: "D", text: "$1,000", isCorrect: false, rationale: "This reverses the calculation — $1,000 is the tax-free portion, not the taxable portion." },
          ],
          explanation: "Under the pro-rata rule, all traditional IRAs are treated as one account. After-tax basis is $9,000 of $90,000, or 10%. Therefore 10% of the $10,000 conversion ($1,000) is tax-free and the remaining $9,000 is taxable ordinary income.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["retirement", "Roth conversion", "pro-rata rule"],
        },
      ],
    },
    {
      slug: "estate-and-gift-tax-planning",
      title: "Estate & Gift Tax Planning",
      shortDescription: "Lifetime gifting strategies, trusts, portability, and the permanent $15 million exemption.",
      blueprintArea: "Area I: Individual Tax Compliance & Personal Financial Planning",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 4,
      studyMaterialHtml: `
<h2>The current landscape</h2>
<div class="callout callout-important"><p><strong>IMPORTANT — OBBBA:</strong> The lifetime estate and gift tax exemption is <strong>$15 million per individual</strong> ($30 million for a married couple) beginning in <strong>2026</strong>, indexed for inflation from 2027, and it is <strong>permanent</strong> — there is no scheduled sunset as there was under the TCJA. This dramatically changes planning: far fewer estates are taxable, so <strong>income tax basis planning often matters more than estate tax avoidance</strong>.</p></div>

<h3>The basis-vs-estate-tax tension</h3>
<table>
<thead><tr><th>Transfer method</th><th>Recipient's basis</th></tr></thead>
<tbody>
<tr><td><strong>Lifetime gift</strong></td><td><strong>Carryover</strong> basis — no step-up</td></tr>
<tr><td><strong>Transfer at death</strong></td><td><strong>Stepped-up</strong> (or down) to FMV at date of death</td></tr>
</tbody>
</table>
<p>Consequence: for a client whose estate is comfortably below the exemption, gifting highly appreciated assets during life can be <strong>counterproductive</strong> — holding until death gives the heirs a stepped-up basis and no estate tax is due anyway.</p>

<h3>Core gifting techniques</h3>
<ul>
<li><strong>Annual exclusion gifts</strong> — per donee, per year, requires a <strong>present interest</strong>; a <strong>Crummey</strong> power gives trust beneficiaries a temporary withdrawal right to convert a future interest into a present one</li>
<li><strong>Gift splitting</strong> — doubles the exclusion for married couples</li>
<li><strong>Direct payments</strong> of tuition and medical expenses — unlimited and excluded, but must go <strong>directly</strong> to the institution or provider</li>
<li><strong>GRAT</strong> — grantor retains an annuity; appreciation above the assumed rate passes to beneficiaries at little transfer tax cost</li>
<li><strong>ILIT</strong> — removes life insurance proceeds from the gross estate</li>
<li><strong>QPRT</strong> — transfers a residence at a discounted value while the grantor retains occupancy for a term</li>
</ul>

<h3>Portability and the marital deduction</h3>
<p>The <strong>unlimited marital deduction</strong> defers estate tax on transfers to a U.S. citizen spouse. <strong>Portability</strong> allows a surviving spouse to use the deceased spouse's unused exclusion amount — but only if a timely estate tax return is filed making the election, even when no tax is otherwise due.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Portability applies to the estate and gift exemption but <strong>not</strong> to the GST (generation-skipping transfer) exemption, which must be allocated and cannot be ported to a spouse.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>OBBBA: $15M per person / $30M couple from 2026, permanent</strong>, indexed from 2027</li>
<li>Gift = <strong>carryover</strong> basis; death = <strong>stepped-up</strong> basis → below-exemption estates often should <strong>hold</strong> appreciated assets</li>
<li>Annual exclusion needs a <strong>present interest</strong> → <strong>Crummey</strong> powers solve this in trusts</li>
<li>Unlimited: spouse (US citizen), charity, <strong>direct</strong> tuition/medical payments</li>
<li>Techniques: GRAT (appreciation transfer), ILIT (removes insurance from estate), QPRT (residence)</li>
<li><strong>Portability</strong> requires a timely filed return; does <strong>not</strong> apply to the GST exemption</li>
</ul>
`,
      mcqs: [
        {
          question: "A client's total estate is well below the $15 million exemption. The client asks whether to gift highly appreciated stock to children now or hold it until death. From a pure tax standpoint, which is generally better and why?",
          options: [
            { label: "A", text: "Gift now, to remove future appreciation from the estate", isCorrect: false, rationale: "Removing appreciation from the estate provides no benefit when the estate will not be taxable anyway, and it sacrifices the basis step-up." },
            { label: "B", text: "Hold until death, so the heirs receive a stepped-up basis and no estate tax is due regardless", isCorrect: true, rationale: "Correct — with the estate below the exemption, there is no estate tax to avoid, and holding preserves the step-up in basis that eliminates the built-in capital gain for the heirs." },
            { label: "C", text: "Gift now, because gifted property also receives a stepped-up basis", isCorrect: false, rationale: "Gifted property takes a carryover basis, not a stepped-up basis." },
            { label: "D", text: "It makes no difference, because basis is the same either way", isCorrect: false, rationale: "Basis treatment differs significantly between lifetime gifts and transfers at death." },
          ],
          explanation: "With the permanent $15 million exemption, most estates are not subject to estate tax, which shifts the planning focus to income tax basis. Lifetime gifts carry over the donor's basis, while property transferred at death receives a basis step-up to fair market value — eliminating the built-in gain for heirs.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["OBBBA", "estate planning", "basis"],
        },
      ],
    },
    {
      slug: "c-corporation-tax-compliance",
      title: "C Corporation Tax Compliance",
      shortDescription: "Corporate taxable income computation, Schedule M-1/M-3 reconciliation, and NOL rules.",
      blueprintArea: "Area II: Entity Tax Compliance",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 5,
      studyMaterialHtml: `
<h2>From book income to taxable income</h2>
<p>The Schedule M-1 (or M-3 for larger corporations) reconciles book income to taxable income:</p>
<p><strong>Book income</strong> + federal income tax expense + excess capital losses + income subject to tax not on the books + expenses recorded on the books not deducted for tax − income on the books not subject to tax − deductions on the return not charged against book income = <strong>taxable income</strong></p>

<table>
<thead><tr><th>Permanent differences</th><th>Temporary differences</th></tr></thead>
<tbody>
<tr><td>Municipal bond interest</td><td>Depreciation (MACRS/bonus vs. book)</td></tr>
<tr><td>Federal income tax expense</td><td>Bad debts (allowance vs. direct write-off)</td></tr>
<tr><td>Key-person life insurance premiums and proceeds</td><td>Warranty and other accrued liabilities</td></tr>
<tr><td>Fines and penalties</td><td>Unearned revenue timing</td></tr>
<tr><td>50% of business meals</td><td>Charitable contribution carryforwards</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT — the reason it matters:</strong> Only <strong>temporary</strong> differences create deferred tax assets and liabilities. Permanent differences never reverse and therefore affect the <strong>effective tax rate</strong> instead. This links directly to FAR's deferred tax topic.</p></div>

<h3>Net operating losses</h3>
<p>Post-2017 NOLs are carried <strong>forward indefinitely</strong> with <strong>no carryback</strong> (limited exceptions), and the deduction is limited to <strong>80% of taxable income</strong> computed before the NOL deduction.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A corporation has a $500,000 NOL carryforward and current-year taxable income (before the NOL) of $400,000. The deduction is limited to 80% × $400,000 = <strong>$320,000</strong>, leaving $80,000 of taxable income and a $180,000 NOL carried forward.</p></div>

<h3>Other key limitations</h3>
<ul>
<li><strong>Charitable contributions</strong> — 10% of taxable income (before the charitable deduction, DRD, and certain carrybacks), 5-year carryforward</li>
<li><strong>Capital losses</strong> — offset capital gains only; carry back 3 years, forward 5</li>
<li><strong>Business interest (§163(j))</strong> — generally limited to 30% of adjusted taxable income, with disallowed amounts carried forward; small business exception applies</li>
<li><strong>Accumulated earnings tax</strong> and <strong>personal holding company tax</strong> — penalty regimes discouraging the use of a corporation to shelter income from shareholder-level tax</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Estimated tax payments for corporations are generally due quarterly; large corporations (generally $1 million or more of taxable income in a prior year) may not rely on the prior-year safe harbor except for the first installment.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>M-1/M-3 reconciles <strong>book → taxable</strong> income</li>
<li><strong>Permanent</strong> (muni interest, federal tax, fines, key-person insurance, 50% meals) affect the <strong>effective rate</strong>; <strong>temporary</strong> create deferred taxes</li>
<li>NOLs: <strong>carry forward indefinitely, no carryback, limited to 80%</strong> of taxable income</li>
<li>Charitable: <strong>10%</strong> of taxable income, 5-year carryforward</li>
<li>Capital losses: offset capital gains only; back 3, forward 5</li>
<li>§163(j): business interest generally limited to 30% of adjusted taxable income</li>
</ul>
`,
      mcqs: [
        {
          question: "A corporation has taxable income before the NOL deduction of $600,000 and an NOL carryforward of $700,000 generated in 2022. What is the maximum NOL deduction?",
          options: [
            { label: "A", text: "$700,000, using the full carryforward", isCorrect: false, rationale: "Post-2017 NOLs are limited to 80% of taxable income computed before the NOL deduction." },
            { label: "B", text: "$480,000", isCorrect: true, rationale: "Correct — the deduction is limited to 80% × $600,000 = $480,000, leaving $120,000 of taxable income and $220,000 of NOL carried forward." },
            { label: "C", text: "$600,000, reducing taxable income to zero", isCorrect: false, rationale: "The 80% limitation prevents fully eliminating taxable income with a post-2017 NOL." },
            { label: "D", text: "$120,000", isCorrect: false, rationale: "This is the remaining taxable income after the limitation, not the deduction itself." },
          ],
          explanation: "Net operating losses arising in tax years after 2017 carry forward indefinitely but the deduction is limited to 80% of taxable income determined before the NOL deduction. Here, 80% × $600,000 = $480,000 is deductible, leaving $120,000 of taxable income and a $220,000 carryforward.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["C corporation", "NOL"],
        },
      ],
    },
    {
      slug: "s-corporation-planning",
      title: "S Corporation Compliance & Planning",
      shortDescription: "Basis planning, distribution ordering, reasonable compensation, and built-in gains tax.",
      blueprintArea: "Area II: Entity Tax Compliance",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 6,
      studyMaterialHtml: `
<h2>Basis is the constraint on everything</h2>
<p>Shareholder basis ordering: <strong>increase</strong> for income items → <strong>decrease</strong> for distributions → <strong>decrease</strong> for nondeductible expenses → <strong>decrease</strong> for losses. Losses exceeding basis are suspended indefinitely until basis is restored.</p>

<div class="callout callout-important"><p><strong>IMPORTANT — the planning lever:</strong> An S corporation shareholder gets basis for <strong>direct loans to the corporation</strong>, but <strong>not</strong> for corporate third-party debt (unlike a partner). A shareholder anticipating losses can therefore create deductibility by <em>lending personally</em> to the corporation — but merely guaranteeing a bank loan creates <strong>no basis</strong>.</p></div>

<h3>Reasonable compensation</h3>
<p>S corporation flow-through income is <strong>not</strong> subject to self-employment tax, which creates an incentive to minimize wages. The IRS actively challenges under-compensation and can recharacterize distributions as wages, with payroll taxes, interest, and penalties. Planning must balance the payroll tax savings against defensibility — and note that wages also affect the <strong>QBI deduction's</strong> W-2 wage limitation at higher income levels.</p>

<h3>Distribution ordering with accumulated E&P</h3>
<p>For a corporation that was previously a C corporation:</p>
<ol>
<li><strong>AAA</strong> (accumulated adjustments account) — tax-free to the extent of stock basis</li>
<li><strong>Accumulated E&P</strong> — taxable <strong>dividend</strong></li>
<li>Remaining stock basis — tax-free return of capital</li>
<li>Excess — capital gain</li>
</ol>

<h3>Built-in gains (BIG) tax</h3>
<p>A C corporation that converts to S status faces a <strong>corporate-level tax</strong> on net recognized built-in gains — appreciation that existed at conversion — if the asset is disposed of within the recognition period. Planning response: delay disposition of appreciated assets until the recognition period expires, where commercially sensible.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Two other C-corporation-legacy traps for S corporations: the BIG tax above, and the <strong>excess net passive income tax</strong> — which can even <em>terminate</em> the S election if passive investment income exceeds 25% of gross receipts for three consecutive years while accumulated E&P exists.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Basis order: income ↑ → distributions ↓ → nondeductibles ↓ → losses ↓ (excess suspended)</li>
<li><strong>Direct shareholder loans create basis; loan guarantees do not</strong></li>
<li>S income avoids SE tax → <strong>reasonable compensation</strong> is the battleground; wages also affect the QBI wage limitation</li>
<li>With accumulated E&P: <strong>AAA → E&P (dividend) → basis → capital gain</strong></li>
<li><strong>BIG tax</strong> on appreciation existing at C→S conversion if disposed within the recognition period</li>
<li>Excess net passive income &gt;25% of gross receipts for 3 years with E&P → <strong>terminates</strong> the election</li>
</ul>
`,
      mcqs: [
        {
          question: "An S corporation shareholder wants to deduct a $50,000 loss but has only $20,000 of stock basis. Which action would create additional basis to absorb the loss?",
          options: [
            { label: "A", text: "Personally guaranteeing a $30,000 bank loan made to the corporation", isCorrect: false, rationale: "A guarantee creates no basis for an S corporation shareholder — only an actual economic outlay does." },
            { label: "B", text: "Lending $30,000 personally to the corporation", isCorrect: true, rationale: "Correct — a direct loan from the shareholder to the corporation creates debt basis, which can absorb losses after stock basis is exhausted." },
            { label: "C", text: "Having the corporation borrow $30,000 from a bank", isCorrect: false, rationale: "Unlike partnerships, corporate-level debt does not give S corporation shareholders basis." },
            { label: "D", text: "Increasing the shareholder's salary by $30,000", isCorrect: false, rationale: "Salary is a deduction to the corporation and income to the shareholder; it does not create stock or debt basis." },
          ],
          explanation: "S corporation shareholders obtain basis only through stock investment and direct loans they personally make to the corporation. Guaranteeing corporate debt or having the corporation borrow from a third party creates no shareholder basis — a key difference from partnership taxation.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["S corporation", "basis planning"],
        },
      ],
    },
    {
      slug: "partnership-planning",
      title: "Partnership Compliance & Planning",
      shortDescription: "Special allocations, distributions, Section 754 elections, and partnership interest transfers.",
      blueprintArea: "Area II: Entity Tax Compliance",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 7,
      studyMaterialHtml: `
<h2>Why partnerships are the most flexible entity</h2>
<p>Partnerships can make <strong>special allocations</strong> — dividing specific items differently from the general profit ratio — provided the allocations have <strong>substantial economic effect</strong>. In practice, that means capital accounts are properly maintained, liquidating distributions follow capital accounts, and partners with deficit balances have a restoration obligation (or a qualified income offset applies).</p>

<div class="callout callout-important"><p><strong>IMPORTANT — §704(c):</strong> When a partner contributes property whose fair value differs from its basis, the <strong>built-in gain or loss must be allocated to the contributing partner</strong> when the property is later sold. You cannot shift a pre-contribution gain to other partners.</p></div>

<h3>Distributions</h3>
<table>
<thead><tr><th>Type</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Current cash</td><td>Tax-free to the extent of basis; excess is capital gain</td></tr>
<tr><td>Current property</td><td>Carryover basis, capped at the partner's remaining outside basis; no gain normally</td></tr>
<tr><td>Liquidating</td><td>Remaining basis allocated to distributed property; <strong>loss recognized only</strong> if the distribution consists solely of cash, unrealized receivables, and inventory</td></tr>
</tbody>
</table>

<h3>The Section 754 election</h3>
<p>Normally a buyer of a partnership interest gets an outside basis equal to the purchase price, but the partnership's <strong>inside basis</strong> in its assets is unchanged — creating a mismatch that can tax the new partner on appreciation they effectively paid for.</p>
<p>A <strong>§754 election</strong> allows the partnership to adjust inside basis (under §743(b) for transfers, §734(b) for distributions) so it aligns with the buyer's outside basis. It is beneficial for incoming partners when assets are appreciated — but it is <strong>binding on all future years</strong> unless revoked with IRS consent, and it creates ongoing administrative complexity.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A partner buys a one-third interest for $500,000 when the partnership's assets have an inside basis of $900,000 but a fair value of $1,500,000. Without a §754 election, if the partnership sells those assets, the new partner is allocated a share of gain that economically belongs to the seller. With the election, a $200,000 basis step-up is allocated specifically to the incoming partner.</p></div>

<h3>Loss limitation stack</h3>
<p>Apply in strict order: <strong>basis</strong> → <strong>at-risk</strong> → <strong>passive activity</strong> → <strong>excess business loss</strong> limitation.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Guaranteed payments are deductible by the partnership and are ordinary <em>and</em> self-employment income to the recipient — unlike a distributive share allocation to a limited partner, which may escape SE tax.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Special allocations valid only with <strong>substantial economic effect</strong></li>
<li><strong>§704(c)</strong>: pre-contribution built-in gain/loss stays with the <strong>contributing</strong> partner</li>
<li>Cash distributions tax-free to basis; liquidating loss only if solely cash/receivables/inventory</li>
<li><strong>§754 election</strong> aligns inside basis with the buyer's outside basis (§743(b) transfers, §734(b) distributions); binding going forward</li>
<li>Loss limits in order: <strong>basis → at-risk → passive → excess business loss</strong></li>
<li>Guaranteed payments = ordinary + SE income to the partner</li>
</ul>
`,
      mcqs: [
        {
          question: "A partner contributes land with a basis of $40,000 and a fair market value of $100,000. Three years later the partnership sells the land for $110,000. How is the gain allocated?",
          options: [
            { label: "A", text: "The entire $70,000 gain is shared according to the general profit-sharing ratio", isCorrect: false, rationale: "Section 704(c) requires the pre-contribution built-in gain to be allocated to the contributing partner." },
            { label: "B", text: "$60,000 of built-in gain is allocated to the contributing partner, and the remaining $10,000 is shared per the partnership agreement", isCorrect: true, rationale: "Correct — the $60,000 built-in gain at contribution ($100,000 − $40,000) must go to the contributing partner under §704(c); only the post-contribution appreciation of $10,000 is shared normally." },
            { label: "C", text: "The entire $70,000 gain is allocated to the contributing partner", isCorrect: false, rationale: "Only the pre-contribution built-in gain is specially allocated; post-contribution appreciation is shared." },
            { label: "D", text: "No gain is recognized because contributed property retains carryover basis", isCorrect: false, rationale: "Carryover basis means the gain is deferred until sale, not eliminated." },
          ],
          explanation: "Section 704(c) prevents shifting pre-contribution gain among partners. The $60,000 of built-in gain existing at the contribution date is allocated entirely to the contributing partner, while the $10,000 of appreciation occurring after contribution is allocated according to the partnership agreement.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["partnership", "704(c)"],
        },
      ],
    },
    {
      slug: "entity-choice-and-structuring",
      title: "Entity Choice & Structuring",
      shortDescription: "Selecting and changing entity type, and the tax consequences of conversions.",
      blueprintArea: "Area III: Entity Tax Planning",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 60,
      order: 8,
      studyMaterialHtml: `
<h2>The decision framework</h2>
<table>
<thead><tr><th>Factor</th><th>C corporation</th><th>S corporation</th><th>Partnership / LLC</th></tr></thead>
<tbody>
<tr><td>Level of tax</td><td>Entity + shareholder (double)</td><td>Owner only</td><td>Owner only</td></tr>
<tr><td>Loss pass-through</td><td>No — trapped at entity</td><td>Yes, limited by basis</td><td>Yes, basis includes entity debt</td></tr>
<tr><td>Self-employment tax</td><td>N/A (wages only)</td><td>Only on wages</td><td>Generally on general partner's share</td></tr>
<tr><td>Allocation flexibility</td><td>None</td><td>Strictly pro rata (one class of stock)</td><td><strong>Very flexible</strong> (special allocations)</td></tr>
<tr><td>Owner restrictions</td><td>None</td><td>≤100, no NRAs, no entity owners</td><td>None</td></tr>
<tr><td>QBI deduction</td><td>Not eligible</td><td>Eligible</td><td>Eligible</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Pass-through owners get the <strong>§199A QBI deduction</strong> — made permanent at 20% by OBBBA — while C corporation shareholders do not. That deduction is a central input into any entity-choice comparison, along with whether earnings will be distributed or reinvested.</p></div>

<h3>Reinvestment vs. distribution</h3>
<p>A C corporation is more attractive when earnings are <strong>retained and reinvested</strong>, because the second layer of tax is deferred until distribution. When owners need current cash, the double tax bites immediately and pass-through treatment usually wins.</p>

<h3>Conversion consequences</h3>
<table>
<thead><tr><th>Conversion</th><th>Typical consequence</th></tr></thead>
<tbody>
<tr><td>C → S</td><td>No immediate entity-level tax, but exposure to <strong>BIG tax</strong> and excess net passive income tax; existing E&P persists</td></tr>
<tr><td>S → C</td><td>Generally straightforward; post-termination transition period rules apply to distributions</td></tr>
<tr><td>Partnership → corporation</td><td>Can often be structured tax-free under <strong>§351</strong> if control requirements are met</td></tr>
<tr><td><strong>C → partnership/LLC</strong></td><td><strong>Deemed liquidation</strong> — gain recognized at both corporate and shareholder levels. Usually prohibitively expensive.</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The asymmetry is the point: moving <em>into</em> corporate form is often tax-free; moving <em>out</em> of C corporation form is generally a taxable liquidation. That one-way door is exactly why the initial entity choice deserves care.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>C corp: double tax, no loss pass-through, <strong>no QBI</strong>; better for <strong>reinvested</strong> earnings</li>
<li>S corp: pro rata allocations only, SE tax on wages only, ≤100 eligible shareholders</li>
<li>Partnership/LLC: <strong>special allocations</strong>, basis includes entity debt, most flexible</li>
<li><strong>C → S</strong>: watch BIG tax and passive income tax; <strong>C → partnership = deemed liquidation</strong> (very costly)</li>
<li>Partnership → corporation often tax-free under §351</li>
<li>Getting into corporate form is easy; getting out is expensive</li>
</ul>
`,
      mcqs: [
        {
          question: "A C corporation with substantially appreciated assets wants to convert to an LLC taxed as a partnership. What is the primary tax consequence?",
          options: [
            { label: "A", text: "The conversion is tax-free under Section 351", isCorrect: false, rationale: "Section 351 applies to transfers into corporate solution, not out of it." },
            { label: "B", text: "The conversion is treated as a liquidation, triggering gain at both the corporate and shareholder levels", isCorrect: true, rationale: "Correct — converting from C corporation to a partnership form is treated as a deemed liquidation, producing corporate-level gain on the appreciated assets and shareholder-level gain on the deemed distribution." },
            { label: "C", text: "Only the shareholders recognize gain", isCorrect: false, rationale: "The corporation also recognizes gain as if it sold its assets at fair market value." },
            { label: "D", text: "Gain is deferred until the LLC later sells the assets", isCorrect: false, rationale: "There is no deferral mechanism for this type of conversion." },
          ],
          explanation: "Converting a C corporation into a partnership or LLC is treated as a liquidation of the corporation. The corporation recognizes gain as though it sold its assets at fair market value, and the shareholders recognize gain on the deemed distribution — often making this conversion prohibitively expensive.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["entity choice", "conversions"],
        },
      ],
    },
    {
      slug: "entity-distributions-and-liquidations",
      title: "Distributions, Redemptions & Liquidations",
      shortDescription: "Planning around corporate distributions, stock redemptions, and complete liquidations.",
      blueprintArea: "Area III: Entity Tax Planning",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 60,
      order: 9,
      studyMaterialHtml: `
<h2>Why redemption treatment matters</h2>
<p>When a corporation buys back a shareholder's stock, the shareholder wants <strong>sale or exchange</strong> treatment — recovering basis and reporting capital gain — rather than <strong>dividend</strong> treatment, where the entire distribution is ordinary dividend income to the extent of E&P with no basis recovery.</p>

<h3>Tests for sale treatment (§302)</h3>
<ol>
<li><strong>Complete termination</strong> of the shareholder's interest — the cleanest route; family attribution can be waived if strict conditions are met (no interest other than as a creditor, and no reacquisition for 10 years)</li>
<li><strong>Substantially disproportionate</strong> — after the redemption the shareholder owns less than 80% of their prior percentage <em>and</em> less than 50% of total voting power</li>
<li><strong>Not essentially equivalent to a dividend</strong> — a facts-and-circumstances test requiring a meaningful reduction in the shareholder's proportionate interest</li>
<li><strong>Partial liquidation</strong> — at the corporate level, a genuine contraction of the business</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT — attribution rules (§318):</strong> A shareholder is treated as owning stock held by spouse, children, grandchildren, and parents, plus stock held through entities. In a closely held family corporation this frequently defeats the disproportionate-redemption tests, converting what looks like a sale into a dividend.</p></div>

<h3>Complete liquidation</h3>
<table>
<thead><tr><th>Level</th><th>Consequence</th></tr></thead>
<tbody>
<tr><td>Corporation</td><td>Recognizes gain <strong>and generally loss</strong> as if it sold all assets at fair market value</td></tr>
<tr><td>Shareholder</td><td>Capital gain or loss equal to FMV received minus stock basis</td></tr>
<tr><td>Subsidiary liquidating into an 80% parent (§332)</td><td><strong>Tax-free</strong>; the parent takes a carryover basis in the assets</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A shareholder owns 60% of a corporation. After a redemption she owns 45%. Substantially disproportionate requires ownership below 80% of the prior percentage (below 48%) <em>and</em> below 50% of voting power. She satisfies both — 45% is under 48% and under 50% — so <strong>sale treatment</strong> applies, assuming no attribution problems.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A corporation distributing <strong>appreciated</strong> property in a non-liquidating distribution recognizes gain but <strong>never a loss</strong>. In a <strong>complete liquidation</strong>, losses generally <em>are</em> recognized (subject to related-party and anti-abuse limits). That asymmetry gets tested.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Shareholders want <strong>sale/exchange</strong> (basis recovery + capital gain), not dividend treatment</li>
<li>§302 tests: complete termination, <strong>substantially disproportionate (&lt;80% of prior % and &lt;50% voting)</strong>, not essentially equivalent to a dividend, partial liquidation</li>
<li><strong>§318 attribution</strong> (spouse, children, grandchildren, parents, entities) often defeats these tests in family corporations</li>
<li>Complete liquidation: corporation recognizes gain <strong>and generally loss</strong>; shareholder has capital gain/loss</li>
<li><strong>§332</strong>: subsidiary liquidating into an 80% parent is <strong>tax-free</strong>, carryover basis</li>
<li>Non-liquidating distribution of appreciated property → gain only, never loss</li>
</ul>
`,
      mcqs: [
        {
          question: "A shareholder owns 70% of a corporation's stock. Following a redemption, she owns 52%. Ignoring attribution, does the redemption qualify as substantially disproportionate?",
          options: [
            { label: "A", text: "Yes, because her ownership decreased significantly", isCorrect: false, rationale: "A significant decrease alone is not enough — both prongs of the mechanical test must be satisfied." },
            { label: "B", text: "No, because she still owns 50% or more of the voting power", isCorrect: true, rationale: "Correct — the substantially disproportionate test requires ownership below 80% of the prior percentage (below 56%) AND below 50% of total voting power. At 52% she fails the second prong." },
            { label: "C", text: "Yes, because 52% is less than 80% of 70%", isCorrect: false, rationale: "She does satisfy that prong (52% < 56%), but the 50% voting power requirement is not met." },
            { label: "D", text: "Yes, because any reduction in ownership qualifies", isCorrect: false, rationale: "The test is mechanical and both conditions must be satisfied." },
          ],
          explanation: "The substantially disproportionate redemption test under §302(b)(2) has two requirements: after the redemption, the shareholder must own less than 80% of their prior ownership percentage (here, less than 56%) AND less than 50% of total voting power. At 52%, she satisfies the first but fails the second, so the redemption would be treated as a dividend distribution.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["redemptions", "302"],
        },
      ],
    },
    {
      slug: "property-transactions-advanced-planning",
      title: "Property Transactions: Advanced Planning",
      shortDescription: "Installment sales, related-party rules, and structuring dispositions to manage timing and character.",
      blueprintArea: "Area IV: Property Transactions",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 60,
      order: 10,
      studyMaterialHtml: `
<h2>Installment sales</h2>
<p>An installment sale spreads gain recognition across the years payments are received, matching tax to cash flow and potentially keeping the taxpayer in lower brackets.</p>
<div class="callout callout-important"><p><strong>Gross profit percentage = Gross profit ÷ Contract price.</strong> Each principal payment received is multiplied by this percentage to determine recognized gain.</p></div>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Property with a basis of $300,000 is sold for $500,000, payable $100,000 per year for five years. Gross profit is $200,000, so the gross profit percentage is 40%. Each $100,000 payment produces <strong>$40,000 of recognized gain</strong> (plus separately stated interest).</p></div>

<h3>What can't use the installment method</h3>
<ul>
<li><strong>Inventory</strong> and dealer dispositions</li>
<li><strong>Publicly traded securities</strong></li>
<li><strong>Depreciation recapture</strong> under §1245/§1250 — recapture is recognized <strong>entirely in the year of sale</strong>, even if no cash is received that year</li>
<li>Losses — the installment method applies only to gains</li>
</ul>

<h3>Related-party traps</h3>
<ul>
<li><strong>§267 loss disallowance</strong> — losses on sales between related parties are <strong>disallowed entirely</strong>. The buyer may later use the disallowed loss to offset gain on a subsequent sale to an unrelated party.</li>
<li><strong>Installment sale to a related party</strong> — if the related buyer resells within <strong>two years</strong>, the original seller must accelerate remaining gain</li>
<li><strong>§1239</strong> — gain on the sale of depreciable property to a related party is <strong>ordinary income</strong>, not capital gain</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE (§267):</strong> A father sells stock with a $50,000 basis to his daughter for $30,000. The $20,000 loss is disallowed. If she later sells it to an unrelated buyer for $60,000, her realized gain is $30,000 but she may use the father's disallowed $20,000 loss, recognizing only $10,000.</p></div>

<h3>Like-kind exchange planning</h3>
<p>§1031 now applies only to <strong>real property</strong>. Key planning points: avoid receiving boot (including net debt relief), respect the <strong>45-day</strong> identification and <strong>180-day</strong> completion deadlines, and use a qualified intermediary so the taxpayer never has actual or constructive receipt of proceeds.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Combining strategies is where TCP questions live — e.g., an installment sale of appreciated real estate <em>plus</em> the fact that depreciation recapture accelerates into year one. Compute recapture first, then apply the installment method to the remaining gain.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>Gross profit % = gross profit ÷ contract price</strong>; apply to each principal payment</li>
<li>Not eligible: inventory/dealer property, publicly traded securities, losses</li>
<li><strong>Depreciation recapture is recognized fully in the year of sale</strong>, regardless of payments received</li>
<li><strong>§267</strong>: related-party losses disallowed (buyer may use them on a later sale to an unrelated party)</li>
<li>Related-party installment resale within <strong>2 years</strong> accelerates the seller's gain</li>
<li><strong>§1239</strong>: gain on depreciable property sold to a related party is <strong>ordinary</strong></li>
<li>§1031: real property only; 45/180 days; use a qualified intermediary</li>
</ul>
`,
      mcqs: [
        {
          question: "A taxpayer sells equipment with an adjusted basis of $60,000 (original cost $100,000, accumulated depreciation $40,000) for $120,000, receiving payments over four years. What is recognized in the year of sale beyond any installment gain on the first payment?",
          options: [
            { label: "A", text: "Nothing — all gain is spread over four years", isCorrect: false, rationale: "Depreciation recapture cannot be deferred under the installment method." },
            { label: "B", text: "$40,000 of ordinary income from Section 1245 depreciation recapture", isCorrect: true, rationale: "Correct — Section 1245 recapture of the $40,000 of depreciation taken is recognized entirely in the year of sale, regardless of how little cash is received." },
            { label: "C", text: "$60,000 of capital gain", isCorrect: false, rationale: "Total gain is $60,000, but $40,000 is recapture recognized immediately and the balance is spread." },
            { label: "D", text: "$120,000 of ordinary income", isCorrect: false, rationale: "Recapture is limited to depreciation previously taken, not the full sales price." },
          ],
          explanation: "Under the installment method, depreciation recapture under Section 1245 is recognized in full in the year of sale even if little or no cash is received. Here, $40,000 of recapture is ordinary income immediately, and only the remaining $20,000 of gain is spread across the installment payments.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["installment sale", "recapture"],
        },
      ],
    },
    {
      slug: "multi-jurisdictional-and-international-basics",
      title: "Multi-Jurisdictional & International Basics",
      shortDescription: "State nexus concepts, apportionment, and the fundamentals of US international taxation.",
      blueprintArea: "Area III: Entity Tax Planning",
      blueprintStatus: "PROVISIONAL",
      difficulty: "HARD",
      estimatedMinutes: 55,
      order: 11,
      studyMaterialHtml: `
<h2>State taxation: nexus first</h2>
<p><strong>Nexus</strong> is the connection that permits a state to tax a business. Physical presence (property, employees, inventory) has always created nexus; following <em>South Dakota v. Wayfair</em>, states may also assert <strong>economic nexus</strong> based on sales or transaction thresholds without any physical presence.</p>

<div class="callout callout-important"><p><strong>IMPORTANT — Public Law 86-272:</strong> A narrow federal protection preventing a state from imposing a <strong>net income tax</strong> when the only in-state activity is <strong>soliciting orders for tangible personal property</strong> that are approved and shipped from outside the state. It does <strong>not</strong> protect services, intangibles, or sales/use tax obligations — a heavily tested limitation.</p></div>

<h3>Apportionment</h3>
<p>Multistate income is divided among states using apportionment factors. The traditional three-factor formula weighted property, payroll, and sales; most states have moved to a <strong>single sales factor</strong>, often with <strong>market-based sourcing</strong> (sales sourced to where the customer receives the benefit) rather than cost-of-performance sourcing.</p>

<h3>US international fundamentals</h3>
<ul>
<li>US persons are taxed on <strong>worldwide income</strong>; the <strong>foreign tax credit</strong> mitigates double taxation, limited to the US tax attributable to foreign-source income, with excess credits carried back one year and forward ten</li>
<li><strong>Subpart F</strong> currently taxes US shareholders on certain passive and mobile income of a controlled foreign corporation (CFC)</li>
<li><strong>GILTI</strong> subjects US shareholders to current tax on a CFC's income exceeding a routine return on tangible assets</li>
<li><strong>Sourcing rules</strong> matter: services are generally sourced where performed; interest and dividends generally by the payer's residence</li>
<li><strong>Transfer pricing</strong> requires related-party cross-border transactions to be priced at <strong>arm's length</strong>, with documentation to support it</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company with employees only in State A ships goods into State B where salespeople merely solicit orders that are approved and fulfilled from State A. P.L. 86-272 likely shields it from State B's <em>income</em> tax — but it may still owe State B sales tax collection obligations under economic nexus rules.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Read carefully for what kind of tax is at issue. P.L. 86-272 protection applies to <strong>net income taxes only</strong> — never to gross receipts taxes, franchise taxes, or sales and use tax.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Nexus = physical presence <strong>or</strong> economic nexus (post-<em>Wayfair</em> thresholds)</li>
<li><strong>P.L. 86-272</strong> shields only <strong>net income tax</strong>, only for solicitation of orders for <strong>tangible personal property</strong> shipped from out of state — not services, not sales tax</li>
<li>Apportionment trending to <strong>single sales factor</strong> with market-based sourcing</li>
<li>US taxes worldwide income; <strong>foreign tax credit</strong> limited to US tax on foreign income (back 1, forward 10)</li>
<li><strong>Subpart F</strong> and <strong>GILTI</strong> tax US shareholders currently on certain CFC income</li>
<li>Related-party cross-border pricing must be <strong>arm's length</strong> with documentation</li>
</ul>
`,
      mcqs: [
        {
          question: "A company's only activity in a state is sending sales representatives to solicit orders for tangible goods, which are approved and shipped from outside the state. What protection does Public Law 86-272 provide?",
          options: [
            { label: "A", text: "Complete protection from all state taxes in that state", isCorrect: false, rationale: "P.L. 86-272 is narrow and does not shield all taxes." },
            { label: "B", text: "Protection from the state's net income tax only", isCorrect: true, rationale: "Correct — P.L. 86-272 prevents imposition of a net income tax when in-state activity is limited to soliciting orders for tangible personal property approved and shipped from outside the state." },
            { label: "C", text: "Protection from sales and use tax collection obligations", isCorrect: false, rationale: "Sales and use tax obligations are entirely outside the scope of P.L. 86-272." },
            { label: "D", text: "Protection from franchise and gross receipts taxes", isCorrect: false, rationale: "Only net income taxes are covered; franchise and gross receipts taxes are not." },
          ],
          explanation: "Public Law 86-272 offers narrow protection: it bars a state from imposing a net income tax where the taxpayer's only in-state activity is soliciting orders for tangible personal property that are approved and shipped from outside the state. It does not protect against sales and use tax, franchise taxes, or gross receipts taxes, and does not cover services or intangibles.",
          difficulty: "MEDIUM",
          questionType: "EXCEPTION",
          tags: ["state tax", "nexus", "P.L. 86-272"],
        },
      ],
    },
    {
      slug: "tax-research-and-documentation",
      title: "Tax Research & Documentation",
      shortDescription: "The hierarchy of tax authority, research methodology, and documenting a defensible position.",
      blueprintArea: "Area I: Individual Tax Compliance & Personal Financial Planning",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 45,
      order: 12,
      studyMaterialHtml: `
<h2>Hierarchy of authority</h2>
<table>
<thead><tr><th>Tier</th><th>Sources</th></tr></thead>
<tbody>
<tr><td><strong>Primary — statutory</strong></td><td>Internal Revenue Code (highest), tax treaties, the Constitution</td></tr>
<tr><td><strong>Primary — administrative</strong></td><td>Treasury Regulations (final &gt; temporary &gt; proposed), Revenue Rulings, Revenue Procedures, Private Letter Rulings (binding only on the requesting taxpayer)</td></tr>
<tr><td><strong>Primary — judicial</strong></td><td>Supreme Court, Courts of Appeals, Tax Court / District Court / Court of Federal Claims</td></tr>
<tr><td><strong>Secondary</strong></td><td>Treatises, journals, editorial services — helpful for understanding, <strong>never citable as authority</strong></td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> A <strong>Private Letter Ruling</strong> may be relied upon only by the taxpayer who requested it. It can indicate the IRS's thinking, but it is not precedent for anyone else — a classic exam distinction.</p></div>

<h3>Research methodology</h3>
<ol>
<li><strong>Establish the facts</strong> and identify what is still unknown</li>
<li><strong>Identify the issues</strong> — frame precise questions</li>
<li><strong>Locate authority</strong>, starting with the Code and regulations</li>
<li><strong>Evaluate</strong> the authority, resolving conflicts by weight and currency</li>
<li><strong>Develop conclusions</strong> and recommendations</li>
<li><strong>Communicate</strong> — memo to file and a client letter in plain language</li>
</ol>

<h3>Confidence levels</h3>
<p>From weakest to strongest: <strong>reasonable basis</strong> (~20%) → <strong>substantial authority</strong> (~40%) → <strong>more likely than not</strong> (&gt;50%) → <strong>should</strong> → <strong>will</strong>. Disclosure on Form 8275 lowers the standard a preparer must meet to avoid penalties from substantial authority down to reasonable basis.</p>

<h3>Documenting the position</h3>
<p>A tax memo should state the facts relied on, the issue, the applicable authority, the analysis, and the conclusion — including <strong>contrary authority</strong> and why it doesn't control. Documentation created contemporaneously is far more persuasive than an explanation constructed after an examination begins.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Watch out for <strong>stale authority</strong>. A Revenue Ruling can be superseded, modified, or obsoleted by later guidance or legislation — always confirm a source is still good law before relying on it. This is especially important right now given the volume of OBBBA changes.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Primary: <strong>IRC</strong> (highest) → Treasury Regs (final &gt; temp &gt; proposed) → Rev. Rulings/Procedures → case law</li>
<li><strong>PLRs bind only the requesting taxpayer</strong></li>
<li>Secondary sources (treatises, journals) are never citable authority</li>
<li>Confidence ladder: reasonable basis → substantial authority → more likely than not → should → will</li>
<li><strong>Form 8275 disclosure</strong> lowers the preparer standard from substantial authority to reasonable basis</li>
<li>Memo must address <strong>contrary authority</strong>; check for superseded/obsoleted guidance</li>
</ul>
`,
      mcqs: [
        {
          question: "A tax practitioner finds a Private Letter Ruling issued to another taxpayer that directly supports the client's intended position. How should the practitioner treat it?",
          options: [
            { label: "A", text: "Rely on it as binding precedent for the client", isCorrect: false, rationale: "A PLR may be relied upon only by the taxpayer who requested it." },
            { label: "B", text: "Treat it as an indication of IRS thinking, but not as authority the client can rely on", isCorrect: true, rationale: "Correct — PLRs are taxpayer-specific and cannot be cited as precedent, though they can indicate how the IRS views similar facts." },
            { label: "C", text: "Disregard it entirely, as it has no informational value", isCorrect: false, rationale: "PLRs do provide useful insight into the IRS's position, even without precedential force." },
            { label: "D", text: "Treat it as equivalent to a Revenue Ruling", isCorrect: false, rationale: "Revenue Rulings apply generally to all taxpayers with similar facts; PLRs do not." },
          ],
          explanation: "A Private Letter Ruling binds the IRS only with respect to the taxpayer who requested it and may not be cited as precedent by others. It remains useful as an indication of the IRS's interpretive position, but a Revenue Ruling — which applies generally — carries far greater weight.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["tax research", "authority"],
        },
      ],
    },
  ],
};
