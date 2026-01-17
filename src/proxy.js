import { NextResponse } from "next/server";

export function proxy(request) {
  const isLoggedIn = request.cookies.get("auth")?.value === "true";

  // Not logged in → block
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Logged in → allow
  return NextResponse.next();
}

export const config = {
  matcher: "/add-item",
};
