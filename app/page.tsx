import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import QuickLinks from "@/components/QuickLinks";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src="/hero.jpg" className="w-full h-full object-cover opacity-90" alt="Hero"/>
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/92 to-white" />
        </div>
        <div className="container-default py-12 md:py-20 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="font-display text-4xl md:text-6xl text-brand-navy leading-tight">
              Bsons Inc.
            </h1>
            <div className="mt-1 text-base md:text-lg italic text-brand-navy/80">
              Community • Commerce • Generational Wealth
            </div>
            <p className="mt-4 text-lg text-neutral-700">
              We’re Bourgeois &amp; Sons Incorporated: a family-led initiative supporting mobility,
              business creation, and simple investment education across the US, Canada, UK, and Australia.
              Our approach is clear: <strong>small steps, transparent terms, and real outcomes</strong>.
            </p>
            <p className="mt-2 text-neutral-700">
              We help people get moving (Autos), stabilize and grow (Loans &amp; Programs), and build
              confidence with money (Investing 101 &amp; crypto safety). Funding comes from donations,
              the founder’s pension, and—when needed—the Bourgeois Family Generational Account.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn" href="/programs">Explore Programs</Link>
              <Link className="btn-outline" href="/apply">Quick Apply</Link>
            </div>
            <div className="mt-4 text-xs text-neutral-600">
              Serving: US • Canada • UK • Australia • Est. 2019
            </div>
          </div>
          <div className="grid gap-4">
            <div className="card flex items-center gap-4">
              <img src="/autos.jpg" className="w-24 h-24 rounded-xl object-cover" alt="Autos"/>
              <div>
                <h3 className="font-display text-xl text-brand-navy">Autos (Buy • Sell • Rent)</h3>
                <p className="text-sm text-neutral-600">
                  Weekly payments for trucks &amp; cars. Referral bonuses. Clear paperwork.
                </p>
                <Link className="mt-2 inline-flex btn-outline" href="/programs/autos">See Vehicles</Link>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <img src="/invest.jpg" className="w-24 h-24 rounded-xl object-cover" alt="Investment"/>
              <div>
                <h3 className="font-display text-xl text-brand-navy">Investment Programs</h3>
                <p className="text-sm text-neutral-600">
                  Save while you invest. Learn types, risks, benefits, and crypto basics—legit, but be safe.
                </p>
                <Link className="mt-2 inline-flex btn-outline" href="/programs/investment">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="container-default py-8">
        <QuickLinks />
      </section>

      {/* FEATURE GRID: include Community Support + Careers cards too */}
      <section className="container-default pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Community Support" href="/programs/community-support">
            Targeted help for families, seniors, and people with disabilities.
          </FeatureCard>
          <FeatureCard title="Small Business Loan" href="/programs/small-business-loan" cta="Check Details">
            Working capital for inventory, equipment, and growth.
          </FeatureCard>
          <FeatureCard title="Careers" href="/careers">
            Join as FDO and other roles—mission-driven, community-first.
          </FeatureCard>
          <FeatureCard title="Autos (Buy • Sell • Rent)" href="/programs/autos" cta="See Vehicles">
            Flexible weekly payments. Trucks &amp; cars. Referral bonuses.
          </FeatureCard>
          <FeatureCard title="Investment Programs" href="/programs/investment" cta="Learn More">
            Save while you invest. Types, benefits, crypto basics &amp; safety.
          </FeatureCard>
          <FeatureCard title="Resources" href="/resources" cta="Open Hub">
            Guides, FAQs, and disclosures in one place.
          </FeatureCard>
        </div>
      </section>

      {/* DONATION STRIP */}
      <section className="bg-brand-blue text-white">
        <div className="container-default py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg">Your donation expands Community Support across US, Canada, UK &amp; Australia.</p>
          <Link className="btn bg-[var(--brand-gold)] text-[var(--brand-navy)]" href="/donation">Donate</Link>
        </div>
      </section>

      {/* TESTIMONIALS BEFORE FOOTER */}
      <Testimonials />
    </>
  );
}
