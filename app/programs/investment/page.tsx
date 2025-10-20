import CTA from "@/components/CTA";

export default function Investment(){
  return (
    <>
      <section className="container-default py-12">
        <h1 className="h1">Investment Programs</h1>
        <p className="lead mt-2">Education-first, goal-based planning. Not financial advice.</p>
        <div className="card mt-8">
          <ul className="list-disc pl-5 space-y-1">
            <li>Risk questionnaire & onboarding</li>
            <li>Time-horizon & objective mapping</li>
            <li>Compliance and disclosures before engagement</li>
          </ul>
        </div>
      </section>
      <CTA title="Get the Investor Guide" primaryHref="/resources" secondaryHref="/apply?program=investment" />
    </>
  );
}