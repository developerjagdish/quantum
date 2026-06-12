import Image from "next/image";
import Link from "next/link";

const perks = ["14-day free trial", "No credit card required", "Cancel anytime"];

export default function CtaBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-background">
      {/* Planet backdrop */}
      <Image
        src="/photo/section3.jpg"
        alt=""
        fill
        aria-hidden
        className="-scale-x-100 object-cover object-left"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-background/75 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 px-8 py-12 lg:py-14 lg:pl-[38%] lg:pr-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-violet-bright">
          Ready to Grow?
        </p>

        <div className="mt-4 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <h3 className="text-[32px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[36px]">
            The infrastructure to scale
            <br />
            <span className="text-violet-bright">your ambitions.</span>
          </h3>

          <Link
            href="#start"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-gradient-to-b from-violet-bright to-violet px-6 py-3.5 text-[16px] font-medium text-white shadow-[0_8px_30px_-6px_rgba(124,92,255,0.7)] transition-all hover:shadow-[0_8px_40px_-4px_rgba(124,92,255,0.9)]"
          >
            Build My Growth Engine
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-[14px] text-white/70">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-violet-bright">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
                <path d="M6 9L8 11L12 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {perk}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
