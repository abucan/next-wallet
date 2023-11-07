import Logo from '@/components/Logo';
import SidebarRoutes from './SidebarRoutes';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ProfileCard from './ProfileCard';

const Sidebar = () => {
  return (
    <div className='h-full flex flex-col overflow-y-auto bg-slate-50 items-center'>
      <div className='my-6'>
        <Logo width={200} />
      </div>
      <div className='flex flex-col w-full h-full mt-6 p-2 '>
          <SidebarRoutes />
        <div className='flex flex-col w-full mt-auto space-y-4'>
          <Button size='default' variant='destructive'><LogOut className='mr-2 h-4 w-4'/>Sign Out</Button>
          <Separator />
          <div className='flex flex-row gap-x-2 pb-6 items-center justify-center'>
            <ProfileCard username='antebucan' email='antebucan@gmail.com'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
