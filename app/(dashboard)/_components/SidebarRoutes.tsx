'use client';
import { routes } from '@/lib/route';
import SidebarItem from './SidebarItem';

const SidebarTitle = ({ title }: { title: string }) => {
  return (
    <p className='text-xs text-primary-grey/50 pl-8 py-3 font-sans font-[400] tracking-wider'>
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
