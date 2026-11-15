import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatIsoDate } from "@/lib/utils";
import { PULSE_STATUS_LABEL, pulseArticles, pulseCategory } from "@/lib/pulse";

/** Latest stories from The CPA Pulse (formerly the CPA Radar band). */
export function RadarPreview() {
  const [lead, ...rest] = pulseArticles.slice(0, 4);
  if (!lead) return null;

  return (
    <section className="bg-paper-100 py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="The CPA Pulse"
            title="What's happening in the CPA world"
            description="Exam, policy and licensing news, read at the official source and dated."
          />
          <Button href="/pulse" variant="outline" size="sm">
            All stories
          </Button>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-ink-950/10 bg-ink-950/10 lg:grid-cols-[1.2fr_1fr]">
          <Link href={`/pulse/${lead.slug}`} className="group flex flex-col bg-paper-50 p-6 hover:bg-paper-100 sm:p-8">
            <Meta category={pulseCategory(lead.category).name} status={PULSE_STATUS_LABEL[lead.status].label} date={lead.published} />
            <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-ink-950 text-balance group-hover:underline">{lead.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">{lead.summary}</p>
          </Link>
          <div className="flex flex-col gap-px">
            {rest.map((a) => (
              <Link key={a.slug} href={`/pulse/${a.slug}`} className="group flex-1 bg-paper-50 p-5 hover:bg-paper-100">
                <Meta category={pulseCategory(a.category).name} date={a.published} />
                <p className="mt-2 text-sm font-medium leading-snug text-ink-950 group-hover:underline">{a.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Meta({ category, status, date }: { category: string; status?: string; date: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-ink-400">
      <Badge tone="gold">{category}</Badge>
      {status && <Badge tone="green">{status}</Badge>}
      <time dateTime={date}>{formatIsoDate(date)}</time>
    </div>
  );
}
