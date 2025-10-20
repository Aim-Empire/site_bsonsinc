import Link from "next/link";

type CardProps = {
  href: string;
  title: string;
  desc: string;
  img: string;
  bg: string; // tailwind class for soft background
};
const ProgramCard = ({ href, title, desc, img, bg }: CardProps) => (
  <div className={`card flex items-center gap-4 ${bg}`}>
    <img src={img} alt={title} className="w-24 h-24 rounded-xl object-cover" />
    <div>
      <h3 className="font-display text-xl text-[var(--brand-navy)]">{title}</h3>
      <p className="text-sm text-neutral-700">{desc}</p>
      <Link className="mt-2 inline-block btn-outline" href={href}>Learn more</Link>
    </div>
  </div>
);

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

          {/* Two highlighted programs */}
          <div className="grid gap-4">
            <ProgramCard
              href="/programs/autos"
              title="Autos (Buy • Sell • Rent)"
              desc="Trucks & cars with fair weekly payments and referral bonuses."
              img="/autos.jpg"
              bg="bg-[#F7FBFF]"
            />
            <ProgramCard
              href="/programs/investment"
              title="Investment Programs"
              desc="Save while you invest. Learn types, risks, benefits, and crypto basics."
              img="/invest.jpg"
              bg="bg-[#FFF9F2]"
            />
          </div>
        </div>
      </section>

      {/* Programs grid with images and unique backgrounds */}
      <section className="container-default py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <ProgramCard
            href="/programs/community-support"
            title="Community Support"
            desc="Targeted help for families, seniors, and people with disabilities."
            img="/community.jpg"
            bg="bg-[#F6FFF8]"
          />
          <ProgramCard
            href="/careers"
            title="Careers"
            desc="Join as a Field Development Officer or other roles—mission first."
            img="/careers.jpg"
            bg="bg-[#F5F7FF]"
          />
          <ProgramCard
            href="/donation"
            title="Donation"
            desc="Your gifts expand local impact across US, Canada, UK & Australia."
            img="/donate.jpg"
            bg="bg-[#FFF7FB]"
          />
          <ProgramCard
            href="/resources"
            title="Resources"
            desc="Guides, FAQs, and disclosures all in one place."
            img="/resources.jpg"
            bg="bg-[#FFFDF6]"
          />
          <ProgramCard
            href="/about"
            title="About"
            desc="The founder’s note and our story."
            img="/about.jpg"
            bg="bg-[#F8FAFF]"
          />
          <ProgramCard
            href="/programs/investment/partnerships"
            title="Partnership Investment"
            desc="Private projects, cloud mining/JV, or BST token—compliance-first."
            img="/invest.jpg"
            bg="bg-[#FFF6EC]"
          />
        </div>
      </section>

      {/* Quick Links (navy section) BEFORE Testimonials */}
      <section className="bg-[#0A2C57] text-white">
        <div className="container-default py-8">
          <h2 className="font-display text-3xl">Quick Links</h2>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              ["Autos","/programs/autos"],
              ["Investment","/programs/investment"],
              ["Community Support","/programs/community-support"],
              ["Careers","/careers"],
              ["Donation","/donation"],
              ["Resources","/resources"],
              ["Partnership Investment","/programs/investment/partnerships"],
            ].map(([label,href])=>(
              <Link key={href} href={href}
                className="rounded-xl px-4 py-3 text-base bg-white/10 border border-white/15 hover:bg-white/15 text-white/95 text-center">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with soft varied backgrounds */}
      <section className="container-default py-10">
        <h2 className="font-display text-3xl text-[var(--brand-navy)]">Testimonials</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            ["“The weekly truck plan helped me launch deliveries.”","— M. A., Toronto","bg-[#F7FBFF]"],
            ["“Clear steps and friendly support. It just works.”","— R. K., Houston","bg-[#F6FFF8]"],
            ["“Their investment class finally demystified index funds.”","— J. B., London","bg-[#FFF9F2]"]
          ].map(([q,by,bg],i)=>(
            <figure key={i} className={`card ${bg}`}>
              <blockquote className="text-neutral-800">{q}</blockquote>
              <figcaption className="mt-3 text-sm text-neutral-600">{by}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
