import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import { registerSchema } from '@/ts/form-schemas/form-schemas';
import { hash } from 'bcrypt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = registerSchema.parse(body);

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
