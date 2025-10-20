import Link from "next/link";

type CardProps = { title: string; desc: string; href: string; img: string; bg?: string };
const Card = ({ title, desc, href, img, bg = "bg-white" }: CardProps) => (
  <div className={`rounded-2xl border border-neutral-200 p-6 shadow-sm ${bg}`}>
    <div className="flex gap-4">
      <img src={img} className="w-20 h-20 rounded-xl object-cover border" alt={title} />
      <div className="flex-1">
        <h3 className="font-serif text-xl text-[#0A2C57]">{title}</h3>
        <p className="text-sm text-neutral-600">{desc}</p>
        <Link href={href as any} className="mt-3 inline-block rounded-lg px-3 py-2 text-sm border border-[#0A2C57]/30 text-[#0A2C57] hover:bg-[#FAF7EF]">
          Learn more
        </Link>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src="/hero.jpg" className="w-full h-full object-cover opacity-90" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/92 to-white" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="font-serif text-4xl md:text-6xl text-[#0A2C57]">Bsons Inc.</h1>
          <p className="mt-1 text-sm md:text-base italic text-neutral-600">
            Community • Commerce • Generational Wealth
          </p>
          <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
            We support families and small businesses through community programs, simple investing education, and the founder’s Autos business (buy, sell, rent with flexible weekly plans).
            <span className="block mt-2 text-base text-neutral-700">
              We prioritise clear steps, transparent terms, and real outcomes — guiding you from first enquiry to confident action.
            </span>
          </p>
          {/* italic tagline AFTER the intro as requested */}
          <p className="mt-2 italic text-neutral-700">
            Community • Commerce • Generational Wealth
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/programs" className="rounded-xl px-4 py-2 text-sm font-medium bg-[#F2C044] text-[#0A2C57] hover:brightness-95">Explore Programs</Link>
            <Link href="/apply" className="rounded-xl px-4 py-2 text-sm font-medium border border-[#0A2C57]/25 text-[#0A2C57] hover:bg-[#FAF7EF]">Quick Apply</Link>
          </div>
        </div>
      </section>

      {/* ALT BACKGROUND SECTION – AUTOS / INVESTMENT */}
      <section className="bg-[#FAF7EF] border-y">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-6">
          <Card
            title="Autos (Buy • Sell • Rent)"
            desc="Trucks & cars with fair weekly payments and referral bonuses."
            href="/programs/autos"
            img="/autos.jpg"
            bg="bg-white"
          />
          <Card
            title="Investment Programs"
            desc="Save while you invest. Learn types, risks, benefits, and crypto basics."
            href="/programs/investment"
            img="/invest.jpg"
            bg="bg-white"
          />
        </div>
      </section>

      {/* FEATURE GRID – include Community Support & Careers too */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Community Support" desc="Targeted help for families, seniors, and people with disabilities." href="/programs/community-support" img="/community.jpg" />
          <Card title="Careers" desc="Join as a Field Development Officer or other roles—mission first." href="/careers" img="/careers.jpg" />
          <Card title="How It Works" desc="Simple steps from pre-check to approval and ongoing support." href="/how-it-works" img="/how.jpg" />
          <Card title="Donation" desc="Your gifts expand local impact across US, Canada, UK & Australia." href="/donation" img="/donate.jpg" />
          <Card title="Resources" desc="Guides, FAQs, and disclosures all in one place." href="/resources" img="/resources.jpg" />
          <Card title="About" desc="The founder’s note and our story." href="/about" img="/about.jpg" />
        </div>
      </section>

      {/* QUICK LINKS (unchanged color band) */}
      <section className="bg-[#0F3D7A] text-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="font-serif text-2xl">Quick Links</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              ["/programs/autos","Autos"],
              ["/programs/investment","Investment"],
              ["/programs/community-support","Community Support"],
              ["/careers","Careers"],
              ["/donation","Donation"],
              ["/resources","Resources"],
            ].map(([href,label])=>(
              <Link
                key={href}
                href={href as any}
                className="rounded-lg border border-white/25 bg-white/10 hover:bg-white/20 px-3 py-2 text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS BEFORE FOOTER */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-serif text-3xl text-[#0A2C57]">Testimonials</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            ["“The weekly truck plan helped me launch deliveries.”","— M. A., Toronto"],
            ["“Clear steps and friendly support. It just works.”","— R. K., Houston"],
            ["“Their investment class finally demystified index funds.”","— J. B., London"],
          ].map(([q,by],i)=>(
            <figure key={i} className="rounded-2xl border border-neutral-200 p-6 shadow-sm bg-white">
              <blockquote className="text-neutral-700">{q}</blockquote>
              <figcaption className="mt-3 text-sm text-neutral-500">{by}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
