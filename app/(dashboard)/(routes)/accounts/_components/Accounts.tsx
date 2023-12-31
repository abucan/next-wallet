import { Account } from '@/models/account';
import AccountItem from './AccountItem';

const Accounts = ({ accounts }: { accounts: Account[] }) => {
  return (
    <>
      {accounts.map((account) => {
        return (
          <AccountItem
            key={account.id}
            id={account.id}
            color={account.color}
            name={account.name}
            type={account.type}
            startedBalance={account.startedBalance}
            currentBalance={account.currentBalance}
          />
        );
      })}
    </>
  );
};

export default Accounts;
