import AccountCard from './_components/AccountCard';
import { getAccounts } from '@/actions/get-accounts';

const AccountsPage = async () => {
  const accounts = await getAccounts();

  return (
    <div className='p-6 flex flex-col space-y-4'>
      {accounts &&
        accounts.map((account) => {
          return <AccountCard key={account.name} {...account} />;
        })}
    </div>
  );
};

export default AccountsPage;
