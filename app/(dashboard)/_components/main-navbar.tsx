import { Separator } from '@/components/ui/separator';
import { MobileSidebar } from './mobile-sidebar';
import { NavbarRoutes } from './navbar-routes';
import { NavbarActions } from './navbar-actions';

export const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between px-4 py-6 h-full md:pr-12 md:px-0'>
        <MobileSidebar />
        <div className='flex flex-row items-center justify-center md:justify-between md:w-full'>
          <NavbarActions />
          <NavbarRoutes />
        </div>
      </div>
      <div>
        <Separator />
      </div>
    </>
  );
};
