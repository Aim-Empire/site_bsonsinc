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
  { href: "/about", label: "About" }, // keep last
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="z-40 bg-[#0B1E34] text-white">
        <div className="container-default h-16 flex items-center justify-between">
          {/* Left: bigger logo chip (clickable) */}
          <Link href="/" className="flex items-center gap-2">
            <span className="w-11 h-11 rounded-full bg-white grid place-items-center overflow-hidden ring-1 ring-white/20">
              <img src="/logo.png" className="w-9 h-9 object-contain" alt="Bsons Inc logo" />
            </span>
          </Link>

          {/* Center: bigger, bolder brand (also a home link) */}
          <Link href="/" className="font-display font-black text-2xl md:text-3xl tracking-wide">
            Bsons Inc.
          </Link>

          {/* Right: larger hamburger (three horizontal lines) */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            title="Menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Slideout menu (2 cols phone, 3 cols wider) */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[90%] max-w-md bg-[#0B1E34] text-white shadow-xl p-5 overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-11 h-11 rounded-full bg-white grid place-items-center overflow-hidden ring-1 ring-white/20">
                  <img src="/logo.png" className="w-9 h-9 object-contain" alt="Bsons Inc logo" />
                </span>
                <span className="font-semibold">Menu</span>
              </div>
              <button onClick={() => setOpen(false)} className="w-12 h-12 grid place-items-center rounded-lg hover:bg-white/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>

            <nav className="mt-5 grid gap-3 grid-cols-2 sm:grid-cols-3">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href as any}
                  onClick={() => setOpen(false)}
                  className="min-w-0 truncate rounded-xl px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-center"
                >
                  {i.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
