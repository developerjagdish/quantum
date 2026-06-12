import type { ReactNode } from "react";
import Link from "next/link";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  iconShape?: "square" | "circle";
};

export default function FeatureCard({
  icon,
  title,
  description,
  href = "#",
  iconShape = "square",
}: FeatureCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.16] hover:bg-white/[0.04]">
      <span
        className={`flex h-12 w-12 items-center justify-center border border-violet/30 bg-violet/15 text-white shadow-[0_0_20px_-6px_rgba(124,92,255,0.7)] ${
          iconShape === "circle" ? "rounded-full" : "rounded-xl"
        }`}
      >
        {icon}
      </span>
      <h3 className="mt-6 text-[19px] font-semibold text-white">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-white/55">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-violet-bright transition-colors hover:text-white"
      >
        Learn more
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="transition-transform group-hover:translate-x-0.5"
        >
          <path
            d="M3 7.5H11.5M11.5 7.5L8 4M11.5 7.5L8 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
