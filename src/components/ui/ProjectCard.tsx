"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import CertificateButton from "@/components/ui/CertificateButton";
import PixelSwap from "@/components/ui/PixelSwap"; // Sesuaikan jika tersimpan di "@/components/PixelSwap"
import type { ProjectItem } from "@/types";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    images,
    period,
    tags,
    featuresTitle = "Key Features",
    features,
    certificates,
    links,
  } = project;

  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleImages = images && images.length > 1;
  const nextIndex = images ? (currentIndex + 1) % images.length : 0;

  const handleNext = () => {
    if (!images || images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (!images || images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <li className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/50">
      {/* Gambar di atas */}
      <div className="border-b border-border bg-background/50 p-4">
        {images && images.length > 0 ? (
          <div className="flex flex-col">
            {/* Kotak pembungkus punya lebar & tinggi pasti agar PixelSwap tidak 0px */}
            <div className="relative h-[260px] w-full overflow-hidden rounded-lg bg-black/20 sm:h-[400px]">
              {hasMultipleImages ? (
                <PixelSwap
                  key={currentIndex}
                  className="h-full w-full"
                  firstContent={
                    <div className="flex h-full w-full items-center justify-center">
                      <img
                        src={images[currentIndex]}
                        alt={`${title} - ${currentIndex + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  }
                  secondContent={
                    <div className="flex h-full w-full items-center justify-center">
                      <img
                        src={images[nextIndex]}
                        alt={`${title} - ${nextIndex + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  }
                  pattern="pointer"
                  pixelSize={48}
                  pixelRadius={0}
                  duration={400}
                  pixelDuration={350}
                  randomness={0.2}
                  bounce={0.3}
                  trigger="click"
                  style={{ width: "100%", height: "100%", borderRadius: 8 }}
                  gap={0}
                  pixelScale={0}
                  pixelSpin={0}
                  intro
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={images[0]}
                    alt={title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Kontrol Navigasi & Indikator jika foto lebih dari 1 */}
            {hasMultipleImages && (
              <div className="mt-4 flex w-full items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Lihat foto ${idx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? "w-6 bg-accent"
                          : "w-2 bg-border hover:bg-muted"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted">
                    {currentIndex + 1} / {images.length}
                  </span>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent/50"
                  >
                    ← Prev
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent/50"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-[200px] items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-transparent">
            <span className="text-5xl font-bold text-accent-soft/60">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Teks di bawah */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            {title}
          </h3>
          {period && (
            <span className="shrink-0 text-sm text-muted">{period}</span>
          )}
        </div>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>

        {features && features.length > 0 && (
          <>
            <h4 className="mt-8 text-sm font-semibold uppercase tracking-widest text-foreground">
              {featuresTitle}
            </h4>
            <ul className="mt-4 grid gap-x-10 gap-y-4 text-sm leading-relaxed text-muted md:grid-cols-2">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>
                    <strong className="font-medium text-foreground">
                      {feature.title}:
                    </strong>{" "}
                    {feature.description}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        {certificates && certificates.length > 0 && (
          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Certificates
            </h4>
            <div className="mt-3 flex flex-wrap gap-3">
              {certificates.map((certificate) => (
                <CertificateButton
                  key={certificate.file}
                  certificate={certificate}
                />
              ))}
            </div>
          </div>
        )}

        {tags && tags.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        )}

        {links && links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-soft transition-colors hover:text-accent"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
