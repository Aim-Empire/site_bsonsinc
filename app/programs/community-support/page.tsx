export const metadata = { title: "Community Support | Bsons Inc." };
export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-community,#F6FFF8)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Community Support</h1>
        <p className="mt-3 text-neutral-700">
          Targeted help for families, seniors, and people with disabilities—now brought online after the
          founder’s retirement from Metrolinx.
        </p>
        <img src="/community.jpg?v=3" alt="Community support" className="mt-6 rounded-2xl border w-full max-h-[380px] object-cover"/>
        <div className="mt-6 card text-sm text-neutral-700">
          Funding comes from donations, the founder’s Metrolinx pension, and—when needs are large—the Bourgeois Family Generational Account.
        </div>
      </section>
    </main>
  );
}
