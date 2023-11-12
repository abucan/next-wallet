import Actions from './Actions';
import { Card } from '@/components/ui/card';
import { AccountCardProps } from '@/ts/interfaces/app_interfaces';
import { getAccountType } from '@/actions/get-account-type';
import { getIconComponent } from '@/components/AccountIcon';

const AccountCard = ({ account }: AccountCardProps) => {
  const AccountCardIcon = getIconComponent(account.type);
  return (
    <Card className='flex flex-row items-center justify-between p-3'>
      <div className='flex flex-row space-x-2 items-center justify-center text-lg font-light'>
        <div style={{ color: account.color, opacity: 1 }}>
          <AccountCardIcon />
        </div>
        <p className='tracking-wide'>{account.name}</p>
        <div className='bg-slate-200 py-0.5 px-3 rounded-full text-black text-base font-medium flex items-center justify-center'>
          {getAccountType(account.type)}
        </div>
      </div>
      <div className='flex flex-row space-x-4 items-center'>
        <p className='text-lg font-light mr-20'>
          {account.balance}
          <span className='font-bold'> EUR</span>
        </p>
        <Actions id={`${account?.id}`} />
      </div>
    </Card>
  );
};

export default AccountCard;
