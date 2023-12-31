'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { FaChevronDown } from 'react-icons/fa';

const UserLogoutBtn = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaChevronDown className='text-[#737898] text-xs' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className='font-mono font-[500] text-sm text-small-icon'>
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ redirect: true })}
          className='hover:cursor-pointer font-mono font-[500] text-sm'
        >
          <LogOut className='mr-2 h-4 w-4' />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserLogoutBtn;
