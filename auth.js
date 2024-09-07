import NextAuth from "next-auth";
import google from "next-auth/providers/google";


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
    }
  },
  pages: {
    signIn: "/auth"
  }
})