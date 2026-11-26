"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  /** Jarak aktif di luar elemen, dalam px */
  padding?: number;
  /** Seberapa kuat elemen ditarik ke kursor (0.1 = halus, 0.5 = kuat) */
  pull?: number;
  /** Jarak geser maksimum, dalam px. Dua kali nilai ini harus lebih kecil dari jarak antar tombol */
  maxShift?: number;
  className?: string;
}

export default function Magnet({
  children,
  padding = 40,
  pull = 0.3,
  maxShift = 8,
  className = "",
}: MagnetProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let listening = false;

    const reset = (): void => {
      inner.style.transform = "";
    };

    const onMove = (event: PointerEvent): void => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        // Diukur dari pembungkus luar yang diam, bukan dari elemen yang bergeser
        const rect = outer.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        const near =
          Math.abs(dx) < rect.width / 2 + padding &&
          Math.abs(dy) < rect.height / 2 + padding;

        if (!near) {
          reset();
          return;
        }

        // Tarikan dibatasi agar tidak pernah menabrak tombol di sebelahnya
        let shiftX = dx * pull;
        let shiftY = dy * pull;
        const length = Math.hypot(shiftX, shiftY);
        if (length > maxShift) {
          const scale = maxShift / length;
          shiftX *= scale;
          shiftY *= scale;
        }

        inner.style.transform = `translate3d(${shiftX.toFixed(1)}px, ${shiftY.toFixed(1)}px, 0)`;
      });
    };

    const start = (): void => {
      if (listening) return;
      listening = true;
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("mouseleave", reset);
    };

    const stop = (): void => {
      if (!listening) return;
      listening = false;
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", reset);
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      reset();
    };

    // Listener hanya aktif saat tombol ada di (atau dekat) layar
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: `${padding}px` },
    );
    observer.observe(outer);

    return () => {
      observer.disconnect();
      stop();
    };
  }, [padding, pull, maxShift]);

  return (
    <div ref={outerRef} className={`inline-block ${className}`}>
      <div
        ref={innerRef}
        className="block will-change-transform [transition:transform_250ms_cubic-bezier(0.22,1,0.36,1)]"
      >
        {children}
      </div>
    </div>
  );
}
