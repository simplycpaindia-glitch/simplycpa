import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

const STAFF_ROLES = new Set(["ADMIN", "EDITOR", "MODERATOR"]);

export const getSession = cache(async () => {
  return auth();
});

/** Redirects to /login if there is no session. Use in Server Components/Actions. */
export const requireUser = cache(async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  return session.user;
});

/** Redirects to /login (or /dashboard if logged in but unauthorized) for staff-only areas. */
export const requireStaff = cache(async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  if (!STAFF_ROLES.has(session.user.role)) {
    redirect("/dashboard");
  }
  return session.user;
});

export const requireAdmin = cache(async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  if (session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }
  return session.user;
});
