'use client';
import { useEffect, useState } from 'react';

const DUE = [7, 11, 15, 20];
const ROWS: [string, string, string][] = [
  ['7th', 'TDS deposit', 'Tax deducted in the previous month'],
  ['11th', 'GSTR-1', 'Outward supplies, monthly filers'],
  ['15th', 'EPF ECR & ESIC', 'Contributions, challan and reconciliation'],
  ['20th', 'GSTR-3B', 'Summary return and tax payment'],
  ['Varies', 'Professional tax & LWF', 'Due dates differ by state'],
];

/** Illustrative month of statutory deadlines; ticks each row to "Filed" once on load. */
export default function HeroCalendar() {
  const [done, setDone] = useState(0);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setDone(ROWS.length); return; }
    const ids = ROWS.map((_, i) => setTimeout(() => setDone(i + 1), 700 + i * 520));
    return () => ids.forEach(clearTimeout);
  }, []);
  const cells = [];
  for (let i = 0; i < 2; i++) cells.push(<span key={`b${i}`} className="d" />);
  for (let d = 1; d <= 30; d++) {
    const k = DUE.indexOf(d);
    cells.push(<span key={d} data-day={d} className={`d${k >= 0 ? ' due' : ''}${k >= 0 && k < done ? ' done' : ''}`}>{d}</span>);
  }
  return (
    <figure className="cal bracket" aria-label="Illustration: a typical month of Indian statutory deadlines">
      <div className="cal-top" aria-hidden="true"><p className="cal-h">A typical month</p><small>Statutory calendar</small></div>
      <div className="cal-grid" aria-hidden="true">{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <span key={i} className="dow">{d}</span>)}{cells}</div>
      <ul className="tasks">{ROWS.map(([dt, nm, sub], i) => (
        <li key={nm} data-task={i}><span className="dt">{dt}</span><span className="nm"><strong>{nm}</strong><span>{sub}</span></span>
          <span className={`st${i < done ? ' done' : ''}`}>{i < done ? 'Filed' : 'Due'}</span></li>))}</ul>
      <figcaption className="cal-foot">Illustrative. Standard monthly due dates; the filings Procor handles for you are agreed per engagement.</figcaption>
    </figure>
  );
}
