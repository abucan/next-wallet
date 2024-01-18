import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { accountSchema } from '@/ts/form-schemas/form-schemas';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session)
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const accounts = await prisma.account.findMany({
      where: {
        userId: session?.user?.id,
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
    const session = await getServerSession(authOptions);

    const body = await req.json();
    const { name, color, type, startedBalance } = accountSchema.parse(body);

    if (!session)
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    const numBalance = Number(startedBalance * 100);
    const post = await prisma.account.create({
      data: {
        name,
        color,
        type,
        startedBalance: numBalance,
        currentBalance: 0,
        userId: session?.user?.id,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.log('[POST_ACCOUNT]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
