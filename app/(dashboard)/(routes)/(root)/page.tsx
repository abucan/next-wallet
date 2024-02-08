import {
  getStats,
  getTotalBalance,
  getCashFlow,
} from '@/actions/get-dashboard-stats';
import { DashWidget } from '../_components/dash-widget';
import { CashFlowWidget } from '../_components/cash-flow-widget';

export default async function Dashboard() {
  // const { income, expenses } = await getCashFlow();

  return (
    <div className='space-y-8'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary'>
        Dashboard
      </h1>
      <div className='grid grid-cols-2'>
        <div className='grid grid-cols-3 grid-rows-2 gap-4'>
          <DashWidget />
          <DashWidget />
          <DashWidget />
          <CashFlowWidget />
        </div>
        {/* <div className='grid col-start-2 row-start-1 row-end-1'>
          <CashFlowWidget />
        </div> */}
      </div>
    </div>
  );
}
