'use client';

import { SessionProviderProps } from '@/ts/interfaces/app_interfaces';
import { SessionProvider } from 'next-auth/react';

const Provider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
