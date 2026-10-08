import type { Metadata } from 'next';
import { SITE } from './site';

export function seo({ title, description, path, noindex, image = '/assets/og-image.png' }: { title: string; description: string; path: string; noindex?: boolean; image?: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { type: 'website', siteName: SITE.name, locale: 'en_IN', title, description, url: path, images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
