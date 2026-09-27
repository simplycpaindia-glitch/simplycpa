import type { TopicContent } from "../types";

export const systemsDevelopmentChange: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>New systems and changes to existing ones are a major source of risk — a flawed change can corrupt financial data across every transaction. The 2026 Information Systems and Controls (ISC) blueprint added tasks on change management, so expect questions on the system development life cycle (SDLC), testing, conversion methods, development approaches, and change controls.</p>

<h2>The system development life cycle</h2>
<table>
<thead><tr><th>Phase</th><th>Key activities and controls</th></tr></thead>
<tbody>
<tr><td><strong>1. Planning and feasibility</strong></td><td>Business case; economic, technical, operational, and schedule feasibility; project approval and governance (steering committee)</td></tr>
<tr><td><strong>2. Requirements analysis</strong></td><td>Gather and document user, business, security, and control requirements; users sign off</td></tr>
<tr><td><strong>3. Design</strong></td><td>System architecture, data design, interfaces, and <strong>built-in controls</strong> (input validation, audit trails, access roles) — cheaper to design in than to add later</td></tr>
<tr><td><strong>4. Development or acquisition</strong></td><td>Coding in a separate development environment, or selecting and configuring purchased software (vendor due diligence, contracts, escrow of source code)</td></tr>
<tr><td><strong>5. Testing</strong></td><td>Unit testing (individual modules) → integration testing (modules together) → system testing (whole system, including performance and security) → <strong>user acceptance testing</strong> (users confirm it meets their needs) — in a test environment with test data, never production</td></tr>
<tr><td><strong>6. Implementation and conversion</strong></td><td>Data conversion with reconciliations; training; go-live approval</td></tr>
<tr><td><strong>7. Operation and maintenance</strong></td><td>Ongoing support; changes follow change management; <strong>post-implementation review</strong> compares results with the original objectives</td></tr>
</tbody>
</table>

<h3>Conversion (cutover) methods</h3>
<table>
<thead><tr><th>Method</th><th>Description</th><th>Risk and cost</th></tr></thead>
<tbody>
<tr><td><strong>Direct (plunge)</strong></td><td>Switch off the old system and start the new one at once</td><td>Highest risk, lowest cost</td></tr>
<tr><td><strong>Parallel</strong></td><td>Run old and new systems together and compare results</td><td>Lowest risk, highest cost</td></tr>
<tr><td><strong>Pilot</strong></td><td>Implement in one location or unit first</td><td>Limits exposure</td></tr>
<tr><td><strong>Phased</strong></td><td>Implement module by module over time</td><td>Gradual; interfaces between old and new are needed</td></tr>
</tbody>
</table>
<p><strong>Data conversion controls:</strong> clean and map data first; reconcile record counts, control totals, and hash totals between old and new systems; have users review converted balances; keep the old data accessible.</p>

<h2>Development approaches</h2>
<table>
<thead><tr><th>Approach</th><th>Features</th><th>Control focus</th></tr></thead>
<tbody>
<tr><td><strong>Waterfall</strong></td><td>Sequential phases; each is completed and approved before the next</td><td>Formal sign-offs at each gate; late discovery of problems is costly</td></tr>
<tr><td><strong>Agile</strong> (for example, Scrum)</td><td>Short iterations (sprints) delivering working software; evolving requirements; close user collaboration</td><td>Controls must be built into each sprint — definition of done, testing, documentation, product owner approval</td></tr>
<tr><td><strong>DevOps</strong> with continuous integration and continuous delivery</td><td>Development and operations collaborate; automated build, test, and deployment pipelines release frequently</td><td>Automated tests and approvals in the pipeline; segregation enforced by pipeline permissions; code review; audit logs of deployments</td></tr>
<tr><td>Rapid application development and prototyping</td><td>Quick working models refined with users</td><td>Prototypes must not become production systems without full testing</td></tr>
</tbody>
</table>

<h2>Change management</h2>
<p>Every change to production — code, configuration, database structure, infrastructure, or patches — should follow a controlled process:</p>
<ol>
<li><strong>Request</strong> documented with the business reason.</li>
<li><strong>Impact and risk assessment</strong>, including effects on financial reporting and security.</li>
<li><strong>Authorization</strong> by the business owner (and a change advisory board for significant changes).</li>
<li><strong>Development</strong> in a non-production environment with version control.</li>
<li><strong>Testing</strong>, including user acceptance, with documented results.</li>
<li><strong>Approval to deploy</strong>, independent of the developer.</li>
<li><strong>Migration to production</strong> by someone other than the developer (or an automated, controlled pipeline), with a back-out plan.</li>
<li><strong>Post-implementation verification</strong> and documentation.</li>
</ol>

<h3>Emergency changes</h3>
<p>Urgent fixes may bypass normal steps, but must be logged, limited to authorized people, and <strong>reviewed and approved after the fact</strong> promptly.</p>

<h3>Supporting controls</h3>
<ul>
<li><strong>Separate environments</strong> — development, test, and production — with developers denied write access to production.</li>
<li><strong>Configuration management</strong> — a baseline of approved settings, with monitoring for unauthorized changes.</li>
<li><strong>Patch management</strong> — inventory systems, assess and test vendor patches, deploy based on risk, and track exceptions.</li>
<li><strong>Detective review</strong> — compare production change logs to approved change tickets to catch unauthorized changes.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A developer at a small company both writes code and moves it to production. A compensating control is an independent monthly review of a system-generated log of all production changes, matched to approved change requests.</p></div>

<h2>How it is tested</h2>
<ul>
<li>Order SDLC phases and match activities to phases.</li>
<li>Choose a conversion method given risk and cost.</li>
<li>Identify controls in agile and DevOps environments.</li>
<li>Identify change management weaknesses and compensating controls.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Parallel conversion is the <em>safest</em> but most expensive; direct cutover is the <em>riskiest</em> but cheapest. And user acceptance testing is performed by <em>users</em>, not by the developers.</p></div>
`,
  revision: `
<h3>System development life cycle (SDLC)</h3>
<p>Planning → requirements → design (build in controls) → development → testing (unit, integration, system, user acceptance) → implementation → maintenance and post-implementation review.</p>

<h3>Conversion</h3>
<p>Direct (riskiest, cheapest) · parallel (safest, costliest) · pilot · phased. Reconcile record counts and control totals.</p>

<h3>Approaches</h3>
<p>Waterfall (gated sign-offs) · agile (sprints, controls each iteration) · DevOps with continuous integration and delivery (automated pipeline controls).</p>

<h3>Change management</h3>
<ol>
<li>Request → impact assessment → authorize</li>
<li>Develop in non-production; test incl. user acceptance</li>
<li>Independent approval → migrate by someone other than developer → verify</li>
</ol>
<ul>
<li>Emergency changes: after-the-fact review.</li>
<li>Separate environments; configuration baselines; patch management.</li>
<li>Compensating control: review production change logs against approved tickets.</li>
</ul>
`,
};
