import Link from "next/link";

export default function FeatureCard({ title, href, children }:{
  title: string; href: string; children?: React.ReactNode;
}){
  return (
    <Link href={href} className="card hover:shadow-md transition block">
      <h3 className="font-display text-xl text-brand-navy">{title}</h3>
      {children && <div className="mt-2 text-sm text-neutral-600">{children}</div>}
      <div className="mt-3 text-sm text-brand-blue">Learn more →</div>
    </Link>
  );
}
