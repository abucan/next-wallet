import { useQuery } from "@tanstack/react-query";
import AccountCard from "./_components/AccountCard";
import { getAccounts } from "@/actions/get-accounts";
import axios from "axios";
import SortingOptions from "./_components/SortingOptions";

const AccountsPage = async ({
  searchParams,
}: {
  searchParams: { name: string | undefined; type: string | undefined };
}) => {
  const accounts = await getAccounts({ sortBy: "balance", sortOrder: "desc" });

  return (
    <div className="flex flex-col space-y-4">
      <SortingOptions />
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
