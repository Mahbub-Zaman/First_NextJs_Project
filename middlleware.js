import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect /add-item page
  if (pathname.startsWith("/add-item")) {
    const auth = req.cookies.get("auth")?.value;
    if (auth !== "true") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item"],
};
