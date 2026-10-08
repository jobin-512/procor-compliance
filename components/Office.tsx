import Link from 'next/link';
import Icon from './Icon';
import { OFFICE_PHOTOS as P, SITE } from '@/lib/site';

/* eslint-disable @next/next/no-img-element */
export function OfficeBand() {
  return (
    <section aria-labelledby="office-h"><div className="wrap">
      <div className="sec-head"><p className="kicker">Where we work</p><h2 id="office-h">Visit us in New Delhi</h2>
        <p className="lede">Our team works from Mohan Cooperative Industrial Estate, with meeting rooms for client reviews and onboarding sessions. We are happy to meet in person.</p></div>
      <div className="office-grid">
        <img className="o-main" src={P.main.src} srcSet={`${P.main.small} 640w, ${P.main.src} 1132w`} sizes="(max-width: 900px) 100vw, 580px"
          alt={P.main.alt} width={P.main.w} height={P.main.h} loading="lazy" />
        {P.tiles.map((t) => <img key={t.src} className="o-tile" src={t.src} alt={t.alt} width={t.w} height={t.h} loading="lazy" />)}
      </div>
      <div className="office-meta">
        <span><Icon name="building" size={18} /> {SITE.address}</span>
        <span><Icon name="clock" size={18} /> {SITE.hours}</span>
        <Link className="link-arrow" href="/contact/">Plan a visit <Icon name="arrow" size={18} /></Link>
      </div>
    </div></section>
  );
}

export function OfficePhoto() {
  return (
    <figure className="office-fig">
      <img src={P.main.small} srcSet={`${P.main.small} 640w, ${P.main.src} 1132w`} sizes="(max-width: 900px) 100vw, 420px"
        alt={P.main.alt} width={P.main.w} height={P.main.h} loading="lazy" />
      <figcaption>Our office, Mohan Cooperative Industrial Estate</figcaption>
    </figure>
  );
}
