import type { Metadata } from 'next';
import { Inter, Bebas_Neue, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});
const montserrat = Montserrat({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Daily Lettuce',
  description: 'News for the people, by the people',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.className}`}>{children}</body>
    </html>
  );
}
