import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideView } from "@/components/guides/GuideView";
import { GUIDES, getGuide } from "@/lib/guides/data";

// Only the guides listed in data.ts exist at the top level; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ guide: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ guide: string }> }): Promise<Metadata> {
  const { guide } = await params;
  const g = getGuide(guide);
  if (!g) return {};
  return { title: g.title, description: g.description, alternates: { canonical: `/${g.slug}` } };
}

export default async function GuidePage({ params }: { params: Promise<{ guide: string }> }) {
  const { guide } = await params;
  const g = getGuide(guide);
  if (!g) notFound();
  return <GuideView guide={g} path={`/${g.slug}`} crumbs={[{ name: "CPA for Indian students", href: "/indian-candidates" }]} />;
}
