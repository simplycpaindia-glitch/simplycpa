import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";
import { TOOLS, TOOL_STAGES } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Free CPA Tools: Eligibility, Discipline, Cost, Study Plan and Exam Countdown",
  description:
    "Free tools for US CPA candidates: check where your education stands, choose BAR, ISC or TCP, estimate the cost, build a study plan and track exam and score release dates. No sign-up needed.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free CPA student tools",
    itemListElement: TOOLS.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: `${SITE_URL}${t.href}` })),
  };
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold-700">Student tools</p>
          <h1 className="font-display text-4xl font-medium text-ink-950 text-balance">Free tools for every stage of the CPA</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">
            Decide, plan, study and track. Every tool is free and works on a phone, and all but the dashboard need no account. Where
            a tool uses a fee, a date or a rule, it shows the official source and the date we checked it.
          </p>
        </Container>
      </div>
      <Container className="py-12">
        <div className="flex flex-col gap-12">
          {TOOL_STAGES.map(({ stage, title }) => (
            <section key={stage}>
              <h2 className="font-display text-2xl font-medium text-ink-950">{title}</h2>
              <ul className="mt-5 grid gap-px overflow-hidden rounded-lg border border-ink-950/10 bg-ink-950/10 sm:grid-cols-2 lg:grid-cols-3">
                {TOOLS.filter((t) => t.stage === stage).map((t) => (
                  <li key={t.href} className="bg-paper-50">
                    <Link href={t.href} className="group flex h-full flex-col p-5 hover:bg-paper-100">
                      <span className="flex items-center gap-2 font-semibold text-ink-950">
                        {t.name}
                        {t.isNew && <Badge tone="gold">New</Badge>}
                      </span>
                      <span className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-400">{t.blurb}</span>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink-950 group-hover:underline">
                        Open <ArrowRight className="size-3.5" aria-hidden />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
