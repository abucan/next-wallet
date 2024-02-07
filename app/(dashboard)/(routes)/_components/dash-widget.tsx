import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Wallet } from 'lucide-react';

export const DashWidget = () => {
  return (
    <Card className='w-[150px]'>
      <CardHeader className='space-y-2'>
        <CardTitle>
          <div className='bg-gray-200 rounded p-1 w-10 flex items-center justify-center'>
            <Wallet size={24} />
          </div>
        </CardTitle>
        <CardDescription className='text-base font-mono text-tertiary'>
          Accounts
        </CardDescription>
      </CardHeader>
      <CardContent className='-mt-3'>
        <p className='text-3xl font-sans'>3</p>
      </CardContent>
    </Card>
  );
};
