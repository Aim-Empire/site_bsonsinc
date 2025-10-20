export const metadata = {
  title: "Investment Partnerships | Bsons Inc.",
  description:
    "Three investment pathways: Private Projects, Cloud Mining/JV, and Bsons Utility Token (BST). Includes KYC, MOU, ROI schedule, and transparency.",
};

const Card = ({title, children}:{title:string; children:React.ReactNode}) => (
  <div className="card">
    <h3 className="font-display text-xl text-brand-navy">{title}</h3>
    <div className="mt-2 text-sm text-neutral-700">{children}</div>
  </div>
);

export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-invest,#FFF9F2)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Investment Partnerships</h1>
        <p className="mt-3 text-neutral-700">
          We offer flexible, transparent partnership structures designed for long-term value.
          All options include formal agreements, KYC/AML compliance, and clear reporting.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card title="1) Private Project Investment (Immediate)">
            <ul className="list-disc ml-5">
              <li>Active projects: fintech & donations platform, and select ventures.</li>
              <li>Quarterly profit-sharing or equity participation.</li>
              <li>Use-of-funds reports; milestone updates.</li>
            </ul>
          </Card>

          <Card title="2) Cloud Mining / Joint Mining Operations">
            <ul className="list-disc ml-5">
              <li>BTC or select altcoins; managed by our tech operations unit.</li>
              <li>Transparent cost model (power, hosting, maintenance).</li>
              <li>Pre-agreed profit split and reporting frequency.</li>
            </ul>
          </Card>

          <Card title="3) Bsons Utility Token (BST) – Long-Term">
            <ul className="list-disc ml-5">
              <li>Early access & ownership percentage aligned to utility growth.</li>
              <li>Transparent tokenomics and phased roadmap.</li>
              <li>Compliance-first issuance framework.</li>
            </ul>
          </Card>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-semibold text-brand-navy">Documentation & Reporting</h3>
            <ul className="list-disc ml-5 text-sm text-neutral-700 mt-2">
              <li>Partnership Agreement (MOU)</li>
              <li>Investor KYC form</li>
              <li>ROI schedule & proof-of-funds utilization</li>
              <li>Bank or crypto wallet confirmations</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-brand-navy">Get Started</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Create an account to register your interest and select a pathway.
              Our team will reach out for a short call or secure chat.
            </p>
            <div className="mt-3 flex gap-3">
              <a className="btn" href="/auth">Register / Log In</a>
              <a className="btn-outline" href="mailto:support@bsonsinc.com?subject=Investment Partnership Inquiry">Email Support</a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-neutral-600 italic">
          Compliance note: Availability varies by jurisdiction. Nothing herein constitutes financial advice; terms subject to final agreements and KYC/AML checks.
        </div>

        <div className="mt-10">
          <a className="btn-outline" href="/programs/investment">← Back to Investment</a>
        </div>
      </section>
    </main>
  );
}
