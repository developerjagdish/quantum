import type { ReactNode } from "react";

type FeatureCalloutProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  align?: "left" | "right";
};

export default function FeatureCallout({
  icon,
  title,
  description,
  className = "",
  align = "left",
}: FeatureCalloutProps) {
  return (
    <div className={`absolute hidden max-w-[170px] flex-col gap-2.5 xl:flex ${className}`}>
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-[0_2px_12px_rgba(0,0,0,0.6)] backdrop-blur-md ${
          align === "right" ? "self-end" : ""
        }`}
      >
        {icon}
      </span>
      <div className={align === "right" ? "text-right" : ""}>
        <h3 className="text-[15px] font-semibold text-white [text-shadow:_0_1px_10px_rgb(0_0_0_/_0.95)]">
          {title}
        </h3>
        <p className="mt-1 text-[13px] leading-snug text-white/75 [text-shadow:_0_1px_8px_rgb(0_0_0_/_0.95)]">
          {description}
        </p>
      </div>
    </div>
  );
}
