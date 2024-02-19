import { PropsWithChildren } from 'react';
import { Navbar } from './_components/main-navbar';
import { Sidebar } from './_components/main-sidebar';
import { ThemeProvider } from '@/components/theme-provider';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      disableTransitionOnChange
    >
      <div className='h-full'>
        <div className='h-[75px] md:pl-72 fixed inset-y-0 bg-navbar-color w-full z-50'>
          <Navbar />
        </div>
        <div className='hidden md:flex w-60 flex-col fixed inset-y-0 z-50'>
          <Sidebar />
        </div>
        <main className='md:pl-72 pt-[75px] h-full w-full'>
          <div className='py-6 px-4 md:px-0 md:pr-12 w-full'>
            {children}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
