import Link from "next/link";

const quick = [
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/apply", label: "Apply" },
  { href: "/donation", label: "Donate" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  const mapsUrl = encodeURI("https://maps.google.com/?q=49 Little Avenue, Bowmanville ON L1C 1J8");
  return (
    <footer className="mt-10 bg-[#0B1E34] text-white">
      <div className="container-default py-10 grid gap-8 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden ring-1 ring-white/30">
              <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons Inc logo" />
            </span>
            <div className="font-display text-xl">Bsons Inc.</div>
          </div>
          <p className="mt-3 text-white/80 text-sm italic">
            Building community, growing commerce, and protecting generational wealth.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="https://wa.me/19056971979" target="_blank" className="btn">WhatsApp Support</a>
            <a href="mailto:support@bsonsinc.com" className="btn-outline">Support Email</a>
            <a href="mailto:careers@bsonsinc.com" className="btn-outline">Careers Email</a>
            <a href={mapsUrl} target="_blank" className="btn-outline">Open in Maps</a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {quick.map(q => (
              <Link key={q.href} href={q.href as any} className="btn-ghost text-center">{q.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-default py-6 text-xs text-white/70 italic">
          This site is for informational purposes only and does not constitute financial advice.
        </div>
      </div>
    </footer>
  );
}
