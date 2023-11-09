import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AccountCard from "./_components/AccountCard";

type GetAccounts = {
  name: string | "";
  color: string | "";
  type: string | "";
  balance: number | 0;
};

const getAccounts = async (): Promise<GetAccounts[]> => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return [];

  const userId = session?.user?.id;

  try {
    const accounts = await prisma.account.findMany({
      where: {
        userId: userId,
      },
      select: {
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

const AccountsPage = async () => {
  const accounts = await getAccounts();

  console.log(accounts);

  return (
    <div className="p-6">
      {accounts.map((account) => {
        return <AccountCard key={account.name}/>;
      })}
    </div>
  );
};

export default AccountsPage;
