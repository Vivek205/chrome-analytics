import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const session = await auth();
  console.log("Session available:", session != null);
  const { pathname } = req.nextUrl;
  console.log("Current pathname:", pathname);
  if (!session && !pathname.startsWith("/login")) {
    console.log("Redirecting to login page because session is not available and pathname does not start with /login");
    const loginUrl = new URL("/login", req.url);
    console.log("Login URL:", loginUrl);
    // TODO: Add RedirectBackTo functionality to redirect back to the original page after login
    return NextResponse.redirect(loginUrl);
  }

  if (session && pathname.startsWith("/login")) {
    console.log("Redirecting to request Url because session is available and pathname starts with /login");
    const requestUrl = new URL("/", req.url);
    console.log("Request URL:", requestUrl);
    return NextResponse.redirect(requestUrl);
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
