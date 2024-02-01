import Image from 'next/image';
import main_banner from '@/public/main_banner.svg';
import { PropsWithChildren } from 'react';
import { Logo } from '@/components/site-logo';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row'>
      <div className='flex-1 bg-slate-50 hidden lg:grid lg:place-items-center'>
        <div className='absolute top-10 left-10'>
          <Logo />
        </div>
        <div className='w-full grid place-items-center'>
          <Image
            src={main_banner}
            alt='banner'
            width={400}
            priority
          />
        </div>
      </div>
      <div className='w-full lg:flex-1 grid place-items-center'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
