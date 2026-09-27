import type { TopicContent } from "../types";

export const debtorCreditorBankruptcy: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Taxation and Regulation (REG) Business Law tests three related areas of creditor protection: secured transactions under Article 9 of the Uniform Commercial Code (UCC), suretyship, and federal bankruptcy. Most questions ask who wins when a debtor can't pay everyone.</p>

<h2>Secured transactions (UCC Article 9)</h2>
<h3>Attachment — making the interest enforceable against the debtor</h3>
<p>A security interest <strong>attaches</strong> when all three occur (in any order):</p>
<ol>
<li>The creditor gives <strong>value</strong> (a loan, credit, or a binding commitment).</li>
<li>The debtor has <strong>rights</strong> in the collateral.</li>
<li>There is a <strong>security agreement</strong> authenticated by the debtor describing the collateral — or the creditor takes possession or control.</li>
</ol>

<h3>Perfection — protecting the interest against third parties</h3>
<table>
<thead><tr><th>Method</th><th>When used</th></tr></thead>
<tbody>
<tr><td>Filing a <strong>financing statement</strong> (UCC-1)</td><td>Most collateral; effective for 5 years; may be filed before attachment</td></tr>
<tr><td>Possession</td><td>Goods, negotiable instruments, money (money can be perfected only by possession)</td></tr>
<tr><td>Control</td><td>Deposit accounts, investment property, electronic chattel paper</td></tr>
<tr><td><strong>Automatic</strong> perfection on attachment</td><td><strong>Purchase money security interest (PMSI) in consumer goods</strong> (except vehicles with certificates of title)</td></tr>
</tbody>
</table>

<h3>Priority rules</h3>
<ul>
<li>Perfected beats unperfected. Between two perfected interests, the <strong>first to file or perfect</strong> wins. Between two unperfected interests, the first to attach wins.</li>
<li>A <strong>PMSI in inventory</strong> has priority over an earlier perfected interest if it is perfected before the debtor receives the inventory and prior secured parties receive written notice.</li>
<li>A <strong>PMSI in non-inventory goods (equipment)</strong> has priority if perfected within <strong>20 days</strong> after the debtor receives the collateral.</li>
<li>A <strong>buyer in the ordinary course of business</strong> takes free of any security interest created by the seller, even if perfected and known.</li>
<li>A consumer buying from a consumer, for personal use, without knowledge, takes free of an automatically perfected PMSI unless the creditor filed.</li>
<li>A lien creditor (including a bankruptcy trustee) beats an unperfected security interest.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Bank A files a financing statement covering all of a debtor's equipment on March 1. On April 1 the debtor buys a machine from Seller B on credit, and Seller B files on April 15. Seller B's PMSI was perfected within 20 days of delivery, so <strong>Seller B has priority</strong> in the machine over Bank A.</p></div>

<h3>Default</h3>
<p>The secured party may take possession (self-help, without breach of the peace) and sell the collateral in a commercially reasonable manner, then apply proceeds to expenses, the secured debt, and subordinate interests; any surplus goes to the debtor, and the debtor is liable for any deficiency. Strict foreclosure (keeping the collateral in satisfaction) is limited for consumer goods where 60% or more has been paid. The debtor may redeem before disposition.</p>

<h2>Suretyship</h2>
<ul>
<li>A <strong>surety</strong> is primarily liable with the principal debtor — the creditor can proceed against the surety immediately. A <strong>guarantor of collection</strong> is secondarily liable (only after the creditor exhausts remedies against the debtor).</li>
<li><strong>Surety's rights:</strong> exoneration (compel the debtor to pay), reimbursement, subrogation (step into the creditor's rights after paying), and contribution from co-sureties (in proportion to the amounts each guaranteed).</li>
<li><strong>Surety's defenses:</strong> the principal's defenses on the underlying debt (fraud or duress by the creditor, breach, material alteration), fraud against the surety, release of the debtor without reserving rights, release or impairment of collateral (to that extent), and a material modification without consent (a compensated surety is released only if harmed).</li>
<li><strong>Not defenses:</strong> the principal debtor's <strong>bankruptcy, death, incapacity, or minority</strong> — these are the risks the surety agreed to cover.</li>
</ul>

<h2>Bankruptcy</h2>
<table>
<thead><tr><th>Chapter</th><th>Purpose</th><th>Key features</th></tr></thead>
<tbody>
<tr><td>Chapter 7</td><td>Liquidation</td><td>A trustee sells nonexempt assets and distributes proceeds; individual debtors must pass a means test</td></tr>
<tr><td>Chapter 11</td><td>Reorganization (mainly businesses)</td><td>The debtor usually continues operating as <strong>debtor in possession</strong>; a plan must be confirmed by the court and creditor classes</td></tr>
<tr><td>Chapter 13</td><td>Individual debt adjustment</td><td>Individuals with regular income repay under a 3–5 year plan; only voluntary</td></tr>
</tbody>
</table>

