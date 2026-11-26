"use client";

import { useRef } from "react";
import Button from "@/components/ui/Button";
import LaserFlow from "@/components/ui/LaserFlow";
import { PROFILE } from "@/constants/profile";
import Magnet from "@/components/ui/Magnet";
import ExternalLinks from "@/components/ui/ExternalLinks";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <LaserFlow
          surfaceRef={cardRef}
          beamPosition={0.25} // Coba di kisaran 0.22 - 0.28 sampai pas di antara logo & Home
          color="#6366f1"
          intensity={1.8}
          flare={1.5}
          spread={1.5}
          spill={1}
          fog={0.2}
          dust={1.6}
          beamWidth={1.5}
          streaks={1.5}
          dots={1}
          pulse={1.5}
          speed={1.5}
          mouseInteraction
          intro
        />
      </div>

      <div className="container-page relative z-10 flex min-h-screen items-end pb-16 pt-16">
        <div
          ref={cardRef}
          className="w-full rounded-2xl border border-border bg-[#0b0b0d] p-8 text-left sm:p-10"
        >
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
