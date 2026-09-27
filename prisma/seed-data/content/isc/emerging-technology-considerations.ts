import type { TopicContent } from "../types";

export const emergingTechnology: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>New technologies change how transactions are processed, what risks exist, and what controls are needed. Information Systems and Controls (ISC) tests the fundamentals of artificial intelligence (AI), blockchain and crypto assets, the Internet of Things (IoT), and other emerging technologies — and, above all, the governance and control considerations each one raises.</p>

<h2>Artificial intelligence and machine learning</h2>
<ul>
<li><strong>Machine learning</strong> models learn patterns from data rather than following explicit rules — used for anomaly detection, forecasting, invoice classification, and credit scoring.</li>
<li><strong>Generative AI</strong> (large language models) produces text, code, and images — used for drafting, summarizing contracts, and answering questions.</li>
</ul>
<h3>Risks</h3>
<table>
<thead><tr><th>Risk</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Inaccuracy ("hallucination")</td><td>Plausible but false outputs — citations, figures, or legal conclusions that don't exist</td></tr>
<tr><td>Bias</td><td>Models trained on biased data produce unfair or skewed results</td></tr>
<tr><td>Lack of explainability</td><td>"Black box" models make it hard to understand or evidence decisions</td></tr>
<tr><td>Data leakage and confidentiality</td><td>Entering client or personal data into public AI tools may disclose it</td></tr>
<tr><td>Model drift</td><td>Performance degrades as real-world data changes</td></tr>
<tr><td>Security threats</td><td>Prompt injection, data poisoning, and AI-enabled phishing and deepfakes (for example, fake executive voice calls authorizing payments)</td></tr>
</tbody>
</table>
<h3>Controls</h3>
<ul>
<li>An <strong>AI governance</strong> policy — approved tools and uses, an inventory of models, risk classification, and accountability.</li>
<li><strong>Model risk management:</strong> validation before use, documentation of training data and assumptions, performance monitoring, and periodic revalidation.</li>
<li><strong>Human review</strong> of outputs used for decisions or reporting ("human in the loop").</li>
<li>Data controls — no sensitive data in unapproved tools; enterprise agreements that keep data private.</li>
<li>Frameworks: the National Institute of Standards and Technology (NIST) AI Risk Management Framework (govern, map, measure, manage) and emerging laws such as the European Union (EU) AI Act.</li>
</ul>

<h2>Blockchain and distributed ledger technology</h2>
<ul>
<li>A <strong>blockchain</strong> is a distributed, append-only ledger shared across a network. Transactions are grouped into blocks, each linked to the previous one by a <strong>cryptographic hash</strong>, making records tamper-evident.</li>
<li><strong>Consensus mechanisms</strong> (proof of work, proof of stake) let participants agree on the valid ledger without a central authority.</li>
<li><strong>Public (permissionless)</strong> blockchains are open to anyone; <strong>private (permissioned)</strong> blockchains restrict participation — common in enterprise supply chain and settlement uses.</li>
<li><strong>Smart contracts</strong> are programs on a blockchain that execute automatically when conditions are met — errors in their code execute automatically too.</li>
</ul>
<h3>Crypto assets</h3>
<ul>
<li>Control over crypto assets means control of the <strong>private keys</strong>. Key loss or theft means loss of the assets — key management (hardware wallets, multi-signature approvals, custody arrangements) is the critical control.</li>
<li>Accounting: in-scope crypto assets are measured at <strong>fair value through net income</strong> under Accounting Standards Update (ASU) 2023-08.</li>
<li>Audit considerations: evidence of existence and ownership (proving control of keys), reliability of blockchain data, custodians' System and Organization Controls (SOC) reports, related parties, and valuation.</li>
<li>A blockchain proves that a transaction was recorded, not that it was appropriate, authorized, or correctly classified.</li>
</ul>

<h2>Internet of Things</h2>
<ul>
<li>Networked sensors and devices — inventory tracking, equipment monitoring, smart meters — generating large volumes of data.</li>
<li>Risks: weak default passwords, unpatched firmware, and devices as entry points to the network.</li>
<li>Controls: device inventory, network segmentation, changing default credentials, firmware updates, and monitoring.</li>
</ul>

<h2>Other emerging technologies</h2>
<table>
<thead><tr><th>Technology</th><th>Considerations</th></tr></thead>
<tbody>
<tr><td>Robotic process automation</td><td>Bot credentials, change management, failure monitoring (see Business Processes &amp; Automation)</td></tr>
<tr><td>Big data and cloud data platforms</td><td>Data governance, lineage, and access control at scale</td></tr>
<tr><td>Low-code and no-code tools, and end-user computing</td><td>Business users building applications and spreadsheets outside information technology (IT) change controls — inventory and control critical ones</td></tr>
<tr><td>Quantum computing</td><td>A future threat to today's public key encryption; organizations are beginning to inventory cryptography and plan migration to quantum-resistant algorithms (NIST published post-quantum standards in 2024)</td></tr>
<tr><td>Digital twins and augmented reality</td><td>Operational uses; data integrity and security of connected systems</td></tr>
</tbody>
</table>

<h2>A framework for evaluating any new technology</h2>
<ol>
<li><strong>Governance:</strong> who approves adoption, owns the risk, and oversees use?</li>
<li><strong>Risk assessment:</strong> what new risks arise for confidentiality, integrity, availability, compliance, and financial reporting?</li>
<li><strong>Controls:</strong> do existing IT general controls cover it (access, change, operations)? What new controls are needed?</li>
<li><strong>Third parties:</strong> which vendors are involved, and what assurance do they provide?</li>
<li><strong>Monitoring:</strong> how will performance and control effectiveness be tracked?</li>
<li><strong>Audit impact:</strong> how will evidence be obtained, and do auditors need specialists?</li>
</ol>

<h2>How it is tested</h2>
<ul>
<li>Identify risks and controls for AI and generative AI.</li>
<li>Explain blockchain concepts — hashing, consensus, smart contracts — and their limits.</li>
<li>Identify key controls for crypto assets and Internet of Things devices.</li>
<li>Apply a governance framework to a new technology.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Blockchain records are tamper-evident, but that doesn't make the transactions valid. Auditors still need evidence of authorization, ownership (private key control), and correct accounting.</p></div>
`,
  revision: `
<h3>Artificial intelligence (AI)</h3>
<ul>
<li>Risks: hallucination, bias, explainability, data leakage, drift, deepfakes.</li>
<li>Controls: governance and inventory, model validation and monitoring, human review, no sensitive data in public tools.</li>
<li>National Institute of Standards and Technology (NIST) AI Risk Management Framework: govern, map, measure, manage.</li>
</ul>

<h3>Blockchain</h3>
<ul>
<li>Distributed, append-only, hash-linked blocks; consensus (proof of work or stake).</li>
<li>Public vs permissioned; smart contracts execute automatically (bugs too).</li>
<li>Crypto: control = <strong>private keys</strong>; fair value through net income; blockchain ≠ proof of validity.</li>
</ul>

<h3>Internet of Things (IoT)</h3>
<p>Device inventory · segmentation · change default passwords · firmware updates.</p>

<h3>Other</h3>
<p>End-user computing outside change control · quantum threat to encryption.</p>

<h3>Evaluate any new technology</h3>
<p>Governance → risk assessment → controls → third parties → monitoring → audit impact.</p>
`,
};
