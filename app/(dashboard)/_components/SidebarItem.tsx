'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarRoutesProps } from '@/ts/interfaces/app_interfaces';

const SidebarItem = ({ icon: Icon, label, href }: SidebarRoutesProps) => {
  const pathname = usePathname();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      type='button'
      className={cn(
        'flex transition-all pl-8 py-4 font-mono font-[400] text-base text-[#686868]',
        isActive && 'text-mainColor font-[500]'
      )}
    >
      <div className='flex items-center justify-center gap-x-6 cursor-pointer'>
        <Icon
          size={24}
          className={cn('text-sidebarIcon', isActive && 'text-mainColor')}
        />
        {label}
      </div>
    </Link>
  );
};

export default SidebarItem;
