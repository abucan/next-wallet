import prisma from '@/lib/db';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { GetAccounts } from '@/ts/types/app_types';
import { redirect } from 'next/navigation';

type SortOrder = 'asc' | 'desc';

type AccountOrderBy = {
  name?: SortOrder;
  createdAt?: SortOrder;
  balance?: SortOrder;
};

// move to utils
const getOrderByClause = (sorting: string): AccountOrderBy => {
  console.log('[GET_ORDER_BY_CLAUSE]', sorting);

  switch (sorting) {
    case 'az':
      return { name: 'asc' };
    case 'za':
      return { name: 'desc' };
    case 'newest':
      return { createdAt: 'desc' };
    case 'oldest':
      return { createdAt: 'asc' };
    case 'highest':
      return { balance: 'desc' };
    case 'lowest':
      return { balance: 'asc' };
    default:
      return {}; // Default sorting or handle invalid sorting options
  }
};

interface GetAccountsProps {
  sort: string;
  title?: string;
}

export const getAccounts = async ({
  sort,
  title,
}: GetAccountsProps): Promise<GetAccounts[]> => {
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
        color: true,
        type: true,
        balance: true,
      },
      orderBy: getOrderByClause(sort),
    });
    return accounts;
  } catch (error) {
    console.log('[GET_ACCOUNTS]', error);
    return [];
  }
};
