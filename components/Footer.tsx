import Link from "next/link";

const quick = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/programs/autos", label: "Autos" },
  { href: "/programs/investment", label: "Investment" },
  { href: "/donation", label: "Donation" },
  { href: "/apply", label: "Apply" },
  { href: "/careers", label: "Careers" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Footer(){
  return (
    <footer className="mt-12 bg-[#0B1E34] text-white">
      <div className="container-default py-10 grid md:grid-cols-3 gap-8">
        {/* Brand / Company */}
        <div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white grid place-items-center overflow-hidden">
              <img src="/logo.png" alt="Bsons Inc" className="w-8 h-8 object-contain" />
            </span>
            <span className="font-display text-xl">Bsons Inc.</span>
          </div>
          <p className="mt-3 text-sm text-white/80">
            Community • Commerce • Generational Wealth
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div>Support: <a className="underline" href="mailto:support@bsonsinc.com">support@bsonsinc.com</a></div>
            <div>Admin: <a className="underline" href="mailto:admin@bsonsinc.com">admin@bsonsinc.com</a></div>
            <div>Careers: <a className="underline" href="mailto:career@bsonsinc.com">career@bsonsinc.com</a></div>
            <div className="pt-1">
              <a
                href="https://wa.me/19056971979"
                className="btn bg-[var(--brand-gold)] text-[var(--brand-navy)]"
                target="_blank"
              >
                WhatsApp Support
              </a>
            </div>
            <div className="text-white/80">49 Little Avenue, Bowmanville ON L1C 1J8</div>
          </div>
        </div>

        {/* Quick Links as buttons */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {quick.map(i => (
              <Link key={i.href} href={i.href as any} className="btn-outline text-center">
                {i.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div>
          <h4 className="font-semibold mb-3">Disclaimer</h4>
          <p className="italic text-sm text-white/80">
            Information on this site is for general purposes only and does not constitute financial,
            legal, or investment advice. Eligibility, terms, and availability are subject to verification
            and partner approval. Not all applicants will qualify.
          </p>
          <p className="mt-3 text-xs text-white/60">
            © {new Date().getFullYear()} Bsons Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
