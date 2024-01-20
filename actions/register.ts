'use server';

import { getUserByEmail } from '@/data/user';
import prisma from '@/lib/db';
import { registerSchema } from '@/ts/form-schemas/form-schemas';
import bcrypt from 'bcryptjs';
import * as z from 'zod';

export const register = async (
  values: z.infer<typeof registerSchema>,
) => {
  const validatedFields = registerSchema.safeParse(values);

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

  return { success: 'Successfully registered!' };
};
