import type { TopicContent } from "../types";

export const leases: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Leases (Accounting Standards Codification (ASC) 842) put almost every lease on the lessee's balance sheet as a right-of-use (ROU) asset and a lease liability. Financial Accounting and Reporting (FAR) tests lease classification, initial measurement, and the different income statement patterns for finance and operating leases, mostly from the lessee's side. Lessor accounting is covered in more depth in Business Analysis and Reporting (BAR).</p>

<h2>Is it a lease?</h2>
<p>A contract contains a lease if it conveys the <strong>right to control the use of an identified asset</strong> for a period of time in exchange for consideration. Control means the customer has the right to obtain substantially all the economic benefits from use <strong>and</strong> to direct how and for what purpose the asset is used. If the supplier has a substantive right to substitute the asset, there is no identified asset.</p>
<p>Lease and non-lease components (such as maintenance) are separated and the consideration allocated by relative standalone prices, unless the lessee elects the practical expedient to combine them by class of asset.</p>

<h2>Classification — the five criteria</h2>
<p>A lease is a <strong>finance lease</strong> (lessee) or <strong>sales-type lease</strong> (lessor) if <strong>any one</strong> of these is met at commencement (memory aid: OWNES):</p>
<table>
<thead><tr><th>Criterion</th><th>Test</th></tr></thead>
<tbody>
<tr><td><strong>O</strong>wnership transfer</td><td>Title transfers to the lessee by the end of the lease term</td></tr>
<tr><td><strong>W</strong>ritten option to purchase</td><td>A purchase option the lessee is <strong>reasonably certain</strong> to exercise</td></tr>
<tr><td><strong>N</strong>o alternative use</td><td>The asset is so specialized it has no alternative use to the lessor at the end of the term</td></tr>
<tr><td><strong>E</strong>conomic life</td><td>The lease term is a <strong>major part</strong> of the remaining economic life (75% or more is a reasonable benchmark)</td></tr>
<tr><td><strong>S</strong>ubstantially all of fair value</td><td>Present value of lease payments plus any lessee-guaranteed residual value equals or exceeds <strong>substantially all</strong> of fair value (90% or more is a reasonable benchmark)</td></tr>
</tbody>
</table>
<p>If none is met, the lessee has an <strong>operating lease</strong>. The economic life test does not apply when commencement falls at or near the end of the asset's life (the last 25%).</p>

<h2>Initial measurement (lessee)</h2>
<h3>Lease liability</h3>
<p>Present value of the lease payments not yet paid, discounted at the <strong>rate implicit in the lease</strong> if readily determinable, otherwise the lessee's <strong>incremental borrowing rate</strong>. Private companies may elect a risk-free rate by class of asset.</p>
<p>Lease payments include fixed payments (less incentives receivable), variable payments that depend on an index or rate (measured at the commencement-date index), the exercise price of a purchase option reasonably certain to be exercised, termination penalties if the term reflects termination, and amounts probable of being owed under residual value guarantees. Variable payments based on usage or performance are excluded and expensed as incurred.</p>

<h3>Right-of-use asset</h3>
<table>
<thead><tr><th>Right-of-use asset</th></tr></thead>
<tbody>
<tr><td>Lease liability</td></tr>
<tr><td>+ Lease payments made at or before commencement</td></tr>
<tr><td>+ Initial direct costs (incremental costs that would not have been incurred without the lease, such as commissions)</td></tr>
<tr><td>− Lease incentives received</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A 5-year lease requires $20,000 at the end of each year. The incremental borrowing rate is 6% and the present value factor for an ordinary annuity is 4.2124. The lessee paid $2,000 of commissions and received a $3,000 incentive.<br>Lease liability = 20,000 × 4.2124 = <strong>$84,248</strong>.<br>Right-of-use asset = 84,248 + 2,000 − 3,000 = <strong>$83,248</strong>.</p></div>

<h2>Subsequent measurement — the key difference</h2>
<table>
<thead><tr><th></th><th>Finance lease</th><th>Operating lease</th></tr></thead>
<tbody>
<tr><td>Liability</td><td>Effective interest method</td><td>Effective interest method (same)</td></tr>
<tr><td>Income statement</td><td><strong>Two expenses:</strong> interest expense + amortization of the ROU asset (front-loaded total)</td><td><strong>Single straight-line lease cost</strong></td></tr>
<tr><td>ROU asset amortization</td><td>Usually straight-line over the shorter of lease term and useful life (useful life if ownership transfers or a purchase option is reasonably certain)</td><td>A plug: straight-line cost − interest accretion on the liability</td></tr>
<tr><td>Cash flow statement</td><td>Principal: financing; interest: operating</td><td>All payments: operating</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE (operating lease):</strong> A 3-year operating lease has payments of $10,000, $12,000, and $14,000. Straight-line lease cost = 36,000 ÷ 3 = <strong>$12,000 each year</strong>, even though the cash paid changes.</p></div>

