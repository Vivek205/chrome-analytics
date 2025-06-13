import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const session = await auth();
  console.log("Session:", session);
  const { pathname } = req.nextUrl;
  if (!session && !pathname.startsWith("/login")) {
    // TODO: Add RedirectBackTo functionality to redirect back to the original page after login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (session && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
