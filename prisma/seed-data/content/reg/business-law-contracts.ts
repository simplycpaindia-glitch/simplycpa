import type { TopicContent } from "../types";

export const contracts: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Business Law is Area II of Taxation and Regulation (REG), 15–25% of the section, and contracts are its largest piece. Questions contrast <strong>common law</strong> (services, real estate, employment) with <strong>Article 2 of the Uniform Commercial Code (UCC)</strong> (sale of goods). Knowing which set of rules applies answers many questions on its own.</p>

<h2>Elements of a valid contract</h2>
<ol>
<li><strong>Agreement</strong> — an offer and an acceptance</li>
<li><strong>Consideration</strong></li>
<li><strong>Capacity</strong></li>
<li><strong>Legality</strong></li>
</ol>
<p>Contracts may be <strong>void</strong> (no contract — illegal purpose), <strong>voidable</strong> (one party may cancel — minors, fraud, duress), or <strong>unenforceable</strong> (valid but can't be enforced — statute of frauds, statute of limitations).</p>

<h2>Offer</h2>
<ul>
<li>Requires present intent, definite terms, and communication to the offeree. Advertisements and price quotes are generally invitations to negotiate.</li>
<li><strong>Termination:</strong> revocation (effective when <strong>received</strong>), rejection (effective when received), counteroffer, lapse of time, death or incapacity of either party, destruction of the subject matter, or supervening illegality.</li>
<li><strong>Option contracts</strong> (supported by consideration) are irrevocable for the stated period.</li>
<li><strong>UCC firm offer:</strong> a <strong>merchant's signed, written</strong> offer to buy or sell goods that assures it will be held open is irrevocable <strong>without consideration</strong> for the stated time, or a reasonable time if none is stated — but <strong>not more than 3 months</strong>.</li>
</ul>

<h2>Acceptance</h2>
<table>
<thead><tr><th>Rule</th><th>Common law</th><th>UCC (goods)</th></tr></thead>
<tbody>
<tr><td>Terms of acceptance</td><td><strong>Mirror image rule</strong>: acceptance must match exactly; added terms create a counteroffer</td><td>An acceptance with additional terms is still an acceptance (<strong>battle of the forms</strong>, §2-207). Between merchants, added terms become part of the contract unless they materially alter it, the offer limits acceptance to its terms, or the offeror objects promptly.</td></tr>
<tr><td>Timing (mailbox rule)</td><td>Acceptance is effective when <strong>dispatched</strong> if sent by an authorized (or reasonable) method; otherwise when received</td><td>Same — any reasonable method</td></tr>
<tr><td>Silence</td><td>Generally not acceptance</td><td>Generally not acceptance</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> On June 1 a seller mails an offer. On June 3 it mails a revocation, which arrives June 6. On June 4 the buyer mails an acceptance. A contract was formed on <strong>June 4</strong>: the acceptance was effective on dispatch, before the revocation was received.</p></div>

<h2>Consideration</h2>
<ul>
<li>A bargained-for exchange of legal value — a promise, act, or forbearance. Adequacy is generally not examined.</li>
<li><strong>Not consideration:</strong> past consideration, a pre-existing legal duty, illusory promises, and moral obligations.</li>
<li><strong>Modifications:</strong> under common law, a modification needs new consideration (the pre-existing duty rule). Under the UCC, a good-faith modification of a sale of goods needs <strong>no consideration</strong>.</li>
<li><strong>Promissory estoppel</strong> enforces a promise without consideration when the promisee reasonably and foreseeably relied on it to their detriment.</li>
<li>Paying a smaller amount to settle an undisputed, liquidated debt does not discharge the rest; settling a <strong>disputed</strong> debt (accord and satisfaction) does.</li>
</ul>

<h2>Capacity and legality</h2>
<ul>
<li><strong>Minors'</strong> contracts are voidable by the minor, who may disaffirm before or within a reasonable time after reaching majority; ratification after majority makes the contract binding. Minors remain liable for the reasonable value of necessaries.</li>
<li>Contracts of persons adjudicated insane are void; those of mentally incompetent (not adjudicated) or intoxicated persons may be voidable.</li>
<li>Illegal contracts (usurious loans, unlicensed professional services requiring a license to protect the public) are void. Unreasonable non-compete clauses may be unenforceable.</li>
</ul>

<h2>Statute of frauds</h2>
<p>These contracts must be <strong>in writing and signed by the party to be charged</strong> (memory aid: MY LEGS):</p>
<ul>
<li><strong>M</strong>arriage — promises in consideration of marriage</li>
<li><strong>Y</strong>ear — contracts that cannot be performed within one year of their making</li>
<li><strong>L</strong>and — sale of real property or an interest in it (leases over one year)</li>
<li><strong>E</strong>xecutor — an executor's promise to pay estate debts personally</li>
<li><strong>G</strong>oods — sale of goods for <strong>$500 or more</strong> (UCC)</li>
<li><strong>S</strong>urety — a promise to pay the debt of another (a secondary promise)</li>
</ul>
<p>UCC exceptions: specially manufactured goods not suitable for others, goods received and accepted or paid for, admissions in court, and the <strong>merchant's confirmation rule</strong> (a written confirmation between merchants binds the recipient who doesn't object within 10 days). The writing need not contain all terms except quantity.</p>

