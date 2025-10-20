"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/programs/investment", label: "Investment" },
  { href: "/programs/investment/partnerships", label: "Partnerships" }, // NEW
  { href: "/resources", label: "Resources" },
  { href: "/donation", label: "Donation" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="z-40 bg-[#0B1E34] text-white">
        <div className="container-default h-14 flex items-center justify-between">
          {/* Left: logo on white badge */}
          <Link href="/" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden">
              <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons Inc logo" />
            </span>
          </Link>
          {/* Center: brand (bolder & bigger) */}
          <div className="font-display text-xl md:text-2xl tracking-wide font-semibold">Bsons Inc.</div>
          {/* Right: hamburger (3 vertical bars) */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 4v16M7 4v16M17 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Slideout menu */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0B1E34] text-white shadow-xl p-5 overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden">
                  <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons Inc logo" />
                </span>
                <span className="font-semibold">Menu</span>
              </div>
              <button onClick={() => setOpen(false)} className="w-10 h-10 grid place-items-center rounded-lg hover:bg-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>

            {/* Nav buttons arranged into rows (2 per row on small screens) */}
            <nav className="mt-4 grid grid-cols-1 xs:grid-cols-2 gap-2">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href as any}
                  className="w-full text-left rounded-xl px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10"
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
              {/* Team Admin quick entry */}
              <Link
                href="/admin"
                className="w-full text-left rounded-xl px-4 py-3 bg-[var(--brand-gold)] text-[var(--brand-navy)] hover:brightness-95 border border-white/10"
                onClick={() => setOpen(false)}
              >
                Team Admin
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
