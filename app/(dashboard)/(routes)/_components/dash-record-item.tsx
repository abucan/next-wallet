import { getCategoryIcon, getCategoryName } from '@/actions/get-category-type';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { DashRecordItemProps } from '@/ts/interfaces/app_interfaces';

export const DashRecordItem = ({
  recordCategory,
  recordAmount,
  recordType,
}: DashRecordItemProps) => {
  const Icon = getCategoryIcon(recordCategory);
  return (
    <>
      <div className={`flex items-center justify-between rounded p-2`}>
        <div className='flex flex-row items-center justify-center gap-2'>
          <Icon />
          {getCategoryName(recordCategory)}
        </div>
        <p
          className={`${
            recordType === 'INCOME' ? 'text-success' : 'text-destructive'
          }`}
        >
          {recordType === 'INCOME' ? '+ ' : '- '}
          {formatCurrency(recordAmount)}
        </p>
      </div>
      <Separator />
    </>
  );
};
