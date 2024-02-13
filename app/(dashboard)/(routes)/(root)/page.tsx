import {
  getFinancialData,
  getExpenses,
  getExpensesByCategory,
} from '@/actions/get-dashboard-stats';
import { DashWidget } from '../_components/dash-widget';
import { CashFlowWidget } from '../_components/cash-flow-widget';
import { DashLineChart } from '../_components/line-chart';
import { DashBarChart } from '../_components/bar-chart';
import { RecordsWidget } from '../_components/records-widget';
import { formatCurrency } from '@/lib/utils';
import { GiBank } from 'react-icons/gi';
import { ArrowDown, ArrowUpDown, Wallet } from 'lucide-react';

export default async function Dashboard() {
  const data = await getFinancialData();
  const graph_data = await getExpenses();
  const graph_data_2 = await getExpensesByCategory();

  return (
    <div className='space-y-8 md:pr-12 mb-4'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary'>Dashboard</h1>
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
          <DashLineChart data={graph_data} />
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='w-1/2'>
          <DashBarChart data={graph_data_2} />
        </div>
        <div className='w-1/2'>
          <RecordsWidget />
        </div>
      </div>
    </div>
  );
}
