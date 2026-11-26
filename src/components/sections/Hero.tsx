"use client";

import { useRef } from "react";
import Button from "@/components/ui/Button";
import Crosshair from "@/components/ui/Crosshair";
import LetterGlitch from "@/components/ui/LetterGlitch";
import { PROFILE } from "@/constants/profile";
import Magnet from "@/components/ui/Magnet";
import ExternalLinks from "@/components/ui/ExternalLinks";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-background"
    >
      {/* Background LetterGlitch */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={["#ffffff", "#61dca3"]}
          glitchAmount={0.5}
          speed={1}
          flow={0.5}
          clickEffect="tear"
          baseColor="#ffffff"
          fontSize={14}
          spacing={0.6}
          density={0.9}
          baseOpacity={0.16}
          smooth
          edgeFade={0}
          centerFade={0}
          interactive
          cursorRadius={140}
          intro
          lightMode={false}
        />
      </div>

      {/* Crosshair Cursor */}
      <Crosshair
        containerRef={containerRef}
        color="#ffffff"
        targetEffect="lock"
        thickness={1}
        opacity={0.85}
        smoothing={0}
        showCoordinates
        lineStyle="solid"
        blendMode="normal"
        gap={0}
        fade={0}
        clickPulse
        hideCursor={false}
      />

      {/* Card Utama */}
      <div className="container-page pointer-events-none relative z-10 flex min-h-screen items-end pb-16 pt-16">
        <div className="pointer-events-auto w-full rounded-2xl border border-white/15 bg-[#0b0b0d]/90 p-8 text-left backdrop-blur-md sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to new opportunities
          </span>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m {PROFILE.name}.
            <span className="mt-2 block bg-gradient-to-r from-accent-soft to-accent bg-clip-text text-transparent">
              {PROFILE.role}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {PROFILE.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            <Magnet>
              <Button href="#experience">View Experience</Button>
            </Magnet>
            <Magnet>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </Magnet>
          </div>

          <div className="mt-8">
            <ExternalLinks links={PROFILE.socials} />
          </div>
        </div>
      </div>
    </section>
  );
}
