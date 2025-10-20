export const metadata = { title: "About | Bsons Inc." };
export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-about,#F6FAFF)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">About Bsons Inc.</h1>
        <p className="mt-3 text-neutral-700">
          The Bourgeois family has supported communities offline for years. After retirement from
          <a className="underline text-brand-blue ml-1" href="https://www.metrolinx.com" target="_blank">Metrolinx</a>,
          we brought Community Support online. Funding comes from donations, the founder’s Metrolinx pension,
          and the Bourgeois Family Generational Account (decades old) when needs are larger.
        </p>
        <img src="/about.jpg?v=3" alt="About" className="mt-6 rounded-2xl border w-full max-h-[380px] object-cover"/>
      </section>
    </main>
  );
}
