import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import QueryProvider from '@/components/QueryProvider';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${roboto.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <ClerkProvider>
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
      </ClerkProvider>
    </html>
  );
}
