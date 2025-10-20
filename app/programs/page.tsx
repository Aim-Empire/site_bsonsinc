import FeatureCard from "@/components/FeatureCard";

export default function Programs(){
  return (
    <section className="container-default py-12 md:py-16">
      <h1 className="h1">Programs</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <FeatureCard title="Community Support" href="/programs/community-support" />
        <FeatureCard title="Loans" href="/programs/loan" />
        <FeatureCard title="Small Business Loan" href="/programs/small-business-loan" />
        <FeatureCard title="Investment Programs" href="/programs/investment" />
        <FeatureCard title="Autos (Cars & Trucks)" href="/programs/autos" />
      </div>
    </section>
  );
}