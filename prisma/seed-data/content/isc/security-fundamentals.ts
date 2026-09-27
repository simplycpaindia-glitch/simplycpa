import type { TopicContent } from "../types";

export const securityFundamentals: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Security, Confidentiality, and Privacy is Area II of Information Systems and Controls (ISC), 35–45% of the section. It tests the goals of information security, common threats, the layers of controls that defend against them, identity and access management, encryption, and the major cybersecurity frameworks.</p>

<h2>Goals — confidentiality, integrity, and availability (CIA)</h2>
<table>
<thead><tr><th>Goal</th><th>Meaning</th><th>Example controls</th></tr></thead>
<tbody>
<tr><td><strong>Confidentiality</strong></td><td>Information is disclosed only to authorized parties</td><td>Encryption, access controls, data classification</td></tr>
<tr><td><strong>Integrity</strong></td><td>Information is accurate, complete, and changed only in authorized ways</td><td>Hashing, digital signatures, change management, input validation</td></tr>
<tr><td><strong>Availability</strong></td><td>Systems and data are accessible when needed</td><td>Redundancy, backups, distributed denial-of-service protection, disaster recovery</td></tr>
</tbody>
</table>
<p>Together these form the "CIA triad", the standard way to frame security objectives. Related concepts: <strong>authentication</strong> (proving identity), <strong>authorization</strong> (what you may do), and <strong>non-repudiation</strong> (a party can't deny an action — achieved with digital signatures and logs).</p>

<h2>Threats and attacks</h2>
<table>
<thead><tr><th>Threat</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>Phishing</strong> (spear phishing, whaling)</td><td>Deceptive messages to steal credentials or deliver malware; spear phishing targets specific people, whaling targets executives</td></tr>
<tr><td>Business email compromise</td><td>Impersonating executives or vendors to redirect payments — a leading cause of financial loss</td></tr>
<tr><td>Social engineering</td><td>Manipulating people (pretexting, tailgating, baiting)</td></tr>
<tr><td><strong>Ransomware</strong></td><td>Encrypts or steals data and demands payment</td></tr>
<tr><td>Malware — viruses, worms, trojans, spyware, keyloggers</td><td>Malicious software; worms self-replicate across networks; trojans hide inside legitimate-looking programs</td></tr>
<tr><td>Denial of service (DoS) and distributed denial of service (DDoS)</td><td>Overwhelming systems to make them unavailable</td></tr>
<tr><td>Man-in-the-middle</td><td>Intercepting communications between two parties</td></tr>
<tr><td>Structured query language (SQL) injection and cross-site scripting</td><td>Inserting malicious code through application inputs</td></tr>
<tr><td>Credential stuffing and brute force</td><td>Automated password guessing or reuse of stolen passwords</td></tr>
<tr><td>Insider threats</td><td>Malicious or careless employees and contractors</td></tr>
<tr><td>Advanced persistent threats</td><td>Well-resourced attackers maintaining long-term hidden access</td></tr>
<tr><td>Supply chain attacks</td><td>Compromising a vendor or software update to reach its customers</td></tr>
<tr><td>Zero-day exploits</td><td>Attacks on vulnerabilities unknown to the vendor (no patch yet)</td></tr>
</tbody>
</table>

<h2>Types of controls</h2>
<table>
<thead><tr><th>By function</th><th>By nature</th></tr></thead>
<tbody>
<tr><td><strong>Preventive</strong> — stop incidents (firewalls, multi-factor authentication, encryption)</td><td><strong>Administrative</strong> — policies, training, background checks</td></tr>
<tr><td><strong>Detective</strong> — identify incidents (logs, intrusion detection, reviews)</td><td><strong>Technical (logical)</strong> — software and hardware controls</td></tr>
<tr><td><strong>Corrective</strong> — limit damage and restore (backups, incident response, patching)</td><td><strong>Physical</strong> — locks, badges, cameras, guards</td></tr>
</tbody>
</table>
<p><strong>Defense in depth</strong> layers multiple controls so one failure doesn't expose the organization. <strong>Zero trust</strong> assumes no user or device is trusted by default — every request is verified ("never trust, always verify"), with least privilege and micro-segmentation.</p>

<h2>Identity and access management</h2>
<ul>
<li><strong>Authentication factors:</strong> something you <strong>know</strong> (password), something you <strong>have</strong> (token, phone), something you <strong>are</strong> (biometrics). <strong>Multi-factor authentication (MFA)</strong> combines two or more <em>different</em> categories — a password plus a security question is still single-factor.</li>
<li><strong>Single sign-on (SSO)</strong> lets users authenticate once for many systems — convenient, but it concentrates risk, so pair it with MFA.</li>
<li><strong>Role-based access control</strong> assigns permissions to roles, not individuals; <strong>least privilege</strong> grants only what's needed; <strong>privileged access management</strong> controls and monitors administrator accounts.</li>
<li>Provision and deprovision access promptly; review access periodically.</li>
</ul>

<h2>Encryption and related tools</h2>
<table>
<thead><tr><th>Technique</th><th>How it works</th><th>Use</th></tr></thead>
<tbody>
<tr><td><strong>Symmetric encryption</strong></td><td>One shared secret key encrypts and decrypts (for example, the Advanced Encryption Standard (AES))</td><td>Fast — bulk data at rest and in transit</td></tr>
<tr><td><strong>Asymmetric (public key) encryption</strong></td><td>A key pair: data encrypted with the recipient's <strong>public key</strong> can be decrypted only with their <strong>private key</strong></td><td>Key exchange, secure email</td></tr>
<tr><td><strong>Hashing</strong></td><td>A one-way function producing a fixed-length digest; any change to the data changes the hash</td><td>Integrity checks, password storage (with salting)</td></tr>
<tr><td><strong>Digital signature</strong></td><td>The sender encrypts a hash of the message with their <strong>private key</strong>; anyone verifies with the sender's public key</td><td>Authenticity, integrity, non-repudiation</td></tr>
<tr><td>Digital certificates and public key infrastructure</td><td>A certificate authority vouches that a public key belongs to an entity</td><td>Websites (Transport Layer Security (TLS) — the padlock), code signing</td></tr>
</tbody>
</table>
<p>Encrypt data <strong>at rest</strong> (databases, laptops, backups) and <strong>in transit</strong> (TLS, virtual private networks); protect and rotate keys.</p>

<h2>Network and endpoint security</h2>
<ul>
<li><strong>Firewalls</strong> filter traffic by rules; next-generation firewalls inspect applications and content.</li>
<li><strong>Intrusion detection systems</strong> alert on suspicious activity; <strong>intrusion prevention systems</strong> also block it.</li>
<li><strong>Network segmentation</strong> and a demilitarized zone (DMZ) isolate public-facing servers from internal networks.</li>
<li><strong>Endpoint protection</strong> — antivirus and endpoint detection and response tools, device encryption, and mobile device management.</li>
<li><strong>Patch and vulnerability management</strong> — scan regularly, prioritize by severity, patch promptly. <strong>Penetration testing</strong> simulates attacks to find weaknesses.</li>
<li><strong>Logging and monitoring</strong> — centralized security information and event management (SIEM) systems correlate logs and raise alerts.</li>
<li><strong>Security awareness training</strong> and phishing simulations reduce human risk.</li>
</ul>

<h2>Cybersecurity frameworks</h2>
<ul>
<li><strong>National Institute of Standards and Technology (NIST) Cybersecurity Framework 2.0</strong> — six functions: <strong>Govern</strong> (added in 2.0), <strong>Identify</strong>, <strong>Protect</strong>, <strong>Detect</strong>, <strong>Respond</strong>, <strong>Recover</strong>.</li>
<li><strong>International Organization for Standardization (ISO)</strong> standard 27001 — requirements for an information security management system (certifiable).</li>
<li><strong>Center for Internet Security (CIS) Critical Security Controls</strong> — a prioritized set of safeguards.</li>
<li>NIST Special Publication 800-53 — a detailed control catalog.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Match a control to the CIA goal it supports, or to preventive, detective, or corrective.</li>
<li>Identify an attack type from a scenario.</li>
<li>Distinguish symmetric and asymmetric encryption, hashing, and digital signatures.</li>
<li>Map activities to NIST Cybersecurity Framework functions.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> To send a confidential message, encrypt with the <em>recipient's public</em> key. To sign a message, encrypt its hash with the <em>sender's private</em> key. Keep "public for secrecy, private for signing" in mind.</p></div>
`,
  revision: `
<h3>Confidentiality, integrity, availability (CIA)</h3>
<p>Confidentiality → encryption, access control. Integrity → hashing, signatures, change control. Availability → redundancy, backups, disaster recovery.</p>

<h3>Threats</h3>
<p>Phishing (spear, whaling) · business email compromise · ransomware · malware · denial of service · man-in-the-middle · injection · insiders · supply chain · zero-day.</p>

<h3>Controls</h3>
<ul>
<li>Preventive · detective · corrective; administrative · technical · physical.</li>
<li>Defense in depth; zero trust ("never trust, always verify").</li>
</ul>

<h3>Access</h3>
<ul>
<li>Multi-factor authentication (MFA) = different categories (know, have, are).</li>
<li>Single sign-on (SSO) + MFA; role-based access; least privilege; privileged access management.</li>
</ul>

<h3>Cryptography</h3>
<ul>
<li>Symmetric: one key, fast. Asymmetric: public encrypts, private decrypts.</li>
<li>Hash: one-way, integrity. Digital signature: hash + sender's private key → non-repudiation.</li>
</ul>

<h3>Frameworks</h3>
<p>National Institute of Standards and Technology (NIST) Cybersecurity Framework 2.0: Govern, Identify, Protect, Detect, Respond, Recover · International Organization for Standardization (ISO) 27001 · Center for Internet Security (CIS) Controls.</p>
`,
};
