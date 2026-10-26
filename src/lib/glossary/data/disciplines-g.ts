import type { GlossaryTerm } from "../types";

/** BAR, ISC and TCP terms, seventh batch. */
export const disciplineTermsG: GlossaryTerm[] = [
  // BAR
  {
    slug: "common-size-financial-statements",
    term: "Common-size financial statements",
    section: "bar",
    topic: "financial-statement-analysis",
    definition:
      "Common-size financial statements show each line as a percentage of a base: total assets on the balance sheet and net sales on the income statement. This is also called vertical analysis.",
    takeaways: [
      "They make companies of different sizes easier to compare.",
      "Horizontal analysis instead compares the same line across periods, in amounts or percentage changes.",
      "A rising cost-of-sales percentage, for example, points to falling gross margins.",
    ],
    related: ["dupont-analysis", "inventory-turnover"],
    match: ["common-size", "common size", "vertical analysis", "horizontal analysis"],
  },
  {
    slug: "contingent-consideration",
    term: "Contingent consideration",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "Contingent consideration is an acquirer's obligation to transfer more consideration to the former owners if specified future events occur, such as an earnout based on future profits. It is recognized at fair value on the acquisition date as part of the consideration.",
    takeaways: [
      "If classified as a liability, it is remeasured at fair value each period, with changes in earnings.",
      "If classified as equity, it isn't remeasured.",
      "Later changes don't adjust goodwill unless they are measurement-period adjustments.",
    ],
    related: ["acquisition-method", "measurement-period", "goodwill"],
    match: ["contingent consideration", "earnout", "earn-out"],
  },
  {
    slug: "intercompany-bond-transactions",
    term: "Intercompany bond transactions",
    section: "bar",
    topic: "business-combinations-advanced",
    definition:
      "When one company in a consolidated group buys another member's bonds from outside investors, the consolidated statements treat the bonds as retired. The gain or loss on this constructive retirement is recognized in consolidated income in the year of purchase.",
    takeaways: [
      "The gain or loss is the bonds' carrying amount on the issuer's books minus the price the affiliate paid.",
      "The investment, the bonds payable and the related interest income and expense are eliminated.",
      "The individual companies recognize the gain or loss gradually through interest in later years.",
    ],
    related: ["consolidation-eliminations", "extinguishment-of-debt"],
    match: ["intercompany bond", "constructive retirement"],
  },
  {
    slug: "hedge-effectiveness",
    term: "Hedge effectiveness",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "To use hedge accounting, a hedge must be expected to be highly effective, meaning changes in the hedging instrument's value offset about 80% to 125% of changes in the hedged item, both at inception and on an ongoing basis.",
    takeaways: [
      "An initial quantitative test is required unless a method such as critical terms match or the shortcut method applies; later tests can be qualitative.",
      "The whole change in the hedging instrument is presented in the same income statement line as the hedged item.",
      "Ineffectiveness in a cash flow hedge isn't measured separately.",
    ],
    related: ["fair-value-hedge", "cash-flow-hedge", "interest-rate-swap"],
    match: ["highly effective", "effectiveness", "critical terms"],
  },
  {
    slug: "forward-contract",
    term: "Forward contract",
    section: "bar",
    topic: "derivatives-and-hedge-accounting",
    definition:
      "A forward contract is a private agreement to buy or sell an asset, such as a foreign currency, at a set price on a future date. It is customized and settled at the end of the term.",
    takeaways: [
      "Its fair value is usually zero at inception, so nothing is paid upfront.",
      "Futures contracts are standardized, traded on exchanges and settled daily.",
      "Forwards carry credit risk that the other party won't perform.",
    ],
    related: ["interest-rate-swap", "cash-flow-hedge", "foreign-currency-transaction-gain-or-loss"],
    match: ["forward", "futures"],
  },
  {
    slug: "other-postretirement-benefits",
    term: "Other postretirement benefits",
    section: "bar",
    topic: "employee-benefit-plan-accounting",
    definition:
      "Other postretirement benefits are benefits other than pensions, mainly retiree health care, that employees earn during service. They are accounted for much like defined benefit pensions.",
    takeaways: [
      "The obligation is attributed from the date of hire to the date the employee becomes fully eligible.",
      "The accumulated postretirement benefit obligation is the present value of benefits earned to date.",
      "Many plans are unfunded, so the balance sheet shows a liability for the full obligation.",
    ],
    related: ["projected-benefit-obligation", "net-periodic-pension-cost"],
    match: ["postretirement", "retiree health"],
  },
  {
    slug: "stock-appreciation-rights",
    term: "Stock appreciation rights",
    section: "bar",
    topic: "stock-compensation",
    definition:
      "Stock appreciation rights give an employee the increase in a company's share price over a set price, paid in cash or in shares, without the employee buying any stock.",
    takeaways: [
      "If settled in cash, they are liabilities remeasured at fair value each period until settled.",
      "If settled in shares, they are equity awards measured at grant-date fair value.",
      "Cost is recognized over the service period, with catch-up adjustments for liability awards.",
    ],
    related: ["grant-date-fair-value", "restricted-stock-unit", "graded-vesting"],
    match: ["appreciation right", "SAR"],
  },
  {
    slug: "loss-contracts",
    term: "Loss on a long-term contract",
    section: "bar",
    topic: "revenue-for-specific-industries",
    definition:
      "When the total estimated costs of a long-term contract, such as a construction contract, exceed its total revenue, the entire expected loss is recognized immediately, not spread over the remaining work.",
    takeaways: [
      "This applies whether revenue is recognized over time or at a point in time.",
      "If the contract is still profitable overall but less than before, the change is a catch-up adjustment, not a loss.",
      "Losses recognized in earlier years are reversed out when computing the current year's loss.",
    ],
    related: ["input-method", "performance-obligation"],
    match: ["loss contract", "anticipated loss", "construction", "onerous"],
  },
  {
    slug: "net-present-value",
    term: "Net present value",
    section: "bar",
    topic: "financial-forecasting-and-projections",
    definition:
      "Net present value is the present value of a project's future cash flows, discounted at the required rate of return, minus the initial investment. A project with a positive net present value adds value.",
    takeaways: [
      "The internal rate of return is the discount rate at which net present value is zero.",
      "Net present value assumes cash flows are reinvested at the discount rate.",
      "Depreciation matters only through its effect on tax cash flows.",
    ],
    example: "An investment of $100,000 returning $40,000 a year for 3 years at 10%: present value $99,474, so the net present value is −$526 and the project is rejected.",
    related: ["free-cash-flow", "sensitivity-analysis"],
    match: ["net present value", "internal rate of return", "discount rate"],
  },
  {
    slug: "budgetary-comparison-schedule",
    term: "Budgetary comparison schedule",
    section: "bar",
    topic: "governmental-fund-accounting",
    definition:
      "Governments present a budgetary comparison for the general fund and each major special revenue fund with a legally adopted budget, showing the original budget, the final budget and actual results on the budgetary basis.",
    takeaways: [
      "It is usually required supplementary information, though it can be presented as a basic statement.",
      "A variance column is encouraged but not required.",
      "Differences between the budgetary basis and the accounting basis must be reconciled.",
    ],
    related: ["encumbrance", "fund-balance", "required-supplementary-information"],
    match: ["budgetary comparison", "original budget", "final budget"],
  },
  // ISC
  {
    slug: "network-segmentation",
    term: "Network segmentation",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Network segmentation divides a network into separate zones, controlled by firewalls and access rules, so an attacker who gets into one part can't move freely to the rest.",
    takeaways: [
      "Sensitive systems, such as those holding payment card data, are kept in their own segment.",
      "Public-facing servers often sit in a separate zone between the internet and the internal network.",
      "Zero trust takes this further with microsegmentation around individual workloads.",
    ],
    related: ["firewall", "zero-trust", "least-privilege"],
    match: ["segmentation", "lateral movement"],
  },
  {
    slug: "public-key-infrastructure",
    term: "Public key infrastructure",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "A public key infrastructure (PKI) is the system of certificate authorities, digital certificates and policies that links public keys to verified identities, so people can trust whose key they are using.",
    takeaways: [
      "It underpins secure web connections and digital signatures.",
      "A certificate authority signs certificates; compromised or expired certificates are revoked or rejected.",
      "Private keys must be kept secret by their owners.",
    ],
    related: ["asymmetric-encryption", "digital-signature"],
    match: ["certificate", "public key"],
  },
  {
    slug: "single-sign-on",
    term: "Single sign-on",
    section: "isc",
    topic: "it-general-controls",
    definition:
      "Single sign-on lets a user sign in once with a central identity provider and then access many applications without signing in to each separately.",
    takeaways: [
      "It means fewer passwords and lets access be removed in one place when someone leaves.",
      "A stolen sign-on credential opens many systems, so it should be paired with multi-factor authentication.",
      "The identity provider becomes a critical system to protect and keep available.",
    ],
    related: ["multi-factor-authentication", "user-access-review", "least-privilege"],
    match: ["single sign-on", "identity provider"],
  },
  {
    slug: "malware",
    term: "Malware",
    section: "isc",
    topic: "security-fundamentals",
    definition:
      "Malware is malicious software, including viruses, which attach to files and spread when they run, worms, which spread on their own across networks, and trojans, which pose as legitimate software.",
    takeaways: [
      "Other types include spyware, keyloggers, rootkits and ransomware.",
      "Defenses include endpoint protection, patching, least privilege and user awareness training.",
      "Email attachments and links are the most common way in.",
    ],
    related: ["ransomware", "phishing", "patch-management"],
    match: ["malware", "virus", "worm", "trojan"],
  },
  {
    slug: "data-retention-and-disposal",
    term: "Data retention and disposal",
    section: "isc",
    topic: "data-management-and-governance",
    definition:
      "A data retention policy sets how long each type of record is kept, based on legal, regulatory and business needs, and how it is securely destroyed when that period ends.",
    takeaways: [
      "A legal hold suspends disposal of records relevant to litigation or an investigation.",
      "Secure disposal methods include shredding, degaussing and cryptographic erasure.",
      "Privacy laws require personal data not to be kept longer than needed.",
    ],
    related: ["data-classification", "data-minimization", "data-governance"],
    match: ["retention", "disposal", "legal hold"],
  },
  {
    slug: "privacy-by-design",
    term: "Privacy by design",
    section: "isc",
    topic: "privacy-frameworks",
    definition:
      "Privacy by design means building privacy protections into systems and processes from the start, with the most privacy-protective settings as the default, instead of adding them afterward.",
    takeaways: [
      "The European Union's data protection rules require data protection by design and by default.",
      "High-risk processing calls for a data protection impact assessment before it starts.",
      "Collecting only the data needed is a core principle.",
    ],
    related: ["data-minimization", "gdpr", "data-subject-rights"],
    match: ["privacy by design", "by default", "impact assessment"],
  },
  {
    slug: "incident-response-plan",
    term: "Incident response plan",
    section: "isc",
    topic: "incident-response",
    definition:
      "An incident response plan sets out how an organization handles a security incident, typically in phases: preparation, detection and analysis, containment, eradication, recovery, and lessons learned.",
    takeaways: [
      "It names roles, decision-makers and communication channels, including legal counsel and public relations.",
      "It includes regulatory and customer notification deadlines.",
      "Tabletop exercises test the plan before a real incident.",
    ],
    related: ["chain-of-custody", "business-continuity-plan", "security-information-and-event-management"],
    match: ["incident response", "containment", "eradication"],
  },
  {
    slug: "internet-of-things",
    term: "Internet of things",
    section: "isc",
    topic: "emerging-technology-considerations",
    definition:
      "The internet of things is the network of physical devices, such as sensors, cameras, smart meters and industrial equipment, that connect to the internet and exchange data.",
    takeaways: [
      "It gives real-time data, for example for tracking inventory or monitoring equipment.",
      "Devices often ship with default passwords and are hard to patch, widening the attack surface.",
      "They should be inventoried and kept on separate network segments.",
    ],
    related: ["network-segmentation", "patch-management"],
    match: ["internet of things", "connected device", "sensor"],
  },
  {
    slug: "fourth-party-risk",
    term: "Fourth-party risk",
    section: "isc",
    topic: "third-party-and-vendor-risk",
    definition:
      "Fourth-party risk is the risk arising from a vendor's own vendors, such as the cloud provider used by a payroll service, which the organization has no direct contract with.",
    takeaways: [
      "It is managed through contract terms requiring vendors to oversee and disclose their key subcontractors.",
      "Carve-out reports leave subservice organizations' controls outside the report's scope.",
      "Concentration risk arises when many vendors depend on the same provider.",
    ],
    related: ["carve-out-method", "inclusive-method", "service-level-agreement"],
    match: ["fourth-party", "fourth party", "subcontractor", "subservice"],
  },
  {
    slug: "soc-3-report",
    term: "SOC 3 report",
    section: "isc",
    topic: "soc-engagements",
    definition:
      "A System and Organization Controls (SOC) 3 report covers the same trust services criteria as a SOC 2 report, but is a short, general-use report without the detailed system description or the tests performed and their results.",
    takeaways: [
      "It can be shared freely, for example on the service organization's website.",
      "It is useful for marketing and reassurance, not for a user auditor's detailed reliance.",
      "SOC 2 reports, by contrast, are restricted to knowledgeable users.",
    ],
    related: ["soc-2-report", "trust-services-criteria", "type-1-and-type-2-reports"],
    match: ["SOC 3", "general use", "general-use"],
  },
  // TCP
  {
    slug: "domicile",
    term: "Domicile and state residency",
    section: "tcp",
    topic: "multi-jurisdictional-and-international-basics",
    definition:
      "A person's domicile is the state of their permanent home, where they intend to return. States tax residents on all their income and nonresidents only on income from sources in the state.",
    takeaways: [
      "Many states also treat someone as a statutory resident if they keep a home there and spend more than 183 days in the state.",
      "The state of residence usually gives a credit for tax paid to other states on the same income.",
      "Changing domicile takes actions such as moving the main home, driver's license and voter registration.",
    ],
    related: ["nexus", "apportionment", "pass-through-entity-tax"],
    match: ["domicile", "resident", "183 days"],
  },
  {
    slug: "consolidated-tax-return",
    term: "Consolidated tax return",
    section: "tcp",
    topic: "c-corporation-tax-compliance",
    definition:
      "An affiliated group of corporations, a parent and subsidiaries it owns at least 80% of by vote and value, can elect to file one consolidated federal income tax return.",
    takeaways: [
      "Losses of one member can offset income of others.",
      "Gains on transactions between members are deferred until the property leaves the group.",
      "Dividends between members are eliminated, and the election binds future years.",
    ],
    related: ["dividends-received-deduction", "section-332-liquidation", "net-operating-loss"],
    match: ["consolidated return", "affiliated group"],
  },
  {
    slug: "spousal-lifetime-access-trust",
    term: "Spousal lifetime access trust",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "A spousal lifetime access trust is an irrevocable trust one spouse creates for the other spouse (and often their descendants), using the creator's lifetime gift tax exemption to move assets out of both spouses' estates.",
    takeaways: [
      "The creator keeps indirect access to the assets through the beneficiary spouse.",
      "That access ends if the beneficiary spouse dies or the couple divorces.",
      "It is usually a grantor trust, so the creator pays tax on its income.",
    ],
    related: ["grantor-trust", "irrevocable-life-insurance-trust", "portability"],
    match: ["spousal lifetime", "SLAT"],
  },
  {
    slug: "qtip-trust",
    term: "QTIP trust",
    section: "tcp",
    topic: "estate-and-gift-tax-planning",
    definition:
      "A qualified terminable interest property (QTIP) trust gives a surviving spouse all its income for life, at least annually, and qualifies for the marital deduction if the executor elects it, while the first spouse decides who receives what is left.",
    takeaways: [
      "No one other than the surviving spouse can receive principal during that spouse's life.",
      "The assets are included in the surviving spouse's estate.",
      "It suits blended families who want to provide for a spouse but leave the remainder to children from an earlier marriage.",
    ],
    related: ["portability", "generation-skipping-transfer-tax", "step-up-in-basis"],
    match: ["QTIP", "terminable interest", "marital deduction"],
  },
  {
    slug: "nonqualified-deferred-compensation",
    term: "Nonqualified deferred compensation",
    section: "tcp",
    topic: "individual-tax-planning-strategies",
    definition:
      "Nonqualified deferred compensation lets an employee defer pay to a later year under an unfunded promise from the employer. If section 409A's rules are followed, it is taxed only when paid.",
    takeaways: [
      "Deferral elections must generally be made before the year the pay is earned, and payments allowed only on events such as separation or a fixed date.",
      "Breaking the rules makes the deferred amounts taxable at once, plus a 20% additional tax and interest.",
      "The employer deducts it when the employee includes it in income; Social Security and Medicare taxes usually apply when it vests.",
    ],
    related: ["reasonable-compensation", "incentive-stock-options"],
    match: ["deferred compensation", "409A"],
  },
  {
    slug: "s-corporation-termination",
    term: "S corporation termination",
    section: "tcp",
    topic: "s-corporation-planning",
    definition:
      "An S election ends if shareholders owning more than half the shares revoke it, if the corporation stops qualifying (for example, it gets an ineligible shareholder or a second class of stock), or after excess passive income for three years in a row.",
    takeaways: [
      "The passive income test applies only to a corporation with earnings and profits from its C corporation years, when passive income exceeds 25% of gross receipts.",
      "Once terminated, the corporation generally can't re-elect for 5 years without consent.",
      "Inadvertent terminations can sometimes be relieved by the Internal Revenue Service.",
    ],
    related: ["s-corporation-election", "built-in-gains-tax", "accumulated-adjustments-account"],
    match: ["termination", "revocation", "revoke"],
  },
  {
    slug: "partnership-liquidating-distribution",
    term: "Partnership liquidating distribution",
    section: "tcp",
    topic: "entity-distributions-and-liquidations",
    definition:
      "In a liquidating distribution, which ends a partner's interest, the partner recognizes gain only if money received exceeds outside basis, and recognizes a loss only if they receive nothing but money, receivables and inventory.",
    takeaways: [
      "Any other property received takes the partner's remaining outside basis, so no loss is recognized.",
      "Money includes the partner's share of partnership liabilities that is relieved.",
      "Hot assets can create ordinary income when the distribution is disproportionate.",
    ],
    example: "A partner with $50,000 outside basis receives $10,000 cash and land with a partnership basis of $25,000: the land takes a $40,000 basis.",
    related: ["nonliquidating-distribution", "outside-basis", "hot-assets"],
    match: ["liquidating distribution", "liquidation", "outside basis"],
  },
  {
    slug: "qualified-improvement-property",
    term: "Qualified improvement property",
    section: "tcp",
    topic: "property-transactions-advanced-planning",
    definition:
      "Qualified improvement property is an improvement to the interior of a nonresidential building made after the building was first placed in service. It is depreciated over 15 years and qualifies for bonus depreciation and section 179 expensing.",
    takeaways: [
      "Enlargements, elevators and escalators, and the building's internal structure are excluded.",
      "Without it, building improvements would be depreciated over 39 years.",
      "Cost segregation studies often identify it.",
    ],
    related: ["bonus-depreciation", "section-179", "cost-segregation"],
    match: ["qualified improvement", "interior", "15-year"],
  },
  {
    slug: "tax-research-process",
    term: "Tax research process",
    section: "tcp",
    topic: "tax-research-and-documentation",
    definition:
      "Tax research generally follows these steps: establish the facts, identify the issues, find the relevant authority, evaluate it, reach a conclusion and communicate it, usually in a memo to the file and a letter to the client.",
    takeaways: [
      "Primary authority includes the Code, regulations, court decisions and administrative rulings; secondary sources include treatises and articles.",
      "A citator shows whether a case or ruling is still good law.",
      "Changes in the facts can change the answer, so assumptions should be documented.",
    ],
    related: ["revenue-ruling", "substantial-authority", "private-letter-ruling"],
    match: ["research", "primary authority", "citator"],
  },
  {
    slug: "life-insurance-taxation",
    term: "Life insurance taxation",
    section: "tcp",
    topic: "personal-financial-planning",
    definition:
      "Death benefits from life insurance are generally excluded from the beneficiary's gross income, and growth in a policy's cash value is tax-deferred. If a policy is sold for value, though, proceeds above the buyer's cost become taxable.",
    takeaways: [
      "The transfer-for-value rule doesn't apply to transfers to the insured, a partner of the insured, a partnership with the insured as partner, or a corporation where the insured is a shareholder or officer.",
      "Proceeds are in the insured's estate if the insured held any incidents of ownership or transferred the policy within 3 years of death.",
      "Holding the policy in an irrevocable life insurance trust keeps it out of the estate.",
    ],
    related: ["irrevocable-life-insurance-trust", "gross-income"],
    match: ["life insurance", "death benefit", "transfer for value"],
  },
];
