"use client";
import Link from "next/link";
import { useState } from "react";

/** Menu items */
const ROW1 = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply" },
];

const ROW2 = [
  { href: "/careers", label: "Careers" },
  { href: "/donation", label: "Donation" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/partnerships", label: "Partnerships" }, // new
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Fancy pill styles
  const pill =
    "group relative overflow-hidden rounded-xl px-3 py-2 text-sm border shadow-sm " +
    "border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 " +
    "hover:from-white/20 hover:via-white/10 hover:to-white/5 transition duration-300 " +
    "active:scale-[.98] before:absolute before:inset-0 before:rounded-[inherit] before:ring-1 before:ring-white/10 " +
    "after:content-[''] after:absolute after:top-0 after:-left-1/3 after:h-full after:w-1/3 " +
    "after:bg-white/30 after:opacity-0 after:rotate-12 after:blur-sm group-hover:after:translate-x-[260%] " +
    "group-hover:after:opacity-60 after:transition-all after:duration-500";

  const pillGold =
    "group relative overflow-hidden rounded-xl px-3 py-2 text-sm font-semibold text-[#0B1E34] " +
    "bg-gradient-to-br from-yellow-300 via-amber-300 to-yellow-400 shadow " +
    "hover:brightness-95 active:scale-[.98] before:absolute before:inset-0 before:rounded-[inherit] " +
    "before:ring-1 before:ring-amber-400/50 after:content-[''] after:absolute after:top-0 after:-left-1/3 " +
    "after:h-full after:w-1/3 after:bg-white/60 after:opacity-0 after:rotate-12 after:blur-sm " +
    "group-hover:after:translate-x-[260%] group-hover:after:opacity-80 after:transition-all after:duration-500";

  return (
    <header className="sticky top-0 z-40 bg-[#0B1E34] text-white">
      <div className="container-default grid grid-cols-[auto_1fr_auto] items-center h-16 md:h-18">
        {/* Left: Logo (also toggles menu) */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-full bg-white grid place-items-center overflow-hidden">
            <img src="/logo.png" className="w-8 h-8 object-contain" alt="Bsons Inc logo" />
          </span>
        </Link>

        {/* Center: Brand */}
        <div className="justify-self-center font-display text-xl md:text-2xl font-semibold tracking-wide">
          Bsons Inc.
        </div>

        {/* Right: menu button */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="justify-self-end inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10"
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Floating sheet (not full screen) */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside
            className="absolute right-3 top-[4.25rem] w-[92vw] max-w-[540px] rounded-2xl
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
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-2">
                {ROW1.map((i) => (
                  <Link key={i.href} href={i.href as any} onClick={() => setOpen(false)} className={pill}>
                    {i.label}
                  </Link>
                ))}
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-2 border-t border-white/10">
                {ROW2.map((i) => (
                  <Link key={i.href} href={i.href as any} onClick={() => setOpen(false)} className={pill}>
                    {i.label}
                  </Link>
                ))}
                {/* Centered Team Admin at the end */}
                <div className="col-span-3 sm:col-span-6 grid place-items-center pt-1">
                  <Link href="/admin/login" onClick={() => setOpen(false)} className={pillGold}>
                    Team Admin
                  </Link>
                </div>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
