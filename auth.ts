import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { dbClient } from "./database/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async session({ session, token }) {
      if (token && token.email) {
        const userDbData = await dbClient.users.findUnique({
          where: { email: token.email },
        });

        if (userDbData) {
          const { id } = userDbData;
          session.user.id = id;
        }
      }
      return session;
    },
  },
});
