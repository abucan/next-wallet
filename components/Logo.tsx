import { LogoProps } from '@/ts/interfaces/app_interfaces';
import Image from 'next/image';
import logo_test from '@/public/logo_test.png';
// import logo_test_2 from '@/public/logo_test_2.png';

const Logo = ({ width = 130 }: LogoProps) => {
  return (
    <Image src={logo_test} alt='logo' width={width} priority />
  );
};

export default Logo;
