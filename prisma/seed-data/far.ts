import type { SubjectSeed } from "./types";

export const far: SubjectSeed = {
  slug: "far",
  name: "Financial Accounting and Reporting",
  shortName: "FAR",
  type: "CORE",
  description:
    "FAR tests your ability to prepare and analyze financial statements under US GAAP — from the conceptual framework through specific balance-sheet accounts and transactions. It's the broadest of the three Core sections and, for most candidates, the one requiring the most study time.",
  difficulty: "HARD",
  estimatedHours: 140,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/far-cpa-exam-blueprint",
  order: 1,
  topics: [
    {
      slug: "conceptual-framework-and-financial-statement-presentation",
      title: "Conceptual Framework & Financial Statement Presentation",
      shortDescription: "The FASB's conceptual framework, qualitative characteristics, and the required financial statements.",
      blueprintArea: "Area I: Financial Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "EASY",
      estimatedMinutes: 45,
      order: 1,
      studyMaterialHtml: `
<h2>Why the conceptual framework matters</h2>
<p>The FASB's Conceptual Framework isn't authoritative GAAP itself — it's the reasoning behind GAAP. On the exam, it shows up as questions about qualitative characteristics, recognition, and measurement, and it's the tiebreaker whenever a question asks "which treatment is <em>most</em> consistent with GAAP" and more than one option looks plausible.</p>

<h3>Fundamental qualitative characteristics</h3>
<table>
<thead><tr><th>Characteristic</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Relevance</td><td>Has predictive value, confirmatory value, or both; must be material</td></tr>
<tr><td>Faithful representation</td><td>Complete, neutral, and free from error</td></tr>
</tbody>
</table>
<p>Enhancing characteristics — comparability, verifiability, timeliness, and understandability — support the two fundamental ones but don't override them.</p>

<h3>The five required financial statements</h3>
<ul>
<li>Balance sheet (statement of financial position)</li>
<li>Income statement (statement of operations)</li>
<li>Statement of comprehensive income (can be combined with the income statement)</li>
<li>Statement of cash flows</li>
<li>Statement of changes in stockholders' equity</li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Comprehensive income = Net income + Other Comprehensive Income (OCI). OCI items are the classic "PUFI" bucket: Pension adjustments, Unrealized gains/losses on AFS debt securities, Foreign currency translation adjustments, and Instrument-specific credit risk / effective portion of cash flow hedges.</p></div>

<h3>Elements of financial statements</h3>
<p>Assets, liabilities, equity, revenues, expenses, gains, losses, and comprehensive income are all formally defined elements. A common exam trap: distinguishing a <strong>gain</strong> (peripheral/incidental transaction, e.g. sale of equipment) from <strong>revenue</strong> (from an entity's ongoing major operations).</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When a question describes a transaction and asks whether it's revenue or a gain, ask: "Is this what the company is in the business of doing?" A logistics company selling a delivery truck records a gain, not revenue.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>2 fundamental characteristics:</strong> Relevance, Faithful Representation</li>
<li><strong>4 enhancing characteristics:</strong> Comparability, Verifiability, Timeliness, Understandability</li>
<li><strong>5 required statements:</strong> Balance sheet, Income statement, Comprehensive income, Cash flows, Equity</li>
<li><strong>OCI = "PUFI":</strong> Pension adjustments, Unrealized AFS debt security gains/losses, Foreign currency translation, Instrument-specific credit risk</li>
<li>Revenue = ongoing major operations. Gain = peripheral/incidental.</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Don't confuse "comprehensive income" (net income + OCI) with "other comprehensive income" (just the OCI piece) — the exam tests this distinction directly.</p></div>
`,
      mcqs: [
        {
          question: "Under the FASB conceptual framework, which of the following is one of the two fundamental qualitative characteristics of useful financial information?",
          options: [
            { label: "A", text: "Comparability", isCorrect: false, rationale: "Comparability is an enhancing characteristic, not a fundamental one." },
            { label: "B", text: "Faithful representation", isCorrect: true, rationale: "Correct — relevance and faithful representation are the two fundamental qualitative characteristics." },
            { label: "C", text: "Timeliness", isCorrect: false, rationale: "Timeliness is an enhancing characteristic." },
            { label: "D", text: "Verifiability", isCorrect: false, rationale: "Verifiability is an enhancing characteristic." },
          ],
          explanation: "The conceptual framework identifies relevance and faithful representation as the two fundamental qualitative characteristics. Comparability, verifiability, timeliness, and understandability enhance the usefulness of information that is already relevant and faithfully represented.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["conceptual framework"],
        },
        {
          question: "A logistics company sells one of its used delivery trucks for more than its carrying value. How should this transaction be classified in the income statement?",
          options: [
            { label: "A", text: "As revenue, since the truck was used to generate revenue", isCorrect: false, rationale: "Revenue arises from an entity's ongoing major or central operations — selling delivery trucks isn't the logistics company's business." },
            { label: "B", text: "As a gain, since it results from a peripheral or incidental transaction", isCorrect: true, rationale: "Correct — disposing of equipment not held for resale is peripheral to a logistics company's core operations, so any excess of proceeds over carrying value is a gain." },
            { label: "C", text: "Directly to other comprehensive income", isCorrect: false, rationale: "This is a realized transaction affecting net income, not an OCI item." },
            { label: "D", text: "As a reduction of operating expenses", isCorrect: false, rationale: "Gains are reported separately from operating expenses, typically within other income/(expense)." },
          ],
          explanation: "Gains arise from peripheral or incidental transactions, while revenue arises from an entity's ongoing major operations. Selling a used truck is incidental to a logistics company's core business of moving goods, so the excess of proceeds over carrying value is a gain, not revenue.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["conceptual framework", "exam trap"],
        },
      ],
    },
    {
      slug: "balance-sheet-and-income-statement-preparation",
      title: "Balance Sheet & Income Statement Preparation",
      shortDescription: "Classified balance sheet structure, multi-step income statement, and discontinued operations presentation.",
      blueprintArea: "Area I: Financial Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 2,
      studyMaterialHtml: `
<h2>The classified balance sheet</h2>
<p>Most US companies present a <strong>classified</strong> balance sheet, separating current from noncurrent assets and liabilities. An item is current if it's expected to be converted to cash, sold, or consumed within one year or the operating cycle, whichever is longer.</p>

<h3>Multi-step income statement</h3>
<p>The multi-step format separates operating from non-operating activity, which the exam tests heavily:</p>
<ul>
<li>Net sales − COGS = <strong>Gross profit</strong></li>
<li>Gross profit − Operating expenses = <strong>Operating income</strong></li>
<li>Operating income +/− Non-operating items (interest expense, gains/losses) = <strong>Income before tax</strong></li>
<li>Income before tax − Tax expense = <strong>Income from continuing operations</strong></li>
<li>+/− Discontinued operations (net of tax) = <strong>Net income</strong></li>
</ul>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> A component qualifies as a discontinued operation only if its disposal represents a <strong>strategic shift</strong> that has (or will have) a major effect on operations and financial results (e.g., disposal of a major geographic area or a major line of business) — not just any asset sale.</p></div>

<h3>EPS presentation</h3>
<p>When there are discontinued operations, EPS must be shown for income from continuing operations, the discontinued operations, and net income — either on the face of the statement or in the notes.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Discontinued operations are always presented <em>net of tax</em>, separately from continuing operations, even though the components that make it up (operating results and any gain/loss on disposal) may be taxed at different times.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Current = converted/settled within 1 year or operating cycle, whichever is longer</li>
<li>Multi-step order: Sales → Gross profit → Operating income → Income before tax → Continuing ops → Net income</li>
<li>Discontinued ops = strategic shift with major effect, reported net of tax, below continuing operations</li>
<li>EPS required for: continuing operations, discontinued operations, net income</li>
</ul>
`,
    },
    {
      slug: "statement-of-cash-flows",
      title: "Statement of Cash Flows",
      shortDescription: "Direct vs indirect method, and classifying activities as operating, investing, or financing.",
      blueprintArea: "Area I: Financial Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 75,
      order: 3,
      studyMaterialHtml: `
<h2>Three activity buckets</h2>
<p>Every cash flow gets classified as <strong>operating</strong>, <strong>investing</strong>, or <strong>financing</strong>. Misclassification is one of the most heavily tested FAR errors.</p>
<table>
<thead><tr><th>Activity</th><th>Typical items</th></tr></thead>
<tbody>
<tr><td>Operating</td><td>Cash from customers, cash to suppliers/employees, interest paid/received, dividends received, income taxes paid</td></tr>
<tr><td>Investing</td><td>Purchase/sale of PP&E, purchase/sale of investment securities, lending and collecting on loans</td></tr>
<tr><td>Financing</td><td>Issuing/repurchasing stock, borrowing and repaying debt principal, paying dividends</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT (US GAAP specific):</strong> Interest paid, interest received, and dividends received are all <strong>operating</strong> activities under US GAAP. Only dividends <em>paid</em> are financing. This differs from IFRS, which allows more flexibility — know the US GAAP answer for the exam.</p></div>

<h3>Indirect method (the one you'll build most often)</h3>
<p>Start with net income, then reverse out non-cash items and working-capital changes:</p>
<ul>
<li>Add back: depreciation, amortization, losses on sale, stock compensation expense</li>
<li>Subtract: gains on sale</li>
<li>Increase in a current asset → subtract from net income; decrease → add</li>
<li>Increase in a current liability → add to net income; decrease → subtract</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Think of it as "cash follows the opposite direction of assets, and the same direction as liabilities." An increase in accounts receivable means less cash was collected than sales recorded, so it reduces the indirect-method adjustment.</p></div>

<h3>Direct method</h3>
<p>Shows actual cash received from customers and cash paid to suppliers/employees, computed by adjusting each income statement line for the related balance-sheet change. Less commonly tested numerically, but the exam expects you to know it requires a reconciliation to net income as a supplementary disclosure either way.</p>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Interest paid/received, dividends received → <strong>Operating</strong> (US GAAP)</li>
<li>Dividends paid → <strong>Financing</strong></li>
<li>Buying/selling PP&E or investments, lending → <strong>Investing</strong></li>
<li>Issuing stock/debt, repaying debt principal, buybacks → <strong>Financing</strong></li>
<li>Indirect method: add back non-cash expenses (depreciation, losses); subtract gains; asset ↑ = cash ↓, liability ↑ = cash ↑</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Under US GAAP, dividends <em>received</em> are operating; dividends <em>paid</em> are financing. Candidates frequently mix these up.</p></div>
`,
    },
    {
      slug: "notes-subsequent-events-and-going-concern",
      title: "Notes, Subsequent Events & Going Concern",
      shortDescription: "Recognized vs non-recognized subsequent events and management's going-concern evaluation.",
      blueprintArea: "Area I: Financial Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 45,
      order: 4,
      studyMaterialHtml: `
<h2>Subsequent events: two types</h2>
<table>
<thead><tr><th>Type</th><th>Definition</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Recognized (Type I)</td><td>Condition existed at the balance sheet date</td><td>Adjust the financial statements</td></tr>
<tr><td>Non-recognized (Type II)</td><td>Condition arose after the balance sheet date</td><td>Disclose only, no adjustment</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A lawsuit filed before year-end that settles after year-end for a determinable amount is a <strong>Type I</strong> event — adjust the financials. A factory that burns down after year-end is a <strong>Type II</strong> event — disclose, don't adjust, since the condition (the fire) didn't exist at year-end.</p></div>

<h3>Evaluation period</h3>
<p>Management evaluates subsequent events through the date the financial statements are <strong>issued</strong> (public companies) or <strong>available to be issued</strong> (many private companies) — not just through the audit report date.</p>

<h3>Going concern</h3>
<p>Management must evaluate, for each annual and interim period, whether there is substantial doubt about the entity's ability to continue as a going concern for one year from the financial statement issuance date. If substantial doubt exists and isn't alleviated by management's plans, that must be disclosed; if doubt remains after considering plans, the disclosure must say so explicitly.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Going-concern doubt does not, by itself, change the basis of accounting (financials stay at historical cost, not liquidation basis) unless liquidation is actually imminent.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Type I (recognized): condition existed at year-end → adjust</li>
<li>Type II (non-recognized): condition arose after year-end → disclose only</li>
<li>Evaluation period: through issuance date (or "available to be issued")</li>
<li>Going concern: substantial doubt if entity can't meet obligations for 1 year from issuance; disclose regardless of whether management's plans alleviate it</li>
</ul>
`,
    },
    {
      slug: "revenue-recognition",
      title: "Revenue Recognition (ASC 606)",
      shortDescription: "The 5-step revenue model: contracts, performance obligations, transaction price, allocation, and recognition timing.",
      blueprintArea: "Area III: Select Transactions",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 90,
      order: 5,
      studyMaterialHtml: `
<h2>The 5-step model</h2>
<ol>
<li><strong>Identify the contract</strong> with a customer</li>
<li><strong>Identify the performance obligations</strong> — distinct promises to transfer goods/services</li>
<li><strong>Determine the transaction price</strong> — including variable consideration, financing components, noncash consideration</li>
<li><strong>Allocate the transaction price</strong> to each performance obligation based on relative standalone selling price</li>
<li><strong>Recognize revenue</strong> when (or as) each performance obligation is satisfied</li>
</ol>

<h3>Point in time vs. over time</h3>
<p>Revenue is recognized <strong>over time</strong> if any one of these is met: (a) the customer simultaneously receives and consumes the benefit as the entity performs; (b) the entity's performance creates or enhances an asset the customer controls as it's created; or (c) the asset has no alternative use to the entity <em>and</em> the entity has an enforceable right to payment for performance completed to date. Otherwise, revenue is recognized at the <strong>point in time</strong> control transfers.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> "Control" — not "risks and rewards" — is the recognition trigger under ASC 606. Indicators of control transfer include: right to payment, legal title, physical possession, risks/rewards of ownership, and customer acceptance.</p></div>

<h3>Variable consideration</h3>
<p>Discounts, rebates, refunds, and performance bonuses are all variable consideration. Include an estimate in the transaction price only to the extent it's <strong>probable</strong> that a significant reversal won't occur later (the "constraint").</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A software company licenses a perpetual license (point-in-time, at delivery) bundled with one year of technical support (over-time, recognized ratably over the support period). The total contract price must be allocated between the two performance obligations based on standalone selling prices.</p></div>

<h3>Contract costs</h3>
<p>Incremental costs of obtaining a contract (e.g., sales commissions) are capitalized if the entity expects to recover them, and amortized over the period of benefit — unless the amortization period would be one year or less, in which case they can be expensed immediately as a practical expedient.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When a question describes a "right of return," remember revenue is recognized only for the amount not expected to be returned, with a separate refund liability recorded for the expected returns.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li><strong>5 steps:</strong> Identify contract → Identify performance obligations → Determine price → Allocate price → Recognize revenue</li>
<li>Over-time recognition if: customer consumes as you perform, OR you're creating/enhancing a customer-controlled asset, OR asset has no alternative use + enforceable right to payment</li>
<li>Trigger for recognition = transfer of <strong>control</strong>, not risks/rewards</li>
<li>Variable consideration included only if probable no significant reversal later</li>
<li>Contract-acquisition costs (e.g. commissions): capitalize & amortize, unless period ≤ 1 year (expense immediately)</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Don't default to "risks and rewards" language from the old standard — ASC 606 is control-based.</p></div>
`,
      mcqs: [
        {
          question: "Under ASC 606, revenue from a performance obligation should be recognized over time if which of the following is true?",
          options: [
            { label: "A", text: "The customer pays in installments over the contract term", isCorrect: false, rationale: "Payment terms alone don't determine timing of revenue recognition." },
            { label: "B", text: "The entity's performance creates an asset with no alternative use to the entity and the entity has an enforceable right to payment for performance completed to date", isCorrect: true, rationale: "Correct — this is one of the three over-time recognition criteria under ASC 606." },
            { label: "C", text: "Legal title to the goods has transferred to the customer", isCorrect: false, rationale: "Transfer of legal title is an indicator of point-in-time control transfer, not an over-time criterion." },
            { label: "D", text: "The contract is non-cancellable", isCorrect: false, rationale: "Cancellability affects whether a contract exists, not the timing of recognition once it does." },
          ],
          explanation: "ASC 606 recognizes revenue over time when: the customer simultaneously receives and consumes benefits as the entity performs; the entity's performance creates or enhances a customer-controlled asset; or the asset created has no alternative use to the entity and the entity has an enforceable right to payment for performance completed to date.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["revenue recognition"],
        },
        {
          question: "A company sells a machine for $100,000 with a 5% volume rebate that historically about 60% of customers claim. How should the company initially estimate the transaction price for a sale where the rebate is expected to be claimed?",
          options: [
            { label: "A", text: "$100,000, recognizing the rebate only when paid", isCorrect: false, rationale: "Variable consideration must be estimated at contract inception, not recognized only when paid — that would misstate revenue in the period of sale." },
            { label: "B", text: "$95,000, net of the full expected rebate, subject to the constraint on variable consideration", isCorrect: true, rationale: "Correct — expected variable consideration (the rebate) reduces the transaction price to the extent it's probable a significant revenue reversal won't occur." },
            { label: "C", text: "$100,000, with the rebate recorded as a marketing expense when paid", isCorrect: false, rationale: "Rebates to customers reduce the transaction price under ASC 606; they are not marketing expenses." },
            { label: "D", text: "$97,500, averaging the rebate probability into the price", isCorrect: false, rationale: "The rebate is estimated using the expected value or most likely amount method — simple probability-weighted averaging without following the standard's estimation methods is not correct here." },
          ],
          explanation: "Variable consideration such as rebates must be estimated and included in the transaction price (reducing it) at contract inception, to the extent it is probable that a significant reversal of cumulative revenue will not occur. This is part of Step 3 of the ASC 606 model.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["revenue recognition", "variable consideration"],
        },
        {
          question: "Which of the following costs should be capitalized as a contract cost under ASC 606, assuming the amortization period exceeds one year?",
          options: [
            { label: "A", text: "General administrative costs of the sales department", isCorrect: false, rationale: "These are not incremental to obtaining a specific contract, so they're expensed as incurred." },
            { label: "B", text: "A sales commission paid only if the specific contract is won", isCorrect: true, rationale: "Correct — this is an incremental cost of obtaining a contract and should be capitalized if the entity expects to recover it and the amortization period exceeds one year." },
            { label: "C", text: "Cost of goods sold for the product delivered under the contract", isCorrect: false, rationale: "COGS is expensed when the related revenue is recognized; it is not a contract acquisition cost." },
            { label: "D", text: "Bid preparation costs that would have been incurred regardless of whether the contract was won", isCorrect: false, rationale: "Only costs incremental to winning the specific contract qualify — costs incurred regardless of outcome are expensed." },
          ],
          explanation: "Incremental costs of obtaining a contract — costs that would not have been incurred if the contract had not been obtained, such as a commission paid only on a won deal — are capitalized (if recoverable) and amortized over the period of benefit, unless that period is one year or less.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["revenue recognition", "contract costs"],
        },
      ],
    },
    {
      slug: "cash-receivables-and-bad-debts",
      title: "Cash, Receivables & Bad Debts",
      shortDescription: "Cash equivalents, the CECL expected-credit-loss model, and factoring receivables.",
      blueprintArea: "Area II: Select Balance Sheet Accounts",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 6,
      studyMaterialHtml: `
<h2>Cash and cash equivalents</h2>
<p>Cash equivalents are short-term, highly liquid investments with an <strong>original maturity of three months or less</strong> from the date of purchase (e.g., T-bills purchased one month before maturity). A restricted cash balance (e.g., compensating balance required by a loan agreement) is excluded from "cash" and separately classified based on when the restriction lapses.</p>

<h3>Estimating credit losses: CECL</h3>
<p>Under ASC 326 (Current Expected Credit Losses), companies estimate <strong>lifetime expected credit losses</strong> on receivables at initial recognition — not just losses that have already been "incurred," as under the old model. This means the allowance is set up immediately when a receivable is recorded, based on historical experience, current conditions, and reasonable forecasts.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Allowance for credit losses is a <strong>contra-asset</strong>. Writing off a specific account debits the allowance and credits accounts receivable — it does <em>not</em> touch bad debt expense again, since the expense was already recognized when the allowance was established.</p></div>

<h3>Factoring receivables</h3>
<table>
<thead><tr><th>Type</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Without recourse</td><td>Sale — receivable removed from books, loss recognized for the discount</td></tr>
<tr><td>With recourse</td><td>Treated as a sale only if the transferor surrenders control (per ASC 860); otherwise treated as a secured borrowing</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "Recourse" means the factor can come back to the seller if customers don't pay. Recourse alone doesn't automatically block sale treatment — control must actually transfer per the ASC 860 criteria.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Cash equivalents: original maturity ≤ 3 months</li>
<li>CECL: estimate <strong>lifetime</strong> expected credit losses at initial recognition, not just "incurred" losses</li>
<li>Write-off: Dr. Allowance / Cr. A/R — no new expense hits at write-off</li>
<li>Factoring without recourse = sale; with recourse = sale only if control transfers per ASC 860, else secured borrowing</li>
</ul>
`,
    },
    {
      slug: "inventory",
      title: "Inventory",
      shortDescription: "Cost flow assumptions, lower of cost and net realizable value, and the periodic vs perpetual systems.",
      blueprintArea: "Area II: Select Balance Sheet Accounts",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 70,
      order: 7,
      studyMaterialHtml: `
<h2>Cost flow assumptions</h2>
<table>
<thead><tr><th>Method</th><th>Effect in rising prices</th></tr></thead>
<tbody>
<tr><td>FIFO</td><td>Lower COGS, higher ending inventory, higher net income</td></tr>
<tr><td>LIFO</td><td>Higher COGS, lower ending inventory, lower net income (and lower tax)</td></tr>
<tr><td>Weighted average</td><td>Falls between FIFO and LIFO</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> LIFO is permitted under US GAAP but <strong>not</strong> under IFRS. A company using LIFO for tax purposes in the US must also use it for financial reporting (the "LIFO conformity rule") — this is a US-specific, exam-favorite fact.</p></div>

<h3>Subsequent measurement</h3>
<p>Under US GAAP:</p>
<ul>
<li><strong>FIFO or weighted average:</strong> measured at the <strong>lower of cost and net realizable value (LCNRV)</strong>. NRV = estimated selling price − reasonably predictable costs of completion and disposal.</li>
<li><strong>LIFO or retail method:</strong> measured at the <strong>lower of cost or market (LCM)</strong>, where "market" is replacement cost, bounded by a ceiling (NRV) and floor (NRV − normal profit margin).</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Inventory costs $80. Selling price is $100, with $15 of disposal costs (NRV = $85) and a normal profit margin of $10 (floor = $75). If replacement cost is $70, "market" is bounded between $75 and $85, so market = $75. Lower of cost ($80) or market ($75) = <strong>$75</strong>.</p></div>

<h3>Periodic vs. perpetual</h3>
<p>Perpetual systems update inventory and COGS with every transaction; periodic systems calculate COGS only at period-end via a physical count (Beginning inventory + Purchases − Ending inventory = COGS). Under FIFO, periodic and perpetual give the <em>same</em> answer; under LIFO and weighted average, they can differ.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Freight-in is added to inventory cost; freight-out (delivering to customers) is a selling expense — don't capitalize it.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Rising prices: FIFO → higher NI; LIFO → lower NI (and lower tax)</li>
<li>LIFO allowed under US GAAP, not IFRS; LIFO conformity rule ties tax and book use</li>
<li>FIFO/weighted average → LCNRV (NRV = selling price − completion/disposal costs)</li>
<li>LIFO/retail → LCM, bounded by ceiling (NRV) and floor (NRV − normal profit)</li>
<li>Freight-in → inventory cost; freight-out → selling expense</li>
</ul>
`,
      mcqs: [
        {
          question: "A company uses LIFO for both tax and financial reporting. During a period of rising prices, which of the following is true relative to FIFO?",
          options: [
            { label: "A", text: "LIFO results in higher net income and higher ending inventory", isCorrect: false, rationale: "This describes FIFO's effect in rising prices, not LIFO's." },
            { label: "B", text: "LIFO results in higher cost of goods sold and lower ending inventory", isCorrect: true, rationale: "Correct — under LIFO, the most recently purchased (higher-cost) items are expensed first, increasing COGS and leaving older, lower-cost items in ending inventory." },
            { label: "C", text: "LIFO and FIFO always produce identical net income", isCorrect: false, rationale: "They only produce identical results when unit costs are unchanged during the period." },
            { label: "D", text: "LIFO is prohibited under US GAAP", isCorrect: false, rationale: "LIFO is permitted under US GAAP (though not under IFRS)." },
          ],
          explanation: "In a period of rising prices, LIFO matches the most recent (higher) costs against revenue, producing higher COGS, lower net income, and a lower ending inventory balance compared to FIFO.",
          difficulty: "EASY",
          questionType: "CONCEPTUAL",
          tags: ["inventory", "LIFO", "FIFO"],
        },
        {
          question: "Inventory has a cost of $80 per unit. Selling price is $100, disposal costs are $15, and normal profit margin is $10. Replacement cost is $70. Under the lower-of-cost-or-market rule (LIFO/retail inventory), what is the inventory's reported value per unit?",
          options: [
            { label: "A", text: "$70", isCorrect: false, rationale: "Replacement cost of $70 is below the floor of $75, so $70 cannot be used as 'market' — the floor applies instead." },
            { label: "B", text: "$75", isCorrect: true, rationale: "Correct — NRV (ceiling) = $100 − $15 = $85; floor = $85 − $10 = $75. Replacement cost ($70) is below the floor, so market is capped at the floor of $75. Lower of cost ($80) and market ($75) = $75." },
            { label: "C", text: "$80", isCorrect: false, rationale: "Cost is $80, but market ($75) is lower, so the item should be written down to $75, not left at cost." },
            { label: "D", text: "$85", isCorrect: false, rationale: "$85 is the NRV ceiling, not the final 'market' figure — market is bounded between the floor and ceiling using replacement cost, which here is below the floor." },
          ],
          explanation: "Under the LCM rule: ceiling = NRV = selling price − disposal costs = $100 − $15 = $85. Floor = NRV − normal profit = $85 − $10 = $75. Since replacement cost ($70) is below the floor, market is set at the floor, $75. Lower of cost ($80) and market ($75) is $75.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["inventory", "LCM"],
        },
      ],
    },
    {
      slug: "property-plant-and-equipment",
      title: "Property, Plant & Equipment",
      shortDescription: "Capitalization, depreciation methods, subsequent expenditures, and asset impairment.",
      blueprintArea: "Area II: Select Balance Sheet Accounts",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 75,
      order: 8,
      studyMaterialHtml: `
<h2>What gets capitalized</h2>
<p>Capitalize all costs necessary to get an asset ready for its intended use: purchase price, freight, installation, testing, and (for self-constructed assets) capitalized interest during construction. Repairs that merely maintain normal operating condition are expensed; those that extend useful life, increase capacity, or improve efficiency are capitalized.</p>

<h3>Depreciation methods</h3>
<table>
<thead><tr><th>Method</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Straight-line</td><td>(Cost − Salvage) ÷ Useful life</td></tr>
<tr><td>Double-declining balance</td><td>(2 ÷ Useful life) × Beginning book value (ignore salvage until the end)</td></tr>
<tr><td>Units of production</td><td>(Cost − Salvage) ÷ Total estimated units × Units produced this period</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Under declining-balance methods, never depreciate below salvage value — stop once book value reaches salvage.</p></div>

<h3>Impairment (held-for-use assets)</h3>
<p>US GAAP uses a two-step model for long-lived assets held for use:</p>
<ol>
<li><strong>Recoverability test:</strong> Compare carrying value to <em>undiscounted</em> future net cash flows. If carrying value exceeds undiscounted cash flows, the asset is impaired.</li>
<li><strong>Measurement:</strong> If impaired, write down to fair value; the impairment loss = carrying value − fair value.</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> This is a key US GAAP vs. IFRS difference — IFRS uses a single-step recoverable-amount test and permits impairment reversals for most assets; US GAAP's held-for-use impairment losses are <strong>never reversed</strong>.</p></div>

<h3>Assets held for sale</h3>
<p>Once an asset meets the held-for-sale criteria (management committed to a plan, actively marketed, sale probable within a year, etc.), it's measured at the <strong>lower of carrying value or fair value less costs to sell</strong>, and depreciation stops.</p>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Capitalize: costs to get asset ready for use, including capitalized interest during self-construction</li>
<li>Repairs that extend life/capacity → capitalize; routine maintenance → expense</li>
<li>Held-for-use impairment: Step 1 recoverability test uses <strong>undiscounted</strong> cash flows; Step 2 measures loss as carrying value − fair value</li>
<li>US GAAP impairment losses on held-for-use assets are never reversed (unlike IFRS)</li>
<li>Held-for-sale: lower of carrying value or FV − costs to sell; stop depreciating</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> The recoverability test uses undiscounted cash flows to decide <em>whether</em> impaired; the loss itself is then measured using <strong>fair value</strong>, not discounted cash flows directly.</p></div>
`,
      mcqs: [
        {
          question: "Under US GAAP, a long-lived asset held for use is tested for impairment. The carrying value is $500,000, undiscounted future net cash flows are $520,000, and fair value is $460,000. What impairment loss, if any, should be recognized?",
          options: [
            { label: "A", text: "$40,000", isCorrect: false, rationale: "This is carrying value minus fair value, but the recoverability test comes first — no impairment is triggered here." },
            { label: "B", text: "$0 — the asset is not impaired", isCorrect: true, rationale: "Correct — the recoverability test compares carrying value ($500,000) to undiscounted cash flows ($520,000). Since undiscounted cash flows exceed carrying value, the asset passes the recoverability test and no impairment is recognized, regardless of the fair value figure." },
            { label: "C", text: "$60,000", isCorrect: false, rationale: "This is undiscounted cash flows minus fair value, which is not how impairment is measured." },
            { label: "D", text: "$20,000", isCorrect: false, rationale: "This is undiscounted cash flows minus carrying value; since it's positive, it confirms no impairment, but $20,000 itself is not an impairment loss figure." },
          ],
          explanation: "US GAAP uses a two-step held-for-use impairment model. Step 1 (recoverability test) compares carrying value to undiscounted future net cash flows; the asset is impaired only if carrying value exceeds that undiscounted figure. Here, $500,000 < $520,000, so the asset passes the recoverability test and no impairment loss is recognized — fair value is irrelevant unless Step 1 indicates impairment.",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["PP&E", "impairment"],
        },
        {
          question: "A company purchases equipment for $110,000 with an estimated salvage value of $10,000 and a 5-year useful life. Using double-declining-balance depreciation, what is depreciation expense in Year 2?",
          options: [
            { label: "A", text: "$44,000", isCorrect: false, rationale: "This is Year 1 depreciation ($110,000 × 40%), not Year 2." },
            { label: "B", text: "$26,400", isCorrect: true, rationale: "Correct — DDB rate = 2/5 = 40%. Year 1: $110,000 × 40% = $44,000, book value = $66,000. Year 2: $66,000 × 40% = $26,400." },
            { label: "C", text: "$20,000", isCorrect: false, rationale: "This would be straight-line depreciation ($100,000 ÷ 5), not double-declining-balance." },
            { label: "D", text: "$22,000", isCorrect: false, rationale: "This does not correctly apply the 40% DDB rate to the Year 2 beginning book value of $66,000." },
          ],
          explanation: "Double-declining-balance ignores salvage value in the calculation (until the final year, when depreciation is capped so book value doesn't go below salvage). The rate is 2 ÷ useful life = 40%. Year 1 depreciation = $110,000 × 40% = $44,000, leaving book value of $66,000. Year 2 depreciation = $66,000 × 40% = $26,400.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["PP&E", "depreciation"],
        },
      ],
    },
    {
      slug: "intangible-assets-and-goodwill",
      title: "Intangible Assets & Goodwill",
      shortDescription: "Finite vs indefinite-lived intangibles, R&D costs, and the goodwill impairment test.",
      blueprintArea: "Area II: Select Balance Sheet Accounts",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 9,
      studyMaterialHtml: `
<h2>Finite vs. indefinite life</h2>
<p>Finite-lived intangibles (e.g., patents, customer lists with a determinable life) are <strong>amortized</strong> over their useful life and tested for impairment only when indicators exist (same recoverability-then-fair-value model as PP&E). Indefinite-lived intangibles (e.g., some trademarks, goodwill) are <strong>not amortized</strong> but tested for impairment at least annually.</p>

<h3>Research & development</h3>
<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Under US GAAP, R&D costs are generally <strong>expensed as incurred</strong> — this is a major difference from IFRS, which capitalizes qualifying development costs once technical feasibility is established. Purchased in-process R&D acquired in a business combination is capitalized; internally generated R&D is not.</p></div>
<p>Software development costs follow their own rules: costs incurred before technological feasibility is established are R&D (expensed); costs after technological feasibility but before general release are capitalized and amortized.</p>

<h3>Goodwill</h3>
<p>Goodwill arises only in a business combination — it can never be internally generated and capitalized. It's tested for impairment at least annually at the <strong>reporting unit</strong> level (a simplified one-step test: if a reporting unit's carrying value, including goodwill, exceeds its fair value, an impairment loss is recognized for the difference, capped at the amount of goodwill allocated to that unit).</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A reporting unit has a carrying value of $12M (including $3M of goodwill) and a fair value of $10.5M. Impairment = $12M − $10.5M = $1.5M, which is less than the $3M of goodwill, so the full $1.5M reduces goodwill (goodwill can't go below zero).</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Private companies can elect an accounting alternative to amortize goodwill straight-line over 10 years (or less) and test for impairment only upon a triggering event — know that this alternative exists but is private-company-specific.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Finite-lived intangibles: amortize; test for impairment only if indicators exist</li>
<li>Indefinite-lived intangibles & goodwill: don't amortize; test at least annually</li>
<li>US GAAP: R&D expensed as incurred (IFRS capitalizes development costs post-feasibility)</li>
<li>Software: pre-technological-feasibility costs = expense; post-feasibility, pre-release = capitalize</li>
<li>Goodwill impairment = carrying value − fair value of reporting unit, capped at goodwill allocated to that unit</li>
</ul>
`,
    },
    {
      slug: "investments-debt-and-equity-securities",
      title: "Investments (Debt & Equity Securities)",
      shortDescription: "Classifying and measuring debt securities (HTM, trading, AFS) and the equity method for significant influence.",
      blueprintArea: "Area II: Select Balance Sheet Accounts",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 75,
      order: 10,
      studyMaterialHtml: `
<h2>Debt security classifications</h2>
<table>
<thead><tr><th>Category</th><th>Measurement</th><th>Unrealized gains/losses</th></tr></thead>
<tbody>
<tr><td>Trading</td><td>Fair value</td><td>Net income</td></tr>
<tr><td>Available-for-sale (AFS)</td><td>Fair value</td><td>Other comprehensive income</td></tr>
<tr><td>Held-to-maturity (HTM)</td><td>Amortized cost</td><td>Not applicable (no fair value adjustment)</td></tr>
</tbody>
</table>
<p>HTM classification requires both the <strong>positive intent</strong> and <strong>ability</strong> to hold the security to maturity — equity securities can never be HTM (no maturity date).</p>

<h3>Equity securities</h3>
<p>Most equity securities (where the investor doesn't have significant influence) are measured at <strong>fair value through net income</strong> — the old AFS-equity option was eliminated by ASU 2016-01. A practicability exception exists for equity investments without a readily determinable fair value: measure at cost minus impairment, adjusted for observable price changes.</p>

<h3>The equity method</h3>
<p>Applies when the investor has <strong>significant influence</strong> — presumed at 20%–50% ownership (rebuttable). Key mechanics:</p>
<ul>
<li>Initial investment recorded at cost</li>
<li>Investment increases by investor's share of investee's net income; decreases by investor's share of losses and dividends received</li>
<li>Dividends received <strong>reduce</strong> the investment account — they are <em>not</em> income under the equity method</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Investor owns 30% of Investee. Investee reports net income of $200,000 and pays $50,000 in dividends. Investor records: Investment income = 30% × $200,000 = $60,000 (increase to investment); dividends received = 30% × $50,000 = $15,000 (decrease to investment, not income). Net increase to the investment account = $45,000.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A frequent trap: candidates record equity-method dividends as investment income. Remember — under the equity method, only your share of the investee's <em>net income</em> is income; dividends are a return of investment.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Trading: FV, unrealized G/L → net income</li>
<li>AFS: FV, unrealized G/L → OCI</li>
<li>HTM: amortized cost (debt only; needs intent + ability to hold)</li>
<li>Most equity securities: FV through net income (post ASU 2016-01)</li>
<li>Equity method (20–50% ownership): Investment ↑ by share of NI, ↓ by share of losses and dividends. Dividends ≠ income.</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Equity-method dividends reduce the investment balance — they are not recorded as investment income.</p></div>
`,
    },
    {
      slug: "leases",
      title: "Leases (ASC 842)",
      shortDescription: "Lessee finance vs operating leases, right-of-use assets, and lease liability measurement.",
      blueprintArea: "Area II: Select Balance Sheet Accounts",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 90,
      order: 11,
      studyMaterialHtml: `
<h2>Lessee accounting: almost everything is on the balance sheet now</h2>
<p>Under ASC 842, lessees recognize a <strong>right-of-use (ROU) asset</strong> and a <strong>lease liability</strong> for virtually all leases longer than 12 months — the old "operating lease = off-balance-sheet" treatment is gone. What survives from the old model is the <em>income statement</em> distinction between finance and operating leases.</p>

<h3>Classification: finance vs. operating (lessee)</h3>
<p>A lease is a <strong>finance lease</strong> if any one of these five criteria is met (otherwise it's operating):</p>
<ol>
<li>Ownership transfers to the lessee by the end of the lease term</li>
<li>The lease contains a purchase option the lessee is reasonably certain to exercise</li>
<li>The lease term is for the major part of the remaining economic life of the asset</li>
<li>The present value of lease payments equals or exceeds substantially all of the asset's fair value</li>
<li>The asset is so specialized it has no alternative use to the lessor at the end of the term</li>
</ol>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Both finance and operating leases put a ROU asset and lease liability on the balance sheet, measured identically at commencement (PV of lease payments). The difference is in subsequent measurement and expense pattern.</p></div>

<h3>Subsequent accounting</h3>
<table>
<thead><tr><th></th><th>Finance lease</th><th>Operating lease</th></tr></thead>
<tbody>
<tr><td>Interest expense</td><td>Separate, effective-interest on liability</td><td>Combined into single lease expense</td></tr>
<tr><td>ROU amortization</td><td>Separate, typically straight-line</td><td>Combined into single lease expense</td></tr>
<tr><td>Expense pattern</td><td>Front-loaded (higher total expense early)</td><td>Straight-line (constant total expense)</td></tr>
</tbody>
</table>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> For an operating lease, total lease expense is recognized on a straight-line basis over the lease term, even if cash payments escalate — the ROU asset amortization is simply the difference between the straight-line expense and the interest accretion on the liability each period.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Short-term leases (12 months or less, no purchase option reasonably certain to be exercised) are exempt — lessees can elect to keep them off the balance sheet and expense payments straight-line, similar to old operating-lease treatment.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Both finance & operating leases → ROU asset + lease liability at PV of payments (lessee)</li>
<li>5 finance-lease tests: ownership transfer, purchase option reasonably certain, major part of remaining life, PV ≈ substantially all FV, no alternative use</li>
<li>Finance lease: separate interest + amortization → front-loaded expense</li>
<li>Operating lease: single straight-line lease expense</li>
<li>Short-term leases (≤12 months, no certain purchase option): exempt, can stay off balance sheet</li>
</ul>
`,
      mcqs: [
        {
          question: "A lessee enters into a 4-year lease for equipment with a 10-year remaining economic life. There is no purchase option and ownership does not transfer. The present value of lease payments is 55% of the equipment's fair value. How should the lessee classify this lease?",
          options: [
            { label: "A", text: "Finance lease, because the lease term exceeds 12 months", isCorrect: false, rationale: "Lease term alone (as long as it's over 12 months) does not make a lease a finance lease — it must meet one of the five specific finance-lease criteria." },
            { label: "B", text: "Operating lease, because none of the five finance-lease criteria are met", isCorrect: true, rationale: "Correct — no ownership transfer, no purchase option, the 4-year term is not a major part of the 10-year remaining life, and the PV (55%) is not substantially all of fair value. With none of the five criteria met, it's an operating lease." },
            { label: "C", text: "Finance lease, because the present value exceeds 50% of fair value", isCorrect: false, rationale: "The PV criterion requires the PV to equal or exceed substantially all (generally around 90%) of fair value — 55% does not meet this threshold." },
            { label: "D", text: "The lessee has a choice between finance and operating classification", isCorrect: false, rationale: "Classification is determined by the five criteria, not elected freely by the lessee." },
          ],
          explanation: "A lease is classified as a finance lease if it meets any of the five ASC 842 criteria: ownership transfer, a purchase option reasonably certain to be exercised, lease term is a major part of remaining economic life, PV of payments is substantially all of fair value, or the asset is so specialized it has no alternative use. None apply here (4 of 10 years is not 'major part,' and 55% is not 'substantially all'), so it is an operating lease — though both a ROU asset and lease liability are still recognized.",
          difficulty: "HARD",
          questionType: "APPLICATION",
          tags: ["leases", "classification"],
        },
        {
          question: "Under ASC 842, how does a lessee's accounting for an operating lease differ from a finance lease in subsequent periods?",
          options: [
            { label: "A", text: "Only finance leases result in a right-of-use asset and lease liability on the balance sheet", isCorrect: false, rationale: "Both finance and operating leases result in a ROU asset and lease liability at commencement under ASC 842." },
            { label: "B", text: "Operating leases recognize a single straight-line lease expense, while finance leases separately recognize interest expense and amortization, typically front-loading total expense", isCorrect: true, rationale: "Correct — this is the key remaining distinction between the two lease types post-ASC 842." },
            { label: "C", text: "Operating leases are never recognized on the balance sheet", isCorrect: false, rationale: "This described the pre-ASC 842 rules; under ASC 842, operating leases are on the balance sheet too, with narrow short-term lease exceptions." },
            { label: "D", text: "Finance leases recognize no interest expense", isCorrect: false, rationale: "Finance leases specifically do recognize separate interest expense using the effective interest method on the lease liability." },
          ],
          explanation: "Since ASC 842 put both finance and operating leases on the balance sheet, the remaining difference is the income statement pattern: finance leases separately recognize interest expense (declining over time) and straight-line ROU amortization, producing a front-loaded total expense, while operating leases recognize one combined, straight-line lease expense.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["leases"],
        },
      ],
    },
    {
      slug: "current-liabilities-contingencies-and-commitments",
      title: "Current Liabilities, Contingencies & Commitments",
      shortDescription: "Accrued liabilities, loss contingency recognition thresholds, and warranty accounting.",
      blueprintArea: "Area II: Select Balance Sheet Accounts",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 12,
      studyMaterialHtml: `
<h2>Loss contingencies: three thresholds</h2>
<table>
<thead><tr><th>Likelihood</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Probable, and reasonably estimable</td><td>Accrue a liability</td></tr>
<tr><td>Probable, but not estimable — or reasonably possible</td><td>Disclose only</td></tr>
<tr><td>Remote</td><td>No accrual, generally no disclosure</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> When a loss is probable and estimable only as a <strong>range</strong>, accrue the best estimate within the range; if no amount in the range is a better estimate than any other, accrue the <strong>minimum</strong> of the range (and disclose the potential for additional loss).</p></div>

<h3>Gain contingencies</h3>
<p>Treated asymmetrically — gain contingencies are <strong>never accrued</strong> before realized, even if probable, to avoid recognizing income prematurely. They may be disclosed, with care not to imply the gain is assured.</p>

<h3>Warranties</h3>
<p>Assurance-type warranties (a promise the product will work as intended) are accrued as an expense and liability at the time of sale, estimated based on historical claims experience. Service-type warranties (extended, separately priced) are a distinct performance obligation under ASC 606, with revenue recognized over the warranty period.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Compensated absences (vacation pay) are accrued if the obligation relates to services already rendered, the right vests or accumulates, payment is probable, and the amount is reasonably estimable.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Probable + estimable → accrue</li>
<li>Probable but not estimable, or reasonably possible → disclose only</li>
<li>Remote → nothing</li>
<li>Range with no best estimate → accrue the minimum</li>
<li>Gain contingencies: never accrue before realized</li>
<li>Assurance warranty → accrue at sale; service-type warranty → separate performance obligation, revenue over time</li>
</ul>
`,
    },
    {
      slug: "long-term-debt",
      title: "Long-Term Debt (Bonds & Notes)",
      shortDescription: "Bond issuance at premium/discount, effective-interest amortization, and troubled debt restructuring.",
      blueprintArea: "Area II: Select Balance Sheet Accounts",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 75,
      order: 13,
      studyMaterialHtml: `
<h2>Premium and discount</h2>
<p>Bonds are issued at a discount when the stated (coupon) rate is below the market rate, and at a premium when the stated rate exceeds the market rate. Either way, the bond is initially recorded at the <strong>present value</strong> of its future cash flows (interest + principal), discounted at the market rate.</p>

<h3>Effective-interest amortization</h3>
<p>US GAAP requires the effective-interest method (straight-line is only permitted if not materially different):</p>
<ul>
<li>Interest expense = Carrying value × Market (effective) rate</li>
<li>Cash paid = Face value × Stated (coupon) rate</li>
<li>Discount amortization = Interest expense − Cash paid (increases carrying value)</li>
<li>Premium amortization = Cash paid − Interest expense (decreases carrying value)</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> $1,000,000 face value bond, 6% stated rate, issued to yield 8%, carrying value $940,000. Cash interest = $1,000,000 × 6% = $60,000. Interest expense = $940,000 × 8% = $75,200. Discount amortized = $75,200 − $60,000 = $15,200. New carrying value = $955,200.</p></div>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Bond issuance costs (legal, underwriting fees) are presented as a <strong>direct reduction</strong> of the carrying amount of the debt (not a separate asset), effectively amortized as part of the effective-interest calculation.</p></div>

<h3>Troubled debt restructuring (debtor's books)</h3>
<p>If the total future cash flows under modified terms are <strong>less than</strong> the carrying value of the debt, the debtor recognizes a gain immediately for the difference, and no further interest expense is recognized (all future payments reduce principal). If total future cash flows <strong>exceed</strong> carrying value, no gain is recognized; instead, a new effective rate is calculated so that future cash flows equal the current carrying value.</p>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Stated rate &lt; market rate → issued at discount; stated &gt; market → premium</li>
<li>Interest expense = Carrying value × market rate; Cash = Face × stated rate</li>
<li>Discount: expense &gt; cash paid, carrying value increases toward face</li>
<li>Premium: expense &lt; cash paid, carrying value decreases toward face</li>
<li>Bond issuance costs reduce the carrying amount of the debt directly</li>
<li>TDR (debtor): future cash flows &lt; carrying value → immediate gain, no future interest; future cash flows &gt; carrying value → new effective rate, no gain</li>
</ul>
`,
    },
    {
      slug: "equity-and-earnings-per-share",
      title: "Equity & Earnings Per Share",
      shortDescription: "Stock transactions, treasury stock, and basic vs diluted EPS calculations.",
      blueprintArea: "Area II: Select Balance Sheet Accounts",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 80,
      order: 14,
      studyMaterialHtml: `
<h2>Treasury stock</h2>
<p>Under the cost method (most common), treasury stock is recorded at the reacquisition cost and shown as a contra-equity account. Reissuing treasury shares above cost credits Additional Paid-in Capital (APIC) — Treasury; reissuing below cost first reduces APIC — Treasury (to the extent available), then Retained Earnings. Treasury stock transactions never create income statement gains or losses.</p>

<h3>Basic EPS</h3>
<p>Basic EPS = (Net income − Preferred dividends) ÷ Weighted-average common shares outstanding.</p>
<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Subtract <strong>preferred dividends</strong> declared on cumulative preferred stock whether or not declared, and on noncumulative preferred stock only if actually declared.</p></div>

<h3>Diluted EPS</h3>
<p>Diluted EPS incorporates the effect of potentially dilutive securities (stock options, convertible bonds, convertible preferred), but only if they're actually <strong>dilutive</strong> (i.e., they would decrease EPS) — anti-dilutive securities are excluded.</p>
<ul>
<li><strong>Options/warrants:</strong> use the treasury stock method — assume exercise, then assume proceeds are used to repurchase shares at the average market price; only the net incremental shares increase the denominator.</li>
<li><strong>Convertible bonds:</strong> use the if-converted method — add back after-tax interest expense to the numerator, add the as-if-converted shares to the denominator.</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Net income $500,000, 100,000 weighted-average common shares, no preferred stock. Basic EPS = $5.00. If 10,000 options with a $20 strike price are outstanding and the average market price is $25: proceeds = 10,000 × $20 = $200,000; shares repurchased = $200,000 ÷ $25 = 8,000; incremental shares = 10,000 − 8,000 = 2,000. Diluted EPS = $500,000 ÷ 102,000 = $4.90 (dilutive, since $4.90 &lt; $5.00, so it's included).</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> If applying the treasury stock method would <em>increase</em> EPS (i.e., the exercise price exceeds the average market price — options are "out of the money"), the options are anti-dilutive and excluded entirely.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Basic EPS = (NI − Preferred dividends) ÷ weighted-avg common shares</li>
<li>Cumulative preferred dividends subtracted whether declared or not; noncumulative only if declared</li>
<li>Options/warrants → treasury stock method (net incremental shares only)</li>
<li>Convertible bonds → if-converted method (add back after-tax interest to numerator, add shares to denominator)</li>
<li>Only include if dilutive (i.e., it lowers EPS) — exclude anti-dilutive securities</li>
</ul>
`,
      mcqs: [
        {
          question: "A company has net income of $600,000 and paid $50,000 in dividends on cumulative preferred stock during the year, none of which were declared. What amount should be used as the numerator for basic EPS?",
          options: [
            { label: "A", text: "$600,000", isCorrect: false, rationale: "This ignores the required subtraction of the cumulative preferred dividend, whether or not it was declared." },
            { label: "B", text: "$550,000", isCorrect: true, rationale: "Correct — cumulative preferred dividends reduce the EPS numerator whether or not they are declared, since they accumulate as a claim on earnings." },
            { label: "C", text: "$650,000", isCorrect: false, rationale: "Preferred dividends are subtracted from net income for EPS purposes, not added." },
            { label: "D", text: "$600,000, because the dividend was never declared", isCorrect: false, rationale: "For cumulative preferred stock specifically, the dividend is subtracted for EPS purposes even if not declared — this is different from noncumulative preferred." },
          ],
          explanation: "For basic EPS, dividends on cumulative preferred stock are subtracted from net income whether or not they were declared during the period, because the right to those dividends accumulates. $600,000 − $50,000 = $550,000.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["EPS"],
        },
        {
          question: "A company has 10,000 stock options outstanding with an exercise price of $30. The average market price of the stock during the year was $25. How should these options be treated in the diluted EPS calculation?",
          options: [
            { label: "A", text: "Included, using the treasury stock method", isCorrect: false, rationale: "Since the exercise price ($30) exceeds the average market price ($25), the options are out of the money and anti-dilutive, so they should be excluded entirely." },
            { label: "B", text: "Excluded, because they are anti-dilutive", isCorrect: true, rationale: "Correct — when the exercise price exceeds the average market price, applying the treasury stock method would increase EPS (be anti-dilutive), so the options are excluded from diluted EPS." },
            { label: "C", text: "Included, using the if-converted method", isCorrect: false, rationale: "The if-converted method applies to convertible securities like bonds or preferred stock, not stock options." },
            { label: "D", text: "Included at their full face value in the denominator", isCorrect: false, rationale: "Options are never added to the denominator at full face value — only the net incremental shares under the treasury stock method, and only if dilutive." },
          ],
          explanation: "Options are anti-dilutive when their exercise price exceeds the average market price of the stock, because assumed exercise and repurchase under the treasury stock method would reduce (not increase) the share count relative to actual exercise — meaning EPS would rise, not fall. Anti-dilutive securities are excluded from the diluted EPS calculation entirely.",
          difficulty: "HARD",
          questionType: "EXCEPTION",
          tags: ["EPS", "dilution", "exam trap"],
        },
      ],
    },
    {
      slug: "income-taxes",
      title: "Income Taxes (Deferred Tax Accounting)",
      shortDescription: "Temporary differences, deferred tax assets/liabilities, and the valuation allowance.",
      blueprintArea: "Area III: Select Transactions",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 90,
      order: 15,
      studyMaterialHtml: `
<h2>Temporary vs. permanent differences</h2>
<p><strong>Temporary differences</strong> reverse over time and create deferred tax assets or liabilities (e.g., depreciation timing, warranty accruals). <strong>Permanent differences</strong> never reverse and never create deferred taxes (e.g., municipal bond interest, meals & entertainment disallowed for tax, life insurance premiums on key employees).</p>

<h3>Which way does it go?</h3>
<table>
<thead><tr><th>Situation</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Book income &gt; tax income now, reverses later (e.g., accelerated tax depreciation)</td><td>Deferred tax liability</td></tr>
<tr><td>Book expense recognized before tax-deductible (e.g., warranty accrual, bad debt allowance)</td><td>Deferred tax asset</td></tr>
<tr><td>Revenue received in advance, taxable now, recognized later for book</td><td>Deferred tax asset</td></tr>
</tbody>
</table>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A simple way to remember it: if a book expense is deducted for tax <em>later</em> than for books (or book revenue is taxed <em>earlier</em> than for books), you get a deferred tax <strong>asset</strong> — you're owed a future tax benefit.</p></div>

<h3>Valuation allowance</h3>
<p>A deferred tax asset is recognized in full, then reduced by a valuation allowance if it's <strong>more likely than not</strong> (greater than 50% probability) that some or all of the DTA will not be realized. Positive evidence (a strong earnings history, existing contracts) can offset negative evidence (recent losses, expiring carryforwards) in this judgment.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A company has a $400,000 deferred tax asset from a net operating loss carryforward. Given a history of losses and no evidence of future taxable income, management determines it's more likely than not that only $150,000 will be realized. A valuation allowance of $250,000 is recorded, reducing the net DTA to $150,000.</p></div>

<h3>Rate changes</h3>
<p>Deferred tax assets and liabilities are measured using <strong>enacted</strong> tax rates expected to apply when the temporary difference reverses. When a tax law changes the rate, the effect is recognized immediately, in the period of enactment — not the effective date.</p>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Temporary differences reverse → deferred taxes; permanent differences never reverse → no deferred taxes</li>
<li>Book expense/deduction later than tax, or book revenue taxed earlier → Deferred Tax Asset</li>
<li>Book income recognized before tax (accelerated tax depreciation) → Deferred Tax Liability</li>
<li>Valuation allowance: reduce DTA if more-likely-than-not (&gt;50%) it won't be realized</li>
<li>Use <strong>enacted</strong> rates; recognize rate-change effects in the period of enactment, not the effective date</li>
</ul>
<div class="callout callout-warning"><p><strong>COMMON TRAP:</strong> Permanent differences (like municipal bond interest) never create a deferred tax item — don't try to defer them.</p></div>
`,
      mcqs: [
        {
          question: "A company recognizes a warranty expense of $40,000 for book purposes in the current year, but the deduction is not allowed for tax purposes until the warranty claims are actually paid in future years. What is the tax effect of this temporary difference?",
          options: [
            { label: "A", text: "A deferred tax liability, since book expense exceeds tax deduction now", isCorrect: false, rationale: "This describes a situation that creates a deferred tax asset, not a liability — the company will get a tax deduction later that it doesn't get now." },
            { label: "B", text: "A deferred tax asset, since the tax deduction will be available in a future period", isCorrect: true, rationale: "Correct — the company recognizes the expense for books now but won't get the tax deduction until later, meaning it will pay more tax now and less tax later, creating a future tax benefit (a deferred tax asset)." },
            { label: "C", text: "A permanent difference with no deferred tax effect", isCorrect: false, rationale: "This difference will reverse when the warranty is paid and the tax deduction is taken, so it is temporary, not permanent." },
            { label: "D", text: "No tax effect, since only cash-basis differences are relevant for tax", isCorrect: false, rationale: "Book-tax differences in timing of expense recognition are exactly what deferred tax accounting addresses." },
          ],
          explanation: "When a book expense (like an estimated warranty expense) is recognized before it is deductible for tax purposes, the company pays more tax currently than book income would suggest, and expects a tax benefit in future periods when the expense becomes deductible. This creates a deferred tax asset.",
          difficulty: "MEDIUM",
          questionType: "APPLICATION",
          tags: ["deferred taxes"],
        },
        {
          question: "A company has a $300,000 deferred tax asset related to a net operating loss carryforward. Based on a recent history of losses, management concludes it is more likely than not that only $100,000 of this asset will be realized. What should the company record?",
          options: [
            { label: "A", text: "No adjustment, since deferred tax assets are always recorded at full value", isCorrect: false, rationale: "Deferred tax assets must be reduced by a valuation allowance when realization is not more likely than not." },
            { label: "B", text: "A valuation allowance of $200,000, resulting in a net deferred tax asset of $100,000", isCorrect: true, rationale: "Correct — the valuation allowance reduces the gross deferred tax asset ($300,000) down to the amount expected to be realized ($100,000), a reduction of $200,000." },
            { label: "C", text: "A deferred tax liability of $200,000", isCorrect: false, rationale: "A valuation allowance reduces a deferred tax asset — it does not create a separate deferred tax liability." },
            { label: "D", text: "Write off the entire $300,000 deferred tax asset", isCorrect: false, rationale: "Only the portion not expected to be realized ($200,000) is offset by the valuation allowance; $100,000 remains as a net deferred tax asset." },
          ],
          explanation: "A valuation allowance is recorded against a deferred tax asset when it is more likely than not (a greater than 50% probability) that some or all of the asset will not be realized. Here, $300,000 − $100,000 realizable = $200,000 valuation allowance, leaving a net DTA of $100,000.",
          difficulty: "MEDIUM",
          questionType: "CALCULATION",
          tags: ["deferred taxes", "valuation allowance"],
        },
        {
          question: "Which of the following is a permanent difference for income tax purposes, rather than a temporary difference?",
          options: [
            { label: "A", text: "Depreciation calculated using different methods for book and tax purposes", isCorrect: false, rationale: "This reverses over the asset's life (total depreciation is the same either way), making it a temporary difference." },
            { label: "B", text: "Interest income earned on municipal bonds, which is tax-exempt", isCorrect: true, rationale: "Correct — tax-exempt municipal bond interest is included in book income but never taxed, so it never reverses — a permanent difference." },
            { label: "C", text: "A warranty expense accrued for books but deductible for tax only when paid", isCorrect: false, rationale: "This difference reverses once the warranty is paid and the deduction is taken, making it temporary." },
            { label: "D", text: "Unearned rental income, taxable when received but recognized for books over the rental period", isCorrect: false, rationale: "This reverses as the rental period elapses and the revenue is earned for book purposes, making it temporary." },
          ],
          explanation: "Permanent differences never reverse — items like tax-exempt municipal bond interest, life insurance proceeds on key employees, and non-deductible fines/penalties are included in book income but permanently excluded from (or added to) taxable income, so they never create a deferred tax asset or liability.",
          difficulty: "EASY",
          questionType: "EXCEPTION",
          tags: ["deferred taxes", "permanent differences"],
        },
      ],
    },
    {
      slug: "accounting-changes-and-error-corrections",
      title: "Accounting Changes & Error Corrections",
      shortDescription: "Change in principle, estimate, and entity, plus prior-period error correction.",
      blueprintArea: "Area III: Select Transactions",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 16,
      studyMaterialHtml: `
<h2>Three kinds of accounting changes</h2>
<table>
<thead><tr><th>Type</th><th>Example</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Change in accounting principle</td><td>FIFO to weighted average</td><td>Retrospective — restate prior periods as if the new method always applied</td></tr>
<tr><td>Change in accounting estimate</td><td>Revised useful life of equipment</td><td>Prospective — apply in current and future periods only</td></tr>
<tr><td>Change in reporting entity</td><td>Consolidating a different set of subsidiaries</td><td>Retrospective — restate all prior periods presented</td></tr>
</tbody>
</table>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> A change in <strong>depreciation method</strong> (e.g., straight-line to double-declining) is treated as a change in <strong>estimate</strong> (prospective), not a change in principle — because it reflects a change in the pattern of expected benefit consumption. This is a classic exam trap.</p></div>

<h3>Error corrections</h3>
<p>Correcting a prior-period error (e.g., a math mistake, or misapplication of GAAP that existed at the time) is <strong>not</strong> an accounting change — it's handled by restating prior-period financial statements, similar to retrospective treatment, with a prior-period adjustment to the opening balance of retained earnings.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> If it's impracticable to determine the cumulative effect of a change for all prior periods, apply the new principle prospectively from the earliest date practicable.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Change in principle → retrospective (restate prior periods)</li>
<li>Change in estimate → prospective (current + future only)</li>
<li>Change in reporting entity → retrospective</li>
<li>Change in depreciation <strong>method</strong> = change in <strong>estimate</strong> (prospective) — classic trap</li>
<li>Error correction → restate prior periods, adjust opening retained earnings</li>
</ul>
`,
    },
    {
      slug: "business-combinations-and-consolidations",
      title: "Business Combinations & Consolidations",
      shortDescription: "Acquisition method basics, goodwill calculation, and noncontrolling interest.",
      blueprintArea: "Area III: Select Transactions",
      blueprintStatus: "CONFIRMED",
      difficulty: "HARD",
      estimatedMinutes: 90,
      order: 17,
      studyMaterialHtml: `
<h2>The acquisition method</h2>
<p>All business combinations use the acquisition method: identify the acquirer, determine the acquisition date, measure identifiable assets acquired and liabilities assumed at <strong>fair value</strong>, and recognize goodwill (or a bargain purchase gain).</p>

<h3>Goodwill calculation</h3>
<div class="callout callout-important"><p><strong>Goodwill = Consideration transferred + Fair value of any noncontrolling interest − Fair value of identifiable net assets acquired</strong></p></div>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Acquirer pays $900,000 cash for 100% of Target. Target's identifiable net assets have a fair value of $750,000. Goodwill = $900,000 − $750,000 = <strong>$150,000</strong>.</p></div>

<p>If the calculation is negative (fair value of net assets acquired exceeds consideration paid), it's a <strong>bargain purchase</strong>, and the acquirer recognizes a gain in earnings immediately — after re-verifying the measurements first.</p>

<h3>Noncontrolling interest (NCI)</h3>
<p>When the acquirer buys less than 100%, the noncontrolling interest is measured at fair value (not just the proportionate share of net assets) and presented within consolidated equity, but separately from the parent's equity.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Acquirer buys 80% of Target for $720,000. NCI fair value (for the remaining 20%) is independently estimated at $180,000. Target's identifiable net assets have fair value $750,000. Goodwill = ($720,000 + $180,000) − $750,000 = <strong>$150,000</strong>.</p></div>

<h3>Acquisition-related costs</h3>
<p>Legal, accounting, and advisory fees related to the acquisition are <strong>expensed as incurred</strong> — they are not included in the purchase price or capitalized as part of goodwill. Debt/equity issuance costs follow their own separate rules (not expensed the same way).</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> Watch for the difference between the parent-only "cost" method used pre-consolidation and the full fair-value remeasurement required at the consolidated level — intercompany balances and profits are eliminated in consolidation.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Goodwill = Consideration paid + FV of NCI − FV of identifiable net assets acquired</li>
<li>Negative result → bargain purchase gain, recognized in earnings (after re-checking measurements)</li>
<li>NCI measured at fair value, shown within consolidated equity, separate from parent's equity</li>
<li>Acquisition costs (legal, advisory) → expensed as incurred, not capitalized into goodwill</li>
<li>Consolidation eliminates intercompany balances and unrealized intercompany profit</li>
</ul>
`,
      mcqs: [
        {
          question: "Acquirer purchases 100% of Target for $1,200,000 cash. Target's identifiable assets have a fair value of $1,600,000 and liabilities assumed have a fair value of $500,000. What should Acquirer recognize?",
          options: [
            { label: "A", text: "Goodwill of $100,000", isCorrect: true, rationale: "Correct — net identifiable assets are $1,600,000 − $500,000 = $1,100,000. Consideration paid ($1,200,000) exceeds net identifiable assets ($1,100,000) by $100,000, which is recognized as goodwill." },
            { label: "B", text: "A bargain purchase gain of $100,000", isCorrect: false, rationale: "A bargain purchase gain arises only when net identifiable assets exceed consideration paid. Here consideration ($1,200,000) exceeds net identifiable assets ($1,100,000), so this is goodwill, not a bargain purchase." },
            { label: "C", text: "Goodwill of $500,000", isCorrect: false, rationale: "This appears to compare consideration to liabilities alone, not to net identifiable assets (assets minus liabilities)." },
            { label: "D", text: "No goodwill or gain, since assets equal liabilities plus consideration", isCorrect: false, rationale: "Assets ($1,600,000) do not equal liabilities plus consideration ($500,000 + $1,200,000 = $1,700,000) — there is a measurable $100,000 difference that must be recognized as goodwill." },
          ],
          explanation: "Net identifiable assets acquired = $1,600,000 (assets) − $500,000 (liabilities) = $1,100,000. Consideration paid = $1,200,000, which exceeds net identifiable assets of $1,100,000 by $100,000. Since consideration exceeds net assets acquired, this $100,000 excess is recognized as goodwill, not a bargain purchase gain (a bargain purchase would require net assets to exceed consideration).",
          difficulty: "HARD",
          questionType: "CALCULATION",
          tags: ["business combinations", "goodwill"],
        },
        {
          question: "In a business combination, how should the acquirer treat legal and advisory fees directly related to completing the acquisition?",
          options: [
            { label: "A", text: "Capitalize them as part of the fair value of consideration transferred", isCorrect: false, rationale: "Acquisition-related costs are explicitly excluded from consideration transferred under the acquisition method." },
            { label: "B", text: "Expense them as incurred", isCorrect: true, rationale: "Correct — acquisition-related costs such as legal and advisory fees are expensed in the periods incurred, separate from the business combination accounting itself." },
            { label: "C", text: "Include them in the calculation of goodwill", isCorrect: false, rationale: "These costs are not part of the fair value measurement used to calculate goodwill." },
            { label: "D", text: "Capitalize and amortize them over the expected life of the acquired business", isCorrect: false, rationale: "There is no such amortization treatment for acquisition-related transaction costs under US GAAP." },
          ],
          explanation: "Under ASC 805, acquisition-related costs (legal, accounting, valuation, advisory fees) are expensed as incurred and are not included in the consideration transferred or in the measurement of goodwill.",
          difficulty: "MEDIUM",
          questionType: "CONCEPTUAL",
          tags: ["business combinations"],
        },
      ],
    },
    {
      slug: "not-for-profit-accounting",
      title: "Not-for-Profit Accounting",
      shortDescription: "Net asset classification and contribution recognition for nonprofit entities.",
      blueprintArea: "Area I: Financial Reporting",
      blueprintStatus: "PROVISIONAL",
      difficulty: "MEDIUM",
      estimatedMinutes: 60,
      order: 18,
      studyMaterialHtml: `
<h2>Two net asset classes</h2>
<p>Since ASU 2016-14, not-for-profit entities classify net assets into just two categories (down from three):</p>
<ul>
<li><strong>Net assets without donor restrictions</strong></li>
<li><strong>Net assets with donor restrictions</strong> (purpose-restricted, time-restricted, or restricted in perpetuity — e.g., a permanent endowment)</li>
</ul>

<h3>Contribution recognition</h3>
<p>Unconditional contributions are recognized as revenue when received (or promised, for unconditional pledges), at fair value. <strong>Conditional</strong> contributions — where a barrier must be overcome and a right of return/release exists — are not recognized until the condition is substantially met.</p>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> A donor pledges $100,000 "if the organization raises a matching $100,000 from other sources by year-end." This is a conditional promise (the match is a measurable barrier) — no revenue is recognized until the matching funds are actually raised.</p></div>

<h3>Required statements</h3>
<p>NFPs present a Statement of Financial Position, a Statement of Activities (showing changes in each net asset class), a Statement of Cash Flows, and a Statement of Functional Expenses (breaking expenses into program, management & general, and fundraising categories) — either on the face of the statements or in the notes.</p>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> When a donor-restricted purpose is satisfied in the <em>same period</em> the contribution is received, the NFP may elect to report it directly in net assets without donor restrictions, avoiding a same-period reclassification.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>2 net asset classes: without donor restrictions, with donor restrictions</li>
<li>Unconditional pledge → recognize at fair value when promised</li>
<li>Conditional (barrier + right of return) → recognize only when condition substantially met</li>
<li>Required: Statement of Financial Position, Activities, Cash Flows, Functional Expenses</li>
</ul>
`,
    },
    {
      slug: "governmental-accounting",
      title: "Governmental Accounting",
      shortDescription: "Fund accounting basics and the modified accrual basis used by governmental funds.",
      blueprintArea: "Area I: Financial Reporting",
      blueprintStatus: "PROVISIONAL",
      difficulty: "HARD",
      estimatedMinutes: 75,
      order: 19,
      studyMaterialHtml: `
<h2>Two levels of reporting</h2>
<p>State and local governments report at two levels: <strong>fund-level</strong> statements (using different bases of accounting depending on fund type) and <strong>government-wide</strong> statements (full accrual, similar to a business).</p>

<h3>Fund categories</h3>
<table>
<thead><tr><th>Category</th><th>Basis of accounting</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>Governmental funds</td><td>Modified accrual</td><td>General fund, special revenue, capital projects, debt service</td></tr>
<tr><td>Proprietary funds</td><td>Full accrual</td><td>Enterprise funds, internal service funds</td></tr>
<tr><td>Fiduciary funds</td><td>Full accrual</td><td>Pension trust, custodial funds</td></tr>
</tbody>
</table>

<h3>Modified accrual basis</h3>
<p>Under modified accrual (used only for governmental funds at the fund level), revenues are recognized when <strong>measurable and available</strong> (available generally means collectible within the current period or soon enough thereafter to pay current-period liabilities — commonly interpreted as 60 days). Expenditures (not "expenses") are generally recognized when the related liability is incurred, with some exceptions (e.g., debt service is recognized when due).</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Governmental funds don't report long-term assets or long-term liabilities on the fund-level balance sheet — those only show up in the government-wide statements. Fund-level statements focus on current financial resources.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "Expenditures," not "expenses," is the governmental-fund vocabulary — it signals modified accrual and current-financial-resources focus. Seeing "expenses" and full accrual points you to proprietary funds or government-wide statements.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Governmental funds → modified accrual (measurable + available, ~60-day rule)</li>
<li>Proprietary & fiduciary funds → full accrual</li>
<li>Governmental funds: "expenditures," current financial resources focus, no long-term assets/liabilities at fund level</li>
<li>Government-wide statements: full accrual for everything</li>
</ul>
`,
    },
    {
      slug: "sec-reporting-segments-and-interim-reporting",
      title: "SEC Reporting, Segments & Interim Reporting",
      shortDescription: "Operating segment identification and the integral-view approach to interim financial reporting.",
      blueprintArea: "Area I: Financial Reporting",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 55,
      order: 20,
      studyMaterialHtml: `
<h2>Identifying reportable segments</h2>
<p>An operating segment is reportable if it meets any one of three 10% quantitative thresholds, applied to its absolute value versus the combined total of all operating segments:</p>
<ul>
<li>Revenue (including intersegment) is 10% or more of combined revenue</li>
<li>Absolute value of profit or loss is 10% or more of the greater of combined profit of profitable segments or combined loss of loss segments</li>
<li>Assets are 10% or more of combined assets</li>
</ul>
<p>There's also a 75% overall test: reportable segments must together account for at least 75% of total consolidated external revenue; if not, more segments must be added even if individually below the 10% thresholds.</p>

<h3>Interim reporting: the "integral view"</h3>
<p>US GAAP treats each interim period as an <strong>integral part</strong> of the annual period, not a discrete standalone period. This means costs that benefit the whole year (e.g., an annual property tax bill, or an inventory loss expected to be recovered by year-end) can be allocated/estimated across interim periods rather than expensed entirely in the period incurred.</p>

<div class="callout callout-important"><p><strong>IMPORTANT:</strong> Income tax expense in interim periods uses an estimated <strong>annual effective tax rate</strong>, applied to year-to-date income — not a fresh, discrete calculation each quarter.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> A LIFO liquidation expected to be replaced by year-end is not recognized as a permanent gain at the interim date — the cost of replacement is estimated instead, consistent with the integral view.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Segment is reportable if revenue, profit/loss, or assets ≥ 10% of combined total (any one test)</li>
<li>75% overall test: reportable segments must cover ≥75% of consolidated external revenue</li>
<li>Interim reporting = "integral view" — allocate annual costs across quarters, don't treat each quarter standalone</li>
<li>Interim tax expense uses estimated annual effective tax rate on YTD income</li>
</ul>
`,
    },
  ],
};
