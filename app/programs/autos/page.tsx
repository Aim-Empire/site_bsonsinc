import CTA from "@/components/CTA";

export default function Autos(){
  return (
    <>
      <section className="container-default py-12">
        <h1 className="h1">Autos (Cars & Trucks)</h1>
        <p className="lead mt-2">Purchase, lease, or rent-to-own through partners.</p>
        <div className="card mt-8">
          <ul className="list-disc pl-5 space-y-1">
            <li>Proof of income & residency</li>
            <li>Insurance details (if applicable)</li>
            <li>Promo discounts may apply pre-launch</li>
          </ul>
        </div>
      </section>
      <CTA title="Check Vehicle Eligibility" primaryHref="/apply?program=autos" />
    </>
  );
}