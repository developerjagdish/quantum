import Link from "next/link";

const columns = [
  {
    title: "Platform",
    links: ["Features", "Pricing", "Security", "Integrations"],
  },
  {
    title: "Resources",
    links: ["Docs", "Blog", "Case Studies", "Status"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Partners", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  },
];

const socials = [
  {
    label: "GitHub",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M9 1C4.6 1 1 4.6 1 9c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.5.8.5 1.5v2.2c0 .2.1.5.5.4C14.7 15.5 17 12.5 17 9c0-4.4-3.6-8-8-8Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M4.5 6.5H2V16h2.5V6.5ZM3.25 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3ZM16 16h-2.5v-4.8c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.7V16H7.9s.03-8.3 0-9.5h2.5v1.3c.3-.5 1-1.2 2.3-1.2 1.7 0 3 1.1 3 3.5V16Z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M16 4.3c-.5.3-1.1.4-1.7.5.6-.4 1.1-1 1.3-1.6-.6.3-1.2.6-1.9.7-.5-.6-1.3-1-2.2-1-1.7 0-3 1.4-3 3 0 .2 0 .5.1.7-2.5-.1-4.7-1.3-6.2-3.2-.3.5-.4 1-.4 1.5 0 1 .5 1.9 1.3 2.5-.5 0-1-.2-1.4-.4 0 1.5 1 2.7 2.4 3-.3.1-.5.1-.8.1-.2 0-.4 0-.6-.1.4 1.2 1.5 2.1 2.8 2.1-1 .8-2.3 1.3-3.7 1.3H1c1.3.9 2.9 1.4 4.5 1.4 5.5 0 8.5-4.5 8.5-8.5v-.4c.6-.4 1.1-1 1.5-1.6Z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M14.5 4.2A12 12 0 0011.5 3.3l-.2.4c1 .3 1.5.6 2.2 1a8 8 0 00-6.9 0c.6-.4 1.2-.7 2.2-1l-.2-.4c-1 .2-2 .5-3 .9C1.6 7 1.1 9.7 1.3 12.4a12 12 0 003.7 1.9l.5-.9c-.5-.2-1-.4-1.4-.7l.3-.2a8.6 8.6 0 007.4 0l.3.2c-.4.3-.9.5-1.4.7l.5.9c1.3-.4 2.6-1 3.7-1.9.3-3.2-.5-5.9-2.3-8.2ZM6.5 11c-.7 0-1.3-.7-1.3-1.5S5.8 8 6.5 8s1.3.7 1.3 1.5S7.2 11 6.5 11Zm5 0c-.7 0-1.3-.7-1.3-1.5S10.8 8 11.5 8s1.3.7 1.3 1.5S12.2 11 11.5 11Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md">
      <div className="grid gap-12 px-8 py-12 lg:grid-cols-[1.1fr_2fr] lg:px-12">
        {/* Newsletter */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-violet/30 bg-violet/15 text-white">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 3C14 4 16 7.5 16 11L13.5 13.5L8.5 13.5L6 11C6 7.5 8 4 11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="11" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8.5 13.5L7 17M13.5 13.5L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className="text-[22px] font-semibold leading-tight text-white">
              Stay updated with
              <br />
              <span className="text-violet-bright">Quantum</span> news.
            </h3>
          </div>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/55">
            Subscribe to our newsletter and get the latest updates, features, and
            insights.
          </p>
          <form className="mt-6 flex max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-white/40 focus:border-violet/50 focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-b from-violet-bright to-violet px-5 py-3 text-[15px] font-medium text-white transition-all hover:shadow-[0_8px_30px_-6px_rgba(124,92,255,0.8)]"
            >
              Subscribe
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 7.5H11.5M11.5 7.5L8 4M11.5 7.5L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:border-l lg:border-white/10 lg:pl-12">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[15px] font-semibold text-white">{col.title}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[14px] text-white/55 transition-colors hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center gap-6 border-t border-white/10 px-8 py-7 sm:flex-row sm:justify-between lg:px-12">
        <div className="flex items-center gap-2">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M12 2.5L20.5 7.25V16.75L12 21.5L3.5 16.75V7.25L12 2.5Z" stroke="#8b6bff" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 7L16 9.5V14.5L12 17L8 14.5V9.5L12 7Z" fill="#8b6bff" />
          </svg>
          <span className="text-[20px] font-semibold tracking-tight text-white">Quantum</span>
        </div>

        <p className="text-[14px] text-white/45">
          © 2024 Quantum. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/60 transition-colors hover:border-white/25 hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
