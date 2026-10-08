import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

/** Legal pages live in content/legal/<slug>.md. Edit the text there and update `updated:`. */
export function loadLegal(slug: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', 'legal', `${slug}.md`), 'utf8');
  const [, fm, body] = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)!;
  const get = (k: string) => (fm.match(new RegExp(`^${k}:\\s*(.*)$`, 'm')) || [])[1] || '';
  return { title: get('title'), updated: get('updated'), html: marked.parse(body) as string };
}
