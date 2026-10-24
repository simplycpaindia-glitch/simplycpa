import { keywordPosts, sources } from "./blog-keywords";
import { auditPosts } from "./blog-audit";
import { audPosts2 } from "./blog-aud-2";
import { farPosts } from "./blog-far";
import { farPosts2 } from "./blog-far-2";
import { farPosts3 } from "./blog-far-3";
import { taxPosts } from "./blog-tax";
import { taxPosts2 } from "./blog-tax-2";
import { iscPosts } from "./blog-isc";
import { indiaPosts } from "./blog-india";
import { indiaPosts2 } from "./blog-india-2";
import { examPosts } from "./blog-exam";
import { studyPosts } from "./blog-study";
import { studyPosts2 } from "./blog-study-2";
import { conceptPosts } from "./blog-concepts";

export type BlogSeed = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: string;
  /**
   * "The Crux": 4–6 numbered takeaways shown in a box above the article, for readers
   * who want the answer before the explanation. Each point starts with a short label
   * followed by a colon, e.g. "Meaning: ...". Rendered into the content by withCrux().
   */
  crux: string[];
};

/** Prepends the Crux summary box to the post body. */
function withCrux(post: BlogSeed): BlogSeed {
  const items = post.crux
    .map((point) => {
      const [label, ...rest] = point.split(": ");
      return rest.length
        ? `<li><strong>${label}:</strong> ${rest.join(": ")}</li>`
        : `<li>${point}</li>`;
    })
    .join("\n");
  return {
    ...post,
    content: `<div class="callout callout-crux">\n<ol>\n${items}\n</ol>\n</div>\n${post.content.trim()}\n`,
  };
}

