import { useQuery } from "@tanstack/react-query";
import AccountCard from "./_components/AccountCard";
import { getAccounts } from "@/actions/get-accounts";
import axios from "axios";

const AccountsPage = async () => {
  const accounts = await getAccounts();
  // TODO: Add a query and a route for getting accounts

  interface AccountParams {
    name: string;
    type: string;
  }

  const allAccountsQuery = (params: AccountParams) => {
    const { name, type } = params;
    return {
      queryKey: ["accounts", name ?? "", type ?? ""],
      queryFn: async () => {
        const response = axios.get("/api/accounts", { params });
        return (await response).data;
      },
    };
  };

  return (
    <div className="p-6 flex flex-col space-y-4">
      {accounts.length > 0 ? (
        accounts.map((account) => {
          return <AccountCard key={account.name} account={account} />;
        })
      ) : (
        <p>No accounts found.</p>
      )}
    </div>
  );
};

export default AccountsPage;
