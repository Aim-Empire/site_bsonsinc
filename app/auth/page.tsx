export const metadata = { title: "Get Started | Bsons Inc." };

export default function Page(){
  return (
    <main className="min-h-screen bg-[var(--page-auth,#F7FBFF)]">
      <section className="container-default py-10">
        <h1 className="font-display text-4xl text-brand-navy">Get Started</h1>
        <p className="mt-2 text-neutral-700">Create an account to choose an investment type and connect with an Investment Tutor.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form className="card">
            <h2 className="font-semibold text-brand-navy">Sign Up</h2>
            <label className="text-sm mt-4 block">Full Name</label>
            <input className="mt-1 border rounded-lg p-2 w-full" placeholder="Your name" />
            <label className="text-sm mt-4 block">Email</label>
            <input className="mt-1 border rounded-lg p-2 w-full" placeholder="you@example.com" />
            <label className="text-sm mt-4 block">Password</label>
            <input type="password" className="mt-1 border rounded-lg p-2 w-full" />
            <button className="mt-4 btn">Create Account</button>
          </form>

          <form className="card">
            <h2 className="font-semibold text-brand-navy">Log In</h2>
            <label className="text-sm mt-4 block">Email</label>
            <input className="mt-1 border rounded-lg p-2 w-full" placeholder="you@example.com" />
            <label className="text-sm mt-4 block">Password</label>
            <input type="password" className="mt-1 border rounded-lg p-2 w-full" />
            <button className="mt-4 btn">Log In</button>
            <p className="mt-3 text-xs text-neutral-500">Demo only — wiring real auth can come later.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
