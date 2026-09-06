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

export default function HomePage() {
  return (
    <>
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
