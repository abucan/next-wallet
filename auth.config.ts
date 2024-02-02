import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import type { NextAuthConfig } from 'next-auth';

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
