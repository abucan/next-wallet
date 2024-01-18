import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import { accountSchema } from '@/ts/form-schemas/form-schemas';

export async function GET(
  req: Request,
  { params }: { params: { accountId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session)
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const account = await prisma.account.findUnique({
      where: {
        id: params.accountId,
        userId: session?.user?.id,
      },
    });

    if (!account) {
      return NextResponse.json(
        { message: 'Account not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(account, { status: 201 });
  } catch (error) {
    console.log('[GET_ACCOUNT]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { accountId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const account = await prisma.account.findUnique({
      where: {
        id: params.accountId,
        userId: session?.user?.id,
      },
    });

    if (!account) {
      return NextResponse.json(
        { message: 'Account not found' },
        { status: 404 }
      );
    }

    const deleteAccountAndRecords = await prisma.$transaction([
      prisma.record.deleteMany({
        where: {
          accountId: account.id,
          userId: session?.user?.id,
        },
      }),
      prisma.account.delete({
        where: {
          id: params.accountId,
          userId: session?.user?.id,
        },
      }),
    ]);

    return NextResponse.json(deleteAccountAndRecords, {
      status: 200,
    });
  } catch (error) {
    console.log('[ACCOUNT_ID_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { accountId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const { name, color, type, startedBalance } = accountSchema.parse(body);

    const { accountId } = params;

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const newStartedBalance = Number(startedBalance * 100);
    const account = await prisma.account.update({
      where: {
        id: accountId,
        userId: session?.user?.id,
      },
      data: {
        name,
        color,
        type,
        startedBalance: newStartedBalance,
      },
    });

    return NextResponse.json(account, { status: 200 });
  } catch (error) {
    console.log('[ACCOUNT_ID_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
