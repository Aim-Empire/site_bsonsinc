import Link from "next/link";

const quick = [
  { href: "/programs/autos", label: "Autos" },
  { href: "/programs/investment", label: "Investment" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/programs/community-support", label: "Community Support" },
  { href: "/careers", label: "Careers" },
  { href: "/donation", label: "Donation" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Footer(){
  return (
    <footer className="bg-[#0B1E34] text-white mt-16">
      <div className="container-default py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white grid place-items-center overflow-hidden border border-white/20">
              <img src="/logo.png" className="w-8 h-8 object-contain" alt="logo" />
            </span>
            <div className="font-display text-xl">Bsons Inc.</div>
          </div>
          <p className="mt-3 text-white/80 italic">
            Community • Commerce • Generational Wealth
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {quick.map((q)=>(
              <Link key={q.href} href={q.href as any}
                className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm bg-white/10 border border-white/10 hover:bg-white/15">
                {q.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-3 space-y-1 text-white/90">
            <div>Support: <a className="underline" href="mailto:support@bsonsinc.com">support@bsonsinc.com</a></div>
            <div>Careers: <a className="underline" href="mailto:careers@bsonsinc.com">careers@bsonsinc.com</a></div>
            <div>Admin Desk: <a className="underline" href="mailto:admin@bsonsinc.com">admin@bsonsinc.com</a></div>
          </div>
          <div className="mt-4 flex gap-3">
            <a className="rounded-xl px-4 py-2 bg-green-500 text-[#0B1E34] font-semibold" href="https://wa.me/19056971979" target="_blank">WhatsApp Support</a>
            <a className="rounded-xl px-4 py-2 bg-white/10 border border-white/10" href="https://maps.google.com/?q=49+Little+Avenue,+Bowmanville+ON+L1C+1J8" target="_blank">Open Map</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-default py-3 text-xs text-white/70 flex items-center justify-between">
          <div className="italic">Information provided by Bsons Inc. is educational and not financial advice.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="underline">Privacy</Link>
            <Link href="/sitemap.xml" className="underline">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
