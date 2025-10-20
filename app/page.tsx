import Button from "@/components/Button";
import Link from "next/link";

function Img({src,alt}:{src:string;alt:string}) {
  return <img src={src} alt={alt} className="w-full h-40 object-cover rounded-xl border" />;
}

export default function Page(){
  return (
    <>
      {/* HERO */}
      <section className="hero border-b">
        <div className="container-default section">
          <h1 className="h1">Welcome to <span className="text-brand-blue">Bsons Inc.</span></h1>
          <p className="lead mt-3 max-w-3xl">
            Community uplift, practical programs, and pathways to generational wealth across the US, Canada,
            UK, and Australia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/programs">Explore Programs</Button>
            <Link href="https://www.metrolinx.com" target="_blank" className="btn-outline">Metrolinx</Link>
            <Button href="/apply" variant="soft" className="!bg-amber-200">Quick Apply</Button>
          </div>
        </div>
      </section>

      {/* THREE FEATURED TILES (with images) */}
      <section className="bg-white">
        <div className="container-default section">
          <div className="grid-cards">
            <div className="card">
              <Img src="/support.jpg" alt="Community Support" />
              <h3 className="font-display text-xl mt-3">Community Support</h3>
              <p className="mt-2 text-sm text-neutral-700">Targeted support for seniors, families, and disabled citizens.</p>
              <Button href="/programs/community-support" className="mt-4">Learn more</Button>
            </div>
            <div className="card">
              <Img src="/autos.jpg" alt="Autos" />
              <h3 className="font-display text-xl mt-3">Autos (Trucks)</h3>
              <p className="mt-2 text-sm text-neutral-700">Buy, sell, or rent weekly; referral bonuses available.</p>
              <Button href="/programs/autos" className="mt-4">Explore Autos</Button>
            </div>
            <div className="card">
              <Img src="/invest.jpg" alt="Investment" />
              <h3 className="font-display text-xl mt-3">Investment</h3>
              <p className="mt-2 text-sm text-neutral-700">Save funds by investing. Learn types, benefits, risks (incl. crypto).</p>
              <Button href="/programs/investment" className="mt-4">Learn more</Button>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION STRIP (short) */}
      <section className="bg-brand-navy text-white">
        <div className="container-default section">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl">Support the Mission</h2>
              <p className="text-white/80 text-sm mt-1">Donations expand our programs alongside the Founder’s Metrolinx pension and our Family Generational account.</p>
            </div>
            <Link href="/donation" className="btn-outline">Donate</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL TEASER (short) */}
      <section className="bg-amber-50">
        <div className="container-default section">
          <h2 className="h2">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <figure className="card"><blockquote className="text-sm">“Clear guidance and quick support.”</blockquote><figcaption className="text-xs text-neutral-500 mt-2">— Toronto</figcaption></figure>
            <figure className="card"><blockquote className="text-sm">“The weekly truck rental made my work possible.”</blockquote><figcaption className="text-xs text-neutral-500 mt-2">— London</figcaption></figure>
            <figure className="card"><blockquote className="text-sm">“Real help for our small business.”</blockquote><figcaption className="text-xs text-neutral-500 mt-2">— Atlanta</figcaption></figure>
          </div>
          <div className="mt-6"><Button href="/testimonials" variant="ghost">Read more →</Button></div>
        </div>
      </section>

      {/* COMPACT CONTACT CTA */}
      <section className="bg-white">
        <div className="container-default section">
          <div className="card">
            <h3 className="font-display text-xl">Have questions?</h3>
            <p className="mt-2 text-sm text-neutral-700">We respond within 1–2 business days.</p>
            <div className="mt-4 flex gap-3">
              <Button href="/contact">Contact Us</Button>
              <Button href="/apply" variant="soft">Apply</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
