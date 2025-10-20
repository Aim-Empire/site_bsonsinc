export default function Footer(){
  return (
    <footer className="bg-brand-navy text-white mt-8">
      <div className="container-default py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="w-9 h-9 rounded-full border border-white/20" alt="logo"/>
            <span className="font-display text-lg">Bsons Inc.</span>
          </div>
          <p className="mt-3 text-sm text-white/80">Community • Commerce • Generational Wealth</p>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 text-sm">
            <li><a className="underline" href="mailto:support@bsonsinc.com">support@bsonsinc.com</a></li>
            <li><a className="underline" href="mailto:admin@bsonsinc.com">admin@bsonsinc.com</a></li>
            <li><a className="underline" href="mailto:career@bsonsinc.com">career@bsonsinc.com</a></li>
            <li className="mt-2">WhatsApp Support: +1 (###) ###-####</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Regions</h4>
          <p className="mt-2 text-sm">US • Canada • UK • Australia</p>
        </div>
      </div>

      <div className="bg-[#0B2649]">
        <div className="container-default py-5 text-xs text-white/80">
          Disclaimer: Information on this site is for general purposes only and does not constitute
          financial, legal, or investment advice. Eligibility and availability are subject to verification and partner approval.
          <div className="mt-2">© {new Date().getFullYear()} Bsons Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