<h3>Filing</h3>
<ul>
<li><strong>Voluntary petition:</strong> by the debtor; insolvency is not required.</li>
<li><strong>Involuntary petition</strong> (Chapters 7 and 11 only): if the debtor has <strong>12 or more</strong> creditors, at least <strong>3</strong> must join; with fewer than 12, one creditor may file. Petitioners' unsecured claims must exceed a statutory minimum (indexed). Not available against farmers or charities. The court grants relief if the debtor is generally not paying debts as they come due.</li>
<li>Filing creates an <strong>automatic stay</strong> halting most collection actions, foreclosures, and lawsuits (not criminal proceedings or domestic support collection).</li>
</ul>

<h3>The trustee's avoidance powers</h3>
<ul>
<li><strong>Preferential transfers:</strong> a transfer to a creditor, for an antecedent debt, while the debtor was insolvent (presumed in the 90 days before filing), that lets the creditor receive more than in a Chapter 7 liquidation — made within <strong>90 days</strong> before filing, or <strong>1 year</strong> for <strong>insiders</strong> (relatives, officers, directors). Exceptions: contemporaneous exchanges for new value, payments in the ordinary course of business, and perfected PMSIs within 30 days.</li>
<li><strong>Fraudulent transfers:</strong> transfers within <strong>2 years</strong> before filing made with intent to hinder creditors, or for less than reasonably equivalent value while insolvent.</li>
<li>Unperfected security interests can be avoided (the trustee is a hypothetical lien creditor).</li>
</ul>

<h3>Distribution order</h3>
<ol>
<li><strong>Secured creditors</strong> — from their collateral (any shortfall becomes an unsecured claim).</li>
<li><strong>Priority unsecured claims</strong>, in order: domestic support obligations; administrative expenses of the bankruptcy; involuntary-gap claims; wages and commissions earned within 180 days (up to a limit); employee benefit plan contributions; certain claims of farmers and fishermen; consumer deposits; certain <strong>taxes</strong>.</li>
<li><strong>General unsecured creditors</strong>, pro rata.</li>
<li>Equity holders.</li>
</ol>

<h3>Discharge</h3>
<p>An individual's discharge eliminates most remaining debts. <strong>Not dischargeable:</strong> most taxes from the last 3 years, domestic support obligations, student loans (unless undue hardship), debts from fraud or willful and malicious injury, fines and penalties, debts not listed, and debts from driving while intoxicated. A discharge may be <strong>denied</strong> entirely for concealing or destroying assets or records, false oaths, or a prior Chapter 7 discharge within 8 years.</p>

<h2>How it is tested</h2>
<ul>
<li>Determine whether a security interest has attached or been perfected, and rank competing claims.</li>
<li>Decide whether a surety is released by a given event.</li>
<li>Identify preferential and fraudulent transfers.</li>
<li>Rank claims in a Chapter 7 distribution and identify nondischargeable debts.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> For preferences, remember "90 days, or 1 year for insiders". For priority, secured creditors first (from collateral), then domestic support, then administrative expenses — general unsecured creditors are nearly last.</p></div>
`,
  revision: `
<h3>Uniform Commercial Code (UCC) Article 9</h3>
<ul>
<li>Attachment: value + debtor's rights + authenticated security agreement (or possession).</li>
<li>Perfection: filing (5 years), possession, control, or <strong>automatic</strong> for a purchase money security interest (PMSI) in consumer goods.</li>
<li>Priority: first to file or perfect. PMSI in equipment: perfect within 20 days. PMSI in inventory: perfect before delivery + notify.</li>
<li>Buyer in ordinary course takes free of the seller's security interest.</li>
</ul>

<h3>Suretyship</h3>
<ul>
<li>Surety primarily liable; rights: exoneration, reimbursement, subrogation, contribution.</li>
<li>Not defenses: debtor's bankruptcy, death, incapacity, minority.</li>
</ul>

<h3>Bankruptcy</h3>
<ul>
<li>Chapter 7 liquidation · Chapter 11 reorganization (debtor in possession) · Chapter 13 individual plan.</li>
<li>Involuntary: 12+ creditors → 3 petitioners; fewer → 1.</li>
<li>Automatic stay on filing.</li>
<li>Preferences: 90 days (1 year insiders). Fraudulent transfers: 2 years.</li>
<li>Order: secured → domestic support → administrative → wages → taxes → general unsecured.</li>
<li>Not discharged: recent taxes, support, student loans, fraud, fines.</li>
</ul>
`,
};
