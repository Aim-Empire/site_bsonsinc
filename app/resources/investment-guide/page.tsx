export const metadata = {
  title: "Investment Guide | Bsons Inc.",
  description: "What is investing, what to know, types, safety, crypto basics, calculators, and FAQs.",
};

const tools = [
  ["SEC Compound Interest Calculator","https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"],
  ["SEC Savings Goal Calculator","https://www.investor.gov/financial-tools-calculators/calculators/savings-goal-calculator"],
  ["FINRA Fund Analyzer","https://www.investor.gov/financial-tools-calculators/financial-tools/mutual-fund-analyzer"],
];

export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-resources,#FFFDF6)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Investment Guide (Class)</h1>
        <p className="mt-2 text-neutral-700">Start here for a structured path—read in order or jump to a section.</p>

        {/* TOC */}
        <nav className="mt-6 grid md:grid-cols-3 gap-3">
          <a className="card" href="#what">1) What is Investing?</a>
          <a className="card" href="#know">2) What to Know First</a>
          <a className="card" href="#types">3) Types of Investments</a>
          <a className="card" href="#safety">4) Safety & Red Flags</a>
          <a className="card" href="#crypto">5) Crypto Basics</a>
          <a className="card" href="#tools">6) Calculators & Tools</a>
          <a className="card" href="#faq">7) FAQs</a>
        </nav>

        <section id="what" className="mt-10 card">
          <h2 className="font-display text-2xl text-brand-navy">1) What is Investing?</h2>
          <p className="mt-2 text-neutral-700">Putting money into assets with the expectation of growth or income over time. It’s different from saving (safety first) and different from speculation (fast, higher risk).</p>
        </section>

        <section id="know" className="mt-6 card">
          <h2 className="font-display text-2xl text-brand-navy">2) What to Know First</h2>
          <ul className="mt-2 list-disc ml-6 text-neutral-700">
            <li>Emergency fund (3–6 months) before heavy investing.</li>
            <li>Time horizon: longer = more room for market ups/downs.</li>
            <li>Diversification reduces single-bet risk.</li>
            <li>Fees matter—low-cost funds win over time.</li>
          </ul>
        </section>

        <section id="types" className="mt-6 card">
          <h2 className="font-display text-2xl text-brand-navy">3) Types of Investments</h2>
          <ul className="mt-2 list-disc ml-6 text-neutral-700">
            <li>Index Funds & ETFs: broad exposure, low cost.</li>
            <li>Stocks: ownership; higher potential, higher risk.</li>
            <li>Bonds & GICs: income & stability.</li>
            <li>Real Estate (REITs, property): income + appreciation.</li>
            <li>Crypto: emerging asset class; learn custody & risk sizing.</li>
          </ul>
        </section>

        <section id="safety" className="mt-6 card">
          <h2 className="font-display text-2xl text-brand-navy">4) Safety & Red Flags</h2>
          <ul className="mt-2 list-disc ml-6 text-neutral-700">
            <li>“Guaranteed returns”, pressure to act now, or unsolicited DMs are red flags.</li>
            <li>Only invest money you won’t need very soon.</li>
            <li>Verify platforms and professionals; watch payment-method red flags.</li>
          </ul>
          <div className="mt-3 text-sm">
            See also: <a className="text-brand-blue underline" href="https://www.investor.gov/protect-your-investments/fraud/how-avoid-fraud/red-flags-investment-fraud-checklist" target="_blank" rel="noreferrer">SEC Red Flags Checklist</a>
          </div>
        </section>

        <section id="crypto" className="mt-6 card">
          <h2 className="font-display text-2xl text-brand-navy">5) Crypto Basics</h2>
          <ul className="mt-2 list-disc ml-6 text-neutral-700">
            <li>High volatility; start small and learn custody (wallets, keys).</li>
            <li>Avoid promises of “risk-free” profits; verify platforms.</li>
            <li>Keep records for taxes; size risk vs your total plan.</li>
          </ul>
          <div className="mt-3 text-sm">
            Overview: <a className="text-brand-blue underline" href="https://www.investor.gov/additional-resources/spotlight/crypto-assets" target="_blank" rel="noreferrer">SEC Crypto Assets</a>
          </div>
        </section>

        <section id="tools" className="mt-6 card">
          <h2 className="font-display text-2xl text-brand-navy">6) Calculators & Tools</h2>
          <ul className="mt-2 list-disc ml-6 text-neutral-700">
            {tools.map(([name, url], i) => (
              <li key={i}><a className="text-brand-blue underline" href={url as string} target="_blank" rel="noreferrer">{name}</a></li>
            ))}
          </ul>
        </section>

        <section id="faq" className="mt-6 card">
          <h2 className="font-display text-2xl text-brand-navy">7) FAQs</h2>
          <div className="mt-3 grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Minimum to begin?</h3>
              <p className="text-sm text-neutral-700 mt-1">Even $25–$50/month builds the habit while you learn.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I pause?</h3>
              <p className="text-sm text-neutral-700 mt-1">Yes—adjust or pause anytime.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you give financial advice?</h3>
              <p className="text-sm text-neutral-700 mt-1">We provide education and tools; decisions are yours.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I speak to a Tutor?</h3>
              <p className="text-sm text-neutral-700 mt-1">Yes—start at <a className="text-brand-blue underline" href="/auth">/auth</a> and request a session.</p>
            </div>
          </div>
        </section>

        <div className="mt-8 flex gap-3">
          <a className="btn" href="/auth">Get Started</a>
          <a className="btn-outline" href="/programs/investment">Back to Investment</a>
        </div>
      </section>
    </main>
  );
}
