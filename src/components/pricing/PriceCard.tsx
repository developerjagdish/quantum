import Link from "next/link";

type PriceCardProps = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
};

export default function PriceCard({
  name,
  tagline,
  price,
  period,
  features,
  ctaLabel,
  featured = false,
}: PriceCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur-md ${
        featured
          ? "border-violet/60 bg-violet/[0.08] shadow-[0_0_50px_-12px_rgba(124,92,255,0.6)]"
          : "border-white/10 bg-black/40"
      }`}
    >
      {featured && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-[22px] font-semibold text-white">{name}</h3>
      <p className="mt-1.5 text-[15px] text-white/55">{tagline}</p>

      <div className="mt-7 flex items-end gap-1.5">
        <span className="text-[44px] font-semibold leading-none text-violet-bright">
          {price}
        </span>
        <span className="mb-1 text-[15px] text-white/50">{period}</span>
      </div>

      <div className="my-7 h-px w-full bg-white/10" />

      <ul className="flex flex-1 flex-col gap-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-[15px] text-white/75">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-violet-bright">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
              <path d="M6 9L8 11L12 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="#start"
        className={`group mt-8 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-medium transition-all ${
          featured
            ? "bg-gradient-to-b from-violet-bright to-violet text-white shadow-[0_8px_30px_-6px_rgba(124,92,255,0.7)] hover:shadow-[0_8px_40px_-4px_rgba(124,92,255,0.9)]"
            : "border border-white/15 text-white hover:bg-white/5"
        }`}
      >
        {ctaLabel}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
          <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
