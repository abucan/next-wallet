import { authOptions } from '@/lib/auth';
import prisma from '@/lib/db';
import { recordSchema } from '@/ts/form-schemas/form-schemas';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { recordId: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session)
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );

    const record = await prisma.record.findUnique({
      where: {
        id: params.recordId,
        userId: session?.user?.id,
      },
      select: {
        id: true,
        accountId: true,
        userId: true,
        recordType: true,
        amount: true,
        category: true,
        accountName: true,
        createdAt: true,
      },
    });

    return NextResponse.json(record, { status: 200 });
  } catch (error) {
    console.log('[GET_RECORD]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { recordId: string } },
) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const { amount, recordType, category, accountId, createdAt } =
      recordSchema.parse(body);

    const { recordId } = params;

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );
    }

    const accountExists = await prisma.account.findUnique({
      where: {
        id: accountId,
        userId: session.user.id,
      },
      select: {
        type: true,
      },
    });

    if (!accountExists) {
      return NextResponse.json(
        { message: 'Unauthorized Account' },
        { status: 401 },
      );
    }

    const recordExits = await prisma.record.findUnique({
      where: {
        id: recordId,
        userId: session.user.id,
      },
      select: {
        amount: true,
        accountId: true,
      },
    });

    if (!recordExits) {
      return NextResponse.json(
        { message: 'Unauthorized Record' },
        { status: 401 },
      );
    }

    const newAmount =
      amount !== recordExits.amount
        ? amount - recordExits.amount
        : amount;

    const patchedRecord = await prisma.$transaction([
      prisma.record.update({
        where: {
          id: recordId,
          userId: session?.user?.id,
        },
        data: {
          accountId,
          recordType,
          amount,
          category,
          createdAt: new Date(createdAt),
          accountName: accountExists.type,
        },
      }),
      prisma.account.update({
        where: {
          id: accountId,
          userId: session?.user?.id,
        },
        data: {
          balance: {
            [recordType === 'INCOME' ? 'increment' : 'decrement']:
              newAmount,
          },
        },
      }),
    ]);

    return NextResponse.json(patchedRecord, { status: 200 });
  } catch (error) {
    console.log('[RECORD_ID_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { recordId: string } },
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );
    }

    const recordExits = await prisma.record.findUnique({
      where: {
        id: params.recordId,
        userId: session.user.id,
      },
      select: {
        amount: true,
        accountId: true,
        recordType: true,
      },
    });

    if (!recordExits) {
      return NextResponse.json(
        { message: 'Unauthorized Record' },
        { status: 401 },
      );
    }

    const accountExists = await prisma.account.findUnique({
      where: {
        id: recordExits.accountId,
        userId: session.user.id,
      },
      select: {
        balance: true,
      },
    });

    if (!accountExists) {
      return NextResponse.json(
        { message: 'Unauthorized Account' },
        { status: 401 },
      );
    }

    const deletedRecordAndUpdatedAccount = await prisma.$transaction([
      prisma.account.update({
        where: {
          id: recordExits.accountId,
          userId: session.user.id,
        },
        data: {
          balance: {
            [recordExits.recordType === 'INCOME'
              ? 'decrement'
              : 'increment']: recordExits.amount,
          },
        },
      }),
      prisma.record.delete({
        where: {
          id: params.recordId,
          userId: session.user.id,
        },
      }),
    ]);

    return NextResponse.json(deletedRecordAndUpdatedAccount, {
      status: 200,
    });
  } catch (error) {
    console.log('[ACCOUNT_ID_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
