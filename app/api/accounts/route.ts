import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import { accountSchema } from '@/ts/form-schemas/form-schemas';
import { auth } from '@clerk/nextjs';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { userId } = auth();

    if (!userId)
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );

    const accounts = await prisma.account.findMany({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json(accounts, { status: 200 });
  } catch (error) {
    console.log('[GET_ACCOUNTS]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const body = await req.json();
    const { name, color, type, startedBalance } =
      accountSchema.parse(body);

    if (!userId)
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );
    const numBalance = Number(startedBalance * 100);
    const post = await prisma.account.create({
      data: {
        name,
        color,
        type,
        startedBalance: numBalance,
        currentBalance: 0,
        userId: userId,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.log('[POST_ACCOUNT]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
