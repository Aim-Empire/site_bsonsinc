export default function Section({ title, children }:{
  title: string; children: React.ReactNode;
}){
  return (
    <section>
      <div className="container-default py-12 md:py-16">
        <h2 className="font-display text-2xl md:text-3xl text-brand-navy">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}