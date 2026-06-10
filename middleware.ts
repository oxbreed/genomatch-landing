import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Query keys that must never appear in shareable URLs (ZAP sensitive-URL finding). */
const SENSITIVE_QUERY_KEYS = new Set([
  "email",
  "password",
  "passwd",
  "token",
  "access_token",
  "refresh_token",
  "api_key",
  "apikey",
  "secret",
]);

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let stripped = false;

  for (const key of url.searchParams.keys()) {
    if (SENSITIVE_QUERY_KEYS.has(key.toLowerCase())) {
      url.searchParams.delete(key);
      stripped = true;
    }
  }

  if (stripped) {
    return NextResponse.redirect(url, 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
