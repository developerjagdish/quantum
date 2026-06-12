import Image from "next/image";
import FeatureCard from "@/components/features/FeatureCard";
import CtaBanner from "./CtaBanner";

const cards = [
  {
    title: "Developer First",
    description:
      "APIs, SDKs, and powerful CLIs designed to make developers 10x more productive.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2.5L18.5 6.5V15.5L11 19.5L3.5 15.5V6.5L11 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3.5 6.5L11 10.5L18.5 6.5M11 10.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Easy Integrations",
    description:
      "Seamlessly integrate with your favorite tools and workflows in minutes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 3.5C12.1 3.5 13 4.4 13 5.5V6.5H15.5C16.1 6.5 16.5 6.9 16.5 7.5V10H17.5C18.6 10 19.5 10.9 19.5 12C19.5 13.1 18.6 14 17.5 14H16.5V16.5C16.5 17.1 16.1 17.5 15.5 17.5H13V16.5C13 15.4 12.1 14.5 11 14.5C9.9 14.5 9 15.4 9 16.5V17.5H6.5C5.9 17.5 5.5 17.1 5.5 16.5V14H4.5C3.4 14 2.5 13.1 2.5 12C2.5 10.9 3.4 10 4.5 10H5.5V7.5C5.5 6.9 5.9 6.5 6.5 6.5H9V5.5C9 4.4 9.9 3.5 11 3.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Open & Flexible",
    description:
      "Open standards and modular architecture give you the freedom to build your way.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M8 7L4.5 11L8 15M14 7L17.5 11L14 15M12.5 5.5L9.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Enterprise Ready",
    description:
      "Built with compliance, reliability, and support your team can count on.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="8.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 17.5C3.5 14.7 5.7 12.5 8.5 12.5C11.3 12.5 13.5 14.7 13.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 5.2C15.7 5.6 16.5 6.7 16.5 8C16.5 9.3 15.7 10.4 14.5 10.8M15.5 17.5C15.5 15.2 14.2 13.2 12.3 12.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Developers() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      {/* Decorative asteroids */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        <Image
          src="/photo/astro4.png"
          alt=""
          width={520}
          height={760}
          className="absolute left-[-6%] top-[8%] w-[230px] brightness-[0.8] saturate-[0.9] md:w-[300px]"
        />
        <Image
          src="/photo/astro3.png"
          alt=""
          width={420}
          height={280}
          className="absolute right-[-3%] top-[1%] w-[200px] brightness-90 saturate-[0.95] md:w-[300px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-violet-bright">
              <path d="M7 1V13M1 7H13M2.8 2.8L11.2 11.2M11.2 2.8L2.8 11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85">
              Designed for You
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-7 max-w-2xl text-center text-[44px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[52px]">
          Built for developers.
          <br />
          <span className="text-violet-bright">Loved by teams.</span>
        </h2>

        {/* Subhead */}
        <p className="mx-auto mt-6 max-w-xl text-center text-[17px] leading-relaxed text-white/60">
          Quantum gives you the tools, performance, and flexibility to ship
          faster and scale further.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <FeatureCard key={card.title} iconShape="circle" {...card} />
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-8">
          <CtaBanner />
        </div>
      </div>
    </section>
  );
}
