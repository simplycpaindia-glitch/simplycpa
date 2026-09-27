import type { TopicContent } from "../types";

export const revenueRecognition: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Revenue from Contracts with Customers — Accounting Standards Codification (ASC) 606 — applies to almost every company, which is why it is one of the most heavily tested topics in Financial Accounting and Reporting (FAR), Area III (Select Transactions). Expect multiple-choice questions on each of the five steps and task-based simulations (TBSs) that allocate a transaction price across performance obligations.</p>

<h2>The five-step model</h2>
<table>
<thead><tr><th>Step</th><th>What you do</th><th>Key tests</th></tr></thead>
<tbody>
<tr><td>1. Identify the contract</td><td>Confirm an enforceable agreement exists</td><td>Approved and parties committed; rights identifiable; payment terms identifiable; commercial substance; collection of consideration is <strong>probable</strong></td></tr>
<tr><td>2. Identify performance obligations</td><td>Find each distinct promised good or service</td><td>Capable of being distinct <strong>and</strong> distinct within the context of the contract</td></tr>
<tr><td>3. Determine the transaction price</td><td>Amount the entity expects to be entitled to</td><td>Variable consideration, significant financing component, noncash consideration, consideration payable to the customer</td></tr>
<tr><td>4. Allocate the transaction price</td><td>Spread the price over performance obligations</td><td>Relative <strong>standalone selling prices</strong> (SSPs)</td></tr>
<tr><td>5. Recognize revenue</td><td>When (or as) each obligation is satisfied</td><td>Transfer of <strong>control</strong> — over time or at a point in time</td></tr>
</tbody>
</table>

<h2>Step 1 — the contract</h2>
<p>If collectibility is not probable, no contract exists yet; cash received is a liability until the entity has no remaining obligations or the contract is terminated. Contracts may be <strong>combined</strong> when entered into at or near the same time with the same customer and negotiated as a package. A <strong>contract modification</strong> that adds distinct goods at their standalone selling price is treated as a separate contract; otherwise it is accounted for prospectively (terminate-and-replace) or by cumulative catch-up.</p>

<h2>Step 2 — performance obligations</h2>
<p>A good or service is distinct if (1) the customer can benefit from it on its own or with readily available resources, and (2) it is separately identifiable — not significantly integrated with, modifying, or highly interdependent with other promises. Common separate obligations:</p>
<ul>
<li>Equipment and a separately sold installation service that others could perform</li>
<li>A software license and post-contract customer support</li>
<li>A <strong>service-type warranty</strong> (coverage beyond assurance that the product works) — an <strong>assurance-type warranty</strong> is not a separate obligation; it is accrued as a cost under ASC 460</li>
<li>A <strong>material right</strong>, such as an option to buy future goods at a discount the customer would not otherwise receive</li>
</ul>

<h2>Step 3 — the transaction price</h2>
<ul>
<li><strong>Variable consideration</strong> (rebates, bonuses, penalties, returns): estimate using the <strong>expected value</strong> (many possible outcomes) or <strong>most likely amount</strong> (two outcomes) method, then apply the <strong>constraint</strong> — include only the amount for which it is probable that a significant revenue reversal will not occur.</li>
<li><strong>Significant financing component:</strong> adjust for the time value of money when payment timing gives a significant benefit. Practical expedient: ignore it if the period between transfer and payment is one year or less.</li>
<li><strong>Noncash consideration:</strong> measure at fair value at contract inception.</li>
<li><strong>Consideration payable to a customer</strong> (slotting fees, coupons): a reduction of revenue unless it is payment for a distinct good or service.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE (returns):</strong> A retailer sells 1,000 units at $100 (cost $60) and expects 4% returns. Revenue = 960 × $100 = <strong>$96,000</strong>. It records a <strong>refund liability</strong> of $4,000 and a <strong>return asset</strong> (right to recover goods) of 40 × $60 = $2,400, reducing cost of goods sold to $57,600.</p></div>

<h2>Step 4 — allocation</h2>
<p>Allocate the transaction price in proportion to standalone selling prices. If a price isn't observable, estimate it using the adjusted market assessment, expected cost plus a margin, or — only in limited cases — the residual approach. Discounts and variable consideration may be allocated to specific obligations when criteria are met.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A $100,000 contract includes equipment (standalone price $80,000) and a service contract ($40,000). Total standalone prices = $120,000.<br>Equipment: $100,000 × 80/120 = <strong>$66,667</strong>. Service: $100,000 × 40/120 = <strong>$33,333</strong>, recognized as the service is performed.</p></div>