<div class="callout callout-example"><p><strong>EXAMPLE (finance lease, year 1):</strong> Using the $84,248 liability above (payments at year-end), interest = 84,248 × 6% = $5,055. The ROU asset of $83,248 is amortized over 5 years = $16,650. Total year-1 expense = <strong>$21,705</strong>, more than the $20,000 paid — finance leases are front-loaded.</p></div>

<h2>Practical expedients and special cases</h2>
<ul>
<li><strong>Short-term leases:</strong> a lease term of 12 months or less with no purchase option reasonably certain of exercise may be kept off the balance sheet (policy election by class of asset); expense straight-line.</li>
<li><strong>Lease term</strong> = non-cancelable period + periods covered by renewal options reasonably certain to be exercised + periods after termination options reasonably certain <em>not</em> to be exercised.</li>
<li><strong>Remeasurement</strong> of the liability (with an offset to the ROU asset) occurs when the lease term, purchase option assessment, or residual value guarantee amounts change.</li>
<li><strong>Impairment:</strong> ROU assets are tested under the ASC 360 long-lived asset model. After an operating lease ROU asset is impaired, the lease cost is no longer straight-line.</li>
</ul>

<h2>Sale-and-leaseback</h2>
<ul>
<li>If the transfer qualifies as a sale under ASC 606 (control passes), the seller-lessee derecognizes the asset, recognizes a gain or loss, and accounts for the leaseback. A leaseback that would be a finance lease, or a repurchase option not at fair value, prevents sale treatment.</li>
<li>If it is <strong>not</strong> a sale (a failed sale), the seller-lessee keeps the asset and records the cash as a <strong>financial liability</strong>.</li>
</ul>

<h2>Lessor accounting — overview</h2>
<table>
<thead><tr><th>Classification</th><th>Lessor accounting</th></tr></thead>
<tbody>
<tr><td>Sales-type (any of the five criteria)</td><td>Derecognize asset; record net investment in the lease; recognize selling profit or loss at commencement</td></tr>
<tr><td>Direct financing (none of the five, but present value of payments + third-party residual guarantees ≥ substantially all fair value and collection probable)</td><td>Net investment; selling profit deferred and recognized as interest</td></tr>
<tr><td>Operating</td><td>Keep and depreciate the asset; recognize lease income straight-line</td></tr>
</tbody>
</table>

<h2>How it is tested</h2>
<ul>
<li>Classify a lease using the five criteria.</li>
<li>Compute the lease liability and ROU asset at commencement.</li>
<li>Compute year-one expense for a finance lease versus an operating lease.</li>
<li>Identify cash flow classification of lease payments.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Both lease types create the same balance sheet entries at commencement. The difference is the income statement: finance = interest + amortization (two lines, front-loaded); operating = one straight-line lease cost.</p></div>
`,
  revision: `
<h3>Finance lease if any one (memory aid: OWNES)</h3>
<p><strong>O</strong>wnership transfers · <strong>W</strong>ritten purchase option reasonably certain · <strong>N</strong>o alternative use · <strong>E</strong>conomic life major part (≈ 75%) · <strong>S</strong>ubstantially all fair value (≈ 90%). None → operating lease.</p>

<h3>Initial measurement</h3>
<ul>
<li>Liability = present value of unpaid payments at implicit rate, else incremental borrowing rate.</li>
<li>Right-of-use (ROU) asset = liability + prepaid payments + initial direct costs − incentives received.</li>
<li>Usage-based variable payments: excluded, expensed.</li>
</ul>

<h3>After commencement</h3>
<ul>
<li>Finance: interest + straight-line amortization (front-loaded); principal payments = financing cash flows.</li>
<li>Operating: single straight-line lease cost; all cash flows operating.</li>
</ul>

<h3>Other rules</h3>
<ul>
<li>Short-term (≤ 12 months, no reasonably certain purchase option): may stay off balance sheet.</li>
<li>Lease term includes renewal options reasonably certain to be exercised.</li>
<li>Failed sale-leaseback → keep asset, record financial liability.</li>
<li>Lessor: sales-type (profit at commencement), direct financing (profit deferred), operating (keep asset).</li>
</ul>
`,
};
