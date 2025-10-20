export const metadata = { title: "Resources | Bsons Inc." };
export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-resources,#FFFDF6)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Resources</h1>
        <p className="mt-3 text-neutral-700">Guides, FAQs, and disclosures in one place.</p>
        <img src="/resources.jpg?v=3" alt="Resources" className="mt-6 rounded-2xl border w-full max-h-[380px] object-cover"/>
        <ul className="mt-6 list-disc ml-6 text-neutral-700">
          <li>Program overviews</li>
          <li>Transparency &amp; eligibility basics</li>
          <li>Investment safety checklists</li>
        </ul>
      </section>
    </main>
  );
}
