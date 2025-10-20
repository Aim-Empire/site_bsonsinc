export const metadata = { title: "Testimonials | Bsons Inc." };
const items = [
  { q: "The weekly truck plan let me start my delivery side-business.", by: "M. A., Toronto" },
  { q: "Clear steps and friendly support. The process just made sense.", by: "R. K., Houston" },
  { q: "Their investment class finally demystified index funds for me.", by: "J. B., London" },
];
export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-testimonials,#F8FFF9)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Testimonials</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map((t,i)=>(
            <figure key={i} className="card">
              <blockquote className="text-neutral-700">“{t.q}”</blockquote>
              <figcaption className="mt-3 text-sm text-neutral-500">— {t.by}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
