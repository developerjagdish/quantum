import Image from "next/image";
import Link from "next/link";
import TestimonialColumns from "./TestimonialColumns";
import ImpactStats from "./ImpactStats";

export default function Customers() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background */}
      <Image
        src="/photo/section5.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover object-right-top"
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-background via-background/65 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/85 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-24 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-violet-bright">
              <path d="M7 1V13M1 7H13M2.8 2.8L11.2 11.2M11.2 2.8L2.8 11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85">
              Customers &amp; Impact
            </span>
          </div>

          <h2 className="mt-7 text-[52px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[58px]">
            Real results.
            <br />
            <span className="text-violet-bright">Real impact.</span>
          </h2>

          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/65">
            Join forward-thinking companies that scale faster, spend smarter,
            and stay ahead.
          </p>

          <div className="mt-9">
            <Link
              href="#stories"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-violet-bright to-violet px-6 py-3.5 text-[16px] font-medium text-white shadow-[0_8px_30px_-6px_rgba(124,92,255,0.7)] transition-all hover:shadow-[0_8px_40px_-4px_rgba(124,92,255,0.9)]"
            >
              See Customer Stories
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <TestimonialColumns />
        </div>

        {/* Impact stats */}
        <div className="mt-14">
          <ImpactStats />
        </div>
      </div>
    </section>
  );
}
