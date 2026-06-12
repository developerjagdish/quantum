const brands = [
  {
    name: "vertex",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5L20.5 7.25V16.75L12 21.5L3.5 16.75V7.25L12 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M12 7L16 9.5V14.5L12 17L8 14.5V9.5L12 7Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "horizon",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 13.5C7 10.5 17 10.5 20 13.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: "pulse",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5L20.5 7.25V16.75L12 21.5L3.5 16.75V7.25L12 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7 12H9.5L11 8L13 16L14.5 12H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "novus",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 16V8L15 16V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "altitude",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 6.5L16.5 16H7.5L12 6.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustedBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-r from-violet/[0.12] via-white/[0.02] to-transparent px-10 py-10">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-sm">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-violet-bright">
            Trusted by Innovators
          </p>
          <h3 className="mt-4 text-[26px] font-semibold leading-snug text-white">
            Powering the next generation of industry leaders.
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-x-9 gap-y-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-white/80"
            >
              {brand.icon}
              <span className="text-[20px] font-medium lowercase">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
