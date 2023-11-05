'use client';

import {
  ArrowUpDown,
  Home,
  LucideIcon,
  User,
  Wallet,
} from 'lucide-react';
import SidebarItem from './SidebarItem';

interface SidebarRoutesProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const routes: SidebarRoutesProps[] = [
  {
    icon: Home,
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

const SidebarRoutes = () => {
  return (
    <div className='flex flex-col w-full gap-y-3'>
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
