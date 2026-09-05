import { CsvImportForm } from "@/components/admin/CsvImportForm";

export default function BulkImportMcqPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-medium mb-2">Bulk import MCQs</h1>
      <p className="text-sm text-ink-400 mb-6 max-w-xl">
        CSV with a header row containing: <code>Subject, Topic, Question, Option A, Option B,
        Option C, Option D, Correct Answer, Explanation, Difficulty, Tags</code>. &ldquo;Subject&rdquo;
        must be a subject slug (e.g. <code>far</code>) and &ldquo;Topic&rdquo; must exactly match an
        existing topic title. Tags are semicolon-separated. Imported questions land as{" "}
        <strong>Draft</strong> — review and publish them from the MCQ list.
      </p>
      <CsvImportForm />
    </div>
  );
}
