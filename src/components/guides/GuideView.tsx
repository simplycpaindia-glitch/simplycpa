import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { formatIsoDate } from "@/lib/utils";
import type { Guide, GuideBlock } from "@/lib/guides/types";

/** Renders inline [label](/href) links in guide text, so data files can link to our pages. */
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        const [, label, href] = m;
        return href.startsWith("/") ? (
          <Link key={i} href={href} className="text-gold-700 underline underline-offset-2">
            {label}
          </Link>
        ) : (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-gold-700 underline underline-offset-2">
            {label}
          </a>
        );
      })}
    </>
  );
}

const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 font-display text-2xl font-medium text-ink-950">{block.text}</h2>;
    case "p":
      return (
        <p className="mt-4 leading-relaxed text-ink-800">
          <Rich text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink-800">
          {block.items.map((item) => (
            <li key={item}>
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="mt-5 flex flex-col gap-4">
          {block.items.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-950 text-sm font-semibold text-paper-50">{i + 1}</span>
              <div>
                <p className="font-medium text-ink-950">{s.title}</p>
                <p className="mt-1 leading-relaxed text-ink-800">
                  <Rich text={s.body} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mt-5 overflow-x-auto rounded-xl border border-ink-950/10">
          <table className="w-full text-left text-sm">
            {block.caption && <caption className="px-4 pt-3 text-left text-xs text-ink-400">{block.caption}</caption>}
            <thead className="bg-paper-100 text-ink-950">
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-ink-950/10 align-top">
                  {row.map((cell, c) => (
                    <td key={c} className={c === 0 ? "px-4 py-3 font-medium text-ink-950" : "px-4 py-3 text-ink-800"}>
                      <Rich text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className="mt-6 rounded-xl border border-gold-400/60 bg-gold-500/5 p-5">
          <p className="font-semibold text-ink-950">{block.title}</p>
          <p className="mt-1 leading-relaxed text-ink-800">
            <Rich text={block.text} />
          </p>
        </div>
      );
  }
}

export function GuideView({ guide, path, crumbs }: { guide: Guide; path: string; crumbs?: { name: string; href: string }[] }) {
  const trail = [{ name: "Home", href: "/" }, ...(crumbs ?? []), { name: guide.short, href: path }];
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.h1,
      description: guide.description,
      url: `${SITE_URL}${path}`,
      dateModified: guide.checked,
      inLanguage: "en-IN",
      isAccessibleForFree: true,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      citation: guide.sources.map((s) => s.url),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE_URL}${c.href === "/" ? "" : c.href}` })),
    },
  ];

  return (
    <Container className="py-16">
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-400">
        {trail.map((c, i) => (
          <span key={c.href}>
            {i > 0 && <span className="mx-2">/</span>}
            {i < trail.length - 1 ? (
              <Link href={c.href} className="hover:text-ink-800">
                {c.name}
              </Link>
            ) : (
              <span className="text-ink-800">{c.name}</span>
            )}
          </span>
        ))}
      </nav>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="min-w-0 max-w-3xl">
          <SectionHeading as="h1" eyebrow={guide.eyebrow} title={guide.h1} description={guide.intro} />
          <p className="mt-4 text-sm text-ink-400">
            Facts checked {formatIsoDate(guide.checked)} against the sources listed below · Free to read, no sign-up or phone number needed
          </p>

          <div className="mt-8 rounded-xl border border-ink-950/10 bg-paper-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">The short answer</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink-800">
              {guide.keyPoints.map((k) => (
                <li key={k}>
                  <Rich text={k} />
                </li>
              ))}
            </ul>
          </div>

          {guide.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          <h2 className="mt-14 font-display text-2xl font-medium text-ink-950">Frequently asked questions</h2>
          <div className="mt-4 flex flex-col divide-y divide-ink-950/10 rounded-xl border border-ink-950/10">
            {guide.faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="cursor-pointer font-medium text-ink-950">{f.q}</summary>
                <p className="mt-2 leading-relaxed text-ink-800">
                  <Rich text={f.a} />
                </p>
              </details>
            ))}
          </div>

          <h2 className="mt-14 font-display text-xl font-medium text-ink-950">Sources</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-800">
            {guide.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-gold-400/60 bg-gold-500/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">Free, with no sales calls</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-800">
              SimplyCPA is free and independent. Our tools work without a sign-up, and we never ask for your phone number.
            </p>
          </div>
          <div className="mt-4 rounded-xl border border-ink-950/10 p-5">
            <p className="font-semibold text-ink-950">Related</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {guide.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-gold-700 underline underline-offset-2">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Container>
  );
}
