export default function Testimonials(){
  const items = [
    { q: "Practical help that respects your time.", a: "Small Business Owner — New York" },
    { q: "The Autos program gave me earning flexibility.", a: "Independent Driver — Manchester" },
    { q: "Kind people, clear answers, smooth process.", a: "Community Member — Vancouver" },
  ];
  return (
    <section className="container-default py-12 md:py-16">
      <h1 className="h1">Testimonials</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {items.map((t, i) => (
          <figure key={i} className="card">
            <blockquote className="text-neutral-800">{t.q}</blockquote>
            <figcaption className="mt-2 text-sm text-neutral-500">— {t.a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
