import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadBody = {
  type?: string;
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  resource?: string;
  message?: string;
  updates?: string;
  website?: string; // honeypot
};

function clean(v: unknown, max = 500): string {
  return String(v ?? '')
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, max);
}

async function readBody(req: Request): Promise<LeadBody> {
  const ct = req.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    return (await req.json().catch(() => ({}))) as LeadBody;
  }
  // Back-compat: old form posts FormData
  const fd = await req.formData().catch(() => null);
  if (!fd) return {};
  const get = (k: string) => {
    const v = fd.get(k);
    return typeof v === 'string' ? v : '';
  };
  return {
    type: get('type'),
    name: get('name'),
    email: get('email'),
    company: get('company'),
    phone: get('phone'),
    service: get('service'),
    resource: get('resource'),
    message: get('message'),
    updates: get('updates'),
    website: get('website'),
  };
}

export async function POST(req: Request) {
  const raw = await readBody(req);

  // Honeypot: silently accept bots
  if (raw.website && String(raw.website).trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const type = raw.type === 'resource' ? 'resource' : 'consultation';
  const d = {
    type,
    name: clean(raw.name, 120),
    email: clean(raw.email, 160),
    company: clean(raw.company, 160),
    phone: clean(raw.phone, 30),
    service: clean(raw.service, 80),
    resource: clean(raw.resource, 80),
    message: clean(raw.message, 2000),
    updates_consent: clean(raw.updates, 5) === 'yes' ? 'yes' : 'no',
  };

  const errors: string[] = [];
  if (d.name.length < 2) errors.push('name');
  if (!EMAIL_RE.test(d.email)) errors.push('email');
  if (d.company.length < 2) errors.push('company');
  if (type === 'consultation' && d.phone.replace(/\D/g, '').length < 10) errors.push('phone');
  if (errors.length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error('Contact form misconfigured: missing RESEND_API_KEY / CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL');
    return NextResponse.json(
      { ok: false, error: 'Email service is not configured.' },
      { status: 500 },
    );
  }

  const subject =
    type === 'resource'
      ? `Resource download: ${d.resource || 'resource'} – ${d.company}`
      : `Consultation request: ${d.company}`;

  const lines = [
    type === 'resource' ? 'New resource download from procor.co.in' : 'New consultation request from procor.co.in',
    '',
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Company: ${d.company}`,
    ...(d.phone ? [`Phone: ${d.phone}`] : []),
    ...(d.service ? [`Service: ${d.service}`] : []),
    ...(d.resource ? [`Resource: ${d.resource}`] : []),
    ...(d.message ? [`Message: ${d.message}`] : []),
    `Updates consent: ${d.updates_consent}`,
    '',
    `Page: ${req.headers.get('referer') || '-'}`,
    `Time: ${new Date().toISOString()}`,
  ];
  const text = lines.join('\n');

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: d.email,
      subject,
      text,
    });
    if (error) {
      console.error('Resend error:', error);
      // Surface Resend's message (e.g. unverified domain) so misconfig is visible client-side.
      const detail =
        typeof error === 'object' && error !== null && 'message' in error
          ? String((error as { message: unknown }).message)
          : 'Failed to send email.';
      return NextResponse.json({ ok: false, error: detail }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend exception:', err);
    const detail =
      err instanceof Error && process.env.NODE_ENV !== 'production'
        ? err.message
        : 'Failed to send email.';
    return NextResponse.json({ ok: false, error: detail }, { status: 502 });
  }
}
