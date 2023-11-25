import Image from 'next/image';
import logo_test from '@/public/logo_test.png';

const Logo = ({ width = 130 }: { width?: number }) => {
  return <Image src={logo_test} alt='logo' width={width} priority />;
};

export default Logo;