<h2>Parol evidence rule</h2>
<p>Evidence of prior or contemporaneous oral agreements cannot contradict a fully integrated written contract. Exceptions: evidence of fraud, duress, or mistake; later modifications; clarifying ambiguous terms; and conditions precedent.</p>

<h2>Defenses</h2>
<table>
<thead><tr><th>Defense</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Fraud in the inducement (misrepresentation of a material fact, intent, reliance, injury)</td><td>Voidable; damages available</td></tr>
<tr><td>Fraud in the execution (signer deceived about what they are signing)</td><td>Void</td></tr>
<tr><td>Innocent misrepresentation</td><td>Voidable (rescission only)</td></tr>
<tr><td>Duress (physical) / economic duress</td><td>Void / voidable</td></tr>
<tr><td>Undue influence (confidential relationship)</td><td>Voidable</td></tr>
<tr><td>Mutual mistake of material fact</td><td>Voidable by either party; unilateral mistake generally no relief unless the other party knew</td></tr>
</tbody>
</table>

<h2>Third parties</h2>
<ul>
<li><strong>Assignment</strong> of rights is generally allowed unless it materially changes the obligor's duties or is prohibited; the assignee takes subject to defenses.</li>
<li><strong>Delegation</strong> of duties is allowed except for personal services; the delegator remains liable.</li>
<li><strong>Third-party beneficiaries:</strong> intended beneficiaries (creditor or donee) can enforce the contract once their rights vest; incidental beneficiaries cannot.</li>
</ul>

<h2>Performance, breach, and remedies</h2>
<ul>
<li><strong>Substantial performance</strong> (common law): the performing party recovers the contract price less damages. The UCC requires <strong>perfect tender</strong>, but the seller has a right to <strong>cure</strong> within the contract time.</li>
<li><strong>Anticipatory repudiation:</strong> the non-breaching party may sue immediately or wait a commercially reasonable time.</li>
<li><strong>Discharge</strong> by performance, agreement (rescission, novation, accord and satisfaction), impossibility, or commercial impracticability.</li>
<li><strong>Remedies:</strong> compensatory damages (benefit of the bargain), consequential damages (foreseeable), liquidated damages (reasonable, not a penalty), rescission, and <strong>specific performance</strong> (unique items — land, art; never personal services). Punitive damages are generally not awarded for breach of contract. The non-breaching party must <strong>mitigate</strong>.</li>
<li>UCC buyer remedies include <strong>cover</strong> (buy substitute goods and recover the difference); seller remedies include reselling the goods and recovering the difference.</li>
</ul>

<h2>UCC sales specifics</h2>
<ul>
<li><strong>Risk of loss:</strong> shipment contract (free on board (FOB) shipping point) → passes to the buyer on delivery to the carrier; destination contract (FOB destination) → on tender at the destination. Without a carrier, a merchant seller keeps the risk until the buyer takes possession. A breaching party bears the risk.</li>
<li><strong>Warranties:</strong> express (affirmation, description, sample); implied warranty of <strong>merchantability</strong> (merchants only — fit for ordinary purpose); implied warranty of <strong>fitness for a particular purpose</strong> (buyer relies on the seller's skill); warranty of title. Merchantability can be disclaimed only by mentioning "merchantability" (in writing if conspicuous); "as is" disclaims implied warranties.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Decide when a contract is formed (mailbox rule, revocations, counteroffers).</li>
<li>Apply the UCC's different rules for firm offers, additional terms, and modifications.</li>
<li>Decide whether the statute of frauds applies.</li>
<li>Choose the remedy for a breach.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> First ask "Goods or not?" If goods, apply the UCC: no consideration needed for modifications, firm offers without consideration, additional terms don't kill the acceptance, and $500 triggers the writing requirement.</p></div>
`,
  revision: `
<h3>Common law vs Uniform Commercial Code (UCC) (goods)</h3>
<table>
<thead><tr><th>Issue</th><th>Common law</th><th>UCC</th></tr></thead>
<tbody>
<tr><td>Added terms in acceptance</td><td>Counteroffer (mirror image)</td><td>Still acceptance; merchant rules</td></tr>
<tr><td>Modification</td><td>Needs consideration</td><td>No consideration (good faith)</td></tr>
<tr><td>Irrevocable offer</td><td>Option with consideration</td><td>Merchant's signed written firm offer, ≤ 3 months</td></tr>
<tr><td>Performance</td><td>Substantial performance</td><td>Perfect tender, right to cure</td></tr>
</tbody>
</table>

<h3>Timing</h3>
<p>Acceptance: on <strong>dispatch</strong>. Revocation and rejection: on <strong>receipt</strong>.</p>

<h3>Statute of frauds — "MY LEGS"</h3>
<p>Marriage · more than 1 Year · Land · Executor · Goods ≥ $500 · Surety. Merchant confirmation: object within 10 days.</p>

<h3>Capacity</h3>
<p>Minor: voidable by minor; ratify after majority. Adjudicated insane: void.</p>

<h3>Remedies</h3>
<p>Compensatory · consequential (foreseeable) · liquidated (not a penalty) · specific performance (unique goods, land; not services) · duty to mitigate · buyer's cover.</p>

<h3>Risk of loss</h3>
<p>Free on board (FOB) shipping point → buyer at carrier. FOB destination → buyer at tender. Breaching party bears risk.</p>
`,
};
