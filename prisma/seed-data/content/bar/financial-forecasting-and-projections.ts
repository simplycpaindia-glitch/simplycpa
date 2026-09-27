import type { TopicContent } from "../types";

export const forecastingValuation: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Business Analysis and Reporting (BAR) Area I asks candidates to look forward: build budgets and forecasts, analyze cost-volume-profit relationships, evaluate capital investments, estimate a company's cost of capital, and value a business or asset. These are calculation-heavy skills that often appear in task-based simulations.</p>

<h2>Budgeting</h2>
<table>
<thead><tr><th>Type</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Master (static) budget</td><td>Built for one planned level of activity; begins with the <strong>sales budget</strong>, then production, direct materials, direct labor, overhead, selling and administrative, the cash budget, and budgeted financial statements</td></tr>
<tr><td>Flexible budget</td><td>Adjusts costs to the actual level of activity — used to evaluate performance</td></tr>
<tr><td>Zero-based budget</td><td>Every expense must be justified from zero each period</td></tr>
<tr><td>Rolling (continuous) budget</td><td>A new period is added as each period ends</td></tr>
<tr><td>Participative budget</td><td>Managers help set their own budgets — better buy-in, risk of budgetary slack</td></tr>
</tbody>
</table>
<p><strong>Production budget:</strong> units to produce = budgeted sales + desired ending inventory − beginning inventory.</p>

<h2>Forecasting techniques</h2>
<ul>
<li><strong>Trend and moving-average</strong> methods extend past patterns.</li>
<li><strong>Regression analysis</strong> relates a dependent variable (cost, sales) to one or more drivers: y = a + bx. The <strong>coefficient of determination (R²)</strong> shows the share of variation explained; values near 1 indicate a strong fit.</li>
<li><strong>High-low method:</strong> variable cost per unit = (cost at highest activity − cost at lowest activity) ÷ (highest − lowest activity); fixed cost = total cost − variable cost at either point.</li>
<li><strong>Sensitivity analysis</strong> changes one input at a time; <strong>scenario analysis</strong> changes several (best, base, worst cases); <strong>Monte Carlo simulation</strong> uses probability distributions.</li>
</ul>

<h2>Cost-volume-profit analysis</h2>
<table>
<thead><tr><th>Measure</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Contribution margin per unit</td><td>Selling price − variable cost per unit</td></tr>
<tr><td>Contribution margin ratio</td><td>Contribution margin ÷ selling price</td></tr>
<tr><td>Breakeven in units</td><td>Fixed costs ÷ contribution margin per unit</td></tr>
<tr><td>Breakeven in dollars</td><td>Fixed costs ÷ contribution margin ratio</td></tr>
<tr><td>Units for a target profit</td><td>(Fixed costs + target profit) ÷ contribution margin per unit (use pretax profit = after-tax profit ÷ (1 − tax rate))</td></tr>
<tr><td>Margin of safety</td><td>Actual (or budgeted) sales − breakeven sales</td></tr>
<tr><td>Degree of operating leverage</td><td>Contribution margin ÷ operating income</td></tr>
</tbody>
</table>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Price $50, variable cost $30, fixed costs $200,000. Contribution margin = $20; breakeven = 200,000 ÷ 20 = <strong>10,000 units</strong> ($500,000 of sales). To earn $60,000 pretax: (200,000 + 60,000) ÷ 20 = <strong>13,000 units</strong>.</p></div>

<h2>Capital budgeting</h2>
<table>
<thead><tr><th>Method</th><th>Calculation</th><th>Decision rule and notes</th></tr></thead>
<tbody>
<tr><td><strong>Net present value (NPV)</strong></td><td>Present value of future cash inflows − initial investment, at the required rate of return</td><td>Accept if NPV ≥ 0. The preferred method — considers the time value of money and all cash flows; assumes reinvestment at the discount rate.</td></tr>
<tr><td><strong>Internal rate of return (IRR)</strong></td><td>The discount rate at which NPV = 0</td><td>Accept if IRR ≥ required rate. Can mislead for mutually exclusive projects or non-conventional cash flows; assumes reinvestment at the IRR.</td></tr>
<tr><td>Profitability index</td><td>Present value of future cash flows ÷ initial investment</td><td>Accept if &gt; 1; useful for ranking under capital rationing</td></tr>
<tr><td>Payback period</td><td>Investment ÷ annual cash inflow (even flows)</td><td>Ignores the time value of money and cash flows after payback; measures liquidity risk</td></tr>
<tr><td>Discounted payback</td><td>Payback using discounted cash flows</td><td>Adds time value but still ignores later flows</td></tr>
<tr><td>Accounting rate of return</td><td>Average annual accounting income ÷ investment (initial or average)</td><td>Uses accrual income, ignores time value</td></tr>
</tbody>
</table>
<p>Relevant cash flows include the initial investment (plus working capital), after-tax operating cash flows, the <strong>depreciation tax shield</strong> (depreciation × tax rate), and after-tax salvage value. <strong>Sunk costs are ignored</strong>; opportunity costs are included.</p>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A $100,000 machine produces $30,000 per year for 5 years; the required return is 10% (annuity factor 3.791). NPV = 30,000 × 3.791 − 100,000 = <strong>$13,730</strong> → accept. Payback = 100,000 ÷ 30,000 = <strong>3.33 years</strong>.</p></div>

