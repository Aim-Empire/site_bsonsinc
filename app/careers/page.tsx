export const metadata = { title: "Careers | Bsons Inc." };
export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-careers,#F5F7FF)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Careers</h1>
        <p className="mt-3 text-neutral-700">Join as a Field Development Officer (FDO) or in operations, autos, or community support.</p>
        <img src="/careers.jpg?v=3" alt="Team" className="mt-6 rounded-2xl border w-full max-h-[380px] object-cover"/>
        <a className="btn mt-6 inline-flex" href="mailto:careers@bsonsinc.com">Email Your CV</a>
      </section>
    </main>
  );
}
