import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1E34] text-white mt-16">
      <div className="container-default py-10 grid md:grid-cols-3 gap-8">
        {/* 1) Newsletter / Social */}
        <div>
          <h3 className="font-display text-xl">Stay Connected</h3>
          <p className="mt-2 text-white/80">
            Join our list for community updates, programs and opportunities.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              className="flex-1 rounded-xl bg-white/10 border border-white/15 px-4 py-3 outline-none"
              placeholder="Email Address"
            />
            <button className="rounded-xl px-4 py-3 bg-[var(--brand-gold)] text-[var(--brand-navy)] font-semibold">
              Sign-Up
            </button>
          </div>
          <div className="mt-4 flex gap-3">
            {["f","»","in","▶"].map((s,i)=>(
              <span key={i} className="w-10 h-10 grid place-items-center rounded-full bg-white/10">{s}</span>
            ))}
          </div>
        </div>

        {/* 2) Mission */}
        <div>
          <h3 className="font-display text-xl">Committed to Community</h3>
          <p className="mt-2 text-white/80">
            We collaborate with like-minded people to make a positive difference economically and socially.
            From community support to mobility and small business, we put families first. Let’s build together.
          </p>
          <Link href="/about" className="mt-3 inline-block text-[var(--brand-gold)]">
            More About Our Mission ›
          </Link>
        </div>

        {/* 3) Navigate */}
        <div>
          <h3 className="font-display text-xl">Navigate</h3>
          <div className="mt-2 grid grid-cols-2 gap-x-10 gap-y-2">
            <Link href="/programs/autos">Autos ›</Link>
            <Link href="/programs/investment">Investment ›</Link>
            <Link href="/programs/community-support">Community Support ›</Link>
            <Link href="/donation">Donation ›</Link>
            <Link href="/careers">Careers ›</Link>
            <Link href="/resources">Resources ›</Link>
            <Link href="/partnerships">Partnerships ›</Link>
            <Link href="/about">About ›</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-default py-5 text-white/80 flex items-center justify-between gap-4 flex-wrap">
          <div>
            Bsons Inc • 49 Little Avenue, Bowmanville, ON L1C 1J8 •{" "}
            <a className="text-[var(--brand-gold)]" href="https://maps.google.com/?q=49+Little+Avenue+Bowmanville+ON+L1C+1J8" target="_blank">Map</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/sitemap.xml">
              <span className="inline-block rounded-xl bg-white/10 px-3 py-1">Sitemap</span>
            </Link>
            <span>© {new Date().getFullYear()} Bsons Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
