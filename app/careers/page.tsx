import FeatureCard from "@/components/FeatureCard";

export default function Careers(){
  return (
    <section className="container-default py-12">
      <h1 className="h1">Careers</h1>
      <p className="lead mt-2">We’re hiring mission-driven people. Apply below.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <FeatureCard title="Funds Disbursement Officer (FDO)" href="/careers/fdo" />
        <FeatureCard title="Program Intake Specialist" href="/contact">Apply via Contact</FeatureCard>
        <FeatureCard title="Community Outreach Coordinator" href="/contact">Apply via Contact</FeatureCard>
      </div>
    </section>
  );
}