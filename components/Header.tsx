"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
  { href: "/donation", label: "Donation" },
  { href: "/about", label: "About" } // About last
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="z-40 bg-[#0B1E34] text-white">
        <div className="container-default h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden ring-1 ring-white/30">
              <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons Inc logo" />
            </span>
          </Link>
          <div className="font-display text-lg tracking-wide">Bsons Inc.</div>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10"
            title="Menu"
          >
            {/* three vertical bars */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 4v16M12 4v16M18 4v16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0B1E34] text-white shadow-xl p-5 overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden ring-1 ring-white/30">
                  <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons Inc logo" />
                </span>
                <span className="font-semibold">Menu</span>
              </div>
              <button onClick={() => setOpen(false)} className="w-10 h-10 grid place-items-center rounded-lg hover:bg-white/10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>

            <nav className="mt-4 grid gap-2">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href as any}
                  className="w-full text-left rounded-xl px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/15"
                  onClick={() => setOpen(false)}
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
