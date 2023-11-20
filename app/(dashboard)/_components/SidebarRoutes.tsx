'use client';

import { ArrowUpDown, Home, LayoutDashboard, User, Wallet } from 'lucide-react';
import { SidebarRoutesProps } from '@/ts/interfaces/app_interfaces';
import SidebarItem from './SidebarItem';

const routes: SidebarRoutesProps[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Wallet,
    label: 'Accounts',
    href: '/accounts',
  },
  {
    icon: ArrowUpDown,
    label: 'Records',
    href: '/records',
  },
  {
    icon: User,
    label: 'User',
    href: '/user',
  },
];

const SidebarTitle = ({ title }: { title: string }) => {
  return (
    <p className='text-xs text-[#686868]/50 pl-8 py-3 font-sans font-[400]'>
      {title}
    </p>
  );
};

const SidebarRoutes = () => {
  return (
    <div className='flex flex-col w-full'>
      <SidebarTitle title='MAIN MENU' />
      {routes.map((route) => {
        return (
          <SidebarItem
            key={route.label}
            icon={route.icon}
            label={route.label}
            href={route.href}
          />
        );
      })}
    </div>
  );
};

export default SidebarRoutes;
