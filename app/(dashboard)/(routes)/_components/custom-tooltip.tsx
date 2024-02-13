import { getCategoryName } from '@/actions/get-category-type';
import { formatCurrency } from '@/lib/utils';
import { CustomTooltipProps } from '@/ts/interfaces/app_interfaces';

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className='custom-tooltip bg-gray-200 p-2 rounded shadow-md'>
        <p className='text-mono'>{`Category: ${getCategoryName(
          dataPoint?.category!
        )}`}</p>
        <p className='text-mono'>{`Amount: ${formatCurrency(
          dataPoint?._sum.amount!
        )}`}</p>
      </div>
    );
  }
  return null;
};
