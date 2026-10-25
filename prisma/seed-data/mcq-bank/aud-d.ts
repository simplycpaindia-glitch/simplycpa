import type { McqBank } from "./types";
import { mcq } from "./build";

/** AUD questions on PCAOB QC 1000, testable from January 1, 2027. */
export const audBankD: McqBank = {
  "engagement-acceptance-and-quality-management": [
    mcq(
      "Under PCAOB QC 1000, as of what date must a registered firm evaluate its system of quality control each year, and how is the evaluation reported?",
      [
        ["December 31, in the firm's annual report to clients", "The evaluation date and reporting channel are set by the standard, not the calendar year-end."],
        ["September 30, reported to the PCAOB on Form QC by November 30", "Correct — the annual evaluation is as of September 30, with Form QC due by November 30."],
        ["June 30, reported only in the firm's peer review", "PCAOB-registered firms are inspected by the PCAOB; QC 1000 requires its own annual report."],
        ["Any date the firm chooses, with no report required", "That flexibility applies to the evaluation date under SQMS No. 1, not QC 1000."],
      ],
      1,
      "QC 1000 requires firms to evaluate their quality control system as of September 30 each year and report the evaluation to the Public Company Accounting Oversight Board on Form QC by November 30. The principal executive officer and the individual with operational responsibility for the system certify it. SQMS No. 1 also requires an annual evaluation but leaves the date to the firm.",
      "MEDIUM",
      "CONCEPTUAL",
      ["QC 1000", "quality management"],
    ),
    mcq(
      "Under PCAOB QC 1000, who has ultimate responsibility and accountability for a firm's system of quality control?",
      [
        ["The engagement partner on each audit", "Engagement partners are responsible for quality on their own engagements, not the firm's whole system."],
        ["The firm's external quality control function", "That function adds independent oversight but doesn't hold ultimate responsibility."],
        ["The firm's principal executive officer (or equivalent)", "Correct — QC 1000 assigns ultimate responsibility and accountability to the principal executive officer."],
        ["The PCAOB inspection team", "Inspectors evaluate firms; they aren't responsible for a firm's system."],
      ],
      2,
      "QC 1000 assigns ultimate responsibility and accountability for the quality control system to the firm's principal executive officer. It also requires named individuals with operational responsibility for the system as a whole, for ethics and independence, and for the monitoring and remediation process.",
      "EASY",
      "CONCEPTUAL",
      ["QC 1000", "governance and leadership"],
    ),
    mcq(
      "Which firms does PCAOB QC 1000 require to have an external quality control function?",
      [
        ["Every registered firm", "The requirement applies only to the largest firms."],
        ["Firms that issued audit reports for more than 100 issuers in the prior calendar year", "Correct — the external quality control function is required for firms above that threshold."],
        ["Firms that failed their most recent peer review", "The requirement is based on the number of issuer audits, not inspection results."],
        ["Only firms with offices outside the United States", "Location doesn't determine the requirement."],
      ],
      1,
      "Firms that issued audit reports for more than 100 issuers during the prior calendar year must have an external quality control function: at least one person who is independent of the firm and adds outside judgment to the firm's oversight of its quality control system. Smaller firms don't need one.",
      "HARD",
      "CONCEPTUAL",
      ["QC 1000", "governance and leadership"],
    ),
    mcq(
      "A CPA firm audits both private companies and SEC-registered public companies. Which quality standards govern its systems from December 15, 2026?",
      [
        ["Only SQMS No. 1, for all its audits", "Public company audits are subject to PCAOB standards."],
        ["Only QC 1000, for all its audits", "Audits of private companies follow AICPA standards."],
        ["Neither; quality management is optional", "Both standards are mandatory in their scope."],
        ["SQMS No. 1 for its AICPA engagements and QC 1000 for its engagements under PCAOB standards", "Correct — each standard covers the engagements performed under its standard-setter's rules."],
      ],
      3,
      "SQMS No. 1, issued by the American Institute of Certified Public Accountants, applies to firms performing engagements under AICPA standards, such as audits of private companies. QC 1000, issued by the Public Company Accounting Oversight Board, applies to registered firms' engagements under PCAOB standards, such as audits of issuers. A firm that does both must meet both; the two share the same eight components, which makes one integrated system practical.",
      "MEDIUM",
      "APPLICATION",
      ["QC 1000", "SQMS No. 1"],
    ),
  ],
};
