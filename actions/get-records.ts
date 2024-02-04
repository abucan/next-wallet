import { auth } from '@/auth';
import prisma from '@/lib/db';
import { Record } from '@/models/record';

export const getRecords = async (): Promise<Record[]> => {
  const session = await auth();

  if (!session?.user.id) return [];

  try {
    const records = await prisma.record.findMany({
      where: {
        userId: session.user.id,
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
