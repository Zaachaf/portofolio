import Image from "next/image";
import CrystalizedBall from "@/components/ui/CrystalizedBall";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE } from "@/constants/profile";

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="space-y-16">
          {PROFILE.education.map((item) => (
            <div
              key={item.institution}
              className="grid items-center gap-12 md:grid-cols-5"
            >
              {/* Logo di atas bola kristal */}
              <div className="flex justify-center md:col-span-2">
                <div className="relative h-64 w-64">
                  {/* Lapisan belakang: bola kristal */}
                  <div className="absolute inset-0">
                    <CrystalizedBall
                      preset="plasma"
                      color="#b28b1b"
                      size={1}
                      crackle={0.85}
                      fill={0.5}
                      interactive
                      hoverStrength={0.7}
                      strands={6}
                      flares={0.65}
                      glow={0.9}
                      sparks={0.6}
                      particleCount={8000}
                      motion="rise"
                      particleShape="square"
                      depth={0.6}
                      sway={0.5}
                      twinkle={0.5}
                      haze={0.7}
                      dustSpeed={1}
                      speed={1}
                      intro
                      paused={false}
                    />
                  </div>

                  {/* Lapisan depan: logo */}
                  {item.logo ? (
                    <div className="pointer-events-none relative z-10 flex h-full w-full items-center justify-center p-8">
                      <Image
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        width={500}
                        height={500}
                        className="h-full w-full object-contain drop-shadow-lg"
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="md:col-span-3">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-r from-accent-soft to-accent bg-clip-text text-transparent">
                    {item.institution}
                  </span>
                </p>
                <p className="mt-4 text-lg text-foreground">{item.major}</p>
                <p className="mt-1 text-muted">{item.gpa}</p>
                <p className="mt-1 text-sm text-muted">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
