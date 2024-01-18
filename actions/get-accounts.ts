import prisma from '@/lib/db';
import { Account } from '@/models/account';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { redirect } from 'next/navigation';
import { getOrderByClause } from '@/lib/utils';
import { SearchAccountProps } from '@/ts/interfaces/app_interfaces';

export const getAccounts = async ({
  sort = 'az',
  title,
}: SearchAccountProps): Promise<Account[]> => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return redirect('/sign-in');

  const userId = session?.user?.id;

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
