"use client";

import { useActionState } from "react";
import type { McqFormState } from "@/lib/actions/admin-mcq";

type Option = { label: string; text: string; isCorrect: boolean; rationale?: string | null };
type Topic = { id: string; title: string; subject: { shortName: string } };

const DIFFICULTIES = ["EASY", "MEDIUM", "HARD"];
const QUESTION_TYPES = ["CONCEPTUAL", "CALCULATION", "APPLICATION", "EXCEPTION", "EXAM_TRAP", "FORMULA"];
const STATUSES = ["DRAFT", "AI_DRAFT", "UNDER_REVIEW", "APPROVED", "PUBLISHED", "NEEDS_UPDATE", "ARCHIVED"];

export function McqForm({
  serverAction,
  topics,
  defaultTopicId,
  defaultValues,
}: {
  serverAction: (prevState: McqFormState, formData: FormData) => Promise<McqFormState>;
  topics: Topic[];
  defaultTopicId?: string;
  defaultValues?: {
    question: string;
    explanation: string;
    learningObjective?: string | null;
    difficulty: string;
    questionType: string;
    tags: string[];
    status: string;
    options: Option[];
  };
}) {
  const [state, formAction, pending] = useActionState(serverAction, undefined);
  const error = state?.error;
  const options = defaultValues?.options ?? [
    { label: "A", text: "", isCorrect: true },
    { label: "B", text: "", isCorrect: false },
    { label: "C", text: "", isCorrect: false },
    { label: "D", text: "", isCorrect: false },
  ];
  const correctLabel = options.find((o) => o.isCorrect)?.label ?? "A";

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-2xl">
      {error && <p className="text-sm text-signal-red">{error}</p>}

      <div>
        <label className="mb-1.5 block text-sm font-medium">Topic</label>
        <select name="topicId" defaultValue={defaultTopicId} required className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
          <option value="">Select a topic…</option>
          {topics.map((t) => (
            <option key={t.id} value={t.id}>{t.subject.shortName} — {t.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Question</label>
        <textarea name="question" required rows={3} defaultValue={defaultValues?.question} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Options — mark the correct one</p>
        <div className="flex flex-col gap-2">
          {options.map((opt) => (
            <div key={opt.label} className="flex items-start gap-2">
              <label className="mt-2.5 flex items-center gap-1.5 text-sm font-semibold">
                <input type="radio" name="correctAnswer" value={opt.label} defaultChecked={opt.label === correctLabel} required />
                {opt.label}
              </label>
              <div className="flex-1">
                <input
                  name={`option${opt.label}`}
                  defaultValue={opt.text}
                  placeholder={`Option ${opt.label}`}
                  required
                  className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm"
                />
                <input
                  name={`rationale${opt.label}`}
                  defaultValue={opt.rationale ?? ""}
                  placeholder="Why this option is right/wrong (optional, shown after submit)"
                  className="mt-1 w-full rounded-lg border border-ink-950/10 px-3 py-1.5 text-xs"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Explanation (required)</label>
        <textarea name="explanation" required rows={3} defaultValue={defaultValues?.explanation} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Learning objective</label>
        <input name="learningObjective" defaultValue={defaultValues?.learningObjective ?? ""} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Difficulty</label>
          <select name="difficulty" defaultValue={defaultValues?.difficulty ?? "MEDIUM"} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
            {DIFFICULTIES.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Type</label>
          <select name="questionType" defaultValue={defaultValues?.questionType ?? "CONCEPTUAL"} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
            {QUESTION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Status</label>
          <select name="status" defaultValue={defaultValues?.status ?? "DRAFT"} className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm">
            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Tags (comma-separated)</label>
        <input name="tags" defaultValue={defaultValues?.tags.join(", ")} placeholder="conceptual, exam trap" className="w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm" />
      </div>

      <button type="submit" disabled={pending} className="self-start rounded-md bg-ink-950 px-5 py-2.5 text-sm font-medium text-paper-50 disabled:opacity-50">
        {pending ? "Saving…" : "Save MCQ"}
      </button>
    </form>
  );
}
