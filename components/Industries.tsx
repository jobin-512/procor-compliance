import Link from 'next/link';
import Icon from './Icon';
import { INDUSTRIES } from '@/lib/content';

export default function Industries() {
  return (
    <ul className="inds">
      {INDUSTRIES.map((i) => (
        <li key={i.name} className="ind">
          <span className="ind-ic"><Icon name={i.icon} /></span>
          <h3>{i.name}</h3>
          <p>{i.text}</p>
          {i.eg && <p className="ind-eg">Clients include {i.eg}</p>}
        </li>
      ))}
    </ul>
  );
}

/** Compact list for the homepage. */
export function IndustryChips() {
  return (
    <div className="ind-chips">
      <p className="ind-chips-h">Industries we serve</p>
      <ul>{INDUSTRIES.map((i) => <li key={i.name}><Icon name={i.icon} size={16} />{i.name}</li>)}</ul>
      <Link className="link-arrow" href="/who-we-help/#industries">See how we help each industry <Icon name="arrow" size={18} /></Link>
    </div>
  );
}
