const brands = [
  {
    name: "vertex",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2L17 6V14L10 18L3 14V6L10 2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M10 6L13 8V12L10 14L7 12V8L10 6Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "horizon",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 11.5C5.5 9 14.5 9 17 11.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: "pulse",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.3" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M5 10H7.5L9 6.5L11 13.5L12.5 10H15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "novus",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 13.5V6.5L13 13.5V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "altitude",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 5L14 14H6L10 5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustedBy() {
  return (
    <div>
      <p className="text-[13px] text-white/40">Trusted by innovative teams at</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex items-center gap-2 text-white/45 transition-colors hover:text-white/70"
          >
            {brand.icon}
            <span className="text-[15px] font-medium lowercase">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
