/**
 * Long-form content for one topic: the full study page and its 5-minute revision sheet.
 *
 * Content lives in one file per topic (prisma/seed-data/content/<subject>/) so each
 * page can be reviewed and edited on its own, instead of inside a single large
 * subject file. Convention: every abbreviation is written out in full with the short
 * form in brackets on its first use on each page — the study page and the revision
 * sheet each count as their own page.
 */
export type TopicContent = {
  study: string;
  revision: string;
};
