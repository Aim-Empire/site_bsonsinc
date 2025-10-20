import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-[#0B1E34] text-white mt-10">
      <div className="container-default py-10 grid md:grid-cols-3 gap-8">
        {/* Column 1: Newsletter + Social */}
        <div>
          <h3 className="font-display text-xl">Bsons Inc.</h3>
          <p className="mt-2 text-white/80">Join our list for community updates, programs and opportunities.</p>
          <div className="mt-4 flex gap-2">
            <input className="flex-1 rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 outline-none placeholder-white/60" placeholder="Email Address" />
            <button className="btn">Sign-Up ›</button>
          </div>
          <div className="mt-4 flex gap-3">
            {["f","»","in","▶"].map((s,i)=>(
              <span key={i} className="w-12 h-12 rounded-full bg-white/10 grid place-items-center">{s}</span>
            ))}
          </div>
        </div>

        {/* Column 2: Mission */}
        <div>
          <h4 className="font-display text-xl">Committed to Community</h4>
          <p className="mt-2 text-white/80">
            We collaborate with like-minded people to make a positive difference economically and socially.
            From community support to mobility and small business, we put families first. Let’s build together.
          </p>
          <Link href="/about" className="mt-3 inline-block underline text-[var(--brand-gold)]">More About Our Mission ›</Link>
        </div>

        {/* Column 3: Navigate */}
        <nav className="grid grid-cols-2 gap-x-8">
          <div className="space-y-2">
            <h5 className="uppercase tracking-wide text-white/70 text-sm">Navigate</h5>
            <Link href="/programs/autos" className="block hover:underline">Autos ›</Link>
            <Link href="/programs/investment" className="block hover:underline">Investment ›</Link>
            <Link href="/programs/community-support" className="block hover:underline">Community Support ›</Link>
            <Link href="/donation" className="block hover:underline">Donation ›</Link>
          </div>
          <div className="space-y-2 mt-6 md:mt-7">
            <Link href="/careers" className="block hover:underline">Careers ›</Link>
            <Link href="/resources" className="block hover:underline">Resources ›</Link>
            <Link href="/contact" className="block hover:underline">Contact Us ›</Link>
            <Link href="/about" className="block hover:underline">About ›</Link>
            <Link href="/programs/investment/partnerships" className="block hover:underline">Partnerships ›</Link>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-default py-4 flex flex-wrap items-center justify-between gap-3 text-white/80">
          <div>
            Bsons Inc • 49 Little Avenue, Bowmanville ON L1C 1J8 • <Link href="https://maps.app.goo.gl/" className="underline text-[var(--brand-gold)]">Map</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15">Sitemap</Link>
            <span>© 2025 Bsons Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
