import type {Metadata} from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("scroll-smooth", inter.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] antialiased selection:bg-[#0071e3]/10 selection:text-[#0071e3] overflow-x-hidden min-h-screen transition-colors duration-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
