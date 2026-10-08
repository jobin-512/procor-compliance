'use client';
import { useEffect, useRef } from 'react';
import { STEPS } from '@/lib/content';

export default function ProcessTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) { el.classList.add('on'); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('on'); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <ol className="tl" data-tl ref={ref}>
      {STEPS.map(([h, p], i) => (
        <li key={h}><span className="n">0{i + 1}</span><div><h3>{h}</h3><p>{p}</p></div></li>
      ))}
    </ol>
  );
}
