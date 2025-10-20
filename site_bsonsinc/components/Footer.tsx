export default function Footer(){
  return (
    <footer className="border-t">
      <div className="container-default py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="w-8 h-8 rounded-full border" alt="logo"/>
            <span className="font-display text-lg text-brand-navy">Bsons Inc.</span>
          </div>
          <p className="mt-3 text-sm text-neutral-600">Community • Commerce • Generational Wealth</p>
        </div>
        <div>
          <h4 className="font-semibold text-brand-navy">Company Email</h4>
          <ul className="mt-2 text-sm">
            <li><a className="text-brand-blue" href="mailto:support@bsonsinc.com">support@bsonsinc.com</a></li>
            <li><a className="text-brand-blue" href="mailto:admin@bsonsinc.com">admin@bsonsinc.com</a></li>
            <li><a className="text-brand-blue" href="mailto:career@bsonsinc.com">career@bsonsinc.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-brand-navy">Regions</h4>
          <p className="mt-2 text-sm">United States • Canada • United Kingdom • Australia</p>
        </div>
      </div>
      <div className="bg-[var(--brand-cream)] border-t">
        <div className="container-default py-6 text-xs text-neutral-600">
          <p>
            Disclaimer: Information on this site is for general purposes only and does not constitute
            financial, legal, or investment advice. Eligibility, terms, and availability are subject to
            verification and partner approval. Not all applicants will qualify.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Bsons Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
