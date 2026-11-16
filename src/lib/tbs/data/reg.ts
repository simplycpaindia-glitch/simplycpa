import type { Simulation } from "../types";
import { num, pick, row } from "../build";

// REG simulations: one per topic. Where a dollar limit changes by year, the scenario
// gives the figure to use, so the simulation stays correct without yearly edits.

const AMOUNT = ["Item", "Amount ($)"];

const C230 = ["Permitted", "Prohibited", "Required"] as const;
const SOL = [
  "30 days",
  "90 days",
  "2 years",
  "3 years",
  "6 years",
  "No time limit",
  "3 years from filing or 2 years from payment, whichever is later",
] as const;
const CONTRACT = ["Valid and enforceable", "Void", "Voidable", "Unenforceable under the statute of frauds"] as const;
const LIABILITY = ["Unlimited personal liability", "Liability limited to the investment"] as const;
const YES_NO = ["Yes", "No"] as const;
const DISCHARGE = ["Discharged", "Not discharged"] as const;
const INCLUDED = ["Included in gross income", "Excluded from gross income"] as const;
const DEDUCTION = ["Adjustment for adjusted gross income", "Itemized deduction", "Not deductible"] as const;
const STATUS = ["Single", "Married filing jointly", "Married filing separately", "Head of household", "Qualifying surviving spouse"] as const;
const DISTRIBUTION = ["Tax-free", "Fully taxable", "Taxable plus the 10% additional tax"] as const;
const FRINGE = ["Excluded from the employee's income", "Taxable to the employee"] as const;
const UBI = ["Unrelated business income", "Not unrelated business income"] as const;

import { regSimulations2 } from "./reg-2";

