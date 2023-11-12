import AccountCard from './_components/AccountCard';
import { getAccounts } from '@/actions/get-accounts';

const AccountsPage = async () => {
  const accounts = await getAccounts();
  // TODO: Add a query and a route for getting accounts

  return (
    <div className='p-6 flex flex-col space-y-4'>
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
