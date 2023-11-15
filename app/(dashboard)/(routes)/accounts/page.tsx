import { useQuery } from '@tanstack/react-query';
import AccountCard from './_components/AccountCard';
import { getAccounts } from '@/actions/get-accounts';
import axios from 'axios';
import SortingOptions from './_components/SortingOptions';
import SearchInput from '../../_components/SearchInput';

const AccountsPage = async ({
  searchParams,
}: {
  searchParams: {
    sort: string;
    title: string;
  };
}) => {
  const accounts = await getAccounts({
    sort: searchParams.sort,
    title: searchParams.title,
  });

  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex items-center justify-between'>
        <SortingOptions />
        <SearchInput />
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
