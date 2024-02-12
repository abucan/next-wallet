import {
  getFinancialData,
  getExpenses,
  getExpensesByCategory,
} from '@/actions/get-dashboard-stats';
import { DashWidget } from '../_components/dash-widget';
import { CashFlowWidget } from '../_components/cash-flow-widget';
import { ArrowDown, ArrowUpDown, Wallet } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import AreaChartPlot from '../_components/chart';
import { GiBank } from 'react-icons/gi';
import PieChartWidget from '../_components/pie-chart';

export default async function Dashboard() {
  const data = await getFinancialData();
  const graph_data = await getExpenses();
  const graph_data_2 = await getExpensesByCategory();

  return (
    <div className='space-y-8 md:pr-12 mb-4'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary'>
        Dashboard
      </h1>
      <div className='flex gap-4'>
        <div className='flex-1'>
          <DashWidget
            icon={Wallet}
            title='Accounts'
            content={data.totalAccounts.toString()}
          />
        </div>
        <div className='flex-1'>
          <DashWidget
            icon={ArrowUpDown}
            title='Records'
            content={data.totalRecords.toString()}
          />
        </div>
        <div className='flex-1'>
          <DashWidget
            icon={GiBank}
            title='Balance'
            content={formatCurrency(data.totalBalance)}
          />
        </div>
        <div className='flex-1'>
          <DashWidget
            icon={ArrowDown}
            title='Expenses'
            content={data.totalExpenses.toString()}
          />
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='w-1/2'>
          <CashFlowWidget
            income={data.cashFlow.income}
            expenses={data.cashFlow.expenses}
            incomePrec={data.cashFlow.incomePrec}
            expensesPrec={data.cashFlow.expensesPrec}
            totalFlow={data.cashFlow.totalCashFlow}
          />
        </div>
        <div className='w-1/2'>
          <AreaChartPlot data={graph_data} />
        </div>
      </div>
      <div>
        <div className='w-1/2'>
          <PieChartWidget data={graph_data_2} />
        </div>
      </div>
    </div>
  );
}
