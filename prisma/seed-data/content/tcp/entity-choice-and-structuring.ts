import type { TopicContent } from "../types";

export const entityChoice: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Entity Tax Planning is Area III of Tax Compliance and Planning (TCP). Choosing between a sole proprietorship, partnership or limited liability company (LLC), S corporation, and C corporation affects taxes on operations, compensation, losses, fringe benefits, raising capital, and the eventual exit. The One Big Beautiful Bill Act (OBBBA) made both the 21% corporate rate and the 20% qualified business income (QBI) deduction permanent, so the comparison is now stable.</p>

<h2>Side-by-side comparison</h2>
<table>
<thead><tr><th></th><th>Sole proprietorship / single-member LLC</th><th>Partnership / multi-member LLC</th><th>S corporation</th><th>C corporation</th></tr></thead>
<tbody>
<tr><td>Liability protection</td><td>None (proprietorship) / yes (LLC)</td><td>General partners unlimited; LLC members and limited partners protected</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Level of tax</td><td>Owner only</td><td>Partners only</td><td>Shareholders only (plus certain entity-level taxes)</td><td><strong>Twice</strong> — 21% at the corporation, then dividends to shareholders</td></tr>
<tr><td>Owners</td><td>One</td><td>Two or more; any type</td><td>≤ 100 eligible shareholders; no nonresident aliens, partnerships, or corporations</td><td>Unlimited, any type</td></tr>
<tr><td>Allocations</td><td>—</td><td><strong>Flexible</strong> special allocations</td><td>Strictly per share, per day</td><td>—</td></tr>
<tr><td>Basis from entity debt</td><td>—</td><td><strong>Yes</strong></td><td>No (only direct shareholder loans)</td><td>—</td></tr>
<tr><td>Self-employment tax</td><td>On all net earnings</td><td>General partners on their share</td><td>Only on reasonable salary (payroll tax)</td><td>Only on wages</td></tr>
<tr><td>QBI deduction (20%)</td><td>Yes</td><td>Yes</td><td>Yes (not on salary)</td><td>No — flat 21% instead</td></tr>
<tr><td>Losses</td><td>Pass through</td><td>Pass through</td><td>Pass through</td><td>Trapped in the corporation (net operating losses)</td></tr>
<tr><td>Owner fringe benefits</td><td>Limited</td><td>Limited</td><td>Limited for &gt; 2% shareholders</td><td><strong>Fully deductible</strong> and excludable for owner-employees</td></tr>
<tr><td>Capital raising</td><td>Hard</td><td>Moderate</td><td>One class of stock limits investors</td><td><strong>Easiest</strong> — preferred stock, venture capital, public markets</td></tr>
<tr><td>Qualified small business stock exclusion</td><td>No</td><td>No</td><td>No</td><td><strong>Yes</strong></td></tr>
</tbody>
</table>

<h2>Comparing the tax cost of profits</h2>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A business earns $100 of profit; the owner is in the 37% bracket and qualifies for the full QBI deduction.<br><strong>Pass-through:</strong> taxable income = $100 − 20% QBI deduction = $80 × 37% = <strong>$29.60</strong> (plus self-employment tax or the 3.8% net investment income tax, depending on facts).<br><strong>C corporation, all profits distributed:</strong> corporate tax $21; the remaining $79 paid as a qualified dividend taxed at 20% + 3.8% = $18.80. Total = <strong>$39.80</strong>.<br><strong>C corporation, profits retained:</strong> only <strong>$21</strong> now — attractive for businesses that reinvest, but watch the accumulated earnings tax and personal holding company tax.</p></div>

