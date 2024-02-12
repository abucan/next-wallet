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
  LineChart,
  CartesianGrid,
  Line,
} from 'recharts';
import moment from 'moment';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const AreaChartPlot = ({ data }: ChartProps) => {
  function formatXAxis(tickItem: any) {
    // If using moment.js
    return moment(tickItem).format('MMM Do');
  }
  return (
    <Card className='h-72'>
      <CardHeader className='space-y-2'>
        <CardTitle className='flex flex-row space-x-2 items-center justify-start'>
          <div className='bg-gray-200 rounded p-1 w-10 flex items-center justify-center'>
            <Calendar />
          </div>
          <p className='text-lg font-mono font-[300]'>
            Expenses by Date
          </p>
        </CardTitle>
        <Separator />
        <CardDescription className='text-base font-mono text-tertiary'>
          This Month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart
          width={450}
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
          <YAxis />
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

export default AreaChartPlot;
