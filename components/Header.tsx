import Link from "next/link";

const pages = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply" },
  { href: "/careers", label: "Careers" },
  { href: "/donation", label: "Donation" },
  { href: "/programs/autos", label: "Autos" },
  { href: "/programs/loan", label: "Loan" },
  { href: "/programs/small-business-loan", label: "Small Business Loan" },
  { href: "/programs/investment", label: "Investment" },
  { href: "/programs/community-support", label: "Community Support" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="container-default h-16 grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" className="w-9 h-9 rounded-full border" alt="logo" />
          </Link>
        </div>

        {/* Center: Company name */}
        <div className="text-center">
          <Link href="/" className="font-fancy text-lg md:text-xl text-brand-navy">
            Bourgeois &amp; Sons Incorporated
          </Link>
        </div>

        {/* Right: All Pages button (dropdown) */}
        <div className="flex justify-end">
          <details className="relative">
            <summary className="list-none btn-outline cursor-pointer select-none">
              All Pages
            </summary>
            <div className="absolute right-0 mt-2 w-64 max-h-[70vh] overflow-auto rounded-xl border bg-white shadow-lg p-2">
              <div className="grid grid-cols-1 gap-1">
                {pages.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href as any}
                    className="rounded-lg px-3 py-2 text-sm hover:bg-brand-cream text-brand-navy"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}