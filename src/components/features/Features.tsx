import Image from "next/image";
import FeatureCard from "./FeatureCard";
import TrustedBanner from "./TrustedBanner";

const features = [
  {
    title: "AI-Native Infrastructure",
    description:
      "Built from the ground up for AI workloads. High performance where it matters most.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="6.5" y="6.5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="9" width="4" height="4" rx="0.5" fill="currentColor" />
        <path d="M9 6.5V3.5M13 6.5V3.5M9 18.5V15.5M13 18.5V15.5M6.5 9H3.5M6.5 13H3.5M18.5 9H15.5M18.5 13H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Effortless Scalability",
    description:
      "Scale your infrastructure in seconds, not weeks. From startup to global scale.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 16V13M8.5 16V9M13 16V11M17.5 16V6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M14 5.5L17.5 5.5L17.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with advanced encryption, isolation, and compliance built-in.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L17 5.5V10.5C17 14.5 14.5 17.5 11 19C7.5 17.5 5 14.5 5 10.5V5.5L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.5 11L10.3 12.8L13.8 9.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Blazing Fast Performance",
    description:
      "Low latency, high throughput infrastructure designed for mission-critical workloads.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 3L5.5 12H10.5L9.5 19L16.5 10H11.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      {/* Decorative asteroids — background layer */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        <Image
          src="/photo/astro1.png"
          alt=""
          width={400}
          height={267}
          priority={false}
          className="absolute left-[-3%] top-[6%] w-[230px] brightness-[0.55] saturate-[0.85] md:w-[320px]"
        />
        <Image
          src="/photo/astro2.png"
          alt=""
          width={200}
          height={133}
          className="absolute right-[7%] top-[10%] w-[90px] brightness-[0.5] saturate-[0.8] md:w-[125px]"
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
              Why Quantum
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-7 max-w-2xl text-center text-[44px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[52px]">
          Infrastructure built for{" "}
          <span className="text-violet-bright">exponential growth.</span>
        </h2>

        {/* Subhead */}
        <p className="mx-auto mt-6 max-w-xl text-center text-[17px] leading-relaxed text-white/60">
          Quantum combines cutting-edge AI with scalable infrastructure so your
          business can grow without limits.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        {/* Trusted banner */}
        <div className="mt-8">
          <TrustedBanner />
        </div>
      </div>

      {/* Bottom asteroid — foreground layer (above content), softly blurred */}
      <Image
        src="/photo/astro3.png"
        alt=""
        width={420}
        height={280}
        aria-hidden
        className="pointer-events-none absolute bottom-[1%] right-[-4%] z-20 w-[220px] select-none blur-[2px] brightness-[0.5] saturate-[0.8] md:w-[360px]"
      />
    </section>
  );
}
