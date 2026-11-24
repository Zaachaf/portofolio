import type { ReactNode } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE } from "@/constants/profile";

const LINKED_TERM = "Universitas Pasundan";
const LINK_TARGET = "#education";

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

        <div className="grid items-start gap-12 md:grid-cols-5">
          <div className="flex justify-center md:col-span-2">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-accent/40 bg-surface">
              <Image
                src={PROFILE.photo}
                alt={`Photo of ${PROFILE.name}`}
                fill
                sizes="256px"
                className="object-cover object-top"
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

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-foreground">
              Skills
            </h3>
            <div className="mt-4 space-y-5">
              {PROFILE.skills.map((group) => (
                <div key={group.category}>
                  <h4 className="text-sm font-medium text-foreground">
                    {group.category}
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
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
        </div>
      </div>
    </section>
  );
}
