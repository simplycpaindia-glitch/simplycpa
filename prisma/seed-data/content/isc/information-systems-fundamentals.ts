import type { TopicContent } from "../types";

export const informationSystemsFundamentals: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Area I of Information Systems and Controls (ISC) — Information Systems and Data Management — is 35–45% of the section. It starts with how information systems are built and delivered: enterprise systems, processing methods, cloud models, network components, and how organizations keep systems available through business continuity and disaster recovery planning.</p>

<h2>Types of business information systems</h2>
<table>
<thead><tr><th>System</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><strong>Enterprise resource planning (ERP)</strong></td><td>An integrated suite (finance, procurement, inventory, sales, human resources) sharing <strong>one database</strong> — eliminates duplicate data entry and supports real-time reporting</td></tr>
<tr><td>Accounting information system</td><td>Captures, processes, and reports financial transactions (often a module of the ERP)</td></tr>
<tr><td>Customer relationship management (CRM)</td><td>Sales pipeline, customer data, service history</td></tr>
<tr><td>Supply chain management (SCM)</td><td>Procurement, logistics, supplier coordination</td></tr>
<tr><td>Human capital management</td><td>Employee records, payroll, benefits</td></tr>
<tr><td>Transaction processing system</td><td>High-volume routine transactions (point of sale)</td></tr>
<tr><td>Management information and decision support systems</td><td>Reports, dashboards, and models for managers</td></tr>
</tbody>
</table>

<h2>Processing methods</h2>
<ul>
<li><strong>Batch processing:</strong> transactions are accumulated and processed together (for example, nightly payroll). Efficient, allows batch control totals, but data is not current between runs.</li>
<li><strong>Online real-time processing:</strong> each transaction is processed immediately — current data, but requires stronger input and access controls because errors enter the system at once.</li>
<li><strong>Centralized versus distributed</strong> processing — distributed systems improve resilience but complicate control and consistency.</li>
</ul>

<h2>Cloud computing</h2>
<table>
<thead><tr><th>Service model</th><th>Provider manages</th><th>Customer manages</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Infrastructure as a service (IaaS)</strong></td><td>Hardware, storage, networking, virtualization</td><td>Operating systems, middleware, applications, data</td><td>Renting virtual servers</td></tr>
<tr><td><strong>Platform as a service (PaaS)</strong></td><td>Infrastructure + operating systems and runtime</td><td>Applications and data</td><td>A development and hosting platform</td></tr>
<tr><td><strong>Software as a service (SaaS)</strong></td><td>Everything up to the application</td><td>Data, user access, configuration</td><td>Cloud accounting, email, customer relationship software</td></tr>
</tbody>
</table>
<p>Under the <strong>shared responsibility model</strong>, the customer <em>always</em> remains responsible for its data, user access management, and configuration choices — even in SaaS.</p>
<ul>
<li><strong>Deployment models:</strong> public (shared multi-tenant infrastructure), private (dedicated to one organization), community (shared by organizations with common needs), and hybrid (a mix).</li>
<li><strong>Benefits:</strong> scalability and elasticity, lower upfront cost, pay-per-use, resilience.</li>
<li><strong>Risks:</strong> reliance on the provider (need System and Organization Controls (SOC) reports), data location and privacy, vendor lock-in, misconfiguration, and multi-tenancy.</li>
</ul>

<h2>Infrastructure and networks</h2>
<ul>
<li><strong>Local area network (LAN)</strong> within a site; <strong>wide area network (WAN)</strong> across locations; <strong>virtual private network (VPN)</strong> — an encrypted tunnel over the internet for remote access.</li>
<li><strong>Client-server</strong> architecture: clients request services from central servers.</li>
<li><strong>Virtualization</strong> runs multiple virtual machines on one physical server; <strong>containers</strong> package applications with their dependencies.</li>
<li><strong>Edge computing</strong> processes data near where it's generated (for example, Internet of Things (IoT) sensors).</li>
<li><strong>Application programming interfaces (APIs)</strong> let systems exchange data automatically — they need authentication and monitoring.</li>
</ul>

<h2>Availability — business continuity and disaster recovery</h2>
<ul>
<li>A <strong>business continuity plan (BCP)</strong> keeps critical business functions running during a disruption; a <strong>disaster recovery plan (DRP)</strong> restores information technology (IT) systems and data.</li>
<li>A <strong>business impact analysis</strong> identifies critical processes and sets recovery objectives:
<ul>
<li><strong>Recovery time objective (RTO):</strong> the maximum acceptable time to restore a system.</li>
<li><strong>Recovery point objective (RPO):</strong> the maximum acceptable amount of data loss, measured in time — it drives backup frequency.</li>
</ul></li>
</ul>
<table>
<thead><tr><th>Recovery site</th><th>Readiness</th><th>Cost</th></tr></thead>
<tbody>
<tr><td><strong>Hot site</strong></td><td>Fully equipped with current data; recovery in hours or less</td><td>Highest</td></tr>
<tr><td><strong>Warm site</strong></td><td>Hardware and connectivity, data needs restoring; recovery in days</td><td>Moderate</td></tr>
<tr><td><strong>Cold site</strong></td><td>Space and power only; recovery in weeks</td><td>Lowest</td></tr>
<tr><td>Cloud-based recovery</td><td>Replicated systems spun up on demand</td><td>Variable</td></tr>
</tbody>
</table>
<ul>
<li><strong>Backups:</strong> full, incremental (changes since the last backup — fastest to create, slowest to restore), and differential (changes since the last full backup). Follow the <strong>3-2-1 rule</strong>: three copies, on two media types, one offsite (ideally one immutable or offline, against ransomware).</li>
<li><strong>Redundancy</strong> (redundant array of independent disks (RAID), failover clusters, load balancing) and <strong>uninterruptible power supplies</strong> reduce downtime.</li>
<li>Plans must be <strong>tested</strong> — tabletop exercises, simulations, parallel tests, and full interruption tests — and updated.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Match an organization's need to a system type or cloud service model.</li>
<li>Apply the shared responsibility model.</li>
<li>Distinguish RTO and RPO, and hot, warm, and cold sites.</li>
<li>Choose backup strategies and business continuity controls.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Recovery point objective = how much <em>data</em> you can lose (backup frequency). Recovery time objective = how much <em>downtime</em> you can tolerate (recovery speed).</p></div>
`,
  revision: `
<h3>Systems</h3>
<p>Enterprise resource planning (ERP): integrated, single database. Batch = efficient, not current; real-time = current, needs strong input controls.</p>

<h3>Cloud</h3>
<ul>
<li>Infrastructure as a service (IaaS) → customer manages operating system and up.</li>
<li>Platform as a service (PaaS) → customer manages apps and data.</li>
<li>Software as a service (SaaS) → customer manages data, access, configuration.</li>
<li>Customer is <strong>always</strong> responsible for its data and access.</li>
<li>Public · private · community · hybrid.</li>
</ul>

<h3>Continuity</h3>
<ul>
<li>Business continuity plan (BCP) = business functions; disaster recovery plan (DRP) = systems and data.</li>
<li>Recovery time objective (RTO) = max downtime. Recovery point objective (RPO) = max data loss.</li>
<li>Hot (hours) · warm (days) · cold (weeks).</li>
<li>Backups: full, incremental, differential; 3-2-1 rule; test restores.</li>
</ul>

<h3>Networks</h3>
<p>Local area network (LAN) · wide area network (WAN) · virtual private network (VPN, encrypted remote access) · application programming interfaces (APIs) need authentication.</p>
`,
};
