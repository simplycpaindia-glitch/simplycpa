import type { TopicContent } from "../types";

export const dataAnalytics: TopicContent = {
  study: `
<h2>Why this topic matters</h2>
<p>Business Analysis and Reporting (BAR) Area I expects candidates to use data to support business decisions — choosing the right type of analysis, preparing data, interpreting statistics and visualizations, and recognizing data quality problems. The same skills support audit analytics in Auditing and Attestation (AUD) and data management in Information Systems and Controls (ISC).</p>

<h2>Four types of analytics</h2>
<table>
<thead><tr><th>Type</th><th>Question answered</th><th>Accounting examples</th></tr></thead>
<tbody>
<tr><td><strong>Descriptive</strong></td><td>What happened?</td><td>Monthly sales by region, aging of receivables, dashboards of key performance indicators (KPIs)</td></tr>
<tr><td><strong>Diagnostic</strong></td><td>Why did it happen?</td><td>Variance analysis, drill-downs, root-cause analysis of a margin decline</td></tr>
<tr><td><strong>Predictive</strong></td><td>What is likely to happen?</td><td>Sales forecasts, credit-loss models, regression predicting costs</td></tr>
<tr><td><strong>Prescriptive</strong></td><td>What should we do?</td><td>Optimization of inventory levels, pricing recommendations, what-if models</td></tr>
</tbody>
</table>

<h2>The analytics process</h2>
<ol>
<li><strong>Define the question</strong> and the decision it supports.</li>
<li><strong>Identify and obtain data</strong> — internal (enterprise resource planning (ERP) systems, general ledger, customer relationship management) and external (market, economic, industry data).</li>
<li><strong>Extract, transform, and load (ETL)</strong> — extract from sources, clean and standardize (formats, duplicates, missing values), and load into the analysis tool or data warehouse.</li>
<li><strong>Analyze</strong> with appropriate techniques.</li>
<li><strong>Communicate</strong> results, usually with visualizations, to decision makers.</li>
</ol>

<h2>Data types and structure</h2>
<ul>
<li><strong>Structured data</strong> fits rows and columns (transaction tables); <strong>unstructured data</strong> doesn't (emails, contracts, images); semi-structured data has tags (for example, Extensible Markup Language (XML) and JavaScript Object Notation (JSON) files).</li>
<li><strong>Quantitative</strong> data (numbers: continuous or discrete) versus <strong>qualitative</strong> data (categories: nominal — no order, such as region; ordinal — ordered, such as credit ratings).</li>
<li><strong>Primary key:</strong> uniquely identifies each record in a table; <strong>foreign key:</strong> links to a primary key in another table.</li>
</ul>

<h2>Data quality</h2>
<table>
<thead><tr><th>Dimension</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Accuracy</td><td>Values are correct</td></tr>
<tr><td>Completeness</td><td>No required values or records are missing</td></tr>
<tr><td>Consistency</td><td>Values agree across systems and formats</td></tr>
<tr><td>Timeliness</td><td>Data is current enough for the decision</td></tr>
<tr><td>Validity</td><td>Values conform to rules and formats (dates, ranges)</td></tr>
<tr><td>Uniqueness</td><td>No duplicate records</td></tr>
</tbody>
</table>
<p>Poor data quality leads to wrong conclusions ("garbage in, garbage out"). Controls over data extraction — reconciling record counts and control totals to the source — support reliability.</p>

<h2>Statistics for analysis</h2>
<ul>
<li><strong>Central tendency:</strong> mean (average — affected by outliers), median (middle value — robust to outliers), mode (most frequent).</li>
<li><strong>Dispersion:</strong> range, variance, and standard deviation. In a normal distribution, about 68% of values fall within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3.</li>
<li><strong>Correlation</strong> (from −1 to +1) measures the strength and direction of a linear relationship. <strong>Correlation does not prove causation.</strong></li>
<li><strong>Regression</strong> estimates how a dependent variable changes with independent variables (y = a + bx). The coefficient of determination (R²) measures explanatory power; <strong>p-values</strong> below 0.05 usually mean a variable is statistically significant.</li>
<li><strong>Outliers</strong> — values far from others — may indicate errors, fraud, or genuine unusual events, and warrant investigation.</li>
<li><strong>Benford's law:</strong> in many naturally occurring data sets, leading digit 1 appears about 30% of the time; deviations can flag manipulated numbers.</li>
</ul>

<h2>Visualization — choosing the right chart</h2>
<table>
<thead><tr><th>Purpose</th><th>Chart</th></tr></thead>
<tbody>
<tr><td>Trend over time</td><td>Line chart</td></tr>
<tr><td>Comparing categories</td><td>Bar or column chart</td></tr>
<tr><td>Parts of a whole</td><td>Stacked bar, or a pie chart (few categories only)</td></tr>
<tr><td>Relationship between two variables</td><td>Scatter plot (with a trend line)</td></tr>
<tr><td>Distribution</td><td>Histogram or box plot</td></tr>
<tr><td>Geographic patterns</td><td>Map (choropleth)</td></tr>
<tr><td>Performance against targets</td><td>Dashboard with KPI indicators</td></tr>
</tbody>
</table>
<p>Good visualizations have a clear message, honest scales (axes starting at zero for bar charts), minimal clutter, and labels. Misleading practices include truncated axes, 3-D effects, and inconsistent intervals.</p>

<h2>Tools and emerging techniques</h2>
<ul>
<li>Spreadsheets (pivot tables, lookups), business intelligence dashboards, structured query language (SQL) for querying databases, and scripting languages.</li>
<li><strong>Machine learning</strong> classifies transactions or predicts outcomes; <strong>natural language processing</strong> extracts terms from contracts; <strong>robotic process automation (RPA)</strong> automates repetitive, rules-based tasks.</li>
<li>Generative artificial intelligence (AI) can summarize and draft, but its outputs must be verified — it can produce plausible but incorrect information.</li>
</ul>

<h2>How it is tested</h2>
<ul>
<li>Match a business question to descriptive, diagnostic, predictive, or prescriptive analytics.</li>
<li>Identify data quality problems and ETL steps.</li>
<li>Interpret statistics — correlation, regression output, standard deviation.</li>
<li>Choose the most appropriate visualization.</li>
</ul>

<div class="callout callout-tip"><p><strong>EXAM TIP:</strong> "Why" questions are diagnostic; "what will happen" is predictive; "what should we do" is prescriptive. A strong correlation alone never justifies a causal conclusion.</p></div>
`,
  revision: `
<h3>Four analytics types</h3>
<p>Descriptive (what happened) · Diagnostic (why) · Predictive (what will happen) · Prescriptive (what to do).</p>

<h3>Process</h3>
<p>Question → data → extract, transform, and load (ETL) → analyze → communicate.</p>

<h3>Data</h3>
<ul>
<li>Structured vs unstructured; nominal vs ordinal; primary and foreign keys.</li>
<li>Quality: accuracy, completeness, consistency, timeliness, validity, uniqueness.</li>
</ul>

<h3>Statistics</h3>
<ul>
<li>Mean (outlier-sensitive), median (robust), mode.</li>
<li>Normal distribution: 68% / 95% / 99.7% within 1 / 2 / 3 standard deviations.</li>
<li>Correlation −1 to +1, not causation. Regression y = a + bx; R² explanatory power; p &lt; 0.05 significant.</li>
<li>Benford's law: leading 1 ≈ 30%.</li>
</ul>

<h3>Charts</h3>
<p>Trend → line · categories → bar · relationship → scatter · distribution → histogram · parts → stacked bar or pie.</p>
`,
};
