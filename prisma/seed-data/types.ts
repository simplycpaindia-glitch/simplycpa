export type McqSeed = {
  question: string;
  options: { label: "A" | "B" | "C" | "D"; text: string; isCorrect: boolean; rationale?: string }[];
  explanation: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  questionType: "CONCEPTUAL" | "CALCULATION" | "APPLICATION" | "EXCEPTION" | "EXAM_TRAP" | "FORMULA";
  tags?: string[];
  learningObjective?: string;
};

export type TopicSeed = {
  slug: string;
  title: string;
  shortDescription: string;
  blueprintArea: string;
  blueprintStatus: "CONFIRMED" | "PROVISIONAL";
  difficulty: "EASY" | "MEDIUM" | "HARD";
  estimatedMinutes: number;
  order: number;
  isComingSoon?: boolean;
  studyMaterialHtml?: string;
  revisionNoteHtml?: string;
  mcqs?: McqSeed[];
};

export type SubjectSeed = {
  slug: string;
  name: string;
  shortName: string;
  type: "CORE" | "DISCIPLINE";
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  estimatedHours: number;
  blueprintUrl: string;
  colorAccent?: string;
  order: number;
  topics: TopicSeed[];
};
