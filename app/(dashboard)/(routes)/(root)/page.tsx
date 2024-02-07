import { DashWidget } from '../_components/dash-widget';

export default function Dashboard() {
  return (
    <div className='space-y-8'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary'>Dashboard</h1>
      <DashWidget />
      <DashWidget />
      <DashWidget />
    </div>
  );
}
