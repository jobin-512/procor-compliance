import Icon from './Icon';
import { SITE } from '@/lib/site';

/** Branded, dependency-free location card. Links out to Google Maps instead of embedding it:
 *  never renders blank, loads instantly, and sets no third-party cookies. */
export default function MapCard() {
  const q = encodeURIComponent(SITE.mapQuery);
  return (
    <div className="mapcard">
      <svg className="map-art" viewBox="0 0 480 220" role="img" aria-label="Map illustration of the Procor office location in Mohan Cooperative Industrial Estate, New Delhi">
        <rect width="480" height="220" className="m-bg" />
        <path className="m-park" d="M300 20h120v70H300z" /><path className="m-park" d="M30 150h90v50H30z" />
        <g className="m-road-s"><path d="M0 70h480M0 160h480M90 0v220M210 0v220M370 0v220" /></g>
        <path className="m-road-l" d="M0 118 C 120 110, 200 130, 480 96" />
        <g className="m-blocks"><rect x="110" y="84" width="80" height="22" rx="3" /><rect x="228" y="20" width="56" height="40" rx="3" /><rect x="228" y="176" width="120" height="30" rx="3" /><rect x="388" y="130" width="70" height="22" rx="3" /></g>
        <g transform="translate(262 112)">
          <circle r="34" className="m-pulse" />
          <path className="m-pin" d="M0 -38c-13 0-23 10-23 23 0 17 23 39 23 39s23-22 23-39c0-13-10-23-23-23z" />
          <circle cy="-15" r="8" fill="#fff" />
        </g>
      </svg>
      <div className="map-body">
        <p className="map-k">Procor Compliance Solutions LLP</p>
        <p className="map-a">{SITE.address}</p>
        <div className="map-actions">
          <a className="btn btn-primary btn-sm" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noopener"><Icon name="arrow" /> Get directions</a>
          <a className="btn btn-ghost btn-sm" href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noopener">Open in Google Maps</a>
        </div>
      </div>
    </div>
  );
}
