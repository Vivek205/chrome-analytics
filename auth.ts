import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { dbClient } from "./database/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      let userDbData;
      if (token && token.email) {
        userDbData = await dbClient.users.upsert({
          where: { email: token.email },
          update: {
            name: token.name,
            email: token.email,
            image: token.picture,
          },
          create: {
            name: token.name,
            email: token.email,
            image: token.picture,
          },
        });
      }
      return {
        ...session,
        user: {
          ...session.user,
          id: userDbData?.id,
        },
      };
    },
  },
});
