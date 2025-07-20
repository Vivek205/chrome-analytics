import { NextResponse } from "next/server";
import { auth } from "./auth";
export default auth((req) => {
  try {
    const session = req.auth;
    const { pathname } = req.nextUrl;
    const currentUrl = req.nextUrl.clone();

    if (!session && !pathname.startsWith("/login")) {
      // TODO: Add RedirectBackTo functionality to redirect back to the original page after login

      currentUrl.pathname = "/login";
      return NextResponse.redirect(currentUrl);
    }

    if (session && pathname.startsWith("/login")) {
      currentUrl.pathname = "/";
      currentUrl.search = ""; // Clear any search params
      return NextResponse.redirect(currentUrl);
    }

    return NextResponse.next();
  } catch (error: any) {
    console.error("Middleware error:", error);
    return new NextResponse(`Middleware error: ${error.message}`, {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  runtime: "nodejs",
};
