import prisma from '@/lib/db';
import { recordSchema } from '@/ts/form-schemas/form-schemas';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { recordId: string } },
) {
  try {
    const { userId } = auth();

    if (!userId)
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );

    const record = await prisma.record.findUnique({
      where: {
        id: params.recordId,
        userId: userId,
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
    const { userId } = auth();
    const body = await req.json();
    const { amount, recordType, category, accountId, createdAt } =
      recordSchema.parse(body);

    const { recordId } = params;

    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );
    }

    const accountExists = await prisma.account.findUnique({
      where: {
        id: accountId,
        userId: userId,
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
        userId: userId,
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

    const convertedAmount = Number(amount * 100);
    var realAmount = convertedAmount;

    if (
      convertedAmount !== recordExits.amount &&
      recordType === recordExits.recordType
    ) {
      realAmount = convertedAmount - recordExits.amount;
    } else if (recordType !== recordExits.recordType) {
      realAmount =
        convertedAmount - recordExits.amount + recordExits.amount * 2;
    }

    // if(recordType !== recordExits.recordType && convertedAmount !== recordExits.amount) {

    // }

    // const newAmount =
    //   convertedAmount !== recordExits.amount
    //     ? convertedAmount - recordExits.amount
    //     : convertedAmount;

    // const changedType =
    //   recordType !== recordExits.recordType && convertedAmount * 2;

    const patchedRecord = await prisma.$transaction([
      prisma.record.update({
        where: {
          id: recordId,
          userId: userId,
        },
        data: {
          accountId,
          recordType,
          amount: convertedAmount,
          category,
          createdAt: new Date(createdAt),
          accountName: accountExists.type,
        },
      }),
      prisma.account.update({
        where: {
          id: accountId,
          userId: userId,
        },
        data: {
          currentBalance: {
            [recordType === 'INCOME' ? 'increment' : 'decrement']:
              realAmount,
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
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );
    }

    const recordExits = await prisma.record.findUnique({
      where: {
        id: params.recordId,
        userId: userId,
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
        userId: userId,
      },
      select: {
        currentBalance: true,
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
          userId: userId,
        },
        data: {
          currentBalance: {
            [recordExits.recordType === 'INCOME'
              ? 'decrement'
              : 'increment']: recordExits.amount,
          },
        },
      }),
      prisma.record.delete({
        where: {
          id: params.recordId,
          userId: userId,
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
