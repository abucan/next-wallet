import { DashboardLayoutProps } from '@/ts/interfaces/app_interfaces';
import Navbar from './_components/Navbar';
import Sidebar from './_components/Sidebar';

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className='h-full'>
      <div className='h-[75px] md:pl-60 fixed inset-y-0 w-full z-50'>
        <Navbar />
      </div>
      <div className='hidden md:flex w-60 flex-col fixed inset-y-0 z-50'>
        <Sidebar />
      </div>
      <main className='md:pl-60 pt-[75px] h-full w-full'>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
