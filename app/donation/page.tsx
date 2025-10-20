export const metadata = { title: "Donate | Bsons Inc." };
export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-donate,#F7FBFF)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Donate</h1>
        <p className="mt-3 text-neutral-700">Your gifts expand Community Support across US, Canada, UK &amp; Australia.</p>
        <img src="/donate.jpg?v=3" alt="Donation" className="mt-6 rounded-2xl border w-full max-h-[380px] object-cover"/>
        <a className="btn mt-6 inline-flex" href="mailto:admin@bsonsinc.com?subject=Donation">Contact Admin to Donate</a>
      </section>
    </main>
  );
}
