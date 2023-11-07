import Navbar from './_components/Navbar';
import Sidebar from './_components/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children
}: DashboardLayoutProps) => {
  return (
    <div className='h-full'>
      <div className='h-[75px] md:pl-64 fixed inset-y-0 w-full z-50'>
        <Navbar />
      </div>
      <div className='hidden md:flex w-64 flex-col fixed inset-y-0 z-50'>
        <Sidebar />
      </div>
      <main className='md:pl-64 pt-[75px] h-full w-full'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
