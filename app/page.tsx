export const metadata = { title: "Bsons Inc. | Community • Commerce • Generational Wealth" };

const Card = ({
  title,
  copy,
  href,
  img,
}: {
  title: string;
  copy: string;
  href: string;
  img: string;
}) => (
  <a href={href} className="grid md:grid-cols-[200px_1fr] gap-4 items-center card hover:shadow-md">
    <img src={img} alt="" className="rounded-xl border w-full h-36 object-cover" />
    <div>
      <h3 className="font-display text-2xl text-brand-navy">{title}</h3>
      <p className="mt-1 text-neutral-700">{copy}</p>
      <span className="inline-block mt-2 underline text-brand-blue">Learn more</span>
    </div>
  </a>
);

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[var(--brand-cream)]">
        <div className="container-default py-10 md:py-14">
          <h1 className="font-display text-4xl md:text-6xl text-brand-navy">Bsons Inc.</h1>
          <p className="italic text-brand-blue/80 mt-2">Community • Commerce • Generational Wealth</p>

          <p className="mt-5 text-neutral-800 max-w-3xl">
            We support families and small businesses through community programs, simple investing
            education, and the founder’s Autos business (buy, sell, rent with flexible weekly plans).
          </p>
          <p className="mt-3 text-neutral-800 max-w-3xl">
            We prioritise clear steps, transparent terms, and real outcomes — guiding you from first
            enquiry to confident action.
          </p>
          <p className="mt-3 italic text-brand-blue/80">Community • Commerce • Generational Wealth</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href="/programs">Explore Programs</a>
            <a className="btn-outline" href="/apply">Quick Apply</a>
            <a className="btn" href="/partnerships">Partnership Investment</a>
          </div>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section className="container-default py-10 grid gap-6">
        <Card
          title="Autos (Buy • Sell • Rent)"
          copy="Trucks & cars with fair weekly payments and referral bonuses."
          href="/programs/autos"
          img="/autos.jpg?v=6"
        />
        <Card
          title="Investment Programs"
          copy="Save while you invest. Learn types, risks, benefits, and crypto basics."
          href="/programs/investment"
          img="/invest.jpg?v=6"
        />
        <Card
          title="Community Support"
          copy="Targeted help for families, seniors, and people with disabilities."
          href="/programs/community-support"
          img="/community.jpg?v=6"
        />
        <Card
          title="Careers"
          copy="Join as a Field Development Officer or other roles—mission first."
          href="/careers"
          img="/careers.jpg?v=6"
        />
        <Card
          title="Donation"
          copy="Your gifts expand local impact across US, Canada, UK & Australia."
          href="/donation"
          img="/donate.jpg?v=6"
        />
        <Card
          title="Resources"
          copy="Guides, FAQs, and disclosures all in one place."
          href="/resources"
          img="/resources.jpg?v=6"
        />
        <Card
          title="About"
          copy="The founder’s note and our story."
          href="/about"
          img="/about.jpg?v=6"
        />
      </section>

      {/* QUICK LINKS */}
      <section className="container-default py-8">
        <h2 className="font-display text-2xl text-brand-navy">Quick Links</h2>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { href: "/programs/autos", label: "Autos" },
            { href: "/programs/investment", label: "Investment" },
            { href: "/programs/community-support", label: "Community Support" },
            { href: "/careers", label: "Careers" },
            { href: "/donation", label: "Donation" },
            { href: "/resources", label: "Resources" },
          ].map((i) => (
            <a key={i.href} href={i.href} className="btn-outline w-full text-center">{i.label}</a>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="container-default py-8">
        <h2 className="font-display text-2xl text-brand-navy">Testimonials</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <figure className="card"><blockquote>“The weekly truck plan helped me launch deliveries.”</blockquote><figcaption className="mt-2 text-sm text-neutral-600">— M. A., Toronto</figcaption></figure>
          <figure className="card"><blockquote>“Clear steps and friendly support. It just works.”</blockquote><figcaption className="mt-2 text-sm text-neutral-600">— R. K., Houston</figcaption></figure>
          <figure className="card"><blockquote>“Their investment class finally demystified index funds.”</blockquote><figcaption className="mt-2 text-sm text-neutral-600">— J. B., London</figcaption></figure>
        </div>
      </section>
    </main>
  );
}
