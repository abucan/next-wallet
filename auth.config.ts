import type { NextAuthConfig } from 'next-auth';
import { getUserByEmail } from './data/user';
import { LoginSchema } from './ts/form-schemas/form-schemas';
import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import bcrypt from 'bcryptjs';

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password,
          );

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
