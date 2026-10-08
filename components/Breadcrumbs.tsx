import Link from 'next/link';
export type Crumb = { name: string; href?: string };
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="crumbs">
        <li><Link href="/">Home</Link></li>
        {items.map((c, i) => (
          <li key={c.name} aria-current={i === items.length - 1 ? 'page' : undefined}>
            {c.href && i < items.length - 1 ? <Link href={c.href}>{c.name}</Link> : c.name}
          </li>
        ))}
      </ol>
    </nav>
  );
}
