import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate, formatIsoDate } from "@/lib/utils";
import { radarAnchor } from "@/lib/radar";
import { SITE_URL } from "@/lib/site";
import { PULSE_CATEGORIES, PULSE_STATUS_LABEL, activePulseCategories, pulseArticles, pulseCategory } from "@/lib/pulse";

export const metadata: Metadata = {
  title: "The CPA Pulse: CPA Exam News, Policy Changes and Accounting Updates",
  description:
    "Dated, sourced news for US CPA candidates: score releases, Blueprint and policy changes, licensing rules, fees and accounting developments. Every story links to the official source.",
  alternates: { canonical: "/pulse" },
};

export default async function PulsePage() {
  const notes = await prisma.update.findMany({ orderBy: [{ publishedAt: "desc" }, { lastVerified: "desc" }] });
  const [lead, ...rest] = pulseArticles;
  const desks = activePulseCategories();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The CPA Pulse",
    url: `${SITE_URL}/pulse`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pulseArticles.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/pulse/${a.slug}`, name: a.title })),
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold-700">The CPA Pulse</p>
          <h1 className="font-display text-4xl font-medium text-ink-950 text-balance sm:text-5xl">Everything happening in the CPA world</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            Exam and policy changes, score releases, licensing rules and accounting news, written for candidates. Every story is read
            at its official source, dated, and ends with what it means for you.
          </p>
          {desks.length > 1 && (
            <nav aria-label="Desks" className="mt-6 flex flex-wrap gap-2">
              {desks.map((c) => (
                <a key={c.slug} href={`#${c.slug}`} className="rounded-full border border-ink-950/15 px-3 py-1 text-sm font-medium text-ink-800 hover:border-ink-950/40">
                  {c.name}
                </a>
              ))}
            </nav>
          )}
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            {lead && (
              <article className="border-b border-ink-950/10 pb-10">
                <StoryMeta category={lead.category} status={lead.status} published={lead.published} />
                <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink-950 text-balance">
                  <Link href={`/pulse/${lead.slug}`} className="hover:underline">
                    {lead.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-800">{lead.summary}</p>
                <Link href={`/pulse/${lead.slug}`} className="mt-4 inline-block text-sm font-medium text-gold-700 underline underline-offset-2">
                  Read the full story
                </Link>
              </article>
            )}

            {desks.map((c) => {
              const stories = rest.filter((a) => a.category === c.slug);
              if (stories.length === 0) return null;
              return (
                <section key={c.slug} id={c.slug} className="scroll-mt-24 pt-10">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-400">{c.name}</h2>
                  <div className="mt-2 flex flex-col divide-y divide-ink-950/10">
                    {stories.map((a) => (
                      <article key={a.slug} className="py-6">
                        <StoryMeta status={a.status} published={a.published} />
                        <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink-950">
                          <Link href={`/pulse/${a.slug}`} className="hover:underline">
                            {a.title}
                          </Link>
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-400">{a.summary}</p>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}

            {notes.length > 0 && (
              <section id="standing-notes" className="scroll-mt-24 pt-12">
                <h2 className="font-display text-2xl font-medium text-ink-950">Standing notes</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-400">
                  Rules and changes that stay true for a while. Each note is re-checked and carries the date we last verified it.
                </p>
                <div className="mt-4 flex flex-col divide-y divide-ink-950/10">
                  {notes.map((u) => (
                    <article key={u.id} id={radarAnchor(u.id)} className="scroll-mt-24 py-5 target:bg-gold-500/10">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
                        <Badge tone="neutral">{u.category}</Badge>
                        <span>Published {formatDate(u.publishedAt)}</span>
                        <span aria-hidden>·</span>
                        <span>Last verified {formatDate(u.lastVerified)}</span>
                      </div>
                      <h3 className="mt-2 font-semibold text-ink-950">{u.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-400">{u.body}</p>
                      {u.sourceUrl && (
                        <a href={u.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-gold-700 underline">
                          Source
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-ink-950/10 p-5">
              <h2 className="text-sm font-semibold text-ink-950">How Pulse works</h2>
              <ul className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-ink-400">
                <li>We publish a story only after reading the original source. If we can&apos;t reach the source, we don&apos;t run it.</li>
                <li>
                  Each story shows three dates: when the event happened, when we published, and when we last verified it.
                </li>
                <li>Pulse is written by people on a schedule. It is not a live feed.</li>
              </ul>
              <dl className="mt-4 flex flex-col gap-2 border-t border-ink-950/10 pt-4 text-sm">
                {Object.values(PULSE_STATUS_LABEL).map((s) => (
                  <div key={s.label}>
                    <dt className="font-medium text-ink-950">{s.label}</dt>
                    <dd className="text-ink-400">{s.explain}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/editorial-standards" className="mt-4 inline-block text-sm font-medium text-gold-700 underline underline-offset-2">
                Editorial standards
              </Link>
            </div>
            <div className="rounded-xl border border-ink-950/10 p-5">
              <h2 className="text-sm font-semibold text-ink-950">The four desks</h2>
              <ul className="mt-3 flex flex-col gap-3 text-sm leading-relaxed">
                {PULSE_CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <span className="font-medium text-ink-950">{c.name}</span>
                    <span className="block text-ink-400">{c.blurb}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink-400">A desk appears in the list once it has a verified story.</p>
            </div>
            <div className="rounded-xl border border-ink-950/10 p-5 text-sm">
              <h2 className="font-semibold text-ink-950">Follow along</h2>
              <p className="mt-2 leading-relaxed text-ink-400">
                New stories appear in the{" "}
                <a href="/feed.xml" className="text-gold-700 underline underline-offset-2">
                  RSS feed
                </a>
                . For dates, use the{" "}
                <Link href="/cpa-score-release-dates" className="text-gold-700 underline underline-offset-2">
                  score release finder
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}

function StoryMeta({ category, status, published }: { category?: Parameters<typeof pulseCategory>[0]; status: keyof typeof PULSE_STATUS_LABEL; published: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
      {category && <Badge tone="gold">{pulseCategory(category).name}</Badge>}
      <Badge tone={status === "confirmed" ? "green" : status === "reported" ? "amber" : "neutral"}>{PULSE_STATUS_LABEL[status].label}</Badge>
      <time dateTime={published}>{formatIsoDate(published)}</time>
    </div>
  );
}
