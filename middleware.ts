import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const session = await auth();
  const { pathname, origin } = req.nextUrl;

  if (!session && !pathname.startsWith("/login")) {
    const loginUrl = new URL("/login", origin);
    // TODO: Add RedirectBackTo functionality to redirect back to the original page after login
    return NextResponse.redirect(loginUrl);
  }

  if (session && pathname.startsWith("/login")) {
    const requestUrl = new URL("/", origin);
    return NextResponse.redirect(requestUrl);
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
