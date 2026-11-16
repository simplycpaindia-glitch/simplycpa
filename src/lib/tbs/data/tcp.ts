import type { Simulation } from "../types";
import { num, pick, ref, row } from "../build";

// TCP simulations: one per topic. Where a dollar limit changes by year, the scenario
// gives the figure to use.

const AMOUNT = ["Item", "Amount ($)"];
const YES_NO = ["Yes", "No"] as const;
const ESTATE = ["Included in full", "Half included", "Not included"] as const;
const ENTITY = ["C corporation", "S corporation", "Partnership (or LLC taxed as one)", "Sole proprietorship"] as const;

import { tcpSimulations2 } from "./tcp-2";

const tcpSimulations1: Simulation[] = [
  // ── Area I: Individual tax compliance and personal financial planning ──
  {
    slug: "capital-gain-and-loss-netting",
    subject: "tcp",
    topic: "individual-tax-planning-strategies",
    title: "Netting capital gains and losses, and the loss carryover",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Two clients sold investments during the year. Neither has any other capital transactions or carryovers.",
      "Ananya: short-term gains of $5,000, short-term losses of $12,000, long-term gains of $15,000 and long-term losses of $4,000.",
      "Vikram (single): a net capital loss for the year of $10,000, all short-term.",
    ],
    instructions: "Enter each amount in dollars. Enter a net loss as a negative number.",
    columns: AMOUNT,
    rows: [
      row("Ananya: net short-term gain or (loss)", num(-7000), "$5,000 − $12,000."),
      row("Ananya: net long-term gain or (loss)", num(11000), "$15,000 − $4,000."),
      row("Ananya: net capital gain for the year", num(4000), "The net short-term loss offsets the net long-term gain: $11,000 − $7,000 = a $4,000 net long-term capital gain, eligible for the preferential rates."),
      row("Vikram: capital loss deducted against ordinary income this year", num(3000), "An individual (other than married filing separately) may deduct up to $3,000 of net capital loss a year."),
      row("Vikram: capital loss carried forward", num(7000), "$10,000 − $3,000. Individual capital losses carry forward indefinitely and keep their short-term character."),
    ],
    takeaway: "Net short-term items together and long-term items together, then net the two results. An individual's net loss is deductible up to $3,000 a year, with the rest carried forward indefinitely.",
  },
  {
    slug: "tax-advantaged-accounts-comparison",
    subject: "tcp",
    topic: "personal-financial-planning",
    title: "Comparing tax-advantaged savings accounts",
    format: "classification",
    minutes: 8,
    scenario: ["A client asks how five savings vehicles are taxed. Assume she is eligible for each, contributes within the limits and, where relevant, uses withdrawals for qualified purposes."],
    instructions: "For each account, select whether contributions reduce federal taxable income and whether qualified withdrawals are taxable.",
    columns: ["Account", "Contributions reduce federal taxable income?", "Qualified withdrawals taxable?"],
    rows: [
      row("Health savings account", [pick(YES_NO, "Yes"), pick(YES_NO, "No")], "Contributions are deductible (or excluded through payroll), growth is tax-free and withdrawals for qualified medical expenses are tax-free."),
      row("Section 529 education savings plan", [pick(YES_NO, "No"), pick(YES_NO, "No")], "Contributions are not deductible on the federal return, but withdrawals for qualified education expenses are tax-free."),
      row("Roth IRA", [pick(YES_NO, "No"), pick(YES_NO, "No")], "Contributions are made with after-tax money; qualified distributions are tax-free."),
      row("Traditional IRA with deductible contributions", [pick(YES_NO, "Yes"), pick(YES_NO, "Yes")], "The deduction now is matched by ordinary income tax on withdrawals later."),
      row("Health flexible spending account funded by salary reduction", [pick(YES_NO, "Yes"), pick(YES_NO, "No")], "Salary reductions are excluded from income, and reimbursements of qualified medical costs are tax-free."),
    ],
    takeaway: "A health savings account is the only one taxed favourably at all three points: going in, growing and coming out. Roth accounts and 529 plans give no deduction now in return for tax-free withdrawals.",
  },
  {
    slug: "roth-conversion-and-required-distributions",
    subject: "tcp",
    topic: "retirement-planning-strategies",
    title: "Roth conversion and required minimum distributions",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Neha, age 52, converts her only traditional IRA, worth $100,000, to a Roth IRA. Over the years she made $20,000 of nondeductible contributions to it.",
      "Her father, age 76, had $400,000 in his traditional IRA on December 31 of last year. His life expectancy factor for this year from the IRS Uniform Lifetime Table is 25.0.",
    ],
    exhibits: [
      {
        title: "Excise tax on a missed required distribution",
        text: ["25% of the amount not taken, reduced to 10% if the shortfall is corrected within the correction window."],
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Neha: amount of the conversion included in gross income", num(80000), "The $20,000 of nondeductible contributions is basis and is not taxed again: $100,000 − $20,000."),
      row("Neha: 10% additional tax on the conversion", num(0), "A conversion is not an early distribution, so no additional tax applies even before 59½."),
      row("Father: required minimum distribution for this year", num(16000), "$400,000 ÷ 25.0."),
      row("Father: excise tax if he takes nothing and does not correct it", num(4000), "25% × $16,000."),
      row("Father: excise tax if he takes it within the correction window", num(1600), "10% × $16,000."),
    ],
    takeaway: "A Roth conversion is taxed like a distribution, minus any basis, but never attracts the 10% additional tax. A required minimum distribution is the prior year-end balance divided by the life expectancy factor.",
  },
  {
    slug: "gross-estate-inclusion",
    subject: "tcp",
    topic: "estate-and-gift-tax-planning",
    title: "What goes into the gross estate?",
    format: "classification",
    minutes: 8,
    scenario: ["Mohan died this year, survived by his wife and adult son. His executor is listing the assets connected with him."],
    instructions: "Select how much of each asset is included in Mohan's gross estate.",
    columns: ["Asset", "Gross estate"],
    rows: [
      row("A house in Mohan's name alone", pick(ESTATE, "Included in full"), "Property the decedent owned outright is included."),
      row("A house held with his wife as tenants by the entirety", pick(ESTATE, "Half included"), "For property held jointly with a spouse, half is included regardless of who paid for it."),
      row("A brokerage account held jointly with his son, all funded by Mohan", pick(ESTATE, "Included in full"), "For joint property with someone other than a spouse, the whole value is included except what the survivor can show they contributed."),
      row("A life insurance policy on his life that he owned", pick(ESTATE, "Included in full"), "Proceeds are included when the decedent held incidents of ownership in the policy."),
      row("A life insurance policy owned by an irrevocable trust since he transferred it eight years ago", pick(ESTATE, "Not included"), "He held no incidents of ownership and the transfer was more than three years before death."),
      row("Assets in a revocable living trust he created", pick(ESTATE, "Included in full"), "He could revoke the trust, so its assets are included."),
      row("Cash he gave his son five years ago", pick(ESTATE, "Not included"), "Completed gifts are not part of the gross estate, although taxable gifts are added back when computing the estate tax."),
      row("His traditional IRA, payable to his wife", pick(ESTATE, "Included in full"), "Retirement accounts are included; the bequest to his wife then qualifies for the marital deduction."),
    ],
    takeaway: "The gross estate reaches anything the decedent owned or controlled at death: solely owned property, revocable trusts, owned life insurance and retirement accounts. Spousal joint property is included at half; other joint property in full unless the survivor contributed.",
  },

  // ── Area II: Entity tax compliance ──
  {
    slug: "corporate-nol-and-capital-loss",
    subject: "tcp",
    topic: "c-corporation-tax-compliance",
    title: "Using a corporate net operating loss and a capital loss",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Eastgate Corp., a C corporation, has taxable income of $200,000 this year before any net operating loss deduction. It has a $300,000 net operating loss carryforward from a year after 2020.",
      "Eastgate also had a $30,000 net capital loss this year.",
    ],
    exhibits: [{ title: "Rates to use", text: ["Corporate tax rate: 21%.", "Net operating losses arising after 2020 may offset up to 80% of taxable income before the deduction."] }],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Net operating loss deduction this year", num(160000), "Limited to 80% × $200,000."),
      row("Net operating loss carried forward to next year", num(140000), "$300,000 − $160,000. It carries forward indefinitely."),
      row("Taxable income", num(40000), "$200,000 − $160,000."),
      row("Income tax", num(8400), "$40,000 × 21%."),
      row("Capital loss deducted this year", num(0), "A corporation may deduct capital losses only against capital gains. The $30,000 is carried back three years and forward five, as a short-term loss."),
    ],
    takeaway: "A post-2017 corporate net operating loss offsets at most 80% of taxable income but never expires. Corporate capital losses only offset capital gains: back three years, forward five.",
  },
  {
    slug: "s-corporation-eligibility",
    subject: "tcp",
    topic: "s-corporation-planning",
    title: "Can the company elect, or keep, S corporation status?",
    format: "classification",
    minutes: 8,
    scenario: ["Several domestic corporations are considering S corporation status. Each situation describes one company."],
    instructions: "Select whether the company can be an S corporation.",
    columns: ["Company", "Eligible for S status?"],
    rows: [
      row("90 unrelated shareholders, all US citizens, one class of stock", pick(YES_NO, "Yes"), "The limit is 100 shareholders, and family members can be counted as one."),
      row("One shareholder is a nonresident alien", pick(YES_NO, "No"), "Nonresident aliens are not permitted shareholders."),
      row("Some shares are owned by a C corporation", pick(YES_NO, "No"), "Corporations and partnerships are not permitted shareholders."),
      row("Voting and nonvoting common stock with identical rights to distributions and liquidation proceeds", pick(YES_NO, "Yes"), "Differences in voting rights alone do not create a second class of stock."),
      row("Preferred stock with a priority dividend", pick(YES_NO, "No"), "Different distribution rights create a second class of stock."),
      row("One shareholder is the estate of a deceased founder", pick(YES_NO, "Yes"), "Estates are permitted shareholders."),
    ],
    takeaway: "S status needs a domestic corporation with no more than 100 shareholders, all of them individuals (other than nonresident aliens), estates or certain trusts, and one class of stock. Voting differences are allowed.",
  },
  {
    slug: "partnership-guaranteed-payments",
    subject: "tcp",
    topic: "partnership-planning",
    title: "Guaranteed payments and each partner's income",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Asha and Ben share profits and losses of AB Partners equally. Asha works full-time in the business and receives a guaranteed payment of $30,000 for her services. Before deducting the guaranteed payment, the partnership's ordinary business income is $140,000.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Partnership ordinary business income", num(110000), "The guaranteed payment is deductible by the partnership: $140,000 − $30,000."),
      row("Asha's distributive share of ordinary income", num(55000), "50% × $110,000."),
      row("Asha's total ordinary income from the partnership", num(85000), "$55,000 share + $30,000 guaranteed payment."),
      row("Ben's total ordinary income from the partnership", num(55000), "50% × $110,000."),
    ],
    takeaway: "A guaranteed payment is deducted in arriving at partnership ordinary income and is taxed to the partner who receives it, on top of that partner's share of what remains.",
  },

  // ── Area III: Entity tax planning ──
  {
    slug: "choosing-an-entity",
    subject: "tcp",
    topic: "entity-choice-and-structuring",
    title: "Which type of entity has this feature?",
    format: "classification",
    minutes: 8,
    scenario: ["A founder is comparing ways to organise and tax a new business."],
    instructions: "Select the type of entity that each feature describes.",
    columns: ["Feature", "Entity"],
    rows: [
      row("Income is taxed at a flat 21% at the entity level and again when distributed as dividends", pick(ENTITY, "C corporation"), "Double taxation is the defining feature of a C corporation."),
      row("Owners can agree special allocations of particular items, if they have substantial economic effect", pick(ENTITY, "Partnership (or LLC taxed as one)"), "Partnerships can allocate items differently from ownership percentages; S corporations must allocate per share, per day."),
      row("Limited to 100 shareholders and one class of stock", pick(ENTITY, "S corporation"), "These are S corporation eligibility rules."),
      row("Each owner's share of the entity's liabilities increases the basis of the owner's interest", pick(ENTITY, "Partnership (or LLC taxed as one)"), "Partners include their share of partnership debt in basis. S shareholders get debt basis only for loans they make directly."),
      row("Income is reported on Schedule C of the owner's individual return", pick(ENTITY, "Sole proprietorship"), "A sole proprietor reports business income and expenses on Schedule C."),
      row("Can have foreign corporations among its owners and issue preferred stock", pick(ENTITY, "C corporation"), "A C corporation has no restrictions on the number or type of owners or classes of stock."),
    ],
    takeaway: "C corporations are flexible on ownership but taxed twice. S corporations avoid double tax but have strict ownership rules. Partnerships offer the most flexibility on allocations and give owners basis for entity debt.",
  },
  {
    slug: "corporate-distribution-earnings-and-profits",
    subject: "tcp",
    topic: "entity-distributions-and-liquidations",
    title: "Taxing a corporate distribution: dividend, return of capital or gain",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Willow Corp., a C corporation, distributed $60,000 cash to its sole shareholder, Rohan, whose stock basis was $15,000. Willow had current earnings and profits of $30,000 and accumulated earnings and profits of $10,000.",
      "Separately, Willow distributed land with a fair market value of $50,000 and an adjusted basis of $20,000 to another shareholder.",
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Rohan: amount taxed as a dividend", num(40000), "Distributions are dividends to the extent of current and then accumulated earnings and profits: $30,000 + $10,000."),
      row("Rohan: tax-free return of capital", num(15000), "The next $20,000 reduces stock basis, but only down to zero: $15,000."),
      row("Rohan: capital gain", num(5000), "$60,000 − $40,000 − $15,000."),
      row("Rohan: stock basis after the distribution", num(0), "Basis cannot go below zero."),
      row("Willow: gain recognized on distributing the land", num(30000), "A corporation recognizes gain on distributing appreciated property as if it had sold it: $50,000 − $20,000."),
    ],
    takeaway: "Dividend first (current, then accumulated earnings and profits), then return of basis, then capital gain. A corporation that distributes appreciated property pays tax on the gain.",
  },

  // ── Area IV: Property transactions ──
  {
    slug: "section-1231-and-recapture",
    subject: "tcp",
    topic: "property-transactions-advanced-planning",
    title: "Depreciation recapture and Section 1231 gain",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Kiran, an individual, sold two business assets this year, both held for more than one year. He had no other Section 1231 transactions in this or the past five years.",
    ],
    exhibits: [
      {
        title: "Assets sold",
        table: {
          head: ["Asset", "Cost ($)", "Accumulated depreciation ($)", "Sale price ($)"],
          rows: [
            ["Equipment", "100,000", "60,000", "120,000"],
            ["Office building (straight-line depreciation)", "500,000", "100,000", "550,000"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Equipment: gain realized", num(80000), "$120,000 − ($100,000 − $60,000) = $80,000."),
      row("Equipment: ordinary income from Section 1245 recapture", num(60000), "All depreciation taken on personal property is recaptured as ordinary income, up to the gain."),
      row("Equipment: Section 1231 gain", num(20000), "$80,000 − $60,000. The part of the gain above the original cost."),
      row("Building: Section 1231 gain", num(150000), "$550,000 − $400,000. Straight-line depreciation on real property is not recaptured as ordinary income under Section 1250."),
      row("Building: unrecaptured Section 1250 gain (taxed at up to 25%)", num(100000), "For an individual, gain equal to the straight-line depreciation taken is taxed at a maximum 25% rate."),
    ],
    takeaway: "Equipment recaptures all depreciation as ordinary income. Buildings depreciated straight-line produce Section 1231 gain, but for individuals the depreciation part is taxed at up to 25%.",
  },
  {
    slug: "foreign-tax-credit-and-apportionment",
    subject: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    title: "Foreign tax credit limit and state apportionment",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Lakeshore Corp. has worldwide taxable income of $500,000, of which $100,000 is foreign-source income. Its US tax before credits is $105,000, and it paid $30,000 of foreign income taxes.",
      "Lakeshore also files in a state that apportions income using a single sales factor. Of its $8,000,000 total sales, $2,000,000 were to customers in that state. Its income subject to apportionment is $1,200,000.",
    ],
    instructions: "Enter each amount in dollars, or the percentage as a whole number.",
    columns: AMOUNT,
    rows: [
      row("Foreign tax credit limitation", num(21000), "US tax × (foreign-source taxable income ÷ worldwide taxable income) = $105,000 × $100,000 ÷ $500,000."),
      row("Foreign tax credit allowed this year", num(21000), "The lesser of the $30,000 paid and the $21,000 limitation."),
      row("Excess foreign taxes available to carry over", num(9000), "$30,000 − $21,000. Excess credits carry back one year and forward ten."),
      row("State apportionment percentage", num(25), "$2,000,000 ÷ $8,000,000 = 25%."),
      row("Income apportioned to the state", num(300000), "25% × $1,200,000."),
    ],
    takeaway: "The foreign tax credit cannot exceed the US tax on foreign-source income. State apportionment applies the state's factor to the income being divided.",
  },
  {
    slug: "internal-revenue-code-research",
    subject: "tcp",
    topic: "tax-research-and-documentation",
    title: "Finding the right Internal Revenue Code section",
    format: "research",
    minutes: 12,
    scenario: [
      "A senior associate is writing a client memo and needs the primary authority for each point. The Internal Revenue Code is primary authority enacted by Congress; your memo should cite the section itself.",
    ],
    instructions:
      "For each point, enter the Internal Revenue Code section number only (for example 1031). The full Code is free on the website of the US House of Representatives' Office of the Law Revision Counsel, under Title 26.",
    columns: ["Point to support", "Code section"],
    rows: [
      row("Gross income means all income from whatever source derived", ref("61"), "Section 61 defines gross income."),
      row("A deduction for ordinary and necessary expenses of carrying on a trade or business", ref("162"), "Section 162 allows trade or business expenses."),
      row("The basis of property acquired from a decedent is its fair market value at death", ref("1014"), "Section 1014 sets the basis of inherited property."),
      row("The basis of property acquired by gift", ref("1015"), "Section 1015 gives the carryover basis rules for gifts, including the loss rule."),
      row("No gain or loss on exchanges of real property held for business or investment", ref("1031"), "Section 1031 covers like-kind exchanges, now limited to real property."),
      row("The definition of a capital asset", ref("1221"), "Section 1221 defines capital assets by listing what is excluded."),
      row("Gain on depreciable personal property recaptured as ordinary income", ref("1245"), "Section 1245 recaptures depreciation on personal property."),
    ],
    takeaway: "Learn the handful of Code sections that come up again and again: 61 gross income, 162 business expenses, 1014 and 1015 basis, 1031 exchanges, 1221 capital assets and 1245 recapture.",
  },
];

export const tcpSimulations: Simulation[] = [...tcpSimulations1, ...tcpSimulations2];
