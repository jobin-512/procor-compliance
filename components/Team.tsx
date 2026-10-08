import Icon from './Icon';
import { TEAM, type Member } from '@/lib/content';

function Portrait({ m }: { m: Member }) {
  if (!m.photo) return <div className="tm-ph tm-initials" aria-hidden="true"><span>{m.initials}</span></div>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="tm-ph" src={`/assets/team/${m.photo}-800.webp`} srcSet={`/assets/team/${m.photo}-480.webp 480w, /assets/team/${m.photo}-800.webp 800w`}
      sizes="(max-width: 700px) 90vw, 360px" alt={`${m.name}, ${m.role} at Procor`} width={800} height={1000} loading="lazy" />
  );
}

export default function Team() {
  return (
    <ul className="team">
      {TEAM.map((m) => (
        <li key={m.name} className="tm">
          <Portrait m={m} />
          <div className="tm-body">
            <p className="tm-focus">{m.focus}</p>
            <h3>{m.name}</h3>
            <p className="tm-role">{m.role}</p>
            <p className="tm-bio">{m.bio}</p>
            <a className="tm-li" href={m.linkedin} target="_blank" rel="noopener" aria-label={`${m.name} on LinkedIn`}><Icon name="li" size={16} /> LinkedIn</a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function TeamStrip() {
  return (
    <div className="team-strip">
      <div className="faces" aria-hidden="true">
        {TEAM.map((m) => m.photo
          // eslint-disable-next-line @next/next/no-img-element
          ? <img key={m.name} src={`/assets/team/${m.photo}-480.webp`} alt="" width={56} height={56} loading="lazy" />
          : <span key={m.name}>{m.initials}</span>)}
      </div>
      <div><p><strong>Partner-led, every engagement.</strong></p>
        <p className="muted">{TEAM.map((m) => `${m.name} (${m.focus})`).join(' · ')}</p></div>
      <a className="link-arrow" href="/about/#leadership">Meet the leadership <Icon name="arrow" size={18} /></a>
    </div>
  );
}
