export const metadata = { title: "Investment | Bsons Inc." };
export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-invest,#FFF9F2)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Investment, explained simply</h1>
        <p className="mt-3 text-neutral-700">
          Save funds while investing and earn more over time. We walk through types of investments,
          risk/benefit trade-offs, and fast-growing areas like crypto—legitimate, but often abused by scammers.
        </p>
        <img src="/invest.jpg?v=3" alt="Investing basics" className="mt-6 rounded-2xl border w-full max-h-[380px] object-cover"/>
        <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-neutral-700">
          <li className="card">Index funds &amp; ETFs: low fees, diversified.</li>
          <li className="card">Bonds &amp; GICs: income &amp; stability.</li>
          <li className="card">Crypto literacy: custody, scams, risk sizing.</li>
          <li className="card">Benefit of time: compounding &amp; consistency.</li>
        </ul>
      </section>
    </main>
  );
}
