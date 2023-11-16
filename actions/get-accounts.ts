import prisma from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { GetAccounts } from '@/ts/types/app_types';
import { getOrderByClause } from '@/lib/utils';

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
