'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { SidebarItemProps } from '@/ts/interfaces/app_interfaces';
import { cn } from '@/lib/utils';

const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
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
        'flex transition-all pl-7 py-4 font-mono font-[400] text-base text-[#686868]',
        isActive && 'text-[#FF5151] font-[500]',
      )}
    >
      <div className='flex items-center justify-center gap-x-6 cursor-pointer'>
        <Icon
          size={24}
          className={cn(
            'text-[#B2B2B2]',
            isActive && 'text-[#FF5151]',
          )}
        />
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
