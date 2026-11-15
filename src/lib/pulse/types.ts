/**
 * The CPA Pulse: SimplyCPA's newsroom. Articles are structured data (not database rows)
 * so every story carries its sources, dates and "why it matters" by construction, and a
 * story can't be published without them. See docs/PULSE-WORKFLOW.md before adding one.
 */

export const PULSE_CATEGORIES = [
  {
    slug: "exam-policy",
    name: "Exam & Policy",
    blurb: "Blueprints, score releases, testing windows, fees, eligibility and licensing rules.",
  },
  {
    slug: "accounting-regulation",
    name: "Accounting & Regulation",
    blurb: "FASB, SEC, PCAOB and IRS developments, and what they mean for the exam and the job.",
  },
  {
    slug: "industry",
    name: "Industry Buzz",
    blurb: "Firms, deals, hiring, AI and the debates the profession is having, reported from named sources.",
  },
  {
    slug: "candidates",
    name: "Candidate Corner",
    blurb: "Score-release reactions, preparation mistakes and what candidates are asking about.",
  },
] as const;

export type PulseCategorySlug = (typeof PULSE_CATEGORIES)[number]["slug"];

/**
 * How firm the story is. Shown on every article so a reader never has to guess.
 *  - confirmed: stated by the official body itself, and we read it there
 *  - reported:  reported by a named publication; not confirmed by the body concerned
 *  - commentary: SimplyCPA's own analysis or opinion
 */
export type PulseStatus = "confirmed" | "reported" | "commentary";

export type PulseSource = { label: string; url: string };

export type PulseBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type PulseArticle = {
  slug: string;
  title: string;
  category: PulseCategorySlug;
  status: PulseStatus;
  /** One or two sentences. Used on cards, in search results and the RSS feed. */
  summary: string;
  /** When the thing itself happened or was announced by the source (YYYY-MM-DD). */
  eventDate: string;
  /** When SimplyCPA first published this article. */
  published: string;
  /** When SimplyCPA last changed the article, if it has. */
  updated?: string;
  /** When we last re-read the sources and confirmed the article still matches them. */
  verified: string;
  body: PulseBlock[];
  /** "Why this matters to you", in plain points. */
  whyItMatters: string[];
  /** Original sources we read. At least one is required. */
  sources: PulseSource[];
  /** Internal links to study pages, tools and guides. */
  related: { label: string; href: string }[];
};
