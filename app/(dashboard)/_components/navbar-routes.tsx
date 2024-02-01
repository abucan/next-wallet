import { CopyPlus, FolderPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';
import { TrackExpenseButton } from '../(routes)/records/_components/track-expense-button';
import { AddAccountButton } from '../(routes)/accounts/_components/add-account-button';
import { SignedIn, UserButton } from '@clerk/nextjs';

export const NavbarRoutes = () => {
  return (
    <>
      <div className='flex flex-row gap-x-4 items-center w-full'>
        <TrackExpenseButton mode='modal' asChild>
          <Button
            variant='ghost'
            size='sm'
            className='font-mono text-secondary-grey text-sm'
          >
            <CopyPlus className='mr-2 h-5 w-5' />
            Track expense
          </Button>
        </TrackExpenseButton>
        <AddAccountButton mode='modal' asChild>
          <Button
            variant='ghost'
            size='sm'
            className='font-mono text-secondary-grey text-sm'
          >
            <FolderPlus className='mr-2 h-5 w-5' />
            Add Account
          </Button>
        </AddAccountButton>
        <div className='ml-auto flex flex-row space-x-4 items-center justify-center'>
          <ModeToggle />
          <SignedIn>
            <UserButton
              afterSignOutUrl='/auth/sign-in'
              userProfileMode='navigation'
            />
          </SignedIn>
        </div>
      </div>
    </>
  );
};
