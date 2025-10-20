import Link from "next/link";

export default function FeatureCard({
  title,
  href,
  children
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="card">
      <h3 className="font-display text-xl text-brand-navy">{title}</h3>
      {children && <div className="mt-2 text-sm text-neutral-700">{children}</div>}
      <Link href={href as any} className="mt-4 inline-flex btn">Learn more</Link>
    </div>
  );
}
