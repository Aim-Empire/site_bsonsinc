import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-brand-navy text-white mt-8">
      <div className="container-default py-10 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white border border-white/30 grid place-items-center">
              <img src="/logo.png" className="w-8 h-8 object-contain" alt="logo"/>
            </span>
            <span className="font-display text-lg">Bsons Inc.</span>
          </div>
          <p className="mt-3 text-sm text-white/80">Community • Commerce • Generational Wealth</p>
        </div>

        {/* Quick Links (buttons) */}
        <div>
          <h4 className="font-semibold">Quick links</h4>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link href="/programs" className="btn-outline text-center">Programs</Link>
            <Link href="/apply" className="btn-outline text-center">Apply</Link>
            <Link href="/donation" className="btn-outline text-center">Donate</Link>
            <Link href="/programs/autos" className="btn-outline text-center">Autos</Link>
            <Link href="/resources" className="btn-outline text-center">Resources</Link>
            <Link href="/testimonials" className="btn-outline text-center">Testimonials</Link>
          </div>
        </div>

        {/* Company & Support */}
        <div>
          <h4 className="font-semibold">Company & Support</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li>Support: <a className="underline" href="mailto:support@bsonsinc.com">support@bsonsinc.com</a></li>
            <li>Career: <a className="underline" href="mailto:career@bsonsinc.com">career@bsonsinc.com</a></li>
            <li>Admin Desk: <a className="underline" href="mailto:admin@bsonsinc.com">admin@bsonsinc.com</a></li>
            <li className="pt-1">
              <a
                href="https://wa.me/19056971979"
                target="_blank"
                className="btn-outline inline-flex"
              >WhatsApp Support</a>
            </li>
            <li className="pt-2 text-white/80">
              49 Little Avenue, Bowmanville ON L1C 1J8
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#0B2649]">
        <div className="container-default py-5 text-xs text-white/80">
          <p className="italic">
            Disclaimer: Information on this site is for general purposes only and does not constitute
            financial, legal, or investment advice. Eligibility and availability are subject to verification
            and partner approval. Not all applicants will qualify.
          </p>
          <div className="mt-2">© {new Date().getFullYear()} Bsons Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
