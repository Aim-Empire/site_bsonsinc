import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import CTA from "@/components/CTA";

export default function Page(){
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src="/hero.jpg" className="w-full h-full object-cover opacity-90" alt="Bsons Inc hero"/>
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/92 to-white" />
        </div>

        <div className="container-default py-10 md:py-16 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="h1">Bsons Inc.</h1>
            <p className="mt-2 italic text-neutral-600">Community • Commerce • Generational Wealth</p>

            <p className="mt-3 text-neutral-700">
              We support families and small businesses through community programs, simple investing education, and
              the founder’s Autos business (buy, sell, rent with flexible weekly plans).
            </p>
            <p className="mt-2 text-neutral-700">
              We prioritise clear steps, transparent terms, and real outcomes — guiding you from first enquiry to confident action.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn btn-lg" href="/programs">Explore Programs</Link>
              <Link className="btn-outline btn-lg" href="/apply">Quick Apply</Link>
              <Link className="btn-outline btn-lg" href="/programs/investment/partnerships">Partnership Investment</Link>
            </div>

            <p className="mt-3 italic text-neutral-600">Community • Commerce • Generational Wealth</p>
          </div>

          <div className="grid gap-4">
            <div className="card flex items-center gap-4">
              <img src="/autos.jpg" className="w-24 h-24 rounded-xl object-cover" alt="Autos"/>
              <div>
                <h3 className="font-display text-xl text-[var(--brand-navy)]">Autos (Buy • Sell • Rent)</h3>
                <p className="text-sm text-neutral-600">Trucks & cars with fair weekly payments and referral bonuses.</p>
                <Link className="mt-2 inline-block btn-outline" href="/programs/autos">Learn more</Link>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <img src="/invest.jpg" className="w-24 h-24 rounded-xl object-cover" alt="Investment"/>
              <div>
                <h3 className="font-display text-xl text-[var(--brand-navy)]">Investment Programs</h3>
                <p className="text-sm text-neutral-600">Save while you invest. Learn types, risks, benefits, and crypto basics.</p>
                <Link className="mt-2 inline-block btn-outline" href="/programs/investment">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID LINKS */}
      <section className="container-default py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Community Support" href="/programs/community-support">Targeted help for families, seniors, and people with disabilities.</FeatureCard>
          <FeatureCard title="Small Business Loan" href="/programs/small-business-loan">Working capital for inventory, equipment, and growth.</FeatureCard>
          <FeatureCard title="How It Works" href="/how-it-works">Simple steps from pre-check to approval and support.</FeatureCard>
          <FeatureCard title="Donation" href="/donation">Your gifts expand local impact. Every dollar counts.</FeatureCard>
          <FeatureCard title="Careers" href="/careers">Join as FDO and other roles — mission-driven, community-first.</FeatureCard>
          <FeatureCard title="Resources" href="/resources">Guides, FAQs, and disclosures in one place.</FeatureCard>
        </div>
      </section>

      {/* Testimonials block just above footer */}
      <section className="container-default pb-10">
        <h2 className="h2">Testimonials</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            ["“The weekly truck plan helped me launch deliveries.”","— M. A., Toronto"],
            ["“Clear steps and friendly support. It just works.”","— R. K., Houston"],
            ["“Their investment class finally demystified index funds.”","— J. B., London"]
          ].map(([q,by],i)=>(
            <figure key={i} className="card">
              <blockquote className="text-neutral-700">{q}</blockquote>
              <figcaption className="mt-3 text-sm text-neutral-500">{by}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
