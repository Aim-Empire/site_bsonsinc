export const metadata = { title: "Investment Partnerships | Bsons Inc." };

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--page-invest,#FFF9F2)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Investment Partnerships</h1>
        <p className="mt-3 text-neutral-700">
          Choose <strong>Private Projects</strong>, <strong>Cloud Mining / JV</strong>, or our long-term
          <strong> BST Utility Token</strong>. All options include KYC, an MOU, clear ROI schedules,
          and proof-of-funds utilization.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn" href="/auth">Register / Log in</a>
          <a className="btn-outline" href="mailto:support@bsonsinc.com?subject=Investment Partnership Inquiry">
            Email Support
          </a>
        </div>

        <div className="mt-8">
          <a className="btn-outline" href="/programs/investment">← Back to Investment</a>
        </div>
      </section>
    </main>
  );
}
