import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <>
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
              Bourgeois &amp; Sons Incorporated focuses on mobility, small business support, and
              simple investment education for families across the US, Canada, UK, and Australia.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn" href="/programs">Explore Programs</Link>
              <Link className="btn-outline" href="/apply">Quick Apply</Link>
            </div>
            <div className="mt-4 text-xs text-neutral-600">Serving: US • Canada • UK • Australia • Est. 2019</div>
          </div>
          <div className="grid gap-4">
            <div className="card flex items-center gap-4">
              <img src="/autos.jpg" className="w-24 h-24 rounded-xl object-cover" alt="Autos"/>
              <div>
                <h3 className="font-display text-xl text-brand-navy">Autos (Buy • Sell • Rent)</h3>
                <p className="text-sm text-neutral-600">Flexible weekly payments. Trucks &amp; cars. Referral bonuses.</p>
                <Link className="mt-2 inline-block btn-outline" href="/programs/autos">See Vehicles</Link>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <img src="/invest.jpg" className="w-24 h-24 rounded-xl object-cover" alt="Investment"/>
              <div>
                <h3 className="font-display text-xl text-brand-navy">Investment Programs</h3>
                <p className="text-sm text-neutral-600">Save and grow with clarity: types, risks, benefits, and crypto basics.</p>
                <Link className="mt-2 inline-block btn-outline" href="/programs/investment">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-default py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Community Support" href="/programs/community-support">
            Targeted help for families, seniors, and people with disabilities.
          </FeatureCard>
          <FeatureCard title="Small Business Loan" href="/programs/small-business-loan">
            Working capital for inventory, equipment, and growth.
          </FeatureCard>
          <FeatureCard title="How It Works" href="/how-it-works">
            Simple steps from pre-check to approval and support.
          </FeatureCard>
          <FeatureCard title="Donation" href="/donation">
            Your gifts expand local impact. Every dollar counts.
          </FeatureCard>
          <FeatureCard title="Careers" href="/careers">
            Join as FDO and other roles — mission-driven, community-first.
          </FeatureCard>
          <FeatureCard title="Resources" href="/resources">
            Guides, FAQs, and disclosures in one place.
          </FeatureCard>
        </div>
      </section>

      <section className="bg-[var(--brand-cream)] border-y">
        <div className="container-default py-12 md:py-16 grid md:grid-cols-2 gap-8">
          <img src="/autos.jpg" className="w-full h-64 md:h-80 object-cover rounded-2xl border" alt="Autos"/>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl text-brand-navy">Autos: Buy • Sell • Rent</h2>
            <p className="mt-2 text-neutral-700">
              The founder currently runs the Autos arm: trucks &amp; vehicles with weekly payments,
              transparent terms, and referral bonuses.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/programs/autos" className="btn">See Vehicles</Link>
              <Link href="/apply?program=autos" className="btn-outline">Apply</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-default py-12 md:py-16 grid md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl text-brand-navy">Investment, explained simply</h2>
            <p className="mt-2 text-neutral-700">
              Save funds while investing and earn more over time. We cover types of investments,
              risk/benefit trade-offs, and fast-growing areas like crypto. Crypto is legitimate but
              often abused by scammers — we teach safe, informed participation.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/programs/investment" className="btn">Learn More</Link>
              <Link href="/apply?program=investment" className="btn-outline">Get Started</Link>
            </div>
          </div>
          <img src="/invest.jpg" className="order-1 md:order-2 w-full h-64 md:h-80 object-cover rounded-2xl border" alt="Investment"/>
        </div>
      </section>

      <section className="container-default py-12">
        <div className="card">
          <h3 className="font-display text-2xl text-brand-navy">Founder’s Note</h3>
          <p className="mt-2 text-neutral-700">
            The Bourgeois family has supported communities offline for years. After retirement from{" "}
            <a href="https://www.metrolinx.com" className="text-brand-blue underline" target="_blank">Metrolinx</a>,
            we’re bringing Community Support online. Funding comes from donations, the founder’s Metrolinx pension,
            and — for larger needs — the Bourgeois Family Generational Account, in existence for decades.
          </p>
          <Link className="mt-4 inline-block btn-outline" href="/about">Read full story</Link>
        </div>
      </section>

      <section className="bg-brand-blue text-white">
        <div className="container-default py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg">Your donation expands Community Support across US, Canada, UK &amp; Australia.</p>
          <Link className="btn bg-[var(--brand-gold)] text-[var(--brand-navy)]" href="/donation">Donate</Link>
        </div>
      </section>

      <section className="container-default py-12">
        <h2 className="font-display text-3xl text-brand-navy">What people say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            ["“The weekly truck plan let me start my delivery side-business.”", "— M. A., Toronto"],
            ["“Clear steps and friendly support. The process just made sense.”", "— R. K., Houston"],
            ["“Their investment class finally demystified index funds for me.”", "— J. B., London"],
          ].map(([quote, by], i) => (
            <figure key={i} className="card">
              <blockquote className="text-neutral-700">{quote}</blockquote>
              <figcaption className="mt-3 text-sm text-neutral-500">{by}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTA title="Ready to begin?" primaryHref="/apply" secondaryHref="/contact" />
    </>
  );
}
