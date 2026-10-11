import type { BlogSeed } from "./blog";
import { sources } from "./blog-keywords";
import { NASBA_INTL, NASBA_INDIA, NASBA_FAQ, NASBA_STATES, NIES, NASBA_SCORES, AICPA_BLUEPRINTS, STATE } from "./blog-india";

const AICPA_SCORING: [string, string] = ["AICPA & CIMA — CPA Exam scoring and pass rates", "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates"];
const AICPA_RELEASE: [string, string] = ["AICPA & CIMA — Find out when you'll get your CPA Exam score", "https://www.aicpa-cima.com/resources/article/find-out-when-youll-get-your-cpa-exam-score"];
const AICPA_FAQ: [string, string] = ["AICPA & CIMA — CPA Exam frequently asked questions", "https://www.aicpa-cima.com/resources/article/find-answers-to-frequently-asked-questions-about-cpa-exam"];
const PROMETRIC_INTL: [string, string] = ["Prometric — How to schedule your CPA Exam in an international location", "https://www.prometric.com/how-to-schedule-your-cpa-exam-in-an-international-location/"];
const NIES_FEES: [string, string] = ["NASBA — International credential evaluation (fee and validity)", "https://nasba.org/blog/2019/02/11/international-credential-evaluation-for-cpa-examination-and-or-licensure/"];

