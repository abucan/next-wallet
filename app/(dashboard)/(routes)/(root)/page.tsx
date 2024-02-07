import {
  getStats,
  getTotalBalance,
  getCashFlow,
} from '@/actions/get-dashboard-stats';
import { DashWidget } from '../_components/dash-widget';
import { Progress } from '@/components/ui/progress';

export default async function Dashboard() {
  // const { income, expenses } = await getCashFlow();

  return (
    <div className='space-y-8'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary'>
        Dashboard
      </h1>
      <DashWidget />
      <DashWidget />
      <DashWidget />
      {/* <Progress value={income} max={100} />
      <Progress value={expenses} max={100} /> */}
    </div>
  );
}
