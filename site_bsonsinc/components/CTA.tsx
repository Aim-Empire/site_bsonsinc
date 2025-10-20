import Button from "./Button";

export default function CTA({ title, primaryHref, secondaryHref }:{
  title: string; primaryHref: string; secondaryHref?: string;
}){
  return (
    <section className="border-t bg-[var(--brand-cream)]">
      <div className="container-default py-12 md:py-16 text-center">
        <h2 className="font-display text-2xl md:text-4xl text-brand-navy">{title}</h2>
        <div className="mt-6 flex justify-center gap-3">
          <Button href={primaryHref}>Get Started</Button>
          {secondaryHref && <Button variant="outline" href={secondaryHref}>Contact Us</Button>}
        </div>
      </div>
    </section>
  );
}
