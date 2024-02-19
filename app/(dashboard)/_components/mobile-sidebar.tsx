'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Sidebar } from './main-sidebar';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const MobileSidebar = () => {
  const [open, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetTrigger className='md:hidden hover:opacity-75 transition'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
