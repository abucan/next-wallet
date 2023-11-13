import { useQuery } from '@tanstack/react-query';
import AccountCard from './_components/AccountCard';
import { getAccounts } from '@/actions/get-accounts';
import axios from 'axios';
import AccountSorting from './_components/AccountSorting';

const AccountsPage = async () => {
  const accounts = await getAccounts();
  // TODO: Add a query and a route for getting accounts

  return (
    <div className='flex flex-col space-y-4'>
      <div className='w-1/5 ml-auto'>
        <AccountSorting />
      </div>
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
