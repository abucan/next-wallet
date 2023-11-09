import { LogoProps } from '@/ts/interfaces/app_interfaces';
import Image from 'next/image';
import logo from '@/public/logo.png';

const Logo = ({ width = 250 }: LogoProps) => {
  return (
    <Image
      src={logo}
      alt='logo'
      width={width}
      className='shadow-2xl shadow-slate-200'
      priority
    />
  );
};

export default Logo;
