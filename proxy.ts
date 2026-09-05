import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

const STAFF_ROLES = ["ADMIN", "EDITOR", "MODERATOR"];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;

  if (pathname.startsWith("/admin")) {
    if (!isLoggedIn || !role || !STAFF_ROLES.includes(role)) {
      const loginUrl = new URL("/login", req.nextUrl);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (pathname.startsWith("/dashboard")) {
    if (!isLoggedIn) {
      const loginUrl = new URL("/login", req.nextUrl);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
});

// Optimistic checks only — every admin/dashboard route also re-verifies the
// session and role server-side (see src/lib/dal.ts) since proxy runs on
// prefetches too and must stay cheap.
export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
