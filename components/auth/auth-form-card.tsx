import Link from 'next/link';
import { AuthFormCardProps } from '@/ts/interfaces/app_interfaces';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Social } from './social';

export const AuthFormCard = ({
  children,
  cardTitle,
  cardDescription,
  cardFooterText,
  href,
  linkText,
  showSocial,
}: AuthFormCardProps) => (
  <Card className='w-96'>
    <CardHeader>
      <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start font-sans space-y-0.5'>
        <CardTitle className='font-bold text-xl md:text-2xl tracking-wide'>
          {cardTitle}
        </CardTitle>
        <CardDescription className='font-medium text-muted-foreground font-mono'>
          {cardDescription}
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent>{children}</CardContent>
    {showSocial && (
      <CardFooter>
        <Social />
      </CardFooter>
    )}
    <CardFooter className='w-full justify-center space-x-1 font-sans'>
      <p className='font-medium text-sm'>{cardFooterText}</p>
      <Link
        href={href}
        className='font-medium font-sans text-sm text-red-400 hover:text-red-600 transition'
      >
        {linkText}
      </Link>
    </CardFooter>
  </Card>
);
