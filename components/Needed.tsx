import { SHOW_PLACEHOLDERS } from '@/lib/site';

/** Renders a visible [CONTENT NEEDED] marker in review builds only; renders nothing in production. */
export default function Needed({ note, block }: { note?: string; block?: boolean }) {
  if (!SHOW_PLACEHOLDERS) return null;
  const tag = <span className="needed">[CONTENT NEEDED FROM PROCOR]{note ? `: ${note}` : ''}</span>;
  return block ? <p style={{ marginTop: 20 }}>{tag}</p> : tag;
}
