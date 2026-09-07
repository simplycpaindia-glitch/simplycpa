import type { SubjectSeed } from "./types";

export const isc: SubjectSeed = {
  slug: "isc",
  name: "Information Systems and Controls",
  shortName: "ISC",
  type: "DISCIPLINE",
  description:
    "ISC sits where auditing meets IT: information systems and data management, security and privacy, and SOC engagements. It fits candidates interested in IT audit, risk, and controls — and tends to reward process thinking over calculation.",
  difficulty: "MEDIUM",
  estimatedHours: 80,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/isc-cpa-exam-blueprint",
  order: 5,
  topics: [
    {
      slug: "it-general-controls",
      title: "IT General Controls (ITGCs)",
      shortDescription: "The four ITGC categories that support reliance on automated application controls.",
      blueprintArea: "Area I: Information Systems and Data Management",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 1,
      studyMaterialHtml: `
<h2>Why ITGCs matter</h2>
<p>Application controls (e.g., a three-way match in the AP system) are only as reliable as the IT environment they run in. IT General Controls are the foundation that makes it safe to rely on automated controls at all — if ITGCs are weak, auditors generally can't rely on <em>any</em> automated control in that system, no matter how well-designed it looks.</p>

<h3>Four ITGC categories</h3>
<table>
<thead><tr><th>Category</th><th>What it covers</th></tr></thead>
<tbody>
<tr><td><strong>Access to programs and data</strong></td><td>Authentication, authorization, role-based access, privileged account management, periodic user access reviews</td></tr>
<tr><td><strong>Change management</strong></td><td>How changes are requested, tested, approved, and migrated to production</td></tr>
<tr><td><strong>Program development / SDLC</strong></td><td>Controls over building and implementing new systems</td></tr>
<tr><td><strong>IT operations</strong></td><td>Job scheduling, backup and recovery, incident and problem management</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Access controls are typically the highest-risk ITGC category on the exam — questions often describe excessive or unreviewed access (e.g., a developer with production database write access) as the control gap to identify.</p></div>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company's IT department can push code changes directly to production without independent testing or approval. This is a <strong>change management</strong> deficiency: it creates risk that unauthorized or untested changes — including changes that manipulate financial data — reach the live system.</p></div>

<h3>Segregation of duties in IT</h3>
<p>Classic separations: systems <strong>development</strong> from <strong>operations</strong>, and both from <strong>security administration</strong>. A programmer with production access is the standard red flag, because it enables unauthorized, untested code to reach live financial data.</p>

<h3>General vs. application controls</h3>
<ul>
<li><strong>General</strong> — pervasive, support the whole environment</li>
<li><strong>Application</strong> — specific to one process: input edit checks, validity tests, limit checks, reasonableness tests, batch totals, hash totals, sequence checks</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Application controls map to processing stages — <strong>input</strong> (edit checks, field validation), <strong>processing</strong> (run-to-run totals, reasonableness), and <strong>output</strong> (distribution controls, reconciliation of output to input).</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>4 ITGC categories: <strong>Access, Change management, Program development/SDLC, IT operations</strong></li>
<li>Weak ITGCs → cannot rely on <strong>any</strong> automated application control in that system</li>
<li>Access controls = highest-risk category typically tested</li>
<li>IT segregation: development ≠ operations ≠ security administration; programmer with production access = red flag</li>
<li>Application controls by stage: input (edit checks), processing (run-to-run totals), output (distribution, reconciliation)</li>
</ul>
`,
      mcqs: [
        {
          question: "A developer at a company has standing write access to the production database. Which ITGC category does this deficiency primarily relate to, and why does it matter?",
          options: [
            { label: "A", text: "IT operations — it may disrupt job scheduling", isCorrect: false, rationale: "The core issue is inappropriate access and the ability to bypass change controls, not operational scheduling." },
            { label: "B", text: "Access to programs and data — it breaks segregation of duties and allows unauthorized changes to financial data", isCorrect: true, rationale: "Correct — developers should not have production access; this combines development and operations duties and permits undetected data or code changes." },
            { label: "C", text: "Program development — it affects how new systems are designed", isCorrect: false, rationale: "The deficiency is about access to the live environment, not the design methodology for new systems." },
            { label: "D", text: "It is not a deficiency if the developer is trusted and experienced", isCorrect: false, rationale: "Controls are designed independent of individual trustworthiness; the structural conflict remains." },
          ],
          explanation: "Standing developer access to production is fundamentally an access control deficiency that also breaks IT segregation of duties. It allows a single individual to both write code and alter live financial data, bypassing change management approvals — which undermines reliance on every automated control in that system.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["ITGC", "access controls"],
        },
      ],
    },
    {
      slug: "information-systems-fundamentals",
      title: "Information Systems Fundamentals",
      shortDescription: "System architectures, databases, ERP systems, and cloud computing models.",
      blueprintArea: "Area I: Information Systems and Data Management",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 2,
      studyMaterialHtml: `
<h2>Processing methods</h2>
<table>
<thead><tr><th>Method</th><th>Characteristics</th></tr></thead>
<tbody>
<tr><td><strong>Batch processing</strong></td><td>Transactions accumulated and processed in groups; control totals easy; data not current between runs</td></tr>
<tr><td><strong>Real-time / online</strong></td><td>Immediate processing and master file update; data always current; requires stronger access controls and logging</td></tr>
</tbody>
</table>

<h3>Databases</h3>
<ul>
<li><strong>Relational database</strong> — data in tables of rows and columns, linked by <strong>primary keys</strong> and <strong>foreign keys</strong></li>
<li><strong>DBMS</strong> — the software layer managing storage, retrieval, and security</li>
<li><strong>Referential integrity</strong> — a foreign key must match an existing primary key, preventing orphan records</li>
<li><strong>Normalization</strong> — organizing data to eliminate redundancy and update anomalies</li>
<li><strong>Data warehouse</strong> — an integrated store optimized for analysis rather than transaction processing; a <strong>data lake</strong> holds raw data in native formats</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT — the ACID properties</strong> of reliable transaction processing: <strong>Atomicity</strong> (all or nothing), <strong>Consistency</strong> (valid state to valid state), <strong>Isolation</strong> (concurrent transactions don't corrupt one another), and <strong>Durability</strong> (committed data survives failure).</p></div>

<h3>ERP systems</h3>
<p>An ERP integrates finance, procurement, HR, and operations into one database. Benefits: single source of truth, reduced reconciliation, standardized processes. Risks: <strong>concentration</strong> — a single point of failure and a place where inappropriate access can cross the whole business — plus complex, high-risk implementations.</p>

<h3>Cloud service and deployment models</h3>
<table>
<thead><tr><th>Model</th><th>Customer manages</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>IaaS</strong></td><td>OS, middleware, applications, data</td><td>Virtual servers and storage</td></tr>
<tr><td><strong>PaaS</strong></td><td>Applications and data only</td><td>Managed application platform</td></tr>
<tr><td><strong>SaaS</strong></td><td>Data and user access configuration only</td><td>Hosted accounting or CRM software</td></tr>
</tbody>
</table>
<p>Deployment models: public, private, hybrid, and community cloud.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Cloud adoption is a <strong>shared responsibility</strong> model. Moving to SaaS shifts infrastructure controls to the provider, but the customer <em>always</em> retains responsibility for its own data, user access provisioning, and vendor oversight — which is why SOC reports matter.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Batch = grouped, easy control totals, not current; real-time = immediate, needs stronger access/logging</li>
<li>Relational DB: primary key + foreign key; <strong>referential integrity</strong> prevents orphan records</li>
<li><strong>ACID</strong>: Atomicity, Consistency, Isolation, Durability</li>
<li>ERP = one integrated database → single source of truth, but concentration risk</li>
<li><strong>IaaS → PaaS → SaaS</strong>: customer manages progressively less</li>
<li>Shared responsibility: customer always owns its data, access provisioning, vendor oversight</li>
</ul>
`,
      mcqs: [
        {
          question: "A company migrates its accounting system to a SaaS provider. Which responsibility remains with the company?",
          options: [
            { label: "A", text: "Patching the underlying operating system", isCorrect: false, rationale: "In SaaS the provider manages the infrastructure and operating system." },
            { label: "B", text: "Provisioning and reviewing user access rights within the application", isCorrect: true, rationale: "Correct — under the shared responsibility model, the customer always retains responsibility for its data and for granting, reviewing, and revoking user access." },
            { label: "C", text: "Maintaining the physical data center", isCorrect: false, rationale: "Physical infrastructure is the provider's responsibility in all cloud models." },
            { label: "D", text: "Managing the application server middleware", isCorrect: false, rationale: "Middleware is managed by the provider in a SaaS arrangement." },
          ],
          explanation: "Cloud computing operates on a shared responsibility model. As you move from IaaS to PaaS to SaaS, the provider assumes more of the technology stack — but the customer always remains responsible for its own data, the configuration of user access, and oversight of the vendor.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["cloud", "shared responsibility"],
        },
      ],
    },
    {
      slug: "data-management-and-governance",
      title: "Data Management & Governance",
      shortDescription: "The data life cycle, data quality dimensions, and governance roles and frameworks.",
      blueprintArea: "Area I: Information Systems and Data Management",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 3,
      studyMaterialHtml: `
<h2>The data life cycle</h2>
<ol>
<li><strong>Definition</strong> — what the data element means and how it's structured</li>
<li><strong>Capture / creation</strong> — controls at the point of entry matter most here</li>
<li><strong>Storage</strong> — encryption, classification, retention</li>
<li><strong>Usage / processing</strong> — access control, audit logging</li>
<li><strong>Sharing / transmission</strong> — encryption in transit, third-party agreements</li>
<li><strong>Archival</strong> — retention schedules, retrievability</li>
<li><strong>Destruction</strong> — secure, documented, irreversible disposal</li>
</ol>

<h3>Dimensions of data quality</h3>
<table>
<thead><tr><th>Dimension</th><th>Question it answers</th></tr></thead>
<tbody>
<tr><td>Completeness</td><td>Is anything missing?</td></tr>
<tr><td>Accuracy</td><td>Does it reflect reality?</td></tr>
<tr><td>Consistency</td><td>Does it agree across systems?</td></tr>
<tr><td>Timeliness</td><td>Is it current enough to be useful?</td></tr>
<tr><td>Validity</td><td>Does it conform to defined formats and rules?</td></tr>
<tr><td>Uniqueness</td><td>Are there duplicates?</td></tr>
</tbody>
</table>

<h3>Governance roles</h3>
<ul>
<li><strong>Data owner</strong> — a business leader accountable for a data domain; approves access and classification</li>
<li><strong>Data steward</strong> — manages quality, definitions, and standards day to day</li>
<li><strong>Data custodian</strong> — IT function that stores and safeguards the data technically</li>
<li><strong>Data user</strong> — consumes data within approved rules</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Governance separates <strong>accountability</strong> (owner decides who may access and how data is classified) from <strong>custody</strong> (IT implements and protects). Blurring these — for example, letting IT decide who gets access to payroll data — is a governance weakness.</p></div>

<h3>Master data management</h3>
<p>MDM creates a single authoritative record for core entities — customers, vendors, products, employees — reducing duplicates and conflicting values across systems. Poor master data is a common root cause of duplicate vendor payments and unreliable reporting.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> ETL (Extract, Transform, Load) moves data into a warehouse with transformation <em>before</em> loading; ELT loads raw data first and transforms it later inside the target platform. Either way, <strong>data validation during transformation</strong> is a key control point.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Life cycle: definition → capture → storage → usage → sharing → archival → <strong>destruction</strong></li>
<li>Quality dimensions: completeness, accuracy, consistency, timeliness, validity, uniqueness</li>
<li>Roles: <strong>owner</strong> (accountable, approves access) vs. <strong>steward</strong> (quality/standards) vs. <strong>custodian</strong> (IT safeguards)</li>
<li>MDM = single authoritative record for customers/vendors/products</li>
<li>ETL transforms before loading; ELT loads then transforms — validation is the control point</li>
</ul>
`,
      mcqs: [
        {
          question: "Who is normally accountable for approving which users may access a particular set of financial data?",
          options: [
            { label: "A", text: "The data custodian in the IT department", isCorrect: false, rationale: "The custodian implements and safeguards access technically but should not decide who is entitled to it." },
            { label: "B", text: "The business data owner", isCorrect: true, rationale: "Correct — the data owner is the accountable business leader who approves access rights and data classification." },
            { label: "C", text: "The data user requesting access", isCorrect: false, rationale: "Self-approval would defeat the purpose of access controls." },
            { label: "D", text: "The external auditor", isCorrect: false, rationale: "Auditors evaluate controls; they do not administer access rights." },
          ],
          explanation: "Data governance separates accountability from custody. The business data owner decides who should have access and how data is classified; the IT data custodian implements and protects that access. Letting IT make access decisions is a governance weakness.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["data governance"],
        },
      ],
    },
    {
      slug: "security-fundamentals",
      title: "Information Security Fundamentals",
      shortDescription: "The CIA triad, authentication, encryption, network defenses, and common attack types.",
      blueprintArea: "Area II: Security, Confidentiality and Privacy",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 4,
      studyMaterialHtml: `
<h2>The CIA triad</h2>
<ul>
<li><strong>Confidentiality</strong> — only authorized parties can read the data</li>
<li><strong>Integrity</strong> — data is accurate and hasn't been improperly altered</li>
<li><strong>Availability</strong> — systems and data are accessible when needed</li>
</ul>

<h3>Authentication factors</h3>
<table>
<thead><tr><th>Factor</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>Something you <strong>know</strong></td><td>Password, PIN</td></tr>
<tr><td>Something you <strong>have</strong></td><td>Token, smart card, phone app</td></tr>
<tr><td>Something you <strong>are</strong></td><td>Fingerprint, facial recognition</td></tr>
</tbody>
</table>
<p><strong>Multi-factor authentication</strong> requires factors from <em>different</em> categories. A password plus a security question is <strong>not</strong> MFA — both are "something you know."</p>

<h3>Encryption</h3>
<table>
<thead><tr><th></th><th>Symmetric</th><th>Asymmetric (public key)</th></tr></thead>
<tbody>
<tr><td>Keys</td><td>One shared key for encrypt and decrypt</td><td>Public key encrypts; private key decrypts</td></tr>
<tr><td>Speed</td><td>Fast — good for bulk data</td><td>Slower — good for key exchange and signatures</td></tr>
<tr><td>Challenge</td><td>Distributing the key securely</td><td>Managing certificates and trust (PKI)</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT — digital signatures:</strong> The sender signs with their <strong>private</strong> key; anyone can verify with the sender's <strong>public</strong> key. This proves authenticity and non-repudiation. To send a <em>confidential</em> message, you encrypt with the <strong>recipient's public</strong> key so only their private key can open it. Getting these two directions straight is a favorite exam point.</p></div>

<h3>Common attacks</h3>
<ul>
<li><strong>Phishing</strong> / spear phishing — deceptive messages harvesting credentials; the leading initial attack vector</li>
<li><strong>Ransomware</strong> — encrypts data and demands payment; defended primarily by <strong>tested offline backups</strong></li>
<li><strong>SQL injection</strong> — malicious input to a database query; prevented by input validation and parameterized queries</li>
<li><strong>Denial of service</strong> — overwhelms availability</li>
<li><strong>Social engineering</strong> — manipulating people rather than technology</li>
<li><strong>Privilege escalation</strong> — turning limited access into administrative control</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Apply <strong>least privilege</strong> (only the access needed for the role) and <strong>defense in depth</strong> (layered controls so no single failure is fatal). These two principles answer a surprising number of ISC questions.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>CIA</strong>: Confidentiality, Integrity, Availability</li>
<li>MFA = factors from <strong>different</strong> categories (know / have / are); password + security question ≠ MFA</li>
<li>Symmetric = one shared key, fast; asymmetric = public encrypts, private decrypts</li>
<li><strong>Digital signature: sign with your private key, verify with your public key</strong>. Confidential message: encrypt with <strong>recipient's public</strong> key</li>
<li>Ransomware defense = tested <strong>offline backups</strong>; SQL injection defense = input validation/parameterized queries</li>
<li>Principles: <strong>least privilege</strong> + <strong>defense in depth</strong></li>
</ul>
`,
      mcqs: [
        {
          question: "To send a confidential message that only the intended recipient can read, which key should the sender use to encrypt it?",
          options: [
            { label: "A", text: "The sender's private key", isCorrect: false, rationale: "Encrypting with the sender's private key creates a digital signature — anyone with the public key could decrypt it, so it provides authenticity, not confidentiality." },
            { label: "B", text: "The recipient's public key", isCorrect: true, rationale: "Correct — only the recipient holds the matching private key, so only they can decrypt the message." },
            { label: "C", text: "The recipient's private key", isCorrect: false, rationale: "The sender does not have access to the recipient's private key." },
            { label: "D", text: "The sender's public key", isCorrect: false, rationale: "The sender's own public key would require the sender's private key to decrypt, which the recipient does not have." },
          ],
          explanation: "In public key cryptography, confidentiality is achieved by encrypting with the recipient's public key, since only the recipient's private key can decrypt it. Signing with the sender's private key achieves authenticity and non-repudiation instead.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["encryption", "PKI"],
        },
        {
          question: "A system requires users to enter a password and then answer a personal security question. Does this constitute multi-factor authentication?",
          options: [
            { label: "A", text: "Yes, because two separate credentials are required", isCorrect: false, rationale: "MFA requires factors from different categories, not merely two credentials." },
            { label: "B", text: "No, because both are 'something you know'", isCorrect: true, rationale: "Correct — a password and a security question are both knowledge factors, so this is single-factor authentication applied twice." },
            { label: "C", text: "Yes, because security questions are a possession factor", isCorrect: false, rationale: "A security question tests knowledge, not possession." },
            { label: "D", text: "Only if the security question changes each login", isCorrect: false, rationale: "Rotating knowledge-based questions does not convert them into a different authentication factor." },
          ],
          explanation: "Multi-factor authentication requires credentials from at least two different categories: something you know, something you have, or something you are. A password and a security question are both knowledge factors, so combining them does not achieve MFA.",
          difficulty: "EASY",
          questionType: "EXAM_TRAP",
          tags: ["authentication", "MFA"],
        },
      ],
    },
    {
      slug: "privacy-frameworks",
      title: "Privacy & Regulatory Frameworks",
      shortDescription: "Privacy principles, key regulations, and the frameworks used to structure IT controls.",
      blueprintArea: "Area II: Security, Confidentiality and Privacy",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 5,
      studyMaterialHtml: `
<h2>Confidentiality vs. privacy</h2>
<div class="callout callout-important"><p><strong>IMPORTANT:</strong> <strong>Confidentiality</strong> protects information designated as confidential by agreement — it could be trade secrets, pricing, or contract terms. <strong>Privacy</strong> deals specifically with <strong>personal information</strong> and the rights of the individuals it describes. All personal information should be kept confidential, but not all confidential information is personal.</p></div>

<h3>Core privacy principles</h3>
<ul>
<li><strong>Notice</strong> — tell people what you collect and why</li>
<li><strong>Choice and consent</strong> — allow individuals to agree or opt out</li>
<li><strong>Collection limitation</strong> — collect only what's needed for the stated purpose</li>
<li><strong>Use, retention, and disposal</strong> — use only for disclosed purposes; keep only as long as needed</li>
<li><strong>Access</strong> — individuals can view and correct their data</li>
<li><strong>Disclosure to third parties</strong> — only with consent or legal basis</li>
<li><strong>Security</strong>, <strong>quality</strong>, and <strong>monitoring and enforcement</strong></li>
</ul>

<h3>Notable regulations</h3>
<table>
<thead><tr><th>Regulation</th><th>Scope</th></tr></thead>
<tbody>
<tr><td><strong>GDPR</strong> (EU)</td><td>Broad personal data rights: access, rectification, erasure ("right to be forgotten"), portability; large potential fines; applies extraterritorially to entities serving EU residents</td></tr>
<tr><td><strong>HIPAA</strong> (US)</td><td>Protected health information; privacy and security rules; breach notification</td></tr>
<tr><td><strong>GLBA</strong> (US)</td><td>Financial institutions' handling of customer information; safeguards rule</td></tr>
<tr><td><strong>PCI DSS</strong></td><td>Contractual, not a law — payment card data security standard</td></tr>
<tr><td><strong>State privacy laws</strong> (e.g., CCPA/CPRA)</td><td>Consumer rights to know, delete, and opt out of sale of personal information</td></tr>
</tbody>
</table>

<h3>Control frameworks</h3>
<ul>
<li><strong>COSO Internal Control — Integrated Framework</strong> — the general internal control model (five components)</li>
<li><strong>COSO ERM</strong> — enterprise-wide risk management</li>
<li><strong>COBIT</strong> — governance and management of enterprise IT</li>
<li><strong>NIST Cybersecurity Framework</strong> — Identify, Protect, Detect, Respond, Recover (plus Govern in the updated version)</li>
<li><strong>ISO/IEC 27001</strong> — certifiable information security management system standard</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Frameworks are not interchangeable. COSO is about <em>internal control</em> broadly; COBIT is specifically about <em>IT governance</em>; NIST CSF is about <em>cybersecurity risk</em>; ISO 27001 is a certifiable <em>management system</em>.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>Confidentiality</strong> = information designated confidential; <strong>privacy</strong> = personal information + individual rights</li>
<li>Privacy principles: notice, choice/consent, collection limitation, use/retention/disposal, access, third-party disclosure, security, quality, enforcement</li>
<li>GDPR (EU, erasure/portability, extraterritorial), HIPAA (health), GLBA (financial), PCI DSS (contractual), CCPA/CPRA (state)</li>
<li>Frameworks: <strong>COSO</strong> internal control, <strong>COBIT</strong> IT governance, <strong>NIST CSF</strong> (Identify, Protect, Detect, Respond, Recover), <strong>ISO 27001</strong> certifiable ISMS</li>
</ul>
`,
      mcqs: [
        {
          question: "Which framework is specifically designed for the governance and management of enterprise IT?",
          options: [
            { label: "A", text: "COSO Internal Control — Integrated Framework", isCorrect: false, rationale: "COSO addresses internal control broadly across an organization, not IT governance specifically." },
            { label: "B", text: "COBIT", isCorrect: true, rationale: "Correct — COBIT is the framework focused on the governance and management of enterprise information and technology." },
            { label: "C", text: "ISO 9001", isCorrect: false, rationale: "ISO 9001 addresses quality management systems, not IT governance." },
            { label: "D", text: "PCI DSS", isCorrect: false, rationale: "PCI DSS is a contractual security standard for payment card data, not a governance framework." },
          ],
          explanation: "COBIT provides a framework for the governance and management of enterprise IT, linking IT objectives to business goals. COSO addresses internal control generally, NIST CSF addresses cybersecurity risk, and ISO 27001 provides a certifiable information security management system.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["frameworks", "COBIT"],
        },
      ],
    },
    {
      slug: "incident-response",
      title: "Incident Response & Monitoring",
      shortDescription: "The incident response life cycle, logging and monitoring, and breach notification obligations.",
      blueprintArea: "Area II: Security, Confidentiality and Privacy",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 6,
      studyMaterialHtml: `
<h2>The incident response life cycle</h2>
<ol>
<li><strong>Preparation</strong> — plan, roles, contact lists, tooling, tabletop exercises</li>
<li><strong>Detection and analysis</strong> — identify and validate that an incident is occurring; determine scope</li>
<li><strong>Containment</strong> — short-term (isolate affected systems) and long-term (temporary fixes while rebuilding)</li>
<li><strong>Eradication</strong> — remove the root cause: malware, compromised accounts, exploited vulnerability</li>
<li><strong>Recovery</strong> — restore systems, validate integrity, monitor for recurrence</li>
<li><strong>Post-incident review</strong> — lessons learned; feed improvements back into preparation</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> <strong>Contain before you eradicate.</strong> Rushing to wipe systems can destroy forensic evidence and may not stop lateral movement already in progress. Preserving evidence and maintaining chain of custody matters if litigation or law enforcement involvement follows.</p></div>

<h3>Monitoring and detection</h3>
<ul>
<li><strong>Logging</strong> — who did what, when. Logs must be protected from alteration by the very administrators they monitor</li>
<li><strong>SIEM</strong> (Security Information and Event Management) — aggregates and correlates logs across systems to detect patterns</li>
<li><strong>IDS/IPS</strong> — intrusion detection (alerts) vs. intrusion prevention (blocks)</li>
<li><strong>Vulnerability scanning</strong> — automated identification of known weaknesses</li>
<li><strong>Penetration testing</strong> — authorized simulated attack to test defenses in practice</li>
</ul>

<h3>Business continuity and disaster recovery</h3>
<table>
<thead><tr><th>Metric</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><strong>RTO</strong> (Recovery Time Objective)</td><td>How quickly the system must be back up</td></tr>
<tr><td><strong>RPO</strong> (Recovery Point Objective)</td><td>How much <em>data loss</em> is tolerable — drives backup frequency</td></tr>
</tbody>
</table>
<p>Recovery site options: <strong>hot site</strong> (fully equipped, near-immediate), <strong>warm site</strong> (partially equipped), <strong>cold site</strong> (space and utilities only, cheapest and slowest).</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> An untested backup is not a control. Backups must be periodically <strong>restored and validated</strong> — and kept offline or immutable so ransomware can't encrypt them along with production data.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Life cycle: preparation → detection/analysis → <strong>containment</strong> → eradication → recovery → post-incident review</li>
<li><strong>Contain before eradicating</strong>; preserve evidence and chain of custody</li>
<li>SIEM correlates logs; IDS alerts, IPS blocks; scanning finds known flaws, pen testing simulates attack</li>
<li><strong>RTO</strong> = how fast back up; <strong>RPO</strong> = how much data loss is tolerable</li>
<li>Hot site (immediate) → warm → cold (cheapest, slowest)</li>
<li>Backups must be <strong>tested</strong> and kept offline/immutable</li>
</ul>
`,
      mcqs: [
        {
          question: "A company can tolerate losing at most 15 minutes of transaction data in a disaster. Which metric does this define, and what does it drive?",
          options: [
            { label: "A", text: "Recovery time objective — it drives how fast systems must be restored", isCorrect: false, rationale: "RTO concerns downtime duration, not the amount of data loss." },
            { label: "B", text: "Recovery point objective — it drives backup and replication frequency", isCorrect: true, rationale: "Correct — RPO defines the maximum tolerable data loss, which determines how frequently data must be backed up or replicated." },
            { label: "C", text: "Mean time between failures — it drives hardware selection", isCorrect: false, rationale: "MTBF is a reliability measure, not a recovery objective." },
            { label: "D", text: "Maximum tolerable downtime — it drives site selection", isCorrect: false, rationale: "That relates to how long the business can be down, which is the RTO concept, not data loss." },
          ],
          explanation: "The recovery point objective specifies the maximum acceptable amount of data loss measured in time. A 15-minute RPO requires backups or replication at least every 15 minutes. The recovery time objective, by contrast, defines how quickly systems must be restored to operation.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["BCP", "RPO", "RTO"],
        },
      ],
    },
    {
      slug: "business-process-automation",
      title: "Business Processes & Automation",
      shortDescription: "Key transaction cycles, robotic process automation, and controls over automated processes.",
      blueprintArea: "Area I: Information Systems and Data Management",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 7,
      studyMaterialHtml: `
<h2>Core transaction cycles and their key controls</h2>
<table>
<thead><tr><th>Cycle</th><th>Key controls</th></tr></thead>
<tbody>
<tr><td><strong>Revenue</strong> (order → ship → bill → collect)</td><td>Credit approval, shipping document matching, separation of billing from cash receipts, lockbox for collections</td></tr>
<tr><td><strong>Expenditure</strong> (requisition → PO → receive → pay)</td><td><strong>Three-way match</strong> (PO, receiving report, invoice), vendor master file controls, segregation of purchasing from receiving and payment</td></tr>
<tr><td><strong>Payroll</strong></td><td>Separate HR (adds employees) from payroll processing; independent review of the payroll register; direct deposit controls</td></tr>
<tr><td><strong>Inventory / conversion</strong></td><td>Physical counts, perpetual record reconciliation, restricted warehouse access</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> The classic fraud enabler is one person controlling both the <strong>vendor master file</strong> and <strong>payment processing</strong> — that combination allows creating a fictitious vendor and paying it. Adding or changing a vendor should always be independent of approving and releasing payments.</p></div>

<h3>Robotic process automation (RPA)</h3>
<p>RPA uses software "bots" to perform rule-based, repetitive tasks across existing applications — reconciliations, data entry, report generation. Benefits: speed, consistency, elimination of manual keying errors, and a complete audit trail of bot activity.</p>

<h3>New risks that come with automation</h3>
<ul>
<li><strong>Bot identity and access</strong> — bots need credentials; over-privileged bot accounts are a serious exposure, and shared bot credentials destroy accountability</li>
<li><strong>Change management over bot logic</strong> — a bot is code and must go through testing and approval</li>
<li><strong>Error propagation at scale</strong> — a flawed bot repeats the same mistake thousands of times, quickly</li>
<li><strong>Loss of human review</strong> — automating an approval away can remove the very control that mattered</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A bot automatically posts recurring journal entries. Without change control over the bot's logic and an independent review of its output, an incorrect or malicious modification could post hundreds of erroneous entries before anyone notices.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Automating a process does <strong>not</strong> remove the need for controls — it changes <em>where</em> the controls belong: from reviewing individual transactions to controlling access, logic changes, and exception handling.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Expenditure cycle key control = <strong>three-way match</strong> (PO, receiving report, invoice)</li>
<li>Vendor master file maintenance must be <strong>separate from payment processing</strong> (fictitious vendor risk)</li>
<li>Payroll: HR adds employees, payroll processes — never the same person</li>
<li>RPA risks: bot credentials/over-privilege, change control over bot logic, <strong>errors repeat at scale</strong>, loss of human review</li>
<li>Automation moves controls to access, change management, and exception handling</li>
</ul>
`,
      mcqs: [
        {
          question: "Which segregation of duties weakness most directly enables a fictitious vendor fraud?",
          options: [
            { label: "A", text: "The same person prepares and reviews bank reconciliations", isCorrect: false, rationale: "This is a real weakness but relates more to concealing cash misappropriation than to creating fictitious vendors." },
            { label: "B", text: "The same person can add vendors to the master file and approve payments", isCorrect: true, rationale: "Correct — combining vendor creation with payment authority allows an individual to set up a fake vendor and pay it without independent challenge." },
            { label: "C", text: "The receiving department also counts physical inventory", isCorrect: false, rationale: "This affects inventory accuracy, not vendor payment fraud." },
            { label: "D", text: "The IT department maintains the general ledger software", isCorrect: false, rationale: "Application maintenance is normal for IT; the issue would be production data access, not vendor fraud specifically." },
          ],
          explanation: "Creating a fictitious vendor and then authorizing payments to it requires control over both the vendor master file and the payment process. Segregating vendor master file maintenance from payment approval and disbursement is the key preventive control.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["business processes", "segregation of duties"],
        },
      ],
    },
    {
      slug: "systems-development-life-cycle",
      title: "Systems Development & Change Management",
      shortDescription: "SDLC phases, development methodologies, and controls over moving changes into production.",
      blueprintArea: "Area I: Information Systems and Data Management",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 8,
      studyMaterialHtml: `
<h2>SDLC phases</h2>
<ol>
<li><strong>Planning / feasibility</strong> — business case, scope, cost-benefit</li>
<li><strong>Analysis</strong> — gather and document requirements</li>
<li><strong>Design</strong> — architecture, data model, controls designed <em>in</em>, not bolted on</li>
<li><strong>Development</strong> — build and unit test</li>
<li><strong>Testing</strong> — system, integration, and <strong>user acceptance testing (UAT)</strong></li>
<li><strong>Implementation</strong> — data conversion and cutover</li>
<li><strong>Maintenance</strong> — ongoing fixes and enhancements</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Testing must occur in a <strong>separate test environment</strong> using data that does not expose sensitive production information. Testing in production, or copying live personal data into test without masking, are both classic findings.</p></div>

<h3>Conversion approaches</h3>
<table>
<thead><tr><th>Approach</th><th>Risk profile</th></tr></thead>
<tbody>
<tr><td><strong>Parallel</strong> — run old and new together</td><td><strong>Lowest risk</strong>, highest cost</td></tr>
<tr><td><strong>Phased</strong> — implement in stages</td><td>Moderate risk, longer timeline</td></tr>
<tr><td><strong>Pilot</strong> — one location or unit first</td><td>Contained risk, limited early validation</td></tr>
<tr><td><strong>Direct cutover ("big bang")</strong></td><td><strong>Highest risk</strong>, lowest cost — no fallback if it fails</td></tr>
</tbody>
</table>

<h3>Methodologies</h3>
<ul>
<li><strong>Waterfall</strong> — sequential, heavy documentation; works when requirements are stable</li>
<li><strong>Agile</strong> — iterative sprints, continuous user feedback; adapts to changing requirements but demands disciplined change control to stay auditable</li>
<li><strong>DevOps</strong> — integrates development and operations with automated pipelines; requires automated controls (approval gates, automated testing) because deployment frequency is high</li>
</ul>

<h3>Change management controls</h3>
<ul>
<li>Formal request, business approval, documented testing, and separate approval to migrate</li>
<li><strong>Segregation between the person who writes the change and the person who moves it to production</strong></li>
<li><strong>Emergency changes</strong> — permitted, but must be logged and retroactively reviewed and approved</li>
<li>Version control and the ability to roll back</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> In an agile or DevOps environment, controls don't disappear — they become <strong>automated and embedded in the pipeline</strong> (automated test gates, required peer approval on merge, immutable deployment logs).</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>SDLC: planning → analysis → design → development → testing (incl. <strong>UAT</strong>) → implementation → maintenance</li>
<li>Test in a <strong>separate environment</strong> with masked data — never in production</li>
<li>Conversion risk: <strong>parallel lowest</strong>, direct cutover <strong>highest</strong></li>
<li>Waterfall (stable requirements) vs. Agile (iterative) vs. DevOps (automated pipeline)</li>
<li>Change management: request → approve → test → separate migration approval; developer ≠ migrator</li>
<li>Emergency changes allowed but must be logged and reviewed after the fact</li>
</ul>
`,
      mcqs: [
        {
          question: "Which system conversion approach carries the highest risk?",
          options: [
            { label: "A", text: "Parallel conversion", isCorrect: false, rationale: "Running both systems simultaneously provides a fallback and is the lowest-risk approach." },
            { label: "B", text: "Direct cutover", isCorrect: true, rationale: "Correct — switching entirely to the new system at once provides no fallback if the new system fails, making it the highest-risk approach." },
            { label: "C", text: "Pilot conversion", isCorrect: false, rationale: "Piloting limits exposure to a single location or unit, containing risk." },
            { label: "D", text: "Phased conversion", isCorrect: false, rationale: "Phasing spreads risk across stages rather than concentrating it." },
          ],
          explanation: "Direct cutover (\"big bang\") replaces the old system entirely at a single point in time. It is the cheapest and fastest approach but offers no fallback if problems emerge. Parallel conversion, which runs both systems simultaneously, is the lowest risk but the most expensive.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["SDLC", "conversion"],
        },
      ],
    },
    {
      slug: "third-party-and-vendor-risk",
      title: "Third-Party & Vendor Risk",
      shortDescription: "Evaluating service providers, contractual protections, and ongoing vendor monitoring.",
      blueprintArea: "Area III: SOC Engagements",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 45,
      order: 9,
      studyMaterialHtml: `
<h2>The core principle</h2>
<div class="callout callout-important"><p><strong>IMPORTANT:</strong> An organization can outsource a <strong>process</strong>, but it cannot outsource <strong>responsibility</strong>. Management remains accountable for the effectiveness of internal control over its financial reporting and for the protection of its data, no matter who performs the work.</p></div>

<h3>Vendor risk management life cycle</h3>
<ol>
<li><strong>Due diligence before selection</strong> — financial stability, security posture, references, regulatory history, requesting a SOC report</li>
<li><strong>Contracting</strong> — service levels, security requirements, right to audit, data ownership and return on exit, breach notification timelines, subcontractor (fourth-party) restrictions, liability</li>
<li><strong>Ongoing monitoring</strong> — annual SOC report review, SLA performance, incident history, periodic reassessment based on criticality</li>
<li><strong>Termination / exit</strong> — data return or certified destruction, access revocation, transition support</li>
</ol>

<h3>Reviewing a SOC report properly</h3>
<p>Receiving a SOC report is not the same as reading one. The user organization should evaluate:</p>
<ul>
<li>Does the <strong>period covered</strong> align with the user's reporting period? Is there a gap requiring bridge-letter follow-up?</li>
<li>Is the opinion <strong>unmodified</strong>, and are there exceptions noted in the testing results?</li>
<li>Are the <strong>complementary user entity controls (CUECs)</strong> actually implemented at the user organization?</li>
<li>Does the scope cover the systems the user actually relies on?</li>
<li>Are subservice organizations handled by the <strong>inclusive</strong> method (covered in the report) or the <strong>carve-out</strong> method (excluded, requiring separate assurance)?</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A payroll provider's SOC 1 report uses the carve-out method for its cloud hosting subservice organization. The user entity cannot assume the hosting controls are covered — it must obtain separate assurance over the hosting provider or accept the residual risk.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> <strong>Fourth-party risk</strong> — your vendor's vendors — is increasingly tested. Concentration risk also matters: if many critical vendors depend on the same cloud region, a single outage becomes an enterprise-level event.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>You can outsource the <strong>process</strong>, never the <strong>responsibility</strong></li>
<li>Life cycle: due diligence → contracting (SLAs, right to audit, data return, breach notice) → ongoing monitoring → exit</li>
<li>SOC review checks: period covered, exceptions, <strong>CUECs implemented</strong>, scope, subservice treatment</li>
<li><strong>Inclusive method</strong> = subservice covered; <strong>carve-out</strong> = excluded, need separate assurance</li>
<li>Watch fourth-party and concentration risk</li>
</ul>
`,
      mcqs: [
        {
          question: "A service organization's SOC 1 report uses the carve-out method for a subservice organization. What does this mean for the user entity?",
          options: [
            { label: "A", text: "The subservice organization's controls are included and tested in the report", isCorrect: false, rationale: "That describes the inclusive method, not carve-out." },
            { label: "B", text: "The subservice organization's controls are excluded, so the user entity needs separate assurance over them", isCorrect: true, rationale: "Correct — under the carve-out method the subservice organization's controls are described but not tested, leaving a gap the user entity must address separately." },
            { label: "C", text: "The user entity may disregard the subservice organization entirely", isCorrect: false, rationale: "The user entity still depends on those controls and must consider the residual risk." },
            { label: "D", text: "The service auditor has issued a modified opinion", isCorrect: false, rationale: "Carve-out is a scoping method, not an indication of a modified opinion." },
          ],
          explanation: "Under the carve-out method, the service organization's description includes the subservice organization's services but excludes its controls from the description and from the service auditor's testing. The user entity must obtain separate assurance over those controls or accept the resulting residual risk.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["vendor risk", "SOC", "carve-out"],
        },
      ],
    },
    {
      slug: "soc-engagements",
      title: "SOC Engagements",
      shortDescription: "SOC 1, SOC 2, and SOC 3 reports, Type 1 vs. Type 2, and the trust services criteria.",
      blueprintArea: "Area III: SOC Engagements",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 65,
      order: 10,
      studyMaterialHtml: `
<h2>The three SOC reports</h2>
<table>
<thead><tr><th>Report</th><th>Subject matter</th><th>Users / distribution</th></tr></thead>
<tbody>
<tr><td><strong>SOC 1</strong></td><td>Controls relevant to user entities' <strong>internal control over financial reporting</strong></td><td>Restricted — user entities and their auditors</td></tr>
<tr><td><strong>SOC 2</strong></td><td>Controls relevant to the <strong>Trust Services Criteria</strong></td><td>Restricted — management, customers, regulators, business partners</td></tr>
<tr><td><strong>SOC 3</strong></td><td>Same criteria as SOC 2, but a summarized report</td><td><strong>General use</strong> — can be posted publicly</td></tr>
</tbody>
</table>

<h3>The five Trust Services Criteria</h3>
<ul>
<li><strong>Security</strong> — the "common criteria"; <strong>always required</strong> in every SOC 2</li>
<li><strong>Availability</strong> — the system is available as committed</li>
<li><strong>Processing integrity</strong> — processing is complete, valid, accurate, timely, and authorized</li>
<li><strong>Confidentiality</strong> — information designated confidential is protected</li>
<li><strong>Privacy</strong> — personal information is handled per the entity's privacy notice</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT — Type 1 vs. Type 2:</strong><br/>
<strong>Type 1</strong> = fairness of the description + <strong>suitability of design</strong> of controls, <strong>as of a point in time</strong>.<br/>
<strong>Type 2</strong> = all of the above <strong>plus operating effectiveness over a period</strong>, with detailed tests and results.<br/>
Only a <strong>Type 2</strong> lets a user auditor rely on the controls for a reporting period.</p></div>

<h3>What's inside a SOC report</h3>
<ol>
<li><strong>Service auditor's report</strong> (the opinion)</li>
<li><strong>Management's assertion</strong></li>
<li><strong>System description</strong> prepared by management</li>
<li><strong>Tests of controls and results</strong> (Type 2 only)</li>
<li>Other information provided by management (unaudited)</li>
</ol>

<h3>Key participants</h3>
<ul>
<li><strong>Service organization</strong> — provides services affecting user entities' systems</li>
<li><strong>Service auditor</strong> — reports on the service organization's controls</li>
<li><strong>User entity</strong> — uses the service</li>
<li><strong>User auditor</strong> — audits the user entity and may use a Type 2 report as evidence</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The user auditor must <strong>never reference the service auditor</strong> in an unmodified opinion on the user entity's financial statements — using the SOC report is obtaining evidence, not dividing responsibility.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>SOC 1</strong> = ICFR-relevant controls; <strong>SOC 2</strong> = Trust Services Criteria (restricted); <strong>SOC 3</strong> = general use summary</li>
<li>TSC: <strong>Security (always required)</strong>, Availability, Processing integrity, Confidentiality, Privacy</li>
<li><strong>Type 1</strong> = design at a point in time; <strong>Type 2</strong> = design + <strong>operating effectiveness over a period</strong></li>
<li>Only Type 2 supports reliance for a period</li>
<li>Report contents: auditor's report, management assertion, system description, tests & results (Type 2)</li>
<li>User auditor never references the service auditor in an unmodified opinion</li>
</ul>
`,
      mcqs: [
        {
          question: "A prospective customer asks a SaaS provider for a report on its security controls that the provider can publish openly on its website. Which report is appropriate?",
          options: [
            { label: "A", text: "SOC 1 Type 2", isCorrect: false, rationale: "SOC 1 addresses financial reporting controls and is restricted-use." },
            { label: "B", text: "SOC 2 Type 2", isCorrect: false, rationale: "SOC 2 addresses the right subject matter but is a restricted-use report, not for open publication." },
            { label: "C", text: "SOC 3", isCorrect: true, rationale: "Correct — SOC 3 covers the same Trust Services Criteria as SOC 2 but in summarized form and is a general-use report suitable for public distribution." },
            { label: "D", text: "SOC 1 Type 1", isCorrect: false, rationale: "Wrong subject matter and restricted use." },
          ],
          explanation: "SOC 2 reports address the Trust Services Criteria but are restricted-use documents shared under NDA with specific parties. SOC 3 covers the same criteria in summary form and is designed for general use, making it appropriate for public posting.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["SOC", "SOC 3"],
        },
        {
          question: "Which Trust Services Criterion must be included in every SOC 2 engagement?",
          options: [
            { label: "A", text: "Privacy", isCorrect: false, rationale: "Privacy is included only when relevant to the engagement scope." },
            { label: "B", text: "Security", isCorrect: true, rationale: "Correct — the security criteria (the common criteria) are mandatory in every SOC 2; the other four are optional based on scope." },
            { label: "C", text: "Availability", isCorrect: false, rationale: "Availability is optional and included only if relevant." },
            { label: "D", text: "Processing integrity", isCorrect: false, rationale: "Processing integrity is optional and included only if relevant." },
          ],
          explanation: "The five Trust Services Criteria are security, availability, processing integrity, confidentiality, and privacy. Security — the common criteria — must be included in every SOC 2 engagement; the remaining four are added based on the scope agreed with the service organization.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["SOC", "trust services criteria"],
        },
      ],
    },
    {
      slug: "it-audit-and-advisory",
      title: "IT Audit & Advisory Services",
      shortDescription: "Planning and performing IT audits, using CAATs, and reporting IT findings.",
      blueprintArea: "Area III: SOC Engagements",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 50,
      order: 11,
      studyMaterialHtml: `
<h2>How an IT audit is scoped</h2>
<p>Start from the risks that matter to the objective, then work down to the systems and controls that address them:</p>
<ol>
<li>Understand the business process and the significant accounts or objectives involved</li>
<li>Identify the <strong>relevant applications and infrastructure</strong> supporting them</li>
<li>Evaluate <strong>ITGCs</strong> for those systems (weak ITGCs undermine everything above them)</li>
<li>Test <strong>automated application controls</strong> and key reports</li>
<li>Conclude on whether reliance is appropriate</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT — information produced by the entity (IPE):</strong> When a control or audit procedure relies on a system-generated report, the auditor must test the report's <strong>completeness and accuracy</strong> — typically by validating the report logic/parameters and agreeing data back to source. An untested report is not reliable evidence, however official it looks.</p></div>

<h3>Computer-assisted audit techniques (CAATs)</h3>
<table>
<thead><tr><th>Technique</th><th>How it works</th></tr></thead>
<tbody>
<tr><td><strong>Test data</strong></td><td>Auditor's fictitious transactions are run through the client's system to see if controls reject them</td></tr>
<tr><td><strong>Integrated test facility (ITF)</strong></td><td>A dummy entity inside the live system so test transactions process alongside real ones</td></tr>
<tr><td><strong>Parallel simulation</strong></td><td>Auditor's own program reprocesses real client data and results are compared</td></tr>
<tr><td><strong>Embedded audit modules</strong></td><td>Code within the application continuously flags transactions meeting audit criteria</td></tr>
<tr><td><strong>Generalized audit software</strong></td><td>Extract, sort, total, and analyze full data populations; identify duplicates, gaps, and outliers</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Using generalized audit software, an auditor tests <strong>100%</strong> of disbursements for duplicate invoice numbers, payments to vendors added within the last 30 days, and round-dollar payments just under approval thresholds — patterns a sample would likely miss.</p></div>

<h3>Reporting IT findings usefully</h3>
<p>A well-written finding states the <strong>condition</strong> (what is), the <strong>criteria</strong> (what should be), the <strong>cause</strong>, the <strong>effect/risk</strong>, and a practical <strong>recommendation</strong> — then ties the risk back to a business consequence rather than a purely technical one.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Testing 100% of a population removes <strong>sampling</strong> risk but not <strong>nonsampling</strong> risk — the extract could be incomplete, or the criteria could be wrong. Always validate the completeness of the data set first.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Scope top-down: process/objective → applications → <strong>ITGCs</strong> → automated controls and key reports</li>
<li><strong>IPE</strong>: system-generated reports must be tested for <strong>completeness and accuracy</strong> before reliance</li>
<li>CAATs: test data, <strong>ITF</strong>, parallel simulation, embedded modules, generalized audit software</li>
<li>Full-population testing removes sampling risk, not nonsampling risk — validate the extract</li>
<li>Findings: condition, criteria, cause, effect, recommendation — tie to business impact</li>
</ul>
`,
      mcqs: [
        {
          question: "An auditor plans to rely on an exception report generated by the client's ERP system. What must the auditor do before using it as audit evidence?",
          options: [
            { label: "A", text: "Nothing further, because the report comes directly from the system", isCorrect: false, rationale: "System-generated does not mean reliable — the report parameters or underlying data may be wrong." },
            { label: "B", text: "Test the completeness and accuracy of the report, including its logic and parameters", isCorrect: true, rationale: "Correct — information produced by the entity must be validated for completeness and accuracy before the auditor can rely on it." },
            { label: "C", text: "Obtain a management representation that the report is accurate", isCorrect: false, rationale: "A representation is not a substitute for testing the report itself." },
            { label: "D", text: "Use the report only if ITGCs were found to be ineffective", isCorrect: false, rationale: "This reverses the logic — effective ITGCs support, rather than preclude, reliance on system reports." },
          ],
          explanation: "Information produced by the entity — including system-generated reports used in controls or audit procedures — must be tested for completeness and accuracy. This typically involves validating the report's logic and parameters and agreeing key data back to the source system.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["IT audit", "IPE"],
        },
      ],
    },
    {
      slug: "emerging-technology-considerations",
      title: "Emerging Technology Considerations",
      shortDescription: "AI, blockchain, and IoT — how they change risk and what controls follow.",
      blueprintArea: "Area I: Information Systems and Data Management",
      blueprintStatus: "PROVISIONAL",
      difficulty: "MEDIUM",
      estimatedMinutes: 45,
      order: 12,
      studyMaterialHtml: `
<h2>Artificial intelligence and machine learning</h2>
<p>AI models learn patterns from training data rather than following explicitly coded rules. That shifts the control questions:</p>
<ul>
<li><strong>Data quality and bias</strong> — a model trained on biased or unrepresentative data will produce biased outputs at scale</li>
<li><strong>Explainability</strong> — can the organization explain <em>why</em> a model reached a conclusion? This matters enormously for credit, hiring, and accounting estimates</li>
<li><strong>Model drift</strong> — performance degrades as real-world conditions diverge from training conditions, requiring ongoing monitoring and periodic retraining</li>
<li><strong>Human oversight</strong> — who reviews and can override model output, and at what threshold?</li>
<li><strong>Change management over models</strong> — retraining is a change and needs approval and testing, just like code</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Using AI does not transfer accountability. If a model generates an accounting estimate, management still owns that estimate and must be able to support the assumptions and evaluate the output for reasonableness.</p></div>

<h3>Blockchain and distributed ledgers</h3>
<table>
<thead><tr><th>Property</th><th>Control implication</th></tr></thead>
<tbody>
<tr><td>Immutable, append-only ledger</td><td>Strong integrity and audit trail — but errors <strong>cannot be edited</strong>, only corrected by a new offsetting entry</td></tr>
<tr><td>Distributed consensus</td><td>No single point of trust; reduces reliance on a central intermediary</td></tr>
<tr><td>Smart contracts</td><td>Self-executing code — a bug executes automatically and at scale, so pre-deployment code review is critical</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A blockchain proves a transaction was <em>recorded</em> and not subsequently altered. It does <strong>not</strong> prove the transaction was <em>authorized</em>, correctly valued, or that the goods actually exist — so existence and valuation still require traditional audit evidence.</p></div>

<h3>IoT and connected devices</h3>
<p>Sensors and connected equipment expand the attack surface dramatically. Common weaknesses: default credentials never changed, firmware that is rarely patched, and devices deployed on the same network segment as financial systems. Network <strong>segmentation</strong> is the primary mitigating control.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> For any emerging technology, the exam tends to reward the same instinct: identify what the technology <em>does</em> and <em>does not</em> assure, then apply conventional control concepts — access, change management, monitoring, and human oversight — to the new context.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>AI risks: <strong>data bias, explainability, model drift, human oversight, change control over retraining</strong></li>
<li>Using AI never transfers accountability — management still owns the estimate</li>
<li>Blockchain: immutable append-only (errors fixed by offsetting entry), consensus, smart contracts execute automatically</li>
<li>Blockchain proves <strong>recording integrity</strong>, not authorization, valuation, or existence</li>
<li>IoT: default credentials, unpatched firmware → <strong>network segmentation</strong> is the key control</li>
</ul>
`,
      mcqs: [
        {
          question: "What does recording a transaction on a blockchain reliably demonstrate?",
          options: [
            { label: "A", text: "That the transaction was properly authorized by management", isCorrect: false, rationale: "Blockchain does not validate whether the underlying transaction had proper business authorization." },
            { label: "B", text: "That the recorded transaction has not been altered since it was written", isCorrect: true, rationale: "Correct — the immutable, append-only structure provides strong assurance over the integrity of what was recorded." },
            { label: "C", text: "That the goods or services underlying the transaction actually exist", isCorrect: false, rationale: "Blockchain records data; it cannot verify physical existence in the real world." },
            { label: "D", text: "That the transaction is recorded at the correct fair value", isCorrect: false, rationale: "Valuation still requires traditional audit evidence and judgment." },
          ],
          explanation: "A blockchain provides strong assurance that data written to the ledger has not been subsequently altered. It does not address whether the transaction was authorized, correctly valued, or whether the underlying goods exist — those assertions still require conventional audit evidence.",
          difficulty: "MEDIUM",
          questionType: "EXAM_TRAP",
          tags: ["blockchain", "emerging technology"],
        },
      ],
    },
  ],
};
