import type { SubjectSeed } from "./types";

const shellTopics: { slug: string; title: string; shortDescription: string; area: string }[] = [
  { slug: "information-security-fundamentals", title: "Information Security Fundamentals", shortDescription: "Confidentiality, integrity, and availability, and common threat types.", area: "Information Systems" },
  { slug: "data-management-and-governance", title: "Data Management & Governance", shortDescription: "Data lifecycle, data quality, and governance frameworks.", area: "Data Management" },
  { slug: "soc-engagements", title: "SOC Engagements", shortDescription: "SOC 1 vs SOC 2 reports, trust services criteria, and Type I vs Type II.", area: "IT Audit & Advisory" },
  { slug: "business-process-automation", title: "Business Process Automation", shortDescription: "RPA, workflow automation, and control considerations for automated processes.", area: "Information Systems" },
  { slug: "systems-development-life-cycle", title: "Systems Development Life Cycle", shortDescription: "SDLC phases and change management controls.", area: "Information Systems" },
  { slug: "third-party-and-vendor-risk", title: "Third-Party & Vendor Risk", shortDescription: "Evaluating cloud providers and outsourced service organizations.", area: "IT Audit & Advisory" },
  { slug: "data-analytics-techniques", title: "Data Analytics Techniques", shortDescription: "Using data analytics for continuous auditing and anomaly detection.", area: "Data Management" },
  { slug: "emerging-technology-considerations", title: "Emerging Technology Considerations", shortDescription: "AI, blockchain, and their control and audit implications.", area: "Information Systems" },
  { slug: "it-audit-standards", title: "IT Audit Standards", shortDescription: "Applying professional standards specifically to IT audit engagements.", area: "IT Audit & Advisory" },
  { slug: "business-continuity-and-disaster-recovery", title: "Business Continuity & Disaster Recovery", shortDescription: "BCP/DRP planning and the controls that support system availability.", area: "Information Systems" },
  { slug: "privacy-frameworks", title: "Privacy Frameworks", shortDescription: "Data privacy regulations and their implications for controls testing.", area: "Data Management" },
];

export const isc: SubjectSeed = {
  slug: "isc",
  name: "Information Systems and Controls",
  shortName: "ISC",
  type: "DISCIPLINE",
  description:
    "ISC sits at the intersection of auditing and IT — information systems, data management, and IT audit/advisory including SOC engagements. It fits candidates interested in IT audit, risk, and controls, especially those already working adjacent to technology risk.",
  difficulty: "MEDIUM",
  estimatedHours: 80,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/isc-cpa-exam-blueprint",
  order: 5,
  topics: [
    {
      slug: "it-general-controls",
      title: "IT General Controls (ITGCs)",
      shortDescription: "The four ITGC categories that support reliance on automated application controls.",
      blueprintArea: "Information Systems",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 1,
      studyMaterialHtml: `
<h2>Why ITGCs matter</h2>
<p>Application controls (e.g., a three-way match in the AP system) are only as reliable as the IT environment they run in. IT General Controls (ITGCs) are the foundation that makes it safe to rely on automated controls at all — if ITGCs are weak, auditors generally can't rely on <em>any</em> automated control in that system, no matter how well-designed it looks on paper.</p>

<h3>Four ITGC categories</h3>
<table>
<thead><tr><th>Category</th><th>What it covers</th></tr></thead>
<tbody>
<tr><td>Access controls</td><td>Who can get into the system and what they can do once inside (authentication, authorization, segregation of duties enforced by role-based access)</td></tr>
<tr><td>Change management</td><td>How changes to programs/configurations are requested, tested, approved, and moved to production</td></tr>
<tr><td>Program development / SDLC</td><td>Controls over building and implementing new systems</td></tr>
<tr><td>IT operations</td><td>Job scheduling, backup and recovery, incident management</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Access controls are typically the highest-risk ITGC category on the exam — questions often describe excessive or unreviewed access (e.g., a developer with production database write access) as the control gap to identify.</p></div>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company's IT department can push code changes directly to production without independent testing or approval. This is a <strong>change management</strong> deficiency — it creates risk that unauthorized or untested changes (including changes that manipulate financial data) reach the live system.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "General" controls support the whole IT environment; "application" controls are specific to one system/process (e.g., a three-way match, an edit check on a data-entry field). If ITGCs fail, don't assume the specific application control still works as designed.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>4 ITGC categories: Access, Change management, Program development/SDLC, IT operations</li>
<li>Weak ITGCs undermine reliance on <em>all</em> automated application controls in that system</li>
<li>Access controls = highest-risk category typically tested</li>
<li>General controls (environment-wide) ≠ application controls (process-specific)</li>
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
