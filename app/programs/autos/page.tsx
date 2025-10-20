export const metadata = { title: "Autos | Bsons Inc." };
export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-autos,#F7FBFF)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Autos (Buy • Sell • Rent)</h1>
        <p className="mt-3 text-neutral-700">
          The founder currently runs the Autos arm: buy, sell, and rent—with clear weekly plans,
          flexible terms, and referral bonuses for word-of-mouth.
        </p>
        <img src="/autos.jpg?v=3" alt="Autos inventory" className="mt-6 rounded-2xl border w-full max-h-[380px] object-cover"/>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="card"><h3 className="font-semibold">Buy</h3><p className="text-sm text-neutral-600 mt-1">Quality vehicles with transparent history.</p></div>
          <div className="card"><h3 className="font-semibold">Sell</h3><p className="text-sm text-neutral-600 mt-1">Fair valuations and quick processing.</p></div>
          <div className="card"><h3 className="font-semibold">Rent</h3><p className="text-sm text-neutral-600 mt-1">Weekly payments; great for delivery work.</p></div>
        </div>
      </section>
    </main>
  );
}
