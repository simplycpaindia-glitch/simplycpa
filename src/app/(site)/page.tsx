import { Hero } from "@/components/home/Hero";
import { CoreDisciplineExplainer } from "@/components/home/CoreDisciplineExplainer";
import { SubjectGrid } from "@/components/home/SubjectGrid";
import { QuestionOfTheDay } from "@/components/home/QuestionOfTheDay";
import { WhyCpa } from "@/components/home/WhyCpa";
import { IndianCandidatesTeaser } from "@/components/home/IndianCandidatesTeaser";
import { StudySystem } from "@/components/home/StudySystem";
import { BlogAndRadarPreview } from "@/components/home/BlogAndRadarPreview";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreDisciplineExplainer />
      <SubjectGrid />
      <QuestionOfTheDay />
      <WhyCpa />
      <IndianCandidatesTeaser />
      <StudySystem />
      <BlogAndRadarPreview />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
