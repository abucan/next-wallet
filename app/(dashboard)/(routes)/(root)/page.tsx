import { getFinancialData, getGraphData } from '@/actions/get-dashboard-stats';
import { DashWidget } from '../_components/dash-widget';
import { CashFlowWidget } from '../_components/cash-flow-widget';
import { ArrowDown, ArrowUpDown, Wallet } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import AreaChartPlot from '../_components/chart';

export default async function Dashboard() {
  const data = await getFinancialData();
  const graph_data = await getGraphData();

  return (
    <div className='space-y-8'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary'>Dashboard</h1>
      <div className='grid grid-cols-3 gap-10'>
        <div className='col-start-1'>
          <DashWidget
            icon={Wallet}
            title='Accounts'
            content={data.totalAccounts.toString()}
          />
        </div>
        <div className='col-start-1'>
          <DashWidget
            icon={ArrowUpDown}
            title='Records'
            content={data.totalRecords.toString()}
          />
        </div>
        <div className='col-start-1'>
          <DashWidget
            icon={ArrowDown}
            title='Balance'
            content={formatCurrency(data.totalBalance)}
          />
        </div>
        <div className='col-start-2 row-start-1 row-end-3'>
          <CashFlowWidget
            income={data.cashFlow.income}
            expenses={data.cashFlow.expenses}
            incomePrec={data.cashFlow.incomePrec}
            expensesPrec={data.cashFlow.expensesPrec}
            totalFlow={data.cashFlow.totalCashFlow}
          />
        </div>
        <AreaChartPlot data={graph_data} />
      </div>
    </div>
  );
}
