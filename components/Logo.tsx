import Image from 'next/image';

import logo from '@/public/logo.png';

export default function Logo() {
  return (
    <Image
      src={logo}
      alt='logo'
      width={250}
      className='shadow-2xl shadow-slate-200'
      priority
    />
  );
}
