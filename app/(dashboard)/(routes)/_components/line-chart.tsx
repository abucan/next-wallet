'use client';

import moment from 'moment';
import { XAxis, YAxis, LineChart, CartesianGrid, Line } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { ChartProps } from '@/ts/interfaces/app_interfaces';

export const DashLineChart = ({ data }: ChartProps) => {
  function formatXAxis(tickItem: any) {
    return moment(tickItem).format('MMM Do');
  }

  if (data.length === 0) {
    return (
      <Card className='h-72'>
        <CardHeader className='space-y-2'>
          <CardTitle className='flex flex-row space-x-2 items-center justify-start'>
            <div className='bg-muted rounded p-1 w-10 flex items-center justify-center'>
              <Calendar />
            </div>
            <p className='text-lg font-mono font-[300]'>Expenses by Date</p>
          </CardTitle>
          <Separator />
          <CardDescription className='text-base font-mono text-tertiary'>
            This Month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>No data available for the chart.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='h-72'>
      <CardHeader className='space-y-2'>
        <CardTitle className='flex flex-row space-x-2 items-center justify-start'>
          <div className='bg-muted rounded p-1 w-10 flex items-center justify-center'>
            <Calendar />
          </div>
          <p className='text-lg font-mono font-[300]'>Expenses by Date</p>
        </CardTitle>
        <Separator />
        <CardDescription className='text-base font-mono text-tertiary'>
          This Month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart
          width={700}
          height={150}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='createdAt' tickFormatter={formatXAxis} />
          <YAxis tickFormatter={(value) => formatCurrency(value)} />
          <Line
            type='monotone'
            dataKey='_sum.amount'
            stroke='#8884d8'
            strokeWidth={2}
          />
        </LineChart>
      </CardContent>
    </Card>
  );
};
