import { CLIENT_LOGOS } from '@/lib/content';

/** Uniform, theme-aware logo wall: each logo is a CSS mask tinted with the site's text colour. */
export default function ClientLogos() {
  return (
    <ul className="logos" aria-label="Clients">
      {CLIENT_LOGOS.map((c) => (
        <li key={c.slug}>
          <span className="lg" role="img" aria-label={c.name}
            style={{ width: c.w, height: c.h, WebkitMaskImage: `url(/assets/clients/${c.slug}.png)`, maskImage: `url(/assets/clients/${c.slug}.png)` } as React.CSSProperties} />
        </li>
      ))}
    </ul>
  );
}
