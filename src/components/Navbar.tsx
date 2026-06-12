import Link from "next/link";

const navLinks = [
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Platform", href: "#platform" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-6 lg:px-10 lg:py-7">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[22px] font-semibold tracking-tight text-white">
            Quantum
          </span>
        </Link>

        {/* Center nav */}
        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex items-center gap-1 text-[15px] font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="mt-0.5 text-white/60"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#demo"
          className="group flex items-center gap-2 rounded-full border border-violet/60 bg-violet/10 px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_0_20px_-4px_rgba(124,92,255,0.6)] transition-all hover:bg-violet/20"
        >
          Book a Demo
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path
              d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
