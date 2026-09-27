import type { TopicContent } from "../types";

export const lessorAccounting: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Financial Accounting and Reporting (FAR) focuses on the lessee. Business Analysis and Reporting (BAR) tests the <strong>lessor's</strong> side of Accounting Standards Codification (ASC) 842: classifying leases as sales-type, direct financing, or operating; measuring the net investment in the lease; recognizing selling profit; and more complex issues such as residual value guarantees, variable payments, and modifications.</p>

<h2>Lessor classification</h2>
<ol>
<li><strong>Sales-type lease</strong> — if <strong>any one</strong> of the five criteria is met (the same criteria a lessee uses for a finance lease):
<ul>
<li>ownership transfers by the end of the term;</li>
<li>a purchase option the lessee is reasonably certain to exercise;</li>
<li>the term is a major part of the remaining economic life (about 75%);</li>
<li>the present value of lease payments plus any residual value guaranteed <strong>by the lessee</strong> equals or exceeds substantially all of the fair value (about 90%);</li>
<li>the asset is so specialized it has no alternative use to the lessor.</li>
</ul></li>
<li><strong>Direct financing lease</strong> — none of the five are met, but <strong>both</strong>: the present value of lease payments plus any residual value guaranteed by the lessee <strong>and/or a third party</strong> equals or exceeds substantially all of fair value, <strong>and</strong> collection of payments (and any guarantee) is <strong>probable</strong>.</li>
<li><strong>Operating lease</strong> — everything else.</li>
</ol>
<p>A lease meeting a sales-type criterion is sales-type even if collectibility is not probable — but then the lessor doesn't derecognize the asset until collectibility is probable, and treats payments received as a deposit liability.</p>

<h2>Sales-type leases</h2>
<p>At commencement, the lessor:</p>
<ul>
<li><strong>Derecognizes</strong> the underlying asset.</li>
<li>Recognizes a <strong>net investment in the lease</strong> = present value of the lease receivable (lease payments) + present value of the unguaranteed residual asset, discounted at the <strong>rate implicit in the lease</strong>.</li>
<li>Recognizes <strong>selling profit or loss</strong> — generally revenue (fair value, or the present value of lease payments if lower) minus cost of goods sold (carrying amount, less the present value of any unguaranteed residual).</li>
<li>Expenses initial direct costs at commencement if fair value differs from carrying amount (a dealer or manufacturer); otherwise they are deferred and included in the net investment.</li>
</ul>
<p>After commencement, interest income is recognized on the net investment using the effective interest method, and the net investment is reduced by lease payments received. The net investment is subject to the current expected credit loss (CECL) model.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A manufacturer leases equipment (cost $70,000, fair value $100,000) for its full 5-year life at $23,191 per year, paid at the start of each year, with no residual value. The implicit rate is 8% (present value factor for an annuity due: 4.3121).<br>Net investment = 23,191 × 4.3121 ≈ <strong>$100,000</strong>. At commencement: revenue $100,000, cost of goods sold $70,000, selling profit <strong>$30,000</strong>.<br>After the first payment the net investment is $76,809, so Year 1 interest income = 76,809 × 8% ≈ <strong>$6,145</strong>.</p></div>

<h2>Direct financing leases</h2>
<ul>
<li>The lessor derecognizes the asset and records a net investment, but <strong>selling profit is deferred</strong> — included in the net investment and recognized as interest income over the lease term. A selling loss is recognized immediately.</li>
<li>Typical for financial institutions and captive finance subsidiaries that use third-party residual guarantees.</li>
</ul>

<h2>Operating leases</h2>
<ul>
<li>The lessor <strong>keeps the asset</strong> on its balance sheet and continues to <strong>depreciate</strong> it.</li>
<li>Lease income is recognized on a <strong>straight-line basis</strong> over the lease term (unless another systematic basis is more representative), even if payments escalate or include free-rent periods.</li>
<li>Initial direct costs are deferred and expensed over the lease term on the same basis as lease income.</li>
<li>Variable payments based on usage or performance are income when earned.</li>
<li>If collectibility is not probable, income is limited to cash received.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A 3-year operating lease has payments of $10,000, $12,000, and $14,000. The lessor recognizes lease income of 36,000 ÷ 3 = <strong>$12,000</strong> each year, recording a receivable (deferred rent asset) of $2,000 in Year 1.</p></div>

<h2>Other lessor topics</h2>
<ul>
<li><strong>Guaranteed versus unguaranteed residual value:</strong> a residual guaranteed by the lessee is part of lease payments and the classification test; one guaranteed by a third party affects only the direct financing test; an unguaranteed residual is part of the net investment but not of lease payments.</li>
<li><strong>Variable payments</strong> not based on an index or rate are excluded from the net investment. If that exclusion would produce a selling loss at commencement for a lease with significant variable payments, the lessor classifies it as an <strong>operating lease</strong> (Accounting Standards Update (ASU) 2021-05).</li>
<li><strong>Lease modifications:</strong> a modification granting an additional right of use at a standalone price is a separate contract; otherwise the lease is reassessed and reclassified as needed.</li>
<li><strong>Sale-leaseback (buyer-lessor):</strong> if the transfer is a sale, the buyer records the asset and accounts for the lease as lessor; if not, it records a financial asset (receivable).</li>
<li><strong>Short-term leases:</strong> the practical expedient to keep leases off the balance sheet is for lessees only.</li>
<li><strong>Presentation:</strong> the net investment is shown separately from other assets; income from sales-type and direct financing leases is disclosed, along with the maturity of lease receivables and operating lease payments.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Classify a lease from the lessor's perspective.</li>
<li>Compute the net investment and selling profit for a sales-type lease.</li>
<li>Compute straight-line income for an operating lease.</li>
<li>Explain the effect of residual value guarantees and variable payments.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The only difference between a sales-type and a direct financing lease for the lessor is when selling profit is recognized — immediately (sales-type) or over the lease term (direct financing). Third-party residual guarantees can turn an operating lease into a direct financing lease, never into a sales-type lease.</p></div>
`,
  revision: `
<h3>Lessor classification</h3>
<ol>
<li>Sales-type: any of 5 criteria (ownership, reasonably certain purchase option, ~75% of life, ~90% of fair value incl. lessee-guaranteed residual, no alternative use).</li>
<li>Direct financing: none of the 5, but present value incl. <strong>third-party</strong> guaranteed residual ≥ ~90% <strong>and</strong> collection probable.</li>
<li>Operating: everything else.</li>
</ol>

<h3>Sales-type</h3>
<p>Derecognize asset · net investment = present value of lease payments + present value of unguaranteed residual · selling profit at commencement · interest income afterward.</p>

<h3>Direct financing</h3>
<p>Net investment; selling profit <strong>deferred</strong> into interest; losses immediate.</p>

<h3>Operating</h3>
<p>Keep and depreciate the asset · straight-line lease income · defer initial direct costs.</p>

<h3>Other</h3>
<ul>
<li>Variable payments (not index-based) excluded; would-be day-one loss → operating lease.</li>
<li>Net investment subject to current expected credit loss (CECL) model.</li>
</ul>
`,
};
