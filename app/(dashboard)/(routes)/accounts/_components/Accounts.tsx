import { AccountProps } from '@/ts/interfaces/app_interfaces';
import AccountItem from './AccountItem';

interface Props {
  accounts: AccountProps[];
}

const Accounts = ({ accounts }: Props) => {
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
            balance={account.balance}
          />
        );
      })}
    </>
  );
};

export default Accounts;
