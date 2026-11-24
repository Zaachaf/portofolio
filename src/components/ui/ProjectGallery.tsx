"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ProjectGalleryProps {
  images: readonly string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const total = images.length;

  const close = useCallback((): void => setActive(null), []);
  const prev = useCallback(
    (): void => setActive((i) => (i === null ? i : (i - 1 + total) % total)),
    [total],
  );
  const next = useCallback(
    (): void => setActive((i) => (i === null ? i : (i + 1) % total)),
    [total],
  );

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  if (total === 0) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setActive(0)}
        aria-label={`Open ${title} gallery`}
        className="group relative block aspect-video w-full overflow-hidden rounded-lg border border-border bg-background"
      >
        <Image
          src={images[0]}
          alt={`${title} cover`}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          View gallery ({total})
        </span>
      </button>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full overflow-hidden rounded-xl border border-border bg-background">
              <Image
                src={images[active]}
                alt={`${title} screenshot ${active + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-muted">
              <span>
                {active + 1} / {total}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="rounded-lg border border-border px-4 py-2 text-foreground transition-colors hover:border-accent hover:text-accent-soft"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="rounded-lg border border-border px-4 py-2 text-foreground transition-colors hover:border-accent hover:text-accent-soft"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg bg-accent px-4 py-2 font-medium text-white transition-colors hover:bg-accent-soft"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
