import type { SubjectSeed } from "./types";

const shellTopics: { slug: string; title: string; shortDescription: string; area: string }[] = [
  { slug: "circular-230-and-practitioner-ethics", title: "Circular 230 & Practitioner Ethics", shortDescription: "IRS rules governing tax practitioner conduct and AICPA tax ethics.", area: "Area I: Ethics, Professional Responsibilities & Federal Tax Procedures" },
  { slug: "irs-procedures-and-appeals", title: "IRS Procedures & Appeals", shortDescription: "Audits, the appeals process, and statutes of limitation.", area: "Area I: Ethics, Professional Responsibilities & Federal Tax Procedures" },
  { slug: "business-law-contracts", title: "Business Law: Contracts", shortDescription: "Contract formation, performance, breach, and remedies under the UCC and common law.", area: "Area II: Business Law" },
  { slug: "business-law-agency-and-business-structures", title: "Business Law: Agency & Business Structures", shortDescription: "Agency relationships and the legal characteristics of business entity types.", area: "Area II: Business Law" },
  { slug: "debtor-creditor-and-bankruptcy", title: "Debtor-Creditor & Bankruptcy", shortDescription: "Secured transactions, suretyship, and bankruptcy priority rules.", area: "Area II: Business Law" },
  { slug: "federal-tax-procedures-and-penalties", title: "Federal Tax Procedures & Penalties", shortDescription: "Filing requirements, accuracy-related and fraud penalties.", area: "Area I: Ethics, Professional Responsibilities & Federal Tax Procedures" },
  { slug: "property-transactions-basis-and-cost-recovery", title: "Property Transactions: Basis & Cost Recovery", shortDescription: "Determining basis and applying MACRS depreciation and Section 179.", area: "Area III: Federal Taxation of Property Transactions" },
  { slug: "property-transactions-gains-losses-and-like-kind-exchanges", title: "Property Transactions: Gains, Losses & Like-Kind Exchanges", shortDescription: "Capital gains/losses, Section 1231, and Section 1031 exchanges.", area: "Area III: Federal Taxation of Property Transactions" },
  { slug: "individual-taxation-adjustments-and-deductions", title: "Individual Taxation: Adjustments & Deductions", shortDescription: "Above-the-line adjustments, the standard deduction, and itemized deductions.", area: "Area IV: Federal Taxation of Individuals" },
  { slug: "filing-status-credits-and-amt", title: "Filing Status, Credits & AMT", shortDescription: "Filing status determination, common tax credits, and the alternative minimum tax.", area: "Area IV: Federal Taxation of Individuals" },
  { slug: "retirement-plans-and-tax-planning-basics", title: "Retirement Plans & Tax Planning Basics", shortDescription: "IRAs, qualified plans, and basic individual tax planning concepts.", area: "Area IV: Federal Taxation of Individuals" },
  { slug: "c-corporation-taxation", title: "C Corporation Taxation", shortDescription: "Corporate taxable income, the dividends-received deduction, and double taxation.", area: "Area V: Federal Taxation of Entities" },
  { slug: "s-corporation-taxation", title: "S Corporation Taxation", shortDescription: "Eligibility, the single level of taxation, and basis in S corp stock.", area: "Area V: Federal Taxation of Entities" },
  { slug: "partnership-taxation", title: "Partnership Taxation", shortDescription: "Partner basis, partnership allocations, and guaranteed payments.", area: "Area V: Federal Taxation of Entities" },
  { slug: "trusts-estates-and-gift-tax-basics", title: "Trusts, Estates & Gift Tax Basics", shortDescription: "Fiduciary income tax basics and the gift tax annual exclusion.", area: "Area V: Federal Taxation of Entities" },
  { slug: "employee-benefits-and-payroll-tax", title: "Employee Benefits & Payroll Tax", shortDescription: "Fringe benefit taxation and employer payroll tax obligations.", area: "Area IV: Federal Taxation of Individuals" },
  { slug: "exempt-organizations-basics", title: "Exempt Organizations Basics", shortDescription: "501(c)(3) qualification and unrelated business income tax basics.", area: "Area V: Federal Taxation of Entities" },
];

