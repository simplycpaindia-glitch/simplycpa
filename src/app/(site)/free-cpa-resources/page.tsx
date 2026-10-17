import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate } from "@/lib/utils";
import { SITE_URL } from "@/lib/site";
import { RESOURCE_GROUPS, RESOURCES_CHECKED, type Access } from "@/lib/free-resources";

const PATH = "/free-cpa-resources";
const TITLE = "Free US CPA Exam Resources: Official Blueprints, Sample Tests and Standards";
const DESCRIPTION =
  "Every free, official US CPA resource in one place — AICPA Blueprints and sample tests, NASBA and Prometric guidance for candidates in India, and the free FASB, GASB, PCAOB, IRS and NIST sources, mapped to each exam section.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

const ACCESS_TONE: Record<Access, "green" | "gold" | "neutral"> = {
  Free: "green",
  "Free account": "gold",
  "Free — accept terms": "gold",
};

export default function FreeCpaResourcesPage() {
  const checked = new Date(`${RESOURCES_CHECKED}T00:00:00+05:30`);
  const total = RESOURCE_GROUPS.reduce((n, g) => n + g.items.length, 0);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}${PATH}`,
      dateModified: RESOURCES_CHECKED,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: total,
        itemListElement: RESOURCE_GROUPS.flatMap((g) => g.items).map((r, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: r.name,
          url: r.url,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Free CPA resources", item: `${SITE_URL}${PATH}` },
      ],
    },
  ];

  return (
    <Container className="py-16">
      <JsonLd data={jsonLd} />
      <SectionHeading as="h1"
        eyebrow="Resources"
        title="Free US CPA resources, in one place"
        description={`${total} free, official sources for the CPA Exam — what each one is, which sections it helps with, and how to use it. We link to the source rather than copying it.`}
      />

      <div className="mt-6 max-w-3xl rounded-xl border border-ink-950/10 bg-paper-100/60 p-4 text-sm text-ink-800">
        <p>
          <strong>Links checked {formatDate(checked)}.</strong> Everything here is free to use. Where you need a free
          account or must accept the publisher&apos;s terms, the label says so. Rules, fees and dates change — always
          confirm with the publisher before you pay for anything or book an exam.
        </p>
        <p className="mt-2 text-ink-400">
          Spotted a broken link or a free resource we&apos;ve missed? <Link href="/contact" className="underline">Tell us</Link>.
        </p>
      </div>

      <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2">
        {RESOURCE_GROUPS.map((g) => (
          <a
            key={g.id}
            href={`#${g.id}`}
            className="rounded-full bg-paper-50 px-3 py-1 text-xs font-medium text-ink-800 ring-1 ring-ink-950/10 hover:bg-paper-200"
          >
            {g.title}
          </a>
        ))}
      </nav>

      <div className="mt-10 flex max-w-3xl flex-col gap-12">
        {RESOURCE_GROUPS.map((g) => (
          <section key={g.id} id={g.id} className="scroll-mt-24">
            <h2 className="font-display text-2xl font-medium text-ink-950">{g.title}</h2>
            <p className="mt-1 text-sm text-ink-400">{g.intro}</p>
            <ul className="mt-5 flex flex-col divide-y divide-ink-950/10">
              {g.items.map((r) => (
                <li key={r.name} className="py-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-ink-950 underline decoration-gold-400 underline-offset-2 hover:decoration-ink-950"
                    >
                      {r.name}
                      <ExternalLink className="size-3.5 shrink-0" aria-hidden />
                      <span className="sr-only">(opens on {r.publisher}&apos;s site)</span>
                    </a>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-ink-400">
                    <span>{r.publisher}</span>
                    <Badge tone={ACCESS_TONE[r.access]}>{r.access}</Badge>
                    {r.sections.map((s) => (
                      <Badge key={s} tone="neutral">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-800">{r.summary}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                    <strong className="font-medium text-ink-800">How to use it:</strong> {r.howToUse}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 max-w-3xl rounded-xl border border-ink-950/10 bg-paper-50 p-5 text-sm text-ink-800">
        <p className="font-semibold text-ink-950">Study with these alongside SimplyCPA</p>
        <p className="mt-1">
          Our <Link href="/cpa" className="underline">topic-by-topic study material</Link>,{" "}
          <Link href="/quick-sheets" className="underline">quick sheets</Link> and practice questions are written against
          the Blueprints above. For India-specific steps — state choice, evaluation, fees — see{" "}
          <Link href="/indian-candidates" className="underline">CPA for Indian candidates</Link> and the{" "}
          <Link href="/fees" className="underline">fee estimator</Link>.
        </p>
      </div>
    </Container>
  );
}
