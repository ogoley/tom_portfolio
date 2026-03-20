import { SectionHeading } from "@/components/section-heading";
import type { ProjectItem } from "@/content/schema";

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-spacing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Strategic Focus"
          title="Selected Initiatives"
          description="Examples of the kind of advisor support, territory discipline, and retirement plan business development work Tom is positioned to lead."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="animate-enter rounded-[1.5rem] border border-border/80 bg-surface/72 p-5 shadow-soft"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex h-full flex-col">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                  <p className="text-sm leading-6 text-foreground/68">{project.description}</p>
                  <p className="text-sm leading-6 text-foreground/58">{project.impact}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-foreground/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  className="mt-6 text-sm font-semibold text-accent transition duration-300 hover:opacity-70"
                >
                  Case study placeholder
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
