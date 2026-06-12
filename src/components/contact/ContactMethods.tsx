import type { ReactNode } from "react";

const methods: { title: string; detail: string; icon: ReactNode }[] = [
  {
    title: "Email Us",
    detail: "hello@quantum.dev",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 6.5L11 11L18 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Live Chat",
    detail: "Available 24/7",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 5H18C18.5 5 19 5.5 19 6V14C19 14.5 18.5 15 18 15H8L4 18.5V6C4 5.5 4.5 5 4 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 10H8.01M11 10H11.01M14 10H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    detail: "+1 (888) 123-4567",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 4H8L9.5 8L7.5 9.5C8.5 11.5 10.5 13.5 12.5 14.5L14 12.5L18 14V17C18 17.5 17.5 18 17 18C10.5 18 4 11.5 4 5C4 4.5 4.5 4 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Our Headquarters",
    detail: "San Francisco, CA, USA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 19C14 16 17 12.5 17 9C17 5.7 14.3 3 11 3C7.7 3 5 5.7 5 9C5 12.5 8 16 11 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="11" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ContactMethods() {
  return (
    <div className="flex flex-col gap-4">
      {methods.map((m) => (
        <a
          key={m.title}
          href="#"
          className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 px-6 py-5 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/5"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet/30 bg-violet/15 text-white">
            {m.icon}
          </span>
          <div className="flex-1">
            <p className="text-[16px] font-semibold text-white">{m.title}</p>
            <p className="mt-0.5 text-[14px] text-white/55">{m.detail}</p>
          </div>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-white">
            <path d="M4 9H13.5M13.5 9L9.5 5M13.5 9L9.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ))}
    </div>
  );
}
