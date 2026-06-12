const linePath =
  "M8 122 L40 114 L70 120 L100 100 L130 106 L160 88 L190 94 L220 74 L250 80 L285 60 L315 66 L350 42 L385 30 L424 14";
const areaPath = `${linePath} L424 150 L8 150 Z`;

export default function GrowthCard() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-black/50 p-7 backdrop-blur-md">
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-violet-bright">
        Infrastructure Growth
      </p>
      <p className="mt-4 text-[42px] font-semibold leading-none text-violet-bright">
        23.4x
      </p>
      <p className="mt-2 text-[15px] text-white/55">Growth in 12 months</p>

      <div className="mt-6">
        <svg
          viewBox="0 0 432 150"
          fill="none"
          preserveAspectRatio="none"
          className="h-[120px] w-full"
        >
          <defs>
            <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#growthFill)" />
          <path
            d={linePath}
            stroke="#8b6bff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="424" cy="14" r="5" fill="#fff" />
          <circle cx="424" cy="14" r="9" fill="#8b6bff" fillOpacity="0.35" />
        </svg>
      </div>
    </div>
  );
}
