"use client"

import { Button } from '@/components/ui/button';
import { CopyPlus, FolderPlus } from 'lucide-react';
import SearchInput from './SearchInput';
import AddDialogAccount from '../_dialogs/AddAccountDialog';
import { useEffect, useState } from 'react';

const NavbarRoutes = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, [])

  if (!hydrated) return null;

  return (
    <>
      <div className='flex flex-row gap-x-4 items-center justify-center ml-auto'>
        <SearchInput />
        <Button variant='outline' size='sm'>
          <CopyPlus className='mr-2 h-5 w-5' />
          Record
        </Button>
        {/* hydratation error */}
        <AddDialogAccount>
          <Button variant='ghost' size='sm'>
            <FolderPlus className='mr-2 h-5 w-5' />
            Add Account
          </Button>
        </AddDialogAccount>
      </div>
    </>
  );
};

export default NavbarRoutes;
