import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { recordSchema } from '@/ts/form-schemas/form-schemas';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    const body = await req.json();
    const { accountId, recordType, amount, category, createdAt } =
      recordSchema.parse(body);

    if (!session)
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );

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
        { message: 'Unauthorized' },
        { status: 401 },
      );
    }

    const numAmount = Number(amount * 100);
    const newRecord = await prisma.$transaction([
      prisma.record.create({
        data: {
          accountId: accountId,
          recordType: recordType,
          amount: numAmount,
          category: category,
          userId: session.user.id,
          createdAt: new Date(createdAt),
          accountName: accountExists.type,
        },
      }),
      prisma.account.update({
        where: {
          id: accountId,
        },
        data: {
          balance: {
            [recordType === 'INCOME' ? 'increment' : 'decrement']:
              numAmount,
          },
        },
      }),
    ]);

    return NextResponse.json(newRecord, { status: 201 });
  } catch (error) {
    console.log('[POST_RECORD]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
