export const metadata = {
  title: "Investment | Bsons Inc.",
  description:
    "Learn investment types, benefits, risks, and crypto basics. Start with a tutor or read the full Investment Guide.",
  openGraph: { title: "Investment | Bsons Inc.", images: ["/invest.jpg"] },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--page-invest,#FFF9F2)]">
      {/* HERO */}
      <section className="container-default py-10 md:py-14 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="font-display text-4xl md:text-5xl text-brand-navy">
            Investment, explained simply
          </h1>
          <p className="mt-3 text-neutral-700">
            We help <strong>individuals, couples, families, and small businesses</strong> build steady habits:
            save while investing, understand the options, and pick a path that matches your goals.
            No hype—just clear steps and practical tools you can act on today.
          </p>
          <p className="mt-3 text-neutral-700">
            Learn about investment types, choose your best option, and connect with one of our{" "}
            <strong>top Investment Tutors</strong> for guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href="/auth">Get Started</a>
            <a className="btn-outline" href="/resources/investment-guide">Read Guide</a>
          </div>
          <p className="mt-3 italic text-brand-blue/80">
            Community • Commerce • Generational Wealth
          </p>
        </div>

        <div className="order-first md:order-none">
          <img
            src="/invest.jpg?v=5"
            alt="Investing basics"
            className="rounded-2xl border w-full h-64 md:h-full object-cover"
          />
        </div>
      </section>

      {/* TYPES QUICK SNAPSHOT */}
      <section className="container-default pb-10 md:pb-14">
        <h2 className="font-display text-2xl md:3xl text-brand-navy">Popular paths</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card"><h3 className="font-semibold">Index Funds &amp; ETFs</h3><p className="mt-1 text-sm text-neutral-700">Broad market exposure, low fees; great long-term core.</p></div>
          <div className="card"><h3 className="font-semibold">Bonds &amp; GICs</h3><p className="mt-1 text-sm text-neutral-700">Income + stability; balances stock risk.</p></div>
          <div className="card"><h3 className="font-semibold">Stocks</h3><p className="mt-1 text-sm text-neutral-700">Higher potential returns with higher risk.</p></div>
          <div className="card"><h3 className="font-semibold">Crypto Literacy</h3><p className="mt-1 text-sm text-neutral-700">Legit asset class, but volatile—learn wallets, custody, and red flags.</p></div>
        </div>
        <div className="mt-6">
          <a className="btn-outline" href="/resources/investment-guide">Open the full Investment Guide</a>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="container-default pb-12 md:pb-16">
        <h2 className="font-display text-2xl md:text-3xl text-brand-navy">How we’ll help</h2>
        <ol className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
          <li className="card"><h3 className="font-semibold">1) Quick profile</h3><p className="mt-1 text-neutral-700">Goals, timeline, comfort with risk (10 mins).</p></li>
          <li className="card"><h3 className="font-semibold">2) Simple plan</h3><p className="mt-1 text-neutral-700">Pick a mix (ETFs/bonds/savings) and a monthly habit.</p></li>
          <li className="card"><h3 className="font-semibold">3) Ongoing support</h3><p className="mt-1 text-neutral-700">Tutor sessions, Q&amp;A, and check-ins.</p></li>
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn" href="/auth">Start with a Tutor</a>
          <a className="btn-outline" href="/resources/investment-guide#faq">Jump to FAQs</a>
        </div>
      </section>
    </main>
  );
}
