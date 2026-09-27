import type { TopicContent } from "../types";

export const longTermDebt: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Bonds and long-term notes are tested in Financial Accounting and Reporting (FAR) Area II through pricing, effective interest amortization, early extinguishment, troubled debt restructurings, and debt with conversion features or warrants. Almost every question needs a present value calculation, so be fluent with time-value factors.</p>

<h2>Bond pricing</h2>
<p>A bond's issue price = present value of the principal + present value of the interest payments, both discounted at the <strong>market (effective) rate</strong>.</p>
<table>
<thead><tr><th>Relationship</th><th>Bonds issued at</th></tr></thead>
<tbody>
<tr><td>Coupon (stated) rate = market rate</td><td>Face value (par)</td></tr>
<tr><td>Coupon rate &lt; market rate</td><td><strong>Discount</strong> — investors pay less to earn the higher market yield</td></tr>
<tr><td>Coupon rate &gt; market rate</td><td><strong>Premium</strong></td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> $100,000 of 5-year bonds with a 6% annual coupon are issued when the market rate is 8%. Present value of $1 at 8% for 5 periods = 0.681; present value of an ordinary annuity = 3.993.<br>Price = 100,000 × 0.681 + 6,000 × 3.993 = 68,100 + 23,958 = <strong>$92,058</strong> — a discount of $7,942.</p></div>

<p>Bonds issued <strong>between interest dates</strong> are sold at the price plus accrued interest since the last interest date; the issuer records the accrued interest as interest payable (or a reduction of interest expense) and pays the full coupon on the next interest date.</p>

<h2>Effective interest amortization</h2>
<table>
<thead><tr><th>Item</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Interest expense</td><td>Carrying amount at the start of the period × market rate</td></tr>
<tr><td>Cash paid</td><td>Face value × coupon rate</td></tr>
<tr><td>Amortization</td><td>Interest expense − cash paid</td></tr>
<tr><td>New carrying amount</td><td>Discount: previous + amortization. Premium: previous − amortization.</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE (continued):</strong> Year 1 interest expense = 92,058 × 8% = $7,365. Cash paid = $6,000. Discount amortization = $1,365. Carrying amount at the end of Year 1 = <strong>$93,423</strong>.</p>
<table><thead><tr><th>Account</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody><tr><td>Interest expense</td><td>7,365</td><td></td></tr><tr><td>Discount on bonds payable</td><td></td><td>1,365</td></tr><tr><td>Cash</td><td></td><td>6,000</td></tr></tbody></table></div>

<ul>
<li>With a <strong>discount</strong>, the carrying amount and interest expense <strong>rise</strong> every period; with a <strong>premium</strong>, both <strong>fall</strong>. Both converge to face value at maturity.</li>
<li>The straight-line method is allowed only if the results are not materially different.</li>
<li><strong>Debt issuance costs</strong> are presented as a direct deduction from the carrying amount of the debt (like a discount) and amortized as interest expense. Costs for a line of credit may be shown as an asset.</li>
</ul>

<h2>Notes payable</h2>
<ul>
<li>Notes are recorded at present value. If a note is exchanged for property, goods, or services and has <strong>no stated rate or an unreasonable rate</strong>, record it at the fair value of the item received or the note (whichever is more clearly determinable); if neither is known, <strong>impute interest</strong> at the borrower's incremental rate.</li>
<li>Installment notes: each payment covers interest on the outstanding balance with the remainder reducing principal.</li>
<li>Zero-coupon bonds: issued at a deep discount; all interest is accreted and paid at maturity.</li>
</ul>

<h2>Early extinguishment</h2>
<p>Gain or loss = <strong>net carrying amount</strong> (face ± unamortized premium or discount − unamortized issuance costs) − <strong>reacquisition price</strong> (including call premium and costs). Update amortization to the retirement date first. The gain or loss is reported in income from continuing operations (not extraordinary).</p>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Bonds with a face of $1,000,000 and carrying amount of $980,000 are called at 102. Reacquisition price = $1,020,000. Loss = 1,020,000 − 980,000 = <strong>$40,000</strong>.</p></div>

