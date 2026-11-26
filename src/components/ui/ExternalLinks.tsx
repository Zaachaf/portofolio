"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { SocialLink } from "@/types";

const HOVER_COLORS: Record<string, string> = {
  Email: "#ea4335",
  Instagram: "#e1306c",
  WhatsApp: "#25d366",
  LinkedIn: "#0a66c2",
};

const FALLBACK_COLOR = "#6366f1";
const TILTS: readonly number[] = [-5, 4, -3, 5];

interface ExternalLinksProps {
  links: readonly SocialLink[];
  label?: string;
}

export default function ExternalLinks({
  links,
  label = "Social Links",
}: ExternalLinksProps) {
  const [open, setOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent): void => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-soft"
      >
        {label}
        <span aria-hidden>{open ? "×" : "↗"}</span>
      </button>

      {open && (
        <ul className="flex flex-wrap items-center gap-3">
          {links.map((link, index) => {
            const external = link.href.startsWith("http");

            return (
              <li
                key={link.label}
                className="bubble-in"
                style={
                  {
                    "--tilt": `${TILTS[index % TILTS.length]}deg`,
                    "--delay": `${index * 70}ms`,
                  } as CSSProperties
                }
              >
                <a
                  href={link.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  style={
                    {
                      "--hover": HOVER_COLORS[link.label] ?? FALLBACK_COLOR,
                    } as CSSProperties
                  }
                  className="inline-block rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-[var(--hover)] hover:text-white"
                >
                  {link.label} {external ? "↗" : ""}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
