import Link from "next/link";
import RegisterSW from "@/components/RegisterSW";

const Tab = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="card scroll-mt-20">
    <h2 className="font-display text-2xl text-brand-navy">{title}</h2>
    <div className="mt-2 text-neutral-700">{children}</div>
  </section>
);

export default function InvestApp() {
  return (
    <main className="min-h-screen">
      <RegisterSW />
      {/* App Header (minimal) */}
      <header className="bg-[#0B1E34] text-white">
        <div className="container-default h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white grid place-items-center overflow-hidden">
              <img src="/logo.png" className="w-6 h-6 object-contain" alt="Bsons" />
            </span>
            <span className="font-semibold">Bsons Invest</span>
          </Link>
          <Link href="/auth" className="btn bg-[var(--brand-gold)] text-[var(--brand-navy)]">Get Started</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="container-default py-8 md:py-12 grid md:grid-cols-2 gap-6">
        <div>
          <h1 className="font-display text-4xl text-brand-navy">Investment, explained simply</h1>
          <p className="mt-3 text-neutral-700">
            We help <strong>individuals, couples, families, and small businesses</strong> build steady habits:
            save while investing, understand the options, and pick a path that matches your goals. No hype—just
            clear steps and practical tools you can act on today.
          </p>
          <div className="mt-4 flex gap-3">
            <a className="btn" href="/auth">Get Started</a>
            <a className="btn-outline" href="#guide">Read Guide</a>
          </div>
          <em className="mt-2 block text-brand-blue/80">Community • Commerce • Generational Wealth</em>
        </div>
        <img src="/invest.jpg?v=6" alt="Investing" className="rounded-2xl border w-full h-56 md:h-72 object-cover" />
      </section>

      {/* Quick Nav */}
      <nav className="container-default grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <a className="card text-center" href="#overview">Overview</a>
        <a className="card text-center" href="#guide">Guide</a>
        <a className="card text-center" href="#tools">Tools</a>
        <a className="card text-center" href="#faq">FAQ</a>
      </nav>

      <div className="container-default grid gap-6 pb-12">
        <Tab id="overview" title="Overview">
          <ul className="list-disc ml-6">
            <li>Index funds & ETFs for broad, low-cost exposure.</li>
            <li>Bonds/GICs for stability and income.</li>
            <li>Stocks for higher potential returns with higher risk.</li>
            <li>Crypto literacy: wallets, custody, and risk sizing.</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <Link className="btn" href="/auth">Choose Your Path</Link>
            <Link className="btn-outline" href="/resources/investment-guide">Full Class</Link>
          </div>
        </Tab>

        <Tab id="guide" title="Investment Guide (Class)">
          <p>Read the full curriculum: what investing is, what to know, types, safety, and crypto basics—structured and easy.</p>
          <ul className="mt-3 list-disc ml-6">
            <li><a className="text-brand-blue underline" href="/resources/investment-guide#what">What is Investing?</a></li>
            <li><a className="text-brand-blue underline" href="/resources/investment-guide#know">What to Know First</a></li>
            <li><a className="text-brand-blue underline" href="/resources/investment-guide#types">Types of Investments</a></li>
            <li><a className="text-brand-blue underline" href="/resources/investment-guide#safety">Safety & Red Flags</a></li>
            <li><a className="text-brand-blue underline" href="/resources/investment-guide#crypto">Crypto Basics</a></li>
            <li><a className="text-brand-blue underline" href="/resources/investment-guide#tools">Calculators & Tools</a></li>
            <li><a className="text-brand-blue underline" href="/resources/investment-guide#faq">FAQs</a></li>
          </ul>
        </Tab>

        <Tab id="tools" title="Trusted Tools">
          <ul className="list-disc ml-6">
            <li><a className="text-brand-blue underline" href="https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" target="_blank" rel="noreferrer">SEC Compound Interest</a></li>
            <li><a className="text-brand-blue underline" href="https://www.investor.gov/financial-tools-calculators/calculators/savings-goal-calculator" target="_blank" rel="noreferrer">SEC Savings Goal</a></li>
            <li><a className="text-brand-blue underline" href="https://www.investor.gov/financial-tools-calculators/financial-tools/mutual-fund-analyzer" target="_blank" rel="noreferrer">FINRA Fund Analyzer</a></li>
          </ul>
          <p className="mt-2 text-xs text-neutral-500">Opens official sites.</p>
        </Tab>

        <Tab id="faq" title="Quick FAQ">
          <div className="grid md:grid-cols-2 gap-4">
            <div><h3 className="font-semibold">Minimum to begin?</h3><p className="text-sm">Even $25–$50/month builds the habit while you learn.</p></div>
            <div><h3 className="font-semibold">Can I pause?</h3><p className="text-sm">Yes—adjust or pause anytime.</p></div>
            <div><h3 className="font-semibold">Do you give financial advice?</h3><p className="text-sm">We provide education and tools; decisions are yours.</p></div>
            <div><h3 className="font-semibold">Tutor sessions?</h3><p className="text-sm">Start at <a className="text-brand-blue underline" href="/auth">/auth</a> and request a session.</p></div>
          </div>
        </Tab>
      </div>
    </main>
  );
}
