'use client';

import { PieProps } from '@/actions/get-dashboard-stats';
import { Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PieChartWidget = ({ data }: PieProps) => {
  const colors = [
    '#8884d8',
    '#FA8072',
    '#AF69EE',
    '#3DED97',
    '#3AC7EB',
    '#F9A603',
  ];

  return (
    <Card className=''>
      <CardHeader className='space-y-2'>
        <CardTitle className='flex flex-row space-x-2 items-center justify-start'>
          <div className='bg-gray-200 rounded p-1 w-10 flex items-center justify-center'>
            <Calendar />
          </div>
          <p className='text-lg font-mono font-[300]'>
            Expenses by Category
          </p>
        </CardTitle>
        <Separator />
        <CardDescription className='text-base font-mono text-tertiary'>
          This Month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PieChart width={450} height={350}>
          <Pie
            data={data}
            dataKey='_sum.amount'
            nameKey='category'
            cx='50%'
            cy='50%'
            fill='#8884d8'
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            align='right'
            layout='vertical'
            verticalAlign='middle'
          />
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default PieChartWidget;
