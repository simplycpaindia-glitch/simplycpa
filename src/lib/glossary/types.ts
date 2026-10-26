export type SectionSlug = "far" | "aud" | "reg" | "bar" | "isc" | "tcp";

/** One glossary page: definition first, then key takeaways, an example and practice. */
export type GlossaryTerm = {
  slug: string;
  /** Full name, with its short form in brackets if it has one: "Current expected credit loss (CECL)". */
  term: string;
  /** Exam section and topic where the term is mainly tested. */
  section: SectionSlug;
  topic: string;
  /** One or two plain sentences. */
  definition: string;
  takeaways: string[];
  example?: string;
  related?: string[];
  /** Words that identify practice questions about this term (case-insensitive). */
  match: string[];
};
