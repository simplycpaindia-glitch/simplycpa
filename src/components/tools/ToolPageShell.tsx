import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";

/** Shared header, breadcrumb and structured data for the pages under /tools. */
export function ToolPageShell({
  path,
  crumb,
  title,
  intro,
  children,
}: {
  path: string;
  crumb: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      { "@type": "ListItem", position: 3, name: crumb, item: `${SITE_URL}${path}` },
    ],
  };
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="border-b border-ink-950/10 bg-paper-100 py-12">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-xs text-ink-400">
            <Link href="/tools" className="hover:text-ink-950">
              Tools
            </Link>
            <span aria-hidden>/</span>
            <span>{crumb}</span>
          </nav>
          <h1 className="font-display text-4xl font-medium text-ink-950 text-balance">{title}</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-400">{intro}</p>
        </Container>
      </div>
      <Container className="py-10">{children}</Container>
    </>
  );
}
