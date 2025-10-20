import CTA from "@/components/CTA";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

export default function Page(){
  return (
    <>
      <section className="hero border-b">
        <div className="container-default py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src="/logo.png" alt="Bsons Inc" className="w-28 h-28 rounded-full border" />
            <div>
              <h1 className="h1">Bsons Inc.</h1>
              <p className="lead mt-2">Bourgeois & Sons Incorporated — Community • Commerce • Generational Wealth</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="btn" href="/programs">Programs</Link>
                <Link className="btn-outline" href="/how-it-works">How It Works</Link>
                <Link className="btn-outline" href="/apply">Apply</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Programs">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Community Support" href="/programs/community-support" />
          <FeatureCard title="Loans" href="/programs/loan" />
          <FeatureCard title="Small Business Loan" href="/programs/small-business-loan" />
          <FeatureCard title="Investment Programs" href="/programs/investment" />
          <FeatureCard title="Autos (Cars & Trucks)" href="/programs/autos" />
          <FeatureCard title="Careers (FDO & more)" href="/careers" />
        </div>
      </Section>

      <CTA title="Ready to begin?" primaryHref="/apply" secondaryHref="/contact" />
    </>
  );
}