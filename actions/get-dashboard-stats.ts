import prisma from '@/lib/db';
import { auth } from '@/auth';
import { RecordType } from '@prisma/client';
import {
  BarDataItem,
  ChartDataItem,
  FinancialData,
} from '@/ts/interfaces/app_interfaces';

export const getFinancialData = async (): Promise<FinancialData> => {
  const session = await auth();

  if (!session?.user.id) return {} as FinancialData;

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

    const totalExpenses = await prisma.record.count({
      where: {
        userId: session.user.id,
        recordType: RecordType.EXPENSE,
      },
    });

    const totalBalance = await prisma.myAccount.findMany({
      select: {
        currentBalance: true,
        startedBalance: true,
      },
      where: {
        userId: session.user.id,
      },
    });

    const cashFlow = await prisma.record.aggregate({
      where: {
        userId: session.user.id,
      },
      _sum: {
        amount: true,
      },
    });

    const incomeTotal = await prisma.record.aggregate({
      where: {
        userId: session.user.id,
        recordType: RecordType.INCOME,
      },
      _sum: {
        amount: true,
      },
    });

    const expensesTotal = await prisma.record.aggregate({
      where: {
        userId: session.user.id,
        recordType: RecordType.EXPENSE,
      },
      _sum: {
        amount: true,
      },
    });

    const incomePrec =
      (incomeTotal?._sum.amount ?? 0) / (cashFlow?._sum.amount ?? 1);
    const expensesPrec =
      (expensesTotal?._sum.amount ?? 0) / (cashFlow?._sum.amount ?? 1);

    const income = incomeTotal?._sum.amount ?? 0;
    const expenses = expensesTotal?._sum.amount ?? 0;

    return {
      totalRecords: totalRecords,
      totalAccounts: totalAccounts,
      totalExpenses: totalExpenses,
      totalBalance: totalBalance.reduce(
        (acc, record) => acc + (record.currentBalance + record.startedBalance),
        0
      ),
      cashFlow: {
        totalCashFlow: cashFlow._sum.amount ?? 0,
        income: income,
        expenses: expenses,
        incomePrec: incomePrec * 100,
        expensesPrec: expensesPrec * 100,
      },
    };
  } catch (error) {
    console.error('[GET_FINANCIAL_DATA]', error);
    return {} as FinancialData;
  }
};

export const getExpenses = async (): Promise<ChartDataItem[]> => {
  const session = await auth();

  if (!session?.user.id) return [];

  try {
    const groupRecords = await prisma.record.groupBy({
      by: ['createdAt'],
      where: {
        userId: session.user.id,
        recordType: RecordType.EXPENSE,
      },
      _sum: {
        amount: true,
      },
    });
    return groupRecords as ChartDataItem[];
  } catch (error) {
    console.error('[GET_GRAPH_DATA]', error);
    return [];
  }
};

export const getExpensesByCategory = async (): Promise<BarDataItem[]> => {
  const session = await auth();

  if (!session?.user.id) return [];

  try {
    const groupRecords = await prisma.record.groupBy({
      by: ['category'],
      where: {
        userId: session.user.id,
        recordType: RecordType.EXPENSE,
      },
      _sum: {
        amount: true,
      },
    });
    return groupRecords as BarDataItem[];
  } catch (error) {
    console.error('[GET_GRAPH_DATA]', error);
    return [];
  }
};
