import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SubjectGrid } from "@/components/home/SubjectGrid";
import { StartHereTeaser } from "@/components/home/StartHereTeaser";
import { QuestionOfTheDay } from "@/components/home/QuestionOfTheDay";
import { RadarPreview } from "@/components/home/RadarPreview";
import { StudySystem } from "@/components/home/StudySystem";
import { QuickSheetsPreview } from "@/components/home/QuickSheetsPreview";
import { IndianCandidatesTeaser } from "@/components/home/IndianCandidatesTeaser";
import { OfficialSourcesStrip } from "@/components/home/OfficialSourcesStrip";
import { FaqPreview } from "@/components/home/FaqPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Tells search engines who publishes the site and what it's called (used for the site name in results).
const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    email: CONTACT_EMAIL,
    publishingPrinciples: `${SITE_URL}/editorial-standards`,
    description:
      "A free US CPA study library: study material, revision notes and practice questions for every exam section, written against official AICPA and NASBA sources.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "SimplyCPA.in",
    url: SITE_URL,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={siteJsonLd} />
      <Hero />
      <SubjectGrid />
      <StartHereTeaser />
      <QuestionOfTheDay />
      <RadarPreview />
      <StudySystem />
      <QuickSheetsPreview />
      <IndianCandidatesTeaser />
      <OfficialSourcesStrip />
      <FaqPreview />
      <BlogPreview />
    </>
  );
}
