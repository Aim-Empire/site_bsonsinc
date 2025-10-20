import CTA from "@/components/CTA";

export default function CommunitySupport(){
  return (
    <>
      <section className="container-default py-12">
        <h1 className="h1">Community Support & Empowerment</h1>
        <p className="lead mt-2">Targeted support for vulnerable families, seniors, and disabled citizens in the US, Canada, UK, and Australia.</p>
        <div className="card mt-8">
          <ul className="list-disc pl-5 space-y-1">
            <li>Mobility aids, basic medical items</li>
            <li>Household essentials (limited)</li>
            <li>Short needs assessment & documentation</li>
          </ul>
        </div>
      </section>
      <CTA title="Check Support Eligibility" primaryHref="/apply?program=community-support" />
    </>
  );
}