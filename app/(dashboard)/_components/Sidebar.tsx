import SidebarRoutes from './SidebarRoutes';
import { Logo } from '@/components/Logo';

const Sidebar = async () => {
  return (
    <div className='h-full flex flex-col overflow-y-auto bg-sidebar-color items-center pt-5 border-r'>
      <div className='p-3'>
        <Logo width={130} />
      </div>
      <div className='flex flex-col w-full h-full mt-10'>
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
