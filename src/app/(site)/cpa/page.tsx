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
      <div className="border-b border-ink-950/10 bg-paper-100 py-14">
        <Container>
          <SectionHeading
            eyebrow="CPA Exam"
            title="Every section, in one place"
            description="Three Core sections everyone takes, and one Discipline you choose. Pick a subject below to start studying."
          />
        </Container>
      </div>
      <CoreDisciplineExplainer />
      <SubjectGrid />
    </>
  );
}
