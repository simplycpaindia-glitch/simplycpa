import type { McqBank } from "./types";

/**
 * TCP question bank — all 12 topics.
 *
 * As with REG, questions are built on structural planning rules and figures
 * supplied in the stem rather than annually indexed amounts, so the bank does
 * not go stale each filing season. Fixed statutory figures (the Section 121
 * exclusion, the 3.8% NIIT rate) are used where they are set in statute rather
 * than adjusted for inflation.
 */
export const tcpBank: McqBank = {
  "individual-tax-planning-strategies": [
    {
      question: "The net investment income tax applies at a rate of:",
      options: [
        { label: "A", text: "0.9% on wages above a threshold", isCorrect: false, rationale: "0.9% is the Additional Medicare Tax on earned income, a different levy." },
        { label: "B", text: "3.8% on the lesser of net investment income or modified AGI over the applicable threshold", isCorrect: true, rationale: "Correct — the NIIT applies to the lesser of the two amounts, not to all investment income." },
        { label: "C", text: "3.8% on all investment income regardless of income level", isCorrect: false, rationale: "The tax applies only above the modified AGI threshold." },
        { label: "D", text: "15% on long-term capital gains only", isCorrect: false, rationale: "This describes a capital gains rate, not the NIIT." },
      ],
      explanation: "The net investment income tax is 3.8% of the lesser of net investment income or the excess of modified AGI over the applicable threshold. Because it applies to the lesser amount, a taxpayer just over the threshold pays the tax on only a small base — which makes managing modified AGI an effective planning lever.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["individual planning", "NIIT"],
    },
    {
      question: "Bunching itemized deductions into alternate years is an effective strategy when a taxpayer's:",
      options: [
        { label: "A", text: "Itemized deductions greatly exceed the standard deduction every year", isCorrect: false, rationale: "A taxpayer who always itemizes comfortably gains nothing from bunching." },
        { label: "B", text: "Itemized deductions fall near the standard deduction amount each year", isCorrect: true, rationale: "Correct — bunching lets the taxpayer itemize in one year and take the standard deduction in the next." },
        { label: "C", text: "Income is entirely from tax-exempt sources", isCorrect: false, rationale: "With no taxable income, deductions provide no benefit." },
        { label: "D", text: "Deductions consist only of items that cannot be timed", isCorrect: false, rationale: "Bunching requires deductions whose timing the taxpayer can control." },
      ],
      explanation: "A taxpayer hovering near the standard deduction gets little marginal benefit from itemizing in any single year. Concentrating controllable deductions — charitable contributions, elective medical procedures, state tax payments where permitted — into alternating years allows itemizing above the standard deduction in one year and claiming the full standard deduction in the other.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["individual planning", "bunching"],
    },
    {
      question: "Tax-loss harvesting involves selling depreciated securities to realize losses. The primary constraint on this strategy is:",
      options: [
        { label: "A", text: "Losses can never offset capital gains", isCorrect: false, rationale: "Offsetting capital gains is precisely the purpose of the strategy." },
        { label: "B", text: "The wash sale rules, which disallow the loss if substantially identical securities are repurchased within 30 days before or after", isCorrect: true, rationale: "Correct — the 61-day window is the key limitation on harvesting." },
        { label: "C", text: "Losses must be used in the year realized or they expire", isCorrect: false, rationale: "Individual capital losses carry forward indefinitely." },
        { label: "D", text: "Only losses on securities held over five years qualify", isCorrect: false, rationale: "No such holding period requirement exists." },
      ],
      explanation: "Harvesting losses to offset gains, plus up to $3,000 of ordinary income, is a core year-end strategy. The wash sale rules disallow the loss if substantially identical securities are acquired within 30 days before or after the sale. Planners typically substitute a similar but not substantially identical holding to maintain market exposure during the window.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["individual planning", "loss harvesting"],
    },
  ],

  "personal-financial-planning": [
    {
      question: "Earnings in a Section 529 qualified tuition program are:",
      options: [
        { label: "A", text: "Taxable annually to the account owner", isCorrect: false, rationale: "Earnings accumulate without current taxation." },
        { label: "B", text: "Tax-deferred, and tax-free when distributions are used for qualified education expenses", isCorrect: true, rationale: "Correct — qualified distributions escape federal income tax entirely." },
        { label: "C", text: "Always taxable to the beneficiary when withdrawn", isCorrect: false, rationale: "Qualified distributions are not taxable." },
        { label: "D", text: "Deductible on the federal return when contributed", isCorrect: false, rationale: "Contributions are not federally deductible, though many states offer a deduction or credit." },
      ],
      explanation: "A 529 plan grows tax-deferred, and distributions used for qualified education expenses are free of federal income tax. Non-qualified distributions are taxable on the earnings portion and generally subject to a 10% penalty. Contributions are treated as completed gifts for transfer tax purposes, with an election permitting several years of annual exclusions at once.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["personal financial planning", "education funding"],
    },
    {
      question: "In evaluating a client's risk management needs, the first priority is generally to insure against:",
      options: [
        { label: "A", text: "High-frequency, low-severity losses", isCorrect: false, rationale: "Frequent small losses are better absorbed or budgeted than insured, given premium loading." },
        { label: "B", text: "Low-frequency, high-severity losses that would be financially catastrophic", isCorrect: true, rationale: "Correct — insurance is most valuable against losses the client could not absorb." },
        { label: "C", text: "Losses that are certain to occur", isCorrect: false, rationale: "Certain losses are not insurable risks; they are budgeted expenses." },
        { label: "D", text: "Losses already covered by an emergency fund", isCorrect: false, rationale: "Retaining risks the client can absorb is more efficient than insuring them." },
      ],
      explanation: "Sound risk management transfers what would be catastrophic and retains what can be absorbed. Disability, premature death with dependents, liability, and long-term care are the classic high-severity exposures. Insuring small predictable losses is inefficient because the premium must cover the expected loss plus the insurer's costs and margin.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["personal financial planning", "risk management"],
    },
    {
      question: "A taxpayer sells a principal residence owned and used as such for three of the last five years, realizing a $300,000 gain. If married filing jointly, the taxable gain is:",
      options: [
        { label: "A", text: "$300,000", isCorrect: false, rationale: "The Section 121 exclusion shelters gain up to the statutory limit." },
        { label: "B", text: "$0, because the gain is fully within the $500,000 exclusion for joint filers", isCorrect: true, rationale: "Correct — the ownership and use tests are met and the gain is below the joint exclusion limit." },
        { label: "C", text: "$50,000", isCorrect: false, rationale: "This would apply the single-filer exclusion of $250,000." },
        { label: "D", text: "$150,000", isCorrect: false, rationale: "The exclusion is not prorated in these circumstances." },
      ],
      explanation: "Section 121 excludes up to $250,000 of gain on the sale of a principal residence ($500,000 for joint filers) where the taxpayer owned and used the property as a principal residence for at least two of the five years preceding the sale. These statutory amounts are fixed rather than inflation-adjusted, and the exclusion is generally available once every two years.",
      difficulty: "MEDIUM",
      questionType: "CALCULATION",
      tags: ["personal financial planning", "Section 121"],
    },
  ],

  "retirement-planning-strategies": [
    {
      question: "A Roth conversion is generally most attractive when the taxpayer expects:",
      options: [
        { label: "A", text: "To be in a lower tax bracket in retirement than currently", isCorrect: false, rationale: "Expecting lower future rates favors deferring the tax, not accelerating it." },
        { label: "B", text: "To be in the same or a higher tax bracket in retirement, or wishes to avoid required minimum distributions", isCorrect: true, rationale: "Correct — paying tax now at a lower or equal rate, and escaping RMDs, are the central arguments for converting." },
        { label: "C", text: "To need the converted funds within the next twelve months", isCorrect: false, rationale: "Near-term need undermines conversion, since the five-year rule and lost growth work against it." },
        { label: "D", text: "To have no other assets available to pay the resulting tax", isCorrect: false, rationale: "Paying conversion tax from the retirement account itself substantially weakens the strategy." },
      ],
      explanation: "Converting a traditional IRA to a Roth accelerates income into the current year. It is favorable when current rates are at or below expected future rates, when the taxpayer can pay the tax from outside funds so the entire balance keeps compounding, and when avoiding required minimum distributions matters for estate or tax-bracket management.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["retirement planning", "Roth conversion"],
    },
    {
      question: "A distribution from a qualified plan that the participant intends to roll over is best handled by:",
      options: [
        { label: "A", text: "Taking a check payable to the participant and redepositing within 60 days", isCorrect: false, rationale: "This triggers mandatory 20% withholding, which the participant must replace from other funds to complete a full rollover." },
        { label: "B", text: "A direct trustee-to-trustee transfer to the receiving account", isCorrect: true, rationale: "Correct — a direct rollover avoids mandatory withholding and the 60-day deadline entirely." },
        { label: "C", text: "Withdrawing the funds and reinvesting in a taxable brokerage account", isCorrect: false, rationale: "This abandons tax deferral altogether." },
        { label: "D", text: "Waiting until the following tax year to complete the transfer", isCorrect: false, rationale: "Delaying past 60 days makes the distribution fully taxable." },
      ],
      explanation: "A direct trustee-to-trustee rollover moves funds without the participant taking possession, avoiding the mandatory 20% federal withholding that applies to eligible rollover distributions paid to the participant. With an indirect rollover the participant must redeposit the entire gross amount — including the withheld 20% from other funds — within 60 days to avoid tax and penalty.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["retirement planning", "rollovers"],
    },
    {
      question: "Under the SECURE Act rules, most non-spouse beneficiaries who inherit an IRA must:",
      options: [
        { label: "A", text: "Take distributions over their own life expectancy", isCorrect: false, rationale: "The lifetime stretch was eliminated for most non-spouse beneficiaries." },
        { label: "B", text: "Fully distribute the account within 10 years of the owner's death", isCorrect: true, rationale: "Correct — the 10-year rule replaced the stretch IRA for most designated beneficiaries." },
        { label: "C", text: "Distribute the entire account immediately", isCorrect: false, rationale: "Immediate distribution is not required; the beneficiary has ten years." },
        { label: "D", text: "Roll the account into their own IRA", isCorrect: false, rationale: "Only a surviving spouse may treat an inherited IRA as their own." },
      ],
      explanation: "The SECURE Act eliminated the stretch IRA for most non-spouse beneficiaries, requiring full distribution within ten years of death. Eligible designated beneficiaries — surviving spouses, minor children of the owner, disabled or chronically ill individuals, and those not more than ten years younger — may still use life expectancy distributions.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["retirement planning", "inherited IRAs"],
    },
  ],

  "estate-and-gift-tax-planning": [
    {
      question: "Portability of the deceased spousal unused exclusion amount (DSUE) allows a surviving spouse to:",
      options: [
        { label: "A", text: "Avoid all estate tax regardless of the size of the estate", isCorrect: false, rationale: "Portability increases the available exclusion but does not eliminate estate tax." },
        { label: "B", text: "Use the unused portion of the deceased spouse's exclusion, provided a timely estate tax return is filed making the election", isCorrect: true, rationale: "Correct — the election must be made on a timely filed return even when no tax is otherwise due." },
        { label: "C", text: "Claim the deceased spouse's exclusion automatically with no filing requirement", isCorrect: false, rationale: "Portability is not automatic; the election is essential." },
        { label: "D", text: "Transfer the exclusion to the couple's children", isCorrect: false, rationale: "DSUE passes only to the surviving spouse." },
      ],
      explanation: "Portability lets a surviving spouse add the deceased spouse's unused exclusion to their own, effectively doubling the amount shelterable. The critical trap is procedural: the election requires a timely filed estate tax return for the first spouse's estate even when the estate is well below the filing threshold and owes nothing.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["estate planning", "portability"],
    },
    {
      question: "A grantor retained annuity trust (GRAT) transfers wealth efficiently when:",
      options: [
        { label: "A", text: "The trust assets appreciate at a rate below the Section 7520 rate", isCorrect: false, rationale: "Underperformance leaves nothing for the remainder beneficiaries." },
        { label: "B", text: "The trust assets appreciate at a rate exceeding the Section 7520 rate used to value the retained annuity", isCorrect: true, rationale: "Correct — appreciation above the assumed rate passes to beneficiaries free of additional transfer tax." },
        { label: "C", text: "The grantor dies during the annuity term", isCorrect: false, rationale: "Death during the term generally pulls the assets back into the grantor's estate, defeating the strategy." },
        { label: "D", text: "The trust holds only cash", isCorrect: false, rationale: "Cash cannot outperform the assumed rate, so no wealth is transferred." },
      ],
      explanation: "A GRAT works by arbitrage against the Section 7520 rate. The grantor contributes assets and retains an annuity valued using that assumed rate; any appreciation above it passes to the remainder beneficiaries at little or no transfer tax cost. The primary risks are underperformance and the grantor dying during the term, which brings the assets back into the estate.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["estate planning", "GRAT"],
    },
    {
      question: "When deciding whether to gift appreciated property during life or transfer it at death, a key consideration is that property transferred at death:",
      options: [
        { label: "A", text: "Carries over the decedent's basis to the heir", isCorrect: false, rationale: "Carryover basis applies to lifetime gifts, not to transfers at death." },
        { label: "B", text: "Receives a basis adjustment to fair market value, eliminating the built-in gain for income tax purposes", isCorrect: true, rationale: "Correct — the step-up at death is a major argument for holding highly appreciated assets until death." },
        { label: "C", text: "Is always subject to a higher transfer tax rate than a lifetime gift", isCorrect: false, rationale: "Gift and estate taxes are unified under a common rate structure." },
        { label: "D", text: "Cannot qualify for the marital deduction", isCorrect: false, rationale: "Transfers to a surviving citizen spouse qualify for an unlimited marital deduction." },
      ],
      explanation: "This is the central income-versus-transfer tax tradeoff in estate planning. Gifting removes future appreciation from the estate but passes carryover basis, preserving the built-in gain. Holding until death gives heirs a basis stepped up to fair market value, erasing that gain — so highly appreciated, low-basis assets are often best retained while high-basis or rapidly appreciating assets are gifted.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["estate planning", "basis step-up"],
    },
    {
      question: "Valuation discounts for a minority interest in a closely held business reflect:",
      options: [
        { label: "A", text: "The interest's proportionate share of the entity's book value", isCorrect: false, rationale: "Book value is not the basis for a discount." },
        { label: "B", text: "Lack of control over entity decisions and lack of a ready market for the interest", isCorrect: true, rationale: "Correct — minority interest and marketability discounts reflect these two distinct limitations." },
        { label: "C", text: "A statutory percentage set by the Internal Revenue Code", isCorrect: false, rationale: "Discounts are determined by valuation analysis, not by statute." },
        { label: "D", text: "The entity's projected tax liability", isCorrect: false, rationale: "Deferred entity taxes may be a separate adjustment, but they are not the basis for these discounts." },
      ],
      explanation: "A minority interest in a closely held business is worth less than its proportionate share of enterprise value because the holder cannot direct distributions or force a sale, and because no ready market exists. Both discounts must be supported by a qualified appraisal, and the IRS scrutinizes them closely in family transfers.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["estate planning", "valuation discounts"],
    },
  ],

  "c-corporation-tax-compliance": [
    {
      question: "Schedule M-1 of Form 1120 reconciles:",
      options: [
        { label: "A", text: "Beginning and ending retained earnings", isCorrect: false, rationale: "That is the function of Schedule M-2." },
        { label: "B", text: "Book income per the financial statements to taxable income on the return", isCorrect: true, rationale: "Correct — M-1 bridges the book-tax difference." },
        { label: "C", text: "The corporation's balance sheet to its general ledger", isCorrect: false, rationale: "Schedule L presents the balance sheet; no such reconciliation is required." },
        { label: "D", text: "Estimated tax payments to the final liability", isCorrect: false, rationale: "This reconciliation appears elsewhere on the return." },
      ],
      explanation: "Schedule M-1 reconciles book income to taxable income, listing permanent differences such as nondeductible fines and tax-exempt interest, and temporary differences such as depreciation and accrued expenses not yet deductible. Larger corporations file the more detailed Schedule M-3. Schedule M-2 separately analyzes unappropriated retained earnings.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["C corporation", "Schedule M-1"],
    },
    {
      question: "The accumulated earnings tax is imposed on a corporation that:",
      options: [
        { label: "A", text: "Distributes all of its earnings as dividends each year", isCorrect: false, rationale: "Distributing earnings is precisely what avoids the tax." },
        { label: "B", text: "Accumulates earnings beyond the reasonable needs of the business to avoid shareholder-level tax on dividends", isCorrect: true, rationale: "Correct — the tax targets accumulation motivated by avoiding shareholder tax." },
        { label: "C", text: "Reports a net operating loss for the year", isCorrect: false, rationale: "A loss year generates no earnings to accumulate." },
        { label: "D", text: "Has more than 100 shareholders", isCorrect: false, rationale: "Shareholder count is an S corporation criterion, not an accumulated earnings test." },
      ],
      explanation: "The accumulated earnings tax is a penalty tax discouraging corporations from hoarding earnings to shield shareholders from dividend taxation. A corporation avoids it by demonstrating that accumulations serve the reasonable needs of the business — planned expansion, working capital requirements, or debt retirement — with documentation of specific, definite plans.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["C corporation", "accumulated earnings tax"],
    },
    {
      question: "An affiliated group filing a consolidated federal return must generally include corporations connected through:",
      options: [
        { label: "A", text: "At least 50% direct or indirect stock ownership", isCorrect: false, rationale: "The consolidated return threshold is higher than 50%." },
        { label: "B", text: "At least 80% of voting power and value, held by a common parent", isCorrect: true, rationale: "Correct — the 80% affiliation test governs consolidated return eligibility." },
        { label: "C", text: "Any level of common ownership, at the group's election", isCorrect: false, rationale: "A statutory ownership threshold applies." },
        { label: "D", text: "Common management, regardless of stock ownership", isCorrect: false, rationale: "Management overlap does not create an affiliated group." },
      ],
      explanation: "An affiliated group eligible to file a consolidated return consists of a common parent and corporations connected by at least 80% of total voting power and 80% of total value. Consolidation permits offsetting profits and losses among members and deferring intercompany gains, but the election is binding for future years absent IRS consent to discontinue.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["C corporation", "consolidated returns"],
    },
  ],

  "s-corporation-planning": [
    {
      question: "An S corporation shareholder-employee who takes only distributions and no salary risks:",
      options: [
        { label: "A", text: "Automatic termination of the S election", isCorrect: false, rationale: "Compensation practices do not terminate the election." },
        { label: "B", text: "IRS recharacterization of distributions as wages subject to employment taxes, with penalties and interest", isCorrect: true, rationale: "Correct — the reasonable compensation requirement is a frequent audit issue for S corporations." },
        { label: "C", text: "Loss of limited liability protection", isCorrect: false, rationale: "Liability protection derives from state corporate law, not tax compensation practices." },
        { label: "D", text: "Disallowance of all corporate deductions", isCorrect: false, rationale: "The consequence targets the compensation characterization, not general deductions." },
      ],
      explanation: "Because S corporation distributions escape employment taxes while wages do not, shareholder-employees have an incentive to minimize salary. The IRS requires reasonable compensation for services actually rendered, and recharacterizes inadequate salaries as wages with resulting employment taxes, penalties, and interest. Reasonableness is judged against duties, experience, time devoted, and comparable market pay.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["S corporation", "reasonable compensation"],
    },
    {
      question: "The built-in gains tax applies to an S corporation that:",
      options: [
        { label: "A", text: "Was formed as an S corporation from inception", isCorrect: false, rationale: "A corporation that was never a C corporation has no built-in gains exposure." },
        { label: "B", text: "Converted from C corporation status and disposes of appreciated assets within the recognition period", isCorrect: true, rationale: "Correct — the tax prevents converting to S status simply to avoid corporate-level tax on existing appreciation." },
        { label: "C", text: "Has more than 100 shareholders", isCorrect: false, rationale: "Exceeding the shareholder limit terminates the election rather than triggering this tax." },
        { label: "D", text: "Distributes property to shareholders in any year", isCorrect: false, rationale: "Distributions alone do not trigger the built-in gains tax." },
      ],
      explanation: "The built-in gains tax imposes corporate-level tax at the highest corporate rate on gains that accrued while the entity was a C corporation, when those assets are sold during the five-year recognition period following conversion. It exists to prevent a C corporation from electing S status purely to escape corporate tax on appreciation already in place.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["S corporation", "built-in gains"],
    },
    {
      question: "An S election is effective for the current tax year if filed:",
      options: [
        { label: "A", text: "At any point during the tax year", isCorrect: false, rationale: "A late-year filing is generally effective for the following year." },
        { label: "B", text: "By the 15th day of the third month of the tax year, or at any time in the preceding year", isCorrect: true, rationale: "Correct — this timing rule determines whether the election applies currently or from the next year." },
        { label: "C", text: "Only in the year the corporation is formed", isCorrect: false, rationale: "An existing C corporation may elect S status." },
        { label: "D", text: "By the extended due date of the return", isCorrect: false, rationale: "The election deadline is not tied to the return due date, though relief exists for late elections." },
      ],
      explanation: "Form 2553 must be filed by the 15th day of the third month of the tax year for the election to apply to that year, or at any time during the preceding year. A later filing generally takes effect the following year. All shareholders at the time of the election must consent, and relief for late elections is available on a showing of reasonable cause.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["S corporation", "election timing"],
    },
  ],

  "partnership-planning": [
    {
      question: "A Section 754 election allows a partnership to:",
      options: [
        { label: "A", text: "Change its tax year without IRS consent", isCorrect: false, rationale: "Tax year changes are governed by separate rules." },
        { label: "B", text: "Adjust the basis of partnership property following a transfer of a partnership interest or certain distributions", isCorrect: true, rationale: "Correct — the election aligns inside basis with the transferee's outside basis." },
        { label: "C", text: "Convert to an S corporation tax-free", isCorrect: false, rationale: "Entity conversion is a different transaction entirely." },
        { label: "D", text: "Deduct guaranteed payments twice", isCorrect: false, rationale: "No provision permits duplicate deductions." },
      ],
      explanation: "Without a Section 754 election, a partner who buys an interest at a premium takes a high outside basis while the partnership's inside basis in its assets stays unchanged, so the new partner is allocated gain on appreciation they effectively paid for. The election triggers a Section 743(b) adjustment aligning the two. Once made it binds future years absent IRS consent to revoke.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["partnership planning", "Section 754"],
    },
    {
      question: "Under Section 704(c), when a partner contributes property with a built-in gain, that gain must be:",
      options: [
        { label: "A", text: "Allocated equally among all partners", isCorrect: false, rationale: "Equal allocation would shift the contributing partner's gain to others." },
        { label: "B", text: "Allocated to the contributing partner when the property is later sold", isCorrect: true, rationale: "Correct — pre-contribution gain must be allocated back to the partner who contributed the property." },
        { label: "C", text: "Recognized immediately upon contribution", isCorrect: false, rationale: "Contributions to a partnership are generally tax-free under Section 721." },
        { label: "D", text: "Permanently eliminated on contribution", isCorrect: false, rationale: "The built-in gain is preserved, not erased." },
      ],
      explanation: "Contributing appreciated property to a partnership is generally tax-free, but Section 704(c) prevents shifting the resulting tax burden. The built-in gain existing at contribution must be allocated to the contributing partner when the property is sold, so other partners are not taxed on appreciation that accrued before they had any interest.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["partnership planning", "Section 704(c)"],
    },
    {
      question: "Hot assets under Section 751 are significant because, on the sale of a partnership interest, they:",
      options: [
        { label: "A", text: "Are excluded from the calculation of gain entirely", isCorrect: false, rationale: "They are included; the issue is the character of the resulting gain." },
        { label: "B", text: "Cause a portion of the gain to be recharacterized as ordinary income rather than capital gain", isCorrect: true, rationale: "Correct — Section 751 prevents converting ordinary income into capital gain through the sale of an interest." },
        { label: "C", text: "Increase the seller's outside basis", isCorrect: false, rationale: "Hot assets affect character, not basis." },
        { label: "D", text: "Must be distributed before an interest can be sold", isCorrect: false, rationale: "No such distribution requirement exists." },
      ],
      explanation: "A partnership interest is generally a capital asset, so its sale yields capital gain. Section 751 carves out unrealized receivables and inventory items — hot assets — requiring the portion of gain attributable to them to be treated as ordinary income. Without this rule, partners could convert ordinary income into preferentially taxed capital gain simply by selling the interest.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["partnership planning", "hot assets"],
    },
  ],

  "entity-choice-and-structuring": [
    {
      question: "The principal tax disadvantage of operating as a C corporation rather than a pass-through entity is:",
      options: [
        { label: "A", text: "C corporations cannot deduct ordinary business expenses", isCorrect: false, rationale: "C corporations deduct ordinary and necessary business expenses normally." },
        { label: "B", text: "Double taxation — earnings are taxed at the corporate level and again as dividends to shareholders", isCorrect: true, rationale: "Correct — the two-layer tax is the defining disadvantage of the C corporation form." },
        { label: "C", text: "C corporations are subject to self-employment tax on all income", isCorrect: false, rationale: "Corporate earnings are not subject to self-employment tax." },
        { label: "D", text: "C corporations cannot have more than 100 shareholders", isCorrect: false, rationale: "That limit applies to S corporations." },
      ],
      explanation: "C corporation earnings bear tax at the entity level and again when distributed as dividends. Pass-through entities avoid the entity-level layer, with income taxed once to the owners. The analysis is not one-sided, however: the flat corporate rate, the ability to retain earnings, and fringe benefit treatment can favor a C corporation in specific circumstances.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["entity choice", "double taxation"],
    },
    {
      question: "A key difference between an S corporation and a partnership for a service business owner is that:",
      options: [
        { label: "A", text: "Partnership income allocated to a general partner is generally subject to self-employment tax, while S corporation distributions are not", isCorrect: true, rationale: "Correct — this employment tax difference is a primary driver of the S corporation choice for service businesses." },
        { label: "B", text: "Partnerships are subject to entity-level income tax", isCorrect: false, rationale: "Partnerships are pass-through entities and pay no entity-level income tax." },
        { label: "C", text: "S corporations may allocate income disproportionately to shareholders", isCorrect: false, rationale: "S corporation allocations must be strictly pro rata; partnerships offer the flexibility." },
        { label: "D", text: "Partnerships cannot have more than one class of ownership interest", isCorrect: false, rationale: "The single class of stock restriction applies to S corporations, not partnerships." },
      ],
      explanation: "A general partner's distributive share of trade or business income is generally subject to self-employment tax, while an S corporation shareholder pays employment taxes only on reasonable wages — distributions above that escape them. Partnerships offer far greater flexibility in special allocations and in getting basis for entity debt, which S corporations cannot provide.",
      difficulty: "HARD",
      questionType: "APPLICATION",
      tags: ["entity choice", "self-employment tax"],
    },
    {
      question: "The qualified business income deduction under Section 199A generally permits eligible taxpayers to deduct:",
      options: [
        { label: "A", text: "100% of qualified business income", isCorrect: false, rationale: "The deduction is a percentage of QBI, not the full amount." },
        { label: "B", text: "Up to 20% of qualified business income from pass-through entities, subject to limitations", isCorrect: true, rationale: "Correct — the 20% deduction is subject to wage, capital, and specified service business limitations at higher income levels." },
        { label: "C", text: "50% of all business income including C corporation dividends", isCorrect: false, rationale: "The deduction does not apply to C corporation earnings or dividends." },
        { label: "D", text: "An amount equal to self-employment tax paid", isCorrect: false, rationale: "That deduction is separate and unrelated to Section 199A." },
      ],
      explanation: "Section 199A allows a deduction of up to 20% of qualified business income from partnerships, S corporations, and sole proprietorships, narrowing the gap with the flat corporate rate. Above income thresholds the deduction is limited by W-2 wages and the basis of qualified property, and is phased out entirely for specified service trades or businesses.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["entity choice", "QBI deduction"],
    },
  ],

  "entity-distributions-and-liquidations": [
    {
      question: "A C corporation with $30,000 of earnings and profits distributes $50,000 to a shareholder whose stock basis is $15,000. How is the distribution characterized?",
      options: [
        { label: "A", text: "$50,000 dividend", isCorrect: false, rationale: "Dividend treatment is limited to available earnings and profits." },
        { label: "B", text: "$30,000 dividend, $15,000 tax-free return of capital, and $5,000 capital gain", isCorrect: true, rationale: "Correct — the distribution is applied in that statutory order until each layer is exhausted." },
        { label: "C", text: "$30,000 dividend and $20,000 capital gain", isCorrect: false, rationale: "This skips the return of capital step that reduces basis to zero first." },
        { label: "D", text: "$15,000 dividend and $35,000 return of capital", isCorrect: false, rationale: "This reverses the ordering rules." },
      ],
      explanation: "Corporate distributions follow a three-tier order: first a taxable dividend to the extent of earnings and profits ($30,000), then a tax-free return of capital reducing stock basis to zero ($15,000), and finally capital gain for any remainder ($5,000). Applying the tiers in the wrong order is a common error.",
      difficulty: "HARD",
      questionType: "CALCULATION",
      tags: ["distributions", "E&P ordering"],
    },
    {
      question: "In a complete liquidation of a C corporation under Section 331, the shareholder:",
      options: [
        { label: "A", text: "Recognizes no gain or loss", isCorrect: false, rationale: "Nonrecognition applies to a parent liquidating an 80%-owned subsidiary under Section 332, not to general shareholders." },
        { label: "B", text: "Recognizes gain or loss equal to the difference between the fair value of property received and the stock basis", isCorrect: true, rationale: "Correct — the liquidation is treated as a sale or exchange of the shareholder's stock." },
        { label: "C", text: "Recognizes ordinary income for the entire distribution", isCorrect: false, rationale: "The gain is capital in character, since the stock is a capital asset." },
        { label: "D", text: "Takes a carryover basis in the property received", isCorrect: false, rationale: "The shareholder takes a fair market value basis in property received." },
      ],
      explanation: "A complete liquidation is treated as a sale or exchange of stock: the shareholder recognizes capital gain or loss for the difference between the fair market value of property received and the stock's basis, and takes a fair market value basis in that property. The corporation separately recognizes gain or loss as if it sold its assets at fair value.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["liquidations", "Section 331"],
    },
    {
      question: "A stock redemption is treated as a sale or exchange rather than as a dividend when it:",
      options: [
        { label: "A", text: "Is approved by the board of directors", isCorrect: false, rationale: "Board approval has no bearing on the tax characterization." },
        { label: "B", text: "Is substantially disproportionate, completely terminates the shareholder's interest, or is not essentially equivalent to a dividend", isCorrect: true, rationale: "Correct — these are the principal Section 302 tests for sale or exchange treatment." },
        { label: "C", text: "Involves less than 10% of outstanding shares", isCorrect: false, rationale: "No such percentage threshold governs the characterization." },
        { label: "D", text: "Is paid in property rather than cash", isCorrect: false, rationale: "The form of consideration does not determine treatment." },
      ],
      explanation: "Section 302 provides sale or exchange treatment — allowing basis recovery and capital gain — where the redemption is substantially disproportionate, completely terminates the shareholder's interest, is not essentially equivalent to a dividend, or is a partial liquidation. Failing every test makes the entire distribution a dividend to the extent of earnings and profits, with no basis offset. Family attribution rules apply throughout.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["distributions", "redemptions"],
    },
  ],

  "property-transactions-advanced-planning": [
    {
      question: "The installment method of reporting gain is unavailable for:",
      options: [
        { label: "A", text: "The sale of real property held for investment", isCorrect: false, rationale: "Investment real property is a classic installment sale candidate." },
        { label: "B", text: "The sale of inventory in the ordinary course of business, and for the recapture portion of gain", isCorrect: true, rationale: "Correct — dealer dispositions and depreciation recapture cannot be deferred under the installment method." },
        { label: "C", text: "Any sale where payments are received over more than one year", isCorrect: false, rationale: "That is the definition of an installment sale, not an exclusion." },
        { label: "D", text: "Sales to unrelated parties", isCorrect: false, rationale: "Sales to unrelated parties are the standard case; related-party sales face additional restrictions." },
      ],
      explanation: "The installment method spreads gain recognition over the years payments are received, deferring tax and potentially reducing the marginal rate. It is unavailable for dealer dispositions of inventory and for the portion of gain representing depreciation recapture, which must be recognized entirely in the year of sale even if no cash is received.",
      difficulty: "HARD",
      questionType: "EXCEPTION",
      tags: ["advanced planning", "installment sales"],
    },
    {
      question: "In a like-kind exchange between related parties, both parties must generally hold the exchanged property for at least:",
      options: [
        { label: "A", text: "6 months", isCorrect: false, rationale: "The required holding period is longer." },
        { label: "B", text: "2 years after the exchange, or the deferral is lost", isCorrect: true, rationale: "Correct — an early disposition by either party generally triggers recognition of the deferred gain." },
        { label: "C", text: "5 years", isCorrect: false, rationale: "Five years is not the related-party holding requirement for Section 1031." },
        { label: "D", text: "There is no holding requirement for related parties", isCorrect: false, rationale: "A specific related-party rule applies precisely to prevent basis shifting." },
      ],
      explanation: "Section 1031 imposes a two-year holding requirement on related-party exchanges. If either party disposes of the property within two years, the originally deferred gain is generally recognized. The rule prevents related parties from swapping to shift basis to an asset about to be sold, thereby reducing the gain on that sale.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["advanced planning", "related party exchanges"],
    },
    {
      question: "Qualified small business stock under Section 1202 may allow a non-corporate shareholder to:",
      options: [
        { label: "A", text: "Deduct the full cost of the stock when purchased", isCorrect: false, rationale: "No purchase deduction is available." },
        { label: "B", text: "Exclude a portion or all of the gain on sale, subject to holding period and statutory limits", isCorrect: true, rationale: "Correct — Section 1202 provides a gain exclusion for qualifying stock meeting the holding period requirement." },
        { label: "C", text: "Convert ordinary income into tax-exempt income annually", isCorrect: false, rationale: "The benefit applies to gain on disposition, not to annual income." },
        { label: "D", text: "Avoid all state and federal taxes on the investment", isCorrect: false, rationale: "State treatment varies and the federal exclusion is subject to limits." },
      ],
      explanation: "Section 1202 permits non-corporate shareholders to exclude gain on the sale of qualified small business stock in a domestic C corporation acquired at original issue, subject to a minimum holding period and caps based on the greater of a fixed dollar amount or a multiple of basis. It is one of the strongest arguments for the C corporation form for a startup.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["advanced planning", "QSBS"],
    },
  ],

  "multi-jurisdictional-and-international-basics": [
    {
      question: "Public Law 86-272 protects an out-of-state business from state NET INCOME tax when its only in-state activity is:",
      options: [
        { label: "A", text: "Owning and operating a warehouse in the state", isCorrect: false, rationale: "Maintaining property in the state exceeds the protected activities." },
        { label: "B", text: "Soliciting orders for tangible personal property that are approved and shipped from outside the state", isCorrect: true, rationale: "Correct — mere solicitation of orders for tangible goods is the protected activity." },
        { label: "C", text: "Providing installation and repair services in the state", isCorrect: false, rationale: "Services are not protected; the statute covers tangible personal property only." },
        { label: "D", text: "Employing personnel who approve orders within the state", isCorrect: false, rationale: "In-state order approval exceeds mere solicitation." },
      ],
      explanation: "Public Law 86-272 prevents a state from imposing net income tax where the taxpayer's only activity is soliciting orders for tangible personal property, approved and filled from outside the state. Its protection is narrow: it does not cover services, intangibles, or gross receipts taxes, and states increasingly assert that internet activity exceeds mere solicitation.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["state tax", "PL 86-272"],
    },
    {
      question: "In state apportionment, the sales factor generally measures:",
      options: [
        { label: "A", text: "The value of property owned in the state", isCorrect: false, rationale: "That is the property factor." },
        { label: "B", text: "The proportion of the taxpayer's total sales attributable to the state", isCorrect: true, rationale: "Correct — the sales factor assigns income based on the market where sales are made." },
        { label: "C", text: "Compensation paid to employees in the state", isCorrect: false, rationale: "That is the payroll factor." },
        { label: "D", text: "The number of days employees spend in the state", isCorrect: false, rationale: "Time in state is not an apportionment factor." },
      ],
      explanation: "Traditional apportionment used a three-factor formula of property, payroll, and sales. Most states have moved toward single sales factor apportionment, which shifts tax burden toward businesses selling into the state without a physical presence and away from those with in-state property and employees — a deliberate economic development incentive.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["state tax", "apportionment"],
    },
    {
      question: "The foreign tax credit is designed primarily to:",
      options: [
        { label: "A", text: "Eliminate US tax on all foreign source income", isCorrect: false, rationale: "The credit mitigates double taxation but does not exempt foreign income." },
        { label: "B", text: "Relieve double taxation of income taxed by both a foreign country and the United States", isCorrect: true, rationale: "Correct — the credit offsets US tax attributable to foreign source income already taxed abroad." },
        { label: "C", text: "Provide a refund of foreign taxes paid", isCorrect: false, rationale: "The credit reduces US tax; it is generally nonrefundable." },
        { label: "D", text: "Encourage taxpayers to relocate operations offshore", isCorrect: false, rationale: "The credit is a double-tax relief mechanism, not an incentive to relocate." },
      ],
      explanation: "Because the United States taxes its citizens and residents on worldwide income, foreign source income can be taxed twice. The foreign tax credit offsets US tax on that income, limited to the US tax attributable to foreign source income so it cannot shelter domestic income. Taxpayers may alternatively deduct foreign taxes, though the credit is usually more valuable.",
      difficulty: "HARD",
      questionType: "CONCEPTUAL",
      tags: ["international tax", "foreign tax credit"],
    },
  ],

  "tax-research-and-documentation": [
    {
      question: "Which source carries the greatest authoritative weight in tax research?",
      options: [
        { label: "A", text: "A private letter ruling issued to another taxpayer", isCorrect: false, rationale: "A PLR may be relied upon only by the taxpayer who requested it, though it indicates IRS thinking." },
        { label: "B", text: "The Internal Revenue Code", isCorrect: true, rationale: "Correct — the Code is the statute itself and is the highest authority below the Constitution." },
        { label: "C", text: "An article in a professional tax journal", isCorrect: false, rationale: "Journal articles are secondary sources with no authoritative weight." },
        { label: "D", text: "An IRS publication written for taxpayers", isCorrect: false, rationale: "IRS publications explain the law in plain language but are not substantial authority." },
      ],
      explanation: "The hierarchy runs from the Internal Revenue Code, through Treasury Regulations, then revenue rulings and procedures, then case law with weight varying by court. Private letter rulings bind only the requesting taxpayer, and IRS publications and journal articles are not substantial authority — a distinction that matters directly for penalty protection.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["tax research", "authority hierarchy"],
    },
    {
      question: "The distinction between primary and secondary tax authority is that secondary authority:",
      options: [
        { label: "A", text: "Is issued by the Treasury Department", isCorrect: false, rationale: "Treasury-issued guidance is primary authority." },
        { label: "B", text: "Explains and analyzes the law but is not itself the law, and cannot be cited as substantial authority", isCorrect: true, rationale: "Correct — secondary sources aid understanding but carry no authoritative weight." },
        { label: "C", text: "Always contradicts primary authority", isCorrect: false, rationale: "Secondary sources typically explain rather than contradict." },
        { label: "D", text: "Is binding on the courts", isCorrect: false, rationale: "Only primary authority can bind." },
      ],
      explanation: "Primary authority comprises the Code, regulations, administrative pronouncements, and case law. Secondary authority — treatises, journal articles, editorial services, and IRS publications — explains and locates primary sources but is never the basis for a filing position. Research findings should always be traced back to and cited from primary authority.",
      difficulty: "MEDIUM",
      questionType: "CONCEPTUAL",
      tags: ["tax research", "primary vs secondary"],
    },
    {
      question: "Adequate documentation of tax research supporting a filing position is important primarily because it:",
      options: [
        { label: "A", text: "Guarantees the position will survive IRS examination", isCorrect: false, rationale: "No documentation guarantees a favorable examination outcome." },
        { label: "B", text: "Evidences the authority relied upon and supports reasonable cause and good faith if the position is challenged", isCorrect: true, rationale: "Correct — contemporaneous documentation is central to penalty defense." },
        { label: "C", text: "Eliminates the need to disclose the position on the return", isCorrect: false, rationale: "Disclosure requirements are separate and may still apply." },
        { label: "D", text: "Transfers responsibility for the position to the client", isCorrect: false, rationale: "The preparer retains professional responsibility regardless of documentation." },
      ],
      explanation: "Contemporaneous documentation of the facts, issues, authorities consulted, analysis, and conclusion evidences the level of authority supporting the position and underpins a reasonable cause and good faith defense to accuracy-related and preparer penalties. Documentation created after a challenge arises carries far less weight.",
      difficulty: "MEDIUM",
      questionType: "APPLICATION",
      tags: ["tax research", "documentation"],
    },
  ],
};
