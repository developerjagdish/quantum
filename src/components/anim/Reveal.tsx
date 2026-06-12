"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  trigger?: "scroll" | "load";
  stagger?: boolean;
  delay?: number;
  y?: number;
  duration?: number;
};

export default function Reveal({
  children,
  className,
  as: Tag = "div",
  trigger = "scroll",
  stagger = false,
  delay = 0,
  y = 28,
  duration = 0.85,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? Array.from(el.children) : el;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.12 : 0,
          ...(trigger === "scroll"
            ? { scrollTrigger: { trigger: el, start: "top 85%", once: true } }
            : {}),
        }
      );
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
