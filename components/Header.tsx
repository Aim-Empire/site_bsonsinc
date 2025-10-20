"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const row1 = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/programs/investment", label: "Investment" },
    { href: "/programs/investment/partnerships", label: "Partnerships" },
    { href: "/admin", label: "Team Admin" },
  ];
  const row2 = [
    { href: "/resources", label: "Resources" },
    { href: "/donation", label: "Donation" },
    { href: "/careers", label: "Careers" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
    { href: "/admin", label: "Team Admin" },
  ];

  return (
    <header className="relative z-40 bg-[#0B1E34] text-white">
      <div className="container-default h-14 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=>setOpen(!open)}>
          <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden">
            <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons logo" />
          </span>
          <span className="font-display text-xl font-semibold tracking-wide">Bsons Inc.</span>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={()=>setOpen(!open)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10"
        >
          {/* vertical 3 lines */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 4v16M7 4v16M17 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <nav className="absolute left-0 right-0 bg-[#0B1E34] border-t border-white/10 shadow-xl">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-4 text-center">
            {row1.map((i)=>(
              <Link key={i.href} href={i.href}
                onClick={()=>setOpen(false)}
                className="rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 text-sm">
                {i.label}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-4 text-center border-t border-white/10">
            {row2.map((i)=>(
              <Link key={i.href} href={i.href}
                onClick={()=>setOpen(false)}
                className="rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 text-sm">
                {i.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
