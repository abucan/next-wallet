import Logo from '@/components/Logo';
import SidebarRoutes from './SidebarRoutes';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar';

export default function Sidebar() {
  return (
    <div className='h-full flex flex-col overflow-y-auto bg-slate-50 shadow-sm items-center'>
      <div className='p-6'>
        <Logo />
      </div>
      <div className='flex flex-col w-full mt-4 p-2'>
        <p className='font-bold text-xs text-gray-700/60 mb-4 pl-6'>
          MAIN
        </p>
        <SidebarRoutes />
      </div>
      <div className=''>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
