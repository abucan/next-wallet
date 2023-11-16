'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { XCircle } from 'lucide-react';
import { Separator } from './ui/separator';
import { PageHeaderProps } from '@/ts/interfaces/app_interfaces';
import { usePathname } from 'next/navigation';

const PageHeader = ({ title, href }: PageHeaderProps) => {
  const pathname = usePathname();
  const isAccountsPage = pathname.includes('/accounts/create')
    ? 'Add an account'
    : 'Edit an account';
  return (
    <>
      <div className='flex flex-row items-center justify-between p-6'>
        <div className='flex flex-row space-x-2 items-center justify-between w-full text-xl font-light'>
          <p>{isAccountsPage}</p>
          <Link
            href={href}
            className='flex flex-row items-center justify-center'
          >
            <Button variant='destructive'>
              <XCircle className='h-5 w-5 mr-2' />
              Cancel
            </Button>
          </Link>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default PageHeader;
