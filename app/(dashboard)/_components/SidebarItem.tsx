'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { SidebarRoutesProps } from '@/ts/interfaces/app_interfaces';
import { cn } from '@/lib/utils';

const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarRoutesProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type='button'
      className={cn(
        'flex transition-all pl-8 py-4 font-mono font-[400] text-base text-[#686868]',
        isActive && 'text-mainColor font-[500]',
      )}
    >
      <div className='flex items-center justify-center gap-x-6 cursor-pointer'>
        <Icon
          size={24}
          className={cn(
            'text-sidebarIcon',
            isActive && 'text-mainColor',
          )}
        />
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
