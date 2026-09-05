"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

/**
 * Server-side answer check. Correct answers are never sent to the client
 * until this action runs (i.e. after the student has already chosen an
 * option), so the initial page HTML/RSC payload never carries them.
 */
export async function submitMcqAnswer(input: {
  mcqId: string;
  selectedOptionId: string;
  sessionId?: string;
  timeSpentSeconds?: number;
}) {
  const options = await prisma.mCQOption.findMany({
    where: { mcqId: input.mcqId },
    select: { id: true, label: true, isCorrect: true, rationale: true },
  });

  const selected = options.find((o) => o.id === input.selectedOptionId);
  const correctOption = options.find((o) => o.isCorrect);
  const isCorrect = !!selected?.isCorrect;

  const session = await auth();
  if (session?.user) {
    await prisma.mCQAttempt.create({
      data: {
        userId: session.user.id,
        mcqId: input.mcqId,
        sessionId: input.sessionId,
        selectedOptionId: input.selectedOptionId,
        isCorrect,
        timeSpentSeconds: input.timeSpentSeconds,
      },
    });
  }

  return {
    isCorrect,
    correctOptionId: correctOption?.id ?? null,
    options: options.map((o) => ({
      id: o.id,
      isCorrect: o.isCorrect,
      rationale: o.rationale,
    })),
  };
}

/**
 * Grades a full practice set in one round trip. Like submitMcqAnswer, no
 * correct-answer data leaves the server until this is called — the practice
 * UI only ever holds question text and option text/labels until submission.
 */
export async function submitMcqBatch(input: {
  topicId?: string;
  mode: "TOPIC" | "SUBJECT" | "CUSTOM" | "MOCK" | "INCORRECT_REVIEW" | "BOOKMARKED" | "TIMED";
  answers: { mcqId: string; selectedOptionId: string | null; timeSpentSeconds?: number }[];
}) {
  const mcqIds = input.answers.map((a) => a.mcqId);
  const options = await prisma.mCQOption.findMany({
    where: { mcqId: { in: mcqIds } },
    select: { id: true, mcqId: true, label: true, isCorrect: true, rationale: true },
  });
  const mcqs = await prisma.mCQ.findMany({
    where: { id: { in: mcqIds } },
    select: { id: true, explanation: true },
  });

  const optionsByMcq = new Map<string, typeof options>();
  for (const opt of options) {
    const list = optionsByMcq.get(opt.mcqId) ?? [];
    list.push(opt);
    optionsByMcq.set(opt.mcqId, list);
  }

  const graded = input.answers.map((a) => {
    const opts = optionsByMcq.get(a.mcqId) ?? [];
    const correctOption = opts.find((o) => o.isCorrect);
    const isCorrect = a.selectedOptionId != null && correctOption?.id === a.selectedOptionId;
    return {
      mcqId: a.mcqId,
      selectedOptionId: a.selectedOptionId,
      correctOptionId: correctOption?.id ?? null,
      isCorrect,
      explanation: mcqs.find((m) => m.id === a.mcqId)?.explanation ?? "",
      options: opts.map((o) => ({ id: o.id, isCorrect: o.isCorrect, rationale: o.rationale })),
    };
  });

  const score = graded.filter((g) => g.isCorrect).length;

  const session = await auth();
  if (session?.user) {
    const practiceSession = await prisma.practiceSession.create({
      data: {
        userId: session.user.id,
        topicId: input.topicId,
        mode: input.mode,
        totalQuestions: input.answers.length,
        score,
        completedAt: new Date(),
      },
    });

    await prisma.mCQAttempt.createMany({
      data: input.answers.map((a) => ({
        userId: session.user.id,
        mcqId: a.mcqId,
        sessionId: practiceSession.id,
        selectedOptionId: a.selectedOptionId,
        isCorrect: graded.find((g) => g.mcqId === a.mcqId)?.isCorrect ?? false,
        timeSpentSeconds: a.timeSpentSeconds,
      })),
    });

    if (input.topicId) {
      await prisma.userProgress.upsert({
        where: { userId_topicId: { userId: session.user.id, topicId: input.topicId } },
        create: {
          userId: session.user.id,
          topicId: input.topicId,
          status: "IN_PROGRESS",
        },
        update: { status: "IN_PROGRESS" },
      });
    }
  }

  return { score, total: input.answers.length, results: graded };
}

export async function toggleBookmark(input: {
  targetType: "TOPIC" | "STUDY_MATERIAL" | "REVISION_NOTE" | "MCQ" | "BLOG_POST";
  targetId: string;
}) {
  const session = await auth();
  if (!session?.user) return { bookmarked: false, requiresAuth: true };

  const existing = await prisma.bookmark.findUnique({
    where: {
      userId_targetType_targetId: {
        userId: session.user.id,
        targetType: input.targetType,
        targetId: input.targetId,
      },
    },
  });

  if (existing) {
    await prisma.bookmark.delete({ where: { id: existing.id } });
    return { bookmarked: false, requiresAuth: false };
  }

  await prisma.bookmark.create({
    data: {
      userId: session.user.id,
      targetType: input.targetType,
      targetId: input.targetId,
    },
  });
  return { bookmarked: true, requiresAuth: false };
}
