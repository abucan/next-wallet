import './globals.css';
import localFont from 'next/font/local';
import QueryProvider from '@/components/query-provider';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

const roboto = localFont({
  src: [
    {
      path: '../fonts/Roboto-Medium.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../fonts/Roboto-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
  ],
  variable: '--font-roboto',
});

const poppins = localFont({
  src: [
    {
      path: '../fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
  ],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Wallet Tracker',
  description: 'Track your expenses and income',
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html
        lang='en'
        className={`${roboto.variable} ${poppins.variable}`}
        suppressHydrationWarning
      >
        <body>
          <QueryProvider>{children}</QueryProvider>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
