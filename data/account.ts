import prisma from '@/lib/db';

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await prisma.userAccount.findFirst({
      where: { userId },
    });
    return account;
  } catch (error) {
    return null;
  }
};
