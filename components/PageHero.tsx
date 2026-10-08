import Breadcrumbs, { Crumb } from './Breadcrumbs';
import { BookButton, CallButton } from './Buttons';

export default function PageHero({ crumbs, title, lede, service, ctas = true, children, visual }:
  { crumbs: Crumb[]; title: string; lede?: string; service?: string; ctas?: boolean; children?: React.ReactNode; visual?: React.ReactNode }) {
  const text = (
    <div>
      <Breadcrumbs items={crumbs} />
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
      {children}
      {ctas && <div className="hero-cta"><BookButton service={service} /><CallButton /></div>}
    </div>
  );
  return (
    <section className="phero"><div className={`wrap${visual ? ' phero-split' : ''}`}>
      {text}
      {visual && <div className="phero-visual">{visual}</div>}
    </div></section>
  );
}
