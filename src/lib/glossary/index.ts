import type { GlossaryTerm } from "./types";
import { farTerms } from "./data/far";
import { audTerms } from "./data/aud";
import { disciplineTerms, regTerms } from "./data/tax-and-disciplines";
import { farTermsB } from "./data/far-b";
import { audTermsB } from "./data/aud-b";
import { disciplineTermsB, regTermsB } from "./data/tax-and-disciplines-b";
import { farTermsC } from "./data/far-c";
import { audTermsC } from "./data/aud-c";
import { disciplineTermsC, regTermsC } from "./data/tax-and-disciplines-c";
import { audTermsD, farTermsD } from "./data/far-aud-d";
import { regTermsD } from "./data/reg-d";
import { disciplineTermsD } from "./data/disciplines-d";
import { audTermsE, farTermsE } from "./data/far-aud-e";
import { regTermsE } from "./data/reg-e";
import { disciplineTermsE } from "./data/disciplines-e";
import { audTermsF, farTermsF } from "./data/far-aud-f";
import { regTermsF } from "./data/reg-f";
import { disciplineTermsF } from "./data/disciplines-f";

export const glossary: GlossaryTerm[] = [...farTerms, ...farTermsB, ...farTermsC, ...farTermsD, ...farTermsE, ...farTermsF, ...audTerms, ...audTermsB, ...audTermsC, ...audTermsD, ...audTermsE, ...audTermsF, ...regTerms, ...regTermsB, ...regTermsC, ...regTermsD, ...regTermsE, ...regTermsF, ...disciplineTerms, ...disciplineTermsB, ...disciplineTermsC, ...disciplineTermsD, ...disciplineTermsE, ...disciplineTermsF].sort((a, b) =>
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
