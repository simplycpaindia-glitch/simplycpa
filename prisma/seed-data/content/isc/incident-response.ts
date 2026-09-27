import type { TopicContent } from "../types";

export const incidentResponse: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>No organization prevents every attack, so detection and response matter as much as prevention. Information Systems and Controls (ISC) Area II tests security monitoring, the phases of incident response, evidence handling, breach notification obligations, and lessons learned.</p>

<h2>Events versus incidents</h2>
<ul>
<li>An <strong>event</strong> is any observable occurrence (a login, a blocked connection).</li>
<li>An <strong>incident</strong> is an event that actually or potentially jeopardizes the confidentiality, integrity, or availability of systems or data, or violates security policy.</li>
<li>A <strong>breach</strong> is an incident involving unauthorized access to or disclosure of protected data — often triggering legal notification duties.</li>
</ul>

<h2>Security monitoring</h2>
<ul>
<li><strong>Logging:</strong> capture security-relevant events (authentication, privileged actions, changes, network traffic), protect logs from tampering, and retain them.</li>
<li><strong>Security information and event management (SIEM)</strong> systems collect and correlate logs from many sources and raise alerts. Security orchestration, automation, and response tools automate routine responses.</li>
<li>A <strong>security operations center</strong> — an in-house or outsourced team — monitors alerts around the clock.</li>
<li><strong>Intrusion detection and prevention systems</strong>, endpoint detection and response tools, and <strong>data loss prevention</strong> tools detect suspicious activity and data exfiltration.</li>
<li><strong>Threat intelligence</strong> provides indicators of compromise (known malicious addresses, file hashes) and attacker techniques (for example, the MITRE ATT&amp;CK knowledge base).</li>
<li>Useful metrics: mean time to detect and mean time to respond or recover.</li>
</ul>

<h2>The incident response life cycle</h2>
<p>The National Institute of Standards and Technology (NIST) guidance (Special Publication 800-61) describes these phases, now aligned with the Respond and Recover functions of the NIST Cybersecurity Framework 2.0:</p>
<table>
<thead><tr><th>Phase</th><th>Activities</th></tr></thead>
<tbody>
<tr><td><strong>1. Preparation</strong></td><td>An incident response plan and playbooks; a defined team with roles (technical, legal, communications, executive); contact lists (law enforcement, insurers, forensic firms, regulators); tools; training and <strong>tabletop exercises</strong>; cyber insurance</td></tr>
<tr><td><strong>2. Detection and analysis</strong></td><td>Identify and validate the incident from alerts or reports; determine scope, affected systems and data, and severity; document everything; prioritize by business impact</td></tr>
<tr><td><strong>3. Containment</strong></td><td>Short-term (isolate infected devices, disable compromised accounts, block malicious addresses) and long-term (patch, rebuild temporary systems) — preserving evidence</td></tr>
<tr><td><strong>4. Eradication</strong></td><td>Remove malware and attacker access, close the vulnerability, reset credentials</td></tr>
<tr><td><strong>5. Recovery</strong></td><td>Restore systems from clean backups, validate they work, monitor closely for reinfection, return to normal operations</td></tr>
<tr><td><strong>6. Post-incident activity</strong></td><td>A <strong>lessons-learned</strong> review: root cause, what worked, what didn't; update controls, plans, and training; retain evidence and documentation</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE (ransomware):</strong> An employee opens a phishing attachment and file servers are encrypted. The team isolates affected servers from the network (containment), engages forensic specialists and counsel, identifies the malware and entry point, removes it and resets credentials (eradication), restores data from <strong>offline, immutable backups</strong> (recovery), evaluates notification duties, and then strengthens email filtering and multi-factor authentication (lessons learned). Paying a ransom is a business and legal decision — it doesn't guarantee recovery and may breach sanctions rules.</p></div>

<h2>Evidence handling</h2>
<ul>
<li>Preserve volatile evidence (memory, active connections) before shutting systems down where possible.</li>
<li>Create forensic images rather than working on original media; use hash values to prove images are unaltered.</li>
<li>Maintain a documented <strong>chain of custody</strong> — who handled evidence, when, and how — so it is admissible in legal proceedings.</li>
</ul>

<h2>Notification and disclosure</h2>
<table>
<thead><tr><th>Requirement</th><th>Timing</th></tr></thead>
<tbody>
<tr><td>Securities and Exchange Commission (SEC) Form 8-K, Item 1.05 (public companies)</td><td>Within <strong>4 business days</strong> after determining a cybersecurity incident is <strong>material</strong></td></tr>
<tr><td>General Data Protection Regulation (GDPR)</td><td>Notify the supervisory authority within <strong>72 hours</strong> of becoming aware of a personal data breach; notify individuals without undue delay if high risk</td></tr>
<tr><td>Health Insurance Portability and Accountability Act (HIPAA)</td><td>Notify affected individuals without unreasonable delay and within <strong>60 days</strong> of discovery</td></tr>
<tr><td>Gramm-Leach-Bliley Act Safeguards Rule</td><td>Notify the Federal Trade Commission within 30 days of discovering an event affecting 500 or more customers</td></tr>
<tr><td>State breach notification laws</td><td>Varying deadlines (often 30–60 days) for affected residents and sometimes the attorney general</td></tr>
<tr><td>Contracts</td><td>Customer and partner agreements often require prompt notice</td></tr>
</tbody>
</table>
<p>Public companies must also disclose cybersecurity risk management, strategy, and governance in their annual report (Form 10-K Item 1C).</p>

<h2>Connecting to controls and assurance</h2>
<ul>
<li>Incident response plans, monitoring, and testing are evaluated in System and Organization Controls (SOC) 2 engagements under the security criteria (system operations).</li>
<li>Incidents can reveal control deficiencies that affect internal control over financial reporting — for example, unauthorized changes to financial data.</li>
<li>Auditors consider the effect of cyber incidents on financial statements: contingent liabilities, impairment, and disclosures.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Order the phases of incident response and match activities to phases.</li>
<li>Distinguish events, incidents, and breaches.</li>
<li>Identify evidence-handling and chain-of-custody practices.</li>
<li>Apply notification deadlines (SEC, GDPR, HIPAA).</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Containment comes before eradication, and eradication before recovery — you isolate the problem, remove it, then restore. Lessons learned is always the final phase.</p></div>
`,
  revision: `
<h3>Definitions</h3>
<p>Event (any occurrence) → incident (threat to confidentiality, integrity, or availability) → breach (unauthorized access to protected data).</p>

<h3>Monitoring</h3>
<p>Logging · security information and event management (SIEM) correlation · security operations center · intrusion detection and prevention · data loss prevention · threat intelligence.</p>

<h3>Life cycle (National Institute of Standards and Technology (NIST) 800-61)</h3>
<ol>
<li>Preparation (plan, team, tabletop exercises)</li>
<li>Detection and analysis</li>
<li>Containment (isolate, preserve evidence)</li>
<li>Eradication (remove cause)</li>
<li>Recovery (clean backups, monitor)</li>
<li>Lessons learned</li>
</ol>

<h3>Evidence</h3>
<p>Forensic images, hash verification, chain of custody.</p>

<h3>Notification</h3>
<ul>
<li>Securities and Exchange Commission (SEC) 8-K: 4 business days after materiality determination.</li>
<li>General Data Protection Regulation (GDPR): 72 hours to regulator.</li>
<li>Health Insurance Portability and Accountability Act (HIPAA): within 60 days.</li>
<li>States: varies (often 30–60 days).</li>
</ul>
`,
};
