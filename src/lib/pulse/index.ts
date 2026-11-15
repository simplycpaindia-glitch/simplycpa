import { PULSE_ARTICLES } from "./articles";
import { PULSE_CATEGORIES, type PulseArticle, type PulseCategorySlug, type PulseStatus } from "./types";

export * from "./types";

/** All articles, newest first. Stories published on the same day keep their order in articles.ts (most important first). */
export const pulseArticles: PulseArticle[] = [...PULSE_ARTICLES].sort((a, b) => b.published.localeCompare(a.published));

export const getPulseArticle = (slug: string) => pulseArticles.find((a) => a.slug === slug);

export const pulseCategory = (slug: PulseCategorySlug) => PULSE_CATEGORIES.find((c) => c.slug === slug)!;

/** Only desks that have at least one published story, so the page never shows an empty tab. */
export const activePulseCategories = () => PULSE_CATEGORIES.filter((c) => pulseArticles.some((a) => a.category === c.slug));

export const PULSE_STATUS_LABEL: Record<PulseStatus, { label: string; explain: string }> = {
  confirmed: { label: "Confirmed", explain: "Stated by the official body, and read by us at the source." },
  reported: { label: "Reported", explain: "Reported by a named publication. Not confirmed by the body concerned." },
  commentary: { label: "Commentary", explain: "SimplyCPA's own analysis." },
};

/** Up to `n` other stories, same desk first. */
export function relatedPulseArticles(article: PulseArticle, n = 3) {
  const others = pulseArticles.filter((a) => a.slug !== article.slug);
  return [...others.filter((a) => a.category === article.category), ...others.filter((a) => a.category !== article.category)].slice(0, n);
}

/** The most recent date anything on Pulse was published, updated or re-verified. */
export const pulseLastChanged = () =>
  pulseArticles.reduce((m, a) => [m, a.published, a.updated ?? "", a.verified].sort().at(-1)!, "");
