'use client';

import { ChartProps } from '@/actions/get-dashboard-stats';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import moment from 'moment';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const AreaChartPlot = ({ data }: ChartProps) => {
  function formatXAxis(tickItem: any) {
    // If using moment.js
    return moment(tickItem).format('MMM Do YY');
  }
  return (
    <Card className='flex flex-col items-start justify-center'>
      <CardHeader className='space-y-2'>
        <CardTitle>
          <div className='bg-gray-200 rounded p-1 w-10 flex items-center justify-center'>
            <Calendar />
          </div>
        </CardTitle>
        <CardDescription className='text-base font-mono text-tertiary'>
          DATE
        </CardDescription>
      </CardHeader>
      <ResponsiveContainer className='p-6'>
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey='createdAt' tickFormatter={formatXAxis} />
          <YAxis />
          <Tooltip />
          <Bar dataKey='_sum.amount' fill='#bf2138' />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default AreaChartPlot;
