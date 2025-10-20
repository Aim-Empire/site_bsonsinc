import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply" },
  { href: "/careers", label: "Careers" },
  { href: "/donation", label: "Donation" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b">
      <div className="container-default h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="w-8 h-8 rounded-full border" alt="logo" />
          <span className="font-display text-lg text-brand-navy">Bsons Inc.</span>
        </Link>
        <nav className="hidden md:flex gap-3">
          {nav.map((i) => (
            <Link
              key={i.href}
              className="text-sm text-brand-navy/90 hover:text-brand-navy"
              href={i.href as any}
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
