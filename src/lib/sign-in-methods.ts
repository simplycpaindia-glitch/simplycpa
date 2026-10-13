import "server-only";
import { isGoogleConfigured } from "@/lib/auth";
import { isEmailConfigured } from "@/lib/email";

/**
 * Which passwordless sign-in methods actually work in this deployment. The UI only
 * offers what's configured, so deploying before the Google/Resend keys are added never
 * shows a sign-in option that would fail.
 */
export function getSignInMethods() {
  return {
    google: isGoogleConfigured,
    // In development, codes are printed to the server log, so the flow is testable.
    emailCode: isEmailConfigured() || process.env.NODE_ENV !== "production",
  };
}
