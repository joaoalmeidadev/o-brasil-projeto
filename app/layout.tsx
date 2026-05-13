import { site } from '@/lib/content/site';
import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-loaded',
  display: 'swap',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display-loaded',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: site.title,
    template: `%s · ${site.title}`,
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    locale: 'pt_BR',
    siteName: site.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0e0b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
