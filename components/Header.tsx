"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const nav = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply" },
  { href: "/careers", label: "Careers" },
  { href: "/donation", label: "Donation" },
  { href: "/testimonials", label: "Testimonials" },
];

function KebabIcon({ className="" }:{className?:string}){
  return (
    <svg viewBox="0 0 24 24" className={clsx("w-6 h-6", className)} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="5" r="2"></circle>
      <circle cx="12" cy="12" r="2"></circle>
      <circle cx="12" cy="19" r="2"></circle>
    </svg>
  );
}

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border-b">
      <div className="container-default h-16 grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="w-9 h-9 rounded-full border" alt="logo"/>
        </Link>

        {/* Center: Title (shortened) */}
        <div className="justify-self-center">
          <Link href="/" className="font-display text-xl text-brand-navy">Bsons Inc.</Link>
        </div>

        {/* Right: Kebab menu */}
        <div className="justify-self-end relative">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(v => !v)}
            className="rounded-xl p-2 text-brand-navy hover:bg-brand-cream"
          >
            <KebabIcon />
          </button>

          {/* Panel */}
          {open && (
            <div className="absolute right-0 mt-2 w-64 rounded-2xl border bg-white shadow-xl p-2">
              <div className="grid gap-1">
                {nav.map(item => (
                  <Link
                    key={item.href}
                    href={item.href as any}
                    onClick={() => setOpen(false)}
                    className="w-full rounded-xl px-3 py-2 text-sm hover:bg-amber-50 text-brand-navy"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
