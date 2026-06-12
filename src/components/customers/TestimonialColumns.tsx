import type { ReactNode } from "react";

const brandIcons: Record<string, ReactNode> = {
  vertex: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5L20.5 7.25V16.75L12 21.5L3.5 16.75V7.25L12 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 7L16 9.5V14.5L12 17L8 14.5V9.5L12 7Z" fill="currentColor" />
    </svg>
  ),
  horizon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 13.5C7 10.5 17 10.5 20 13.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  pulse: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5L20.5 7.25V16.75L12 21.5L3.5 16.75V7.25L12 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7 12H9.5L11 8L13 16L14.5 12H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  novus: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 4V7M12 17V20M4 12H7M17 12H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  altitude: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 6.5L16.5 16H7.5L12 6.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
};

const testimonials = [
  {
    brand: "vertex",
    quote:
      "Quantum cut our infrastructure costs by 40% while improving performance across the board.",
    name: "Alex Morgan",
    role: "CTO, Vertex",
  },
  {
    brand: "horizon",
    quote:
      "We scaled 10x in 6 months without worrying about infrastructure.",
    name: "Sarah Chen",
    role: "VP Engineering, Horizon",
  },
  {
    brand: "pulse",
    quote: "The reliability and speed we get with Quantum is unmatched.",
    name: "David Lee",
    role: "Head of DevOps, Pulse",
  },
  {
    brand: "novus",
    quote: "Quantum powers our global platform. It just works, every time.",
    name: "Maya Patel",
    role: "CTO, Novus",
  },
  {
    brand: "altitude",
    quote: "Support is incredible. They're partners in our growth journey.",
    name: "James Wilson",
    role: "Engineering Lead, Altitude",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-violet-bright text-[13px] font-semibold text-white ring-1 ring-white/15">
      {initials}
    </span>
  );
}

export default function TestimonialColumns() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 px-4 py-10 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-white/10">
        {testimonials.map((t) => (
          <div key={t.brand} className="flex flex-col px-6">
            <div className="flex items-center gap-2.5 text-white">
              {brandIcons[t.brand]}
              <span className="text-[19px] font-semibold lowercase">{t.brand}</span>
            </div>
            <p className="mt-5 flex-1 text-[15px] leading-relaxed text-white/65">
              {t.quote}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <Avatar name={t.name} />
              <div>
                <p className="text-[14px] font-semibold text-white">{t.name}</p>
                <p className="text-[13px] text-violet-bright">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
