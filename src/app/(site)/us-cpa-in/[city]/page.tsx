import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideView } from "@/components/guides/GuideView";
import { CITY_INFO, cityGuide, getCity } from "@/lib/guides/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_INFO.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  const g = cityGuide(c);
  return { title: g.title, description: g.description, alternates: { canonical: `/us-cpa-in/${c.slug}` } };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();
  return (
    <GuideView
      guide={cityGuide(c)}
      path={`/us-cpa-in/${c.slug}`}
      crumbs={[{ name: "CPA exam centres in India", href: "/cpa-exam-centres-india" }]}
    />
  );
}
