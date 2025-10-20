export const metadata = {
  title: "Investment | Bsons Inc.",
  description:
    "Simple, safe investing for families and small businesses: types, benefits, risk basics, fraud red flags, and crypto literacy—with official SEC tools.",
  openGraph: {
    title: "Investment | Bsons Inc.",
    description:
      "Learn the types, benefits, risk basics, fraud red flags, and crypto literacy—plus official SEC calculators.",
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
            src="/invest.jpg?v=4"
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
              Digital assets are legitimate but volatile; learn wallets,
              custody, risk sizing, and red flags before participating.
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

      {/* SAFETY + SEC FRAUD RED FLAGS */}
      <section className="container-default pb-10 md:pb-14">
        <h2 className="font-display text-2xl md:text-3xl text-brand-navy">
          Safety first (from official guidance)
        </h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-semibold">Fraud red flags</h3>
            <ul className="mt-2 list-disc ml-5 text-sm text-neutral-700">
              <li>Promises of high returns with little or no risk</li>
              <li>Pressure to act now / FOMO tactics</li>
              <li>“Guaranteed” profits or fake testimonials</li>
              <li>Odd payment methods (gift cards, wires to personal accts)</li>
              <li>Unsolicited DMs, social media pitches</li>
            </ul>
            <a
              className="mt-3 inline-block btn-outline"
              href="https://www.investor.gov/protect-your-investments/fraud/how-avoid-fraud/red-flags-investment-fraud-checklist"
              target="_blank"
              rel="noopener noreferrer"
            >
              See SEC Red Flags Checklist
            </a>
          </div>

          <div className="card">
            <h3 className="font-semibold">Crypto caution</h3>
            <ul className="mt-2 list-disc ml-5 text-sm text-neutral-700">
              <li>Assets can be exceptionally volatile and speculative</li>
              <li>Platforms may lack investor protections—research first</li>
              <li>Start small; learn custody and wallet basics</li>
            </ul>
            <div className="mt-3 flex gap-3 flex-wrap">
              <a
                className="btn-outline"
                href="https://www.investor.gov/additional-resources/spotlight/crypto-assets"
                target="_blank"
                rel="noopener noreferrer"
              >
                SEC Crypto Assets Overview
              </a>
              <a
                className="btn-outline"
                href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/crypto-asset-securities"
                target="_blank"
                rel="noopener noreferrer"
              >
                Investor Alert: Crypto Asset Securities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & CALCULATORS (SEC/FINRA) */}
      <section className="container-default pb-12 md:pb-16">
        <h2 className="font-display text-2xl md:text-3xl text-brand-navy">
          Trusted tools to plan your money
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <a
            className="card hover:shadow-md transition block"
            href="https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold">Compound Interest Calculator</h3>
            <p className="mt-1 text-sm text-neutral-700">
              See how your money can grow through the power of compounding.
            </p>
          </a>
          <a
            className="card hover:shadow-md transition block"
            href="https://www.investor.gov/financial-tools-calculators/calculators/savings-goal-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold">Savings Goal Calculator</h3>
            <p className="mt-1 text-sm text-neutral-700">
              Map a monthly habit to reach your target on time.
            </p>
          </a>
          <a
            className="card hover:shadow-md transition block"
            href="https://www.investor.gov/financial-tools-calculators/financial-tools/mutual-fund-analyzer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold">FINRA Fund Analyzer</h3>
            <p className="mt-1 text-sm text-neutral-700">
              Compare fund fees and see how costs impact long-term results.
            </p>
          </a>
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          External tools open on official sites (SEC / FINRA).
        </p>
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
            <h3 className="font-semibold">3) Ongoing support</h3>
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
    </main>
  );
}