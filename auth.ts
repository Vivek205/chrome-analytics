import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
import Google from "next-auth/providers/google";

// *DO NOT* create a `Pool` here, outside the request handler.

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  // Create a `Pool` inside the request handler.
  const pool = new Pool({ connectionString: process.env.NEXT_PUBLIC_DATABASE_URL });
  return {
    adapter: NeonAdapter(pool),
    providers: [Google({ allowDangerousEmailAccountLinking: true })],
    // debug: true,
  };
});
