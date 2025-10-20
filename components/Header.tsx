"use client";
import Link from "next/link";
import { useState } from "react";

const ROW1 = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Quick Apply" },
];

const ROW2 = [
  { href: "/programs/autos", label: "Autos" },
  { href: "/programs/investment", label: "Investment" },
  { href: "/programs/community-support", label: "Community Support" },
  { href: "/careers", label: "Careers" },
  { href: "/donation", label: "Donation" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/partnerships", label: "Partnerships" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // DARKER, BIGGER, MORE READABLE menu pills
  const pill =
    "group relative overflow-hidden whitespace-normal break-words text-wrap " +
    "rounded-2xl px-4 py-3 text-sm md:text-base font-medium " +
    "text-white bg-white/[.06] border border-white/12 shadow-sm " +
    "hover:bg-white/[.12] hover:border-white/20 transition duration-300 " +
    "active:scale-[.98]";

  const pillGold =
    "group relative overflow-hidden whitespace-normal break-words text-wrap " +
    "rounded-2xl px-4 py-3 text-sm md:text-base font-semibold " +
    "text-[#0B1E34] bg-gradient-to-br from-yellow-300 via-amber-300 to-yellow-400 " +
    "border border-amber-400/60 shadow hover:brightness-95 active:scale-[.98]";

  return (
    <header className="sticky top-0 z-40 bg-[#0B1E34] text-white">
      <div className="container-default grid grid-cols-[auto_1fr_auto] items-center h-16 md:h-20">
        {/* Logo (left) */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white grid place-items-center overflow-hidden">
            <img src="/logo.png" className="w-8 h-8 object-contain" alt="Bsons Inc logo" />
          </span>
        </Link>

        {/* Brand (center) */}
        <div className="justify-self-center font-display text-xl md:text-3xl font-semibold tracking-wide">
          Bsons Inc.
        </div>

        {/* Menu button (right) */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="justify-self-end inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Floating sheet (dark, not full-screen) */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside
            className="absolute right-3 top-[4.8rem] w-[94vw] max-w-[580px] rounded-2xl
                       bg-[#0B1E34]/98 border border-white/10 shadow-2xl backdrop-blur p-4"
          >
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden">
                  <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons Inc logo" />
                </span>
                <span className="font-semibold">Menu</span>
              </div>
              <button onClick={() => setOpen(false)} className="w-10 h-10 grid place-items-center rounded-lg hover:bg-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="text-center">
              {/* Row 1 */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 p-2">
                {ROW1.map((i) => (
                  <Link key={i.href} href={i.href as any} onClick={() => setOpen(false)} className={pill}>
                    {i.label}
                  </Link>
                ))}
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 p-2 border-t border-white/10">
                {ROW2.slice(0,6).map((i) => (
                  <Link key={i.href} href={i.href as any} onClick={() => setOpen(false)} className={pill}>
                    {i.label}
                  </Link>
                ))}
              </div>
              {/* Centered last row with Partnerships + Team Admin */}
              <div className="grid grid-cols-2 gap-3 p-2">
                <Link href="/partnerships" onClick={() => setOpen(false)} className={pill}>
                  Partnerships
                </Link>
                <Link href="/admin/login" onClick={() => setOpen(false)} className={pillGold}>
                  Team Admin
                </Link>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
