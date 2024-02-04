'use server';

import * as z from 'zod';
import { signIn } from '@/auth';
import { getUserByEmail } from '@/data/user';
import { AuthError } from 'next-auth';
import { LoginSchema } from '@/ts/form-schemas/form-schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null,
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (
    !existingUser ||
    !existingUser.email ||
    !existingUser.password
  ) {
    return { error: 'Invalid credentials!' };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });

    return { success: 'Logged in!' };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' };
        default:
          return { error: 'Unknown error!' };
      }
    }

    throw error;
  }
};
