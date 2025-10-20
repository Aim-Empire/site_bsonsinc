import Link from "next/link";

const quick = [
  { href: "/programs/autos", label: "Autos" },
  { href: "/programs/investment", label: "Investment" },
  { href: "/programs/community-support", label: "Community Support" },
  { href: "/careers", label: "Careers" },
  { href: "/donation", label: "Donation" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0B1E34] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-white grid place-items-center overflow-hidden">
              <img src="/logo.png" className="w-8 h-8 object-contain" alt="Bsons Inc." />
            </span>
            <span className="font-semibold">Bsons Inc.</span>
          </div>
          <p className="text-sm text-white/70 italic">
            Community • Commerce • Generational Wealth
          </p>
        </div>

        {/* Quick Links (buttons) */}
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {quick.map((q) => (
              <Link
                key={q.href}
                href={q.href as any}
                className="text-sm text-white rounded-lg border border-white/20 px-3 py-2 bg-white/5 hover:bg-white/10"
              >
                {q.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-white/80">Support: <a className="underline" href="mailto:support@bsonsinc.com">support@bsonsinc.com</a></p>
          <p className="text-sm text-white/80">Careers: <a className="underline" href="mailto:careers@bsonsinc.com">careers@bsonsinc.com</a></p>
          <p className="text-sm text-white/80">Admin Desk: <a className="underline" href="mailto:admin@bsonsinc.com">admin@bsonsinc.com</a></p>
          <div className="flex gap-2 pt-2">
            <a
              href="https://wa.me/19056971979"
              target="_blank"
              className="rounded-lg bg-green-500/90 hover:bg-green-500 text-white text-sm px-3 py-2"
            >
              WhatsApp Support
            </a>
            <a
              href="https://maps.google.com/?q=49+Little+Avenue,+Bowmanville+ON+L1C+1J8"
              target="_blank"
              className="rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-2"
            >
              Open Map
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4">
        <div className="mx-auto max-w-6xl text-xs text-white/70 italic">
          Disclaimer: Information provided by Bsons Inc. is educational and does not constitute financial advice. Programs are subject to eligibility and availability.
        </div>
      </div>
    </footer>
  );
}