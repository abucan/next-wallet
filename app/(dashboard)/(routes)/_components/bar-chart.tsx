'use client';

import {
  Tooltip,
  Cell,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CustomTooltip } from './custom-tooltip';
import { formatCurrency } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { BiCategory } from 'react-icons/bi';
import { BarProps } from '@/ts/interfaces/app_interfaces';
import { barChartColors } from '@/lib/colors';

export const DashBarChart = ({ data }: BarProps) => {
  if (data.length === 0) {
    return (
      <Card className='w-full'>
        <CardHeader className='space-y-2'>
          <CardTitle className='flex flex-row space-x-2 items-center justify-start'>
            <div className='bg-muted rounded p-1 w-10 flex items-center justify-center'>
              <BiCategory />
            </div>
            <p className='text-lg font-mono font-[300]'>Expenses by Category</p>
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
    <Card className='w-full'>
      <CardHeader className='space-y-2'>
        <CardTitle className='flex flex-row space-x-2 items-center justify-start'>
          <div className='bg-muted rounded p-1 w-10 flex items-center justify-center'>
            <BiCategory />
          </div>
          <p className='text-lg font-mono font-[300]'>Expenses by Category</p>
        </CardTitle>
        <Separator />
        <CardDescription className='text-base font-mono text-tertiary'>
          This Month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={350}>
          <BarChart width={700} height={350} data={data} barCategoryGap={5}>
            <XAxis dataKey='category' tickFormatter={(value) => ''} />
            <YAxis tickFormatter={(value) => formatCurrency(value)} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey='_sum.amount' fill='#8884d8'>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barChartColors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
