/**
 * The "Free CPA resources" hub (/free-cpa-resources). Every entry is a free, official or
 * primary source, summarised in our own words — we link, never copy.
 *
 * When you re-check the links, update RESOURCES_CHECKED. Access notes matter: say when a
 * free account or accepting terms is needed, and leave out anything paid.
 */
export const RESOURCES_CHECKED = "2026-10-16";

export type Section = "FAR" | "AUD" | "REG" | "BAR" | "ISC" | "TCP";
export type Access = "Free" | "Free account" | "Free — accept terms";

export type FreeResource = {
  name: string;
  publisher: string;
  url: string;
  access: Access;
  /** Exam sections it helps with; empty = the exam as a whole / process. */
  sections: Section[];
  summary: string;
  howToUse: string;
};

export type ResourceGroup = { id: string; title: string; intro: string; items: FreeResource[] };

export const RESOURCE_GROUPS: ResourceGroup[] = [
  {
    id: "exam",
    title: "The exam itself (AICPA)",
    intro: "Start here. These come from the AICPA, which writes the CPA Exam.",
    items: [
      {
        name: "CPA Exam Blueprints (2026 and 2027)",
        publisher: "AICPA",
        url: "https://www.aicpa-cima.com/resources/download/learn-what-is-tested-on-the-cpa-exam",
        access: "Free",
        sections: ["FAR", "AUD", "REG", "BAR", "ISC", "TCP"],
        summary:
          "The official list of what each section tests: content areas, their weightings, sample tasks and the skill level each is tested at. Blueprints effective 1 January 2026 and 1 January 2027 are both posted, with a summary of what changed.",
        howToUse: "Use it as your syllabus and final checklist. Make sure you use the Blueprint for the year you'll sit the exam.",
      },
      {
        name: "CPA Exam sample tests",
        publisher: "AICPA",
        url: "https://www.aicpa-cima.com/resources/article/get-familiar-with-the-cpa-exam-by-practicing-with-our-sample-tests",
        access: "Free",
        sections: ["FAR", "AUD", "REG", "BAR", "ISC", "TCP"],
        summary:
          "Practice tests in the same software used at Prometric test centres, for all six sections, with answers you can review. They're not scored, and the AICPA notes the content is current as of July 2023.",
        howToUse: "Take one before exam day to learn the interface and tools — not to judge whether you're ready.",
      },
      {
        name: "Retired task-based simulations (FAR and AUD)",
        publisher: "AICPA",
        url: "https://www.aicpa-cima.com/resources/download/learn-what-is-tested-on-the-cpa-exam",
        access: "Free",
        sections: ["FAR", "AUD"],
        summary: "Simulations that were used on the real exam and then retired, released by the AICPA as PDFs. Listed on the same page as the Blueprints.",
        howToUse: "Work them under time pressure to see how the exam frames a simulation.",
      },
      {
        name: "Score release dates",
        publisher: "AICPA",
        url: "https://www.aicpa-cima.com/resources/article/find-out-when-youll-get-your-cpa-exam-score",
        access: "Free",
        sections: [],
        summary:
          "Target dates for scores. Core sections (AUD, FAR, REG) release on a rolling basis; discipline sections (BAR, ISC, TCP) release about six weeks after each quarterly testing window.",
        howToUse: "Check it before you book, so your next section isn't planned around a score you don't have yet.",
      },
      {
        name: "Scoring and pass rates",
        publisher: "AICPA",
        url: "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates",
        access: "Free",
        sections: [],
        summary: "How the exam is scored (75 to pass, on a 0–99 scale) and the pass rates for each section, published every quarter.",
        howToUse: "Use pass rates to plan your section order and how much time each needs — not to predict your own result.",
      },
      {
        name: "CPA Exam FAQs",
        publisher: "AICPA",
        url: "https://www.aicpa-cima.com/resources/article/find-answers-to-frequently-asked-questions-about-cpa-exam",
        access: "Free",
        sections: [],
        summary: "Official answers on exam structure, credit, scheduling and scoring.",
        howToUse: "Settle rules questions here rather than on forums.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility, applying and testing from India (NASBA, Prometric)",
    intro: "How to qualify through a US state board, have Indian degrees evaluated and sit the exam in India.",
    items: [
      {
        name: "CPA Exam — application process and FAQ",
        publisher: "NASBA",
        url: "https://nasba.org/exams/cpaexam/",
        access: "Free",
        sections: [],
        summary: "How applications, the Notice to Schedule and fees work for most state boards.",
        howToUse: "Read before choosing a state board, then confirm everything on that board's own site.",
      },
      {
        name: "International administration of the CPA Exam",
        publisher: "NASBA",
        url: "https://nasba.org/internationalexam/",
        access: "Free",
        sections: [],
        summary:
          "How to take the exam outside the US — India included — the extra international fee per section, and which state boards take part.",
        howToUse: "Check your chosen state participates before you apply through it.",
      },
      {
        name: "NASBA International Evaluation Services (NIES)",
        publisher: "NASBA",
        url: "https://nasba.org/products/nasbainternationalevaluationservices/",
        access: "Free",
        sections: [],
        summary:
          "Evaluates education completed outside the US (such as Indian B.Com, M.Com or CA) for CPA exam and licensure purposes. The page covers requirements, documents and FAQs; the evaluation itself is a paid service.",
        howToUse: "Read the document requirements early — sealed transcripts from Indian universities take time to arrange.",
      },
      {
        name: "Prometric — CPA test centres and scheduling",
        publisher: "Prometric",
        url: "https://www.prometric.com/exams/cpa/",
        access: "Free",
        sections: [],
        summary: "Find a test centre (including in India), and schedule, reschedule or cancel your appointment.",
        howToUse: "Look up seat availability at your nearest centre before picking a date.",
      },
      {
        name: "CPA Mobility",
        publisher: "NASBA",
        url: "https://cpamobility.org/",
        access: "Free",
        sections: [],
        summary: "Look up licensing requirements by state and whether a CPA licence from one state lets you practise in another.",
        howToUse: "Useful when weighing states — especially with states now offering different education routes to licensure.",
      },
      {
        name: "This Way to CPA",
        publisher: "AICPA",
        url: "https://www.thiswaytocpa.com/",
        access: "Free",
        sections: [],
        summary: "The AICPA's careers site: what CPAs do, the steps to licensure and state-by-state basics.",
        howToUse: "Good for the bigger picture before you commit.",
      },
    ],
  },
  {
    id: "far",
    title: "Accounting standards (FAR)",
    intro: "The exam's research questions expect you to find guidance in the actual standards.",
    items: [
      {
        name: "FASB Accounting Standards Codification",
        publisher: "FASB",
        url: "https://asc.fasb.org/",
        access: "Free — accept terms",
        sections: ["FAR", "BAR"],
        summary: "The single source of US GAAP for businesses, organised by topic. Free for personal, non-commercial use after you accept FASB's terms.",
        howToUse: "Practise browsing by topic number (e.g. 842 for leases) so research questions take minutes, not a quarter of an hour.",
      },
      {
        name: "GASB Governmental Accounting Research System (GARS)",
        publisher: "GASB",
        url: "https://gars.gasb.org/",
        access: "Free — accept terms",
        sections: ["FAR"],
        summary: "US GAAP for state and local governments: the GASB Codification, original pronouncements and implementation guide. Free for personal, non-commercial use.",
        howToUse: "Use it for governmental accounting, which candidates who trained outside the US rarely studied before.",
      },
      {
        name: "EDGAR full-text search",
        publisher: "SEC",
        url: "https://www.sec.gov/edgar/search/",
        access: "Free",
        sections: ["FAR", "BAR", "AUD"],
        summary: "Search every public company filing — 10-Ks, 10-Qs and audit reports.",
        howToUse: "See how real companies disclose leases, revenue or segment data after you study a topic.",
      },
    ],
  },
  {
    id: "aud",
    title: "Auditing and ethics (AUD)",
    intro: "Auditing standards and the ethics code tested in AUD.",
    items: [
      {
        name: "PCAOB auditing standards",
        publisher: "PCAOB",
        url: "https://pcaobus.org/oversight/standards/auditing-standards",
        access: "Free",
        sections: ["AUD"],
        summary: "The standards for audits of US public companies, readable online and as downloadable PDFs, organised by the periods they apply to.",
        howToUse: "Read the standards on audit reports and critical audit matters alongside your notes.",
      },
      {
        name: "AICPA Code of Professional Conduct",
        publisher: "AICPA",
        url: "https://pub.aicpa.org/codeofconduct",
        access: "Free",
        sections: ["AUD", "REG"],
        summary: "The ethics rules for CPAs — independence, integrity, confidentiality — arranged by line of practice.",
        howToUse: "Independence questions are common; read the independence section once in full.",
      },
      {
        name: "Government Auditing Standards (the Yellow Book)",
        publisher: "US GAO",
        url: "https://www.gao.gov/yellowbook",
        access: "Free",
        sections: ["AUD"],
        summary: "Standards for audits of US government entities and organisations receiving government funds.",
        howToUse: "Focus on how it differs from standards for private-company audits.",
      },
      {
        name: "Uniform Guidance (2 CFR 200) — single audits",
        publisher: "eCFR",
        url: "https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200",
        access: "Free",
        sections: ["AUD"],
        summary: "The federal rules behind single audits of organisations that spend federal awards.",
        howToUse: "Read the audit requirements subpart; skip the grant administration detail.",
      },
      {
        name: "COSO Internal Control — Integrated Framework",
        publisher: "COSO",
        url: "https://www.coso.org/guidance-on-ic",
        access: "Free",
        sections: ["AUD", "BAR", "ISC"],
        summary: "The internal-control framework the exam assumes: five components and seventeen principles. The full framework is sold, but the executive summary and a principles poster are posted on this page.",
        howToUse: "Learn the five components and how they map to audit risk.",
      },
    ],
  },
  {
    id: "tax",
    title: "Tax and business law (REG, TCP)",
    intro: "Primary US tax and business-law sources.",
    items: [
      {
        name: "IRS forms, instructions and publications",
        publisher: "IRS",
        url: "https://www.irs.gov/forms-instructions",
        access: "Free",
        sections: ["REG", "TCP"],
        summary: "Every federal tax form and its instructions. Form instructions are some of the clearest explanations of the rules.",
        howToUse: "When a topic doesn't click, read the instructions for the form it ends up on (e.g. Schedule C, Form 1065).",
      },
      {
        name: "Publication 17 — Your Federal Income Tax",
        publisher: "IRS",
        url: "https://www.irs.gov/publications/p17",
        access: "Free",
        sections: ["REG"],
        summary: "The IRS's plain-language guide to individual income tax.",
        howToUse: "Check figures against the tax year your exam window tests, which can lag the current year.",
      },
      {
        name: "Internal Revenue Code (Title 26)",
        publisher: "Cornell Legal Information Institute",
        url: "https://www.law.cornell.edu/uscode/text/26",
        access: "Free",
        sections: ["REG", "TCP"],
        summary: "The full text of the US tax code, with easy navigation by section number.",
        howToUse: "Look up the section your notes cite (e.g. §1031) to see the actual rule.",
      },
      {
        name: "Circular 230 — rules for tax practitioners",
        publisher: "IRS",
        url: "https://www.irs.gov/tax-professionals/circular-230-tax-professionals",
        access: "Free",
        sections: ["REG"],
        summary: "The rules governing practice before the IRS, tested under REG's ethics area.",
        howToUse: "Focus on practitioner duties, restrictions and sanctions.",
      },
      {
        name: "Uniform Commercial Code",
        publisher: "Cornell Legal Information Institute",
        url: "https://www.law.cornell.edu/ucc",
        access: "Free",
        sections: ["REG"],
        summary: "The model law for sales, negotiable instruments and secured transactions.",
        howToUse: "Read Article 2 (sales) and Article 9 (secured transactions) alongside your business-law notes.",
      },
    ],
  },
  {
    id: "isc",
    title: "Information systems and controls (ISC)",
    intro: "Frameworks behind ISC's systems, security and SOC-report questions.",
    items: [
      {
        name: "NIST Cybersecurity Framework",
        publisher: "NIST",
        url: "https://www.nist.gov/cyberframework",
        access: "Free",
        sections: ["ISC"],
        summary: "The US government's framework for managing cybersecurity risk, organised into core functions.",
        howToUse: "Learn the functions and what each covers.",
      },
      {
        name: "NIST SP 800-53 — security and privacy controls",
        publisher: "NIST",
        url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        access: "Free",
        sections: ["ISC"],
        summary: "The detailed catalogue of security and privacy controls that many control frameworks map to.",
        howToUse: "Use it as a reference for control families, not to read cover to cover.",
      },
      {
        name: "Trust Services Criteria (SOC 2)",
        publisher: "AICPA",
        url: "https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022",
        access: "Free account",
        sections: ["ISC", "AUD"],
        summary: "The criteria SOC 2 reports are measured against: security, availability, processing integrity, confidentiality and privacy.",
        howToUse: "Pair it with your SOC 1 / SOC 2 / SOC 3 notes — knowing which report covers what is heavily tested.",
      },
    ],
  },
];
