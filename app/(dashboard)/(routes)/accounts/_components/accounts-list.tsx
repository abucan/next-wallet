import { Account } from '@/models/account';
import { AccountItem } from './account-item';

export const AccountsList = ({
  accounts,
}: {
  accounts: Account[];
}) => {
  return (
    <div className='space-y-4'>
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
    </div>
  );
};
