import type { SubjectSeed } from "./types";

const shellTopics: { slug: string; title: string; shortDescription: string; area: string }[] = [
  { slug: "entity-tax-planning", title: "Entity Tax Planning", shortDescription: "Choice of entity considerations and structuring for tax efficiency.", area: "Entity Tax Compliance & Planning" },
  { slug: "property-transactions-advanced-planning", title: "Property Transactions: Advanced Planning", shortDescription: "Advanced like-kind exchange and installment sale planning.", area: "Property Transactions" },
  { slug: "estate-and-gift-tax-planning", title: "Estate & Gift Tax Planning", shortDescription: "Lifetime gifting strategies and estate tax minimization techniques.", area: "Estate & Gift Taxation" },
  { slug: "retirement-and-personal-financial-planning", title: "Retirement & Personal Financial Planning", shortDescription: "Retirement account strategies and integrated personal financial planning.", area: "Personal Financial Planning" },
  { slug: "multi-jurisdictional-tax-considerations", title: "Multi-Jurisdictional Tax Considerations", shortDescription: "State tax nexus and multi-state tax planning basics.", area: "Individual Tax Compliance & Planning" },
  { slug: "tax-credits-and-incentives-planning", title: "Tax Credits & Incentives Planning", shortDescription: "Planning around available federal tax credits and incentives.", area: "Individual Tax Compliance & Planning" },
  { slug: "international-tax-basics", title: "International Tax Basics", shortDescription: "Foreign tax credit basics and reporting for US persons with foreign income.", area: "Entity Tax Compliance & Planning" },
  { slug: "tax-research-methodology", title: "Tax Research Methodology", shortDescription: "Using primary authority to research and support a tax position.", area: "Individual Tax Compliance & Planning" },
  { slug: "s-corporation-planning", title: "S Corporation Planning", shortDescription: "Basis planning and distribution ordering for S corp shareholders.", area: "Entity Tax Compliance & Planning" },
  { slug: "partnership-planning", title: "Partnership Planning", shortDescription: "Special allocations and planning around partnership distributions.", area: "Entity Tax Compliance & Planning" },
  { slug: "trust-and-fiduciary-planning", title: "Trust & Fiduciary Planning", shortDescription: "Trust structuring and distributable net income planning.", area: "Estate & Gift Taxation" },
];

export const tcp: SubjectSeed = {
  slug: "tcp",
  name: "Tax Compliance and Planning",
  shortName: "TCP",
  type: "DISCIPLINE",
  description:
    "TCP is an extension of REG's tax content, going deeper into individual and entity tax planning, property transactions, and personal financial planning. It's geared toward candidates focused on tax practice — public accounting tax teams, private client services, and in-house tax roles.",
  difficulty: "HARD",
  estimatedHours: 85,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/tcp-cpa-exam-blueprint",
  order: 6,
  topics: [
    {
      slug: "individual-tax-planning-strategies",
      title: "Individual Tax Planning Strategies",
      shortDescription: "Timing strategies, income shifting, and using deductions and credits to minimize tax liability legally.",
      blueprintArea: "Individual Tax Compliance & Planning",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 1,
      studyMaterialHtml: `
<h2>Where TCP goes beyond REG</h2>
<p>REG tests whether you can correctly compute a taxpayer's liability under current rules. TCP tests whether you can identify the <em>better</em> outcome across legitimate alternatives — timing, character, and structure all matter here, not just calculation.</p>

<h3>Timing strategies</h3>
<ul>
<li><strong>Income deferral:</strong> Delaying a bonus or year-end invoice into the next tax year when a lower rate or bracket is expected</li>
<li><strong>Deduction acceleration:</strong> Prepaying deductible expenses (within limits) before year-end when in a higher bracket this year</li>
<li><strong>Bunching itemized deductions:</strong> Concentrating deductible expenses (e.g., charitable contributions) into alternating years to exceed the standard deduction threshold periodically, rather than falling just short every year</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A taxpayer's itemized deductions are typically $11,000/year, just under the $13,850 standard deduction (single). By "bunching" two years of charitable giving into one year ($9,000 instead of $4,500 twice), itemized deductions reach $15,500 in year one (itemize) and drop to $6,500 in year two (take the standard deduction) — total deductions across two years exceed simply taking the standard deduction both years.</p></div>

<h3>Character of income</h3>
<p>Long-term capital gains and qualified dividends are taxed at preferential rates (0%/15%/20%) versus ordinary income rates up to 37%. Planning around <strong>holding period</strong> (crossing the one-year mark before selling an appreciated asset) is a core, low-risk planning technique.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Tax planning must stay within the law — the line between legitimate tax <strong>avoidance</strong> (minimizing tax through legal means, e.g., timing and elections) and illegal tax <strong>evasion</strong> (concealing income or falsifying records) is itself an exam-relevant ethical concept.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When a TCP question gives a taxpayer's expected income in two different years, think about which techniques shift income or deductions to the lower-taxed year — that's usually the crux of the question.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Income deferral / deduction acceleration: shift based on expected bracket changes</li>
<li>Bunching: concentrate itemized deductions in alternating years to beat the standard deduction periodically</li>
<li>Long-term capital gains/qualified dividends taxed at preferential rates — holding period planning matters</li>
<li>Avoidance (legal) vs. evasion (illegal) is a distinct, testable ethical line</li>
</ul>
`,
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
