/**
 * "Concept in 60 seconds" explainers posted to the study wall by the official
 * @simplycpa account (shown with an Official badge). Posted in this order by
 * `npm run wall:official`, at most 3 in 24 hours — the same limit as members.
 * No links (the wall blocks them): point readers to a section instead.
 */
export type OfficialWallPost = { tag: "GENERAL" | "FAR" | "AUD" | "REG" | "BAR" | "ISC" | "TCP"; body: string };

export const officialWallPosts: OfficialWallPost[] = [
  {
    tag: "FAR",
    body: `Concept in 60 seconds: debits and credits

Every journal entry has at least one debit and one credit, and they're always equal. The trick is knowing which side makes each account go up:

- Debits increase assets, expenses and dividends (or drawings).
- Credits increase liabilities, equity and revenue.

Example: you buy a laptop for $1,000 cash. Equipment (an asset) goes up, so debit Equipment $1,000. Cash (also an asset) goes down, so credit Cash $1,000.

Memory aid: DEAD CLIC — Debits for Expenses, Assets, Dividends; Credits for Liabilities, Income, Capital.

If the two sides of an entry don't match, something's missing. That one habit catches a lot of errors in FAR simulations.`,
  },
  {
    tag: "ISC",
    body: `Concept in 60 seconds: the CIA triad

Almost every information security control protects one (or more) of three things:

- Confidentiality: only the right people can see the data. Think encryption and access permissions.
- Integrity: the data is accurate and hasn't been changed without authorisation. Think hashing, input controls and change logs.
- Availability: systems and data are there when needed. Think backups, redundancy and disaster recovery plans.

A ransomware attack hits availability (and often confidentiality too). Someone quietly editing payroll rates is an integrity problem. Emailing customer files to the wrong person is a confidentiality breach.

When an ISC question describes a control, ask: which of the three is it protecting?`,
  },
  {
    tag: "AUD",
    body: `Concept in 60 seconds: materiality

A misstatement is material if it could reasonably be expected to change the decisions of people who use the financial statements.

So a $5,000 error might not matter to a company with $50 million of revenue, but could matter a lot to one with $200,000. Materiality is about size and nature: a small amount can still be material if it involves fraud, turns a profit into a loss, or affects a loan covenant.

Auditors set an overall materiality for the statements, then a lower performance materiality to leave a cushion for errors they don't find.

Exam tip: materiality is a matter of professional judgment. There's no single fixed percentage in the auditing standards.`,
  },
  {
    tag: "FAR",
    body: `Concept in 60 seconds: revenue recognition (ASC 606)

Think of a gym that sells a 12-month membership for $1,200, paid upfront in January.

Has it earned $1,200 in January? No. It has promised a year of access, so it earns the revenue as it delivers: $100 a month. Until then, the unearned part sits on the balance sheet as a contract liability (deferred revenue).

That's the core idea of the five-step model:
1. Identify the contract.
2. Identify the promises (performance obligations).
3. Work out the price.
4. Split the price across the promises.
5. Recognise revenue as each promise is fulfilled.

Cash timing doesn't decide revenue. Delivering what you promised does.`,
  },
  {
    tag: "REG",
    body: `Concept in 60 seconds: tax basis

Basis is your tax "cost" in an asset. Gain or loss on a sale is:

Amount realised − adjusted basis

Adjusted basis starts with what you paid, goes up for improvements, and goes down for depreciation you've claimed.

Example: you buy a building for $100,000, add $20,000 of improvements and claim $30,000 of depreciation.
Adjusted basis = $100,000 + $20,000 − $30,000 = $90,000.
Sell it for $150,000 and the gain is $60,000.

Basis questions show up everywhere in REG: gifts, inheritances, partnerships and S corporations all have their own basis rules. Get the starting point right and the rest follows.`,
  },
  {
    tag: "BAR",
    body: `Concept in 60 seconds: contribution margin and break-even

Contribution margin is what each sale leaves over after variable costs, to cover fixed costs and then profit.

Example: you sell a product for $50. Variable cost per unit is $30, so each unit contributes $20. Fixed costs are $40,000 a year.

Break-even in units = $40,000 ÷ $20 = 2,000 units.
Contribution margin ratio = $20 ÷ $50 = 40%.
Break-even in sales = $40,000 ÷ 40% = $100,000.

Want a $10,000 profit? Add it to fixed costs: ($40,000 + $10,000) ÷ $20 = 2,500 units.

Same logic, every time: cover fixed costs first, then everything extra is profit.`,
  },
  {
    tag: "FAR",
    body: `Concept in 60 seconds: deferred taxes

Book income (US GAAP) and taxable income (tax law) often recognise the same item in different years. Deferred taxes record the future tax effect of those timing differences.

Two everyday examples:

- Depreciation: tax rules often allow faster depreciation, so the asset's tax basis drops below its book value. You'll pay more tax later, so record a deferred tax liability.
- Warranties: you expense the estimated warranty cost for books now, but tax only allows the deduction when you actually pay claims. You'll save tax later, so record a deferred tax asset.

Then ask whether a deferred tax asset is more likely than not to be realised. If not, a valuation allowance reduces it.`,
  },
  {
    tag: "AUD",
    body: `Concept in 60 seconds: going concern

Financial statements normally assume the business will keep operating. That's the going concern basis.

Under US GAAP, management must evaluate whether there's substantial doubt about the entity's ability to continue as a going concern within one year after the date the statements are issued (or available to be issued).

Warning signs include recurring losses, negative operating cash flows, loan defaults, losing a key customer and being unable to refinance debt.

If substantial doubt exists, management discloses it, along with any plans that might ease it. The auditor evaluates the same question, and if substantial doubt remains, adds a separate going concern section to the audit report.`,
  },
  {
    tag: "FAR",
    body: `Concept in 60 seconds: lease accounting (ASC 842)

Signing a 3-year lease for an office feels like renting, not buying. But under ASC 842 a lessee records it on the balance sheet:

- a right-of-use asset (your right to use the office), and
- a lease liability (the present value of the payments you've promised).

Leases of 12 months or less can use the short-term exemption and stay off the balance sheet.

The big difference between the two lessee models is what happens next. A finance lease shows interest expense and amortisation separately, front-loading the cost. An operating lease shows one straight-line lease cost each year.

It's a finance lease if any one of five tests is met: ownership transfers; there's a purchase option you're reasonably certain to use; the term is a major part of the asset's remaining life; the payments' present value is substantially all of its fair value; or the asset is so specialised it has no other use to the lessor.`,
  },
  {
    tag: "TCP",
    body: `Concept in 60 seconds: tax credit vs tax deduction

A deduction reduces the income that gets taxed. A credit reduces the tax itself.

Example, for someone in the 22% bracket:
- A $1,000 deduction lowers taxable income by $1,000, saving about $220 of tax.
- A $1,000 credit lowers the tax bill by the full $1,000.

So, dollar for dollar, a credit is usually worth more than a deduction.

One more distinction that comes up often: a refundable credit can create a refund even when your tax is already zero; a nonrefundable credit can only bring the tax down to zero.

When you plan, ask two questions: does it reduce income or tax, and is it refundable?`,
  },
];
