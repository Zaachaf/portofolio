import Badge from "@/components/ui/Badge";
import CertificateButton from "@/components/ui/CertificateButton";
import HoloFrame from "@/components/ui/HoloFrame";
import type { CertificateItem, ExperienceDetail } from "@/types";

interface TimelineCardProps {
  heading: string;
  subheading: string;
  location?: string;
  period?: string;
  description?: readonly string[];
  details?: readonly ExperienceDetail[];
  certificates?: readonly CertificateItem[];
  tags?: readonly string[];
}

export default function TimelineCard({
  heading,
  subheading,
  location,
  period,
  description,
  details,
  certificates,
  tags,
}: TimelineCardProps) {
  return (
    <li className="relative">
      <span
        aria-hidden
        className="absolute -left-[41px] top-7 h-3 w-3 rounded-full border-2 border-background bg-accent"
      />

      <HoloFrame className="rounded-xl border border-border bg-surface p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-accent-soft">{heading}</p>
            <p className="text-foreground">{subheading}</p>
          </div>
          {period && (
            <span className="shrink-0 text-sm text-muted">{period}</span>
          )}
        </div>

        {location && <p className="mt-1 text-sm text-muted">{location}</p>}

        {description && description.length > 0 && (
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
            {description.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}

        {details && details.length > 0 && (
          <div className="mt-6 space-y-6">
            {details.map((detail, index) => (
              <div key={detail.title}>
                <h4 className="font-semibold text-foreground">
                  {index + 1}. {detail.title}
                </h4>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                  {detail.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {certificates && certificates.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-foreground">
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
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        )}
      </HoloFrame>
    </li>
  );
}
