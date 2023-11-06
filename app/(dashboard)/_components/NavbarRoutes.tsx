import { Button } from '@/components/ui/button';
import { CopyPlus, FolderPlus } from 'lucide-react';
import SearchInput from './SearchInput';

export default function NavbarRoutes() {
  return (
    <>
      <SearchInput />
      <div className='flex flex-row gap-x-4 ml-auto'>
        <Button variant='outline' size='sm'>
          <CopyPlus className='mr-2 h-5 w-5' />
          Record
        </Button>
        <Button variant='ghost' size='sm'>
          <FolderPlus className='mr-2 h-5 w-5' />
          Add Account
        </Button>
      </div>
    </>
  );
}