export const examPosts: BlogSeed[] = [
  {
    slug: "how-much-does-us-cpa-cost-for-indian-student",
    title: "US CPA Total Cost in India: Complete Fee Breakdown",
    category: "Indian Students",
    excerpt:
      "Every fee an Indian candidate pays — evaluation, board fees, exam fees, NASBA's India fee, retakes, ethics and licensing — with worked totals for first-time passes and for retakes.",
    crux: [
      "Evaluation: $250 for NASBA's NIES report, plus the board's own education evaluation fee ($96–$146 on the boards we checked).",
      "Per section: The $268.59 exam fee, a board application fee ($96–$171) and NASBA's $460 India fee — roughly $825–$900 per section in total.",
      "First-time passes: Roughly $3,650–$4,000 for all four sections including evaluation fees, before any review course.",
      "Each retake: Repeats the section costs — about $825–$900 again.",
      "After the exam: Ethics exam (most boards) and the licence fee — both set separately and vary by board.",
    ],
    content: `
<h2>One-time costs</h2>
<table>
<thead><tr><th>Item</th><th>Cost</th><th>Paid to</th></tr></thead>
<tbody>
<tr><td>Credential evaluation (NIES)</td><td>$250</td><td>NASBA International Evaluation Services</td></tr>
<tr><td>Board education evaluation application</td><td>$96–$146 (e.g. Washington $96, Alaska $121, Guam $136, Montana $146)</td><td>Board, via NASBA</td></tr>
<tr><td>Sealed transcripts from your universities</td><td>Set by each university</td><td>Universities</td></tr>
</tbody>
</table>

<h2>Per-section costs</h2>
<table>
<thead><tr><th>Item</th><th>Cost per section</th></tr></thead>
<tbody>
<tr><td>Examination fee</td><td>$268.59</td></tr>
<tr><td>Board exam application fee</td><td>$96–$171 (e.g. Colorado $96, Washington $103, Massachusetts $148, New Hampshire $171)</td></tr>
<tr><td>NASBA international administration fee (India)</td><td>$460</td></tr>
<tr><td><strong>Total per section</strong></td><td><strong>About $825–$900</strong></td></tr>
</tbody>
</table>

<h2>Worked totals</h2>
<div class="callout callout-example">
<p><strong>Scenario A — Washington board, all four sections passed first time:</strong><br>
NIES $250 + board evaluation $96 + 4 × ($268.59 + $103 + $460) = $346 + $3,326 = <strong>about $3,670</strong>.</p>
<p><strong>Scenario B — Colorado board, first-time passes:</strong><br>
NIES $250 + $96 + 4 × ($268.59 + $96 + $460) = $346 + $3,298 = <strong>about $3,645</strong>.</p>
<p><strong>Scenario C — same as A, but FAR and REG each failed once:</strong> add 2 × $831.59 = <strong>about $5,335</strong>.</p>
</div>
<p>(Board fees as shown on NASBA's state pages, October 2026.)</p>

<h2>Other possible costs</h2>
<ul>
<li><strong>Rescheduling</strong> — free 61 or more days before the appointment; a Prometric fee within 5–60 days; the full seat fee within 2–5 days; no changes inside 24 hours.</li>
<li><strong>Score review</strong> — $240; <strong>score appeal</strong> — $550 plus $100 per item (not available in some boards).</li>
<li><strong>Extra evaluation services</strong> — $135 to add new education within five years; $25 for a duplicate report after one year.</li>
<li><strong>Review course and study materials</strong> — optional; free resources can cover much of the content.</li>
<li><strong>Ethics exam and licence fee</strong> — set by the board (and, for the ethics course, its provider).</li>
</ul>

<h2>Compared with testing in the US</h2>
<p>Testing in India costs $460 extra per section ($1,840 for four), but avoids flights, visas and accommodation for each section. For most Indian candidates, testing at home is far cheaper.</p>

<p>Use our <a href="/fees">Fee Estimator</a> for current figures, and read <a href="/blog/how-to-reduce-cost-of-us-cpa-qualification">how to reduce the cost</a>.</p>

${sources([NASBA_INTL, NASBA_STATES, STATE("Washington", "washington"), STATE("Colorado", "colorado"), NIES_FEES, NASBA_FAQ, NASBA_SCORES])}
`,
  },
  {
    slug: "us-cpa-exam-fees-by-section",
    title: "US CPA Exam Fees by Section: FAR, AUD, REG and Discipline",
    category: "CPA Basics",
    excerpt:
      "What you pay for each of FAR, AUD, REG and your Discipline section — exam fee, application fee and international fee — and the fees for retakes, rescheduling and score reviews.",
    crux: [
      "Same exam fee for every section: $268.59 per section on NASBA's state pages in 2026, whether Core or Discipline.",
      "Application fee: Charged by the board per section application — $96 to $171 among the boards we checked.",
      "India fee: $460 per section for any section, Core or Discipline (other international locations: $390).",
      "Retakes: Each attempt is charged in full again.",
      "Extras: Score review $240; score appeal $550 plus $100 per item; Prometric fees for late rescheduling.",
    ],
    content: `
<h2>Fee per section</h2>
<table>
<thead><tr><th>Section</th><th>Exam fee</th><th>Board application fee (range)</th><th>India international fee</th><th>Typical total from India</th></tr></thead>
<tbody>
<tr><td>FAR (Core)</td><td>$268.59</td><td>$96–$171</td><td>$460</td><td>$825–$900</td></tr>
<tr><td>AUD (Core)</td><td>$268.59</td><td>$96–$171</td><td>$460</td><td>$825–$900</td></tr>
<tr><td>REG (Core)</td><td>$268.59</td><td>$96–$171</td><td>$460</td><td>$825–$900</td></tr>
<tr><td>BAR / ISC / TCP (Discipline)</td><td>$268.59</td><td>$96–$171</td><td>$460</td><td>$825–$900</td></tr>
</tbody>
</table>
<p>Older articles quote different international fees for Core and Discipline sections. NASBA's current international page lists a single India fee of $460 for all six sections.</p>

<h2>Application fee by board (examples)</h2>
<ul>
<li>Colorado, Montana, New York: $96</li>
<li>Washington: $103</li>
<li>Alaska: $109</li>
<li>Guam: $116</li>
<li>Massachusetts: $148</li>
<li>New Hampshire: $171</li>
</ul>

<h2>Other fees you may meet</h2>
<table>
<thead><tr><th>Fee</th><th>Amount</th><th>When</th></tr></thead>
<tbody>
<tr><td>Prometric rescheduling</td><td>None (61+ days out); a Prometric fee (5–60 days); full seat fee (2–5 days)</td><td>Changing your appointment</td></tr>
<tr><td>Score review</td><td>$240</td><td>Requesting a verification of your score</td></tr>
<tr><td>Score appeal</td><td>$550 + $100 per item</td><td>Reviewing failed items in person in Nashville (not available in California, DC, Georgia, Illinois, Montana, Texas and Virginia)</td></tr>
</tbody>
</table>
<p>NASBA notes that, historically, no score has ever changed as a result of a score appeal.</p>

<h2>Refunds</h2>
<p>Application and exam fees are non-refundable, and an expired NTS can't be extended. The international fee is also non-refundable and must be paid each time you test abroad. In extreme circumstances, NASBA has an exception-to-policy process.</p>

<p>See the full picture in <a href="/blog/how-much-does-us-cpa-cost-for-indian-student">US CPA total cost in India</a>.</p>

${sources([NASBA_INTL, NASBA_STATES, NASBA_FAQ, NASBA_SCORES, AICPA_FAQ])}
`,
  },
  {
    slug: "us-cpa-international-testing-fees-indian-candidates",
    title: "US CPA International Testing Fees for Indian Candidates",
    category: "Indian Students",
    excerpt:
      "NASBA's India international administration fee, how and when it's paid, which boards allow testing in India, the 19 international locations and the rules that catch candidates out.",
    crux: [
      "The fee: $460 per section for India, paid to NASBA on top of the normal exam and application fees. Other international locations are $390.",
      "When: After you receive your NTS and register to test internationally — you must pay before you can see international appointments.",
      "Every attempt: The fee applies each time you test internationally and is non-refundable.",
      "Eligible boards: All boards except Alabama, Idaho, North Carolina and the US Virgin Islands participate in international testing.",
      "Wait 24 hours: After paying, wait at least 24 hours before scheduling with Prometric.",
    ],
    content: `
<h2>How the international fee works</h2>
<ol>
<li>Apply through a participating board and receive your Notice to Schedule (NTS). Every NTS starts as domestic.</li>
<li>Register to test internationally and pay the international administration fee for that section — <strong>$460 for India</strong>.</li>
<li>Wait at least 24 hours.</li>
<li>Book your appointment with Prometric, selecting the international version of your section.</li>
</ol>
<p>NASBA requires a valid passport or national ID card to apply for international testing, and a passport is required as primary identification at international test centres.</p>

<h2>International locations</h2>
<p>NASBA currently lists 19 countries: Bahrain, Bermuda, Brazil, Egypt, England, Germany, India, Ireland, Israel, Japan, Jordan, Kuwait, Lebanon, Nepal, the Philippines, the Republic of Korea, Saudi Arabia, Scotland and the United Arab Emirates. International scores are released on the same timeline as US scores.</p>

<h2>Boards that don't participate</h2>
<p>Candidates of the Alabama, Idaho, North Carolina and US Virgin Islands boards can't test internationally. If you plan to sit in India, choose a different board.</p>

<h2>Rules that catch people out</h2>
<ul>
<li>The fee is <strong>per attempt</strong> — a retake means paying $460 again.</li>
<li>It's <strong>non-refundable</strong>, even if you later decide to test in the US.</li>
<li>An international NTS can't simply be swapped back — you must notify NASBA to change it to domestic.</li>
<li>Prometric shows international appointments only up to about six months ahead, in two-week blocks.</li>
<li>Your name must match your passport exactly on the NTS and the booking.</li>
</ul>

<h2>Cost over four sections</h2>
<p>4 × $460 = <strong>$1,840</strong> in international fees for first-time passes. Compare that with the cost of travelling to the US for four separate sittings — for most Indian candidates, testing in India is far cheaper.</p>

${sources([NASBA_INTL, NASBA_FAQ, AICPA_FAQ, PROMETRIC_INTL])}
`,
  },
  {
    slug: "us-cpa-credential-evaluation-cost-application-fees",
    title: "US CPA Credential Evaluation Cost and Application Fees",
    category: "Indian Students",
    excerpt:
      "What the evaluation and application stage costs — NIES fees, board evaluation fees, exam application fees — plus the extra charges for adding education, changing boards and duplicate reports.",
    crux: [
      "NIES evaluation: $250, covering all your institutions and listing each course with its US equivalent.",
      "Board education evaluation fee: Paid when you apply to the board — $96 (Colorado, New York, Washington) to $146 (Montana) among the boards we checked.",
      "Exam application fee: Paid per section application — $96 to $171.",
      "NIES extras: $135 to add education (report under five years old); $25 duplicate after one year; extra fees for verification and translation.",
      "No refunds: NIES doesn't refund fees, and incomplete files are denied after 90 days.",
    ],
    content: `
<h2>The two kinds of fee at this stage</h2>
<ul>
<li><strong>The evaluator's fee</strong> — for converting your education (NIES, or another approved agency).</li>
<li><strong>The board's fees</strong> — for reviewing your eligibility and processing each section application.</li>
</ul>

<h2>NIES fees</h2>
<table>
<thead><tr><th>Service</th><th>Fee</th></tr></thead>
<tbody>
<tr><td>International credential evaluation</td><td>$250</td></tr>
<tr><td>Additional education evaluation (within 5 years)</td><td>$135</td></tr>
<tr><td>Duplicate report (after 1 year)</td><td>$25</td></tr>
<tr><td>Resend within 1 year if the board doesn't have it</td><td>Free</td></tr>
<tr><td>Education verification</td><td>Additional fee</td></tr>
<tr><td>Translation</td><td>Per page</td></tr>
</tbody>
</table>
<p>A report is not valid after five years — a new full evaluation is then required.</p>

<h2>Board fees (from NASBA's state pages)</h2>
<table>
<thead><tr><th>Board</th><th>Education evaluation</th><th>Exam application (per section)</th></tr></thead>
<tbody>
<tr><td>Alaska</td><td>$121</td><td>$109</td></tr>
<tr><td>Colorado</td><td>$96</td><td>$96</td></tr>
<tr><td>Guam</td><td>$136</td><td>$116</td></tr>
<tr><td>Massachusetts</td><td>$136</td><td>$148</td></tr>
<tr><td>Montana</td><td>$146</td><td>$96</td></tr>
<tr><td>New Hampshire</td><td>$96</td><td>$171</td></tr>
<tr><td>New York</td><td>$96</td><td>$96</td></tr>
<tr><td>Washington</td><td>$96</td><td>$103</td></tr>
</tbody>
</table>

<h2>Worked example</h2>
<div class="callout callout-example">
<p>A candidate applying to Montana pays NIES $250 + Montana education evaluation $146 = <strong>$396</strong> before any exam section. Each section then adds the $96 application fee, $268.59 exam fee and $460 India fee.</p>
</div>

<h2>Avoiding wasted fees</h2>
<ul>
<li>Use an evaluator your board accepts — many accept only NIES.</li>
<li>Get every document to NIES within 90 days to avoid forfeiting the fee.</li>
<li>Don't apply for a section until you can take it within the NTS validity period.</li>
<li>If you change boards, your NIES report is tied to the original jurisdiction — budget for a change-in-jurisdiction service.</li>
</ul>

${sources([NIES, NIES_FEES, ["NASBA — NIES policies", "https://nasba.org/products/nasbainternationalevaluationservices/policies/"], NASBA_STATES, STATE("Montana", "montana")])}
`,
  },
  {
    slug: "how-to-reduce-cost-of-us-cpa-qualification",
    title: "How to Reduce the Cost of the US CPA Qualification",
    category: "Indian Students",
    excerpt:
      "Ten practical ways Indian candidates cut CPA costs — passing first time, choosing a board with lower fees, avoiding rescheduling and expired NTSs, free study material and employer support.",
    crux: [
      "Pass first time: Every retake costs another $825–$900 from India — the single biggest saving is preparation.",
      "Choose carefully: Board fees differ (application fees from $96 to $171 per section among the boards we checked) and one evaluation that fits your board avoids paying twice.",
      "Plan scheduling: Book early and only change appointments 61+ days ahead to avoid Prometric fees; don't let an NTS expire.",
      "Study smart: Use free official resources — AICPA blueprints and sample tests — plus free notes, and buy only what fills a gap.",
      "Ask your employer: Many firms reimburse exam fees or courses and can verify experience for licensure.",
    ],
    content: `
<h2>1. Pass each section first time</h2>
<p>From India, each section costs roughly $825–$900 in fees. A single retake costs the same again — plus weeks of extra study. Disciplined preparation is the most effective cost control.</p>

<h2>2. Get evaluated once, correctly</h2>
<p>Start with NIES if you're unsure — it's accepted by the most boards, and its undecided evaluation suggests up to three jurisdictions. A report from an evaluator your board doesn't accept means paying again.</p>

<h2>3. Compare board fees</h2>
<p>Application fees are charged per section, so differences add up over four sections (and any retakes). Among the boards we checked, application fees ranged from $96 (Colorado, Montana, New York) to $171 (New Hampshire). Choose on eligibility first, then on cost.</p>

<h2>4. Apply only when you're ready</h2>
<p>Fees are non-refundable and an NTS can't be extended. Apply for a section only when you can sit within about six months.</p>

<h2>5. Avoid rescheduling fees</h2>
<p>Rescheduling is free 61 or more days before your appointment. Inside 60 days, Prometric charges a fee; inside 5 days you pay the full seat fee; inside 24 hours you can't change at all. Pick realistic dates.</p>

<h2>6. Test in India</h2>
<p>NASBA's India fee is $460 per section, but that's far cheaper than flights and stays for four separate US sittings.</p>

<h2>7. Use free official resources</h2>
<ul>
<li>The AICPA's blueprints tell you exactly what's tested.</li>
<li>The AICPA's free sample tests use the real exam software.</li>
<li>Free study notes and question banks — including <a href="/cpa">SimplyCPA</a> — cover the concepts.</li>
</ul>
<p>Many candidates study with free material and buy only a question bank for the final weeks. See <a href="/blog/free-cpa-study-material">best free CPA study materials</a>.</p>

<h2>8. Sequence sections to protect credit</h2>
<p>Most boards give you 30 months from your first passing score. Losing credit for a passed section means paying for it again — plan a realistic sequence. See <a href="/blog/far-vs-aud-vs-reg-which-to-start-with">which section to start with</a>.</p>

<h2>9. Ask for employer support</h2>
<p>Many Big Four, mid-tier and global capability centre employers reimburse exam fees or courses, give study leave, and — importantly for licensure — have licensed CPAs who can verify your experience.</p>

<h2>10. Don't overpay for the licence</h2>
<p>Choose a board whose licensure route you can actually complete — including the 120-hours-plus-two-years pathway where adopted — so you don't need extra degrees later.</p>

${sources([NASBA_INTL, NASBA_FAQ, NASBA_STATES, NIES, AICPA_BLUEPRINTS, ["AICPA & CIMA — CPA Exam practice and preparation (sample tests)", "https://www.aicpa-cima.com/resources/landing/cpa-exam-practice-and-preparation"]])}
`,
  },
  {
    slug: "us-cpa-exam-centres-in-india-booking",
    title: "US CPA Exam Centres in India: Cities and Booking Process",
    category: "Indian Students",
    excerpt:
      "The eight Indian cities where you can sit the CPA Exam, who can test in India, how to book an appointment, and what to expect on exam day.",
    crux: [
      "Eight cities: Ahmedabad, Bangalore, Kolkata, Chennai, Hyderabad, Mumbai, New Delhi and Thiruvananthapuram, according to NASBA.",
      "Who can test: Candidates of participating boards (all except Alabama, Idaho, North Carolina and the US Virgin Islands); NASBA's India notice also set citizenship or long-term residency criteria.",
      "Booking: Register for international testing, pay $460 per section, wait 24 hours, then book on Prometric's website.",
      "Availability: Appointments show up to about six months ahead in two-week blocks — book early, especially for Discipline months.",
      "Exam day: Bring your passport (primary ID) and your NTS; names must match exactly.",
    ],
    content: `
<h2>Test centre cities</h2>
<p>NASBA lists Prometric test centres for the CPA Exam in eight Indian cities:</p>
<ul>
<li>Ahmedabad</li>
<li>Bangalore (Bengaluru)</li>
<li>Calcutta (Kolkata)</li>
<li>Chennai</li>
<li>Hyderabad</li>
<li>Mumbai</li>
<li>New Delhi</li>
<li>Trivandrum (Thiruvananthapuram)</li>
</ul>
<p>Centre availability can change, so confirm the live list when you search for appointments on Prometric.</p>

<h2>Who can test in India</h2>
<ul>
<li>You must be an eligible candidate of a board that participates in international testing — every board except Alabama, Idaho, North Carolina and the US Virgin Islands.</li>
<li>When NASBA opened testing in India, its notice limited it to candidates who are citizens or long-term residents of India, Bhutan, Bangladesh, Myanmar, the Maldives, Nepal, Sri Lanka or the USA. Check NASBA's current international page for any change before booking.</li>
</ul>

<h2>Booking process</h2>
<ol>
<li>Receive your Notice to Schedule (NTS) from your board via NASBA.</li>
<li>In the NASBA portal, register for international testing and pay $460 for the section.</li>
<li>Wait at least 24 hours.</li>
<li>On Prometric's website, choose India, select "Schedule", enter the section identification number from your NTS and the first four letters of your last name, and choose the international version of your section.</li>
<li>Pick a centre, date and time, complete the booking, and save the confirmation number.</li>
</ol>
<p>Book at least five days in advance; NASBA recommends 45 days. Core sections can be booked any month; BAR, ISC and TCP only in January, April, July and October.</p>

<h2>Exam day</h2>
<ul>
<li>Bring your <strong>passport</strong> — it's the primary ID for international testing — and your NTS.</li>
<li>Your name must match your booking and NTS exactly.</li>
<li>Arrive early as instructed in your confirmation; check-in includes identity checks and security screening.</li>
<li>Each section lasts four hours; a standard 15-minute break is offered after the third testlet and doesn't count against your time.</li>
<li>Problems at the centre should be reported to NASBA within five days of your exam.</li>
</ul>

<h2>Planning around July 2027</h2>
<p>The exam moves to a new delivery platform in July 2027. NASBA says no exams will be administered from July 1 to July 11, 2027, with an adjusted schedule from July 12 — plan your sections around that gap.</p>

<p>See <a href="/blog/how-to-schedule-us-cpa-exam-prometric">how to schedule through Prometric</a> for rescheduling rules.</p>

${sources([NASBA_INDIA, NASBA_INTL, NASBA_FAQ, AICPA_FAQ, PROMETRIC_INTL])}
`,
  },
  {
    slug: "how-to-schedule-us-cpa-exam-prometric",
    title: "How to Schedule a US CPA Exam Through Prometric",
    category: "CPA Basics",
    excerpt:
      "Booking your CPA section with Prometric step by step, international appointments, rescheduling and cancellation rules and fees, and what to bring on the day.",
    crux: [
      "You need an NTS: You can't book until your Notice to Schedule is issued; for India, your NTS must also be registered and paid for international testing.",
      "Book early: At least 5 days in advance; NASBA recommends 45 days, especially for Discipline months.",
      "Rescheduling: Free at 61+ days; a Prometric fee at 5–60 days; the full seat fee at 2–5 days; no changes within 24 hours.",
      "Discipline sections: Only bookable in January, April, July and October; Core sections year-round.",
      "On the day: Bring your NTS and valid ID (a passport for international testing); names must match exactly.",
    ],
    content: `
<h2>Before you book</h2>
<ul>
<li>Your NTS has arrived (check the NASBA portal or app).</li>
<li>For testing outside the US, you've registered for international testing, paid the international fee and waited 24 hours.</li>
<li>Your NTS expiry date allows enough time — the NTS is valid for one testing event or until it expires, whichever is first.</li>
</ul>

<h2>Booking steps</h2>
<ol>
<li>Go to Prometric's CPA scheduling page and choose your country.</li>
<li>Select "Schedule", enter the section identification number from your NTS and the first four letters of your last name.</li>
<li>Confirm the section — for international testing, choose the version for your location.</li>
<li>Pick a test centre, date and time.</li>
<li>Complete the booking and save your confirmation number.</li>
</ol>

<h2>Rescheduling and cancellation</h2>
<table>
<thead><tr><th>Notice before appointment</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>61 days or more</td><td>Free</td></tr>
<tr><td>5 to 60 days</td><td>Fee payable to Prometric</td></tr>
<tr><td>2 to 5 days</td><td>Full Prometric seat fee for the section</td></tr>
<tr><td>Less than 24 hours</td><td>No changes — contact your board to register again</td></tr>
</tbody>
</table>
<p>In an emergency more than 24 hours before the appointment, contact Prometric. For hardship or medical situations, NASBA considers NTS extensions case by case with documentation.</p>

<h2>Timing tips</h2>
<ul>
<li>Score release batches depend on when the AICPA receives your exam data. Testing one or two days before a cutoff date is safer than testing on it. See the <a href="/blog/cpa-exam-score-release-dates-2026-2027">score release calendar</a>.</li>
<li>For Discipline sections, book as soon as your NTS arrives — the testing month fills up.</li>
<li>Remember the platform change: no exams from July 1 to July 11, 2027.</li>
</ul>

<h2>Exam day checklist</h2>
<ul>
<li>NTS and valid identification — a passport for international testing.</li>
<li>Name on ID exactly matching your NTS and booking.</li>
<li>Personal items go in a locker; follow Prometric's list of permitted items.</li>
<li>Report any testing problem to NASBA within five days.</li>
</ul>

${sources([NASBA_FAQ, NASBA_INTL, PROMETRIC_INTL, AICPA_FAQ])}
`,
  },
  {
    slug: "us-cpa-exam-application-to-result-timeline",
    title: "US CPA Exam Application to Result: Complete Timeline",
    category: "Indian Students",
    excerpt:
      "How long each stage takes — documents, evaluation, eligibility, NTS, booking, testing and score release — with a realistic month-by-month example for an Indian candidate.",
    crux: [
      "Documents and evaluation: Allow 2–3 months — collecting sealed transcripts is usually the slowest part; NIES takes about six weeks after receiving everything.",
      "Eligibility: The board's review through NASBA can take up to six weeks.",
      "NTS to exam: Book 45 days ahead if you can; Discipline sections only in January, April, July and October.",
      "Scores: Core results come out in batches roughly twice a month; Discipline results about six weeks after the testing window closes.",
      "Overall: Most working candidates finish all four sections in 12–18 months from their first exam.",
    ],
    content: `
<h2>Stage by stage</h2>
<table>
<thead><tr><th>Stage</th><th>Typical duration</th><th>What can slow it down</th></tr></thead>
<tbody>
<tr><td>Collecting official documents</td><td>2–8 weeks</td><td>Universities slow to issue sealed transcripts</td></tr>
<tr><td>NIES evaluation</td><td>About 6 weeks after all documents arrive</td><td>Missing years, syllabi requests, translations</td></tr>
<tr><td>Board eligibility review</td><td>Up to 6 weeks</td><td>Deficiencies against the board's rules</td></tr>
<tr><td>Section application to NTS</td><td>Days to a few weeks</td><td>Payment issues, name mismatches</td></tr>
<tr><td>International registration</td><td>24-hour wait after payment</td><td>—</td></tr>
<tr><td>Booking to exam</td><td>5+ days (45 recommended)</td><td>Seat availability; Discipline windows</td></tr>
<tr><td>Exam to score (Core)</td><td>About 1–4 weeks, depending on the batch cutoff</td><td>Testing just after a cutoff</td></tr>
<tr><td>Exam to score (Discipline)</td><td>About 6 weeks after the window closes</td><td>—</td></tr>
</tbody>
</table>

<h2>Example timeline for an Indian candidate</h2>
<div class="callout callout-example">
<ul>
<li><strong>January:</strong> request sealed transcripts from B.Com and M.Com universities; apply to NIES.</li>
<li><strong>March:</strong> all documents received; evaluation completed by mid-April.</li>
<li><strong>Late April:</strong> apply to the board through the NASBA portal; eligibility confirmed in May.</li>
<li><strong>May:</strong> apply for FAR; NTS received; register internationally and pay $460; book a date in late June.</li>
<li><strong>Late June:</strong> sit FAR; score released in July.</li>
<li><strong>August–September:</strong> AUD. <strong>October:</strong> sit the Discipline section (e.g. BAR) in the October window; score released mid-December.</li>
<li><strong>Following January–March:</strong> REG. All four sections done in about 14 months from starting the paperwork.</li>
</ul>
</div>

<h2>Score release in more detail</h2>
<p>Core section scores are released in batches roughly twice a month, according to when the AICPA receives your exam data. Discipline sections have a single release about six weeks after each testing window. Scores are posted in the NASBA portal and mobile app, typically within 48 hours of the target date. Score notices are usually available within 72 hours of the advisory score.</p>

<h2>The credit window</h2>
<p>Most boards give you 30 months (Washington 36) from the release of your first passing score to pass the remaining sections. If you sit your final section before your earliest credit expires and pass, you keep the credit even if the score is released after the expiry date.</p>

<p>See the <a href="/blog/cpa-exam-score-release-dates-2026-2027">score release calendar</a> and <a href="/blog/how-to-become-us-cpa-from-india-step-by-step">the step-by-step process</a>.</p>

${sources([NIES, NASBA_FAQ, NASBA_SCORES, AICPA_RELEASE, STATE("Washington", "washington")])}
`,
  },
  {
    slug: "us-cpa-exam-passing-score-release-retake-rules",
    title: "US CPA Exam Passing Score, Score Release and Retake Rules",
    category: "CPA Basics",
    excerpt:
      "What a scaled score of 75 means, how MCQs and simulations are weighted, how scores are released, what the Candidate Performance Report shows, when you can retake, and score reviews and appeals.",
    crux: [
      "Passing score: 75 on a scale of 0–99. It's a scaled score — not a percentage correct, and not curved to a target pass rate.",
      "Weighting: MCQs and task-based simulations count 50/50 in every section except ISC (60/40).",
      "Release: Core scores in batches roughly twice a month; Discipline scores about six weeks after each testing window.",
      "Retakes: You can reapply as soon as you receive a failing score; the only limit is the time to reregister, get a new NTS and find a seat — Discipline retakes must wait for the next testing month.",
      "Failed sections: You receive a Candidate Performance Report comparing you with just-passing candidates by content area and item type.",
    ],
    content: `
<h2>What 75 means</h2>
<p>The AICPA reports CPA Exam results on a scale of 0 to 99, and 75 is a pass. The scale doesn't represent a percentage of questions answered correctly, and the AICPA doesn't adjust scores to achieve a target pass rate. Scores are scaled so that results are comparable across exam forms and over time. Some questions in each exam are unscored pretest items that don't count.</p>

<h2>How the score is weighted</h2>
<table>
<thead><tr><th>Section</th><th>MCQ weight</th><th>TBS weight</th></tr></thead>
<tbody>
<tr><td>AUD, FAR, REG, BAR, TCP</td><td>50%</td><td>50%</td></tr>
<tr><td>ISC</td><td>60%</td><td>40%</td></tr>
</tbody>
</table>

<h2>Score release</h2>
<ol>
<li>Prometric sends exam data to the AICPA, which scores it and performs quality checks.</li>
<li>The AICPA sends results to NASBA, which passes them to boards.</li>
<li>Scores appear in the NASBA candidate portal and CPA Mobile app, generally within 48 hours of the target date. Candidates of the California, Illinois and Maryland boards get scores from their board.</li>
<li>A score notice is usually available within 72 hours of the advisory score — save it, as it's only available until a set date.</li>
</ol>
<p>Core sections have batch releases roughly twice a month; Discipline sections one release about six weeks after each quarterly window. See the <a href="/blog/cpa-exam-score-release-dates-2026-2027">2026–2027 calendar</a>.</p>

<h2>The Candidate Performance Report</h2>
<p>If you fail, you receive a Candidate Performance Report showing your performance in each content area and by item type, rated as stronger, comparable or weaker relative to candidates who scored just above passing (75–80). Use it to target your retake — see <a href="/blog/cpa-exam-retake-strategy-failed-attempt">retake strategy</a>.</p>

<h2>Retake rules</h2>
<ul>
<li>Under continuous testing, you can retake a failed section shortly after receiving your score. The only limit is the time it takes to reregister, obtain a new NTS and find an available date.</li>
<li>Core sections can be retaken in any month; BAR, ISC and TCP only in the first month of a quarter.</li>
<li>Each retake costs the full section fees again (including the $460 India fee).</li>
</ul>

<h2>Credit and expiry</h2>
<p>Most boards give credit for a passed section for 30 months (Washington 36), generally measured from the score release date. Credit expires at the end of testing on the expiry date (Central Standard Time). If you take your final section before your earliest credit expires and pass it, you keep the earlier credit.</p>

<h2>Score reviews and appeals</h2>
<table>
<thead><tr><th></th><th>Score review</th><th>Score appeal</th></tr></thead>
<tbody>
<tr><td>Fee</td><td>$240</td><td>$550 + $100 per item</td></tr>
<tr><td>What happens</td><td>Your responses are verified against the score</td><td>You review failed TBS items in person (Nashville), at your own travel cost</td></tr>
<tr><td>Availability</td><td>All boards</td><td>Not in California, DC, Georgia, Illinois, Montana, Texas or Virginia</td></tr>
</tbody>
</table>
<p>Score reviews can take up to eight weeks. NASBA notes that, historically, no score has changed as a result of an appeal.</p>

${sources([AICPA_SCORING, NASBA_SCORES, NASBA_FAQ, AICPA_FAQ, AICPA_RELEASE])}
`,
  },
  {
    slug: "passing-cpa-exam-vs-getting-cpa-licence",
    title: "Passing the CPA Exam vs Getting a CPA Licence: What's the Difference?",
    category: "CPA Basics",
    excerpt:
      "Passing all four sections doesn't make you a CPA. Here's what licensure adds — education, experience, ethics — how you can describe yourself before and after, and why it matters for Indian candidates.",
    crux: [
      "The exam is one of three Es: You also need Education (often 150 hours, or 120 plus two years' experience under the new pathway) and Experience verified by a licensed CPA.",
      "Ethics: Most boards also require an ethics exam after you pass.",
      "The title: Only licensed individuals may call themselves CPAs; the title is legally protected by every state.",
      "Before licensure: You can accurately say you have passed all four sections of the Uniform CPA Examination — but not use 'CPA' after your name.",
      "Time limits: Some boards require you to complete licensure within a set time after passing the exam.",
    ],
    content: `
<h2>What the licence requires</h2>
<table>
<thead><tr><th>Requirement</th><th>For the exam</th><th>For the licence</th></tr></thead>
<tbody>
<tr><td>Education</td><td>Often 120 hours or a bachelor's, with set accounting and business credits</td><td>Traditionally 150 hours; or 120 hours plus two years' experience where the new pathway is in force</td></tr>
<tr><td>Exam</td><td>Pass all four sections within the credit window</td><td>Completed</td></tr>
<tr><td>Experience</td><td>Not required</td><td>Usually one year (two under the 120-hour pathway), verified by a licensed CPA</td></tr>
<tr><td>Ethics</td><td>Not required</td><td>Most boards require an ethics exam</td></tr>
<tr><td>Other</td><td>Age or character requirements in some boards</td><td>Good moral character; some boards require an SSN or other identifiers</td></tr>
</tbody>
</table>

<h2>What you can say on your CV</h2>
<ul>
<li><strong>Before passing:</strong> "Pursuing the US CPA" or "Passed FAR and AUD of the Uniform CPA Examination".</li>
<li><strong>After passing all four:</strong> "Passed all four sections of the Uniform CPA Examination".</li>
<li><strong>After licensure:</strong> "CPA (licensed in [state])". Only licensed individuals may use "CPA" or "certified public accountant".</li>
</ul>
<p>Boards enforce title rules; misusing the title can lead to disciplinary action and affect a future application.</p>

<h2>Experience: the part to plan early</h2>
<ul>
<li>Boards set what counts — public accounting, industry, government or academia — and how it must be verified.</li>
<li>The verifying CPA usually must hold an active licence; some boards require it to be from a US jurisdiction or the same state.</li>
<li>Some boards accept experience gained before, during or after the exam (New Hampshire's page notes this explicitly); others count it only after a point.</li>
<li>For Indian candidates, working at a firm or global capability centre with US-licensed CPAs can make verification much easier.</li>
</ul>

<h2>Why licensure matters</h2>
<ul>
<li>The licence is what US clients, regulators and many employers ultimately require for senior roles.</li>
<li>Only licensed CPAs at registered firms sign audit and attest reports.</li>
<li>Under the new individual-based practice privilege, mobility between states depends on your own credentials — another reason to complete them.</li>
</ul>

<h2>Keeping the licence</h2>
<p>Once licensed, CPAs must complete continuing professional education (CPE) — commonly around 40 hours a year or 120 hours over three years, including ethics — and renew with their board.</p>

<p>See <a href="/blog/us-cpa-120-credits-vs-150-credits">120 vs 150 credits</a>.</p>

${sources([["NASBA — How to get licensed", "https://nasba.org/licensure/gettingacpalicense/howtogetlicensed/"], ["NASBA — New CPA licensure pathways and CPA mobility", "https://nasba.org/blog/2025/12/23/new-cpa-licensure-pathways-and-cpa-mobility/"], STATE("New Hampshire", "new-hampshire"), NASBA_FAQ])}
`,
  },
  {
    slug: "us-cpa-exam-format-explained",
    title: "US CPA Exam Format Explained: MCQs, Task-Based Simulations and Timing",
    category: "CPA Basics",
    excerpt:
      "Section by section — number of MCQs and simulations, testlet structure, timing, breaks, scoring weights, simulation types, on-screen tools and the platform change coming in 2027.",
    crux: [
      "Structure: Every section has five testlets — two of multiple-choice questions, then three of task-based simulations — in a four-hour exam.",
      "Question counts: AUD 78 MCQ / 7 TBS; FAR 50 / 7; REG 72 / 8; BAR 50 / 7; ISC 82 / 6; TCP 68 / 7.",
      "Scoring: MCQs and TBSs each count 50%, except ISC (60% MCQ, 40% TBS); 75 passes.",
      "Breaks: A standard 15-minute break after testlet 3 doesn't count against your time; other breaks do.",
      "No going back: Once you submit a testlet, you can't return to it.",
    ],
    content: `
<h2>Testlet structure by section</h2>
<table>
<thead><tr><th>Section</th><th>Testlet 1 (MCQ)</th><th>Testlet 2 (MCQ)</th><th>Testlet 3 (TBS)</th><th>Testlet 4 (TBS)</th><th>Testlet 5 (TBS)</th><th>Totals</th></tr></thead>
<tbody>
<tr><td>AUD</td><td>39</td><td>39</td><td>2</td><td>3</td><td>2</td><td>78 MCQ, 7 TBS</td></tr>
<tr><td>FAR</td><td>25</td><td>25</td><td>2</td><td>3</td><td>2</td><td>50 MCQ, 7 TBS</td></tr>
<tr><td>REG</td><td>36</td><td>36</td><td>2</td><td>3</td><td>3</td><td>72 MCQ, 8 TBS</td></tr>
<tr><td>BAR</td><td>25</td><td>25</td><td>2</td><td>3</td><td>2</td><td>50 MCQ, 7 TBS</td></tr>
<tr><td>ISC</td><td>41</td><td>41</td><td>1</td><td>3</td><td>2</td><td>82 MCQ, 6 TBS</td></tr>
<tr><td>TCP</td><td>34</td><td>34</td><td>2</td><td>3</td><td>2</td><td>68 MCQ, 7 TBS</td></tr>
</tbody>
</table>

<h2>Timing and breaks</h2>
<ul>
<li>Each section is <strong>4 hours</strong> — 16 hours across all four sections.</li>
<li>A <strong>standard 15-minute break</strong> is offered after testlet 3; it doesn't count against your testing time.</li>
<li>Optional breaks between other testlets count against your time.</li>
<li>Once you submit a testlet, you can't go back to it.</li>
</ul>

<h2>Scoring</h2>
<p>MCQs and TBSs each carry 50% of the score in AUD, FAR, REG, BAR and TCP; in ISC, MCQs carry 60% and TBSs 40%. A scaled score of 75 passes. Some items are unscored pretest questions — you won't know which, so treat every question seriously.</p>

<h2>Types of task-based simulation</h2>
<ul>
<li><strong>Numeric entry</strong> — calculate and enter amounts (e.g. a lease schedule or tax computation).</li>
<li><strong>Journal entries</strong> — select accounts and enter debits and credits.</li>
<li><strong>Option lists</strong> — choose the right answer for each of several rows.</li>
<li><strong>Research</strong> — find and cite the relevant paragraph of authoritative literature.</li>
<li><strong>Document review</strong> — review documents such as a draft report or contract and select corrections.</li>
<li><strong>Data analysis</strong> — work with exhibits and spreadsheets to draw conclusions.</li>
</ul>

<h2>On-screen tools</h2>
<p>The exam software includes a calculator, a spreadsheet tool, and access to authoritative literature for research tasks. Practise with the AICPA's free sample tests so the interface doesn't cost you time on exam day. See <a href="/blog/how-to-solve-cpa-task-based-simulations">how to solve TBSs</a>.</p>

<h2>Language and delivery</h2>
<p>The exam is offered only in English and only on computer, at Prometric centres in the US and in 19 international locations, including India.</p>

<h2>Coming in 2027</h2>
<p>The CPA Exam moves to a new delivery platform in July 2027. NASBA says no exams will be administered from July 1 to July 11, 2027, with an adjusted schedule from July 12. The AICPA has also published 2027 blueprints — check them if you'll test next year.</p>

${sources([AICPA_BLUEPRINTS, AICPA_SCORING, NASBA_FAQ, AICPA_FAQ, ["AICPA & CIMA — Practise with the CPA Exam sample tests", "https://www.aicpa-cima.com/resources/article/get-familiar-with-the-cpa-exam-by-practicing-with-our-sample-tests"]])}
`,
  },
];
