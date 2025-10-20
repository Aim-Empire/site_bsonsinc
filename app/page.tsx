import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src="/hero.jpg" className="w-full h-full object-cover opacity-90" alt="Bsons Inc hero"/>
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/92 to-white" />
        </div>
        <div className="container-default py-12 md:py-20 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="font-display text-4xl md:text-6xl text-brand-navy leading-tight">
              Community • Commerce • Generational Wealth
            </h1>
            <p className="mt-3 text-lg text-neutral-700">
              We support families and small businesses through community programs, simple investing education,
              and the founder’s Autos business (buy, sell, rent with flexible weekly plans).
              Offline support began years ago and has since come online to reach more communities.
            </p>
            <p className="mt-2 italic text-brand-blue/80">Community • Commerce • Generational Wealth</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn" href="/programs">Explore Programs</Link>
              <Link className="btn-outline" href="/partnerships">Partnership Investments</Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="card flex items-center gap-4">
              <img src="/autos.jpg" className="w-24 h-24 rounded-xl object-cover" alt="Autos"/>
              <div>
                <h3 className="font-display text-xl text-brand-navy">Autos (Buy • Sell • Rent)</h3>
                <p className="text-sm text-neutral-600">Flexible weekly payments. Trucks & cars. Referral bonuses.</p>
                <Link className="mt-2 inline-block btn-outline" href="/programs/autos">See Vehicles</Link>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <img src="/invest.jpg" className="w-24 h-24 rounded-xl object-cover" alt="Investment"/>
              <div>
                <h3 className="font-display text-xl text-brand-navy">Investment Programs</h3>
                <p className="text-sm text-neutral-600">Clear steps: types, risks, benefits, and crypto basics.</p>
                <Link className="mt-2 inline-block btn-outline" href="/programs/investment">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container-default py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Partnership Investments" href="/partnerships">
            Join real projects with transparent ROI and reporting.
          </FeatureCard>
          <FeatureCard title="Community Support" href="/programs/community-support">
            Targeted help for families, seniors, and people with disabilities.
          </FeatureCard>
          <FeatureCard title="Careers" href="/careers">
            Join as FDO and other roles — mission-driven, community-first.
          </FeatureCard>
        </div>
      </section>

      {/* Founder block */}
      <section className="bg-[var(--brand-cream)] border-y">
        <div className="container-default py-12 md:py-16 grid md:grid-cols-3 gap-8 items-center">
          <img src="/founder.jpg" alt="Founder" className="rounded-2xl border w-full h-64 md:h-72 object-cover"/>
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl md:text-4xl text-brand-navy">Founder’s Note</h2>
            <p className="mt-2 text-neutral-700">
              Our family has supported communities offline for years. After retirement from
              <a href="https://www.metrolinx.com" className="text-brand-blue underline ml-1" target="_blank">Metrolinx</a>,
              we brought that work online so more people can access mobility help, investing literacy, and small business support.
              Funding comes from donations, the Metrolinx pension, and—when needs are larger—the Bourgeois Family Generational Account.
            </p>
            <div className="mt-4">
              <div className="text-lg font-semibold text-brand-navy">— Founder, Bsons Inc.</div>
              <div className="text-sm text-neutral-600 italic">Committed to practical solutions and transparent support.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
