import prisma from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { GetAccounts } from "@/ts/types/app_types";
import { redirect } from "next/navigation";

export const getAccounts = async ({
  sortBy,
  sortOrder,
}: {
  sortBy: string;
  sortOrder: string;
}): Promise<GetAccounts[]> => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return redirect("/sign-in");

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
      orderBy: {
        [sortBy]: sortOrder,
      },
    });
    return accounts;
  } catch (error) {
    console.log("[GET_ACCOUNTS]", error);
    return [];
  }
};