<h2>Step 5 — satisfying the obligation</h2>
<p>Revenue is recognized <strong>over time</strong> if <em>any one</em> of these is met:</p>
<ol>
<li>The customer simultaneously receives and consumes the benefits as the entity performs (for example, cleaning services).</li>
<li>The entity's performance creates or enhances an asset the customer controls (for example, building on the customer's land).</li>
<li>The asset has no alternative use to the entity <strong>and</strong> the entity has an enforceable right to payment for performance completed to date.</li>
</ol>
<p>Otherwise revenue is recognized at a <strong>point in time</strong>, using indicators of control transfer: right to payment, legal title, physical possession, risks and rewards of ownership, and customer acceptance.</p>
<p>Progress over time is measured with an <strong>output method</strong> (units delivered, milestones) or an <strong>input method</strong> (costs incurred to date ÷ total estimated costs).</p>

<h2>Contract balances and costs</h2>
<table>
<thead><tr><th>Item</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Receivable</td><td>Unconditional right to consideration — only the passage of time is required</td></tr>
<tr><td>Contract asset</td><td>Right to consideration that is conditional on something other than time (for example, completing another obligation)</td></tr>
<tr><td>Contract liability</td><td>Consideration received (or due) before transferring goods or services — deferred revenue</td></tr>
</tbody>
</table>
<ul>
<li><strong>Incremental costs of obtaining a contract</strong> (sales commissions) are capitalized if expected to be recovered; practical expedient to expense if the amortization period is one year or less.</li>
<li><strong>Costs to fulfill a contract</strong> are capitalized if they relate directly to the contract, generate resources used to satisfy it, and are expected to be recovered.</li>
</ul>

<h2>Special situations</h2>
<ul>
<li><strong>Principal versus agent:</strong> an entity that controls the good or service before transfer is a principal and reports revenue <strong>gross</strong>; an agent arranging for another party reports its commission <strong>net</strong>.</li>
<li><strong>Licenses of intellectual property:</strong> functional intellectual property (software, films) is a <em>right to use</em> — recognized at a point in time; symbolic intellectual property (brands, logos) is a <em>right to access</em> — recognized over time.</li>
<li><strong>Bill-and-hold, consignment, repurchase agreements:</strong> revenue only when control has transferred. A consignor does not recognize revenue when goods are shipped to a consignee.</li>
<li><strong>Breakage</strong> on gift cards: recognized in proportion to redemptions when the entity expects to be entitled to it.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Identify distinct performance obligations in a bundled contract.</li>
<li>Estimate variable consideration and apply the constraint.</li>
<li>Allocate a transaction price using standalone selling prices.</li>
<li>Decide between over-time and point-in-time recognition, and compute percentage-of-completion revenue.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Write the five steps down before answering any revenue simulation. Most errors come from skipping step 2 (missing a separate obligation such as a material right or service-type warranty) or step 3 (forgetting the variable consideration constraint).</p></div>
`,
  revision: `
<h3>Five steps (Accounting Standards Codification (ASC) 606)</h3>
<ol>
<li>Contract — collection must be <strong>probable</strong>.</li>
<li>Performance obligations — distinct: capable of being distinct <strong>and</strong> separately identifiable.</li>
<li>Transaction price — variable consideration (expected value or most likely amount) + <strong>constraint</strong>; financing component (ignore if ≤ 1 year).</li>
<li>Allocate — relative standalone selling prices.</li>
<li>Recognize — when control transfers.</li>
</ol>

<h3>Over time if any one</h3>
<ul>
<li>Customer receives and consumes as performed.</li>
<li>Customer controls the asset as it's created or enhanced.</li>
<li>No alternative use <strong>+</strong> enforceable right to payment to date.</li>
</ul>

<h3>Balances</h3>
<ul>
<li>Receivable: unconditional (only time). Contract asset: conditional. Contract liability: paid in advance.</li>
<li>Sales commissions: capitalize (expense if ≤ 1 year).</li>
</ul>

<h3>Traps</h3>
<ul>
<li>Assurance warranty = cost accrual; service warranty = separate obligation.</li>
<li>Principal = gross; agent = net.</li>
<li>Functional license = point in time; symbolic = over time.</li>
<li>Returns: refund liability + return asset at cost.</li>
<li>Consignment: no revenue on shipment to consignee.</li>
</ul>
`,
};
