import Icon from './Icon';
import { HRMS, hrmsLink } from '@/lib/site';

const Ext = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" /></svg>;
export const ExtIcon = Ext;

/** Homepage section introducing the group's HRMS product. */
export function HrmsSection() {
  return (
    <section className="hrms" aria-labelledby="hrms-h"><div className="wrap hrms-in">
      <div>
        <p className="kicker">Also from the Procor group</p>
        <h2 id="hrms-h">Prefer to run HR and payroll in-house? Meet {HRMS.name}.</h2>
        <p className="lede">A cloud-based, fully customisable HRMS that covers the employee lifecycle, from onboarding and attendance to payroll, with an employee mobile app.</p>
        <div className="hrms-facts">{HRMS.facts.map(([b, t]) => <div key={t}><b>{b}</b><span>{t}</span></div>)}</div>
        <div className="hero-cta">
          <a className="btn btn-primary" href={hrmsLink('home_section')} target="_blank" rel="noopener">Visit {HRMS.name} <Ext /></a>
        </div>
        <p className="hrms-ams">Already on another HRMS? We also provide <a href="/services/hrms-application-management/">application management for Keka, Darwinbox, PeopleStrong, greytHR</a> and other platforms.</p>
        <p className="fine hrms-note">{HRMS.name} is offered by {HRMS.entity}, a Procor group company. Opens procorhrms.com in a new tab.</p>
      </div>
      <ul className="mods" aria-label={`${HRMS.name} modules`}>
        {HRMS.modules.map((m) => <li key={m}><Icon name="check" size={16} />{m}</li>)}
      </ul>
    </div></section>
  );
}

/** Compact callout for payroll / HR service pages. */
export function HrmsCallout({ placement }: { placement: string }) {
  return (
    <div className="hrms-callout">
      <div><strong>Need software, not a service?</strong> {HRMS.name}, from our group company, lets your team run HR and payroll in-house on a cloud platform.</div>
      <a className="link-arrow" href={hrmsLink(placement)} target="_blank" rel="noopener">Explore {HRMS.name} <Ext /></a>
    </div>
  );
}
