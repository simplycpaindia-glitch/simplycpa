"use client";

import { useTransition } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { markStudyComplete, markRevisionComplete } from "@/lib/actions/progress";

export function MarkCompleteButton({
  isComplete,
  topicId,
  path,
  kind,
  label = "Mark as complete",
}: {
  isComplete: boolean;
  topicId: string;
  path: string;
  kind: "study" | "revision";
  label?: string;
}) {
  const [isPending, startTransition] = useTransition();
  const action = kind === "study" ? markStudyComplete : markRevisionComplete;

  return (
    <Button
      variant={isComplete ? "outline" : "primary"}
      size="sm"
      disabled={isPending || isComplete}
      onClick={() => startTransition(() => { void action(topicId, path); })}
    >
      {isComplete ? <CheckCircle2 className="size-4" /> : <Circle className="size-4" />}
      {isComplete ? "Completed" : isPending ? "Saving…" : label}
    </Button>
  );
}
