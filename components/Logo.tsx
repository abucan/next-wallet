import Image from 'next/image';

import logo_test from '@/public/logo_test.png';
import logo_dark from '@/public/logo_dark.png';

export const Logo = ({ width = 130 }: { width?: number }) => {
  return (
    <>
      <div className='dark:hidden'>
        <Image src={logo_test} width={width} alt='logo' />
      </div>
      <div className='hidden dark:block'>
        <Image src={logo_dark} width={width} alt='logo' />
      </div>
    </>
  );
};
