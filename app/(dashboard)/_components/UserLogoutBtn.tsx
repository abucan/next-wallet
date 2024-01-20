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
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

const UserLogoutBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu onOpenChange={toggleDropdown}>
      <DropdownMenuTrigger className='focus-visible:ring-0'>
        {isOpen ? (
          <FaChevronUp className='text-[#737898] text-xs' />
        ) : (
          <FaChevronDown className='text-[#737898] text-xs' />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel className='font-mono font-[500] text-sm text-small-icon'>
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ redirect: false })}
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
