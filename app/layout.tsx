import './globals.css';
import localFont from 'next/font/local';
import QueryProvider from '@/components/QueryProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/toaster';
import { auth } from '@/auth';
import type { Metadata } from 'next';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html
        lang='en'
        className={`${roboto.variable} ${poppins.variable}`}
        suppressHydrationWarning
      >
        <body>
          <QueryProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='light'
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </QueryProvider>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
