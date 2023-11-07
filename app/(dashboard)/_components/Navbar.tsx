import MobileSidebar from './MobileSidebar';
import NavbarRoutes from './NavbarRoutes';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-slate-50 p-4 h-full'>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
}

export default Navbar;
