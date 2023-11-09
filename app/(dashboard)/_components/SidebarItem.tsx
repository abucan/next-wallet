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
        'flex items-center gap-x-2 text-slate-500 text-sm pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 rounded-lg font-[500] tracking-wide',
        isActive &&
          'text-black bg-sky-200/20 hover:bg-sky-200/20 hover:text-black font-[600] border',
      )}
    >
      <div className='flex items-center gap-x-3 py-2.5'>
        <Icon
          size={22}
          className={cn('text-slate-500', isActive && 'text-black')}
        />
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
