import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const session = await auth();
  const { pathname, origin } = req.nextUrl;

  if (!session && !pathname.startsWith("/login")) {
    // TODO: Add RedirectBackTo functionality to redirect back to the original page after login
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (session && pathname.startsWith("/login")) {
    const homeUrl = req.nextUrl.clone();
    homeUrl.pathname = "/";
    homeUrl.search = ""; // Clear any search params
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
