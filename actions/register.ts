'use server';

// import { getUserByEmail } from '@/data/user';
import prisma from '@/lib/db';
// import { sendVerificationEmail } from '@/lib/mail';
// import { generateVerificationToken } from '@/lib/tokens';
// import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcrypt';
import * as z from 'zod';

export const register = async (values: any) => {
  const validatedFields = values;

  // if (!validatedFields.success) {
  //   return { error: 'Invalid fields!' };
  // }

  const { email, password, name } = validatedFields;
  const hashedPassword = await bcrypt.hash(password, 10);

  // check if email is not already taken
  //   const existingUser = await getUserByEmail(email);

  //   if (existingUser) {
  //     return { error: 'Email already taken!' };
  //   }

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  //   const verificationToken = await generateVerificationToken(email);

  //   await sendVerificationEmail(
  //     verificationToken.email,
  //     verificationToken.token,
  //   );

  return { success: 'Confirmation email sent!' };
};