const regSimulations1: Simulation[] = [
  // ── Area I: Ethics, professional responsibilities and federal tax procedures ──
  {
    slug: "circular-230-conduct",
    subject: "reg",
    topic: "circular-230-and-practitioner-ethics",
    title: "Circular 230: what a practitioner may and must do",
    format: "classification",
    minutes: 8,
    scenario: [
      "Meera Shah is a CPA who represents clients before the Internal Revenue Service (IRS). A new staff member has listed situations from the past month and asked which ones Treasury Department Circular 230 allows.",
    ],
    instructions: "For each situation, select whether Circular 230 permits it, prohibits it or requires it.",
    columns: ["Situation", "Circular 230"],
    rows: [
      row("Charging a fee of 20% of the refund for preparing a client's original income tax return", pick(C230, "Prohibited"), "Contingent fees are prohibited for preparing an original return. The exceptions are narrow, such as representing a client in an IRS examination."),
      row("Charging a contingent fee for representing a client in the IRS examination of that original return", pick(C230, "Permitted"), "Representation in an examination of an original return is one of the situations where a contingent fee is allowed."),
      row("Advising a client that a prior-year return contains an error, and of the consequences of not correcting it", pick(C230, "Required"), "A practitioner who knows of a client's noncompliance, error or omission must promptly advise the client of it and of the consequences."),
      row("Returning the client's records needed to file this year's return, although the client has not paid last year's fee", pick(C230, "Required"), "Records the client needs to comply with federal tax obligations must be returned on request, even during a fee dispute. The practitioner may keep copies."),
      row("Relying in good faith on information the client provides, without verifying it, when nothing suggests it is wrong", pick(C230, "Permitted"), "A practitioner may generally rely in good faith on client information, but cannot ignore implications of information that appears incorrect or incomplete."),
      row("Endorsing and cashing a client's refund check issued by the government", pick(C230, "Prohibited"), "A practitioner who prepares returns may not endorse or otherwise negotiate a client's refund check."),
      row("Charging a fee that is unconscionable for the work done", pick(C230, "Prohibited"), "Circular 230 prohibits unconscionable fees in any matter before the IRS."),
    ],
    takeaway: "Contingent fees are the exception, not the rule: allowed for examinations, certain refund claims, interest and penalty matters and court cases, never for preparing an original return. Telling the client about errors, and returning the records they need, are duties, not options.",
  },
  {
    slug: "irs-deadlines-and-statute-of-limitations",
    subject: "reg",
    topic: "irs-procedures-and-appeals",
    title: "IRS deadlines: assessments, refunds and the notice of deficiency",
    format: "classification",
    minutes: 8,
    scenario: [
      "Daniel Ortiz is reviewing several open tax matters for clients. For each one he needs to know how long the IRS has to act, or how long the client has to respond.",
    ],
    instructions: "Select the time period that applies to each matter.",
    columns: ["Matter", "Time period"],
    rows: [
      row("The IRS's normal period to assess additional tax on a return filed on time", pick(SOL, "3 years"), "The general assessment period is three years from the later of the date the return was filed or its due date."),
      row("Assessment where the taxpayer left out income of more than 25% of the gross income reported", pick(SOL, "6 years"), "A substantial omission of more than 25% of gross income extends the assessment period to six years."),
      row("Assessment of a fraudulent return", pick(SOL, "No time limit"), "There is no statute of limitations on assessment for a fraudulent return, or where no return was filed."),
      row("A taxpayer's claim for refund of tax that was paid with the return", pick(SOL, "3 years from filing or 2 years from payment, whichever is later"), "A refund claim must be filed within three years of filing the return or two years of paying the tax, whichever is later."),
      row("Filing a petition with the Tax Court after receiving a statutory notice of deficiency", pick(SOL, "90 days"), "The notice of deficiency, often called the 90-day letter, gives the taxpayer 90 days (150 days if addressed outside the US) to petition the Tax Court without paying first."),
      row("Requesting an Appeals conference after receiving the preliminary notice that follows an examination", pick(SOL, "30 days"), "The 30-day letter gives the taxpayer 30 days to agree, or to request a conference with the IRS Independent Office of Appeals."),
    ],
    takeaway: "Three years is the default, six for a substantial omission and none for fraud or no return. The 30-day letter leads to Appeals; the 90-day letter is the ticket to the Tax Court without paying the tax first.",
  },
  {
    slug: "federal-tax-penalties-calculation",
    subject: "reg",
    topic: "federal-tax-procedures-and-penalties",
    title: "Calculating failure-to-file, failure-to-pay and accuracy penalties",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Lena Park did not request an extension. She filed her individual return two months and ten days after the due date and paid the $10,000 balance due with it. Her failure to file was not due to reasonable cause.",
      "Separately, an examination of another client's return found an $8,000 underpayment caused by negligence, and a third client's $8,000 underpayment was found to be due to fraud.",
    ],
    exhibits: [
      {
        title: "Penalty rates to use",
        table: {
          head: ["Penalty", "Rate"],
          rows: [
            ["Failure to file", "5% of the unpaid tax for each month or part of a month, up to 25%"],
            ["Failure to pay", "0.5% of the unpaid tax for each month or part of a month, up to 25%"],
            ["Both apply in the same month", "The failure-to-file penalty is reduced by the failure-to-pay penalty for that month"],
            ["Accuracy-related (negligence)", "20% of the underpayment it applies to"],
            ["Civil fraud", "75% of the underpayment due to fraud"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Lena: failure-to-pay penalty", num(150), "A part month counts as a full month, so three months apply: $10,000 × 0.5% × 3 = $150."),
      row("Lena: failure-to-file penalty, after the reduction", num(1350), "$10,000 × 5% × 3 = $1,500, reduced by the $150 failure-to-pay penalty for the same months: $1,350."),
      row("Lena: total of the two penalties", num(1500), "$150 + $1,350 = $1,500. When both apply, the combined rate is effectively 5% a month."),
      row("Negligence: accuracy-related penalty on the $8,000 underpayment", num(1600), "$8,000 × 20% = $1,600."),
      row("Fraud: civil fraud penalty on the $8,000 underpayment", num(6000), "$8,000 × 75% = $6,000. The fraud penalty replaces the accuracy-related penalty on the same underpayment; they are not added."),
    ],
    takeaway: "Count every part month as a full month, and when filing and paying are both late, net the failure-to-pay penalty out of the failure-to-file penalty for the same months.",
  },

  // ── Area II: Business law ──
  {
    slug: "contract-formation-and-enforceability",
    subject: "reg",
    topic: "business-law-contracts",
    title: "Is the contract valid, void, voidable or unenforceable?",
    format: "classification",
    minutes: 8,
    scenario: ["A small business owner has asked you to review agreements she has entered into or been offered during the year."],
    instructions: "Select the status of each agreement.",
    columns: ["Agreement", "Status"],
    rows: [
      row("An agreement to pay a supplier to dump waste illegally", pick(CONTRACT, "Void"), "An agreement for an illegal purpose is void: it has no legal effect for either party."),
      row("A 16-year-old agrees to buy a used car (not a necessity) from the business", pick(CONTRACT, "Voidable"), "A minor's contract for non-necessities is voidable at the minor's option. The adult party is bound."),
      row("An oral agreement to buy a building for $400,000", pick(CONTRACT, "Unenforceable under the statute of frauds"), "Contracts for an interest in land must be in writing and signed by the party to be charged."),
      row("An oral agreement to buy office supplies for $300", pick(CONTRACT, "Valid and enforceable"), "Under the Uniform Commercial Code, sales of goods for $500 or more need a writing. $300 is below that."),
      row("A purchase induced by the seller's knowingly false statement of a material fact, on which the buyer relied", pick(CONTRACT, "Voidable"), "Fraudulent misrepresentation makes the contract voidable by the deceived party."),
      row("An oral agreement to employ a manager for a fixed term of two years", pick(CONTRACT, "Unenforceable under the statute of frauds"), "A contract that cannot be performed within one year of its making must be in writing."),
      row("Both parties were mistaken about a basic, material fact that the deal depended on", pick(CONTRACT, "Voidable"), "A mutual mistake of a material fact allows the adversely affected party to avoid the contract."),
    ],
    takeaway: "Void means no contract at all; voidable means one party can walk away; unenforceable means valid but lacking the writing a court requires. Goods of $500 or more, land and contracts longer than a year need a writing.",
  },
  {
    slug: "business-entity-liability-and-formation",
    subject: "reg",
    topic: "business-law-agency-and-business-structures",
    title: "Owner liability and formation formalities by type of business",
    format: "classification",
    minutes: 8,
    scenario: ["Four friends are deciding how to organise a new consulting business and want to understand each option's liability and paperwork."],
    instructions: "For each owner, select their exposure to the business's debts and whether forming the entity requires a filing with the state.",
    columns: ["Owner", "Liability for business debts", "State filing required to form?"],
    rows: [
      row("The owner of a sole proprietorship", [pick(LIABILITY, "Unlimited personal liability"), pick(YES_NO, "No")], "A sole proprietorship is not separate from its owner and can be started without a state filing."),
      row("A partner in a general partnership", [pick(LIABILITY, "Unlimited personal liability"), pick(YES_NO, "No")], "General partners are jointly and severally liable for partnership debts. A general partnership can be formed by agreement, even orally."),
      row("A general partner in a limited partnership", [pick(LIABILITY, "Unlimited personal liability"), pick(YES_NO, "Yes")], "A limited partnership needs at least one general partner with unlimited liability, and a certificate filed with the state."),
      row("A limited partner who takes no part in management", [pick(LIABILITY, "Liability limited to the investment"), pick(YES_NO, "Yes")], "Limited partners risk only their investment. The limited partnership itself requires a state filing."),
      row("A member of a limited liability company", [pick(LIABILITY, "Liability limited to the investment"), pick(YES_NO, "Yes")], "LLC members are generally not personally liable for the company's debts. Articles of organisation are filed with the state."),
      row("A shareholder of a corporation", [pick(LIABILITY, "Liability limited to the investment"), pick(YES_NO, "Yes")], "Shareholders are generally liable only to the extent of their investment. Articles of incorporation are filed with the state."),
    ],
    takeaway: "Limited liability always comes with a state filing; the two entities that need no filing, the sole proprietorship and the general partnership, are the two with unlimited personal liability.",
  },
  {
    slug: "chapter-7-dischargeable-debts",
    subject: "reg",
    topic: "debtor-creditor-and-bankruptcy",
    title: "Which debts survive a Chapter 7 discharge?",
    format: "classification",
    minutes: 7,
    scenario: ["Robert Cole, an individual, has received a discharge in a Chapter 7 liquidation. His creditors want to know which of their claims he still owes."],
    instructions: "Select whether each debt is discharged or survives the bankruptcy.",
    columns: ["Debt", "Effect of the discharge"],
    rows: [
      row("Unsecured credit card balances", pick(DISCHARGE, "Discharged"), "Ordinary unsecured consumer debts are discharged."),
      row("Past-due child support", pick(DISCHARGE, "Not discharged"), "Domestic support obligations are never discharged."),
      row("Federal income tax for a return due last year", pick(DISCHARGE, "Not discharged"), "Income taxes for returns due within three years before the filing are not discharged."),
      row("Unpaid medical bills", pick(DISCHARGE, "Discharged"), "Medical debts are ordinary unsecured debts and are discharged."),
      row("A debt obtained by giving the lender a materially false financial statement", pick(DISCHARGE, "Not discharged"), "Debts obtained by fraud or a materially false written financial statement are excepted from discharge."),
      row("A criminal fine owed to the state", pick(DISCHARGE, "Not discharged"), "Fines and penalties owed to a government unit are not discharged."),
      row("Most student loans, with no showing of undue hardship", pick(DISCHARGE, "Not discharged"), "Student loans survive unless the debtor proves undue hardship."),
    ],
    takeaway: "Discharge clears ordinary unsecured debts. Support, recent taxes, government fines, most student loans and debts obtained by fraud stay with the debtor.",
  },

  // ── Area III: Property transactions ──
  {
    slug: "basis-purchase-gift-inheritance",
    subject: "reg",
    topic: "property-transactions-basis-and-cost-recovery",
    title: "Basis of purchased, gifted and inherited property",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Anika Rao bought a machine for her business and also sold property she received from family. She needs each basis, and the gain or loss on each sale.",
    ],
    exhibits: [
      {
        title: "Machine purchased",
        table: {
          head: ["Cost", "Amount ($)"],
          rows: [
            ["Purchase price", "50,000"],
            ["Sales tax", "3,000"],
            ["Delivery", "1,000"],
            ["Installation and testing", "2,000"],
            ["One-year maintenance contract", "1,500"],
          ],
        },
      },
      {
        title: "Property received and sold",
        table: {
          head: ["Asset", "Donor's or decedent's basis ($)", "Fair market value when received ($)", "Anika's sale price ($)"],
          rows: [
            ["Shares A: gift from her aunt", "20,000", "15,000", "12,000"],
            ["Shares B: gift from her aunt", "20,000", "15,000", "18,000"],
            ["Shares C: gift from her uncle", "8,000", "11,000", "13,000"],
            ["Shares D: inherited from her father", "10,000", "40,000", "45,000"],
          ],
        },
        text: ["No gift tax was paid on any gift."],
      },
    ],
    instructions: "Enter each amount in dollars. Enter a loss as a negative number and enter 0 where there is no gain or loss.",
    columns: AMOUNT,
    rows: [
      row("Basis of the machine", num(56000), "Basis includes everything needed to acquire the asset and get it ready for use: $50,000 + $3,000 + $1,000 + $2,000. The maintenance contract is a separate cost, deducted over its term."),
      row("Shares A: gain or (loss) on the sale", num(-3000), "The fair market value at the gift ($15,000) was below the donor's basis, so for a loss the basis is $15,000. $12,000 − $15,000 = ($3,000)."),
      row("Shares B: gain or (loss) on the sale", num(0), "For a gain the basis is $20,000; for a loss it is $15,000. A $18,000 sale falls between the two, so there is no gain or loss."),
      row("Shares C: gain or (loss) on the sale", num(5000), "When value exceeded the donor's basis at the gift, the donor's $8,000 basis carries over. $13,000 − $8,000 = $5,000."),
      row("Shares D: gain or (loss) on the sale", num(5000), "Inherited property takes its fair market value at death, $40,000, as basis. $45,000 − $40,000 = $5,000, and it is long-term."),
    ],
    takeaway: "A gift carries over the donor's basis, except that when value was below basis at the gift, the lower value is used to measure a loss. Inherited property starts at fair market value at death.",
  },
  {
    slug: "like-kind-exchange-with-boot",
    subject: "reg",
    topic: "property-transactions-gains-losses-and-like-kind-exchanges",
    title: "Like-kind exchange of real property with cash received",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Harbor LLC exchanged a warehouse it held for investment for an office building of another investor, also to be held for investment. Harbor also received cash to balance the deal. Neither property was subject to a mortgage.",
    ],
    exhibits: [
      {
        title: "Exchange details",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Adjusted basis of the warehouse given up", "300,000"],
            ["Fair market value of the warehouse given up", "500,000"],
            ["Fair market value of the office building received", "450,000"],
            ["Cash received", "50,000"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Amount realized", num(500000), "$450,000 building + $50,000 cash."),
      row("Gain realized", num(200000), "$500,000 realized − $300,000 adjusted basis."),
      row("Gain recognized", num(50000), "Gain is recognized to the extent of boot received, but not more than the gain realized: the $50,000 cash."),
      row("Gain deferred", num(150000), "$200,000 realized − $50,000 recognized."),
      row("Basis of the office building received", num(300000), "Fair market value $450,000 − deferred gain $150,000 = $300,000. Check: old basis $300,000 − boot $50,000 + gain recognized $50,000."),
    ],
    takeaway: "In a like-kind exchange you recognize the lesser of the gain realized or the boot received, and the deferred gain is built into the new property's basis.",
  },

  // ── Area IV: Federal taxation of individuals ──
  {
    slug: "gross-income-inclusions-and-exclusions",
    subject: "reg",
    topic: "individual-taxation-gross-income",
    title: "Gross income: included or excluded?",
    format: "classification",
    minutes: 8,
    scenario: ["Priya Nair, a graduate student who also works part-time, received the following during the year."],
    instructions: "Select whether each item is included in or excluded from Priya's gross income.",
    columns: ["Item received", "Treatment"],
    rows: [
      row("Interest on bonds issued by a US city", pick(INCLUDED, "Excluded from gross income"), "Interest on state and local government bonds is generally excluded."),
      row("A scholarship used for tuition and required books in her degree programme", pick(INCLUDED, "Excluded from gross income"), "A qualified scholarship for a degree candidate is excluded to the extent it pays tuition, fees, books and required supplies."),
      row("The part of the scholarship that pays for her room and board", pick(INCLUDED, "Included in gross income"), "Amounts for room and board are not qualified expenses, so they are taxable."),
      row("$5,000 given to her by her grandmother", pick(INCLUDED, "Excluded from gross income"), "Gifts are excluded from the recipient's income."),
      row("Pay received for serving on a jury", pick(INCLUDED, "Included in gross income"), "Jury duty pay is taxable."),
      row("A cash prize won in a business plan competition", pick(INCLUDED, "Included in gross income"), "Prizes and awards are generally taxable."),
      row("Gain on selling cryptocurrency she had held for two years", pick(INCLUDED, "Included in gross income"), "Digital assets are property. The gain on a sale is included, here as a long-term capital gain."),
      row("Life insurance proceeds paid to her on her father's death", pick(INCLUDED, "Excluded from gross income"), "Life insurance paid because of the insured's death is excluded."),
    ],
    takeaway: "Income from any source is taxable unless a specific exclusion applies. The common exclusions are gifts and inheritances, death benefits, municipal bond interest and scholarships used for tuition and books.",
  },
  {
    slug: "adjustments-vs-itemized-deductions",
    subject: "reg",
    topic: "individual-taxation-adjustments-and-deductions",
    title: "Adjustment, itemized deduction or not deductible?",
    format: "classification",
    minutes: 8,
    scenario: ["Arjun Mehta is self-employed and also teaches part-time at a high school. He paid the following during the year."],
    instructions: "Select how each payment is treated on Arjun's return, assuming he itemizes and meets any eligibility tests.",
    columns: ["Payment", "Treatment"],
    rows: [
      row("The deductible part of his self-employment tax", pick(DEDUCTION, "Adjustment for adjusted gross income"), "Half of self-employment tax is deducted in arriving at adjusted gross income."),
      row("Interest on his student loan", pick(DEDUCTION, "Adjustment for adjusted gross income"), "Qualified student loan interest is an adjustment, subject to an annual limit and income phase-out."),
      row("A deductible contribution to his traditional IRA", pick(DEDUCTION, "Adjustment for adjusted gross income"), "Deductible traditional IRA contributions are adjustments."),
      row("Interest on the mortgage used to buy his home", pick(DEDUCTION, "Itemized deduction"), "Qualified home mortgage interest is an itemized deduction."),
      row("State income tax withheld from his teaching salary", pick(DEDUCTION, "Itemized deduction"), "State and local taxes are itemized deductions, subject to the annual cap."),
      row("Federal income tax paid with last year's return", pick(DEDUCTION, "Not deductible"), "Federal income tax is never deductible."),
      row("Driving from home to his regular office", pick(DEDUCTION, "Not deductible"), "Commuting between home and a regular place of work is a personal expense."),
      row("Alimony paid under a divorce agreement signed in 2021", pick(DEDUCTION, "Not deductible"), "Alimony under agreements executed after 2018 is not deductible by the payer, nor taxable to the recipient."),
    ],
    takeaway: "Adjustments reduce adjusted gross income whether or not you itemize, so they are worth more. Federal income tax, commuting and post-2018 alimony are never deductible.",
  },
  {
    slug: "filing-status-determination",
    subject: "reg",
    topic: "filing-status-credits-and-amt",
    title: "Choosing the most favourable filing status",
    format: "classification",
    minutes: 8,
    scenario: ["You are preparing returns for the current year for six individuals. None has remarried unless stated."],
    instructions: "Select the most favourable filing status each taxpayer is entitled to.",
    columns: ["Taxpayer", "Filing status"],
    rows: [
      row("Married on December 31; the spouses want one return", pick(STATUS, "Married filing jointly"), "Marital status is determined on the last day of the year."),
      row("Spouse died in March of the current year", pick(STATUS, "Married filing jointly"), "A surviving spouse may file jointly for the year of death."),
      row("Spouse died last year; maintains a home for a dependent son", pick(STATUS, "Qualifying surviving spouse"), "Available for the two years after the year of death if the taxpayer maintains a home for a dependent child."),
      row("Spouse died three years ago; still maintains a home for a dependent daughter", pick(STATUS, "Head of household"), "Qualifying surviving spouse status has expired, but head of household is available with a qualifying child."),
      row("Divorced in December; paid more than half the cost of the home where her son lived all year", pick(STATUS, "Head of household"), "Unmarried on December 31 and maintaining a home for a qualifying child."),
      row("Never married; no dependents", pick(STATUS, "Single"), "No other status is available."),
    ],
    takeaway: "Status is set on December 31. A widowed taxpayer files jointly for the year of death, as a qualifying surviving spouse for two more years if there is a dependent child, then as head of household.",
  },
  {
    slug: "retirement-distribution-taxation",
    subject: "reg",
    topic: "retirement-plans-and-tax-planning-basics",
    title: "How retirement plan distributions are taxed",
    format: "classification",
    minutes: 8,
    scenario: ["Several clients took money out of retirement accounts this year. All traditional IRA contributions were deductible, so the accounts have no basis."],
    instructions: "Select how each distribution is taxed.",
    columns: ["Distribution", "Tax treatment"],
    rows: [
      row("Age 62: withdrawal from a traditional IRA", pick(DISTRIBUTION, "Fully taxable"), "Distributions of deductible contributions and earnings are ordinary income. No additional tax applies after age 59½."),
      row("Age 45: withdrawal from a 401(k) while still employed, no exception applies", pick(DISTRIBUTION, "Taxable plus the 10% additional tax"), "Early distributions are taxable and, without an exception, also subject to the 10% additional tax."),
      row("Age 63: qualified distribution from a Roth IRA opened 10 years ago", pick(DISTRIBUTION, "Tax-free"), "A qualified Roth distribution (after 59½ and after the five-year period) is entirely tax-free."),
      row("Age 40: withdrawal from a Roth IRA of an amount equal to her own contributions", pick(DISTRIBUTION, "Tax-free"), "Roth contributions come out first and are always tax- and penalty-free."),
      row("Age 56: 401(k) withdrawal after leaving the employer in the year he turned 55", pick(DISTRIBUTION, "Fully taxable"), "Separation from service in or after the year the employee reaches 55 is an exception to the 10% additional tax, but the distribution is still taxable."),
      row("Age 35: distribution from a traditional IRA inherited from her father", pick(DISTRIBUTION, "Fully taxable"), "Distributions to a beneficiary after the owner's death are taxable but not subject to the 10% additional tax."),
    ],
    takeaway: "Traditional account money is taxed when it comes out; Roth money is not, once the distribution is qualified. The 10% additional tax applies only before 59½ and only when no exception fits.",
  },

  // ── Area V: Federal taxation of entities ──
  {
    slug: "c-corporation-book-to-taxable-income",
    subject: "reg",
    topic: "c-corporation-taxation",
    title: "From book income to taxable income for a C corporation",
    format: "calculation",
    minutes: 15,
    scenario: [
      "Northfield Corp., a calendar-year C corporation, reported net income per books of $500,000. The items below are included in that figure. Northfield owns 10% of Delta Corp., a domestic corporation.",
    ],
    exhibits: [
      {
        title: "Items in book income",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Federal income tax expense", "105,000"],
            ["Interest on municipal bonds", "10,000"],
            ["Fines paid to a government agency", "5,000"],
            ["Business meals (all deductible at 50%)", "8,000"],
            ["Dividends received from Delta Corp.", "40,000"],
          ],
        },
        text: ["Use a corporate tax rate of 21%. The dividends received deduction for a less-than-20% owned domestic corporation is 50% of the dividend."],
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Taxable income before the dividends received deduction", num(604000), "$500,000 + $105,000 federal tax − $10,000 municipal interest + $5,000 fines + $4,000 (the nondeductible half of meals) = $604,000."),
      row("Dividends received deduction", num(20000), "50% × $40,000. The 50%-of-taxable-income limit ($302,000) does not bind."),
      row("Taxable income", num(584000), "$604,000 − $20,000."),
      row("Regular income tax", num(122640), "$584,000 × 21%."),
    ],
    takeaway: "Add back federal income tax, fines and the nondeductible half of meals; take out tax-exempt interest; then deduct the dividends received deduction based on ownership.",
  },
  {
    slug: "s-corporation-shareholder-basis",
    subject: "reg",
    topic: "s-corporation-taxation",
    title: "S corporation shareholder basis and distributions",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Kavya owns 100% of Lotus Inc., an S corporation with no accumulated earnings and profits. Her stock basis at the start of the year was $20,000 and she has no debt basis. Lotus's results for the year are below.",
    ],
    exhibits: [
      {
        title: "Lotus Inc.: Kavya's share of the year's items",
        table: {
          head: ["Item", "Amount ($)"],
          rows: [
            ["Ordinary business income", "30,000"],
            ["Tax-exempt interest income", "2,000"],
            ["Long-term capital gain (separately stated)", "3,000"],
            ["Nondeductible expenses (penalties)", "1,000"],
            ["Cash distributions to Kavya", "15,000"],
          ],
        },
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Basis after all income items", num(55000), "$20,000 + $30,000 + $2,000 + $3,000. Tax-exempt income increases basis too."),
      row("Taxable portion of the $15,000 distribution", num(0), "Distributions are tax-free to the extent of basis, which is $55,000 at that point."),
      row("Stock basis at the end of the year", num(39000), "$55,000 − $15,000 distribution − $1,000 nondeductible expenses. Basis is reduced for distributions before nondeductible expenses and losses."),
      row("If the distribution had been $60,000: capital gain recognized", num(5000), "The excess of the distribution over the $55,000 basis is gain from the sale of stock."),
    ],
    takeaway: "Order matters: increase basis for all income (including tax-exempt), then reduce for distributions, then for nondeductible expenses, then for losses. Distributions above basis are capital gain.",
  },
  {
    slug: "partnership-contribution-with-liability",
    subject: "reg",
    topic: "partnership-taxation",
    title: "Contributing property subject to a mortgage to a partnership",
    format: "calculation",
    minutes: 12,
    scenario: [
      "Rahul contributed land to a new partnership in exchange for a 25% interest. The partnership assumed the $20,000 mortgage on the land; it is a recourse liability shared in proportion to the partners' interests.",
      "During the first year Rahul's share of partnership ordinary income was $12,000, and he received a $5,000 cash distribution.",
    ],
    exhibits: [
      {
        title: "Land contributed",
        table: { head: ["Item", "Amount ($)"], rows: [["Rahul's adjusted basis", "40,000"], ["Fair market value", "60,000"], ["Mortgage assumed by the partnership", "20,000"]] },
      },
    ],
    instructions: "Enter each amount in dollars.",
    columns: AMOUNT,
    rows: [
      row("Gain Rahul recognizes on the contribution", num(0), "His net relief of debt is $20,000 − his 25% share ($5,000) = $15,000, which is less than his $40,000 basis, so no gain."),
      row("Rahul's initial basis in his partnership interest", num(25000), "$40,000 basis − $20,000 debt relieved + $5,000 share of partnership debt."),
      row("The partnership's basis in the land", num(40000), "Contributed property keeps the contributing partner's basis."),
      row("Rahul's basis at the end of the first year", num(32000), "$25,000 + $12,000 income − $5,000 distribution."),
    ],
    takeaway: "A partner's basis falls by the debt the partnership takes over and rises by the partner's share of partnership debt. Gain arises only if net debt relief exceeds basis.",
  },
  {
    slug: "taxable-gifts-calculation",
    subject: "reg",
    topic: "trusts-estates-and-gift-tax-basics",
    title: "Calculating taxable gifts for the year",
    format: "calculation",
    minutes: 10,
    scenario: [
      "Sunita, a US citizen, made the gifts below during the year. Her husband, also a US citizen, did not elect to split gifts. For this simulation, use an annual exclusion of $19,000 per donee.",
    ],
    exhibits: [
      {
        title: "Gifts made",
        table: {
          head: ["Gift", "Amount ($)"],
          rows: [
            ["Cash to her son", "50,000"],
            ["Tuition paid directly to her grandson's university", "40,000"],
            ["Cash to her husband", "100,000"],
            ["Cash to a friend", "10,000"],
            ["Cash to a public charity", "25,000"],
          ],
        },
      },
    ],
    instructions: "Enter the taxable gift after exclusions and deductions for each gift, and the total. Enter 0 where nothing is taxable.",
    columns: AMOUNT,
    rows: [
      row("Cash to her son", num(31000), "$50,000 − $19,000 annual exclusion."),
      row("Tuition paid directly to the university", num(0), "Tuition paid directly to an educational institution is excluded without limit."),
      row("Cash to her husband", num(0), "Gifts to a US-citizen spouse qualify for the unlimited marital deduction."),
      row("Cash to a friend", num(0), "Covered by the annual exclusion."),
      row("Cash to a public charity", num(0), "Gifts to charity qualify for the charitable deduction."),
      row("Total taxable gifts for the year", num(31000), "Only the gift to her son exceeds its exclusions. No tax is payable until lifetime taxable gifts exceed the unified credit amount, but a gift tax return is required."),
    ],
    takeaway: "Direct payments of tuition and medical bills, gifts to a citizen spouse and gifts to charity never use the annual exclusion. Everything else is taxable only above the exclusion for each donee.",
  },
  {
    slug: "fringe-benefits-taxability",
    subject: "reg",
    topic: "employee-benefits-and-payroll-tax",
    title: "Which fringe benefits are taxable to the employee?",
    format: "classification",
    minutes: 8,
    scenario: ["Brightline Inc. provides its employees with the benefits below. The payroll manager needs to know which to include in wages."],
    instructions: "Select whether each benefit is excluded from or taxable to the employee.",
    columns: ["Benefit", "Treatment"],
    rows: [
      row("Health insurance premiums paid by the employer", pick(FRINGE, "Excluded from the employee's income"), "Employer-provided accident and health coverage is excluded."),
      row("Group-term life insurance with $50,000 of coverage", pick(FRINGE, "Excluded from the employee's income"), "The cost of the first $50,000 of group-term coverage is excluded."),
      row("The cost of group-term life coverage above $50,000", pick(FRINGE, "Taxable to the employee"), "Coverage above $50,000 is taxable, using the IRS cost table."),
      row("A holiday turkey given to every employee", pick(FRINGE, "Excluded from the employee's income"), "A de minimis fringe benefit of small value is excluded."),
      row("A $200 gift card given to every employee", pick(FRINGE, "Taxable to the employee"), "Cash and cash equivalents, including gift cards, are never de minimis."),
      row("Professional association dues paid by the employer for the employee's job", pick(FRINGE, "Excluded from the employee's income"), "A working condition fringe is excluded if the employee could have deducted the cost as a business expense."),
      row("Reimbursement of moving expenses for a civilian employee", pick(FRINGE, "Taxable to the employee"), "The exclusion for qualified moving expense reimbursements is available only to members of the armed forces."),
    ],
    takeaway: "Health coverage, the first $50,000 of group-term life, de minimis items and working condition fringes are excluded. Cash equivalents are always taxable.",
  },
  {
    slug: "unrelated-business-income",
    subject: "reg",
    topic: "exempt-organizations-basics",
    title: "Is it unrelated business income?",
    format: "classification",
    minutes: 8,
    scenario: ["Riverside Arts Foundation is a tax-exempt museum. Its finance committee has listed its sources of income for the year."],
    instructions: "Select whether each item is unrelated business income.",
    columns: ["Income", "Classification"],
    rows: [
      row("Dividends and interest on its endowment investments", pick(UBI, "Not unrelated business income"), "Passive investment income is excluded."),
      row("Sales of reproductions of works in its collection in the museum shop", pick(UBI, "Not unrelated business income"), "The sales are substantially related to the museum's educational purpose."),
      row("Advertising sold in its monthly magazine, run by paid staff", pick(UBI, "Unrelated business income"), "Selling advertising is a trade or business regularly carried on and not substantially related to the exempt purpose."),
      row("A weekly café run entirely by unpaid volunteers", pick(UBI, "Not unrelated business income"), "A trade or business in which substantially all the work is done by volunteers is excluded."),
      row("Rent from leasing part of its building, with no services provided", pick(UBI, "Not unrelated business income"), "Rents from real property are generally excluded."),
      row("Sales of donated used clothing at a thrift store", pick(UBI, "Not unrelated business income"), "Selling merchandise substantially all of which was donated is excluded."),
      row("A parking garage operated for the general public, with paid attendants", pick(UBI, "Unrelated business income"), "A regularly carried on commercial business with paid staff, unrelated to the exempt purpose, produces unrelated business income."),
    ],
    takeaway: "Income is unrelated business income only when it comes from a trade or business, regularly carried on, that is not substantially related to the exempt purpose. Passive income, volunteer-run activities and donated goods are excluded.",
  },
];

export const regSimulations: Simulation[] = [...regSimulations1, ...regSimulations2];
