import type { TopicContent } from "../types";

export const privacyFrameworks: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Privacy is about how personal information is collected, used, shared, retained, and disposed of — in line with commitments to individuals and with the law. Information Systems and Controls (ISC) Area II tests privacy principles, the major US and international regulations, and techniques that reduce privacy risk. Confidentiality protects any sensitive information; privacy is specific to <strong>personal information</strong>.</p>

<h2>Key terms</h2>
<ul>
<li><strong>Personally identifiable information (PII):</strong> information that identifies, or can be linked to, an individual — name, Social Security number, account numbers, biometrics, location data, online identifiers.</li>
<li><strong>Sensitive personal information:</strong> health, financial, biometric, children's data, precise location, and similar categories requiring extra protection.</li>
<li><strong>Data controller</strong> (decides why and how personal data is processed) versus <strong>data processor</strong> (processes it on the controller's behalf, such as a payroll provider).</li>
<li><strong>Privacy by design:</strong> building privacy into systems from the start, with privacy-protective defaults.</li>
</ul>

<h2>Privacy principles</h2>
<p>The American Institute of Certified Public Accountants (AICPA) and Chartered Institute of Management Accountants (CIMA) <strong>Privacy Management Framework</strong> organizes privacy into nine components:</p>
<ol>
<li><strong>Management</strong> — policies, roles, and accountability.</li>
<li><strong>Agreement, notice, and communication</strong> — tell individuals what is collected and why; obtain agreement.</li>
<li><strong>Collection and creation</strong> — collect only for identified purposes.</li>
<li><strong>Use, retention, and disposal</strong> — use only as notified; retain no longer than needed; dispose securely.</li>
<li><strong>Access</strong> — individuals can review and correct their information.</li>
<li><strong>Disclosure to third parties</strong> — only as notified, with appropriate protection.</li>
<li><strong>Security for privacy</strong> — protect personal information against unauthorized access.</li>
<li><strong>Data integrity and quality</strong> — accurate, complete, relevant.</li>
<li><strong>Monitoring and enforcement</strong> — monitor compliance and handle complaints.</li>
</ol>
<p>The privacy category of the Trust Services Criteria (used in System and Organization Controls (SOC) 2 reports) follows similar principles. The Fair Information Practice Principles (notice, choice, access, security, enforcement) underlie most privacy laws.</p>

<h2>Major regulations</h2>
<table>
<thead><tr><th>Law or standard</th><th>Scope</th><th>Key requirements</th></tr></thead>
<tbody>
<tr><td><strong>General Data Protection Regulation (GDPR)</strong> — European Union (EU)</td><td>Personal data of people in the EU, including by organizations outside it that offer them goods or services or monitor them</td><td>A <strong>lawful basis</strong> for processing (consent, contract, legal obligation, legitimate interests, and others); data minimization and purpose limitation; individual rights (access, rectification, <strong>erasure</strong>, portability, objection); data protection impact assessments for high-risk processing; breach notification to regulators within <strong>72 hours</strong>; fines up to 4% of worldwide annual turnover or €20 million</td></tr>
<tr><td><strong>California Consumer Privacy Act (CCPA)</strong>, as amended by the California Privacy Rights Act (CPRA)</td><td>For-profit businesses meeting size or data thresholds that handle California residents' data</td><td>Rights to know, delete, correct, and <strong>opt out of the sale or sharing</strong> of personal information; limits on sensitive data use; enforced by the California Privacy Protection Agency. Many other states have similar comprehensive laws.</td></tr>
<tr><td><strong>Health Insurance Portability and Accountability Act (HIPAA)</strong></td><td>Covered entities (health plans, providers, clearinghouses) and their business associates</td><td>Privacy Rule for protected health information; Security Rule (administrative, physical, and technical safeguards for electronic health information); Breach Notification Rule; business associate agreements</td></tr>
<tr><td><strong>Gramm-Leach-Bliley Act (GLBA)</strong></td><td>Financial institutions (including tax preparers and many accounting firms)</td><td>Privacy notices and opt-out rights; the <strong>Safeguards Rule</strong> requires a written information security program, a qualified individual to oversee it, risk assessments, encryption, multi-factor authentication, and notice to the Federal Trade Commission of breaches affecting 500 or more customers</td></tr>
<tr><td><strong>Payment Card Industry Data Security Standard (PCI DSS)</strong>, version 4.0</td><td>Any organization that stores, processes, or transmits cardholder data (an industry standard, enforced by contract)</td><td>12 requirements — network security, protecting stored data, encryption in transit, vulnerability management, strong access control, monitoring and testing, security policy</td></tr>
<tr><td>Children's Online Privacy Protection Act</td><td>Online services directed to children under 13</td><td>Verifiable parental consent</td></tr>
<tr><td>State data breach notification laws</td><td>All 50 states</td><td>Notify affected residents (and sometimes regulators) of breaches of personal information</td></tr>
</tbody>
</table>
<p>For tax practitioners, Internal Revenue Code Section 7216 restricts use and disclosure of tax return information, and the Internal Revenue Service expects a written information security plan.</p>

<h2>Privacy-enhancing techniques</h2>
<table>
<thead><tr><th>Technique</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Data minimization</td><td>Collect and keep only what's needed</td></tr>
<tr><td><strong>Anonymization</strong></td><td>Irreversibly removes identifiers so individuals can't be re-identified — anonymized data generally falls outside privacy laws</td></tr>
<tr><td><strong>Pseudonymization</strong></td><td>Replaces identifiers with tokens or codes; re-identification is possible with separately held information — still personal data</td></tr>
<tr><td>Tokenization</td><td>Replaces sensitive values (card numbers) with non-sensitive tokens; the mapping is held in a secure vault</td></tr>
<tr><td>Data masking</td><td>Hides parts of data (showing only the last four digits), often in test environments</td></tr>
<tr><td>Encryption</td><td>Protects data but is reversible with the key</td></tr>
</tbody>
</table>

<h2>A privacy program</h2>
<ul>
<li>Inventory and map personal data (what, where, why, who has access, how long).</li>
<li>Publish clear privacy notices and manage consent and preferences.</li>
<li>Conduct privacy impact assessments for new systems and vendors.</li>
<li>Handle individual rights requests within legal deadlines.</li>
<li>Contract with vendors for data protection; monitor them.</li>
<li>Train staff; prepare for breach response and notification.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Distinguish privacy from confidentiality and security.</li>
<li>Match a scenario to the applicable law (GDPR, HIPAA, GLBA, PCI DSS, CCPA).</li>
<li>Identify privacy principles and individual rights.</li>
<li>Distinguish anonymization, pseudonymization, tokenization, and masking.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Pseudonymized data is still personal data (it can be re-linked); anonymized data is not. Payment card data points to PCI DSS; health data to HIPAA; financial institution customer data to GLBA.</p></div>
`,
  revision: `
<h3>Basics</h3>
<p>Privacy = personal information handling. Controller decides; processor acts on its behalf. Privacy by design.</p>

<h3>Privacy Management Framework (9 components)</h3>
<p>Management · notice and agreement · collection · use, retention, disposal · access · disclosure to third parties · security · quality · monitoring and enforcement.</p>

<h3>Laws</h3>
<ul>
<li>General Data Protection Regulation (GDPR): lawful basis, rights incl. erasure, 72-hour breach notice, fines up to 4% of turnover.</li>
<li>California Consumer Privacy Act (CCPA): know, delete, correct, opt out of sale or sharing.</li>
<li>Health Insurance Portability and Accountability Act (HIPAA): health information; Privacy, Security, Breach Rules.</li>
<li>Gramm-Leach-Bliley Act (GLBA): financial institutions (incl. tax preparers); Safeguards Rule.</li>
<li>Payment Card Industry Data Security Standard (PCI DSS) 4.0: card data, 12 requirements, contractual.</li>
</ul>

<h3>Techniques</h3>
<p>Minimization · anonymization (irreversible, not personal data) · pseudonymization (reversible, still personal) · tokenization · masking · encryption.</p>
`,
};
