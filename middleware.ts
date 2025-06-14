// import { auth } from "@/auth";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (req: NextRequest) => {
//   try {
//     const session = await auth();
//     const { pathname, origin } = req.nextUrl;

//     if (!session && !pathname.startsWith("/login")) {
//       // TODO: Add RedirectBackTo functionality to redirect back to the original page after login
//       const url = req.nextUrl.clone();
//       url.pathname = "/login";
//       return NextResponse.redirect(url);
//     }

//     if (session && pathname.startsWith("/login")) {
//       const homeUrl = req.nextUrl.clone();
//       homeUrl.pathname = "/";
//       homeUrl.search = ""; // Clear any search params
//       return NextResponse.redirect(homeUrl);
//     }

//     return NextResponse.next();
//   } catch (error: any) {
//     console.error("Middleware error:", error);
//     return new NextResponse(`Middleware error: ${error.message}`, {
//       status: 500,
//       headers: { "Content-Type": "text/plain" },
//     });
//   }
// };

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";
import { auth } from "./auth";
export default auth((req) => {
  // req.auth
  return new NextResponse(
    `Authenticated request: ${JSON.stringify(req.auth)}`,
    {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    }
  );
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
