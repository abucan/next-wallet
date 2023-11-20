import { Separator } from '@/components/ui/separator';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import SidebarRoutes from './SidebarRoutes';
import UserLogoutBtn from './UserLogoutBtn';
import ProfileCard from './ProfileCard';
import Logo from '@/components/Logo';

const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className='h-full flex flex-col overflow-y-auto bg-[#FAFAFA] items-center'>
      <div className='mt-8 mb-12'>
        <Logo width={200} />
      </div>
      <div className='flex flex-col w-full h-full'>
        <SidebarRoutes />
        <div className='flex flex-col w-full mt-auto space-y-4'>
          {session?.user && <UserLogoutBtn />}
          <Separator />
          <div className='flex flex-row gap-x-2 pb-6 items-center justify-center w-full'>
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
