import { CopyPlus, FolderPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TrackExpenseButton } from '../(routes)/records/_components/track-expense-button';
import { AddAccountButton } from '../(routes)/accounts/_components/add-account-button';

export const NavbarActions = () => {
  return (
    <div className='flex flex-row md:gap-x-4 items-center'>
      <TrackExpenseButton mode='modal' asChild>
        <Button
          variant='ghost'
          size='sm'
          className='font-mono text-secondary-grey text-sm'
        >
          <CopyPlus className='md:mr-2 h-5 w-5' />
          <span className='hidden md:flex'>Track expense</span>
        </Button>
      </TrackExpenseButton>
      <AddAccountButton mode='modal' asChild>
        <Button
          variant='ghost'
          size='sm'
          className='font-mono text-secondary-grey text-sm'
        >
          <FolderPlus className='md:mr-2 h-5 w-5' />
          <span className='hidden md:flex'>Add Account</span>
        </Button>
      </AddAccountButton>
    </div>
  );
};
