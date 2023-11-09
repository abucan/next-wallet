import { Separator } from '@/components/ui/separator';
import MobileSidebar from './MobileSidebar';
import NavbarRoutes from './NavbarRoutes';

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between p-4 h-full'>
        <MobileSidebar />
        <NavbarRoutes />
      </div>
      <div className=''>
        <Separator />
      </div>
    </>
  );
};

export default Navbar;
