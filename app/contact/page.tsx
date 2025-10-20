export default function Contact(){
  return (
    <section className="container-default py-12">
      <h1 className="h1">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <form className="card">
          <label className="text-sm">Full Name</label>
          <input className="mt-1 border rounded-lg p-2 w-full" placeholder="Your name" />
          <label className="text-sm mt-4">Email</label>
          <input className="mt-1 border rounded-lg p-2 w-full" placeholder="you@example.com" />
          <label className="text-sm mt-4">Message</label>
          <textarea className="mt-1 border rounded-lg p-2 w-full min-h-[120px]" />
          <button className="mt-4 rounded-xl bg-brand-gold text-brand-navy px-4 py-2">Send</button>
        </form>
        <div className="card">
          <h3 className="font-semibold text-brand-navy">Email</h3>
          <ul className="mt-2 text-sm">
            <li><a className="text-brand-blue" href="mailto:support@bsonsinc.com">support@bsonsinc.com</a></li>
            <li><a className="text-brand-blue" href="mailto:admin@bsonsinc.com">admin@bsonsinc.com</a></li>
            <li><a className="text-brand-blue" href="mailto:career@bsonsinc.com">career@bsonsinc.com</a></li>
          </ul>
          <p className="mt-4 text-xs text-neutral-600">We’ll respond within 1–2 business days.</p>
        </div>
      </div>
    </section>
  );
}