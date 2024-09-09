import NextAuth from "next-auth";
import google from "next-auth/providers/google";

import { createUser, getUser } from "./app/_lib/supabase/apiUser";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google(
    {
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    }
  )],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user   //true or false
    },
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getUser(user.email)
        if (!existingUser) await createUser({ name: user.name, email: user.email })
        return true
      } catch (error) {
        return false
      }
    },
    async session({ session, user }) {
      const userId = await getUser(session.user.email)
      session.user.userId = userId.id
      return session;
    }
  },
  pages: {
    signIn: "/auth"
  },

})