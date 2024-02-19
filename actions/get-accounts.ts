import prisma from '@/lib/db';
import { Account } from '@/models/account';
import { getOrderByClause } from '@/lib/utils';
import { SearchAccountProps } from '@/ts/interfaces/app_interfaces';
import { auth } from '@/auth';

export const getAccounts = async ({
  sort = 'az',
  title,
}: SearchAccountProps): Promise<Account[]> => {
  const session = await auth();

  if (!session?.user.id) return [];

  try {
    const accounts = await prisma.myAccount.findMany({
      where: {
        userId: session.user.id,
        name: {
          contains: title?.toLowerCase(),
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
