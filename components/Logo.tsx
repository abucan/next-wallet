'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import logo_test from '@/public/logo_test.png';
import logo_dark from '@/public/logo_dark.png';

const Logo = ({ width = 130 }: { width?: number }) => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case 'light':
      src = logo_test;
      break;
    case 'dark':
      src = logo_dark;
      break;
    default:
      src =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      break;
  }

  return <Image src={src} width={width} alt='logo' />;
};

export default Logo;
