import Link from "next/link";
import { clsx } from "clsx";

export default function Button({ href, children, variant = "primary", className = "" }:{
  href: string; children: React.ReactNode; variant?: "primary"|"outline"; className?: string;
}){
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition";
  const styles = variant === "primary"
    ? "bg-brand-gold text-brand-navy hover:brightness-95"
    : "border border-brand-navy/20 text-brand-navy hover:bg-brand-cream";
  return <Link href={href} className={clsx(base, styles, className)}>{children}</Link>;
}