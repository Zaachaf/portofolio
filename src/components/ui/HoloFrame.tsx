"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

interface HoloFrameProps {
  children: ReactNode;
  className?: string;
  tiltMax?: number;
}

export default function HoloFrame({
  children,
  className = "",
  tiltMax = 5,
}: HoloFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);

  const setVars = (vars: Record<string, string>): void => {
    const el = ref.current;
    if (!el) return;
    for (const [key, value] of Object.entries(vars)) {
      el.style.setProperty(key, value);
    }
  };

  const handleMove = (event: PointerEvent<HTMLDivElement>): void => {
    if (event.pointerType !== "mouse") return;
    // Abaikan event dari pop-up (portal) yang bukan bagian kartu
    if (!event.currentTarget.contains(event.target as Node)) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() =>
      setVars({
        "--mx": `${(px * 100).toFixed(1)}%`,
        "--my": `${(py * 100).toFixed(1)}%`,
        "--rx": `${((0.5 - py) * tiltMax * 2).toFixed(2)}deg`,
        "--ry": `${((px - 0.5) * tiltMax * 2).toFixed(2)}deg`,
      }),
    );
  };

  const handleLeave = (): void => {
    cancelAnimationFrame(frame.current);
    setVars({ "--rx": "0deg", "--ry": "0deg" });
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`group relative will-change-transform hover:border-accent/50 motion-reduce:!transform-none ${className}`}
      style={{
        transform:
          "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transition: "transform 150ms ease-out, border-color 300ms",
      }}
    >
      {children}

      {/* Foil holografik */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-60 motion-reduce:hidden"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 20%, rgba(99,102,241,0.35) 35%, rgba(56,189,248,0.30) 45%, rgba(236,72,153,0.30) 55%, rgba(250,204,21,0.25) 65%, transparent 80%)",
          backgroundSize: "220% 220%",
          backgroundPosition: "var(--mx, 50%) var(--my, 50%)",
        }}
      />

      {/* Kilau */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.14), transparent 45%)",
        }}
      />
    </div>
  );
}
