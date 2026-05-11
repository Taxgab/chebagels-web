"use client";

import { useEffect, useState, useRef } from "react";

const STATS = [
  { value: 50, suffix: "K+", label: "Seguidores" },
  { value: 300, suffix: "K", label: "Alcance mensual" },
  { value: 5, suffix: "+", label: "Anos de historia" },
  { value: 3, suffix: "", label: "Locales" },
];

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration, start]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-flame">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-ink/50 font-medium">{label}</div>
    </div>
  );
}

export default function SocialProof() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-20 bg-cream border-y border-warm-gray/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
