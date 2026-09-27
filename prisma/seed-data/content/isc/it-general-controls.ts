import type { TopicContent } from "../types";

export const itGeneralControls: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Information technology (IT) general controls (ITGCs) are the foundation for every automated control and system-generated report. Information Systems and Controls (ISC) tests the ITGC domains, how they are designed and tested, and the effect of ITGC weaknesses — from the perspective of management, a service organization, and an auditor.</p>

<h2>What ITGCs do</h2>
<p>ITGCs are policies and procedures that apply to many applications and support the effective functioning of <strong>application controls</strong> by keeping systems secure, stable, and properly changed. If ITGCs fail, the auditor or management can't assume automated controls kept working throughout the period.</p>

<h2>The four ITGC domains</h2>
<table>
<thead><tr><th>Domain</th><th>Objective</th><th>Key controls</th></tr></thead>
<tbody>
<tr><td><strong>Logical access</strong> (access to programs and data)</td><td>Only authorized people can access systems and data, with only the access they need</td><td>Unique user identifiers; strong passwords and <strong>multi-factor authentication (MFA)</strong>; role-based access and <strong>least privilege</strong>; formal provisioning with approval; <strong>timely removal</strong> of terminated users; periodic <strong>user access reviews</strong>; restricted and monitored privileged (administrator) accounts; segregation of incompatible duties</td></tr>
<tr><td><strong>Change management</strong> (program changes)</td><td>Changes to applications, databases, and infrastructure are authorized, tested, approved, and implemented correctly</td><td>Documented change requests; impact analysis; testing in a separate environment; <strong>user acceptance testing</strong>; approval before migration; <strong>segregation between developers and production</strong>; emergency change procedures with after-the-fact review; version control</td></tr>
<tr><td><strong>Program development and acquisition</strong></td><td>New systems are designed, built or bought, tested, and implemented properly</td><td>Project governance; requirements sign-off; testing; data conversion controls; post-implementation review</td></tr>
<tr><td><strong>Computer operations</strong></td><td>Systems run reliably and data can be recovered</td><td>Job scheduling and monitoring; <strong>backup and recovery</strong> with restoration testing; incident and problem management; capacity and performance monitoring; physical and environmental controls in data centers</td></tr>
</tbody>
</table>

<h2>Segregation of duties in information technology</h2>
<ul>
<li>Separate <strong>systems development</strong> (programmers, developers), <strong>IT operations</strong> (operators, system administrators), <strong>data or database administration</strong>, <strong>security administration</strong>, and <strong>end users</strong>.</li>
<li>Developers should not move their own code into production or have write access to production data.</li>
<li>Security administrators should not also be business users who approve transactions.</li>
<li>Where segregation isn't feasible (small IT teams), use compensating controls such as logging and independent review of changes and privileged activity.</li>
</ul>

<h2>Relationship to application controls</h2>
<table>
<thead><tr><th>ITGC deficiency</th><th>Effect on application controls and reports</th></tr></thead>
<tbody>
<tr><td>Developers can change production code without approval</td><td>Automated calculations, edit checks, and report logic could have been altered — reliance on them is undermined</td></tr>
<tr><td>Terminated employees retain access</td><td>Risk of unauthorized transactions or data changes</td></tr>
<tr><td>No backup testing</td><td>Risk of data loss affecting completeness</td></tr>
<tr><td>Excessive privileged access</td><td>Controls can be bypassed or overridden</td></tr>
</tbody>
</table>

<h2>Testing ITGCs</h2>
<ul>
<li><strong>Design and implementation:</strong> inquiry plus inspection of policies, system configurations (password settings, access roles), and walkthroughs.</li>
<li><strong>Operating effectiveness:</strong> samples over the period — for example, select new users and inspect approval; select terminations and confirm access was removed promptly; select changes and inspect testing and approval evidence; inspect access review sign-offs.</li>
<li><strong>Population completeness:</strong> obtain system-generated lists (all changes, all users) and verify they are complete before sampling.</li>
<li>Deficiencies are evaluated for their effect on dependent application controls and whether <strong>compensating controls</strong> exist (for example, a detective review of all changes made).</li>
</ul>

<h2>Frameworks that organize IT controls</h2>
<ul>
<li><strong>Control Objectives for Information and Related Technologies (COBIT) 2019</strong> — an Information Systems Audit and Control Association (ISACA) framework for governance and management of enterprise IT, separating governance objectives (Evaluate, Direct, and Monitor) from management objectives (Align, Plan, and Organize; Build, Acquire, and Implement; Deliver, Service, and Support; Monitor, Evaluate, and Assess).</li>
<li><strong>Committee of Sponsoring Organizations of the Treadway Commission (COSO) Internal Control — Integrated Framework</strong>, principle 11: the organization selects and develops general control activities over technology.</li>
<li><strong>National Institute of Standards and Technology (NIST)</strong> Special Publication 800-53 control catalog, and the NIST Cybersecurity Framework.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Classify a control into an ITGC domain.</li>
<li>Identify incompatible duties in an IT environment.</li>
<li>Explain how an ITGC weakness affects reliance on automated controls.</li>
<li>Choose an appropriate test of an ITGC.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> If a question describes a well-designed automated control <em>and</em> a change-management or access weakness in the same system, the answer is almost always that reliance on the automated control is limited until the ITGC issue is addressed.</p></div>
`,
  revision: `
<h3>Information technology general controls (ITGCs) — 4 domains</h3>
<ul>
<li><strong>Logical access:</strong> unique user identifiers, multi-factor authentication (MFA), least privilege, provisioning approval, prompt termination, access reviews, privileged account monitoring.</li>
<li><strong>Change management:</strong> request, test, user acceptance, approve, migrate by someone other than the developer; emergency change review.</li>
<li><strong>Development and acquisition:</strong> governance, testing, data conversion controls.</li>
<li><strong>Operations:</strong> job scheduling, backups with restore testing, incident management, data center controls.</li>
</ul>

<h3>Segregation</h3>
<p>Development ≠ operations ≠ database administration ≠ security ≠ users. Developers: no production access.</p>

<h3>Why ITGCs matter</h3>
<p>Weak ITGCs → can't rely on automated controls or system reports.</p>

<h3>Testing</h3>
<p>Sample new users, terminations, changes, access reviews; confirm populations are complete; consider compensating controls.</p>

<h3>Frameworks</h3>
<p>Control Objectives for Information and Related Technologies (COBIT) 2019 · Committee of Sponsoring Organizations of the Treadway Commission (COSO) principle 11 · National Institute of Standards and Technology (NIST) 800-53.</p>
`,
};
