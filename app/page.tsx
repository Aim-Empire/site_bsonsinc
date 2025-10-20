import Button from "@/components/Button";
import Link from "next/link";

export default function Page(){
  return (
    <>
      {/* Intro (no big logo, warm hero) */}
      <section className="hero border-b">
        <div className="container-default section">
          <h1 className="h1">Welcome to <span className="text-brand-blue">Bsons Inc.</span></h1>
          <p className="lead mt-3">
            Bourgeois & Sons Incorporated — community uplift, practical programs, and pathways to
            generational wealth across the US, Canada, UK, and Australia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/programs" variant="primary">Explore Programs</Button>
            <Button href="/apply" variant="outline">Quick Apply</Button>
            <Button href="/testimonials" variant="soft">Testimonials</Button>
          </div>
        </div>
      </section>

      {/* Programs overview (neutral white, cards) */}
      <section className="bg-white">
        <div className="container-default section">
          <h2 className="h2">Programs</h2>
          <div className="grid-cards mt-6">
            <div className="card">
              <h3 className="font-display text-xl text-brand-navy">Community Support</h3>
              <p className="mt-2 text-sm text-neutral-700">Targeted support for seniors, families, and disabled citizens.</p>
              <Button href="/programs/community-support" className="mt-4">Learn more</Button>
            </div>
            <div className="card">
              <h3 className="font-display text-xl text-brand-navy">Loans</h3>
              <p className="mt-2 text-sm text-neutral-700">Personal & small business loans via banking partners.</p>
              <Button href="/programs/loan" className="mt-4">Learn more</Button>
            </div>
            <div className="card">
              <h3 className="font-display text-xl text-brand-navy">Small Business Loan</h3>
              <p className="mt-2 text-sm text-neutral-700">Working capital and growth financing support.</p>
              <Button href="/programs/small-business-loan" className="mt-4">Learn more</Button>
            </div>
            <div className="card">
              <h3 className="font-display text-xl text-brand-navy">Investment</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Save funds by investing and earn more while saving — learn types, benefits, and risks,
                including crypto (legitimate but often abused by scammers).
              </p>
              <Button href="/programs/investment" className="mt-4">Learn more</Button>
            </div>
            <div className="card">
              <h3 className="font-display text-xl text-brand-navy">Autos</h3>
              <p className="mt-2 text-sm text-neutral-700">Buying, selling & weekly truck rentals. Referral bonuses available.</p>
              <Button href="/programs/autos" className="mt-4">Learn more</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation (soft amber/cream) */}
      <section className="bg-amber-50 border-y">
        <div className="container-default section">
          <h2 className="h2">Donation</h2>
          <p className="mt-2 text-neutral-700">
            Your contributions help expand community programs. We also draw on the Founder’s Metrolinx pension
            and the long-standing Bourgeois Family Generational account for larger needs.
          </p>
          <div className="mt-4"><Button href="/donation" variant="primary">Donate</Button></div>
        </div>
      </section>

      {/* Autos focus (gradient & bold) */}
      <section className="bg-gradient-to-b from-emerald-50 to-sky-50">
        <div className="container-default section">
          <h2 className="h2">Autos — Founder’s Current Focus</h2>
          <p className="mt-2 text-neutral-700">
            We buy, sell, and rent trucks with flexible weekly payments. Earn bonuses by referring friends and
            family — building opportunity through mobility.
          </p>
          <div className="mt-4 flex gap-3">
            <Button href="/programs/autos" variant="soft">Explore Autos</Button>
            <Button href="/apply?program=autos" variant="outline">Apply</Button>
          </div>
        </div>
      </section>

      {/* Founder note (serif and link to Metrolinx) */}
      <section className="bg-white">
        <div className="container-default section">
          <h2 className="h2">Founder’s Note</h2>
          <p className="mt-2 font-serif text-neutral-800">
            The Bourgeois Family has supported our community for decades, mostly offline. After retiring from
            <a className="text-brand-blue underline ml-1" href="https://www.metrolinx.com" target="_blank">Metrolinx</a>,
            the plan is to grow our impact online. Inspiration also came from the Metrolinx Community Support program.
            Today, we continue via donations, the Founder’s Metrolinx pension, and our Family Generational account when
            needs are significant — while expanding our Autos business and Investment education.
          </p>
        </div>
      </section>

      {/* Investment highlight (cool tone) */}
      <section className="bg-sky-50">
        <div className="container-default section">
          <h2 className="h2">Investment Program</h2>
          <ul className="mt-3 list-disc pl-6 text-neutral-700">
            <li>Save funds by investing and earn more while saving.</li>
            <li>Understand types (stocks, bonds, funds, crypto, and more) and benefits.</li>
            <li>Crypto is legitimate but high-risk and often abused by scammers — learn safe practices.</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <Button href="/programs/investment" variant="soft">Learn More</Button>
            <Button href="/apply?program=investment" variant="outline">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Contact (distinct background) */}
      <section className="bg-gradient-to-b from-white to-amber-50">
        <div className="container-default section">
          <h2 className="h2">Contact Us</h2>
          <form className="card mt-6 grid gap-4">
            <div>
              <label className="text-sm">Full Name</label>
              <input className="mt-1 border rounded-lg p-2 w-full" placeholder="Your name" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Email</label>
                <input className="mt-1 border rounded-lg p-2 w-full" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm">Topic</label>
                <select className="mt-1 border rounded-lg p-2 w-full">
                  <option>General</option>
                  <option>Programs</option>
                  <option>Autos</option>
                  <option>Investment</option>
                  <option>Careers</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea className="mt-1 border rounded-lg p-2 w-full min-h-[120px]" />
            </div>
            <button className="btn self-start">Send</button>
          </form>
        </div>
      </section>

      {/* Testimonials teaser */}
      <section className="bg-white">
        <div className="container-default section">
          <h2 className="h2">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <figure className="card">
              <blockquote className="text-sm text-neutral-700">“Clear guidance and quick support. The team truly cares.”</blockquote>
              <figcaption className="mt-3 text-xs text-neutral-500">— Community Member, Toronto</figcaption>
            </figure>
            <figure className="card">
              <blockquote className="text-sm text-neutral-700">“Their small business help got us through a rough patch.”</blockquote>
              <figcaption className="mt-3 text-xs text-neutral-500">— Shop Owner, Atlanta</figcaption>
            </figure>
            <figure className="card">
              <blockquote className="text-sm text-neutral-700">“Weekly truck rental made my delivery side-gig possible.”</blockquote>
              <figcaption className="mt-3 text-xs text-neutral-500">— Driver, London</figcaption>
            </figure>
          </div>
          <div className="mt-6"><Button href="/testimonials" variant="ghost">Read more testimonials →</Button></div>
        </div>
      </section>
    </>
  );
}
