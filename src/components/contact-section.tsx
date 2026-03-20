import { SectionHeading } from "@/components/section-heading";
import type { ContactContent, SocialLink } from "@/content/schema";

type ContactSectionProps = {
  contact: ContactContent;
  socialLinks: SocialLink[];
  resumeHref: string;
};

export function ContactSection({ contact, socialLinks, resumeHref }: ContactSectionProps) {
  return (
    <section id="contact" className="section-spacing pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-border/80 bg-surface/78 p-6 shadow-soft sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
            <SectionHeading eyebrow="Connect" title={contact.title} description={contact.body} />
            <div className="space-y-5">
              <div className="space-y-3 text-sm leading-7 text-foreground/68">
                <p>
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  <a href={`mailto:${contact.email}`} className="transition duration-300 hover:text-accent">
                    {contact.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Location:</span> {contact.location}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Availability:</span> {contact.availability}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition duration-300 hover:opacity-90"
                >
                  Contact Tom
                </a>
                <a
                  href={resumeHref}
                  download
                  className="inline-flex h-11 items-center justify-center rounded-full border border-border/90 bg-background/55 px-5 text-sm font-semibold text-foreground transition duration-300 hover:border-accent/40"
                >
                  Download resume
                </a>
              </div>
              <div className="flex flex-wrap gap-4 pt-1 text-sm text-foreground/64">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} className="transition duration-300 hover:text-foreground">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
