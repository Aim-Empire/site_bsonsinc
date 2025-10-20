import CTA from "@/components/CTA";

export default function Loan(){
  return (
    <>
      <section className="container-default py-12">
        <h1 className="h1">Loans (Personal & Small Business)</h1>
        <p className="lead mt-2">Originated by or arranged with partner banks/credit unions. Final terms depend on underwriting.</p>
        <div className="card mt-8">
          <ul className="list-disc pl-5 space-y-1">
            <li>Government ID, proof of address, income verification</li>
            <li>KYC/AML checks and disclosures</li>
            <li>Regions: US, CA, UK, AU</li>
          </ul>
        </div>
      </section>
      <CTA title="Start Loan Check" primaryHref="/apply?program=loan" />
    </>
  );
}