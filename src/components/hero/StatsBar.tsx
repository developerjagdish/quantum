const stats = [
  { value: "98%", label: "Uptime" },
  { value: "10x", label: "Faster Growth" },
  { value: "50+", label: "Integrations" },
  { value: "$2B+", label: "Revenue Processed" },
];

export default function StatsBar() {
  return (
    <div className="mx-auto w-full max-w-[860px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
      <div className="grid grid-cols-2 divide-white/10 sm:grid-cols-4 sm:divide-x">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center px-6 py-7 text-center"
          >
            <span className="text-[34px] font-semibold leading-none text-violet-bright">
              {stat.value}
            </span>
            <span className="mt-2.5 text-[14px] text-white/55">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
