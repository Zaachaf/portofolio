import Badge from "@/components/ui/Badge";
import CertificateButton from "@/components/ui/CertificateButton";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
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

  return (
    <li className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/50">
      {/* Gambar di atas */}
      <div className="border-b border-border bg-background/50 p-4">
        {images && images.length > 0 ? (
          <ProjectCarousel images={images} title={title} />
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
