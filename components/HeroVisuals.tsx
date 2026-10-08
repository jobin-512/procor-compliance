import Icon from './Icon';
import HubDiagram from './HubDiagram';
import { INDUSTRIES, TEAM } from '@/lib/content';
import { OFFICE_PHOTOS as P } from '@/lib/site';
import type { Service } from '@/lib/services';

/* eslint-disable @next/next/no-img-element */

/** Illustrative "what we deliver" card, built from a service's own scope (no invented data). */
export function ServiceVisual({ s }: { s: Service }) {
  return (
    <figure className="sv bracket" aria-label={`What Procor delivers for ${s.name}`}>
      <div className="sv-top"><span className="svc-ic"><Icon name={s.icon} /></span>
        <div><p className="sv-k">Procor delivers</p><p className="sv-t">{s.name}</p></div></div>
      <ul className="sv-list">{s.scope.map(([h, p]) => (
        <li key={h}><span className="sv-tick"><Icon name="check" size={14} /></span><div><strong>{h}</strong><span>{p}</span></div></li>))}</ul>
      <figcaption className="sv-foot"><Icon name="user" size={16} /> Owned end to end by your dedicated SPOC</figcaption>
    </figure>
  );
}

export function HubVisual() {
  return <div className="hub hub-hero"><HubDiagram /></div>;
}

export function OfficeVisual() {
  return (
    <figure className="ov bracket">
      <img src={P.main.src} srcSet={`${P.main.small} 640w, ${P.main.src} 1132w`} sizes="(max-width: 900px) 100vw, 520px"
        alt={P.main.alt} width={P.main.w} height={P.main.h} />
      <figcaption>Our office in New Delhi</figcaption>
    </figure>
  );
}

export function IndustryMosaic() {
  return (
    <ul className="imo" aria-label="Industries we serve">
      {INDUSTRIES.slice(0, 12).map((i) => <li key={i.name} title={i.name}><Icon name={i.icon} /><span>{i.name.split(' & ')[0]}</span></li>)}
    </ul>
  );
}

export function PartnersVisual() {
  return (
    <div className="pv">
      <p className="pv-k">You&apos;ll speak with a partner</p>
      <ul>{TEAM.map((m) => (
        <li key={m.name}>
          {m.photo ? <img src={`/assets/team/${m.photo}-480.webp`} alt="" width={72} height={72} /> : <span>{m.initials}</span>}
          <div><strong>{m.name}</strong><em>{m.focus}</em></div>
        </li>))}</ul>
    </div>
  );
}
