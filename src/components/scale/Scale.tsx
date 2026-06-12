import Image from "next/image";
import Link from "next/link";
import GrowthCard from "./GrowthCard";
import Testimonial from "./Testimonial";
import Reveal from "@/components/anim/Reveal";
import CountUp from "@/components/anim/CountUp";

const stats = [
  {
    value: "10M+",
    label: "Users Supported",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="8.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 17.5C3.5 14.7 5.7 12.5 8.5 12.5C11.3 12.5 13.5 14.7 13.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 5.2C15.7 5.6 16.5 6.7 16.5 8C16.5 9.3 15.7 10.4 14.5 10.8M15.5 17.5C15.5 15.2 14.2 13.2 12.3 12.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "500K+",
    label: "Instances Deployed",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L19 7L11 11L3 7L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 11L11 15L19 11M3 15L11 19L19 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "99.99%",
    label: "Uptime SLA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 11H19M11 3C13 5.2 14 8 14 11C14 14 13 16.8 11 19C9 16.8 8 14 8 11C8 8 9 5.2 11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "Global",
    label: "Edge Network",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 3L5 12H10L9 19L16 10H11L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Scale() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background */}
      <Image
        src="/photo/section3.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover object-right"
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <Reveal as="div" stagger className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-violet-bright">
                <path d="M7 1V13M1 7H13M2.8 2.8L11.2 11.2M11.2 2.8L2.8 11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85">
                Built to Scale
              </span>
            </div>

            <h2 className="mt-7 text-[52px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[58px]">
              Scales with you.
              <br />
              <span className="text-violet-bright">Always.</span>
            </h2>

            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/65">
              Whether you&apos;re just getting started or managing millions of
              users, Quantum grows with your ambitions.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white backdrop-blur-sm">
                    {stat.icon}
                  </span>
                  <p className="mt-4 text-[26px] font-semibold leading-none text-violet-bright">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-2 text-[14px] text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="#how-it-works"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-violet-bright to-violet px-6 py-3.5 text-[16px] font-medium text-white shadow-[0_8px_30px_-6px_rgba(124,92,255,0.7)] transition-all hover:shadow-[0_8px_40px_-4px_rgba(124,92,255,0.9)]"
              >
                See How It Works
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </Reveal>

          {/* Right — growth card */}
          <Reveal className="flex justify-center lg:justify-end">
            <GrowthCard />
          </Reveal>
        </div>

        {/* Testimonial */}
        <Reveal className="mt-20">
          <Testimonial />
        </Reveal>
      </div>
    </section>
  );
}
