"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { markStudyComplete, markRevisionComplete } from "@/lib/actions/progress";

export function MarkCompleteButton({
  isComplete,
  isLoggedIn,
  topicId,
  path,
  kind,
}: {
  isComplete: boolean;
  isLoggedIn: boolean;
  topicId: string;
  path: string;
  kind: "study" | "revision";
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const action = kind === "study" ? markStudyComplete : markRevisionComplete;
  const label = kind === "study" ? "Mark as studied" : "Mark as revised";
  const loginHref = `/login?callbackUrl=${encodeURIComponent(path)}`;

  // Signed-out readers can read everything; progress tracking is what needs an account.
  if (!isLoggedIn) {
    return (
      <Button href={loginHref} variant="outline" size="sm">
        <Circle className="size-4" />
        Sign in to track your progress
      </Button>
    );
  }

  return (
    <Button
      variant={isComplete ? "outline" : "primary"}
      size="sm"
      disabled={isPending || isComplete}
      onClick={() =>
        startTransition(async () => {
          const res = await action(topicId, path);
          if (res && "requiresAuth" in res && res.requiresAuth) router.push(loginHref);
        })
      }
    >
      {isComplete ? <CheckCircle2 className="size-4" /> : <Circle className="size-4" />}
      {isComplete ? (kind === "study" ? "Studied" : "Revised") : isPending ? "Saving…" : label}
    </Button>
  );
}
