import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

export default function NavbarRoutes() {
  return (
    <>
      <div className='font-bold text-xl'>Dashboard</div>
      <div className='flex flex-row gap-x-2'>
        <Button variant='outline' size='sm'>
          Record
        </Button>
        <Button variant='destructive' size='sm'>
          Add Wallet
        </Button>
      </div>
    </>
  );
}
