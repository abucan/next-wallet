import Logo from '@/components/Logo';
import SidebarRoutes from './SidebarRoutes';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar';
import { MoreVertical } from 'lucide-react';
import SearchInput from './SearchInput';
import { Separator } from '@/components/ui/separator';

export default function Sidebar() {
  return (
    <div className='h-full flex flex-col overflow-y-auto bg-slate-50 shadow-sm items-center'>
      <div className='mt-6 border-b pb-6'>
        <Logo width={200} />
      </div>
      <div className='flex flex-col w-full h-full mt-4 p-2 '>
        <div>
          <p className='font-bold text-xs text-gray-700/60 mb-4 pl-6'>
            MAIN
          </p>
          <SidebarRoutes />
        </div>
        <div className='flex flex-row gap-x-2 border-t pb-6 pt-6 items-center justify-center mt-auto'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-sm font-bold text-gray-700/80'>
              antebucan
            </p>
            <p className='text-xs text-gray-700/60'>
              antebucan@gmail.com
            </p>
          </div>
          <button>
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
