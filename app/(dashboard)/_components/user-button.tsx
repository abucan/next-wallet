'use client';

import { logout } from '@/actions/logout';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useCurrentUser } from '@/hooks/use-current-user';
import { LogOutIcon } from 'lucide-react';

export const UserButton = () => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='hover:cursor-pointer'>
        <div className='flex flex-row items-center justify-center space-x-2'>
          <Avatar className='hover:border-main-color hover:border-2 transition-all duration-200'>
            <AvatarImage
              src={user?.image || 'https://github.com/shadcn.png'}
              alt='@shadcn'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className='font-mono text-sm text-gray-700'>
            {user?.name}
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='hover:cursor-pointer'
          onClick={() => logout()}
        >
          <LogOutIcon className='mr-2 w-4 h-4' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
