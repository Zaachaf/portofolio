import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE } from "@/constants/profile";

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Pendidikan" title="Latar belakang akademik" />

        <div className="space-y-16">
          {PROFILE.education.map((item) => (
            <div
              key={item.institution}
              className="grid items-center gap-12 md:grid-cols-5"
            >
              {/* Tempat logo universitas */}
              <div className="flex justify-center md:col-span-2">
                <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border bg-surface p-8">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={`Logo ${item.institution}`}
                      width={200}
                      height={200}
                      className="h-full w-full object-contain"
                    />
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
