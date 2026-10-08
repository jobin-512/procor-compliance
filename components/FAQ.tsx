import type { QA } from '@/lib/content';
import { SHOW_PLACEHOLDERS } from '@/lib/site';
import Needed from './Needed';

/** Items whose answer still needs Procor's input are hidden in production builds. */
export const visibleFaqs = (items: QA[]) => items.filter((f) => f.a && (!f.needed || SHOW_PLACEHOLDERS));

export default function FAQ({ items }: { items: QA[] }) {
  return (
    <div className="faq">
      {visibleFaqs(items).map((f) => (
        <details key={f.q}><summary>{f.q}</summary>
          <div className="ans"><p>{f.a} {f.needed && <Needed note={f.needed} />}</p></div></details>
      ))}
    </div>
  );
}