<h2>Cost of capital</h2>
<ul>
<li><strong>Cost of debt</strong> (after-tax) = pretax yield × (1 − tax rate).</li>
<li><strong>Cost of equity</strong> using the <strong>capital asset pricing model (CAPM)</strong>: risk-free rate + beta × (market return − risk-free rate). Alternatively, the dividend growth model: (next dividend ÷ price) + growth rate.</li>
<li><strong>Weighted average cost of capital (WACC)</strong> = (weight of debt × after-tax cost of debt) + (weight of preferred × cost of preferred) + (weight of equity × cost of equity), using market-value weights. It is the discount rate for projects with average company risk.</li>
</ul>
<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Risk-free rate 4%, market return 10%, beta 1.2 → cost of equity = 4% + 1.2 × 6% = <strong>11.2%</strong>. Debt yields 7% with a 21% tax rate → after-tax 5.53%. With 60% equity and 40% debt, WACC = 0.6 × 11.2% + 0.4 × 5.53% = <strong>8.93%</strong>.</p></div>

<h2>Valuation</h2>
<table>
<thead><tr><th>Approach</th><th>Techniques</th></tr></thead>
<tbody>
<tr><td><strong>Income approach</strong></td><td>Discounted cash flow — forecast free cash flows and a terminal value (for example, final-year cash flow × (1 + g) ÷ (WACC − g)), discount at WACC; capitalization of earnings</td></tr>
<tr><td><strong>Market approach</strong></td><td>Multiples of comparable companies or transactions — price-to-earnings, enterprise value to earnings before interest, taxes, depreciation, and amortization (EBITDA), price-to-book</td></tr>
<tr><td><strong>Cost (asset) approach</strong></td><td>Replacement or reproduction cost, adjusted net asset value</td></tr>
</tbody>
</table>
<p>For financial reporting, valuations follow the fair value hierarchy of Accounting Standards Codification (ASC) 820: Level 1 (quoted prices for identical assets), Level 2 (observable inputs), Level 3 (unobservable inputs).</p>

<h2>How it is tested</h2>
<ul>
<li>Prepare a production or cash budget.</li>
<li>Compute breakeven, target profit volume, and margin of safety.</li>
<li>Compute NPV, IRR, payback, and the profitability index, and choose between projects.</li>
<li>Compute the cost of equity with CAPM, WACC, and a simple discounted cash flow value.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When NPV and IRR rank mutually exclusive projects differently, choose the project with the higher NPV — it measures the increase in shareholder value directly.</p></div>
`,
  revision: `
<h3>Budgets</h3>
<p>Master starts with sales. Production = sales + ending inventory − beginning inventory. Flexible budget adjusts to actual volume.</p>

<h3>Cost-volume-profit</h3>
<ul>
<li>Breakeven units = fixed costs ÷ contribution margin per unit.</li>
<li>Target units = (fixed costs + pretax profit) ÷ contribution margin per unit.</li>
<li>Margin of safety = sales − breakeven. Operating leverage = contribution margin ÷ operating income.</li>
</ul>

<h3>Capital budgeting</h3>
<ul>
<li>Net present value (NPV) ≥ 0 → accept (preferred method).</li>
<li>Internal rate of return (IRR): rate where NPV = 0.</li>
<li>Profitability index = present value of inflows ÷ investment.</li>
<li>Payback ignores time value. Ignore sunk costs; include the depreciation tax shield.</li>
</ul>

<h3>Cost of capital</h3>
<ul>
<li>After-tax debt = yield × (1 − tax rate).</li>
<li>Capital asset pricing model (CAPM): risk-free + beta × (market − risk-free).</li>
<li>Weighted average cost of capital (WACC) = weighted after-tax costs at market values.</li>
</ul>

<h3>Valuation</h3>
<p>Income (discounted cash flow, terminal value = cash flow × (1 + g) ÷ (WACC − g)) · market (multiples) · cost (replacement).</p>
`,
};
