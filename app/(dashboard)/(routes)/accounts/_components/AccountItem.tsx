import Actions from './Actions';
import { Account } from '@/models/account';
import { getAccountIcon, getAccountType } from '@/actions/get-account-type';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

const AccountItem = ({
  id,
  color,
  name,
  type,
  currentBalance,
  startedBalance,
}: Account) => {
  const AccountIcon = getAccountIcon(type);

  return (
    <Card className='flex flex-row items-center justify-between p-3'>
      <div className='flex flex-row space-x-2 items-center justify-center text-lg font-light'>
        <div style={{ color: color, opacity: 1 }}>
          <AccountIcon />
        </div>
        <p className='font-mono font-[500] text-lg text-tertiary'>{name}</p>
        <div className='border border-gray-200 py-0.5 px-3 rounded-full text-main-color text-sm font-[400] font-sans flex items-center justify-center'>
          {getAccountType(type)}
        </div>
      </div>
      <div className='flex flex-row space-x-4 items-center'>
        <p className='text-lg font-mono text-tertiary mr-20 font-bold'>
          {currentBalance && formatCurrency(currentBalance + startedBalance)}
          {/* <span className='font-bold'> EUR</span> */}
        </p>
        <Actions id={`${id}`} />
      </div>
    </Card>
  );
};

export default AccountItem;
