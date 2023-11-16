import Actions from './Actions';
import { Card } from '@/components/ui/card';
import { AccountProps } from '@/ts/interfaces/app_interfaces';
import { getAccountType } from '@/actions/get-account-type';
import { getIconComponent } from '@/components/AccountIcon';

const AccountItem = ({
  id,
  color,
  name,
  type,
  balance,
}: AccountProps) => {
  const AccountCardIcon = getIconComponent(type);
  return (
    <Card className='flex flex-row items-center justify-between p-3'>
      <div className='flex flex-row space-x-2 items-center justify-center text-lg font-light'>
        <div style={{ color: color, opacity: 1 }}>
          <AccountCardIcon />
        </div>
        <p className='tracking-wide'>{name}</p>
        <div className='bg-slate-200 py-0.5 px-3 rounded-full text-black text-base font-medium flex items-center justify-center'>
          {getAccountType(type)}
        </div>
      </div>
      <div className='flex flex-row space-x-4 items-center'>
        <p className='text-lg font-light mr-20'>
          {balance}
          <span className='font-bold'> EUR</span>
        </p>
        <Actions id={`${id}`} />
      </div>
    </Card>
  );
};

export default AccountItem;
