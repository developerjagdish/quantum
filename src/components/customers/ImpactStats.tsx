const stats = [
  {
    value: "2,000+",
    label: "Happy Customers",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="8.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 17.5C3.5 14.7 5.7 12.5 8.5 12.5C11.3 12.5 13.5 14.7 13.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 5.2C15.7 5.6 16.5 6.7 16.5 8C16.5 9.3 15.7 10.4 14.5 10.8M15.5 17.5C15.5 15.2 14.2 13.2 12.3 12.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "10M+",
    label: "Workloads Deployed",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C14 4 16 7.5 16 11L13.5 13.5L8.5 13.5L6 11C6 7.5 8 4 11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="11" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8.5 13.5L7 17M13.5 13.5L15 17M11 14V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "190+",
    label: "Countries Supported",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 11H19M11 3C13 5.2 14 8 14 11C14 14 13 16.8 11 19C9 16.8 8 14 8 11C8 8 9 5.2 11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "99.99%",
    label: "Uptime SLA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L17 5.5V10.5C17 14.5 14.5 17.5 11 19C7.5 17.5 5 14.5 5 10.5V5.5L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.5 11L10.3 12.8L13.8 9.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "24/7",
    label: "Expert Support",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 12V10C5 6.7 7.7 4 11 4C14.3 4 17 6.7 17 10V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="3.5" y="11.5" width="3.5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="11.5" width="3.5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 16C17 17.5 15.5 18.5 13 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ImpactStats() {
  return (
    <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/10">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-center gap-4 px-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white backdrop-blur-sm">
            {stat.icon}
          </span>
          <div>
            <p className="text-[26px] font-semibold leading-none text-violet-bright">
              {stat.value}
            </p>
            <p className="mt-2 text-[14px] text-white/55">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
