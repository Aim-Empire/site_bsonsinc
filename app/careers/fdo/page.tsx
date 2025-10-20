export default function FDO(){
  return (
    <section className="container-default py-12">
      <h1 className="h1">Funds Disbursement Officer (FDO)</h1>
      <div className="card mt-6">
        <h3 className="font-semibold text-brand-navy">Role Summary</h3>
        <p className="mt-2 text-sm">
          The FDO coordinates compliant release of approved funds or in-kind support,
          verifies documentation, and maintains accurate records.
        </p>
        <h4 className="mt-4 font-semibold text-brand-navy">Key Responsibilities</h4>
        <ul className="mt-1 list-disc pl-5 text-sm space-y-1">
          <li>Verify approvals and identity; coordinate KYC/AML steps with partners</li>
          <li>Schedule and track disbursements; reconcile reports</li>
          <li>Respond to beneficiary inquiries professionally</li>
        </ul>
        <h4 className="mt-4 font-semibold text-brand-navy">Location & Regions</h4>
        <p className="text-sm">US, Canada, UK, Australia (remote/hybrid depending on program)</p>
        <a href="/apply" className="inline-block mt-6 rounded-xl bg-brand-gold text-brand-navy px-4 py-2">Apply for FDO</a>
      </div>
    </section>
  );
}
