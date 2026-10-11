import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";

/**
 * Information Systems and Controls (ISC) explainers. Sources: NIST (US Department of
 * Commerce), the SEC, PCAOB and the AICPA blueprints.
 */

const AICPA_BLUEPRINTS: [string, string] = [
  "AICPA & CIMA — CPA Exam Blueprints (ISC)",
  "https://www.aicpa-cima.com/resources/article/learn-what-is-tested-on-the-cpa-exam",
];
const NIST_CSF: [string, string] = [
  "NIST — Cybersecurity Framework (CSF) 2.0",
  "https://www.nist.gov/cyberframework",
];
const NIST_GLOSSARY: [string, string] = [
  "NIST Computer Security Resource Center — Glossary",
  "https://csrc.nist.gov/glossary",
];

export const iscPosts: BlogSeed[] = [
  {
    slug: "data-analytics-for-accountants-descriptive-predictive-prescriptive",
    title: "Data Analytics for Accountants: Descriptive vs Predictive vs Prescriptive",
    category: "Information Systems",
    excerpt:
      "The four types of analytics with accounting examples, the analytics workflow from question to visualisation, data quality, and how analytics shows up in BAR, ISC and AUD.",
    crux: [
      "Descriptive: What happened? — summaries, dashboards, ageing reports.",
      "Diagnostic: Why did it happen? — drill-downs, variance analysis, correlations.",
      "Predictive: What will happen? — forecasting, regression, credit-risk scoring.",
      "Prescriptive: What should we do? — optimisation and recommendations, such as inventory reorder points.",
      "Garbage in, garbage out: Analytics are only as good as the data's completeness, accuracy, consistency and timeliness — which is why data governance matters.",
    ],
    content: `
<h2>The four types of analytics</h2>
<table>
<thead><tr><th>Type</th><th>Question</th><th>Accounting example</th><th>Typical techniques</th></tr></thead>
<tbody>
<tr><td>Descriptive</td><td>What happened?</td><td>Monthly sales by region; accounts receivable ageing</td><td>Aggregation, summary statistics, dashboards</td></tr>
<tr><td>Diagnostic</td><td>Why did it happen?</td><td>Why gross margin fell in Q3 — mix, price or cost?</td><td>Drill-down, variance analysis, correlation</td></tr>
<tr><td>Predictive</td><td>What is likely to happen?</td><td>Cash flow forecast; probability that a customer defaults</td><td>Regression, time-series forecasting, classification models</td></tr>
<tr><td>Prescriptive</td><td>What should we do about it?</td><td>Optimal reorder quantity; which customers to offer early-payment discounts</td><td>Optimisation, simulation, decision rules</td></tr>
</tbody>
</table>
<p>Complexity — and value — generally increase from descriptive to prescriptive.</p>

<h2>The analytics workflow</h2>
<ol>
<li><strong>Ask the question</strong> — what decision will the analysis support?</li>
<li><strong>Get the data</strong> — identify sources; extract, transform and load (ETL) it into a usable form.</li>
<li><strong>Prepare the data</strong> — clean duplicates, missing values and inconsistent formats; validate totals against the ledger.</li>
<li><strong>Analyse</strong> — apply the right technique.</li>
<li><strong>Communicate</strong> — visualise and explain the result to the decision-maker.</li>
</ol>

<h2>Choosing a visualisation</h2>
<ul>
<li><strong>Line chart</strong> — trends over time.</li>
<li><strong>Bar chart</strong> — comparing categories.</li>
<li><strong>Scatter plot</strong> — the relationship between two variables (for example, advertising spend vs sales).</li>
<li><strong>Histogram</strong> — the distribution of a single variable (for example, invoice amounts — useful for spotting unusual clusters).</li>
</ul>

<h2>Data quality dimensions</h2>
<ul>
<li><strong>Completeness</strong> — all records are present.</li>
<li><strong>Accuracy</strong> — values are correct.</li>
<li><strong>Consistency</strong> — the same data agrees across systems.</li>
<li><strong>Timeliness</strong> — data is current enough for the decision.</li>
<li><strong>Validity</strong> — data conforms to defined formats and rules.</li>
</ul>

<h2>Analytics in audit</h2>
<p>Auditors use analytics to test 100% of a population — for example, every journal entry posted on weekends, by unusual users or just below approval limits. PCAOB amendments to AS 1105 and AS 2301 on technology-assisted analysis (effective for fiscal years beginning on or after December 15, 2025) clarify the auditor's responsibilities when using such tools and when evaluating the reliability of the client's data.</p>

<div class="callout callout-tip">
<p><strong>Exam tip:</strong> If a question asks which analysis tells management what action to take, the answer is prescriptive. "Predict" questions are predictive — even if the model is simple.</p>
</div>

<p>Continue with <a href="/blog/database-management-data-governance-cpa-isc">database management and data governance</a>.</p>

${sources([AICPA_BLUEPRINTS, ["AICPA & CIMA — CPA Exam blueprint analytics definitions and valuation metrics", "https://www.aicpa-cima.com/resources/download/learn-what-is-tested-on-the-cpa-exam"], ["PCAOB — Amendments related to technology-assisted analysis (AS 1105 and AS 2301)", "https://pcaobus.org/oversight/standards/standard-setting-research-projects/amendments-related-to-certain-aspects-of-designing-and-performing-audit-procedures-that-involve-technology-assisted-data-analysis"]])}
`,
  },
  {
    slug: "it-general-controls-itgcs",
    title: "IT General Controls (ITGCs): Access, Change Management and Operations",
    category: "Information Systems",
    excerpt:
      "What ITGCs are, the four main domains with real control examples, how auditors test them, and what happens to reliance on automated controls when ITGCs fail.",
    crux: [
      "Definition: ITGCs are controls over the IT environment that support the continued, proper operation of applications and the integrity of data.",
      "Logical access: User provisioning and removal, periodic access reviews, privileged access restrictions and authentication (passwords, MFA).",
      "Change management: Changes to programs and configurations are requested, tested, approved and segregated from developers before going live.",
      "Computer operations: Job scheduling and monitoring, backups and recovery, and incident and problem management.",
      "Why auditors care: Ineffective ITGCs undermine reliance on automated controls and system reports for the whole period.",
    ],
    content: `
<h2>Why ITGCs matter</h2>
<p>Application controls — a three-way match, an approval limit, an automated calculation — only stay reliable if nobody can change the program or bypass it. IT general controls (ITGCs) provide that assurance across all applications that run on the same infrastructure. They're central to both the ISC Discipline and the AUD section, and to integrated audits under PCAOB AS 2201.</p>

<h2>The four domains with examples</h2>
<table>
<thead><tr><th>Domain</th><th>Risk</th><th>Example controls</th></tr></thead>
<tbody>
<tr><td>Logical access</td><td>Unauthorised users change data or programs</td><td>Access granted only with documented approval; leavers removed promptly; quarterly user access reviews by business owners; privileged (admin) accounts restricted and monitored; MFA; password policies</td></tr>
<tr><td>Program change management</td><td>Untested or unauthorised changes alter how applications process data</td><td>Change requests approved; testing and user acceptance sign-off; developers can't move their own code to production; emergency changes reviewed after the fact</td></tr>
<tr><td>Computer operations</td><td>Processing fails or data is lost</td><td>Batch job monitoring and error resolution; backups performed and restoration tested; incident management</td></tr>
<tr><td>Program development and acquisition</td><td>New systems don't work as intended</td><td>Project governance; testing and data conversion validation before go-live</td></tr>
</tbody>
</table>

<h2>Segregation of duties in IT</h2>
<p>Key incompatible roles include developer vs production migrator, security administrator vs end user, and database administrator vs application user with posting rights. Small IT teams often can't segregate fully, so they rely on compensating detective controls such as logging and independent review of changes.</p>

<h2>How auditors test ITGCs</h2>
<ul>
<li><strong>Access:</strong> select new hires and confirm approval; select leavers and confirm timely removal; inspect evidence of the periodic review; list privileged users and evaluate appropriateness.</li>
<li><strong>Change:</strong> obtain a system-generated list of changes (and test its completeness), select a sample, and inspect approvals and testing evidence; check that developers lack production access.</li>
<li><strong>Operations:</strong> inspect job failure logs and resolution; inspect evidence of backups and restoration tests.</li>
</ul>

<h2>When ITGCs fail</h2>
<p>If, for example, change management was ineffective for part of the year, the auditor can't assume an automated control worked consistently. Options include testing the automated control at multiple points, testing compensating controls, comparing program versions to show no change occurred, or increasing substantive testing. The deficiency is evaluated for severity — see <a href="/blog/coso-internal-control-framework">COSO deficiency levels</a>.</p>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> An ITGC deficiency doesn't automatically mean the financial statements are misstated. It means the auditor must obtain other evidence that the dependent application controls and reports worked.</p>
</div>

<p>Next: <a href="/blog/application-controls-vs-it-general-controls">application controls vs ITGCs</a> and <a href="/blog/testing-automated-controls-system-generated-reports">testing automated controls</a>. Study the topic in <a href="/cpa/isc/it-general-controls">ISC IT general controls</a>.</p>

${sources([AICPA_BLUEPRINTS, ["PCAOB — AS 2201, An Audit of Internal Control Over Financial Reporting", "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"], ["NIST — SP 800-53 Rev. 5, Security and Privacy Controls (access control and configuration management families)", "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"]])}
`,
  },
  {
    slug: "application-controls-vs-it-general-controls",
    title: "Application Controls vs IT General Controls: Practical Examples",
    category: "Information Systems",
    excerpt:
      "Input, processing and output controls inside applications, how they differ from ITGCs, IT-dependent manual controls, and examples from the order-to-cash and purchase-to-pay cycles.",
    crux: [
      "Application controls: Operate within a specific application over individual transactions — input, processing and output controls.",
      "ITGCs: Operate across the IT environment and support all applications — access, change management, operations.",
      "Relationship: ITGCs are the foundation; application controls can only be relied on if the ITGCs over that application are effective.",
      "IT-dependent manual controls: A person acts on a system-generated report (e.g. reviewing an exception report) — test both the review and the report.",
      "Preventive vs detective: Edit checks and approvals prevent errors; reconciliations and exception reports detect them.",
    ],
    content: `
<h2>The core distinction</h2>
<table>
<thead><tr><th></th><th>Application controls</th><th>IT general controls</th></tr></thead>
<tbody>
<tr><td>Scope</td><td>A specific application or business process</td><td>The IT environment as a whole</td></tr>
<tr><td>Focus</td><td>Completeness, accuracy, validity and authorisation of transactions</td><td>Integrity of programs, data and operations</td></tr>
<tr><td>Examples</td><td>Credit limit check, three-way match, automated depreciation calculation</td><td>User access reviews, change approval, backup monitoring</td></tr>
<tr><td>Typical owner</td><td>Business process owner</td><td>IT</td></tr>
</tbody>
</table>

<h2>Types of application controls</h2>
<h3>Input controls</h3>
<ul>
<li><strong>Field and format checks</strong> — dates must be valid; numeric fields reject letters.</li>
<li><strong>Validity checks</strong> — a vendor number must exist in the vendor master file.</li>
<li><strong>Limit and reasonableness checks</strong> — hours worked can't exceed 80 a week.</li>
<li><strong>Check digits</strong> — detect transposed account numbers.</li>
<li><strong>Completeness checks</strong> — required fields can't be left blank.</li>
<li><strong>Batch totals</strong> — record counts, financial totals and hash totals compared before and after input.</li>
</ul>
<h3>Processing controls</h3>
<ul>
<li>Automated calculations (pricing, tax, depreciation).</li>
<li>Run-to-run totals between processing stages.</li>
<li>Duplicate detection (e.g. the same invoice number from the same vendor).</li>
<li>Automated three-way match of purchase order, receiving report and invoice.</li>
</ul>
<h3>Output controls</h3>
<ul>
<li>Reconciling output totals to input or control totals.</li>
<li>Distributing reports only to authorised users.</li>
<li>Exception reports reviewed by management.</li>
</ul>

<h2>Examples by business cycle</h2>
<table>
<thead><tr><th>Cycle</th><th>Application control</th><th>Assertion addressed</th></tr></thead>
<tbody>
<tr><td>Order to cash</td><td>System blocks orders exceeding the customer's credit limit</td><td>Valuation of receivables</td></tr>
<tr><td>Order to cash</td><td>Invoice generated automatically from the shipping record</td><td>Completeness and occurrence of revenue</td></tr>
<tr><td>Purchase to pay</td><td>Payment released only after a three-way match within tolerance</td><td>Occurrence and accuracy of expenses</td></tr>
<tr><td>Payroll</td><td>Pay can't be processed for an employee not in the HR master file</td><td>Occurrence (no ghost employees)</td></tr>
<tr><td>Financial close</td><td>Journal entries above a threshold require system approval by a second person</td><td>Occurrence and accuracy</td></tr>
</tbody>
</table>

<h2>IT-dependent manual controls</h2>
<p>Many key controls combine a person and a report — a controller reviewing a system-generated list of credit memos, for instance. To rely on it, the auditor tests the manual review <em>and</em> the completeness and accuracy of the report it depends on.</p>

<div class="callout callout-example">
<p><strong>Exam-style scenario:</strong> An automated three-way match is configured correctly and tested once with satisfactory results. However, during the year the IT team could push configuration changes without approval. Can the auditor rely on the match for the full year?<br>
<strong>No — not without more work.</strong> The change management ITGC failed, so the configuration may have changed. The auditor needs evidence that it didn't (e.g. a review of configuration change logs) or must test the control at additional points in time.</p>
</div>

<p>See <a href="/blog/it-general-controls-itgcs">IT general controls explained</a> and <a href="/cpa/isc/business-process-automation">ISC business process automation</a>.</p>

${sources([AICPA_BLUEPRINTS, ["PCAOB — AS 2201, An Audit of Internal Control Over Financial Reporting", "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"], ["AICPA & CIMA — Statements on Auditing Standards (AU-C 315, IT controls)", "https://www.aicpa-cima.com/resources/download/aicpa-statements-on-auditing-standards-currently-effective"]])}
`,
  },
  {
    slug: "cybersecurity-risks-controls-cpa-isc",
    title: "Cybersecurity Risks and Controls for the CPA ISC Exam",
    category: "Information Systems",
    excerpt:
      "Common threats — phishing, ransomware, business email compromise, insiders, supply-chain attacks — the controls that address them, the NIST Cybersecurity Framework 2.0 and the SEC's cyber disclosure rules.",
    crux: [
      "Main threats: Phishing and social engineering, ransomware, business email compromise, malicious or careless insiders, unpatched vulnerabilities and third-party (supply chain) compromise.",
      "Layered controls: MFA, least privilege, patching, network segmentation, encryption, logging and monitoring, backups and security awareness training — no single control is enough.",
      "NIST CSF 2.0: Six functions — Govern, Identify, Protect, Detect, Respond, Recover.",
      "Control types: Preventive (stop), detective (find) and corrective (fix) — plus deterrent and compensating controls.",
      "SEC disclosure: Public companies must disclose a material cybersecurity incident on Form 8-K within four business days of determining it's material, and describe risk management and governance annually.",
    ],
    content: `
<h2>Common threats</h2>
<table>
<thead><tr><th>Threat</th><th>How it works</th><th>Key controls</th></tr></thead>
<tbody>
<tr><td>Phishing and social engineering</td><td>Tricks users into revealing credentials or running malware</td><td>Awareness training, email filtering, MFA</td></tr>
<tr><td>Ransomware</td><td>Encrypts data and demands payment</td><td>Offline/immutable backups, patching, endpoint detection, least privilege</td></tr>
<tr><td>Business email compromise</td><td>Impersonates an executive or supplier to redirect payments</td><td>Call-back verification of bank detail changes, dual approval of payments, MFA</td></tr>
<tr><td>Insider threats</td><td>Employees misuse access, maliciously or carelessly</td><td>Least privilege, access reviews, monitoring, segregation of duties</td></tr>
<tr><td>Unpatched vulnerabilities</td><td>Attackers exploit known software flaws</td><td>Vulnerability scanning, patch management</td></tr>
<tr><td>Supply-chain compromise</td><td>Attack through a vendor's software or access</td><td>Vendor risk assessment, SOC 2 reports, limiting vendor access</td></tr>
<tr><td>Denial of service</td><td>Overwhelms systems to make them unavailable</td><td>Traffic filtering, redundancy, capacity planning</td></tr>
</tbody>
</table>

<h2>Control categories</h2>
<ul>
<li><strong>Preventive</strong> — firewalls, MFA, encryption, access restrictions.</li>
<li><strong>Detective</strong> — intrusion detection, log monitoring, security information and event management (SIEM), reconciliations.</li>
<li><strong>Corrective</strong> — incident response, restoring from backup, patching after discovery.</li>
<li><strong>Deterrent</strong> — warning banners, visible monitoring.</li>
<li><strong>Compensating</strong> — alternative controls when the primary one isn't feasible.</li>
</ul>
<p>Controls can also be classified as administrative (policies, training), technical (logical) or physical (locks, badges). "Defense in depth" layers them so one failure doesn't expose everything.</p>

<h2>NIST Cybersecurity Framework 2.0</h2>
<p>Released in February 2024, CSF 2.0 organises cybersecurity outcomes into six functions:</p>
<ol>
<li><strong>Govern</strong> — strategy, roles, policy and oversight (new in 2.0).</li>
<li><strong>Identify</strong> — assets, risks and improvement.</li>
<li><strong>Protect</strong> — safeguards such as identity management, training, data security and platform security.</li>
<li><strong>Detect</strong> — finding and analysing possible attacks.</li>
<li><strong>Respond</strong> — acting on a detected incident.</li>
<li><strong>Recover</strong> — restoring assets and operations.</li>
</ol>

<h2>SEC cybersecurity disclosure rules</h2>
<ul>
<li><strong>Form 8-K, Item 1.05</strong> — disclose a material cybersecurity incident within four business days of determining it is material.</li>
<li><strong>Regulation S-K, Item 106</strong> — describe cybersecurity risk management, strategy and governance (including board oversight) in the annual report.</li>
</ul>

<h2>Incident response</h2>
<p>A typical incident response life cycle: preparation → detection and analysis → containment, eradication and recovery → post-incident activity (lessons learned). See <a href="/cpa/isc/incident-response">ISC incident response</a>.</p>

<div class="callout callout-tip">
<p><strong>Exam tip:</strong> MFA combines factors from different categories — something you know (password), have (token or phone) and are (biometric). Two passwords are not MFA.</p>
</div>

<p>Continue with <a href="/blog/information-security-confidentiality-integrity-availability">the CIA triad</a> and <a href="/cpa/isc/security-fundamentals">ISC security fundamentals</a>.</p>

${sources([NIST_CSF, ["US SEC — Cybersecurity Risk Management, Strategy, Governance, and Incident Disclosure (final rule)", "https://www.sec.gov/rules-regulations/2023/07/s7-09-22"], ["NIST — SP 800-61, Computer Security Incident Handling Guide", "https://csrc.nist.gov/pubs/sp/800/61/r3/final"], AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "information-security-confidentiality-integrity-availability",
    title: "Information Security: Confidentiality, Integrity and Availability",
    category: "Information Systems",
    excerpt:
      "The CIA triad as defined by NIST, the controls that protect each objective, FIPS 199 impact levels, and how the triad maps to the SOC 2 Trust Services Criteria.",
    crux: [
      "Confidentiality: Preventing unauthorised disclosure — encryption, access control, data classification.",
      "Integrity: Guarding against improper modification or destruction, including ensuring authenticity and non-repudiation — hashing, digital signatures, change controls.",
      "Availability: Ensuring timely and reliable access — redundancy, backups, capacity and DDoS protection.",
      "Impact levels: FIPS 199 rates the potential impact of a loss of each objective as low, moderate or high.",
      "Trade-offs: Stronger confidentiality controls can reduce availability (and vice versa) — security design is about balancing them by risk.",
    ],
    content: `
<h2>The three objectives</h2>
<p>US federal law (44 U.S.C. § 3552) and NIST's Federal Information Processing Standard (FIPS) 199 define the security objectives as:</p>
<table>
<thead><tr><th>Objective</th><th>Definition</th><th>Example of loss</th></tr></thead>
<tbody>
<tr><td><strong>Confidentiality</strong></td><td>Preserving authorised restrictions on information access and disclosure, including protecting personal privacy and proprietary information</td><td>Customer card data stolen</td></tr>
<tr><td><strong>Integrity</strong></td><td>Guarding against improper information modification or destruction, including ensuring non-repudiation and authenticity</td><td>An attacker changes a supplier's bank account in the vendor master file</td></tr>
<tr><td><strong>Availability</strong></td><td>Ensuring timely and reliable access to and use of information</td><td>Ransomware takes the ERP system down during the year-end close</td></tr>
</tbody>
</table>

<h2>Controls for each objective</h2>
<table>
<thead><tr><th>Confidentiality</th><th>Integrity</th><th>Availability</th></tr></thead>
<tbody>
<tr><td>
<ul>
<li>Encryption at rest and in transit</li>
<li>Role-based access, least privilege</li>
<li>Data classification and labelling</li>
<li>Data loss prevention tools</li>
<li>Secure disposal of media</li>
</ul>
</td><td>
<ul>
<li>Hashing and checksums</li>
<li>Digital signatures (authenticity and non-repudiation)</li>
<li>Input validation and edit checks</li>
<li>Change management</li>
<li>Audit logs</li>
</ul>
</td><td>
<ul>
<li>Redundant systems and failover</li>
<li>Backups and tested restoration</li>
<li>Capacity monitoring</li>
<li>DDoS protection</li>
<li>Business continuity and disaster recovery plans</li>
</ul>
</td></tr>
</tbody>
</table>

<h2>FIPS 199 impact levels</h2>
<ul>
<li><strong>Low</strong> — limited adverse effect on operations, assets or individuals.</li>
<li><strong>Moderate</strong> — serious adverse effect.</li>
<li><strong>High</strong> — severe or catastrophic adverse effect.</li>
</ul>
<p>Each system is categorised by the highest impact level across the three objectives (the "high-water mark"), which drives the baseline of controls selected from NIST SP 800-53.</p>

<h2>Encryption essentials</h2>
<ul>
<li><strong>Symmetric</strong> encryption uses one shared key — fast, used for bulk data (AES).</li>
<li><strong>Asymmetric</strong> encryption uses a public/private key pair — used for key exchange and digital signatures.</li>
<li>A <strong>digital signature</strong> is created with the sender's private key and verified with their public key, proving authenticity and integrity.</li>
<li>A <strong>hash</strong> is a one-way fingerprint — any change to the data changes the hash.</li>
</ul>

<h2>Link to SOC 2</h2>
<p>The AICPA Trust Services Criteria map closely to the triad: <em>security</em> (common criteria), <em>availability</em>, <em>processing integrity</em>, <em>confidentiality</em> and <em>privacy</em>. Privacy is related but distinct — it concerns the collection, use, retention and disposal of personal information according to commitments and law. See <a href="/blog/soc-1-vs-soc-2-reports">SOC 1 vs SOC 2</a>.</p>

<p>Study further in <a href="/cpa/isc/security-fundamentals">ISC security fundamentals</a> and <a href="/cpa/isc/privacy-frameworks">ISC privacy frameworks</a>.</p>

${sources([["NIST — FIPS 199, Standards for Security Categorization of Federal Information and Information Systems", "https://csrc.nist.gov/pubs/fips/199/final"], ["NIST — SP 800-53 Rev. 5, Security and Privacy Controls", "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"], NIST_GLOSSARY, ["AICPA & CIMA — 2017 Trust Services Criteria (with revised points of focus, 2022)", "https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022"]])}
`,
  },
  {
    slug: "database-management-data-governance-cpa-isc",
    title: "Database Management and Data Governance for CPA ISC",
    category: "Information Systems",
    excerpt:
      "Relational databases, keys and normalisation, basic SQL, data warehouses vs data lakes, data governance roles, the data life cycle and the controls that keep financial data reliable.",
    crux: [
      "Relational databases: Data is stored in tables (relations) linked by keys — a primary key identifies each record; a foreign key links to another table.",
      "Normalisation: Organising tables to reduce redundancy and anomalies; first, second and third normal forms are the ones to know.",
      "SQL: SELECT … FROM … WHERE … to query; JOIN to combine tables; GROUP BY with aggregates to summarise.",
      "Warehouses vs lakes: A data warehouse holds structured, cleaned data for reporting; a data lake holds raw data in any format.",
      "Governance: Data owners decide access and use, data stewards maintain quality and definitions, and custodians (usually IT) operate the storage and controls.",
    ],
    content: `
<h2>Relational database basics</h2>
<ul>
<li>A <strong>table</strong> stores one type of entity (customers, invoices). Rows are records; columns are attributes (fields).</li>
<li>A <strong>primary key</strong> uniquely identifies each row (customer ID).</li>
<li>A <strong>foreign key</strong> is a field that refers to the primary key of another table (customer ID on an invoice).</li>
<li><strong>Referential integrity</strong> means a foreign key must match an existing primary key — you can't post an invoice to a customer that doesn't exist.</li>
</ul>

<h2>Normalisation</h2>
<table>
<thead><tr><th>Normal form</th><th>Rule</th></tr></thead>
<tbody>
<tr><td>First (1NF)</td><td>Each field holds a single value; no repeating groups</td></tr>
<tr><td>Second (2NF)</td><td>1NF, and every non-key field depends on the whole primary key (no partial dependency)</td></tr>
<tr><td>Third (3NF)</td><td>2NF, and no non-key field depends on another non-key field (no transitive dependency)</td></tr>
</tbody>
</table>
<p>Normalisation prevents update, insert and delete anomalies — for example, a customer's address stored on every invoice would have to be changed in hundreds of places.</p>

<h2>SQL you should recognise</h2>
<div class="callout callout-example">
<p><code>SELECT c.customer_name, SUM(i.amount) AS total_billed<br>
FROM invoices i<br>
JOIN customers c ON i.customer_id = c.customer_id<br>
WHERE i.invoice_date BETWEEN '2026-01-01' AND '2026-12-31'<br>
GROUP BY c.customer_name<br>
HAVING SUM(i.amount) &gt; 100000;</code></p>
<p>This lists customers billed more than $100,000 in 2026. <code>WHERE</code> filters rows before grouping; <code>HAVING</code> filters groups after aggregation.</p>
</div>

<h2>Storage architectures</h2>
<table>
<thead><tr><th></th><th>Operational database (OLTP)</th><th>Data warehouse (OLAP)</th><th>Data lake</th></tr></thead>
<tbody>
<tr><td>Purpose</td><td>Process day-to-day transactions</td><td>Reporting and analysis</td><td>Store large volumes of raw data</td></tr>
<tr><td>Data</td><td>Current, normalised</td><td>Historical, cleaned, structured (often denormalised star schemas)</td><td>Structured, semi-structured and unstructured</td></tr>
<tr><td>Schema</td><td>Defined in advance</td><td>Defined in advance (schema-on-write)</td><td>Applied when read (schema-on-read)</td></tr>
</tbody>
</table>

<h2>Data governance</h2>
<ul>
<li><strong>Data owner</strong> — a business leader accountable for a data domain; approves access and use.</li>
<li><strong>Data steward</strong> — maintains definitions, quality rules and metadata day to day.</li>
<li><strong>Data custodian</strong> — usually IT; implements storage, backup and security controls.</li>
<li><strong>Master data management</strong> — one authoritative record for key entities (customers, vendors, products), with controlled changes.</li>
</ul>

<h2>The data life cycle</h2>
<p>Creation or capture → storage → use → sharing → archiving → destruction. Controls apply at each stage — for example, input validation at capture, encryption in storage, access control in use, retention schedules for archiving, and secure deletion at the end. Retention must also meet legal requirements (for US tax records, generally at least the period of limitations).</p>

<h2>Controls over financial data</h2>
<ul>
<li>Restrict direct database access — changes should go through the application, not straight into tables.</li>
<li>Log and review database administrator activity.</li>
<li>Control changes to master data (vendor bank details) with approval and review.</li>
<li>Reconcile data moved between systems (ETL) using record counts and totals.</li>
</ul>

<p>Study the full topic in <a href="/cpa/isc/data-management-and-governance">ISC data management and governance</a>.</p>

${sources([AICPA_BLUEPRINTS, NIST_GLOSSARY, ["NIST — SP 800-53 Rev. 5 (system and information integrity controls)", "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"]])}
`,
  },
  {
    slug: "cloud-computing-risks-controls-cpa-exam",
    title: "Cloud Computing Risks and Controls: CPA Exam Guide",
    category: "Information Systems",
    excerpt:
      "The NIST definition of cloud computing — five characteristics, three service models, four deployment models — the shared responsibility model, key risks and the controls and assurance reports that address them.",
    crux: [
      "NIST definition: On-demand self-service, broad network access, resource pooling, rapid elasticity and measured service.",
      "Service models: IaaS (infrastructure), PaaS (platform) and SaaS (software) — the customer manages less as you move from IaaS to SaaS.",
      "Deployment models: Public, private, community and hybrid.",
      "Shared responsibility: The provider secures the cloud; the customer remains responsible for its data, identities and configuration — misconfiguration is a leading cause of breaches.",
      "Assurance: Customers rely on SOC 1 and SOC 2 reports from providers, plus their own complementary user entity controls.",
    ],
    content: `
<h2>The NIST definition (SP 800-145)</h2>
<h3>Five essential characteristics</h3>
<ol>
<li><strong>On-demand self-service</strong> — provision computing capability without human interaction with the provider.</li>
<li><strong>Broad network access</strong> — available over the network through standard devices.</li>
<li><strong>Resource pooling</strong> — the provider serves multiple customers from shared resources (multi-tenancy).</li>
<li><strong>Rapid elasticity</strong> — capacity scales up and down quickly.</li>
<li><strong>Measured service</strong> — usage is metered and billed.</li>
</ol>

<h3>Three service models</h3>
<table>
<thead><tr><th>Model</th><th>Provider manages</th><th>Customer manages</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>Infrastructure as a Service (IaaS)</td><td>Physical hardware, networking, virtualisation</td><td>Operating systems, applications, data, access</td><td>Virtual servers and storage</td></tr>
<tr><td>Platform as a Service (PaaS)</td><td>Infrastructure plus operating system and runtime</td><td>Applications, data, access</td><td>Managed databases, app hosting platforms</td></tr>
<tr><td>Software as a Service (SaaS)</td><td>Everything up to the application</td><td>Data, user access, configuration settings</td><td>Cloud ERP, payroll, email</td></tr>
</tbody>
</table>

<h3>Four deployment models</h3>
<ul>
<li><strong>Public</strong> — open to the general public, owned by a provider.</li>
<li><strong>Private</strong> — for one organisation, on or off premises.</li>
<li><strong>Community</strong> — shared by organisations with common concerns.</li>
<li><strong>Hybrid</strong> — two or more of the above, bound together.</li>
</ul>

<h2>Key risks</h2>
<ul>
<li><strong>Misconfiguration</strong> — publicly exposed storage, overly broad permissions.</li>
<li><strong>Identity and access</strong> — compromised administrator credentials control everything.</li>
<li><strong>Data location and residency</strong> — data stored in jurisdictions with different legal requirements.</li>
<li><strong>Vendor lock-in and concentration</strong> — difficulty exiting or dependence on one provider.</li>
<li><strong>Availability</strong> — provider outages affect many customers at once.</li>
<li><strong>Visibility</strong> — less direct access to logs and infrastructure for audit.</li>
</ul>

<h2>Controls</h2>
<ul>
<li>Strong identity management: MFA, least privilege, separate administrator accounts.</li>
<li>Configuration baselines and continuous monitoring for drift.</li>
<li>Encryption, with customer-managed keys where sensitive.</li>
<li>Contracts covering service levels, data ownership, breach notification, right to audit and exit.</li>
<li>Backups to a separate account, region or provider.</li>
<li>Vendor risk management: review the provider's SOC 2 (and SOC 1 where financial reporting is affected) and test the complementary user entity controls.</li>
</ul>

<div class="callout callout-tip">
<p><strong>Exam trap:</strong> Moving to the cloud transfers <em>operational</em> responsibility for some controls, never <em>accountability</em>. A company using SaaS payroll is still responsible for who has access and for the accuracy of the data it inputs.</p>
</div>

<p>See also <a href="/blog/soc-1-vs-soc-2-reports">SOC 1 vs SOC 2 reports</a> and <a href="/cpa/isc/third-party-and-vendor-risk">ISC third-party and vendor risk</a>.</p>

${sources([["NIST — SP 800-145, The NIST Definition of Cloud Computing", "https://csrc.nist.gov/pubs/sp/800/145/final"], NIST_CSF, AICPA_BLUEPRINTS])}
`,
  },
  {
    slug: "business-continuity-disaster-recovery-planning",
    title: "Business Continuity and Disaster Recovery Planning Explained",
    category: "Information Systems",
    excerpt:
      "BCP vs DRP, the business impact analysis, RTO, RPO and maximum tolerable downtime, recovery site options, backup types and how plans are tested.",
    crux: [
      "BCP vs DRP: A business continuity plan keeps the whole business running; a disaster recovery plan restores IT systems and data.",
      "Business impact analysis: Identifies critical processes, the impact of disruption over time, and recovery priorities.",
      "Key metrics: Recovery time objective (how fast to restore), recovery point objective (how much data loss is acceptable) and maximum tolerable downtime.",
      "Recovery sites: Hot (ready in hours, costly), warm (days), cold (space and power only, weeks) — and mirrored sites for near-zero downtime.",
      "Testing: Checklist reviews, tabletop exercises, simulations, parallel tests and full interruption tests — an untested plan isn't a plan.",
    ],
    content: `
<h2>BCP vs DRP</h2>
<table>
<thead><tr><th></th><th>Business continuity plan (BCP)</th><th>Disaster recovery plan (DRP)</th></tr></thead>
<tbody>
<tr><td>Scope</td><td>The whole organisation — people, facilities, suppliers, processes</td><td>IT systems, applications and data</td></tr>
<tr><td>Goal</td><td>Continue critical operations during and after a disruption</td><td>Restore technology to support those operations</td></tr>
<tr><td>Relationship</td><td colspan="2">The DRP is one component of the broader BCP</td></tr>
</tbody>
</table>

<h2>Business impact analysis (BIA)</h2>
<p>The BIA, described in NIST SP 800-34, is the foundation of contingency planning. It:</p>
<ol>
<li>Identifies the organisation's mission-critical processes and the systems that support them.</li>
<li>Determines the impact of an outage over time (financial, operational, legal, reputational).</li>
<li>Sets recovery priorities and the resources needed.</li>
</ol>

<h2>The key metrics</h2>
<ul>
<li><strong>Maximum tolerable downtime (MTD)</strong> — the longest a process can be unavailable before the impact becomes unacceptable.</li>
<li><strong>Recovery time objective (RTO)</strong> — the target time to restore a system; must be shorter than the MTD.</li>
<li><strong>Recovery point objective (RPO)</strong> — the maximum acceptable data loss measured in time — the point to which data must be recovered. An RPO of 4 hours means backups (or replication) at least every 4 hours.</li>
</ul>

<div class="callout callout-example">
<p><strong>Example:</strong> An online retailer decides its order system can be down for no more than 8 hours (MTD), targets restoration within 4 hours (RTO), and can lose at most 15 minutes of orders (RPO). A nightly backup can't meet a 15-minute RPO — it needs continuous replication to a hot site.</p>
</div>

<h2>Recovery site options</h2>
<table>
<thead><tr><th>Site</th><th>What's ready</th><th>Recovery time</th><th>Cost</th></tr></thead>
<tbody>
<tr><td>Mirrored / active-active</td><td>Fully duplicated, running simultaneously</td><td>Near zero</td><td>Highest</td></tr>
<tr><td>Hot</td><td>Hardware, software and recent data</td><td>Hours</td><td>High</td></tr>
<tr><td>Warm</td><td>Hardware and connectivity; data must be loaded</td><td>Days</td><td>Medium</td></tr>
<tr><td>Cold</td><td>Space, power and cooling only</td><td>Weeks</td><td>Low</td></tr>
</tbody>
</table>
<p>Cloud services now provide many of these options on demand, often with replication across regions.</p>

<h2>Backup types</h2>
<ul>
<li><strong>Full</strong> — everything, every time. Slowest to back up, fastest to restore.</li>
<li><strong>Incremental</strong> — changes since the last backup of any type. Fastest to back up; restore needs the last full plus every incremental.</li>
<li><strong>Differential</strong> — changes since the last full backup. Restore needs the last full plus the latest differential.</li>
</ul>
<p>Keep at least one copy offline or immutable so ransomware can't encrypt it, and test restoration regularly.</p>

<h2>Testing the plan</h2>
<ol>
<li><strong>Checklist (desk) review</strong> — plan owners review the documentation.</li>
<li><strong>Tabletop exercise</strong> — participants walk through a scenario in discussion.</li>
<li><strong>Simulation</strong> — a scenario is played out with more realism, without disrupting operations.</li>
<li><strong>Parallel test</strong> — recovery systems are brought up while production continues.</li>
<li><strong>Full interruption test</strong> — production is shut down and operations switch to recovery; the most realistic and the riskiest.</li>
</ol>

<p>See <a href="/blog/cybersecurity-risks-controls-cpa-isc">cybersecurity risks and controls</a> and <a href="/cpa/isc/incident-response">ISC incident response</a>.</p>

${sources([["NIST — SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems", "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"], NIST_CSF, AICPA_BLUEPRINTS])}
`,
  },
];
