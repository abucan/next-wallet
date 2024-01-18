import Link from 'next/link';
import { AuthHeaderProps } from '@/ts/interfaces/app_interfaces';
import { Button } from '@/components/ui/button';

export const AuthHeader = ({ label, buttonText, href }: AuthHeaderProps) => (
  <div className='p-8 w-full hidden lg:flex items-center justify-end space-x-2'>
    <p className='font-medium text-sm'>{label}</p>
    <Button variant='destructive' size='sm'>
      <Link href={href}>{buttonText}</Link>
    </Button>
  </div>
);
