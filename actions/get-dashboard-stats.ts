import { auth } from '@/auth';
import { Record } from '@/models/record';
import prisma from '@/lib/db';
import { RecordType } from '@prisma/client';

export const getStats = async () => {
  const session = await auth();

  if (!session?.user.id) return [];

  try {
    const totalRecords = await prisma.record.count({
      where: {
        userId: session.user.id,
      },
    });

    const totalAccounts = await prisma.myAccount.count({
      where: {
        userId: session.user.id,
      },
    });

    return {
      totalRecords: totalRecords,
      totalAccounts: totalAccounts,
    };
  } catch (error) {
    console.log('[GET_STATS]', error);
    return [];
  }
};

export const getTotalBalance = async () => {
  const session = await auth();

  if (!session?.user.id) return 0;

  try {
    const total = await prisma.myAccount.findMany({
      select: {
        currentBalance: true,
        startedBalance: true,
      },
      where: {
        userId: session.user.id,
      },
    });

    return total.reduce(
      (acc, record) =>
        acc + (record.currentBalance + record.startedBalance),
      0,
    );
  } catch (error) {
    console.log('[GET_TOTAL_BALANCE]', error);
    return 0;
  }
};

export const getCashFlow = async () => {
  const session = await auth();

  if (!session?.user.id) return [];

  try {
    // calculate total income
    const incomeTotal = await prisma.record.aggregate({
      where: {
        userId: session.user.id,
        recordType: RecordType.INCOME,
      },
      _sum: {
        amount: true,
      },
    });

    // Calculate total expenses
    const expensesTotal = await prisma.record.aggregate({
      where: {
        userId: session.user.id,
        recordType: RecordType.EXPENSE,
      },
      _sum: {
        amount: true,
      },
    });

    const total = await prisma.record.aggregate({
      where: {
        userId: session.user.id,
      },
      _sum: {
        amount: true,
      },
    });

    const income =
      (incomeTotal?._sum.amount ?? 0) / (total?._sum.amount ?? 1);
    const expenses =
      (expensesTotal?._sum.amount ?? 0) / (total?._sum.amount ?? 1);

    return {
      income: income * 100,
      expenses: expenses * 100,
    };
  } catch (error) {
    console.error('Error fetching cash flow:', error);
    return [];
  }
};
