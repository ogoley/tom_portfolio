import { SectionHeading } from "@/components/section-heading";
import type { ExperienceItem } from "@/content/schema";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-spacing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resume"
          title="Experience"
          description="A concise view of Tom's recent roles, territory-facing responsibilities, and professional focus."
        />
        <div className="mt-8 space-y-4">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className="animate-enter rounded-[1.5rem] border border-border/80 bg-surface/72 p-5 shadow-soft"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="grid gap-5 lg:grid-cols-[0.32fr_0.68fr]">
                <div className="space-y-1.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">{item.period}</p>
                  <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
                  <p className="text-sm text-foreground/70">{item.company}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-foreground/56">{item.location}</p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-foreground/70">{item.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm leading-6 text-foreground/66">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
