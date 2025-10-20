// components/Footer.tsx
import Link from "next/link";

const LINKS_LEFT = [
  { href: "/programs/autos", label: "Autos" },
  { href: "/programs/investment", label: "Investment" },
  { href: "/programs/community-support", label: "Community Support" },
  { href: "/donation", label: "Donation" },
];

const LINKS_RIGHT = [
  { href: "/careers", label: "Careers" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const mapHref =
    "https://www.google.com/maps/search/?api=1&query=49+Little+Avenue,+Bowmanville+ON+L1C+1J8";

  return (
    <footer className="bg-[#0B1E34] text-white mt-16">
      {/* top */}
      <div className="container-default py-12 grid gap-10 md:grid-cols-3">
        {/* Stay Connected */}
        <section>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white grid place-items-center overflow-hidden">
              <img src="/logo.png" className="w-8 h-8 object-contain" alt="Bsons Inc." />
            </span>
            <div className="text-xl font-semibold">Bsons Inc.</div>
          </div>

          <p className="mt-4 text-sm text-white/80">
            Join our list for community updates, programs and opportunities.
          </p>

          {/* “Email + Sign-Up” look-alike (mailto based) */}
          <div className="mt-4 flex gap-2">
            <input
              disabled
              placeholder="Email Address"
              className="flex-1 rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-sm placeholder:text-white/50"
            />
            <a
              href="mailto:support@bsonsinc.com?subject=Subscribe%20me&body=Please%20add%20me%20to%20Bsons%20Inc.%20newsletter."
              className="btn"
            >
              Sign-Up ›
            </a>
          </div>

          {/* Socials */}
          <div className="mt-4 flex items-center gap-3">
            {[
              { href: "#", label: "Facebook", svg: (
                <path d="M14 8h-2V6c0-.6.4-1 1-1h1V3h-2a3 3 0 0 0-3 3v2H7v3h2v7h3v-7h2l1-3z" />
              )},
              { href: "#", label: "X / Twitter", svg: (
                <path d="M4 4l7 8-7 8h3l7-8-7-8H4zm8 0l7 8-7 8h3l7-8-7-8h-3z" />
              )},
              { href: "#", label: "LinkedIn", svg: (
                <path d="M4 9h3v11H4zM5.5 4A1.5 1.5 0 1 1 5.5 7 1.5 1.5 0 0 1 5.5 4zM10 9h3v1.6h.1A3.3 3.3 0 0 1 16.9 9c3 0 3.6 2 3.6 4.7V20H17v-5.1c0-1.2 0-2.7-1.7-2.7S13 13.5 13 14.8V20h-3z" />
              )},
              { href: "#", label: "YouTube", svg: (
                <path d="M22 8.2s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C16.8 5 12 5 12 5h0s-4.8 0-7.1.1c-.4 0-1.3.1-2.1.9C2.2 6.7 2 8.2 2 8.2S1.9 9.9 2 11.6v.8c.1 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.8.8 1.8.8 2.3.9 1.7.1 6.7.1 6.7.1s4.8 0 7.1-.1c.4 0 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-.8C22.1 9.9 22 8.2 22 8.2zM10 14.5v-6l6 3-6 3z" />
              )},
            ].map((i, idx) => (
              <a
                key={idx}
                href={i.href}
                aria-label={i.label}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/15 grid place-items-center hover:bg-white/15"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  {i.svg}
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Mission / committed */}
        <section>
          <h3 className="text-sm font-semibold tracking-wide text-white/80">
            COMMITTED TO COMMUNITY
          </h3>
          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            We collaborate with like-minded people to make a positive difference
            economically and socially. From community support to mobility and small
            business, we put families first. Let’s build together.
          </p>
          <Link href="/about" className="mt-3 inline-block text-[var(--brand-gold)] hover:underline">
            More About Our Mission ›
          </Link>
        </section>

        {/* Navigate */}
        <section className="grid gap-3 md:justify-end">
          <h3 className="text-sm font-semibold tracking-wide text-white/80">NAVIGATE</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2">
            {LINKS_LEFT.map((l) => (
              <Link key={l.href} href={l.href} className="text-[15px] text-brand-cream/90 hover:text-white">
                {l.label} &rsaquo;
              </Link>
            ))}
            {LINKS_RIGHT.map((l) => (
              <Link key={l.href} href={l.href} className="text-[15px] text-brand-cream/90 hover:text-white">
                {l.label} &rsaquo;
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-default py-4 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-white/80">
            Bsons Inc • 49 Little Avenue, Bowmanville ON L1C 1J8 •{" "}
            <a href={mapHref} className="text-[var(--brand-gold)] hover:underline">Map</a>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-white/80 hover:text-white">Privacy Policy</Link>
            <a href="/sitemap.xml" className="px-3 py-1 rounded-md bg-white/10 border border-white/15 hover:bg-white/15">
              Sitemap
            </a>
            <span className="text-white/60">© {year} Bsons Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}