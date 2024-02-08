import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Wallet } from 'lucide-react';

export const CashFlowWidget = () => {
  return (
    <Card className='w-[350px]'>
      <CardHeader className='space-y-2'>
        <CardTitle className='flex flex-row space-x-2 items-center justify-start'>
          <div className='bg-gray-200 rounded p-1 w-10 flex items-center justify-center'>
            <Wallet size={24} />
          </div>
          <p className='text-lg font-mono font-[300]'>
            Cash Flow - 2000 E
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
            <p className='text-sm font-mono'>+ 2000</p>
          </div>
          <Progress value={60} max={100} />
        </div>
        <div className='flex flex-col items-start justify-start space-y-1'>
          <div className='flex flex-row w-full justify-between'>
            <p className='text-sm'>Expenses</p>
            <p className='text-sm font-mono'>- 2000</p>
          </div>
          <Progress value={40} max={100} />
        </div>
      </CardContent>
    </Card>
  );
};
