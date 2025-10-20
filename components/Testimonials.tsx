export default function Testimonials() {
  const items: [string,string][] = [
    ["“The weekly truck plan helped me start deliveries the same month.”", "— M. A., Toronto"],
    ["“Clear steps and friendly support. The process just made sense.”", "— R. K., Houston"],
    ["“Their investment class finally demystified index funds for me.”", "— J. B., London"],
  ];
  return (
    <section className="container-default py-12">
      <h2 className="font-display text-3xl text-brand-navy">What people say</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map(([quote, by], i) => (
          <figure key={i} className="card">
            <blockquote className="text-neutral-700">{quote}</blockquote>
            <figcaption className="mt-3 text-sm text-neutral-500">{by}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
