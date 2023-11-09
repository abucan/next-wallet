import Link from 'next/link';
import { AuthFormCard } from '@/ts/interfaces/app_interfaces';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AuthFormCard({
  children,
  cardTitle,
  cardDescription,
  cardFooterText,
  href,
  linkText,
}: AuthFormCard) {
  return (
    <div className='flex flex-col items-center max-w-fill mt-1 lg:mt-20'>
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className='font-bold text-2xl md:text-3xl'>
            {cardTitle}
          </CardTitle>
          <CardDescription className='font-medium text-base'>
            {cardDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className='lg:hidden w-full justify-center space-x-1'>
          <p className='font-medium text-sm'>{cardFooterText}</p>
          <Link
            href={href}
            className='font-medium text-sm text-red-400 hover:text-red-600 transition'
          >
            {linkText}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
