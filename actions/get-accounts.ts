import prisma from '@/lib/db';
import { Account } from '@/models/account';
import { getOrderByClause } from '@/lib/utils';
import { SearchAccountProps } from '@/ts/interfaces/app_interfaces';
import { auth } from '@clerk/nextjs';

export const getAccounts = async ({
  sort = 'az',
  title,
}: SearchAccountProps): Promise<Account[]> => {
  const { userId } = auth();

  if (!userId) return [];

  try {
    const accounts = await prisma.account.findMany({
      where: {
        userId: userId,
        name: {
          contains: title,
        },
      },
      select: {
        id: true,
        name: true,
        type: true,
        color: true,
        startedBalance: true,
        currentBalance: true,
      },
      orderBy: getOrderByClause(sort),
    });
    return accounts;
  } catch (error) {
    console.log('[GET_ACCOUNTS]', error);
    return [];
  }
};
