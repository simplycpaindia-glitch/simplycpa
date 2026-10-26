import type { GlossaryTerm } from "./types";
import { farTerms } from "./data/far";
import { audTerms } from "./data/aud";
import { disciplineTerms, regTerms } from "./data/tax-and-disciplines";
import { farTermsB } from "./data/far-b";
import { audTermsB } from "./data/aud-b";
import { disciplineTermsB, regTermsB } from "./data/tax-and-disciplines-b";

export const glossary: GlossaryTerm[] = [...farTerms, ...farTermsB, ...audTerms, ...audTermsB, ...regTerms, ...regTermsB, ...disciplineTerms, ...disciplineTermsB].sort((a, b) =>
  a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
);

const bySlug = new Map(glossary.map((t) => [t.slug, t]));

export function getTerm(slug: string): GlossaryTerm | undefined {
  return bySlug.get(slug);
}

export function termsForTopic(section: string, topic: string): GlossaryTerm[] {
  return glossary.filter((t) => t.section === section && t.topic === topic);
}

/** "A", "B", … — terms starting with a digit go under "#". */
export function initial(term: GlossaryTerm): string {
  const c = term.term[0].toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

/** Practice questions whose text or tags mention one of the term's keywords, topped up from the topic. */
export function pickQuestions<Q extends { question: string; tags: string[] }>(term: GlossaryTerm, questions: Q[], count = 3): Q[] {
  const keys = term.match.map((k) => k.toLowerCase());
  const hits = (q: Q) => keys.some((k) => q.question.toLowerCase().includes(k) || q.tags.some((t) => t.toLowerCase().includes(k)));
  const matched = questions.filter(hits);
  const rest = questions.filter((q) => !hits(q));
  return [...matched, ...rest].slice(0, count);
}
