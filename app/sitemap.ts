import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/lib/services';
import { RESOURCES } from '@/lib/resources';
import { getPosts } from '@/lib/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/about/', '/services/', ...SERVICES.map((s) => s.url!), '/who-we-help/', '/insights/',
    ...getPosts().filter((p) => p.migrated).map((p) => `/insights/${p.slug}/`),
    '/resources/', ...RESOURCES.map((r) => `/resources/${r.slug}/`), '/contact/', '/privacy-policy/', '/terms/'];
  return paths.map((p) => ({ url: SITE.url + p, lastModified: new Date() }));
}
