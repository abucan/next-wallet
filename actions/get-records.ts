import prisma from '@/lib/db';
import { Record } from '@/models/record';
import { auth } from '@clerk/nextjs';

export const getRecords = async (): Promise<Record[]> => {
  const { userId } = auth();

  if (!userId) return [];

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
