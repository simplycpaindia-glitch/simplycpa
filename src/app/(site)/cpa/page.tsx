import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/Container";
import { CoreDisciplineExplainer } from "@/components/home/CoreDisciplineExplainer";
import { SubjectGrid } from "@/components/home/SubjectGrid";

export const metadata: Metadata = {
  title: "CPA Exam Sections",
  description:
    "FAR, AUD, REG, and the BAR/ISC/TCP Discipline choice — explore every US CPA Exam section.",
};

export default function CpaIndexPage() {
  return (
    <>
      <div className="bg-ink-950 text-paper-50 py-16">
        <Container>
          <SectionHeading
            eyebrow="CPA Exam"
            title="Every section, in one place"
            description="Three Core sections everyone takes, and one Discipline you choose. Pick a subject below to start studying."
            className="[&_h2]:text-paper-50 [&_p]:text-paper-50/70"
          />
        </Container>
      </div>
      <CoreDisciplineExplainer />
      <SubjectGrid />
    </>
  );
}
