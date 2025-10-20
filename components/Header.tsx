"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";

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
  { href: "/about", label: "About" }, // About last
];

function ThreeVerticalBars({ className="" }:{className?:string}) {
  return (
    <svg viewBox="0 0 24 24" className={clsx("w-6 h-6", className)} fill="currentColor" aria-hidden="true">
      <rect x="10.5" y="3" width="3" height="4" rx="1"></rect>
      <rect x="10.5" y="10" width="3" height="4" rx="1"></rect>
      <rect x="10.5" y="17" width="3" height="4" rx="1"></rect>
    </svg>
  );
}

export default function Header(){
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="bg-brand-navy text-white">
      <div className="container-default h-16 grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="w-9 h-9 rounded-full border border-white/20" alt="logo"/>
        </Link>

        {/* Center: Title */}
        <div className="justify-self-center">
          <Link href="/" className="font-display text-xl">Bsons Inc.</Link>
        </div>

        {/* Right: Menu button */}
        <div className="justify-self-end">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-xl p-2 bg-white/10 hover:bg-white/20"
          >
            <ThreeVerticalBars />
          </button>
        </div>
      </div>

      {/* Overlay + Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[78%] max-w-xs bg-[#0B2649] text-white shadow-xl p-4">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-1 bg-white/10 hover:bg-white/20"
              >
                ✕
              </button>
            </div>
            <nav className="mt-3">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href as any}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-lg px-3 py-3 text-[15px] hover:bg-white/10"
                >
                  {i.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
