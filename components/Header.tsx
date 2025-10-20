"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply" },
  { href: "/careers", label: "Careers" },
  { href: "/donation", label: "Donation" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/programs/investment/partnerships", label: "Partnership Investment" },
  { href: "/admin/login", label: "Team Admin" },
];

export default function Header(){
  const [open, setOpen] = useState(false);

  // Split into two rows & ensure Team Admin is last, centered
  const core = nav.slice(0, nav.length - 1);
  const row1 = core.slice(0, 6);
  const row2 = core.slice(6);

  return (
    <>
      <header className="z-40 bg-[#0B1E34] text-white">
        <div className="container-default h-16 md:h-18 flex items-center justify-between">
          {/* Left: logo in white badge */}
          <Link href="/" className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-white grid place-items-center overflow-hidden">
              <img src="/logo.png" alt="Bsons Inc logo" className="w-8 h-8 object-contain"/>
            </span>
          </Link>

          {/* Center Brand */}
          <div className="font-display text-xl md:text-2xl tracking-wide select-none">Bsons Inc.</div>

          {/* Right: hamburger */}
          <button
            aria-label="Open menu"
            onClick={()=>setOpen(true)}
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16M7 4v16M17 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Slideout menu (doesn't cover full page) */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={()=>setOpen(false)} />
          <aside className="absolute right-0 top-0 h-[85%] w-[88%] max-w-md bg-[#0B1E34] text-white shadow-2xl rounded-bl-2xl p-5 overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-white grid place-items-center overflow-hidden">
                  <img src="/logo.png" className="w-8 h-8 object-contain" alt="Bsons Inc logo" />
                </span>
                <span className="font-semibold text-lg">Menu</span>
              </div>
              <button onClick={()=>setOpen(false)} className="w-10 h-10 grid place-items-center rounded-lg hover:bg-white/10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>

            {/* Two rows of large dark pills */}
            <nav className="mt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                {row1.map(i=>(
                  <Link key={i.href} href={i.href}
                        onClick={()=>setOpen(false)}
                        className="rounded-xl px-4 py-3 text-base bg-white/5 border border-white/15 hover:bg-white/10">
                    {i.label}
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center border-t border-white/10 mt-4 pt-4">
                {row2.map(i=>(
                  <Link key={i.href} href={i.href}
                        onClick={()=>setOpen(false)}
                        className="rounded-xl px-4 py-3 text-base bg-white/5 border border-white/15 hover:bg-white/10">
                    {i.label}
                  </Link>
                ))}
                {/* Team Admin (accent) */}
                <Link href="/admin/login"
                      onClick={()=>setOpen(false)}
                      className="col-span-2 sm:col-span-1 rounded-xl px-4 py-3 text-base font-semibold
                                 bg-[var(--brand-gold)] text-[var(--brand-navy)] border border-white/15 hover:brightness-95">
                  Team Admin
                </Link>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
