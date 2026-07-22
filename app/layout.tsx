import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Muhammed Musthafa — UI/UX Designer & Web Developer',
  description: 'Official portfolio of Muhammed Musthafa. Crafting modern websites, mobile applications, and full-stack digital experiences inspired by simplicity and precision.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-white text-[#1d1d1f] antialiased selection:bg-[#0071e3]/10 selection:text-[#0071e3] overflow-x-hidden min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