<h2>Troubled debt restructuring (debtor)</h2>
<p>A troubled debt restructuring (TDR) occurs when a creditor, for economic or legal reasons related to the debtor's financial difficulties, grants a concession it would not otherwise consider. Accounting Standards Codification (ASC) 470-60 still applies to debtors (creditors stopped applying TDR accounting under Accounting Standards Update (ASU) 2022-02 and use the current expected credit loss model instead).</p>
<table>
<thead><tr><th>Type</th><th>Debtor accounting</th></tr></thead>
<tbody>
<tr><td>Settlement by transferring assets</td><td>First remeasure the asset to fair value (gain or loss on the asset). Gain on restructuring = carrying amount of debt − fair value of the asset.</td></tr>
<tr><td>Settlement by issuing equity</td><td>Gain = carrying amount of debt − fair value of equity issued</td></tr>
<tr><td>Modification of terms</td><td>If <strong>total undiscounted</strong> future cash payments &lt; carrying amount: reduce the carrying amount to that total and recognize a gain; no interest expense thereafter. If ≥ carrying amount: no gain; compute a new effective rate prospectively.</td></tr>
</tbody>
</table>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A debtor transfers land (carrying amount $300,000, fair value $350,000) to settle debt of $500,000. Gain on land = <strong>$50,000</strong>; gain on restructuring = 500,000 − 350,000 = <strong>$150,000</strong>.</p></div>

<h2>Debt with equity features</h2>
<ul>
<li><strong>Bonds with detachable warrants:</strong> allocate proceeds by relative fair values (or the incremental method if only one fair value is known). The warrant portion goes to additional paid-in capital (APIC) and creates a bond discount.</li>
<li><strong>Nondetachable warrants</strong> are not separated.</li>
<li><strong>Convertible bonds (after ASU 2020-06):</strong> generally recorded entirely as a liability — the cash conversion and beneficial conversion feature separation models were removed. On conversion, use the <strong>book value method</strong>: the bonds' carrying amount becomes common stock and APIC, with <strong>no gain or loss</strong>. Induced conversions recognize an expense for the fair value of the sweetener.</li>
<li>Convertible instruments use the <strong>if-converted method</strong> in diluted earnings per share.</li>
</ul>

<h2>Other rules</h2>
<ul>
<li><strong>Fair value option:</strong> debt may be measured at fair value, with changes caused by the entity's own credit risk reported in other comprehensive income (OCI).</li>
<li><strong>Disclosures:</strong> maturities for each of the next five years, interest rates, collateral, and covenants.</li>
<li><strong>Refinancing and covenant violations</strong> affect current versus noncurrent classification (see Balance Sheet topic).</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Compute issue price, interest expense, and carrying amount after one or two periods.</li>
<li>Calculate gains or losses on retirement and troubled debt restructurings.</li>
<li>Allocate proceeds to bonds and detachable warrants.</li>
<li>Record conversions of convertible debt.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Interest expense always uses the <em>market rate × carrying amount</em>; cash always uses the <em>coupon rate × face</em>. If an answer choice uses the market rate on face value, it is a distractor.</p></div>
`,
  revision: `
<h3>Pricing</h3>
<ul>
<li>Price = present value of face + present value of coupons at the <strong>market rate</strong>.</li>
<li>Coupon &lt; market → discount; coupon &gt; market → premium.</li>
</ul>

<h3>Effective interest method</h3>
<ul>
<li>Interest expense = carrying amount × market rate. Cash = face × coupon.</li>
<li>Discount: carrying amount and expense rise. Premium: both fall.</li>
<li>Issuance costs: deduct from the debt's carrying amount.</li>
</ul>

<h3>Retirement</h3>
<p>Gain/loss = net carrying amount − reacquisition price (call price × face).</p>

<h3>Troubled debt restructuring (debtor)</h3>
<ul>
<li>Asset transfer: remeasure asset (gain/loss) + restructuring gain = debt − fair value of asset.</li>
<li>Modification: gain only if <strong>undiscounted</strong> future payments &lt; carrying amount.</li>
</ul>

<h3>Equity features</h3>
<ul>
<li>Detachable warrants → allocate by relative fair values; warrants to additional paid-in capital (APIC).</li>
<li>Convertible bonds: whole instrument is debt; conversion at book value, <strong>no gain or loss</strong>.</li>
</ul>
`,
};
