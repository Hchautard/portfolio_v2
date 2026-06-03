import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'leaflet/dist/leaflet.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hchautard.fr'),
  title: 'Hugo Chautard · Développeur Full Stack',
  description:
    'Portfolio de Hugo Chautard, développeur Full Stack basé à Montpellier. Spécialisé en React, Next.js, Symfony et Node.js.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Hugo Chautard · Développeur Full Stack',
    description:
      'Portfolio de Hugo Chautard, développeur Full Stack basé à Montpellier. Spécialisé en React, Next.js, Symfony et Node.js.',
    url: 'https://hchautard.fr',
    siteName: 'Hugo Chautard',
    images: [
      {
        url: '/assets/images/pp.jpeg',
        width: 400,
        height: 400,
        alt: 'Hugo Chautard - Développeur Full Stack',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Hugo Chautard · Développeur Full Stack',
    description:
      'Portfolio de Hugo Chautard, développeur Full Stack basé à Montpellier.',
    images: ['/assets/images/pp.jpeg'],
  },
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
