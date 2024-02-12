import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { FaMoneyBill } from 'react-icons/fa6';

interface CashFlowWidgetProps {
  totalFlow: number;
  income: number;
  expenses: number;
  incomePrec: number;
  expensesPrec: number;
}

export const CashFlowWidget = ({
  totalFlow,
  income,
  expenses,
  incomePrec,
  expensesPrec,
}: CashFlowWidgetProps) => {
  return (
    <Card className='h-72'>
      <CardHeader className='space-y-2'>
        <CardTitle className='flex flex-row space-x-2 items-center justify-start'>
          <div className='bg-gray-200 rounded p-1 w-10 flex items-center justify-center'>
            <FaMoneyBill size={24} />
          </div>
          <p className='text-lg font-mono font-[300]'>
            Cash Flow - {formatCurrency(totalFlow)}
          </p>
        </CardTitle>
        <Separator />
        <CardDescription className='text-base font-mono text-tertiary'>
          This Month
        </CardDescription>
      </CardHeader>
      <CardContent className='-mt-3 flex flex-col space-y-4'>
        <div className='flex flex-col items-start justify-start space-y-1'>
          <div className='flex flex-row w-full justify-between'>
            <p className='text-sm'>Income</p>
            <p className='text-sm font-mono'>
              + {formatCurrency(income)}
            </p>
          </div>
          <Progress value={incomePrec} max={100} />
        </div>
        <div className='flex flex-col items-start justify-start space-y-1'>
          <div className='flex flex-row w-full justify-between'>
            <p className='text-sm'>Expenses</p>
            <p className='text-sm font-mono'>
              - {formatCurrency(expenses)}
            </p>
          </div>
          <Progress value={expensesPrec} max={100} />
        </div>
      </CardContent>
    </Card>
  );
};
