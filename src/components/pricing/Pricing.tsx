import Image from "next/image";
import PriceCard from "./PriceCard";
import Faq from "./Faq";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: "$0",
    period: "/month",
    ctaLabel: "Get Started Free",
    features: [
      "1 AI-Powered Instance",
      "10GB Storage",
      "Community Support",
      "99.9% Uptime SLA",
    ],
  },
  {
    name: "Growth",
    tagline: "Built for scaling teams",
    price: "$49",
    period: "/month",
    ctaLabel: "Start 14-Day Free Trial",
    featured: true,
    features: [
      "10 AI-Powered Instances",
      "250GB Storage",
      "Priority Support",
      "99.99% Uptime SLA",
      "Advanced Analytics",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For mission-critical scale",
    price: "Custom",
    period: "/year",
    ctaLabel: "Contact Sales",
    customPrice: true,
    features: [
      "Unlimited Instances",
      "Unlimited Storage",
      "Dedicated Support",
      "99.999% Uptime SLA",
      "Custom Integrations",
      "Private Networking",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      {/* Background */}
      <Image
        src="/photo/pricing.jpg"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-background/40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-violet-bright">
              <path d="M7 1V13M1 7H13M2.8 2.8L11.2 11.2M11.2 2.8L2.8 11.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/85">
              Pricing
            </span>
          </div>
        </div>

        <h2 className="mx-auto mt-7 max-w-3xl text-center text-[44px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[52px]">
          Simple pricing. <span className="text-violet-bright">Massive impact.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-md text-center text-[17px] leading-relaxed text-white/60">
          Start for free. Scale when you&apos;re ready. No hidden fees. Cancel
          anytime.
        </p>

        {/* Plans */}
        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PriceCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-8">
          <Faq />
        </div>
      </div>
    </section>
  );
}
