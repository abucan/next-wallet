import './globals.css';
import localFont from 'next/font/local';
import QueryProvider from '@/components/query-provider';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
// import { ClerkProvider } from '@clerk/nextjs';
import { PropsWithChildren } from 'react';

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

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      lang='en'
      className={`${roboto.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      {/* <ClerkProvider> */}
      <body>
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
      {/* </ClerkProvider> */}
    </html>
  );
};

export default RootLayout;
