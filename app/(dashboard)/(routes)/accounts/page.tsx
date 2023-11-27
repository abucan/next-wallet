import { getAccounts } from '@/actions/get-accounts';
import SortingOptions from './_components/Sorting';
import SearchInput from '../../_components/SearchInput';
import Accounts from './_components/Accounts';

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
      <div className='flex items-center justify-between'>
        <SortingOptions />
        <SearchInput />
      </div>
      <Accounts accounts={accounts} />
    </div>
  );
};

export default AccountsPage;
