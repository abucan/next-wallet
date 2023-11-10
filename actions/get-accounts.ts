import prisma from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { GetAccounts } from "@/ts/types/app_types";

export const getAccounts = async (): Promise<GetAccounts[]> => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return [];

  const userId = session?.user?.id;

  try {
    const accounts = await prisma.account.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        name: true,
        color: true,
        type: true,
        balance: true,
      },
    });
    return accounts;
  } catch (error) {
    console.log("[GET_ACCOUNTS]", error);
    return [];
  }
};
