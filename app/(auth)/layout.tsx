import Image from 'next/image';
import Logo from '@/components/Logo';

import main_banner from '@/public/main_banner.svg';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row'>
      <div className='w-1/2 bg-slate-50 hidden md:flex md:flex-col'>
        <div className='flex items-center justify-start p-8'>
          <Logo />
        </div>
        <div className='flex items-center justify-center mt-20'>
          <Image src={main_banner} alt='banner' width={400} />
        </div>
      </div>
      <div className='w-full md:w-1/2 flex flex-col'>{children}</div>
    </div>
  );
}
