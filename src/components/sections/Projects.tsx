import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE } from "@/constants/profile";
import { getGalleryImages } from "@/lib/gallery";
import type { ProjectItem } from "@/types";

function withGallery(project: ProjectItem): ProjectItem {
  if (project.images || !project.galleryFolder) return project;
  return { ...project, images: getGalleryImages(project.galleryFolder) };
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Work" title="Projects" />

        {PROFILE.projects.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border p-10 text-center text-muted">
            Projects coming soon.
          </p>
        ) : (
          <ul className="space-y-8">
            {PROFILE.projects.map((project) => (
              <ProjectCard key={project.title} project={withGallery(project)} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
