import { Montserrat, Lora, Hind_Madurai } from 'next/font/google';
import './globals.css';
import './globalicon.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['700'],
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const hind_madurai = Hind_Madurai({
  subsets: ['latin'],
  variable: '--font-hind-madurai',
  display: 'swap',
  weight: ['300'],
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lora.variable} ${hind_madurai.variable}`}
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
