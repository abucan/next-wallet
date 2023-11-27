import prisma from '@/lib/db';
import { Record } from '@/models/record';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const getRecords = async (): Promise<Record[]> => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return redirect('/sign-in');

  const userId = session?.user?.id;

  try {
    const records = await prisma.record.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        accountId: true,
        recordType: true,
        amount: true,
        category: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return records;
  } catch (error) {
    console.log('[GET_RECORDS]', error);
    return [];
  }
};
