import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

/**
 * Insights live in /content/insights/*.md with a small front-matter block.
 * An article with an empty body is "not yet migrated": listings link to its legacy URL on the
 * old blog and no /insights/<slug>/ page is generated. Paste the body in and rebuild: the page
 * is generated, listings switch to it, and scripts/gen-htaccess.mjs adds the 301 from the old URL.
 */
export type Post = {
  slug: string; title: string; seoTitle: string; description: string; category: string;
  date: string;        // ISO yyyy-mm-dd, '' if unknown
  dateLabel: string;   // display date
  author: string; legacyUrl: string; related: string[]; resource: string;
  body: string; html: string; migrated: boolean; readingMins: number; needed: string[];
};

const DIR = path.join(process.cwd(), 'content', 'insights');

function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`Missing front matter in ${file}`);
  const fm: Record<string, string> = {};
  m[1].split('\n').forEach((line) => {
    const i = line.indexOf(':');
    if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  });
  const body = m[2].trim();
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug: fm.slug || file.replace(/\.md$/, ''),
    title: fm.title, seoTitle: fm.seoTitle || `${fm.title} | Procor`, description: fm.description || '', category: fm.category || 'Insights',
    date: fm.date || '', dateLabel: fm.dateLabel || fm.date || '',
    author: fm.author || 'Procor Compliance Solutions', legacyUrl: fm.legacyUrl || '',
    related: (fm.related || '').split(',').map((s) => s.trim()).filter(Boolean),
    resource: fm.resource || 'compliance-calendar',
    body, html: body ? (marked.parse(body) as string) : '', migrated: body.length > 0,
    readingMins: Math.max(1, Math.round(words / 220)),
    needed: (fm.needed || '').split('|').map((s) => s.trim()).filter(Boolean),
  };
}

export function getPosts(): Post[] {
  return fs.readdirSync(DIR).filter((f) => f.endsWith('.md')).map(parse)
    .sort((a, b) => (b.date || '0').localeCompare(a.date || '0'));
}
export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
export const postHref = (p: Post) => (p.migrated ? `/insights/${p.slug}/` : p.legacyUrl);
