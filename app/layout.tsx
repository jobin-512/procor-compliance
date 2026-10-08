import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileCta from '@/components/MobileCta';
import JsonLd, { ORG_LD } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: { icon: '/favicon.ico' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@1,8..60,400&display=swap" rel="stylesheet" />
        <JsonLd data={ORG_LD} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Navbar />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
