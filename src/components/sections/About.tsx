import type { ReactNode } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE } from "@/constants/profile";
import TechLoop from "@/components/sections/TechLoop";

const LINKED_TERM = "Universitas Pasundan";
const LINK_TARGET = "#education";

// 6 kategori → 3 baris × 2 kolom (3 di kiri, 3 di kanan)
const SKILL_ROWS = Math.ceil(PROFILE.skills.length / 2);

function withEducationLink(text: string): ReactNode {
  const index = text.indexOf(LINKED_TERM);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <a
        href={LINK_TARGET}
        className="text-accent-soft underline-offset-4 transition-colors hover:text-accent hover:underline"
      >
        {LINKED_TERM}
      </a>
      {text.slice(index + LINKED_TERM.length)}
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="container-page">
        <SectionHeading eyebrow="About me" title="Get to know me" />

        {/* Photo + bio */}
        <div className="grid items-center gap-12 md:grid-cols-5">
          <div className="flex justify-center md:col-span-2">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-accent/40 bg-surface">
              <Image
                src={PROFILE.photo}
                alt={`Photo of ${PROFILE.name}`}
                fill
                sizes="256px"
                className="object-cover object-[45%_35%] scale-[1.5]"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-accent-soft to-accent bg-clip-text text-transparent">
                {PROFILE.degree}
              </span>
            </p>

            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              {PROFILE.bio.map((paragraph) => (
                <p key={paragraph}>{withEducationLink(paragraph)}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Skills: dua kolom, baris sejajar, tanpa kotak */}
        <div className="mt-20">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-foreground">
            Skills
          </h3>

          <div
            className="mt-10 grid gap-x-16 gap-y-10 md:grid-flow-col md:grid-cols-2"
            style={{ gridTemplateRows: `repeat(${SKILL_ROWS}, auto)` }}
          >
            {PROFILE.skills.map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-semibold text-accent-soft">
                  {group.category}
                </h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-foreground">
            Tools &amp; Technologies
          </h3>
          <TechLoop />
        </div>
      </div>
    </section>
  );
}
