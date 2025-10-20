export const metadata = {
  title: "Partnership Investments | Bsons Inc.",
  description:
    "Discover how Bsons Inc. partnership investments differ from traditional investing — with transparency, collaboration, and real project participation.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--page-partnership,#FFF8F0)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Partnership Investments</h1>
        <p className="mt-3 text-neutral-700">
          Partnership Investment means you’re not just funding — you’re part of the project.
          Bsons Inc. offers hands-on, transparent, and flexible models where partners share
          in project growth, not just profits.
        </p>

        <img
          src="/invest.jpg?v=8"
          alt="Partnership investments"
          className="mt-6 rounded-2xl border w-full max-h-[380px] object-cover"
        />

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="font-display text-2xl text-brand-navy mb-2">
              How It Differs from Traditional Investing
            </h2>
            <ul className="list-disc ml-5 text-neutral-700 text-sm leading-relaxed">
              <li>✅ Traditional investing is passive — partnership investing is collaborative.</li>
              <li>✅ You share project decisions and get live performance reports.</li>
              <li>✅ Transparency is guaranteed: project ledger, reports, and KYC-backed structure.</li>
              <li>✅ Returns are linked to real outcomes — not just market swings.</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="font-display text-2xl text-brand-navy mb-2">Why It’s Profitable</h2>
            <ul className="list-disc ml-5 text-neutral-700 text-sm leading-relaxed">
              <li>🌍 Early access to high-value projects and fintech growth.</li>
              <li>📊 Quarterly profit reports and structured ROI schedules.</li>
              <li>🔐 Legal agreements: MOU, KYC, ROI sheet, and wallet confirmation.</li>
              <li>🤝 Shared vision: sustainability, ethics, and community wealth creation.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <a className="btn" href="/auth">Start Partnership</a>
          <a className="btn-outline" href="mailto:support@bsonsinc.com?subject=Partnership Investment Inquiry">
            Contact Support
          </a>
        </div>

        <div className="mt-10 text-sm text-neutral-600 italic">
          All partnerships are subject to verification and documentation. Availability may vary
          by jurisdiction and compliance requirements.
        </div>
      </section>
    </main>
  );
}