const corePosts: BlogSeed[] = [
  {
    slug: "us-cpa-exam-explained-in-simple-english",
    title: "US CPA Exam Explained in Simple English",
    category: "CPA Basics",
    excerpt: "No jargon, no acronyms assumed — what the exam actually is, in plain terms.",
    crux: [
      "What it is: A US professional licensing exam, written by the AICPA and delivered at Prometric test centres.",
      "What it covers: Three compulsory Core sections (FAR, AUD, REG) plus one Discipline of your choice (BAR, ISC or TCP).",
      "How it's tested: Each four-hour section mixes multiple-choice questions with task-based simulations.",
      "Passing isn't licensing: Most states also require verified work experience before issuing a licence.",
      "From India: Yes — you can sit at Prometric centres in several Indian cities.",
    ],
    content: `
<h2>What it is</h2>
<p>The CPA Exam is a professional licensing exam, not a university exam — you take it to become licensed to practise as a Certified Public Accountant in a specific US state. It's written and scored by the American Institute of CPAs (AICPA), administered for most boards by the National Association of State Boards of Accountancy (NASBA), and delivered at Prometric test centres. Each of the 55 US state and territory boards of accountancy decides who may sit and who gets licensed.</p>
<h2>What it covers</h2>
<p>Four 4-hour sections: three mandatory ("Core") covering financial accounting (FAR), auditing (AUD), and tax and business law (REG), plus one elective ("Discipline") you choose based on your interests — business analysis and reporting (BAR), information systems and controls (ISC), or tax compliance and planning (TCP). Core sections can be taken any month; Disciplines only in January, April, July and October.</p>
<h2>How it's tested</h2>
<p>Each section mixes multiple-choice questions with task-based simulations — realistic scenarios where you might fill in a journal entry, research a rule, or analyse a set of documents, rather than just picking an answer from a list. A score of 75 on a 0–99 scale passes; it's a scaled score, not a percentage. See <a href="/blog/us-cpa-exam-format-explained">the exam format explained</a>.</p>
<h2>What passing means (and doesn't)</h2>
<p>Passing all four sections is a major milestone, but it isn't the same as becoming licensed. Most states also require verified work experience (usually one year under a licensed CPA, or two under the newer 120-hour pathway), an education requirement for licensure, and often an ethics exam. See <a href="/blog/passing-cpa-exam-vs-getting-cpa-licence">passing vs licensure</a>.</p>
<h2>Can you take it from India?</h2>
<p>Yes. Once you're eligible through a participating board, you can test at Prometric centres in eight Indian cities — Ahmedabad, Bangalore, Kolkata, Chennai, Hyderabad, Mumbai, New Delhi and Thiruvananthapuram — paying NASBA's international fee of $460 per section. See <a href="/blog/us-cpa-in-india-complete-guide-for-beginners">the complete guide for Indian beginners</a>.</p>

${sources([
  ["AICPA & CIMA — CPA Exam", "https://www.aicpa-cima.com/resources/landing/cpa-exam"],
  ["NASBA — CPA Exam FAQ", "https://nasba.org/exams/cpaexam/examfaq/"],
  ["NASBA — CPA Exam International Administration", "https://nasba.org/internationalexam/"],
])}
`,
  },
  {
    slug: "what-nobody-tells-indian-students-about-cpa",
    title: "What Nobody Tells Indian Students About CPA",
    category: "Indian Students",
    excerpt: "The parts that don't show up in the glossy brochures — state selection headaches, evaluation delays, and the licensing-vs-passing gap.",
    crux: [
      "State selection: Your degree may not meet every board's rules — get evaluated before you pick a state.",
      "Paperwork takes time: Evaluation, application and NTS issue can take weeks to months before your first exam.",
      "Passing isn't licensing: Most states require verified experience as well — plan for it alongside your studies.",
      "Hidden costs: Testing in India adds an international fee for every section.",
      "It's hard by design: Structured topic-by-topic study with real practice is what gets first-attempt passes.",
    ],
    content: `
<h2>1. State selection is a real decision, not a formality</h2>
<p>Many first-time candidates pick a state board almost at random, then discover mid-application that their specific degree combination doesn't clear that state's requirements. Several boards also reject CA coursework outright. Get a credential evaluation — NASBA's NIES even offers an "undecided" evaluation that suggests up to three jurisdictions you qualify for — <em>before</em> you pick. See <a href="/blog/which-us-state-is-best-for-indian-cpa-candidates">which state is best for Indian candidates</a>.</p>
<h2>2. Evaluation and application timelines can run longer than expected</h2>
<p>NIES takes about six weeks once it has every document, but documents must come directly from your universities in sealed envelopes, and everything must arrive within 90 days. Board eligibility reviews can take up to six more weeks. The administrative runway before your first exam is often two to four months — plan around it. See <a href="/blog/us-cpa-exam-application-to-result-timeline">the application-to-result timeline</a>.</p>
<h2>3. Passing ≠ licensed</h2>
<p>This one catches people off guard. You can pass all four sections and still not be a licensed CPA — most states require a verified experience period first. If your goal is the license (not just the credential-adjacent achievement of passing), plan your experience path alongside your study plan, not after.</p>
<h2>4. Fees change, and international testing costs more</h2>
<p>Testing in India carries NASBA's international administration fee of $460 per section on top of the $268.59 exam fee and the board's application fee — and it applies again to every retake. Budget about $825–$900 per section attempt. See <a href="/blog/how-much-does-us-cpa-cost-for-indian-student">the full cost breakdown</a>.</p>
<h2>5. It's genuinely hard, and that's fine</h2>
<p>In 2025 about 42% of FAR candidates and 48% of AUD candidates passed, according to the AICPA. Pass rates reflect a demanding exam, not a broken one. Structured, topic-by-topic study with real practice — not just re-reading material — is what separates candidates who pass on their first attempt from those who don't.</p>

${sources([
  ["NASBA — International Evaluation Services (NIES)", "https://nasba.org/products/nasbainternationalevaluationservices/"],
  ["NASBA — CPA Exam International Administration", "https://nasba.org/internationalexam/"],
  ["AICPA & CIMA — The new CPA Exam, two years in (2025 pass rates)", "https://www.aicpa-cima.com/professional-insights/article/the-new-cpa-exam-two-years-in"],
])}
`,
  },
];

const allPosts: BlogSeed[] = [
  ...corePosts,
  ...keywordPosts,
  ...auditPosts,
  ...audPosts2,
  ...farPosts,
  ...farPosts2,
  ...farPosts3,
  ...taxPosts,
  ...taxPosts2,
  ...iscPosts,
  ...indiaPosts,
  ...indiaPosts2,
  ...examPosts,
  ...studyPosts,
  ...studyPosts2,
  ...conceptPosts,
];

const duplicate = allPosts.find((post, i) => allPosts.findIndex((p) => p.slug === post.slug) !== i);
if (duplicate) throw new Error(`Duplicate blog slug in seed data: ${duplicate.slug}`);

export const blogPosts: BlogSeed[] = allPosts.map(withCrux);
