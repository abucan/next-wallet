'use server';

import * as z from 'zod';
import prisma from '@/lib/db';
import bcrypt from 'bcrypt';
import { RegisterSchema } from '@/ts/form-schemas/form-schemas';
import { getUserByEmail } from '@/data/user';

export const register = async (
  values: z.infer<typeof RegisterSchema>,
) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // check if email is not already taken
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already taken!' };
  }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return { success: 'Confirmation email sent!' };
};
