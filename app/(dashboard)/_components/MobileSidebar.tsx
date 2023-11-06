import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import SidebarRoutes from './SidebarRoutes';
import Sidebar from './Sidebar';

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden hover:opacity-75 transition'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
