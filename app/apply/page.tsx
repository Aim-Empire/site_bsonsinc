export default function Apply(){
  return (
    <section className="container-default py-12">
      <h1 className="h1">Quick Eligibility</h1>
      <form className="card mt-6 grid gap-4">
        <div>
          <label className="text-sm">Full Name</label>
          <input className="mt-1 border rounded-lg p-2 w-full" />
        </div>
        <div>
          <label className="text-sm">Program</label>
          <select className="mt-1 border rounded-lg p-2 w-full">
            <option>Community Support</option>
            <option>Loan</option>
            <option>Small Business Loan</option>
            <option>Investment</option>
            <option>Autos</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Country/Region</label>
          <select className="mt-1 border rounded-lg p-2 w-full">
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
        </div>
        <button className="rounded-xl bg-brand-gold text-brand-navy px-4 py-2">Submit</button>
      </form>
    </section>
  );
}