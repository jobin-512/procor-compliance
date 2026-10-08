const P: Record<string, string> = {
  pay: '<path d="M3 7h18v10H3z"/><circle cx="12" cy="12" r="2.5"/><path d="M6 10v4M18 10v4"/>',
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.3"/><path d="M16 14.2c2.9.2 5 2.6 5 5.8"/>',
  scale: '<path d="M12 4v16M6 20h12M5 8h14"/><path d="M5 8l-3 6h6zM19 8l-3 6h6z"/>',
  ledger: '<path d="M5 3h11l3 3v15H5z"/><path d="M9 9h6M9 13h6M9 17h3"/>',
  building: '<path d="M4 21V5l8-2v18M12 8h8v13"/><path d="M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
  split: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="19" r="2.5"/><path d="M7.5 8l3.3 8.5M16.5 8l-3.3 8.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/>',
  left: '<path d="M15 6l-6 6 6 6"/>', right: '<path d="M9 6l6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>',
  chev: '<path d="M6 9l6 6 6-6"/>',
  cart: '<path d="M3 4h2l2.4 11h11L21 8H6.3"/><circle cx="9.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/>',
  code: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M9 9l-2.5 2.5L9 14M15 9l2.5 2.5L15 14M8 21h8"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6"/>',
  bag: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
  pill: '<rect x="3" y="9" width="18" height="7" rx="3.5" transform="rotate(-35 12 12.5)"/><path d="M9.3 8.5l5 7"/>',
  factory: '<path d="M3 21V10l6 4V10l6 4V6h6v15z"/><path d="M7 17h2M12 17h2M17 17h2"/>',
  bolt: '<path d="M13 2L5 14h6l-1 8 8-12h-6z"/>',
  bank: '<path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>',
  brief: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',
  leaf: '<path d="M5 20c0-9 5-15 15-16-1 10-7 15-15 16z"/><path d="M5 20l7-7"/>',
  headset: '<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20a4 4 0 01-4 2h-2"/>',
  truck: '<path d="M2 6h12v10H2zM14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  cup: '<path d="M4 8h13v5a6 6 0 01-6 6h-1a6 6 0 01-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 010 5H17M7 3v2M10.5 3v2M14 3v2"/>',
  megaphone: '<path d="M3 10v4h3l7 4V6L6 10z"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/>',
  crane: '<path d="M6 21V4l12 3M6 7h12M10 21h-6M18 7v5"/><rect x="15.5" y="12" width="5" height="3.5"/>',
  health: '<path d="M12 21s-8-4.8-8-11a5 5 0 019-3 5 5 0 019 3c0 6.2-8 11-8 11z"/><path d="M12 9v5M9.5 11.5h5"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1"/><rect x="7" y="7" width="10" height="10" rx="5" fill="none"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  li: '<path fill="currentColor" stroke="none" d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/>',
  fb: '<path fill="currentColor" stroke="none" d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v7h4v-7h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z"/>',
  ig: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6" fill="currentColor"/>',
  yt: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path fill="currentColor" stroke="none" d="M10 9l5 3-5 3z"/>',
};

export default function Icon({ name, size }: { name: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" width={size} height={size} dangerouslySetInnerHTML={{ __html: P[name] ?? '' }} />
  );
}
