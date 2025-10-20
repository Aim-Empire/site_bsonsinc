import Link from "next/link";

export default function FeatureCard({
  title,
  href,
  children,
  cta = "Learn more"
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
  cta?: string;
}) {
  return (
    <article className="card hover:shadow-md transition block">
      <h3 className="font-display text-xl text-brand-navy">{title}</h3>
      {children && <div className="mt-2 text-sm text-neutral-600">{children}</div>}
      <Link href={href as any} className="mt-4 inline-flex btn-outline">{cta}</Link>
    </article>
  );
}
