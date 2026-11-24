import SectionHeading from "@/components/ui/SectionHeading";
import TimelineCard from "@/components/ui/TimelineCard";
import { PROFILE } from "@/constants/profile";

const LIST_CLASS = "relative space-y-6 border-l border-border pl-8";
const SUBHEADING_CLASS =
  "mb-8 text-sm font-semibold uppercase tracking-widest text-foreground";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Journey" title="Experience & Training" />

        <h3 className={SUBHEADING_CLASS}>Work Experience</h3>
        <ol className={LIST_CLASS}>
          {PROFILE.experience.map((item) => (
            <TimelineCard
              key={`${item.organization}-${item.role}`}
              heading={item.role}
              subheading={item.organization}
              location={item.location}
              period={item.period}
              description={item.description}
              details={item.details}
              certificates={item.certificates}
              tags={item.tags}
            />
          ))}
        </ol>

        <h3 className={`${SUBHEADING_CLASS} mt-16`}>Training</h3>
        <ol className={LIST_CLASS}>
          {PROFILE.training?.map((item) => (
            <TimelineCard
              key={`${item.provider}-${item.title}`}
              heading={item.title}
              subheading={item.provider}
              location={item.location}
              period={item.period}
              description={item.description}
              details={item.details}
              certificates={item.certificates}
              tags={item.tags}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
