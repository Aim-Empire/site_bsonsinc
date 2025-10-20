import Link from "next/link";

const links = [
  { href: "/programs", label: "Programs" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/apply", label: "Apply" },
  { href: "/donation", label: "Donate" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
];

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {links.map((l) => (
        <Link key={l.href} href={l.href as any} className="btn-ghost text-center">
          {l.label}
        </Link>
      ))}
    </div>
  );
}
