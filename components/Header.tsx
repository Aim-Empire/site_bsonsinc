'use client';

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/programs/autos", label: "Autos" },
  { href: "/programs/investment", label: "Investment" },
  { href: "/programs/community-support", label: "Community Support" },
  { href: "/careers", label: "Careers" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/donation", label: "Donation" },
  { href: "/about", label: "About" }, // keep About last
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="z-40 bg-[#0B1E34] text-white">
        <div className="container mx-auto max-w-6xl h-14 px-4 flex items-center justify-between">
          {/* Left: logo on white chip */}
          <Link href="/" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden">
              <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons Inc." />
            </span>
          </Link>

          {/* Center: short brand */}
          <div className="font-semibold tracking-wide">Bsons Inc.</div>

          {/* Right: 3 vertical lines button */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 active:bg-white/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 4v16M12 4v16M17 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Slide-out menu */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[#0B1E34] text-white shadow-xl p-5 overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden">
                  <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons Inc." />
                </span>
                <span className="font-medium">Menu</span>
              </div>
              <button onClick={() => setOpen(false)} className="w-10 h-10 grid place-items-center rounded-lg hover:bg-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Buttons for links */}
            <nav className="mt-4 grid gap-2">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href as any}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur"
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