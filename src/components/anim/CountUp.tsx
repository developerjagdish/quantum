"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const NUM_RE = /^([^0-9-]*)([0-9][0-9,]*\.?[0-9]*)(.*)$/;

export default function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(NUM_RE);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !match) return;

      const prefix = match[1];
      const numStr = match[2];
      const suffix = match[3];
      const hasComma = numStr.includes(",");
      const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
      const target = parseFloat(numStr.replace(/,/g, ""));
      const obj = { v: 0 };

      gsap.to(obj, {
        v: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate() {
          let s =
            decimals > 0 ? obj.v.toFixed(decimals) : Math.round(obj.v).toString();
          if (hasComma) s = Number(s).toLocaleString("en-US");
          el.textContent = prefix + s + suffix;
        },
      });
    },
    { scope: ref }
  );

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {match[1]}0{match[3]}
    </span>
  );
}
