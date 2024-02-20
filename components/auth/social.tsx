'use client';

import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { useSearchParams } from 'next/navigation';

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className='flex items-center w-full'>
      <Button
        className='w-full'
        variant='outline'
        onClick={() => onClick('github')}
      >
        <div className='flex flex-row items-center justify-center space-x-2'>
          <span>Continue with GitHub</span>
          <FaGithub className='h-5 w-5' />
        </div>
      </Button>
    </div>
  );
};
