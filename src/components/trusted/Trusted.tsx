import Image from "next/image";
import Link from "next/link";
import ReviewCard from "./ReviewCard";
import Reveal from "@/components/anim/Reveal";
import CountUp from "@/components/anim/CountUp";

const reviews = [
  {
    quote:
      "Quantum transformed our infrastructure. We scaled 10x without increasing our ops team.",
    name: "Arjun Patel",
    role: "CTO, Vertex",
  },
  {
    quote:
      "The performance and reliability are unmatched. Our users never felt a thing.",
    name: "Sarah Kim",
    role: "Engineering Lead, Horizon",
  },
  {
    quote:
      "Quantum gives us the speed, security, and flexibility we need to innovate faster.",
    name: "Michael Lee",
    role: "DevOps Manager, Pulse",
  },
];

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
    value: "150+",
    label: "Countries",
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
];

export default function Trusted() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      {/* Background */}
      <Image
        src="/photo/testi.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-background/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 lg:px-10">
        <Reveal as="div" stagger>
        {/* Header */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-violet-bright">
              <path d="M7 1V13M1 7H13M2.8 2.8L11.2 11.2M11.2 2.8L2.8 11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85">
              Trusted by Innovators
            </span>
          </div>
        </div>

        <h2 className="mx-auto mt-7 max-w-2xl text-center text-[44px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[52px]">
          Loved by teams.
          <br />
          Trusted <span className="text-violet-bright">worldwide.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-md text-center text-[17px] leading-relaxed text-white/65">
          Join thousands of teams building and scaling with Quantum every day.
        </p>
        </Reveal>

        {/* Reviews */}
        <Reveal as="div" stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Reveal>

        {/* Stats bar */}
        <Reveal className="mt-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 px-8 py-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white">
                  {stat.icon}
                </span>
                <div>
                  <p className="text-[26px] font-semibold leading-none text-violet-bright">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-2 text-[14px] text-white/55">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA banner */}
        <Reveal className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-background">
          <Image
            src="/photo/contact.jpg"
            alt=""
            fill
            aria-hidden
            className="object-cover object-left"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/70 via-background/80 to-background/95" />
          <div className="relative z-10 flex flex-col gap-7 px-8 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div>
              <h3 className="text-[30px] font-semibold tracking-tight text-white">
                Ready to scale <span className="text-violet-bright">without limits?</span>
              </h3>
              <p className="mt-3 text-[16px] text-white/60">
                Build, deploy, and scale your infrastructure with Quantum.
              </p>
            </div>
            <Link
              href="#start"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-gradient-to-b from-violet-bright to-violet px-6 py-3.5 text-[16px] font-medium text-white shadow-[0_8px_30px_-6px_rgba(124,92,255,0.7)] transition-all hover:shadow-[0_8px_40px_-4px_rgba(124,92,255,0.9)]"
            >
              Start Building Now
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 7.5H11.5M11.5 7.5L8 4M11.5 7.5L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
