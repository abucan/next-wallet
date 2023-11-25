import {
  ArrowUpDown,
  LayoutDashboard,
  User,
  Wallet,
} from 'lucide-react';
import { SidebarRoutesProps } from '@/ts/interfaces/app_interfaces';

export const routes: SidebarRoutesProps[] = [
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
