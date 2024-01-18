import { getAccounts } from '@/actions/get-accounts';
import { AccountSortingOptions } from './_components/AccountSortingOptions';
import SearchInput from '../../_components/SearchInput';
import { AccountsList } from './_components/AccountsList';

// TODO useQuery
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
      {accounts.length > 0 ? (
        <>
          <div className='flex items-center justify-between'>
            <AccountSortingOptions />
            <SearchInput />
          </div>
          <AccountsList accounts={accounts} />
        </>
      ) : (
        <h1 className='font-mono font-[400] text-2xl text-tertiary'>
          No Accounts To Show...
        </h1>
      )}
    </div>
  );
};

export default AccountsPage;