<h2>When each entity tends to fit</h2>
<ul>
<li><strong>Partnership or LLC:</strong> real estate and investment ventures (basis from debt, flexible allocations, tax-free distributions of property), joint ventures, and businesses with varied owners.</li>
<li><strong>S corporation:</strong> profitable owner-operated service or trade businesses where salary plus distributions reduces payroll taxes.</li>
<li><strong>C corporation:</strong> high-growth start-ups raising venture capital, especially where <strong>qualified small business stock</strong> (Section 1202) could exclude gain — for stock issued after July 4, 2025, 50% after 3 years, 75% after 4, and 100% after 5, up to $15 million per issuer; businesses reinvesting most profits; companies planning an initial public offering.</li>
<li><strong>Sole proprietorship / single-member LLC:</strong> simple, low-profit ventures — often converting later.</li>
</ul>

<h2>Classification and conversions</h2>
<ul>
<li><strong>Check-the-box rules:</strong> an eligible entity (such as an LLC) can elect to be taxed as a corporation (and then as an S corporation). Default: single-member → disregarded; multi-member → partnership. A corporation under state law can't be treated as a partnership.</li>
<li><strong>Converting a partnership or LLC to a corporation</strong> is usually tax-free under Section 351 (80% control), but watch liabilities in excess of basis.</li>
<li><strong>Converting a C corporation to a partnership or LLC</strong> is a taxable liquidation — the corporation and shareholders are taxed on appreciation. It's much easier to go from pass-through to corporation than the reverse.</li>
<li><strong>C to S election:</strong> no immediate tax, but the built-in gains tax applies for 5 years.</li>
</ul>

<h2>Other structuring considerations</h2>
<ul>
<li><strong>Exit strategy:</strong> buyers want a basis step-up — easy with pass-throughs (asset sale, or a Section 754 election for partnership interests); C corporation asset sales cause double tax, so C corporation owners usually sell stock.</li>
<li><strong>State taxes:</strong> pass-through entity tax elections avoid the individual state and local tax deduction cap; some states tax LLCs or S corporations at the entity level.</li>
<li><strong>Multiple entities:</strong> holding real estate in an LLC and leasing it to the operating company separates liability and can create rental income; management companies and family structures shift income within limits.</li>
<li><strong>Compensation and retirement:</strong> C corporations offer the most flexible benefit plans; all entities can sponsor retirement plans.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Recommend an entity for a fact pattern.</li>
<li>Compute the combined tax on profits for pass-through versus C corporation structures.</li>
<li>Identify consequences of converting between entity types.</li>
<li>Weigh qualified small business stock, fringe benefits, losses, and exit strategy.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> If the facts mention outside investors, venture capital, reinvesting all profits, or a future stock sale that could qualify for the Section 1202 exclusion, lean toward a C corporation. If they mention losses, real estate, flexible allocations, or distributing all profits, lean toward a pass-through.</p></div>
`,
  revision: `
<h3>Key differences</h3>
<ul>
<li>Partnership / limited liability company (LLC): flexible allocations, basis from entity debt, tax-free property distributions.</li>
<li>S corporation: salary + distributions (payroll tax savings); per-share allocations; ≤ 100 eligible shareholders.</li>
<li>C corporation: 21% flat, double tax on dividends, best fringe benefits and capital raising, qualified small business stock exclusion.</li>
</ul>

<h3>Tax on $100 of profit (37% owner)</h3>
<p>Pass-through with qualified business income (QBI) deduction: ≈ $29.60 · C corporation distributed: ≈ $39.80 · C corporation retained: $21.</p>

<h3>Section 1202 (stock issued after July 4, 2025)</h3>
<p>50% (3 years) · 75% (4 years) · 100% (5 years); $15 million cap per issuer.</p>

<h3>Conversions</h3>
<ul>
<li>Pass-through → corporation: generally tax-free (Section 351).</li>
<li>C corporation → partnership: taxable liquidation.</li>
<li>C → S: built-in gains tax for 5 years.</li>
<li>Check-the-box: single-member LLC disregarded; multi-member → partnership by default.</li>
</ul>

<h3>Exit</h3>
<p>Pass-through asset sale → buyer step-up, one tax. C corporation → sell stock to avoid double tax.</p>
`,
};
