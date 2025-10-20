export const metadata = {
  title: "Investment | Bsons Inc.",
  description:
    "Simple, safe investing for families and small businesses: types of investments, benefits, risk basics, and crypto literacy—clear steps and zero hype.",
  openGraph: {
    title: "Investment | Bsons Inc.",
    description:
      "Simple, safe investing for families & small businesses. Learn the types, benefits, risk basics, and crypto literacy.",
    images: ["/invest.jpg"],
  },
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
            We help families and small businesses build steady habits:
            <strong> save while investing</strong>, understand the options, and
            pick a path that matches your goals. No hype—just clear steps and
            practical tools you can act on today.
          </p>
          <p className="mt-3 text-neutral-700 italic">
            Community • Commerce • Generational Wealth
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href="/apply?program=investment">
              Get Started
            </a>
            <a className="btn-outline" href="/resources">
              Read Guides
            </a>
          </div>
        </div>

        <div className="order-first md:order-none">
          <img
            src="/invest.jpg?v=3"
            alt="Investing basics"
            className="rounded-2xl border w-full h-64 md:h-full object-cover"
          />
        </div>
      </section>

      {/* TYPES */}
      <section className="container-default pb-10 md:pb-14">
        <h2 className="font-display text-2xl md:text-3xl text-brand-navy">
          What can you invest in?
        </h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card">
            <h3 className="font-semibold">Index Funds &amp; ETFs</h3>
            <p className="mt-1 text-sm text-neutral-700">
              Broad market exposure with low fees. Great for long-term growth.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Bonds &amp; GICs</h3>
            <p className="mt-1 text-sm text-neutral-700">
              Lower volatility and income potential for stability in a plan.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Stocks</h3>
            <p className="mt-1 text-sm text-neutral-700">
              Ownership in companies. Higher potential returns, higher risk.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Crypto Literacy</h3>
            <p className="mt-1 text-sm text-neutral-700">
              Digital assets are legitimate—but often abused by scammers. We
              teach wallets, custody, risk sizing, and red flags.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-default pb-10 md:pb-14">
        <div className="card">
          <h2 className="font-display text-2xl md:text-3xl text-brand-navy">
            Why invest at all?
          </h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-neutral-700">
            <li>Grow savings faster than inflation over time.</li>
            <li>Diversify income beyond a single job or business.</li>
            <li>Build an emergency cushion &amp; future opportunities.</li>
            <li>Turn consistent habits into compounding results.</li>
          </ul>
        </div>
      </section>

      {/* SAFETY */}
      <section className="container-default pb-10 md:pb-14">
        <h2 className="font-display text-2xl md:text-3xl text-brand-navy">
          Safety first
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-semibold">Risk Basics</h3>
            <ul className="mt-2 list-disc ml-5 text-sm text-neutral-700">
              <li>Only invest money you won’t need very soon.</li>
              <li>Longer time horizons can handle more ups &amp; downs.</li>
              <li>Diversify—don’t bet it all on one idea.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Crypto Caution</h3>
            <ul className="mt-2 list-disc ml-5 text-sm text-neutral-700">
              <li>Use reputable exchanges &amp; learn self-custody basics.</li>
              <li>Beware “guaranteed returns” and unsolicited offers.</li>
              <li>Start small; size risk relative to your total plan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-default pb-10 md:pb-14">
        <h2 className="font-display text-2xl md:text-3xl text-brand-navy">
          How we’ll help
        </h2>
        <ol className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
          <li className="card">
            <h3 className="font-semibold">1) Quick profile</h3>
            <p className="mt-1 text-neutral-700">
              Goals, time-frame, comfort with risk—10 minutes.
            </p>
          </li>
          <li className="card">
            <h3 className="font-semibold">2) Simple plan</h3>
            <p className="mt-1 text-neutral-700">
              Pick a mix (ETFs, bonds, savings) and a monthly habit.
            </p>
          </li>
          <li className="card">
            <h3 className="font-semibold">3) On-going support</h3>
            <p className="mt-1 text-neutral-700">
              Check-ins, resources, and community Q&amp;A.
            </p>
          </li>
        </ol>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn" href="/apply?program=investment">
            Start Your Plan
          </a>
          <a className="btn-outline" href="/contact">
            Ask a Question
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-default pb-14">
        <h2 className="font-display text-2xl md:text-3xl text-brand-navy">
          Quick FAQ
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-semibold">Minimum to begin?</h3>
            <p className="mt-1 text-sm text-neutral-700">
              Start with what’s comfortable. Even $25–$50/month builds the
              habit while you learn.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Can I pause?</h3>
            <p className="mt-1 text-sm text-neutral-700">
              Yes. You’re in control—pause, resume, or adjust your plan any
              time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}