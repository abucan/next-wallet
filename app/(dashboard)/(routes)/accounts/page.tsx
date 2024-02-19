import { getAccounts } from '@/actions/get-accounts';
import { AccountSorting } from './_components/account-sorting';
import { AccountsList } from './_components/accounts-list';
import { SearchInput } from '../../_components/search-input';

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
    <>
      <div className='flex flex-col space-y-4 lg:space-y-8'>
        <div className='flex items-center justify-between'>
          <AccountSorting />
          <SearchInput />
        </div>
        {accounts.length > 0 ? (
          <AccountsList accounts={accounts} />
        ) : (
          <h1 className='font-mono font-[400] text-2xl text-tertiary'>
            No Accounts To Show...
          </h1>
        )}
      </div>
    </>
  );
};

export default AccountsPage;
