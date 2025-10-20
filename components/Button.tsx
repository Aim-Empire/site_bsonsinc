import Link from "next/link";
import clsx from "clsx";

type V = "primary" | "outline" | "soft" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: React.ReactNode;
  variant?: V;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition shadow-sm";
  const styles: Record<V, string> = {
    primary:
      "bg-brand-gold text-brand-navy hover:brightness-95",
    outline:
      "border border-brand-navy/25 text-brand-navy hover:bg-brand-cream",
    soft:
      "bg-gradient-to-r from-amber-100 to-emerald-100 text-brand-navy hover:from-amber-200 hover:to-emerald-200",
    ghost:
      "text-brand-blue hover:bg-amber-50"
  };
  return (
    <Link href={href as any} className={clsx(base, styles[variant], className)}>
      {children}
    </Link>
  );
}