export const reg: SubjectSeed = {
  slug: "reg",
  name: "Taxation and Regulation",
  shortName: "REG",
  type: "CORE",
  description:
    "REG covers federal taxation of individuals, entities, and property transactions, along with business law and professional ethics. It rewards candidates who can apply rules to specific numbers, not just recite them — expect calculation-heavy task-based simulations.",
  difficulty: "HARD",
  estimatedHours: 130,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/reg-cpa-exam-blueprint",
  order: 3,
  topics: [
    {
      slug: "individual-taxation-gross-income",
      title: "Individual Taxation: Gross Income",
      shortDescription: "What counts as gross income, common exclusions, and how different income types are taxed.",
      blueprintArea: "Area IV: Federal Taxation of Individuals",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 65,
      order: 1,
      studyMaterialHtml: `
<h2>Gross income: broadly defined</h2>
<p>IRC Section 61 defines gross income as "all income from whatever source derived" — a deliberately broad definition. Unless the Code specifically excludes an item, assume it's taxable.</p>

<h3>Commonly taxable items</h3>
<ul>
<li>Wages, salaries, bonuses, and tips</li>
<li>Interest income (with municipal bond interest as a key exception — see below)</li>
<li>Dividends</li>
<li>Business and rental income</li>
<li>Alimony from divorce/separation agreements executed <strong>before</strong> 2019 (post-2018 agreements: not taxable to recipient, not deductible by payer)</li>
<li>Gambling winnings (in full — losses are only deductible as an itemized deduction, up to winnings)</li>
<li>Prizes and awards (with narrow exceptions)</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT — the 2019 alimony flip:</strong> For divorce/separation instruments executed after December 31, 2018, alimony is <strong>not</strong> deductible by the payer and <strong>not</strong> taxable to the recipient — the opposite of the pre-2019 rule. Watch for the execution date in exam scenarios.</p></div>

<h3>Common exclusions</h3>
<table>
<thead><tr><th>Item</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Municipal bond interest</td><td>Excluded from federal gross income</td></tr>
<tr><td>Life insurance proceeds (death benefit)</td><td>Excluded, with narrow exceptions (e.g., transfer for value)</td></tr>
<tr><td>Gifts and inheritances received</td><td>Excluded to the recipient (though income later earned on them is taxable)</td></tr>
<tr><td>Child support received</td><td>Excluded</td></tr>
<tr><td>Employer-provided health insurance premiums</td><td>Excluded to the employee</td></tr>
<tr><td>Scholarships</td><td>Excluded to the extent used for tuition and required course materials (room/board is taxable)</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A taxpayer receives $5,000 in municipal bond interest and $3,000 in corporate bond interest during the year. Only the $3,000 of corporate bond interest is included in gross income; the municipal bond interest is excluded (though it may still affect the taxability of Social Security benefits).</p></div>

<h3>Social Security benefits</h3>
<p>Up to 85% of Social Security benefits can be taxable, depending on the taxpayer's "provisional income" (AGI + tax-exempt interest + 50% of Social Security benefits) relative to threshold amounts — a frequently tested calculation.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When a question lists several income items and asks for "gross income," go through each item and default to <em>taxable</em> unless you can specifically name the exclusion that applies.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>§61: gross income = all income from whatever source, unless specifically excluded</li>
<li>Alimony: pre-2019 agreements → taxable/deductible; post-2018 agreements → neither</li>
<li>Excluded: muni bond interest, life insurance death benefit, gifts/inheritances received, child support, employer health premiums, scholarships (tuition/materials only)</li>
<li>Gambling winnings: fully taxable; losses deductible only as itemized deduction up to winnings</li>
<li>Social Security: up to 85% taxable based on provisional income</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Watch the alimony agreement execution date — pre- vs. post-2019 rules are opposite.</p></div>
`,
      mcqs: [
        {
          question: "A taxpayer's divorce agreement was executed in 2021 and requires $2,000/month in alimony payments. How should this be treated for federal income tax purposes?",
          options: [
            { label: "A", text: "Deductible by the payer and taxable to the recipient", isCorrect: false, rationale: "This was the rule for agreements executed before 2019 — not for a 2021 agreement." },
            { label: "B", text: "Not deductible by the payer and not taxable to the recipient", isCorrect: true, rationale: "Correct — for divorce or separation agreements executed after December 31, 2018, alimony is neither deductible by the payer nor taxable to the recipient." },
            { label: "C", text: "Deductible by the payer but not taxable to the recipient", isCorrect: false, rationale: "Alimony treatment is symmetric — it's either deductible/taxable together (pre-2019) or neither (post-2018), not a mismatch." },
            { label: "D", text: "Taxable to the recipient but not deductible by the payer", isCorrect: false, rationale: "This asymmetric treatment does not apply to alimony under current rules." },
          ],
          explanation: "The Tax Cuts and Jobs Act changed alimony treatment for divorce or separation instruments executed after December 31, 2018: alimony payments are no longer deductible by the payer nor includible in the recipient's gross income. Since this agreement was executed in 2021, the new rule applies.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["gross income", "alimony"],
        },
        {
          question: "Which of the following items is included in a taxpayer's federal gross income?",
          options: [
            { label: "A", text: "Interest earned on a municipal bond", isCorrect: false, rationale: "Municipal bond interest is specifically excluded from federal gross income." },
            { label: "B", text: "A $10,000 gift received from a parent", isCorrect: false, rationale: "Gifts received are excluded from the recipient's gross income (though the giver may have gift tax considerations)." },
            { label: "C", text: "Gambling winnings from a casino", isCorrect: true, rationale: "Correct — gambling winnings are fully includible in gross income; only gambling losses (up to the amount of winnings) are deductible, and only as an itemized deduction." },
            { label: "D", text: "Life insurance proceeds received upon the death of a spouse", isCorrect: false, rationale: "Life insurance death benefits are generally excluded from the beneficiary's gross income." },
          ],
          explanation: "Gambling winnings are taxable in full and included in gross income. Municipal bond interest, gifts received, and life insurance death benefits are all specifically excluded from gross income under the Internal Revenue Code.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["gross income", "exclusions"],
        },
      ],
    },
    ...shellTopics.map((t, i) => ({
      slug: t.slug,
      title: t.title,
      shortDescription: t.shortDescription,
      blueprintArea: t.area,
      blueprintStatus: "PROVISIONAL" as const,
      difficulty: "MEDIUM" as const,
      estimatedMinutes: 50,
      order: i + 2,
      isComingSoon: true,
    })),
  ],
};
