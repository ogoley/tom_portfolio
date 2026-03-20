import { SectionHeading } from "@/components/section-heading";
import type { SkillGroup } from "@/content/schema";

type SkillsSectionProps = {
  skills: SkillGroup[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="section-spacing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Core Strengths"
          description="A concise summary of the retirement-plan, relationship, and execution strengths that define Tom's approach."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={group.title}
              className="animate-enter rounded-[1.5rem] border border-border/80 bg-surface/72 p-5"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-foreground/68">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
