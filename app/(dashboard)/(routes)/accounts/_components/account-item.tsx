import { AccountActions } from './account-actions';
import { Account } from '@/models/account';
import {
  getAccountIcon,
  getAccountType,
} from '@/actions/get-account-type';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

export const AccountItem = ({
  id,
  color,
  name,
  type,
  currentBalance,
  startedBalance,
}: Account) => {
  const AccountIcon = getAccountIcon(type);

  return (
    <Card className='flex flex-col lg:flex-row items-start md:items-center justify-center p-3 space-y-4 lg:space-y-0'>
      <div className='flex flex-col space-y-2 w-full items-start text-lg font-light'>
        <div className='flex flex-row space-x-2 items-center justify-between lg:justify-normal w-full text-lg font-light'>
          <div
            style={{ color: color, opacity: 1 }}
            className='flex flex-row items-center justify-center space-x-2'
          >
            <AccountIcon />
            <p className='font-mono font-[500] text-lg text-tertiary capitalize'>
              {name}
            </p>
          </div>
          <div className='border border-gray-200 py-0.5 px-3 rounded-full text-main-color text-sm font-[400] font-sans flex items-center justify-center'>
            {getAccountType(type)}
          </div>
        </div>
        <p className='text-lg font-mono text-tertiary mr-20 font-bold lg:hidden self-start'>
          {formatCurrency(currentBalance! + startedBalance)}
        </p>
      </div>
      <div className='flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4 lg:items-center w-full lg:w-auto'>
        <p className='text-lg font-mono text-tertiary mr-20 font-bold hidden lg:flex'>
          {formatCurrency(currentBalance! + startedBalance)}
        </p>
        <AccountActions id={`${id}`} />
      </div>
    </Card>
  );
};
