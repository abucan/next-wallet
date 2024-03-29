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
  const results = await getFinancialData();
  const graph_data = await getExpenses();
  const graph_data_2 = await getExpensesByCategory();

  return (
    <div className='space-y-4 lg:space-y-8'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary flex justify-center md:justify-start mb-2'>
        Dashboard
      </h1>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex flex-col w-full space-y-4 xl:flex-row lg:space-y-0 lg:gap-4'>
          <div className='flex-1'>
            <DashWidget
              icon={Wallet}
              title='Accounts'
              content={results.totalAccounts.toString()!}
            />
          </div>
          <div className='flex-1'>
            <DashWidget
              icon={ArrowUpDown}
              title='Records'
              content={results.totalRecords.toString()}
            />
          </div>
        </div>
        <div className='flex flex-col w-full space-y-4 xl:flex-row lg:space-y-0 lg:gap-4'>
          <div className='flex-1'>
            <DashWidget
              icon={GiBank}
              title='Balance'
              content={formatCurrency(results.totalBalance)}
            />
          </div>
          <div className='flex-1'>
            <DashWidget
              icon={ArrowDown}
              title='Expenses'
              content={results.totalExpenses.toString()}
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col xl:flex-row gap-4'>
        <div className='w-full xl:w-1/2'>
          <CashFlowWidget
            income={results.cashFlow.income}
            expenses={results.cashFlow.expenses}
            incomePrec={results.cashFlow.incomePrec}
            expensesPrec={results.cashFlow.expensesPrec}
            totalFlow={results.cashFlow.totalCashFlow}
          />
        </div>
        <div className='hidden xl:flex xl:w-1/2'>
          <DashLineChart data={graph_data} />
        </div>
      </div>

      <div className='flex flex-col xl:flex-row gap-4'>
        <div className='w-full xl:w-1/2'>
          <DashBarChart data={graph_data_2} />
        </div>
        <div className='w-full xl:w-1/2'>
          <RecordsWidget />
        </div>
      </div>
    </div>
  );
}
