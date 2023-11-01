import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AuthHeaderProps {
  label: string;
  buttonText: string;
  href: string;
}

export default function AuthHeader({
  label,
  buttonText,
  href,
}: AuthHeaderProps) {
  return (
    <div className='p-8 w-full hidden lg:flex items-center justify-end space-x-2'>
      <p className='font-medium text-sm'>{label}</p>
      <Button variant='destructive' size='sm'>
        <Link href={href}>{buttonText}</Link>
      </Button>
    </div>
  );
}
