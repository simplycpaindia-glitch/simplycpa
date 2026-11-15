import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutSimplyCPA } from "@/components/content/AboutSimplyCPA";
import { formatIsoDate } from "@/lib/utils";
import { SITE_URL } from "@/lib/site";
import { PULSE_STATUS_LABEL, getPulseArticle, pulseArticles, pulseCategory, relatedPulseArticles, type PulseBlock } from "@/lib/pulse";

export const dynamicParams = false;

export function generateStaticParams() {
  return pulseArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getPulseArticle(slug);
  if (!a) return {};
  const path = `/pulse/${a.slug}`;
  return {
    title: a.title,
    description: a.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: a.title,
      description: a.summary,
      siteName: "SimplyCPA",
      section: pulseCategory(a.category).name,
      publishedTime: `${a.published}T00:00:00+05:30`,
      modifiedTime: `${a.updated ?? a.published}T00:00:00+05:30`,
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.summary },
  };
}

export default async function PulseArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getPulseArticle(slug);
  if (!a) notFound();

  const category = pulseCategory(a.category);
  const status = PULSE_STATUS_LABEL[a.status];
  const url = `${SITE_URL}/pulse/${a.slug}`;
  const more = relatedPulseArticles(a);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: a.title,
      description: a.summary,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      articleSection: category.name,
      datePublished: `${a.published}T00:00:00+05:30`,
      dateModified: `${a.updated ?? a.published}T00:00:00+05:30`,
      citation: a.sources.map((s) => s.url),
      author: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "SimplyCPA", url: SITE_URL },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "SimplyCPA", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "The CPA Pulse", item: `${SITE_URL}/pulse` },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];

  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-ink-400">
        <Link href="/" className="hover:text-ink-950">Home</Link>
        <span aria-hidden>/</span>
        <Link href="/pulse" className="hover:text-ink-950">The CPA Pulse</Link>
        <span aria-hidden>/</span>
        <span>{category.name}</span>
      </nav>

      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="gold">{category.name}</Badge>
        <Badge tone={a.status === "confirmed" ? "green" : a.status === "reported" ? "amber" : "neutral"}>{status.label}</Badge>
      </div>
      <h1 className="mt-3 font-display text-3xl font-medium leading-tight text-balance sm:text-4xl">{a.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-800">{a.summary}</p>

      <dl className="mt-6 grid gap-x-6 gap-y-3 rounded-lg border border-ink-950/10 bg-paper-100 p-4 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-400">Event or announcement</dt>
          <dd className="mt-0.5 font-medium text-ink-950"><time dateTime={a.eventDate}>{formatIsoDate(a.eventDate)}</time></dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-400">Published by SimplyCPA</dt>
          <dd className="mt-0.5 font-medium text-ink-950">
            <time dateTime={a.published}>{formatIsoDate(a.published)}</time>
            {a.updated && a.updated !== a.published && <span className="block font-normal text-ink-400">Updated {formatIsoDate(a.updated)}</span>}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-ink-400">Sources last verified</dt>
          <dd className="mt-0.5 font-medium text-ink-950"><time dateTime={a.verified}>{formatIsoDate(a.verified)}</time></dd>
        </div>
      </dl>
      <p className="mt-2 text-xs text-ink-400">
        {status.label}: {status.explain}
      </p>

      <div className="prose-cpa mt-8">
        {a.body.map((b, i) => (
          <Block key={i} block={b} />
        ))}
      </div>

      <section className="mt-10 rounded-xl border border-gold-600/40 bg-gold-500/10 p-6">
        <h2 className="font-display text-xl font-medium text-ink-950">Why this matters to you</h2>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-ink-800">
          {a.whyItMatters.map((w) => (
            <li key={w} className="leading-relaxed">{w}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-medium text-ink-950">Sources</h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm">
          {a.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-gold-700 underline underline-offset-2">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-ink-400">
          Official pages change. If a date or figure here differs from the source, the source is right. Tell us through the{" "}
          <Link href="/contact" className="underline">contact page</Link> and we will correct it.
        </p>
      </section>

      {a.related.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-xl font-medium text-ink-950">Use this on SimplyCPA</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {a.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="inline-flex rounded-full border border-ink-950/15 px-3 py-1.5 text-sm font-medium text-ink-800 hover:border-ink-950/40 hover:text-ink-950">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <AboutSimplyCPA />

      {more.length > 0 && (
        <section className="mt-12 border-t border-ink-950/10 pt-8">
          <h2 className="font-display text-2xl font-medium">More from The CPA Pulse</h2>
          <ul className="mt-4 flex flex-col divide-y divide-ink-950/10">
            {more.map((m) => (
              <li key={m.slug} className="py-4">
                <Link href={`/pulse/${m.slug}`} className="font-medium text-ink-950 hover:underline">
                  {m.title}
                </Link>
                <p className="mt-1 text-xs text-ink-400">
                  {pulseCategory(m.category).name} · {formatIsoDate(m.published)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}

function Block({ block }: { block: PulseBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{block.text}</p>;
    case "list":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
