import type { SubjectSeed } from "./types";

const shellTopics: { slug: string; title: string; shortDescription: string; area: string }[] = [
  { slug: "business-combinations-advanced", title: "Business Combinations (Advanced)", shortDescription: "Step acquisitions, changes in ownership interest, and pushdown accounting.", area: "Technical Accounting & Reporting" },
  { slug: "derivatives-and-hedge-accounting", title: "Derivatives & Hedge Accounting", shortDescription: "Fair value hedges, cash flow hedges, and hedge effectiveness.", area: "Technical Accounting & Reporting" },
  { slug: "foreign-currency-translation", title: "Foreign Currency Translation", shortDescription: "Functional currency determination, translation vs. remeasurement.", area: "Technical Accounting & Reporting" },
  { slug: "employee-benefit-plan-accounting", title: "Employee Benefit Plan Accounting", shortDescription: "Defined benefit pension accounting and the funded status.", area: "Technical Accounting & Reporting" },
  { slug: "revenue-for-specific-industries", title: "Revenue for Specific Industries", shortDescription: "Applying ASC 606 to long-term contracts and licensing arrangements.", area: "Technical Accounting & Reporting" },
  { slug: "lease-accounting-lessor", title: "Lease Accounting — Lessor Perspective", shortDescription: "Sales-type, direct financing, and operating lease classification for lessors.", area: "Technical Accounting & Reporting" },
  { slug: "public-company-reporting-topics", title: "Public Company Reporting Topics", shortDescription: "Segment reporting and EPS considerations specific to public registrants.", area: "Technical Accounting & Reporting" },
  { slug: "business-valuation-techniques", title: "Business Valuation Techniques", shortDescription: "Income, market, and asset-based approaches to valuing a business.", area: "Business Analysis" },
  { slug: "financial-forecasting-and-projections", title: "Financial Forecasting & Projections", shortDescription: "Building forecasts and evaluating key business drivers and risks.", area: "Business Analysis" },
  { slug: "cost-and-managerial-analysis", title: "Cost & Managerial Analysis", shortDescription: "Variance analysis, cost-volume-profit, and performance measurement.", area: "Business Analysis" },
  { slug: "data-analytics-for-accounting", title: "Data Analytics for Accounting", shortDescription: "Using data analytics techniques to support financial analysis and reporting.", area: "Business Analysis" },
];

export const bar: SubjectSeed = {
  slug: "bar",
  name: "Business Analysis and Reporting",
  shortName: "BAR",
  type: "DISCIPLINE",
  description:
    "BAR extends FAR into more advanced technical accounting (business combinations, derivatives, foreign currency, pensions) and adds a genuine analysis layer — financial statement analysis, valuation, and data analytics. It tends to suit candidates headed toward financial reporting, valuation, or advisory roles.",
  difficulty: "HARD",
  estimatedHours: 90,
  blueprintUrl: "https://www.aicpa-cima.com/resources/download/bar-cpa-exam-blueprint",
  order: 4,
  topics: [
    {
      slug: "financial-statement-analysis",
      title: "Financial Statement Analysis",
      shortDescription: "Ratio analysis, common-size statements, and evaluating liquidity, solvency, and profitability.",
      blueprintArea: "Business Analysis",
      blueprintStatus: "CONFIRMED",
      difficulty: "MEDIUM",
      estimatedMinutes: 65,
      order: 1,
      studyMaterialHtml: `
<h2>Three lenses on financial health</h2>
<table>
<thead><tr><th>Category</th><th>Key ratios</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Liquidity</td><td>Current ratio, quick ratio</td><td>Can the company meet short-term obligations?</td></tr>
<tr><td>Solvency</td><td>Debt-to-equity, times interest earned</td><td>Can the company meet long-term obligations?</td></tr>
<tr><td>Profitability</td><td>Gross margin, net margin, ROA, ROE</td><td>How efficiently does the company generate profit?</td></tr>
</tbody>
</table>

<h3>Key formulas</h3>
<ul>
<li><strong>Current ratio</strong> = Current assets ÷ Current liabilities</li>
<li><strong>Quick ratio</strong> = (Current assets − Inventory − Prepaids) ÷ Current liabilities</li>
<li><strong>Return on equity (ROE)</strong> = Net income ÷ Average stockholders' equity</li>
<li><strong>Times interest earned</strong> = EBIT ÷ Interest expense</li>
</ul>

<div class="callout callout-example"><p><strong>EXAMPLE:</strong> Current assets $500,000 (including $150,000 inventory and $20,000 prepaid expenses), current liabilities $250,000. Current ratio = $500,000 ÷ $250,000 = 2.0. Quick ratio = ($500,000 − $150,000 − $20,000) ÷ $250,000 = $330,000 ÷ $250,000 = 1.32.</p></div>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> The DuPont framework decomposes ROE = Net profit margin × Asset turnover × Financial leverage — useful for explaining <em>why</em> ROE changed, not just that it changed.</p></div>
`,
      revisionNoteHtml: `
<h3>One-minute revision</h3>
<ul>
<li>Current ratio = CA ÷ CL; Quick ratio excludes inventory & prepaids from CA</li>
<li>ROE = NI ÷ Avg equity; DuPont: ROE = margin × turnover × leverage</li>
<li>Times interest earned = EBIT ÷ Interest expense</li>
<li>Higher leverage magnifies ROE in good years, magnifies losses in bad years</li>
</ul>
`,
    },
    ...shellTopics.map((t, i) => ({
      slug: t.slug,
      title: t.title,
      shortDescription: t.shortDescription,
      blueprintArea: t.area,
      blueprintStatus: "PROVISIONAL" as const,
      difficulty: "MEDIUM" as const,
      estimatedMinutes: 50,
      order: i + 2,
      isComingSoon: true,
    })),
  ],
};
