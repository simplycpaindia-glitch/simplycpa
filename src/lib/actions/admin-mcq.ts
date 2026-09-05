"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireStaff } from "@/lib/dal";

type OptionInput = { label: string; text: string; isCorrect: boolean; rationale?: string };

function readOptionsFromForm(formData: FormData): OptionInput[] {
  const labels = ["A", "B", "C", "D"];
  const correctLabel = String(formData.get("correctAnswer"));
  return labels.map((label) => ({
    label,
    text: String(formData.get(`option${label}`) ?? ""),
    isCorrect: label === correctLabel,
    rationale: String(formData.get(`rationale${label}`) ?? "") || undefined,
  }));
}

export type McqFormState = { error?: string } | undefined;

export async function createMcq(
  _prevState: McqFormState,
  formData: FormData
): Promise<McqFormState> {
  const user = await requireStaff();
  const topicId = String(formData.get("topicId"));
  const options = readOptionsFromForm(formData);

  if (!options.some((o) => o.isCorrect) || options.some((o) => !o.text.trim())) {
    return { error: "All four options are required, and exactly one must be marked correct." };
  }

  const mcq = await prisma.mCQ.create({
    data: {
      topicId,
      question: String(formData.get("question")),
      explanation: String(formData.get("explanation") ?? ""),
      learningObjective: (formData.get("learningObjective") as string) || null,
      difficulty: formData.get("difficulty") as never,
      questionType: formData.get("questionType") as never,
      tags: String(formData.get("tags") ?? "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      status: (formData.get("status") as string as never) ?? "DRAFT",
      options: { create: options },
    },
  });

  await prisma.auditLog.create({
    data: { userId: user.id, action: "create", entityType: "MCQ", entityId: mcq.id },
  });

  revalidatePath("/admin/mcqs");
  redirect(`/admin/mcqs/${mcq.id}`);
}

export async function updateMcq(
  id: string,
  _prevState: McqFormState,
  formData: FormData
): Promise<McqFormState> {
  const user = await requireStaff();
  const options = readOptionsFromForm(formData);

  if (!options.some((o) => o.isCorrect) || options.some((o) => !o.text.trim())) {
    return { error: "All four options are required, and exactly one must be marked correct." };
  }

  const existingOptions = await prisma.mCQOption.findMany({ where: { mcqId: id } });

  await prisma.$transaction([
    prisma.mCQ.update({
      where: { id },
      data: {
        question: String(formData.get("question")),
        explanation: String(formData.get("explanation") ?? ""),
        learningObjective: (formData.get("learningObjective") as string) || null,
        difficulty: formData.get("difficulty") as never,
        questionType: formData.get("questionType") as never,
        tags: String(formData.get("tags") ?? "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        status: formData.get("status") as never,
      },
    }),
    ...existingOptions.map((existing, i) =>
      prisma.mCQOption.update({
        where: { id: existing.id },
        data: options[i],
      })
    ),
  ]);

  await prisma.auditLog.create({
    data: { userId: user.id, action: "update", entityType: "MCQ", entityId: id },
  });

  revalidatePath("/admin/mcqs");
  revalidatePath(`/admin/mcqs/${id}`);
}

export async function deleteMcq(id: string) {
  const user = await requireStaff();
  await prisma.mCQ.delete({ where: { id } });
  await prisma.auditLog.create({
    data: { userId: user.id, action: "delete", entityType: "MCQ", entityId: id },
  });
  revalidatePath("/admin/mcqs");
  redirect("/admin/mcqs");
}

/**
 * Bulk import from CSV. Expected columns (header row required):
 * Subject,Topic,Question,Option A,Option B,Option C,Option D,Correct Answer,Explanation,Difficulty,Source,Tags
 * "Topic" must match an existing topic title exactly (case-insensitive) within the given subject slug.
 */
export type BulkImportState =
  | { error?: string; imported: number; skipped: number; skippedRows?: number[] }
  | undefined;

export async function bulkImportMcqs(
  _prevState: BulkImportState,
  formData: FormData
): Promise<BulkImportState> {
  const user = await requireStaff();
  const file = formData.get("file");
  if (!(file instanceof File)) return { error: "No file uploaded.", imported: 0, skipped: 0 };

  const text = await file.text();
  const rows = parseCsv(text);
  if (rows.length < 2) return { error: "CSV appears empty.", imported: 0, skipped: 0 };

  const header = rows[0].map((h) => h.trim().toLowerCase());
  const col = (name: string) => header.indexOf(name);

  const topics = await prisma.topic.findMany({ include: { subject: true } });
  const topicByKey = new Map(
    topics.map((t) => [`${t.subject.slug}::${t.title.toLowerCase()}`, t])
  );

  let imported = 0;
  const skippedRows: number[] = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < 2) continue;
    const subjectSlug = row[col("subject")]?.trim().toLowerCase();
    const topicTitle = row[col("topic")]?.trim().toLowerCase();
    const topic = topicByKey.get(`${subjectSlug}::${topicTitle}`);
    const correctLabel = row[col("correct answer")]?.trim().toUpperCase();
    const optionTexts = ["option a", "option b", "option c", "option d"].map((c) => row[col(c)]?.trim() ?? "");

    if (!topic || !["A", "B", "C", "D"].includes(correctLabel) || optionTexts.some((t) => !t)) {
      skippedRows.push(i + 1);
      continue;
    }

    await prisma.mCQ.create({
      data: {
        topicId: topic.id,
        question: row[col("question")]?.trim() ?? "",
        explanation: row[col("explanation")]?.trim() ?? "",
        difficulty: (["EASY", "MEDIUM", "HARD"].includes(row[col("difficulty")]?.trim().toUpperCase())
          ? row[col("difficulty")].trim().toUpperCase()
          : "MEDIUM") as never,
        tags: (row[col("tags")] ?? "").split(";").map((t) => t.trim()).filter(Boolean),
        status: "DRAFT",
        options: {
          create: ["A", "B", "C", "D"].map((label, idx) => ({
            label,
            text: optionTexts[idx],
            isCorrect: label === correctLabel,
          })),
        },
      },
    });
    imported++;
  }

  await prisma.auditLog.create({
    data: { userId: user.id, action: "bulk_import", entityType: "MCQ", entityId: "csv", metadata: { imported, skipped: skippedRows } },
  });

  revalidatePath("/admin/mcqs");
  return { imported, skipped: skippedRows.length, skippedRows };
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (inQuotes) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      if (row.some((f) => f.trim() !== "")) rows.push(row);
      row = [];
    } else {
      field += char;
    }
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}
