/**
 * Evergreen guide pages for the biggest searches Indian candidates make ("US CPA salary in
 * India", "CA vs CPA" and so on). Structured data, like the Pulse, so every guide carries
 * its sources, check date and FAQs by construction.
 */

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "callout"; title: string; text: string };

export type GuideFaq = { q: string; a: string };

export type Guide = {
  /** Top-level URL slug, e.g. "us-cpa-salary-in-india". */
  slug: string;
  /** Short label for breadcrumbs and link lists. */
  short: string;
  /** <title> — include the year for searches that carry it. */
  title: string;
  /** Meta description, 150–160 characters. */
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  /** Date we last checked every fact on the page (YYYY-MM-DD). */
  checked: string;
  /** 3–6 one-line answers shown in a box at the top. */
  keyPoints: string[];
  body: GuideBlock[];
  faqs: GuideFaq[];
  sources: { label: string; url: string }[];
  related: { label: string; href: string }[];
};
