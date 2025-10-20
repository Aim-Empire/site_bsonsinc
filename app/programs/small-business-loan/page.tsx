import CTA from "@/components/CTA";

export default function SBL(){
  return (
    <>
      <section className="container-default py-12">
        <h1 className="h1">Small Business Loan</h1>
        <p className="lead mt-2">Working capital and growth financing via partners.</p>
        <div className="card mt-8">
          <ul className="list-disc pl-5 space-y-1">
            <li>Registered business (12+ months preferred)</li>
            <li>Bank statements & basic financials</li>
            <li>Use: inventory, equipment, hiring, marketing</li>
          </ul>
        </div>
      </section>
      <CTA title="Apply for SBL" primaryHref="/apply?program=small-business-loan" />
    </>
  );
}
