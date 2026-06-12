import Link from "next/link";
import FeatureCallout from "./FeatureCallout";
import TrustedBy from "./TrustedBy";
import StatsBar from "./StatsBar";
import Reveal from "@/components/anim/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Subtle left-side gradient only — keeps text readable without dimming the video */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-background/90 via-background/45 to-transparent" />

      {/* Feature callouts around the planet */}
      <FeatureCallout
        className="left-[45%] top-[13%]"
        align="left"
        title="Intelligent Automation"
        description="Eliminate manual work with AI agents."
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2.5V17.5M2.5 10H17.5M4.6 4.6L15.4 15.4M15.4 4.6L4.6 15.4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        }
      />

      <FeatureCallout
        className="right-[5%] top-[40%]"
        align="left"
        title="Real-Time Insights"
        description="Get actionable insights as they happen."
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 14V11M8 14V7M12 14V9M16 14V5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        }
      />

      <FeatureCallout
        className="left-[44%] top-[70%]"
        align="left"
        title="Scalable Infrastructure"
        description="Built to grow with your ambition."
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 3L17 6.5L10 10L3 6.5L10 3Z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <path
              d="M3 10L10 13.5L17 10M3 13.5L10 17L17 13.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* Main content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1320px] flex-col px-6 pb-10 pt-32 lg:px-10 lg:pt-36">
        <Reveal as="div" trigger="load" stagger y={34} className="flex max-w-xl flex-1 flex-col justify-center">
          {/* Eyebrow badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-violet-bright">
              <path
                d="M7 1V13M1 7H13M2.8 2.8L11.2 11.2M11.2 2.8L2.8 11.2"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[13px] font-medium text-white/85">
              AI-Powered Growth Infrastructure
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-7 text-[56px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[64px] lg:text-[68px]">
            Stop Guessing.
            <br />
            Start <span className="text-violet-bright">Scaling.</span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/65">
            Quantum helps growth-focused companies build AI-powered
            infrastructure that scales.
          </p>

          {/* CTA */}
          <div className="mt-9">
            <Link
              href="#start"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-violet-bright to-violet px-6 py-3.5 text-[16px] font-medium text-white shadow-[0_8px_30px_-6px_rgba(124,92,255,0.7)] transition-all hover:shadow-[0_8px_40px_-4px_rgba(124,92,255,0.9)]"
            >
              Build My Growth Engine
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path
                    d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trusted by */}
          <div className="mt-16">
            <TrustedBy />
          </div>
        </Reveal>

        {/* Stats bar */}
        <Reveal trigger="load" delay={0.5} className="mt-10">
          <StatsBar />
        </Reveal>
      </div>
    </section>
  );
}
