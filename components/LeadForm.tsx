'use client';
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { SITE } from '@/lib/site';

type Field = 'name' | 'email' | 'company' | 'phone';
const RULES: Record<Field, [(v: string) => boolean, string]> = {
  name: [(v) => v.length > 1, 'Enter your name.'],
  email: [(v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Enter a valid email address, like name@company.com.'],
  company: [(v) => v.length > 1, 'Enter your company name.'],
  phone: [(v) => v.replace(/\D/g, '').length >= 10, 'Enter a phone number with at least 10 digits.'],
};

declare global { interface Window { gtag?: (...a: unknown[]) => void } }

async function post(data: FormData) {
  const payload: Record<string, string> = {};
  data.forEach((v, k) => { if (typeof v === 'string') payload[k] = v; });
  const r = await fetch(SITE.leadEndpoint, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });
  const j = await r.json().catch(() => null);
  return Boolean(j && j.ok);
}

function useValidation(required: Field[]) {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const validate = (form: HTMLFormElement) => {
    const e: Partial<Record<Field, string>> = {};
    for (const f of required) {
      const v = ((form.elements.namedItem(f) as HTMLInputElement)?.value || '').trim();
      if (!RULES[f][0](v)) e[f] = RULES[f][1];
    }
    setErrors(e);
    const first = required.find((f) => e[f]);
    if (first) (form.elements.namedItem(first) as HTMLInputElement).focus();
    return !first;
  };
  return { errors, validate };
}

const Input = ({ id, name, label, type = 'text', auto, err, optional }:
  { id: string; name: Field; label: string; type?: string; auto: string; err?: string; optional?: boolean }) => (
  <div className="field">
    <label htmlFor={id}>{label}{optional && <span className="opt"> (optional)</span>}</label>
    <input id={id} name={name} type={type} autoComplete={auto} required={!optional} aria-invalid={err ? true : undefined} aria-describedby={`${id}-e`} {...(type === 'tel' ? { inputMode: 'tel' as const } : {})} />
    <span className="err" id={`${id}-e`}>{err}</span>
  </div>
);

const Honeypot = () => (
  <div className="hp" aria-hidden="true"><label htmlFor="f-web">Website</label><input id="f-web" name="website" tabIndex={-1} autoComplete="off" /></div>
);

/* ---------- Consultation / callback form ---------- */
export function ContactForm({ services, preselect = '' }: { services: { slug: string; name: string }[]; preselect?: string }) {
  const { errors, validate } = useValidation(['name', 'email', 'company', 'phone']);
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'fail'>('idle');
  const [first, setFirst] = useState('');
  const okRef = useRef<HTMLDivElement>(null);
  const selRef = useRef<HTMLSelectElement>(null);
  // Static export: read ?service= on the client so service-page CTAs arrive pre-selected.
  useEffect(() => {
    const v = new URLSearchParams(location.search).get('service');
    if (v && selRef.current?.querySelector(`option[value="${CSS.escape(v)}"]`)) selRef.current.value = v;
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    setState('sending');
    const data = new FormData(form); data.set('type', 'consultation');
    const ok = await post(data).catch(() => false);
    if (ok) {
      setFirst(String(data.get('name')).trim().split(' ')[0]); setState('done');
      window.gtag?.('event', 'generate_lead', { form: 'consultation', service: data.get('service') || 'unspecified' });
      setTimeout(() => okRef.current?.focus(), 0);
    } else setState('fail');
  }

  if (state === 'done') return (
    <div className="form ok-state" role="status" tabIndex={-1} ref={okRef}>
      <div className="tick"><Icon name="check" size={28} /></div>
      <h2 style={{ fontSize: '1.6rem' }}>Thanks, {first}. Your request is in.</h2>
      <p className="lede" style={{ marginTop: 12 }}>The Procor team will contact you to confirm a time for your consultation. If it&apos;s urgent, call <a href={SITE.tel}>{SITE.phone}</a>.</p>
      <a className="btn btn-ghost" href="/services/">Explore our services</a>
    </div>
  );

  return (
    <form className="form" noValidate onSubmit={submit} data-form>
      <h2 style={{ fontSize: '1.5rem', marginBottom: 6 }}>Request a callback</h2>
      <p className="muted" style={{ marginBottom: 24 }}>Takes under a minute. All fields except the message are required.</p>
      <Honeypot />
      <div className="frow"><Input id="f-name" name="name" label="Full name" auto="name" err={errors.name} /><Input id="f-email" name="email" label="Work email" type="email" auto="email" err={errors.email} /></div>
      <div className="frow"><Input id="f-co" name="company" label="Company" auto="organization" err={errors.company} /><Input id="f-ph" name="phone" label="Phone" type="tel" auto="tel" err={errors.phone} /></div>
      <div className="field"><label htmlFor="f-svc">What do you need help with?</label>
        <select id="f-svc" name="service" defaultValue={preselect} ref={selRef}>
          <option value="">Not sure yet</option><option value="assessment">Compliance assessment</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select></div>
      <div className="field"><label htmlFor="f-msg">Message <span className="opt">(optional)</span></label>
        <textarea id="f-msg" name="message" placeholder="Headcount, states you operate in, what you'd like to hand over" /></div>
      <button className="btn btn-primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Request a callback'}</button>
      {state === 'fail' && <p className="err form-err" role="alert">We couldn&apos;t send your request. Please call <a href={SITE.tel}>{SITE.phone}</a> or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>}
      <p className="fine">We use your details only to respond to this request. See our <a href="/privacy-policy/">privacy policy</a>.</p>
    </form>
  );
}

/* ---------- Lead-magnet (download) form ---------- */
export function LeadMagnetForm({ slug, title, file }: { slug: string; title: string; file: string }) {
  const { errors, validate } = useValidation(['name', 'email', 'company']);
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const okRef = useRef<HTMLDivElement>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    setState('sending');
    const data = new FormData(form); data.set('type', 'resource'); data.set('resource', slug);
    // The download is never withheld: if the lead fails to send, the visitor still gets the file.
    await post(data).catch(() => false);
    window.gtag?.('event', 'generate_lead', { form: 'resource', resource: slug });
    setState('done'); setTimeout(() => okRef.current?.focus(), 0);
  }

  if (state === 'done') return (
    <div className="form ok-state dl-ok" role="status" tabIndex={-1} ref={okRef}>
      <div className="tick"><Icon name="check" size={28} /></div>
      <h2 style={{ fontSize: '1.5rem' }}>Your download is ready</h2>
      <p className="muted" style={{ marginTop: 10 }}>{title}</p>
      <a className="btn btn-primary" href={file} download><Icon name="download" /> Download the PDF</a>
      <p className="fine">Want help acting on it? <a href={`/contact/?service=assessment#book`}>Book a free consultation</a>.</p>
    </div>
  );

  return (
    <form className="form" noValidate onSubmit={submit} data-lead-form>
      <h2 style={{ fontSize: '1.4rem', marginBottom: 6 }}>Get the free PDF</h2>
      <p className="muted" style={{ marginBottom: 20 }}>Enter your details and the download starts straight away.</p>
      <Honeypot />
      <Input id="l-name" name="name" label="Full name" auto="name" err={errors.name} />
      <Input id="l-email" name="email" label="Work email" type="email" auto="email" err={errors.email} />
      <Input id="l-co" name="company" label="Company" auto="organization" err={errors.company} />
      <Input id="l-ph" name="phone" label="Phone" type="tel" auto="tel" optional />
      <label className="check" htmlFor="l-updates"><input id="l-updates" name="updates" type="checkbox" value="yes" />
        <span>Send me occasional compliance updates from Procor. You can unsubscribe at any time.</span></label>
      <button className="btn btn-primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Preparing…' : 'Get the free PDF'}</button>
      <p className="fine">We use your details to send you this resource and, only if you tick the box, occasional updates. See our <a href="/privacy-policy/">privacy policy</a>.</p>
    </form>
  );
}
