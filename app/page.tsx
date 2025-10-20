import Link from "next/link";
import CTA from "@/components/CTA";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

export default function Page() {
  return (
    <>
      {/* Hero intro (no big logo) */}
      <section className="hero border-b">
        <div className="container-default py-12 md:py-16">
          <h1 className="h1 font-fancy">Welcome to Bsons Inc.</h1>
          <p className="lead mt-3">
            Bourgeois &amp; Sons Incorporated — Community • Commerce • Generational Wealth.
            We connect families and small businesses across the US, Canada, UK, and Australia
            with practical programs: community support, loans, investments, and autos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn" href="/apply">Start Application</Link>
            <Link className="btn-outline" href="/programs">Explore Programs</Link>
            <Link className="btn-outline" href="/donation">Donate</Link>
          </div>
        </div>
      </section>

      {/* Programs at a glance */}
      <Section title="Programs">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-display text-xl text-brand-navy">Community Support</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Targeted help for vulnerable families, seniors, and disabled citizens.
            </p>
            <Link className="btn mt-4" href="/programs/community-support">Learn More</Link>
          </div>

          <div className="card">
            <h3 className="font-display text-xl text-brand-navy">Loans</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Personal & small-business financing via partner banks and credit unions.
            </p>
            <Link className="btn mt-4" href="/programs/loan">Learn More</Link>
          </div>

          <div className="card">
            <h3 className="font-display text-xl text-brand-navy">Small Business Loan</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Working capital and growth funding with basic financials and underwriting.
            </p>
            <Link className="btn mt-4" href="/programs/small-business-loan">Learn More</Link>
          </div>

          <div className="card">
            <h3 className="font-display text-xl text-brand-navy">Investment Programs</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Save while you invest. Learn-first guidance, risk controls, and goal-based plans.
              We also cover modern assets like crypto—legitimate but often abused by scammers—
              with clear education on risks and responsible participation.
            </p>
            <Link className="btn mt-4" href="/programs/investment">Learn More</Link>
          </div>

          <div className="card">
            <h3 className="font-display text-xl text-brand-navy">Autos (Buy • Sell • Rent)</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Founder-led focus on trucks: purchase, sale, or weekly rent-to-own. Referral bonuses available.
            </p>
            <Link className="btn mt-4" href="/programs/autos">Learn More</Link>
          </div>

          <div className="card">
            <h3 className="font-display text-xl text-brand-navy">Donation</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Community work is sustained by your donations, Founder’s Metrolinx pension, and
              the Bourgeois Family Generational Account (decades old) for larger needs.
            </p>
            <Link className="btn mt-4" href="/donation">Give Support</Link>
          </div>
        </div>
      </Section>

      {/* Autos spotlight */}
      <Section title="Autos — Trucks Focus">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h4 className="font-semibold text-brand-navy">Buy • Sell • Weekly Rentals</h4>
            <p className="mt-2 text-sm text-neutral-700">
              Reliable trucks for work and mobility. Weekly payments for rentals, with flexible options.
              Referral program rewards clients who bring in successful customers.
            </p>
            <Link className="btn mt-4" href="/programs/autos">Check Vehicle Options</Link>
          </div>
          <div className="card">
            <h4 className="font-semibold text-brand-navy">Fast-track Eligibility</h4>
            <p className="mt-2 text-sm text-neutral-700">
              Tell us your country (US/CA/UK/AU) and purpose, and we’ll match you quickly.
            </p>
            <Link className="btn mt-4" href="/apply?program=autos">Start Autos Application</Link>
          </div>
        </div>
      </Section>

      {/* Founder note */}
      <Section title="Founder’s Note">
        <div className="card">
          <p className="text-sm text-neutral-700">
            The Bourgeois family has quietly supported community needs for years. After retiring from{" "}
            <a className="text-brand-blue underline" href="https://www.metrolinx.com" target="_blank">
              Metrolinx
            </a>
            , the Founder decided to bring this work online through Bsons Inc. Our motivation was also shaped by{" "}
            <a className="text-brand-blue underline" href="https://www.metrolinx.com/en/community" target="_blank">
              Metrolinx Community Support
            </a>
            . Today, funding comes from donations, the Founder’s Metrolinx pension, and when necessary,
            the Bourgeois Family Generational Account to handle larger community needs. Alongside this mission,
            the Founder now runs our Autos program as an active business line.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="btn" href="/donation">Donate</Link>
            <Link className="btn-outline" href="/programs/autos">Explore Autos</Link>
            <Link className="btn-outline" href="/programs/investment">Investment Overview</Link>
          </div>
        </div>
      </Section>

      {/* Contact quick form */}
      <Section title="Contact Us">
        <div className="grid md:grid-cols-2 gap-6">
          <form className="card">
            <label className="text-sm">Full Name</label>
            <input className="mt-1 border rounded-lg p-2 w-full" placeholder="Your name" />
            <label className="text-sm mt-4">Email</label>
            <input className="mt-1 border rounded-lg p-2 w-full" placeholder="you@example.com" />
            <label className="text-sm mt-4">Message</label>
            <textarea className="mt-1 border rounded-lg p-2 w-full min-h-[120px]" placeholder="How can we help?" />
            <button className="mt-4 btn">Send</button>
          </form>
          <div className="card">
            <h4 className="font-semibold text-brand-navy">Quick Links</h4>
            <ul className="mt-2 text-sm">
              <li><Link className="text-brand-blue underline" href="/apply">Apply</Link></li>
              <li><Link className="text-brand-blue underline" href="/programs">Browse Programs</Link></li>
              <li><Link className="text-brand-blue underline" href="/donation">Make a Donation</Link></li>
            </ul>
            <p className="mt-4 text-xs text-neutral-600">
              We respond within 1–2 business days.
            </p>
          </div>
        </div>
      </Section>

      <CTA title="Ready to begin?" primaryHref="/apply" secondaryHref="/contact" />
    </>
  );
}