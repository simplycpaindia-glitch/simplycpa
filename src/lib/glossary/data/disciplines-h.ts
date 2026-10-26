import type { GlossaryTerm } from "../types";

/** BAR, ISC and TCP terms, eighth batch. */
export const disciplineTermsH: GlossaryTerm[] = [
  // BAR
  {
    slug: "price-earnings-ratio",
    term: "Price-earnings ratio",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The price-earnings ratio is a company's market price per share divided by its earnings per share. It shows how much investors pay for each dollar of earnings.",
    takeaways: [
      "A high ratio usually reflects expectations of growth or low risk.",
      "Its inverse, earnings per share ÷ price, is the earnings yield.",
      "It is meaningless when earnings are negative.",
    ],
    example: "A share price of $60 and earnings per share of $4: the ratio is 15.",
    related: ["dupont-analysis", "basic-eps"],
    match: ["price-earnings", "price/earnings", "P/E"],
  },
  {
    slug: "degree-of-operating-leverage",
    term: "Degree of operating leverage",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "The degree of operating leverage measures how sensitive operating income is to changes in sales: the percentage change in operating income divided by the percentage change in sales, or contribution margin divided by operating income.",
    takeaways: [
      "Companies with high fixed costs have high operating leverage.",
      "High leverage magnifies profits when sales rise and losses when they fall.",
      "It is highest just above the break-even point.",
    ],
    example: "Contribution margin of $400,000 and operating income of $100,000: the degree is 4, so a 10% rise in sales lifts operating income 40%.",
    related: ["break-even-point", "times-interest-earned"],
    match: ["operating leverage", "contribution margin", "fixed costs"],
  },
  {
    slug: "change-in-ownership-without-loss-of-control",
    term: "Change in ownership without loss of control",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "When a parent buys more shares of a subsidiary or sells some shares but keeps control, the change is an equity transaction. No gain or loss is recognized; the noncontrolling interest's carrying amount is adjusted, with the difference in additional paid-in capital.",
    takeaways: [
      "Goodwill and the subsidiary's net assets aren't remeasured.",
      "When the parent loses control, it deconsolidates, recognizes a gain or loss, and remeasures any retained interest at fair value.",
      "Acquiring control in stages is a step acquisition.",
    ],
    related: ["noncontrolling-interest", "step-acquisition", "consolidation-eliminations"],
    match: ["without loss of control", "deconsolidat", "loses control"],
  },
  {
    slug: "option-contract",
    term: "Option contract",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "An option gives its holder the right, but not the obligation, to buy (a call) or sell (a put) an asset at a set strike price on or before a set date. The buyer pays a premium for the option.",
    takeaways: [
      "An option's value is its intrinsic value plus its time value.",
      "A purchased option limits the downside while keeping the upside, unlike a forward.",
      "Time value can be left out of the hedge effectiveness assessment.",
    ],
    related: ["forward-contract", "hedge-effectiveness", "grant-date-fair-value"],
    match: ["option", "call", "put", "strike price"],
  },
  {
    slug: "defined-contribution-plan",
    term: "Defined contribution plan",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "In a defined contribution plan, such as a 401(k) plan, the employer contributes a specified amount to each employee's individual account, and the retirement benefit depends on the contributions and investment returns.",
    takeaways: [
      "The employer's expense is the contribution required for the period.",
      "A liability arises only for required contributions not yet paid.",
      "Employees, not the employer, bear the investment risk.",
    ],
    related: ["projected-benefit-obligation", "net-periodic-pension-cost"],
    match: ["defined contribution", "401(k)"],
  },
  {
    slug: "employee-stock-purchase-plan",
    term: "Employee stock purchase plan",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "An employee stock purchase plan lets employees buy company shares, usually at a discount through payroll deductions. It is noncompensatory, with no expense, only if the discount is 5% or less, substantially all employees can take part, and it has no option features beyond a short enrollment period.",
    takeaways: [
      "A plan with a larger discount, such as 15%, is compensatory and the cost is recognized.",
      "Look-back features, buying at the lower of two dates' prices, make a plan compensatory.",
      "The tax rules for these plans are separate from the accounting rules.",
    ],
    related: ["grant-date-fair-value", "restricted-stock-unit"],
    match: ["stock purchase plan", "noncompensatory", "payroll deduction"],
  },
  {
    slug: "franchise-fees",
    term: "Franchise fees",
    section: "bar",
    topic: "revenue-for-specific-industries",
    definition:
      "A franchisor usually grants a license to its symbolic intellectual property, its brand and system, so an upfront franchise fee is recognized over the franchise term. Ongoing royalties based on the franchisee's sales are recognized as those sales occur.",
    takeaways: [
      "Distinct goods or services, such as equipment sold to the franchisee, are separate performance obligations.",
      "Private companies can elect to treat certain pre-opening services as distinct from the license.",
      "Advertising contributions are generally part of the license.",
    ],
    related: ["licenses-of-intellectual-property", "performance-obligation"],
    match: ["franchise", "royalt"],
  },
  {
    slug: "lessor-operating-lease",
    term: "Operating lease (lessor)",
    section: "bar",
    topic: "lease-accounting-lessor",
    definition:
      "In an operating lease, the lessor keeps the leased asset on its balance sheet and keeps depreciating it, and recognizes lease income on a straight-line basis over the lease term.",
    takeaways: [
      "Initial direct costs are deferred and expensed over the lease term.",
      "Variable payments are recognized as income when earned.",
      "It applies when none of the sales-type criteria are met and the lease isn't a direct financing lease.",
    ],
    related: ["sales-type-lease", "direct-financing-lease", "operating-lease"],
    match: ["operating lease", "lease income", "rental income"],
  },
  {
    slug: "payback-period",
    term: "Payback period",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "The payback period is the time it takes for a project's cash inflows to recover the initial investment. Shorter payback means less exposure to risk and faster return of cash.",
    takeaways: [
      "It ignores the time value of money and cash flows after the payback point.",
      "The discounted payback period uses discounted cash flows to address the first weakness.",
      "It is a measure of liquidity and risk, not of profitability.",
    ],
    example: "An investment of $100,000 returning $25,000 a year pays back in 4 years.",
    related: ["net-present-value", "free-cash-flow"],
    match: ["payback"],
  },
  {
    slug: "data-visualization",
    term: "Data visualization",
    section: "bar",
    topic: "data-analytics-for-accounting",
    definition:
      "Data visualization presents data in charts and graphs so patterns and outliers are easy to see. The chart should fit the question: line charts for trends over time, bar charts for comparing categories, scatter plots for relationships and histograms for distributions.",
    takeaways: [
      "Truncated axes and 3D effects can mislead readers about the size of differences.",
      "Dashboards combine several visualizations for monitoring.",
      "Fewer, clearly labeled elements usually communicate better.",
    ],
    related: ["types-of-data-analytics", "regression-analysis"],
    match: ["visualization", "chart", "dashboard"],
  },
  {
    slug: "measurable-and-available",
    term: "Measurable and available",
    section: "bar",
    topic: "governmental-fund-accounting",
    definition:
      "Under the modified accrual basis, governmental funds recognize revenue when it is measurable and available: collectible within the period or soon enough after it to pay the period's liabilities.",
    takeaways: [
      "For property taxes, available means collected within 60 days after year-end.",
      "Amounts measurable but not available are reported as deferred inflows of resources.",
      "Many governments use a similar period for other revenues and disclose it.",
    ],
    related: ["modified-accrual-basis", "deferred-inflows-of-resources", "fund-balance"],
    match: ["measurable and available", "available", "60 days"],
  },
  // ISC
  {
    slug: "encryption-in-transit-and-at-rest",
    term: "Encryption in transit and at rest",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Data in transit, moving across a network, is protected by encrypted connections such as secure web connections. Data at rest, stored on disks, databases or backups, is protected by encrypting the storage or the files.",
    takeaways: [
      "Encryption at rest protects lost or stolen laptops and drives.",
      "Data being processed (in use) is usually unencrypted, so access controls still matter.",
      "Either way, protecting the keys is critical.",
    ],
    related: ["symmetric-encryption", "public-key-infrastructure", "data-classification"],
    match: ["in transit", "at rest", "encrypt"],
  },
  {
    slug: "role-based-access-control",
    term: "Role-based access control",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Role-based access control grants system permissions to roles, such as accounts payable clerk, rather than to individuals, and users get access by being assigned to a role.",
    takeaways: [
      "It makes least privilege and segregation of duties easier to enforce and review.",
      "Roles should be designed so conflicting duties aren't combined in one role.",
      "Changing someone's job means changing their role, not editing many individual permissions.",
    ],
    related: ["least-privilege", "segregation-of-duties", "user-access-review"],
    match: ["role-based", "role based", "permissions"],
  },
  {
    slug: "social-engineering",
    term: "Social engineering",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Social engineering manipulates people, rather than technology, into revealing information or giving access. Techniques include phishing, pretexting (inventing a believable story), baiting and tailgating into secure areas.",
    takeaways: [
      "Attackers exploit trust, urgency, fear and helpfulness.",
      "Security awareness training and verification procedures are the main defenses.",
      "Tailgating is following an authorized person through a secure door.",
    ],
    related: ["phishing", "business-email-compromise", "multi-factor-authentication"],
    match: ["social engineering", "pretext", "tailgat"],
  },
  {
    slug: "business-email-compromise",
    term: "Business email compromise",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Business email compromise is a scam in which attackers use a hacked or spoofed email account of an executive or supplier to trick employees into wiring money or changing payment details.",
    takeaways: [
      "Requests are often urgent and ask for secrecy.",
      "Calling back on a known phone number to confirm payment changes is a key control.",
      "Dual approval for wires and new bank details reduces losses.",
    ],
    related: ["phishing", "social-engineering"],
    match: ["business email", "wire", "spoof"],
  },
  {
    slug: "insider-threat",
    term: "Insider threat",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "An insider threat is the risk that someone with legitimate access, such as an employee, contractor or partner, misuses it, whether on purpose or by mistake.",
    takeaways: [
      "Controls include least privilege, segregation of duties, monitoring and prompt removal of access when people leave.",
      "Data loss prevention tools can flag unusual downloads or transfers.",
      "Background checks and a culture of reporting concerns also help.",
    ],
    related: ["least-privilege", "data-loss-prevention", "user-access-review"],
    match: ["insider"],
  },
  {
    slug: "data-loss-prevention",
    term: "Data loss prevention",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Data loss prevention tools monitor and control sensitive data as it is used, stored and sent, to stop it leaving the organization through email, uploads, removable drives or printing.",
    takeaways: [
      "They rely on data classification and content rules, such as patterns that match card or identity numbers.",
      "They can block, encrypt or alert when a rule is triggered.",
      "Too many false positives lead users to work around them.",
    ],
    related: ["data-classification", "insider-threat", "tokenization"],
    match: ["data loss", "exfiltrat"],
  },
  {
    slug: "warm-and-cold-sites",
    term: "Warm and cold sites",
    section: "isc",
    topic: "incident-response",
    definition:
      "Recovery sites differ in readiness. A cold site provides space and power but no equipment, so recovery takes days or weeks; a warm site has some equipment and connections, so recovery is faster.",
    takeaways: [
      "A hot site is fully equipped with current data and can take over within hours or less.",
      "Faster recovery costs more, so the choice depends on the recovery time objective.",
      "Cloud-based recovery is now a common alternative.",
    ],
    related: ["hot-site", "recovery-time-objective", "business-continuity-plan"],
    match: ["cold site", "warm site", "recovery site"],
  },
  {
    slug: "electronic-data-interchange",
    term: "Electronic data interchange",
    section: "isc",
    topic: "information-systems-fundamentals",
    definition:
      "Electronic data interchange (EDI) is the computer-to-computer exchange of business documents, such as purchase orders and invoices, between companies in a standard format, without paper.",
    takeaways: [
      "It speeds up processing and reduces data entry errors.",
      "Controls include authenticating trading partners, encrypting transmissions and checking messages for completeness.",
      "With less paper, audit evidence is mostly electronic.",
    ],
    related: ["application-programming-interface", "three-way-match", "input-validation-controls"],
    match: ["EDI", "data interchange"],
  },
  {
    slug: "master-data-management",
    term: "Master data management",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "Master data is the core reference data an organization's systems share, such as customer, vendor, product and employee records. Master data management keeps it accurate, consistent and controlled.",
    takeaways: [
      "Changes to master data, such as a vendor's bank account, need authorization and review.",
      "Duplicate vendor or customer records can hide fraud or errors.",
      "Transaction data refers to master data, so errors spread across many transactions.",
    ],
    related: ["data-governance", "enterprise-resource-planning", "business-email-compromise"],
    match: ["master data", "vendor master", "master file"],
  },
  {
    slug: "application-programming-interface",
    term: "Application programming interface",
    section: "isc",
    topic: "information-systems-fundamentals",
    definition:
      "An application programming interface (API) is a defined way for one software system to request data or services from another, such as a bank feed sending transactions to accounting software.",
    takeaways: [
      "APIs automate data transfers that would otherwise be manual.",
      "They need authentication, authorization and encryption, because they expose data directly.",
      "Monitoring for failed or incomplete transfers protects data completeness.",
    ],
    related: ["electronic-data-interchange", "enterprise-resource-planning"],
    match: ["API", "programming interface", "integration"],
  },
  {
    slug: "system-conversion-methods",
    term: "System conversion methods",
    section: "isc",
    topic: "systems-development-life-cycle",
    definition:
      "System conversion methods are ways to switch from an old system to a new one: direct (cutover) conversion all at once, parallel running of both systems, pilot conversion at one location first, and phased conversion module by module.",
    takeaways: [
      "Parallel conversion is safest because results can be compared, but it is the most costly.",
      "Direct conversion is cheapest and riskiest.",
      "Data conversion must be checked for completeness and accuracy, for example with control totals.",
    ],
    related: ["systems-development-life-cycle", "change-management"],
    match: ["parallel", "pilot", "phased", "cutover", "conversion"],
  },
  {
    slug: "continuous-auditing",
    term: "Continuous auditing",
    section: "isc",
    topic: "it-audit-and-advisory",
    definition:
      "Continuous auditing uses automated tools to test transactions and controls frequently or in near real time, rather than periodically, and to flag exceptions for follow-up.",
    takeaways: [
      "Continuous monitoring is the related process performed by management.",
      "It depends on reliable access to data and well-designed rules.",
      "Exceptions must be investigated promptly to add value.",
    ],
    related: ["computer-assisted-audit-techniques", "audit-data-analytics"],
    match: ["continuous audit", "continuous monitoring", "real time"],
  },
  // TCP
  {
    slug: "home-office-deduction",
    term: "Home office deduction",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "A self-employed person can deduct expenses for part of a home used regularly and exclusively as the principal place of business, or to meet clients. Employees can't, because unreimbursed employee expenses are no longer deductible.",
    takeaways: [
      "The simplified method allows $5 per square foot for up to 300 square feet ($1,500).",
      "Under the regular method, the deduction can't exceed the business's income, with the excess carried forward.",
      "Depreciation claimed on the office is taxed on sale of the home and isn't covered by the home sale exclusion.",
    ],
    related: ["home-sale-exclusion", "unrecaptured-section-1250-gain", "self-employment-tax"],
    match: ["home office", "exclusive use", "principal place of business"],
  },
  {
    slug: "coverdell-education-savings-account",
    term: "Coverdell education savings account",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "A Coverdell education savings account allows nondeductible contributions of up to $2,000 a year per beneficiary. Earnings are tax-free if used for qualified education expenses, including elementary and secondary school costs.",
    takeaways: [
      "The contribution limit phases out at higher levels of the contributor's modified adjusted gross income.",
      "Contributions must stop at age 18, and the account generally must be used by age 30, except for special-needs beneficiaries.",
      "Section 529 plans have much higher contribution limits.",
    ],
    related: ["section-529-plan", "american-opportunity-credit"],
    match: ["Coverdell", "education savings"],
  },
  {
    slug: "able-account",
    term: "ABLE account",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "An Achieving a Better Life Experience (ABLE) account is a tax-advantaged savings account for a person whose disability began before age 26. Earnings are tax-free when used for qualified disability expenses.",
    takeaways: [
      "Annual contributions from all sources are generally limited to the gift tax annual exclusion.",
      "From 2026, the age of onset limit rises to 46.",
      "Up to $100,000 in the account is ignored for Supplemental Security Income eligibility.",
    ],
    related: ["section-529-plan", "gift-tax-annual-exclusion"],
    match: ["ABLE", "disability"],
  },
  {
    slug: "inherited-ira-ten-year-rule",
    term: "Inherited retirement account 10-year rule",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "Most non-spouse beneficiaries who inherit a retirement account from an owner who died after 2019 must withdraw the whole balance by the end of the 10th year after the year of death.",
    takeaways: [
      "Eligible designated beneficiaries, such as a surviving spouse, a minor child of the owner, or a disabled or chronically ill person, can stretch withdrawals over their life.",
      "If the owner had already started required distributions, the beneficiary must also take annual distributions in years 1 to 9.",
      "Spreading withdrawals over the 10 years can avoid pushing income into high brackets.",
    ],
    related: ["required-minimum-distribution", "traditional-ira", "roth-ira"],
    match: ["10-year rule", "inherited", "beneficiar"],
  },
  {
    slug: "sep-ira",
    term: "SEP plan",
    section: "tcp",
    topic: "retirement-planning-strategies",
    definition:
      "A simplified employee pension (SEP) plan lets an employer, including a self-employed person, contribute up to 25% of each employee's compensation to their individual retirement accounts, up to an annual dollar limit.",
    takeaways: [
      "For a self-employed person, the effective limit is 20% of net self-employment earnings.",
      "The same percentage must be contributed for all eligible employees.",
      "It can be set up and funded as late as the return due date, including extensions, and needs no annual filing.",
    ],
    related: ["solo-401k", "traditional-ira", "self-employment-tax"],
    match: ["SEP", "simplified employee pension"],
  },
  {
    slug: "intentionally-defective-grantor-trust",
    term: "Intentionally defective grantor trust",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "An intentionally defective grantor trust is an irrevocable trust drafted so its assets are outside the grantor's estate, while the grantor is still treated as the owner for income tax, for example by keeping a power to swap assets.",
    takeaways: [
      "The grantor pays the trust's income tax, which is effectively an extra tax-free gift to the beneficiaries.",
      "Selling assets to the trust for a note isn't a taxable sale, because the grantor is selling to themselves for income tax.",
      "Assets in the trust don't get a step-up in basis at the grantor's death.",
    ],
    related: ["grantor-trust", "grantor-retained-annuity-trust", "step-up-in-basis"],
    match: ["defective grantor", "swap power", "IDGT"],
  },
  {
    slug: "dynasty-trust",
    term: "Dynasty trust",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "A dynasty trust is a long-term trust, often in a state that limits or has abolished the rule against perpetuities, designed to pass assets to several generations without estate, gift or generation-skipping transfer tax at each generation.",
    takeaways: [
      "The grantor allocates generation-skipping transfer tax exemption to it.",
      "Beneficiaries usually get distributions at the trustee's discretion, which also protects assets from creditors.",
      "It is often set up as a grantor trust so it grows without paying income tax.",
    ],
    related: ["generation-skipping-transfer-tax", "grantor-trust", "unified-credit"],
    match: ["dynasty", "perpetuities", "multiple generations"],
  },
  {
    slug: "self-employment-tax-for-partners",
    term: "Self-employment tax for partners",
    section: "tcp",
    topic: "partnership-planning",
    definition:
      "General partners pay self-employment tax on their share of a partnership's trade or business income plus guaranteed payments. Limited partners pay it only on guaranteed payments for services they perform.",
    takeaways: [
      "Courts look at what a limited partner actually does, not just the label, so active owners may not qualify for the exception.",
      "Members of limited liability companies who manage the business are generally treated like general partners.",
      "Rental income and most investment income are excluded.",
    ],
    related: ["self-employment-tax", "guaranteed-payment", "reasonable-compensation"],
    match: ["self-employment", "limited partner"],
  },
  {
    slug: "double-taxation",
    term: "Double taxation",
    section: "tcp",
    topic: "entity-choice-and-structuring",
    definition:
      "A C corporation's income is taxed twice: at the corporate rate of 21% when earned, and again to shareholders when distributed as dividends. Pass-through entities, such as partnerships and S corporations, are taxed only once, at the owner level.",
    takeaways: [
      "Reasonable salaries, interest on shareholder loans and rent paid to shareholders are deductible, reducing the corporate-level tax.",
      "Retaining earnings delays the second tax but can trigger the accumulated earnings tax.",
      "Qualified dividends are taxed at up to 20%, plus the 3.8% net investment income tax.",
    ],
    related: ["reasonable-compensation", "accumulated-earnings-tax", "qualified-dividends"],
    match: ["double tax", "two levels", "C corporation"],
  },
  {
    slug: "asset-versus-stock-sale",
    term: "Asset sale versus stock sale",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "Buyers of a business usually prefer to buy its assets, for a stepped-up basis to depreciate and to avoid hidden liabilities. Sellers of a C corporation usually prefer to sell stock, to avoid a corporate-level tax and get capital gain.",
    takeaways: [
      "Section 338(h)(10) and 336(e) elections let a stock purchase be treated as an asset purchase for tax.",
      "In an asset sale, the price is allocated among the asset classes, which affects the character of the seller's gain.",
      "S corporation and partnership sellers are taxed once either way, but the character of income can differ.",
    ],
    related: ["complete-liquidation", "built-in-gains-tax", "hot-assets"],
    match: ["asset sale", "stock sale", "338"],
  },
  {
    slug: "foreign-earned-income-exclusion",
    term: "Foreign earned income exclusion",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "United States citizens and residents who live and work abroad can exclude foreign earned income up to an annual limit ($130,000 for 2025) if their tax home is abroad and they meet the bona fide residence or physical presence test.",
    takeaways: [
      "The physical presence test requires 330 full days abroad in a 12-month period.",
      "A housing exclusion or deduction can also apply.",
      "Foreign tax credit isn't allowed on excluded income, and remaining income is taxed at the rates that would apply without the exclusion.",
    ],
    related: ["foreign-tax-credit", "controlled-foreign-corporation", "domicile"],
    match: ["foreign earned income", "physical presence", "bona fide resident"],
  },
  {
    slug: "statements-on-standards-for-tax-services",
    term: "Statements on Standards for Tax Services",
    section: "tcp",
    topic: "tax-research-and-documentation",
    definition:
      "The Statements on Standards for Tax Services are the American Institute of Certified Public Accountants' enforceable standards for members' tax practice, covering tax return positions, answers to return questions, use of estimates, knowledge of errors and giving advice.",
    takeaways: [
      "When a member learns of an error in a prior return, they tell the taxpayer promptly and recommend corrective action, but don't tell the tax authority without permission.",
      "Estimates can be used when records aren't available, if they are reasonable.",
      "A member should make a reasonable effort to answer all questions on a return.",
    ],
    related: ["circular-230", "substantial-authority", "preparer-penalties"],
    match: ["Standards for Tax Services", "SSTS"],
  },
];
