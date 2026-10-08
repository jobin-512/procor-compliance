const NODES: [string, number][] = [['Payroll', 0], ['Compliance', 51.4], ['HR Ops', 102.8], ['HRMS Support', 154.3], ['Labour Law', 205.7], ['Finance', 257.1], ['Tax & Advisory', 308.6]];
export default function HubDiagram() {
  const cx = 260, cy = 230, R = 170;
  const pts = NODES.map(([t, a]) => { const r = ((a - 90) * Math.PI) / 180; return { t, x: cx + R * Math.cos(r), y: cy + R * Math.sin(r), w: t.length * 9 + 34 }; });
  return (
    <svg viewBox="0 0 520 460" role="img" aria-labelledby="hub-t">
      <title id="hub-t">Seven business functions connected to one Procor point of contact</title>
      {pts.map((p) => <line key={`l${p.t}`} className="spoke" x1={cx} y1={cy} x2={p.x.toFixed(1)} y2={p.y.toFixed(1)} />)}
      <circle className="ring" cx={cx} cy={cy} r={70} />
      <g className="core"><circle cx={cx} cy={cy} r={60} /><text x={cx} y={cy - 4} textAnchor="middle">One SPOC</text>
        <text x={cx} y={cy + 18} textAnchor="middle" style={{ fontWeight: 600, fontSize: 13, opacity: 0.85 }}>accountable</text></g>
      {pts.map((p) => (
        <g key={p.t} className="node"><rect x={(p.x - p.w / 2).toFixed(1)} y={(p.y - 21).toFixed(1)} width={p.w} height={42} rx={21} />
          <text x={p.x.toFixed(1)} y={(p.y + 5).toFixed(1)} textAnchor="middle">{p.t}</text></g>
      ))}
    </svg>
  );
}
