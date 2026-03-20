import { SectionHeading } from "@/components/section-heading";
import type { AboutContent } from "@/content/schema";

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-spacing">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <SectionHeading eyebrow="Profile" title={about.title} />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-foreground/70">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-[1.5rem] border border-border/80 bg-surface/74 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Core strengths</p>
            <ul className="mt-4 space-y-3">
              {about.highlights.map((highlight) => (
                <li key={highlight} className="border-t border-border/70 pt-3 text-sm leading-6 text-foreground/66 first:border-t-0 first:pt-0">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
