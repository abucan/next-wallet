import prisma from '@/lib/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import * as z from 'zod';

// form schema
const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Name is too short' })
    .max(20, 'Username is too long'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email address' }),
  password: z.string().min(1, 'Password is required').min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);

    const { email, username, password } = formSchema.parse(body);

    // check if email exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: 'User with this email already exists.',
        },
        { status: 409 },
      );
    }
    // check if username exists
    const existingUserByUsername = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: 'User with this username already exists.',
        },
        { status: 409 },
      );
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    const { password: noUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: 'User created successfully.' },
      { status: 201 },
    );
  } catch (error) {
    return new NextResponse('Something went wrong.', {
      status: 500,
    });
  }
}
